import Link from "next/link"
import { Briefcase, Users, Brain, Heart, TrendingUp, Database, LineChart, Lightbulb } from "lucide-react"

const categories = [
  {
    title: "Business Development",
    icon: Briefcase,
    href: "/courses/business-development",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Organizational Growth",
    icon: Users,
    href: "/courses/organizational-growth",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Professional Skills",
    icon: Brain,
    href: "/courses/professional-skills",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Personal Development",
    icon: Heart,
    href: "/courses/personal-development",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Leadership",
    icon: TrendingUp,
    href: "/courses/leadership",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Technical Skills",
    icon: Database,
    href: "/courses/technical-skills",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Data Analysis",
    icon: LineChart,
    href: "/courses/data-analysis",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    href: "/courses/innovation",
    color: "bg-pink-50 text-pink-600",
  },
]

export function CategoriesGrid() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Browse Categories</h2>
          <p className="mt-2 text-slate-500">Find the perfect training for your needs</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <div className={`rounded-full p-3 ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-center font-medium">{category.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
