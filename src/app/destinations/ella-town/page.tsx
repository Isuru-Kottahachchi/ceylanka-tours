"use client"

import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Mountain, Train, Coffee, Thermometer, Info, Landmark, Utensils, Lightbulb, Bed } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InsuranceBanner from '@/components/insurance-banner'
import { ImageCarousel } from "@/components/ui/image-carousel"



export default function EllaTownGuide() {

  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/Ella.jpg"
            alt="Panoramic view of Ella town nestled in misty mountains with tea plantations and the famous Ella Gap"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ella Town</h1>
            <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Most Scenic Hill Station Paradise</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                <MapPin className="w-4 h-4 mr-1" />
                Uva Province, Hill Country
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
                <Mountain className="w-4 h-4 mr-1" />
                1,041m Above Sea Level
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                <Thermometer className="w-4 h-4 mr-1" />
                18-25°C Year Round
              </Badge>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-muted mb-8 shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 justify-center text-sm font-medium">
            <a href="#introduction" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
              <Info className="w-4 h-4" /> Introduction
            </a>
            <a href="#quick-facts" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
              <Landmark className="w-4 h-4" /> Quick Facts
            </a>
            <a href="#attractions" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
              <Star className="w-4 h-4" /> Top Attractions
            </a>
            <a href="#food" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
              <Utensils className="w-4 h-4" /> Food & Cafés
            </a>
            <a href="#tips" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
              <Lightbulb className="w-4 h-4" /> Travel Tips
            </a>
            <a href="#accommodation" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
              <Bed className="w-4 h-4" /> Accommodation
            </a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Introduction */}
          <section className="mb-12 scroll-mt-48 bg-background" id="introduction">
            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Info className="w-7 h-7 text-primary" />
              Welcome to Ella: Where Mountains Meet Magic
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg mb-4">
                Perched high in Sri Lanka&apos;s central highlands, Ella is a small town that has captured the hearts of travelers worldwide. With its cool climate, stunning mountain vistas, emerald tea plantations, and laid-back atmosphere, Ella offers the perfect escape from the tropical heat and bustling cities below.
              </p>
              <p className="text-lg">
                Whether you&apos;re seeking adventure on hiking trails, Instagram-worthy views from mountain peaks, or simply want to relax in cozy cafes overlooking tea gardens, Ella provides an unforgettable hill country experience that combines natural beauty with warm Sri Lankan hospitality.
              </p>

              {/* Did you know? Quick Fact Box */}
              <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-600 rounded-r-lg shadow-sm w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                  <span className="font-semibold text-blue-800 dark:text-blue-200">Did you know?</span>
                </div>
                <p className="text-blue-900 dark:text-blue-100 text-sm">
                  Ella is home to the famous Nine Arch Bridge, built entirely out of brick, stone, and cement without a single piece of steel! This engineering marvel is one of the most photographed spots in Sri Lanka and a must-see for train lovers and Instagrammers alike.
                </p>
              </div>
            </div>
          </section>
          {/* Quick Facts & How to Get There side by side */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
            {/* Quick Ella Town Facts */}
            <section className="flex-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Ella Town Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-green-500" />
                      <span><strong>Elevation:</strong> 1,041 meters (3,415 feet)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-blue-500" />
                      <span><strong>Climate:</strong> Cool, 18-25°C year-round</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-purple-500" />
                      <span><strong>Famous for:</strong> Nine Arch Bridge &amp; scenic railway</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span><strong>Province:</strong> Uva Province</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-orange-500" />
                      <span><strong>Specialty:</strong> Tea plantations &amp; mountain views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-indigo-500" />
                      <span><strong>Best time:</strong> December to March</span>
                    </div>
                  </div>
                  {/* Valuable Fact for Desktop */}
                  <div className="hidden lg:block mt-6 space-y-4">
                    <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                      <Image
                        src="/Gregory_Lake.jpg"
                        alt="Ancient reservoir in Ella town, Sri Lanka"
                        width={120}
                        height={80}
                        className="rounded shadow-md object-cover"
                      />
                      <div>
                        <p className="text-base text-blue-900 font-semibold mb-1">Cold climate with scenic views</p>
                        <p className="text-sm text-blue-800">
                          Ella
                        </p>
                      </div>
                    </div>
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
            {/* How to Get to Ella Town */}
            <section className="flex-1">
              <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <MapPin className="w-5 h-5" />
                    How to Get to Ella Town
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> 205km (127 miles) from Colombo</li>
                        <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                        <li>• <strong>Cost:</strong> $60-90 USD for day trip</li>
                        <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                      </ul>
                      <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                        <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                          <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Ella Town. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                        </p>
                        <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                          <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span><strong>Contact:</strong> +94 77 123 4567</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>✈️</span>
                            <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                              <strong>Airport Transfer Services</strong>  Click for details & booking
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Kurunegala → Anuradhapura</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li>
                    </ul> */}

                      <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Train(Recommended)</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Route:</strong> Colombo Fort → Ella station</li>
                        <li>• <strong>Duration:</strong> 5.5-6 hours</li>
                        <li>• <strong>Cost:</strong> $2-8 USD (depending on class)</li>
                        <li>• <strong>Scenic journey:</strong> Through countryside</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">
                        <strong>Note:</strong> Train tickets can sell out quickly, especially for the scenic routes. It&apos;s advisable to book your tickets in advance through the official Sri Lanka Railways website or at the station. There can be ticket scammers at the station, so be cautious and only purchase from official counters.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Start early morning to avoid traffic and heat</li>
                      <li>• Ready for changing weather conditions</li>
                      <li>• Book accommodations in advance during peak season</li>
                      <li>• Consider staying overnight to explore all sites properly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          <section className="mb-12 scroll-mt-40" id="train-journey">
            <h2 className="text-3xl font-bold mb-6">World&apos;s one of the Best Train Journeys</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <ImageCarousel
                  images={[
                    {
                      src: "/Ella-Train-Ride.jpg",
                      alt: "Ella Train Ride",
                      caption: "Experience the scenic beauty of Sri Lanka",
                      title: "Ella Train Ride",
                    },
                    {
                      src: "/Ella-Train-Ride1.jpg",
                      alt: "Ella Train Ride",
                      caption: "Experience the scenic beauty of Sri Lanka",
                      title: "Ella Train Ride",
                    },
                    {
                      src: "/Ella-Train-Ride2.webp",
                      alt: "Ella Train Ride",
                      caption: "Experience the scenic beauty of Sri Lanka",
                      title: "Ella Train Ride",
                    },
                    {
                      src: "/Ella-Train-Ride3.webp",
                      alt: "Ella Train Ride",
                      caption: "Experience the scenic beauty of Sri Lanka",
                      title: "Ella Train Ride",
                    },
                    {
                      src: "/Ella-Train-Ride4.jpg",
                      alt: "Ella Train Ride",
                      caption: "Ella Train Ride",
                      title: "Ella Train Ride",
                    },
                    {
                      src: "/Ella-Train-Ride5.webp",
                      alt: "Ella Train Ride",
                      caption: "Ella Train Ride",
                      title: "Ella Train Ride",
                    },
                    {
                      src: "/Ella-Train-Ride6.jpg",
                      alt: "Ella Train Ride",
                      caption: "Ella Train Ride",
                      title: "Ella Train Ride",
                    },
                    {
                      src: "/Ella-Train-Ride7.webp",
                      alt: "Ella Train Ride",
                      caption: "Ella Train Ride",
                      title: "Ella Train Ride",
                    },
                  ]}
                />

              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You will never forget this train experience as it winds through lush tea plantations, misty mountains, and picturesque villages. The route from Colombo Fort to Ella is renowned for its breathtaking scenery, with highlights including the iconic Nine Arch Bridge, panoramic views from Ella Gap, and the chance to see local wildlife along the way.
                </p>
                <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s best train journey</p>
                Join this beautiful train ride with CeyLanka tours and experience the scenic beauty of Sri Lanka like never before. Sit back, relax, and enjoy the stunning views as you travel through some of the most picturesque landscapes in the country.
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">What You Might See:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Tea plantations</li>
                    <li>• Tunnels which are over 100 years old</li>
                    <li>• Waterfalls cascading down hillsides, Devon falls and St. Clair&apos;s Falls</li>
                    <li>• Scenic viewpoints along the route</li>
                    <li>• Misty mountains</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Travel Tips:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Book your tickets in advance, especially during peak season, purchase your tickets online or at fort counters to avoid overpriced scammers</li>
                    <li>• Bring a hat and sunscreen for sun protection</li>
                    <li>• Stay hydrated and carry water with you</li>
                    <li>• Be aware of your belongings and keep them secure</li>
                    <li>• Taking pictures during the ride is encouraged, but keep your head, legs, and hands inside the train, otherwise you might lose them</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <p> If you wanna experience this train ride with CeyLanka tours? Call us now our experienced travel guides will come along with you in the train</p>
                </div>
              </div>
            </div>
          </section>

          <InsuranceBanner />


          {/* Top Attractions */}
          <section className="mb-12 scroll-mt-48 bg-background" id="attractions">
            <div className="h-1 w-full bg-gradient-to-r from-yellow-400/20 to-transparent rounded-full mb-8" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-7 h-7 text-yellow-500" />
              Top Attractions in Ella
            </h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Nine Arch Bridge</CardTitle>
                  <CardDescription>An architectural marvel and photographer&apos;s paradise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <ImageCarousel
                      images={[
                        {
                          src: "/Ninearchbridge.jpg",
                          alt: "Iconic Nine Arch Bridge with train crossing through lush jungle and tea plantations",
                          caption: "Nine Arch Bridge",
                          title: "Nine Arch Bridge"
                        },
                          {
                          src: "/Nine-Arch-Bridge12.jpg",
                          alt: "Iconic Nine Arch Bridge with train crossing through lush jungle and tea plantations",
                          caption: "Nine Arch Bridge",
                          title: "Nine Arch Bridge"
                        },

                      ]}
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        This magnificent colonial-era viaduct, completed in 1921, spans 91 meters through lush jungle and tea plantations. Built entirely of brick, stone, and cement without a single steel girder, it&apos;s a testament to colonial engineering. The bridge&apos;s nine graceful arches create perfect photo opportunities, especially when trains pass by.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          15-20 minute scenic walk from Ella town
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Multiple photography viewpoints
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          91 meters long, 24 meters high
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Trains pass 3-4 times daily
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Best Photo Times:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Early morning for misty shots</li>
                          <li>• 9:30 AM train from Ella</li>
                          <li>• 3:30 PM train for golden hour</li>
                          <li>• After rain for dramatic clouds</li>
                        </ul>
                      </div>
                      <div className="mt-4 flex justify-start">
                        <Link href="/destinations/ella-nine-arch" passHref legacyBehavior>
                          <Button
                            variant="secondary"
                            className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                          >
                            Read more
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Little Adam&apos;s Peak</CardTitle>
                  <CardDescription>Easy hike with spectacular 360-degree views</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">

                      <ImageCarousel
                      images={[
                        {
                          src: "/Littleadamspeak.jpg",
                          alt: "Iconic Nine Arch Bridge with train crossing through lush jungle and tea plantations",
                          caption: "Nine Arch Bridge",
                          title: "Nine Arch Bridge"
                        },
                          {
                          src: "/Nine-Arch-Bridge12.jpg",
                          alt: "Iconic Nine Arch Bridge with train crossing through lush jungle and tea plantations",
                          caption: "Nine Arch Bridge",
                          title: "Nine Arch Bridge"
                        },

                      ]}
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Named after the sacred Adam&apos;s Peak, this smaller peak (1,141m) offers equally stunning views without the challenging climb. The trail winds through lush tea plantations and pine forests, rewarding hikers with breathtaking panoramas of Ella Gap, Ravana Falls, and the surrounding mountains. The moderate 45-minute ascent makes it perfect for both sunrise and sunset hikes.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          45-60 minute moderate hike (2.2km round trip)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Best times: Sunrise (5:30-6:30 AM) or Sunset (5:30-6:30 PM)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          360-degree views of Ella Gap and Ravana Falls
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Multiple viewpoints and photography spots
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Hiking Tips:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Start early to avoid midday heat</li>
                          <li>• Bring water and snacks</li>
                          <li>• Wear proper hiking shoes</li>
                          <li>• Allow extra time for photos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Ella Rock</CardTitle>
                  <CardDescription>A challenging hike with the most rewarding views in Ella</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Standing at 1,319m, Ella Rock is the ultimate hiking challenge in the region. The trail begins along historic railway tracks before ascending through dense forests and tea plantations. The summit rewards brave hikers with unparalleled 360-degree views stretching from Ella Gap to the distant southern plains and the central highlands.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          3-4 hour challenging hike (5.5km round trip)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Ella&apos;s highest viewpoint (1,319m)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Diverse terrain and ecosystems
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          Advanced hiking experience recommended
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                        <h4 className="font-semibold text-amber-800 mb-2">Important Tips:</h4>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Start before 7 AM to avoid heat</li>
                          <li>• Consider hiring a local guide</li>
                          <li>• Bring plenty of water (2L+)</li>
                          <li>• Check weather forecast before starting</li>
                        </ul>
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Adventurous hikers on Ella Rock summit with dramatic mountain landscape and tea estates below"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>


              <Card>
                <CardHeader>
                  <CardTitle>Ravana Cave</CardTitle>
                  <CardDescription>Ancient cave with legendary significance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Located near Ravana Falls, this historic cave is believed to be where King Ravana hid Princess Sita after abducting her from India, according to the Ramayana epic. The cave offers a glimpse into ancient Sri Lankan history and architecture.
                      </p>
                      <div className="mt-4 flex justify-start">
                        <Link href="/destinations/jaya-sri-maha-bodhi" passHref legacyBehavior>
                          <Button
                            variant="secondary"
                            className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                          >
                            Read more
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </Button>
                        </Link>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Short walk from Ravana Falls
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Historical significance
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          Bring a flashlight for better visibility
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Visitor Information:</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Best visited early morning</li>
                          <li>• Bring torch for cave exploration</li>
                          <li>• Most impressive during rainy season</li>
                          <li>• Local guides available for cave tours</li>
                        </ul>
                      </div>
                    </div>
                    <Image
                      src="/Ravana-Cave.jpeg"
                      alt="Historic Ravana Cave entrance with ancient stone work and steps"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nil Diya Pokuna (Blue Water Pool)</CardTitle>
                  <CardDescription>Currently closed to visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <Image
                      src="/Nil-Diya-Pokuna.webp"
                      alt="Scenic view of Nil Diya Pokuna natural pool surrounded by forest"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        A natural pool with crystal clear blue water surrounded by lush forest. While historically a popular swimming spot, Nil Diya Pokuna is currently not open for visitors due to safety and conservation measures.
                      </p>
                      <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                        <p className="text-sm text-red-700 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          <strong>Important Notice:</strong> This location is currently closed to visitors. Please respect local regulations and do not attempt to access the site.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Add more attractions */}
              <Card>
                <CardHeader>
                  <CardTitle>5. Uva Halpewatte Tea Factory</CardTitle>
                  <CardDescription>Journey through Ceylon tea production</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        One of Sri Lanka&apos;s largest tea factories, Uva Halpewatte offers comprehensive guided tours showing the complete tea-making process. From withering and rolling to fermentation and grading, visitors can witness the journey of tea leaves to your cup while enjoying panoramic views of the surrounding tea estates.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Professional guided tours (45-60 mins)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Tea tasting sessions included
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Factory shop with premium teas
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Visit Information:</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Open Mon-Sat: 8:00 AM - 4:00 PM</li>
                          <li>• Best to visit during processing hours</li>
                          <li>• Photography allowed in designated areas</li>
                          <li>• Tour booking recommended</li>
                        </ul>
                      </div>
                    </div>
                    <Image
                      src="/tea-factory.jpg"
                      alt="Tea processing machinery at Uva Halpewatte Tea Factory"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Ella Spice Garden</CardTitle>
                  <CardDescription>Aromatic journey through Sri Lankan spices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <Image
                      src="/spice-garden.jpg"
                      alt="Various Sri Lankan spices and herbs in traditional setting"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Discover the secrets of Sri Lankan cuisine at this family-run spice garden. Learn about traditional Ayurvedic medicine, cooking techniques, and the various spices that make Sri Lankan cuisine unique. The garden offers guided tours and cooking demonstrations in a serene setting.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Educational garden tours
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Cooking demonstrations available
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Natural medicine information
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                        <h4 className="font-semibold text-emerald-800 mb-2">Experience Highlights:</h4>
                        <ul className="text-sm text-emerald-700 space-y-1">
                          <li>• Learn about 15+ local spices</li>
                          <li>• Sample spice tea and treats</li>
                          <li>• Buy authentic spice products</li>
                          <li>• Optional cooking classes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Ella Wala Waterfall</CardTitle>
                  <CardDescription>Hidden gem for nature lovers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Less crowded than Ravana Falls, Ella Wala offers a more intimate waterfall experience. The cascading water creates several natural pools perfect for a refreshing dip. Surrounded by dense forest, this spot is ideal for nature photography and bird watching.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          20-minute hike from main road
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Natural swimming pools
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          Basic hiking skills required
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-cyan-50 rounded-lg">
                        <h4 className="font-semibold text-cyan-800 mb-2">Visitor Tips:</h4>
                        <ul className="text-sm text-cyan-700 space-y-1">
                          <li>• Visit early morning for privacy</li>
                          <li>• Wear non-slip footwear</li>
                          <li>• Bring swimming gear</li>
                          <li>• Pack out what you pack in</li>
                        </ul>
                      </div>
                    </div>
                    <Image
                      src="/ella-wala.jpg"
                      alt="Serene Ella Wala waterfall with natural pools"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Ella Railway Station</CardTitle>
                  <CardDescription>One of Sri Lanka&apos;s most scenic railway stops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <Image
                      src="/ella-station.jpg"
                      alt="Charming Ella Railway Station with mountain backdrop"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        More than just a transit point, Ella Railway Station is a charming colonial-era building and a photographer&apos;s paradise. Located on one of the world&apos;s most scenic railway routes, it&apos;s the perfect spot to experience Sri Lanka&apos;s historic rail heritage and capture stunning photos of trains winding through the mountains.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Built in 1918, colonial architecture
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Mountain views from platform
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Traditional tea stall on platform
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                        <h4 className="font-semibold text-indigo-800 mb-2">Train Schedule Highlights:</h4>
                        <ul className="text-sm text-indigo-700 space-y-1">
                          <li>• Kandy to Ella: Arrives 11:30 AM</li>
                          <li>• Ella to Badulla: Departs 9:30 AM</li>
                          <li>• Evening train to Colombo: 6:00 PM</li>
                          <li>• Book observation car in advance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Dhowa Rock Temple</CardTitle>
                  <CardDescription>Ancient Buddhist heritage site with impressive rock carvings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Dating back over 2,000 years, this ancient Buddhist temple features a remarkable 38-foot unfinished Buddha statue carved into the rock face. The temple complex includes cave shrines, ancient murals, and offers peaceful mountain views, making it a perfect spiritual retreat from Ella&apos;s busy tourist spots.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          2,000+ year history
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          38-foot Buddha rock carving
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Ancient cave paintings
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-rose-50 rounded-lg">
                        <h4 className="font-semibold text-rose-800 mb-2">Visitor Etiquette:</h4>
                        <ul className="text-sm text-rose-700 space-y-1">
                          <li>• Dress modestly (cover shoulders/knees)</li>
                          <li>• Remove shoes before entering shrines</li>
                          <li>• Avoid flash photography inside</li>
                          <li>• Visit during morning prayers (6-7 AM)</li>
                        </ul>
                      </div>
                    </div>
                    <Image
                      src="/dhowa-temple.jpg"
                      alt="Ancient Buddha statue carved into rock at Dhowa Temple"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Ella Jungle Resort</CardTitle>
                  <CardDescription>Luxury eco-retreat in the wilderness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <Image
                      src="/ella-jungle.jpg"
                      alt="Luxury tree houses and eco lodges at Ella Jungle Resort"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        While not just an attraction but also accommodation, Ella Jungle Resort deserves mention for its unique experiences. Set deep in the jungle, it offers treehouse stays, wildlife watching, and guided nature walks. Even if not staying overnight, their day programs provide authentic jungle experiences.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Treehouse accommodations
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Guided nature trails
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Bird watching tours
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-lime-50 rounded-lg">
                        <h4 className="font-semibold text-lime-800 mb-2">Available Activities:</h4>
                        <ul className="text-sm text-lime-700 space-y-1">
                          <li>• Night wildlife safaris</li>
                          <li>• Traditional cooking classes</li>
                          <li>• Medicinal plant walks</li>
                          <li>• Photography sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Tea Picking Experiences */}
          <section className="mb-12 scroll-mt-48 bg-muted/50" id="food">
            <div className="h-1 w-full bg-gradient-to-r from-green-400/20 to-transparent rounded-full mb-8" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Utensils className="w-7 h-7 text-primary" />
              Tea Picking &amp; Plantation Experiences
            </h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Authentic Tea Picking Sessions</CardTitle>
                  <CardDescription>Experience the art of Ceylon tea harvesting firsthand</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Tea pickers in traditional dress harvesting tea leaves in Ella&apos;s mountain plantations at sunrise"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Join local tea pluckers in the misty morning hours to learn the traditional &quot;two leaves and a bud&quot; picking technique. These authentic experiences offer insight into the lives of plantation workers and the meticulous process behind Ceylon tea production.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Early morning sessions (6:00-9:00 AM)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Learn traditional picking techniques
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Meet local tea pluckers
                        </li>
                        <li className="flex items-start gap-2">
                          <Coffee className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          Fresh tea tasting included
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tea Factory Tours</CardTitle>
                  <CardDescription>From leaf to cup - witness the complete tea processing journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Visit nearby tea factories like Halpewatte or Newburgh Estate to see how freshly picked leaves are transformed into world-renowned Ceylon tea. Watch the withering, rolling, oxidation, and drying processes that create different tea grades.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Guided factory tours available
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Learn about tea grading system
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Purchase fresh tea directly
                        </li>
                        <li className="flex items-start gap-2">
                          <Coffee className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          Multiple tea varieties to sample
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-sm text-green-700">
                          <strong>Tip:</strong> Best factories to visit include Halpewatte Tea Factory (20 min drive) and Newburgh Estate (15 min drive from Ella town).
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Traditional tea factory machinery with workers processing Ceylon tea leaves in Ella mountain region"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Waterfalls Near Ella */}
          <section className="mb-12 scroll-mt-48 bg-background" id="tips">
            <div className="h-1 w-full bg-gradient-to-r from-blue-400/20 to-transparent rounded-full mb-8" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="w-7 h-7 text-primary" />
              Spectacular Waterfalls Around Ella
            </h2>

            {/* Local Tips, Safety, and Best Time Box */}
            <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-600 rounded-r-lg shadow-sm max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
                <span className="font-semibold text-yellow-800 dark:text-yellow-200">Local Tips & Safety</span>
              </div>
              <ul className="list-disc pl-5 text-yellow-900 dark:text-yellow-100 text-sm space-y-1">
                <li><strong>Best time to visit:</strong> December to March for clear skies and lush scenery.</li>
                <li>Start hikes early in the morning to avoid midday heat and crowds.</li>
                <li>Always carry a light rain jacket, Ella’s weather can change quickly!</li>
                <li>Respect local customs when visiting temples and rural villages (cover shoulders/knees).</li>
                <li>Use only marked trails and beware of leeches during the rainy season.</li>
                <li>For safety, avoid swimming in waterfalls after heavy rain due to strong currents.</li>
              </ul>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ravana Falls</CardTitle>
                  <CardDescription>Sri Lanka&apos;s most famous waterfall with legendary significance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <Image
                      src="/Ravana-Falls.jpg"
                      alt="Majestic Ravana Falls cascading down rocky cliffs near Ella with pool for swimming"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Named after the legendary King Ravana from the Ramayana epic, this 25-meter waterfall is one of Sri Lanka&apos;s widest. Located just 6km from Ella, it offers swimming opportunities in natural pools and spectacular photo opportunities year-round.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          6km from Ella town center
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Swimming in natural pools
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Historical Ravana Cave nearby
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          Can be crowded during peak season
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-700">
                          <strong>Best time to visit:</strong> Early morning (7-9 AM) or late afternoon (4-6 PM) for fewer crowds and better lighting.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Kithal Ella  Falls</CardTitle>
                  <CardDescription>Sri Lanka&apos;s most famous waterfall with legendary significance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <Image
                      src="/Ravana-Falls.jpg"
                      alt="Majestic Ravana Falls cascading down rocky cliffs near Ella with pool for swimming"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Not famous and less crowded waterfall located near Ella, might be hard to find but worth the visit for tranquility and natural beauty.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          6km from Ella town center
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Swimming in natural pools
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Historical Ravana Cave nearby
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          Can be crowded during peak season
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-700">
                          <strong>Best time to visit:</strong> Early morning (7-9 AM) or late afternoon (4-6 PM) for fewer crowds and better lighting.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>


              <Card>
                <CardHeader>
                  <CardTitle>Diyaluma Falls</CardTitle>
                  <CardDescription>Sri Lanka&apos;s second-highest waterfall - an adventurous journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        At 220 meters, Diyaluma Falls is Sri Lanka&apos;s second-tallest waterfall. Located about 45 minutes from Ella, it requires a short hike but rewards visitors with stunning natural infinity pools and breathtaking mountain views.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          45-minute drive from Ella
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Natural infinity pools for swimming
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          220-meter cascading waterfall
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          Requires moderate hiking ability
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Diyaluma Falls dramatic 220-meter cascade with natural infinity pools and mountain landscape view"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Beautiful Waterfalls</CardTitle>
                  <CardDescription>Hidden gems within reach of Ella</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Bambaragama Falls</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        A lesser-known gem perfect for those seeking solitude. 30-minute drive plus short walk through tea plantations.
                      </p>
                      <h4 className="font-semibold mb-2">Secret Falls</h4>
                      <p className="text-sm text-muted-foreground">
                        Local hidden waterfall accessible via guided hike. Ask locals for directions - it&apos;s worth the adventure!
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Waterfall Safety Tips</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Never swim alone</li>
                        <li>• Check water flow conditions</li>
                        <li>• Wear appropriate footwear</li>
                        <li>• Respect local guidelines</li>
                        <li>• Carry water and snacks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Where to Stay */}
          {/* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Ella</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Budget Options</CardTitle>
                <CardDescription>$10-25 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ella Flower Garden Resort</li>
                  <li>• Dream Cafe &amp; Hostel</li>
                  <li>• Ella Mount Heaven</li>
                  <li>• Various guesthouses</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Basic but clean accommodations with mountain views and friendly service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mid-Range Hotels</CardTitle>
                <CardDescription>$25-75 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ella Jungle Resort</li>
                  <li>• Zion View Ella Green Retreat</li>
                  <li>• Hill Safari Eco Lodge</li>
                  <li>• Ambiente Ella</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Comfortable rooms with great views, good restaurants, and helpful staff.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Luxury Resorts</CardTitle>
                <CardDescription>$75+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 98 Acres Resort &amp; Spa</li>
                  <li>• Ella Eco Lodge</li>
                  <li>• Ravana Heights</li>
                  <li>• Melheim Resort</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Premium accommodations with spa services, fine dining, and spectacular views.
                </p>
              </CardContent>
            </Card>
          </div>
        </section> */}

          {/* Getting Around */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Getting to &amp; Around Ella</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Getting to Ella</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">By Train (Recommended)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The scenic train journey from Kandy (6-7 hours) or Colombo (8-9 hours) is one of the world&apos;s most beautiful train rides.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Book reserved seats in advance</li>
                      <li>• Observation car offers best views</li>
                      <li>• Bring snacks and water</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Car/Bus</h4>
                    <p className="text-sm text-muted-foreground">
                      5-6 hours from Colombo, 3-4 hours from Kandy. Mountain roads can be winding.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Getting Around Ella</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Walking</h4>
                    <p className="text-sm text-muted-foreground">
                      Ella town is small and walkable. Most attractions are within walking distance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tuk-tuk</h4>
                    <p className="text-sm text-muted-foreground">
                      Available for longer distances or when you don&apos;t want to walk uphill.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Motorbike Rental</h4>
                    <p className="text-sm text-muted-foreground">
                      For experienced riders only - mountain roads can be challenging.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Best Time to Visit Ella</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-green-700">Peak Season</CardTitle>
                  <CardDescription>December - March</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Dry weather, clear skies</li>
                    <li>• Perfect for hiking</li>
                    <li>• Best mountain views</li>
                    <li>• Higher prices, more crowds</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50/50">
                <CardHeader>
                  <CardTitle className="text-yellow-700">Shoulder Season</CardTitle>
                  <CardDescription>April - June, September - November</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• Occasional rain showers</li>
                    <li>• Fewer tourists</li>
                    <li>• Better accommodation rates</li>
                    <li>• Still good for activities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <CardTitle className="text-blue-700">Monsoon Season</CardTitle>
                  <CardDescription>July - August</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Heavy rainfall</li>
                    <li>• Misty, atmospheric views</li>
                    <li>• Lowest prices</li>
                    <li>• Limited outdoor activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          {/* Nearby Attractions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Explore More Nearby Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lipton's Seat Card */}
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Badulla</CardTitle>
                  <CardDescription>Panoramic views of tea plantations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Badulla.jpeg"
                    alt="Badull"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    Lipton&apos;s Seat offers breathtaking views of the surrounding tea estates and is a must-visit for nature lovers.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/badulla" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Adisham Bungalow Card */}
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
                    Diyaluma Falls is one of Sri Lanka&apos;s tallest waterfalls, offering stunning views and natural pools for a refreshing dip.
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

          {/* Final Tips */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Your Ella Adventure Awaits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ella is more than just a destination – it&apos;s a feeling. The cool mountain air, the endless tea gardens, the friendly smiles of locals, and the breathtaking views create an atmosphere that&apos;s hard to leave behind. Whether you&apos;re here for adventure, relaxation, or photography, Ella delivers experiences that will stay with you long after you&apos;ve descended from the mountains.
                </p>
                <p className="text-muted-foreground mb-4">
                  Take your time to explore, don&apos;t rush between attractions, and remember that sometimes the best moments in Ella happen when you&apos;re simply sitting in a cafe, sipping Ceylon tea, and watching the mist roll over the mountains.
                </p>
                <p className="text-muted-foreground font-medium">
                  Welcome to Ella – where every sunrise is a masterpiece! 🏔️🌅
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}