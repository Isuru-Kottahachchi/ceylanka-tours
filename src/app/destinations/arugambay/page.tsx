import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Wind, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Arugam Bay Sri Lanka: Ultimate Surf Guide 2025 | World-Class Surfing Paradise",
  description:
    "Discover Arugam Bay, Sri Lanka's premier surfing destination. Complete guide to world-class surf breaks, beach culture, wildlife, and the best things to do in this surfer's paradise.",
  keywords:
    "Arugam Bay Sri Lanka, surfing, surf breaks, Main Point, Whiskey Point, Pottuvil, elephant watching, beach culture",
  openGraph: {
    title: "Arugam Bay: World-Class Surfing Paradise Guide 2025",
    description: "Your complete guide to Sri Lanka's legendary surf destination",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function ArugamBayTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Perfect surf break at Arugam Bay with surfers riding waves, palm trees, and golden beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Arugam Bay</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">World-Class Surfing Paradise on Sri Lanka&apos;s East Coast</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              World&apos;s Top 10 Surf Spots
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Wind className="w-4 h-4 mr-1" />
              Consistent Surf Year-Round
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Arugam Bay: Where Surf Dreams Come Alive
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Arugam Bay, affectionately known as &quot;Arugam&quot; or &quot;A-Bay&quot; by locals and surfers worldwide, is Sri Lanka&apos;s
              undisputed surfing capital and one of the world&apos;s top 10 surf destinations. This laid-back fishing village
              on the east coast has evolved into a legendary surf haven while maintaining its authentic charm, rustic
              beauty, and welcoming community spirit.
            </p>
            <p className="text-lg">
              From perfect right-hand point breaks that peel for hundreds of meters to pristine beaches dotted with
              colorful fishing boats, from wild elephant encounters to vibrant beach culture, Arugam Bay offers an
              authentic Sri Lankan experience that combines world-class surfing with unforgettable adventures.
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
                Essential Arugam Bay Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Eastern Coast, 320km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> World-Class Right-Hand Point Break
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Surf:</strong> April to October
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Peak Season:</strong> June to September
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Must-See:</strong> Main Point Surf Break
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 5-7 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Surf Breaks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Famous Surf Breaks</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Perfect right-hand wave breaking at Arugam Bay Main Point with surfer riding the wave"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The legendary Main Point - one of the world&apos;s best right-hand point breaks
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Arugam Bay&apos;s Main Point is consistently ranked among the world&apos;s top 10 surf breaks, offering a perfect
                right-hand point break that can provide rides of up to 400 meters on the right day. The wave breaks over
                a rocky reef and sand bottom, creating different sections suitable for various skill levels.
              </p>
              <p>
                The consistent surf, warm water year-round, and the incredible length of rides make Arugam Bay a
                pilgrimage site for surfers from around the globe. Whether you&apos;re a beginner learning to surf or a pro
                looking for the ride of your life, A-Bay delivers unforgettable sessions.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Surf Break Highlights:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Main Point - World-class right-hand point break</li>
                  <li>• Whiskey Point - Powerful reef break for experts</li>
                  <li>• Pottuvil Point - Long rides, less crowded</li>
                  <li>• Baby Point - Perfect for beginners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Arugam Bay</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Main Point */}
            <Card>
              <CardHeader>
                <CardTitle>1. Main Point Surf Break</CardTitle>
                <CardDescription>The crown jewel of Sri Lankan surfing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Surfers at Main Point Arugam Bay with perfect waves breaking over the reef"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The legendary Main Point is what put Arugam Bay on the world surfing map. This right-hand point
                      break offers incredibly long rides, with waves that can peel for up to 400 meters on the best
                      days. The wave works on all tides and offers different sections for various skill levels.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Consistent waves April to October
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Suitable for intermediate to advanced surfers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple surf schools and board rentals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best surfed during morning sessions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elephant Rock */}
            <Card>
              <CardHeader>
                <CardTitle>2. Elephant Rock</CardTitle>
                <CardDescription>Scenic viewpoint and elephant watching spot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This large rock formation offers panoramic views of the coastline and is famous for wild elephant
                      sightings, especially during early morning and late afternoon. The rock gets its name from the
                      elephants that frequently visit the area to drink from nearby lagoons and graze on the beach.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Wild elephant sightings year-round
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise and sunset views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for photography and wildlife watching
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        15-minute walk from main beach
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Elephant Rock in Arugam Bay with wild elephants on the beach and scenic coastal views"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pottuvil Lagoon */}
            <Card>
              <CardHeader>
                <CardTitle>3. Pottuvil Lagoon</CardTitle>
                <CardDescription>Pristine lagoon perfect for kayaking and bird watching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Peaceful Pottuvil Lagoon with mangroves, birds, and traditional fishing boats"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This beautiful brackish water lagoon is separated from the ocean by a narrow strip of sand and
                      offers a completely different experience from the surf beaches. The lagoon is rich in birdlife,
                      surrounded by mangroves, and perfect for peaceful kayaking adventures.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent bird watching opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Kayaking and stand-up paddleboarding
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Mangrove ecosystem exploration
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional fishing village nearby
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Surf Culture & Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Surf Culture & Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Surf Schools & Equipment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Learn to Surf</h4>
                  <p className="text-sm text-muted-foreground">
                    Multiple surf schools offer lessons for all levels, from complete beginners to advanced coaching.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Board Rentals</h4>
                  <p className="text-sm text-muted-foreground">
                    Wide selection of surfboards available for rent, from longboards to high-performance shortboards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Surf Photography</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional surf photographers capture your sessions for unforgettable memories.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beyond Surfing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Wildlife Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit nearby Kumana National Park for bird watching and wildlife encounters.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fishing Trips</h4>
                  <p className="text-sm text-muted-foreground">
                    Join local fishermen for traditional fishing experiences and fresh seafood.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Yoga & Wellness</h4>
                  <p className="text-sm text-muted-foreground">
                    Beach yoga sessions and Ayurvedic treatments for post-surf relaxation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weather & Surf Seasons */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Surf Seasons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Surf Season</CardTitle>
                <CardDescription>June to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Consistent 4-8ft waves daily</li>
                  <li>• Offshore winds in the morning</li>
                  <li>• Dry weather, minimal rainfall</li>
                  <li>• Crowded but electric atmosphere</li>
                  <li>• Higher accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Good Surf Season</CardTitle>
                <CardDescription>April-May & October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smaller but consistent waves</li>
                  <li>• Less crowded lineups</li>
                  <li>• Occasional rain showers</li>
                  <li>• Perfect for beginners</li>
                  <li>• Better accommodation deals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Off Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smaller, inconsistent waves</li>
                  <li>• Onshore winds common</li>
                  <li>• Many businesses closed</li>
                  <li>• Peaceful, local atmosphere</li>
                  <li>• Lowest prices available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Arugam Bay Surf Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Arugam Bay is more than just a surf destination - it&apos;s a way of life. Here, the rhythm of the waves
                dictates the day, the community welcomes you like family, and every session in the water brings new
                adventures and friendships. Whether you catch your first wave or the wave of your life, A-Bay will leave
                an indelible mark on your soul.
              </p>
              <p className="text-muted-foreground mb-4">
                From dawn patrol sessions at Main Point to sunset beers watching elephants on the beach, from learning
                to surf with local legends to exploring pristine lagoons, Arugam Bay offers authentic experiences that
                connect you with nature, culture, and the pure joy of surfing.
              </p>
              <p className="text-muted-foreground font-medium">Catch your wave in paradise! 🏄‍♂️🌊</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
