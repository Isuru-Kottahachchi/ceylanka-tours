import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Calendar, Star, Camera, CheckCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thalpe Beach Sri Lanka: Complete Travel Guide 2025 | Coral Wells & Natural Beauty",
  description:
    "Discover Thalpe Beach, Sri Lanka's hidden coastal gem. Complete travel guide with tips, photos, best time to visit, and everything you need to know about the famous coral wells, sea urchins, and more.",
  keywords: "Thalpe Beach, Sri Lanka, coral wells, sea urchins, travel guide, best beaches, southern coast, swimming, snorkeling, tourism",
  authors: [{ name: "Sri Lanka Beach Expert" }],
  openGraph: {
    title: "Thalpe Beach Sri Lanka: Complete Travel Guide 2025",
    description: "Your ultimate guide to Thalpe Beach, including coral wells and sea urchin safety tips.",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalpe Beach Sri Lanka: Complete Travel Guide 2025",
    description: "Your ultimate guide to Thalpe Beach, including coral wells and sea urchin safety tips.",
  },
}

export default function ThalpeBeachGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Thalpe-beach.jpg"
          alt="Golden sands and turquoise water at Thalpe Beach, Sri Lanka, with coral wells in the foreground"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Thalpe Beach</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Hidden Coral Coast</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-1" />
              Unique Coral Wells
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Best: December–April
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Thalpe Beach</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Thalpe Beach is a peaceful stretch of golden sand just south of Galle. Known for its crystal-clear water, palm trees, and famous coral wells, Thalpe is perfect for relaxing, swimming, and exploring Sri Lanka's southern coast.
            </p>
            <p className="text-lg">
              The beach is less crowded than Unawatuna or Mirissa, making it ideal for families and couples. Early mornings and late afternoons are the best times to enjoy the calm sea and gentle breeze.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Thalpe Beach Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Location:</strong> 10 km south of Galle
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Highlight:</strong> Natural coral wells
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Best Season:</strong> December–April
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-pink-500" />
                    <span>
                      <strong>Photo Spots:</strong> Sunrise, coral pools, palm trees
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Family Friendly:</strong> Yes (watch for sea urchins)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Safety:</strong> Beware of sea urchins in the coral wells
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Famous Coral Wells */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Famous Coral Wells</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Thalpe-coral-ponds.jpg"
                alt="Natural coral wells at Thalpe Beach, Sri Lanka, with clear water and ocean beyond"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The unique coral wells of Thalpe—hand-cut pools in the reef, perfect for a dip at low tide
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Thalpe's coral wells are shallow pools carved into the coral reef by local fishermen decades ago. These natural pools fill with seawater at high tide and are perfect for a refreshing dip when the tide is low. The water is clear and calm, making it a favorite spot for families and Instagram photos.
              </p>
              <p>
                <strong>Important:</strong> Always check the tide times before visiting. The coral can be sharp, and sea urchins sometimes hide in the wells—wear water shoes and step carefully.
              </p>
            </div>
          </div>
        </section>

        {/* What to Do at Thalpe Beach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Do at Thalpe Beach</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Swim in the coral wells at low tide</li>
            <li>Relax on the soft sand under palm trees</li>
            <li>Try local seafood at beachside cafes</li>
            <li>Watch the sunrise or sunset over the Indian Ocean</li>
            <li>Snorkel (with care) to spot colorful fish and coral</li>
            <li>Take photos of the unique reef and pools</li>
          </ul>
        </section>

        {/* Safety & Sea Urchins */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 dark:from-red-900 dark:to-pink-900 dark:border-red-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-300" />
                Safety: Watch for Sea Urchins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-red-800 dark:text-red-200">
                Sea urchins are sometimes found in the coral wells and shallow reef. Their spines are sharp and can be painful if stepped on. Always look before you step, and consider wearing water shoes for extra protection.
              </p>
              <ul className="list-disc pl-5 text-sm mb-2 text-red-900 dark:text-red-200">
                <li>If stung, remove spines gently and seek medical help if needed</li>
                <li>Do not touch or disturb sea life</li>
                <li>Supervise children closely in the water</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* How to Get There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Get to Thalpe Beach</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-6">
            <ul>
              <li><strong>By Road:</strong> Thalpe is about 10 km south of Galle on the Matara Road (A2). Tuk-tuks, taxis, and buses are available from Galle and Unawatuna.</li>
              <li><strong>By Train:</strong> The nearest railway station is Unawatuna, just a short tuk-tuk ride away.</li>
              <li><strong>By Air:</strong> The closest airport is Koggala (domestic), or Bandaranaike International Airport (Colombo) for international flights.</li>
            </ul>
            <p>
              The beach is easy to find and well signposted. Parking is available near the main beach entrance.
            </p>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700">Best Time to Visit Thalpe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                The best time to visit Thalpe Beach is from December to April, when the sea is calm and the weather is sunny. Avoid the southwest monsoon (May–September), as the sea can be rough and swimming is not safe.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Enjoy Your Thalpe Adventure!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Thalpe Beach is a true hidden gem on Sri Lanka's southern coast. Whether you come for the coral wells, the peaceful sand, or the beautiful sunsets, you'll leave with wonderful memories. Respect the reef, watch for sea urchins, and enjoy your time in paradise!
              </p>
              <p className="text-muted-foreground font-medium">
                Safe travels and happy beach days! 🏖️🌊
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
