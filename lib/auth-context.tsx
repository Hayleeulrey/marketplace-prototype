"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { Session, User } from "@supabase/supabase-js"
import { createClientComponentClient } from "@/lib/db"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signUp: (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => Promise<{
    error: any | null
    success: boolean
  }>
  signIn: (
    email: string,
    password: string,
  ) => Promise<{
    error: any | null
    success: boolean
  }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{
    error: any | null
    success: boolean
  }>
  updatePassword: (password: string) => Promise<{
    error: any | null
    success: boolean
  }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
        setIsLoading(false)
        return
      }
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)

      if (event === "SIGNED_IN") {
        router.refresh()
      }
      if (event === "SIGNED_OUT") {
        router.refresh()
        router.push("/")
      }
    })

    setData()

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [router, supabase])

  const signUp = async (email: string, password: string, name: string, role: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role,
          },
        },
      })

      if (error) {
        return { error, success: false }
      }

      // If sign up is successful, create a user record in our database
      if (data.user) {
        const { error: profileError } = await supabase.from("users").insert({
          id: data.user.id,
          email: email,
          name: name,
          role: role,
        })

        if (profileError) {
          console.error("Error creating user profile:", profileError)
          return { error: profileError, success: false }
        }

        // If the user is a trainer, create a trainer profile
        if (role === "trainer") {
          const { error: trainerError } = await supabase.from("trainer_profiles").insert({
            user_id: data.user.id,
            bio: "",
            areas_of_expertise: [],
          })

          if (trainerError) {
            console.error("Error creating trainer profile:", trainerError)
            return { error: trainerError, success: false }
          }
        }
      }

      return { error: null, success: true }
    } catch (error) {
      console.error("Unexpected error during sign up:", error)
      return { error, success: false }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { error, success: false }
      }

      return { error: null, success: true }
    } catch (error) {
      console.error("Unexpected error during sign in:", error)
      return { error, success: false }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) {
        return { error, success: false }
      }

      return { error: null, success: true }
    } catch (error) {
      console.error("Unexpected error during password reset:", error)
      return { error, success: false }
    }
  }

  const updatePassword = async (password: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password,
      })

      if (error) {
        return { error, success: false }
      }

      return { error: null, success: true }
    } catch (error) {
      console.error("Unexpected error during password update:", error)
      return { error, success: false }
    }
  }

  const value = {
    user,
    session,
    isLoading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
