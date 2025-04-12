import Link from "next/link"
import { Calendar, Clock, ExternalLink, MoreHorizontal, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for enrolled trainings
const enrolledTrainings = [
  {
    id: "1",
    title: "QuickBooks for Small Businesses",
    trainer: "Tiffany Grimes",
    date: "May 15, 2025",
    time: "10:00 AM - 12:00 PM PST",
    progress: 0,
    status: "upcoming",
    image: "/learning-quickbooks.png",
  },
  {
    id: "2",
    title: "Leadership Essentials",
    trainer: "Trever Yarish",
    date: "Completed on April 10, 2025",
    progress: 100,
    status: "completed",
    image: "/collaborative-leadership-growth.png",
  },
  {
    id: "3",
    title: "Excel Advanced Formulas",
    trainer: "Elissa Denton",
    date: "Self-paced",
    progress: 45,
    status: "in-progress",
    image: "/excel-skills-growth.png",
  },
]

export function MyTrainings({ userId }: { userId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Trainings</CardTitle>
        <CardDescription>Manage your enrolled trainings and track your progress</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            {enrolledTrainings.map((training) => (
              <div key={training.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="sm:w-[150px] flex-shrink-0">
                  <img
                    src={training.image || "/placeholder.svg"}
                    alt={training.title}
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">
                        <Link href={`/courses/${training.id}`} className="hover:underline">
                          {training.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate-500">{training.trainer}</p>
                    </div>
                    <Badge
                      className={
                        training.status === "upcoming"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : training.status === "in-progress"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-green-100 text-green-800 hover:bg-green-100"
                      }
                    >
                      {training.status === "upcoming"
                        ? "Upcoming"
                        : training.status === "in-progress"
                          ? "In Progress"
                          : "Completed"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{training.date}</span>
                    </div>
                    {training.time && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{training.time}</span>
                      </div>
                    )}
                  </div>
                  {training.status !== "upcoming" && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-500">Progress</span>
                        <span className="text-xs font-medium">{training.progress}%</span>
                      </div>
                      <Progress value={training.progress} className="h-2" />
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-4">
                    <Button
                      variant={training.status === "upcoming" ? "outline" : "default"}
                      size="sm"
                      className="gap-1"
                    >
                      {training.status === "upcoming" ? (
                        <>
                          <Calendar className="h-4 w-4" />
                          Add to Calendar
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          {training.status === "completed" ? "Review Materials" : "Continue Learning"}
                        </>
                      )}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Download Materials</DropdownMenuItem>
                        {training.status === "completed" && <DropdownMenuItem>Get Certificate</DropdownMenuItem>}
                        {training.status === "upcoming" && <DropdownMenuItem>Cancel Enrollment</DropdownMenuItem>}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="upcoming">
            {enrolledTrainings
              .filter((t) => t.status === "upcoming")
              .map((training) => (
                <div
                  key={training.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-lg"
                >
                  {/* Same content as above, filtered for upcoming */}
                </div>
              ))}
          </TabsContent>
          <TabsContent value="in-progress">
            {enrolledTrainings
              .filter((t) => t.status === "in-progress")
              .map((training) => (
                <div
                  key={training.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-lg"
                >
                  {/* Same content as above, filtered for in-progress */}
                </div>
              ))}
          </TabsContent>
          <TabsContent value="completed">
            {enrolledTrainings
              .filter((t) => t.status === "completed")
              .map((training) => (
                <div
                  key={training.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-lg"
                >
                  {/* Same content as above, filtered for completed */}
                </div>
              ))}
          </TabsContent>
        </Tabs>
        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <Link href="/courses">
              Browse More Trainings
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
