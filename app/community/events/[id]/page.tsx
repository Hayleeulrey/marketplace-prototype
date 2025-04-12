import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Globe, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock function to get event data
function getEventData(id: string) {
  const events = {
    "1": {
      id: "1",
      title: "QuickBooks Implementation Workshop",
      description:
        "A hands-on workshop where you'll learn how to set up and implement QuickBooks for your small business. Bring your laptop and follow along as we walk through the setup process, customize settings for your business type, and establish best practices for daily financial management.",
      type: "Workshop",
      date: "May 20, 2025",
      time: "1:00 PM - 2:30 PM PST",
      format: "Virtual",
      platform: "Zoom",
      attendees: 28,
      maxAttendees: 50,
      trainer: {
        name: "Tiffany Grimes",
        organization: "Empower",
        image: "/confident-professional.png",
      },
      image: "/learning-quickbooks.png",
      agenda: [
        "Introduction to QuickBooks Online (15 min)",
        "Setting up your company file (20 min)",
        "Customizing for your business type (15 min)",
        "Connecting bank accounts and credit cards (15 min)",
        "Q&A and troubleshooting (25 min)",
      ],
    },
    "2": {
      id: "2",
      title: "Leadership Practice Group - Session #3",
      description:
        "The third session in our leadership practice series focuses on effective delegation and empowering team members. Participants will practice delegation scenarios, receive feedback, and develop strategies to overcome common delegation challenges.",
      type: "Practice Group",
      date: "May 22, 2025",
      time: "11:00 AM - 12:00 PM PST",
      format: "Virtual",
      platform: "Microsoft Teams",
      attendees: 15,
      maxAttendees: 20,
      trainer: {
        name: "Trever Yarish",
        organization: "Building the Unbreakable",
        image: "/confident-businessman.png",
      },
      image: "/collaborative-leadership-growth.png",
      agenda: [
        "Review of previous session takeaways (10 min)",
        "Delegation framework introduction (10 min)",
        "Breakout practice sessions (25 min)",
        "Group discussion and feedback (15 min)",
      ],
    },
    "3": {
      id: "3",
      title: "Ask Me Anything: Excel Formulas with Elissa Denton",
      description:
        "Bring your toughest Excel formula challenges to this interactive Q&A session. Elissa will demonstrate solutions to your specific Excel problems, share advanced formula techniques, and provide tips for more efficient spreadsheet management.",
      type: "Q&A Session",
      date: "May 25, 2025",
      time: "2:00 PM - 3:00 PM PST",
      format: "Virtual",
      platform: "Zoom",
      attendees: 42,
      maxAttendees: 100,
      trainer: {
        name: "Elissa Denton",
        organization: "Centerpoint Leadership Services",
        image: "/confident-blonde-professional.png",
      },
      image: "/excel-skills-growth.png",
      agenda: [
        "Introduction and session overview (5 min)",
        "Pre-submitted question review (20 min)",
        "Live Q&A and problem-solving (30 min)",
        "Resources and next steps (5 min)",
      ],
    },
  }

  return events[id as keyof typeof events]
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventData(params.id)

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/community">Back to Community</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <Link href="/community" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Community
        </Link>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover w-full h-full" />
                <Badge className="absolute top-4 left-4">{event.type}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{event.description}</p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-slate-400 mb-1" />
                    <span className="text-sm font-medium">Date</span>
                    <span className="text-sm text-slate-500">{event.date}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg">
                    <Clock className="h-5 w-5 text-slate-400 mb-1" />
                    <span className="text-sm font-medium">Time</span>
                    <span className="text-sm text-slate-500">{event.time}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg">
                    <Globe className="h-5 w-5 text-slate-400 mb-1" />
                    <span className="text-sm font-medium">Format</span>
                    <span className="text-sm text-slate-500">{event.format}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg">
                    <Users className="h-5 w-5 text-slate-400 mb-1" />
                    <span className="text-sm font-medium">Attendees</span>
                    <span className="text-sm text-slate-500">
                      {event.attendees}/{event.maxAttendees}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Agenda</h3>
                  <ul className="space-y-2">
                    {event.agenda.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {event.format === "Virtual" && (
                  <div>
                    <h3 className="font-medium mb-2">Platform</h3>
                    <p className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-slate-400" />
                      <span>{event.platform}</span>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Connection details will be sent after registration</p>
                  </div>
                )}

                {event.format === "In-Person" && (
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>123 Main Street, Seattle, WA 98101</span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Host</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={event.trainer.image || "/placeholder.svg"} alt={event.trainer.name} />
                    <AvatarFallback>{event.trainer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{event.trainer.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{event.trainer.organization}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/trainers/${event.id}`}>View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Price</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span>{event.maxAttendees - event.attendees} spots left</span>
                  </div>
                  {event.format === "Virtual" && (
                    <p className="text-sm text-slate-500">
                      Connection details will be emailed to you after registration
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Share This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="21" height="21" x="1.5" y="1.5" rx="4.5" />
                      <path d="M16.5 8.25v3.75m0 0v3.75m0-3.75h3.75m-3.75 0h-3.75" />
                    </svg>
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Similar Events You Might Like</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={`/placeholder.svg?key=pmbum&height=200&width=400&query=event ${i}`}
                    alt={`Similar event ${i}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Related Workshop {i}</h3>
                  <p className="text-sm text-slate-500 mb-4">June {i + 5}, 2025</p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href={`/community/events/${i + 3}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
