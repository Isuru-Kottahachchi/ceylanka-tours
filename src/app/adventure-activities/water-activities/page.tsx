"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Waves, 
  Fish, 
  Wind,
  Anchor,
  Camera,
  Clock,
  MapPin,
  Users,
  Heart,
  AlertTriangle,
  CheckCircle,
  Star,
  ArrowLeft,
  ChevronRight,
  Sun
} from "lucide-react"

export default function WaterActivitiesPage() {
  const waterDestinations = [
    {
      name: "Arugam Bay",
      description: "World-renowned surfing destination with consistent waves",
      activities: ["Surfing", "Beach lounging", "Yoga", "Local cuisine"],
      bestTime: "April - September",
      skillLevel: "All levels",
      image: "/placeholder.jpg",
      highlights: ["Right-hand point breaks", "Surf schools", "Laid-back vibe", "Wildlife spotting"]
    },
    {
      name: "Mirissa",
      description: "Premier whale watching location and beautiful beach town",
      activities: ["Whale watching", "Snorkeling", "Beach activities", "Sunset views"],
      bestTime: "November - April",
      skillLevel: "All levels",
      image: "/Mirissa.jpg",
      highlights: ["Blue whale sightings", "Coconut Tree Hill", "Beach parties", "Fresh seafood"]
    },
    {
      name: "Kalpitiya",
      description: "Kitesurfing paradise with shallow lagoons and steady winds",
      activities: ["Kitesurfing", "Windsurfing", "Dolphin watching", "Island hopping"],
      bestTime: "May - September",
      skillLevel: "Beginner to Advanced",
      image: "/placeholder.jpg",
      highlights: ["Perfect wind conditions", "Flat water lagoons", "Dolphin pods", "Sandbar islands"]
    },
    {
      name: "Hikkaduwa",
      description: "Vibrant coral reefs perfect for diving and snorkeling",
      activities: ["Scuba diving", "Snorkeling", "Glass boat tours", "Sea turtle watching"],
      bestTime: "November - April",
      skillLevel: "All levels",
      image: "/placeholder.jpg",
      highlights: ["Coral gardens", "Sea turtle encounters", "Night diving", "Marine sanctuary"]
    }
  ]

  const waterSports = [
    {
      name: "Surfing",
      icon: Waves,
      description: "Ride world-class waves along Sri Lanka&apos;s stunning coastlines",
      locations: ["Arugam Bay", "Mirissa", "Hikkaduwa", "Weligama"],
      difficulty: "Beginner to Expert"
    },
    {
      name: "Scuba Diving",
      icon: Fish,
      description: "Explore vibrant coral reefs and encounter diverse marine life",
      locations: ["Hikkaduwa", "Mirissa", "Trincomalee", "Kalpitiya"],
      difficulty: "Beginner to Advanced"
    },
    {
      name: "Kitesurfing",
      icon: Wind,
      description: "Experience the thrill of wind-powered water sports",
      locations: ["Kalpitiya", "Mannar", "Bentota"],
      difficulty: "Intermediate to Expert"
    },
    {
      name: "Whale Watching",
      icon: Heart,
      description: "Witness majestic whales and dolphins in their natural habitat",
      locations: ["Mirissa", "Trincomalee", "Kalpitiya"],
      difficulty: "All levels"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/jungle-beach.jpeg"
            alt="Water activities in Sri Lanka"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Water Activities in Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Dive into adventure with world-class surfing, diving, and marine encounters
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Waves className="w-4 h-4 mr-1" />
                World-class Waves
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Fish className="w-4 h-4 mr-1" />
                Rich Marine Life
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sun className="w-4 h-4 mr-1" />
                Year-round Adventure
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/adventure-activities" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Adventure Activities
          </Link>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Discover Sri Lanka&apos;s Marine Paradise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                Sri Lanka&apos;s tropical waters offer some of the world&apos;s best marine adventures. 
                From surfing legendary breaks to diving pristine coral reefs, the island&apos;s coastline 
                provides endless opportunities for water sports enthusiasts.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Experience world-class surfing at Arugam Bay, encounter blue whales in Mirissa, 
                master kitesurfing in Kalpitiya, or explore underwater coral gardens in Hikkaduwa.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Certified instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Equipment rental</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Safety protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Marine conservation</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/Sea-turtle-bentota.jpeg"
                alt="Sea turtle swimming in clear waters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Water Sports Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Popular Water Sports</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {waterSports.map((sport, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <sport.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" id={sport.name}>{sport.name}</h3>
                    <p className="text-muted-foreground mb-3">{sport.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span>{sport.locations.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>{sport.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Water Destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Top Water Activity Destinations</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {waterDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {destination.skillLevel}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{destination.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Waves className="w-4 h-4 text-blue-600" />
                      <span>{destination.skillLevel}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-400">Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities.map((activity, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-400">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-sm">
                          <CheckCircle className="w-3 h-3 text-blue-600" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Explore Destination
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seasonal Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Seasonal Activity Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-semibold">Southwest Coast Season</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">November - April</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Perfect for Mirissa whale watching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Ideal surfing conditions in Hikkaduwa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Best diving visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Calm seas for beginners</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold">East Coast Season</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">May - September</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Prime surfing season in Arugam Bay</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Excellent kitesurfing winds in Kalpitiya</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Perfect for advanced water sports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Consistent offshore winds</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Safety Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Water Safety Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-semibold">Essential Safety Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Always swim with a buddy or in designated areas</li>
                <li>• Check local conditions and weather reports</li>
                <li>• Use appropriate safety equipment and life jackets</li>
                <li>• Stay hydrated and protect yourself from sun exposure</li>
                <li>• Respect marine life and coral reefs</li>
                <li>• Follow instructions from certified guides and instructors</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Anchor className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Marine Conservation</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t touch or stand on coral reefs</li>
                <li>• Use reef-safe sunscreen to protect marine ecosystems</li>
                <li>• Keep a respectful distance from marine animals</li>
                <li>• Don&apos;t feed fish or other marine life</li>
                <li>• Take only pictures, leave only bubbles</li>
                <li>• Support eco-friendly tour operators</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Dive Into Adventure!</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience Sri Lanka&apos;s incredible marine world with expert guides and top-quality equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Waves className="w-5 h-5 mr-2" />
              Book Water Adventure
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Camera className="w-5 h-5 mr-2" />
              Photography Tours
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
