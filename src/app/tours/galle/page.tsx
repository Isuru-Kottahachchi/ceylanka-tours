"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, Utensils, CheckCircle, ArrowLeft, Camera, ChevronDown } from "lucide-react"

export default function GalleDayTour() {
  const [showHighlights, setShowHighlights] = useState(true)

  const tourHighlights = [
    { name: "Galle Fort", image: "/galle-fort.jpeg" },
    { name: "Dutch Reformed Church", image: "/dutch-church-galle.jpeg" },
    { name: "Sea Turtle Hatchery", image: "/turtle-hatchery.jpeg" },
    { name: "Unawatuna Beach", image: "/unawatuna-beach.jpeg" },
    { name: "Fort Lighthouse", image: "/galle-lighthouse.jpeg" },
    { name: "Fort Ramparts", image: "/galle-ramparts.jpeg" },
    { name: "Flag Rock", image: "/flag-rock-galle.jpeg" },
    { name: "Fresh Seafood", image: "/seafood-galle.jpeg" },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/jungle-beach.jpeg" alt="Galle Fort" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-blue-600">One Day Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Galle & South Coast Tour</h1>
            <p className="text-xl">Dutch colonial fort and beautiful beaches</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Discover the historic Galle Fort, a UNESCO World Heritage site built by the Dutch in the 17th century. Walk through narrow streets lined with colonial buildings, visit old churches and museums, and enjoy ocean views from the fort walls. Stop at a sea turtle hatchery to see baby turtles, then relax on beautiful Unawatuna beach. Perfect mix of history and beach time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Schedule</h2>
              <div className="space-y-3">
                <Card><CardContent className="p-4 flex gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">8:00 AM - Hotel pick up</p><p className="text-sm text-muted-foreground">From Colombo or nearby areas</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">10:30 AM - Sea Turtle Hatchery</p><p className="text-sm text-muted-foreground">See baby turtles and learn about conservation</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">11:30 AM - Galle Fort exploration</p><p className="text-sm text-muted-foreground">Walk the walls and visit historic sites</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">1:00 PM - Lunch</p><p className="text-sm text-muted-foreground">Fresh seafood at local restaurant</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">2:30 PM - Unawatuna Beach</p><p className="text-sm text-muted-foreground">Swimming and relaxation time</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Car className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">5:00 PM - Return journey</p><p className="text-sm text-muted-foreground">Drop off at your hotel</p></div>
                </CardContent></Card>
              </div>
            </section>

            <section>
              <button
                onClick={() => setShowHighlights(!showHighlights)}
                className="flex items-center gap-2 text-2xl font-bold mb-4 hover:text-blue-600 transition-colors"
              >
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${showHighlights ? '' : 'rotate-180'}`} />
                Tour Highlights
              </button>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-300 overflow-hidden ${
                showHighlights ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {tourHighlights.map((highlight, idx) => (
                  <div key={idx} className="relative h-40 rounded-lg overflow-hidden group">
                    <Image
                      src={highlight.image}
                      alt={highlight.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <p className="text-white text-sm font-semibold">{highlight.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Private car with driver</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Tour guide</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Turtle hatchery entrance</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Lunch included</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Drinking water</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Tour Highlights</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span>🏰</span><span>Galle Fort walls walk</span></li>
                    <li className="flex gap-2"><span>🐢</span><span>Baby sea turtles</span></li>
                    <li className="flex gap-2"><span>⛪</span><span>Old Dutch churches</span></li>
                    <li className="flex gap-2"><span>🏖️</span><span>Unawatuna beach</span></li>
                    <li className="flex gap-2"><span>🍤</span><span>Fresh seafood lunch</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Important Notes</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bring swimwear if you want to swim at the beach</li>
                <li>• Modest clothing required for visiting religious sites</li>
                <li>• Good walking shoes recommended for fort exploration</li>
                <li>• Tour can start from Colombo, Negombo, or south coast hotels</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-48 border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-blue-600">$65</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-blue-600" /><span>9-10 hours</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-blue-600" /><span>Private or small group</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-blue-600" /><span>Door to door service</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">Book This Tour</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full">Ask Question</Button></Link>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">Flexible cancellation policy • All ages welcome</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
