"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Sun, TreePalm, Car, Train, Users, AlertTriangle, Heart, Wind, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"



// Hiriketiya Beach Image Carousel Component
function HiriketiyaImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const hiriketiyaImages = [
    {
      src: "/Hirikatiya-Horseshoe.jpg",
      alt: "Perfect horseshoe bay of Hiriketiya Beach with surfers and coconut palms",
      caption: "The famous horseshoe-shaped bay"
    },
    {
      src: "/Hirikatiya.jpg",
      alt: "Surfers riding perfect waves at Hiriketiya Beach during golden hour",
      caption: "Perfect surfing waves at sunset"
    },
    {
      src: "/Hiriketiyabeach.jpg",
      alt: "Aerial view of Hiriketiya Beach showing the protected bay and surf breaks",
      caption: "Aerial view of the surfing paradise"
    },
    // {
    //   src: "/Sea-turtle-bentota.jpeg",
    //   alt: "Beach yoga session at sunrise on Hiriketiya Beach",
    //   caption: "Morning yoga sessions on pristine sand"
    // }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hiriketiyaImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hiriketiyaImages.length - 1 : prevIndex - 1
    )
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative group">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={hiriketiyaImages[currentImageIndex].src}
          alt={hiriketiyaImages[currentImageIndex].alt}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentImageIndex === 0}
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Image Caption - Now below the image */}
      <div className="mt-3 text-center">
        <p className="text-sm font-medium text-muted-foreground">{hiriketiyaImages[currentImageIndex].caption}</p>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {hiriketiyaImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-blue-600 scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HiriketiyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Hirikatiyabeach.jpg"
          alt="Stunning aerial view of Hiriketiya Beach showing the perfect horseshoe-shaped bay with surfers, palm trees, and golden sand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hiriketiya Beach</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Ultimate Surfing Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Perfect Surfing Waves
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Heart className="w-4 h-4 mr-1" />
              Horseshoe Bay
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePalm className="w-4 h-4 mr-1" />
              Tropical Paradise
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Hiriketiya: The Crown Jewel of Sri Lankan Surfing</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled along Sri Lanka&apos;s stunning southern coast, Hiriketiya Beach has emerged as the island&apos;s most beloved surfing destination and backpacker paradise.
              This perfect horseshoe-shaped bay offers consistent, world-class waves, a vibrant international community, and an irresistible laid-back atmosphere that captures the hearts of travelers from around the globe.
              Known locally as &quot;Hiri,&quot; this small fishing village has transformed into a surfing mecca while retaining its authentic Sri Lankan charm.
            </p>
            <p className="text-lg">
              From dawn patrol surf sessions to sunset yoga on pristine sand, from beachfront cafes serving fresh smoothie bowls to evening bonfires under starlit skies,
              Hiriketiya offers the quintessential tropical beach experience. The bay&apos;s unique geography creates perfect surfing conditions for all levels,
              while the surrounding coconut groves and traditional fishing village atmosphere provide an authentic taste of coastal Sri Lankan life that&apos;s increasingly rare in today&apos;s world.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Hiriketiya Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Near Dickwella, Southern Coast
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> World-class surfing waves
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Season:</strong> November to April
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Beach Shape:</strong> Perfect horseshoe bay
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Vibe:</strong> International backpacker hub
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 3-7 days minimum
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Perfect Wave */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Class Surfing: The Heart of Hiriketiya</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <HiriketiyaImageCarousel />

            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hiriketiya&apos;s unique horseshoe-shaped geography creates one of the most consistent and forgiving surf breaks in Sri Lanka.
                The bay offers multiple surf spots suitable for all levels - from gentle white water perfect for beginners on the inside,
                to powerful reef breaks that challenge even experienced surfers. The protected bay ensures surfable waves even when other spots are flat or too rough.
              </p>
              <p>
                What makes Hiriketiya special is the variety of waves within one compact bay. The main break offers long, clean rides perfect for progression,
                while the left-hand point break provides more advanced waves. The sandy bottom in most areas makes it safe for learning,
                and the consistent swell from the Indian Ocean ensures waves almost year-round.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Surf Conditions & Details:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Consistent 2-6 foot waves (November-April peak season)</li>
                  <li>• Multiple breaks: inside reform, main break, left point</li>
                  <li>• Best at mid to high tide for beginners</li>
                  <li>• Offshore winds in the morning (6-10 AM ideal)</li>
                  <li>• Sandy bottom with some reef sections</li>
                  <li>• Works in small to medium swells (1-8 feet)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Surf Spots */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Hiriketiya Surf Spots Breakdown</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">The Inside (Beginners)</CardTitle>
                  <CardDescription>Perfect learning environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      White water and small reformed waves perfect for first-time surfers. Sandy bottom and gentle waves make it ideal for lessons.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Wave height: 1-3 feet</li>
                      <li>• Bottom: Sandy</li>
                      <li>• Skill level: Beginner</li>
                      <li>• Best time: All tides</li>
                      <li>• Crowd factor: Moderate</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Main Break (Intermediate)</CardTitle>
                  <CardDescription>The classic Hiri wave</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      The main peak offering long, clean rides. Perfect for progressing surfers and the most popular spot in the bay.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Wave height: 2-5 feet</li>
                      <li>• Bottom: Sand and coral</li>
                      <li>• Skill level: Intermediate</li>
                      <li>• Best time: Mid-high tide</li>
                      <li>• Crowd factor: Busy</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Left Point (Advanced)</CardTitle>
                  <CardDescription>The challenge wave</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Fast, powerful left-hand point break over shallow reef. Only for experienced surfers who know how to handle reef breaks.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Wave height: 3-8 feet</li>
                      <li>• Bottom: Sharp coral reef</li>
                      <li>• Skill level: Advanced</li>
                      <li>• Best time: High tide</li>
                      <li>• Crowd factor: Less crowded</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Surf Schools & Rentals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Surf Schools & Equipment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Surf Schools in Hiriketiya</CardTitle>
                <CardDescription>Professional instruction for all levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Hiriketiya Surf School</h4>
                    <p className="text-sm text-muted-foreground">Original school with local and international instructors</p>
                    <p className="text-xs text-blue-600">Group: 3000 LKR | Private: 5000 LKR | 5-day course: 12000 LKR</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-800">Coconut Tree Hill Surf Academy</h4>
                    <p className="text-sm text-muted-foreground">Professional coaching with video analysis</p>
                    <p className="text-xs text-green-600">Group: 3500 LKR | Private: 6000 LKR | Multi-day packages available</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-800">Lazy Beach Surf Co.</h4>
                    <p className="text-sm text-muted-foreground">Laid-back approach, perfect for nervous beginners</p>
                    <p className="text-xs text-purple-600">Group: 2500 LKR | Private: 4500 LKR | Women-only classes available</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-800">Local Fishermen Lessons</h4>
                    <p className="text-sm text-muted-foreground">Authentic experience with village fishermen</p>
                    <p className="text-xs text-orange-600">Negotiable: 2000-3000 LKR | Traditional knowledge included</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equipment Rental & Rates</CardTitle>
                <CardDescription>Everything you need for your surf sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Surfboard Rentals</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Beginner foam boards:</span>
                        <span className="text-muted-foreground">1000-1500 LKR/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Intermediate fiberglass:</span>
                        <span className="text-muted-foreground">1500-2000 LKR/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Advanced shortboards:</span>
                        <span className="text-muted-foreground">2000-2500 LKR/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekly rates:</span>
                        <span className="text-muted-foreground">30% discount</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Additional Equipment</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Rashguards/wetsuits:</span>
                        <span className="text-muted-foreground">500 LKR/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Leashes:</span>
                        <span className="text-muted-foreground">300 LKR/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wax:</span>
                        <span className="text-muted-foreground">200 LKR/piece</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fins:</span>
                        <span className="text-muted-foreground">400 LKR/day</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-xs text-yellow-700">
                      <strong>Pro tip:</strong> Many guesthouses offer free board storage and some include surfboard rental in accommodation packages
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Beach Culture & Lifestyle */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hiriketiya&apos;s Unique Beach Culture</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The International Backpacker Paradise</CardTitle>
                <CardDescription>A global community in a small Sri Lankan bay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Hiriketiya has evolved into Sri Lanka&apos;s most international beach destination, attracting travelers from around the world who come for the waves and stay for the community.
                      The bay buzzes with a unique energy where European backpackers, Australian surfers, local fishermen, and digital nomads create an atmosphere found nowhere else in Sri Lanka.
                      This multicultural mix has created a vibrant scene of beach bars, international restaurants, and a laid-back lifestyle that embodies the best of tropical beach living.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        International community from 20+ countries
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        English widely spoken at most establishments
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sunset gatherings and beach volleyball daily
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Yoga classes, live music, and cultural exchange
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="International travelers enjoying sunset at Hiriketiya Beach with beach volleyball and social activities"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Rhythm & Beach Activities</CardTitle>
                <CardDescription>The perfect day in paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Morning Vibes (6:00-11:00 AM)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dawn patrol surf sessions with offshore winds</li>
                      <li>• Yoga classes on the beach at sunrise</li>
                      <li>• Fresh smoothie bowls and coffee at beachfront cafes</li>
                      <li>• Fewer crowds, best waves of the day</li>
                      <li>• Morning walks to nearby temples and viewpoints</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">Evening Magic (4:00-8:00 PM)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sunset surf sessions with perfect light</li>
                      <li>• Beach volleyball tournaments and games</li>
                      <li>• Sunset yoga and meditation sessions</li>
                      <li>• Happy hour at beach bars with ocean views</li>
                      <li>• Bonfires, live music, and stargazing</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Signature Hiriketiya Experiences:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <ul className="space-y-1 text-orange-700">
                      <li>• Full moon parties on the beach</li>
                      <li>• Sunset cocktails at Salt House</li>
                      <li>• Beach volleyball tournaments</li>
                    </ul>
                    <ul className="space-y-1 text-orange-700">
                      <li>• Morning surf + yoga packages</li>
                      <li>• International potluck dinners</li>
                      <li>• Live music nights at local bars</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Hiriketiya</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Beachfront & Premium Accommodations</CardTitle>
                <CardDescription>Wake up to waves at your doorstep</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-800">Salt House</h4>
                      <p className="text-sm text-muted-foreground mb-2">Luxury beachfront hotel with infinity pool and spa</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Direct beach access & ocean view rooms</li>
                        <li>• Infinity pool overlooking the bay</li>
                        <li>• High-end restaurant & cocktail bar</li>
                        <li>• Spa services & yoga deck</li>
                      </ul>
                      <p className="text-xs text-blue-600 mt-2">15,000-35,000 LKR/night | Breakfast included</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">Coconut Tree Hill Lodge</h4>
                      <p className="text-sm text-muted-foreground mb-2">Boutique eco-lodge with treehouse vibes</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Elevated cabins in coconut grove</li>
                        <li>• Sustainable design & solar power</li>
                        <li>• Organic restaurant & garden</li>
                        <li>• Surf board storage & rental</li>
                      </ul>
                      <p className="text-xs text-green-600 mt-2">8,000-18,000 LKR/night | Eco-friendly</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-800">Hiriketiya Beach Resort</h4>
                      <p className="text-sm text-muted-foreground mb-2">Mid-range resort with pool and restaurant</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Swimming pool & tropical gardens</li>
                        <li>• Air-conditioned rooms with balconies</li>
                        <li>• Multi-cuisine restaurant</li>
                        <li>• Organized activities & tours</li>
                      </ul>
                      <p className="text-xs text-purple-600 mt-2">6,000-12,000 LKR/night | Pool & restaurant</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Beachfront Perks:</h5>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>• Wake up to waves breaking outside your window</li>
                        <li>• Easy access for dawn patrol surf sessions</li>
                        <li>• Prime sunset viewing from your room</li>
                        <li>• Beach service & equipment rental on-site</li>
                        <li>• Higher prices but unbeatable location</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backpacker Hostels & Budget Stays</CardTitle>
                <CardDescription>Social accommodations perfect for meeting fellow travelers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-800">Top Backpacker Hostels</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">Hangtime Hostel</p>
                        <p className="text-muted-foreground">Social hub with pool & bar</p>
                        <p className="text-xs text-green-600">Dorm: 2000-3000 LKR | Private: 4000-6000 LKR</p>
                      </div>
                      <div>
                        <p className="font-medium">Hiri Beach Hostel</p>
                        <p className="text-muted-foreground">Clean dorms, great location</p>
                        <p className="text-xs text-green-600">Dorm: 1800-2500 LKR | Private: 3500-5000 LKR</p>
                      </div>
                      <div>
                        <p className="font-medium">Surf Shack Hostel</p>
                        <p className="text-muted-foreground">Surfer-focused with board storage</p>
                        <p className="text-xs text-green-600">Dorm: 2200-2800 LKR | Surf packages available</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-800">Guesthouses & Family Stays</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">Fisherman&apos;s Rest</p>
                        <p className="text-muted-foreground">Local family-run guesthouse</p>
                        <p className="text-xs text-blue-600">Rooms: 2500-4000 LKR | Meals available</p>
                      </div>
                      <div>
                        <p className="font-medium">Bay View Guesthouse</p>
                        <p className="text-muted-foreground">Clean rooms, friendly hosts</p>
                        <p className="text-xs text-blue-600">Rooms: 3000-5000 LKR | Breakfast included</p>
                      </div>
                      <div>
                        <p className="font-medium">Coconut Grove Stay</p>
                        <p className="text-muted-foreground">Garden setting, quiet atmosphere</p>
                        <p className="text-xs text-blue-600">Rooms: 2800-4500 LKR | Garden views</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-800">What&apos;s Included</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• WiFi (quality varies)</li>
                      <li>• Fan or A/C options</li>
                      <li>• Shared or private bathrooms</li>
                      <li>• Common areas & kitchens</li>
                      <li>• Luggage storage</li>
                      <li>• Surf board storage (most places)</li>
                      <li>• Tour booking assistance</li>
                      <li>• Motorbike rental connections</li>
                    </ul>
                    <div className="bg-yellow-50 p-3 rounded-lg mt-3">
                      <p className="text-xs text-yellow-700">
                        <strong>Budget tip:</strong> Longer stays (5+ nights) often get 20-30% discounts
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Food & Dining */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hiriketiya&apos;s International Food Scene</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Beachfront Restaurants & Cafes</CardTitle>
                <CardDescription>Dining with your toes in the sand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Hiriketiya&apos;s international community has created one of Sri Lanka&apos;s most diverse culinary scenes.
                      From healthy smoothie bowls and avocado toast to authentic Sri Lankan curries and fresh seafood,
                      the bay offers something for every palate. Most restaurants feature beachfront seating where you can watch surfers while enjoying your meal,
                      and many cater specifically to health-conscious travelers with organic, vegan, and gluten-free options.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh smoothie bowls with tropical fruits
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Wood-fired pizzas and international cuisine
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Daily fresh fish and seafood specials
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic Sri Lankan rice & curry
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Beachfront restaurant at Hiriketiya with diners enjoying smoothie bowls and fresh seafood with ocean views"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Must-Try Restaurants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-800">Salt House Restaurant</h4>
                      <p className="text-muted-foreground">Upscale dining with ocean views</p>
                      <p className="text-xs text-blue-600">Fresh seafood & cocktails | 2000-4000 LKR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Coconut Tree Restaurant</h4>
                      <p className="text-muted-foreground">Healthy bowls & fresh juices</p>
                      <p className="text-xs text-green-600">Smoothie bowls & salads | 800-2000 LKR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Fisherman&apos;s Friend</h4>
                      <p className="text-muted-foreground">Authentic local seafood</p>
                      <p className="text-xs text-purple-600">Rice & curry | 500-1200 LKR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800">The Hangout</h4>
                      <p className="text-muted-foreground">Wood-fired pizzas & pasta</p>
                      <p className="text-xs text-orange-600">International cuisine | 1200-2500 LKR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Beach Bars & Nightlife</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-800">Salt House Bar</h4>
                      <p className="text-muted-foreground">Sunset cocktails with style</p>
                      <p className="text-xs text-blue-600">Premium cocktails | 800-1500 LKR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Hangtime Bar</h4>
                      <p className="text-muted-foreground">Backpacker favorite with pool</p>
                      <p className="text-xs text-green-600">Beer & basic cocktails | 300-800 LKR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Beach Shack Bar</h4>
                      <p className="text-muted-foreground">Laid-back vibes, live music</p>
                      <p className="text-xs text-purple-600">Local beer & rum | 250-600 LKR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800">Sunset Spot</h4>
                      <p className="text-muted-foreground">Best sunset views in the bay</p>
                      <p className="text-xs text-orange-600">Happy hour 5-7 PM | 400-1000 LKR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Healthy & Special Diets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-green-800">Vegan Options</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Smoothie bowls with local fruits</li>
                        <li>• Coconut-based curries</li>
                        <li>• Fresh vegetable salads</li>
                        <li>• Vegan desserts available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Gluten-Free</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Rice-based dishes everywhere</li>
                        <li>• Fresh seafood & grilled meats</li>
                        <li>• Fruit salads & fresh juices</li>
                        <li>• Most restaurants accommodate</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-green-700">
                        <strong>Health tip:</strong> Many places offer yoga + breakfast packages combining morning practice with healthy meals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Activities Beyond Surfing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Beyond Surfing: Activities & Adventures</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Yoga & Wellness</CardTitle>
                <CardDescription>Nourish body and soul in paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sunrise yoga session on Hiriketiya Beach with participants in peaceful meditation poses"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Hiriketiya has become a major wellness destination, with daily yoga classes, meditation sessions, and wellness retreats.
                      The beach provides the perfect natural yoga studio, with classes typically held at sunrise and sunset when the light is magical and the temperatures are perfect.
                      Many accommodations offer yoga decks, and several dedicated studios provide various styles from Hatha to Vinyasa flow.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Daily beach yoga at sunrise (6:30 AM) and sunset (5:30 PM)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple studios offering different yoga styles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Meditation and breathwork sessions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Wellness retreats and teacher training courses
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Class prices:</strong> Drop-in: 1000-1500 LKR | Week pass: 6000-8000 LKR</p>
                      <p className="text-xs text-green-600 mt-1">Surf + Yoga packages available at most schools</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Beach & Water Activities</CardTitle>
                  <CardDescription>Make the most of the tropical setting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Water Sports</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Stand-up paddleboarding (SUP) - 1000 LKR/hour</li>
                        <li>• Kayaking tours - 1500-2500 LKR/half day</li>
                        <li>• Snorkeling trips - 2000-3000 LKR with equipment</li>
                        <li>• Beach volleyball courts (free use)</li>
                        <li>• Swimming in protected bay waters</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Beach Fun</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Daily volleyball tournaments (5 PM)</li>
                        <li>• Frisbee and beach games</li>
                        <li>• Sunset photography workshops</li>
                        <li>• Beach picnics and bonfire nights</li>
                        <li>• Tide pool exploration at low tide</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cultural & Nature Excursions</CardTitle>
                  <CardDescription>Explore beyond the beach</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Day Trips</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Mulkirigala Temple - ancient rock temple (1 hour)</li>
                        <li>• Wewurukannala Vihara - giant Buddha statue</li>
                        <li>• Blow holes near Dickwella (20 minutes)</li>
                        <li>• Taprobane Island & Weligama stilt fishermen</li>
                        <li>• Galle Fort UNESCO site (1.5 hours)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Local Experiences</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Traditional fishing boat trips with locals</li>
                        <li>• Village cooking classes with families</li>
                        <li>• Spice garden tours and tastings</li>
                        <li>• Ayurvedic treatments and massages</li>
                        <li>• Batik making workshops</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Essential Travel Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Hiriketiya Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Best Time to Visit Hiriketiya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>November to April:</strong> Perfect surf conditions, dry weather, consistent waves
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>December to March:</strong> Peak season, best waves but most crowded
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>May to October:</strong> Monsoon season, fewer crowds, lower prices, rain possible
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>Best daily times:</strong> Early morning (6-10 AM) for offshore winds
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Surf forecast tip:</strong> Check Magicseaweed or Surfline for accurate wave predictions</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Important Safety & Cultural Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Strong currents on the left side - stay within flagged swimming areas
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Reef break can be sharp - wear reef booties if surfing the point
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Respect local fishing activities - avoid nets and boats
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Strong tropical sun - use high SPF sunscreen and reapply frequently
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Bargain respectfully - prices are generally fair for international standards
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Get There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Get to Hiriketiya</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Car className="w-5 h-5" />
                  By Car/Taxi (Recommended)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Most convenient option via Southern Expressway</p>
                <p className="mt-2"><strong>From Colombo:</strong> 3.5-4 hours (160km)</p>
                <p><strong>From Airport:</strong> 4-5 hours (200km)</p>
                <p><strong>From Galle:</strong> 1 hour (40km)</p>
                <p><strong>Taxi Cost:</strong> $70-90 from Colombo</p>
                <p className="text-xs mt-2 text-blue-600">Best for luggage and surf equipment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Users className="w-5 h-5" />
                  By Bus
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Economical but requires multiple connections</p>
                <p className="mt-2"><strong>Route:</strong> Colombo → Matara → Dickwella → Hiriketiya</p>
                <p><strong>Total time:</strong> 5-7 hours</p>
                <p><strong>Cost:</strong> 300-800 LKR total</p>
                <p><strong>Final leg:</strong> Tuk-tuk from Dickwella (500 LKR)</p>
                <p className="text-xs mt-2 text-green-600">Adventure route for budget travelers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Train className="w-5 h-5" />
                  By Train + Transfer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Scenic coastal route with final taxi</p>
                <p className="mt-2"><strong>Route:</strong> Colombo → Weligama → Taxi to Hiri</p>
                <p><strong>Train time:</strong> 3.5 hours to Weligama</p>
                <p><strong>Taxi from Weligama:</strong> 30 minutes (2000 LKR)</p>
                <p><strong>Train cost:</strong> 200-800 LKR</p>
                <p className="text-xs mt-2 text-purple-600">Most scenic route</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Around Hiriketiya</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TreePalm className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <h4 className="font-semibold mb-2">Walking</h4>
                <p className="text-sm text-muted-foreground">Everything within 10 minutes</p>
                <p className="text-xs text-blue-600">Beach is compact & walkable</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <h4 className="font-semibold mb-2">Motorbike</h4>
                <p className="text-sm text-muted-foreground">1500-2500 LKR/day</p>
                <p className="text-xs text-green-600">Perfect for exploring nearby areas</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Car className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <h4 className="font-semibold mb-2">Tuk-Tuk</h4>
                <p className="text-sm text-muted-foreground">Local trips 300-800 LKR</p>
                <p className="text-xs text-orange-600">Good for day trips & groceries</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Wind className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                <h4 className="font-semibold mb-2">Bicycle</h4>
                <p className="text-sm text-muted-foreground">800-1500 LKR/day</p>
                <p className="text-xs text-purple-600">Eco-friendly local exploration</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Explore More Nearby Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Dickwella Beach Card */}
              <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">Dickwella Beach</CardTitle>
                  <CardDescription>Relaxed beach with calm waters</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/dickwella-beach.jpg"
                    alt="Dickwella Beach"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    Dickwella Beach is perfect for families and those seeking a tranquil beach experience with shallow waters.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/dickwella" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Tangalle Beach Card */}
              <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">Tangalle Beach</CardTitle>
                  <CardDescription>Scenic beach with golden sands</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/tangalle-beach.jpg"
                    alt="Tangalle Beach"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    Tangalle Beach offers stunning views, golden sands, and a peaceful atmosphere for relaxation.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/tangalle" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Kudawella Blowhole Card */}
              <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">Kudawella Blowhole</CardTitle>
                  <CardDescription>Natural wonder by the sea</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/HummanayaBlowhole.jpeg"
                    alt="Kudawella Blowhole"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    The Kudawella Blowhole is a unique natural attraction where seawater shoots up dramatically through a rock formation.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/hummanaya-blowhole" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

      </div>
    </main>
  )
}
