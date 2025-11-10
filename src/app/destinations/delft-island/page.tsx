"use client"

import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Users, Waves, TreePine, Ship, Eye, House } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import InsuranceBanner from "@/components/insurance-banner"
import { ImageCarousel } from "@/components/ui/image-carousel"



export default function DelftIslandTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Delft-Island.jpg"
          alt="Stunning panoramic view of Delft Island showing wild horses grazing near ancient baobab trees with crystal blue waters and coral stone walls"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Delft Island</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Remote Paradise of Wild Horses & Ancient Giants</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-600">
              <MapPin className="w-4 h-4 mr-1" />
              Northern Province, Jaffna Peninsula
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-gray-600/80 text-white border-gray-600">
              <House className="w-4 h-4 mr-1" />
              Wild Horse Sanctuary
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-600">
              <TreePine className="w-4 h-4 mr-1" />
              Ancient Baobab Forest
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-600">
              <Waves className="w-4 h-4 mr-1" />
              Coral Stone Heritage
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Delft Island: Where Time Stands Still</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Imagine stepping onto an island where wild horses roam freely among thousand-year-old baobab trees,
              where coral stone walls tell stories of Dutch colonial ambitions, and where the rhythm of life hasn&apos;t
              changed for centuries. Welcome to Delft Island (Neduntheevu in Tamil), Sri Lanka&apos;s most remote
              inhabited island and one of its best-kept secrets, floating like a time capsule in the pristine
              waters off the Jaffna Peninsula.
            </p>
            <p className="text-lg mb-4">
              This extraordinary 50-square-kilometer island, located just 8 kilometers from the legendary Adam&apos;s
              Bridge, offers visitors an experience unlike anywhere else in Sri Lanka. Home to approximately 700
              hardy residents who have preserved their traditional way of life for generations, Delft Island is
              a living museum where ancient baobab trees - some over 700 years old - tower over landscapes that
              seem more African than Asian.
            </p>
            <p className="text-lg mb-4">
              What makes Delft Island truly magical is its population of wild horses, descendants of animals
              introduced by Portuguese and Dutch colonizers centuries ago. These magnificent creatures roam freely
              across the island&apos;s scrubland and beaches, creating scenes of breathtaking natural beauty. The
              island&apos;s unique ecosystem, combined with structures built entirely from coral stone, creates
              an otherworldly atmosphere that photographers and nature lovers find irresistible.
            </p>
            <p className="text-lg">
              Reaching Delft Island requires dedication - a boat journey from Kurikadduwan jetty followed by
              exploration on foot or bicycle - but this remoteness is precisely what has preserved its authentic
              character. Here, you&apos;ll discover coral walls that have stood for centuries, ancient wells that
              still provide fresh water, and a community that welcomes visitors with genuine warmth while maintaining
              their traditional fishing and farming lifestyle.
            </p>
          </div>
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <House className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-800">Unique Wildlife Experience</p>
                <p className="text-green-700 text-sm mt-1">
                  Delft Island is the only place in Sri Lanka where you can observe wild horses in their natural
                  habitat, making it a truly unique destination for wildlife enthusiasts and photographers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">

          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Delft Island Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span><strong>Size:</strong> 50 square kilometers</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span><strong>Population:</strong> ~700 residents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-cyan-500" />
                      <span><strong>Distance from mainland:</strong> 8 km</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <House className="w-4 h-4 text-brown-500" />
                      <span><strong>Wild horses:</strong> ~200 animals</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <TreePine className="w-4 h-4 text-green-500" />
                      <span><strong>Ancient baobabs:</strong> 700+ years old</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span><strong>Best season:</strong> November to March</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Ship className="w-4 h-4 text-indigo-500" />
                      <span><strong>Boat journey:</strong> 45-60 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span><strong>Recommended stay:</strong> Full day</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-pink-500" />
                      <span><strong>Photography:</strong> Exceptional opportunities</span>
                    </div>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  {/* <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Gregory_Lake.jpg"
                      alt="Ancient reservoir in Anuradhapura, Sri Lanka"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Wonderful streets among ancient reservoirs</p>
                      <p className="text-sm text-blue-800">
                       Mathale is a historic fortress that showcases stunning Dutch colonial architecture, surrounded by the Indian Ocean waves.
                      </p>
                    </div>
                  </div> */}
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1 full day to explore the Island and its surroundings.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May to September (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner />
          </section>
          {/* How to Get to Delft Island */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Delft Island
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 436km (270 miles) from Colombo to Kurikkaduwan Jetty then Ferry or Boat to Delft Island</li>
                      <li>• <strong>Duration:</strong> 7-8 hours</li>
                      <li>• <strong>Cost:</strong> $200-250 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Delft Island. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 77 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✈️</span>
                          <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                            <strong>Airport Transfer Services</strong> - Click for details & booking
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Recommended)</h4>
                    <p>Take the scenic Jaffna Northern Express from Colombo Fort Station to Jaffna Station then transfer to a bus to Kurikkaduwan Jetty, followed by a ferry or boat to Delft Island.</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Jaffna then Bus to Kurikkaduwan Jetty then Ferry or Boat to Delft Island</li>
                      <li>• <strong>Duration:</strong> 10-11 hours</li>
                      {/* <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li> */}
                      {/* <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li> */}
                    </ul>

                    {/* <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Galle</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $2-8 USD (depending on the bus type)</li>
                      <li>• <strong>Scenic journey:</strong> Through Coastline road</li>
                    </ul> */}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early morning to beat the heat</li>
                    <li>• Carry water and use sun protection</li>
                    <li>• Wear comfortable clothing and footwear</li>
                    <li>• Plan your itinerary to cover key attractions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Unique Attractions & Natural Wonders</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Wild Horse Herds - Living Freedom</CardTitle>
                <CardDescription>Witness Sri Lanka&apos;s only wild horse population in their natural habitat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Wild-Horses-In-Delft.jpg"
                    alt="Magnificent wild horses of Delft Island grazing peacefully near ancient baobab trees with crystal blue ocean in background"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The wild horses of Delft Island are descendants of animals brought by Portuguese and Dutch
                      colonizers between the 16th and 18th centuries. Over generations, these hardy animals have
                      adapted perfectly to the island&apos;s semi-arid environment, developing into a unique population
                      of approximately 200 horses that roam freely across the island&apos;s scrublands, beaches, and grasslands.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        200+ wild horses roaming freely
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Portuguese & Dutch colonial heritage
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique adaptation to island environment
                      </li>
                      <li className="flex items-start gap-2">
                        <Camera className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Incredible photography opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Ancient Baobab Trees - Giants of Time</CardTitle>
                <CardDescription>Encounter 700-year-old baobab trees creating an African landscape in Sri Lanka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Delft Island&apos;s most spectacular residents are its ancient baobab trees, some estimated to be
                      over 700 years old. These magnificent African giants, with their distinctive bottle-shaped trunks
                      and massive canopies, create surreal landscapes that make visitors feel like they&apos;ve been
                      transported to the African savanna. These trees are believed to have been brought by early
                      Arab traders and have thrived in the island&apos;s unique climate.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Trees over 700 years old
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Massive 20+ meter circumferences
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Brought by ancient Arab traders
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        African-like landscape in Sri Lanka
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Bao-bab.jpeg"
                    alt="Massive ancient baobab tree with distinctive bottle-shaped trunk and wide canopy against blue sky on Delft Island"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Coral Stone Architecture - Colonial Engineering Marvel</CardTitle>
                <CardDescription>Explore structures built entirely from coral stone by Dutch colonizers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      { src: "/Coral-Stone-Architecture.webp", alt: "Coral stone architecture on Delft Island", title: "Coral Stone Architecture", caption: "Coral stone architecture on Delft Island" },
                      { src: "/Coral-Stone-Architecture1.jpg", alt: "Coral stone architecture on Delft Island", title: "Coral Stone Architecture", caption: "Coral stone architecture on Delft Island" },
                      { src: "/Coral-Stone-Architecture2.webp", alt: "Coral stone architecture on Delft Island", title: "Coral Stone Architecture", caption: "Coral stone architecture on Delft Island" },
                      { src: "/Coral-Stone-Architecture3.webp", alt: "Coral stone architecture on Delft Island", title: "Coral Stone Architecture", caption: "Coral stone architecture on Delft Island" },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Dutch colonizers of the 17th and 18th centuries left behind remarkable architectural
                      achievements on Delft Island, constructing buildings, walls, and infrastructure entirely
                      from locally quarried coral stone. These structures, including the impressive Dutch Fort
                      ruins, administrative buildings, and extensive wall systems, showcase the ingenuity of
                      colonial engineering and the abundance of coral resources surrounding the island.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        17th-18th century Dutch construction
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Entirely coral stone buildings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Dutch Fort ruins exploration
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Extensive wall system remains
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Queen&apos;s Tower - Royal Mystery</CardTitle>
                <CardDescription>Discover the enigmatic coral stone tower with royal connections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Standing majestically among the coral stone ruins is the mysterious Queen&apos;s Tower, a
                      circular structure built from perfectly fitted coral stones. Local legends suggest it was
                      constructed as a residence for a Dutch colonial governor&apos;s wife, while others believe it
                      served as a watchtower for monitoring ships approaching through the Palk Strait. The tower&apos;s
                      precise construction and strategic location make it one of the island&apos;s most intriguing structures.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Circular coral stone construction
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Strategic Palk Strait viewpoint
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple historical theories
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        Panoramic island views
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Queens-Tower.jpg"
                    alt="Historic Queen&apos;s Tower made of coral stone on Delft Island with panoramic views of surrounding landscape"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Connection to Adam's Bridge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Adam&apos;s Bridge Connection & Geological Significance</h2>
          <Card>
            <CardHeader>
              <CardTitle>Gateway to the Legendary Adam&apos;s Bridge</CardTitle>
              <CardDescription>Understanding Delft Island&apos;s role in the mythical land bridge to India</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Delft Island holds a unique position in both geological and mythological history as it sits just
                  8 kilometers from the famous Adam&apos;s Bridge (Rama Setu), the chain of limestone shoals, coral,
                  and sandstone that extends toward Rameswaram in India. This proximity has shaped the island&apos;s
                  cultural heritage, natural formations, and strategic importance throughout history.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Geological Connection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-start gap-2">
                          <Waves className="w-4 h-4 mt-1 flex-shrink-0" />
                          Same coral reef system as Adam&apos;s Bridge
                        </li>
                        <li className="flex items-start gap-2">
                          <Waves className="w-4 h-4 mt-1 flex-shrink-0" />
                          Shared marine ecosystem formation
                        </li>
                        <li className="flex items-start gap-2">
                          <Waves className="w-4 h-4 mt-1 flex-shrink-0" />
                          Similar limestone and coral composition
                        </li>
                        <li className="flex items-start gap-2">
                          <Waves className="w-4 h-4 mt-1 flex-shrink-0" />
                          Evidence of ancient land connections
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-purple-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-purple-800">Cultural Significance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 mt-1 flex-shrink-0" />
                          Ancient pilgrimage route to India
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 mt-1 flex-shrink-0" />
                          Ramayana epic connections
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 mt-1 flex-shrink-0" />
                          Tamil and Sinhalese folklore
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 mt-1 flex-shrink-0" />
                          Maritime trade route history
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Best Viewing Points for Adam&apos;s Bridge
                  </h4>
                  <div className="text-sm text-amber-700 space-y-1">
                    <p><strong>Northern Shore:</strong> Clear views of the limestone formations extending toward India</p>
                    <p><strong>Queen&apos;s Tower:</strong> Elevated perspective of the entire Palk Strait area</p>
                    <p><strong>Early Morning:</strong> Best visibility and lighting for photography</p>
                    <p><strong>Boat Journey:</strong> Closest approach possible to the actual bridge formations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Reach Delft Island</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Complete Journey Guide</CardTitle>
                <CardDescription>Step-by-step instructions for reaching this remote paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Phase 1: Reaching Jaffna</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><strong>From Colombo:</strong> Flight (1 hour) or Train/Bus (8-10 hours)</li>
                        <li><strong>From Kandy:</strong> Bus (6-7 hours) via A9 highway</li>
                        <li><strong>From Anuradhapura:</strong> Bus (3-4 hours) direct route</li>
                        <li><strong>Accommodation:</strong> Stay overnight in Jaffna for early departure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Phase 2: Jaffna to Kurikadduwan Jetty</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><strong>Distance:</strong> 65 kilometers from Jaffna city</li>
                        <li><strong>Transport:</strong> Hired vehicle or bus to Point Pedro, then local transport</li>
                        <li><strong>Duration:</strong> 1.5-2 hours depending on transport</li>
                        <li><strong>Early Start:</strong> Recommended 6:00 AM departure</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Phase 3: Boat Journey to Delft Island</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Regular Passenger Ferry</h5>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• <strong>Schedule:</strong> Usually 9:00 AM and 2:00 PM departures</li>
                          <li>• <strong>Duration:</strong> 45-60 minutes each way</li>
                          <li>• <strong>Cost:</strong> Very affordable (~$2-3 per person)</li>
                          <li>• <strong>Capacity:</strong> Limited, arrive early</li>
                          <li>• <strong>Return:</strong> Usually 11:00 AM and 4:00 PM</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Private Boat Charter</h5>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• <strong>Flexibility:</strong> Depart at your preferred time</li>
                          <li>• <strong>Cost:</strong> $50-100 depending on boat size</li>
                          <li>• <strong>Advantages:</strong> More time on island, photography stops</li>
                          <li>• <strong>Group Size:</strong> 4-8 people typically</li>
                          <li>• <strong>Booking:</strong> Arrange through Jaffna hotels/guides</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Important Travel Considerations
                    </h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• <strong>Weather:</strong> Rough seas during monsoon (May-September), check conditions</li>
                      <li>• <strong>Ferry Schedule:</strong> Subject to weather and demand, confirm timing locally</li>
                      <li>• <strong>Return Planning:</strong> Last ferry typically 4:00 PM, don&apos;t miss it!</li>
                      <li>• <strong>Supplies:</strong> Bring water, snacks, and sun protection - limited facilities on island</li>
                      <li>• <strong>Communication:</strong> Mobile coverage is limited, inform others of your plans</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Island Exploration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Exploring Delft Island</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Transportation on Island</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Walking</h4>
                  <p className="text-sm text-muted-foreground">
                    The most common way to explore. Island is flat with well-worn paths.
                    Allow 4-6 hours for comprehensive exploration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bicycle Rental</h4>
                  <p className="text-sm text-muted-foreground">
                    Available from locals near the jetty. Perfect for covering more ground
                    and easier access to remote areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Guide Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Highly recommended for historical insights, wildlife spotting,
                    and finding the best photography locations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sun protection (hat, sunscreen, sunglasses)</li>
                    <li>• Plenty of water (2+ liters per person)</li>
                    <li>• Snacks and lunch</li>
                    <li>• Comfortable walking shoes</li>
                    <li>• Camera with extra batteries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Optional Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Binoculars for wildlife viewing</li>
                    <li>• Portable shade (umbrella/tarp)</li>
                    <li>• First aid basics</li>
                    <li>• Local currency for guide/bicycle rental</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time & Photography */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit & Photography Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700">Ideal Season</CardTitle>
                <CardDescription>November - March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Calm seas, reliable boat service</li>
                  <li>• Clear skies for photography</li>
                  <li>• Comfortable temperatures (25-30°C)</li>
                  <li>• Wild horses most active</li>
                  <li>• Best visibility for Adam&apos;s Bridge views</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-700">Shoulder Season</CardTitle>
                <CardDescription>April - May, September - October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Variable weather conditions</li>
                  <li>• Possible boat cancellations</li>
                  <li>• Fewer tourists, more solitude</li>
                  <li>• Dramatic sky photography opportunities</li>
                  <li>• Lower accommodation costs in Jaffna</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-700">Monsoon Season</CardTitle>
                <CardDescription>June - August</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Rough seas, limited boat service</li>
                  <li>• Heavy rains and strong winds</li>
                  <li>• Not recommended for visiting</li>
                  <li>• Dangerous crossing conditions</li>
                  <li>• Island activities severely limited</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Photography Excellence Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Lighting Times</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• <strong>Golden Hour:</strong> 6:30-7:30 AM for horses and baobabs</li>
                    <li>• <strong>Blue Hour:</strong> 6:00-6:30 PM for silhouettes</li>
                    <li>• <strong>Midday:</strong> Harsh light, use for coral stone textures</li>
                    <li>• <strong>Overcast:</strong> Perfect for even lighting on wildlife</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Composition Techniques</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Use baobab trees as natural frames</li>
                    <li>• Capture horses with ocean backdrop</li>
                    <li>• Wide-angle for landscape scale</li>
                    <li>• Telephoto for wildlife close-ups without disturbance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cultural & Environmental Respect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Responsible Tourism & Cultural Respect</h2>
          <Card>
            <CardHeader>
              <CardTitle>Preserving Paradise for Future Generations</CardTitle>
              <CardDescription>Guidelines for respectful and sustainable island exploration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Wildlife Respect</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Observe wild horses from safe distance (minimum 10 meters)</li>
                      <li>• Never feed or attempt to touch the animals</li>
                      <li>• Avoid loud noises that might startle wildlife</li>
                      <li>• Don&apos;t chase horses for photographs</li>
                      <li>• Respect nesting areas and young animals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Cultural Sensitivity</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Greet locals respectfully in Tamil: &quot;Vanakkam&quot;</li>
                      <li>• Ask permission before photographing people</li>
                      <li>• Respect private property and fishing areas</li>
                      <li>• Support local guides and bicycle rental</li>
                      <li>• Learn basic island history before visiting</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Environmental Protection</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                    <ul className="space-y-1">
                      <li>• Carry out all trash, including organic waste</li>
                      <li>• Stay on established paths to protect vegetation</li>
                      <li>• Don&apos;t collect coral, shells, or other natural artifacts</li>
                      <li>• Use reef-safe sunscreen to protect marine life</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Don&apos;t climb on ancient baobab trees</li>
                      <li>• Avoid damaging coral stone structures</li>
                      <li>• Conserve fresh water - it&apos;s precious on the island</li>
                      <li>• Report any environmental damage to authorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Delft Island Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Delft Island offers one of Sri Lanka&apos;s most extraordinary and untouched experiences - a place where
                wild horses gallop freely beneath ancient baobab trees, where coral stone walls tell stories of
                colonial ambition, and where the rhythm of traditional island life continues unchanged by modern tourism.
                This remote paradise, floating in the pristine waters near the legendary Adam&apos;s Bridge, rewards
                adventurous travelers with memories that will last a lifetime.
              </p>
              <p className="text-muted-foreground mb-4">
                The journey to reach Delft Island - crossing choppy seas in small boats, navigating rural transport
                networks, and stepping into a world where time seems frozen - is part of the magic. Every element,
                from the magnificent wild horses to the towering baobab giants, creates an otherworldly experience
                that photographers, nature lovers, and cultural enthusiasts find absolutely captivating.
              </p>
              <p className="text-muted-foreground font-medium">
                Come prepared for adventure, leave with profound respect for this remarkable ecosystem, and help
                preserve one of Sri Lanka&apos;s last untouched island sanctuaries. Delft Island isn&apos;t just a
                destination - it&apos;s a portal to a different world! 🐴🌳🏝️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
