import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TrainingDescription() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Training Description</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-slate-600">
          <p>
            This comprehensive QuickBooks training is designed specifically for small business owners and their staff
            who want to efficiently manage their finances and accounting processes.
          </p>
          <p>
            Whether you're new to QuickBooks or looking to enhance your skills, this training will provide you with
            practical knowledge and techniques to streamline your financial management.
          </p>
          <h3 className="text-base font-medium text-slate-900 mt-6 mb-2">What You'll Learn:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Setting up your QuickBooks account properly for your business type</li>
            <li>Tracking income and expenses efficiently</li>
            <li>Managing invoices, bills, and payments</li>
            <li>Reconciling bank and credit card accounts</li>
            <li>Creating and understanding financial reports</li>
            <li>Year-end procedures and tax preparation</li>
            <li>Time-saving tips and best practices</li>
          </ul>
          <h3 className="text-base font-medium text-slate-900 mt-6 mb-2">Who Should Attend:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Small business owners and entrepreneurs</li>
            <li>Bookkeepers and accounting staff</li>
            <li>Administrative assistants handling financial tasks</li>
            <li>Anyone responsible for managing business finances</li>
          </ul>
          <h3 className="text-base font-medium text-slate-900 mt-6 mb-2">Prerequisites:</h3>
          <p>
            Basic computer skills and familiarity with accounting concepts are helpful but not required. This training
            is suitable for beginners and intermediate users.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
