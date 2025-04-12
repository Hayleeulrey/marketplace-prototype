import { NextResponse } from "next/server"
import { createServerActionClient } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const format = searchParams.get("format")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const rating = searchParams.get("rating")

    const supabase = createServerActionClient()

    let query = supabase
      .from("courses")
      .select(`
        *,
        users!trainer_id (
          id,
          name,
          email
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
      `)
      .eq("status", "active")

    // Apply filters if provided
    if (category) {
      // In a real app, you'd have a categories table or field
      // This is just a placeholder for demonstration
      query = query.ilike("title", `%${category}%`)
    }

    if (format) {
      query = query.eq("format", format)
    }

    if (minPrice) {
      query = query.gte("price", minPrice)
    }

    if (maxPrice) {
      query = query.lte("price", maxPrice)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching courses:", error)
      return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 })
    }

    // Calculate average rating for each course
    const coursesWithRating = data
      .map((course) => {
        const reviews = course.reviews || []
        const totalRating = reviews.reduce((sum: number, review: any) => sum + review.rating, 0)
        const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

        // Filter by rating if provided
        if (rating && averageRating < Number.parseInt(rating)) {
          return null
        }

        return {
          ...course,
          average_rating: averageRating,
          reviews_count: reviews.length,
          next_session: course.course_sessions[0] || null,
        }
      })
      .filter(Boolean)

    return NextResponse.json(coursesWithRating)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
