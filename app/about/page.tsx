import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Award, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Soup to Nuts</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transforming professional development through curated trainings and action-learning communities
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  At Soup to Nuts, we're dedicated to curating the best trainings in business, organizational,
                  professional, and personal development while creating action-learning communities of practice to
                  deepen skills and foster continuous growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We envision a world where professional development is accessible, engaging, and effective—where
                  learning extends beyond the classroom through supportive communities that turn knowledge into
                  practical skills and measurable outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We curate only the highest quality trainings and learning experiences, ensuring every offering meets
                  our rigorous standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We believe in the power of collaborative learning and create supportive environments where
                  professionals can grow together.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We measure success by the real-world application of skills and the tangible improvements in
                  professional performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>

          {/* Jim Fong */}
          <Card className="mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 p-6 flex justify-center">
                <div className="relative h-64 w-64 rounded-full overflow-hidden">
                  <Image src="/confident-asian-professional.png" alt="Jim Fong" fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <CardTitle className="text-2xl mb-2">Jim Fong</CardTitle>
                <CardDescription className="text-lg mb-4">Founder & CEO</CardDescription>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Jim Fong brings decades of expertise in workforce development to Soup to Nuts. As the former
                    Executive Director of Rogue Workforce Partnership, Jim led numerous initiatives that transformed
                    workforce training and development across the region, creating innovative programs that connected
                    job seekers with employers and educational opportunities.
                  </p>
                  <p>
                    During his tenure, Jim pioneered several groundbreaking approaches to workforce development that
                    have been recognized and adopted nationally. After retiring from Rogue Workforce Partnership, Jim
                    focused on creating innovative solutions for professional development and workforce training.
                  </p>
                  <p>
                    Jim founded Soup to Nuts with a vision to revolutionize professional development by combining
                    high-quality training with action-learning communities—creating an ecosystem where skills are not
                    just taught but practiced, refined, and applied in real-world settings.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Haylee Ulrey */}
          <Card className="mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 p-6 flex justify-center">
                <div className="relative h-64 w-64 rounded-full overflow-hidden">
                  <Image src="/confident-professional.png" alt="Haylee Ulrey" fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <CardTitle className="text-2xl mb-2">Haylee Ulrey</CardTitle>
                <CardDescription className="text-lg mb-4">
                  Chief Operations Officer & Web Development Lead
                </CardDescription>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Haylee Ulrey oversees operations and web development at Soup to Nuts, bringing her extensive
                    experience in technology and operational management to ensure our platform delivers an exceptional
                    user experience.
                  </p>
                  <p>
                    With a background spanning both technical implementation and strategic planning, Haylee has
                    successfully led numerous digital transformation initiatives throughout her career. Her expertise in
                    creating intuitive, user-focused platforms has been instrumental in developing the Soup to Nuts
                    marketplace.
                  </p>
                  <p>
                    Haylee's leadership ensures that our technical infrastructure supports our mission of connecting
                    learners with high-quality training opportunities while fostering vibrant communities of practice.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Nicole S. */}
          <Card>
            <div className="md:flex">
              <div className="md:w-1/3 p-6 flex justify-center">
                <div className="relative h-64 w-64 rounded-full overflow-hidden">
                  <Image src="/confident-smile.png" alt="Nicole S." fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <CardTitle className="text-2xl mb-2">Nicole S.</CardTitle>
                <CardDescription className="text-lg mb-4">Head of Community & Customer Experience</CardDescription>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Nicole leads our social media strategy and customer service initiatives, ensuring that our community
                    members receive exceptional support throughout their learning journey.
                  </p>
                  <p>
                    With a passion for building engaged communities, Nicole has developed innovative approaches to
                    fostering connection and collaboration among our users. Her expertise in community management has
                    been crucial in creating the vibrant action-learning communities that set Soup to Nuts apart.
                  </p>
                  <p>
                    Nicole's customer-centric approach ensures that every interaction with Soup to Nuts reinforces our
                    commitment to excellence and community, from the first touchpoint through ongoing engagement with
                    our platform.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Approach</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6 text-slate-600">
              <p>
                At Soup to Nuts, we believe that effective professional development goes beyond traditional training
                methods. Our approach combines:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Curated Excellence</h3>
                  <p>
                    We carefully select the best trainings across various professional domains, ensuring quality and
                    relevance.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Action Learning</h3>
                  <p>
                    We create structured opportunities to practice and apply new skills in supportive group settings.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Community Support</h3>
                  <p>
                    We foster communities of practice where professionals can learn from each other and grow together.
                  </p>
                </div>
              </div>
              <p>
                This comprehensive approach ensures that learning translates into practical skills and measurable
                outcomes, providing value to both individuals and organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            We'd love to tell you more about our mission and how Soup to Nuts can support your professional development
            goals.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
