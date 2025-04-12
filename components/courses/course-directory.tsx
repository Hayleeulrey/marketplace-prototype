import { SidebarFilters } from "./sidebar-filters"
import { CourseList } from "./course-list"

export function CourseDirectory() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="w-full md:w-64 lg:w-72">
        <SidebarFilters />
      </div>
      <div className="flex-1">
        <CourseList />
      </div>
    </div>
  )
}
