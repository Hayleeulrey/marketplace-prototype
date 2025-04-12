import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Agenda() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Training Agenda</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-base font-medium">Introduction (10 minutes)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Welcome and trainer introduction</li>
              <li>Overview of the training objectives</li>
              <li>Brief participant introductions</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">QuickBooks Setup (20 minutes)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Choosing the right QuickBooks version for your business</li>
              <li>Setting up your company file</li>
              <li>Customizing preferences and settings</li>
              <li>Chart of accounts setup and organization</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Daily Operations (30 minutes)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Recording sales and income</li>
              <li>Managing expenses and bills</li>
              <li>Handling customer payments</li>
              <li>Bank and credit card transactions</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Breakout Session (15 minutes)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Small group discussions on current challenges</li>
              <li>Sharing best practices</li>
              <li>Q&A with peers</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Financial Reporting (25 minutes)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Essential reports for small businesses</li>
              <li>Understanding profit and loss statements</li>
              <li>Balance sheet review</li>
              <li>Cash flow management</li>
              <li>Customizing reports for your needs</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Advanced Features (15 minutes)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Time tracking and job costing</li>
              <li>Inventory management</li>
              <li>Budgeting tools</li>
              <li>App integrations and extensions</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-medium">Wrap-Up and Next Steps (5 minutes)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Summary of key takeaways</li>
              <li>Resources for continued learning</li>
              <li>Information about follow-up sessions</li>
              <li>Feedback survey</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
