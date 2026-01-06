import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  Users,
  Car,
  Hotel,
  Utensils,
  Clock,
  CheckCircle,
  ArrowLeft
} from "lucide-react"

export const metadata: Metadata = {
  title: "8 Days 7 Nights Sri Lanka Tour | Classic Sri Lanka Package",
  description: "Experience the best of Sri Lanka in 8 days. Visit Sigiriya, Kandy, Ella, Yala National Park, and beautiful beaches. Perfect introduction to the island.",
}

export default function EightDaysPackage() {
  const itinerary = [
    {
      day: 1,
      title: "Arrival & Negombo",
      description: "Pick up from airport and transfer to Negombo. Rest and relax after your flight. Evening beach walk.",
      overnight: "Negombo"
    },
    {
      day: 2,
      title: "Sigiriya Rock Fortress",
      description: "Visit the famous Sigiriya Rock. Climb to the top and see ancient paintings and gardens. Stop at Dambulla Cave Temple on the way.",
      overnight: "Sigiriya"
    },
    {
      day: 3,
      title: "Kandy Cultural City",
      description: "Travel to Kandy through scenic mountain roads. Visit Temple of the Tooth, Royal Botanical Gardens. Evening cultural dance show.",
      overnight: "Kandy"
    },
    {
      day: 4,
      title: "Tea Country - Nuwara Eliya",
      description: "Journey through tea plantations. Visit a tea factory and learn about tea making. Explore Nuwara Eliya town and Gregory Lake.",
      overnight: "Nuwara Eliya"
    },
    {
      day: 5,
      title: "Ella Train Ride",
      description: "Take the scenic train from Nanu Oya to Ella. Visit Nine Arch Bridge and Little Adam's Peak. Enjoy mountain views.",
      overnight: "Ella"
    },
    {
      day: 6,
      title: "Yala Safari",
      description: "Morning drive to Yala. Afternoon jeep safari in Yala National Park. Spot elephants, leopards, and other wildlife.",
      overnight: "Yala/Tissamaharama"
    },
    {
      day: 7,
      title: "Beach Relaxation",
      description: "Travel to south coast beaches. Relax on golden sand, swim in the ocean. Optional water sports or whale watching.",
      overnight: "Mirissa/Hikkaduwa"
    },
    {
      day: 8,
      title: "Galle & Departure",
      description: "Morning visit to Galle Fort. Walk the historic walls and explore colonial buildings. Transfer to airport for departure.",
      overnight: "Departure"
    }
  ]

  const includes = [
    "7 nights accommodation in good hotels",
    "Daily breakfast and 3 dinners",
    "Air-conditioned vehicle with driver",
    "English speaking tour guide",
    "Entrance tickets to all mentioned sites",
    "Yala National Park safari",
    "Train tickets (Nanu Oya to Ella)",
    "All government taxes"
  ]

  const excludes = [
    "International flights",
    "Visa fees",
    "Travel insurance",
    "Lunches and some dinners",
    "Personal expenses",
    "Tips for guide and driver",
    "Optional activities"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Adams-peak.jpeg"
            alt="8 Days Sri Lanka Tour"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-600">8 Days / 7 Nights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Classic Sri Lanka Tour
            </h1>
            <p className="text-xl mb-6">
              Ancient cities, tea country, wildlife, and beaches
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4" />
                <span>8 Days</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Users className="w-4 h-4" />
                <span>All Ages</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4" />
                <span>8 Cities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-orange-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This 8-day tour takes you to Sri Lanka's most famous places. You will see ancient rock fortresses, 
                visit holy temples, ride through tea plantations, spot wildlife in national parks, and relax on 
                beautiful beaches. This tour is great for first-time visitors who want to see the main highlights 
                without rushing.
              </p>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Day by Day Plan</h2>
              <div className="space-y-4">
                {itinerary.map((item) => (
                  <Card key={item.day} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                            <span className="font-bold text-orange-600">Day {item.day}</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Hotel className="w-4 h-4 text-orange-600" />
                            <span className="text-muted-foreground">Overnight: {item.overnight}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Includes & Excludes */}
            <section>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500">✕</div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Booking Card */}
              <Card className="border-2 border-orange-200 dark:border-orange-900">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-4xl font-bold text-orange-600">$850</p>
                    <p className="text-xs text-muted-foreground">per person (Min 2 people)</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>8 Days / 7 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Car className="w-4 h-4 text-orange-600" />
                      <span>Private Transport</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Hotel className="w-4 h-4 text-orange-600" />
                      <span>3-Star Hotels</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Utensils className="w-4 h-4 text-orange-600" />
                      <span>Meals Included</span>
                    </div>
                  </div>

                  <Link href="/contact-us">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 mb-3">
                      Book This Tour
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button variant="outline" className="w-full">
                      Ask Questions
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Good to Know</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Best time: December to March</li>
                    <li>• Moderate walking required</li>
                    <li>• Suitable for all ages</li>
                    <li>• Can be customized</li>
                    <li>• Free cancellation up to 7 days</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
