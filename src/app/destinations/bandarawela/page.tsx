import type { Metadata } from "next"
import Image from "next/image"
import {  MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, TreePine, Thermometer } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Bandarawela Travel Guide 2025: Cool Climate Paradise | Sri Lanka Hill Country",
  description: "Discover Bandarawela, Sri Lanka's perfect climate hill station. Complete guide to Dowa Rock Temple, tea estates, colonial architecture, and mountain adventures.",
  keywords: "Bandarawela Sri Lanka, Dowa Rock Temple, hill country, tea plantations, colonial architecture, cool climate, travel guide",
  authors: [{ name: "Sri Lanka Travel Expert" }],
  openGraph: {
    title: "Bandarawela Travel Guide 2025: Cool Climate Paradise",
    description: "Your complete guide to Bandarawela - perfect weather, ancient temples, and tea country charm",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bandarawela Travel Guide 2025: Cool Climate Paradise",
    description: "Your complete guide to Bandarawela - perfect weather, ancient temples, and tea country charm",
  },
}

export default function BandarawelaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Bandarawela.jpeg"
          alt="Bandarawela town nestled in rolling hills with tea plantations and colonial buildings under perfect blue sky"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 text-center text-white px-4 md:max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bandarawela</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Perfect Climate Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Thermometer className="w-4 h-4 mr-1" />
              Perfect Year-Round Climate
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,230m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Colonial Hill Station
            </Badge>
          </div>
        </div>
      </section>

      {/* Ad Banner - Top */}
  <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Hill Country Hotels & Resorts]
        </div>
      </div>

  <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Bandarawela: Where Perfect Weather Meets Timeless Charm</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Perched at 1,230 meters above sea level in Sri Lanka&apos;s enchanting hill country, Bandarawela is renowned for having one of the world&apos;s most perfect climates. This charming colonial hill station offers year-round temperatures between 16-24°C (61-75°F), making it an ideal escape from tropical heat.
            </p>
            <p className="text-lg">
              From ancient rock temples to pristine tea estates, from colonial architecture to misty mountain mornings, Bandarawela provides the perfect blend of natural beauty, cultural heritage, and comfortable living that has attracted visitors for over a century.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Bandarawela Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-blue-500" />
                    <span><strong>Climate:</strong> 16-24°C Year-Round</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span><strong>Elevation:</strong> 1,230m (4,035 feet)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span><strong>Population:</strong> ~35,000 residents</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>Province:</strong> Uva Province</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span><strong>Best Time:</strong> Year-Round Destination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-600" />
                    <span><strong>Founded:</strong> British Colonial Era</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Bandarawela</h2>
          
          {/* Ad Banner - Mid Content */}
          <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
            [Advertisement Space - 300x250 Medium Rectangle - Tea Estate Tours & Activities]
          </div>

          <div className="space-y-8">
            {/* Dowa Rock Temple */}
            <Card>
              <CardHeader>
                <CardTitle>1. Dowa Rock Temple</CardTitle>
                <CardDescription>Ancient cave temple with 2,000-year-old Buddha statue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dowa Rock Temple with ancient Buddha statue carved into rock face surrounded by lush greenery"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 6km from Bandarawela, Dowa Rock Temple features a magnificent 38-foot Buddha statue carved directly into the rock face over 2,000 years ago. The temple complex includes ancient caves with beautiful murals and offers stunning valley views.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        2,000-year-old rock-carved Buddha statue
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient cave paintings and murals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic valley and mountain views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation spaces
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tea Plantations */}
            <Card>
              <CardHeader>
                <CardTitle>2. Bandarawela Tea Estates</CardTitle>
                <CardDescription>World-class Ceylon tea plantations and factory tours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Bandarawela is surrounded by some of Sri Lanka&apos;s finest tea estates, producing premium high-grown Ceylon tea. The cool climate and misty conditions create perfect growing conditions for world-renowned tea varieties.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided tea factory tours and tastings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Tea picking experiences with workers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase premium teas directly from source
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Scenic walks through terraced gardens
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Bandarawela tea plantations with workers picking tea leaves in perfectly manicured terraced gardens"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Colonial Architecture */}
            <Card>
              <CardHeader>
                <CardTitle>3. Colonial Architecture Heritage</CardTitle>
                <CardDescription>British-era buildings and historic charm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Colonial-era buildings in Bandarawela with Victorian architecture and well-maintained gardens"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Bandarawela&apos;s streets are lined with beautifully preserved colonial-era buildings, including churches, government buildings, and private residences that showcase British architectural influence from the late 19th and early 20th centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Victorian-era churches and buildings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic Bandarawela Hotel (1893)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved government buildings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Charming colonial-style residences
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Perfect Climate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Perfect Climate Advantage</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bandarawela's perfect weather with clear blue skies, comfortable temperatures, and lush green landscapes"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Year-round perfect weather makes Bandarawela ideal for any season
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Bandarawela&apos;s elevation of 1,230 meters creates a unique microclimate that&apos;s consistently comfortable throughout the year. Unlike most tropical destinations, you&apos;ll never experience extreme heat or uncomfortable humidity here.
              </p>
              <p>
                The town enjoys cool mornings (16°C), pleasant afternoons (24°C), and comfortable evenings perfect for outdoor dining and evening walks. This climate has made Bandarawela a favorite retreat for both locals and international visitors seeking respite from tropical heat.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Climate Benefits:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• No need for air conditioning year-round</li>
                  <li>• Perfect for outdoor activities any time</li>
                  <li>• Comfortable sleeping weather every night</li>
                  <li>• Ideal for hiking and nature walks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Nature & Hiking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Tea plantation walks</li>
                  <li>• Mountain hiking trails</li>
                  <li>• Bird watching in pine forests</li>
                  <li>• Nature photography tours</li>
                  <li>• Sunrise/sunset viewpoints</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Temple visits and meditation</li>
                  <li>• Colonial architecture tours</li>
                  <li>• Local market exploration</li>
                  <li>• Traditional craft workshops</li>
                  <li>• Cultural festivals and events</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Relaxation & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Spa treatments and massages</li>
                  <li>• Yoga and meditation retreats</li>
                  <li>• Ayurvedic wellness programs</li>
                  <li>• Peaceful garden walks</li>
                  <li>• Reading and relaxation spots</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner - Mid Content 2 */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Wellness Retreats & Spa Packages]
        </div>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Bandarawela</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Train</CardTitle>
                <CardDescription>Scenic hill country railway journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">7-8 hours via Kandy on the scenic hill country line</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">5-6 hours through tea country and mountains</p>
                </div>
                <div>
                  <strong>From Badulla:</strong>
                  <p className="text-sm text-muted-foreground">45 minutes on the main hill country line</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>By Road</CardTitle>
                <CardDescription>Scenic mountain drives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">5-6 hours via Kandy or Ratnapura routes</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours through scenic mountain roads</p>
                </div>
                <div>
                  <strong>From Nuwara Eliya:</strong>
                  <p className="text-sm text-muted-foreground">2-3 hours through beautiful hill country</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Bandarawela</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Heritage Hotels</CardTitle>
                <CardDescription>$40-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Historic Bandarawela Hotel (1893)</li>
                  <li>• Colonial-era charm and character</li>
                  <li>• Beautiful gardens and views</li>
                  <li>• Traditional afternoon tea service</li>
                  <li>• Rich history and stories</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Tea Estate Bungalows</CardTitle>
                <CardDescription>$60-120 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Authentic plantation experiences</li>
                  <li>• Surrounded by tea gardens</li>
                  <li>• Colonial-style accommodations</li>
                  <li>• Tea factory tours included</li>
                  <li>• Stunning mountain views</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Modern Resorts</CardTitle>
                <CardDescription>$50-100 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Contemporary amenities</li>
                  <li>• Spa and wellness facilities</li>
                  <li>• Mountain and valley views</li>
                  <li>• Fine dining restaurants</li>
                  <li>• Conference and event facilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Cuisine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Cuisine & Dining</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Hill Country Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Must-Try Dishes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hill country rice and curry</li>
                      <li>• Fresh mountain vegetables</li>
                      <li>• Ceylon tea with local pastries</li>
                      <li>• Traditional wood-fired bread</li>
                      <li>• Local honey and preserves</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dining Experiences:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Colonial hotel dining rooms</li>
                      <li>• Tea estate lunch experiences</li>
                      <li>• Local family restaurants</li>
                      <li>• Market fresh ingredients</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tea Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Traditional Ceylon tea service in Bandarawela with mountain views and colonial setting"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Experience authentic Ceylon tea culture in its birthplace.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Traditional afternoon tea ceremonies</li>
                  <li>• Tea tasting and education sessions</li>
                  <li>• Learn about tea grading and processing</li>
                  <li>• Purchase premium teas directly</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ella</CardTitle>
                <CardDescription>Famous hill station - 1.5 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Ella's Nine Arch Bridge and Little Adam's Peak with scenic mountain backdrop"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Visit the iconic Nine Arch Bridge, hike Little Adam&apos;s Peak, and enjoy Ella&apos;s vibrant atmosphere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Haputale</CardTitle>
                <CardDescription>Lipton&apos;s Seat viewpoint - 1 hour</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Haputale's famous Lipton's Seat with panoramic tea plantation views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Experience the world-famous Lipton&apos;s Seat viewpoint and visit Dambatenne Tea Factory.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Badulla</CardTitle>
                <CardDescription>Ancient capital - 45 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Badulla's Muthiyangana Temple and Dunhinda Falls in mountainous setting"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Explore ancient Muthiyangana Temple and the spectacular Dunhinda Falls.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Pack light layers - perfect climate means minimal clothing needed</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Book heritage hotels in advance - limited availability</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Take advantage of year-round outdoor activities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Visit tea estates early morning for best experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect temple dress codes and customs</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Good to Know
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Evenings can be cool - bring a light jacket</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Some attractions may close during heavy rain</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">ATMs available but carry some cash for small vendors</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Train schedules can vary - check locally</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Book tea estate tours in advance during peak season</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Recommendations */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Perfect Climate Getaway</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Bandarawela offers something truly special - a destination where the weather is never a concern. Whether you visit in January or July, you&apos;ll enjoy the same comfortable temperatures and pleasant conditions that have made this hill station a favorite for over a century.
              </p>
              <p className="text-muted-foreground mb-4">
                From ancient rock temples to colonial charm, from world-class tea experiences to peaceful mountain walks, Bandarawela provides the perfect blend of culture, nature, and comfort in an ideal climate setting.
              </p>
              <p className="text-muted-foreground font-medium">
                Discover why Bandarawela is called Sri Lanka&apos;s perfect climate paradise! 🌤️🏔️
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner - Bottom */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Climate-Controlled Accommodations]
        </div>
      </div>
    </main>
  )
}
