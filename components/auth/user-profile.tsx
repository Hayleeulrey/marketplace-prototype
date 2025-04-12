"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { createClientComponentClient } from "@/lib/db"

export function UserProfile({ initialUserData }: { initialUserData: any }) {
  const [userData, setUserData] = useState(initialUserData)
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(initialUserData.name || "")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()
  const supabase = createClientComponentClient()

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const { error } = await supabase.from("users").update({ name }).eq("id", user?.id)

      if (error) {
        setError(error.message)
        return
      }

      setUserData({ ...userData, name })
      setSuccess("Profile updated successfully!")
      setIsEditing(false)
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Your Profile</CardTitle>
        <CardDescription>View and manage your account information</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        {isEditing ? (
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={userData.email} disabled className="bg-slate-50" />
              <p className="text-xs text-slate-500">Email cannot be changed</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Account Type</Label>
              <Input
                id="role"
                type="text"
                value={
                  userData.role === "learner" ? "Learner" : userData.role === "trainer" ? "Trainer" : userData.role
                }
                disabled
                className="bg-slate-50"
              />
              <p className="text-xs text-slate-500">Account type cannot be changed</p>
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Full Name</h3>
                <p>{userData.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Email</h3>
                <p>{userData.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Account Type</h3>
                <p>
                  {userData.role === "learner" ? "Learner" : userData.role === "trainer" ? "Trainer" : userData.role}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Member Since</h3>
                <p>{new Date(userData.created_at).toLocaleDateString()}</p>
              </div>
            </div>
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-slate-500">
          To change your password, use the &quot;Reset Password&quot; option from the account menu.
        </p>
      </CardFooter>
    </Card>
  )
}
