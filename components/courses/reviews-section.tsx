"use client"

import { useState } from "react"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for reviews
const reviews = [
  {
    id: "1",
    name: "Michael Johnson",
    date: "April 10, 2025",
    rating: 5,
    comment:
      "This QuickBooks training was exactly what I needed for my small business. Tiffany explained everything clearly and provided practical examples that I could immediately apply. The breakout sessions were also very helpful for addressing specific questions.",
    helpful: 12,
    avatar: "/placeholder.svg?height=40&width=40&query=person 1",
  },
  {
    id: "2",
    name: "Sarah Williams",
    date: "April 8, 2025",
    rating: 4,
    comment:
      "Very informative session with lots of practical tips. I've been using QuickBooks for a while but still learned several new shortcuts and better ways to organize my finances. Would recommend to both beginners and intermediate users.",
    helpful: 8,
    avatar: "/placeholder.svg?height=40&width=40&query=person 2",
  },
  {
    id: "3",
    name: "David Chen",
    date: "April 5, 2025",
    rating: 5,
    comment:
      "As someone who was intimidated by accounting software, this training made QuickBooks accessible and understandable. Tiffany is patient and knowledgeable, and the course materials are excellent references to keep handy.",
    helpful: 15,
    avatar: "/placeholder.svg?height=40&width=40&query=person 3",
  },
]

export function ReviewsSection() {
  const [filter, setFilter] = useState("all")

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Reviews</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm">Filter:</span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Filter reviews" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reviews</SelectItem>
                <SelectItem value="5">5 Star</SelectItem>
                <SelectItem value="4">4 Star</SelectItem>
                <SelectItem value="3">3 Star</SelectItem>
                <SelectItem value="2">2 Star</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50">
            <div className="text-center">
              <div className="text-3xl font-bold">4.8</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= 4.8 ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-slate-500 mt-1">124 reviews</div>
            </div>
            <div className="flex-1">
              <div className="space-y-1">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <div className="text-sm text-slate-500 w-8">{rating} star</div>
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{
                          width:
                            rating === 5
                              ? "70%"
                              : rating === 4
                                ? "20%"
                                : rating === 3
                                  ? "7%"
                                  : rating === 2
                                    ? "2%"
                                    : "1%",
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-slate-500 w-8">
                      {rating === 5 ? "70%" : rating === 4 ? "20%" : rating === 3 ? "7%" : rating === 2 ? "2%" : "1%"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
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
                    <div className="flex items-center gap-4 mt-3">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h4 className="font-medium mb-2">Write a Review</h4>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">Your rating:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="focus:outline-none">
                    <Star className="h-5 w-5 fill-slate-200 text-slate-200 hover:fill-amber-400 hover:text-amber-400" />
                  </button>
                ))}
              </div>
            </div>
            <Textarea placeholder="Share your experience with this training..." className="min-h-[120px]" />
            <div className="flex justify-end mt-3">
              <Button>Submit Review</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
