import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AdBanner } from "@/components/ad-banner"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Clock,
  Calendar,
  Star,
  TelescopeIcon as Binoculars,
  Car,
  Users,
  Thermometer,
  Droplets,
  Sun,
  TreePine,
  Bird,
  Heart,
  Share2,
  Bookmark,
  Phone,
  MessageCircle,
} from "lucide-react"

const wildlifeData = [
  {
    name: "Sri Lankan Leopard",
    description: "Yala has the highest leopard density in the world",
    image: "/placeholder.svg?height=200&width=300&text=Leopard",
    rarity: "Common",
    bestTime: "Early morning & evening",
  },
  {
    name: "Asian Elephant",
    description: "Large herds roam the park year-round",
    image: "/placeholder.svg?height=200&width=300&text=Elephant",
    rarity: "Very Common",
    bestTime: "All day",
  },
  {
    name: "Sloth Bear",
    description: "Elusive and rare, best spotted during fruiting season",
    image: "/placeholder.svg?height=200&width=300&text=Sloth+Bear",
    rarity: "Rare",
    bestTime: "Early morning",
  },
  {
    name: "Spotted Deer",
    description: "Most common prey species in the park",
    image: "/placeholder.svg?height=200&width=300&text=Spotted+Deer",
    rarity: "Very Common",
    bestTime: "All day",
  },
  {
    name: "Peacock",
    description: "National bird of Sri Lanka, beautiful displays",
    image: "/placeholder.svg?height=200&width=300&text=Peacock",
    rarity: "Common",
    bestTime: "Morning & evening",
  },
  {
    name: "Crocodile",
    description: "Large saltwater crocodiles in lagoons",
    image: "/placeholder.svg?height=200&width=300&text=Crocodile",
    rarity: "Common",
    bestTime: "Near water bodies",
  },
]

const safariPackages = [
  {
    name: "Half Day Safari",
    duration: "4 hours",
    price: "$45",
    includes: ["Jeep with driver", "Park entrance", "Water bottles"],
    bestFor: "First-time visitors",
  },
  {
    name: "Full Day Safari",
    duration: "8 hours",
    price: "$85",
    includes: ["Jeep with driver", "Park entrance", "Lunch", "Professional guide"],
    bestFor: "Wildlife enthusiasts",
  },
  {
    name: "Photography Safari",
    duration: "6 hours",
    price: "$120",
    includes: ["Specialized vehicle", "Photography guide", "Equipment support"],
    bestFor: "Photographers",
  },
]

const reviews = [
  {
    name: "Sarah Johnson",
    country: "Australia",
    rating: 5,
    comment:
      "Amazing leopard sightings! Saw 3 leopards in one morning safari. The guide was knowledgeable and the experience was unforgettable.",
    date: "2024-01-15",
  },
  {
    name: "Marco Silva",
    country: "Brazil",
    rating: 5,
    comment:
      "Best wildlife experience in Sri Lanka. The elephant herds were incredible and we were lucky to spot a sloth bear!",
    date: "2024-01-10",
  },
  {
    name: "Emma Thompson",
    country: "UK",
    rating: 4,
    comment:
      "Great safari experience. Lots of wildlife and beautiful scenery. Would recommend the full day safari for better chances.",
    date: "2024-01-08",
  },
]

const relatedDestinations = [
  {
    name: "Udawalawe National Park",
    image: "/placeholder.svg?height=200&width=300&text=Udawalawe",
    description: "Famous for elephant herds and bird watching",
    href: "/destinations/udawalawe",
  },
  {
    name: "Wilpattu National Park",
    image: "/placeholder.svg?height=200&width=300&text=Wilpattu",
    description: "Largest national park with unique natural lakes",
    href: "/destinations/wilpattu",
  },
  {
    name: "Minneriya National Park",
    image: "/placeholder.svg?height=200&width=300&text=Minneriya",
    description: "Famous for the great elephant gathering",
    href: "/destinations/minneriya",
  },
]

export default function YalaNationalParkPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-cyan-600">
              Home
            </Link>
            <span>›</span>
            <Link href="/destinations" className="hover:text-cyan-600">
              Destinations
            </Link>
            <span>›</span>
            <span className="text-gray-900 dark:text-white font-medium">Yala National Park</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px]">
        <Image
          src="/Yala-national-park.jpg"
          alt="Yala National Park"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Yala National Park</h1>
            <p className="text-xl md:text-2xl mb-6">Sri Lanka’s Premier Wildlife Destination</p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Southern Province</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" />
                <span>4.8 (2,450 reviews)</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                <Calendar className="h-5 w-5 mr-2" />
                Book Safari Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Bookmark className="h-5 w-5 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ad Banner */}
      <AdBanner slot="yala-page-top" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-cyan-500" />
                  <div className="font-semibold">6:00 AM - 6:00 PM</div>
                  <div className="text-sm text-gray-600">Opening Hours</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <Car className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="font-semibold">4-6 Hours</div>
                  <div className="text-sm text-gray-600">Safari Duration</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="font-semibold">6 People</div>
                  <div className="text-sm text-gray-600">Max per Jeep</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <Thermometer className="h-8 w-8 mx-auto mb-2 text-red-500" />
                  <div className="font-semibold">28-35°C</div>
                  <div className="text-sm text-gray-600">Temperature</div>
                </CardContent>
              </Card>
            </div>

            {/* Overview Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About Yala National Park</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Yala National Park is Sri Lanka’s second largest and most visited national park, renowned for having
                  the highest density of leopards in the world. Located in the southeastern region of Sri Lanka, this
                  979 square kilometer park is a biodiversity hotspot that combines scrub jungle, grasslands, and
                  lagoons.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The park is home to 44 varieties of mammals and 215 bird species. Among its more famous residents are
                  the world’s biggest concentration of leopards, majestic elephants, sloth bears, sambars, chitals,
                  elephant shrews, and crocodiles. The park is also home to many endemic bird species such as the Ceylon
                  junglefowl and the black-necked stork.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center space-x-3">
                    <TreePine className="h-6 w-6 text-green-500" />
                    <div>
                      <div className="font-semibold">979 km²</div>
                      <div className="text-sm text-gray-600">Total Area</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Bird className="h-6 w-6 text-blue-500" />
                    <div>
                      <div className="font-semibold">215 Species</div>
                      <div className="text-sm text-gray-600">Bird Species</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-red-500" />
                    <div>
                      <div className="font-semibold">44 Species</div>
                      <div className="text-sm text-gray-600">Mammals</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wildlife Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Binoculars className="h-6 w-6 mr-2" />
                  Wildlife Spotting Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wildlifeData.map((animal, index) => (
                    <div key={index} className="flex space-x-4">
                      <Image
                        src={animal.image || "/placeholder.svg"}
                        alt={animal.name}
                        width={100}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{animal.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{animal.description}</p>
                        <div className="flex items-center space-x-4 text-xs">
                          <Badge
                            variant={
                              animal.rarity === "Very Common"
                                ? "default"
                                : animal.rarity === "Common"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {animal.rarity}
                          </Badge>
                          <span className="text-gray-500">{animal.bestTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Middle Ad Banner */}
            <AdBanner slot="yala-page-middle" />

            {/* Safari Packages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Safari Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {safariPackages.map((pkg, index) => (
                    <Card key={index} className="border-2 hover:border-cyan-500 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <div className="text-2xl font-bold text-cyan-600">{pkg.price}</div>
                        <div className="text-sm text-gray-600">{pkg.duration}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="text-sm text-gray-600 mb-4">Best for: {pkg.bestFor}</div>
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Book Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Best Time to Visit */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Sun className="h-5 w-5 mr-2 text-yellow-500" />
                      Dry Season (February - July)
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Best wildlife viewing opportunities</li>
                      <li>• Animals gather around water sources</li>
                      <li>• Clear skies and minimal rainfall</li>
                      <li>• Higher leopard sighting chances</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                      Wet Season (August - January)
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Lush green landscapes</li>
                      <li>• Fewer crowds, better prices</li>
                      <li>• Migratory birds arrive</li>
                      <li>• Some areas may be inaccessible</li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-cyan-600" />
                    Daily Safari Times
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Morning Safari:</strong> 6:00 AM - 10:00 AM
                      <br />
                      <span className="text-gray-600">Best for leopard and bird watching</span>
                    </div>
                    <div>
                      <strong>Evening Safari:</strong> 2:30 PM - 6:30 PM
                      <br />
                      <span className="text-gray-600">Great for elephant herds and sunset</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Visitor Reviews</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="text-gray-600">(2,450 reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold">{review.name}</div>
                            <div className="text-sm text-gray-600">{review.country}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">View All Reviews</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sidebar Ad */}
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
              <div className="text-gray-500 dark:text-gray-400">
                <div className="text-sm font-semibold mb-2">Advertisement</div>
                <div className="text-xs">300x250 Rectangle</div>
                <div className="text-xs mt-1">AdSense Slot: yala-sidebar</div>
              </div>
            </div>

            {/* Quick Booking Card */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Quick Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Safari Date</label>
                  <input type="date" className="w-full p-2 border rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Number of People</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5 People</option>
                    <option>6 People</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Safari Time</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Morning Safari (6:00 AM)</option>
                    <option>Evening Safari (2:30 PM)</option>
                    <option>Full Day Safari</option>
                  </select>
                </div>

                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Check Availability</Button>

                <div className="text-center text-sm text-gray-600">Free cancellation up to 24 hours</div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm text-gray-600">+94 47 223 9449</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-gray-600">+94 77 123 4567</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Contact Tour Guide
                </Button>
              </CardContent>
            </Card>

            {/* Another Sidebar Ad */}
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
              <div className="text-gray-500 dark:text-gray-400">
                <div className="text-sm font-semibold mb-2">Advertisement</div>
                <div className="text-xs">300x600 Skyscraper</div>
                <div className="text-xs mt-1">AdSense Slot: yala-sidebar-2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Destinations */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Other Wildlife Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDestinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{destination.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{destination.description}</p>
                  <Link href={destination.href}>
                    <Button variant="outline" className="w-full">
                      Explore Destination
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Ad Banner */}
      <AdBanner slot="yala-page-bottom" />
    </div>
  )
}
