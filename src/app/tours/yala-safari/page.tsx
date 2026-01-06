import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, Camera } from "lucide-react"

export default function YalaSafariTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/jungle-beach.jpeg"
          alt="Yala National Park Safari"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-amber-600">Wildlife Adventure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Yala National Park Safari</h1>
            <p className="text-xl md:text-2xl mb-6">Full Day Experience</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Spot leopards, elephants, and exotic birds in Sri Lanka's most famous wildlife park
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
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">Full Day</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Start Time</p>
                  <p className="font-semibold">5:30 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">2-6 people</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-amber-600 text-xl">$95</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Safari Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Embark on an unforgettable full-day safari at Yala National Park, home to the world's highest density of leopards. This 378 square mile wildlife sanctuary is a paradise for nature enthusiasts and photographers.
            </p>
            <p className="text-muted-foreground">
              Your expert naturalist guide will navigate you through diverse ecosystems – from dense jungles to open grasslands and coastal lagoons – giving you the best chance to spot leopards, elephants, sloth bears, crocodiles, and over 200 bird species.
            </p>
          </CardContent>
        </Card>

        {/* Itinerary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Day Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold mb-2">5:30 AM - Hotel Pickup</h3>
                <p className="text-sm text-muted-foreground">
                  Early morning pickup from your hotel in Tissamaharama or nearby areas. Coffee/tea provided during transfer.
                </p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold mb-2">6:00 AM - Enter Yala Block 1</h3>
                <p className="text-sm text-muted-foreground">
                  Begin your safari in the most wildlife-rich zone. Morning is the best time to spot leopards basking on rocks or hunting. Look out for:
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• <strong>Sri Lankan Leopards</strong> - Highest density in the world</li>
                  <li>• <strong>Asian Elephants</strong> - Often seen in herds</li>
                  <li>• <strong>Sloth Bears</strong> - Rare but rewarding sightings</li>
                  <li>• <strong>Water Buffalo</strong> - Cooling in lagoons</li>
                  <li>• <strong>Crocodiles</strong> - Sunning on riverbanks</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold mb-2">9:00 AM - Breakfast Break</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy a packed breakfast box at a designated picnic area with scenic views. Continue safari after refreshments.
                </p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold mb-2">10:00 AM - 1:00 PM - Deep Exploration</h3>
                <p className="text-sm text-muted-foreground">
                  Venture deeper into the park visiting:
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• <strong>Patanangala Beach</strong> - Elephants bathing in the ocean</li>
                  <li>• <strong>Yala Lagoon</strong> - Birdwatching paradise (painted storks, pelicans, flamingos)</li>
                  <li>• <strong>Rocky Outcrops</strong> - Prime leopard spotting locations</li>
                  <li>• <strong>Jungle Trails</strong> - Deer, peacocks, and sambars</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold mb-2">1:30 PM - Lunch</h3>
                <p className="text-sm text-muted-foreground">
                  Return to a nearby restaurant for authentic Sri Lankan rice and curry lunch.
                </p>
              </div>

              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="font-bold mb-2">3:00 PM - Return & Drop-off</h3>
                <p className="text-sm text-muted-foreground">
                  Transfer back to your hotel with memories of an incredible wildlife adventure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wildlife Highlights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Wildlife You Might See
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-3">Mammals</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Sri Lankan Leopard (Panthera pardus kotiya)</li>
                  <li>• Asian Elephant</li>
                  <li>• Sloth Bear</li>
                  <li>• Spotted Deer</li>
                  <li>• Sambar Deer</li>
                  <li>• Wild Boar</li>
                  <li>• Golden Jackal</li>
                  <li>• Fishing Cat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Birds & Reptiles</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Painted Stork</li>
                  <li>• Lesser Flamingo</li>
                  <li>• Spot-billed Pelican</li>
                  <li>• Indian Peafowl</li>
                  <li>• Sri Lanka Junglefowl</li>
                  <li>• Mugger Crocodile</li>
                  <li>• Monitor Lizard</li>
                  <li>• Star Tortoise</li>
                </ul>
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
                  <span className="text-sm">Hotel pickup & drop-off</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">4x4 safari jeep</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Expert naturalist guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Park entrance fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Breakfast box</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Lunch (rice & curry)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Water bottles</span>
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
                  <span className="text-sm">• Personal expenses</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Camera permits (if required)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Tips for guide & driver</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Travel insurance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Your Wildlife Adventure?</h2>
            <p className="mb-6">Book your Yala safari today and witness nature at its finest</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link href="/contact-us">Book Now</Link>
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
