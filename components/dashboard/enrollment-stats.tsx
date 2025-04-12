import { BarChart, Calendar, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function EnrollmentStats({ trainerId }: { trainerId: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-0.5">
          <CardTitle className="text-base">Enrollment Statistics</CardTitle>
          <CardDescription>Track your training enrollments</CardDescription>
        </div>
        <Select defaultValue="30days">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-100 p-2 mb-2">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold">83</h3>
              <p className="text-xs text-slate-500">Total Enrollments</p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-green-100 p-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">+12%</h3>
              <p className="text-xs text-slate-500">Growth Rate</p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-amber-100 p-2 mb-2">
                <Calendar className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold">3</h3>
              <p className="text-xs text-slate-500">Active Trainings</p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-purple-100 p-2 mb-2">
                <BarChart className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold">27.6</h3>
              <p className="text-xs text-slate-500">Avg. Enrollments</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h4 className="text-sm font-medium">Enrollment by Training</h4>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">QuickBooks for Small Businesses</span>
                <span className="text-xs font-medium">45</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-blue-500" style={{ width: "54%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">Supervisory Skills Workshop</span>
                <span className="text-xs font-medium">38</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-blue-500" style={{ width: "46%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">Excel Advanced Formulas</span>
                <span className="text-xs font-medium">0</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-blue-500" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
