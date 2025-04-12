import Link from "next/link"
import { Star, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type CourseCardProps = {
  id: string
  title: string
  description: string
  trainer: string
  organization?: string
  duration: string
  format: string
  date?: string
  price: string | number
  rating: number
  reviews: number
  image: string
}

export function CourseCard({
  id,
  title,
  description,
  trainer,
  organization,
  duration,
  format,
  date,
  price,
  rating,
  reviews,
  image,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Image container - takes up 1/4 of the card width on md screens */}
        <div className="md:col-span-1 relative h-48 md:h-full">
          <img src={image || "/placeholder.svg"} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <Badge className="absolute top-2 right-2">{format}</Badge>
        </div>

        {/* Content container - takes up 3/4 of the card width on md screens */}
        <div className="md:col-span-3 p-4 flex flex-col">
          <div className="mb-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{title}</h3>
              <span className="font-semibold">{typeof price === "number" ? `$${price}` : price}</span>
            </div>
            <p className="text-sm text-slate-500">
              {trainer} {organization ? `· ${organization}` : ""}
            </p>
          </div>

          <p className="text-sm text-slate-600 line-clamp-2 mb-3">{description}</p>

          <div className="flex flex-wrap gap-3 text-sm mb-4">
            <div className="flex items-center gap-1 text-slate-500">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            {date && (
              <div className="flex items-center gap-1 text-slate-500">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">{rating}</span>
              <span className="text-slate-500">({reviews} reviews)</span>
            </div>
          </div>

          <div className="mt-auto flex justify-end">
            <Button asChild>
              <Link href={`/courses/${id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
