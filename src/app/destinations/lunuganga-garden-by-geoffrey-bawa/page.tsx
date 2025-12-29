"use client"

import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Users, Leaf, Home, Trees, Waves, Flower } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Button } from "@/components/ui/button"





export default function LunugangaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Lunugangabawa2.jpeg"
          alt="Stunning view of Lunuganga Garden showing Geoffrey Bawa's architectural integration with natural landscape in Bentota"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lunuganga Garden</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Geoffrey Bawa&apos;s Architectural Paradise in Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Bentota, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Home className="w-4 h-4 mr-1" />
              Architectural Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              1948-1998 Design Period
            </Badge>
            {/* <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Palette className="w-4 h-4 mr-1" />
              Tropical Modernism
            </Badge> */}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Lunuganga: Where Architecture Meets Nature</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Lunuganga is a beautiful 25-acre garden estate created by Geoffrey Bawa, Sri Lanka&apos;s most famous architect.
              What started as a rubber plantation in 1948 became one of Asia&apos;s most stunning gardens, located on the
              peaceful shores of Dedduwa Lake near Bentota. Bawa spent over 50 years designing this special place where
              nature and buildings blend perfectly together.
            </p>
            <p className="text-lg mb-4">
              The garden features terraced lawns that appear to float above the lake, hidden courtyards with tropical
              flowers, and peaceful pavilions with lake views. Every path and space was carefully designed to create a
              calm and inspiring experience. Plan to spend 2-3 hours exploring the different garden areas and enjoying
              the peaceful atmosphere.
            </p>
          </div>
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Visitor Guidelines</h4>
                <p className="text-sm text-green-700 mb-2">
                  <strong>Respect the living space:</strong> Lunuganga remains a private residence and working garden.
                  Please maintain quiet voices and follow designated pathways to preserve the tranquil atmosphere.
                </p>
                <p className="text-sm text-green-700 mb-2">
                  <strong>Photography etiquette:</strong> While photography is encouraged, please be mindful of other
                  visitors and avoid using flash indoors. Some areas may have photography restrictions.
                </p>
                <p className="text-sm text-green-700">
                  <strong>Advance booking required:</strong> Lunuganga requires advance reservations for all visits.
                  Contact the estate directly or book through authorized tour operators.
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
                Quick Facts About Lunuganga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Created:</strong> 1948-1998 (50 years)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Size:</strong> 25 acres (10 hectares)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Designer:</strong> Geoffrey Bawa
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Dedduwa Lake, Bentota
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Style:</strong> Tropical Modernism
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2-3 hours
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting to Lunuganga from Colombo */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <MapPin className="w-5 h-5" />
                How to Travel from Colombo to Lunuganga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">By Private Car/Taxi (Recommended)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 65km (40 miles)</li>
                    <li>• <strong>Duration:</strong> 1.5-2 hours</li>
                    <li>• <strong>Cost:</strong> $25-40 USD</li>
                    <li>• <strong>Route:</strong> Colombo → Kalutara → Bentota</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">By Train + Taxi</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Train:</strong> Colombo to Bentota Station</li>
                    <li>• <strong>Duration:</strong> 2 hours + 15 min taxi</li>
                    <li>• <strong>Cost:</strong> $2-5 USD train + $5 taxi</li>
                    <li>• <strong>Experience:</strong> Scenic coastal journey</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800">
                  <strong>💡 Pro Tip:</strong> Visit during afternoon hours (2-5 PM) for the best lighting and cooler
                  temperatures. Morning visits offer peaceful atmosphere but harsh light for photography.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Story of Geoffrey Bawa and Lunuganga */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Visionary Story Behind Lunuganga</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <ImageCarousel
                images={
                  [
                    { src: "/Lunuganga-garden.jpg", alt: "Geoffrey Bawa working on garden plans at Lunuganga", title: "", caption: "" },
                    { src: "/Lunuganga-garden1.jpg", alt: "Geoffrey Bawa in Lunuganga garden surrounded by tropical plants", title: "", caption: "" },
                  ]
                }
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Geoffrey Bawa in his beloved Lunuganga garden, where he spent over 50 years perfecting his vision
                of tropical modernist design.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The story of Lunuganga begins in 1948 when a young Geoffrey Bawa, fresh from studying law at
                Cambridge, purchased a modest 10-acre rubber estate on the banks of Dedduwa Lake. What started
                as a weekend retreat would become a lifetime obsession and the birthplace of a revolutionary
                architectural movement that would influence design across the tropical world.
              </p>
              <p>
                Bawa had no formal training in architecture when he began transforming the estate, but he possessed
                something more valuable - an intuitive understanding of how spaces should feel and how buildings
                should respond to their environment. Working with skilled local craftsmen and gardeners, he began
                creating a series of interconnected spaces that seemed to grow naturally from the landscape itself.
              </p>
              <p>
                Over the next five decades, Bawa continuously refined and expanded Lunuganga, treating it as both
                his home and his experimental laboratory. Every element - from the placement of a single tree to
                the orientation of a pavilion - was carefully considered to create what he called &apos;a series of
                experiences&apos; that would unfold as visitors moved through the space.
              </p>
              <p>
                The genius of Lunuganga lies not in any single dramatic gesture, but in the accumulation of
                countless subtle decisions that create an overall sense of harmony and discovery. Bawa believed
                that good design should feel effortless and natural, even when it required enormous thought and
                skill to achieve such apparent simplicity.
              </p>
            </div>
          </div>
          {/* Visitor Information */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Essential Visitor Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Booking and Access</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Advance booking required</strong> - contact estate directly</li>
                      <li>• <strong>Entry fee:</strong> $15-25 USD per person (varies by season)</li>
                      <li>• <strong>Group size:</strong> Maximum 15 people per tour</li>
                      <li>• <strong>Duration:</strong> 2-3 hours recommended</li>
                      <li>• <strong>Guide service:</strong> Included with entry fee</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">What to Bring</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Comfortable walking shoes</strong> with good grip</li>
                      <li>• <strong>Sun protection:</strong> Hat, sunglasses, sunscreen</li>
                      <li>• <strong>Camera:</strong> With extra batteries for extensive photography</li>
                      <li>• <strong>Water bottle:</strong> Stay hydrated in tropical climate</li>
                      <li>• <strong>Light clothing:</strong> Breathable fabrics in neutral colors</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Additional Design Philosophy */}
          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold mb-4 text-green-800">Bawa&apos;s Design Philosophy at Lunuganga</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-green-700">Architectural Principles</h4>
                <ul className="space-y-2 text-sm text-green-600">
                  <li>• Buildings should respond to climate and landscape</li>
                  <li>• Indoor and outdoor spaces should flow seamlessly</li>
                  <li>• Traditional materials used in contemporary ways</li>
                  <li>• Each space should frame a particular view</li>
                  <li>• Architecture should enhance rather than dominate nature</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-700">Garden Design Elements</h4>
                <ul className="space-y-2 text-sm text-green-600">
                  <li>• Native plants mixed with carefully chosen exotics</li>
                  <li>• Water features integrated into the natural topography</li>
                  <li>• Pathways designed to create discovery and surprise</li>
                  <li>• Borrowed landscapes extending visual boundaries</li>
                  <li>• Seasonal changes celebrated through plant selection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to See and Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Discovering the Magical Spaces of Lunuganga</h2>

          <div className="grid gap-8">

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-500" />
                  The Main House and Verandas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <ImageCarousel
                      images={[
                        { src: "/The-Main-House-and-Verandas.jpg", alt: "Terraced lawns floating above Dedduwa Lake", title: "Floating Terraces", caption: "Geometric grass platforms appearing to float above the lake" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Geometric grass platforms with mountain backdrop", title: "Mountain Views", caption: "Terraces framing distant mountain views" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Different angles of the iconic terraces", title: "Multiple Perspectives", caption: "Various viewpoints of the famous terraced lawns" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Seasonal changes in the terraced landscape", title: "Seasonal Beauty", caption: "How the terraces change with the seasons" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The heart of Lunuganga is Bawa&apos;s residence, a low-rise structure that seems to float above the landscape. The house demonstrates all of Bawa&apos;s key principles: wide verandas that blur the boundary between inside and outside, carefully framed views of the lake and garden, and rooms that open completely to catch every breeze.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2">Architectural Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Main veranda with panoramic lake views</li>
                        <li>• Interior courtyards filled with tropical plants</li>
                        <li>• Dining pavilion extending over the water</li>
                        <li>• Library with built-in reading nooks</li>
                        <li>• Guest rooms integrated into garden terraces</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Design Elements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Local timber and stone construction</li>
                        <li>• Clay tile roofs for cooling and character</li>
                        <li>• Floor-to-ceiling openings for ventilation</li>
                        <li>• Antique Sri Lankan and Asian furnishings</li>
                        <li>• Contemporary art integrated throughout</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* The Terraced Gardens */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-500" />
                  The Famous Terraced Lawns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Terraced lawns floating above Dedduwa Lake", title: "Floating Terraces", caption: "Geometric grass platforms appearing to float above the lake" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Geometric grass platforms with mountain backdrop", title: "Mountain Views", caption: "Terraces framing distant mountain views" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Different angles of the iconic terraces", title: "Multiple Perspectives", caption: "Various viewpoints of the famous terraced lawns" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Seasonal changes in the terraced landscape", title: "Seasonal Beauty", caption: "How the terraces change with the seasons" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Perhaps the most famous feature of Lunuganga is the series of terraced lawns that appear
                      to float above Dedduwa Lake. These geometric grass platforms, created by Bawa in the 1960s,
                      represent one of the most photographed garden features in Asia.
                    </p>
                    <h4 className="font-semibold mb-2">What Makes Them Special:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Optical illusion of floating above water</li>
                      <li>• Perfect proportions creating visual harmony</li>
                      <li>• Framing of distant mountain views</li>
                      <li>• Integration with natural lake shoreline</li>
                      <li>• Seasonal changes in surrounding vegetation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Garden Rooms and Pathways */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-purple-500" />
                  Garden Rooms and Hidden Spaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Cinnamon Hill pavilion with panoramic views", title: "Cinnamon Hill", caption: "Pavilion offering panoramic views across the estate" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Water garden with reflecting pools", title: "Water Garden", caption: "Reflecting pools creating cooling microclimates" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Entrance court with geometric patterns", title: "Entrance Court", caption: "Formal arrival space with geometric design" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Hidden pathways through tropical gardens", title: "Hidden Pathways", caption: "Winding paths creating journey and discovery" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Secret courtyards with frangipani trees", title: "Secret Courtyards", caption: "Intimate spaces filled with fragrant trees" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Lunuganga is organized as a series of &apos;garden rooms&apos; - distinct spaces with their own
                      character and purpose, connected by carefully planned pathways that create a sense of journey
                      and discovery. Each room offers different experiences and reveals new aspects of Bawa&apos;s design vision.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-700">The Cinnamon Hill</h4>
                        <p className="text-sm text-muted-foreground">
                          The highest point offering panoramic views across the entire garden and lake.
                          Features a pavilion perfect for sunset viewing and meditation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-700">The Water Garden</h4>
                        <p className="text-sm text-muted-foreground">
                          Reflecting pools and water channels that mirror the sky and vegetation,
                          creating a cooling microclimate in the tropical heat.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-700">The Entrance Court</h4>
                        <p className="text-sm text-muted-foreground">
                          A formal arrival space featuring geometric patterns and specimen trees
                          that frame the view toward the main house.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Addition: The Secret Gardens */}
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trees className="w-5 h-5 text-emerald-500" />
                  The Secret Gardens and Groves
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Bamboo grove with filtered sunlight", title: "Bamboo Grove", caption: "Natural cathedral effect with filtered sunlight" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Frangipani courtyard with stone sculptures", title: "Frangipani Courtyard", caption: "Intimate space with fragrant trees and sculptures" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Palm grove leading to lake views", title: "Palm Grove", caption: "Majestic palms creating vertical drama" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Hidden meditation spots among tropical plants", title: "Meditation Spots", caption: "Quiet corners for contemplation and reflection" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Beyond the main spaces, Lunuganga reveals intimate secret gardens and groves that Bawa
                      created for quiet contemplation. These hidden areas showcase his mastery of creating
                      intimate spaces within the larger landscape composition.
                    </p>
                    <div className="grid gap-3">
                      <div>
                        <h5 className="font-medium text-emerald-700 mb-1">The Bamboo Grove</h5>
                        <p className="text-xs text-muted-foreground">Filtered light through bamboo creating a natural cathedral effect</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-emerald-700 mb-1">Frangipani Courtyard</h5>
                        <p className="text-xs text-muted-foreground">Intimate space filled with fragrant trees and stone sculptures</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-emerald-700 mb-1">The Palm Grove</h5>
                        <p className="text-xs text-muted-foreground">Majestic coconut palms creating vertical drama</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Addition: The Lakeside Pavilions */}
            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-cyan-500" />
                  Lakeside Pavilions and Water Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Floating pavilion over Dedduwa Lake", title: "Floating Pavilion", caption: "Architectural structure extending over calm waters" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Stone steps leading into the water", title: "Stone Ghats", caption: "Traditional steps connecting land to water" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Reflection pool connecting to main lake", title: "Reflection Pool", caption: "Water feature extending lake views into garden" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Wooden jetty extending into calm waters", title: "Wooden Jetty", caption: "Peaceful platform for lake contemplation" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Lotus pond with architectural backdrop", title: "Lotus Pond", caption: "Aquatic garden with architectural framing" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Bawa&apos;s genius is perhaps most evident in how he integrated water into every aspect of Lunuganga.
                      From floating pavilions to stepped ghats, these water features create a seamless connection
                      between the built environment and the natural lake.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Water Elements:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Floating dining pavilion over lake</li>
                          <li>• Stone ghats leading into water</li>
                          <li>• Reflection pools extending lake views</li>
                          <li>• Wooden jetties for lake access</li>
                          <li>• Lotus ponds with architectural features</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Design Philosophy:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Water as extension of living space</li>
                          <li>• Natural cooling through water features</li>
                          <li>• Reflection to double garden views</li>
                          <li>• Seasonal water level integration</li>
                          <li>• Sound of water enhancing tranquility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Addition: The Sculpture Walk */}
            <Card className="border-l-4 border-l-rose-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flower className="w-5 h-5 text-rose-500" />
                  The Sculpture Walk and Art Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Ancient stone Buddha among tropical plants", title: "Ancient Sculptures", caption: "Historic Sri Lankan stone carvings in garden settings" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Contemporary sculpture in garden setting", title: "Contemporary Art", caption: "Modern pieces by local and international artists" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Decorative architectural elements", title: "Architectural Elements", caption: "Features that blur the line between art and architecture" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Art pieces integrated with water features", title: "Water Integration", caption: "Sculptures enhanced by water reflections" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Throughout Lunuganga, Bawa integrated sculptures and art pieces that complement the natural
                      landscape. This careful curation of art objects creates surprising moments of discovery
                      and adds layers of cultural meaning to the garden experience.
                    </p>
                    <div className="grid gap-3">
                      <div>
                        <h5 className="font-medium text-rose-700 mb-1">Ancient Sculptures</h5>
                        <p className="text-xs text-muted-foreground">Historic Sri Lankan stone carvings placed in garden settings</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-rose-700 mb-1">Contemporary Art</h5>
                        <p className="text-xs text-muted-foreground">Modern pieces by local and international artists</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-rose-700 mb-1">Architectural Elements</h5>
                        <p className="text-xs text-muted-foreground">Decorative features that blur art and architecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <Calendar className="w-5 h-5" />
                Best Time to Visit Lunuganga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-amber-700">Optimal Seasons</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-amber-700">December - March (Dry Season)</h5>
                      <p className="text-sm text-muted-foreground">Perfect weather with minimal rain and comfortable temperatures. Gardens at their most lush after monsoon season.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-700">July - September</h5>
                      <p className="text-sm text-muted-foreground">Good weather with occasional showers that enhance the tropical atmosphere and keep temperatures moderate.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-700">Daily Timing</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-amber-700">Afternoon (2:00 - 5:00 PM)</h5>
                      <p className="text-sm text-muted-foreground">Best lighting for photography and comfortable temperatures for walking. Gardens look magical in late afternoon light.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-700">Early Morning (8:00 - 10:00 AM)</h5>
                      <p className="text-sm text-muted-foreground">Peaceful atmosphere with bird activity and fresh morning air. Perfect for contemplative visits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photography Guide */}
        <section className="mb-12">
          <Card className="border-pink-200 bg-pink-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-800">
                <Camera className="w-5 h-5" />
                Photography Tips for Lunuganga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-pink-700">Best Photo Spots</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Terraced Lawns:</strong> Iconic floating grass platforms</li>
                    <li>• <strong>Main Veranda:</strong> Architecture framing lake views</li>
                    <li>• <strong>Cinnamon Hill:</strong> Panoramic garden overview</li>
                    <li>• <strong>Water Garden:</strong> Reflections and symmetry</li>
                    <li>• <strong>Entrance Court:</strong> Geometric patterns and textures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-pink-700">Technical Tips</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Golden Hour:</strong> 4-6 PM for warm, soft lighting</li>
                    <li>• <strong>Wide Angle:</strong> Capture spatial relationships</li>
                    <li>• <strong>Detail Shots:</strong> Architectural elements and textures</li>
                    <li>• <strong>Reflections:</strong> Use water features for mirror effects</li>
                    <li>• <strong>Composition:</strong> Frame views as Bawa intended</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-pink-100 rounded-lg border-l-4 border-pink-500">
                <p className="text-sm text-pink-800">
                  <strong>📸 Photography Etiquette:</strong> While photography is encouraged, please be respectful of other
                  visitors and the peaceful atmosphere. Some interior spaces may have restrictions, so always ask permission.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Explore More in the Bentota Area</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Brief Garden</CardTitle>
                <CardDescription>Bevis Bawa&apos;s landscape masterpiece</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Brief-Garden-by-Bawa.jpg"
                  alt="Brief Garden showing sculptural landscape design"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Created by Geoffrey Bawa&apos;s brother Bevis, this artistic garden features sculptures,
                  exotic plants, and whimsical design elements in a more intimate setting.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 10km from Lunuganga</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/brief-garden-by-bevis-bawa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Bentota</CardTitle>
                <CardDescription>Golden sand and water sports</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Bentota Beach showing golden sand and palm trees"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  One of Sri Lanka&apos;s most beautiful beaches, perfect for relaxation after your garden visit.
                  Offers water sports, seafood restaurants, and sunset viewing.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 5km from Lunuganga</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bentota" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Kosgoda Turtle Hatchery</CardTitle>
                <CardDescription>Sea turtle conservation center</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Baby sea turtles at Kosgoda hatchery"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Learn about sea turtle conservation and see baby turtles being cared for before their
                  release into the ocean. Great family-friendly activity.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 15km from Lunuganga</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/lunuganga-garden-by-geoffrey-bawa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="border-indigo-200 bg-indigo-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800">
                <CheckCircle className="w-5 h-5" />
                Expert Travel Tips for Your Lunuganga Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700">Before You Go</h4>
                  <ul className="space-y-2 text-sm text-indigo-600">
                    <li>• Book your visit at least 24 hours in advance</li>
                    <li>• Read about Geoffrey Bawa&apos;s work for better appreciation</li>
                    <li>• Check weather conditions and dress appropriately</li>
                    <li>• Bring cash for entry fees and tips</li>
                    <li>• Charge your camera/phone batteries fully</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700">During Your Visit</h4>
                  <ul className="space-y-2 text-sm text-indigo-600">
                    <li>• Follow your guide&apos;s instructions and stay on pathways</li>
                    <li>• Take time to sit and observe each garden room</li>
                    <li>• Ask questions about design principles and plant selection</li>
                    <li>• Respect the peaceful atmosphere and other visitors</li>
                    <li>• Purchase books or souvenirs to support the estate</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Experience the Magic of Lunuganga</h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                Lunuganga is more than just a garden - it&apos;s a masterclass in how human creativity can enhance and
                celebrate the natural world. Geoffrey Bawa&apos;s vision continues to inspire architects, landscape
                designers, and garden lovers from around the globe, making this one of the most important cultural
                sites in Sri Lanka.
              </p>
              <div className="flex justify-center mt-6">
                <Badge variant="outline" className="text-green-700 border-green-300 bg-white">
                  <Leaf className="w-4 h-4 mr-1" />
                  A Living Legacy of Tropical Design
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}