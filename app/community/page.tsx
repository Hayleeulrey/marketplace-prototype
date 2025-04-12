import Link from "next/link"
import { Users, MessageSquare, Calendar, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Action-Learning Communities</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Connect with peers, practice new skills, and deepen your learning through our collaborative communities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Join a Community</Button>
            <Button size="lg" variant="outline">
              Browse Events
            </Button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">How Our Communities Work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Take courses from expert trainers to build your knowledge and skills in specific areas
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Join practice groups to apply what you've learned with peers in a supportive environment
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Master</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Deepen your expertise through ongoing practice, feedback, and real-world application
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Community Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Community Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Participate in workshops, Q&A sessions, and practice groups led by expert trainers and peers.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/community/events">Browse Events</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Discussion Forums</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Ask questions, share insights, and connect with others in topic-specific discussion forums.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/community/discussions">Join Discussions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Practice Groups</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Join small groups focused on specific skills to practice together and provide feedback.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/community/groups">Find Groups</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Learning Community?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Connect with peers, practice your skills, and accelerate your professional development through our
            action-learning communities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Create Your Account</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
