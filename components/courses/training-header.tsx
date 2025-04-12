import { Star, Clock, Calendar, Users, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Mock data for a specific course
const getCourseData = (id: string) => {
  return {
    id,
    title: "QuickBooks for Small Businesses",
    trainer: "Tiffany Grimes",
    organization: "Empower",
    description:
      "Learn how to efficiently manage your small business finances with QuickBooks. This training covers setup, daily operations, reporting, and best practices.",
    duration: "2 hours",
    format: "Live Webinar",
    date: "May 15, 2025",
    time: "10:00 AM - 12:00 PM PST",
    price: "$49",
    rating: 4.8,
    reviews: 124,
    attendees: 45,
    image: "/learning-quickbooks.png",
  }
}

export function TrainingHeader({ courseId }: { courseId: string }) {
  const course = getCourseData(courseId)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <p className="mt-2 text-slate-500">
            Presented by {course.trainer} from {course.organization}
          </p>
        </div>
        <Button variant="outline" size="sm" className="w-full md:w-auto">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
          <Badge className="absolute top-4 left-4 text-sm px-3 py-1">{course.format}</Badge>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-col items-center text-center">
            <Clock className="h-6 w-6 text-slate-400 mb-2" />
            <h3 className="text-sm font-medium">Duration</h3>
            <p className="text-sm text-slate-500">{course.duration}</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-col items-center text-center">
            <Calendar className="h-6 w-6 text-slate-400 mb-2" />
            <h3 className="text-sm font-medium">Date & Time</h3>
            <p className="text-sm text-slate-500">{course.date}</p>
            <p className="text-sm text-slate-500">{course.time}</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-col items-center text-center">
            <Users className="h-6 w-6 text-slate-400 mb-2" />
            <h3 className="text-sm font-medium">Attendees</h3>
            <p className="text-sm text-slate-500">{course.attendees} enrolled</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-col items-center text-center">
            <Star className="h-6 w-6 text-amber-400 mb-2" />
            <h3 className="text-sm font-medium">Rating</h3>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">{course.rating}</span>
              <span className="text-sm text-slate-500">({course.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
