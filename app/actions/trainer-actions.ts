"use server"

import { createServerActionClient } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function getTrainerCourses(trainerId: string) {
  try {
    const supabase = createServerActionClient()

    const { data, error } = await supabase
      .from("courses")
      .select(`
        *,
        course_sessions (
          id,
          session_date,
          start_time,
          end_time,
          max_attendees
        ),
        enrollments (
          id
        )
      `)
      .eq("trainer_id", trainerId)

    if (error) {
      console.error("Error fetching trainer courses:", error)
      return { success: false, message: "Failed to fetch courses", data: null }
    }

    // Count enrollments for each course
    const coursesWithEnrollmentCount = data.map((course) => ({
      ...course,
      enrollment_count: course.enrollments ? course.enrollments.length : 0,
    }))

    return { success: true, data: coursesWithEnrollmentCount }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred", data: null }
  }
}

export async function getTrainerReviews(trainerId: string) {
  try {
    const supabase = createServerActionClient()

    // First get all courses by this trainer
    const { data: courses, error: coursesError } = await supabase
      .from("courses")
      .select("id")
      .eq("trainer_id", trainerId)

    if (coursesError) {
      console.error("Error fetching trainer courses:", coursesError)
      return { success: false, message: "Failed to fetch courses", data: null }
    }

    const courseIds = courses.map((course) => course.id)

    // Then get all reviews for these courses
    const { data: reviews, error: reviewsError } = await supabase
      .from("reviews")
      .select(`
        *,
        users (
          id,
          name
        ),
        courses (
          id,
          title
        )
      `)
      .in("course_id", courseIds)
      .order("created_at", { ascending: false })

    if (reviewsError) {
      console.error("Error fetching reviews:", reviewsError)
      return { success: false, message: "Failed to fetch reviews", data: null }
    }

    return { success: true, data: reviews }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred", data: null }
  }
}

export async function respondToReview(reviewId: string, response: string) {
  try {
    const supabase = createServerActionClient()

    const { error } = await supabase
      .from("reviews")
      .update({
        trainer_response: response,
        updated_at: new Date().toISOString(),
      })
      .eq("id", reviewId)

    if (error) {
      console.error("Error responding to review:", error)
      return { success: false, message: "Failed to respond to review" }
    }

    revalidatePath(`/dashboard/trainer`)

    return { success: true, message: "Response submitted successfully" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

export async function createCourse(courseData: any, trainerId: string) {
  try {
    const supabase = createServerActionClient()

    // Insert course
    const { data: course, error: courseError } = await supabase
      .from("courses")
      .insert({
        title: courseData.title,
        description: courseData.description,
        trainer_id: trainerId,
        duration: courseData.duration,
        format: courseData.format,
        price: courseData.price,
        image_url: courseData.image_url,
        status: courseData.status || "draft",
      })
      .select()
      .single()

    if (courseError) {
      console.error("Error creating course:", courseError)
      return { success: false, message: "Failed to create course", data: null }
    }

    // Insert course sessions if provided
    if (courseData.sessions && courseData.sessions.length > 0) {
      const sessions = courseData.sessions.map((session: any) => ({
        course_id: course.id,
        session_date: session.date,
        start_time: session.startTime,
        end_time: session.endTime,
        max_attendees: session.maxAttendees,
      }))

      const { error: sessionsError } = await supabase.from("course_sessions").insert(sessions)

      if (sessionsError) {
        console.error("Error creating course sessions:", sessionsError)
        return {
          success: true,
          message: "Course created successfully, but session creation failed",
          data: course,
        }
      }
    }

    revalidatePath(`/dashboard/trainer`)

    return { success: true, message: "Course created successfully", data: course }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred", data: null }
  }
}

export async function updateCourse(courseId: string, courseData: any) {
  try {
    const supabase = createServerActionClient()

    // Update course
    const { error: courseError } = await supabase
      .from("courses")
      .update({
        title: courseData.title,
        description: courseData.description,
        duration: courseData.duration,
        format: courseData.format,
        price: courseData.price,
        image_url: courseData.image_url,
        status: courseData.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", courseId)

    if (courseError) {
      console.error("Error updating course:", courseError)
      return { success: false, message: "Failed to update course" }
    }

    // Handle sessions - first delete existing sessions
    if (courseData.sessions) {
      const { error: deleteError } = await supabase.from("course_sessions").delete().eq("course_id", courseId)

      if (deleteError) {
        console.error("Error deleting existing sessions:", deleteError)
        return { success: true, message: "Course updated, but session update failed" }
      }

      // Then insert new sessions
      if (courseData.sessions.length > 0) {
        const sessions = courseData.sessions.map((session: any) => ({
          course_id: courseId,
          session_date: session.date,
          start_time: session.startTime,
          end_time: session.endTime,
          max_attendees: session.maxAttendees,
        }))

        const { error: sessionsError } = await supabase.from("course_sessions").insert(sessions)

        if (sessionsError) {
          console.error("Error creating new sessions:", sessionsError)
          return { success: true, message: "Course updated, but session update failed" }
        }
      }
    }

    revalidatePath(`/courses/${courseId}`)
    revalidatePath(`/dashboard/trainer`)

    return { success: true, message: "Course updated successfully" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}
