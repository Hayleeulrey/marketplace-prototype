import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { getSession } from "@/lib/get-session"
import { redirect } from "next/navigation"

export default async function ForgotPasswordPage() {
  const session = await getSession()

  // Redirect if already signed in
  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="mt-2 text-slate-500">We'll send you a link to reset your password</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
