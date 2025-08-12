"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Filter } from "lucide-react"
import { AdBanner } from "@/components/ad-banner"
import React from "react"

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    path: "sigiriya-rock-fortress",
    location: "Central Province",
    image: "/Sigiriya.jpeg",
    // rating: 4.8,
    // reviews: 1250,
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
    // rating: 4.7,
    // reviews: 980,
    description: "Historic fortified city built by Portuguese and Dutch colonizers",
    highlights: ["Colonial Architecture", "Lighthouse", "Rampart Walk"],
    category: "Historical",
  },
  {
    id: 3,
    name: "Kandy",
    location: "Central Province",
    path: "kandy",
    image: "/Kandy.jpeg",
    // rating: 4.9,
    // reviews: 1580,
    description: "Sacred city with the Temple of the Tooth, a UNESCO World Heritage site",
    highlights: ["Sacred Tooth Relic", "Cultural Shows", "Royal Palace"],
    category: "Religious",
  },
  {
    id: 4,
    name: "Ella Nine Arch Bridge",
    location: "Uva Province",
    path: "ella-nine-arch",
    image: "/Nine-arch-ella.jpg",
    // rating: 4.6,
    // reviews: 750,
    description: "Popular tourist destination known for its stunning architecture and scenic views",
    highlights: ["Train Spotting", "Tea Plantations", "Hiking Trails"],
    category: "Nature",
  },
  {
    id: 5,
    name: "Yala National Park",
    location: "Southern Province",
    path: "yala-national-park",
    image: "/Yala-national-park.jpg",
    // rating: 4.5,
    // reviews: 920,
    description: "Premier wildlife destination famous for leopard sightings",
    highlights: ["Leopard Safari", "Elephant Herds", "Bird Watching"],
    category: "Wildlife",
  },
  {
    id: 6,
    name: "Mirissa Beach",
    location: "Southern Province",
    path: "mirissa",
    image: "/Mirissa.jpg",
    // rating: 4.7,
    // reviews: 1100,
    description: "Pristine beach perfect for whale watching and surfing",
    highlights: ["Whale Watching", "Surfing", "Beach Parties"],
    category: "Beach",
  },
  {
    id: 7,
    name: "Anuradhapura",
    location: "North Central Province",
    path: "anuradhapura",
    image: "/Anuradhapura.jpg",
    // rating: 4.7,
    // reviews: 1100,
    description: "Sri Lanka's ancient capital with sacred Buddhist sites",
    highlights: ["Buddhist Temples", "Ancient Ruins", "Sacred Sites"],
    category: "Historical",
  },
  {
    id: 8,
    name: "Adams Peak",
    location: "Central Province",
    path: "adams-peak",
    image: "/Adams-peak.jpeg",
    // rating: 4.4,
    // reviews: 650,
    description: "Sacred mountain with pilgrimage trail and sunrise views",
    highlights: ["Sunrise Hike", "Sacred Footprint", "Pilgrimage"],
    category: "Adventure",
  },
  {
    id: 9,
    name: "Nuwara Eliya",
    location: "Central Province",
    path: "nuwara-eliya",
    image: "/Nuwara-Eliya1.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 10,
    name: "Wilpattu National Park",
    location: "Central Province",
    path: "wilpattu-national-park",
    image: "/Wilpattu.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Sri Lankas Largest national park with diverse wildlife and scenic lakes",
    highlights: ["Sri Lanka tiger", "Crocadiles", "Bird Watching"],
    category: "Wild Life",
  },
   {
    id: 11,
    name: "Bentota",
    location: "Southern Province",
    image: "/placeholder.svg?height=400&width=600",
    path: "bentota",
    // rating: 4.3,
    // reviews: 890,
    description: "Beginning of down south beach tour with water sports",
    highlights: ["Beach", "Sea foods", "River Safari"],
    category: "Beach",
  },
  {
    id: 12,
    name: "Things you should know before visiting Bentota",
    location: "Southern Province",
    image: "/placeholder.svg?height=400&width=600",
    path: "bentota",
    // rating: 4.3,
    // reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 13,
    name: "Dambulla Cave Temple",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/Rangiri-Dambulu.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Buddhist cave temple complex with stunning frescoes and statues",
    highlights: ["Buddhist Temples", "Ancient Ruins", ""],
    category: "Historical",
  },
  {
    id: 14,
    name: "Haputhale",
    location: "Uva Province",
    path: "haputhale",
    image: "/Haputhale.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Hll city with stunning views and tea estates",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 15,
    name: "Balangoda Pre Historic Caves",
    location: "Sabaragamuwa Province",
    path: "balangoda",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Pre historic caves where ancient people lived",
    highlights: ["Pre historic caves", "Ancient Artifacts", "Pre historic people"],
    category: "Historical",
  },
  {
    id: 16,
    name: "Delft Island",
    location: "Central Province",
    path: "delft-island",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 17,
    name: "Bathangunduwa",
    location: "Central Province",
    path: "bathangunduwa",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 18,
    name: "Trincomalee",
    location: "Eastern Province",
    path: "trincomalee",
    image: "/Trinco.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Eastern coastal city with beautiful beaches and historical sites",
    highlights: ["Beaches", "Historical Sites", "Natural Harbor"],
    category: "Nature",
  },
  {
    id: 19,
    name: "Jaffna",
    location: "North Province",
    path: "jaffna",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Northern city with rich Hindu culture and heritage",
    highlights: ["Hindu Temples", "Hot Climate", ""],
    category: "Nature",
  },
  {
    id: 20,
    name: "Pasikuda",
    location: "Eastern Province",
    path: "pasikuda",
    image: "/Pasikuda.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Coastal town with stunning beaches and water sports",
    highlights: ["Beaches", "Hot Climate", ""],
    category: "Beach",
  },
  {
    id: 20,
    name: "Waligama",
    location: "Southern Province",
    path: "waligama",
    image: "/Waligama.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Coastal town with stunning beaches and water sports",
    highlights: ["Beaches", "Hot Climate", ""],
    category: "Beach",
  },
  {
    id: 21,
    name: "Yapahuwa",
    location: "North Western Province",
    path: "yapahuwa",
    image: "/Yapahuwa.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Short lived capital in ancient Sri Lanka with unique rock fortress",
    highlights: ["Past Kingdom", "Rock Fortress", ""],
    category: "Nature",
  },
  {
    id: 22,
    name: "Arugam Bay",
    location: "Eastern Province",
    path: "arugambay",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Popular surfing destination with stunning beaches and vibrant nightlife",
    highlights: ["Surfing", "Wavy Beaches", "Hot Climate"],
    category: "Beach",
  },
  {
    id: 23,
    name: "Polonnaruwa",
    location: "North Central Province",
    path: "polonnaruwa",
    image: "/Polonnaruwa.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Ancient city with well-preserved ruins and sacred sites",
    highlights: ["Ancient Ruins", "Sacred Sites", "Historical Temples"],
    category: "Historical",
  },
   {
    id: 24,
    name: "Ella",
    location: "North Central Province",
    path: "/ella-town",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Cool hill town known for its tea plantations and scenic views",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
   {
    id: 25,
    name: "Mathale",
    location: "Central Province",
    path: "/mathale",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
   {
    id: 26,
    name: "Badulla",
    location: "Uva Province",
    path: "/badulla",
    image: "/Badulla.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Greeny hill city with stunning views and tea estates",
    highlights: ["Mountains", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
     {
    id: 27,
    name: "Bandarawela",
    location: "Uva Province",
    path: "/bandarawela",
    image: "/Bandarawela.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
     {
    id: 28,
    name: "Mahiyanganaya",
    location: "Central Province",
    path: "/mahiyanganaya",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Ancinent people and their culture",
    highlights: ["Ancient people", "", ""],
    category: "Historical",
  },
     {
    id: 29,
    name: "Katharagama",
    location: "Southern Province",
    path: "/katharagama",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Religious Sites", "God Kataragama", ""],
    category: "Historical",
  },
  {
    id: 30,
    name: "Pinnawala Elephant Orphanage",
    location: "Sabaragamuwa Province",
    path: "/pinnawala-elephant-orphanage",
    image: "/Pinnawala.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Elephants", "Elephant bathing", "Elephant feeding"],
    category: "Animals",
  },
    {
    id: 31,
    name: "Madu River Safari",
    location: "Southern Province",
    path: "/pinnawala-elephant-orphanage",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Mangroves", "Wildlife", " Crocodiles"],
    category: "Animals",
  },
      {
    id: 32,
    name: "Negambo",
    location: "Western Province",
    path: "/pinnawala-elephant-orphanage",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Beaches", "Sea foods", "Catholic Churches"],
    category: "City",
  },
      {
    id: 33,
    name: "Colombo City Tour",
    location: "Western Province",
    path: "/colombo-city-tour",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Around the heart of the Economic Capital of Sri Lanka",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "City",
  },

]

const categories = ["All", "Historical", "Religious", "Nature", "Wildlife", "Beach", "Adventure"]

export default function DestinationsPage() {
  // const [category, setCategory] = React.useState("All")
  const [showSearchReminder, setShowSearchReminder] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const reminderInterval = 20000; // 20 seconds
  const reminderDuration = 5000; // 5 seconds
  const [category, setCategory] = React.useState("All");

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    if (searchValue.length > 0) {
      setShowSearchReminder(false);
    } else {
      // Show immediately on mount
      setShowSearchReminder(true);
      // Then show every 30s for 5s
      intervalId = setInterval(() => {
        setShowSearchReminder(true);
        timeoutId = setTimeout(() => setShowSearchReminder(false), reminderDuration);
      }, reminderInterval);
      // Hide after 5s if still visible
      timeoutId = setTimeout(() => setShowSearchReminder(false), reminderDuration);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [searchValue]);

  console.log("Category:", category);

  // ...existing code...
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Sri Lanka&apos;s Destinations</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From ancient temples to pristine beaches, discover the diverse attractions that make Sri Lanka truly special
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 w-full relative">
              <Input
                type="search"
                placeholder="Search destinations..."
                className={`bg-white text-black pl-10 transition-shadow ${showSearchReminder ? 'ring-2 ring-green-400 ring-offset-2' : ''}`}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              {/* Desktop: popup below search bar, arrow up */}
              {showSearchReminder && (
                <>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-30 bg-green-600 text-white text-sm rounded-lg shadow-2xl px-4 py-3 border-2 border-white dark:border-green-400 font-semibold animate-bounce flex-col items-center hidden sm:flex top-full mt-4"
                  >
                    <svg className="absolute -top-4" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L23.1962 15L0.803847 15L12 0Z" fill="#22c55e"/>
                    </svg>
                    <span className="flex items-center gap-2 mb-1">
                      <Search className="h-4 w-4 text-white" />
                     Search your favorite destinations in Sri Lanka:
                    </span>
                
                  </div>
                </>
              )}
            </div>
            <Button className="bg-white text-green-600 hover:bg-gray-100 cursor-pointer">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            {/* Mobile: popup below search input */}
            {showSearchReminder && (
              <div className="relative w-full flex flex-col items-center sm:hidden">
                <div className="mt-2 bg-green-600 text-white text-sm rounded-lg shadow-2xl px-4 py-3 border-2 border-white dark:border-green-400 font-semibold animate-bounce flex flex-col items-center">
                  <svg className="absolute -top-4" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L23.1962 15L0.803847 15L12 0Z" fill="#22c55e"/>
                  </svg>
                  <span className="flex items-center gap-2 mb-1">
                    <Search className="h-4 w-4 text-white" />
                    Search your favorite destinations in Sri Lanka:
                  </span>
      
                </div>
              </div>
            )}
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
              className={category === "All" 
                ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer" 
                : "border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100  cursor-pointer"
              }
              onClick={() => {setCategory(category)}}
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
                {/* <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{destination.rating}</span>
                </div> */}

                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600 text-white border-0">{destination.category}</Badge>

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
                  {destination.highlights.slice(0, 4).map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                      {highlight}
                    </Badge>
                  ))}
                  {destination.highlights.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                      +{destination.highlights.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  {/* <div className="text-xs text-gray-500 dark:text-gray-400">{destination.reviews} reviews</div> */}
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
