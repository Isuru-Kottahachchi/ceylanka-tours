import type { Metadata } from "next"
import { Clock, MapPin, Camera, AlertTriangle, Star, Calendar, Users, Building, Home, History, Leaf } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Richmond Castle Kalutara: Complete Visitor Guide 2025 | Colonial Mansion in Sri Lanka",
  description:
    "Explore Richmond Castle, a magnificent Edwardian mansion in Kalutara. Complete guide with architecture details, historical insights, and visitor information about this unique blend of Eastern and Western design.",
  keywords: "Richmond Castle, Kalutara, Sri Lanka mansion, colonial architecture, Mudaliyar Padikara, historical buildings, cultural tourism, Edwardian architecture",
  authors: [{ name: "Heritage Explorer" }],
  openGraph: {
    title: "Richmond Castle Kalutara: Complete Visitor Guide 2025",
    description: "Discover the grandeur of Richmond Castle, a unique Edwardian mansion blending Eastern and Western architecture",
    type: "article",
    images: ["/richmond-castle-main.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richmond Castle Kalutara: Complete Visitor Guide 2025",
    description: "Discover the grandeur of Richmond Castle, a unique Edwardian mansion blending Eastern and Western architecture",
  },
}

export default function RichmondCastleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Richmond-Castle.jpg"
          alt="Grand facade of Richmond Castle showing its magnificent Edwardian architecture and surrounding gardens"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Richmond Castle</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">An Architectural Gem in Kalutara</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Kalutara, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Building className="w-4 h-4 mr-1" />
              Mansion
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              Built 1896
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 theme-text">
            Richmond Castle: A Blend of Eastern and Western Grandeur
          </h2>
          <div className="prose prose-lg max-w-none theme-text leading-relaxed font-medium">
            <p className="text-lg mb-4 tracking-wide">
              Richmond Castle stands as one of Sri Lanka&apos;s most remarkable examples of colonial-era
              architecture, combining the grandeur of Edwardian design with local architectural elements.
              Built in 1896 by the wealthy landowner Mudaliyar Don Arthur de Silva Wijesinghe Siriwardena,
              this magnificent mansion showcases the cultural fusion that characterized Sri Lanka&apos;s elite
              society at the turn of the 20th century.
            </p>
            <p className="text-lg mb-4">
              The castle&apos;s design was inspired by an Indian Maharaja&apos;s palace that caught the Mudaliyar&apos;s
              attention during his travels. He commissioned its construction to British architects, who
              created this unique blend of British colonial architecture with Indian and Sinhalese design
              elements, resulting in a structure that stands unique among Sri Lanka&apos;s historical buildings.
            </p>
            <p className="text-lg mb-4">
              Spread across 42 acres of lush gardens, the two-story mansion boasts 99 doors and 34 windows, 
              each crafted with intricate detail. The building incorporates rare specimens of glass, wood, 
              and tiles imported from various parts of the world, reflecting the wealth and sophisticated 
              taste of its original owner.
            </p>
            <p className="text-lg">
              Today, Richmond Castle serves as both a historical monument and a children&apos;s home, managed by
              the Public Trustee of Sri Lanka. Its preservation allows visitors to step back in time and 
              experience the opulence of colonial-era Sri Lanka while supporting a worthy social cause.
            </p>
          </div>

          <div className="mt-6 p-4 richmond-amber-box border-l-4 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold richmond-amber-title mb-2">Visitor Information</h4>
                <p className="text-sm richmond-amber-text mb-2">
                  <strong>Opening Hours:</strong> Open daily from 8:30 AM to 4:30 PM. Last entry at 3:30 PM.
                </p>
                <p className="text-sm richmond-amber-text mb-2">
                  <strong>Guided Tours:</strong> Available in English and Sinhala. Tours last approximately 1 hour.
                </p>
                <p className="text-sm richmond-amber-text">
                  <strong>Photography:</strong> Permitted in most areas. Flash photography restricted in certain rooms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-blue-500" />
                    <span className="theme-text-muted">
                      <strong>Built:</strong> 1896
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="theme-text-muted">
                      <strong>Built By:</strong> Mudaliyar Don Arthur de Silva
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-orange-500" />
                    <span className="theme-text-muted">
                      <strong>Style:</strong> Edwardian Architecture
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="theme-text-muted">
                      <strong>Location:</strong> Kalutara, Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-500" />
                    <span className="theme-text-muted">
                      <strong>Visit Duration:</strong> 1-2 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-green-500" />
                    <span className="theme-text-muted">
                      <strong>Property Size:</strong> 42 acres
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architectural Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 theme-text">Architectural Highlights</h2>
          
          <div className="grid gap-8">
            {/* Exterior Features */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-500" />
                  Exterior Design Elements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <Image
                      src="/richmond-exterior.jpg"
                      alt="Exterior view of Richmond Castle showing its grand facade and architectural details"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="theme-text-muted mb-4">
                      The castle&apos;s exterior showcases a masterful blend of European and Asian architectural
                      styles, featuring distinctive elements that make it unique among colonial-era buildings 
                      in Sri Lanka.
                    </p>
                    <h4 className="font-semibold mb-2 theme-text">Notable Features:</h4>
                    <ul className="space-y-1 text-sm theme-text-muted">
                      <li>• Grand entrance portico</li>
                      <li>• Ornate balconies and verandahs</li>
                      <li>• Decorative window treatments</li>
                      <li>• Intricate woodwork details</li>
                      <li>• Symmetrical facade design</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interior Features */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-purple-500" />
                  Interior Splendor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="theme-text-muted mb-4">
                  The interior of Richmond Castle reflects the opulent lifestyle of its original owner, 
                  featuring imported materials and craftwork from around the world, creating an atmosphere 
                  of refined luxury.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 theme-text">Materials and Finishes</h4>
                    <ul className="space-y-2 theme-text-muted">
                      <li>• Italian floor tiles</li>
                      <li>• Scottish glass windows</li>
                      <li>• Burma teak woodwork</li>
                      <li>• Indian marble accents</li>
                      <li>• English ironwork</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 theme-text">Interior Spaces</h4>
                    <ul className="space-y-2 theme-text-muted">
                      <li>• Grand ballroom</li>
                      <li>• Library with rare books</li>
                      <li>• Formal dining hall</li>
                      <li>• Living quarters</li>
                      <li>• Service areas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gardens and Grounds */}
        <section className="mb-12">
          <Card className="richmond-green-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 richmond-green-title">
                <Leaf className="w-5 h-5 text-green-500" />
                The Gardens and Grounds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="theme-text-muted">
                  The castle is surrounded by 42 acres of meticulously maintained gardens that showcase both 
                  local and exotic plant species. The landscape design combines formal European garden layouts 
                  with tropical elements.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 richmond-green-title">Garden Features</h4>
                    <ul className="space-y-2 theme-text-muted">
                      <li>• Formal rose gardens</li>
                      <li>• Fruit orchards</li>
                      <li>• Water features</li>
                      <li>• Walking paths</li>
                      <li>• Ancient trees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 richmond-green-title">Plant Species</h4>
                    <ul className="space-y-2 theme-text-muted">
                      <li>• Tropical flowering plants</li>
                      <li>• Medicinal herbs</li>
                      <li>• Fruit trees</li>
                      <li>• Ornamental palms</li>
                      <li>• Native species</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Information */}
        <section className="mb-12">
          <Card className="richmond-blue-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 richmond-blue-title">
                <MapPin className="w-5 h-5 text-blue-500" />
                How to Visit Richmond Castle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 richmond-blue-title">From Colombo</h4>
                  <ul className="space-y-2 theme-text-muted">
                    <li>• <strong>Distance:</strong> 42 km south</li>
                    <li>• <strong>Duration:</strong> 1.5-2 hours</li>
                    <li>• <strong>Transport:</strong> Train or private vehicle</li>
                    <li>• <strong>Route:</strong> Galle Road (A2)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 richmond-blue-title">Local Access</h4>
                  <ul className="space-y-2 theme-text-muted">
                    <li>• 3 km from Kalutara town</li>
                    <li>• Tuk-tuks available from town</li>
                    <li>• Well-signposted location</li>
                    <li>• Parking available on-site</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 richmond-blue-tip rounded-lg">
                <p className="text-sm richmond-blue-tip-text font-medium">
                  <strong>💡 Pro Tip:</strong> Book a guided tour in advance to ensure availability. 
                  Morning visits offer the best lighting for photography and cooler temperatures for 
                  exploring the gardens.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photography Guide */}
        <section className="mb-12">
          <Card className="richmond-pink-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 richmond-pink-title">
                <Camera className="w-5 h-5 text-pink-500" />
                Photography Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 richmond-pink-title">Best Photo Spots</h4>
                  <ul className="space-y-2 theme-text-muted">
                    <li>• <strong>Main Facade:</strong> Morning light best</li>
                    <li>• <strong>Grand Staircase:</strong> Interior architectural detail</li>
                    <li>• <strong>Rose Garden:</strong> Early morning for flowers</li>
                    <li>• <strong>Balconies:</strong> Panoramic views</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 richmond-pink-title">Photography Tips</h4>
                  <ul className="space-y-2 theme-text-muted">
                    <li>• Wide-angle lens for interiors</li>
                    <li>• Tripod allowed with permission</li>
                    <li>• Check lighting restrictions inside</li>
                    <li>• Consider HDR for contrast</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
