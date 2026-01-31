"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, CheckCircle, Star, Calendar, Building, ShoppingBag, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/ui/image-carousel"
import InsuranceBanner from "@/components/insurance-banner"



export default function ColomboTourGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Colombo-City.jpeg"
          alt="Colombo skyline showing modern buildings, colonial architecture, and bustling city life"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Colombo</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Dynamic Commercial Capital</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Western Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Building className="w-4 h-4 mr-1" />
              Commercial & Cultural Hub
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <ShoppingBag className="w-4 h-4 mr-1" />
              Shopping & Dining Paradise
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Colombo: Where Tradition Meets Modernity
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Colombo, Sri Lanka&apos;s bustling commercial capital and largest city, is a fascinating blend of colonial
              heritage, modern development, and vibrant local culture. This dynamic metropolis serves as the country&apos;s
              economic heart while preserving its rich history through magnificent architecture, bustling markets, and
              diverse cultural attractions.
            </p>
            <p className="text-lg">
              From the historic Fort district with its colonial buildings to the modern skyscrapers of the business
              district, from the aromatic spice markets of Pettah to the serene Buddhist temples, Colombo offers
              visitors an authentic urban Sri Lankan experience that captures the essence of this island nation&apos;s past,
              present, and future.
            </p>
          </div>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Colombo Quick Facts (left) */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Colombo Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Population:</strong> 5.6 million (Greater Colombo)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Founded:</strong> Ancient trading port, colonial era
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Best Time:</strong> December to March
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Famous for:</strong> Shopping, Dining, Culture
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-red-500" />
                      <span>
                        <strong>Must-See:</strong> Galle Face Green, Fort District
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-500" />
                      <span>
                        <strong>Ideal Duration:</strong> 2-3 days
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner />
          </section>

          {/* How to Get to Colombo (right) */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  How to Get Around Colombo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">From Airport (Recommended)</h4>
                  <ul className="text-sm text-muted-foreground space-y-0.5">
                    <li>• Private transfer: 45-60 mins, $25-40 USD</li>
                    <li>• Airport Express Highway route</li>
                    <li>• Most comfortable option</li>
                  </ul>

                  {/* Ceylanka Tours Recommendation */}
                  <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 shadow-md">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> offers reliable airport transfers and city tours with experienced drivers who know Colombo inside out.
                    </p>
                    <div className="flex flex-col gap-1.5 text-xs text-orange-800 dark:text-orange-200">
                      <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded">
                        <span>📞</span>
                        <span><strong>Call:</strong></span>
                        <a href="tel:+94707646765" className="underline hover:text-orange-700 dark:hover:text-orange-300">
                          <span className="hidden sm:inline">+94 70 764 6765</span>
                          <span className="sm:hidden">+94707646765</span>
                        </a>
                        <span>|</span>
                        <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                      <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                        <span>🗓️</span>
                        <Link href="/tours/colombo-city-tour" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                          <strong>Colombo City Tour</strong> - Click for details & booking
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Three-Wheeler (Tuk-Tuk)</h4>
                  <ul className="text-sm text-muted-foreground space-y-0.5">
                    <li>• Quick and affordable city transport</li>
                    <li>• Negotiate fare before riding</li>
                    <li>• Typical ride: $2-5 USD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Ride-Hailing Apps</h4>
                  <ul className="text-sm text-muted-foreground space-y-0.5">
                    <li>• PickMe, Uber available</li>
                    <li>• Fixed prices, cashless payment</li>
                  </ul>
                </div>
                <div className="mt-3 p-2 bg-orange-100 dark:bg-slate-700 rounded border-l-4 border-orange-500 dark:border-orange-400">
                  <p className="text-xs text-orange-800 dark:text-orange-200">
                    <strong>🌟 Tip:</strong> Traffic is heavy 7-9 AM and 5-7 PM. Plan accordingly and allow extra time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Historic Districts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Historic Districts & Colonial Heritage</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>

              <ImageCarousel
                images={[
                  {
                    src: "/Cargills-York-Street.jpg", caption: "Independence Memorial Hall exterior",
                    alt: ""
                  },
                  {
                    src: "/placeholder.svg", caption: "Independence Square illuminated at night",
                    alt: ""
                  }
                ]}

              />
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Colombo&apos;s Fort district, the historic heart of the city, tells the story of Sri Lanka&apos;s colonial past
                through its magnificent architecture. Originally built by the Portuguese and later expanded by the Dutch
                and British, this area now serves as the central business district while preserving its historical
                charm.
              </p>
              <p>
                Walk through streets lined with colonial-era buildings, visit the iconic Clock Tower, explore the Old
                Parliament Building, and discover how this ancient trading port evolved into modern Sri Lanka&apos;s
                commercial capital.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Colonial Highlights:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Old Parliament Building - British colonial architecture</li>
                  <li>• Clock Tower - Iconic Colombo landmark</li>
                  <li>• Dutch Period Museum - Colonial artifacts</li>
                  <li>• Grand Oriental Hotel - Historic luxury</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Colombo</h2>

          <div className="space-y-8">
            {/* Galle Face Green */}
            <Card>
              <CardHeader>
                <CardTitle>1. Galle Face Green</CardTitle>
                <CardDescription>Iconic oceanfront promenade and urban park</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">

                  <ImageCarousel
                    images={[
                      {
                        src: "/Galle-face.jpg", caption: "Galle Face Green with families and city skyline",
                        alt: ""
                      },
                      {
                        src: "/placeholder.svg", caption: "Sunset at Galle Face Green promenade",
                        alt: ""
                      }
                    ]}

                  />

                  <div>
                    <p className="text-muted-foreground mb-4">
                      This half-kilometer stretch of oceanfront lawn is Colombo&apos;s most beloved public space. Originally
                      created by the British in 1859, Galle Face Green serves as the city&apos;s social hub where families
                      gather, children play, and visitors enjoy spectacular sunsets over the Indian Ocean.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for evening strolls and sunset viewing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Street food vendors selling local snacks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Kite flying and family activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic Galle Face Hotel nearby
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/galle-face-green">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lotus Tower */}
            <Card>
              <CardHeader>
                <CardTitle>2. Nelum Kuluna (Lotus Tower)</CardTitle>
                <CardDescription>South Asia&apos;s tallest tower with amazing city views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Standing at 356 meters tall, Lotus Tower is the tallest building in Sri Lanka and all of South Asia.
                      This massive structure opened in 2019 and gets its name from its lotus flower design. You can see it
                      from almost anywhere in Colombo because it towers over everything else in the city.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The tower has several observation decks where you can go up and see the entire city spread out below you.
                      On a clear day, you can see the ocean, Port City, and all the way across Colombo. There&apos;s also a
                      revolving restaurant at the top where you can eat while the floor slowly turns, giving you views in all
                      directions. The tower lights up at night in different colors, making it a beautiful landmark to see from
                      anywhere in the city.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Tallest tower in South Asia at 356 meters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple observation decks with 360-degree views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Revolving restaurant serving food with a view
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful night lighting visible across the city
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Gift shop and exhibition areas inside
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/lotus-tower">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/Lotus-Tower.jpg", caption: "Lotus Tower at night with colorful illumination",
                        alt: ""
                      },
                      {
                        src: "/Lotus-Tower1.webp", caption: "Lotus Tower",
                        alt: ""
                      },
                      {
                        src: "/Lotus-Tower2.jpg", caption: "Lotus Tower illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Lotus-Tower3.jpeg", caption: "View from the observation deck of Lotus Tower",
                        alt: ""
                      },
                    ]}
                  />

                </div>
              </CardContent>
            </Card>

            {/* Gangarama Temple */}
            <Card>
              <CardHeader>
                <CardTitle>3. Gangarama Temple</CardTitle>
                <CardDescription>Iconic Buddhist temple and cultural center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Gangarama Temple is one of Colombo&apos;s most important Buddhist temples, known for its eclectic
                      architecture that blends Sri Lankan, Thai, Indian, and Chinese styles. The temple complex includes
                      a museum, library, and vocational training institute, making it a significant cultural and educational center.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Buddha statues and religious artifacts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Diverse architectural styles from multiple cultures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere for meditation and reflection
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Museum with extensive Buddhist art collection
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/gangarama-temple">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/Gangaramaya-temple.jpg", caption: "Gangarama Temple with golden Buddha statues",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya4.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya-temple3.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya-temple4.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya-temple-at-night.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya1.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya8.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya7.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya2.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Gangaramaya6.jpg", caption: "Gangarama Temple illuminated at night",
                        alt: ""
                      },
                    ]}
                  />

                </div>
              </CardContent>
            </Card>

            {/* Red Mosque */}
            <Card>
              <CardHeader>
                <CardTitle>4. Red Mosque (Jami Ul-Alfar Mosque)</CardTitle>
                <CardDescription>Stunning Indo-Saracenic architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This striking red and white striped mosque is one of Colombo&apos;s most photographed buildings. Built
                      in 1908, it showcases beautiful Indo-Saracenic architecture and serves as an important religious
                      and cultural center for the Muslim community.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique red and white striped design
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Indo-Saracenic architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Located in the heart of Pettah
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Respectful photography allowed from outside
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/red-mosque">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/Red-mosq-colombo.jpg", caption: "Red Mosque with red and white stripes",
                        alt: ""
                      },
                      {
                        src: "/Red-mosq.webp", caption: "Red Mosque with red and white stripes",
                        alt: ""
                      },
                      {
                        src: "/Red-mosq2.webp", caption: "Another view of Red Mosque",
                        alt: ""
                      },
                      {
                        src: "/Red-mosq3.webp", caption: "Another view of Red Mosque",
                        alt: ""
                      },
                      {
                        src: "/Red-mosq-colombo1.jpg", caption: "Red Mosque with red and white stripes",
                        alt: ""
                      },
                      {
                        src: "/Red-mosq1.webp", caption: "Interior view of Jami Ul-Alfar Mosque",
                        alt: ""
                      }
                    ]}

                  />

                </div>
              </CardContent>
            </Card>
            {/* Port City Colombo */}
            <Card>
              <CardHeader>
                <CardTitle>5. Port City Colombo</CardTitle>
                <CardDescription>Sri Lanka&apos;s newest urban development marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">

                  <ImageCarousel
                    images={[
                      {
                        src: "/Portcitycolombo.jpg", caption: "",
                        alt: ""
                      },
                      {
                        src: "/Portcitycolombo1.jpg", caption: "",
                        alt: ""
                      },
                      {
                        src: "/Portcitycolombo2.jpg", caption: "",
                        alt: ""
                      }
                    ]}

                  />

                  <div>
                    <p className="text-muted-foreground mb-4">
                      Port City Colombo is Sri Lanka&apos;s most ambitious urban development project, built on reclaimed land
                      from the sea. This futuristic city-within-a-city features ultra-modern architecture, luxury residences,
                      world-class shopping and dining, business districts, and a state-of-the-art marina.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ultra-modern waterfront development
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Luxury shopping and fine dining venues
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        World-class marina and yacht facilities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning city and ocean views
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/port-city">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
                      {/* Independence Square */}
            <Card>
              <CardHeader>
                <CardTitle>6. Independence Memorial Hall</CardTitle>
                <CardDescription>National monument and architectural masterpiece</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">

                  <ImageCarousel
                    images={[
                      {
                        src: "/Independence-Memorial-Hall.jpg", caption: "Independence Memorial Hall illuminated at night",
                        alt: ""
                      },
                      {
                        src: "/Independence-Memorial-Hall1.jpg", caption: "",
                        alt: ""
                      },
                      {
                        src: "/Independence-Memorial-Hall2.jpg", caption: "",
                        alt: ""
                      },
                       {
                        src: "/Independence-Memorial-Hall3.jpg", caption: "",
                        alt: ""
                      }
                    ]}

                  />

                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built to commemorate Sri Lanka&apos;s independence from British rule in 1948, this magnificent monument
                      combines traditional Kandyan architecture with modern design. The surrounding Independence Square
                      is a popular spot for locals and tourists alike.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Kandyan-style architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Museum showcasing independence history
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful park for walking and relaxation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Popular jogging and exercise area
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/independence-square">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Pettah Market */}
            <Card>
              <CardHeader>
                <CardTitle>7. Pettah Floating Market & Bazaar</CardTitle>
                <CardDescription>Vibrant traditional market experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Pettah is Colombo&apos;s bustling commercial heart, a maze of narrow streets filled with shops,
                      markets, and vendors selling everything from spices and textiles to electronics and jewelry. The
                      floating market on Beira Lake adds a unique dimension to this traditional shopping experience.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic Sri Lankan spices and tea
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional textiles and handicrafts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Floating market on Beira Lake
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bargaining culture and local interaction
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/pettah">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/placeholder.svg", caption: "Pettah market with vendors and spices",
                        alt: ""
                      },
                      {
                        src: "/placeholder.svg", caption: "Floating market on Beira Lake, Pettah",
                        alt: ""
                      }
                    ]}

                  />

                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Else to See Nearby */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Colombo adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Kalaniya-temple.jpg"
                  alt="Kelaniya Raja Maha Vihara Buddhist temple with sacred stupa and ancient architecture"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  25 mins from Colombo
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kelaniya Raja Maha Vihara</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sacred Buddhist temple where Buddha visited over 2,500 years ago, featuring stunning wall paintings and the spectacular Duruthu Perahera festival.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  11 km from Colombo
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kalaniya-rajamaha-viharaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="One Galle Face Mall luxury shopping center with modern architecture"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  10 mins from Fort
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">One Galle Face Mall</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Premium shopping mall with international brands, fine dining restaurants, and entertainment options overlooking the ocean.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  3 km from Colombo Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/one-galle-face" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="Colombo City Centre modern shopping complex with contemporary design"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  15 mins from Fort
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Colombo City Centre</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Contemporary mixed-use development with shopping, dining, residential spaces and rooftop attractions in the heart of the city.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  5 km from Colombo Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/colombo-city-centre" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="Arcade Independence Square historic colonial building with boutique shops"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  15 mins from Fort
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Race Course</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Race Course is a beautifully restored colonial-era building that now houses boutique shops, cafes, and art galleries, offering a charming shopping experience.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  6 km from Colombo Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/arcade-independence-square" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="Mount Lavinia Beach with golden sand and colonial hotel"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  30 mins from Colombo
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Mount Lavinia Beach</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Popular beach destination with golden sand, historic Mount Lavinia Hotel, and stunning sunset views over the Indian Ocean.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  12 km from Colombo
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mount-lavinia" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg"
                  alt="National Museum Colombo displaying Sri Lankan cultural artifacts"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  15 mins from Fort
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">National Museum of Colombo</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sri Lanka&apos;s largest museum showcasing ancient royal artifacts, traditional masks, colonial-era exhibits and cultural treasures.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  7 km from Colombo Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/national-museum" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cultural Experiences & Local Life</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Religious & Cultural Sites</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Gangaramaya Temple</h4>
                  <p className="text-sm text-muted-foreground">
                    One of Colombo&apos;s most important Buddhist temples, featuring eclectic architecture and artifacts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">St. Lucia&apos;s Cathedral</h4>
                  <p className="text-sm text-muted-foreground">
                    Beautiful Catholic cathedral showcasing colonial religious architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hindu Temples</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit colorful Hindu temples in Pettah and experience diverse religious traditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Food & Dining Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Street Food Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore local street food culture with kottu roti, hoppers, and tropical fruits.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fine Dining</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience world-class restaurants serving fusion cuisine and traditional Sri Lankan dishes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tea Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit tea lounges and learn about Sri Lanka&apos;s famous Ceylon tea heritage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weather & Best Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>December to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pleasant temperatures (24-30°C)</li>
                  <li>• Minimal rainfall, clear skies</li>
                  <li>• Perfect for sightseeing and walking</li>
                  <li>• Peak tourist season</li>
                  <li>• Higher hotel rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April-May & October-November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Warm temperatures with occasional showers</li>
                  <li>• Good for indoor attractions and shopping</li>
                  <li>• Fewer crowds, better prices</li>
                  <li>• Lush green city parks</li>
                  <li>• Mixed weather conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>June to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall and humidity</li>
                  <li>• Great for museums and indoor activities</li>
                  <li>• Lowest accommodation prices</li>
                  <li>• Vibrant green landscapes</li>
                  <li>• Potential flooding in some areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Colombo Urban Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Colombo offers a perfect introduction to Sri Lanka&apos;s rich culture, history, and modern aspirations. This
                vibrant city seamlessly blends ancient traditions with contemporary life, creating unique experiences
                that showcase the best of Sri Lankan urban culture.
              </p>
              <p className="text-muted-foreground mb-4">
                From exploring colonial architecture and bustling markets to enjoying world-class dining and modern
                shopping, Colombo provides diverse experiences that cater to every interest. Take time to interact with
                locals, sample street food, and discover the warmth and hospitality that makes Sri Lanka special.
              </p>
              <p className="text-muted-foreground font-medium">Explore the heart of Sri Lanka! 🏙️🇱🇰</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
