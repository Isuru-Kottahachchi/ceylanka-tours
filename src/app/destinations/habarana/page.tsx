import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Landmark, Star, Clock, Users, CheckCircle, Train, Leaf } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Habarana Sri Lanka: Complete Travel Guide 2025 | Safari, Culture & Adventure",
  description:
    "Explore Habarana, the gateway to Sri Lanka's cultural triangle and wildlife safaris. Discover top attractions, safari tips, and local experiences in this detailed travel guide.",
  keywords:
    "Habarana Sri Lanka, Minneriya safari, Sigiriya, cultural triangle, elephant gathering, Sri Lanka travel, eco lodges, wildlife, adventure",
  openGraph: {
    title: "Habarana Sri Lanka: Complete Travel Guide 2025",
    description: "Discover Habarana's wildlife, culture, and adventure in the heart of Sri Lanka.",
    type: "article",
    images: ["/habarana-hero.jpg"],
  },
}

export default function HabaranaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/habarana-hero.jpg"
          alt="Aerial view of Habarana's lush forests and lakes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Habarana</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Gateway to Sri Lanka’s Wild Heart</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/80 text-white border-blue-500">
              <Landmark className="w-4 h-4 mr-1" />
              Cultural Triangle
            </Badge>
            <Badge variant="secondary" className="bg-green-600/80 text-white border-green-500">
              <Leaf className="w-4 h-4 mr-1" />
              Wildlife & Nature
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Quick Facts</a>
          <a href="#highlights" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Highlights</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Sample Itinerary</a>
          <a href="#nature-culture" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Nature & Culture</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-24" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Habarana: Sri Lanka’s Safari & Culture Hub</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Habarana is a vibrant town at the crossroads of Sri Lanka’s cultural triangle and wild heartlands. Surrounded by lush forests, lakes, and ancient ruins, it’s the perfect base for exploring world-famous sites like Sigiriya, Minneriya National Park, and Dambulla Cave Temple.
            </p>
            <p className="text-lg">
              Whether you’re seeking thrilling elephant safaris, serene lakeside sunsets, or a taste of rural village life, Habarana offers a blend of adventure, heritage, and natural beauty. Its central location and eco-friendly lodges make it a favorite for travelers who want to experience the best of Sri Lanka’s interior.
            </p>
          </div>
        </section>

        {/* Quick Facts & How to Get There */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12" id="quick-facts">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-green-500" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Location:</strong> North Central Province, Sri Lanka
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Gateway to:</strong> Sigiriya, Minneriya, Dambulla
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Population:</strong> Small town, friendly locals
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>Famous for:</strong> Elephant safaris, eco-lodges, village tours
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Best Time:</strong> May–September (elephant gathering)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-cyan-500" />
                      <span>
                        <strong>Transport:</strong> On main Colombo–Trincomalee road/rail
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get There */}
          <section className="flex-1">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Habarana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Habarana (Trincomalee line)</li>
                      <li>• <strong>Duration:</strong> 4–5 hours</li>
                      <li>• <strong>Highlight:</strong> Scenic countryside views</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">By Car/Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Colombo:</strong> 4–5 hours (170 km)</li>
                      <li>• <strong>From Kandy:</strong> 2.5–3 hours (95 km)</li>
                      <li>• <strong>Direct buses:</strong> Available from major cities</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Arrange safari tours in advance during peak season</li>
                    <li>• Tuk-tuks are best for local travel</li>
                    <li>• Early morning or late afternoon safaris offer best wildlife sightings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Highlights & Attractions */}
        <section className="mb-12 scroll-mt-24" id="highlights">
          <h2 className="text-3xl font-bold mb-6">Top Highlights & Experiences in Habarana</h2>
          <div className="space-y-8">
            {/* Minneriya National Park */}
            <Card>
              <CardHeader>
                <CardTitle>Minneriya National Park</CardTitle>
                <CardDescription>World-famous for the annual elephant gathering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/minneriya-habarana.jpg"
                    alt="Elephants at Minneriya National Park near Habarana"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Minneriya is renowned for its “Gathering,” when hundreds of wild elephants congregate around the ancient tank during the dry season. Jeep safaris offer close encounters with elephants, birds, and other wildlife in a beautiful natural setting.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best time: June–September (elephant gathering)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Birdwatching and photography paradise
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Combine with Kaudulla or Hurulu Eco Park safaris
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Sigiriya Rock Fortress */}
            <Card>
              <CardHeader>
                <CardTitle>Sigiriya Rock Fortress</CardTitle>
                <CardDescription>UNESCO World Heritage and ancient royal citadel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/sigiriya-habarana.jpg"
                    alt="Sigiriya Rock Fortress near Habarana"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a short drive from Habarana, Sigiriya is one of Sri Lanka’s most iconic sites. Climb the ancient rock to see frescoes, water gardens, and panoramic views of the surrounding jungle.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Early morning climbs avoid crowds and heat
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        UNESCO World Heritage Site
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Combine with Pidurangala Rock for sunrise/sunset
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Habarana Lake */}
            <Card>
              <CardHeader>
                <CardTitle>Habarana Lake</CardTitle>
                <CardDescription>Peaceful spot for birdwatching and sunset walks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/habarana-lake.jpg"
                    alt="Habarana Lake at sunset"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The tranquil Habarana Lake is perfect for a relaxing stroll, birdwatching, or a sunset canoe ride. Local guides offer village tours and nature walks around the lake’s edge.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spot kingfishers, eagles, and water buffalo
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Canoe rides and village experiences available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for families and couples
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Dambulla Cave Temple */}
            <Card>
              <CardHeader>
                <CardTitle>Dambulla Cave Temple</CardTitle>
                <CardDescription>Ancient Buddhist cave complex with stunning murals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/dambulla-habarana.jpg"
                    alt="Dambulla Cave Temple interior with Buddha statues"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Dambulla’s Golden Temple is a UNESCO-listed cave complex filled with centuries-old murals and Buddha statues. It’s a spiritual and artistic highlight of the region, easily reached from Habarana.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Five caves with over 150 Buddha images
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic views from the temple entrance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Modest dress required for entry
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sample Itinerary */}
        <section className="mb-12 scroll-mt-24" id="itinerary">
          <h2 className="text-3xl font-bold mb-6">Sample 2-Day Habarana Itinerary</h2>
          <Card>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Day 1:</strong> Morning safari in Minneriya, lunch at a local eco-lodge, afternoon visit to Habarana Lake and village tour.
                </li>
                <li>
                  <strong>Day 2:</strong> Early climb of Sigiriya, breakfast with a view, explore Dambulla Cave Temple, sunset at Pidurangala Rock.
                </li>
                <li>
                  <strong>Optional:</strong> Add a third day for Kaudulla safari, Ayurveda spa, or a cycling tour through rural villages.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Nature, Culture & Local Life */}
        <section className="mb-12 scroll-mt-24" id="nature-culture">
          <h2 className="text-3xl font-bold mb-6">Nature, Culture & Local Life</h2>
          <Card>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Habarana is a hub for eco-tourism and cultural immersion. Many lodges offer village tours, cooking classes, and wildlife walks. The area is home to both Sinhalese and Tamil communities, and you’ll find a warm welcome in local homes and markets.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Village Tours:</strong> Experience traditional farming, cooking, and crafts.
                </li>
                <li>
                  <strong>Wildlife Walks:</strong> Spot monkeys, birds, and butterflies in the forests.
                </li>
                <li>
                  <strong>Local Cuisine:</strong> Try rice & curry, coconut sambol, and fresh lake fish.
                </li>
                <li>
                  <strong>Festivals:</strong> Join in Buddhist and Hindu celebrations if your visit coincides.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Visiting Guide & Tips */}
        <section className="mb-12 scroll-mt-24" id="visiting-guide">
          <h2 className="text-3xl font-bold mb-6">Visiting Guide & Practical Tips</h2>
          <Card>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Weather:</strong> Warm year-round (28–34°C); bring sun protection and light clothing.
                </li>
                <li>
                  <strong>Best Time:</strong> May–September for safaris and elephant gathering.
                </li>
                <li>
                  <strong>Accommodation:</strong> Choose from eco-lodges, boutique hotels, and safari camps.
                </li>
                <li>
                  <strong>Local Transport:</strong> Tuk-tuks and jeeps are best for short trips and safaris.
                </li>
                <li>
                  <strong>Respect:</strong> Dress modestly at temples and always ask before photographing locals.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final Inspiration */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Experience the Wild Heart of Sri Lanka</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Habarana is where Sri Lanka’s wild beauty and ancient culture meet. Whether you’re on safari, exploring ancient ruins, or relaxing by a tranquil lake, you’ll find adventure and serenity in equal measure. Make Habarana your base for an unforgettable journey through the island’s interior.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your Habarana adventure and discover the best of Sri Lanka’s nature and heritage.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}