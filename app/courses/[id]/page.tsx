import { CourseDetailWithData } from "@/components/courses/course-detail-with-data"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return <CourseDetailWithData courseId={params.id} />
}
