"use client"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Star, Camera, Music, Flame, ArrowRight } from "lucide-react"

// Festival type definition
interface Festival {
  id: number
  name: string
  location: string
  month: number
  dates: string
  description: string
  image: string
  category: string
  duration: string
  highlights: string[]
  bestViewing: string
  significance: string
  featured: boolean
}



// Traditional Sri Lankan Festivals and Events
const sriLankanFestivals = [
  {
    id: 1,
    name: "Esala Perahera",
    location: "Kandy",
    month: 8, // August
    dates: "August 2-12, 2025",
    description: "The most spectacular Buddhist festival in Sri Lanka, featuring elephants, dancers, drummers, and the sacred tooth relic procession.",
    image: "/Kandy.jpeg",
    category: "Buddhist",
    duration: "10 days",
    highlights: ["Sacred Tooth Relic", "100+ Decorated Elephants", "Traditional Dancers", "Fire Performers"],
    bestViewing: "Dalada Maligawa area",
    significance: "Honors the Sacred Tooth Relic of Buddha",
    featured: true,
  },
  {
    id: 2,
    name: "Vesak Festival",
    location: "Nationwide",
    month: 5, // May
    dates: "May 12, 2025",
    description: "The most important Buddhist festival celebrating the birth, enlightenment, and death of Lord Buddha with colorful lanterns and decorations.",
    image: "/JayaSrimahaBodhi.jpeg",
    category: "Buddhist",
    duration: "2 days",
    highlights: ["Vesak Lanterns", "Free Food Stalls", "Devotional Songs", "Temple Illuminations"],
    bestViewing: "Colombo and major temples",
    significance: "Triple celebration of Buddha's life",
    featured: true,
  },
  {
    id: 3,
    name: "Sinhala Tamil New Year",
    location: "Nationwide",
    month: 4, // April
    dates: "April 13-14, 2025",
    description: "The traditional New Year celebration marking the end of harvest season with family gatherings, traditional games, and rituals.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cultural",
    duration: "2 days",
    highlights: ["Traditional Games", "Oil Bath Rituals", "Milk Rice", "Family Gatherings"],
    bestViewing: "Rural villages and homes",
    significance: "Harvest season celebration",
    featured: true,
  },
  {
    id: 4,
    name: "Duruthu Perahera",
    location: "Kelaniya",
    month: 1, // January
    dates: "January 15, 2025",
    description: "Annual procession at Kelaniya Raja Maha Vihara commemorating Buddha's first visit to Sri Lanka.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Buddhist",
    duration: "1 day",
    highlights: ["Colorful Procession", "Traditional Music", "Religious Ceremonies", "Cultural Performances"],
    bestViewing: "Kelaniya Temple",
    significance: "Commemorates Buddha's visit",
    featured: false,
  },
  {
    id: 5,
    name: "Poson Festival",
    location: "Mihintale & Anuradhapura",
    month: 6, // June
    dates: "June 11, 2025",
    description: "Celebrates the introduction of Buddhism to Sri Lanka by Arahat Mahinda at the historic Mihintale.",
    image: "/Anuradhapura.jpg",
    category: "Buddhist",
    duration: "1 day",
    highlights: ["Pilgrimage to Mihintale", "Religious Ceremonies", "Cultural Programs", "Traditional Food"],
    bestViewing: "Mihintale Rock",
    significance: "Introduction of Buddhism",
    featured: false,
  },
  {
    id: 6,
    name: "Kataragama Festival",
    location: "Kataragama",
    month: 7, // July
    dates: "July 20-25, 2025",
    description: "Multi-religious festival honoring God Kataragama with fire walking, kavadi dancing, and elaborate rituals.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindu",
    duration: "6 days",
    highlights: ["Fire Walking", "Kavadi Dancing", "Religious Rituals", "Multi-faith Participation"],
    bestViewing: "Kataragama Temple",
    significance: "Hindu-Buddhist unity",
    featured: false,
  },
  {
    id: 7,
    name: "Vel Festival",
    location: "Colombo",
    month: 8, // August
    dates: "August 20, 2025",
    description: "Hindu festival featuring the ceremonial chariot procession of Lord Murugan's sacred spear from Sea Street to Bambalapitiya.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindu",
    duration: "1 day",
    highlights: ["Chariot Procession", "Traditional Music", "Street Festivities", "Religious Ceremonies"],
    bestViewing: "Colombo streets",
    significance: "Lord Murugan worship",
    featured: false,
  },
  {
    id: 8,
    name: "Deepavali (Festival of Lights)",
    location: "Nationwide (Hindu communities)",
    month: 11, // November
    dates: "November 1, 2025",
    description: "Hindu festival of lights celebrating the victory of light over darkness with oil lamps, fireworks, and sweets.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hindu",
    duration: "1 day",
    highlights: ["Oil Lamp Lighting", "Fireworks", "Traditional Sweets", "Family Gatherings"],
    bestViewing: "Hindu temples and communities",
    significance: "Victory of light over darkness",
    featured: false,
  },
  {
    id: 9,
    name: "Christmas Celebrations",
    location: "Nationwide",
    month: 12, // December
    dates: "December 25, 2025",
    description: "Christian celebration featuring midnight masses, carol services, and festive decorations across the island.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Christian",
    duration: "1 day",
    highlights: ["Midnight Mass", "Carol Services", "Festive Decorations", "Family Celebrations"],
    bestViewing: "Churches and Christian communities",
    significance: "Birth of Jesus Christ",
    featured: false,
  },
  {
    id: 10,
    name: "Navam Perahera",
    location: "Colombo",
    month: 2, // February
    dates: "February 22-23, 2025",
    description: "Colorful Buddhist procession in Colombo featuring elephants, dancers, and traditional performances around Viharamahadevi Park.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Buddhist",
    duration: "2 days",
    highlights: ["Urban Procession", "Cultural Performances", "Traditional Music", "Community Participation"],
    bestViewing: "Viharamahadevi Park area",
    significance: "Buddhist cultural celebration",
    featured: false,
  },
  {
    id: 11,
    name: "Madhu Festival",
    location: "Madhu, Mannar",
    month: 8, // August
    dates: "August 15, 2025",
    description: "Catholic pilgrimage festival to the Shrine of Our Lady of Madhu, attracting thousands of devotees from across the island.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Christian",
    duration: "1 day",
    highlights: ["Religious Pilgrimage", "Mass Celebrations", "Cultural Unity", "Traditional Prayers"],
    bestViewing: "Madhu Shrine",
    significance: "Catholic pilgrimage site",
    featured: false,
  },
  {
    id: 12,
    name: "Kite Festival",
    location: "Colombo & Coastal Areas",
    month: 9, // September
    dates: "September 10-11, 2025",
    description: "Traditional kite flying festival during the windy season, especially popular in coastal areas and Colombo.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cultural",
    duration: "2 days",
    highlights: ["Colorful Kites", "Traditional Designs", "Community Gatherings", "Beach Activities"],
    bestViewing: "Galle Face Green, beaches",
    significance: "Seasonal celebration",
    featured: false,
  }
]

export default function UpcomingEventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [upcomingFestivals, setUpcomingFestivals] = useState<Festival[]>([])
  const [nextFestival, setNextFestival] = useState<Festival | null>(null)

  useEffect(() => {
    const now = new Date()
    const currentMonth = now.getMonth() + 1 // JavaScript months are 0-indexed
    
    // Find the next upcoming festival
    const sortedFestivals = [...sriLankanFestivals].sort((a, b) => {
      // Calculate months from current date
      const aMonthsFromNow = a.month >= currentMonth ? a.month - currentMonth : (12 - currentMonth) + a.month
      const bMonthsFromNow = b.month >= currentMonth ? b.month - currentMonth : (12 - currentMonth) + b.month
      return aMonthsFromNow - bMonthsFromNow
    })
    
    const next = sortedFestivals[0]
    setNextFestival(next)
    
    // Get upcoming festivals for the next 6 months
    const upcoming = sortedFestivals.filter((festival, index) => {
      const monthsFromNow = festival.month >= currentMonth ? festival.month - currentMonth : (12 - currentMonth) + festival.month
      return monthsFromNow <= 6
    })
    
    setUpcomingFestivals(upcoming)
  }, [])

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Buddhist': return 'bg-orange-500'
      case 'Hindu': return 'bg-red-500'
      case 'Christian': return 'bg-blue-500'
      case 'Cultural': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getMonthName = (monthNumber: number): string => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return months[monthNumber - 1]
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kandy.jpeg"
          alt="Traditional Sri Lankan festival with elephants and cultural performances"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Traditional Festivals & Events</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Experience Sri Lanka's Rich Cultural Heritage</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Year-Round Celebrations
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Users className="w-4 h-4 mr-1" />
              Cultural Diversity
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-1" />
              Ancient Traditions
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Next Upcoming Festival Highlight */}
        {nextFestival && (
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Next Major Festival</h2>
              <p className="text-lg text-muted-foreground">Don't miss this spectacular cultural celebration</p>
            </div>
            
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`${getCategoryColor(nextFestival.category)} text-white`}>
                        {nextFestival.category}
                      </Badge>
                      {nextFestival.featured && (
                        <Badge className="bg-gold-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured Event
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-foreground mb-3">{nextFestival.name}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{nextFestival.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="font-semibold text-foreground">{nextFestival.dates}</p>
                          <p className="text-sm text-muted-foreground">{nextFestival.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="font-semibold text-foreground">{nextFestival.location}</p>
                          <p className="text-sm text-muted-foreground">{nextFestival.bestViewing}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Festival Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {nextFestival.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="bg-white/80">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/destinations/${nextFestival.location.toLowerCase()}`}
                      className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      Plan Your Visit
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <Image
                      src={nextFestival.image}
                      alt={nextFestival.name}
                      width={500}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {getMonthName(nextFestival.month)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Upcoming Festivals Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Upcoming Festivals</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the vibrant cultural tapestry of Sri Lanka through these traditional celebrations and festivals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFestivals.map((festival) => (
              <Card key={festival.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className={`${getCategoryColor(festival.category)} text-white`}>
                      {festival.category}
                    </Badge>
                    {festival.featured && (
                      <Badge className="bg-gold-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-sm">
                    {getMonthName(festival.month)}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">
                    {festival.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {festival.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">{festival.dates}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span>{festival.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>{festival.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Cultural Significance:</p>
                    <p className="text-sm font-medium">{festival.significance}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Festival Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {festival.highlights.slice(0, 2).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {festival.highlights.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{festival.highlights.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Link 
                    href={`/destinations/${festival.location.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-md transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Festival Calendar Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Annual Festival Calendar</h2>
            <p className="text-lg text-muted-foreground">Plan your Sri Lankan cultural journey throughout the year</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
              const monthFestivals = sriLankanFestivals.filter(f => f.month === month)
              return (
                <Card key={month} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{getMonthName(month)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {monthFestivals.length > 0 ? (
                      <div className="space-y-2">
                        {monthFestivals.map((festival) => (
                          <div key={festival.id} className="text-sm">
                            <p className="font-medium">{festival.name}</p>
                            <p className="text-muted-foreground">{festival.location}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-sm">No major festivals</p>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Planning Your Cultural Journey</h2>
            <p className="text-lg text-muted-foreground">Essential tips for experiencing Sri Lankan festivals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-orange-600" />
                <h3 className="font-semibold mb-2">Book Early</h3>
                <p className="text-sm text-muted-foreground">Accommodation fills up quickly during major festivals</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Camera className="w-8 h-8 mx-auto mb-3 text-orange-600" />
                <h3 className="font-semibold mb-2">Respect Traditions</h3>
                <p className="text-sm text-muted-foreground">Ask permission before photographing religious ceremonies</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mx-auto mb-3 text-orange-600" />
                <h3 className="font-semibold mb-2">Dress Appropriately</h3>
                <p className="text-sm text-muted-foreground">Modest clothing is required for temple visits</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 mx-auto mb-3 text-orange-600" />
                <h3 className="font-semibold mb-2">Arrive Early</h3>
                <p className="text-sm text-muted-foreground">Get the best viewing spots for processions and ceremonies</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}