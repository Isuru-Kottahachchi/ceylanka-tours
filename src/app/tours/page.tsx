"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Camera,
  Utensils,
  Hotel,
  Car,
  Sunrise,
  ChevronRight
} from "lucide-react"

const multiDayPackages = [
  {
    id: "8-days-7-nights",
    title: "Classic Sri Lanka",
    duration: "8 Days / 7 Nights",
    price: "From $850",
    images: ["/Sigiriya.jpeg", "/Adams-peak.jpeg", "/jungle-beach.jpeg", "/Colombo-City.jpeg"],
    description: "Visit the main highlights of Sri Lanka. See ancient cities, tea country, wildlife, and beaches.",
    highlights: ["Sigiriya Rock", "Kandy Temple", "Ella Hills", "Yala Safari", "Beach Relaxation"],
    category: "Popular",
    hasSlideshow: true
  },
  {
    id: "11-days-10-nights",
    title: "Grand Sri Lanka Tour",
    duration: "11 Days / 10 Nights",
    price: "From $1,250",
    images: ["/jungle-beach.jpeg", "/Adams-peak.jpeg", "/Sigiriya.jpeg", "/Colombo-City.jpeg"],
    description: "Complete island tour covering all major regions. Perfect for first-time visitors who want to see everything.",
    highlights: ["Cultural Triangle", "Hill Country", "South Coast", "East Coast", "Wildlife Parks"],
    category: "Comprehensive",
    hasSlideshow: true
  },
  {
    id: "5-days-4-nights",
    title: "Quick Escape",
    duration: "5 Days / 4 Nights",
    price: "From $550",
    images: ["/Colombo-City.jpeg", "/Sigiriya.jpeg", "/Adams-peak.jpeg", "/jungle-beach.jpeg"],
    description: "Short tour perfect for quick getaways. Experience culture, nature, and beaches in less than a week.",
    highlights: ["Colombo City", "Sigiriya", "Kandy", "Beach Time"],
    category: "Quick Tour",
    hasSlideshow: true
  },
  {
    id: "ramayana-trail-7-days",
    title: "Ramayana Trail",
    duration: "7 Days / 6 Nights",
    price: "From $750",
    images: ["/Adams-peak.jpeg", "/Sigiriya.jpeg", "/Kandy.jpeg", "/jungle-beach.jpeg"],
    description: "Follow the legendary Ramayana trail across Sri Lanka. Visit sacred sites connected to the epic.",
    highlights: ["Ashok Vatika", "Seetha Amman Temple", "Ravana Falls", "Divurumpola", "Rama's Bridge"],
    category: "Spiritual",
    hasSlideshow: true
  },
  {
    id: "wildlife-adventure-6-days",
    title: "Wildlife & Nature Explorer",
    duration: "6 Days / 5 Nights",
    price: "From $720",
    images: ["/Minneriyanationalpark.jpeg", "/jungle-beach.jpeg", "/Adams-peak.jpeg", "/Sigiriya.jpeg"],
    description: "Perfect for nature lovers! Safari parks, national reserves, bird watching, and eco-lodges.",
    highlights: ["Yala Safari", "Udawalawe Elephants", "Sinharaja Rainforest", "Whale Watching", "Bird Sanctuary"],
    category: "Adventure",
    hasSlideshow: true
  },
  {
    id: "ayurveda-wellness-10-days",
    title: "Ayurveda & Wellness Retreat",
    duration: "10 Days / 9 Nights",
    price: "From $950",
    images: ["/jungle-beach.jpeg", "/Adams-peak.jpeg", "/Kandy.jpeg", "/Colombo-City.jpeg"],
    description: "Rejuvenate your body and mind with authentic Ayurvedic treatments at luxury wellness resorts.",
    highlights: ["Ayurvedic Spa", "Yoga Sessions", "Meditation", "Herbal Treatments", "Beach Relaxation"],
    category: "Wellness",
    hasSlideshow: true
  }
]

const oneDayPackages = [
  {
    id: "sigiriya",
    title: "Sigiriya and Dambulla Day Tour",
    duration: "1 Day",
    price: "From $85",
    image: "/Sigiriya.jpeg",
    description: "Climb the famous Sigiriya Rock Fortress and visit nearby Dambulla Cave Temple.",
    highlights: ["Sigiriya Rock Fortress", "Dambulla Caves", "Local Lunch"]
  },
  {
    id: "galle",
    title: "Galle & South Coast",
    duration: "1 Day",
    price: "From $65",
    image: "/jungle-beach.jpeg",
    description: "Explore Galle Dutch Fort and enjoy beautiful southern beaches.",
    highlights: ["Galle Fort Walk", "Sea Turtle Hatchery", "Beach Visit"]
  },
    {
    id: "bentota",
    title: "Around Bentota",
    duration: "1 Day",
    price: "From $65",
    image: "/Bentota-beach.jpeg",
    description: "Explore Bentota's beautiful beaches, river, and nearby attractions.",
    highlights: ["Bentota Beach", "River Safari", "Turtle Hatchery"]
  },
  {
    id: "kandy",
    title: "Kandy City Tour",
    duration: "1 Day",
    price: "From $60",
    image: "/Kandy3.jpeg",
    description: "Visit the sacred Temple of the Tooth and explore the cultural capital of Sri Lanka.",
    highlights: ["Temple of Tooth", "Botanical Gardens", "Cultural Show"]
  },
  {
    id: "colombo",
    title: "Colombo City Tour",
    duration: "1 Day",
    price: "From $45",
    image: "/Colombo-City.jpeg",
    description: "Discover the capital city's colonial buildings, markets, and modern attractions.",
    highlights: ["Independence Square", "Galle Face", "Pettah Market"]
  },
  {
    id: "kithulgala-rafting",
    title: "Kitulgala Rafting Adventure",
    duration: "1 Day",
    price: "From $65",
    image: "/Kithulgala-waterrafting.jpg",
    description: "Experience thrilling white-water rafting in Kitulgala, surrounded by lush rainforest.",
    highlights: ["White-Water Rafting"]
  },
  {
    id: "yala-safari",
    title: "Yala National Park Safari",
    duration: "1 Day",
    price: "From $95",
    image: "/Yala-national-park.jpg",
    description: "Full-day jeep safari in Yala - highest leopard density in the world. See elephants, bears, and exotic birds.",
    highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching"]
  },
  // {
  //   id: "temple-circuit",
  //   title: "Golden Temple Circuit",
  //   duration: "1 Day",
  //   price: "From $75",
  //   image: "/Anuradhapura.jpg",
  //   description: "Visit ancient Buddhist temples and sacred sites. Perfect for spiritual travelers.",
  //   highlights: ["Kelaniya Temple", "Gangaramaya", "Seema Malaka"]
  // },
  {
    id: "udawalawa-safari",
    title: "Udawalawa Safari",
    duration: "1 Day",
    price: "From $50",
    image: "/Udawalawa-park.jpeg",
    description: "Experience a thrilling safari in Udawalawa National Park, home to elephants and diverse wildlife.",
    highlights: ["Elephant Spotting", "Bird Watching", "Nature Trails"]
  },
  {
    id: "mirissa-whale-watching",
    title: "Mirissa Whale Watching",
    duration: "1 Day",
    price: "From $80",
    image: "/Whale-in-Mirissa.jpg",
    description: "Spot blue whales and dolphins in the Indian Ocean. Includes beach time and seafood lunch.",
    highlights: ["Blue Whale Spotting", "Dolphin Pods", "Beach Relaxation"]
  },
  {
    id: "adams-peak-hike",
    title: "Adam's Peak Sunrise Trek",
    duration: "1 Day",
    price: "From $70",
    image: "/Adams-peak.jpeg",
    description: "Night trek to Adam's Peak to catch the breathtaking sunrise. Sacred pilgrimage site.",
    highlights: ["Sunrise Summit", "Sacred Footprint", "Mountain Views"]
  },
  {
    id: "spice-garden",
    title: "Spice Garden & Cooking Class",
    duration: "1 Day",
    price: "From $55",
    image: "/jungle-beach.jpeg",
    description: "Visit aromatic spice gardens in Matale and learn to cook authentic Sri Lankan cuisine.",
    highlights: ["Spice Garden Tour", "Cooking Class", "Traditional Lunch"]
  }
]

// Image Slideshow Component
function ImageSlideshow({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${alt} - ${index + 1}`}
          fill
          className={`object-cover group-hover:scale-105 transition-all duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ position: 'absolute' }}
        />
      ))}
    </>
  )
}

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Adams-peak.jpeg"
            alt="Sri Lanka tour packages"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sri Lanka Tour Packages
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Choose your perfect adventure - from quick day trips to extended island tours
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Multi-Day Tours
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Sunrise className="w-4 h-4 mr-2" />
                Day Excursions
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                All Group Sizes
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        
        {/* Multi-Day Packages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Day Adventures</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Take your time and see the best of Sri Lanka with our carefully planned tours
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <Badge variant="outline" className="text-sm">Ideal for Families</Badge>
              <Badge variant="outline" className="text-sm">Perfect for Couples</Badge>
              <Badge variant="outline" className="text-sm">Great for Groups</Badge>
              <Badge variant="outline" className="text-sm">Solo Travelers Welcome</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              ✨ All tours are fully customizable - tell us your requirements and we'll create your perfect itinerary
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {multiDayPackages.map((pkg) => (
              <Card key={pkg.id} className="group transform transition-transform duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  {pkg.hasSlideshow && pkg.images ? (
                    <ImageSlideshow images={pkg.images} alt={pkg.title} />
                  ) : (
                    <Image
                      src={pkg.images?.[0] || ""}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-orange-600 text-white">{pkg.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white z-10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{pkg.duration}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Tour Highlights:</h4>
                    <div className="space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 text-orange-600 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <div className="text-xs text-muted-foreground pl-5">
                          +{pkg.highlights.length - 3} more places
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-xl font-bold text-orange-600">{pkg.price}</p>
                    </div>
                    <Link href={`/tours/${pkg.id}`}>
                      <Button className="bg-orange-600 hover:bg-orange-700 cursor-pointer">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* One Day Tours */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One Day Tours</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Perfect for travelers with limited time. Visit top destinations in a single day
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <Badge variant="outline" className="text-sm">Family Friendly</Badge>
              <Badge variant="outline" className="text-sm">Couples Getaway</Badge>
              <Badge variant="outline" className="text-sm">Group Tours</Badge>
              <Badge variant="outline" className="text-sm">Private Options</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              💡 Flexible itineraries available - share your interests and we'll adjust the tour to match your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {oneDayPackages.map((pkg) => (
              <Card key={pkg.id} className="group transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-3 text-white">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">{pkg.duration}</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{pkg.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-1 mb-4">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Camera className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-lg font-bold text-blue-600">{pkg.price}</p>
                    </div>
                    <Link href={`/tours/${pkg.id}`}>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                        Book Now
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What's Included Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">What's Included in Our Tours</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <Car className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Transportation</h3>
                  <p className="text-sm text-muted-foreground">Comfortable air-conditioned vehicle with experienced driver</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Tour Guide</h3>
                  <p className="text-sm text-muted-foreground">English-speaking guide with local knowledge</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                  <Utensils className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Meals</h3>
                  <p className="text-sm text-muted-foreground">Breakfast and selected meals as per itinerary</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <Hotel className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Accommodation</h3>
                  <p className="text-sm text-muted-foreground">Quality hotels or guesthouses (multi-day tours)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Sri Lanka?</h2>
          <p className="text-lg mb-6 opacity-95">
            Book your perfect tour package today and start your adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button size="lg" variant="secondary" className="font-semibold cursor-pointer">
                Contact Us
              </Button>
            </Link>
            <Link href="#multi-day">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 cursor-pointer">
                Customize Your Tour
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
