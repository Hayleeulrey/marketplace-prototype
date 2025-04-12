"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserMenu } from "@/components/auth/user-menu"

export function MainNav() {
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()

  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Soup to Nuts</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/courses"
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/courses") ? "text-primary font-semibold border-b-2 border-primary" : ""
              }`}
            >
              Courses
            </Link>
            <Link
              href="/trainers"
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/trainers") ? "text-primary font-semibold border-b-2 border-primary" : ""
              }`}
            >
              Trainers
            </Link>
            <Link
              href="/community"
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/community") ? "text-primary font-semibold border-b-2 border-primary" : ""
              }`}
            >
              Community
            </Link>
            <Link
              href="/about"
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/about") ? "text-primary font-semibold border-b-2 border-primary" : ""
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">Soup to Nuts</span>
            </Link>
            <div className="my-4">
              <div className="flex items-center border rounded-md overflow-hidden">
                <Input placeholder="Search..." className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/courses"
                className={`px-2 py-1 text-lg ${
                  isActive("/courses") ? "text-primary font-semibold bg-primary/10 rounded" : ""
                }`}
              >
                Courses
              </Link>
              <Link
                href="/trainers"
                className={`px-2 py-1 text-lg ${
                  isActive("/trainers") ? "text-primary font-semibold bg-primary/10 rounded" : ""
                }`}
              >
                Trainers
              </Link>
              <Link
                href="/community"
                className={`px-2 py-1 text-lg ${
                  isActive("/community") ? "text-primary font-semibold bg-primary/10 rounded" : ""
                }`}
              >
                Community
              </Link>
              <Link
                href="/about"
                className={`px-2 py-1 text-lg ${
                  isActive("/about") ? "text-primary font-semibold bg-primary/10 rounded" : ""
                }`}
              >
                About
              </Link>
            </nav>
            <div className="mt-6 space-y-2">
              <Button asChild className="w-full">
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/signup">Register</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center md:hidden">
          <span className="font-bold text-xl">Soup to Nuts</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {showSearch ? (
            <div className="flex items-center border rounded-md overflow-hidden mr-2">
              <Input
                placeholder="Search..."
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-[200px]"
              />
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)} className="mr-1">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <div className="hidden md:block">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
