import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, Mountain, Sun } from "lucide-react"

export default function AdamsPeakTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/jungle-beach.jpeg"
          alt="Adam's Peak Sunrise Trek"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-600">Spiritual Trek</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Adam's Peak Sunrise Trek</h1>
            <p className="text-xl md:text-2xl mb-6">Overnight Experience</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Climb the sacred mountain and witness a breathtaking sunrise from 2,243 meters
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
                <Clock className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">Overnight</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Start Time</p>
                  <p className="font-semibold">11:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Difficulty</p>
                  <p className="font-semibold">Moderate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-orange-600 text-xl">$70</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Description */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Trek Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Embark on a spiritual journey to Adam's Peak (Sri Pada), one of Sri Lanka's most sacred mountains revered by Buddhists, Hindus, Muslims, and Christians. The conical peak features a "sacred footprint" – Buddhists believe it's Buddha's, Hindus claim Shiva's, Muslims say Adam's, and Christians believe it's St. Thomas'.
            </p>
            <p className="text-muted-foreground">
              The overnight climb of 5,500 steps through jungle and mountain paths leads to a spectacular sunrise view where your shadow is cast upon the clouds below – a phenomenon called "Shadow of the Peak." Best experienced from December to May during the pilgrimage season.
            </p>
          </CardContent>
        </Card>

        {/* Itinerary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Trek Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-orange-600" />
                  8:00 PM - Departure from Hotel
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pickup from your hotel in Hatton, Nuwara Eliya, or Ella. Transfer to Dalhousie village at the mountain base (approximately 1-2 hours depending on location).
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">10:00 PM - Arrival & Preparation</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Arrive at Dalhousie. Light dinner at a local restaurant. Final preparations:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Equipment check (flashlight, warm clothing)</li>
                  <li>• Trek briefing by guide</li>
                  <li>• Water and snack distribution</li>
                  <li>• Walking stick rental (optional, Rs. 50)</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">11:00 PM - Begin Night Ascent</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Start the climb with headlamps/flashlights. The trail is well-lit by rest stops during pilgrimage season. The 7 km trek includes:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>First 2 km:</strong> Gentle incline through tea plantations</li>
                  <li>• <strong>Next 3 km:</strong> Moderate climb with stone steps</li>
                  <li>• <strong>Final 2 km:</strong> Steeper climb to the summit</li>
                  <li>• <strong>Rest Stops:</strong> Tea stalls every 500m selling refreshments</li>
                  <li>• <strong>5,500 Steps:</strong> Numbered markers track your progress</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Average climbing time: 3-4 hours | Take breaks as needed
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-orange-600" />
                  3:00 AM - Reach the Summit
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Arrive at the peak (2,243m / 7,359ft). Find a good viewing spot and wait for sunrise. Summit experiences:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Visit the sacred footprint shrine</li>
                  <li>• Hot tea and snacks from summit shops</li>
                  <li>• Buddhist chanting and bell ringing</li>
                  <li>• Panoramic mountain views</li>
                  <li>• Temperature: 5-10°C (bring warm layers!)</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">6:00 AM - Spectacular Sunrise</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Witness one of nature's most stunning phenomena:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Triangular Shadow:</strong> The mountain's perfect shadow on clouds</li>
                  <li>• <strong>360° Views:</strong> See both east and west coasts on clear days</li>
                  <li>• <strong>Cloud Sea:</strong> Mountains emerging from clouds like islands</li>
                  <li>• <strong>Rainbow Halos:</strong> Colorful circular rainbows around your shadow</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">7:00 AM - Descent Begins</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Start the descent in daylight – much easier but still requires care on steep steps. Descent takes 2-3 hours. Enjoy views you missed in darkness:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Lush green jungle canopy</li>
                  <li>• Waterfalls along the trail</li>
                  <li>• Tea plantation scenery</li>
                  <li>• Colorful prayer flags</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold mb-2">10:00 AM - Breakfast & Return</h3>
                <p className="text-sm text-muted-foreground">
                  Hearty breakfast at Dalhousie restaurant. Transfer back to your hotel with memories of an extraordinary spiritual and physical achievement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trek Details */}
        <Card className="mb-12 border-orange-500">
          <CardHeader>
            <CardTitle className="text-orange-600">Trek Details & Preparation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Physical Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Fitness Level:</strong> Moderate (can walk 7 km)</li>
                  <li>• <strong>Age:</strong> Suitable for ages 10-70</li>
                  <li>• <strong>Health:</strong> No serious heart/knee conditions</li>
                  <li>• <strong>Total Distance:</strong> 14 km round trip</li>
                  <li>• <strong>Altitude Gain:</strong> 1,150 meters</li>
                  <li>• <strong>Success Rate:</strong> 95% reach summit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">What to Bring</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Essential:</strong> Flashlight/headlamp with extra batteries</li>
                  <li>• Warm jacket or fleece (summit is cold!)</li>
                  <li>• Comfortable hiking shoes with good grip</li>
                  <li>• 2 liters of water</li>
                  <li>• Energy snacks (chocolate, nuts, fruits)</li>
                  <li>• Light rain jacket (weather can change)</li>
                  <li>• Camera with good low-light capability</li>
                  <li>• Small cash for tea stalls (Rs. 500-1000)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Season */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Best Time to Climb</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-semibold mb-2">Pilgrimage Season (Best Time)</p>
                <p className="text-sm text-muted-foreground">
                  <strong>December to May:</strong> Full moon to full moon. Trail fully lit, all tea stalls open, vibrant atmosphere with thousands of pilgrims. Clear weather and highest sunrise visibility.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Off-Season Climbing</p>
                <p className="text-sm text-muted-foreground">
                  <strong>June to November:</strong> Possible but challenging. Monsoon rains, limited facilities, fewer lights. More peaceful but requires experienced guide and proper equipment.
                </p>
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
                  <span className="text-sm">Transport to/from Dalhousie</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Experienced trekking guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Dinner before climb</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Breakfast after descent</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Water bottles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Flashlight (if needed)</span>
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
                  <span className="text-sm">• Walking stick rental (Rs. 50)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Tea/snacks during climb (Rs. 500-1000)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Temple donations (optional)</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Personal expenses</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-sm">• Tips for guide</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Conquer the Sacred Peak</h2>
            <p className="mb-6">Book your Adam's Peak sunrise trek for a life-changing spiritual adventure</p>
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
