import { FeaturedArticles } from "@/components/featured-articles"
import { HeroSection } from "@/components/hero-section"
import { Newsletter } from "@/components/newsletter"
import { PopularDestinations } from "@/components/popular-destinations"
import { TravelTips } from "@/components/travel-tips"
import { AdBanner } from "@/components/ui/ad-banner"
import { SriLankaAboutCompact } from "./about-srilanka/page"
import  Explore  from "@/app/destinations/Explore"
// import { ClientFeedback } from "@/components/client-feedback"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <AdBanner slot="homepage-top" /> */}
      <SriLankaAboutCompact />
      <PopularDestinations />
      <FeaturedArticles />
      <Explore/>
      <TravelTips />
      <Newsletter />
      {/* <ClientFeedback /> */}
    </main>
  )
}
