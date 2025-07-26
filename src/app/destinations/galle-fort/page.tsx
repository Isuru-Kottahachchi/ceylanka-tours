import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Ship } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";


export const metadata: Metadata = {
  title: "Galle Fort Sri Lanka: Complete Travel Guide 2025 | UNESCO World Heritage Colonial Fortress",
  description: "Discover Galle Fort, Sri Lankas best-preserved colonial fortress. Complete guide to Dutch architecture, lighthouse, museums, and the best things to do in this UNESCO World Heritage site.",
  keywords: "Galle Fort, Sri Lanka colonial history, Dutch fort, UNESCO World Heritage, Galle lighthouse, colonial architecture",
  openGraph: {
    title: "Galle Fort Sri Lanka: Complete Travel Guide 2025",
    description: "Your ultimate guide to exploring Galle Forts colonial charm",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function GalleFortTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/galle-fort-sarmat-batagov-unsplash.jpg"
          alt="Stunning aerial view of Galle Fort showing Dutch colonial architecture surrounded by Indian Ocean waves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Galle Fort</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Where Colonial History Meets Ocean Waves</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Ship className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Built 1663 AD
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Galle Fort: A Living Colonial Museum</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into a time machine and walk through 400 years of colonial history at Galle Fort, Sri Lankas
              best-preserved European fortress in Asia. This UNESCO World Heritage site is not just a museum piece –
              its a vibrant, living community where colonial Dutch architecture meets modern Sri Lankan life, all
              surrounded by the endless blue of the Indian Ocean.
            </p>
            <p className="text-lg">
              From cobblestone streets lined with boutique hotels and art galleries to ancient ramparts offering
              spectacular sunset views, Galle Fort is where history comes alive. Whether youre a history buff,
              architecture enthusiast, or simply seeking Instagram-worthy moments, this coastal gem promises an
              unforgettable journey through time.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Galle Fort Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span><strong>Built by Dutch:</strong> 1663 AD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ship className="w-4 h-4 text-green-500" />
                    <span><strong>Area:</strong> 52 hectares (130 acres)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span><strong>Population:</strong> ~4,000 residents</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>Distance from Colombo:</strong> 119km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span><strong>UNESCO Status:</strong> World Heritage (1988)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span><strong>Best Visit Duration:</strong> 1-2 days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Fascinating History of Galle Fort</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Historical Dutch colonial buildings inside Galle Fort showing traditional architecture with red tile roofs"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Well-preserved Dutch colonial architecture within the fort walls
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Galle Forts story begins in 1505 when Portuguese explorers first arrived, but it was the Dutch who
                transformed it into the magnificent fortress we see today. Built between 1663-1729, the fort served as
                the Dutch East India Companys main stronghold in Sri Lanka.
              </p>
              <p>
                The British later took control in 1796, adding their own architectural touches. What makes Galle Fort
                unique is that its not an abandoned relic – its a thriving community where families have lived for
                generations, maintaining the colonial charm while embracing modern life.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Colonial Timeline:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• 1505: Portuguese arrival</li>
                  <li>• 1663-1729: Dutch construction period</li>
                  <li>• 1796: British takeover</li>
                  <li>• 1948: Sri Lankan independence</li>
                  <li>• 1988: UNESCO World Heritage status</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-See Attractions in Galle Fort</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Fort Ramparts */}
            <Card>
              <CardHeader>
                <CardTitle>1. The Historic Ramparts</CardTitle>
                <CardDescription>Walk along 400-year-old fortress walls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Ramparts_in_galle.jpeg"
                    alt="People walking along Galle Fort ramparts during golden hour with ocean views and lighthouse visible"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The forts massive stone ramparts offer the best views in Galle. Walk the complete circuit (about 2km)
                      for stunning ocean vistas, especially magical during sunset. The walls are up to 12 meters high and
                      2 meters thick in some places.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best sunset viewing spot in Galle
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for photography and selfies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Free to walk and explore
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Galle Lighthouse */}
            <Card>
              <CardHeader>
                <CardTitle>2. Galle Lighthouse</CardTitle>
                <CardDescription>Sri Lankas oldest lighthouse still in operation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1938, this 26-meter tall lighthouse is not just functional but also the most photographed
                      landmark in Galle Fort. Located at the southeastern tip of the fort, it offers panoramic views of
                      the Indian Ocean and the forts architecture.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Iconic photo spot for Instagram
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful during both sunrise and sunset
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great spot for watching local fishermen
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Galle-Lighthouse.jpeg"
                    alt="White Galle Lighthouse standing tall against blue sky with ocean waves crashing at its base"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dutch Reformed Church */}
            <Card>
              <CardHeader>
                <CardTitle>3. Dutch Reformed Church</CardTitle>
                <CardDescription>Historic church with fascinating colonial tombstones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interior of Dutch Reformed Church in Galle Fort showing colonial architecture and historical tombstones"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1755, this beautiful church showcases Dutch colonial architecture and houses fascinating
                      tombstones of Dutch colonial officials. The floor is literally paved with tombstones, each telling
                      a story of colonial life and death in tropical Ceylon.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Visiting Information:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Open: 9:00 AM - 5:00 PM daily</li>
                        <li>• Entry: Small donation appreciated</li>
                        <li>• Photography allowed inside</li>
                        <li>• Guided tours available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* National Maritime Museum */}
            <Card>
              <CardHeader>
                <CardTitle>4. National Maritime Museum</CardTitle>
                <CardDescription>Discover Sri Lankas maritime heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Housed in a beautiful Dutch warehouse, this museum showcases Sri Lankas rich maritime history.
                      From ancient fishing techniques to colonial trade routes, its a fascinating journey through the
                      islands relationship with the sea.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient ship models and maritime artifacts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colonial period trading displays
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional fishing equipment
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Maritime museum displays showing ancient ship models and colonial trading artifacts"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Shopping & Dining */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shopping & Dining in Galle Fort</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 728x90 Leaderboard]
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Unique Shopping Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Barefoot Gallery</h4>
                  <p className="text-sm text-muted-foreground">Contemporary Sri Lankan art, textiles, and handicrafts in a beautiful colonial building.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stick No Bills</h4>
                  <p className="text-sm text-muted-foreground">Trendy boutique with local designer clothing and accessories.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Orchid House</h4>
                  <p className="text-sm text-muted-foreground">Antiques, vintage items, and unique souvenirs from colonial times.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Gem Shops</h4>
                  <p className="text-sm text-muted-foreground">Authentic Sri Lankan gems and jewelry from reputable dealers.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Must-Try Restaurants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Pedlars Inn Cafe</h4>
                  <p className="text-sm text-muted-foreground">Colonial ambiance with excellent Sri Lankan and international cuisine.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fortaleza Restaurant</h4>
                  <p className="text-sm text-muted-foreground">Rooftop dining with fort views and fresh seafood specialties.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">The Fort Printers</h4>
                  <p className="text-sm text-muted-foreground">Fine dining in a restored colonial mansion with garden seating.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mamas Galle Fort Roof Cafe</h4>
                  <p className="text-sm text-muted-foreground">Budget-friendly with great views and local dishes.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Donts for Galle Fort</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - Make the Most of Your Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Walk the ramparts at sunset:</strong> The golden hour views are absolutely magical
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Explore the side streets:</strong> Discover hidden cafes and local life
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Visit during weekdays:</strong> Less crowded and more peaceful
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Try local seafood:</strong> Fresh catch from the Indian Ocean
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect local residents:</strong> Its a living community, not just a tourist site
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DONTs - Avoid These Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont visit only during midday:</strong> Very hot and crowded with tour groups
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont buy gems from street vendors:</strong> Stick to reputable shops with certificates
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont climb on fort walls:</strong> Dangerous and damages historical structures
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont litter:</strong> Help preserve this UNESCO World Heritage site
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont rush through:</strong> Take time to appreciate the colonial architecture
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Galle Fort</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Options</CardTitle>
                <CardDescription>$20-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guesthouses within the fort</li>
                  <li>• Backpacker hostels nearby</li>
                  <li>• Family-run homestays</li>
                  <li>• Basic but clean accommodations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Boutique Hotels</CardTitle>
                <CardDescription>$50-150 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Restored colonial mansions</li>
                  <li>• Unique character and charm</li>
                  <li>• Central fort locations</li>
                  <li>• Personalized service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Luxury Properties</CardTitle>
                <CardDescription>$150+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Historic luxury hotels</li>
                  <li>• Premium amenities and spas</li>
                  <li>• Ocean or fort views</li>
                  <li>• Fine dining restaurants</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/destinations/kandeviharaya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Jungle beach Roomassala</CardTitle>
                  <CardDescription>Best views of Galle</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/jungle-beach.jpeg"
                    alt="View of Jungle Beach"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                      Explore the scenic Jungle Beach with its lush greenery and clear waters. Perfect for a relaxing day trip.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    See More →
                  </span>
                </CardContent>
              </Card>
            </Link>
                <Link href="/destinations/kandeviharaya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Kanneliya</CardTitle>
                  <CardDescription>Part of a Sinharaja Forest</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/jungle-beach.jpeg"
                    alt="View of Jungle Beach"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                      Explore the scenic Jungle Beach with its lush greenery and clear waters. Perfect for a relaxing day trip.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    See More →
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Jungle beach Roomassala</CardTitle>
                <CardDescription>Best views of Galle</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/jungle-beach.jpeg"
                  alt="View of Jungle Beach"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the scenic Jungle Beach with its lush greenery and clear waters. Perfect for a relaxing day trip.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kanneliya</CardTitle>
                <CardDescription>Part of a Sinharaja Forest</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dambulla Cave Temple showing ancient Buddhist statues and paintings inside rock caves"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  UNESCO site with 5 cave temples filled with Buddha statues and ancient paintings. 20 minutes away.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Waligama</CardTitle>
                <CardDescription>Elephant gathering</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Large herd of elephants gathering at Minneriya National Park during dry season"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for The Gathering - hundreds of elephants come together during dry season. 1 hour drive.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Galle Fort Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Galle Fort is more than just a historical site – its a living testament to Sri Lankas colonial past
                and vibrant present. Every cobblestone street, every colonial building, and every sunset view from the
                ramparts tells a story of cultural fusion and resilience.
              </p>
              <p className="text-muted-foreground mb-4">
                Take your time to wander, discover hidden corners, chat with local residents, and soak in the unique
                atmosphere where 400 years of history blend seamlessly with contemporary Sri Lankan life. The forts
                magic lies not just in its architecture, but in its soul.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your journey through time at Galle Fort! 🏰🌊
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
