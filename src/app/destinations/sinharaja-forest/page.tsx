import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, TreePine, Users, TelescopeIcon as Binoculars } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Sinharaja Forest Reserve: Complete Guide 2025 | UNESCO Rainforest & Biodiversity Hotspot",
  description:
    "Explore Sinharaja Forest Reserve, Sri Lanka's last pristine rainforest. Complete guide to endemic species, trekking trails, and UNESCO World Heritage biodiversity.",
  keywords:
    "Sinharaja Forest Reserve, Sri Lanka rainforest, endemic species, biodiversity hotspot, UNESCO World Heritage, bird watching, nature trekking",
  openGraph: {
    title: "Sinharaja Forest Reserve: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's pristine rainforest and biodiversity treasure",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function SinharajaForestGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Sinharaja+Rainforest"
          alt="Dense canopy of Sinharaja rainforest with misty atmosphere and lush green vegetation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sinharaja Forest Reserve</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Last Pristine Rainforest</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Sabaragamuwa & Southern Provinces
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              UNESCO World Heritage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Binoculars className="w-4 h-4 mr-1" />
              Biodiversity Hotspot
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Sinharaja: Nature&apos;s Living Laboratory</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Enter the mystical world of Sinharaja Forest Reserve, Sri Lanka&apos;s last remaining pristine lowland
              rainforest and a UNESCO World Heritage site since 1988. This 11,187-hectare biological treasure trove
              represents one of the world's most important biodiversity hotspots, harboring an extraordinary collection
              of endemic species found nowhere else on Earth.
            </p>
            <p className="text-lg">
              From the haunting calls of endemic birds echoing through the misty canopy to the discovery of new species
              still being made by scientists today, Sinharaja offers an unparalleled journey into one of nature&apos;s most
              complex and fascinating ecosystems. This ancient forest, whose name means &quot;Lion King,&quot; has survived for
              millions of years and continues to reveal its secrets to those who venture into its emerald depths.
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
                Essential Sinharaja Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 11,187 hectares (27,648 acres)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage (1988)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Binoculars className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Endemic Species:</strong> 60% of trees, 50% of mammals
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Elevation:</strong> 300-1,170 meters above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Annual Rainfall:</strong> 3,500-5,000mm
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> Half to full day
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Biodiversity */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Incredible Biodiversity & Endemic Species</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Endemic Bird Species</CardTitle>
                <CardDescription>Paradise for bird watchers and ornithologists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Endemic+Birds"
                    alt="Colorful endemic birds of Sinharaja including Sri Lanka Blue Magpie and Red-faced Malkoha"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Sinharaja is home to 26 of Sri Lanka&apos;s 33 endemic bird species, making it the most important bird
                      conservation area on the island. The forest resonates with the calls of rare and beautiful birds
                      found nowhere else in the world.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sri Lanka Blue Magpie (national bird)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Red-faced Malkoha and Green-billed Coucal
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sri Lanka Spurfowl and Jungle Fowl
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 160 bird species recorded in total
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Endemic Mammals & Reptiles</CardTitle>
                <CardDescription>Unique wildlife found only in Sri Lanka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The forest harbors an impressive array of endemic mammals and reptiles, many of which are
                      critically endangered. These species have evolved in isolation, creating unique adaptations to the
                      rainforest environment.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purple-faced Langur (endemic primate)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sri Lankan Leopard (apex predator)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Endemic snakes and lizard species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rare amphibians and invertebrates
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Endemic+Mammals"
                    alt="Purple-faced Langur and other endemic mammals in their natural Sinharaja habitat"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Endemic Flora & Forest Canopy</CardTitle>
                <CardDescription>Ancient trees and unique plant species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Forest+Canopy"
                    alt="Dense forest canopy of Sinharaja with endemic trees and epiphytes"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Over 60% of Sinharaja&apos;s trees are endemic to Sri Lanka, creating a unique forest ecosystem. The
                      multi-layered canopy structure supports an incredible diversity of plant life, from towering
                      emergent trees to delicate orchids.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 830 endemic plant species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Dipterocarp trees (some over 45m tall)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rare orchids and medicinal plants
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Complex ecosystem with multiple canopy layers
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

        {/* Trekking Trails */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Trekking Trails & Nature Experiences</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>4. Kudawa Entrance Trail</CardTitle>
                <CardDescription>Most popular and accessible trail</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Kudawa+Trail"
                    alt="Well-maintained trail through Sinharaja forest with wooden bridges and lush vegetation"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Kudawa entrance offers the most developed trail system with well-maintained paths, bridges,
                      and viewing platforms. This trail provides excellent opportunities for wildlife spotting and
                      photography.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        2-6 hour trekking options available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-marked trails with safety features
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best for bird watching and photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Visitor center and facilities available
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Deniyaya Entrance Trail</CardTitle>
                <CardDescription>More challenging and pristine experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Deniyaya entrance offers a more adventurous experience with less developed trails leading
                      deeper into the forest. This route is preferred by serious nature enthusiasts and researchers.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        More challenging terrain and longer hikes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded, more pristine experience
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Better chances of spotting rare mammals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Requires experienced local guides
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Deniyaya+Trail"
                    alt="Pristine forest trail at Deniyaya entrance with dense vegetation and natural streams"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research & Conservation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Research & Conservation Efforts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Scientific Research</CardTitle>
                <CardDescription>Ongoing discoveries and studies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Active Research Programs</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    International and local scientists continue to make new discoveries in Sinharaja, with new species
                    being identified regularly.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Biodiversity surveys and species cataloging</li>
                    <li>• Climate change impact studies</li>
                    <li>• Endemic species conservation programs</li>
                    <li>• Ecosystem restoration projects</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Conservation Challenges</CardTitle>
                <CardDescription>Protecting the forest for future generations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Current Threats & Solutions</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Despite protection, Sinharaja faces various challenges that require ongoing conservation efforts.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Illegal logging and encroachment prevention</li>
                    <li>• Human-wildlife conflict mitigation</li>
                    <li>• Sustainable tourism development</li>
                    <li>• Community-based conservation programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Visiting Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees & Permits</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: $12 USD + service charges</li>
                    <li>• Local adults: LKR 60</li>
                    <li>• Guide fees: $15-25 USD (mandatory)</li>
                    <li>• Research permits available separately</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dry season: January to April</li>
                    <li>• Early morning (6:00-10:00 AM) best for wildlife</li>
                    <li>• Avoid heavy monsoon: October-December</li>
                    <li>• Year-round destination with proper gear</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kudawa: 2.5 hours from Colombo</li>
                    <li>• Deniyaya: 3 hours from Colombo</li>
                    <li>• Public transport + tuk-tuk to entrances</li>
                    <li>• Private vehicle recommended</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Essential Preparation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Waterproof hiking boots (essential)</li>
                    <li>• Rain gear and quick-dry clothing</li>
                    <li>• Insect repellent and first aid kit</li>
                    <li>• Binoculars and camera with zoom lens</li>
                    <li>• Water bottles and energy snacks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Safety Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Always trek with certified guides</li>
                    <li>• Stay on designated trails</li>
                    <li>• Be aware of leeches and insects</li>
                    <li>• Inform others of your trekking plans</li>
                    <li>• Carry emergency contact information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Ethics</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No flash photography (disturbs wildlife)</li>
                    <li>• Maintain respectful distance from animals</li>
                    <li>• Don&apos;t remove or damage any plants</li>
                    <li>• Follow guide instructions for wildlife encounters</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Accommodation Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Eco-Lodges</CardTitle>
                <CardDescription>$30-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable accommodation near forest</li>
                  <li>• Nature-focused experiences</li>
                  <li>• Local guide arrangements</li>
                  <li>• Organic meals and bird watching</li>
                  <li>• Educational programs available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Guesthouses</CardTitle>
                <CardDescription>$15-40 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family-run accommodations</li>
                  <li>• Local cuisine and hospitality</li>
                  <li>• Basic but comfortable facilities</li>
                  <li>• Close to forest entrances</li>
                  <li>• Budget-friendly option</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Research Stations</CardTitle>
                <CardDescription>$20-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Basic dormitory-style accommodation</li>
                  <li>• Ideal for researchers and students</li>
                  <li>• Access to research facilities</li>
                  <li>• Educational programs and lectures</li>
                  <li>• Advance booking required</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Journey into Nature&apos;s Sanctuary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sinharaja Forest Reserve offers one of the world&apos;s most extraordinary biodiversity experiences, where
                every step reveals new wonders and every sound tells a story of millions of years of evolution. This
                ancient rainforest is not just a destination—it&apos;s a living laboratory that continues to teach us about
                the intricate connections that sustain life on Earth.
              </p>
              <p className="text-muted-foreground mb-4">
                As you trek through the misty trails and listen to the symphony of endemic birds, remember that you&apos;re
                experiencing something truly irreplaceable. Your visit contributes to the conservation of this precious
                ecosystem and helps ensure that future generations can also witness the magic of Sri Lanka&apos;s last
                pristine rainforest.
              </p>
              <p className="text-muted-foreground font-medium">
                May your journey through Sinharaja inspire a deeper connection with nature and a commitment to
                protecting our planet&apos;s biodiversity! 🌿🦜🌧️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
