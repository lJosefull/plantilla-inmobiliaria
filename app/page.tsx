import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSearch } from "@/components/home/hero-search"
import { FeaturedProperties } from "@/components/home/featured-properties"
import { FeaturesSection } from "@/components/home/features-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSearch />
      <FeaturedProperties />
      <FeaturesSection />
      <Footer />
    </div>
  )
}
