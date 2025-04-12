import Link from "next/link"
import { Bookmark, Star, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for saved courses
const savedCourses = [
  {
    id: "4",
    title: "Supervisory Skills Workshop",
    trainer: "Tiffany Grimes",
    organization: "Empower",
    duration: "2.5 hours",
    format: "Live Webinar",
    date: "May 22, 2025",
    price: "$55",
    rating: 4.6,
    reviews: 92,
    image: "/collaborative-leadership-growth.png",
  },
  {
    id: "5",
    title: "Effective Communication in the Workplace",
    trainer: "Elissa Denton",
    organization: "Centerpoint Leadership Services",
    duration: "2 hours",
    format: "Live Webinar",
    date: "May 25, 2025",
    price: "$49",
    rating: 4.8,
    reviews: 78,
    image: "/placeholder.svg?height=100&width=150&query=communication training",
  },
]

export function SavedCourses({ userId }: { userId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Courses</CardTitle>
        <CardDescription>Courses you've bookmarked for later</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedCourses.map((course) => (
            <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-lg">
              <div className="sm:w-[150px] flex-shrink-0">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">
                      <Link href={`/courses/${course.id}`} className="hover:underline">
                        {course.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-500">
                      {course.trainer} · {course.organization}
                    </p>
                  </div>
                  <Badge>{course.format}</Badge>
                </div>
                <div className="flex flex-wrap gap-3 mt-2 text-sm">
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-slate-500">({course.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold">{course.price}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                    <Button size="sm">Enroll Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {savedCourses.length === 0 && (
          <div className="text-center py-8">
            <Bookmark className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium">No saved courses</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">Bookmark courses you're interested in to view them later</p>
            <Button asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
