"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Sun, Fish, TreePalm, Utensils, Bed, Car, Users, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function WeligamaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/IMG_8209.jpg"
          alt="Stunning view of Weligama Bay showing traditional stilt fishermen on wooden poles, golden sand beaches, and tropical coastline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Weligama</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Authentic Coastal Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Fish className="w-4 h-4 mr-1" />
              Famous Stilt Fishermen
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Perfect Beginner Surfing
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#getting-there" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Getting There</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Attractions</a>
          <a href="#adventure" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Adventure</a>
          <a href="#nearby-attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby Attractions</a>
          <a href="#tips" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Travel Tips</a>
          <a href="#transport" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Getting Around</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-24" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Weligama: Where Tradition Meets Paradise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled along Sri Lanka&apos;s enchanting southern coast, Weligama is a captivating blend of ancient traditions and modern beach paradise.
              This charming coastal town is world-famous for its iconic stilt fishermen, perfect beginner-friendly surfing conditions, and stunning natural attractions
              like Snake Island and Coconut Tree Hill. The name &quot;Weligama&quot; literally means &quot;sandy village&quot; in Sinhala, perfectly describing this golden-sand haven.
            </p>
            <p className="text-lg">
              From witnessing the centuries-old art of stilt fishing to learning to surf in gentle bay waters, from exploring private islands accessible at low tide
              to enjoying fresh seafood with ocean views, Weligama offers an authentic Sri Lankan coastal experience that perfectly balances cultural heritage with tropical relaxation.
              Unlike crowded tourist hotspots, Weligama retains its authentic fishing village charm while providing world-class facilities for travelers.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Weligama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Southern Coast, 150km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fish className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> Stilt Fishermen & Surfing
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Weather:</strong> November to April
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Surf Season:</strong> November to April
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Must-See:</strong>  Island
                    </span>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 2-3 days
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to  */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Waligama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 180km (112 miles) from Colombo (Depends on the road Express way or coastal road)</li>
                      <li>• <strong>Duration:</strong> 4-5 hours</li>
                      <li>• <strong>Cost:</strong> Around $60 USD</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Waligama. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                      <li>• <strong>Route:</strong> Colombo → Waligama</li>
                      <li>• <strong>Duration:</strong> 6-7 hours total</li>
                      <li>• <strong>Cost:</strong> $3-12 USD (depending on class)</li>
                      <li>• <strong>Note:</strong> Get off at <span className="font-semibold text-blue-600 dark:text-blue-400">Waligama station</span></li>
                      {/* <li>• <strong>From Nanu Oya:</strong> 8km taxi/tuk-tuk ride to Nuwara Eliya</li> */}
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Waligama</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $4-6 USD (budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Regular departures from Kandy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Stilt Fishermen */}
        <section className="mb-12 scroll-mt-24" id="stilt-fishermen">
          <h2 className="text-3xl font-bold mb-6">World-Famous Stilt Fishermen Tradition</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Stilt-fishing.jpg"
                alt="Traditional stilt fishermen of Weligama balancing on wooden poles in shallow coral reef waters during golden hour sunset"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Stilt fishing: A centuries-old tradition unique to this region
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Weligama is home to one of the world&apos;s most unique and photogenic fishing traditions. The iconic stilt fishermen perch gracefully on tall wooden stilts
                driven deep into the coral reef, fishing with simple rods in a technique passed down through generations since World War II. This remarkable method was originally
                developed to fish in the best spots without disturbing other fishermen or damaging the delicate coral ecosystem.
              </p>
              <p>
                The best time to witness this fascinating tradition is during early morning (6-8 AM) or late afternoon (4-6 PM) when
                the fishermen are most active and the golden light creates perfect photography conditions. This practice has become one of Sri Lanka&apos;s most photographed cultural experiences,
                representing the harmony between humans and nature that defines coastal Sri Lankan life.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Photography & Etiquette Tips:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Visit during golden hour (6-8 AM or 4-6 PM) for best lighting</li>
                  <li>• Always ask permission before photographing - respect is key</li>
                  <li>• Small tip (500-1000 LKR) is appreciated and expected</li>
                  <li>• Best viewing spots along Weligama Bay main beach road</li>
                  <li>• Don&apos;t disturb the fishermen while they&apos;re working</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12 scroll-mt-24" id="attractions">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Weligama</h2>

          <div className="space-y-8">
            {/* Snake Island */}
            <Card>
              <CardHeader>
                <CardTitle>1. Taprobane Island</CardTitle>
                <CardDescription>Private island villa accessible during low tide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Waligama-Snake-Island.jpeg",
                        alt: "Aerial view of Snake Island Taprobane",
                        caption: "Snake Island with its colonial villa",
                        title: "Snake Island from Above"
                      },
                      {
                        src: "/Waligama-Snake-Island1.jpeg",
                        alt: "Sandy causeway connecting Snake Island to mainland",
                        caption: "Low tide reveals the magical sand path",
                        title: "Snake Island Causeway"
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This tiny private island becomes accessible during low tide when a narrow strip of sand emerges like magic,
                      connecting it to the mainland. The island features a stunning colonial-style villa built in the 1920s and has hosted
                      famous guests including Kylie Minogue, Russell Crowe, and various international celebrities seeking privacy and luxury.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Accessible only during low tide (check tide times)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic colonial villa with celebrity guest history
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for photography and sunset views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Free to visit beach area (respect private property)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weligama Bay Beach */}
            <Card>
              <CardHeader>
                <CardTitle>2. Weligama Bay Beach</CardTitle>
                <CardDescription>Protected bay perfect for swimming and surfing lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/IMG_8209.jpg",
                        alt: "Aerial view of Snake Island Taprobane",
                        caption: "Snake Island with its colonial villa",
                        title: "Snake Island from Above"
                      },
                      {
                        src: "/Waligama-Bay-Beach.jpg",
                        alt: "Sandy causeway connecting Snake Island to mainland",
                        caption: "Low tide reveals the magical sand path",
                        title: "Snake Island Causeway"
                      },
                      {
                        src: "/Snake-Island-Villa.jpg",
                        alt: "Colonial villa on Snake Island",
                        caption: "Historic colonial-era villa on the island",
                        title: "Snake Island Villa"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This beautiful crescent-shaped bay stretches for over 2 kilometers and provides natural protection from ocean swells,
                      making it one of the safest swimming beaches on the south coast. The bay is also renowned as Sri Lanka&apos;s premier destination for beginner surfers
                      with its gentle, consistent waves and sandy bottom that make learning safe and enjoyable.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Safe swimming with natural wave protection
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect beginner surfing conditions year-round
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colorful traditional fishing boats add charm
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Family-friendly with shallow areas for children
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Fish Market */}
            <Card>
              <CardHeader>
                <CardTitle>3. Weligama Fish Market</CardTitle>
                <CardDescription>Authentic cultural experience with daily fresh catch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Experience authentic local life at the bustling fish market where local fishermen bring their daily catch around dawn.
                      This vibrant market offers one of the most genuine cultural experiences on the south coast, providing insights into traditional
                      Sri Lankan coastal life and the freshest seafood you&apos;ll find anywhere on the island.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best visited early morning (6-9 AM) for fresh catch
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic local cultural experience
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh tuna, snapper, and various tropical fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Free to visit, ask permission for photos respectfully
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Waligama-Snake-Island.jpeg",
                        alt: "Aerial view of Snake Island Taprobane",
                        caption: "Snake Island with its colonial villa",
                        title: "Snake Island from Above"
                      },
                      {
                        src: "/Snake-Island-Causeway.jpg",
                        alt: "Sandy causeway connecting Snake Island to mainland",
                        caption: "Low tide reveals the magical sand path",
                        title: "Snake Island Causeway"
                      },
                      {
                        src: "/Snake-Island-Villa.jpg",
                        alt: "Colonial villa on Snake Island",
                        caption: "Historic colonial-era villa on the island",
                        title: "Snake Island Villa"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Surfing Paradise */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sri Lanka&apos;s Premier Beginner Surfing Destination</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-muted-foreground mb-4">
                Weligama is globally recognized as one of Sri Lanka&apos;s best destinations for learning to surf. The protected bay
                offers gentle, consistent waves perfect for beginners, with over 20 professional surf schools providing expert lessons and quality equipment.
                The sandy bottom and calm conditions make it an ideal and safe environment for first-time surfers of all ages.
              </p>
              <p className="text-muted-foreground mb-4">
                Advanced surfers can also find exciting challenges at nearby breaks like Lazy Left and Lazy Right. The surf season
                runs from November to April, with the best conditions typically found early morning (6-9 AM) when offshore winds create perfect wave formations
                and the water is glass-like smooth.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Surf Information & Prices:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Perfect 1-3 foot waves ideal for beginners</li>
                  <li>• Over 20 certified surf schools with experienced instructors</li>
                  <li>• Lessons: 2000-4000 LKR, Board rental: 1000-1500 LKR/day</li>
                  <li>• Best conditions: Early morning, November-April season</li>
                  <li>• Safe sandy bottom, no dangerous rocks or currents</li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Surfing lessons at Weligama Bay with beginner surfers learning on gentle waves with instructor guidance"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Weligama Bay: Sri Lanka&apos;s premier beginner-friendly surf destination
              </p>
            </div>
          </div>

          {/* Detailed Surf Schools */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Top Surf Schools in Weligama</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Surf Schools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-800">Weligama Bay Surf School</h4>
                      <p className="text-sm text-muted-foreground">International instructors, all skill levels</p>
                      <p className="text-xs text-blue-600">Group lessons: 3000 LKR | Private: 5000 LKR</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">Coconut Tree Academy</h4>
                      <p className="text-sm text-muted-foreground">Local instructors, authentic experience</p>
                      <p className="text-xs text-green-600">Group lessons: 2500 LKR | Private: 4000 LKR</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-800">Surf Villa Academy</h4>
                      <p className="text-sm text-muted-foreground">Professional coaching, video analysis</p>
                      <p className="text-xs text-purple-600">Group lessons: 3500 LKR | Private: 6000 LKR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Surf Conditions & Timing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Waves className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold">Wave Height</p>
                        <p className="text-sm text-muted-foreground">1-3 feet (perfect for beginners)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-semibold">Best Time</p>
                        <p className="text-sm text-muted-foreground">6:00 AM - 9:00 AM & 4:00 PM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-semibold">Peak Season</p>
                        <p className="text-sm text-muted-foreground">December - March (consistent conditions)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="font-semibold">Safety</p>
                        <p className="text-sm text-muted-foreground">Sandy bottom, no rocks, lifeguards on duty</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Cuisine & Seafood */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weligama&apos;s Culinary Delights & Fresh Seafood</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-muted-foreground mb-4">
                Weligama&apos;s coastal location provides access to some of Sri Lanka&apos;s freshest seafood, caught daily by local fishermen using traditional methods.
                The town&apos;s authentic fishing village atmosphere means you&apos;ll find genuine local flavors without tourist markup. From spicy fish curries to grilled prawns
                and fresh tuna steaks, the culinary scene here represents authentic southern Sri Lankan coastal cuisine at its finest.
              </p>
              <p className="text-muted-foreground mb-4">
                The local specialty is &quot;ambul thiyal&quot; (sour fish curry) made with fresh tuna and goraka (a local souring agent),
                served with coconut rice and spicy sambols. Evening beach barbecues featuring freshly caught fish, prawns, and squid are a highlight that shouldn&apos;t be missed.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Must-Try Local Dishes:</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Ambul Thiyal (sour tuna curry) - signature southern dish</li>
                  <li>• Grilled red snapper with spicy coconut sambol</li>
                  <li>• Fresh prawns in coconut milk curry</li>
                  <li>• Fish kottu roti with locally caught tuna</li>
                  <li>• Coconut treacle pancakes for dessert</li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fresh seafood display at Weligama market showing tuna, snapper, prawns and local fish with traditional vendors"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Fresh daily catch: Authentic seafood straight from Weligama Bay
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Beachfront Dining</CardTitle>
                <CardDescription>Restaurants with ocean views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-blue-800">Zephyr Restaurant</h4>
                    <p className="text-sm text-muted-foreground">Upscale dining with sunset views</p>
                    <p className="text-xs text-blue-600">Fresh seafood platter: 2500-4000 LKR</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Bay Watch Restaurant</h4>
                    <p className="text-sm text-muted-foreground">Casual dining on the sand</p>
                    <p className="text-xs text-blue-600">Grilled fish meals: 1200-2000 LKR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Local Eateries</CardTitle>
                <CardDescription>Authentic village restaurants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-800">Mama&apos;s Kitchen</h4>
                    <p className="text-sm text-muted-foreground">Traditional rice & curry</p>
                    <p className="text-xs text-green-600">Full meal: 500-800 LKR</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Fisherman&apos;s Rest</h4>
                    <p className="text-sm text-muted-foreground">Fresh catch daily specials</p>
                    <p className="text-xs text-green-600">Fish curry meal: 600-1000 LKR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beach Bars & Cafes</CardTitle>
                <CardDescription>Relaxed dining & drinks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-purple-800">Coconut Cafe</h4>
                    <p className="text-sm text-muted-foreground">Healthy smoothies & salads</p>
                    <p className="text-xs text-purple-600">Fresh juices: 300-500 LKR</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">Surf Station</h4>
                    <p className="text-sm text-muted-foreground">Post-surf breakfast bowls</p>
                    <p className="text-xs text-purple-600">Acai bowls: 800-1200 LKR</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Authentic Cultural Experiences</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Traditional Fishing Village Tour</CardTitle>
                <CardDescription>Immerse yourself in authentic coastal life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Join local fishermen for an authentic experience of traditional coastal life. Early morning tours (5:30 AM) allow you to witness
                      the daily fish market activity, learn about traditional fishing methods, and understand the cultural significance of stilt fishing.
                      Many tours include a traditional breakfast with a fishing family and stories passed down through generations.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Early morning fish market visit (5:30-7:00 AM)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional fishing boat ride with locals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic village breakfast with fishing families
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn stilt fishing techniques and cultural history
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>Duration:</strong> 3-4 hours | <strong>Cost:</strong> 2000-3000 LKR per person</p>
                      <p className="text-xs text-blue-600 mt-1">Book through local guesthouses or contact fishermen directly</p>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Local fishermen preparing traditional fishing nets and boats at dawn in Weligama village"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spice Garden & Cooking Class</CardTitle>
                <CardDescription>Learn authentic Sri Lankan coastal cuisine</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional Sri Lankan cooking class showing spices, coconut grating and curry preparation"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Learn to prepare authentic southern Sri Lankan dishes in a traditional village setting. Classes include visits to local spice gardens,
                      coconut grating demonstrations, and hands-on cooking of fish curries, sambols, and traditional desserts.
                      Perfect for understanding the cultural significance of food in coastal communities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional spice garden tour and explanation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on cooking of 4-5 traditional dishes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn coconut grating and milk extraction
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Enjoy the meal you prepared with recipe cards
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Duration:</strong> 4-5 hours | <strong>Cost:</strong> 3500-5000 LKR per person</p>
                      <p className="text-xs text-green-600 mt-1">Includes all ingredients, recipes, and the meal you cook</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wildlife & Nature */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wildlife & Nature Around Weligama</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Marine Life & Snorkeling</CardTitle>
                <CardDescription>Discover rich underwater ecosystems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Weligama Bay&apos;s coral reefs and rocky outcrops provide excellent snorkeling opportunities with visibility up to 15 meters during calm weather.
                      The protected bay harbors diverse marine life including colorful reef fish, sea turtles, and occasionally dolphins.
                      The area around Snake Island offers the best underwater experiences with shallow coral gardens perfect for beginners.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Green sea turtles frequent feeding in seagrass beds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 50 species of tropical reef fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spinner dolphins often spotted in deeper waters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best visibility: Early morning & late afternoon
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800"><strong>Snorkel gear rental:</strong> 500-800 LKR/day</p>
                      <p className="text-xs text-blue-600 mt-1">Guided snorkeling tours: 2000-3500 LKR (includes equipment & boat)</p>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Underwater view of Weligama Bay showing coral reefs, tropical fish and sea turtles in clear blue water"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bird Watching & Coastal Wildlife</CardTitle>
                <CardDescription>Rich avian diversity in coastal ecosystems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Various coastal birds including kingfishers, herons and sea eagles around Weligama mangroves and lagoons"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The diverse coastal habitat around Weligama supports over 80 bird species, making it excellent for bird watching.
                      Mangrove areas near the Polwatta lagoon (15 minutes away) host water birds, while coconut plantations attract endemic species.
                      Early morning walks along the coastline offer sightings of fishing eagles, kingfishers, and various shorebirds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        White-bellied sea eagles (often seen fishing)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Common & white-throated kingfishers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Little green herons & cattle egrets
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Endemic Sri Lanka grey hornbill in coconut groves
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Best time:</strong> 6:00-8:00 AM & 4:30-6:00 PM</p>
                      <p className="text-xs text-green-600 mt-1">Binocular rental: 500 LKR/day | Guided tours: 2500 LKR</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Polwatta Mangrove Sanctuary</CardTitle>
                <CardDescription>Unique ecosystem boat safari experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 15 minutes from Weligama, the Polwatta mangrove sanctuary offers boat safaris through pristine mangrove tunnels.
                      This unique ecosystem supports diverse wildlife including water monitors, crocodiles, and numerous bird species.
                      The peaceful boat ride through narrow waterways provides excellent photography opportunities and environmental education about coastal conservation.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional boat safari through mangrove tunnels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water monitor lizards & estuarine crocodiles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Mangrove conservation education programs
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional cinnamon peeling demonstrations
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800"><strong>Duration:</strong> 2-3 hours | <strong>Cost:</strong> 1500-2500 LKR per person</p>
                      <p className="text-xs text-purple-600 mt-1">Includes boat ride, guide, and refreshments</p>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional boat navigating through lush mangrove tunnels with overhanging branches in Polwatta sanctuary"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Adventure Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Adventure Activities & Water Sports</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Stand-Up Paddleboarding (SUP)</CardTitle>
                <CardDescription>Perfect calm water conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Weligama Bay&apos;s protected waters provide ideal conditions for stand-up paddleboarding. The calm morning conditions (6-9 AM)
                    offer glass-like water perfect for beginners, while the bay&apos;s scenic coastline with stilt fishermen creates a unique SUP experience found nowhere else in the world.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-blue-800">Rental Rates:</p>
                      <p className="text-muted-foreground">SUP Board: 1000-1500 LKR/hour</p>
                      <p className="text-muted-foreground">Full day: 3000-4000 LKR</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Lessons:</p>
                      <p className="text-muted-foreground">Beginner lesson: 2000 LKR</p>
                      <p className="text-muted-foreground">Group lesson: 1500 LKR/person</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kayaking & Canoe Tours</CardTitle>
                <CardDescription>Explore coastline and lagoons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Explore Weligama&apos;s diverse waterways by kayak, from the protected bay to nearby river mouths and lagoons.
                    Sunset kayaking tours are particularly popular, offering stunning views of the stilt fishermen silhouetted against golden skies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-blue-800">Equipment Rental:</p>
                      <p className="text-muted-foreground">Single kayak: 800-1200 LKR/hour</p>
                      <p className="text-muted-foreground">Double kayak: 1200-1800 LKR/hour</p>
                    </div>
                    <div>
                      <p className="font-semibold text-orange-800">Guided Tours:</p>
                      <p className="text-muted-foreground">Sunset tour: 2500 LKR/person</p>
                      <p className="text-muted-foreground">Mangrove tour: 3000 LKR/person</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deep Sea Fishing</CardTitle>
                <CardDescription>Traditional fishing boat excursions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Join local fishermen on traditional outrigger boats for deep sea fishing experiences. Target species include tuna, snapper, barracuda, and seasonal catches.
                    Half-day and full-day excursions available with the option to cook your catch beachside.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-blue-800">Half-day (4 hours):</span>
                      <span className="text-muted-foreground">4000-6000 LKR/person</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-blue-800">Full-day (8 hours):</span>
                      <span className="text-muted-foreground">8000-12000 LKR/person</span>
                    </div>
                    <p className="text-xs text-green-600 mt-2">Includes: Boat, equipment, bait, and cooking service</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Whale & Dolphin Watching</CardTitle>
                <CardDescription>Seasonal marine mammal encounters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    While Mirissa is the main whale watching hub, Weligama offers excellent dolphin watching opportunities year-round.
                    Spinner dolphins are frequently spotted in the bay, and during whale season (December-April), trips to deeper waters may encounter blue whales.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-800">Dolphin watching:</span>
                      <span className="text-muted-foreground">2000-3000 LKR/person</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-800">Whale watching:</span>
                      <span className="text-muted-foreground">4000-6000 LKR/person</span>
                    </div>
                    <p className="text-xs text-blue-600 mt-2">Best months: December-April | Early morning departures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>



        {/* Nearby Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Waligama adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Mirissa.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  20 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Mirissa</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Mirissa is famous for its whale watching tours and stunning beaches. Enjoy a relaxing day by the sea or embark on an exciting marine adventure.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  7.5 km from Waligama
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mirissa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Hirikatiya.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1 hour
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hirikatiya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Hiriketiya is a hidden gem known for its excellent surfing conditions and laid-back atmosphere. Perfect for both beginners and experienced surfers.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  39 km from Waligama
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hirikatiya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/galle-fort-sarmat-batagov-unsplash.jpg"
                  alt="Galle Fort with its iconic lighthouse and ramparts"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  45 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Galle Fort</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A UNESCO World Heritage Site, Galle Fort is known for its well-preserved colonial architecture and stunning ocean views.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  29 km from Waligama
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/galle-fort" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Unawatuna.jpg"
                  alt="Unawatuna beach and surrounding landscapes"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1 hour
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Unawatuna</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Unawatuna offers a perfect blend of relaxation and adventure with its golden beaches, coral reefs, and vibrant nightlife.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  30 km from Waligama
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/unawatuna" passHref legacyBehavior>
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
        {/* Shopping & Local Markets */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shopping & Local Markets</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Local Handicrafts & Souvenirs</CardTitle>
                <CardDescription>Authentic local products and traditional crafts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Weligama offers authentic shopping experiences focused on local handicrafts and traditional products.
                      Unlike touristy areas, prices here reflect local markets, and you&apos;ll find genuine handmade items crafted by local artisans.
                      The town is particularly known for wooden stilt fishing miniatures, handwoven textiles, and traditional masks.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Handcrafted wooden stilt fishermen sculptures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional Sri Lankan masks & devil dance costumes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Handwoven textiles & batik clothing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Local spices & coconut-based products
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800"><strong>Best shopping areas:</strong> Main Road markets & beachfront stalls</p>
                      <p className="text-xs text-orange-600 mt-1">Bargaining expected | Cash preferred | Best prices before 10 AM</p>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Local handicrafts market in Weligama showing wooden carvings, textiles, masks and traditional Sri Lankan souvenirs"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fresh Produce & Spice Markets</CardTitle>
                <CardDescription>Authentic local market experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Colorful spice market in Weligama with vendors selling cinnamon, pepper, turmeric and fresh tropical fruits"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The weekly market (every Wednesday & Saturday) transforms the town center into a bustling hub of local commerce.
                      Experience authentic Sri Lankan market culture while shopping for fresh tropical fruits, aromatic spices, and local specialties.
                      This is where locals shop, offering genuine prices and authentic cultural interaction.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh tropical fruits: mango, papaya, rambutan, dragon fruit
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        High-quality spices: cinnamon, black pepper, cardamom
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh coconut products: oil, milk, dried coconut
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional sweets & local snacks
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800"><strong>Market days:</strong> Wednesday & Saturday, 6:00 AM - 12:00 PM</p>
                      <p className="text-xs text-green-600 mt-1">Bring cash | Early morning best selection | Learn local names</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Shops</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-800">Stilt Art Gallery</h4>
                      <p className="text-muted-foreground">Authentic stilt fishermen artwork</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Coconut Crafts</h4>
                      <p className="text-muted-foreground">Handmade coconut products</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Spice Garden Shop</h4>
                      <p className="text-muted-foreground">Fresh local spices & teas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Price Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Stilt fishermen carving:</span>
                      <span className="text-muted-foreground">500-2000 LKR</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Traditional mask:</span>
                      <span className="text-muted-foreground">800-3000 LKR</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cinnamon (100g):</span>
                      <span className="text-muted-foreground">200-400 LKR</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Batik sarong:</span>
                      <span className="text-muted-foreground">1000-2500 LKR</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shopping Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      Bargaining is expected and welcomed
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      Cash payment gets better prices
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      Quality varies - inspect carefully
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      Ask about shipping for larger items
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Accommodation Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Accommodation Guide</h2>
          <div className="space-y-8">
            {/* Luxury Resorts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-blue-500" />
                  Luxury Resorts & Hotels
                </CardTitle>
                <CardDescription>Premium accommodations with world-class facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-800">Weligama Bay Marriott Resort & Spa</h4>
                      <p className="text-sm text-muted-foreground mb-2">Five-star beachfront resort with full amenities</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Multiple restaurants & bars with ocean views</li>
                        <li>• Full-service spa & infinity pool</li>
                        <li>• Direct beach access & water sports center</li>
                        <li>• Kids club & family-friendly facilities</li>
                      </ul>
                      <p className="text-xs text-blue-600 mt-2">25,000-40,000 LKR/night | Includes breakfast</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">Mandara Resort</h4>
                      <p className="text-sm text-muted-foreground mb-2">Boutique luxury with authentic Sri Lankan design</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Traditional architecture with modern amenities</li>
                        <li>• Ayurvedic spa treatments</li>
                        <li>• Organic restaurant & cooking classes</li>
                        <li>• Yoga pavilion & meditation gardens</li>
                      </ul>
                      <p className="text-xs text-green-600 mt-2">15,000-25,000 LKR/night | Half-board available</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-800">Cape Weligama Resort</h4>
                      <p className="text-sm text-muted-foreground mb-2">Clifftop luxury with panoramic ocean views</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Private villas with infinity pools</li>
                        <li>• Multiple dining venues & cocktail bars</li>
                        <li>• Golf course & tennis court</li>
                        <li>• Personal butler service available</li>
                      </ul>
                      <p className="text-xs text-purple-600 mt-2">40,000-80,000 LKR/night | Luxury villa suites</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Luxury Resort Features:</h5>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>• Air conditioning & WiFi included</li>
                        <li>• 24/7 room service & concierge</li>
                        <li>• Airport transfer services available</li>
                        <li>• Multi-cuisine restaurants on-site</li>
                        <li>• Swimming pools & beach access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mid-Range Hotels */}
            <Card>
              <CardHeader>
                <CardTitle>Mid-Range Hotels & Boutique Properties</CardTitle>
                <CardDescription>Quality accommodations with character and comfort</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-800">Boutique Beach Hotels</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">Surf Villa Weligama</p>
                        <p className="text-muted-foreground">Surfer-friendly with board storage</p>
                        <p className="text-xs text-green-600">8,000-15,000 LKR/night</p>
                      </div>
                      <div>
                        <p className="font-medium">Weligama Bay View Hotel</p>
                        <p className="text-muted-foreground">Bay views & swimming pool</p>
                        <p className="text-xs text-green-600">6,000-12,000 LKR/night</p>
                      </div>
                      <div>
                        <p className="font-medium">Coconut Garden Beach Resort</p>
                        <p className="text-muted-foreground">Garden setting, family-run</p>
                        <p className="text-xs text-green-600">5,000-9,000 LKR/night</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-800">Eco-Friendly Options</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">Green Garden Hotel</p>
                        <p className="text-muted-foreground">Solar power & organic food</p>
                        <p className="text-xs text-blue-600">4,500-8,000 LKR/night</p>
                      </div>
                      <div>
                        <p className="font-medium">Sustainable Surf Lodge</p>
                        <p className="text-muted-foreground">Eco-conscious with reef protection</p>
                        <p className="text-xs text-blue-600">6,000-10,000 LKR/night</p>
                      </div>
                      <div>
                        <p className="font-medium">Nature Villa Weligama</p>
                        <p className="text-muted-foreground">Permaculture garden setting</p>
                        <p className="text-xs text-blue-600">5,500-9,500 LKR/night</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-800">Features Included</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Air conditioning or ceiling fans</li>
                      <li>• Private bathrooms with hot water</li>
                      <li>• Complimentary WiFi</li>
                      <li>• Daily housekeeping</li>
                      <li>• Restaurant or breakfast service</li>
                      <li>• Beach equipment rental</li>
                      <li>• Tour booking assistance</li>
                      <li>• Motorbike/bicycle rental</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Budget Accommodations */}
            <Card>
              <CardHeader>
                <CardTitle>Budget-Friendly Stays</CardTitle>
                <CardDescription>Affordable options without compromising on cleanliness and safety</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">Guesthouses & Family Stays</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-2 border-purple-300 pl-3">
                          <p className="font-medium">Fisherman&apos;s Rest Guesthouse</p>
                          <p className="text-muted-foreground">Local family-run, authentic experience</p>
                          <p className="text-xs text-purple-600">2,000-4,000 LKR/night | Meals available</p>
                        </div>
                        <div className="border-l-2 border-purple-300 pl-3">
                          <p className="font-medium">Bay Breeze Guesthouse</p>
                          <p className="text-muted-foreground">Clean rooms, shared/private bathrooms</p>
                          <p className="text-xs text-purple-600">2,500-5,000 LKR/night | Breakfast included</p>
                        </div>
                        <div className="border-l-2 border-purple-300 pl-3">
                          <p className="font-medium">Coconut Grove Family Stay</p>
                          <p className="text-muted-foreground">Traditional home stay experience</p>
                          <p className="text-xs text-purple-600">1,800-3,500 LKR/night | All meals available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-3">Backpacker Hostels</h4>
                      <div className="space-y-3 text-sm">
                        <div className="border-l-2 border-orange-300 pl-3">
                          <p className="font-medium">Surf Hostel Weligama</p>
                          <p className="text-muted-foreground">Dorms & private rooms, social atmosphere</p>
                          <p className="text-xs text-orange-600">1,500-3,000 LKR/night | Kitchen access</p>
                        </div>
                        <div className="border-l-2 border-orange-300 pl-3">
                          <p className="font-medium">Beach Backpackers</p>
                          <p className="text-muted-foreground">Budget dorms, communal areas</p>
                          <p className="text-xs text-orange-600">1,200-2,500 LKR/night | Shared facilities</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-800 mb-2">Budget Travel Tips:</h5>
                      <ul className="text-xs text-yellow-700 space-y-1">
                        <li>• Book directly for better rates</li>
                        <li>• Negotiate for longer stays (3+ nights)</li>
                        <li>• Ask about meal packages</li>
                        <li>• Check what&apos;s included (WiFi, towels, etc.)</li>
                        <li>• Monsoon season offers lowest prices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Original Practical Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Services & Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-blue-500" />
                  Where to Stay in Weligama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800">Luxury Resorts</h4>
                    <p className="text-sm text-muted-foreground">Weligama Bay Marriott Resort & Spa (25,000-40,000 LKR/night)</p>
                    <p className="text-sm text-muted-foreground">Mandara Resort (15,000-25,000 LKR/night)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Boutique Hotels</h4>
                    <p className="text-sm text-muted-foreground">Surf Villa Weligama (8,000-15,000 LKR/night)</p>
                    <p className="text-sm text-muted-foreground">Weligama Bay View Hotel (6,000-12,000 LKR/night)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">Budget Friendly</h4>
                    <p className="text-sm text-muted-foreground">Local guesthouses (2,000-5,000 LKR/night)</p>
                    <p className="text-sm text-muted-foreground">Backpacker hostels (1,500-3,000 LKR/night)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-orange-500" />
                  Where to Eat in Weligama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800">Fine Dining</h4>
                    <p className="text-sm text-muted-foreground">Zephyr Restaurant (seafood specialties)</p>
                    <p className="text-sm text-muted-foreground">Marriott Resort restaurants (international cuisine)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Local Cuisine</h4>
                    <p className="text-sm text-muted-foreground">Beachside cafes with authentic rice & curry</p>
                    <p className="text-sm text-muted-foreground">Fresh fish grills at local eateries</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">Healthy Options</h4>
                    <p className="text-sm text-muted-foreground">Surf Station Cafe (smoothie bowls & fresh juices)</p>
                    <p className="text-sm text-muted-foreground">Coconut Cafe (vegan & vegetarian options)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Weligama Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Best Time to Visit Weligama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>November to April:</strong> Perfect weather and surf conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>December to March:</strong> Peak tourist season with ideal conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>Early morning:</strong> Best light for photography and fewer crowds
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <strong>May to October:</strong> Monsoon season, fewer tourists, lower prices
                  </li>
                </ul>
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
                    Always ask permission before photographing local fishermen
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Check tide times before visiting Snake Island
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Negotiate tuk-tuk prices before starting your journey
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Apply strong sunscreen - tropical sun is intense
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Local Transportation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Around Weligama</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Car className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <h4 className="font-semibold mb-2">Tuk-Tuk</h4>
                <p className="text-sm text-muted-foreground">300-500 LKR for short distances</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <h4 className="font-semibold mb-2">Motorbike</h4>
                <p className="text-sm text-muted-foreground">1500-2500 LKR/day rental</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <TreePalm className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <h4 className="font-semibold mb-2">Bicycle</h4>
                <p className="text-sm text-muted-foreground">800-1200 LKR/day rental</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                <h4 className="font-semibold mb-2">Walking</h4>
                <p className="text-sm text-muted-foreground">Main attractions within 2km</p>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </main>
  )
}
