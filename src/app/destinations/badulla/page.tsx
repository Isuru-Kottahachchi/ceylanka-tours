import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Train, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Badulla Travel Guide 2025 Ancient Capital & Hill Country Gateway | Sri Lanka",
  description:
    "Discover Badulla, Sri Lanka's ancient Uva Province capital. Complete travel guide with Dunhinda Falls, Muthiyangana Temple, tea estates, and hill country adventures.",
  keywords:
    "Badulla Sri Lanka, Dunhinda Falls, Muthiyangana Temple, Uva Province, hill country, tea plantations, ancient capital, travel guide",
  authors: [{ name: "Sri Lanka Travel Expert" }],
  openGraph: {
    title: "Badulla Travel Guide 2025: Ancient Capital & Hill Country Gateway",
    description: "Your complete guide to Badulla - ancient temples, stunning waterfalls, and tea country adventures",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Badulla Travel Guide 2025: Ancient Capital & Hill Country Gateway",
    description: "Your complete guide to Badulla - ancient temples, stunning waterfalls, and tea country adventures",
  },
}

export default function BadullaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Badulla.jpeg"
          alt="Panoramic view of Badulla city nestled in lush green mountains with ancient temples and modern buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl md:max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Badulla</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Capital of the Uva Province</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Uva Province Capital
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              680m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Train className="w-4 h-4 mr-1" />
              Railway Terminus
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Badulla: Where History Meets Nature</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the heart of Sri Lanka&apos;s Uva Province, Badulla is a captivating blend of ancient history and
              natural beauty. As the provincial capital and the terminus of the famous hill country railway line, this
              charming city serves as the perfect gateway to explore Sri Lanka&apos;s mountainous interior.
            </p>
            <p className="text-lg">
              From the sacred Muthiyangana Raja Maha Vihara temple to the thundering Dunhinda Falls, Badulla offers
              travelers an authentic Sri Lankan experience away from the typical tourist crowds. Whether you&apos;re seeking
              spiritual enlightenment, natural wonders, or cultural immersion, Badulla delivers unforgettable memories.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Badulla Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Province:</strong> Uva Province Capital
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 680 meters (2,230 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~42,000 residents
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Railway:</strong> Hill Country Line Terminus
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> December to April
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Climate:</strong> Cool & Pleasant Year-Round
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Badulla</h2>

          {/* Ad Banner - Mid Content */}
          <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
            [Advertisement Space - 300x250 Medium Rectangle - Hotel Booking Ads]
          </div>

          <div className="space-y-8">
            {/* Gale Pansala (Stone Temple) */}
            <Card>
              <CardHeader>
                <CardTitle>1. Gale Pansala (Stone Temple)</CardTitle>
                <CardDescription>Ancient Buddhist cave temple with unique stone architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Badulla.jpeg"
                    alt="Gale Pansala ancient stone cave temple in Badulla with Buddha statues and rock carvings"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Gale Pansala, also known as the Stone Temple, is a remarkable Buddhist cave temple carved into solid rock. Dating back centuries, it features serene Buddha statues, ancient murals, and intricate stone carvings that showcase the region&apos;s rich spiritual heritage.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique stone architecture and cave shrines
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Buddha statues and murals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful setting ideal for meditation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Off the beaten path, less crowded
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Muthiyangana Temple */}
            <Card>
              <CardHeader>
                <CardTitle>1. Muthiyangana Raja Maha Vihara</CardTitle>
                <CardDescription>Sacred Buddhist temple with 2,000+ years of history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ancient Muthiyangana Temple in Badulla with golden Buddha statue and traditional Sri Lankan architecture"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      One of the 16 most sacred Buddhist sites in Sri Lanka, Muthiyangana Temple is believed to have
                      been visited by Lord Buddha himself. The temple houses a sacred hair relic and features stunning
                      ancient architecture.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 2,000 years of continuous worship
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful ancient murals and sculptures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation halls and gardens
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Free entry, donations welcome
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dunhinda Falls */}
            <Card>
              <CardHeader>
                <CardTitle>2. Dunhinda Falls</CardTitle>
                <CardDescription>Spectacular 64-meter waterfall through pristine jungle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 5km from Badulla city, Dunhinda Falls is one of Sri Lanka&apos;s most beautiful waterfalls. The
                      name means &quot;mist-laden&quot; in Sinhala, perfectly describing the ethereal spray that creates rainbows
                      in the sunlight.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        64-meter (210-foot) single-drop waterfall
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        30-minute scenic hike through jungle
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural swimming pool at the base
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best visited during rainy season (May-September)
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Dunhinda-Falls.jpg"
                    alt="Dunhinda Falls cascading 64 meters through lush green jungle with mist creating rainbows"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Badulla Railway Station */}
            <Card>
              <CardHeader>
                <CardTitle>3. Badulla Railway Station</CardTitle>
                <CardDescription>Historic terminus of the scenic hill country railway</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Historic Badulla Railway Station with vintage architecture and the famous hill country train"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The end point of one of the world&apos;s most scenic train journeys, Badulla Railway Station is a piece
                      of living history. Built during British colonial times, it&apos;s where the famous Kandy-Badulla hill
                      country train journey concludes.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Terminus of world-famous scenic railway
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful colonial architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic railway museum nearby
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect photo opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Tea Plantations & Culture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tea Culture & Plantations</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Expansive tea plantations around Badulla with workers picking tea leaves in terraced gardens"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Tea plantations surrounding Badulla offer authentic Ceylon tea experiences
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Badulla is surrounded by some of Sri Lanka&apos;s finest tea plantations, producing world-renowned Ceylon
                tea. The region&apos;s high altitude and cool climate create perfect conditions for growing premium tea
                varieties.
              </p>
              <p>
                Visitors can tour working tea factories, learn about the tea-making process from leaf to cup, and enjoy
                fresh tea tastings with panoramic mountain views. Many plantations offer guided tours and authentic tea
                experiences.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Tea Plantation Experiences:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Factory tours showing tea processing</li>
                  <li>• Tea picking experiences with local workers</li>
                  <li>• Premium tea tastings and purchases</li>
                  <li>• Photography in scenic tea gardens</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Visit Badulla</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>December to April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Perfect weather for sightseeing</li>
                  <li>• Clear mountain views</li>
                  <li>• Ideal for temple visits</li>
                  <li>• Best for photography</li>
                  <li>• Peak tourist season</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Waterfalls at full power</li>
                  <li>• Lush green landscapes</li>
                  <li>• Fewer crowds</li>
                  <li>• Lower accommodation prices</li>
                  <li>• Some hiking trails may be slippery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Shoulder Season</CardTitle>
                <CardDescription>October to November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Transitional weather</li>
                  <li>• Good balance of sun and rain</li>
                  <li>• Moderate tourist numbers</li>
                  <li>• Pleasant temperatures</li>
                  <li>• Great for all activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner - Mid Content 2 */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Tour Packages & Activities]
        </div>

        {/* Getting There & Around */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Badulla</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Train (Recommended)</CardTitle>
                <CardDescription>One of the world&apos;s most scenic railway journeys</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">6-7 hours through tea country, mountains, and tunnels</p>
                </div>
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">8-9 hours via Kandy (book reserved seats in advance)</p>
                </div>
                <div>
                  <strong>Train Classes:</strong>
                  <ul className="text-sm text-muted-foreground">
                    <li>• 1st Class Reserved: Most comfortable</li>
                    <li>• 2nd Class Reserved: Good value</li>
                    <li>• 3rd Class: Budget option</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>By Road</CardTitle>
                <CardDescription>Flexible but winding mountain roads</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">5-6 hours via Kandy or Ratnapura</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours through scenic mountain roads</p>
                </div>
                <div>
                  <strong>Transport Options:</strong>
                  <ul className="text-sm text-muted-foreground">
                    <li>• Private car/taxi: Most comfortable</li>
                    <li>• Public bus: Budget-friendly</li>
                    <li>• Tuk-tuk: For short distances only</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Badulla</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Options</CardTitle>
                <CardDescription>$10-25 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guesthouses and homestays</li>
                  <li>• Basic amenities, clean rooms</li>
                  <li>• Local family experiences</li>
                  <li>• Walking distance to attractions</li>
                  <li>• Authentic Sri Lankan hospitality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$25-60 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Comfortable rooms with AC</li>
                  <li>• Restaurant and room service</li>
                  <li>• Mountain or city views</li>
                  <li>• Tour booking assistance</li>
                  <li>• WiFi and modern amenities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Luxury Resorts</CardTitle>
                <CardDescription>$60+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Premium tea estate bungalows</li>
                  <li>• Spa and wellness facilities</li>
                  <li>• Fine dining restaurants</li>
                  <li>• Guided plantation tours</li>
                  <li>• Panoramic mountain views</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Food & Dining */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Food & Dining</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Must-Try Local Dishes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Uva Province Specialties:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Badulla-style rice and curry</li>
                      <li>• Fresh mountain vegetables</li>
                      <li>• Ceylon tea with local sweets</li>
                      <li>• Traditional hoppers and string hoppers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Where to Eat:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Local restaurants near railway station</li>
                      <li>• Tea estate dining experiences</li>
                      <li>• Street food stalls in town center</li>
                      <li>• Hotel restaurants with mountain views</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tea Culture Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Traditional Ceylon tea service with local sweets and mountain backdrop in Badulla"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  No visit to Badulla is complete without experiencing authentic Ceylon tea culture.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tea factory tours and tastings</li>
                  <li>• Learn about tea grading and processing</li>
                  <li>• Purchase premium teas directly from source</li>
                  <li>• Traditional tea service with local snacks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety & Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Safety Tips & Travel Advice</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Essential Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Pack layers - temperatures can vary significantly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Book train tickets in advance, especially during peak season</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Carry cash - many local places don&apos;t accept cards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect local customs when visiting temples</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Learn basic Sinhala phrases - locals appreciate the effort</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Mountain roads can be winding - take motion sickness precautions</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Weather can change quickly in the mountains</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Some hiking trails may be closed during heavy rains</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Always inform someone of your hiking plans</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Carry insect repellent for jungle walks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Ella</CardTitle>
                <CardDescription>Famous hill station - 1 hour away</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Ella.jpg"
                  alt="Ella town with Nine Arch Bridge and Little Adam's Peak visible in the distance"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Visit the famous Nine Arch Bridge, Little Adam&apos;s Peak, and enjoy the cool mountain climate.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ella-town" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Bandarawela</CardTitle>
                <CardDescription>Colonial hill station - 45 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Bandarawela.jpeg"
                  alt="Bandarawela town with colonial architecture and tea plantations in the background"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore British colonial architecture, Dowa Rock Temple, and pristine tea estates.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bandarawela" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Haputale</CardTitle>
                <CardDescription>Lipton&apos;s Seat viewpoint - 1.5 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Haputhale.jpeg"
                  alt="Haputale's Lipton's Seat viewpoint with panoramic views of tea plantations and mountains"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Experience world-famous Lipton&apos;s Seat viewpoint and Dambatenne Tea Factory.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/haputhale" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Recommendations */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 dark:from-slate-800 dark:to-slate-700 dark:border-slate-600">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">Your Badulla Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-slate-200 mb-4">
                Badulla offers the perfect blend of spiritual heritage, natural beauty, and cultural authenticity.
                Whether you arrive by the scenic railway or winding mountain roads, you&apos;ll discover a side of Sri Lanka
                that few tourists experience.
              </p>
              <p className="text-muted-foreground dark:text-slate-200 mb-4">
                From the sacred halls of Muthiyangana Temple to the misty spray of Dunhinda Falls, from tea plantation
                walks to railway station nostalgia, Badulla provides memories that will last a lifetime.
              </p>
              <p className="text-muted-foreground dark:text-slate-200 font-medium">
                Plan your visit to this hidden gem and experience the authentic heart of Sri Lanka&apos;s hill country! 🏔️🚂
              </p>

            </CardContent>
          </Card>
        </section>

        {/* Ad Banner - Bottom */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Travel Insurance & Services]
        </div>
      </div>
    </main>
  )
}
