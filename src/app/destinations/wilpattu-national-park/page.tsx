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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Wilpattuwa1.jpeg"
          alt="Majestic Sri Lankan leopard drinking at a villu lake in Wilpattu National Park with lush forest background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Wilpattu National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lankas Largest Wildlife Sanctuary</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              North Western Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Largest National Park
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-500/80 text-white border-green-500">
              <Binoculars className="w-4 h-4 mr-1" />
              Unique Villu Ecosystem
            </Badge>
          </div>
        </div>
      </section>

  <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Wilpattu: Land of Natural Lakes</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Enter the wild heart of Sri Lanka at Wilpattu National Park, the islands largest and oldest national
              park, covering 1,317 square kilometers of pristine wilderness. Famous for its unique villu (natural
              lakes) ecosystem and significant leopard population, Wilpattu offers an authentic safari experience in one
              of Asia&apos;s most biodiverse landscapes.
            </p>
            <p className="text-lg">
              From the elusive Sri Lankan leopard to massive elephant herds, from rare sloth bears to over 200 bird
              species, Wilpattu&apos;s diverse habitats support an incredible array of wildlife. The parks network of
              natural lakes creates a unique ecosystem that attracts animals year-round, making every safari drive an
              adventure filled with potential discoveries.
            </p>
            <p className="text-lg">
              If you are going to visit on a rainy day, be prepared for muddy trails and potential road closures.
              However, the rain brings the park to life, with lush greenery and decreased animal activity. Consider
              bringing waterproof gear and a sense of adventure!
            </p>
          </div>
        </section>

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
                src="/Wilpattuwa2.jpeg"
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
                    src="/Srilankanleopard1.jpeg"
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
            <Card>
              <CardHeader>
                <CardTitle>3. Thambapanni: The Legendary Landing</CardTitle>
                <CardDescription>Where Sri Lanka’s story began</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Thambapanni.jpg"
                    alt="Wilpattu coastal area believed to be ancient Thambapanni, with wild beach and forest meeting the sea"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The northwestern coast of Wilpattu is believed to be the legendary Thambapanni, where Prince Vijaya—the first recorded king of Sri Lanka—landed with his followers over 2,500 years ago. The name “Thambapanni” means “copper-colored sands,” inspired by the reddish hue of the beaches here.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Considered the birthplace of Sri Lankan civilization, but there are some other theories as well
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Famous for its unique coppery sand and wild, untouched coastline
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Steeped in myth and legend—said to be where the first Sinhalese kingdom began
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Today, Thambapanni is a remote and beautiful part of Wilpattu, perfect for those who want to connect with the island’s ancient roots and enjoy a wild, unspoiled landscape.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Kuweni’s Palace: The Queen of Wilpattu</CardTitle>
                <CardDescription>Legend, love, and betrayal in the jungle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Kuwenis-palace.jpeg"
                    alt="Wilpattu forest clearing believed to be the site of Queen Kuweni’s ancient palace"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Deep within Wilpattu’s forests lies the legendary site of Kuweni’s Palace. According to Sri Lankan folklore, Kuweni was the Yaksha queen who helped Prince Vijaya establish the first kingdom on the island. Their story is one of love, betrayal, and heartbreak.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Said to be the site where Queen Kuweni lived and ruled
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Local legend says her spirit still lingers in the forest, especially at dusk
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        A place of mystery, history, and ancient sorrow
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      While no grand ruins remain, the story of Kuweni and Vijaya is woven into the very landscape of Wilpattu. Visiting this area is a chance to reflect on the island’s earliest legends and the powerful women who shaped its destiny.
                    </p>
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

        {/* How to Get In */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">How to Get In</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-6">
            <p>
              <strong>Wilpattu National Park</strong> is located in the North Western Province of Sri Lanka, about 30 km west of Anuradhapura and 180 km from Colombo. The main entrance is at Hunuwilgama, close to the town of Nochchiyagama.
            </p>
            <ul>
              <li><strong>By Road:</strong> The park is best reached by private vehicle or taxi. From Colombo, take the Puttalam–Anuradhapura road (A12) and follow signs to Wilpattu. The journey takes 4–5 hours.</li>
              <li><strong>By Bus:</strong> Regular buses run from Colombo and Anuradhapura to Nochchiyagama. From there, tuk-tuks or taxis can take you to the park entrance (about 8 km).</li>
              <li><strong>By Train:</strong> The nearest railway station is at Puttalam or Anuradhapura. Continue by road to the park.</li>
              <li><strong>Entrances:</strong> The main gate is Hunuwilgama. All safari jeeps and visitors must enter here for tickets and registration.</li>
            </ul>
            <p>
              <strong>Travel Tip:</strong> Arrive early for the morning safari or stay overnight in nearby towns for a head start. Roads inside the park can be rough—4x4 vehicles are recommended.
            </p>
          </div>
        </section>

        {/* Recommended: Ceylanka Tours */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Recommended: Ceylanka Tours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                For a hassle-free and memorable Wilpattu safari, we recommend <span className="font-semibold text-orange-800">Ceylanka Tours</span>—a trusted local operator known for expert guides, comfortable jeeps, and personalized service.
              </p>
              <ul className="list-disc pl-5 text-sm text-orange-900 mb-2">
                <li>Experienced wildlife trackers and English-speaking guides</li>
                <li>Flexible half-day and full-day safari packages</li>
                <li>Private and group tours available</li>
                <li>Easy online booking and transparent pricing</li>
              </ul>
              <a
                href="/contact"
                className="inline-block mt-2 px-4 py-2 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
              >
                Book Your Wilpattu Safari with Ceylanka Tours
              </a>
            </CardContent>
          </Card>
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
