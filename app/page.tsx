import { HeroSection } from "@/components/home/hero-section"
import { SearchBar } from "@/components/home/search-bar"
import { CategoriesGrid } from "@/components/home/categories-grid"
import { FeaturedTrainingsCarousel } from "@/components/home/featured-trainings-carousel"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { CallToActions } from "@/components/home/call-to-actions"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchBar />
      <CategoriesGrid />
      <FeaturedTrainingsCarousel />
      <TestimonialsPreview />
      <CallToActions />
    </div>
  )
}
