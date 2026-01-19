import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Ship } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InsuranceBanner from "@/components/insurance-banner";


export const metadata: Metadata = {
  title: "Galle Fort Sri Lanka: Complete Travel Guide 2025 | UNESCO World Heritage Colonial Fortress",
  description: "Discover Galle Fort, Sri Lankas best-preserved colonial fortress. Complete guide to Dutch architecture, lighthouse, museums, and the best things to do in this UNESCO World Heritage site.",
  keywords: "Galle Fort, Sri Lanka colonial history, Dutch fort, UNESCO World Heritage, Galle lighthouse, colonial architecture",
  openGraph: {
    title: "Galle Fort Sri Lanka: Complete Travel Guide 2025",
    description: "Your ultimate guide to exploring Galle Forts colonial charm",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function GalleFortTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/galle-fort-sarmat-batagov-unsplash.jpg"
          alt="Stunning aerial view of Galle Fort showing Dutch colonial architecture surrounded by Indian Ocean waves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Galle Fort</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Where Colonial History Meets Ocean Waves</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Ship className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              Built 1663 AD
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Galle Fort: A Living Colonial Museum</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into a time machine and walk through 400 years of colonial history at Galle Fort, Sri Lankas
              best-preserved European fortress in Asia. This UNESCO World Heritage site is not just a museum piece –
              its a vibrant, living community where colonial Dutch architecture meets modern Sri Lankan life, all
              surrounded by the endless blue of the Indian Ocean.
            </p>
            <p className="text-lg">
              From cobblestone streets lined with boutique hotels and art galleries to ancient ramparts offering
              spectacular sunset views, Galle Fort is where history comes alive. Whether youre a history buff,
              architecture enthusiast, or simply seeking Instagram-worthy moments, this coastal gem promises an
              unforgettable journey through time.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Galle Fort Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Galle Fort Facts
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
          {/* How to Get to Galle Fort */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Galle Fort
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 205km (127 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                      {/* <li>• <strong>Cost:</strong> $60-90 USD for day trip</li> */}
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Recommended)</h4>
                    <p>Take the scenic coastal railway from Colombo Fort Station to Galle Station</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Galle</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> Depends on class</li>
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
                
                {/* Full Width Ceylanka Tours Recommendation */}
                <div className="p-3 bg-orange-100 dark:bg-slate-700 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 shadow-md">
                  <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                    <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Galle. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                  </p>
                  <div className="flex flex-col gap-1.5 text-xs text-orange-800 dark:text-orange-200">
                    <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded">
                      <span>📞</span>
                      <span><strong>Contact:</strong></span>
                      <a href="tel:+94707646765" className="underline hover:text-orange-700 dark:hover:text-orange-300">
                        Call +94 70 764 6765
                      </a>
                      <span>|</span>
                      <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                    <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                      <span>🗓️</span>
                      <Link href="/tours/galle" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                        <strong>One day tour to Galle</strong> - Click for details & booking
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                      <span>✈️</span>
                      <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                        <strong>Airport Transfer Services</strong> - Click for details & booking
                      </Link>
                    </div>
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

        {/* How to Get There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Get to Galle Fort</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  From Colombo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">By Train (Recommended)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Take the scenic coastal railway from Colombo Fort Station to Galle Station. Duration: 2.5-3 hours.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• First Class: LKR 300-500</li>
                    <li>• Second Class: LKR 150-250</li>
                    <li>• Third Class: LKR 60-100</li>
                    <li>• Book tickets in advance for first class</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600">By Car/Van (Recommended for Groups)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Take the Southern Expressway for fastest route. Duration: 1.5-2 hours. Most comfortable option for families and groups.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Private car:</strong> $40-60 USD (up to 4 people)</li>
                    <li>• <strong>Van/Mini-bus:</strong> $60-80 USD (up to 8 people)</li>
                    <li>• <strong>Uber/PickMe:</strong> $25-40 USD (limited availability)</li>
                    <li>• <strong>Car rental:</strong> $30-50 USD/day + fuel</li>
                    <li>• <strong>Toll charges:</strong> LKR 500-700</li>
                  </ul>
                  <div className="mt-3 p-3 bg-orange-100 dark:bg-orange-800/30 rounded-md border-l-4 border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Galle. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span><strong>Contact:</strong> +94 70 764 6765</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✈️</span>
                        <Link href="/airport-transfers" className="underline hover:text-orange-600 dark:hover:text-orange-300">
                          <strong>Airport Transfer Services</strong> - Click for details & booking
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <h4 className="font-semibold mb-2 text-blue-600">By Bus</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Express buses from Colombo Bastian Mawatha Bus Station. Duration: 2-2.5 hours.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Air-conditioned bus: LKR 200-300</li>
                    <li>• Regular bus: LKR 100-150</li>
                    <li>• Buses run every 30 minutes</li>
                  </ul>
                </div> */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  From Other Cities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">From Kandy</h4>
                  <p className="text-sm text-muted-foreground">
                    Take bus via Colombo or direct bus to Galle. Duration: 4-5 hours. Cost: LKR 300-500.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">From Bentota/Hikkaduwa</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular buses along the coastal road. Duration: 30-60 minutes. Cost: LKR 50-100.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-600">From Mirissa/Weligama</h4>
                  <p className="text-sm text-muted-foreground">
                    Local buses or three-wheelers. Duration: 30-45 minutes. Cost: LKR 50-150.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">From Bandaranaike Airport</h4>
                  <p className="text-sm text-muted-foreground">
                    Airport taxi or bus to Colombo then connect to Galle. Duration: 3-4 hours total.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-amber-800 mb-2">💡 Pro Tips:</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• <strong>Best for groups:</strong> Book a van (8-seater) for families or friend groups</li>
                    <li>• Galle Fort is walkable from Galle Bus/Train Station</li>
                    <li>• Three-wheelers available for short distances</li>
                    <li>• Book train tickets online via Sri Lanka Railways</li>
                    <li>• <strong>Van advantages:</strong> AC, luggage space, door-to-door service</li>
                    <li>• Traffic is heaviest on weekends and holidays</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Historical Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Fascinating History of Galle Fort</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Galle-Fort.jpg"
                alt="Historical Dutch colonial buildings inside Galle Fort showing traditional architecture with red tile roofs"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Well-preserved Dutch colonial architecture within the fort walls
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Galle Forts story begins in 1505 when Portuguese explorers first arrived, but it was the Dutch who
                transformed it into the magnificent fortress we see today. Built between 1663-1729, the fort served as
                the Dutch East India Companys main stronghold in Sri Lanka.
              </p>
              <p>
                The British later took control in 1796, adding their own architectural touches. What makes Galle Fort
                unique is that its not an abandoned relic – its a thriving community where families have lived for
                generations, maintaining the colonial charm while embracing modern life.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Colonial Timeline:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• 1505: Portuguese arrival</li>
                  <li>• 1663-1729: Dutch construction period</li>
                  <li>• 1796: British takeover</li>
                  <li>• 1948: Sri Lankan independence</li>
                  <li>• 1988: UNESCO World Heritage status</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-See Attractions in Galle Fort</h2>

          <div className="space-y-8">
            {/* Clock Tower */}
            <Card>
              <CardHeader>
                <CardTitle>1. The Iconic Clock Tower</CardTitle>
                <CardDescription>A historic sentinel and modern cricket landmark</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Galle-Clock-Tower.jpg"
                    alt="Historic Galle Fort Clock Tower with cricket ground in the background"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Standing proudly at the fort&apos;s southeastern corner since 1887, the Clock Tower has been an enduring symbol
                      of Galle&apos;s maritime heritage. Originally built to signal ships approaching the harbor, it has witnessed
                      countless historic moments and evolved into one of cricket&apos;s most recognizable landmarks.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Historical Significance:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            Built during British colonial era to monitor port activities
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            Used for naval communications and weather monitoring
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            Survived the devastating 2004 tsunami intact
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Cricket Connection:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Overlooks the iconic Galle International Cricket Stadium
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Featured in countless cricket broadcasts worldwide
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Popular spot for cricket photographers and commentators
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fort Ramparts */}
            <Card>
              <CardHeader>
                <CardTitle>2. The Historic Ramparts</CardTitle>
                <CardDescription>Walk along 400-year-old fortress walls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Ramparts_in_galle.jpeg"
                    alt="People walking along Galle Fort ramparts during golden hour with ocean views and lighthouse visible"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The forts massive stone ramparts offer the best views in Galle. Walk the complete circuit (about 2km)
                      for stunning ocean vistas, especially magical during sunset. The walls are up to 12 meters high and
                      2 meters thick in some places.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best sunset viewing spot in Galle
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for photography and selfies
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Free to walk and explore
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Galle Lighthouse */}
            <Card>
              <CardHeader>
                <CardTitle>2. Galle Lighthouse</CardTitle>
                <CardDescription>Sri Lankas oldest lighthouse still in operation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1938, this 26-meter tall lighthouse is not just functional but also the most photographed
                      landmark in Galle Fort. Located at the southeastern tip of the fort, it offers panoramic views of
                      the Indian Ocean and the forts architecture.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Iconic photo spot for Instagram
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful during both sunrise and sunset
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great spot for watching local fishermen
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Galle-Lighthouse.jpeg"
                    alt="White Galle Lighthouse standing tall against blue sky with ocean waves crashing at its base"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dutch Reformed Church */}
            <Card>
              <CardHeader>
                <CardTitle>3. Dutch Reformed Church</CardTitle>
                <CardDescription>Historic church with fascinating colonial tombstones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Galle-Church.jpg"
                    alt="Interior of Dutch Reformed Church in Galle Fort showing colonial architecture and historical tombstones"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in 1755, this beautiful church showcases Dutch colonial architecture and houses fascinating
                      tombstones of Dutch colonial officials. The floor is literally paved with tombstones, each telling
                      a story of colonial life and death in tropical Ceylon.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Visiting Information:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Open: 9:00 AM - 5:00 PM daily</li>
                        <li>• Entry: Small donation appreciated</li>
                        <li>• Photography allowed inside</li>
                        <li>• Guided tours available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* National Maritime Museum */}
            <Card>
              <CardHeader>
                <CardTitle>4. National Maritime Museum</CardTitle>
                <CardDescription>Discover Sri Lankas maritime heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Housed in a beautiful Dutch warehouse, this museum showcases Sri Lanka&apos;s rich maritime history.Honestly It&apos;s a small museum when compared to others but worthy of a quick visit if you have time.
                      From ancient fishing techniques to colonial trade routes, its a fascinating journey through the
                      islands relationship with the sea.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient ship models and maritime artifacts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colonial period trading displays
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional fishing equipment
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Maritime-Museum-Galle.jpg"
                    alt="Maritime museum displays showing ancient ship models and colonial trading artifacts"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Shopping & Dining */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shopping & Dining in Galle Fort</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Unique Shopping Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Barefoot Gallery</h4>
                  <p className="text-sm text-muted-foreground">Contemporary Sri Lankan art, textiles, and handicrafts in a beautiful colonial building.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stick No Bills</h4>
                  <p className="text-sm text-muted-foreground">Trendy boutique with local designer clothing and accessories.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Orchid House</h4>
                  <p className="text-sm text-muted-foreground">Antiques, vintage items, and unique souvenirs from colonial times.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Gem Shops</h4>
                  <p className="text-sm text-muted-foreground">Authentic Sri Lankan gems and jewelry from reputable dealers.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Must-Try Restaurants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Pedlars Inn Cafe</h4>
                  <p className="text-sm text-muted-foreground">Colonial ambiance with excellent Sri Lankan and international cuisine.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fortaleza Restaurant</h4>
                  <p className="text-sm text-muted-foreground">Rooftop dining with fort views and fresh seafood specialties.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">The Fort Printers</h4>
                  <p className="text-sm text-muted-foreground">Fine dining in a restored colonial mansion with garden seating.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mamas Galle Fort Roof Cafe</h4>
                  <p className="text-sm text-muted-foreground">Budget-friendly with great views and local dishes.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Donts for Galle Fort</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-900/60 dark:border-green-700">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-100 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - Make the Most of Your Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-green-900 dark:text-green-100">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Walk the ramparts at sunset:</strong> The golden hour views are absolutely magical
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Explore the side streets:</strong> Discover hidden cafes and local life
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Visit during weekdays:</strong> Less crowded and more peaceful
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Try local seafood:</strong> Fresh catch from the Indian Ocean
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect local residents:</strong> Its a living community, not just a tourist site
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50 dark:bg-red-900/60 dark:border-red-700">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-100 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DONTs - Avoid These Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-red-900 dark:text-red-100">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont visit only during midday:</strong> Very hot and crowded with tour groups
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont buy gems from street vendors:</strong> Stick to reputable shops with certificates
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont climb on fort walls:</strong> Dangerous and damages historical structures
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont litter:</strong> Help preserve this UNESCO World Heritage site
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont rush through:</strong> Take time to appreciate the colonial architecture
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Galle Fort</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Options</CardTitle>
                <CardDescription>$20-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guesthouses within the fort</li>
                  <li>• Backpacker hostels nearby</li>
                  <li>• Family-run homestays</li>
                  <li>• Basic but clean accommodations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Boutique Hotels</CardTitle>
                <CardDescription>$50-150 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Restored colonial mansions</li>
                  <li>• Unique character and charm</li>
                  <li>• Central fort locations</li>
                  <li>• Personalized service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group">
              <CardHeader>
                <CardTitle className="text-purple-600">Luxury Properties</CardTitle>
                <CardDescription>$150+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Historic luxury hotels</li>
                  <li>• Premium amenities and spas</li>
                  <li>• Ocean or fort views</li>
                  <li>• Fine dining restaurants</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Featured: The Charleston
                  </h4>
                  <div className="relative h-48 mt-2 rounded-md overflow-hidden">
                    <Image
                      src="/charleston-galle-fort.jpg"
                      alt="The Charleston Galle Fort Hotel's colonial elegance"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-muted-foreground mb-2">
                      Luxury colonial mansion with authentic period features and modern comforts.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">From $250/night</span>
                      <a 
                        href="https://www.wearecreativeleap.com/en/destinations/the-charleston"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card className="col-span-3 mt-6 border-purple-200 bg-purple-50/30 dark:bg-purple-900/20">
              <CardHeader>
                <CardTitle className="text-purple-600 dark:text-purple-300 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Featured: The Charleston Galle Fort Hotel
                </CardTitle>
                <CardDescription>Historic Luxury in the Heart of Galle Fort</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/The-Charleston-Galle-Fort-Hotel.jpg"
                      alt="The Charleston Galle Fort Hotel's elegant colonial architecture and luxurious interior"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg mb-4 object-cover"
                    />
                    <p className="text-sm text-muted-foreground italic text-center">
                      Experience timeless elegance in a beautifully restored Dutch colonial mansion
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The Charleston Galle Fort Hotel represents the pinnacle of luxury accommodation within the historic walls of Galle Fort. This meticulously restored Dutch colonial mansion combines centuries of history with modern luxury.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300">Signature Features:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          Authentic colonial architecture with modern amenities
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          Luxurious suites with period furniture and ocean views
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          Fine dining restaurant serving international cuisine
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          Courtyard pool and garden for relaxation
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Contact & Booking</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>🌐 <a href="https://www.wearecreativeleap.com/en/destinations/the-charleston" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Official Website</a></p>
                        <p>📍 28 Church Street, Fort, Galle, Sri Lanka</p>
                        <p>💰 Starting from $250 per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Galle Fort adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/jungle-beach.jpeg"
                  alt="Jungle Beach Roomassala with lush greenery and clear waters"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  10 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Jungle Beach Roomassala</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Hidden paradise beach with crystal-clear waters surrounded by lush jungle. Perfect for swimming and relaxation.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  3 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jungle-beach-roomassala" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Thalpe-beach.jpg"
                  alt="Thalpe Beach coral wells and golden sand with turquoise water"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  15 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Thalpe Beach</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Peaceful beach with unique coral wells and golden sands. Less crowded than Galle beaches, ideal for quiet relaxation.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  6 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Mirissa1.jpg"
                  alt="Mirissa Beach with palm trees and golden sand"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  40 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Mirissa</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Famous beach town for whale watching and stunning sunsets. Vibrant nightlife and excellent seafood restaurants.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  25 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mirissa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Waligama.jpg"
                  alt="Weligama Bay with iconic stilt fishermen"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  30 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Weligama</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Perfect beginner surfing spot with calm bay waters. Famous for stilt fishermen and fresh seafood markets.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  20 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/waligama" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Hirikatiya.jpg"
                  alt="Hirikatiya Beach with surfers riding waves and palm trees lining the shore"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  40 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hiriketiya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Stunning crescent bay perfect for surfing. Relaxed beach vibe with beachfront cafes and yoga retreats.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  27 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hirikatiya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/HummanayaBlowhole.jpeg"
                  alt="Hummanaya Blowhole spraying water high above the rocky coast"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1 hour
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hummanaya Blowhole</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sri Lanka's only natural blowhole! Watch ocean water shoot up to 25 meters through coastal rocks - spectacular natural wonder.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  40 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hummanaya-blowhole" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Blue-beach.jpg"
                  alt="Nilwella Blue Beach island with pristine waters"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  50 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Nilwella Blue Beach</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Secluded beach paradise with tiny island you can walk to. Perfect for campfires, snorkeling, and peaceful escapes.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  32 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/nilwella-blue-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Kanneliya.jpg"
                  alt="Kanneliya Rainforest with lush green vegetation"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1 hour
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kanneliya Rainforest</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ancient rainforest reserve with diverse flora and fauna. Guided nature walks through pristine tropical wilderness.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  35 km from Galle Fort
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kanneliya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Galle Fort Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Galle Fort is more than just a historical site – its a living testament to Sri Lankas colonial past
                and vibrant present. Every cobblestone street, every colonial building, and every sunset view from the
                ramparts tells a story of cultural fusion and resilience.
              </p>
              <p className="text-muted-foreground mb-4">
                Take your time to wander, discover hidden corners, chat with local residents, and soak in the unique
                atmosphere where 400 years of history blend seamlessly with contemporary Sri Lankan life. The forts
                magic lies not just in its architecture, but in its soul.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your journey through time at Galle Fort! 🏰🌊
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
