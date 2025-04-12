import Link from "next/link"
import { Users, MessageSquare, Video, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CommunityAccess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Action-Learning Community</CardTitle>
        <CardDescription>Connect with peers and deepen your learning through community engagement</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-3 mb-3">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium mb-1">Discussion Forums</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Engage in topic-specific discussions with peers and trainers
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/community/forums">Join Discussions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium mb-1">Practice Groups</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Join small groups to practice and apply what you've learned
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/community/practice-groups">Find Groups</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-100 p-3 mb-3">
                  <Video className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-1">Virtual Meetups</h3>
                <p className="text-sm text-slate-500 mb-4">Attend virtual sessions to connect and share experiences</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/community/meetups">View Schedule</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-100 p-3 mb-3">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium mb-1">In-Person Events</h3>
                <p className="text-sm text-slate-500 mb-4">Find local events and conferences to attend</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/community/events">Browse Events</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
          <h3 className="font-medium mb-2">Upcoming Community Activities</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-sm">QuickBooks Implementation Workshop</p>
                <p className="text-xs text-slate-500">May 20, 2025 · 1:00 PM - 2:30 PM PST · Virtual</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-green-100 p-1 mt-0.5">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-sm">Leadership Practice Group - Session #3</p>
                <p className="text-xs text-slate-500">May 22, 2025 · 11:00 AM - 12:00 PM PST · Virtual</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-amber-100 p-1 mt-0.5">
                <MessageSquare className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="font-medium text-sm">Ask Me Anything: Excel Formulas with Elissa Denton</p>
                <p className="text-xs text-slate-500">May 25, 2025 · 2:00 PM - 3:00 PM PST · Virtual</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 text-center">
            <Button asChild variant="link" size="sm">
              <Link href="/community/calendar">View Full Calendar</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
