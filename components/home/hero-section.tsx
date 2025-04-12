import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-slate-100 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Soup to Nuts: Online Training Marketplace
              </h1>
              <p className="max-w-[600px] text-slate-500 md:text-xl">
                Curating the best trainings in business, organizational, professional & personal development.
              </p>
              <p className="max-w-[600px] text-slate-500 md:text-xl">
                Creating action-learning communities of practice to deepen skills.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/courses">Find Trainings</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/become-trainer">Become a Trainer</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-slate-200">
              <img
                src="/collaborative-workshop.png"
                alt="Professional training session"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
