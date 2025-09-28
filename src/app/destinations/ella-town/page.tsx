import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Mountain, Train, Coffee, Thermometer, Info, Landmark, Utensils, Lightbulb, Bed } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Ella Town Sri Lanka: Complete Travel Guide 2025 | Hill Country Paradise",
  description: "Discover Ella town, Sri Lanka&apos;s most scenic hill station. Complete guide with attractions, hiking trails, restaurants, accommodation, and everything you need to know.",
  keywords: "Ella Sri Lanka, hill country, tea plantations, hiking, Little Adams Peak, Ella Rock, travel guide, accommodation",
  openGraph: {
    title: "Ella Town: Complete Travel Guide 2025",
    description: "Your ultimate guide to Sri Lanka&apos;s most beautiful hill station",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function EllaTownGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Ella.jpg"
          alt="Panoramic view of Ella town nestled in misty mountains with tea plantations and the famous Ella Gap"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ella Town</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Most Scenic Hill Station Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Uva Province, Hill Country
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,041m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Thermometer className="w-4 h-4 mr-1" />
              18-25°C Year Round
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-muted mb-8 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 justify-center text-sm font-medium">
          <a href="#introduction" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <Info className="w-4 h-4" /> Introduction
          </a>
          <a href="#quick-facts" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <Landmark className="w-4 h-4" /> Quick Facts
          </a>
          <a href="#attractions" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <Star className="w-4 h-4" /> Top Attractions
          </a>
          <a href="#food" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <Utensils className="w-4 h-4" /> Food & Cafés
          </a>
          <a href="#tips" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <Lightbulb className="w-4 h-4" /> Travel Tips
          </a>
          <a href="#accommodation" className="flex items-center gap-1 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors shadow-sm">
            <Bed className="w-4 h-4" /> Accommodation
          </a>
        </div>
      </nav>

  <div className="max-w-6xl mx-auto px-4 py-8">
    {/* Introduction */}
  <section className="mb-12 scroll-mt-48 bg-background" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Info className="w-7 h-7 text-primary" />
            Welcome to Ella: Where Mountains Meet Magic
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Perched high in Sri Lanka&apos;s central highlands, Ella is a small town that has captured the hearts of travelers worldwide. With its cool climate, stunning mountain vistas, emerald tea plantations, and laid-back atmosphere, Ella offers the perfect escape from the tropical heat and bustling cities below.
            </p>
            <p className="text-lg">
              Whether you&apos;re seeking adventure on hiking trails, Instagram-worthy views from mountain peaks, or simply want to relax in cozy cafes overlooking tea gardens, Ella provides an unforgettable hill country experience that combines natural beauty with warm Sri Lankan hospitality.
            </p>

            {/* Did you know? Quick Fact Box */}
            <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-600 rounded-r-lg shadow-sm max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                <span className="font-semibold text-blue-800 dark:text-blue-200">Did you know?</span>
              </div>
              <p className="text-blue-900 dark:text-blue-100 text-sm">
                Ella is home to the famous Nine Arch Bridge, built entirely out of brick, stone, and cement—without a single piece of steel! This engineering marvel is one of the most photographed spots in Sri Lanka and a must-see for train lovers and Instagrammers alike.
              </p>
            </div>
        </div>
      </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-muted/50 rounded-lg text-center text-muted-foreground border-2 border-dashed border-muted-foreground/30">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts */}
  <section className="mb-12 scroll-mt-48 bg-muted/50" id="quick-facts">
    <div className="h-1 w-full bg-gradient-to-r from-primary/10 to-transparent rounded-full mb-8" />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-primary" />
                Ella Town Essential Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span><strong>Elevation:</strong> 1,041 meters (3,415 feet)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-blue-500" />
                    <span><strong>Climate:</strong> Cool, 18-25°C year-round</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-purple-500" />
                    <span><strong>Famous for:</strong> Nine Arch Bridge &amp; scenic railway</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>Province:</strong> Uva Province</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-orange-500" />
                    <span><strong>Specialty:</strong> Tea plantations &amp; mountain views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span><strong>Best time:</strong> December to March</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
  <section className="mb-12 scroll-mt-48 bg-background" id="attractions">
    <div className="h-1 w-full bg-gradient-to-r from-yellow-400/20 to-transparent rounded-full mb-8" />
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-7 h-7 text-yellow-500" />
            Top Attractions in Ella
          </h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Little Adam&apos;s Peak</CardTitle>
                <CardDescription>Easy hike with spectacular 360-degree views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Littleadamspeak.jpg"
                    alt="Hikers on Little Adams Peak summit with panoramic views of Ella Gap and surrounding tea plantations"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The most popular and accessible hike in Ella, Little Adam&apos;s Peak offers breathtaking panoramic views without the challenging climb of its bigger namesake. The trail winds through tea plantations and takes about 45 minutes to reach the summit.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        45-60 minute easy hike
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best at sunrise or sunset
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        360-degree mountain views
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Ella Rock</CardTitle>
                <CardDescription>Challenging hike for serious adventurers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      For experienced hikers seeking a challenge, Ella Rock is the highest point around Ella town. The trail follows railway tracks and jungle paths, offering incredible views of the surrounding valleys and distant mountains.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        3-4 hour challenging hike
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Highest viewpoint in Ella
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Requires good fitness level
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Adventurous hikers on Ella Rock summit with dramatic mountain landscape and tea estates below"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Nine Arch Bridge</CardTitle>
                <CardDescription>Sri Lanka&apos;s most famous railway bridge</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Ninearchbridge.jpg"
                    alt="Iconic Nine Arch Bridge with train crossing through lush jungle and tea plantations"
                    width={500}
                    height={500}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a 15-minute walk from Ella town, this architectural marvel built during WWI without using any steel is now Sri Lanka&apos;s most photographed bridge. Time your visit with train schedules for the perfect shot.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        15-minute walk from town
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple viewpoints available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Active railway with daily trains
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ravana Cave</CardTitle>
                <CardDescription>Ancient cave with legendary significance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located near Ravana Falls, this historic cave is believed to be where King Ravana hid Princess Sita after abducting her from India, according to the Ramayana epic. The cave offers a glimpse into ancient Sri Lankan history and architecture.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Short walk from Ravana Falls
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical significance
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        Bring a flashlight for better visibility
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Historic Ravana Cave entrance with ancient stone work and steps"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nil Diya Pokuna (Blue Water Pool)</CardTitle>
                <CardDescription>Currently closed to visitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Scenic view of Nil Diya Pokuna natural pool surrounded by forest"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      A natural pool with crystal clear blue water surrounded by lush forest. While historically a popular swimming spot, Nil Diya Pokuna is currently not open for visitors due to safety and conservation measures.
                    </p>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-sm text-red-700 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        <strong>Important Notice:</strong> This location is currently closed to visitors. Please respect local regulations and do not attempt to access the site.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Tea Picking Experiences */}
  <section className="mb-12 scroll-mt-48 bg-muted/50" id="food">
    <div className="h-1 w-full bg-gradient-to-r from-green-400/20 to-transparent rounded-full mb-8" />
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Utensils className="w-7 h-7 text-primary" />
            Tea Picking &amp; Plantation Experiences
          </h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Authentic Tea Picking Sessions</CardTitle>
                <CardDescription>Experience the art of Ceylon tea harvesting firsthand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Tea pickers in traditional dress harvesting tea leaves in Ella&apos;s mountain plantations at sunrise"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Join local tea pluckers in the misty morning hours to learn the traditional &quot;two leaves and a bud&quot; picking technique. These authentic experiences offer insight into the lives of plantation workers and the meticulous process behind Ceylon tea production.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Early morning sessions (6:00-9:00 AM)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn traditional picking techniques
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Meet local tea pluckers
                      </li>
                      <li className="flex items-start gap-2">
                        <Coffee className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Fresh tea tasting included
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tea Factory Tours</CardTitle>
                <CardDescription>From leaf to cup - witness the complete tea processing journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Visit nearby tea factories like Halpewatte or Newburgh Estate to see how freshly picked leaves are transformed into world-renowned Ceylon tea. Watch the withering, rolling, oxidation, and drying processes that create different tea grades.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided factory tours available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about tea grading system
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase fresh tea directly
                      </li>
                      <li className="flex items-start gap-2">
                        <Coffee className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Multiple tea varieties to sample
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700">
                        <strong>Tip:</strong> Best factories to visit include Halpewatte Tea Factory (20 min drive) and Newburgh Estate (15 min drive from Ella town).
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional tea factory machinery with workers processing Ceylon tea leaves in Ella mountain region"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Waterfalls Near Ella */}
        <section className="mb-12 scroll-mt-48 bg-background" id="tips">
          <div className="h-1 w-full bg-gradient-to-r from-blue-400/20 to-transparent rounded-full mb-8" />
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="w-7 h-7 text-primary" />
            Spectacular Waterfalls Around Ella
          </h2>

          {/* Local Tips, Safety, and Best Time Box */}
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-600 rounded-r-lg shadow-sm max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
              <span className="font-semibold text-yellow-800 dark:text-yellow-200">Local Tips & Safety</span>
            </div>
            <ul className="list-disc pl-5 text-yellow-900 dark:text-yellow-100 text-sm space-y-1">
              <li><strong>Best time to visit:</strong> December to March for clear skies and lush scenery.</li>
              <li>Start hikes early in the morning to avoid midday heat and crowds.</li>
              <li>Always carry a light rain jacket—Ella’s weather can change quickly!</li>
              <li>Respect local customs when visiting temples and rural villages (cover shoulders/knees).</li>
              <li>Use only marked trails and beware of leeches during the rainy season.</li>
              <li>For safety, avoid swimming in waterfalls after heavy rain due to strong currents.</li>
            </ul>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Ravana Falls</CardTitle>
                <CardDescription>Sri Lanka&apos;s most famous waterfall with legendary significance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Ravana-Falls.jpg"
                    alt="Majestic Ravana Falls cascading down rocky cliffs near Ella with pool for swimming"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Named after the legendary King Ravana from the Ramayana epic, this 25-meter waterfall is one of Sri Lanka&apos;s widest. Located just 6km from Ella, it offers swimming opportunities in natural pools and spectacular photo opportunities year-round.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        6km from Ella town center
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Swimming in natural pools
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical Ravana Cave nearby
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        Can be crowded during peak season
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-700">
                        <strong>Best time to visit:</strong> Early morning (7-9 AM) or late afternoon (4-6 PM) for fewer crowds and better lighting.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            
            <Card>
              <CardHeader>
                <CardTitle>Diyaluma Falls</CardTitle>
                <CardDescription>Sri Lanka&apos;s second-highest waterfall - an adventurous journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      At 220 meters, Diyaluma Falls is Sri Lanka&apos;s second-tallest waterfall. Located about 45 minutes from Ella, it requires a short hike but rewards visitors with stunning natural infinity pools and breathtaking mountain views.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        45-minute drive from Ella
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural infinity pools for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        220-meter cascading waterfall
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Requires moderate hiking ability
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Diyaluma Falls dramatic 220-meter cascade with natural infinity pools and mountain landscape view"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Beautiful Waterfalls</CardTitle>
                <CardDescription>Hidden gems within reach of Ella</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Bambaragama Falls</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      A lesser-known gem perfect for those seeking solitude. 30-minute drive plus short walk through tea plantations.
                    </p>
                    <h4 className="font-semibold mb-2">Secret Falls</h4>
                    <p className="text-sm text-muted-foreground">
                      Local hidden waterfall accessible via guided hike. Ask locals for directions - it&apos;s worth the adventure!
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Waterfall Safety Tips</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Never swim alone</li>
                      <li>• Check water flow conditions</li>
                      <li>• Wear appropriate footwear</li>
                      <li>• Respect local guidelines</li>
                      <li>• Carry water and snacks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-muted/50 rounded-lg text-center text-muted-foreground border-2 border-dashed border-muted-foreground/30">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Ella</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Budget Options</CardTitle>
                <CardDescription>$10-25 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ella Flower Garden Resort</li>
                  <li>• Dream Cafe &amp; Hostel</li>
                  <li>• Ella Mount Heaven</li>
                  <li>• Various guesthouses</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Basic but clean accommodations with mountain views and friendly service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mid-Range Hotels</CardTitle>
                <CardDescription>$25-75 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ella Jungle Resort</li>
                  <li>• Zion View Ella Green Retreat</li>
                  <li>• Hill Safari Eco Lodge</li>
                  <li>• Ambiente Ella</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Comfortable rooms with great views, good restaurants, and helpful staff.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Luxury Resorts</CardTitle>
                <CardDescription>$75+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 98 Acres Resort &amp; Spa</li>
                  <li>• Ella Eco Lodge</li>
                  <li>• Ravana Heights</li>
                  <li>• Melheim Resort</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Premium accommodations with spa services, fine dining, and spectacular views.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Restaurants */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Restaurants &amp; Cafes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Must-Try Restaurants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Cafe Chill</h4>
                  <p className="text-sm text-muted-foreground">Famous for views and Western food. Great breakfast spot.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adam&apos;s Breeze</h4>
                  <p className="text-sm text-muted-foreground">Rooftop dining with panoramic mountain views.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ella Spice Garden</h4>
                  <p className="text-sm text-muted-foreground">Authentic Sri Lankan cuisine with fresh spices.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dream Cafe</h4>
                  <p className="text-sm text-muted-foreground">Popular backpacker spot with good food and atmosphere.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Local Specialties to Try</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Ceylon Tea</h4>
                  <p className="text-sm text-muted-foreground">Fresh from surrounding plantations - try different grades.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Kottu Roti</h4>
                  <p className="text-sm text-muted-foreground">Chopped roti with vegetables, egg, and meat.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Rice &amp; Curry</h4>
                  <p className="text-sm text-muted-foreground">Traditional Sri Lankan meal with multiple curries.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fresh Fruit Juices</h4>
                  <p className="text-sm text-muted-foreground">Passion fruit, wood apple, and tropical blends.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to &amp; Around Ella</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Getting to Ella</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">By Train (Recommended)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The scenic train journey from Kandy (6-7 hours) or Colombo (8-9 hours) is one of the world&apos;s most beautiful train rides.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book reserved seats in advance</li>
                    <li>• Observation car offers best views</li>
                    <li>• Bring snacks and water</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Car/Bus</h4>
                  <p className="text-sm text-muted-foreground">
                    5-6 hours from Colombo, 3-4 hours from Kandy. Mountain roads can be winding.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting Around Ella</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Walking</h4>
                  <p className="text-sm text-muted-foreground">
                    Ella town is small and walkable. Most attractions are within walking distance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tuk-tuk</h4>
                  <p className="text-sm text-muted-foreground">
                    Available for longer distances or when you don&apos;t want to walk uphill.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Motorbike Rental</h4>
                  <p className="text-sm text-muted-foreground">
                    For experienced riders only - mountain roads can be challenging.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Ella</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700">Peak Season</CardTitle>
                <CardDescription>December - March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Dry weather, clear skies</li>
                  <li>• Perfect for hiking</li>
                  <li>• Best mountain views</li>
                  <li>• Higher prices, more crowds</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-700">Shoulder Season</CardTitle>
                <CardDescription>April - June, September - November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Occasional rain showers</li>
                  <li>• Fewer tourists</li>
                  <li>• Better accommodation rates</li>
                  <li>• Still good for activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-700">Monsoon Season</CardTitle>
                <CardDescription>July - August</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Heavy rainfall</li>
                  <li>• Misty, atmospheric views</li>
                  <li>• Lowest prices</li>
                  <li>• Limited outdoor activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Ella Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ella is more than just a destination – it&apos;s a feeling. The cool mountain air, the endless tea gardens, the friendly smiles of locals, and the breathtaking views create an atmosphere that&apos;s hard to leave behind. Whether you&apos;re here for adventure, relaxation, or photography, Ella delivers experiences that will stay with you long after you&apos;ve descended from the mountains.
              </p>
              <p className="text-muted-foreground mb-4">
                Take your time to explore, don&apos;t rush between attractions, and remember that sometimes the best moments in Ella happen when you&apos;re simply sitting in a cafe, sipping Ceylon tea, and watching the mist roll over the mountains.
              </p>
              <p className="text-muted-foreground font-medium">
                Welcome to Ella – where every sunrise is a masterpiece! 🏔️🌅
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
