import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for trainers
const trainers = [
  {
    id: "1",
    name: "Tiffany Grimes",
    organization: "Empower",
    bio: "Certified QuickBooks ProAdvisor with over 10 years of experience helping small businesses optimize their financial processes.",
    expertise: ["Financial Management", "QuickBooks", "Small Business"],
    rating: 4.8,
    reviews: 124,
    courses: 3,
    image: "/confident-professional.png",
  },
  {
    id: "2",
    name: "Trever Yarish",
    organization: "Building the Unbreakable",
    bio: "Leadership coach and organizational development consultant with 15+ years of experience working with Fortune 500 companies.",
    expertise: ["Leadership", "Team Building", "Executive Coaching"],
    rating: 4.9,
    reviews: 87,
    courses: 2,
    image: "/confident-businessman.png",
  },
  {
    id: "3",
    name: "Elissa Denton",
    organization: "Centerpoint Leadership Services",
    bio: "Microsoft Certified Trainer specializing in Excel, data analysis, and business intelligence tools for professional development.",
    expertise: ["Microsoft Excel", "Data Analysis", "Business Intelligence"],
    rating: 4.7,
    reviews: 156,
    courses: 4,
    image: "/confident-blonde-professional.png",
  },
]

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Our Trainers</h1>
          <p className="mt-2 text-slate-500">
            Meet our expert trainers who deliver high-quality professional development
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="overflow-hidden">
              <CardHeader className="text-center">
                <Avatar className="mx-auto h-24 w-24 mb-2">
                  <AvatarImage src={trainer.image || "/placeholder.svg"} alt={trainer.name} />
                  <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{trainer.name}</CardTitle>
                <CardDescription>{trainer.organization}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4 line-clamp-3">{trainer.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <p className="font-semibold">{trainer.rating}</p>
                    <p className="text-slate-500">Rating</p>
                  </div>
                  <div>
                    <p className="font-semibold">{trainer.reviews}</p>
                    <p className="text-slate-500">Reviews</p>
                  </div>
                  <div>
                    <p className="font-semibold">{trainer.courses}</p>
                    <p className="text-slate-500">Courses</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/trainers/${trainer.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Become a Trainer</h2>
          <p className="max-w-2xl mx-auto mb-6 text-slate-600">
            Are you an expert in your field? Join our platform to share your knowledge and grow your training business.
          </p>
          <Button asChild size="lg">
            <Link href="/become-trainer">Apply as a Trainer</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
