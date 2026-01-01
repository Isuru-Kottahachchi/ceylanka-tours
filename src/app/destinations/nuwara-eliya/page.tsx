"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Mountain, Thermometer } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import InsuranceBanner from "@/components/insurance-banner"
import { ImageCarousel } from "@/components/ui/image-carousel"


export default function NuwaraEliyaTravelGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Nuwara-Eliya.jpg"
          alt="Stunning panoramic view of Nuwara Eliya showing lush green tea plantations, colonial buildings, and misty mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nuwara Eliya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Little England in the Heart of Tea Country</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-600">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Mountain className="w-4 h-4 mr-1" />
              1,868m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Thermometer className="w-4 h-4 mr-1" />
              Cool Climate Year-Round
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Attractions</a>
          <a href="#activities" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Activities</a>
          <a href="#best-time-to-visit" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Best Time to Visit</a>
          <a href="#travel-tips" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Travel Tips</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section id="introduction" className="mb-12 scroll-mt-40">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Nuwara Eliya: Sri Lanka&apos;s Cool Escape</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Escape the tropical heat within a few hours and step into a world that feels like a slice of England transported to the heart
              of Sri Lanka. Nuwara Eliya, fondly known as &quot;Little England,&quot; sits majestically at 1,868 meters above sea
              level, offering a refreshing cool climate, rolling green tea plantations, and charming colonial
              architecture that tells stories of a bygone era.

            </p>
            <p className="text-lg">
              From world-famous Ceylon tea estates to pristine lakes, from strawberry farms to misty mountain peaks,
              Nuwara Eliya is a paradise for nature lovers, tea enthusiasts, and anyone seeking respite from Sri Lanka&apos;s
              tropical heat. This hill station promises an unforgettable journey through some of the world&apos;s most
              beautiful tea country.
            </p>
          </div>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 scroll-mt-40" id="quick-facts">
          {/* Quick Nuwara Eliya Facts */}
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Nuwara Eliya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong>1846 by British
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 1,868m (6,128 feet) from sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Temperature:</strong> 15-20°C year round
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 180km (112 miles)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous for:</strong> Ceylon Tea & Cool Climate
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Visit Duration:</strong> 2-3 days
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner />
          </section>
          {/* How to Get to Nuwara Eliya */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 mb-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Nuwara Eliya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 180km (112 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-5 hours</li>
                      <li>• <strong>Cost:</strong> $60-85 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Nuwara Eliya. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                      <li>• <strong>Route:</strong> Colombo → Kandy → Nanu Oya</li>
                      <li>• <strong>Duration:</strong> 6-7 hours total</li>
                      <li>• <strong>Cost:</strong> $3-12 USD (depending on class)</li>
                      <li>• <strong>Note:</strong> Get off at <span className="font-semibold text-blue-600 dark:text-blue-400">Nanu Oya station</span></li>
                      <li>• <strong>From Nanu Oya:</strong> 8km taxi/tuk-tuk ride to Nuwara Eliya</li>
                    </ul>
                    {/* 
                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Kandy → Nuwara Eliya</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $4-6 USD (budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Regular departures from Kandy</li>
                    </ul> */}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">🚂 Special Note about Train Journey</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The train journey from Kandy to Nanu Oya is considered one of the world&apos;s most scenic train rides, passing through breathtaking tea plantations, mountain tunnels, and misty landscapes. <strong>Important:</strong> Nanu Oya is the closest railway station to Nuwara Eliya - you&apos;ll need to take a taxi or tuk-tuk for the final 8km uphill journey to the town center.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book reserved seats in advance for the best views</li>
                    <li>• Sit on the right side for better mountain scenery</li>
                    <li>• Bring warm clothes - it gets cool in the mountains</li>
                    <li>• Pre-arrange transport from Nanu Oya station</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Tea Plantations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Famous Tea Plantations & Factory Tours</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Nuwara-Eliya.jpg"
                alt="Lush green tea plantations in Nuwara Eliya with tea pickers working among perfectly manicured tea bushes"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                World-renowned Ceylon tea plantations surrounding Nuwara Eliya
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nuwara Eliya is the heart of Sri Lankas tea industry, producing some of the worlds finest Ceylon tea.
                The cool climate, high altitude, and misty conditions create the perfect environment for growing premium
                tea thats exported globally and cherished by tea connoisseurs everywhere.
              </p>
              <p>
                Take a guided tour through the emerald green plantations where you can witness tea pickers at work,
                learn about the tea-making process from leaf to cup, and sample fresh Ceylon tea while enjoying
                panoramic views of the rolling hills.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Must-Visit Tea Factories:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Pedro Tea Estate - Historic factory with tours</li>
                  <li>• Mackwoods Labookellie Tea Centre - Popular tourist spot</li>
                  <li>• Bluefield Tea Gardens - Scenic plantation walks</li>
                  <li>• Damro Labookellie Tea Centre - Traditional processing</li>
                </ul>
              </div>
            </div>
          </div>
          {/* St. Clair's Falls Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/St-Clairs-Falls.jpg"
                alt={"St. Clair&apos;s Falls near Thalawakale, cascading through lush tea country on the way to Nuwara Eliya"}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
                placeholder="blur"
                blurDataURL="/public/images/hero-waterfall.jpg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                St. Clair&apos;s Falls, often called the &lsquo;Little Niagara of Sri Lanka&rsquo;, is a breathtaking sight on the journey to Nuwara Eliya.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-2xl font-semibold mb-2">See St. Clair&apos;s Falls and Devon falls on Your Way</h3>
              <p>
                As you travel towards Nuwara Eliya, especially along the Hatton–Talawakelle–Nanu Oya road, make sure to pause near Thalawakale to witness the majestic St. Clair&apos;s Falls. This wide, multi-tiered waterfall tumbles through emerald tea estates, creating a picture-perfect scene that is one of Sri Lanka&apos;s most photographed natural wonders.
              </p>
              <p>
                The falls are easily visible from the main road, and there are several viewpoints where you can stop for photos or simply soak in the cool, misty air. St. Clair&apos;s is especially impressive during the rainy season, when the water flow is at its peak. However, outside of the wet season, the falls may appear as a muggy trickle or even a drained stream due to water diversions and drier weather so plan your visit accordingly if you want to see the waterfall in its full glory.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <span className="font-semibold text-blue-800">Travel Tip:</span>
                <span className="ml-2 text-blue-700 text-sm">Combine your tea factory tour with a stop at St. Clair&apos;s Falls for a truly unforgettable hill country experience!</span>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section id="attractions" className="mb-12 scroll-mt-40">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Nuwara Eliya</h2>

          <div className="space-y-8">
            {/* Gregory Lake */}
            <Card>
              <CardHeader>
                <CardTitle>1. Gregory Lake</CardTitle>
                <CardDescription>Scenic artificial lake perfect for recreation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Gregory_Lake.jpg",
                        alt: "Beautiful Gregory Lake in Nuwara Eliya with paddle boats, walking paths, and surrounding hills",
                        caption: "Gregory Lake",
                        title: "Gregory Lake"

                      },
                      {
                        src: "/Gregory_Lake2.jpg",
                        alt: "Beautiful Gregory Lake in Nuwara Eliya with paddle boats, walking paths, and surrounding hills",
                        caption: "Gregory Lake",
                        title: "Gregory Lake"
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Created in 1873 by British Governor Sir William Gregory, this picturesque lake is the heart of
                      Nuwara Eliyas recreational activities. Surrounded by eucalyptus trees and rolling hills, it
                      offers a perfect setting for relaxation and family fun.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Paddle boating and swan boats available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful walking path around the lake
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Horse riding and pony rides for children
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for picnics and photography
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Haggala Botanical Garden */}
            <Card>
              <CardHeader>
                <CardTitle>Haggala Botanical Garden</CardTitle>
                <CardDescription>Sri Lanka&apos;s second largest botanical garden, famed for its cool-climate blooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">

                  <ImageCarousel
                    images={[
                      {
                        src: "/Flowers-in-vic-park.jpg",
                        alt: "Beautiful flowers in Victoria Park, Nuwara Eliya",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },


                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located just 10km from Nuwara Eliya, Haggala Botanical Garden is a floral paradise set against the dramatic backdrop of Hakgala Rock. Established in 1861, it is renowned for its vibrant displays of roses, orchids, ferns, and rare alpine plants that thrive in the region&apos;s cool, misty climate.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 10,000 species of flora, including rare orchids and medicinal plants
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best time to visit: March–April for the rose and orchid blooms
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Picturesque walking paths, picnic spots, and mountain views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Family-friendly, with a dedicated children&apos;s garden
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horton Plains */}
            <Card>
              <CardHeader>
                <CardTitle>2. Horton Plains National Park</CardTitle>
                <CardDescription>UNESCO World Heritage site with Worlds End cliff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 32km from Nuwara Eliya, Horton Plains offers one of Sri Lanka&apos;s most spectacular hiking
                      experiences. The highlight is World&apos;s End, a sheer cliff drop of 870 meters offering breathtaking
                      views on clear days.<br />
                      You can see World&apos;s End
                    </p>

                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Worlds End viewpoint - 870m cliff drop
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bakers Falls - beautiful 20m waterfall
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        9km circular hiking trail
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique montane ecosystem and wildlife
                      </li>
                    </ul>
                    <Link href="/destinations/horton-plains">
                      <Button
                        className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                        variant="default"
                      >
                        Discover More about Horton plains
                      </Button>
                    </Link>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Best Time:</strong> Start early (6 AM) to avoid clouds at Worlds End
                      </p>
                    </div>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/Hortonplains16.jpeg",
                        alt: "Horton Plains National Park showcasing the unique montane ecosystem and scenic landscapes",
                        caption: "Horton Plains National Park",
                        title: "Horton Plains National Park"
                      },
                      {
                        src: "/Hortonplains2.jpeg",
                        alt: "Horton Plains National Park showcasing the unique montane ecosystem and scenic landscapes",
                        caption: "Horton Plains National Park",
                        title: "Horton Plains National Park"
                      },
                      {
                        src: "/Hortonplains3.jpeg",
                        alt: "Horton Plains National Park showcasing the unique montane ecosystem and scenic landscapes",
                        caption: "Horton Plains National Park",
                        title: "Horton Plains National Park"
                      },

                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Victoria Park */}
            <Card>
              <CardHeader>
                <CardTitle>3. Victoria Park</CardTitle>
                <CardDescription>Beautiful botanical garden in the town center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">

                  <ImageCarousel
                    images={[
                      {
                        src: "/Victoria-park2.jpg",
                        alt: "Victoria Park showcasing the beautiful botanical gardens and diverse flora",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park10.jpg",
                        alt: "Victoria Park showcasing the beautiful botanical gardens and diverse flora",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park3.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park11.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Flowers-in-vic-park.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park4.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park6.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Victoria-park7.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Vicpark-pond.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Vic-flower.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },
                      {
                        src: "/Vic-flower1.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Victoria Park",
                        title: "Victoria Park"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Named after Queen Victoria, this 27-acre park is a delightful escape in the heart of Nuwara Eliya. If you are a flower lover,this is the place to be.
                      The park is home to a variety of flora including vibrant flower beds, towering trees.
                      With its well-maintained gardens, diverse bird life, and peaceful atmosphere, its perfect for a
                      leisurely stroll or family outing.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 bird species including migratory birds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful flower gardens and tree-lined paths
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Childrens playground and picnic areas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Entry fee: 60 LKR for adults, 30 LKR for children
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ambewela New Zealand Farm */}
            <Card>
              <CardHeader>
                <CardTitle>4. Ambewela New Zealand Farm</CardTitle>
                <CardDescription>Scenic dairy farm with rolling green pastures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">

                  <ImageCarousel
                    images={[
                      {
                        src: "/New-Zealand-Farm.jpg",
                        alt: "New Zealand Farm with stunning mountain views",
                        caption: "New Zealand Farm",
                        title: "New Zealand Farm"
                      },
                      {
                        src: "/New-Zealand-Farm1.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },
                      {
                        src: "/New-Zealand-Farm2.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located about 30km from Nuwara Eliya, Ambewela Farm is a picturesque dairy farm that resembles
                      the rolling hills of New Zealand. This working farm spans over 1,700 hectares and offers visitors
                      a unique experience of Sri Lanka&apos;s highland agriculture and stunning pastoral landscapes.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rolling green pastures with grazing dairy cows
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh milk and dairy products available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular mountain views and photography opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cool climate and peaceful rural atmosphere
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for nature walks and picnics
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Best Experience:</strong> Visit during early morning or late afternoon for the best lighting and to see cows grazing peacefully in the fields.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Moon Plains</CardTitle>
                <CardDescription>Hidden grassland plateau with panoramic views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      A lesser-known gem located about 8km from Nuwara Eliya, Moon Plains is a beautiful grassland
                      plateau that offers stunning 360-degree views of the surrounding mountains and valleys. This
                      peaceful location is perfect for those seeking tranquility away from the crowds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic mountain and valley views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful grassland perfect for relaxation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for sunset and sunrise photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded alternative to popular viewpoints
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Hidden Gem:</strong> Best visited during clear weather for unobstructed mountain views. Ideal for a peaceful picnic or meditation.
                      </p>
                    </div>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/Moon-plains.jpg",
                        alt: "Moon Plains with stunning mountain views",
                        caption: "Moon Plains",
                        title: "Moon Plains"
                      },
                      {
                        src: "/MoonPlains2.jpeg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },
                      {
                        src: "/MoonPlains3.jpeg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                </div>

              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>6. Shanthipura Village and View Point</CardTitle>
                <CardDescription>Sri Lanka&apos;s highest village</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The highest village which is located above Elevation of 2000m. A peaceful village with stunning views of the surrounding mountains and valleys. A great place to experience local culture and hospitality.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Highest village in Sri Lanka at over 2000m elevation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic mountain and valley views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for sunset and sunrise photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded alternative to popular viewpoints
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Hidden Gem:</strong> Best visited during clear weather for unobstructed mountain views. Ideal for a peaceful picnic or meditation.
                      </p>
                    </div>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/Shanthipura.jpg",
                        alt: "Shanthipura Village with stunning mountain views",
                        caption: "Shanthipura Village",
                        title: "Shanthipura Village"
                      },
                      {
                        src: "/Shanthipura1.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>7. Nanu Oya Falls</CardTitle>
                <CardDescription>Beautiful waterfall near Nuwara Eliya</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Eye Catching waterfall located with a railway bridge passing over it. A peaceful village with stunning views of the surrounding mountains and valleys. A great place to experience local culture and hospitality.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Eye Catching Waterfall with a railway bridge passing over it
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Instagram friendly spot and Excellent for photography

                      </li>

                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded alternative to popular viewpoints
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Hidden Gem:</strong> Most of the travellers miss this beautiful waterfall. Make sure to include this in your itinerary.</p>
                    </div>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Nanu-Oya-Falls.jpg",
                        alt: "Nanu Oya Falls with stunning rock formations",
                        caption: "Nanu Oya Falls",
                        title: "Nanu Oya Falls"
                      },
                      {
                        src: "/Lunugangabawa2.jpeg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Colonial Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Colonial Charm & Architecture</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Grand Hotel</CardTitle>
                <CardDescription>Historic colonial luxury</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Grand Hotel Nuwara Eliya showing classic colonial architecture with red roof and elegant facade"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Built in 1891, this iconic hotel maintains its colonial grandeur with period furnishings and old-world
                  charm.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nuwara Eliya Golf Club</CardTitle>
                <CardDescription>Asia&apos;s finest golf course</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Nuwara Eliya Golf Club showing pristine green fairways surrounded by tea plantations and mountains"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Established in 1889, this 18-hole championship course offers stunning views and challenging play at
                  high altitude.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hill Club</CardTitle>
                <CardDescription>Exclusive colonial club</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Hill Club Nuwara Eliya showing traditional colonial club architecture with manicured gardens"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A gentlemens club from 1876 that still maintains strict dress codes and colonial traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Unique Experiences in Nuwara Eliya</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Strawberry Farms & Fresh Produce</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Strawberry Picking</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit local strawberry farms where you can pick your own fresh strawberries and enjoy
                    strawberry-based treats.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fresh Vegetables</h4>
                  <p className="text-sm text-muted-foreground">
                    The cool climate produces excellent carrots, leeks, cabbage, and other temperate vegetables.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Markets</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit the central market for fresh produce, flowers, and local specialties.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adventure Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Hiking & Trekking</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore numerous trails through tea plantations and montane forests with stunning views.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Boat Rides</h4>
                  <p className="text-sm text-muted-foreground">
                    Enjoy peaceful boat rides on Gregory Lake and nearby reservoirs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    Capture the beauty of tea country, colonial architecture, and mountain landscapes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Nuwara Eliya adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pattipola */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Pattipola.webp"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Pattipola</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Known for its scenic beauty and cool climate, Pattipola is home to the highest railway station in Sri Lanka.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pattipola" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
             <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Dunsinane-Falls.jpg"
                  alt="Dunsinane Falls near Nuwara Eliya"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Dunsinane Falls</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dunsinane Falls is a stunning waterfall located near Nuwara Eliya.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/dunsinane-falls" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Nine-arch-ella.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  1 hours 50 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Ella</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Famous for the Nine Arch Bridge, Little Adam&apos;s Peak, and stunning train journeys through tea country.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  56 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ella-town" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Bandarawela */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Bandarawela.jpeg"
                  alt="Bandarawela town with rolling hills and tea plantations in the background"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Bandarawela</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Charming hill station with cooler climate, beautiful views, and the historic Bandarawela Hotel.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  45 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bandarawela" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Haputhale */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Haputhale.jpeg"
                  alt="Haputhale railway station and surrounding tea plantation landscapes"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  1 hour
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Haputhale</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Small town famous for Lipton&apos;s Seat viewpoint and Adisham Monastery with panoramic views.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  30 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/haputhale" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Badulla */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Badulla.jpeg"
                  alt="Badulla town nestled in mountains with ancient temples and railway heritage"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                  2.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Badulla</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  End point of the famous hill country train journey with ancient temples and beautiful waterfalls.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  55 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/badulla" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Kandy */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Kandy.jpeg"
                  alt="Temple of the Tooth in Kandy with traditional Sri Lankan architecture"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  3 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kandy</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Cultural capital with the Temple of the Tooth, beautiful lake, and traditional performances.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  75 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kandy" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Adam&apos;s Peak */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Adams-peak.jpeg"
                  alt="Adam&apos;s Peak mountain with pilgrims climbing the sacred summit at sunrise"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded">
                  4 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Adam&apos;s Peak</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sacred mountain pilgrimage site famous for sunrise views and the sacred footprint at the summit.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  90 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/adams-peak" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Day Trip Suggestions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Suggested Day Trip Combinations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Tea Country Adventure</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Nuwara Eliya → Ambewela Farm → Haputhale (Lipton&apos;s Seat) → Return
                </p>
                <div className="flex items-center text-xs text-green-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (8-10 hours)
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Hill Country Explorer</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Nuwara Eliya → Ella (Nine Arch Bridge) → Bandarawela → Return
                </p>
                <div className="flex items-center text-xs text-blue-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (10-12 hours)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weather & Best Time to Visit */}
        <section id="best-time-to-visit" className="mb-12 scroll-mt-40">
          <h2 className="text-3xl font-bold mb-6">Weather & Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>December to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear skies and minimal rainfall</li>
                  <li>• Perfect for Horton Plains hiking</li>
                  <li>• Best visibility for mountain views</li>
                  <li>• Cool temperatures (15-20°C)</li>
                  <li>• Peak tourist season</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April-May & September-November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional light showers</li>
                  <li>• Lush green landscapes</li>
                  <li>• Fewer crowds</li>
                  <li>• Good for tea plantation visits</li>
                  <li>• Moderate accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>June to August</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall and mist</li>
                  <li>• Limited visibility at viewpoints</li>
                  <li>• Lush, vibrant vegetation</li>
                  <li>• Lowest tourist numbers</li>
                  <li>• Best rates for accommodation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Nuwara Eliya Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Nuwara Eliya offers a unique escape from tropical Sri Lanka into a world of cool mountain air,
                world-class tea, and colonial charm. Whether you&apos;re sipping fresh Ceylon tea while overlooking emerald
                plantations or hiking to World&apos;s End for sunrise views, this hill station provides experiences you&apos;ll
                treasure forever.
              </p>
              <p className="text-muted-foreground mb-4">
                Don&apos;t forget to pack warm clothes - the cool climate is a refreshing change but can catch tropical
                travelers off guard! Take time to slow down, breathe the fresh mountain air, and immerse yourself in the
                timeless beauty of Sri Lanka&apos;s tea country.
              </p>
              <p className="text-muted-foreground font-medium">Enjoy your journey through Little England! 🍃🏔️</p>
            </CardContent>
          </Card>
        </section>
      </div >
    </main >
  )
}
