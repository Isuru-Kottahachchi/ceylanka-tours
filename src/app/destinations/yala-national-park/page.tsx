import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TelescopeIcon as Binoculars } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Yala National Park Sri Lanka: Complete Safari Guide 2025 | Leopard Capital of the World",
  description:
    "Discover Yala National Park, Sri Lanka’s premier wildlife destination. Complete safari guide with leopard spotting tips, best times to visit, and everything you need to know.",
  keywords:
    "Yala National Park, Sri Lanka safari, leopard spotting, wildlife photography, elephant watching, safari tours, national park Sri Lanka",
  openGraph: {
    title: "Yala National Park: Complete Safari Guide 2025",
    description: "Your ultimate guide to Sri Lanka’s most famous national park",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function YalaNationalParkTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Yala-national-park.jpg"
          alt="Majestic Sri Lankan leopard resting on a rock in Yala National Park with safari jeep in background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Yala National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka’s Premier Wildlife Safari Destination</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Southern & Uva Provinces
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Binoculars className="w-4 h-4 mr-1" />
              Highest Leopard Density
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Established 1938
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Yala: The Leopard Capital of the World</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Get ready for the wildlife adventure of a lifetime! Yala National Park is Sri Lanka’s most visited and
              second-largest national park, famous for having the highest density of leopards in the world. This
              979-square-kilometer wilderness sanctuary is home to an incredible diversity of wildlife, from majestic
              elephants and elusive leopards to colorful birds and ancient ruins.
            </p>
            <p className="text-lg">
              Whether you’re a wildlife photographer, nature enthusiast, or adventure seeker, Yala offers an
              unforgettable safari experience where every game drive brings the possibility of extraordinary wildlife
              encounters in one of Asia’s most biodiverse ecosystems.
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
                Essential Yala National Park Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1938 (Sri Lanka’s first national park)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 979 km² (378 sq miles)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Binoculars className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Leopard Population:</strong> ~35-40 individuals
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Annual Visitors:</strong> ~500,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Safari Time:</strong> 6:00 AM & 2:30 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Safari Duration:</strong> 3-4 hours per game drive
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wildlife Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Incredible Wildlife You’ll Encounter</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Sri Lankan Leopards */}
            <Card>
              <CardHeader>
                <CardTitle>1. Sri Lankan Leopards (Panthera pardus kotiya)</CardTitle>
                <CardDescription>The stars of Yala - highest density in the world</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Srilankanleopard.jpg"
                    alt="Magnificent Sri Lankan leopard in Yala National Park showing distinctive spotted coat and powerful build"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Yala is world-renowned for its leopard population, with the highest density globally. These
                      magnificent big cats are larger than their African and Asian counterparts, with males weighing up
                      to 77kg. Unlike other leopard populations, Yala’s leopards are often active during daylight.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best leopard spotting chances in the world
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Often seen during daytime safaris
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Larger than other leopard subspecies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent climbing and swimming abilities
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Asian Elephants */}
            <Card>
              <CardHeader>
                <CardTitle>2. Asian Elephants</CardTitle>
                <CardDescription>Gentle giants roaming in herds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Yala is home to approximately 300-350 elephants, making it one of the best places in Sri Lanka to
                      observe these magnificent creatures. You’ll often encounter large herds, especially near water
                      sources during the dry season.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Large herds with babies and juveniles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best viewing near water holes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fascinating social behaviors to observe
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Occasional tuskers (male elephants with tusks)
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Herd of Asian elephants at a water hole in Yala National Park with babies and adults together"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Other Wildlife */}
            <Card>
              <CardHeader>
                <CardTitle>3. Other Amazing Wildlife</CardTitle>
                <CardDescription>Diverse ecosystem with 44 mammal species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Mammals</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sloth Bears - Excellent tree climbers</li>
                      <li>• Water Buffalo - Large herds in grasslands</li>
                      <li>• Spotted Deer - Most common prey species</li>
                      <li>• Wild Boar - Often seen in family groups</li>
                      <li>• Sambur Deer - Largest deer species</li>
                      <li>• Golden Jackal - Opportunistic hunters</li>
                      <li>• Fishing Cat - Semi-aquatic feline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Birds & Reptiles</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 215 bird species including migrants</li>
                      <li>• Peacocks - National bird of Sri Lanka</li>
                      <li>• Painted Stork - Large wading bird</li>
                      <li>• Crocodiles - In lagoons and water bodies</li>
                      <li>• Monitor Lizards - Up to 2 meters long</li>
                      <li>• Various snake species</li>
                      <li>• Sea turtles on coastal areas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safari Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Safari Planning & Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Safari Timings & Tickets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Morning Safari</h4>
                  <p className="text-sm text-muted-foreground">6:00 AM - 10:00 AM (Best for leopard spotting)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Afternoon Safari</h4>
                  <p className="text-sm text-muted-foreground">2:30 PM - 6:30 PM (Great for elephants and birds)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees (2025)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign Adults: $15 USD + taxes</li>
                    <li>• Foreign Children: $8 USD + taxes</li>
                    <li>• Jeep Entry: $25 USD</li>
                    <li>• Tracker Fee: $10 USD (recommended)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> Book safaris in advance, especially during peak season (December-April)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Best Safari Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Leopard Spotting Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Early morning safaris have highest success</li>
                    <li>• Look for alarm calls from deer and peacocks</li>
                    <li>• Check rocky outcrops and tree branches</li>
                    <li>• Be patient and quiet in the vehicle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bring telephoto lens (300mm minimum)</li>
                    <li>• No flash photography allowed</li>
                    <li>• Maintain safe distance from animals</li>
                    <li>• Respect your guide’s instructions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Binoculars for better wildlife viewing</li>
                    <li>• Sun protection and hat</li>
                    <li>• Water and light snacks</li>
                    <li>• Comfortable clothing in earth tones</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Park Zones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Yala’s Different Zones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Block 1 (Most Popular)</CardTitle>
                <CardDescription>Highest wildlife density</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best for leopard sightings</li>
                  <li>• Most developed infrastructure</li>
                  <li>• Can get crowded during peak season</li>
                  <li>• Patanangala Beach access</li>
                  <li>• Ancient Sithulpawwa temple ruins</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Block 2</CardTitle>
                <CardDescription>Less crowded alternative</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fewer visitors, more peaceful</li>
                  <li>• Good elephant populations</li>
                  <li>• Beautiful landscapes and water bodies</li>
                  <li>• Excellent bird watching opportunities</li>
                  <li>• More affordable safari options</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Block 3, 4 & 5</CardTitle>
                <CardDescription>Wilderness experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• True wilderness experience</li>
                  <li>• Minimal tourist traffic</li>
                  <li>• Requires special permits</li>
                  <li>• Best for serious wildlife enthusiasts</li>
                  <li>• Overnight camping possible</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Yala</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>February to July</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dry weather, animals gather at water</li>
                  <li>• Best leopard spotting opportunities</li>
                  <li>• Clear skies for photography</li>
                  <li>• Higher accommodation prices</li>
                  <li>• More crowded safaris</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>August to November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional rain showers</li>
                  <li>• Lush green vegetation</li>
                  <li>• Fewer tourists</li>
                  <li>• Good bird watching season</li>
                  <li>• Moderate prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Park Closure</CardTitle>
                <CardDescription>September to October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Park closed for animal breeding</li>
                  <li>• Heavy monsoon rains</li>
                  <li>• Alternative: Visit Udawalawe</li>
                  <li>• Plan visits around closure dates</li>
                  <li>• Check official announcements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay Near Yala</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Luxury Safari Lodges</CardTitle>
                <CardDescription>$200+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cinnamon Wild Yala</li>
                  <li>• Jetwing Yala</li>
                  <li>• Chena Huts by Uga Escapes</li>
                  <li>• All-inclusive safari packages</li>
                  <li>• Luxury amenities and spa services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$50-150 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Yala Safari Game Lodge</li>
                  <li>• Kithala Resort</li>
                  <li>• Safari hotels in Tissamaharama</li>
                  <li>• Good value with safari arrangements</li>
                  <li>• Swimming pools and restaurants</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Budget Options</CardTitle>
                <CardDescription>$20-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guesthouses in Tissamaharama</li>
                  <li>• Safari camping sites</li>
                  <li>• Family-run accommodations</li>
                  <li>• Basic but clean facilities</li>
                  <li>• Can arrange budget safaris</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Yala Safari Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Yala National Park offers one of the world’s most thrilling wildlife experiences. From the
                heart-stopping moment of spotting a leopard to the gentle giants of elephant herds, every safari brings
                new discoveries and unforgettable memories. Remember that wildlife viewing requires patience - the best
                moments often come to those who wait quietly and observe carefully.
              </p>
              <p className="text-muted-foreground mb-4">
                Respect the wildlife and their habitat by following your guide’s instructions, maintaining safe
                distances, and keeping noise to a minimum. Your visit helps support conservation efforts that protect
                these magnificent creatures for future generations.
              </p>
              <p className="text-muted-foreground font-medium">
                May your safari be filled with incredible wildlife encounters! 🐆🐘🦚
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
