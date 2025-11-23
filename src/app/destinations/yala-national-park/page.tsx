"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TelescopeIcon as Binoculars, AlertTriangle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Button } from "@/components/ui/button"



export default function YalaNationalParkTravelGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Yala-national-park.jpg"
          alt="Majestic Sri Lankan leopard resting on a rock in Yala National Park with safari jeep in background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Yala National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka’s Premier Wildlife Safari Destination</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern & Uva Provinces
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Binoculars className="w-4 h-4 mr-1" />
              Highest Leopard Density in the World
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Calendar className="w-4 h-4 mr-1" />
              Established 1938
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Yala: The Leopard Capital of the World</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Get ready for the wildlife adventure of a lifetime! Yala National Park is Sri Lanka’s most visited and
              second-largest national park, famous for having the highest density of leopards in the world. This
              979-square-kilometer wilderness sanctuary is home to an incredible diversity of wildlife, from majestic
              elephants and elusive leopards to colorful birds and ancient ruins.
            </p>
            <p className="text-lg">
              Whether you&apos;re a wildlife photographer, nature enthusiast, or adventure seeker, Yala offers an
              unforgettable safari experience where every game drive brings the possibility of extraordinary wildlife
              encounters in one of Asia&apos;s most biodiverse ecosystems.
            </p>
          </div>
        </section>
        {/* Quick Facts */}
        <section className="mb-12">
          {/* Quick Facts & How to Get There side by side */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
            {/* Quick Yala Facts */}
            <section className="flex-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Quick Yala National Park Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong> Established:</strong> 1938 (Sri Lanka’s first national park)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Area:</strong> 979 km² (378 sq miles)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Binoculars className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Leopard Population:</strong> ~35-40 individuals
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-500" />
                      <span>
                        <strong>Annual Visitors:</strong> ~500,000
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>Best Safari Time:</strong> 6:00 AM & 2:30 PM
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Safari Duration:</strong> 3-4 hours per game drive
                      </span>
                    </div>
                  </div>
                  {/* Valuable Fact for Desktop */}
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Plan to visit weekdays to avoid crowds in weekends</li>
                      <li>• Start early morning to avoid traffic and heat</li>
                      <li>• Bring binoculars for better wildlife viewing</li>
                      <li>• Don&apos;t feed the animals during the safari</li>
                      <li>• Carry water and snacks for the journey</li>
                      <li>• Book accommodations in advance during peak season</li>
                      <li>• Consider staying overnight to explore all sites properly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
            {/* How to Get to Yala */}
            <section className="flex-1">
              <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <MapPin className="w-5 h-5" />
                    How to Get to Yala National Park
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
                          <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Anuradhapura. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Route:</strong> Colombo Fort → Thissamaharama</li>
                        <li>• <strong>Duration:</strong> 5-6 hours</li>
                        <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                        <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li>
                      </ul>


                    </div>
                  </div>

                </CardContent>
              </Card>
            </section>
          </div>
        </section>

        {/* How to Get In */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">How to Get In</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Entry Points & Getting There
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Main Entry Gates:</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h5 className="font-semibold text-green-700 dark:text-green-400">Palatupana Gate (Block 1)</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Main Entrance:</strong> Most popular access point</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Facilities:</strong> Ticket office, information center, restrooms, safari jeep arrangements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Best For:</strong> First-time visitors, highest wildlife density, best infrastructure</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h5 className="font-semibold text-blue-700 dark:text-blue-400">Katagamuwa Gate (Block 2)</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            <span><strong>Less Crowded:</strong> Quieter alternative to Palatupana</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            <span><strong>Facilities:</strong> Basic ticket counter, limited restrooms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            <span><strong>Best For:</strong> Bird watching, peaceful safari experience, fewer vehicles</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4 py-2">
                        <h5 className="font-semibold text-orange-700 dark:text-orange-400">Galge Gate (Block 5)</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span><strong>Alternative Access:</strong> Special permit required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span><strong>Facilities:</strong> Minimal facilities, advance booking essential</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span><strong>Best For:</strong> Experienced wildlife enthusiasts, wilderness experience</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Transportation Routes:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>From Katunayake Airport:</strong> 295km, 6-7 hours direct</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>From Colombo:</strong> 265km, 5-6 hours by car</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>From Galle:</strong> 140km, 3 hours via Matara</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Nearest Town:</strong> Tissamaharama (7km from park)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="border-blue-300 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-400">
                  <MapPin className="w-5 h-5" />
                  Airport Transfers with Ceylanka Tours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground dark:text-gray-300">
                    <strong>Ceylanka Tours</strong> offers professional airport transfer services from Katunayake International Airport directly to Yala National Park, ensuring a comfortable and hassle-free journey.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-400">Transfer Options:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                        <li>• <strong>Direct Transfer:</strong> Airport to Yala (6-7 hours)</li>
                        <li>• <strong>Overnight Stop:</strong> Airport → Colombo → Yala next day</li>
                        <li>• <strong>Southern Coastal Route:</strong> Via Galle for sightseeing</li>
                        <li>• <strong>Multi-destination:</strong> Combined with other attractions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-400">Service Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                        <li>• Air-conditioned vehicles</li>
                        <li>• English-speaking drivers</li>
                        <li>• Airport pickup with name board</li>
                        <li>• Refreshment stops included</li>
                        <li>• 24/7 customer support</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="font-semibold text-blue-800 dark:text-blue-400">Economy Car</p>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">1-3 passengers</p>
                        <p className="font-medium">$120-150</p>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800 dark:text-blue-400">Van/SUV</p>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">4-8 passengers</p>
                        <p className="font-medium">$180-220</p>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800 dark:text-blue-400">Luxury Vehicle</p>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">1-4 passengers</p>
                        <p className="font-medium">$250-300</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* <Card className="border-green-300 bg-green-50/30 dark:border-green-600 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-400">
                  <Star className="w-5 h-5" />
                  Complete Safari Packages with Ceylanka Tours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground dark:text-gray-300">
                    Book your complete Yala experience with <strong>Ceylanka Tours</strong> - from airport pickup to safari adventures, we handle everything for your perfect Sri Lankan wildlife experience.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-800 dark:text-green-400">Why Choose Us:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                        <li>• Airport transfers &amp; transportation</li>
                        <li>• Expert safari guides (10+ years experience)</li>
                        <li>• Well-maintained 4WD safari vehicles</li>
                        <li>• Small group tours for better wildlife viewing</li>
                        <li>• Photography-focused options</li>
                        <li>• Flexible &amp; customized itineraries</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-800 dark:text-green-400">Complete Package Includes:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                        <li>• Airport pickup &amp; drop-off</li>
                        <li>• Transportation to/from Yala</li>
                        <li>• Park entrance fees &amp; permits</li>
                        <li>• Experienced naturalist guide</li>
                        <li>• Refreshments &amp; bottled water</li>
                        <li>• Binoculars &amp; identification guides</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <p className="text-sm text-muted-foreground dark:text-gray-300 italic">
                      &quot;Ceylanka Tours made our Sri Lanka trip seamless! From the moment we landed at Katunayake Airport to our incredible leopard sightings in Yala, everything was perfectly organized. Highly recommended!&quot;
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-2 font-medium">- Recent Safari Guest</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Park Timings & Entry Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Safari Timings:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Morning Safari:</strong> 6:00 AM - 10:00 AM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Afternoon Safari:</strong> 2:30 PM - 6:30 PM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Advance booking required (especially peak season)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Entry Fees (2025):</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Foreign Adults:</span>
                        <span className="font-medium">$25 USD</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Foreign Children (6-12):</span>
                        <span className="font-medium">$12 USD</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Safari Vehicle:</span>
                        <span className="font-medium">$25 USD</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Service Charge:</span>
                        <span className="font-medium">$6 USD</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wildlife Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Incredible Wildlife You’ll Encounter</h2>

          <div className="space-y-8">
            {/* Sri Lankan Leopards */}
            <Card>
              <CardHeader>
                <CardTitle>1. Sri Lankan Leopards (Panthera pardus kotiya)</CardTitle>
                <CardDescription>The Apex Predators of Yala - Home to World&apos;s Densest Leopard Population</CardDescription>
                <div className="mt-4">
                  <div className="bg-amber-50/50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      The Sri Lankan leopard (Panthera pardus kotiya) is a majestic subspecies endemic to Sri Lanka. As the island&apos; apex predator,
                      it has evolved unique characteristics that set it apart from other leopard subspecies. These powerful cats play a crucial role
                      in maintaining the ecological balance of Yala&apos;s diverse ecosystem. They are very good at climbing trees and often rest on tree branches during the heat of the day.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h5 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Physical Characteristics</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Males: 70-77 kg | Females: 29-35 kg</li>
                          <li>• Larger and more muscular than other Asian leopards</li>
                          <li>• Distinctive rosette patterns unique to Sri Lanka</li>
                          <li>• Powerful build adapted for hunting large prey</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Population Status</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Estimated 700-1000 individuals in Sri Lanka</li>
                          <li>• Yala has world&apos;s highest leopard density</li>
                          <li>• Protected under Sri Lankan law</li>
                          <li>• Listed as endangered species</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">

                  <ImageCarousel
                    images={[
                      //  {
                      //   src: "/Leopard-Mom-Yala.jpg", 
                      //   alt: "Leopard mom with cubs in Yala National Park",
                      //   caption: "Leopard mom with cubs in Yala National Park",
                      //   title: "Leopard Mom",
                      // },
                      {
                        src: "/Srilankanleopard.jpg",
                        alt: "Sri Lankan Leopard in Yala National Park",
                        caption: "Sri Lankan Leopard resting on a tree branch",
                        title: "Sri Lankan Leopard",
                      },
                      {
                        src: "/Leopard-in-Yala.jpg",
                        alt: "Leopard in Yala",
                        caption: "Leopard in Yala",
                        title: "Leopard in Yala",
                      },

                      {
                        src: "/Yala-national-park.jpg",
                        alt: "Whale watching in Mirissa",
                        caption: "Whale watching in Mirissa",
                        title: "Whale Watching",
                      },
                      {
                        src: "/Leopard1.webp",
                        alt: "Leopard in Yala National Park",
                        caption: "Leopard in Yala National Park",
                        title: "Leopard in Yala National Park",
                      },

                      {
                        src: "/Leopard2.webp",
                        alt: "Leopard in Yala National Park",
                        caption: "Leopard in Yala National Park",
                        title: "Leopard in Yala National Park",
                      },
                      {
                        src: "/Leopard3.webp",
                        alt: "Leopard in Yala National Park",
                        caption: "Leopard in Yala National Park",
                        title: "Leopard in Yala National Park",
                      },
                      {
                        src: "/Leopard4.webp",
                        alt: "Leopard in Yala National Park",
                        caption: "Leopard in Yala National Park",
                        title: "Leopard in Yala National Park",
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Yala is world-renowned for its leopard population, with the highest density globally. These
                      magnificent big cats are larger than their African and Asian counterparts, with males weighing up
                      to 77kg. Unlike other leopard populations, Yala’s leopards are often active during daylight.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg mb-10">
                        <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Did you know?</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <div>
                              <p className="mb-4">If you are so lucky you will be see very rare black Sri Lankan Leopards in Yala national park. The mystical black leopards of Yala, also known as melanistic leopards, are one of the rarest and most elusive big cats in the world. This melanistic trait causes Panthera onca (jaguar) as well. These magnificent creatures appear almost entirely black due to a recessive genetic mutation that causes excess melanin production in their coat.</p>
                              <div className="grid md:grid-cols-2 gap-6 items-start">
                                <div>
                                  <Image
                                    src="/Black-leopard.jpeg"
                                    alt="Rare black leopard (melanistic leopard) in Yala National Park"
                                    width={400}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                  />
                                </div>
                                <div>
                                  <ul className="text-sm space-y-3">
                                    <li className="flex items-start gap-2">
                                      <span className="text-amber-500 mt-1">•</span>
                                      <div>
                                        <strong className="text-amber-700 dark:text-amber-400">Unique Pattern:</strong>
                                        <p>Their rosette patterns are still visible in bright sunlight, appearing as dark spots against their jet-black coat</p>
                                      </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-amber-500 mt-1">•</span>
                                      <div>
                                        <strong className="text-amber-700 dark:text-amber-400">Genetic Marvel:</strong>
                                        <p>Melanism occurs in about 11% of leopards globally, but is extremely rare in Sri Lanka</p>
                                      </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-amber-500 mt-1">•</span>
                                      <div>
                                        <strong className="text-amber-700 dark:text-amber-400">Hunting Advantage:</strong>
                                        <p>Their dark coloration provides superior camouflage during nighttime hunting</p>
                                      </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-amber-500 mt-1">•</span>
                                      <div>
                                        <strong className="text-amber-700 dark:text-amber-400">Cultural Significance:</strong>
                                        <p>Known as &lsquo;Kalu Kotiya&rsquo; in Sinhala, they hold a special place in Sri Lankan folklore</p>
                                      </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-amber-500 mt-1">•</span>
                                      <div>
                                        <strong className="text-amber-700 dark:text-amber-400">Recent Sightings:</strong>
                                        <p>While extremely rare, there have been confirmed sightings in Yala&apos;s Block I and the surrounding regions</p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best leopard spotting chances in the world
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Often seen during daytime safaris
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Larger than other leopard subspecies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent climbing and swimming abilities
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/blog/sri-lankan-leopard"
                    className="mt-4 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline focus:underline"
                  >
                    Cant you identyfy  leopards and jaguars? Read our detailed blog post to learn more about the differences between leopards and jaguars.
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Asian Elephants */}
            <Card>
              <CardHeader>
                <CardTitle>2. Asian Elephants (Elephas maximus maximus)</CardTitle>
                <CardDescription>Majestic herds of Sri Lanka&apos;s native gentle giants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center mb-6">

                  <ImageCarousel
                    images={[
                      {
                        src: "/Elephant-fam.jpg",
                        alt: "Thunpath Rana",
                        caption: "Thunpath Rana",
                        title: "Thunpath Rana",
                      },
                      {
                        src: "/Thunpath-Rana.jpg",
                        alt: "Thun Path Rana herd of elephants",
                        caption: "Thun Path Rana herd of elephants",
                        title: "Thun Path Rana",
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Yala National Park is home to significant populations of Sri Lankan elephants, the largest of all Asian elephant subspecies.
                      These intelligent pachyderms can be observed year-round, with the best viewing opportunities during the dry season when they
                      gather around water holes.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">Thun Path Rana: The Three Generation Herd</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        In Sri Lankan elephant society, the term &quot;Thun Path Rana&quot; refers to the three-generation family structure
                        that forms the core of each herd. This consists of:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>•<b> The matriarch (grandmother)</b> - The wise leader who guides the herd through ancient migration routes</li>
                        <li>•<b> Her daughters (mothers)</b> - Who nurture and protect the current generation</li>
                        <li>•<b> The calves (children)</b> - The newest generation learning vital survival skills</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-2">
                        Young male elephants naturally separate from the herd around 12-15 years of age, a process known
                        as &quot;dispersal.&quot; These males then either live solitary lives or form loose bachelor groups, only
                        returning to the herds during mating season. This natural behavior helps prevent inbreeding and
                        maintains genetic diversity.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Did you know?</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            Did you know female elephants are pregnant for a whopping 22 months? Yep, almost two years! That means if we lose a baby elephant, we have to wait ages for another one to arrive. No wonder their population grows so slowly  and in Sri Lanka, there are already fewer than 7,000 left. So let&apos;s be kind and protect these gentle giants, because our future generations deserve to meet them too!
                          </li>

                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            Life span of 60-70 years in the wild but this can be reduced due to habitat loss, human-elephant conflict, and poaching.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Key Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            Males can reach heights of up to 3.5 meters
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            Highly social, living in matriarchal family groups
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            Excellent swimmers and skilled diggers
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link href="/blog/sri-lankan-elephants">
                      <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 h-12 cursor-pointer mt-4">
                        <span>Learn More About Sri Lankan Elephants</span>
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Yala is home to approximately 300-350 elephants, making it one of the best places in Sri Lanka to
                      observe these magnificent creatures. You’ll often encounter large herds, especially near water
                      sources during the dry season.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Large herds with babies and juveniles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best viewing near water holes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fascinating social behaviors to observe
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Occasional tuskers (male elephants with tusks)
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Herd of Asian elephants at a water hole in Yala National Park with babies and adults together"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sloth Bears */}
            <Card>
              <CardHeader>
                <CardTitle>3. Sloth Bears (Melursus ursinus)</CardTitle>
                <CardDescription>The Mysterious Honey-Loving Bears of Yala</CardDescription>
                <div className="mt-4">
                  <div className="bg-amber-50/50 dark:bg-amber-950/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      The only bear species native to Sri Lanka, the Sloth Bear (Melursus ursinus) is a unique and fascinating creature.
                      Despite their name, they are not related to sloths but earned the name due to their long, curved claws and occasional hanging behavior in trees.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h5 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Physical Features</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Weight: Males 80-140 kg, Females 55-95 kg</li>
                          <li>• Distinctive pale U-shaped chest mark</li>
                          <li>• Shaggy black fur adapted for insect protection</li>
                          <li>• Specialized lips for insect feeding</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Conservation Status</h5>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Vulnerable species (IUCN Red List)</li>
                          <li>• Estimated 500-600 bears in Sri Lanka</li>
                          <li>• Protected under strict wildlife laws</li>
                          <li>• Main threats: habitat loss & human conflict</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Sloth-Bear-in-Yala.jpg",
                        alt: "Sloth Bear in Yala National Park",
                        caption: "Sloth Bear foraging for termites",
                        title: "Sloth Bear",
                      },
                      {
                        src: "/Sloth-Bear.jpg",
                        alt: "Sloth Bear in Yala National Park",
                        caption: "Sloth Bear resting in the shade",
                        title: "Sloth Bear",
                      }
                    ]}
                  />

                  <div>
                    <p className="text-muted-foreground mb-4">
                      Yala&apos;s Sloth Bears are fascinating creatures known for their unique feeding habits and behavior.
                      These adaptable bears have evolved specialized features for their diverse diet, which includes termites,
                      ants, fruits, and their favorite - honey, earning them the nickname &quot;Bambaru Walaha&quot; (honey bear) in Sinhala.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Unique Adaptations</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <div>
                              <strong>Feeding Adaptations:</strong>
                              <p>Long curved claws for digging, gap-closing lips to create suction for feeding, and closable nostrils to prevent dust inhalation</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <div>
                              <strong>Sensory Skills:</strong>
                              <p>Excellent sense of smell for locating food, specially adapted for detecting termite nests and honey</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <div>
                              <strong>Behavior Pattern:</strong>
                              <p>Primarily nocturnal, but can be seen during early mornings and late evenings in Yala</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Best Viewing Tips</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Dawn and dusk are prime viewing times</li>
                          <li>• Look for them near termite mounds and fruit trees</li>
                          <li>• Listen for their distinctive huffing sound</li>
                          <li>• Keep safe distance as they can be defensive</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sri Lankan Endemic Species */}
            <Card>
              <CardHeader>
                <CardTitle>6. Sri Lankan Endemic Species</CardTitle>
                <CardDescription>Unique Wildlife Found Nowhere Else in the World</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">Endemic Mammals</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Toque Macaque:</strong>
                            <p>Sri Lanka&apos;s endemic primate, recognized by its distinctive cap-like whorl of hair</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Red Slender Loris:</strong>
                            <p>Nocturnal primate with large eyes, found in Yala&apos;s forested areas</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Golden Palm Civet:</strong>
                            <p>Endemic civet species with distinctive golden-brown fur</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">Endemic Birds & Reptiles</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Sri Lanka Junglefowl:</strong>
                            <p>National bird of Sri Lanka, ancestor of domestic chickens</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Sri Lanka Green Pit Viper:</strong>
                            <p>Endemic venomous snake with excellent camouflage</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Black-necked Stork:</strong>
                            <p>Rare resident bird found in Yala&apos;s wetlands</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Conservation Status</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sri Lanka is recognized as one of the world&apos;s 36 biodiversity hotspots, with Yala National Park playing a crucial role in protecting many endemic species.
                        These unique animals face various threats including habitat loss, human encroachment, and climate change. Conservation efforts are ongoing to ensure their survival
                        for future generations.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <p className="font-semibold text-amber-800 dark:text-amber-400">33</p>
                          <p className="text-xs text-muted-foreground">Endemic Mammals</p>
                        </div>
                        <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <p className="font-semibold text-amber-800 dark:text-amber-400">26</p>
                          <p className="text-xs text-muted-foreground">Endemic Birds</p>
                        </div>
                        <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <p className="font-semibold text-amber-800 dark:text-amber-400">21</p>
                          <p className="text-xs text-muted-foreground">Endemic Reptiles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marsh Crocodiles */}
            <Card>
              <CardHeader>
                <CardTitle>4. Marsh Crocodiles (Crocodylus palustris)</CardTitle>
                <CardDescription>Ancient Predators of Yala&apos;s Waterways</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Mugger-Crocodiles.jpg",
                        alt: "Mugger Crocodiles in Yala National Park",
                        caption: "Two Mugger Crocodiles in Yala National Park",
                        title: "Mugger Crocodiles",
                      },
                      {
                        src: "/Mugger-Crocadiles1.jpg",
                        alt: "Mugger Crocodile basking in the sun",
                        caption: "Mugger Crocodile basking in the sun",
                        title: "Mugger Crocodile",
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      In Sri Lanka you can see two species of crocodiles, the Saltwater Crocodile (Crocodylus porosus) locals called them as &quot;Hala Kimbula&quot; and the Marsh Crocodile (Crocodylus palustris) also known as &quot;Gata Kimbula&quot; by locals.
                      While the Saltwater Crocodile is more commonly found in coastal areas and estuaries, the Marsh Crocodile, also known as the Mugger Crocodile,
                      is prevalent in freshwater habitats such as lakes, rivers, and marshes within Yala National Park.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Yala&apos;s waterways are home to impressive populations of Marsh Crocodiles, also known as Mugger Crocodiles.
                      These powerful reptiles can grow up to 5 meters in length and are perfectly adapted to life in the park&apos;s
                      various water bodies, from lakes to seasonal pools.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">Behavior & Habitat</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Most active during dawn and dusk
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Often seen basking on riverbanks
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Excellent swimmers and ambush predators
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Water Buffalo */}
            <Card>
              <CardHeader>
                <CardTitle>5. Wild Water Buffalo (Bubalus arnee)</CardTitle>
                <CardDescription>The Powerful Grazers of Yala&apos;s Grasslands</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Wild-Water-Buffalo.jpg",
                        alt: "Whale Shark swimming in the ocean",
                        caption: "Whale Shark sighting in Mirissa",
                        title: "Whale Shark",
                      },
                      {
                        src: "/Whale-in-Mirissa.jpg",
                        alt: "Whale watching in Mirissa",
                        caption: "Whale watching in Mirissa",
                        title: "Whale Watching",
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Wild Water Buffalo are among Yala&apos;s most impressive residents, with massive curved horns that can span up
                      to 2 meters tip to tip. These powerful bovines play a crucial role in maintaining the park&apos;s grassland
                      ecosystems and can be formidable when protecting their territory.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Key Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            Massive body size, adults weigh over 1,000 kg
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            Excellent swimmers, spend hours in water
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            Form strong family bonds in herds
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Notable Wildlife */}
            <Card>
              <CardHeader>
                <CardTitle>Other Notable Wildlife</CardTitle>
                <CardDescription>Diverse ecosystem with 44 mammal species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Mammals</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Spotted Deer - Most common prey species</li>
                      <li>• Sambur Deer - Largest deer species in Sri Lanka</li>
                      <li>• Golden Jackal - Skilled opportunistic hunters</li>
                      <li>• Fishing Cat - Specialized aquatic hunters</li>
                      <li>• Toque Macaque - Endemic primate species</li>
                      <li>• Grey Langur - Agile tree-dwelling monkeys</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Birds & Reptiles</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Peacocks - Spectacular courtship displays</li>
                      <li>• Painted Stork - Elegant wading birds</li>
                      <li>• Monitor Lizards - Skilled hunters up to 2m long</li>
                      <li>• Python - Sri Lanka&apos;s largest snake</li>
                      <li>• Sea Eagles - Coastal raptor species</li>
                      <li>• Spoonbills - Unique feeding adaptations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Donts for Safari </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-900/60 dark:border-green-700">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-100 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - Make the Most of Your Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-green-900 dark:text-green-100">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Wear comfortable clothing:</strong> Temperature can vary, light layers recommended
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Follow your guides intructions:</strong> They know the park and animal behavior best
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Use binoculars:</strong> Enhance your wildlife viewing experience
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Visit during weekdays:</strong> Less crowded and more peaceful
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Book your Safari in advance:</strong> Ensure availability and the best experience
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Take photographs to make memories:</strong> Visiting this paradise without capturing the moments is a missed opportunity. But remember to respect wildlife and avoid flash photography.
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50 dark:bg-red-900/60 dark:border-red-700">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-100 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DONTs - Avoid These Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-red-900 dark:text-red-100">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont feed animals:</strong> Yes, you might get a cute photo, but it harms their health and not a good thing at all
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont make unnecessary noise:</strong> Disturbs wildlife and other visitors and somtimes animal can be aggeressive too
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont use flasher for photography:</strong> Flashers can make animals aggeressive or panic and spoil your experience
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont litter:</strong> Help to save these beautiful places and wildlife
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont rush through:</strong> Take time to appreciate the colonial architecture
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont be panic but be aware:</strong> Very rarely we have to face some challenges during the safari, so always listen to your guide, dont worry they are well trained to handle such situations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont visit only during midday:</strong> Very hot and crowded with tour groups
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safari Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Safari Planning & Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Safari Timings & Tickets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Morning Safari</h4>
                  <p className="text-sm text-muted-foreground">6:00 AM - 10:00 AM (Best for leopard spotting)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Afternoon Safari</h4>
                  <p className="text-sm text-muted-foreground">2:30 PM - 6:30 PM (Great for elephants and birds)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees (2025)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign Adults: $15 USD + taxes</li>
                    <li>• Foreign Children: $8 USD + taxes</li>
                    <li>• Jeep Entry: $25 USD</li>
                    <li>• Tracker Fee: $10 USD (recommended)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> Book safaris in advance, especially during peak season (December-April)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Best Safari Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Leopard Spotting Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Early morning safaris have highest success</li>
                    <li>• Look for alarm calls from deer and peacocks</li>
                    <li>• Check rocky outcrops and tree branches</li>
                    <li>• Be patient and quiet in the vehicle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bring telephoto lens (300mm minimum)</li>
                    <li>• No flash photography allowed</li>
                    <li>• Maintain safe distance from animals</li>
                    <li>• Respect your guide’s instructions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Binoculars for better wildlife viewing</li>
                    <li>• Sun protection and hat</li>
                    <li>• Water and light snacks</li>
                    <li>• Comfortable clothing in earth tones</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Park Zones */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Yala’s Different Zones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Block 1 (Most Popular)</CardTitle>
                <CardDescription>Highest wildlife density</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best for leopard sightings</li>
                  <li>• Most developed infrastructure</li>
                  <li>• Can get crowded during peak season</li>
                  <li>• Patanangala Beach access</li>
                  <li>• Ancient Sithulpawwa temple ruins</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Block 2</CardTitle>
                <CardDescription>Less crowded alternative</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fewer visitors, more peaceful</li>
                  <li>• Good elephant populations</li>
                  <li>• Beautiful landscapes and water bodies</li>
                  <li>• Excellent bird watching opportunities</li>
                  <li>• More affordable safari options</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Block 3, 4 & 5</CardTitle>
                <CardDescription>Wilderness experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• True wilderness experience</li>
                  <li>• Minimal tourist traffic</li>
                  <li>• Requires special permits</li>
                  <li>• Best for serious wildlife enthusiasts</li>
                  <li>• Overnight camping possible</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Yala</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>February to July</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dry weather, animals gather at water</li>
                  <li>• Best leopard spotting opportunities</li>
                  <li>• Clear skies for photography</li>
                  <li>• Higher accommodation prices</li>
                  <li>• More crowded safaris</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>August to November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional rain showers</li>
                  <li>• Lush green vegetation</li>
                  <li>• Fewer tourists</li>
                  <li>• Good bird watching season</li>
                  <li>• Moderate prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Park Closure</CardTitle>
                <CardDescription>September to October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Park closed for animal breeding</li>
                  <li>• Heavy monsoon rains</li>
                  <li>• Alternative: Visit Udawalawe</li>
                  <li>• Plan visits around closure dates</li>
                  <li>• Check official announcements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay Near Yala</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Luxury Safari Lodges</CardTitle>
                <CardDescription>$200+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cinnamon Wild Yala</li>
                  <li>• Jetwing Yala</li>
                  <li>• Chena Huts by Uga Escapes</li>
                  <li>• All-inclusive safari packages</li>
                  <li>• Luxury amenities and spa services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$50-150 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Yala Safari Game Lodge</li>
                  <li>• Kithala Resort</li>
                  <li>• Safari hotels in Tissamaharama</li>
                  <li>• Good value with safari arrangements</li>
                  <li>• Swimming pools and restaurants</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Budget Options</CardTitle>
                <CardDescription>$20-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guesthouses in Tissamaharama</li>
                  <li>• Safari camping sites</li>
                  <li>• Family-run accommodations</li>
                  <li>• Basic but clean facilities</li>
                  <li>• Can arrange budget safaris</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Katharagama adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Katharagama.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  1.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Katharagama</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A sacred pilgrimage town known for its multi-religious temples and vibrant festivals.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  50 km from Yala National Park
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/katharagama" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            {/* Sithulpawwa Raja Maha Viharaya */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Sithul-Pawwa.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  1.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Sithulpawwa Raja Maha Viharaya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An ancient Buddhist cave temple within Yala National Park, known for its serene atmosphere and historical significance.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  50 km from Yala National Park
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/sithulpawwa-raja-maha-viharaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Ridiyagama.jpeg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Ridiyagama Safari Park</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sri Lanka&apos;s largest safari park, home to diverse wildlife in naturalistic habitats.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Yala National Park
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ridiyagama-safari-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Yala Safari Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Yala National Park offers one of the world&apos;s most thrilling wildlife experiences. From the
                heart-stopping moment of spotting a leopard to the gentle giants of elephant herds, every safari brings
                new discoveries and unforgettable memories. Remember that wildlife viewing requires patience - the best
                moments often come to those who wait quietly and observe carefully.
              </p>
              <p className="text-muted-foreground mb-4">
                Respect the wildlife and their habitat by following your guide&apos;s instructions, maintaining safe
                distances, and keeping noise to a minimum. Your visit helps support conservation efforts that protect
                these magnificent creatures for future generations.
              </p>
              <p className="text-muted-foreground font-medium">
                May your safari be filled with incredible wildlife encounters! 🐆🐘🦚
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>

  )
}
