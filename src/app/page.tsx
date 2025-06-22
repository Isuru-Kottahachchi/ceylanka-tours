import { FeaturedArticles } from "@/components/featured-articles"
import { HeroSection } from "@/components/hero-section"
import { Newsletter } from "@/components/newsletter"
import { PopularDestinations } from "@/components/popular-destinations"
import { TravelTips } from "@/components/travel-tips"
import { AdBanner } from "@/components/ui/ad-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AdBanner slot="homepage-top" />
      <FeaturedArticles />
      <PopularDestinations />
      <TravelTips />
      <Newsletter />
    </main>
  )
}
