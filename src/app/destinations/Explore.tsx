import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Mountain, Waves, Camera, Utensils, TreePine, MapPin, Zap, ArrowRight, Star, Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Explore Sri Lanka: Adventure Sports, Trails, Cuisine & Natural Wonders | Complete Guide 2025",
  description: "Discover Sri Lanka's best adventures - from thrilling sports and famous hiking trails to waterfalls, mountains, rivers, and authentic cuisine. Your ultimate exploration guide.",
  keywords: "Sri Lanka adventure sports, famous trails Sri Lanka, waterfalls Sri Lanka, mountains hiking, rivers Sri Lanka, Sri Lankan cuisine, travel guide, explore Sri Lanka",
  openGraph: {
    title: "Explore Sri Lanka: Adventures, Trails & Natural Wonders",
    description: "Your complete guide to Sri Lanka's best adventures, famous trails, cuisine, and natural attractions",
    type: "website",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

const exploreCategories = [
  {
    id: "adventure-sports",
    title: "Activities to Do",
    description: "Thrilling activities from white water rafting to zip lining across stunning landscapes",
    icon: Zap,
    image: "/Kithulgala-waterrafting.jpg",
    highlights: ["White Water Rafting", "Zip Lining", "Rock Climbing", "Paragliding"],
    count: "15+ Activities",
    href: "/adventure-activities",
    // gradient: "from-orange-500 to-red-600"
  },
  {
    id: "famous-trails",
    title: "Famous Trails",
    description: "Iconic hiking trails and trekking routes through diverse landscapes and heritage sites",
    icon: TreePine,
    image: "/DevilsStaircase.jpeg",
    highlights: ["Adam's Peak Trail", "Ella Rock Trek", "Knuckles Range", "Horton Plains"],
    count: "20+ Trails",
    href: "/explore/famous-trails",
    // gradient: "from-green-500 to-emerald-600"
  },
  {
    id: "cuisine",
    title: "Famous Cuisine",
    description: "Authentic Sri Lankan flavors, traditional dishes, and culinary experiences",
    icon: Utensils,
    image: "/Cuisineinsl.jpg",
    highlights: ["Rice & Curry", "Hoppers", "Kottu Roti", "Ceylon Tea"],
    count: "50+ Dishes",
    href: "/famous-cuisine",
    // gradient: "from-yellow-500 to-orange-600"
  },
  // {
  //   id: "waterfalls",
  //   title: "Waterfalls",
  //   description: "Spectacular cascades and hidden falls throughout the tropical paradise",
  //   icon: Waves,
  //   image: "/Bomburuella.jpg",
  //   highlights: ["Sigiriya Falls", "Diyaluma Falls", "Sekumpura Falls", "Bambarakanda Falls"],
  //   count: "100+ Waterfalls",
  //   href: "/explore/waterfalls",
  //   // gradient: "from-blue-500 to-cyan-600"
  // },
  // {
  //   id: "mountains",
  //   title: "Mountains",
  //   description: "Majestic peaks, scenic viewpoints, and mountain adventures across the island",
  //   icon: Mountain,
  //   image: "/Mountain.jpeg",
  //   highlights: ["Pidurutalagala", "Kirigalpotta", "Totapolakanda", "Hakgala"],
  //   count: "25+ Peaks",
  //   href: "/explore/famous-hikes",
  //   // gradient: "from-purple-500 to-indigo-600"
  // },
  // {
  //   id: "rivers",
  //   title: "Rivers",
  //   description: "Scenic waterways, river safaris, and aquatic adventures through lush landscapes",
  //   icon: Waves,
  //   image: "/River.jpg",
  //   highlights: ["Mahaweli River", "Kelani River", "Bentota River", "Madu River"],
  //   count: "103 Rivers",
  //   href: "/explore/rivers",
  //   // gradient: "from-teal-500 to-blue-600"
  // },
  {
    id: "unesco-heritage",
    title: "UNESCO Heritage",
    description: "Stunning photography showcasing Sri Lanka's natural beauty and cultural heritage",
    icon: Camera,
    image: "/UNESCO.png",
    highlights: ["Landscapes", "Wildlife", "Culture", "Architecture"],
    count: "500+ Photos",
    href: "/explore/unesco-sites",
    // gradient: "from-pink-500 to-rose-600"
  },
  // {
  //   id: "gallery",
  //   title: "Image Gallery",
  //   description: "Stunning photography showcasing Sri Lanka's natural beauty and cultural heritage",
  //   icon: Camera,
  //   image: "/placeholder.svg?height=300&width=400",
  //   highlights: ["Landscapes", "Wildlife", "Culture", "Architecture"],
  //   count: "500+ Photos",
  //   href: "/explore/gallery",
  //   gradient: "from-pink-500 to-rose-600"
  // }
]

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Explore Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the Pearl of the Indian Ocean through thrilling adventures, famous trails, 
              authentic cuisine, and breathtaking natural wonders
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <Badge variant="secondary" className="text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                7 Categories
              </Badge> */}
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Island-wide Coverage
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Updated 2026
              </Badge>
            </div>
          </div>

          {/* Explore Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreCategories.map((category) => (
              <div key={category.id} className="group">
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-800">
                  <div className="relative">
                    {/* Background Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={`${category.title} in Sri Lanka - ${category.description}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} /> */}
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Count Badge */}
                      {/* <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          {category.count}
                        </Badge>
                      </div> */}

                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Featured:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.highlights.map((highlight, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-700"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Explore Button */}
                      <Link 
                        href={category.href}
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg"
                      >
                        Explore Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Sri Lankan Adventure?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Click on any category above to discover detailed guides, insider tips, and everything you need 
              to make the most of your Sri Lankan exploration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/more-about-sri-lanka" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn About Sri Lanka
              </Link>
              <Link 
                href="/destinations" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Destinations
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
