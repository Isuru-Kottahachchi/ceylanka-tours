import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Train, Route, Compass, TreePine, Mountain, Heart, Ticket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sri Lanka Train Journeys: Complete Guide to Scenic Railway Adventures 2025",
  description:
    "Discover Sri Lanka's most beautiful train journeys including the famous Ella Odyssey, Jaffna railway, and hill country routes. Complete guide with schedules, tickets, and travel tips.",
  keywords: "Sri Lanka trains, Ella train, Jaffna railway, hill country train, scenic train journeys, railway travel Sri Lanka, train tickets, Ceylon railways",
  authors: [{ name: "Ceylon Railway Explorer" }],
  openGraph: {
    title: "Sri Lanka Train Journeys: Scenic Railway Adventures Guide 2026",
    description: "Your complete guide to Sri Lanka's most beautiful train journeys and railway adventures",
    type: "article",
    images: ["/Nine-arch-ella.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lanka Train Journeys: Scenic Railway Adventures Guide 2026",
    description: "Your complete guide to Sri Lanka's most beautiful train journeys and railway adventures",
  },
}

export default function TrainJourneysGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Nine-arch-ella.jpg"
          alt="Scenic train crossing the famous Nine Arch Bridge in Ella, Sri Lanka surrounded by lush green tea plantations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sri Lanka Train Journeys</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Experience the World&apos;s Most Beautiful Railway Adventures</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Train className="w-4 h-4 mr-1" />
              Historic Railways Since 1864
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              Hill Country Adventures
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Tea Plantation Views
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-1" />
              Unforgettable Experiences
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Sri Lanka&apos;s Railway Magic</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step aboard one of the world&apos;s most beautiful railway journeys! Sri Lanka&apos;s train system offers 
              travelers an incredible way to see the country&apos;s stunning landscapes, from misty mountains and emerald 
              tea plantations to golden beaches and ancient cities. Built by the British in the 1800s, these railways 
              still carry passengers through some of the most scenic routes on Earth.
            </p>
            <p className="text-lg mb-4">
              Whether you&apos;re watching the sunrise over rolling tea hills from the famous Ella train, crossing historic 
              bridges through jungle valleys, or traveling to the cultural heart of Jaffna in the north, Sri Lankan 
              train journeys offer experiences you&apos;ll never forget. The slow, peaceful pace of train travel lets you 
              truly appreciate the island&apos;s natural beauty while meeting friendly locals and fellow travelers.
            </p>
            <p className="text-lg">
              From budget-friendly third-class tickets where you can hang out the doors (safely!) to comfortable 
              observation cars with panoramic windows, there&apos;s a train experience for every type of traveler. Get ready 
              for an adventure that combines stunning scenery, rich history, and the simple joy of railway travel!
            </p>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-900">Pro Tip for Train Travel</p>
                <p className="text-blue-700 text-sm mt-1">
                  Book your tickets in advance, especially for popular routes like Colombo to Ella. Arrive early to get window seats for the best views!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Most Popular Train Routes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Most Popular Train Routes</h2>
          
          <div className="space-y-8">
            {/* Ella Odyssey */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/Nine-arch-ella.jpg"
                    alt="Train crossing Nine Arch Bridge in Ella with tea plantations"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-700">The Ella Odyssey</CardTitle>
                    <CardDescription className="text-lg">Colombo to Ella via Kandy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        This is the crown jewel of Sri Lankan train travel! The journey from Colombo to Ella takes you 
                        through the heart of Sri Lanka&apos;s hill country, passing misty mountains, tea plantations, 
                        waterfalls, and the famous Nine Arch Bridge. Experience breathtaking views as you climb from 
                        sea level to nearly 2,000 meters through some of the world&apos;s most scenic railway landscapes.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-xs text-muted-foreground">7-9 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Route className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="font-medium">Distance</p>
                            <p className="text-xs text-muted-foreground">290 km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mountain className="w-4 h-4 text-purple-500" />
                          <div>
                            <p className="font-medium">Max Elevation</p>
                            <p className="text-xs text-muted-foreground">1,900m</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-orange-500" />
                          <div>
                            <p className="font-medium">Price</p>
                            <p className="text-xs text-muted-foreground">From $3</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Key Highlights:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Nine Arch Bridge - most photographed railway bridge in Asia</li>
                            <li>• Tea plantation valleys stretching to the horizon</li>
                            <li>• Demodara Loop - engineering marvel spiral track</li>
                            <li>• Misty mountain tunnels and dramatic cliff views</li>
                            <li>• Little Adam&apos;s Peak visible from train windows</li>
                            <li>• Traditional tea pickers working the hillsides</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold">Major Stops:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Colombo Fort - Starting point</li>
                            <li>• Peradeniya - Royal Botanical Gardens</li>
                            <li>• Kandy - Cultural capital</li>
                            <li>• Nuwara Eliya - Little England</li>
                            <li>• Haputale - Mountain town views</li>
                            <li>• Ella - Final destination paradise</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                        <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2">🌟 Insider Tips</h5>
                        <div className="text-sm text-green-700 dark:text-green-200 space-y-1">
                          <p>• <strong>Best Time:</strong> Early morning departure (8:30 AM) for clear mountain views</p>
                          <p>• <strong>Seating:</strong> Right side of train for best scenery (Kandy to Ella)</p>
                          <p>• <strong>Photography:</strong> Keep cameras ready for the Nine Arch Bridge approach</p>
                          <p>• <strong>Weather:</strong> Bring layers - it gets cooler as you climb higher</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Jaffna Northern Line */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/Jaffna-Train.jpg"
                    alt="Jaffna railway station and northern Sri Lanka landscape"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      <Compass className="w-4 h-4 mr-1" />
                      Cultural Journey
                    </Badge>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700">Jaffna Northern Express</CardTitle>
                    <CardDescription className="text-lg">Colombo to Jaffna</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Journey to the cultural heart of Tamil Sri Lanka! This historic railway line, recently restored after years of conflict, 
                        takes you through diverse landscapes and ancient cities, offering glimpses into a different side 
                        of Sri Lankan culture and history. Experience the rich Tamil heritage, unique architecture, and 
                        distinctive cuisine of the northern peninsula.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-xs text-muted-foreground">9-10 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Route className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="font-medium">Distance</p>
                            <p className="text-xs text-muted-foreground">398 km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <div>
                            <p className="font-medium">Province</p>
                            <p className="text-xs text-muted-foreground">Northern</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-orange-500" />
                          <div>
                            <p className="font-medium">Price</p>
                            <p className="text-xs text-muted-foreground">From $4</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Key Highlights:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Ancient Anuradhapura - UNESCO World Heritage city</li>
                            <li>• Sacred Sri Maha Bodhi tree - 2,300 years old</li>
                            <li>• Vavuniya - gateway to the northern province</li>
                            <li>• Kilinochchi - town with recent historical significance</li>
                            <li>• Jaffna Peninsula - unique Tamil culture and cuisine</li>
                            <li>• Palmyra palm landscapes and traditional villages</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold">Cultural Experiences:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Tamil language and customs</li>
                            <li>• Historic Hindu temples and kovils</li>
                            <li>• Traditional Tamil breakfast on train</li>
                            <li>• Jaffna crab curry and local delicacies</li>
                            <li>• Portuguese and Dutch colonial architecture</li>
                            <li>• Traditional palmyra palm products</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🏛️ Cultural Immersion</h5>
                        <div className="text-sm text-blue-700 dark:text-blue-200 space-y-1">
                          <p>• <strong>Language:</strong> Tamil is predominantly spoken - learn basic greetings</p>
                          <p>• <strong>Food:</strong> Try authentic Tamil cuisine and famous Jaffna mangoes (in season)</p>
                          <p>• <strong>Temples:</strong> Visit ancient Nallur Kovil and other historic temples</p>
                          <p>• <strong>History:</strong> Learn about the railway&apos;s restoration and regional significance</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Coastal Line Southern Express */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/galle-fort-sarmat-batagov-unsplash.jpg"
                    alt="Coastal train running along Sri Lanka's southern coastline near Galle"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-600 text-white">
                      <Camera className="w-4 h-4 mr-1" />
                      Scenic Coastline
                    </Badge>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-cyan-700">Southern Coastal Express</CardTitle>
                    <CardDescription className="text-lg">Colombo to Galle & Matara</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Experience one of the world&apos;s most beautiful coastal railway journeys! This route literally hugs the Indian 
                        Ocean coastline for miles, offering stunning beach views, palm-fringed shores, and charming fishing villages. 
                        Watch waves crash against the tracks while you travel through some of Sri Lanka&apos;s most picturesque 
                        coastal scenery, including the UNESCO World Heritage Galle Fort.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-xs text-muted-foreground">3-4 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Route className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="font-medium">Distance</p>
                            <p className="text-xs text-muted-foreground">160 km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <div>
                            <p className="font-medium">Region</p>
                            <p className="text-xs text-muted-foreground">South Coast</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-orange-500" />
                          <div>
                            <p className="font-medium">Price</p>
                            <p className="text-xs text-muted-foreground">From $2</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Key Highlights:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Train runs directly along the beach for miles</li>
                            <li>• Historic Galle Fort - UNESCO World Heritage site</li>
                            <li>• Traditional stilt fishermen at work</li>
                            <li>• Coconut palm groves and fishing villages</li>
                            <li>• Beautiful sunset views over the Indian Ocean</li>
                            <li>• Bentota and Hikkaduwa beach towns</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold">Photo Opportunities:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Train crossing coastal bridges</li>
                            <li>• Fishermen casting nets from the shore</li>
                            <li>• Colonial Dutch architecture in Galle</li>
                            <li>• Palm trees swaying over turquoise waters</li>
                            <li>• Colorful fishing boats on the beach</li>
                            <li>• Dramatic ocean waves during monsoon</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-l-4 border-cyan-400">
                        <h5 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">🌅 Perfect Timing</h5>
                        <div className="text-sm text-cyan-700 dark:text-cyan-200 space-y-1">
                          <p>• <strong>Best Views:</strong> Sit on the ocean side (left when going south) for beach views</p>
                          <p>• <strong>Golden Hour:</strong> Afternoon departure for stunning sunset lighting</p>
                          <p>• <strong>Photography:</strong> Windows stay open for unobstructed coastal shots</p>
                          <p>• <strong>Weather:</strong> Dry season (Nov-Apr) offers clearest ocean views</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Kandy to Nuwara Eliya */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/Nuwara-Eliya.jpg"
                    alt="Train passing through tea plantations in Nuwara Eliya hill country"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 text-white">
                      <TreePine className="w-4 h-4 mr-1" />
                      Tea Country
                    </Badge>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-emerald-700">Tea Country Explorer</CardTitle>
                    <CardDescription className="text-lg">Kandy to Nuwara Eliya</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Journey through the heart of Sri Lanka&apos;s world-famous tea country! This scenic route takes you from the cultural 
                        capital to &quot;Little England&quot; through rolling hills covered in emerald tea plantations. 
                        Watch the landscape transform from tropical lowlands to cool mountain highlands as you pass through 
                        some of the world&apos;s finest tea-growing regions, where Ceylon tea has been cultivated for over 150 years.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-xs text-muted-foreground">4-5 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Route className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="font-medium">Distance</p>
                            <p className="text-xs text-muted-foreground">110 km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mountain className="w-4 h-4 text-purple-500" />
                          <div>
                            <p className="font-medium">Max Elevation</p>
                            <p className="text-xs text-muted-foreground">1,868m</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-orange-500" />
                          <div>
                            <p className="font-medium">Price</p>
                            <p className="text-xs text-muted-foreground">From $2.50</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Tea Estate Highlights:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Endless tea plantation terraces</li>
                            <li>• Traditional tea pickers in colorful saris</li>
                            <li>• Colonial-era tea factories and estates</li>
                            <li>• Fresh Ceylon tea tasting opportunities</li>
                            <li>• Misty mountain peaks and waterfalls</li>
                            <li>• Cool European-style climate</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold">Notable Stops:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Kandy - Temple of the Tooth</li>
                            <li>• Peradeniya - Botanical Gardens</li>
                            <li>• Gampola - Historic railway junction</li>
                            <li>• Nawalapitiya - Tea factory visits</li>
                            <li>• Hatton - Heart of tea country</li>
                            <li>• Nanu Oya - Gateway to Nuwara Eliya</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border-l-4 border-emerald-400">
                        <h5 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">🍃 Tea Lover&apos;s Experience</h5>
                        <div className="text-sm text-emerald-700 dark:text-emerald-200 space-y-1">
                          <p>• <strong>Factory Tours:</strong> Stop at stations near tea factories for guided tours</p>
                          <p>• <strong>Fresh Tea:</strong> Buy Ceylon tea directly from estate shops</p>
                          <p>• <strong>Climate Change:</strong> Pack layers - temperature drops 20°C at altitude</p>
                          <p>• <strong>Best Season:</strong> Clear days (Dec-Mar) for panoramic plantation views</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Anuradhapura to Polonnaruwa */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/Anuradhapura.jpg"
                    alt="Ancient ruins and Buddhist stupas in Anuradhapura from train window"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">
                      <Mountain className="w-4 h-4 mr-1" />
                      Ancient Cities
                    </Badge>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-amber-700">Ancient Cities Express</CardTitle>
                    <CardDescription className="text-lg">Anuradhapura to Polonnaruwa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Travel between Sri Lanka&apos;s two greatest ancient capitals! This historic route connects UNESCO 
                        World Heritage cities through rural landscapes dotted with ancient ruins and Buddhist temples. 
                        Journey through the heart of the Cultural Triangle, where kingdoms ruled for over 1,000 years 
                        and where Buddhism flourished across magnificent stone cities and sacred monasteries.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-xs text-muted-foreground">2-3 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Route className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="font-medium">Distance</p>
                            <p className="text-xs text-muted-foreground">85 km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <div>
                            <p className="font-medium">Region</p>
                            <p className="text-xs text-muted-foreground">Cultural Triangle</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-orange-500" />
                          <div>
                            <p className="font-medium">Price</p>
                            <p className="text-xs text-muted-foreground">From $1.50</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Ancient Wonders:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Sacred Sri Maha Bodhi tree (2,300+ years old)</li>
                            <li>• Ruwanwelisaya stupa - architectural marvel</li>
                            <li>• Ancient monastic complexes and ruins</li>
                            <li>• Archaeological sites visible from train</li>
                            <li>• Traditional village life and farming</li>
                            <li>• Pilgrims traveling to sacred sites</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold">Historical Significance:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Anuradhapura - 1st ancient capital (377 BC)</li>
                            <li>• Polonnaruwa - 2nd ancient capital (11th century)</li>
                            <li>• Buddhist monasteries and universities</li>
                            <li>• Ancient irrigation systems (tanks)</li>
                            <li>• Stone carvings and sculptures</li>
                            <li>• Living heritage sites still in use</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-400">
                        <h5 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">🏛️ Historical Immersion</h5>
                        <div className="text-sm text-amber-700 dark:text-amber-200 space-y-1">
                          <p>• <strong>Archaeological Tours:</strong> Combine train travel with guided site visits</p>
                          <p>• <strong>Buddhist Heritage:</strong> Witness centuries-old religious practices</p>
                          <p>• <strong>Rural Culture:</strong> Experience traditional village life along the route</p>
                          <p>• <strong>Best Time:</strong> Early morning for cooler weather and better light</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Batticaloa Eastern Line */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/placeholder.jpg"
                    alt="Eastern Sri Lanka landscape with lagoons and palm trees from train"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-600 text-white">
                      <Compass className="w-4 h-4 mr-1" />
                      Hidden Gem
                    </Badge>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-teal-700">Eastern Explorer</CardTitle>
                    <CardDescription className="text-lg">Colombo to Batticaloa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Discover Sri Lanka&apos;s untouched eastern coast! This lesser-known route takes you through diverse 
                        landscapes, pristine lagoons, and traditional fishing communities along the unspoiled eastern shoreline. 
                        Experience authentic Sri Lankan life away from tourist crowds, traveling through regions rich in 
                        Tamil and Muslim heritage, where ancient traditions thrive alongside stunning natural beauty.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-xs text-muted-foreground">8-9 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Route className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="font-medium">Distance</p>
                            <p className="text-xs text-muted-foreground">350 km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <div>
                            <p className="font-medium">Province</p>
                            <p className="text-xs text-muted-foreground">Eastern</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-orange-500" />
                          <div>
                            <p className="font-medium">Price</p>
                            <p className="text-xs text-muted-foreground">From $3.50</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Natural Wonders:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Pristine Batticaloa Lagoon system</li>
                            <li>• Mangrove forests and wetlands</li>
                            <li>• Traditional stilt fishing communities</li>
                            <li>• Bird watching in nature reserves</li>
                            <li>• Uncrowded beaches and coral reefs</li>
                            <li>• Peaceful rural landscapes</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold">Cultural Highlights:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Authentic Tamil fishing villages</li>
                            <li>• Traditional Muslim communities</li>
                            <li>• Historic Dutch colonial buildings</li>
                            <li>• Local markets and spice gardens</li>
                            <li>• Traditional boat building crafts</li>
                            <li>• Regional cuisine and cooking styles</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-400">
                        <h5 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">🌊 Authentic Experience</h5>
                        <div className="text-sm text-teal-700 dark:text-teal-200 space-y-1">
                          <p>• <strong>Off the Beaten Path:</strong> Experience real Sri Lanka away from tourist crowds</p>
                          <p>• <strong>Cultural Immersion:</strong> Interact with local fishing and farming communities</p>
                          <p>• <strong>Wildlife:</strong> Spot exotic birds and marine life in natural habitats</p>
                          <p>• <strong>Adventure:</strong> Perfect for travelers seeking authentic cultural experiences</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Train Classes & Booking */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Train Classes & How to Book</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-700">Third Class</CardTitle>
                <CardDescription>Budget-Friendly Adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">The authentic local experience! Basic seats but amazing atmosphere and the famous open doors for photos.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Price:</span>
                      <span className="font-medium">Ticket prices may vary</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Comfort:</span>
                      <span className="font-medium">Basic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Experience:</span>
                      <span className="font-medium">Authentic</span>
                    </div>
                  </div>
                  <ul className="text-xs space-y-1">
                    <li>✓ Unreserved seating</li>
                    <li>✓ Open doors for photos</li>
                    <li>✓ Local atmosphere</li>
                    <li>✓ Very affordable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Second Class</CardTitle>
                <CardDescription>Comfort & Value</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">Perfect balance of comfort and price. Reserved seats with better cushioning and air circulation.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Price:</span>
                      <span className="font-medium">Ticket prices may vary</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Comfort:</span>
                      <span className="font-medium">Good</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Experience:</span>
                      <span className="font-medium">Comfortable</span>
                    </div>
                  </div>
                  <ul className="text-xs space-y-1">
                    <li>✓ Reserved seating</li>
                    <li>✓ Better cushions</li>
                    <li>✓ Good windows</li>
                    <li>✓ Recommended choice</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">First Class</CardTitle>
                <CardDescription>Premium Experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">Maximum comfort with observation cars, air conditioning, and panoramic windows for the best views.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Price:</span>
                      <span className="font-medium">Ticket prices may vary</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Comfort:</span>
                      <span className="font-medium">Excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Experience:</span>
                      <span className="font-medium">Premium</span>
                    </div>
                  </div>
                  <ul className="text-xs space-y-1">
                    <li>✓ Observation cars</li>
                    <li>✓ Air conditioning</li>
                    <li>✓ Large windows</li>
                    <li>✓ Guaranteed seats</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Information */}
          <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900 dark:text-gray-100">How to Book Train Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                    <Ticket className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    Online Booking
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Visit <strong>
                      <a 
                        href="https://seatreservation.railway.gov.lk/mtktwebslr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline hover:no-underline"
                      >
                        Official Seat Reservation System
                      </a>
                    </strong> for train bookings</li>
                    <li>• Alternative: <strong className="text-gray-900 dark:text-gray-100">www.railway.gov.lk</strong> for general information</li>
                    <li>• Book up to 30 days in advance</li>
                    <li>• Print tickets or show mobile confirmation</li>
                    <li>• Payment by local or international credit cards</li>
                    <li>• Small booking fee applies (usually around LKR 50-100)</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 rounded-r">
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      <strong>Pro Tip:</strong> The official seat reservation system is the most reliable way to book train tickets online. 
                      Create an account for faster future bookings and to track your reservation history.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                    <MapPin className="w-5 h-5 text-green-500 dark:text-green-400" />
                    At the Station
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Buy tickets at any railway station</li>
                    <li>• Arrive 30-60 minutes early for popular routes</li>
                    <li>• Cash payment in Sri Lankan Rupees</li>
                    <li>• Same-day tickets available (subject to availability)</li>
                    <li>• Station staff can help with route planning</li>
                  </ul>
                </div>
              </div>
              
              {/* Quick Booking Button */}
              <div className="mt-8 text-center">
                <a
                  href="https://seatreservation.railway.gov.lk/mtktwebslr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <Ticket className="w-6 h-6" />
                  Book Train Tickets Online Now
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Official Sri Lanka Railways Seat Reservation System
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Essential Train Travel Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Before You Travel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Book tickets in advance for popular routes like Ella</li>
                  <li>• Check train schedules as they can change</li>
                  <li>• Arrive at the station 30 minutes early</li>
                  <li>• Bring snacks and water for long journeys</li>
                  <li>• Pack light - storage space is limited</li>
                  <li>• Download offline maps for your destination</li>
                  <li>• Have small Sri Lankan Rupee notes ready</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  During Your Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Sit on the right side for best views to Ella</li>
                  <li>• Keep cameras and phones secure at open doors</li>
                  <li>• Try local snacks from vendors at stations</li>
                  <li>• Make friends with fellow travelers</li>
                  <li>• Don&apos;t lean too far out of open doors</li>
                  <li>• Keep tickets safe - inspectors check regularly</li>
                  <li>• Enjoy the journey - it&apos;s part of the experience!</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Times to Travel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Best Times for Train Travel</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-700">Dry Season</CardTitle>
                <CardDescription>December to March</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">Perfect weather with clear skies and excellent mountain views. Peak tourist season.</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Clear mountain views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Best photography conditions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Book tickets well in advance</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Shoulder Season</CardTitle>
                <CardDescription>April-May & September-November</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">Great balance of good weather and fewer crowds. Some rain possible but usually brief.</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fewer tourists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Easier to book tickets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Lush green landscapes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Monsoon Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm">Dramatic weather with heavy rains and misty mountains. A different but beautiful experience.</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Dramatic misty scenery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Waterfalls at full power</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Possible delays due to weather</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What to Expect on Your Train Journey</h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">The Train Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      What You&apos;ll Love
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Stunning mountain and valley views</li>
                      <li>• Friendly locals and fellow travelers</li>
                      <li>• Historic bridges and tunnels</li>
                      <li>• Tea plantation workers waving from fields</li>
                      <li>• Fresh mountain air and cool temperatures</li>
                      <li>• Affordable prices for incredible experiences</li>
                      <li>• Photo opportunities at every turn</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      Things to Know
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Trains can be crowded, especially on weekends</li>
                      <li>• Delays are possible - be patient!</li>
                      <li>• Bathrooms are basic but functional</li>
                      <li>• Food vendors sell snacks at station stops</li>
                      <li>• Mountain sections can get cool - bring a jacket</li>
                      <li>• WiFi is not available on trains</li>
                      <li>• Some routes have limited daily departures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Train Destinations to Explore</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <Image
                  src="/Nine-arch-ella.jpg"
                  alt="Ella town with Little Adam's Peak in background"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Ella</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Mountain town famous for Little Adam&apos;s Peak, Nine Arch Bridge, and stunning tea plantation views.
                </p>
                <Link href="/destinations/ella" className="text-blue-600 hover:underline text-sm">
                  Explore Ella →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <Image
                  src="/Kandy.jpeg"
                  alt="Temple of the Tooth in Kandy"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kandy</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Cultural capital with the Temple of the Tooth, beautiful lake, and traditional performances.
                </p>
                <Link href="/destinations/kandy" className="text-blue-600 hover:underline text-sm">
                  Explore Kandy →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48">
                <Image
                  src="/Nuwara-Eliya.jpg"
                  alt="Colonial buildings and tea plantations in Nuwara Eliya"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Nuwara Eliya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  &quot;Little England&quot; with colonial architecture, tea factories, and cool mountain climate.
                </p>
                <Link href="/destinations/nuwara-eliya" className="text-blue-600 hover:underline text-sm">
                  Explore Nuwara Eliya →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Railway Adventure?</h2>
          <p className="text-xl mb-6 opacity-90">
            Start planning your unforgettable Sri Lankan train journey today!
          </p>
          <div className="space-x-4">
            <Link 
              href="/destinations" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Destinations
            </Link>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Plan Your Trip
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
