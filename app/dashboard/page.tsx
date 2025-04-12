import { redirect } from "next/navigation"
import { getUserDetails } from "@/lib/get-session"

export default async function DashboardRedirect() {
  const userDetails = await getUserDetails()

  if (!userDetails) {
    redirect("/signin")
  }

  // Redirect to the appropriate dashboard based on user role
  const role = userDetails.role

  if (role === "trainer") {
    redirect("/dashboard/trainer")
  } else if (role === "admin") {
    redirect("/dashboard/admin")
  } else {
    redirect("/dashboard/learner")
  }
}
