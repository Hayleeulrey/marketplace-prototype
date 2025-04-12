import { DollarSign, CreditCard, TrendingUp, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TrainerRevenue({ trainerId }: { trainerId: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-0.5">
          <CardTitle className="text-base">Revenue Overview</CardTitle>
          <CardDescription>Track your earnings and payouts</CardDescription>
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
              <div className="rounded-full bg-green-100 p-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">$3,842</h3>
              <p className="text-xs text-slate-500">Total Revenue</p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-100 p-2 mb-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold">$2,689</h3>
              <p className="text-xs text-slate-500">Available for Payout</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Revenue by Training</h4>
            <span className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18% from last month
            </span>
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">QuickBooks for Small Businesses</span>
                <span className="text-xs font-medium">$2,205</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-green-500" style={{ width: "57%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">Supervisory Skills Workshop</span>
                <span className="text-xs font-medium">$1,637</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-green-500" style={{ width: "43%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">Excel Advanced Formulas</span>
                <span className="text-xs font-medium">$0</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-green-500" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h4 className="text-sm font-medium">Recent Transactions</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-slate-100 p-1">
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">Payout</p>
                  <p className="text-xs text-slate-500">Apr 28, 2025</p>
                </div>
              </div>
              <span className="text-xs font-medium">$1,250.00</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-slate-100 p-1">
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">Payout</p>
                  <p className="text-xs text-slate-500">Mar 30, 2025</p>
                </div>
              </div>
              <span className="text-xs font-medium">$980.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-slate-100 p-1">
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">Payout</p>
                  <p className="text-xs text-slate-500">Feb 28, 2025</p>
                </div>
              </div>
              <span className="text-xs font-medium">$1,120.00</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
