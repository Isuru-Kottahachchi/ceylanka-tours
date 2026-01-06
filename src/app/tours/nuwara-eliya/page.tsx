import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Car, Utensils, CheckCircle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Nuwara Eliya Day Tour | Tea Plantations & Hill Station",
  description: "Visit Nuwara Eliya, known as Little England. Tour tea plantations, see colonial buildings, and enjoy cool mountain climate.",
}

export default function NuwaraEliyaDayTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-slate-900 dark:to-slate-800">
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/jungle-beach.jpeg" alt="Nuwara Eliya Tea Country" fill className="object-cover brightness-[0.6]" priority />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-3xl text-center">
            <Badge className="mb-3 bg-teal-600">One Day Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Nuwara Eliya Tour</h1>
            <p className="text-xl">Little England in the mountains</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-teal-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nuwara Eliya sits 1,900 meters above sea level and is Sri Lanka's main tea producing area. The British built this town as a hill station to escape the heat - it still has an English countryside feel with old colonial buildings and cool weather. Visit working tea plantations, tour a tea factory to see how the famous Ceylon tea is made, walk through beautiful gardens, and see Gregory Lake. Perfect for tea lovers and anyone who wants to escape tropical heat for a day.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Program</h2>
              <div className="space-y-3">
                <Card><CardContent className="p-4 flex gap-3">
                  <Clock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">6:00 AM - Early departure</p><p className="text-sm text-muted-foreground">Long but scenic drive through mountains</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">9:30 AM - Ramboda Falls</p><p className="text-sm text-muted-foreground">Photo stop at waterfall</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">10:30 AM - Tea factory tour</p><p className="text-sm text-muted-foreground">See tea making process and do tea tasting</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Utensils className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">12:30 PM - Lunch</p><p className="text-sm text-muted-foreground">Hotel restaurant with mountain views</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">2:00 PM - Victoria Park</p><p className="text-sm text-muted-foreground">Beautiful garden with rare flowers</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">3:00 PM - Gregory Lake</p><p className="text-sm text-muted-foreground">Walk around lake or boat ride (optional)</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">4:00 PM - Nuwara Eliya town</p><p className="text-sm text-muted-foreground">See colonial buildings and post office</p></div>
                </CardContent></Card>
                
                <Card><CardContent className="p-4 flex gap-3">
                  <Car className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div><p className="font-semibold">5:00 PM - Return journey</p><p className="text-sm text-muted-foreground">Back to hotel</p></div>
                </CardContent></Card>
              </div>
            </section>

            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Private vehicle</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Driver and guide</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Tea factory tour</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Tea tasting session</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Lunch meal</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span>Park entrance fees</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">You Will Experience</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span>🍃</span><span>Green tea plantations</span></li>
                    <li className="flex gap-2"><span>🏭</span><span>Tea making process</span></li>
                    <li className="flex gap-2"><span>🌺</span><span>Mountain flowers</span></li>
                    <li className="flex gap-2"><span>🏞️</span><span>Cool mountain air</span></li>
                    <li className="flex gap-2"><span>🏛️</span><span>Colonial buildings</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Important Information</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bring warm clothes - temperature can be 10-15°C cooler than coast</li>
                <li>• Long drive from Colombo (about 3.5 hours each way)</li>
                <li>• Best views from January to March</li>
                <li>• Can be combined with visit to Horton Plains if starting early</li>
                <li>• Great place to buy quality tea at factory prices</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-teal-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                  <p className="text-4xl font-bold text-teal-600">$65</p>
                  <p className="text-xs text-muted-foreground">(2 people minimum)</p>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex gap-2"><Clock className="w-4 h-4 text-teal-600" /><span>Full day (12 hours)</span></div>
                  <div className="flex gap-2"><Users className="w-4 h-4 text-teal-600" /><span>Private tour</span></div>
                  <div className="flex gap-2"><Car className="w-4 h-4 text-teal-600" /><span>Door to door</span></div>
                </div>
                <Link href="/contact-us"><Button className="w-full bg-teal-600 hover:bg-teal-700 mb-3">Book Now</Button></Link>
                <Link href="/contact-us"><Button variant="outline" className="w-full">More Info</Button></Link>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">Year-round availability • Bring jacket</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
