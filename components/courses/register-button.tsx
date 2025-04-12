import { Calendar, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function RegisterButton() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Registration</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-slate-400" />
              <span className="text-sm">Price</span>
            </div>
            <span className="font-semibold text-lg">$49</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-slate-400" />
              <span className="text-sm">Date</span>
            </div>
            <span className="text-sm">May 15, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-slate-400" />
              <span className="text-sm">Time</span>
            </div>
            <span className="text-sm">10:00 AM - 12:00 PM PST</span>
          </div>
          <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            <p className="font-medium">Limited spots available!</p>
            <p className="mt-1">Only 15 spots left for this session.</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  )
}
