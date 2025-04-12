import { getUserDetails } from "@/lib/get-session"
import { redirect } from "next/navigation"
import { getUserEnrollments, getUserSavedCourses, getUserCertificates } from "@/app/actions/user-actions"

export default async function LearnerDashboard() {
  const userDetails = await getUserDetails()

  if (!userDetails || userDetails.role !== "learner") {
    redirect("/dashboard")
  }

  const enrollmentsResult = await getUserEnrollments(userDetails.id)
  const savedCoursesResult = await getUserSavedCourses(userDetails.id)
  const certificatesResult = await getUserCertificates(userDetails.id)

  const enrollments = enrollmentsResult.success ? enrollmentsResult.data : []
  const savedCourses = savedCoursesResult.success ? savedCoursesResult.data : []
  const certificates = certificatesResult.success ? certificatesResult.data : []

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Learner Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">My Enrollments</h2>
          <p className="text-3xl font-bold">{enrollments.length}</p>
          <p className="text-sm text-slate-500">Active courses</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Saved Courses</h2>
          <p className="text-3xl font-bold">{savedCourses.length}</p>
          <p className="text-sm text-slate-500">Courses for later</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Certificates</h2>
          <p className="text-3xl font-bold">{certificates.length}</p>
          <p className="text-sm text-slate-500">Completed courses</p>
        </div>
      </div>

      {/* Additional dashboard content would go here */}
    </div>
  )
}
