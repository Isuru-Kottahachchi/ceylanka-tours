import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, Utensils, CheckCircle, ArrowLeft, Camera } from "lucide-react"

export const metadata: Metadata = {
  title: "Sigiriya Day Tour | Rock Fortress & Dambulla Caves",
  description: "Full day tour to Sigiriya Rock Fortress and Dambulla Cave Temple. See ancient wonders and beautiful paintings in one amazing day trip.",
}

export default function SigiriyaDayTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/Sigiriya.jpeg" alt="Sigiriya Rock" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-amber-600">One Day Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Sigiriya Day Tour</h1>
            <p className="text-xl">Climb the famous rock fortress and explore ancient caves</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-amber-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Visit two of Sri Lanka's most famous UNESCO World Heritage sites in one day. Start with the amazing Sigiriya Rock Fortress - climb 1,200 steps to the top and see the ancient palace ruins, beautiful frescoes, and incredible views. Then visit Dambulla Cave Temple with its golden Buddha statues and colorful ceiling paintings. This tour is perfect for history lovers and photographers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Schedule</h2>
              <div className="space-y-3">
                <Card><CardContent className="p-4 flex gap-3">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">6:00 AM - Pick up from hotel</p><p className="text-sm text-muted-foreground">Start early to avoid crowds and heat</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">9:00 AM - Sigiriya Rock Fortress</p><p className="text-sm text-muted-foreground">Climb the rock and explore for 2-3 hours</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">12:30 PM - Lunch break</p><p className="text-sm text-muted-foreground">Traditional Sri Lankan rice and curry</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">2:00 PM - Dambulla Cave Temple</p><p className="text-sm text-muted-foreground">Explore 5 caves with ancient art</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Car className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">5:00 PM - Return to hotel</p><p className="text-sm text-muted-foreground">Drop off at your accommodation</p></div>
                </CardContent></Card>
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Air-conditioned car</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>English speaking guide</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Entrance tickets</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Lunch at local restaurant</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Water bottles</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">What to Bring</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><Camera className="w-4 h-4 mt-0.5" /><span>Camera for photos</span></li>
                    <li className="flex gap-2"><span>☀️</span><span>Sunscreen and hat</span></li>
                    <li className="flex gap-2"><span>👟</span><span>Comfortable walking shoes</span></li>
                    <li className="flex gap-2"><span>👕</span><span>Light clothing</span></li>
                    <li className="flex gap-2"><span>💵</span><span>Some cash for extras</span></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-amber-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-amber-600">$75</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-amber-600" /><span>Full day (11 hours)</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-amber-600" /><span>Small groups</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-amber-600" /><span>Hotel pick up/drop off</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-amber-600 hover:bg-amber-700 mb-3 cursor-pointer">Book This Tour</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full cursor-pointer">Send Inquiry</Button></Link>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">Free cancellation up to 24 hours before tour</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
