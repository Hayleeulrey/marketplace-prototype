import { UserProfile } from "@/components/auth/user-profile"
import { getUserDetails, requireAuth } from "@/lib/get-session"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const session = await requireAuth()
  const userDetails = await getUserDetails()

  if (!userDetails) {
    redirect("/signin")
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        <UserProfile initialUserData={userDetails} />
      </div>
    </div>
  )
}
