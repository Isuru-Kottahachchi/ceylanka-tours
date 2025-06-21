import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, TreePine, TelescopeIcon as Binoculars } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Wilpattu National Park Sri Lanka: Complete Safari Guide 2025 | Leopards & Wildlife Paradise",
  description:
    "Explore Wilpattu National Park, Sri Lankas largest and oldest national park. Complete safari guide with leopard spotting, unique villus ecosystem, and wildlife photography tips.",
  keywords:
    "Wilpattu National Park, Sri Lanka safari, leopard spotting, villus lakes, wildlife photography, national park safari, Sri Lanka wildlife",
  openGraph: {
    title: "Wilpattu National Park: Complete Safari Guide 2025",
    description: "Your ultimate guide to Sri Lankas largest national park",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function WilpattuNationalParkTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Majestic Sri Lankan leopard drinking at a villu lake in Wilpattu National Park with lush forest background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Wilpattu National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lankas Largest Wildlife Sanctuary</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              North Western Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Largest National Park
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Binoculars className="w-4 h-4 mr-1" />
              Unique Villu Ecosystem
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Wilpattu: Land of Natural Lakes</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Enter the wild heart of Sri Lanka at Wilpattu National Park, the islands largest and oldest national
              park, covering 1,317 square kilometers of pristine wilderness. Famous for its unique villu (natural
              lakes) ecosystem and significant leopard population, Wilpattu offers an authentic safari experience in one
              of Asias most biodiverse landscapes.
            </p>
            <p className="text-lg">
              From the elusive Sri Lankan leopard to massive elephant herds, from rare sloth bears to over 200 bird
              species, Wilpattus diverse habitats support an incredible array of wildlife. The parks network of
              natural lakes creates a unique ecosystem that attracts animals year-round, making every safari drive an
              adventure filled with potential discoveries.
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
                Essential Wilpattu National Park Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1938 (oldest national park)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 1,317 km² (508 sq miles)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Villus (Natural Lakes):</strong> Nearly 60
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Binoculars className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Leopard Population:</strong> 40-50 individuals
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

        {/* Unique Ecosystem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Unique Villu Ecosystem</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Scenic villu (natural lake) in Wilpattu showing crystal clear water surrounded by forest with wildlife drinking"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                A typical villu - natural lake that gives Wilpattu its name and unique character
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Wilpattu gets its name from &quot;Willpattu,&quot; meaning &quot;Land of Lakes&quot; in Sinhala. The park contains nearly 60
                natural lakes called &quot;villus,&quot; formed by rainwater collection in natural depressions. These villus are
                the lifeblood of the park&apos;s ecosystem, providing year-round water sources that attract diverse wildlife.

              </p>
              <p>
                Each villu creates its own microhabitat, supporting different plant communities and attracting various
                animal species. During dry seasons, these water bodies become crucial gathering points for wildlife,
                offering excellent game viewing opportunities for safari visitors.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Famous Villus in Wilpattu:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Kumbukkan Oya - Large villu with diverse wildlife</li>
                  <li>• Thala Villu - Known for elephant gatherings</li>
                  <li>• Borupan Wewa - Excellent for bird watching</li>
                  <li>• Manik Villu - Popular leopard spotting location</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Incredible Wildlife of Wilpattu</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Sri Lankan Leopards */}
            <Card>
              <CardHeader>
                <CardTitle>1. Sri Lankan Leopards</CardTitle>
                <CardDescription>Apex predators of the dry zone forests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Magnificent Sri Lankan leopard resting by a villu in Wilpattu National Park showing distinctive spotted coat"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Wilpattu is home to a significant population of Sri Lankan leopards, with an estimated 40-50
                      individuals roaming the park. These magnificent cats are perfectly adapted to the dry zone forest
                      environment and are often spotted near villus during early morning and late afternoon safaris.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent leopard spotting opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Often seen near villu water sources
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Active during cooler parts of the day
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique rosette patterns for identification
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
                <CardDescription>Gentle giants of the wilderness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Large herds of Asian elephants roam freely throughout Wilpattu, particularly during the dry
                      season when they gather around permanent water sources. These intelligent giants play a crucial
                      role in maintaining the parks ecosystem through seed dispersal and habitat modification.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Large herds with babies and juveniles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Impressive tuskers occasionally spotted
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best viewing during dry season
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Often seen bathing in villus
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Herd of Asian elephants including babies drinking and bathing at a villu in Wilpattu"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sloth Bears */}
            <Card>
              <CardHeader>
                <CardTitle>3. Sloth Bears</CardTitle>
                <CardDescription>Rare and elusive forest dwellers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Rare sloth bear foraging in Wilpattu forest showing distinctive shaggy black coat and long claws"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Wilpattu is one of the few places in Sri Lanka where you might encounter the elusive sloth bear.
                      These shaggy, black-coated bears are primarily nocturnal but occasionally spotted during early
                      morning or late evening safaris, especially when foraging for termites and fruits.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rare sighting opportunity
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Most active during dawn and dusk
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Distinctive long claws for digging
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent climbers despite appearance
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safari Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Wilpattu Safari Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Safari Timings & Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Morning Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    6:00 AM - 10:00 AM: Best for leopard spotting and bird watching when animals are most active.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Afternoon Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    2:30 PM - 6:30 PM: Excellent for elephant herds gathering at water sources.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Full Day Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    6:00 AM - 6:30 PM: Maximum wildlife viewing opportunities with lunch break at designated areas.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Pro Tip:</strong> Book morning safaris for the best leopard spotting chances!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Vehicle Type</h4>
                  <p className="text-sm text-muted-foreground">
                    Open-air 4WD safari jeeps with experienced tracker and driver for optimal wildlife viewing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Group Size</h4>
                  <p className="text-sm text-muted-foreground">
                    Maximum 6 people per jeep for comfortable viewing and photography opportunities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Route Planning</h4>
                  <p className="text-sm text-muted-foreground">
                    Experienced trackers choose routes based on recent animal movements and seasonal patterns.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wildlife Guarantee</h4>
                  <p className="text-sm text-muted-foreground">
                    While sightings cant be guaranteed, Wilpattu offers excellent chances for diverse wildlife
                    encounters.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Bird Watching */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Exceptional Bird Watching</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resident Species</CardTitle>
                <CardDescription>Year-round bird residents</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Colorful Sri Lankan junglefowl, the national bird, in Wilpattu forest habitat"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sri Lankan Junglefowl (national bird)</li>
                  <li>• Painted Stork</li>
                  <li>• White-bellied Sea Eagle</li>
                  <li>• Crested Serpent Eagle</li>
                  <li>• Indian Peafowl</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Migratory Visitors</CardTitle>
                <CardDescription>Seasonal bird migrations</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Migratory birds including various species of ducks and waders at a villu in Wilpattu"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Various duck species</li>
                  <li>• Migratory waders and shorebirds</li>
                  <li>• Northern pintail</li>
                  <li>• Garganey</li>
                  <li>• Lesser whistling duck</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Endemic Species</CardTitle>
                <CardDescription>Sri Lankan bird endemics</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Sri Lankan endemic bird species including the Ceylon magpie in natural forest habitat"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sri Lanka Grey Hornbill</li>
                  <li>• Ceylon Magpie</li>
                  <li>• Red-faced Malkoha</li>
                  <li>• Brown-capped Babbler</li>
                  <li>• Sri Lanka Wood Pigeon</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Wilpattu</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best wildlife viewing conditions</li>
                  <li>• Animals gather at water sources</li>
                  <li>• Clear skies for photography</li>
                  <li>• Easier vehicle access</li>
                  <li>• Higher accommodation rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April & October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Good wildlife viewing</li>
                  <li>• Fewer tourists</li>
                  <li>• Moderate temperatures</li>
                  <li>• Reasonable accommodation prices</li>
                  <li>• Occasional rain showers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Wet Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Park may close during heavy rains</li>
                  <li>• Lush green landscapes</li>
                  <li>• Excellent bird watching</li>
                  <li>• Lower accommodation rates</li>
                  <li>• Challenging road conditions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Safari Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Entry & Costs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Park Entry Fees</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: $25 USD</li>
                    <li>• Foreign children: $12 USD</li>
                    <li>• SAARC nationals: $12 USD</li>
                    <li>• Vehicle charges: $6 USD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Safari Costs</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Half-day safari: $40-60 USD per person</li>
                    <li>• Full-day safari: $80-120 USD per person</li>
                    <li>• Private jeep: $150-250 USD per day</li>
                    <li>• Tracker fees included</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">What to Bring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Binoculars for wildlife viewing</li>
                    <li>• Camera with telephoto lens</li>
                    <li>• Sun protection (hat, sunscreen)</li>
                    <li>• Comfortable clothing in earth tones</li>
                    <li>• Water bottle and snacks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bring extra batteries and memory cards</li>
                    <li>• Use fast shutter speeds for moving animals</li>
                    <li>• Respect minimum distances from wildlife</li>
                    <li>• Golden hour lighting is best</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Wilpattu Safari Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Wilpattu National Park offers one of Sri Lankas most authentic and rewarding safari experiences. The
                parks unique villu ecosystem, diverse wildlife, and relatively fewer visitors create an intimate
                connection with nature thats increasingly rare in todays world.
              </p>
              <p className="text-muted-foreground mb-4">
                Remember that wildlife viewing requires patience and respect for the animals and their habitat. Follow
                your guides instructions, maintain appropriate distances from wildlife, and embrace the unpredictability
                that makes each safari unique. Whether you spot the elusive leopard or simply enjoy the serene beauty of
                the villus, Wilpattu will leave you with unforgettable memories.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your wild adventure in Sri Lankas largest national park! 🐆🐘🌿
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
