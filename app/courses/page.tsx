import { CourseListWithData } from "@/components/courses/course-list-with-data"
import { SidebarFilters } from "@/components/courses/sidebar-filters"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Training Directory</h1>
          <p className="mt-2 text-slate-500">Browse our curated selection of professional development trainings</p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-64 lg:w-72">
            <SidebarFilters />
          </div>
          <div className="flex-1">
            <CourseListWithData />
          </div>
        </div>
      </div>
    </div>
  )
}
