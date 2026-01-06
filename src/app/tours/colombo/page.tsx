import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, Utensils, CheckCircle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Colombo City Tour | Markets, Temples & Colonial Sites",
  description: "Discover Sri Lanka's capital city. Visit colonial buildings, busy markets, temples, and modern landmarks in this full day city tour.",
}

export default function ColomboDayTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/Adams-peak.jpeg" alt="Colombo City" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-orange-600">One Day Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Colombo City Tour</h1>
            <p className="text-xl">Explore the vibrant capital</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-orange-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Colombo is a mix of old and new - colonial buildings next to modern shopping malls, ancient temples beside busy streets. This tour shows you the best of the city. Visit historic sites from British times, see important religious places, walk through colorful local markets, and enjoy the ocean breeze at Galle Face Green. Great for travelers with a few hours before a flight or anyone who wants to understand modern Sri Lanka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Itinerary</h2>
              <div className="space-y-3">
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Independence Square</p><p className="text-sm text-muted-foreground">National monument and park</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Gangaramaya Temple</p><p className="text-sm text-muted-foreground">Beautiful Buddhist temple with museum</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Pettah Market</p><p className="text-sm text-muted-foreground">Busy local market with everything</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Lunch break</p><p className="text-sm text-muted-foreground">Local restaurant or food street</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Dutch Hospital area</p><p className="text-sm text-muted-foreground">Restored colonial building with shops and cafes</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">Galle Face Green</p><p className="text-sm text-muted-foreground">Oceanfront park, enjoy sunset and street food</p></div>
                </CardContent></Card>
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Air-conditioned car</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>City guide</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Temple entrance fees</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Bottled water</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Highlights</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span>🏛️</span><span>Colonial architecture</span></li>
                    <li className="flex gap-2"><span>🛕</span><span>Buddhist temples</span></li>
                    <li className="flex gap-2"><span>🏪</span><span>Local markets</span></li>
                    <li className="flex gap-2"><span>🌊</span><span>Ocean views</span></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-orange-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-orange-600">$45</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-orange-600" /><span>Half or full day</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-orange-600" /><span>Private tour</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-orange-600" /><span>Hotel pick up</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-orange-600 hover:bg-orange-700 mb-3">Book Tour</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full">Inquire</Button></Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
