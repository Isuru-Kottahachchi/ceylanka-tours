import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, Utensils, CheckCircle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Ella Day Tour | Nine Arch Bridge & Mountain Hikes",
  description: "Explore Ella's stunning mountain scenery. Hike to Ella Rock or Little Adam's Peak, visit Nine Arch Bridge, and tour a tea factory.",
}

export default function EllaDayTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/jungle-beach.jpeg" alt="Ella Mountains" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-green-600">One Day Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Ella Adventure Tour</h1>
            <p className="text-xl">Mountain hikes and scenic views</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-green-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ella is a small mountain town famous for its amazing views and hiking trails. This tour takes you to the best spots - choose to hike either Ella Rock (more challenging) or Little Adam's Peak (easier). Visit the famous Nine Arch Bridge where trains pass through jungle. Tour a tea factory to see how Ceylon tea is made. End the day watching the sunset over the valley. Perfect for nature lovers and active travelers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Schedule</h2>
              <div className="space-y-3">
                <Card><CardContent className="p-4 flex gap-3">
                  <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">6:30 AM - Early start</p><p className="text-sm text-muted-foreground">Pick up from hotel for sunrise hike</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">7:00 AM - Morning hike</p><p className="text-sm text-muted-foreground">Ella Rock (3 hours) OR Little Adam's Peak (1 hour)</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">10:30 AM - Breakfast</p><p className="text-sm text-muted-foreground">Fresh fruits and Sri Lankan breakfast</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">11:30 AM - Nine Arch Bridge</p><p className="text-sm text-muted-foreground">Walk to the bridge and wait for train</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">1:00 PM - Lunch break</p><p className="text-sm text-muted-foreground">Local restaurant with valley views</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">2:30 PM - Tea factory visit</p><p className="text-sm text-muted-foreground">Learn about tea making and tasting</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">4:00 PM - Ravana Falls</p><p className="text-sm text-muted-foreground">Short stop at waterfall</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Car className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">5:30 PM - Return</p><p className="text-sm text-muted-foreground">Drive back to hotel</p></div>
                </CardContent></Card>
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Transportation</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Local guide for hikes</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Breakfast and lunch</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Tea factory tour</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Fresh tea tasting</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Water and snacks</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">What to Bring</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span>👟</span><span>Good hiking shoes</span></li>
                    <li className="flex gap-2"><span>🎒</span><span>Small backpack</span></li>
                    <li className="flex gap-2"><span>☀️</span><span>Sunscreen and hat</span></li>
                    <li className="flex gap-2"><span>📷</span><span>Camera for amazing views</span></li>
                    <li className="flex gap-2"><span>🧥</span><span>Light jacket (mornings cool)</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Hiking Options</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-green-50 dark:bg-green-950">
                  <h4 className="font-semibold mb-2">Ella Rock</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Moderate to difficult</li>
                    <li>• 2-3 hours up and down</li>
                    <li>• Amazing 360° views</li>
                    <li>• Good fitness required</li>
                  </ul>
                </Card>
                <Card className="p-4 bg-blue-50 dark:bg-blue-950">
                  <h4 className="font-semibold mb-2">Little Adam's Peak</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Easy to moderate</li>
                    <li>• 45 minutes up and down</li>
                    <li>• Beautiful valley views</li>
                    <li>• Suitable for most people</li>
                  </ul>
                </Card>
              </div>
              <p className="text-sm text-muted-foreground mt-3">You can choose which hike you prefer on the day based on your fitness level and time.</p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-green-600">$70</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-green-600" /><span>Full day (11 hours)</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-green-600" /><span>Small groups</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-green-600" /><span>Hotel transfers</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-green-600 hover:bg-green-700 mb-3">Book This Tour</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full">Get Details</Button></Link>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">Best months: January to April • Flexible itinerary</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
