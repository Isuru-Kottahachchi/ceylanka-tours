import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft } from "lucide-react"

export default function RamayanaTrailTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/Adams-peak.jpeg"
          alt="Ramayana Trail Sri Lanka"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-600">Spiritual Journey</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ramayana Trail</h1>
            <p className="text-xl md:text-2xl mb-6">7 Days / 6 Nights</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Follow the legendary footsteps of the Ramayana epic across Sri Lanka's sacred sites
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/tours">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tours
          </Link>
        </Button>

        {/* Tour Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">7 Days / 6 Nights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">2-15 People</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting From</p>
                  <p className="font-semibold text-orange-600 text-xl">$750</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Tour Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Embark on a spiritual journey through Sri Lanka following the sacred Ramayana Trail. This 7-day tour takes you to the legendary sites mentioned in the ancient Indian epic, where Lord Rama's quest to rescue Sita from Ravana unfolded. Visit temples, caves, and natural wonders connected to this timeless story.
            </p>
            <p className="text-muted-foreground">
              Perfect for spiritual seekers, history enthusiasts, and anyone interested in Hindu mythology and culture. Experience authentic rituals, visit sacred temples, and explore the beautiful landscapes that form the backdrop of this epic tale.
            </p>
          </CardContent>
        </Card>

        {/* Day-by-Day Itinerary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Day-by-Day Itinerary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">Day 1: Arrival in Colombo & Chilaw</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Arrive at Colombo airport. Visit Munneswaram Temple where Lord Rama installed the first Shiva Lingam. Transfer to Chilaw for overnight stay.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Munneswaram Temple</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">Day 2: Mannar - Rama's Bridge</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit the legendary Adam's Bridge (Rama Setu) where Rama's army built a bridge to Lanka. Explore Thiruketheeswaram Temple and local fishing villages.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Adam's Bridge, Thiruketheeswaram</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">Day 3: Nuwara Eliya - Sita's Captivity</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit Seetha Amman Temple and Ashok Vatika where Sita was held captive. Explore the beautiful Hakgala Botanical Gardens built on Ravana's palace grounds.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Seetha Amman Temple, Ashok Vatika, Hakgala Gardens</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">Day 4: Ella - Ravana's Domain</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Explore Ravana Falls and Ravana Caves where he is believed to have hidden Sita. Visit the ancient Ravana Ella Cave with stunning mountain views.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Ravana Falls, Ravana Caves</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">Day 5: Divurumpola & Ussangoda</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit Divurumpola Temple where Sita underwent the fire test. Explore Ussangoda, the landing site of Ravana's Pushpaka Vimana (flying chariot).
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Divurumpola, Ussangoda</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">Day 6: Kataragama - Sacred Pilgrimage</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit Kataragama Temple, one of the holiest sites. Experience evening puja rituals and explore the spiritual atmosphere of this multi-faith pilgrimage site.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Kataragama Temple Complex</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">Day 7: Return to Colombo</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Leisure morning, optional shopping in Colombo, and departure transfer to airport with memories of your spiritual journey.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span>Departure Day</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inclusions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">6 nights accommodation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Daily breakfast</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Air-conditioned vehicle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">English-speaking guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Temple entrance fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Airport transfers</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Not Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• International flights</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Lunch and dinner</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Travel insurance</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Personal expenses</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Tips and gratuities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Book Your Ramayana Trail?</h2>
            <p className="mb-6">Contact us to customize this tour or get more information</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30">
                WhatsApp Inquiry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
