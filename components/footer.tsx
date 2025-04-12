import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="font-bold text-xl">
              Soup to Nuts
            </Link>
            <p className="mt-2 text-sm text-slate-500">
              Curating the best trainings in business, organizational, professional & personal development. Creating
              action-learning communities of practice to deepen skills.
            </p>
            <div className="mt-4 flex space-x-3">
              <Link href="#" className="text-slate-400 hover:text-slate-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium">For Learners</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="/courses" className="text-slate-500 hover:text-slate-600">
                Browse Courses
              </Link>
              <Link href="/community" className="text-slate-500 hover:text-slate-600">
                Join Community
              </Link>
              <Link href="/dashboard/learner" className="text-slate-500 hover:text-slate-600">
                My Dashboard
              </Link>
              <Link href="/certificates" className="text-slate-500 hover:text-slate-600">
                Certificates
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium">For Trainers</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="/become-trainer" className="text-slate-500 hover:text-slate-600">
                Become a Trainer
              </Link>
              <Link href="/dashboard/trainer" className="text-slate-500 hover:text-slate-600">
                Trainer Dashboard
              </Link>
              <Link href="/resources" className="text-slate-500 hover:text-slate-600">
                Resources
              </Link>
              <Link href="/partner" className="text-slate-500 hover:text-slate-600">
                Partner with Us
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-slate-500 hover:text-slate-600">
                About Us
              </Link>
              <Link href="/contact" className="text-slate-500 hover:text-slate-600">
                Contact
              </Link>
              <Link href="/privacy" className="text-slate-500 hover:text-slate-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-slate-600">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Soup to Nuts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
