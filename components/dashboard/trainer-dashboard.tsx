import { AddEditTraining } from "./add-edit-training"
import { EnrollmentStats } from "./enrollment-stats"
import { TrainerRevenue } from "./trainer-revenue"
import { ReviewResponses } from "./review-responses"

export function TrainerDashboard({ trainerId }: { trainerId: string }) {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Trainer Dashboard</h1>
          <p className="mt-2 text-slate-500">Manage your trainings, track enrollments, and monitor revenue</p>
        </div>
        <div className="grid gap-8">
          <AddEditTraining trainerId={trainerId} />
          <div className="grid gap-8 md:grid-cols-2">
            <EnrollmentStats trainerId={trainerId} />
            <TrainerRevenue trainerId={trainerId} />
          </div>
          <ReviewResponses trainerId={trainerId} />
        </div>
      </div>
    </div>
  )
}
