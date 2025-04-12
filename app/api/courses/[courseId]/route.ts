import { NextResponse } from 'next/dist/server/web/spec-extension/response'
import { createServerActionClient } from "@/lib/db"

export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const supabase = createServerActionClient()
    
    const { data: course, error } = await supabase
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
          id,
          rating,
          comment
        )
      `)
      .eq("id", params.courseId)
      .single()

    if (error) {
      console.error("Error fetching course:", error)
      return NextResponse.json(
        { error: "Failed to fetch course details", details: error.message },
        { status: 500 }
      )
    }

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(course)
  } catch (error) {
    console.error("Unexpected error in course details API:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred", details: String(error) },
      { status: 500 }
    )
  }
} 