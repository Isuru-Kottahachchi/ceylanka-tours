"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, CheckCircle, ArrowLeft, ChevronDown, Camera } from "lucide-react"
import { useState } from "react"

export default function YalaSafariTour() {
  const [showHighlights, setShowHighlights] = useState(true)

  const tourHighlights = [
    { name: "Sri Lankan Leopard", image: "/placeholder.svg?height=300&width=400" },
    { name: "Asian Elephants", image: "/placeholder.svg?height=300&width=400" },
    { name: "Sloth Bears", image: "/placeholder.svg?height=300&width=400" },
    { name: "Yala Lagoon Birds", image: "/placeholder.svg?height=300&width=400" },
    { name: "Patanangala Beach", image: "/placeholder.svg?height=300&width=400" },
    { name: "Crocodiles", image: "/placeholder.svg?height=300&width=400" },
    { name: "Spotted Deer", image: "/placeholder.svg?height=300&width=400" },
    { name: "Peacocks", image: "/placeholder.svg?height=300&width=400" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/jungle-beach.jpeg" alt="Yala National Park Safari" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-amber-600">Full Day Safari</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Yala National Park Safari</h1>
            <p className="text-xl">Wildlife adventure with leopards and elephants</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-amber-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Shows first on mobile, right side on desktop */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <Card className="lg:sticky lg:top-48 border-2 border-amber-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-amber-600">$95 upwards</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-amber-600" /><span>Full day (8-9 hours)</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-amber-600" /><span>Private safari jeep</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-amber-600" /><span>Hotel pick up & drop (Tissamaharama area)</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-amber-600 hover:bg-amber-700 mb-3 cursor-pointer">Book Safari</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full cursor-pointer">Inquire</Button></Link>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3 text-sm">Popular Add-ons</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Professional camera permit</span>
                      <span className="font-semibold">$10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Extended safari (Block 2)</span>
                      <span className="font-semibold">$40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bundala Bird Park visit</span>
                      <span className="font-semibold">$30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunset safari upgrade</span>
                      <span className="font-semibold">$25</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 text-sm">💡 Best Time to Visit</h4>
                <p className="text-xs text-muted-foreground">
                  February to July for the best wildlife sightings. Early morning safaris offer the highest chance of spotting leopards.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Shows second on mobile, left side on desktop */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Safari Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Embark on an unforgettable full-day safari at Yala National Park, home to the world's highest density of leopards. This 378 square mile wildlife sanctuary is a paradise for nature enthusiasts and photographers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your expert naturalist guide will navigate you through diverse ecosystems – from dense jungles to open grasslands and coastal lagoons – giving you the best chance to spot leopards, elephants, sloth bears, crocodiles, and over 200 bird species.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Safari Itinerary</h2>
              <div className="space-y-3">
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">5:30 AM - Hotel Pickup</p><p className="text-sm text-muted-foreground">Early morning pickup from your hotel in Tissamaharama or nearby areas. Coffee/tea provided during transfer</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">6:00 AM - Enter Yala Block 1</p><p className="text-sm text-muted-foreground">Begin your safari in the most wildlife-rich zone. Morning is the best time to spot leopards basking on rocks or hunting</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Camera className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Wildlife Spotting Focus</p><p className="text-sm text-muted-foreground">Sri Lankan Leopards (highest density globally), Asian Elephants in herds, Sloth Bears, Water Buffalo, Crocodiles, and various bird species</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">9:00 AM - Breakfast Break</p><p className="text-sm text-muted-foreground">Enjoy a packed breakfast box at a designated picnic area with scenic views</p></div>
                </CardContent></Card>

                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Deep Park Exploration</p><p className="text-sm text-muted-foreground">Visit Patanangala Beach (elephants bathing), Yala Lagoon (bird paradise), Rocky Outcrops (leopard hotspots), and jungle trails</p></div>
                </CardContent></Card>

                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">1:30 PM - Lunch</p><p className="text-sm text-muted-foreground">Authentic Sri Lankan rice and curry lunch at nearby restaurant</p></div>
                </CardContent></Card>

                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">3:00 PM - Return & Drop-off</p><p className="text-sm text-muted-foreground">Transfer back to your hotel with memories of an incredible wildlife adventure</p></div>
                </CardContent></Card>
              </div>
            </section>

            {/* Tour Highlights with Images */}
            <section>
              <button
                onClick={() => setShowHighlights(!showHighlights)}
                className="flex items-center gap-2 text-2xl font-bold mb-4 hover:text-amber-600 transition-colors cursor-pointer"
              >
                <ChevronDown 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    showHighlights ? '' : 'rotate-180'
                  }`}
                />
                <span>Safari Highlights</span>
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
              <h3 className="text-lg font-bold mb-3">Wildlife You Might See</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">Mammals</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>🐆 Sri Lankan Leopard (Panthera pardus kotiya)</li>
                    <li>🐘 Asian Elephant</li>
                    <li>🐻 Sloth Bear</li>
                    <li>🦌 Spotted Deer</li>
                    <li>🦌 Sambar Deer</li>
                    <li>🐗 Wild Boar</li>
                    <li>🦊 Golden Jackal</li>
                    <li>🐱 Fishing Cat</li>
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">Birds & Reptiles</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>🦩 Painted Stork</li>
                    <li>🦩 Lesser Flamingo</li>
                    <li>🦢 Spot-billed Pelican</li>
                    <li>🦚 Indian Peafowl</li>
                    <li>🐓 Sri Lanka Junglefowl</li>
                    <li>🐊 Mugger Crocodile</li>
                    <li>🦎 Monitor Lizard</li>
                    <li>🐢 Star Tortoise</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Hotel pickup & drop-off</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>4x4 safari jeep</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Expert naturalist guide</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Park entrance fees</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Breakfast box</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Lunch (rice & curry)</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Water bottles</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Safari Tips</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span>📷</span><span>Bring telephoto lens for wildlife shots</span></li>
                    <li className="flex gap-2"><span>🎒</span><span>Wear neutral colors (khaki, beige, olive)</span></li>
                    <li className="flex gap-2"><span>🧢</span><span>Sun protection essential</span></li>
                    <li className="flex gap-2"><span>🔇</span><span>Keep quiet to not disturb animals</span></li>
                    <li className="flex gap-2"><span>🔋</span><span>Fully charge camera batteries</span></li>
                    <li className="flex gap-2"><span>🌅</span><span>Early morning offers best sightings</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-3">What to Bring</h3>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Binoculars for better viewing</li>
                  <li>• Camera with zoom lens</li>
                  <li>• Sunscreen and hat</li>
                  <li>• Light jacket (early mornings)</li>
                  <li>• Comfortable shoes</li>
                  <li>• Insect repellent</li>
                  <li>• Extra camera batteries</li>
                  <li>• Cash for tips and extras</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
