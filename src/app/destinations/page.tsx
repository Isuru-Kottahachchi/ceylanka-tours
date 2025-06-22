import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Star, Search, Filter } from "lucide-react"
import { AdBanner } from "@/components/ad-banner"

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    path: "sigiriya-rock-fortress",
    location: "Central Province",
    image: "/Sigiriya.jpeg",
    rating: 4.8,
    reviews: 1250,
    description: "Ancient rock fortress and palace ruins with stunning frescoes and gardens",
    highlights: ["UNESCO World Heritage", "Ancient Frescoes", "Lions Gate"],
    category: "Historical",
  },
  {
    id: 2,
    name: "Galle Fort",
    path: "galle-fort",
    location: "Southern Province",
    image: "/galle-fort-sarmat-batagov-unsplash.jpg",
    rating: 4.7,
    reviews: 980,
    description: "Historic fortified city built by Portuguese and Dutch colonizers",
    highlights: ["Colonial Architecture", "Lighthouse", "Rampart Walk"],
    category: "Historical",
  },
  {
    id: 3,
    name: "Kandy Temple of the Tooth",
    location: "Central Province",
    path:"kandy",
    image: "/Kandy.jpeg",
    rating: 4.9,
    reviews: 1580,
    description: "Sacred Buddhist temple housing the relic of Buddhas tooth",
    highlights: ["Sacred Tooth Relic", "Cultural Shows", "Royal Palace"],
    category: "Religious",
  },
  {
    id: 4,
    name: "Ella Nine Arch Bridge",
    location: "Uva Province",
    path: "ella-nine-arch",
    image: "/Nine-arch-ella.jpg",
    rating: 4.6,
    reviews: 750,
    description: "Iconic railway bridge surrounded by lush tea plantations",
    highlights: ["Train Spotting", "Tea Plantations", "Hiking Trails"],
    category: "Nature",
  },
  {
    id: 5,
    name: "Yala National Park",
    location: "Southern Province",
    path: "yala-national-park",
    image: "/Yala-national-park.jpg",
    rating: 4.5,
    reviews: 920,
    description: "Premier wildlife destination famous for leopard sightings",
    highlights: ["Leopard Safari", "Elephant Herds", "Bird Watching"],
    category: "Wildlife",
  },
   {
    id: 6,
    name: "Mirissa Beach",
    location: "Southern Province",
    image: "/Mirissa.jpg",
    rating: 4.7,
    reviews: 1100,
    description: "Pristine beach perfect for whale watching and surfing",
    highlights: ["Whale Watching", "Surfing", "Beach Parties"],
    category: "Beach",
  },
  {
    id: 6,
    name: "Anuradhapura",
    location: "North Central Province",
    path: "anuradhapura",
    image: "/Anuradhapura.jpg",
    rating: 4.7,
    reviews: 1100,
    description: "Pristine beach perfect for whale watching and surfing",
    highlights: ["Whale Watching", "Surfing", "Beach Parties"],
    category: "Beach",
  },
  {
    id: 7,
  name: "Adams Peak",
    location: "Central Province",
    path: "adams-peak",
    image: "/Adams-peak.jpeg",
    rating: 4.4,
    reviews: 650,
    description: "Sacred mountain with pilgrimage trail and sunrise views",
    highlights: ["Sunrise Hike", "Sacred Footprint", "Pilgrimage"],
    category: "Adventure",
  },
  {
    id: 8,
    name: "Nuwara Eliya",
    location: "Central Province",
    path: "nuwara-eliya",
    image: "/Nuwara-Eliya1.jpg",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
    {
    id: 8,
    name: "Wilpattu National Park",
    location: "Central Province",
    path: "wilpattu-national-park",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
    {
    id: 8,
    name: "Things you should know before visiting Bentota",
    location: "Central Province",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
    {
    id: 8,
    name: "Dambulla Cave Temple",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/Rangiri-Dambulu.jpg",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
   {
    id: 8,
    name: "Haputhale",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
   {
    id: 8,
    name: "Balangoda Cave Temple",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
   {
    id: 8,
    name: "Delft Island",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
   {
    id: 8,
    name: "Bathangunduwa",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
     {
    id: 8,
    name: "Trincomalee",
    location: "Central Province",
    path: "trincomalee",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
      {
    id: 8,
    name: "Jaffna",
    location: "North Province",
    path: "jaffna",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Northern city with rich Hindu culture and heritage",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
      {
    id: 8,
    name: "Pasikuda",
    location: "Central Province",
    path: "pasikuda",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
      {
    id: 8,
    name: "Yapahuwa",
    location: "Central Province",
    path: "yapahuwa",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
      {
    id: 8,
    name: "Trincomalee",
    location: "Central Province",
    path: "trincomalee",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
      {
    id: 8,
    name: "Polonnaruwa",
    location: "North Central Province",
    path: "trincomalee",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.3,
    reviews: 890,
    description: "",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Historical",
  },
]

const categories = ["All", "Historical", "Religious", "Nature", "Wildlife", "Beach", "Adventure"]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Sri Lankas Destinations</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From ancient temples to pristine beaches, discover the diverse attractions that make Sri Lanka truly special
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 w-full relative">
              <Input type="search" placeholder="Search destinations..." className="bg-white text-black pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-green-500 hover:bg-green-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <AdBanner slot="destinations-top" />

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{destination.rating}</span>
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">{destination.category}</Badge>

                {/* Location */}
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-bold text-lg mb-1">{destination.name}</h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <MapPin className="h-3 w-3" />
                    <span>{destination.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{destination.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {destination.highlights.slice(0, 2).map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                  {destination.highlights.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{destination.highlights.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">{destination.reviews} reviews</div>
                  <Link
                    href={`/destinations/${destination.path}`}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                  >
                    Explore →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <AdBanner slot="destinations-bottom" />

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold">
            Load More Destinations
          </Button>
        </div>
      </div>
    </div>
  )
}
