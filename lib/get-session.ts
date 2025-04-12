import { createServerComponentClient } from "@/lib/db"
import { redirect } from "next/navigation"

export async function getSession() {
  const supabase = createServerComponentClient()

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error("Error getting session:", error)
    return null
  }
}

export async function getUserDetails() {
  const supabase = createServerComponentClient()

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session?.user) {
      return null
    }

    const { data: userDetails, error } = await supabase.from("users").select("*").eq("id", session.user.id).single()

    if (error) {
      console.error("Error fetching user details:", error)
      return null
    }

    return {
      ...session.user,
      ...userDetails,
    }
  } catch (error) {
    console.error("Error getting user details:", error)
    return null
  }
}

export async function requireAuth(redirectTo = "/signin") {
  const session = await getSession()

  if (!session) {
    redirect(redirectTo)
  }

  return session
}
