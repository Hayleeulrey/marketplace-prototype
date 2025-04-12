"use server"

import { createServerActionClient } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function enrollInCourse(courseId: string, userId: string) {
  try {
    const supabase = createServerActionClient()

    // Check if user is already enrolled
    const { data: existingEnrollment, error: checkError } = await supabase
      .from("enrollments")
      .select("*")
      .eq("course_id", courseId)
      .eq("user_id", userId)
      .maybeSingle()

    if (checkError) {
      console.error("Error checking enrollment:", checkError)
      return { success: false, message: "Failed to check enrollment status" }
    }

    if (existingEnrollment) {
      return { success: false, message: "You are already enrolled in this course" }
    }

    // Create enrollment
    const { error: enrollError } = await supabase.from("enrollments").insert({
      course_id: courseId,
      user_id: userId,
      enrolled_at: new Date().toISOString(),
      completed: false,
      progress: 0,
    })

    if (enrollError) {
      console.error("Error enrolling in course:", enrollError)
      return { success: false, message: "Failed to enroll in course" }
    }

    // Create payment record
    const { data: course, error: courseError } = await supabase
      .from("courses")
      .select("price")
      .eq("id", courseId)
      .single()

    if (courseError) {
      console.error("Error fetching course price:", courseError)
      return { success: true, message: "Enrolled successfully, but payment record creation failed" }
    }

    const { error: paymentError } = await supabase.from("payments").insert({
      user_id: userId,
      course_id: courseId,
      amount: course.price || 0,
      payment_status: "completed",
      paid_at: new Date().toISOString(),
    })

    if (paymentError) {
      console.error("Error creating payment record:", paymentError)
      return { success: true, message: "Enrolled successfully, but payment record creation failed" }
    }

    revalidatePath(`/courses/${courseId}`)
    revalidatePath(`/dashboard/learner`)

    return { success: true, message: "Successfully enrolled in course" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

export async function saveCourse(courseId: string, userId: string) {
  try {
    const supabase = createServerActionClient()

    // Check if course is already saved
    const { data: existingSaved, error: checkError } = await supabase
      .from("saved_courses")
      .select("*")
      .eq("course_id", courseId)
      .eq("user_id", userId)
      .maybeSingle()

    if (checkError) {
      console.error("Error checking saved course:", checkError)
      return { success: false, message: "Failed to check saved status" }
    }

    if (existingSaved) {
      // Remove from saved courses
      const { error: removeError } = await supabase.from("saved_courses").delete().eq("id", existingSaved.id)

      if (removeError) {
        console.error("Error removing saved course:", removeError)
        return { success: false, message: "Failed to remove from saved courses" }
      }

      revalidatePath(`/courses/${courseId}`)
      revalidatePath(`/dashboard/learner`)

      return { success: true, message: "Course removed from saved courses" }
    }

    // Add to saved courses
    const { error: saveError } = await supabase.from("saved_courses").insert({
      course_id: courseId,
      user_id: userId,
      saved_at: new Date().toISOString(),
    })

    if (saveError) {
      console.error("Error saving course:", saveError)
      return { success: false, message: "Failed to save course" }
    }

    revalidatePath(`/courses/${courseId}`)
    revalidatePath(`/dashboard/learner`)

    return { success: true, message: "Course saved successfully" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

export async function submitReview(courseId: string, userId: string, rating: number, comment: string) {
  try {
    const supabase = createServerActionClient()

    // Check if user has already reviewed this course
    const { data: existingReview, error: checkError } = await supabase
      .from("reviews")
      .select("*")
      .eq("course_id", courseId)
      .eq("user_id", userId)
      .maybeSingle()

    if (checkError) {
      console.error("Error checking review:", checkError)
      return { success: false, message: "Failed to check review status" }
    }

    if (existingReview) {
      // Update existing review
      const { error: updateError } = await supabase
        .from("reviews")
        .update({
          rating,
          comment,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingReview.id)

      if (updateError) {
        console.error("Error updating review:", updateError)
        return { success: false, message: "Failed to update review" }
      }

      revalidatePath(`/courses/${courseId}`)

      return { success: true, message: "Review updated successfully" }
    }

    // Create new review
    const { error: reviewError } = await supabase.from("reviews").insert({
      course_id: courseId,
      user_id: userId,
      rating,
      comment,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

    if (reviewError) {
      console.error("Error submitting review:", reviewError)
      return { success: false, message: "Failed to submit review" }
    }

    revalidatePath(`/courses/${courseId}`)

    return { success: true, message: "Review submitted successfully" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}
