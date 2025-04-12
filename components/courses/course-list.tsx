import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CourseCard } from "./course-card"

// Mock data for courses
const courses = [
  {
    id: "1",
    title: "QuickBooks for Small Businesses",
    trainer: "Tiffany Grimes",
    organization: "Empower",
    description:
      "Learn how to efficiently manage your small business finances with QuickBooks. This training covers setup, daily operations, reporting, and best practices.",
    duration: "2 hours",
    format: "Live Webinar",
    date: "May 15, 2025",
    price: "$49",
    rating: 4.8,
    reviews: 124,
    attendees: 45,
    image: "/learning-quickbooks.png",
  },
  {
    id: "2",
    title: "Leadership Essentials",
    trainer: "Trever Yarish",
    organization: "Building the Unbreakable",
    description:
      "Develop core leadership skills to inspire and motivate your team. This training focuses on communication, delegation, feedback, and building a positive culture.",
    duration: "2.5 hours",
    format: "Live Webinar",
    date: "May 18, 2025",
    price: "$59",
    rating: 4.9,
    reviews: 87,
    attendees: 32,
    image: "/leadership-team-meeting.png",
  },
  {
    id: "3",
    title: "Excel Advanced Formulas",
    trainer: "Elissa Denton",
    organization: "Centerpoint Leadership Services",
    description:
      "Master advanced Excel formulas and functions to analyze data more effectively. Learn VLOOKUP, HLOOKUP, INDEX/MATCH, and other powerful techniques.",
    duration: "2 hours",
    format: "Live Webinar",
    date: "May 20, 2025",
    price: "$45",
    rating: 4.7,
    reviews: 156,
    attendees: 60,
    image: "/excel-skills-growth.png",
  },
  {
    id: "4",
    title: "Supervisory Skills Workshop",
    trainer: "Tiffany Grimes",
    organization: "Empower",
    description:
      "Learn essential skills for new supervisors and managers. Topics include transitioning to management, effective communication, and performance management.",
    duration: "2.5 hours",
    format: "Live Webinar",
    date: "May 22, 2025",
    price: "$55",
    rating: 4.6,
    reviews: 92,
    attendees: 38,
    image: "/supervisor-coaching-session.png",
  },
  {
    id: "5",
    title: "Effective Communication in the Workplace",
    trainer: "Elissa Denton",
    organization: "Centerpoint Leadership Services",
    description:
      "Improve your communication skills to build better relationships and achieve better results. Learn active listening, conflict resolution, and persuasive communication.",
    duration: "2 hours",
    format: "Live Webinar",
    date: "May 25, 2025",
    price: "$49",
    rating: 4.8,
    reviews: 78,
    attendees: 42,
    image: "/team-communication-workshop.png",
  },
]

export function CourseList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">Showing {courses.length} results</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            trainer={course.trainer}
            organization={course.organization}
            duration={course.duration}
            format={course.format}
            date={course.date}
            price={course.price}
            rating={course.rating}
            reviews={course.reviews}
            image={course.image}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        <Link
          href="#"
          className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          aria-disabled="true"
        >
          Previous
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90"
        >
          1
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          2
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          3
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
    </div>
  )
}
