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
  title: "11 Days 10 Nights Sri Lanka Tour | Grand Island Experience",
  description: "Complete Sri Lanka tour covering all regions. Cultural triangle, hill country, east coast, south coast, wildlife parks, and more in 11 amazing days.",
}

export default function ElevenDaysPackage() {
  const itinerary = [
    {
      day: 1,
      title: "Airport to Negombo",
      description: "Welcome to Sri Lanka! Meet your driver and transfer to Negombo beach town. Rest after your journey. Evening walk on the beach.",
      overnight: "Negombo"
    },
    {
      day: 2,
      title: "Anuradhapura Ancient City",
      description: "Drive to Anuradhapura, one of the ancient capitals. Visit sacred Buddhist sites, old temples, and huge stupas. See the sacred Bodhi tree.",
      overnight: "Anuradhapura"
    },
    {
      day: 3,
      title: "Sigiriya & Dambulla",
      description: "Climb Sigiriya Rock Fortress in the morning. Visit Dambulla Cave Temple with beautiful Buddha statues and paintings.",
      overnight: "Sigiriya"
    },
    {
      day: 4,
      title: "Polonnaruwa & Minneriya",
      description: "Explore Polonnaruwa ancient ruins by bicycle. Evening safari at Minneriya National Park to see wild elephants gathering.",
      overnight: "Sigiriya/Habarana"
    },
    {
      day: 5,
      title: "Kandy Temple City",
      description: "Travel to Kandy stopping at a spice garden. Visit Temple of the Tooth Relic. Walk around Kandy Lake. Evening cultural show.",
      overnight: "Kandy"
    },
    {
      day: 6,
      title: "Tea Plantations",
      description: "Journey through beautiful tea estates. Visit a working tea factory. Explore Nuwara Eliya town, botanical gardens, and Gregory Lake.",
      overnight: "Nuwara Eliya"
    },
    {
      day: 7,
      title: "Horton Plains & Ella",
      description: "Early morning visit to Horton Plains and World's End viewpoint. Afternoon travel to Ella. Visit Ravana Falls on the way.",
      overnight: "Ella"
    },
    {
      day: 8,
      title: "Ella Exploration",
      description: "Hike to Little Adam's Peak or Ella Rock. Visit Nine Arch Bridge. Enjoy the cool mountain air and amazing views.",
      overnight: "Ella"
    },
    {
      day: 9,
      title: "Yala Wildlife Safari",
      description: "Drive to Yala area. Afternoon jeep safari in Yala National Park. See leopards, elephants, sloth bears, and many birds.",
      overnight: "Yala/Tissamaharama"
    },
    {
      day: 10,
      title: "Mirissa Beach & Galle",
      description: "Travel along the south coast. Stop at Mirissa beach for swimming. Visit historic Galle Fort and walk the old walls.",
      overnight: "Galle/Unawatuna"
    },
    {
      day: 11,
      title: "Beach & Departure",
      description: "Morning free time on the beach or optional turtle hatchery visit. Transfer to Colombo airport for your flight home.",
      overnight: "Departure"
    }
  ]

  const includes = [
    "10 nights in comfortable hotels/guesthouses",
    "Daily breakfast and 5 dinners",
    "Private air-conditioned vehicle",
    "Professional English speaking guide",
    "All entrance fees to monuments",
    "Yala jeep safari and Minneriya safari",
    "Train journey (optional scenic route)",
    "Bottled water during travel",
    "All taxes and service charges"
  ]

  const excludes = [
    "International air tickets",
    "Sri Lanka visa ($50)",
    "Travel insurance (recommended)",
    "Most lunches and dinners",
    "Alcoholic drinks",
    "Tips for guide and driver",
    "Personal shopping",
    "Activities not mentioned"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/jungle-beach.jpeg"
            alt="11 Days Grand Sri Lanka Tour"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600">11 Days / 10 Nights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Grand Sri Lanka Tour
            </h1>
            <p className="text-xl mb-6">
              Complete island experience - all regions, all highlights
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Calendar className="w-4 h-4" />
                <span>11 Days</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Users className="w-4 h-4" />
                <span>Families Welcome</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4" />
                <span>12+ Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Link href="/tours" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
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
                This is our most complete Sri Lanka tour. In 11 days you will visit all the important parts of the 
                island. Start in the cultural triangle with ancient cities and temples. Move to the green tea country 
                in the mountains. Experience wildlife safaris in national parks. Enjoy beautiful beaches on the south 
                coast. This tour is perfect for travelers who want to see everything Sri Lanka has to offer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The pace is comfortable with time to enjoy each place. You will stay in good quality hotels, travel 
                in a private vehicle, and have an experienced guide to show you around. This tour works well for 
                families, couples, and solo travelers.
              </p>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Complete Itinerary</h2>
              <div className="space-y-4">
                {itinerary.map((item) => (
                  <Card key={item.day} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <span className="font-bold text-blue-600">Day {item.day}</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Hotel className="w-4 h-4 text-blue-600" />
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

            {/* Why Choose This Tour */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Choose This Tour</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Complete Experience</h4>
                  <p className="text-sm text-muted-foreground">See all major regions and attractions in one trip</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Comfortable Pace</h4>
                  <p className="text-sm text-muted-foreground">Not rushed - enough time at each location</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Good Value</h4>
                  <p className="text-sm text-muted-foreground">More days mean better price per day</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Flexible</h4>
                  <p className="text-sm text-muted-foreground">Can adjust to your interests and needs</p>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-48 space-y-6">
              
              {/* Booking Card */}
              <Card className="border-2 border-blue-200 dark:border-blue-900">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-4xl font-bold text-blue-600">$1,250</p>
                    <p className="text-xs text-muted-foreground">per person (Min 2 people)</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>11 Days / 10 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Car className="w-4 h-4 text-blue-600" />
                      <span>Private Vehicle</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Hotel className="w-4 h-4 text-blue-600" />
                      <span>Quality Accommodation</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Utensils className="w-4 h-4 text-blue-600" />
                      <span>Many Meals Included</span>
                    </div>
                  </div>

                  <Link href="/contact-us">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">
                      Book This Tour
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button variant="outline" className="w-full">
                      Get Custom Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Tour Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Best: December to March</li>
                    <li>• Fitness level: Easy to moderate</li>
                    <li>• Age: Suitable for all</li>
                    <li>• Group size: 2 to 15 people</li>
                    <li>• Customizable itinerary</li>
                    <li>• Free changes up to 14 days before</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Special Offer */}
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Special Offer</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Book 3 months in advance and get 10% discount
                  </p>
                  <Badge variant="secondary">Limited Time</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
