"use client"

import Image from "next/image"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Eye, TreePine } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export default function HaputaleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Haputhale.jpeg"
          alt="Spectacular panoramic view from Lipton's Seat in Haputale showing endless tea plantations and mountain ranges"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Haputale</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Home of World-Famous Lipton&apos;s Seat</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <Eye className="w-4 h-4 mr-1" />
              World&apos;s Best Tea Views
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Mountain className="w-4 h-4 mr-1" />
              1,431m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Tea Heritage Capital
            </Badge>
          </div>
        </div>
      </section>
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

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Quick Facts */}
          <section className="flex-1">
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
          <section className="flex-1">
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
                      <li>• <strong>Distance:</strong> ~216 km from Colombo</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div data-promo="true" className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Haputale. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel to the mountains.
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Kandy → Badulla → Haputale</li>
                      <li>• <strong>Duration:</strong> 8-9 hours total</li>
                      <li>• <strong>Cost:</strong> (depending on class)</li>
                      <li>• <strong>Highlight:</strong> One of world&apos;s most scenic train rides</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Bandarawela → Haputale</li>
                      <li>• <strong>Duration:</strong> 6-7 hours</li>
                      <li>• <strong>Cost:</strong> (budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Regular departures from Bandarawela</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-slate-400 dark:border-slate-500">
                  <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-100">🚂 Special Note about Train Journey</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    The train journey to Haputale is considered one of the world&apos;s most beautiful train rides, passing through breathtaking tea plantations, mountain valleys, and misty peaks. The section from Kandy to Haputale offers spectacular views, especially as you approach Lipton&apos;s Seat area.
                  </p>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• Book reserved seats in advance for window views</li>
                    <li>• Early morning departure offers best mountain visibility</li>
                    <li>• Bring warm clothes - it gets cool in the mountains</li>
                    <li>• Camera ready for stunning tea plantation views</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Haputale</h2>

          {/* Top Attractions with Carousels */}
          <div className="space-y-8">
            {/* Lipton's Seat */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
                    <span className="text-white font-extrabold text-xl md:text-2xl">01</span>
                  </span>
                  <h3 className="text-3xl font-extrabold tracking-tight">Lipton&apos;s Seat</h3>
                </div>
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

                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/liptons-seat" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Tea Heritage */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Lipton Tea Legacy</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <Image
                    src="/Lipton-tea.jpg"
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
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-slate-400 dark:border-slate-500">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Lipton&apos;s Legacy:</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Established Ceylon tea as world&apos;s finest</li>
                      <li>• Created first global tea brand</li>
                      <li>• Pioneered direct plantation-to-consumer sales</li>
                      <li>• Left lasting impact on Sri Lankan economy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Adisham Monastery */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
                    <span className="text-white font-extrabold text-xl md:text-2xl">02</span>
                  </span>
                  <h3 className="text-3xl font-extrabold tracking-tight">Adisham Monastery/ Bungalow</h3>
                </div>
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

                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
                    <span className="text-white font-extrabold text-xl md:text-2xl">03</span>
                  </span>
                  <h3 className="text-3xl font-extrabold tracking-tight">Nidangoda Falls</h3>
                </div>
                <CardDescription>Hidden gem waterfall on a private tea estate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Nidangoda-Ella.jpg",
                        alt: "Nidangoda Falls cascading through lush tea estate greenery",
                        caption: "Nidangoda Falls",
                        title: "Nidangoda Falls"
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Nidangoda Falls is a hidden waterfall tucked inside the Galapitagala tea estate near Haputale. Because it sits on private land, visitors must obtain permission from the estate management before visiting, making it a truly off-the-beaten-path experience for those who seek it out. The falls are framed by lush tea bushes and jungle, offering a peaceful escape away from tourist crowds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Located on private Galapitagala tea estate, permission required
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Secluded, uncrowded natural setting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Surrounded by working tea plantation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best visited after arranging access via estate office
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-400">
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <strong>Note:</strong> This is a private estate waterfall. Always get permission from the Galapitagala estate management before attempting to visit.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* <Separator className="my-12" /> */}


        <section className="mb-12">
          {/* Dambatenne Tea Factory */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
                  <span className="text-white font-extrabold text-xl md:text-2xl">04</span>
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight">Dambatenne Tea Factory</h3>
              </div>
              <CardDescription>Sir Thomas Lipton&apos;s original tea factory from 1890</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <ImageCarousel
                  images={[
                    {
                      src: "/Dambatenna-Tea-factory.webp",
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
                    If you are a tea enthusiast, this would be a must-visit to see how authentic Ceylon tea is made. You can see the entire tea processing from plucking to packaging.
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
                </div>
              </div>
            </CardContent>
          </Card>
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
          <h2 className="text-3xl font-bold mb-6">Explore More Nearby Attractions</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Haputhale adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Ella.jpg"
                  alt="Ella city with scenic views and cultural landmarks"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  15 km from Haputale
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Ella</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Visit the famous Nine Arch Bridge, Little Adam's Peak, and enjoy the cool mountain climate.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  15 km from Haputale
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ella" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Badulla.jpeg"
                  alt="Badulla city with scenic views and cultural landmarks"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  22 km from Haputale
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Badulla</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Badulla is the capital of Uva Province, known for the sacred Muthiyangana Raja Maha Vihara, the scenic Dunhinda Falls, and its charming colonial-era railway station  the terminus of the famous hill country train line
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  22 km from Haputale
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/badulla" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Bandarawela.jpeg"
                  alt="Bandarawela town with scenic views and cultural landmarks"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  32 km from Haputale
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Bandarawela</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bandarawela is a pleasant hill town just 15 km from Haputale, known for its mild climate, vibrant local market, fresh produce, and easy access to tea estates and hiking trails.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  32 km from Haputale
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bandarawela" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </main>
  )
}
