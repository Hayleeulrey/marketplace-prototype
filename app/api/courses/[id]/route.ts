import { NextResponse } from "next/server"
import { createServerActionClient } from "@/lib/db"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const courseId = params.id
    const supabase = createServerActionClient()

    const { data: course, error: courseError } = await supabase
      .from("courses")
      .select(`
        *,
        users!trainer_id (
          id,
          name,
          email
        ),
        trainer_profiles!inner (
          bio,
          profile_image_url,
          areas_of_expertise
        ),
        course_sessions (
          id,
          session_date,
          start_time,
          end_time,
          max_attendees
        )
      `)
      .eq("id", courseId)
      .single()

    if (courseError) {
      console.error("Error fetching course:", courseError)
      return NextResponse.json({ error: "Failed to fetch course" }, { status: 500 })
    }

    // Get reviews for the course
    const { data: reviews, error: reviewsError } = await supabase
      .from("reviews")
      .select(`
        *,
        users (
          id,
          name
        )
      `)
      .eq("course_id", courseId)
      .order("created_at", { ascending: false })

    if (reviewsError) {
      console.error("Error fetching reviews:", reviewsError)
      return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
    }

    // Calculate average rating
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

    // Get enrollment count
    const { count: enrollmentCount, error: enrollmentError } = await supabase
      .from("enrollments")
      .select("*", { count: true, head: true })
      .eq("course_id", courseId)

    if (enrollmentError) {
      console.error("Error fetching enrollment count:", enrollmentError)
      return NextResponse.json({ error: "Failed to fetch enrollment count" }, { status: 500 })
    }

    return NextResponse.json({
      ...course,
      reviews,
      average_rating: averageRating,
      reviews_count: reviews.length,
      enrollment_count: enrollmentCount || 0,
    })
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
