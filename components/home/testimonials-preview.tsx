import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The training marketplace helped me find exactly what I needed for my team. The quality of trainers is exceptional.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "Pacific Northwest Healthcare",
  },
  {
    quote: "As a trainer, this platform has connected me with organizations that truly value professional development.",
    author: "Michael Chen",
    role: "Leadership Coach",
    company: "Growth Mindset Consulting",
  },
  {
    quote: "The action-learning communities have transformed how our staff applies what they've learned. Real results!",
    author: "David Rodriguez",
    role: "Operations Manager",
    company: "Cascade Manufacturing",
  },
]

export function TestimonialsPreview() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">What People Are Saying</h2>
          <p className="mt-2 text-slate-500">Hear from our community of learners and trainers</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="h-8 w-8 text-slate-300 mb-4" />
              <p className="mb-4 text-slate-700">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
