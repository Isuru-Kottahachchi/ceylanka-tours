"use client"

import Image from "next/image"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Eye, TreePine } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"



export default function HaputaleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Haputhale.jpeg"
          alt="Spectacular panoramic view from Lipton's Seat in Haputale showing endless tea plantations and mountain ranges"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Haputale</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Home of World-Famous Lipton&apos;s Seat</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Eye className="w-4 h-4 mr-1" />
              World&apos;s Best Tea Views
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,431m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Tea Heritage Capital
            </Badge>
          </div>
        </div>
      </section>

      {/* Ad Banner - Top */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Mountain View Hotels & Tea Tours]
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Haputale: Where Tea Meets the Sky</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Perched dramatically on the edge of Sri Lanka&apos;s central highlands at 1,431 meters above sea level, Haputale is home to one of the world&apos;s most spectacular viewpoints - Lipton&apos;s Seat. This small mountain town offers breathtaking panoramic views that stretch across seven provinces on a clear day.
            </p>
            <p className="text-lg">
              Named after Sir Thomas Lipton, the tea magnate who used this vantage point to survey his vast tea empire, Haputale combines stunning natural beauty with rich tea heritage. From the historic Dambatenne Tea Factory to the charming Adisham Monastery, this destination offers unforgettable experiences at the edge of the world.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Haputale Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span><strong>Famous For:</strong> Lipton&apos;s Seat Viewpoint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span><strong>Elevation:</strong> 1,431m (4,695 feet)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span><strong>Population:</strong> ~5,000 residents</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>Province:</strong> Uva Province</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span><strong>Best Views:</strong> Early Morning (6-8 AM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-600" />
                    <span><strong>Climate:</strong> Cool Mountain Weather</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Get There */}
        <section className="mb-12">
          <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <MapPin className="w-5 h-5" />
                How to Get to Haputale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 190km (118 miles) from Colombo</li>
                    <li>• <strong>Duration:</strong> 4.5-5 hours</li>
                    <li>• <strong>Cost:</strong> $70-95 USD for day trip</li>
                    <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                  </ul>
                  <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Haputale. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel to the mountains.
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
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Route:</strong> Colombo → Kandy → Badulla → Haputale</li>
                    <li>• <strong>Duration:</strong> 8-9 hours total</li>
                    <li>• <strong>Cost:</strong> $4-15 USD (depending on class)</li>
                    <li>• <strong>Highlight:</strong> One of world&apos;s most scenic train rides</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Route:</strong> Colombo → Bandarawela → Haputale</li>
                    <li>• <strong>Duration:</strong> 6-7 hours</li>
                    <li>• <strong>Cost:</strong> $5-8 USD (budget-friendly)</li>
                    <li>• <strong>Frequency:</strong> Regular departures from Bandarawela</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">🚂 Special Note about Train Journey</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The train journey to Haputale is considered one of the world&apos;s most beautiful train rides, passing through breathtaking tea plantations, mountain valleys, and misty peaks. The section from Kandy to Haputale offers spectacular views, especially as you approach Lipton&apos;s Seat area.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Book reserved seats in advance for window views</li>
                  <li>• Early morning departure offers best mountain visibility</li>
                  <li>• Bring warm clothes - it gets cool in the mountains</li>
                  <li>• Camera ready for stunning tea plantation views</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Haputale</h2>
          
          {/* Ad Banner - Mid Content */}
          <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
            [Advertisement Space - 300x250 Medium Rectangle - Scenic Tours & Photography Packages]
          </div>

          {/* Top Attractions with Carousels */}
          <div className="space-y-8">
            {/* Lipton's Seat */}
            <Card>
              <CardHeader>
                <CardTitle>1. Lipton&apos;s Seat</CardTitle>
                <CardDescription>World&apos;s most famous tea plantation viewpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Lipton-seat.jpg",
                        alt: "Panoramic view from Lipton's Seat with tea plantations and sunrise",
                        caption: "Sunrise at Lipton's Seat",
                        title: "Lipton's Seat - Sunrise View"
                      },
                      {
                        src: "/Lipton-seat1.jpg",
                        alt: "Wide view of Haputale mountains and tea fields",
                        caption: "Haputale's rolling tea hills",
                        title: "Viewpoint Tea Country"
                      },
                      {
                        src: "/placeholder.svg?height=300&width=400",
                        alt: "Lipton's Seat viewpoint showing panoramic views across seven provinces with endless tea plantations",
                        caption: "Viewpoint across 7 provinces",
                        title: "Panoramic Viewpoint"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      At 1,970 meters above sea level, Lipton&apos;s Seat offers one of the world&apos;s most spectacular viewpoints. On clear days, you can see across seven provinces, with endless tea plantations rolling like green carpets to the horizon. Sir Thomas Lipton used this spot to survey his tea empire.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        360-degree panoramic views across 7 provinces
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic connection to Sir Thomas Lipton
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best visited at sunrise (6-8 AM)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        30-minute scenic drive from Haputale town
                      </li>
                    </ul>

                    {/* See More Button */}
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <a href="/destinations/liptons-seat">See More</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dambatenne Tea Factory */}
            <Card>
              <CardHeader>
                <CardTitle>2. Dambatenne Tea Factory</CardTitle>
                <CardDescription>Sir Thomas Lipton&apos;s original tea factory from 1890</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Dambatenne-tea-factory.jpg",
                        alt: "Historic Dambatenne Tea Factory with traditional machinery and workers processing Ceylon tea",
                        caption: "Dambatenne Tea Factory exterior",
                        title: "Dambatenne Tea Factory"
                      },
                      {
                        src: "/Tea-factory-interior.jpg",
                        alt: "Inside the tea factory with machinery and tea leaves",
                        caption: "Inside the factory",
                        title: "Tea Processing Room"
                      },
                      {
                        src: "/placeholder.svg?height=300&width=400",
                        alt: "Workers processing tea at Dambatenne",
                        caption: "Traditional tea processing",
                        title: "Tea Workers in Action"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1890 by Sir Thomas Lipton himself, Dambatenne Tea Factory is one of the oldest and most historic tea factories in Sri Lanka. Still operational today, it produces some of the world&apos;s finest high-grown Ceylon tea using traditional methods.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic factory from 1890, still operational
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided tours showing tea processing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Premium tea tastings and purchases
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about traditional tea-making methods
                      </li>
                    </ul>

                    {/* See More Button */}
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <a href="/destinations/dambatenne-tea-factory">See More</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adisham Monastery */}
            <Card>
              <CardHeader>
                <CardTitle>3. Adisham Monastery</CardTitle>
                <CardDescription>English country house turned Benedictine monastery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Adisham-Monastery.jpeg",
                        alt: "Adisham Monastery showing English Tudor architecture surrounded by mountain gardens",
                        caption: "Adisham Monastery exterior",
                        title: "Adisham Monastery"
                      },
                      {
                        src: "/Adisham-bungalow3.jpg",
                        alt: "Beautiful gardens at Adisham Monastery with mountain backdrop",
                        caption: "Monastery gardens and views",
                        title: "Monastery Gardens"
                      },
                      {
                        src: "/Adisham-bungalow2.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                         {
                        src: "/Adisham-bungalow.jpg",
                        alt: "Beautiful gardens at Adisham Monastery with mountain backdrop",
                        caption: "Monastery gardens and views",
                        title: "Monastery Gardens"
                      },
                         {
                        src: "/Adisham-bungalow10.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                         {
                        src: "/Adisham-bungalow4.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                         {
                        src: "/Adisham-bungalow5.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                         {
                        src: "/Adisham-bungalow6.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                         {
                        src: "/Adisham-bungalow7.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                         {
                        src: "/Adisham-bungalow8.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                         {
                        src: "/Adisham-bungalow9.jpg",
                        alt: "Adisham Monastery with English Tudor architecture",
                        caption: "Tudor-style architecture",
                        title: "Tudor-Style Architecture"
                      },
                      
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1931 as a country retreat by Sir Thomas Villiers, this stunning Tudor-style mansion was later converted into a Benedictine monastery. The building and its beautiful gardens offer a unique blend of English architecture and Sri Lankan mountain scenery.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Tudor-style English architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful monastery gardens and grounds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Open weekends and public holidays
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning mountain and valley views
                      </li>
                    </ul>

                    {/* See More Button */}
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <a href="/destinations/adisham-monastery">See More</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Tea Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Lipton Tea Legacy</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Historical photo recreation of Sir Thomas Lipton surveying his tea empire from Lipton's Seat"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Sir Thomas Lipton&apos;s vision transformed these mountains into tea paradise
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In the late 1800s, Scottish entrepreneur Sir Thomas Lipton purchased vast tracts of land around Haputale to establish his tea empire. Born in Glasgow, Scotland, Lipton would often climb to the highest point – now known as Lipton&apos;s Seat – to survey his plantations and plan expansion.
              </p>
              <p>
                Lipton revolutionized the tea industry by controlling every aspect from plantation to packaging, creating the world&apos;s first vertically integrated tea business. His Dambatenne Tea Factory became the heart of this operation, producing premium Ceylon tea that made the Lipton brand famous worldwide.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Lipton&apos;s Legacy:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Established Ceylon tea as world&apos;s finest</li>
                  <li>• Created first global tea brand</li>
                  <li>• Pioneered direct plantation-to-consumer sales</li>
                  <li>• Left lasting impact on Sri Lankan economy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Visit Haputale</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Early Morning</CardTitle>
                <CardDescription>6:00 AM - 8:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best visibility from Lipton&apos;s Seat</li>
                  <li>• Clear mountain views</li>
                  <li>• Perfect sunrise photography</li>
                  <li>• Cool, comfortable temperatures</li>
                  <li>• Fewer crowds at viewpoints</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>December to April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clearest weather conditions</li>
                  <li>• Best for outdoor activities</li>
                  <li>• Ideal for tea factory visits</li>
                  <li>• Perfect hiking weather</li>
                  <li>• Peak tourist season</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lush green tea plantations</li>
                  <li>• Dramatic cloud formations</li>
                  <li>• Fewer tourists, lower prices</li>
                  <li>• Views may be limited by clouds</li>
                  <li>• Some roads may be challenging</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner - Mid Content 2 */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Sunrise Tours & Photography Workshops]
        </div>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Haputale</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Train</CardTitle>
                <CardDescription>Scenic hill country railway</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">8-9 hours via Kandy on the scenic hill country line</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">6-7 hours through tea country and mountains</p>
                </div>
                <div>
                  <strong>From Ella:</strong>
                  <p className="text-sm text-muted-foreground">1 hour on the main hill country railway</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Book reserved seats in advance, especially during peak season
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>By Road</CardTitle>
                <CardDescription>Winding mountain roads with scenic views</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">6-7 hours via Kandy or Ratnapura</p>
                </div>
                <div>
                  <strong>From Bandarawela:</strong>
                  <p className="text-sm text-muted-foreground">1 hour through scenic tea estates</p>
                </div>
                <div>
                  <strong>From Nuwara Eliya:</strong>
                  <p className="text-sm text-muted-foreground">2.5-3 hours via Welimada</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Note:</strong> Mountain roads can be winding - take motion sickness precautions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Haputale</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Guesthouses</CardTitle>
                <CardDescription>$15-30 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family-run guesthouses</li>
                  <li>• Basic but clean accommodations</li>
                  <li>• Local hospitality and home cooking</li>
                  <li>• Walking distance to town center</li>
                  <li>• Help with tour arrangements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$30-70 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Comfortable rooms with mountain views</li>
                  <li>• Restaurant and room service</li>
                  <li>• Tour booking assistance</li>
                  <li>• WiFi and modern amenities</li>
                  <li>• Some with tea plantation settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Tea Estate Bungalows</CardTitle>
                <CardDescription>$70-150 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Historic plantation manager bungalows</li>
                  <li>• Surrounded by tea gardens</li>
                  <li>• Colonial-era charm and character</li>
                  <li>• Spectacular mountain views</li>
                  <li>• Authentic tea estate experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Must-Do Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Sunrise at Lipton&apos;s Seat:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Wake up early for the most spectacular sunrise views in Sri Lanka. Clear mornings offer views across seven provinces.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tea Factory Tour:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Visit historic Dambatenne Tea Factory to learn about traditional tea processing and taste premium Ceylon tea.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Photography Walks:</h4>
                    <p className="text-sm text-muted-foreground">
                      Capture stunning landscapes, tea pickers at work, and dramatic mountain scenery throughout the day.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adventure Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Hikers on mountain trails around Haputale with tea plantations and mountain views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mountain hiking and trekking</li>
                  <li>• Tea plantation walks</li>
                  <li>• Bird watching in cloud forests</li>
                  <li>• Nature photography expeditions</li>
                  <li>• Village visits and cultural experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Tips & Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Insider Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Start your Lipton&apos;s Seat journey at 5:30 AM for best sunrise views</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Bring warm clothes - temperatures can drop significantly at altitude</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Book tea factory tours in advance during peak season</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Try local tea estate accommodations for authentic experiences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect tea workers and ask permission before photographing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Weather can change quickly - clouds may obscure views suddenly</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Roads to Lipton&apos;s Seat can be challenging in wet weather</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Adisham Monastery is only open on weekends and holidays</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Limited ATMs - carry sufficient cash for small purchases</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Book accommodations in advance during December-April peak season</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Explore More Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lipton's Seat Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Badulla</CardTitle>
                <CardDescription>Panoramic views of tea plantations</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/liptons-seat.jpg"
                  alt="Lipton's Seat"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Lipton's Seat offers breathtaking views of the surrounding tea estates and is a must-visit for nature lovers.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/badulla" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Adisham Bungalow Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Bandarawela</CardTitle>
                <CardDescription>Historic colonial mansion</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/adisham-bungalow.jpg"
                  alt="Adisham Bungalow"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Adisham Bungalow is a charming colonial-era mansion surrounded by lush gardens and serene landscapes.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bandarawela" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Diyaluma Falls Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Ella</CardTitle>
                <CardDescription>Spectacular cascading waterfall</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/diyaluma-falls.jpg"
                  alt="Diyaluma Falls"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Diyaluma Falls is one of Sri Lanka's tallest waterfalls, offering stunning views and natural pools for a refreshing dip.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ella" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Recommendations */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Haputale Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Haputale offers one of Sri Lanka&apos;s most rewarding travel experiences - the chance to stand where Sir Thomas Lipton once stood and survey one of the world&apos;s most beautiful tea landscapes. The views from Lipton&apos;s Seat are truly unforgettable, especially when experienced at sunrise.
              </p>
              <p className="text-muted-foreground mb-4">
                Beyond the famous viewpoint, Haputale provides authentic tea heritage experiences, from historic factory tours to monastery visits, all set against the backdrop of some of the most spectacular mountain scenery in Asia.
              </p>
              <p className="text-muted-foreground font-medium">
                Come discover why Haputale is considered the crown jewel of Sri Lanka&apos;s tea country! 🍃🏔️
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner - Bottom */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Tea Heritage Tours & Mountain Adventures]
        </div>
      </div>
    </main>
  )
}
