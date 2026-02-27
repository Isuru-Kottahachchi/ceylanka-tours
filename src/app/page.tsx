import { FeaturedArticles } from "@/components/featured-articles"
import { HeroSection } from "@/components/hero-section"
import { Newsletter } from "@/components/newsletter"
import { PopularDestinations } from "@/components/popular-destinations"
import { TravelTips } from "@/components/travel-tips"
// import { AdBanner } from "@/components/ui/ad-banner"
import { SriLankaAboutCompact } from "./about-srilanka/page"
import  Explore  from "@/app/destinations/Explore"
// import { ClientFeedback } from "@/components/client-feedback"

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      {/* <AdBanner slot="homepage-top" /> */}
      <SriLankaAboutCompact />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="theme-divider" />
      </div>
      <PopularDestinations />
      <FeaturedArticles />
      <Explore/>
      <TravelTips />
      <Newsletter />
      {/* <ClientFeedback /> */}
    </main>
  )
}
