import Link from "next/link"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for featured trainings
const featuredTrainings = [
  {
    id: "1",
    title: "QuickBooks for Small Businesses",
    trainer: "Tiffany Grimes",
    organization: "Empower",
    duration: "2 hours",
    format: "Live Webinar",
    price: "$49",
    rating: 4.8,
    reviews: 124,
    image: "/learning-quickbooks.png",
  },
  {
    id: "2",
    title: "Leadership Essentials",
    trainer: "Trever Yarish",
    organization: "Building the Unbreakable",
    duration: "2.5 hours",
    format: "Live Webinar",
    price: "$59",
    rating: 4.9,
    reviews: 87,
    image: "/collaborative-leadership-growth.png",
  },
  {
    id: "3",
    title: "Excel Advanced Formulas",
    trainer: "Elissa Denton",
    organization: "Centerpoint Leadership Services",
    duration: "2 hours",
    format: "Live Webinar",
    price: "$45",
    rating: 4.7,
    reviews: 156,
    image: "/excel-skills-growth.png",
  },
  {
    id: "4",
    title: "Supervisory Skills Workshop",
    trainer: "Tiffany Grimes",
    organization: "Empower",
    duration: "2.5 hours",
    format: "Live Webinar",
    price: "$55",
    rating: 4.6,
    reviews: 92,
    image: "/collaborative-leadership-growth.png",
  },
]

export function FeaturedTrainingsCarousel() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Trainings</h2>
            <p className="mt-2 text-slate-500">High-demand topics with exceptional trainers</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTrainings.map((training) => (
            <Card key={training.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={training.image || "/placeholder.svg"}
                  alt={training.title}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2">{training.format}</Badge>
              </div>
              <CardHeader className="p-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg line-clamp-2">{training.title}</h3>
                  <p className="text-sm text-slate-500">
                    {training.trainer} · {training.organization}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-sm font-medium">{training.rating}</span>
                  </div>
                  <span className="text-sm text-slate-500">({training.reviews} reviews)</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm">{training.duration}</span>
                  <span className="font-semibold">{training.price}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/courses/${training.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/courses">View All Trainings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
