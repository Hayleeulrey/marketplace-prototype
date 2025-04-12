import Link from "next/link"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for practice groups
const practiceGroups = [
  {
    id: "1",
    name: "QuickBooks Implementation Group",
    description: "A group for small business owners implementing QuickBooks to share challenges and solutions.",
    members: 32,
    meetingFrequency: "Bi-weekly",
    category: "Financial Management",
    nextMeeting: "May 20, 2025",
  },
  {
    id: "2",
    name: "Leadership Skills Practice",
    description: "Practice and receive feedback on leadership skills in a supportive environment.",
    members: 24,
    meetingFrequency: "Weekly",
    category: "Leadership",
    nextMeeting: "May 15, 2025",
  },
  {
    id: "3",
    name: "Excel Power Users",
    description: "Advanced Excel users sharing techniques and solving complex spreadsheet challenges together.",
    members: 45,
    meetingFrequency: "Monthly",
    category: "Technical Skills",
    nextMeeting: "May 30, 2025",
  },
  {
    id: "4",
    name: "New Manager Support Circle",
    description: "A supportive community for new managers to discuss challenges and share solutions.",
    members: 18,
    meetingFrequency: "Weekly",
    category: "Management",
    nextMeeting: "May 18, 2025",
  },
  {
    id: "5",
    name: "Public Speaking Practice",
    description: "Practice your presentation skills and receive constructive feedback in a safe environment.",
    members: 22,
    meetingFrequency: "Bi-weekly",
    category: "Communication",
    nextMeeting: "May 22, 2025",
  },
  {
    id: "6",
    name: "Data Analysis Techniques",
    description: "Share and learn advanced data analysis techniques across various tools and platforms.",
    members: 36,
    meetingFrequency: "Monthly",
    category: "Technical Skills",
    nextMeeting: "June 5, 2025",
  },
]

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Practice Groups</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">This page will display community practice groups.</p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/community">
                <Users className="mr-2 h-4 w-4" />
                Back to Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
