import { getUserDetails } from "@/lib/get-session"
import { redirect } from "next/navigation"
import { getTrainerCourses, getTrainerReviews } from "@/app/actions/trainer-actions"

export default async function TrainerDashboard() {
  const userDetails = await getUserDetails()

  if (!userDetails || userDetails.role !== "trainer") {
    redirect("/dashboard")
  }

  const coursesResult = await getTrainerCourses(userDetails.id)
  const reviewsResult = await getTrainerReviews(userDetails.id)

  const courses = coursesResult.success ? coursesResult.data : []
  const reviews = reviewsResult.success ? reviewsResult.data : []

  // Calculate total enrollments
  const totalEnrollments = courses.reduce((total, course) => total + (course.enrollment_count || 0), 0)

  // Calculate average rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : "N/A"

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Trainer Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">My Courses</h2>
          <p className="text-3xl font-bold">{courses.length}</p>
          <p className="text-sm text-slate-500">Active and draft courses</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Total Enrollments</h2>
          <p className="text-3xl font-bold">{totalEnrollments}</p>
          <p className="text-sm text-slate-500">Across all courses</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Average Rating</h2>
          <p className="text-3xl font-bold">{averageRating}</p>
          <p className="text-sm text-slate-500">From {reviews.length} reviews</p>
        </div>
      </div>

      {/* Additional dashboard content would go here */}
    </div>
  )
}
