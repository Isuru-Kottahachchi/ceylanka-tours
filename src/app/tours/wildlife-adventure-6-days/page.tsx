import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft } from "lucide-react"

export default function WildlifeAdventureTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/Minneriyanationalpark.jpeg"
          alt="Wildlife Adventure Sri Lanka"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-600">Adventure & Wildlife</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Wildlife & Nature Explorer</h1>
            <p className="text-xl md:text-2xl mb-6">6 Days / 5 Nights</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience Sri Lanka's incredible wildlife - leopards, elephants, whales, and exotic birds
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
                <Calendar className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">6 Days / 5 Nights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">2-12 People</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting From</p>
                  <p className="font-semibold text-green-600 text-xl">$720</p>
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
              Discover Sri Lanka's incredible biodiversity on this action-packed wildlife adventure. From the leopard-rich jungles of Yala to the elephant gatherings in Udawalawe, and the pristine rainforests of Sinharaja, this tour is a nature lover's dream come true.
            </p>
            <p className="text-muted-foreground">
              Experience multiple safari drives, whale watching expeditions, bird sanctuary visits, and eco-lodge stays. Perfect for photographers, wildlife enthusiasts, and anyone who wants to witness Sri Lanka's amazing natural heritage up close.
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
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">Day 1: Arrival & Udawalawe Elephant Park</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Arrive in Colombo and transfer to Udawalawe. Afternoon jeep safari in Udawalawe National Park famous for large elephant herds (300+). Visit elephant transit home.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Udawalawe National Park</span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">Day 2: Yala National Park - Leopard Territory</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Transfer to Yala. Early morning and late afternoon safari drives in Yala Block 1 - highest leopard density in the world. Spot sloth bears, crocodiles, and various bird species.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Yala National Park</span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">Day 3: Bundala Bird Sanctuary & Mirissa</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Morning visit to Bundala National Park - paradise for bird watchers with over 200 species including flamingos. Transfer to Mirissa beach for overnight stay.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Bundala, Mirissa</span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">Day 4: Whale & Dolphin Watching</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Early morning whale watching boat trip. Spot blue whales (largest animals on earth), sperm whales, and playful dolphin pods. Afternoon relaxation at beach.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Mirissa Ocean</span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">Day 5: Sinharaja Rainforest</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Guided trek through Sinharaja UNESCO World Heritage rainforest. See endemic birds, butterflies, reptiles, and rare plants. Stay at eco-lodge surrounded by jungle sounds.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Sinharaja Forest Reserve</span>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold mb-2">Day 6: Return to Colombo</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Morning bird watching session in rainforest. Transfer back to Colombo with optional stop at Colombo Zoo or National Museum. Airport departure transfer.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-green-600" />
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
                  <span className="text-sm">5 nights accommodation (hotels & eco-lodges)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Daily breakfast</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">All safari jeep charges (4 safaris)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Whale watching boat trip</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">National park entrance fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Naturalist guide for Sinharaja</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Transportation & airport transfers</span>
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
                  <span className="text-sm">• Camera/video permits</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Personal expenses & tips</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Your Wildlife Adventure?</h2>
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
