import { NextResponse } from 'next/server'
import { createServerActionClient } from "@/lib/db"

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function GET() {
  try {
    const supabase = createServerActionClient()
    
    const { data, error } = await supabase
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

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data || [])
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
