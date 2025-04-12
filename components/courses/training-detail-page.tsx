import { TrainingHeader } from "./training-header"
import { TrainerPreview } from "./trainer-preview"
import { TrainingDescription } from "./training-description"
import { Agenda } from "./agenda"
import { ReviewsSection } from "./reviews-section"
import { RegisterButton } from "./register-button"

export function TrainingDetailPage({ courseId }: { courseId: string }) {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <TrainingHeader courseId={courseId} />
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <TrainingDescription />
            <Agenda />
            <ReviewsSection />
          </div>
          <div className="space-y-6">
            <TrainerPreview />
            <RegisterButton />
          </div>
        </div>
      </div>
    </div>
  )
}
