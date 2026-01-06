import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, Utensils, CheckCircle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Kandy Day Tour | Temple of the Tooth & Cultural Sites",
  description: "Visit Kandy's sacred Temple of the Tooth, Royal Botanical Gardens, and enjoy a traditional cultural dance show. Full day cultural experience.",
}

export default function KandyDayTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/Adams-peak.jpeg" alt="Kandy Temple" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-purple-600">One Day Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Kandy City Tour</h1>
            <p className="text-xl">Sacred temples and cultural heritage</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-purple-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Visit Kandy, the last capital of the ancient kings of Sri Lanka and a UNESCO World Heritage site. See the Temple of the Tooth Relic, the most sacred Buddhist temple in Sri Lanka. Walk through the beautiful Royal Botanical Gardens with thousands of plants and trees. Watch a traditional Kandyan dance performance with drums, acrobatics, and fire walking. Learn about Sri Lankan culture and Buddhism in this holy city.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Program</h2>
              <div className="space-y-3">
                <Card><CardContent className="p-4 flex gap-3">
                  <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">7:00 AM - Pick up</p><p className="text-sm text-muted-foreground">Start from your hotel</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">10:00 AM - Royal Botanical Gardens</p><p className="text-sm text-muted-foreground">Walk through 147 acres of beautiful gardens</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">12:30 PM - Lunch time</p><p className="text-sm text-muted-foreground">Traditional rice and curry meal</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">2:00 PM - Temple of the Tooth</p><p className="text-sm text-muted-foreground">Visit the sacred temple and museum</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">3:30 PM - Kandy Lake walk</p><p className="text-sm text-muted-foreground">Scenic walk around the city center</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">5:00 PM - Cultural dance show</p><p className="text-sm text-muted-foreground">Traditional Kandyan dancing and music</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Car className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">6:30 PM - Return trip</p><p className="text-sm text-muted-foreground">Back to your hotel</p></div>
                </CardContent></Card>
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Transport with driver</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>English speaking guide</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>All entrance fees</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Cultural show tickets</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Lunch meal</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Water bottles</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">You Will See</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span>🦷</span><span>Sacred tooth relic temple</span></li>
                    <li className="flex gap-2"><span>🌺</span><span>Tropical botanical gardens</span></li>
                    <li className="flex gap-2"><span>🏞️</span><span>Kandy Lake views</span></li>
                    <li className="flex gap-2"><span>💃</span><span>Traditional dance show</span></li>
                    <li className="flex gap-2"><span>🛕</span><span>Buddhist monks</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Good to Know</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dress modestly for temple visit - cover shoulders and knees</li>
                <li>• Remove shoes before entering temple</li>
                <li>• Temple has strict security - bags will be checked</li>
                <li>• Best to visit temple in afternoon when it's less crowded</li>
                <li>• Photography allowed in most areas except main shrine</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-purple-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-purple-600">$60</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-purple-600" /><span>Full day (11-12 hours)</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-purple-600" /><span>Private tour available</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-purple-600" /><span>Hotel pick up included</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-purple-600 hover:bg-purple-700 mb-3">Book Now</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full">Contact Us</Button></Link>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">Available every day • All religions welcome</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
