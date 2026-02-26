import type { Metadata } from "next"
import AnuradhapuraClient from "../AnuradhapuraClient"

export const metadata: Metadata = {
  title: "Anuradhapura Sri Lanka: Vollständiger Reiseführer 2025 | Antike Hauptstadt & Heilige Stadt",
  description:
    "Entdecken Sie Anuradhapura, Sri Lankas erste Hauptstadt und heilige buddhistische Stadt. Vollständiger Reiseführer zu antiken Ruinen, dem heiligen Bodhi-Baum und UNESCO-Weltkulturerbestätten.",
  keywords:
    "Anuradhapura, antike Hauptstadt Sri Lanka, heiliger Bodhi-Baum, buddhistische Tempel, UNESCO-Welterbe, antike Ruinen, Dagobas, Sri Lanka Reiseführer Deutsch",
  alternates: {
    canonical: "https://www.ceylanka-tours.com/destinations/anuradhapura/de",
    languages: {
      de: "https://www.ceylanka-tours.com/destinations/anuradhapura/de",
      en: "https://www.ceylanka-tours.com/destinations/anuradhapura",
    },
  },
  openGraph: {
    title: "Anuradhapura Reiseführer 2025 | Sri Lanka",
    description:
      "Ihr vollständiger Reiseführer für Sri Lankas antike heilige Hauptstadt – Tempel, Dagobas, Bodhi-Baum und mehr.",
    type: "article",
    images: ["/Anuradhapura.jpg"],
    locale: "de_DE",
    alternateLocale: ["en_US"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function AnuradhapuraDe() {
  return (
    <main className="min-h-screen bg-background">
      <AnuradhapuraClient defaultLang="de" />
    </main>
  )
}
