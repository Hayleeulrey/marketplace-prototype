"use client"

import { useState } from "react"
import { Filter, Clock, DollarSign, Star, Calendar, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SidebarFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Accordion type="multiple" defaultValue={["format", "duration", "price", "rating"]}>
          <AccordionItem value="format">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                Format
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="format-live" />
                  <Label htmlFor="format-live">Live Webinar</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="format-recorded" />
                  <Label htmlFor="format-recorded">Recorded</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="format-workshop" />
                  <Label htmlFor="format-workshop">Workshop</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="format-inperson" />
                  <Label htmlFor="format-inperson">In-Person</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="duration">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Duration
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration-1" />
                  <Label htmlFor="duration-1">Under 1 hour</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration-2" />
                  <Label htmlFor="duration-2">1-2 hours</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration-3" />
                  <Label htmlFor="duration-3">2-4 hours</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration-4" />
                  <Label htmlFor="duration-4">4+ hours</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Price
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-1">
                <Slider value={priceRange} min={0} max={200} step={5} onValueChange={setPriceRange} />
                <div className="flex items-center justify-between">
                  <span className="text-sm">${priceRange[0]}</span>
                  <span className="text-sm">${priceRange[1]}</span>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-free" />
                    <Label htmlFor="price-free">Free</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price-paid" />
                    <Label htmlFor="price-paid">Paid</Label>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rating">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Rating
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating-4" />
                  <Label htmlFor="rating-4" className="flex items-center">
                    <span>4+ </span>
                    <Star className="ml-1 h-3 w-3 fill-amber-400 text-amber-400" />
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating-3" />
                  <Label htmlFor="rating-3" className="flex items-center">
                    <span>3+ </span>
                    <Star className="ml-1 h-3 w-3 fill-amber-400 text-amber-400" />
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating-2" />
                  <Label htmlFor="rating-2" className="flex items-center">
                    <span>2+ </span>
                    <Star className="ml-1 h-3 w-3 fill-amber-400 text-amber-400" />
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="date">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Date
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="date-today" />
                  <Label htmlFor="date-today">Today</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="date-week" />
                  <Label htmlFor="date-week">This week</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="date-month" />
                  <Label htmlFor="date-month">This month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="date-custom" />
                  <Label htmlFor="date-custom">Custom range</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm">
            Reset
          </Button>
          <Button size="sm">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}
