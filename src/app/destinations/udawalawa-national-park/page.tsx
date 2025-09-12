import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Udawalawe National Park Sri Lanka: Complete Guide 2025 | Elephant Safari & Wildlife",
  description:
    "Explore Udawalawe National Park, Sri Lanka's best place to see wild elephants. Complete guide to safari tours, wildlife, and the famous Elephant Transit Home.",
  keywords:
    "Udawalawe National Park, elephant safari, Sri Lanka wildlife, Elephant Transit Home, safari tours, wild elephants",
  openGraph: {
    title: "Udawalawe National Park: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's premier elephant watching destination",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function UdawalaweNationalParkGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Herd of elephants in Udawalawe National Park grasslands with safari jeep in background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Udawalawe National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Premier Elephant Safari Destination</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              600+ Wild Elephants
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Established 1972
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Udawalawe: Land of Giants</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Get ready for the most exciting elephant experience in Sri Lanka! Udawalawe National Park is home to over
              600 wild elephants, making it the best place in the country to see these amazing giants in their natural
              home. The park covers 30,821 hectares of grasslands, forests, and wetlands around the beautiful Udawalawe
              Reservoir.
            </p>
            <p className="text-lg">
              What makes Udawalawe special is that you can see elephants almost any time you visit! Unlike other parks
              where animals hide in thick forests, Udawalawe has open grasslands where elephants love to spend their
              time eating, playing, and taking care of their babies. It's also home to the famous Elephant Transit Home,
              where orphaned baby elephants are cared for before being released back into the wild.
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
                Essential Udawalawe Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Elephants:</strong> 600+ wild elephants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 30,821 hectares
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Established:</strong> 1972
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Safari Time:</strong> 3-4 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Best Success Rate:</strong> 95% elephant sightings
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Time:</strong> Early morning & evening
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wildlife & Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Amazing Wildlife & Attractions</h2>

          <div className="space-y-8">
            {/* Wild Elephants */}
            <Card>
              <CardHeader>
                <CardTitle>Wild Elephants - The Main Stars</CardTitle>
                <CardDescription>Over 600 elephants living freely in the park</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Wild elephant family with baby elephants feeding in grasslands of Udawalawe"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Udawalawe elephants are famous for being easy to see and photograph. You'll see big families with
                      tiny babies, teenage elephants playing together, and wise old elephants leading their groups. The
                      open grasslands make it perfect for watching their natural behavior like bathing, eating, and
                      caring for their young.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        95% chance of seeing elephants
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Large family groups with babies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Easy to photograph and observe
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural behavior in open spaces
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elephant Transit Home */}
            <Card>
              <CardHeader>
                <CardTitle>Elephant Transit Home</CardTitle>
                <CardDescription>Caring for orphaned baby elephants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This special place takes care of baby elephants who have lost their mothers. The babies are fed
                      milk and taught how to live in the wild before being released back into Udawalawe when they're old
                      enough. You can watch feeding times and see how these cute babies are cared for.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Orphaned baby elephant care
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Public feeding times (9 AM, 12 PM, 3 PM, 6 PM)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Educational experience
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Conservation success story
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Baby elephants being bottle-fed at the Elephant Transit Home with caregivers"
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
                <CardTitle>Other Amazing Animals</CardTitle>
                <CardDescription>More wildlife to discover in the park</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Various wildlife including water buffalo, crocodiles, and birds around Udawalawe reservoir"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      While elephants are the stars, Udawalawe has many other animals too! You might see water buffalo
                      cooling off in the reservoir, crocodiles sunbathing on the banks, colorful birds flying around,
                      and if you're lucky, maybe even a leopard or sloth bear.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water buffalo herds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crocodiles in the reservoir
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 180 bird species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Leopards and sloth bears (rare sightings)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Safari Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Safari Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Safari Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Half-Day Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    3-4 hours in the park, perfect for seeing elephants and other wildlife. Most popular option.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Full-Day Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    6-8 hours with lunch break, covers more areas and increases chances of rare animal sightings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Private Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    Your own jeep and driver-guide, can go at your own pace and focus on your interests.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Best Safari Times</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Early Morning (6:00-10:00 AM)</h4>
                  <p className="text-sm text-muted-foreground">
                    Animals are most active, cooler weather, best light for photography.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Late Afternoon (3:00-6:00 PM)</h4>
                  <p className="text-sm text-muted-foreground">
                    Second best time, animals come out to feed, beautiful sunset views.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dry Season (May-September)</h4>
                  <p className="text-sm text-muted-foreground">
                    Animals gather around water sources, easier to spot wildlife.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Visit Udawalawe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Safari</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: $15 USD + taxes</li>
                    <li>• Foreign children: $8 USD + taxes</li>
                    <li>• Safari jeep: $25-40 USD</li>
                    <li>• Elephant Transit Home: $2 USD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• From Colombo: 165 km (3.5 hours)</li>
                    <li>• From Ella: 90 km (2 hours)</li>
                    <li>• From Tissamaharama: 45 km (1 hour)</li>
                    <li>• Nearest town: Embilipitiya</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Accommodation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Safari lodges near the park</li>
                    <li>• Guesthouses in Embilipitiya</li>
                    <li>• Camping sites available</li>
                    <li>• Book in advance during peak season</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Safari Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Camera with zoom lens</li>
                    <li>• Binoculars for better viewing</li>
                    <li>• Hat and sunscreen</li>
                    <li>• Water bottles</li>
                    <li>• Comfortable clothes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Safari Rules</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stay in the jeep at all times</li>
                    <li>• Don't make loud noises</li>
                    <li>• Don't feed the animals</li>
                    <li>• Follow your guide's instructions</li>
                    <li>• Keep a safe distance from elephants</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bring extra batteries</li>
                    <li>• Use fast shutter speeds</li>
                    <li>• Focus on elephant behavior</li>
                    <li>• Capture family interactions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Unforgettable Elephant Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Udawalawe National Park offers one of the most reliable and exciting wildlife experiences in Sri Lanka.
                Seeing a family of elephants with tiny babies playing in the grasslands is something you'll remember
                forever. The park's open landscape makes it perfect for photography and gives you amazing opportunities
                to observe these gentle giants up close.
              </p>
              <p className="text-muted-foreground mb-4">
                Don't forget to visit the Elephant Transit Home to see how Sri Lanka is working to protect these amazing
                animals. The dedication of the people caring for orphaned babies and releasing them back into the wild
                is truly inspiring and shows the country's commitment to wildlife conservation.
              </p>
              <p className="text-muted-foreground font-medium">
                Get ready for the elephant adventure of a lifetime! 🐘📸🌿
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
