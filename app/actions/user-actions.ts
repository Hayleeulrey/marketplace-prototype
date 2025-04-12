"use server"

import { createServerActionClient } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function getUserEnrollments(userId: string) {
  try {
    const supabase = createServerActionClient()

    const { data, error } = await supabase
      .from("enrollments")
      .select(`
        *,
        courses (
          id,
          title,
          description,
          duration,
          format,
          price,
          image_url,
          users!trainer_id (
            id,
            name
          ),
          course_sessions (
            id,
            session_date,
            start_time,
            end_time
          )
        )
      `)
      .eq("user_id", userId)

    if (error) {
      console.error("Error fetching enrollments:", error)
      return { success: false, message: "Failed to fetch enrollments", data: null }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred", data: null }
  }
}

export async function getUserSavedCourses(userId: string) {
  try {
    const supabase = createServerActionClient()

    const { data, error } = await supabase
      .from("saved_courses")
      .select(`
        *,
        courses (
          id,
          title,
          description,
          duration,
          format,
          price,
          image_url,
          users!trainer_id (
            id,
            name
          ),
          course_sessions (
            id,
            session_date,
            start_time,
            end_time
          ),
          reviews (
            rating
          )
        )
      `)
      .eq("user_id", userId)

    if (error) {
      console.error("Error fetching saved courses:", error)
      return { success: false, message: "Failed to fetch saved courses", data: null }
    }

    // Calculate average rating for each course
    const savedCoursesWithRating = data.map((saved) => {
      const course = saved.courses
      const reviews = course.reviews || []
      const totalRating = reviews.reduce((sum: number, review: any) => sum + review.rating, 0)
      const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

      return {
        ...saved,
        courses: {
          ...course,
          average_rating: averageRating,
          reviews_count: reviews.length,
        },
      }
    })

    return { success: true, data: savedCoursesWithRating }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred", data: null }
  }
}

export async function getUserCertificates(userId: string) {
  try {
    const supabase = createServerActionClient()

    const { data, error } = await supabase
      .from("certificates")
      .select(`
        *,
        courses (
          id,
          title,
          users!trainer_id (
            id,
            name
          )
        )
      `)
      .eq("user_id", userId)

    if (error) {
      console.error("Error fetching certificates:", error)
      return { success: false, message: "Failed to fetch certificates", data: null }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred", data: null }
  }
}

export async function updateEnrollmentProgress(enrollmentId: string, progress: number) {
  try {
    const supabase = createServerActionClient()

    const { data: enrollment, error: fetchError } = await supabase
      .from("enrollments")
      .select("*")
      .eq("id", enrollmentId)
      .single()

    if (fetchError) {
      console.error("Error fetching enrollment:", fetchError)
      return { success: false, message: "Failed to fetch enrollment" }
    }

    // Update progress
    const { error: updateError } = await supabase
      .from("enrollments")
      .update({
        progress,
        completed: progress >= 100,
        completion_date: progress >= 100 ? new Date().toISOString() : null,
      })
      .eq("id", enrollmentId)

    if (updateError) {
      console.error("Error updating progress:", updateError)
      return { success: false, message: "Failed to update progress" }
    }

    // If completed, create certificate
    if (progress >= 100) {
      const { error: certificateError } = await supabase
        .from("certificates")
        .insert({
          user_id: enrollment.user_id,
          course_id: enrollment.course_id,
          issued_at: new Date().toISOString(),
          certificate_url: `/certificates/${enrollment.course_id}-${enrollment.user_id}.pdf`,
        })
        .select()

      if (certificateError) {
        console.error("Error creating certificate:", certificateError)
        return { success: true, message: "Progress updated, but certificate creation failed" }
      }
    }

    revalidatePath(`/dashboard/learner`)

    return { success: true, message: "Progress updated successfully" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}
