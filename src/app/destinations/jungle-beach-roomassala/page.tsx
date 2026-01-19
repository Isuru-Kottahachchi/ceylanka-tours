import Image from "next/image"
import { MapPin, Clock, Camera, Waves, TreePine, Car, Bus, Bike, Star, Users, Calendar, Phone, Navigation, Sun, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import InsuranceBanner from "@/components/insurance-banner"

export const metadata = {
  title: "Jungle Beach Unawatuna - Hidden Paradise in Roomassala | Ceylon Ka Tours",
  description: "Discover Jungle Beach, a secluded paradise near Galle. Explore Hanuman's sacred connection to Roomassala Hill, pristine waters, and hidden caves. Complete travel guide with directions and nearby attractions.",
  keywords: "Jungle Beach, Unawatuna, Roomassala, Hanuman Temple, Galle beaches, hidden beaches Sri Lanka, Ramayana trail, secret beaches, snorkeling Sri Lanka",
  openGraph: {
    title: "Jungle Beach Unawatuna - Hidden Paradise in Roomassala",
    description: "A secluded beach paradise with mythical connections to the Ramayana. Perfect for swimming, snorkeling, and exploring ancient caves.",
    images: ["/jungle-beach.jpeg"],
  },
}

export default function JungleBeachPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/jungle-beach.jpeg"
          alt="Jungle Beach Unawatuna - pristine waters and rocky cliffs in Roomassala"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Jungle Beach</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Hidden Paradise in Roomassala</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Pristine Waters
            </Badge>
            <Badge variant="secondary" className="bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Jungle Setting
            </Badge>
            <Badge variant="secondary" className="bg-orange-600/80 text-white border-orange-500">
              <Mountain className="w-4 h-4 mr-1" />
              Hanuman&apos;s Hill
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">


        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Discover Sri Lanka&apos;s Hidden Beach Paradise
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Jungle Beach is one of Sri Lanka&apos;s best-kept secrets, hidden away on the mystical Roomassala Hill near
              Unawatuna. This pristine beach offers crystal-clear waters, dramatic rocky cliffs, and a jungle backdrop
              that makes it feel like your own private paradise.
            </p>
            <p className="text-lg mb-4">
              Located on the sacred Roomassala Hill, this beach is not just beautiful but also deeply connected to
              Sri Lankan mythology and the ancient Ramayana epic. The journey to reach this hidden gem is as rewarding
              as the destination itself.
            </p>
            <p className="text-lg">
              Perfect for swimming, snorkeling, photography, and peaceful relaxation, Jungle Beach offers an escape
              from the crowded tourist beaches while remaining easily accessible from Galle and Unawatuna.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Jungle Beach Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Jungle Beach Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built by Dutch:</strong> 1663 AD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong>  52 hectares (130 acres)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~4,000 residents
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Area:</strong> 40 square kilometers
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage (1988)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> Full day (8+ hours)
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
                       Galle fort is a historic fortress that showcases stunning Dutch colonial architecture, surrounded by the Indian Ocean waves.
                      </p>
                    </div>
                  </div> */}
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">0.5 full day to explore the beach and its surroundings.</p>
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
          {/* How to Get to Jungle Beach */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Jungle Beach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Vehicle (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 128km (80 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 1.5-2 hours</li>
                      <li>• <strong>Cost:</strong> Contact  Ceylanka tours</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Jungle Beach. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 70 764 6765</span>
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
                    <p>Take the scenic coastal railway from Colombo Fort Station to Galle Station then transfer to a taxi or tuk-tuk for the final leg to Jungle Beach.</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Galle</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                      {/* <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li> */}
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

        {/* Hanuman and Roomassala Connection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-orange-800 dark:text-orange-400">Hanuman&apos;s Sacred Connection to Roomassala</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/Hanuman-Roomassala.png"
                alt="Hanuman Temple on Roomassala Hill overlooking Jungle Beach"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-orange-800 dark:text-orange-400 flex items-center gap-2">
                    <Mountain className="w-5 h-5" />
                    The Ramayana Legend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 dark:text-orange-300 mb-4">
                    According to the ancient Ramayana epic, there was a war between Rama and Ravana. During the battle, Rama’s younger brother Lakshmana was seriously wounded, and to save his life, a special medicinal herb called Sanjeewani was required. Rama sent Hanuman, the monkey god, to bring the Sanjeewani herb from the Dronagiri mountain range in the Himalayas. Hanuman could not identify the exact herb, so he decided to carry an entire section of the mountain instead. While flying back to Sri Lanka, a piece of the mountain broke off and fell here, creating Roomassala Hill. People still believe there are rare herbs on this hill.
                  </p>
                  <div className="space-y-3">
                  <div className="mt-4 flex justify-start">
                    <Link href="/articles/ramayana-story-india-sri-lanka" passHref legacyBehavior>
                      <Button
                        variant="secondary"
                        className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                      >
                        Read more about Ramayanaya story
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Button>
                    </Link>
                  </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Hanuman was tasked to bring the Sanjeewani herb from the Himalayas</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Unable to identify the specific herb, he carried the entire mountain</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">A piece of the mountain fell here, creating Roomassala Hill</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">The hill is believed to contain rare medicinal plants even today</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-400">Sacred Sites on Roomassala</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-sm">Hanuman Temple</p>
                        <p className="text-xs text-muted-foreground">Small shrine dedicated to Lord Hanuman</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-sm">Peace Pagoda</p>
                        <p className="text-xs text-muted-foreground">Japanese Buddhist temple on the hilltop</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-sm">Meditation Caves</p>
                        <p className="text-xs text-muted-foreground">Ancient caves used by monks</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Do */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">What to Do at Jungle Beach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                  <Waves className="w-5 h-5" />
                  Swimming & Snorkeling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Crystal-clear waters perfect for swimming</li>
                  <li>• Excellent snorkeling with colorful fish</li>
                  <li>• Rocky areas with marine life</li>
                  <li>• Calm waters most of the year</li>
                  <li>• Natural rock pools for children</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400 flex items-center gap-2">
                  <TreePine className="w-5 h-5" />
                  Jungle Exploration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>• Trek through jungle paths</li>
                  <li>• Spot exotic birds and wildlife</li>
                  <li>• Discover hidden caves</li>
                  <li>• Find medicinal plants</li>
                  <li>• Enjoy panoramic ocean views</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-400 flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Photography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                  <li>• Dramatic cliff formations</li>
                  <li>• Sunset photography spots</li>
                  <li>• Wildlife and bird photography</li>
                  <li>• Underwater photography</li>
                  <li>• Instagram-worthy landscapes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-orange-800 dark:text-orange-400 flex items-center gap-2">
                  <Mountain className="w-5 h-5" />
                  Spiritual Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                  <li>• Visit Hanuman Temple</li>
                  <li>• Meditate in ancient caves</li>
                  <li>• Explore Peace Pagoda</li>
                  <li>• Learn about Ramayana history</li>
                  <li>• Experience spiritual energy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="text-yellow-800 dark:text-yellow-400 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Relaxation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>• Sunbathing on pristine sand</li>
                  <li>• Reading in peaceful surroundings</li>
                  <li>• Picnic on the beach</li>
                  <li>• Yoga and meditation</li>
                  <li>• Escape from crowds</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-red-800 dark:text-red-400 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Adventure Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li>• Rock climbing on cliffs</li>
                  <li>• Cave exploration</li>
                  <li>• Nature hiking trails</li>
                  <li>• Tide pool investigation</li>
                  <li>• Cliff jumping (experienced only)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Get There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-400">How to Get to Jungle Beach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    By Car/Taxi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">From Colombo (3 hours)</p>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Take Southern Expressway to Galle</li>
                        <li>• Head to Unawatuna from Galle</li>
                        <li>• Park near Rumassala entrance</li>
                        <li>• 15-minute walk through jungle</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">From Galle (20 minutes)</p>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Drive towards Unawatuna</li>
                        <li>• Turn at Rumassala sign</li>
                        <li>• Follow road up the hill</li>
                        <li>• Park at designated area</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-400 flex items-center gap-2">
                    <Bus className="w-5 h-5" />
                    By Public Transport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-2">Bus Route</p>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Take bus to Galle from any major city</li>
                        <li>• Local bus from Galle to Unawatuna</li>
                        <li>• Get off at Rumassala junction</li>
                        <li>• 20-minute walk uphill to beach</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded">
                      <p className="text-xs text-green-800 dark:text-green-300">
                        <strong>Cost:</strong> LKR 50-200 depending on starting point
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="text-purple-800 dark:text-purple-400 flex items-center gap-2">
                    <Bike className="w-5 h-5" />
                    By Tuk-Tuk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• From Unawatuna: LKR 500-800</li>
                      <li>• From Galle: LKR 1,000-1,500</li>
                      <li>• Negotiate return trip price</li>
                      <li>• Can drop you closer to trailhead</li>
                    </ul>
                    <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded">
                      <p className="text-xs text-purple-800 dark:text-purple-300">
                        <strong>Tip:</strong> Ask driver to wait or arrange pickup time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                <CardHeader>
                  <CardTitle className="text-yellow-800 dark:text-yellow-400 flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Walking Directions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">The Trek to Beach</p>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• Start from Rumassala entrance</li>
                        <li>• Follow marked jungle trail</li>
                        <li>• Pass by Peace Pagoda (optional detour)</li>
                        <li>• Descend rocky path to beach</li>
                        <li>• Total walk: 15-20 minutes</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-100 dark:bg-yellow-900/40 p-3 rounded">
                      <p className="text-xs text-yellow-800 dark:text-yellow-300">
                        <strong>Difficulty:</strong> Easy to moderate. Wear good shoes!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-400">Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                    <li>• <strong>Timing:</strong> Start early morning or late afternoon</li>
                    <li>• <strong>Footwear:</strong> Sturdy shoes essential for rocky path</li>
                    <li>• <strong>Water:</strong> Bring plenty of water - no facilities</li>
                    <li>• <strong>Food:</strong> Pack snacks and lunch</li>
                    <li>• <strong>Protection:</strong> Sunscreen and hat required</li>
                    <li>• <strong>Safety:</strong> Go with others, inform someone of plans</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6"> */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">Nearby Places to Explore</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">Unawatuna Beach</CardTitle>
                <CardDescription>5 minutes away</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Unawatuna.jpg"
                  alt="Unawatuna Beach - famous curved bay near Jungle Beach"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Famous curved bay with golden sand, perfect for swimming and water sports.
                  Excellent restaurants and beach bars.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Swimming</Badge>
                  <Badge variant="outline">Dining</Badge>
                  <Badge variant="outline">Nightlife</Badge>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/unawatuna" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">Galle Fort</CardTitle>
                <CardDescription>15 minutes away</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/galle-fort-sarmat-batagov-unsplash.jpg"
                  alt="Galle Fort - UNESCO World Heritage site near Jungle Beach"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  UNESCO World Heritage Dutch colonial fort with museums, galleries,
                  boutique shops, and stunning ocean views.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">History</Badge>
                  <Badge variant="outline">Shopping</Badge>
                  <Badge variant="outline">Culture</Badge>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/galle-fort" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">Ambalangoda</CardTitle>
                <CardDescription>Famous for Traditional Mask Making and puppets</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Ambalangoda.jpg"
                  alt="Ambalangoda - famous for its traditional mask making"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Japanese Buddhist temple on the hilltop offering panoramic views
                  of the southern coastline and peaceful meditation spaces.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Spiritual</Badge>
                  <Badge variant="outline">Views</Badge>
                  <Badge variant="outline">Meditation</Badge>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ambalangoda" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">Peace Pagoda</CardTitle>
                <CardDescription>On Rumassala Hill</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Peace+Pagoda"
                  alt="Peace Pagoda on Rumassala Hill overlooking the ocean"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Japanese Buddhist temple on the hilltop offering panoramic views
                  of the southern coastline and peaceful meditation spaces.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Spiritual</Badge>
                  <Badge variant="outline">Views</Badge>
                  <Badge variant="outline">Meditation</Badge>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">Coconut Tree Hill</CardTitle>
                <CardDescription>10 minutes away</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Mirissa1.jpg"
                  alt="Coconut Tree Hill - iconic palm trees overlooking the ocean"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Instagram-famous hilltop covered with coconut palms offering
                  spectacular sunset views and photo opportunities.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Photography</Badge>
                  <Badge variant="outline">Sunset</Badge>
                  <Badge variant="outline">Views</Badge>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/coconut-tree-hill" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">Tabrobane Island</CardTitle>
                <CardDescription>Beach access from Unawatuna</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Snake+Island"
                  alt="Snake Island - small island accessible at low tide from Unawatuna"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Small rocky island accessible at low tide, perfect for snorkeling
                  and exploring marine life in crystal-clear waters.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Snorkeling</Badge>
                  <Badge variant="outline">Adventure</Badge>
                  <Badge variant="outline">Marine Life</Badge>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">Dalawella Beach</CardTitle>
                <CardDescription>8 minutes away</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Dalawella+Beach"
                  alt="Dalawella Beach with famous rope swing and palm trees"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Picturesque beach famous for its palm tree rope swing, calm waters,
                  and excellent swimming conditions with fewer crowds.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Swimming</Badge>
                  <Badge variant="outline">Rope Swing</Badge>
                  <Badge variant="outline">Peaceful</Badge>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-400">Best Time to Visit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Seasonal Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-1 text-green-700 dark:text-green-400">December - March (Peak Season)</p>
                    <p className="text-xs text-muted-foreground">Perfect weather, calm seas, ideal for all activities</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 text-orange-700 dark:text-orange-400">April - May (Good Season)</p>
                    <p className="text-xs text-muted-foreground">Warm weather, occasional rain, fewer crowds</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 text-red-700 dark:text-red-400">June - November (Monsoon)</p>
                    <p className="text-xs text-muted-foreground">Rainy season, rough seas, not recommended</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Daily Timing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-1 text-blue-700 dark:text-blue-400">Early Morning (6-9 AM)</p>
                    <p className="text-xs text-muted-foreground">Cool weather, best light, fewer people</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 text-yellow-700 dark:text-yellow-400">Late Afternoon (3-6 PM)</p>
                    <p className="text-xs text-muted-foreground">Good light, sunset views, cooler temperatures</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1 text-red-700 dark:text-red-400">Avoid Midday (10 AM - 2 PM)</p>
                    <p className="text-xs text-muted-foreground">Very hot, intense sun, difficult hiking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-red-800 dark:text-red-400">Safety Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li>• Wear proper hiking shoes for rocky paths</li>
                  <li>• Bring plenty of water - no shops on the way</li>
                  <li>• Use sunscreen and wear a hat</li>
                  <li>• Don&apos;t go alone - travel in groups</li>
                  <li>• Be careful on wet rocks near water</li>
                  <li>• Check weather conditions before visiting</li>
                  <li>• Inform someone of your plans</li>
                  <li>• Carry a first aid kit</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-400">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>• Sturdy hiking shoes or sandals</li>
                  <li>• Plenty of water and snacks</li>
                  <li>• Sunscreen and insect repellent</li>
                  <li>• Swimwear and quick-dry towel</li>
                  <li>• Waterproof bag for electronics</li>
                  <li>• Camera for amazing photos</li>
                  <li>• Cash for transport and tips</li>
                  <li>• Snorkeling gear (optional)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Getting Help & Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Emergency Contacts</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Police Emergency: 119</li>
                    <li>• Tourist Hotline: 1912</li>
                    <li>• Galle Hospital: 091 223 2261</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Information</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Unawatuna Tourist Info Center</li>
                    <li>• Hotel reception for directions</li>
                    <li>• Local tour guides available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Jungle Beach?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the magic of Sri Lanka&apos;s hidden paradise where mythology meets natural beauty.
            Start planning your adventure to this sacred and stunning destination today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Plan Your Visit
            </Button>
            <Button size="lg" variant="outline">
              View More Destinations
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
