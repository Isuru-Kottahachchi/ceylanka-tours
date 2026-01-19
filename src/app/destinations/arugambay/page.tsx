"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Wind, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { BeachSafetyModal } from "@/components/beach-safety-modal"


export default function ArugamBayTravelGuide() {
  // Beach Safety Modal State
  const [showSafetyModal, setShowSafetyModal] = useState(false)

  // Show modal after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSafetyModal(true)
    }, 1500) // Show after 1.5 seconds
    return () => clearTimeout(timer)
  }, [])

  const handleCloseModal = () => {
    setShowSafetyModal(false)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Beach Safety Modal */}
      <BeachSafetyModal isOpen={showSafetyModal} onClose={handleCloseModal} beachName={"Arugam Bay"} />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Arugam-bay2.jpg"
          alt="Perfect surf break at Arugam Bay with surfers riding waves, palm trees, and golden beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Arugam Bay</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">World-Class Surfing Paradise on Sri Lanka&apos;s East Coast</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              World Class Surf Spots
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Wind className="w-4 h-4 mr-1" />
              Consistent Surf Year-Round
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Arugam Bay: Where Surf Dreams Come Alive
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Arugam Bay, affectionately known as &quot;Arugam&quot; or &quot;A-Bay&quot; by locals and surfers worldwide, is Sri Lanka&apos;s
              undisputed surfing capital and one of the world&apos;s top 10 surf destinations. This laid-back fishing village
              on the east coast has evolved into a legendary surf haven while maintaining its authentic charm, rustic
              beauty, and welcoming community spirit.
            </p>
            <p className="text-lg">
              From perfect right-hand point breaks that peel for hundreds of meters to pristine beaches dotted with
              colorful fishing boats, from wild elephant encounters to vibrant beach culture, Arugam Bay offers an
              authentic Sri Lankan experience that combines world-class surfing with unforgettable adventures.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Arugam bay Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Arugam bay Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Eastern Coast, 320km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> World-Class Right-Hand Point Break
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Surf:</strong> April to October
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>High Season:</strong> April to October
                    </span>
                    <span>
                      <strong>Peak Season:</strong> July and August
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Must-See:</strong> Main Point Surf Break
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 5-7 days
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  {/* <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Gregory_Lake.jpg"
                      alt="Ancient reservoir in Arugam bay, Sri Lanka"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Irrigation Marvels of the Ancient World</p>
                      <p className="text-sm text-blue-800">
                        Arugam bay’s ancient engineers built massive reservoirs (tanks) like Nuwara Wewa and Tissa Wewa, some over 2,000 years old and still functioning today. These marvels turned the dry zone into a lush, thriving kingdom—an engineering legacy admired worldwide.
                      </p>
                    </div>
                  </div> */}
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1–2 full days to explore the sacred sites, ancient tanks, and local culture at a relaxed pace.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May to September (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Arugam bay */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Arugam bay
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 287km (178 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                      <li>• <strong>Cost:</strong> Contact  Ceylanka tours for more details</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Arugam bay. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 70 764 6765</span>
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Valaichchenai
                        then take a bus to Arugam bay</li>
                      <li>• <strong>Duration:</strong> 6-6.5 hours</li>
                      <li>• <strong>Cost:</strong> Depend on class</li>
                      <li>• <strong>Frequency:</strong> A few trains daily</li>
                    </ul>

                    {/* <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Arugam bay</li>
                      <li>• <strong>Duration:</strong> 5.5-6 hours</li>
                      <li>• <strong>Cost:</strong> $2-8 USD (depending on class)</li>
                      <li>• <strong>Scenic journey:</strong> Through countryside</li>
                    </ul> */}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early morning to avoid traffic and heat</li>
                    <li>• Carry water and snacks for the journey</li>
                    <li>• Book accommodations in advance during peak season</li>
                    <li>• Consider staying overnight to explore all sites properly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>


        {/* Surf Breaks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Famous Surf Breaks</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Arugam-bay1.jpg"
                alt="Perfect right-hand wave breaking at Arugam Bay Main Point with surfer riding the wave"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The legendary Main Point - one of the world&apos;s best right-hand point breaks
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Arugam Bay&apos;s Main Point is consistently ranked among the world&apos;s top 10 surf breaks, offering a perfect
                right-hand point break that can provide rides of up to 400 meters on the right day. The wave breaks over
                a rocky reef and sand bottom, creating different sections suitable for various skill levels.
              </p>
              <p>
                The consistent surf, warm water year-round, and the incredible length of rides make Arugam Bay a
                pilgrimage site for surfers from around the globe. Whether you&apos;re a beginner learning to surf or a pro
                looking for the ride of your life, A-Bay delivers unforgettable sessions.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Surf Break Highlights:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Main Point - World-class right-hand point break</li>
                  <li>• Whiskey Point - Powerful reef break for experts</li>
                  <li>• Pottuvil Point - Long rides, less crowded</li>
                  <li>• Baby Point - Perfect for beginners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Arugam Bay</h2>

          <div className="space-y-8">
            {/* Main Point */}
            <Card>
              <CardHeader>
                <CardTitle>1. Main Point Surf Break</CardTitle>
                <CardDescription>The crown jewel of Sri Lankan surfing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Surfing-At-Arugambay-Main-Point.jpg",
                        alt: "Surfer riding a wave at Arugam Bay Main Point",
                        caption: "Arugam Bay Main Point",
                        title: "Arugam Bay Main Point"
                      },
                      {
                        src: "/Surfing-At-Arugambay-Main-Point1.jpg",
                        alt: "Surfer riding a wave at Arugam Bay Main Point",
                        caption: "Arugam Bay Main Point @photosbyprifti",
                        title: "Arugam Bay Main Point"
                      },
                      {
                        src: "/Surfing-At-Arugambay-Main-Point2.jpg",
                        alt: "Surfer riding a wave at Arugam Bay Main Point",
                        caption: "Arugam Bay Main Point @photosbyprifti",
                        title: "Arugam Bay Main Point"
                      },
                      {
                        src: "/Surfing-At-Arugambay-Main-Point3.jpg",
                        alt: "Surfer riding a wave at Arugam Bay Main Point",
                        caption: "Arugam Bay Main Point @photosbyprifti",
                        title: "Arugam Bay Main Point"
                      },
                      {
                        src: "/Surfing-At-Arugambay-Main-Point4.jpg",
                        alt: "Surfer riding a wave at Arugam Bay Main Point",
                        caption: "Arugam Bay Main Point @photosbyprifti",
                        title: "Arugam Bay Main Point"
                      },
                      {
                        src: "/Surfing-At-Arugambay-Main-Point5.jpg",
                        alt: "Surfer riding a wave at Arugam Bay Main Point",
                        caption: "Arugam Bay Main Point @photosbyprifti",
                        title: "Arugam Bay Main Point"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The legendary Main Point is what put Arugam Bay on the world surfing map. This right-hand point
                      break offers incredibly long rides, with waves that can peel for up to 400 meters on the best
                      days. The wave works on all tides and offers different sections for various skill levels.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Consistent waves April to October
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Suitable for intermediate to advanced surfers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple surf schools and board rentals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best surfed during morning sessions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elephant Rock */}
            <Card>
              <CardHeader>
                <CardTitle>2. Elephant Rock</CardTitle>
                <CardDescription>Scenic viewpoint and elephant watching spot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This large rock formation offers panoramic views of the coastline and is famous for wild elephant
                      sightings, especially during early morning and late afternoon. The rock gets its name from the
                      elephants that frequently visit the area to drink from nearby lagoons and graze on the beach.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Wild elephant sightings year-round
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise and sunset views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for photography and wildlife watching
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        15-minute walk from main beach
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Elephant-Rock-Arugambay.jpg",
                        alt: "Elephant Rock formation with elephants grazing nearby",
                        caption: "Elephant Rock",
                        title: "Elephant Rock"
                      },
                      {
                        src: "/Elephant-Rock-Arugambay1.jpg",
                        alt: "Elephants near Elephant Rock formation in Arugambay",
                        caption: "Elephants near Elephant Rock",
                        title: "Elephants near Elephant Rock"
                      },
                      {
                        src: "/Elephant-Rock-Arugambay2.jpg",
                        alt: "Elephants near Elephant Rock formation in Arugambay",
                        caption: "Elephants near Elephant Rock",
                        title: "Elephants near Elephant Rock"
                      },
                      {
                        src: "/Elephant-Rock-Arugambay6.jpg",
                        alt: "Elephants near Elephant Rock formation in Arugambay",
                        caption: "Elephants near Elephant Rock",
                        title: "Elephants near Elephant Rock"
                      },
                      {
                        src: "/Elephant-Rock-Arugambay3.jpg",
                        alt: "Elephants near Elephant Rock formation in Arugambay",
                        caption: "Elephants near Elephant Rock",
                        title: "Elephants near Elephant Rock"
                      },
                      {
                        src: "/Elephant-Rock-Arugambay4.jpg",
                        alt: "Elephants near Elephant Rock formation in Arugambay",
                        caption: "Elephants near Elephant Rock",
                        title: "Elephants near Elephant Rock"
                      },
                      {
                        src: "/Elephant-Rock-Arugambay5.jpg",
                        alt: "Elephants near Elephant Rock formation in Arugambay",
                        caption: "Elephants near Elephant Rock",
                        title: "Elephants near Elephant Rock"
                      },

                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pottuvil Lagoon */}
            <Card>
              <CardHeader>
                <CardTitle>3. Pottuvil Lagoon</CardTitle>
                <CardDescription>Pristine lagoon perfect for kayaking and bird watching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Peaceful Pottuvil Lagoon with mangroves, birds, and traditional fishing boats"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This beautiful brackish water lagoon is separated from the ocean by a narrow strip of sand and
                      offers a completely different experience from the surf beaches. The lagoon is rich in birdlife,
                      surrounded by mangroves, and perfect for peaceful kayaking adventures.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent bird watching opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Kayaking and stand-up paddleboarding
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Mangrove ecosystem exploration
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional fishing village nearby
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Surf Culture & Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Surf Culture & Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Surf Schools & Equipment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Learn to Surf</h4>
                  <p className="text-sm text-muted-foreground">
                    Multiple surf schools offer lessons for all levels, from complete beginners to advanced coaching.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Board Rentals</h4>
                  <p className="text-sm text-muted-foreground">
                    Wide selection of surfboards available for rent, from longboards to high-performance shortboards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Surf Photography</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional surf photographers capture your sessions for unforgettable memories.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beyond Surfing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Wildlife Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit nearby Kumana National Park for bird watching and wildlife encounters.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fishing Trips</h4>
                  <p className="text-sm text-muted-foreground">
                    Join local fishermen for traditional fishing experiences and fresh seafood.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Yoga & Wellness</h4>
                  <p className="text-sm text-muted-foreground">
                    Beach yoga sessions and Ayurvedic treatments for post-surf relaxation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weather & Surf Seasons */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Surf Seasons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Surf Season</CardTitle>
                <CardDescription>June to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Consistent 4-8ft waves daily</li>
                  <li>• Offshore winds in the morning</li>
                  <li>• Dry weather, minimal rainfall</li>
                  <li>• Crowded but electric atmosphere</li>
                  <li>• Higher accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Good Surf Season</CardTitle>
                <CardDescription>April-May & October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smaller but consistent waves</li>
                  <li>• Less crowded lineups</li>
                  <li>• Occasional rain showers</li>
                  <li>• Perfect for beginners</li>
                  <li>• Better accommodation deals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Off Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smaller, inconsistent waves</li>
                  <li>• Onshore winds common</li>
                  <li>• Many businesses closed</li>
                  <li>• Peaceful, local atmosphere</li>
                  <li>• Lowest prices available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Arugam Bay adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Panama-Tank.jpg"
                  alt="Panama Tank with elephants and natural scenery"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  12 mins from Arugam Bay
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Panama Tank</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Panama Tank is also know as &apos;Crocadile point&apos; because of high chance of seeing crocodiles and elephants in the area.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  12 Km from Arugam Bay
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/panama-tank" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Kumana-National-Park.jpg"
                  alt="Kumana National Park with birds, elephants and diverse wildlife"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  around 2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kumana National Park</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A great bird watching destination and Sri Lankan leopard habitat in Sri Lanka and a haven for wildlife enthusiasts.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  56 km from Arugam Bay
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kumana-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Panama-Beach-Camping.jpg"
                  alt="Panama Beach Camping Awidinno"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  12 mins from Arugam Bay
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Panama Beach</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Beach camping friendly beach with beautiful scenery and tranquil atmosphere.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  12 Km from Arugam Bay
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/panama-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Arugam Bay Surf Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Arugam Bay is more than just a surf destination - it&apos;s a way of life. Here, the rhythm of the waves
                dictates the day, the community welcomes you like family, and every session in the water brings new
                adventures and friendships. Whether you catch your first wave or the wave of your life, A-Bay will leave
                an indelible mark on your soul.
              </p>
              <p className="text-muted-foreground mb-4">
                From dawn patrol sessions at Main Point to sunset beers watching elephants on the beach, from learning
                to surf with local legends to exploring pristine lagoons, Arugam Bay offers authentic experiences that
                connect you with nature, culture, and the pure joy of surfing.
              </p>
              <p className="text-muted-foreground font-medium">Catch your wave in paradise! 🏄‍♂️🌊</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
