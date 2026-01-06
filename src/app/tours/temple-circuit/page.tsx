import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, Church } from "lucide-react"

export default function TempleCircuitTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/jungle-beach.jpeg"
          alt="Golden Temple Circuit"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-yellow-600">Cultural Heritage</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Golden Temple Circuit</h1>
            <p className="text-xl md:text-2xl mb-6">Full Day Cultural Tour</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Explore ancient Buddhist temples and sacred sites in the Cultural Triangle
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
                <Clock className="w-8 h-8 text-yellow-600" />
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
                <Calendar className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Start Time</p>
                  <p className="font-semibold">7:00 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-semibold">2-15 people</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-yellow-600 text-xl">$75</p>
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
              Journey through Sri Lanka's Cultural Triangle visiting the most sacred and architecturally stunning Buddhist temples. This full-day tour takes you to Dambulla Cave Temple (UNESCO World Heritage), Nalanda Gedige, and the magnificent Temple of the Tooth in Kandy.
            </p>
            <p className="text-muted-foreground">
              Perfect for culture enthusiasts and spiritual seekers, this tour offers deep insights into Sri Lankan Buddhism, ancient art, and religious traditions spanning over 2,000 years.
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
              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Church className="w-5 h-5 text-yellow-600" />
                  7:00 AM - Departure from Hotel
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pickup from your hotel in Sigiriya, Dambulla, or Kandy area. Begin journey to the first temple.
                </p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2">8:00 AM - Dambulla Cave Temple (UNESCO Site)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit the magnificent Golden Temple of Dambulla, dating back to 1st century BC. Climb to the sacred caves housing:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>5 Cave Temples</strong> filled with Buddha statues</li>
                  <li>• <strong>153 Buddha images</strong> in various poses</li>
                  <li>• <strong>Ancient murals</strong> covering 2,100 sq meters</li>
                  <li>• Stunning panoramic views of surrounding countryside</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 1.5 hours (includes climb and exploration)</p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2">10:00 AM - Nalanda Gedige Temple</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit this unique temple showcasing the fusion of Hindu and Buddhist architecture (8th-10th century). Features:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Built entirely of stone without mortar</li>
                  <li>• Tantric Buddhist influences</li>
                  <li>• Picturesque location by reservoir</li>
                  <li>• Excellent photo opportunities</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 45 minutes</p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2">11:30 AM - Traditional Lunch</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy authentic Sri Lankan rice and curry at a local restaurant with cultural ambiance.
                </p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2">1:00 PM - Drive to Kandy</h3>
                <p className="text-sm text-muted-foreground">
                  Scenic drive through lush green hills and tea plantations. Photo stops at viewpoints.
                </p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2">3:00 PM - Temple of the Tooth (Sri Dalada Maligawa)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit the most sacred Buddhist temple in Sri Lanka, housing the relic of Buddha's tooth. Experience:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Tooth Relic Chamber</strong> (if puja ceremony is ongoing)</li>
                  <li>• Ornate golden roof and architecture</li>
                  <li>• Temple museum with royal artifacts</li>
                  <li>• Traditional drummers and dancers (if lucky)</li>
                  <li>• Kandy Lake views from temple premises</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">Duration: 1.5 hours</p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2">5:00 PM - Kandy City Walk (Optional)</h3>
                <p className="text-sm text-muted-foreground">
                  Brief walk around Kandy Lake and local market area before return journey.
                </p>
              </div>

              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold mb-2">6:30 PM - Return to Hotel</h3>
                <p className="text-sm text-muted-foreground">
                  Drop-off at your hotel with enriched understanding of Sri Lankan Buddhist heritage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-12 border-yellow-500">
          <CardHeader>
            <CardTitle className="text-yellow-600">Temple Visit Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Dress Code:</strong> Shoulders and knees must be covered (no shorts, sleeveless tops)</li>
              <li>• <strong>Footwear:</strong> Remove shoes before entering temple premises</li>
              <li>• <strong>Photography:</strong> Allowed in most areas, but no flash inside cave temples</li>
              <li>• <strong>Respectful Behavior:</strong> Speak softly, no pointing at Buddha statues</li>
              <li>• <strong>Head Position:</strong> Never turn your back directly to Buddha images</li>
              <li>• <strong>Puja Ceremony:</strong> Temple of Tooth puja times: 5:30 AM, 9:30 AM, 6:30 PM</li>
            </ul>
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
                  <span className="text-sm">Air-conditioned vehicle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">English-speaking guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">All temple entrance fees</span>
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
                  <span className="text-sm">• Tips for guide & driver</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Donations at temples (optional)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Travel insurance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Experience Sacred Sri Lanka</h2>
            <p className="mb-6">Book your Golden Temple Circuit tour for an unforgettable cultural journey</p>
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
