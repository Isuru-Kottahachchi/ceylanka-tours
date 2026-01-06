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
  title: "5 Days 4 Nights Sri Lanka Tour | Quick Escape Package",
  description: "Perfect short tour of Sri Lanka. Visit Colombo, Sigiriya, Kandy, and beaches in just 5 days. Ideal for quick getaways and limited time travelers.",
}

export default function FiveDaysPackage() {
  const itinerary = [
    {
      day: 1,
      title: "Colombo City Tour",
      description: "Pick up from airport. Quick city tour of Colombo - see Independence Square, Galle Face Green, and Pettah market. Lunch at local restaurant. Evening drive to Sigiriya area.",
      overnight: "Sigiriya/Dambulla"
    },
    {
      day: 2,
      title: "Sigiriya Rock & Dambulla",
      description: "Early morning climb up Sigiriya Rock Fortress. Amazing views from the top. Visit Dambulla Cave Temple with golden Buddha statues. Free evening to relax.",
      overnight: "Sigiriya/Dambulla"
    },
    {
      day: 3,
      title: "Kandy Temple City",
      description: "Drive to Kandy through scenic roads. Visit Temple of the Tooth, the most sacred Buddhist site. Walk around Kandy Lake. Visit Royal Botanical Gardens. Watch traditional dance show in the evening.",
      overnight: "Kandy"
    },
    {
      day: 4,
      title: "Beach Time",
      description: "Morning drive to west coast beaches (Bentota or Negombo). Relax on the beach, swim in the ocean. Optional water sports available. Enjoy fresh seafood dinner.",
      overnight: "Beach Hotel"
    },
    {
      day: 5,
      title: "Beach & Departure",
      description: "Free morning on the beach. Last chance for swimming or beach walk. Check out and transfer to airport. Drop off for your flight home.",
      overnight: "Departure"
    }
  ]

  const includes = [
    "4 nights in comfortable hotels",
    "Daily breakfast",
    "Air-conditioned car with driver",
    "English speaking guide",
    "Entrance to Sigiriya and Dambulla",
    "Entrance to Temple of the Tooth",
    "Cultural dance show tickets",
    "All highway tolls and parking",
    "Government taxes"
  ]

  const excludes = [
    "International flights",
    "Visa fees ($50 online)",
    "Travel insurance",
    "Lunch and dinner (except mentioned)",
    "Personal expenses",
    "Tips for driver and guide",
    "Beach activities",
    "Items not mentioned"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Adams-peak.jpeg"
            alt="5 Days Quick Sri Lanka Tour"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-600">5 Days / 4 Nights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quick Escape Tour
            </h1>
            <p className="text-xl mb-6">
              Perfect short tour - culture, nature, and beach
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4" />
                <span>5 Days Only</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Users className="w-4 h-4" />
                <span>Perfect for Couples</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4" />
                <span>4 Main Stops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-green-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Tours
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This 5-day tour is perfect for travelers who have limited time but still want to experience Sri Lanka. 
                You will see the most important highlights - the famous Sigiriya rock, the sacred city of Kandy, and 
                beautiful beaches. This tour gives you a good taste of Sri Lankan culture, history, and nature without 
                feeling rushed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Great for couples on vacation, business travelers with extra days, or anyone who wants a quick tropical 
                getaway. The tour is easy with not too much walking. You get a private car and driver, so it's comfortable 
                and flexible.
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
                          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <span className="font-bold text-green-600">Day {item.day}</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Hotel className="w-4 h-4 text-green-600" />
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

            {/* Perfect For */}
            <section>
              <h2 className="text-2xl font-bold mb-4">This Tour is Perfect For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">🏖️ Quick Vacation</h4>
                  <p className="text-sm text-muted-foreground">Weekend plus a few days - see the best sights</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">💑 Couples</h4>
                  <p className="text-sm text-muted-foreground">Romantic getaway with culture and beaches</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">💼 Business + Leisure</h4>
                  <p className="text-sm text-muted-foreground">Add tour after business trip</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">⏰ Limited Time</h4>
                  <p className="text-sm text-muted-foreground">Can't take long vacation but want to visit</p>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Booking Card */}
              <Card className="border-2 border-green-200 dark:border-green-900">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-4xl font-bold text-green-600">$550</p>
                    <p className="text-xs text-muted-foreground">per person (Min 2 people)</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>5 Days / 4 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Car className="w-4 h-4 text-green-600" />
                      <span>Private Car</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Hotel className="w-4 h-4 text-green-600" />
                      <span>Beach Hotel Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Utensils className="w-4 h-4 text-green-600" />
                      <span>Breakfast Daily</span>
                    </div>
                  </div>

                  <Link href="/contact-us">
                    <Button className="w-full bg-green-600 hover:bg-green-700 mb-3">
                      Book Now
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
                  <h3 className="font-bold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Available year-round</li>
                    <li>• Easy walking - not difficult</li>
                    <li>• Good for all ages</li>
                    <li>• Starts and ends at airport</li>
                    <li>• Can extend with extra days</li>
                    <li>• Free cancel up to 5 days before</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Add-ons */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Popular Add-ons</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Extra beach days: $80/day</li>
                    <li>• Wildlife safari: $95</li>
                    <li>• Ayurvedic spa: $65</li>
                    <li>• Cooking class: $45</li>
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
