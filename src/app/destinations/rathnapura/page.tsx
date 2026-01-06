import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Gem, Mountain, AlertTriangle, Star, Calendar, Users, Sparkles, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Rathnapura: The Gem City of Sri Lanka - Complete Travel Guide 2025",
  description:
    "Discover Rathnapura, Sri Lanka's legendary gem capital. Explore gem mines, Buddhist temples, natural attractions, and rich cultural heritage in this comprehensive travel guide.",
  keywords:
    "Rathnapura, Sri Lanka, gems, sapphires, rubies, travel guide, tourism, gem mining, Buddhist temples, Sabaragamuwa",
  authors: [{ name: "Sri Lanka Travel Guide" }],
  openGraph: {
    title: "Rathnapura: The Gem City of Sri Lanka - Complete Travel Guide 2025",
    description: "Your complete guide to exploring Rathnapura, the legendary gem capital of Sri Lanka",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rathnapura: The Gem City of Sri Lanka - Complete Travel Guide 2025",
    description: "Your complete guide to exploring Rathnapura, the legendary gem capital of Sri Lanka",
  },
}

export default function RathnapuraGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Saman-devalaya.jpeg"
          alt="Rathnapura gem mining landscape with traditional buildings and lush mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Rathnapura</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">The Legendary Gem City of Sri Lanka</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-black/60 text-white border-white/50 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Sabaragamuwa Province
            </Badge>
            <Badge variant="secondary" className="bg-black/60 text-white border-white/50 bg-blue-600/80 text-white border-blue-500">
              <Gem className="w-4 h-4 mr-1" />
              Gem Capital
            </Badge>
            <Badge variant="secondary" className="bg-black/60 text-white border-white/50 bg-green-600/80 text-white border-green-500">
              <Mountain className="w-4 h-4 mr-1" />
              Hill Country
            </Badge>

          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Rathnapura</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="text-lg mb-4">
                  Rathnapura, literally meaning &quot;City of Gems&quot; in Sinhala, stands as Sri Lanka&apos;s most celebrated
                  gem-mining center and one of the world&apos;s most important sources of precious stones. Located in the
                  Sabaragamuwa Province, approximately 100 kilometers southeast of Colombo, this historic city has been
                  synonymous with gemstone trading for over 2,000 years.
                </p>
                <p className="text-lg mb-4">
                  The city sits in a valley surrounded by hills that contain some of the richest gem deposits on Earth.
                  Rathnapura&apos;s alluvial deposits have yielded world-famous sapphires, rubies, cat&apos;s eyes, and other
                  precious stones that have adorned royal crowns and collections across the globe. The legendary Blue
                  Belle of Asia, one of the world&apos;s largest blue sapphires, was discovered in these very hills.
                </p>
                <p className="text-lg mb-4">
                  Beyond its geological treasures, Rathnapura offers visitors a unique glimpse into traditional Sri
                  Lankan culture, ancient Buddhist heritage, and the fascinating world of gem mining. The city serves as
                  the capital of Ratnapura District and is home to approximately 50,000 residents who have maintained
                  their traditional way of life for generations.
                </p>
                <p className="text-lg">
                  Today, Rathnapura continues to be a major center for gem trading, attracting dealers and collectors
                  from around the world. Visitors can explore active gem mines, visit traditional markets, discover
                  ancient temples, and experience the authentic culture of rural Sri Lanka in this remarkable city.
                </p>
              </div>
            </section>

            {/* Interesting Facts */}
            <section className="mb-12">
              <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-800">
                    <Sparkles className="w-5 h-5" />
                    Fascinating Facts About Rathnapura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Gem className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">World&apos;s Gem Capital</h4>
                          <p className="text-sm text-amber-700">
                            Rathnapura produces over 90% of Sri Lanka&apos;s precious stones, including the world&apos;s finest
                            blue sapphires.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">Royal Connections</h4>
                          <p className="text-sm text-amber-700">
                            Many British Crown Jewels contain sapphires from Rathnapura, including stones in the
                            Imperial State Crown.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mountain className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">Ancient Origins</h4>
                          <p className="text-sm text-amber-700">
                            Gem mining in Rathnapura dates back over 2,500 years, mentioned in ancient texts and
                            chronicles.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">Record Breakers</h4>
                          <p className="text-sm text-amber-700">
                            The 400-carat Blue Belle of Asia and the 478-carat Queen of Asia sapphires were both found
                            here.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">Traditional Methods</h4>
                          <p className="text-sm text-amber-700">
                            Local miners still use traditional hand-digging techniques passed down through generations.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">Geographic Wonder</h4>
                          <p className="text-sm text-amber-700">
                            The city sits at the confluence of three rivers: Kalu Ganga, Wey Ganga, and Maha Oya.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quick Facts */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Essential Information About Rathnapura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span>
                          <strong>Province:</strong> Sabaragamuwa
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="w-4 h-4 text-green-500" />
                        <span>
                          <strong>Elevation:</strong> 34 meters above sea level
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span>
                          <strong>Population:</strong> Approximately 50,000
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Gem className="w-4 h-4 text-blue-500" />
                        <span>
                          <strong>Famous for:</strong> Precious gemstones
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>
                          <strong>Best Time:</strong> December to April
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        <span>
                          <strong>Founded:</strong> Ancient times (2000+ years)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Getting There */}
            <section className="mb-12">
              <Card className="border-blue-200 bg-blue-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <MapPin className="w-5 h-5" />
                    How to Reach Rathnapura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">By Road (Most Popular)</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          • <strong>From Colombo:</strong> 100km via A4 highway (2.5 hours)
                        </li>
                        <li>
                          • <strong>From Kandy:</strong> 78km via A18 route (2 hours)
                        </li>
                        <li>
                          • <strong>From Galle:</strong> 120km via A17 route (3 hours)
                        </li>
                        <li>
                          • <strong>Transport:</strong> Private car, taxi, or bus
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">By Public Transport</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          • <strong>Bus:</strong> Regular services from Colombo Fort
                        </li>
                        <li>
                          • <strong>Duration:</strong> 3-4 hours depending on traffic
                        </li>
                        <li>
                          • <strong>Cost:</strong> Very economical option
                        </li>
                        <li>
                          • <strong>Frequency:</strong> Every 30 minutes during day
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-blue-800">
                      <strong>💡 Travel Tip:</strong> The journey to Rathnapura offers scenic views of rubber
                      plantations, tea estates, and traditional villages. Start early to avoid traffic and enjoy the
                      countryside.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Top Attractions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Top Attractions in Rathnapura</h2>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Gem Mines and Mining Sites</CardTitle>
                    <CardDescription>Experience traditional gem mining and discover precious stones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <Image
                        src="/traditional-gem-mining-in-rathnapura-with-workers-.jpg"
                        alt="Traditional gem mining operations in Rathnapura"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Visit active gem mines around Rathnapura to witness traditional mining techniques that have
                          remained unchanged for centuries. Watch skilled miners extract precious stones from alluvial
                          deposits using simple tools and generations of expertise.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Observe traditional hand-digging methods
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Learn about gem identification and grading
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Possibility of finding your own gemstone
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Rathnapura Gem Market</CardTitle>
                    <CardDescription>Browse authentic gemstones and traditional jewelry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          The bustling gem market in Rathnapura is where dealers from around the world come to buy and
                          sell precious stones. Experience the excitement of gem trading and browse an incredible
                          variety of sapphires, rubies, and other precious stones.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Authentic gemstones at source prices
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Traditional jewelry and craftsmanship
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Expert gem cutting and polishing services
                          </li>
                        </ul>
                      </div>
                      <Image
                        src="/rathnapura-gem-market-with-colorful-precious-stone.jpg"
                        alt="Colorful gemstones and traders at Rathnapura gem market"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Maha Saman Devalaya</CardTitle>
                    <CardDescription>Ancient Buddhist temple with rich cultural heritage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <Image
                        src="/Saman-devalaya.jpeg"
                        alt="Maha Saman Devalaya Buddhist temple with traditional Sri Lankan architecture"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                      <div>
                        <p className="text-muted-foreground mb-4">
                          This ancient temple dedicated to God Saman is one of the most important religious sites in the
                          region. The temple features beautiful traditional architecture, intricate wood carvings, and
                          serves as a center for local Buddhist festivals and ceremonies.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Ancient Buddhist architecture and art
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Important pilgrimage site for locals
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Peaceful atmosphere for meditation
                          </li>
                        </ul>
                      <div className="mt-6">
                        <Link href="/destinations/saman-devalaya-rathnapura">
                          <Button
                            className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                            variant="default"
                          >
                            Discover More about Saman Devalaya
                          </Button>
                        </Link>
                      </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Bopath Ella Waterfall</CardTitle>
                    <CardDescription>Scenic waterfall shaped like a Bo tree leaf</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Located about 5km from Rathnapura, this unique waterfall gets its name from its distinctive
                          shape resembling a Bo tree leaf (Bopath). The 30-meter cascade is surrounded by lush tropical
                          vegetation and offers a refreshing escape from the city.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Unique leaf-shaped waterfall formation
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Natural swimming pool at the base
                          </li>
                          <li className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            Perfect for photography and picnics
                          </li>
                        </ul>
                      </div>
                      <Image
                        src="/Bopath-Ella.jpeg"
                        alt="Bopath Ella waterfall with its distinctive Bo tree leaf shape"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Cultural Experiences */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Cultural Experiences</h2>
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Immerse Yourself in Local Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-700">Traditional Crafts</h4>
                      <ul className="space-y-2 text-sm text-purple-600">
                        <li>• Watch master gem cutters at work</li>
                        <li>• Learn traditional jewelry making techniques</li>
                        <li>• Visit local pottery and handicraft workshops</li>
                        <li>• Experience traditional batik and textile arts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-pink-700">Local Festivals</h4>
                      <ul className="space-y-2 text-sm text-pink-600">
                        <li>• Saman Devalaya Perahera (July/August)</li>
                        <li>• Vesak Festival celebrations (May)</li>
                        <li>• Traditional New Year festivities (April)</li>
                        <li>• Local harvest festivals throughout the year</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Travel Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Essential Travel Tips</h2>
              <div className="space-y-6">
                <Card className="border-amber-200 bg-amber-50/30">
                  <CardHeader>
                    <CardTitle className="text-amber-800">Planning Your Visit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-amber-700">Best Time to Visit</h4>
                        <ul className="space-y-2 text-sm text-amber-600">
                          <li>
                            • <strong>Dry Season:</strong> December to April (ideal weather)
                          </li>
                          <li>
                            • <strong>Gem Mining:</strong> Year-round activity
                          </li>
                          <li>
                            • <strong>Festivals:</strong> Check local calendar for special events
                          </li>
                          <li>
                            • <strong>Avoid:</strong> Heavy monsoon months (May-July)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-amber-700">What to Bring</h4>
                        <ul className="space-y-2 text-sm text-amber-600">
                          <li>• Comfortable walking shoes for mine visits</li>
                          <li>• Sun protection and light clothing</li>
                          <li>• Camera for documenting your journey</li>
                          <li>• Cash for gem purchases and local markets</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Important Gem Buying Tips</h4>
                      <p className="text-sm text-red-700 mb-2">
                        <strong>Buy from reputable dealers:</strong> Always request certificates for expensive stones
                        and deal with established gem merchants.
                      </p>
                      <p className="text-sm text-red-700 mb-2">
                        <strong>Learn basic identification:</strong> Understand the difference between natural and
                        synthetic stones before making purchases.
                      </p>
                      <p className="text-sm text-red-700">
                        <strong>Negotiate respectfully:</strong> Bargaining is expected, but be fair and respectful to
                        local traders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Quick Facts & Similar Places */}
          <div className="lg:col-span-1">
            {/* How to Get In - Sidebar Section */}
            <section className="mb-8">
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900 dark:border-blue-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                    How to Get In
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-blue-900 dark:text-blue-100">
                    <p>
                      <span className="font-semibold text-blue-700 dark:text-blue-200">Distance from Colombo:</span> ~100 km
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-semibold text-blue-700 dark:text-blue-200">By Private Vehicle (Recommended):</span> <br />
                        <span className="text-blue-900 dark:text-blue-100">2.5–3 hours via A4 (Colombo–Ratnapura–Batticaloa) main road. Most comfortable and flexible. <span className="font-bold text-primary">Ceylanka Tours</span> offers private car/van with hotel pickup, sightseeing stops, and local driver-guide.</span>
                      </li>
                      <li>
                        <span className="font-semibold text-blue-700 dark:text-blue-200">By Bus:</span> <br />
                        <span className="text-blue-900 dark:text-blue-100">Direct express and local buses from Colombo Bastian Mawatha Bus Terminal to Rathnapura. Takes 3–3.5 hours. Route: Colombo → Avissawella → Ratnapura. Buses run frequently, but can be crowded.</span>
                      </li>
                      <li>
                        <span className="font-semibold text-blue-700 dark:text-blue-200">By Train:</span> <br />
                        <span className="text-blue-900 dark:text-blue-100">Colombo Fort to Avissawella (Kelani Valley Line), then bus/taxi to Rathnapura. Total 3.5–4 hours. Not direct, but scenic.</span>
                      </li>
                    </ul>
                    <div className="mt-2 p-2 bg-blue-100 dark:bg-blue-800 rounded border border-blue-200 dark:border-blue-600">
                      <span className="font-semibold">Ceylanka Tours Contact:</span> <a href="tel:+94771234567" className="underline text-blue-700 dark:text-blue-200">+94 77 123 4567</a><br />
                      <span className="font-semibold">Website:</span> <a href="https://ceylankatours.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 dark:text-blue-200">ceylankatours.com</a>
                    </div>
                    <p className="text-xs text-blue-600 dark:text-blue-300 mt-2">For the easiest and most comfortable trip, book a private vehicle with Ceylanka Tours.</p>
                  </div>
                </CardContent>
              </Card>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Similar Places</h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                <Link href="/destinations/galle" className="block group">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative">
                      <Image
                        src="/galle-fort-and-coastal-view-sri-lanka.jpg"
                        alt="Galle fort and coastal scenery"
                        width={200}
                        height={120}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-base mb-1">Galle</h3>
                      <p className="text-sm text-blue-600 font-medium">Packages from 16,530</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/destinations/colombo" className="block group">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative">
                      <Image
                        src="/colombo-city-skyline-and-beach-sri-lanka.jpg"
                        alt="Colombo city and coastline"
                        width={200}
                        height={120}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-base mb-1">Colombo</h3>
                      <p className="text-sm text-blue-600 font-medium">Packages from 15,700</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/destinations/nuwara-eliya" className="block group">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative">
                      <Image
                        src="/nuwara-eliya-tea-plantations-and-mountains-sri-lan.jpg"
                        alt="Nuwara Eliya tea country"
                        width={200}
                        height={120}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-base mb-1">Nuwara Eliya</h3>
                      <p className="text-sm text-blue-600 font-medium">Packages from 13,368</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/destinations/kandy" className="block group">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative">
                      <Image
                        src="/kandy-temple-and-lake-sri-lanka-cultural-city.jpg"
                        alt="Kandy temple and lake"
                        width={200}
                        height={120}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-base mb-1">Kandy</h3>
                      <p className="text-sm text-blue-600 font-medium">Packages from 13,368</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/destinations/sigiriya" className="block group">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative">
                      <Image
                        src="/sigiriya-rock-fortress-ancient-ruins-sri-lanka.jpg"
                        alt="Sigiriya rock fortress"
                        width={200}
                        height={120}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-base mb-1">Sigiriya</h3>
                      <p className="text-sm text-blue-600 font-medium">Packages from 15,500</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/destinations/koh-samui" className="block group">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative">
                      <Image
                        src="/koh-samui-tropical-beach-paradise-thailand.jpg"
                        alt="Koh Samui tropical beach"
                        width={200}
                        height={120}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-base mb-1">Koh Samui</h3>
                      <p className="text-sm text-blue-600 font-medium">Packages from 20,800</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
