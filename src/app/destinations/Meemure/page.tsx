import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Car, TreePine, Home, Utensils, Bed, Compass, Cloud, XCircle, Sun, CloudRain, Battery, Flashlight, Shirt, Footprints } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Meemure Village: Complete Travel Guide 2025 | Hidden Mountain Paradise Sri Lanka",
  description: "Discover Meemure, Sri Lanka's last traditional village nestled in the Knuckles Mountains. Complete travel guide with authentic culture, mountain trekking, and village experiences.",
  keywords: "Meemure village, Knuckles Mountains, traditional Sri Lankan village, authentic culture, mountain trekking, village tourism, Kandy attractions, off-the-beaten-path Sri Lanka, rural tourism",
  authors: [{ name: "Travel Explorer" }],
  openGraph: {
    title: "Meemure Village: Complete Travel Guide 2025",
    description: "Your ultimate guide to visiting Meemure village, Sri Lanka's hidden mountain paradise",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meemure Village: Complete Travel Guide 2025",
    description: "Your ultimate guide to visiting Meemure village, Sri Lanka's hidden mountain paradise",
  },
}

export default function MeemureTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Scenic view of Meemure village nestled in the lush Knuckles Mountains of Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meemure Village</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Experience Sri Lanka&apos;s Last Traditional Mountain Village</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Knuckles Mountains, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Mountain className="w-4 h-4 mr-1" />
              1,100m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Users className="w-4 h-4 mr-1" />
              Living Heritage Village
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Meemure: Sri Lanka&apos;s Last Traditional Village</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step back in time and discover Meemure, a hidden mountain village where life has remained unchanged for over a thousand years! Nestled deep in the pristine Knuckles Mountain Range, this extraordinary village offers you a rare glimpse into authentic Sinhalese culture that has been preserved in its purest form, untouched by the rapid modernization of the outside world.
            </p>
            <p className="text-lg mb-4">
              Imagine a place where there&apos;s no electricity, no mobile phone coverage, and no modern conveniences - yet the people live in complete harmony with nature, following traditions passed down through countless generations. Meemure is home to about 60 families who are descendants of King Rajasinghe II&apos;s soldiers, who were stationed here in the 17th century to guard against Portuguese invasions.
            </p>
            <p className="text-lg mb-4">
              The journey to Meemure is an adventure in itself, requiring a challenging 4WD ride through mountain terrain that will test your endurance but reward you with breathtaking views. Once you arrive, you&apos;ll find yourself in a world where time stands still - where buffalo still plow the fields, traditional wooden houses dot the landscape, and villagers weave baskets and craft tools using techniques unchanged for centuries.
            </p>
            <p className="text-lg">
              This isn&apos;t just a tourist destination - it&apos;s a living, breathing community that welcomes visitors to experience their way of life. You can participate in traditional farming, learn ancient crafts, enjoy authentic village cuisine cooked over wood fires, and sleep in traditional homes under a canopy of stars unmarred by light pollution.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Important Travel Notice</h4>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>4WD Vehicle Required:</strong> The final 20km to Meemure requires a 4WD vehicle with experienced mountain drivers. Regular cars cannot make this journey safely.
                </p>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>No Modern Amenities:</strong> The village has no electricity, internet, or mobile coverage. Come prepared for a digital detox and authentic rural experience.
                </p>
                <p className="text-sm text-amber-700">
                  Book accommodation in advance through local guides in Hunnasgiriya village, as options are limited and fill up quickly during peak season.
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
                Quick Facts About Meemure Village
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1000+ years ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 1,100 meters above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> About 60 families (200 people)
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Knuckles Mountains, Kandy District
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Status:</strong> Protected Conservation Area
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Access:</strong> 4WD vehicle only
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting to Meemure from Kandy */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <MapPin className="w-5 h-5" />
                How to Travel from Kandy to Meemure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">By 4WD Vehicle (Only Option)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 45km from Kandy</li>
                    <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                    <li>• <strong>Cost:</strong> $40-60 USD return trip</li>
                    <li>• <strong>Route:</strong> Kandy → Hunnasgiriya → Meemure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Via Public Transport + 4WD</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bus/van to Hunnasgiriya from Kandy</li>
                    <li>• Hire 4WD vehicle and driver in Hunnasgiriya</li>
                    <li>• Total journey: 4-5 hours</li>
                    <li>• More economical but less convenient</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Book 4WD vehicles through registered operators in Hunnasgiriya village. Local drivers know the challenging mountain roads and weather conditions best.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Ancient Story of Meemure */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Ancient Story of Meemure</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-4">
              The story of Meemure begins over a thousand years ago, when this remote mountain valley served as a refuge for people fleeing various invasions of the lowlands. The most significant chapter in its history came during the reign of King Rajasinghe II in the 17th century, when he stationed soldiers here to guard against Portuguese colonial forces advancing from the coast.
            </p>
            <p className="text-lg mb-4">
              These soldiers, cut off from the outside world by treacherous mountain terrain, gradually established permanent settlements. Over generations, they developed a unique culture that blended ancient Sinhalese traditions with mountain adaptations necessary for survival in this challenging environment. Their isolation became their protection, preserving ways of life that disappeared elsewhere in Sri Lanka.
            </p>
            <p className="text-lg mb-4">
              The village&apos;s name &quot;Meemure&quot; is believed to derive from ancient Sinhalese words meaning &quot;place of honey&quot; - a reference to the wild honey that has been harvested from cliff faces for centuries. The villagers developed intricate knowledge of the mountain ecosystem, learning to live sustainably within the boundaries of what would later become part of the Knuckles Conservation Forest.
            </p>
            <p className="text-lg">
              Today, the descendants of these original settlers maintain many of the same practices their ancestors followed centuries ago. They continue to speak in a unique dialect, practice traditional agriculture, and follow social customs that have remained largely unchanged. This remarkable continuity makes Meemure one of the few places on Earth where you can truly experience how rural communities lived in pre-modern times.
            </p>
          </div>
        </section>

        {/* Village Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Authentic Village Experiences</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="text-green-800">Traditional Agriculture</CardTitle>
                <CardDescription>Experience ancient farming methods</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Participate in traditional rice cultivation using buffalo-drawn plows and ancient irrigation techniques. Learn how villagers grow their food using methods passed down through generations without any modern machinery.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Buffalo plowing demonstrations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Traditional seed sowing methods</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Ancient irrigation systems tour</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/30">
              <CardHeader>
                <CardTitle className="text-purple-800">Traditional Crafts</CardTitle>
                <CardDescription>Learn ancient artisan skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master traditional crafts like basket weaving, wooden tool making, and mat creation using natural materials. Village artisans will teach you techniques used for centuries.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Bamboo basket weaving</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Traditional wooden tool carving</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Mat making with natural fibers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/30">
              <CardHeader>
                <CardTitle className="text-orange-800">Village Cuisine</CardTitle>
                <CardDescription>Authentic traditional cooking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience authentic village cooking using clay pots, wood fires, and ingredients grown locally. Learn to prepare traditional dishes that have nourished mountain communities for generations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Clay pot cooking lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Wild honey and herbal teas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Traditional rice and curry preparation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="text-blue-800">Mountain Trekking</CardTitle>
                <CardDescription>Explore pristine wilderness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover hidden waterfalls, ancient meditation caves, and wildlife viewing spots with knowledgeable village guides who know every trail in the surrounding Knuckles Mountains.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Waterfall discovery hikes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Ancient monk meditation caves</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Endemic bird and wildlife spotting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Guidelines for Visiting</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  Do&apos;s - Respectful Visiting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Respect local customs and dress modestly when visiting the village temple</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Ask permission before photographing people or entering their homes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Participate in village activities and learn from local traditions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Support the local economy by purchasing handmade crafts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Follow leave-no-trace principles to preserve the pristine environment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <XCircle className="w-5 h-5" />
                  Don&apos;ts - What to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t bring plastic items - the village has no waste management system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t expect modern amenities like electricity, internet, or hot water</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t disturb wildlife or pick plants in the protected conservation area</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t rush - village life moves at a peaceful, natural pace</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t ignore safety advice from local guides on mountain trails</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Meemure</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Sun className="w-5 h-5" />
                  Dry Season (Dec-Mar)
                </CardTitle>
                <Badge className="bg-green-100 text-green-700">Best Time</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Clear roads and easy access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Perfect weather for trekking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Comfortable temperatures (18-25°C)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Harvest season activities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <Cloud className="w-5 h-5" />
                  Shoulder Season (Apr-May, Oct-Nov)
                </CardTitle>
                <Badge className="bg-yellow-100 text-yellow-700">Good Time</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span>Lush green landscapes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span>Fewer tourists</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span>Some road challenges</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span>Occasional rainfall</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <CloudRain className="w-5 h-5" />
                  Monsoon (Jun-Sep)
                </CardTitle>
                <Badge className="bg-red-100 text-red-700">Avoid</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Roads often impassable</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Heavy rainfall and landslides</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Village may be cut off</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Limited outdoor activities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-500" />
                Practical Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Accommodation & Meals</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-blue-500" />
                      <span><strong>Homestays:</strong> Rs. 2,500-4,000 per person</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-green-500" />
                      <span><strong>Meals:</strong> Traditional village cuisine included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-purple-500" />
                      <span><strong>Facilities:</strong> Basic, shared bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span><strong>Booking:</strong> Advance reservation required</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What to Bring</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Flashlight className="w-4 h-4 text-yellow-500" />
                      <span>Flashlight and extra batteries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-red-500" />
                      <span>Power bank for devices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-blue-500" />
                      <span>Warm clothing for cool evenings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Footprints className="w-4 h-4 text-green-500" />
                      <span>Good hiking shoes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> No ATMs, shops, or mobile coverage available. Bring cash, snacks, and any medications you might need.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What Else to See Nearby */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="text-blue-800">Hunnasgiriya Village</CardTitle>
                <CardDescription>Gateway to Meemure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The last village with basic amenities before reaching Meemure. 4WD vehicle rentals and local guides available.
                </p>
                <div className="flex justify-between text-xs text-blue-600">
                  <span><strong>Distance:</strong> 15km</span>
                  <span><strong>Time:</strong> 1 hour by 4WD</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="text-green-800">Knuckles Conservation Forest</CardTitle>
                <CardDescription>UNESCO World Heritage Site</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Pristine mountain ecosystem with endemic flora and fauna. Guided nature walks and research programs available.
                </p>
                <div className="flex justify-between text-xs text-green-600">
                  <span><strong>Distance:</strong> 5km</span>
                  <span><strong>Activity:</strong> Nature walks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/30">
              <CardHeader>
                <CardTitle className="text-purple-800">Sera Ella Waterfall</CardTitle>
                <CardDescription>Hidden Mountain Cascade</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Beautiful waterfall accessible through village trails. Perfect for photography and refreshing dips.
                </p>
                <div className="flex justify-between text-xs text-purple-600">
                  <span><strong>Distance:</strong> 3km hike</span>
                  <span><strong>Difficulty:</strong> Moderate</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/30">
              <CardHeader>
                <CardTitle className="text-orange-800">Kandy City</CardTitle>
                <CardDescription>Cultural Capital</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Historic city with Temple of the Tooth, colonial architecture, and cultural attractions. Perfect base for Meemure trips.
                </p>
                <div className="flex justify-between text-xs text-orange-600">
                  <span><strong>Distance:</strong> 45km</span>
                  <span><strong>Time:</strong> 2-3 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader>
                <CardTitle className="text-red-800">Mahiyanganaya</CardTitle>
                <CardDescription>Ancient Buddhist Site</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Historic town with Mahiyangana Raja Maha Vihara temple, one of the earliest Buddhist sites in Sri Lanka.
                </p>
                <div className="flex justify-between text-xs text-red-600">
                  <span><strong>Distance:</strong> 35km</span>
                  <span><strong>Significance:</strong> Pilgrimage site</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50/30">
              <CardHeader>
                <CardTitle className="text-teal-800">Dambulla Cave Temple</CardTitle>
                <CardDescription>Ancient Rock Temple</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Magnificent rock temple complex with stunning Buddha statues and ancient paintings. UNESCO World Heritage Site.
                </p>
                <div className="flex justify-between text-xs text-teal-600">
                  <span><strong>Distance:</strong> 60km</span>
                  <span><strong>Status:</strong> UNESCO Site</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Experience Authentic Sri Lankan Mountain Life</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                Meemure village offers a rare opportunity to step back in time and experience authentic Sinhalese mountain
                culture that has remained unchanged for centuries. This hidden gem in the Knuckles Mountains provides not
                just breathtaking natural beauty, but a genuine connection with traditional Sri Lankan life.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Whether you&apos;re seeking adventure, cultural immersion, or simply a break from modern life, Meemure delivers
                an unforgettable experience that will leave you with lasting memories and a deeper appreciation for
                Sri Lanka&apos;s rich heritage.
              </p>
              <Badge className="bg-green-600 hover:bg-green-700 text-white border-0 px-6 py-2 text-lg">
                Plan Your Meemure Adventure Today
              </Badge>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  )
}
