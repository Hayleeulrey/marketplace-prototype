import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TrainerPreview() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">About the Trainer</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 mb-3">
            <AvatarImage src="/placeholder.svg?height=80&width=80&query=professional headshot" alt="Tiffany Grimes" />
            <AvatarFallback>TG</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg">Tiffany Grimes</h3>
          <p className="text-sm text-slate-500 mb-3">Empower</p>
          <p className="text-sm text-slate-600">
            Tiffany is a certified QuickBooks ProAdvisor with over 10 years of experience helping small businesses
            optimize their financial processes.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/trainers/tiffany-grimes">
            View Full Profile
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
