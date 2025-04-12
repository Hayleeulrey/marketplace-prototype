import { MyTrainings } from "./my-trainings"
import { SavedCourses } from "./saved-courses"
import { Certificates } from "./certificates"
import { CommunityAccess } from "./community-access"

export function LearnerDashboard({ userId }: { userId: string }) {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Learner Dashboard</h1>
          <p className="mt-2 text-slate-500">Track your progress and manage your learning journey</p>
        </div>
        <div className="grid gap-8">
          <MyTrainings userId={userId} />
          <SavedCourses userId={userId} />
          <Certificates userId={userId} />
          <CommunityAccess />
        </div>
      </div>
    </div>
  )
}
