import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Landmark, Calendar, Star, Clock, Users, CheckCircle, Train, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Idalgashinna Sri Lanka: Complete Travel Guide 2025 | Scenic Hikes, Tea Trails & Misty Views",
  description:
    "Discover Idalgashinna, a hidden gem in Sri Lanka's hill country. Explore breathtaking hikes, panoramic viewpoints, tea plantations, and the iconic railway station in this detailed travel guide.",
  keywords:
    "Idalgashinna Sri Lanka, hill country, scenic hikes, tea plantations, railway station, Sri Lanka travel, Ohiya, Haputale, mountain views, trekking",
  openGraph: {
    title: "Idalgashinna Sri Lanka: Complete Travel Guide 2025",
    description: "Explore Idalgashinna's misty mountains, tea trails, and scenic railway in Sri Lanka's hill country.",
    type: "article",
    images: ["/idalgashinna-hero.jpg"],
  },
}

export default function IdalgashinnaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/idalgashinna-hero.jpg"
          alt="Idalgashinna railway station surrounded by misty hills and tea plantations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Idalgashinna</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka’s Misty Mountain Escape</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Uva Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Landmark className="w-4 h-4 mr-1" />
              Hill Country
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              Scenic Hikes
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-emerald-700 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-emerald-700 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition">Quick Facts</a>
          <a href="#highlights" className="px-3 py-1 rounded-full font-medium text-emerald-700 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition">Highlights</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-emerald-700 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition">Sample Itinerary</a>
          <a href="#nature-culture" className="px-3 py-1 rounded-full font-medium text-emerald-700 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition">Nature & Culture</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-emerald-700 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-24" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Idalgashinna: Sri Lanka’s Hidden Hill Country Gem</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Idalgashinna is a tranquil mountain village perched on a ridge between Haputale and Ohiya, famed for its breathtaking views, cool climate, and untouched natural beauty. With its iconic railway station, rolling tea estates, and mist-shrouded peaks, Idalgashinna is a paradise for hikers, photographers, and anyone seeking a peaceful escape from the crowds.
            </p>
            <p className="text-lg">
              The area is renowned for its scenic walking trails, rare flora, and panoramic lookouts that stretch from the southern plains to the central highlands. Whether you arrive by train or on foot, Idalgashinna promises a unique blend of adventure and serenity in Sri Lanka’s hill country.
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
                  <Star className="w-5 h-5 text-emerald-500" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Location:</strong> Uva Province, Sri Lanka
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Elevation:</strong> 1,615 m (5,299 ft)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Population:</strong> Small tea estate community
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>Famous for:</strong> Railway station, hiking, tea trails
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Best Time:</strong> March–May & December–February
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-cyan-500" />
                      <span>
                        <strong>Scenic Train:</strong> Kandy–Ella–Badulla line
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get There */}
          <section className="flex-1">
            <Card className="border-l-4 border-emerald-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Idalgashinna
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Kandy/Ella/Badulla → Idalgashinna</li>
                      <li>• <strong>Duration:</strong> 6–8 hours from Colombo</li>
                      <li>• <strong>Highlight:</strong> One of Sri Lanka’s most scenic train rides</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">By Car/Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Haputale:</strong> 30 min (12 km)</li>
                      <li>• <strong>From Ella:</strong> 1 hr (30 km)</li>
                      <li>• <strong>Note:</strong> Last stretch is winding and best by tuk-tuk or local taxi</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book train tickets in advance, especially for observation car</li>
                    <li>• Bring warm clothing—nights can be chilly</li>
                    <li>• Carry snacks and water; shops are limited in the area</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Highlights & Attractions */}
        <section className="mb-12 scroll-mt-24" id="highlights">
          <h2 className="text-3xl font-bold mb-6">Top Highlights & Experiences in Idalgashinna</h2>
          <div className="space-y-8">
            {/* Idalgashinna Railway Station */}
            <Card>
              <CardHeader>
                <CardTitle>Idalgashinna Railway Station</CardTitle>
                <CardDescription>Historic hill country station with panoramic views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/idalgashinna-station.jpg"
                    alt="Idalgashinna railway station with mist and tea fields"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1893, Idalgashinna’s station is one of the most picturesque on the island. Surrounded by misty hills and tea gardens, it’s a favorite stop for train travelers and photographers. The station’s colonial charm and tranquil setting make it a unique destination in itself.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Panoramic views of both southern plains and central hills
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Ideal for sunrise and sunset photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Quiet, uncrowded, and atmospheric
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Idalgashinna to Ohiya Hike */}
            <Card>
              <CardHeader>
                <CardTitle>Idalgashinna to Ohiya Hike</CardTitle>
                <CardDescription>One of Sri Lanka’s most scenic railway walks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/idalgashinna-ohiya-hike.jpg"
                    alt="Hiking trail between Idalgashinna and Ohiya"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The trail from Idalgashinna to Ohiya follows the railway line through tunnels, pine forests, and tea estates. It’s a moderate 8 km hike with breathtaking views and cool mountain air—perfect for nature lovers and adventure seekers.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Walk through 14 railway tunnels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Spectacular views of valleys and cloud forests
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Finish at Ohiya, gateway to Horton Plains
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Tea Estate Walks */}
            <Card>
              <CardHeader>
                <CardTitle>Tea Estate Walks</CardTitle>
                <CardDescription>Explore lush plantations and meet local tea pluckers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/idalgashinna-tea.jpg"
                    alt="Tea estate landscape in Idalgashinna"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Idalgashinna is surrounded by historic tea estates, many dating back to the British era. Guided walks offer insight into tea cultivation, local life, and the region’s unique biodiversity.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Learn about Ceylon tea production
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Spot rare orchids and mountain birds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Enjoy fresh mountain air and scenic vistas
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Misty Viewpoints */}
            <Card>
              <CardHeader>
                <CardTitle>Misty Viewpoints</CardTitle>
                <CardDescription>Unforgettable sunrise and sunset panoramas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/idalgashinna-view.jpg"
                    alt="Sunrise view from Idalgashinna hills"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The ridges around Idalgashinna offer some of the best viewpoints in Sri Lanka. On clear days, you can see all the way to the southern coast; on misty mornings, the hills float above a sea of clouds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Sunrise and sunset are magical times
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Bring a camera and warm jacket
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        Look for eagles and endemic wildlife
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
          <h2 className="text-3xl font-bold mb-6">Sample 2-Day Idalgashinna Itinerary</h2>
          <Card>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Day 1:</strong> Arrive by train, explore Idalgashinna station, afternoon tea estate walk, sunset at a viewpoint.
                </li>
                <li>
                  <strong>Day 2:</strong> Early morning hike to Ohiya, breakfast picnic, return via tea trails, visit local village.
                </li>
                <li>
                  <strong>Optional:</strong> Add a third day for birdwatching, photography, or a trip to Horton Plains.
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
                Idalgashinna’s charm lies in its blend of natural beauty and rural simplicity. The area is home to Tamil tea estate communities, and visitors are often welcomed with genuine hospitality. Local guides can introduce you to traditional lifestyles, mountain cuisine, and the region’s unique flora and fauna.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Village Visits:</strong> Learn about tea plucking, local crafts, and mountain traditions.
                </li>
                <li>
                  <strong>Wildlife:</strong> Spot sambur deer, monkeys, and rare birds in the forests.
                </li>
                <li>
                  <strong>Local Cuisine:</strong> Try spicy curries, fresh vegetables, and sweet mountain tea.
                </li>
                <li>
                  <strong>Festivals:</strong> Experience Hindu and Tamil celebrations if your visit coincides.
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
                  <strong>Weather:</strong> Cool and misty (10–22°C); pack layers and rain gear.
                </li>
                <li>
                  <strong>Best Time:</strong> March–May and December–February for clear views.
                </li>
                <li>
                  <strong>Accommodation:</strong> Simple guesthouses, eco-lodges, and tea bungalows.
                </li>
                <li>
                  <strong>Local Transport:</strong> Tuk-tuks and trains are best for getting around.
                </li>
                <li>
                  <strong>Respect:</strong> Dress modestly, be mindful of estate workers’ privacy, and take your litter with you.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final Inspiration */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">Discover the Tranquility of Idalgashinna</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Idalgashinna is a place to slow down, breathe in the mountain air, and reconnect with nature. Whether you’re hiking misty trails, sipping tea with locals, or simply soaking in the views, this hidden gem offers a truly authentic hill country experience.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your Idalgashinna adventure and uncover one of Sri Lanka’s best-kept secrets.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}