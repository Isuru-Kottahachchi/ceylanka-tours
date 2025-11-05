import type { Metadata } from "next"
import Image from "next/image"
import {
  Clock,
  MapPin,
  Camera,
  AlertTriangle,
  CheckCircle,
  Star,
  Calendar,
  Users,
  TreePine,
  TelescopeIcon as Binoculars,
  Droplets,
  Leaf,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import InsuranceBanner from "@/components/insurance-banner"

export const metadata: Metadata = {
  title: "Minneriya National Park: Complete Safari Guide 2025 | The Great Elephant Gathering",
  description:
    "Experience the world's largest elephant gathering at Minneriya National Park. Complete safari guide with best times, wildlife, and photography tips.",
  keywords:
    "Minneriya National Park, elephant gathering, Sri Lanka safari, wildlife photography, elephants, national park",
  openGraph: {
    title: "Minneriya National Park: Complete Safari Guide 2025",
    description: "Witness the spectacular elephant gathering in Sri Lanka's premier wildlife destination",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function MinneriyaNationalParkGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Minneriyanationalpark.jpeg"
          alt="Large herd of elephants gathering at Minneriya reservoir during the famous elephant gathering"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Minneriya National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Home to the World&apos;s Greatest Elephant Gathering</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <TreePine className="w-4 h-4 mr-1" />
              8,890 Hectares
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Binoculars className="w-4 h-4 mr-1" />
              300+ Elephants
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Minneriya: Nature&apos;s Greatest Show</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Imagine witnessing over 300 elephants gathering in one place - mothers with babies, massive tuskers, and
              playful juveniles all coming together in a spectacular natural phenomenon. This is &quot;The
              Gathering&quot; at Minneriya National Park, considered one of the greatest wildlife spectacles on Earth!
            </p>
            <p className="text-lg">
              Located in Sri Lanka&apos;s Cultural Triangle, Minneriya National Park is built around the ancient
              Minneriya Tank (reservoir), constructed by King Mahasen in the 3rd century AD. During the dry season, this
              becomes a wildlife magnet, attracting not just elephants but over 160 bird species and numerous other
              animals.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Matale Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Minneriya National Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1997
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 8,890 hectares
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Elephants:</strong> 150-300 (seasonal)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> 182km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> June to September
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Binoculars className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Bird Species:</strong> 160+
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  {/* <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Gregory_Lake.jpg"
                      alt="Ancient reservoir in Anuradhapura, Sri Lanka"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Wonderful streets among ancient reservoirs</p>
                      <p className="text-sm text-blue-800">
                       Mathale is a historic fortress that showcases stunning Dutch colonial architecture, surrounded by the Indian Ocean waves.
                      </p>
                    </div>
                  </div> */}
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1 full day to explore the fort and its surroundings.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May to September (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner />
          </section>
          {/* How to Get to Minneriya National Park */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Minneriya National Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 205km (127 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                      <li>• <strong>Cost:</strong> $60-90 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Minneriya National Park. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 77 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✈️</span>
                          <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                            <strong>Airport Transfer Services</strong> - Click for details & booking
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Recommended)</h4>
                    <p>Take the scenic coastal railway from Colombo Fort Station to Galle Station</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Galle</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li>
                    </ul>

                    {/* <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Galle</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $2-8 USD (depending on the bus type)</li>
                      <li>• <strong>Scenic journey:</strong> Through Coastline road</li>
                    </ul> */}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early morning to beat the heat</li>
                    <li>• Carry water and use sun protection</li>
                    <li>• Wear comfortable clothing and footwear</li>
                    <li>• Plan your itinerary to cover key attractions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        

        {/* The Gathering */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Great Elephant Gathering</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Minneriyanationalpark.jpeg"
                alt="Spectacular view of hundreds of elephants gathered around Minneriya reservoir during dry season"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The famous elephant gathering - nature&apos;s most spectacular wildlife event
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                &quot;The Gathering&quot; is a unique natural phenomenon that occurs annually from June to September. As
                water sources in the surrounding forests dry up, elephants from across the region converge on the
                Minneriya reservoir.
              </p>
              <p>
                What makes this gathering special is not just the numbers, but the behavior you&apos;ll witness.
                Elephants engage in complex social interactions - greeting ceremonies, playful interactions between
                young elephants, and the fascinating hierarchy of the herd.
              </p>
              <p>
                The best viewing is typically in the late afternoon when elephants come to drink, bathe, and feed on the
                lush grass around the tank&apos;s edges.
              </p>
            </div>
          </div>
        </section>

        {/* Wildlife to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wildlife You&apos;ll Encounter</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Asian Elephants</CardTitle>
                <CardDescription>The stars of the show</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Elephant+Family"
                    alt="Asian elephant family with mother and baby at Minneriya reservoir"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Minneriya is home to one of the largest concentrations of Asian elephants in the world:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Observe complex family structures and social behavior
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Watch mothers teaching babies to swim and feed
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        See impressive tuskers and matriarchs leading herds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Experience the famous mud baths and water play
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Incredible Birdlife</CardTitle>
                <CardDescription>Over 160 species including rare migrants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Minneriya is a birdwatcher&apos;s paradise with resident and migratory species:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Painted storks and spot-billed pelicans
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rare black-necked storks and lesser adjutants
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colorful bee-eaters and kingfishers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Majestic fish eagles and serpent eagles
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Birds+at+Minneriya"
                    alt="Colorful birds including painted storks and kingfishers at Minneriya reservoir"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Other Wildlife</CardTitle>
                <CardDescription>Diverse ecosystem supporting many species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Wildlife+Diversity"
                    alt="Various wildlife including sambar deer and water buffalo at Minneriya"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Beyond elephants, Minneriya hosts a rich variety of wildlife:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sambar deer and spotted deer
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Wild boar and water buffalo
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sloth bears (rare sightings)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Leopards and fishing cats
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Safari Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Safari Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - For the Best Safari Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Visit during dry season:</strong> June-September for best elephant sightings
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Go in late afternoon:</strong> 3-6 PM is prime time for elephant activity
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring binoculars:</strong> Essential for birdwatching and distant wildlife
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Hire experienced guide:</strong> Local knowledge enhances the experience
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Stay hydrated:</strong> Bring plenty of water for the safari
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON&apos;Ts - Safety and Conservation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t get too close:</strong> Maintain safe distance from elephants
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t make loud noises:</strong> Respect wildlife and other visitors
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t feed animals:</strong> It&apos;s dangerous and illegal
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t litter:</strong> Keep the park pristine for wildlife
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t visit during monsoon:</strong> October-January has fewer animals
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Visit Minneriya</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700">Peak Season</CardTitle>
                <CardDescription>June to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• The famous elephant gathering</li>
                  <li>• Dry weather, clear skies</li>
                  <li>• Best wildlife photography</li>
                  <li>• Higher park fees and crowds</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-700">Shoulder Season</CardTitle>
                <CardDescription>April-May, October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Moderate elephant numbers</li>
                  <li>• Good birdwatching opportunities</li>
                  <li>• Lower accommodation prices</li>
                  <li>• Occasional rain showers</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-700">Off Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Fewer elephants (dispersed)</li>
                  <li>• Lush green landscapes</li>
                  <li>• Migratory bird arrivals</li>
                  <li>• Lowest visitor numbers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Park Entry & Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Entry Fees:</strong>
                  <ul className="mt-1 text-sm text-muted-foreground">
                    <li>• Adults: $25 USD</li>
                    <li>• Children (6-12): $12.50 USD</li>
                    <li>• Vehicle charges apply</li>
                  </ul>
                </div>
                <div>
                  <strong>Opening Hours:</strong>
                  <p className="text-sm text-muted-foreground">6:00 AM - 6:00 PM daily</p>
                </div>
                <div>
                  <strong>Safari Duration:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours (half day safari)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours by car via Habarana</p>
                </div>
                <div>
                  <strong>From Sigiriya:</strong>
                  <p className="text-sm text-muted-foreground">45 minutes drive</p>
                </div>
                <div>
                  <strong>Nearest Town:</strong>
                  <p className="text-sm text-muted-foreground">Habarana (20 minutes)</p>
                </div>
                <div>
                  <strong>Accommodation:</strong>
                  <p className="text-sm text-muted-foreground">Stay in Habarana or Sigiriya area</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Wildlife Photography Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Shots to Capture:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Elephant families at the water&apos;s edge</li>
                    <li>• Baby elephants playing and learning</li>
                    <li>• Dramatic sunset silhouettes</li>
                    <li>• Bird action shots at the reservoir</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Equipment & Settings:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Telephoto lens (300mm+) essential</li>
                    <li>• Fast shutter speed for action shots</li>
                    <li>• Bring extra batteries and memory cards</li>
                    <li>• Dust protection for equipment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Combine with Nearby Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/destinations/sigiriya-rock-fortress" className="block hover:shadow-md transition-shadow duration-200">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sigiriya Rock Fortress</CardTitle>
                  <CardDescription>Ancient wonder nearby</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/SigiriyaDrone.jpg"
                    alt="Sigiriya Rock Fortress rising from jungle landscape"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Combine your safari with a visit to the famous Lion Rock, just 45 minutes away.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">See More →</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/destinations/pidurangala-rock" className="block hover:shadow-md transition-shadow duration-200">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pidurangala Rock</CardTitle>
                  <CardDescription>Best Sigiriya views</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Pidurangala.jpeg"
                    alt="Sunrise view of Sigiriya from Pidurangala Rock"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Climb this rock for spectacular sunrise views of Sigiriya. Perfect photography spot.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">See More →</span>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/destinations/dambulla-cave-temple"
              className="block hover:shadow-md transition-shadow duration-200"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dambulla Cave Temple</CardTitle>
                  <CardDescription>Golden Temple complex</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Dambullacavetemple.jpeg"
                    alt="Ancient Buddhist cave temple with golden Buddha statues"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    UNESCO World Heritage site with magnificent cave temples and ancient Buddhist art.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">See More →</span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Minneriya Safari Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Minneriya National Park offers one of the world&apos;s most spectacular wildlife experiences. The sight
                of hundreds of elephants gathering together is something you&apos;ll never forget - a true testament to
                the incredible biodiversity of Sri Lanka.
              </p>
              <p className="text-muted-foreground mb-4">
                Remember, you&apos;re witnessing a natural phenomenon that has been occurring for thousands of years.
                Respect the wildlife, follow park rules, and prepare to be amazed by nature&apos;s greatest gathering.
              </p>
              <p className="text-muted-foreground font-medium">
                Get ready for the wildlife experience of a lifetime! 🐘🌿
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
