"use client"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin} from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    location: "Central Province",
    image: "/Sigiriya.jpeg",
    rating: 4.8,
    reviews: 1250,
    description: "Ancient rock fortress and palace ruins with stunning frescoes and gardens",
    highlights: ["UNESCO World Heritage", "Ancient Frescoes", "Lion's Gate"],
    category: "Historical",
  },
  {
    id: 2,
    name: "Galle Fort",
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
    name: "Kandy",
    path: "kandy",
    location: "Central Province",
    image: "/Kandy3.jpeg",
    rating: 4.9,
    reviews: 1580,
    description: "Sacred Buddhist temple housing the relic of Buddha's tooth",
    highlights: ["Sacred Tooth Relic", "Cultural Shows", "Royal Palace"],
    category: "Religious",
  },
  {
    id: 4,
    name: "Ella Town",
    path: "ella-town",
    location: "Uva Province",
    image: "/Nine-arch-ella.jpg",
    rating: 4.6,
    reviews: 750,
    description: "Popular tourist destination known for its stunning architecture and scenic views",
    highlights: ["Train Spotting", "Tea Plantations", "Hiking Trails"],
    category: "Nature",
  },
  {
    id: 5,
    name: "Yala National Park",
    location: "Southern Province",
    image: "/Yala-national-park.jpg",
    rating: 4.5,
    reviews: 920,
    description: "Premier wildlife destination famous for leopard sightings",
    highlights: ["Leopard Safari", "Elephant Herds", "Bird Watching"],
    category: "Wildlife",
  },
  {
    id: 6,
    name: "Mirissa",
    location: "Southern Province",
    path: "mirissa",
    image: "/Mirissa.jpg",
    rating: 4.7,
    reviews: 1100,
    description: "Pristine beach perfect for whale watching and surfing",
    highlights: ["Whale Watching", "Surfing", "Beach Parties"],
    category: "Beach",
  },
  {
    id: 7,
    name: "Adam's Peak / Sri Pada",
    path: "adams-peak",
    location: "Central Province",
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
    image: "/Nuwara-Eliya1.jpg",
    rating: 4.3,
    reviews: 890,
    description: "Hill station known as 'Little England' with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 9,
    name: "Anuradhapura",
    location: "North Central Province",
    image: "/Anuradhapura.jpg",
    rating: 4.3,
    reviews: 890,
    description: "Ancient city with well-preserved ruins and sacred sites",
    highlights: ["Buddhist Temples", "Sacred Sites", "Ancient Ruins"],
    category: "Historical",
  },

]

// const categories = ["All", "Historical", "Religious", "Nature", "Wildlife", "Beach", "Adventure"]

export function PopularDestinations() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const getDestinationHref = (destination: (typeof destinations)[0]) => {
    // Special handling for Yala National Park to link to our detailed page
    if (destination.name === "Yala National Park") {
      return "/destinations/yala"
    }
    // For other destinations, use a generic pattern
    return `/destinations/${destination.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the most visited and beloved destinations across the beautiful island of Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              data-aos="zoom-in-up"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Rating Badge */}
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div> */}

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600 text-white border-0">{destination.category}</Badge>

                {/* Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{destination.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 3).map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                      {highlight}
                    </Badge>
                  ))}
                  {destination.highlights.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                      +{destination.highlights.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  {/* <div className="text-sm text-gray-500 dark:text-gray-400">{destination.reviews} reviews</div> */}
                  <Link
                    href={getDestinationHref(destination)}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Explore All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}
