import Link from "next/link"
import { Edit, Plus, MoreHorizontal, Calendar, Clock, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for trainer's courses
const trainerCourses = [
  {
    id: "1",
    title: "QuickBooks for Small Businesses",
    status: "active",
    nextSession: "May 15, 2025",
    time: "10:00 AM - 12:00 PM PST",
    price: "$49",
    enrollments: 45,
    format: "Live Webinar",
    image: "/learning-quickbooks.png",
  },
  {
    id: "3",
    title: "Excel Advanced Formulas",
    status: "draft",
    nextSession: "Not scheduled",
    price: "$45",
    enrollments: 0,
    format: "Live Webinar",
    image: "/excel-skills-growth.png",
  },
  {
    id: "4",
    title: "Supervisory Skills Workshop",
    status: "active",
    nextSession: "May 22, 2025",
    time: "10:00 AM - 12:30 PM PST",
    price: "$55",
    enrollments: 38,
    format: "Live Webinar",
    image: "/collaborative-leadership-growth.png",
  },
]

export function AddEditTraining({ trainerId }: { trainerId: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle>My Trainings</CardTitle>
          <CardDescription>Manage and create your training offerings</CardDescription>
        </div>
        <Button className="mt-4 sm:mt-0">
          <Plus className="mr-2 h-4 w-4" />
          Create New Training
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active">
          <TabsList className="mb-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            {trainerCourses
              .filter((course) => course.status === "active")
              .map((course) => (
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
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge className="mt-1">{course.format}</Badge>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Training
                          </DropdownMenuItem>
                          <DropdownMenuItem>View Enrollments</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Archive</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-sm">
                      <div className="flex items-center gap-1 text-slate-500">
                        <Calendar className="h-4 w-4" />
                        <span>Next: {course.nextSession}</span>
                      </div>
                      {course.time && (
                        <div className="flex items-center gap-1 text-slate-500">
                          <Clock className="h-4 w-4" />
                          <span>{course.time}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-slate-500">
                        <DollarSign className="h-4 w-4" />
                        <span>{course.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Users className="h-4 w-4" />
                        <span>{course.enrollments} enrolled</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Button asChild size="sm">
                        <Link href={`/dashboard/trainer/trainings/${course.id}`}>Manage Training</Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        View Analytics
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="draft" className="space-y-4">
            {trainerCourses
              .filter((course) => course.status === "draft")
              .map((course) => (
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
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge variant="outline" className="mt-1">
                          Draft
                        </Badge>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Training
                          </DropdownMenuItem>
                          <DropdownMenuItem>Publish</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-sm">
                      <div className="flex items-center gap-1 text-slate-500">
                        <Calendar className="h-4 w-4" />
                        <span>{course.nextSession}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <DollarSign className="h-4 w-4" />
                        <span>{course.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Button asChild size="sm">
                        <Link href={`/dashboard/trainer/trainings/${course.id}/edit`}>Continue Editing</Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        Publish
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="archived" className="space-y-4">
            <div className="text-center py-8">
              <p className="text-sm text-slate-500">No archived trainings</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
