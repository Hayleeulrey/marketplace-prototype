import type React from "react"
import { redirect } from "next/navigation"
import { requireAuth, getUserDetails } from "@/lib/get-session"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAuth()
  const userDetails = await getUserDetails()

  if (!userDetails) {
    redirect("/signin")
  }

  // Redirect to the appropriate dashboard based on user role
  const role = userDetails.role

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-slate-50">{children}</main>
    </div>
  )
}
