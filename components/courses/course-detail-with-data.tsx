"use client"

import { useEffect, useState } from "react"
import { TrainingHeader } from "./training-header"
import { TrainerPreview } from "./trainer-preview"
import { TrainingDescription } from "./training-description"
import { Agenda } from "./agenda"
import { ReviewsSection } from "./reviews-section"
import { RegisterButton } from "./register-button"
import { Skeleton } from "@/components/ui/skeleton"

type CourseDetail = {
  id: string
  title: string
  description: string
  trainer_id: string
  duration: string
  format: string
  price: number
  image_url: string
  status: string
  created_at: string
  updated_at: string
  users: {
    id: string
    name: string
    email: string
  }
  trainer_profiles: {
    bio: string
    profile_image_url: string
    areas_of_expertise: string[]
  }
  course_sessions: {
    id: string
    session_date: string
    start_time: string
    end_time: string
    max_attendees: number
  }[]
  reviews: any[]
  average_rating: number
  reviews_count: number
  enrollment_count: number
}

export function CourseDetailWithData({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<CourseDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/courses/${courseId}`)

        if (!response.ok) {
          throw new Error("Failed to fetch course details")
        }

        const data = await response.json()
        setCourse(data)
      } catch (err) {
        setError("Error loading course details. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourseDetail()
  }, [courseId])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <Skeleton className="h-10 w-3/4 mb-2" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-24 rounded-lg" />
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2 space-y-8">
                <Skeleton className="h-64 rounded-lg" />
                <Skeleton className="h-64 rounded-lg" />
                <Skeleton className="h-96 rounded-lg" />
              </div>
              <div className="space-y-6">
                <Skeleton className="h-64 rounded-lg" />
                <Skeleton className="h-48 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error || "Course not found"}</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary text-white rounded-md">
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <TrainingHeader course={course} />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <TrainingDescription description={course.description} />
            <Agenda />
            <ReviewsSection
              courseId={course.id}
              reviews={course.reviews}
              averageRating={course.average_rating}
              reviewCount={course.reviews_count}
            />
          </div>
          <div className="space-y-6">
            <TrainerPreview trainer={course.users} trainerProfile={course.trainer_profiles} />
            <RegisterButton course={course} />
          </div>
        </div>
      </div>
    </div>
  )
}
