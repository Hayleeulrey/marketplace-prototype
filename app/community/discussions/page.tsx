import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DiscussionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Community Discussions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">This page will display community discussion forums.</p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/community">
                <MessageSquare className="mr-2 h-4 w-4" />
                Back to Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
