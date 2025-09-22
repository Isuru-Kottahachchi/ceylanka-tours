import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Landmark, Calendar, Star, Clock, Users, CheckCircle, Train, Coffee } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Hatton Sri Lanka: Complete Travel Guide 2025 | Tea Country, Waterfalls & Adventure",
  description:
    "Discover Hatton, the gateway to Sri Lanka's tea country. Explore lush plantations, scenic hikes, waterfalls, and colonial heritage with this detailed travel guide.",
  keywords:
    "Hatton Sri Lanka, tea country, Adam's Peak, Castlereagh, St Clair's Falls, Sri Lanka travel, hill country, waterfalls, scenic train, tea plantations",
  openGraph: {
    title: "Hatton Sri Lanka: Complete Travel Guide 2025",
    description: "Explore Hatton's tea estates, waterfalls, and adventure in Sri Lanka's hill country.",
    type: "article",
    images: ["/hatton-hero.jpg"],
  },
}

export default function HattonTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Hatton1.jpg"
          alt="Lush tea plantations and misty hills around Hatton, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hatton</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka’s Tea Country Gateway</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Landmark className="w-4 h-4 mr-1" />
              Hill Country
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Coffee className="w-4 h-4 mr-1" />
              Tea Plantations
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#highlights" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Highlights</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sample Itinerary</a>
          <a href="#culture" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Culture & Tea</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-40" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Hatton: Heart of Sri Lanka’s Tea Country</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Hatton is a charming hill town nestled in the heart of Sri Lanka’s central highlands, surrounded by rolling tea estates, misty mountains, and sparkling reservoirs. Known as the gateway to Adam’s Peak (Sri Pada), Hatton is a favorite stop for travelers seeking both adventure and tranquility.
            </p>
            <p className="text-lg">
              Whether you’re hiking through emerald plantations, chasing waterfalls, or sipping world-class Ceylon tea, Hatton offers a blend of colonial heritage, natural beauty, and authentic Sri Lankan hospitality. Its cool climate and scenic train rides make it a must-visit for anyone exploring the island’s hill country.
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
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Location:</strong> Central Province, Sri Lanka
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Elevation:</strong> 1,271 m (4,170 ft)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Population:</strong> Diverse Sinhalese & Tamil communities
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>Famous for:</strong> Tea estates, Adam’s Peak, waterfalls
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Best Time:</strong> December–April (dry season)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-cyan-500" />
                      <span>
                        <strong>Scenic Train:</strong> Kandy–Hatton–Ella route
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get There */}
          <section className="flex-1">
            <Card className="border-l-4 border-cyan-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Hatton
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-700 dark:text-cyan-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo or Kandy → Hatton</li>
                      <li>• <strong>Duration:</strong> 4–6 hours</li>
                      <li>• <strong>Highlight:</strong> Panoramic hill country views</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-700 dark:text-cyan-300">By Car/Taxi</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Colombo:</strong> 4–5 hours (130 km)</li>
                      <li>• <strong>From Kandy:</strong> 2.5–3 hours (72 km)</li>
                      <li>• <strong>Flexible:</strong> Stop at viewpoints and tea factories</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-cyan-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-cyan-700 dark:text-cyan-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book train tickets in advance for best seats</li>
                    <li>• Roads are winding—motion sickness tablets may help</li>
                    <li>• Early morning trains offer the best scenery</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Highlights & Attractions */}
        <section className="mb-12 scroll-mt-40" id="highlights">
          <h2 className="text-3xl font-bold mb-6">Top Highlights & Experiences in Hatton</h2>
          <div className="space-y-8">
            {/* Adam's Peak */}
            <Card>
              <CardHeader>
                <CardTitle>Adam’s Peak (Sri Pada)</CardTitle>
                <CardDescription>Sacred mountain pilgrimage and sunrise trek</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/adams-peak-hatton.jpg"
                    alt="Pilgrims climbing Adam's Peak at dawn near Hatton"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Adam’s Peak, or Sri Pada, is one of Sri Lanka’s most revered sites. Pilgrims and travelers alike climb its 5,500 steps—often at night—to witness a breathtaking sunrise and the mysterious shadow cast by the summit. The climb from Hatton (Nallathanniya) is the most popular and scenic route.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sacred to Buddhists, Hindus, Christians, and Muslims
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best season: December–May (pilgrimage season)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Night climb for sunrise views
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Castlereagh Reservoir */}
            <Card>
              <CardHeader>
                <CardTitle>Castlereagh Reservoir & Dam</CardTitle>
                <CardDescription>Serene lake views and luxury tea bungalows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/castlereagh-hatton.jpg"
                    alt="Castlereagh Reservoir with tea bungalows and misty hills"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Castlereagh Reservoir is a tranquil lake surrounded by lush tea estates and colonial-era bungalows. Enjoy kayaking, lakeside walks, or simply relax with a cup of Ceylon tea overlooking the water.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stay at luxury tea bungalows
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Scenic walks and birdwatching
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Kayaking and boat rides available
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* St. Clair's Falls */}
            <Card>
              <CardHeader>
                <CardTitle>St. Clair’s Falls</CardTitle>
                <CardDescription>One of Sri Lanka’s most beautiful waterfalls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/st-clairs-falls-hatton.jpg"
                    alt="St. Clair's Falls cascading through tea country near Hatton"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Known as the “Little Niagara of Sri Lanka,” St. Clair&apos;s Falls is a spectacular double cascade set amidst emerald tea fields. The viewpoint is easily accessible from the Hatton–Talawakele road.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best visited during/after rainy season
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for photography and picnics
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Combine with Devon Falls nearby
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Warleigh Church */}
            <Card>
              <CardHeader>
                <CardTitle>Warleigh Church</CardTitle>
                <CardDescription>Charming colonial-era Anglican church</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/warleigh-church-hatton.jpg"
                    alt="Stone facade of Warleigh Church by Castlereagh Lake"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1878, Warleigh Church is a picturesque stone church overlooking Castlereagh Lake. Its stained glass windows, antique pews, and tranquil setting make it a peaceful stop on your Hatton journey.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic colonial architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Open to visitors most days
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful lakeside views
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Maussakelle Reservoir & Tea Trails */}
            <Card>
              <CardHeader>
                <CardTitle>Maussakelle Reservoir & Tea Trails</CardTitle>
                <CardDescription>Scenic lake and world-renowned tea experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/maussakelle-hatton.jpg"
                    alt="Maussakelle Reservoir and tea trails near Hatton"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Maussakelle Reservoir is another stunning lake framed by tea gardens and forested hills. The area is famous for its luxury tea trails, where you can walk between historic planter bungalows and learn about the art of Ceylon tea.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided tea estate walks and tastings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Birdwatching and nature trails
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stay in restored colonial bungalows
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sample Itinerary */}
        <section className="mb-12 scroll-mt-40" id="itinerary">
          <h2 className="text-3xl font-bold mb-6">Sample 2-Day Hatton Itinerary</h2>
          <Card>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Day 1:</strong> Arrive by train, visit Castlereagh Reservoir, afternoon tea at a bungalow, sunset viewpoint.
                </li>
                <li>
                  <strong>Day 2:</strong> Early morning climb of Adam’s Peak, breakfast in Nallathanniya, explore St. Clair’s Falls and Devon Falls, visit Warleigh Church.
                </li>
                <li>
                  <strong>Optional:</strong> Add a third day for tea estate walks, Maussakelle Reservoir, or a scenic drive to Nuwara Eliya.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Local Culture & Tea Heritage */}
        <section className="mb-12 scroll-mt-40" id="culture">
          <h2 className="text-3xl font-bold mb-6">Culture, Tea Heritage & Local Life</h2>
          <Card>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Hatton’s identity is deeply tied to Sri Lanka’s tea industry. The region’s rolling hills are dotted with tea estates established during the British colonial era, and many local families have worked in tea for generations. Visitors can tour working factories, meet tea pluckers, and sample fresh Ceylon tea at its source.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Tea Factory Tours:</strong> Learn about the journey from leaf to cup and taste different grades of Ceylon tea.
                </li>
                <li>
                  <strong>Festivals:</strong> Experience local Hindu and Buddhist festivals, especially around Adam’s Peak pilgrimage season.
                </li>
                <li>
                  <strong>Colonial Heritage:</strong> Explore planter bungalows, churches, and railway stations from the British era.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Visiting Guide & Tips */}
        <section className="mb-12 scroll-mt-40" id="visiting-guide">
          <h2 className="text-3xl font-bold mb-6">Visiting Guide & Practical Tips</h2>
          <Card>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Weather:</strong> Hatton is cool year-round (15–25°C); bring layers and rain gear.
                </li>
                <li>
                  <strong>Best Time:</strong> December–April for clear skies and Adam’s Peak pilgrimage.
                </li>
                <li>
                  <strong>Accommodation:</strong> Options range from budget guesthouses to luxury tea bungalows.
                </li>
                <li>
                  <strong>Local Transport:</strong> Tuk-tuks and taxis are widely available; trains are scenic but can be slow.
                </li>
                <li>
                  <strong>Respect:</strong> Dress modestly at religious sites and be mindful of local customs.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final Inspiration */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-cyan-50 to-green-50 border-cyan-200">
            <CardHeader>
              <CardTitle className="text-cyan-800">Discover the Magic of Hatton</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Hatton is more than a stopover—it&apos;s a destination where Sri Lanka’s natural beauty, tea heritage, and spiritual traditions come together. Whether you’re trekking to Adam’s Peak, wandering through tea fields, or relaxing by a misty lake, Hatton promises memories that linger long after your journey ends.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your Hatton adventure and experience the soul of Sri Lanka’s hill country.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}