import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              className="pl-10 h-12 rounded-full border-slate-200"
              placeholder="Search for trainings, topics, or trainers..."
              type="search"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10">Search</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
