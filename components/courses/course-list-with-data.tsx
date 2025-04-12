"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { CourseCard } from "./course-card"

type Course = {
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
  average_rating: number
  reviews_count: number
  next_session: {
    session_date: string
    start_time: string
  } | null
}

export function CourseListWithData() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("relevance")

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/courses")

        if (!response.ok) {
          throw new Error("Failed to fetch courses")
        }

        const data = await response.json()

        // Map specific course images based on title
        const coursesWithCustomImages = data.map((course: Course) => {
          let customImageUrl = course.image_url

          if (course.title.includes("Leadership Essentials")) {
            customImageUrl = "/leadership-team-meeting.png"
          } else if (course.title.includes("Supervisory Skills")) {
            customImageUrl = "/supervisor-coaching-session.png"
          } else if (course.title.includes("Effective Communication")) {
            customImageUrl = "/team-communication-workshop.png"
          }

          return {
            ...course,
            image_url: customImageUrl,
          }
        })

        setCourses(coursesWithCustomImages)
      } catch (err) {
        setError("Error loading courses. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  // Sort courses based on selected option
  const sortedCourses = [...courses].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.average_rating - a.average_rating
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">Loading courses...</p>
          <div className="w-[180px]">
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full h-64 rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">Showing {sortedCourses.length} results</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {sortedCourses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-500 mb-4">No courses found matching your criteria.</p>
            <Button asChild>
              <Link href="/courses">Clear Filters</Link>
            </Button>
          </div>
        ) : (
          sortedCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              trainer={course.users?.name || "Unknown Trainer"}
              duration={course.duration}
              format={course.format}
              date={course.next_session ? new Date(course.next_session.session_date).toLocaleDateString() : undefined}
              price={course.price}
              rating={course.average_rating}
              reviews={course.reviews_count}
              image={course.image_url || "/placeholder.svg"}
            />
          ))
        )}
      </div>

      {sortedCourses.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
