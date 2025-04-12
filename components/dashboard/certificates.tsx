import Link from "next/link"
import { Award, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for certificates
const certificates = [
  {
    id: "1",
    title: "Leadership Essentials",
    trainer: "Trever Yarish",
    organization: "Building the Unbreakable",
    completionDate: "April 10, 2025",
    image: "/placeholder.svg?height=100&width=150&query=certificate",
  },
]

export function Certificates({ userId }: { userId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Certificates</CardTitle>
        <CardDescription>Your earned certificates and achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-200 rounded-lg"
            >
              <div className="sm:w-[150px] flex-shrink-0">
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <div>
                  <h3 className="font-semibold">{certificate.title}</h3>
                  <p className="text-sm text-slate-500">
                    {certificate.trainer} · {certificate.organization}
                  </p>
                </div>
                <p className="text-sm text-slate-500 mt-2">Completed on {certificate.completionDate}</p>
                <div className="flex items-center gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {certificates.length === 0 && (
          <div className="text-center py-8">
            <Award className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium">No certificates yet</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">Complete courses to earn certificates</p>
            <Button asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
