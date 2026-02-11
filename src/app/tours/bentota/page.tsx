"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, Utensils, CheckCircle, ArrowLeft, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function BentotaDayTour() {
  const [showHighlights, setShowHighlights] = useState(true)

  const tourHighlights = [
    { name: "Bentota Beach", image: "/Bentota-beach2.jpeg" },
    { name: "Turtle Hatchery", image: "/turtle-hatchery.jpeg" },
    { name: "Bentota River Safari", image: "/Bentota-river.jpeg" },
    { name: "Brief Garden", image: "/Breif-garden-bevis-bawa.jpeg" },
    { name: "Lunuganga Estate", image: "/Lunuganga-geoffrey-bawa.jpeg" },
    { name: "Water Sports", image: "/placeholder.svg?height=300&width=400" },
    { name: "Fish Spa", image: "/Fish-spa.jpg" },
    { name: "Local Seafood", image: "/placeholder.svg?height=300&width=400" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/Bentotabeach.jpeg" alt="Bentota Beach" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-blue-600">One Day Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Bentota Day Tour</h1>
            <p className="text-xl">Beach, culture, and adventure in one day</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Shows first on mobile, right side on desktop */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <Card className="lg:sticky lg:top-48 border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-blue-600">$55 upwards</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-blue-600" /><span>Full day (8-9 hours)</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-blue-600" /><span>Private tour</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-blue-600" /><span>Hotel pick up & drop (Around Bentota area)</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">Book Tour</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full">Inquire</Button></Link>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3 text-sm">Popular Add-ons</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Water sports package</span>
                      <span className="font-semibold">$30-50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Beachside lunch</span>
                      <span className="font-semibold">$15-25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ayurvedic massage</span>
                      <span className="font-semibold">$40</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-sm">💡 Best Time to Visit</h4>
                <p className="text-xs text-muted-foreground">
                  November to April for the best beach weather and calm seas. Water sports are best during these months.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Shows second on mobile, left side on desktop */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bentota is a beautiful coastal town on Sri Lanka's southwest coast, famous for its golden beaches, water sports, and peaceful river safaris. This full-day tour takes you to the best spots in the area - from playing with baby turtles at the hatchery to cruising through mangrove forests on Bentota River, visiting stunning gardens designed by famous architects, and relaxing on pristine beaches. Perfect for beach lovers, adventure seekers, and anyone who wants to experience the relaxed coastal life of Sri Lanka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Itinerary</h2>
              <div className="space-y-3">
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Bentota Beach</p><p className="text-sm text-muted-foreground">Morning swim and beach walk on golden sand</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Turtle Hatchery</p><p className="text-sm text-muted-foreground">See baby turtles and learn about conservation</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Bentota River Safari</p><p className="text-sm text-muted-foreground">Boat ride through mangroves and small islands</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Lunch break</p><p className="text-sm text-muted-foreground">Fresh seafood at beachside restaurant</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Brief Garden or Lunuganga Estate</p><p className="text-sm text-muted-foreground">Beautiful garden estate by Bevis Bawa</p></div>
                </CardContent></Card>

                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Water Sports (Optional)</p><p className="text-sm text-muted-foreground">Jet ski, banana boat, or windsurfing</p></div>
                </CardContent></Card>

                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Fish Spa & Beach Relaxation</p><p className="text-sm text-muted-foreground">Natural fish spa and sunset on the beach</p></div>
                </CardContent></Card>
              </div>
            </section>

            {/* Tour Highlights with Images */}
            <section>
              <button
                onClick={() => setShowHighlights(!showHighlights)}
                className="flex items-center gap-2 text-2xl font-bold mb-4 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    showHighlights ? '' : 'rotate-180'
                  }`}
                />
                <span>Tour Highlights</span>
              </button>
              
              <div 
                className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 overflow-hidden transition-all duration-300 ${
                  showHighlights 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                {tourHighlights.map((highlight, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="relative h-32 md:h-40 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={highlight.image}
                        alt={highlight.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-xs md:text-sm font-medium text-muted-foreground">
                      {highlight.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Air-conditioned car with driver</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>English speaking guide</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Turtle hatchery entrance</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Bentota River boat safari</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Brief Garden entrance</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Lunuganga Estate entrance</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Bottled water</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Highlights</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span>🏖️</span><span>Beautiful beaches</span></li>
                    <li className="flex gap-2"><span>🐢</span><span>Sea turtle conservation</span></li>
                    <li className="flex gap-2"><span>🚤</span><span>River safari adventure</span></li>
                    <li className="flex gap-2"><span>🌺</span><span>Tropical gardens</span></li>
                    <li className="flex gap-2"><span>🏄</span><span>Water sports available</span></li>
                    <li className="flex gap-2"><span>🐟</span><span>Natural fish spa</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">What to Bring</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Swimwear and beach towel</li>
                  <li>• Sunscreen and hat</li>
                  <li>• Comfortable walking shoes</li>
                  <li>• Camera for amazing photos</li>
                  <li>• Light clothes (it's hot!)</li>
                  <li>• Cash for personal expenses</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
