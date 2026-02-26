import type { Metadata } from "next"
import AnuradhapuraClient from "./AnuradhapuraClient"

export const metadata: Metadata = {
  title: "Anuradhapura Sri Lanka: Complete Guide 2026 | Ancient Capital & Sacred City",
  description:
    "Explore Anuradhapura, Sri Lankas first capital and sacred Buddhist city. Complete guide to ancient ruins, sacred Bodhi tree, and UNESCO World Heritage sites.",
  keywords:
    "Anuradhapura, ancient capital Sri Lanka, sacred Bodhi tree, Buddhist temples, UNESCO World Heritage, ancient ruins, dagobas",
  alternates: {
    canonical: "https://www.ceylanka-tours.com/destinations/anuradhapura",
    languages: {
      "en": "https://www.ceylanka-tours.com/destinations/anuradhapura",
      "de": "https://www.ceylanka-tours.com/destinations/anuradhapura/de",
    },
  },
  openGraph: {
    title: "Anuradhapura: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lankas ancient sacred capital",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
    locale: "en_US",
    alternateLocale: ["de_DE"],
  },
}

export default function AnuradhapuraTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      <AnuradhapuraClient />
    </main>
  )
}
