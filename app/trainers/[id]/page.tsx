import Link from "next/link"
import { ArrowLeft, Star, Calendar, Users, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock function to get trainer data
function getTrainerData(id: string) {
  const trainers = {
    "1": {
      id: "1",
      name: "Tiffany Grimes",
      organization: "Empower",
      bio: "Certified QuickBooks ProAdvisor with over 10 years of experience helping small businesses optimize their financial processes. Tiffany has worked with hundreds of businesses across various industries to streamline their financial operations, improve reporting, and make better business decisions based on financial data.",
      expertise: ["Financial Management", "QuickBooks", "Small Business", "Bookkeeping", "Tax Preparation"],
      rating: 4.8,
      reviews: 124,
      students: 450,
      courses: 3,
      image: "/confident-professional.png",
      featuredCourses: [
        {
          id: "1",
          title: "QuickBooks for Small Businesses",
          description: "Learn how to efficiently manage your small business finances with QuickBooks.",
          image: "/learning-quickbooks.png",
        },
        {
          id: "4",
          title: "Supervisory Skills Workshop",
          description: "Learn essential skills for new supervisors and managers.",
          image: "/collaborative-leadership-growth.png",
        },
      ],
    },
    "2": {
      id: "2",
      name: "Trever Yarish",
      organization: "Building the Unbreakable",
      bio: "Leadership coach and organizational development consultant with 15+ years of experience working with Fortune 500 companies. Trever specializes in helping leaders build resilient teams that can thrive in challenging environments and periods of change.",
      expertise: [
        "Leadership",
        "Team Building",
        "Executive Coaching",
        "Change Management",
        "Organizational Development",
      ],
      rating: 4.9,
      reviews: 87,
      students: 320,
      courses: 2,
      image: "/confident-businessman.png",
      featuredCourses: [
        {
          id: "2",
          title: "Leadership Essentials",
          description: "Develop core leadership skills to inspire and motivate your team.",
          image: "/collaborative-leadership-growth.png",
        },
      ],
    },
    "3": {
      id: "3",
      name: "Elissa Denton",
      organization: "Centerpoint Leadership Services",
      bio: "Microsoft Certified Trainer specializing in Excel, data analysis, and business intelligence tools for professional development. Elissa has trained over 1,000 professionals in data skills and helps organizations make better use of their data through improved analysis techniques.",
      expertise: ["Microsoft Excel", "Data Analysis", "Business Intelligence", "Data Visualization", "Power BI"],
      rating: 4.7,
      reviews: 156,
      students: 600,
      courses: 4,
      image: "/confident-blonde-professional.png",
      featuredCourses: [
        {
          id: "3",
          title: "Excel Advanced Formulas",
          description: "Master advanced Excel formulas and functions to analyze data more effectively.",
          image: "/excel-skills-growth.png",
        },
        {
          id: "5",
          title: "Effective Communication in the Workplace",
          description: "Improve your communication skills to build better relationships and achieve better results.",
          image: "/diverse-team-communication.png",
        },
      ],
    },
  }

  return trainers[id as keyof typeof trainers]
}

export default function TrainerDetailPage({ params }: { params: { id: string } }) {
  const trainer = getTrainerData(params.id)

  if (!trainer) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Trainer Not Found</h1>
          <p className="mb-6">The trainer you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/trainers">Back to Trainers</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <Link href="/trainers" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Trainers
        </Link>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="mx-auto h-32 w-32 mb-4">
                  <AvatarImage src={trainer.image || "/placeholder.svg"} alt={trainer.name} />
                  <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{trainer.name}</CardTitle>
                <p className="text-slate-500">{trainer.organization}</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="ml-1 font-medium">{trainer.rating}</span>
                  <span className="ml-1 text-slate-500">({trainer.reviews} reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <Users className="h-5 w-5 mx-auto mb-1 text-slate-400" />
                    <p className="font-semibold">{trainer.students}</p>
                    <p className="text-xs text-slate-500">Students</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <Calendar className="h-5 w-5 mx-auto mb-1 text-slate-400" />
                    <p className="font-semibold">{trainer.courses}</p>
                    <p className="text-xs text-slate-500">Courses</p>
                  </div>
                </div>

                <h3 className="font-medium mb-2">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {trainer.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h3 className="font-medium mb-2">Credentials</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-primary mt-0.5" />
                    <span>Certified Professional Trainer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-primary mt-0.5" />
                    <span>10+ Years Industry Experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-primary mt-0.5" />
                    <span>Subject Matter Expert</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>About {trainer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{trainer.bio}</p>
              </CardContent>
            </Card>

            <Tabs defaultValue="courses">
              <TabsList className="mb-4">
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="courses">
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {trainer.featuredCourses.map((course) => (
                        <Card key={course.id} className="overflow-hidden">
                          <div className="aspect-video relative">
                            <img
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">{course.title}</h3>
                            <p className="text-sm text-slate-600 mb-4">{course.description}</p>
                            <Button asChild size="sm" className="w-full">
                              <Link href={`/courses/${course.id}`}>View Course</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Student {i}</p>
                              <div className="flex">
                                {Array(5)
                                  .fill(0)
                                  .map((_, j) => (
                                    <Star
                                      key={j}
                                      className={`h-3 w-3 ${
                                        j < 5 - (i % 2)
                                          ? "fill-amber-400 text-amber-400"
                                          : "fill-slate-200 text-slate-200"
                                      }`}
                                    />
                                  ))}
                              </div>
                            </div>
                            <span className="text-xs text-slate-500 ml-auto">2 weeks ago</span>
                          </div>
                          <p className="text-sm text-slate-600">
                            {i === 1
                              ? "Excellent trainer! The course was well-structured and the content was very practical. I've already started applying what I learned in my daily work."
                              : i === 2
                                ? "Very knowledgeable and engaging. The examples provided were relevant to real-world scenarios, which made the concepts easier to understand."
                                : "Great experience overall. The trainer was responsive to questions and provided additional resources for further learning."}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Reviews
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
