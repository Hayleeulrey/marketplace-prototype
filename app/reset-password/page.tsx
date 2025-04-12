import { ResetPasswordForm } from "@/components/auth/reset-password-form"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Set New Password</h1>
          <p className="mt-2 text-slate-500">Create a new password for your account</p>
        </div>
        <ResetPasswordForm />
      </div>
    </div>
  )
}
