import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Mountain, Train, Cloud, Thermometer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pattipola Sri Lanka: Complete Guide 2025 | Highest Railway Station & Mountain Paradise",
  description:
    "Discover Pattipola, home to Sri Lanka's highest railway station at 6,225ft. Experience misty mountains, tea plantations, and breathtaking train journeys through the hills.",
  keywords:
    "Pattipola railway station, highest railway station Sri Lanka, upcountry train journey, tea plantations, mountain hiking, cool climate, scenic train rides",
  openGraph: {
    title: "Pattipola: Sri Lanka's Highest Railway Station | Complete Guide 2025",
    description: "Experience the charm of Sri Lanka's highest railway station and mountain paradise",
    type: "article",
    images: ["/pattipola-station.jpg"],
  },
}

export default function PattipolaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Pattipola.jpg"
          alt="Historic Pattipola Railway Station with misty mountains in the background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pattipola</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Highest Railway Station & Mountain Haven</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Mountain className="w-4 h-4 mr-1" />
              6,225 ft Elevation
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Train className="w-4 h-4 mr-1" />
              Scenic Railway
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Sri Lanka&apos;s Railway in the Clouds</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Perched at an impressive altitude of 6,225 feet (1,897 meters), Pattipola Railway Station holds the 
              distinction of being the highest railway station in Sri Lanka. This historic station, established during 
              the British colonial era, serves as a testament to remarkable engineering achievement and offers visitors 
              an unforgettable journey through Sri Lanka&apos;s misty highlands.
            </p>
            <p className="mb-4">
              The station, built in 1893, is a crucial stop on the iconic Main Line railway, connecting Colombo with 
              Badulla. The journey to Pattipola is renowned for its spectacular views of rolling tea plantations, 
              pine forests, and mountain landscapes shrouded in mist, making it a photographer&apos;s paradise and a 
              must-visit destination for both railway enthusiasts and nature lovers.
            </p>
          </div>
        </section>

        {/* Quick Information */}
        <section className="mb-16">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Essential Information</CardTitle>
              <CardDescription>Key details to plan your visit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Location & Access</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Central Province, Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-5 h-5 text-blue-500" />
                      <span>Main Line Railway Route</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Climate</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-red-500" />
                      <span>10°C - 20°C year-round</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cloud className="w-5 h-5 text-gray-500" />
                      <span>Frequent mist and cool weather</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Best Time to Visit</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span>Early morning for clearest views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>December to April (Dry season)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Highlights of Pattipola</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Historic Railway Station */}
            <Card>
              <CardHeader>
                <CardTitle>Historic Railway Station</CardTitle>
                <CardDescription>A testament to colonial engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/pattipola-station-platform.jpg"
                    alt="Historic platform and colonial architecture of Pattipola Railway Station"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The station building, with its distinctive colonial architecture, features charming wooden details 
                    and traditional railway elements. The original signal box and vintage railway equipment are still 
                    in use, offering visitors a glimpse into the golden age of rail travel.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Original colonial architecture preserved</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Working historical signal equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Panoramic platform views</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Surrounding Nature */}
            <Card>
              <CardHeader>
                <CardTitle>Mountain Wilderness</CardTitle>
                <CardDescription>Natural beauty at high altitude</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/pattipola-landscape.jpg"
                    alt="Misty mountains and tea plantations surrounding Pattipola"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The area surrounding Pattipola is characterized by pristine mountain wilderness, featuring endemic 
                    flora, rolling tea estates, and pine forests. The high altitude creates a unique ecosystem that 
                    supports rare mountain birds and plants.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Endemic mountain flora</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Tea plantations and pine forests</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Bird watching opportunities</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities and Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Things to Do in Pattipola</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Train Journey Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Scenic Train Rides</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Experience one of world&apos;s most scenic rail journeys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Photograph stunning mountain vistas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Connect to major destinations like Ella and Nuwara Eliya</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Hiking and Nature */}
            <Card>
              <CardHeader>
                <CardTitle>Mountain Trails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Explore mountain hiking trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Visit nearby tea estates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Bird watching in pine forests</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Photography */}
            <Card>
              <CardHeader>
                <CardTitle>Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Capture misty mountain landscapes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Document colonial railway heritage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Shoot sunrise over tea plantations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-16">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Travel Tips & Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Getting There</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Train className="w-5 h-5 text-blue-500 mt-1" />
                      <span>Regular trains from Colombo, Kandy, and Badulla</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                      <span>Accessible by road from Nuwara Eliya (1 hour)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">What to Bring</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Warm clothing (temperatures can be quite low)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Camera for spectacular photo opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Rain gear as weather can change quickly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6">Plan Your Mountain Railway Adventure</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the magic of Sri Lanka&apos;s highest railway station and create unforgettable memories.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/plan-your-trip/train-journeys">
                Book Train Journey
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact-us">
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
