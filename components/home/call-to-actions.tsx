import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToActions() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold">For Learners</h3>
            <p className="mt-2 text-slate-500">
              Discover high-quality trainings tailored to your professional development needs.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Access curated trainings from expert providers</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Join action-learning communities to deepen your skills</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Track your progress and earn certificates</p>
              </div>
            </div>
            <Button asChild className="mt-6">
              <Link href="/register?role=learner">Sign Up as a Learner</Link>
            </Button>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold">For Trainers</h3>
            <p className="mt-2 text-slate-500">
              Reach more learners and grow your training business with our platform.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Connect with organizations seeking your expertise</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Leverage our platform to handle logistics and marketing</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Grow your revenue with our fair profit-sharing model</p>
              </div>
            </div>
            <Button asChild className="mt-6">
              <Link href="/register?role=trainer">Apply as a Trainer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
