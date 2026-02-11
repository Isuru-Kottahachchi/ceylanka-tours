import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, Waves } from "lucide-react"

export default function WhaleWatchingTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/Whale-in-Mirissa.jpg"
          alt="Mirissa Whale Watching"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600">Marine Experience</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mirissa Whale Watching</h1>
            <p className="text-xl md:text-2xl mb-6">Half Day Ocean Adventure</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Encounter majestic blue whales and playful dolphins in their natural habitat
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
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">Half Day</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Start Time</p>
                  <p className="font-semibold">6:30 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">2-30 people</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-blue-600 text-xl">$80</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Ocean Adventure Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Set sail from the charming fishing village of Mirissa for one of the world's best whale and dolphin watching experiences. The deep waters off Sri Lanka's southern coast are a migration highway for blue whales, sperm whales, and fin whales from November to April.
            </p>
            <p className="text-muted-foreground">
              With a 90-95% success rate during peak season, you have excellent chances of witnessing the planet's largest creature – the magnificent blue whale – along with spinner dolphins, bottlenose dolphins, and sea turtles.
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
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Waves className="w-5 h-5 text-blue-600" />
                  6:00 AM - Hotel Pickup
                </h3>
                <p className="text-sm text-muted-foreground">
                  Early morning pickup from hotels in Mirissa, Weligama, or nearby areas. Light breakfast available at the harbor.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">6:30 AM - Safety Briefing & Departure</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Board the whale watching boat at Mirissa Fisheries Harbor. Experienced captain and marine biologist will provide:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Safety instructions and life jacket fitting</li>
                  <li>• Information about whales and dolphins you might encounter</li>
                  <li>• Photography tips for capturing marine life</li>
                  <li>• Responsible whale watching guidelines</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">7:00 AM - 11:00 AM - Ocean Exploration</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Venture 15-20 nautical miles offshore into the deep blue waters. What you might see:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Blue Whales</strong> - Up to 30 meters long, the largest animals on Earth</li>
                  <li>• <strong>Sperm Whales</strong> - Deep divers with distinctive bushy blows</li>
                  <li>• <strong>Fin Whales</strong> - Second largest whale species</li>
                  <li>• <strong>Bryde's Whales</strong> - Year-round residents</li>
                  <li>• <strong>Spinner Dolphins</strong> - Pods of 50-200 performing acrobatic leaps</li>
                  <li>• <strong>Bottlenose Dolphins</strong> - Playful and curious</li>
                  <li>• <strong>Green Sea Turtles</strong> - Swimming on the surface</li>
                  <li>• <strong>Flying Fish</strong> - Skimming across the waves</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  The boat follows ethical guidelines: maintains safe distance, no chasing, engine off when near whales
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">Onboard Facilities</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Your comfort during the 4-5 hour trip:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Shaded seating areas</li>
                  <li>• Open deck for photography</li>
                  <li>• Restroom facilities</li>
                  <li>• Light breakfast (sandwiches, fruits)</li>
                  <li>• Water and soft drinks</li>
                  <li>• Seasickness medication available</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">11:30 AM - Return to Harbor</h3>
                <p className="text-sm text-muted-foreground">
                  Return journey to Mirissa harbor. Share your experiences and photos with fellow passengers.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-2">12:00 PM - Hotel Drop-off</h3>
                <p className="text-sm text-muted-foreground">
                  Transfer back to your hotel with unforgettable memories of ocean giants.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Season & Tips */}
        <Card className="mb-12 border-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-600">Best Season & Important Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Best Time to Visit</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Peak Season:</strong> November to April</li>
                  <li>• <strong>Highest Success Rate:</strong> December to March (95%)</li>
                  <li>• <strong>Calmest Seas:</strong> January to March</li>
                  <li>• <strong>Blue Whale Migration:</strong> December to April</li>
                  <li>• <strong>Dolphin Pods:</strong> Year-round but larger groups in season</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">What to Bring</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Sunscreen (reef-safe)</li>
                  <li>• Sunglasses and wide-brimmed hat</li>
                  <li>• Light jacket (can be windy at sea)</li>
                  <li>• Camera with zoom lens (200-300mm ideal)</li>
                  <li>• Waterproof bag for electronics</li>
                  <li>• Motion sickness medication (take 30 mins before)</li>
                  <li>• Comfortable shoes with grip</li>
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
                  <span className="text-sm">Multi-level whale watching boat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Marine biologist guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Life jackets & safety equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Light breakfast onboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Water & refreshments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Onboard restroom</span>
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
                  <span className="text-sm">• Lunch after tour</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Personal expenses</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Tips for crew</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Travel insurance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Meet the Giants of the Ocean</h2>
            <p className="mb-6">Book your whale watching adventure for a once-in-a-lifetime experience</p>
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
