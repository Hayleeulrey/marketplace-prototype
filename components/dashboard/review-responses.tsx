import { MessageSquare, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for reviews
const reviews = [
  {
    id: "1",
    name: "Michael Johnson",
    date: "April 10, 2025",
    training: "QuickBooks for Small Businesses",
    rating: 5,
    comment:
      "This QuickBooks training was exactly what I needed for my small business. Tiffany explained everything clearly and provided practical examples that I could immediately apply. The breakout sessions were also very helpful for addressing specific questions.",
    response: "",
    avatar: "/placeholder.svg?height=40&width=40&query=person 1",
  },
  {
    id: "2",
    name: "Sarah Williams",
    date: "April 8, 2025",
    training: "QuickBooks for Small Businesses",
    rating: 4,
    comment:
      "Very informative session with lots of practical tips. I've been using QuickBooks for a while but still learned several new shortcuts and better ways to organize my finances. Would recommend to both beginners and intermediate users.",
    response:
      "Thank you for your feedback, Sarah! I'm glad you found the session helpful even as an experienced user. I'm always looking to provide value for users at all levels.",
    avatar: "/placeholder.svg?height=40&width=40&query=person 2",
  },
  {
    id: "3",
    name: "David Chen",
    date: "April 5, 2025",
    training: "Supervisory Skills Workshop",
    rating: 5,
    comment:
      "As someone who was intimidated by managing a team, this training made supervision accessible and understandable. Tiffany is patient and knowledgeable, and the course materials are excellent references to keep handy.",
    response: "",
    avatar: "/placeholder.svg?height=40&width=40&query=person 3",
  },
]

export function ReviewResponses({ trainerId }: { trainerId: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Reviews & Responses</CardTitle>
          <CardDescription>Manage feedback from your training participants</CardDescription>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by training" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Trainings</SelectItem>
            <SelectItem value="quickbooks">QuickBooks for Small Businesses</SelectItem>
            <SelectItem value="supervisory">Supervisory Skills Workshop</SelectItem>
            <SelectItem value="excel">Excel Advanced Formulas</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{review.name}</h4>
                    <span className="text-sm text-slate-500">{review.date}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Training: {review.training}</p>
                  <div className="flex mt-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm">{review.comment}</p>

                  {review.response ? (
                    <div className="mt-4 bg-slate-50 p-3 rounded-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24&query=trainer" alt="Trainer" />
                          <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">Your Response</span>
                      </div>
                      <p className="text-sm text-slate-600">{review.response}</p>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          Edit Response
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-slate-400" />
                        <span className="text-sm font-medium">Add a Response</span>
                      </div>
                      <Textarea placeholder="Write your response to this review..." className="min-h-[80px] text-sm" />
                      <div className="flex justify-end mt-2">
                        <Button size="sm">Submit Response</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
