import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Camera, Mountain, Sunrise } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gerandi Ella Sri Lanka: Complete Guide 2025 | Hidden Waterfall Paradise",
  description:
    "Discover Gerandi Ella, Sri Lanka's hidden waterfall gem in Nuwara Eliya district. Complete guide to this pristine natural wonder with stunning views and peaceful hiking trails.",
  keywords:
    "Gerandi Ella, Sri Lanka waterfalls, Nuwara Eliya district, hidden gems, hiking trails, nature photography, waterfall trekking, Central Province",
  openGraph: {
    title: "Gerandi Ella: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's hidden waterfall paradise",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function GerandiEllaTravelGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/gerandi-ella-waterfall.jpeg"
          alt="Spectacular view of Gerandi Ella waterfall cascading down rocky cliffs surrounded by lush green forest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Gerandi Ella</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Hidden Waterfall Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Nuwara Eliya District
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Mountain className="w-4 h-4 mr-1" />
              Waterfall Paradise
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <TreePine className="w-4 h-4 mr-1" />
              Pristine Nature
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#how-to-get-there" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
          <a href="#waterfall-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Waterfall Guide</a>
          <a href="#hiking-trails" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Hiking Trails</a>
          <a href="#did-you-know" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Did You Know</a>
          <a href="#nearby-places" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby Places</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Gerandi Ella: Nature&apos;s Hidden Masterpiece</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the misty hills of Nuwara Eliya district, Gerandi Ella stands as one of Sri Lanka&apos;s most spectacular yet undiscovered natural treasures. This breathtaking waterfall, cascading down from heights of over 100 meters, creates a mesmerizing spectacle as crystal-clear mountain water plunges through layers of ancient rock formations, surrounded by pristine tropical rainforest that has remained virtually untouched by human development.
            </p>
            <p className="text-lg mb-4">
              Unlike the more commercialized waterfalls in the Ella region, Gerandi Ella offers visitors an authentic wilderness experience where the only sounds are the thunderous roar of falling water, the melodic calls of endemic birds, and the gentle rustling of leaves in the mountain breeze. This hidden gem rewards those adventurous enough to venture off the beaten path with unparalleled natural beauty and the rare opportunity to experience Sri Lanka&apos;s highlands in their original, unspoiled state.
            </p>
            <p className="text-lg">
              The journey to Gerandi Ella is an adventure in itself, involving scenic drives through tea plantations, small village paths, and moderate hiking through dense forest trails. The waterfall&apos;s remote location in the Central Province has preserved its pristine ecosystem, making it a sanctuary for diverse flora and fauna, including rare orchids, colorful butterflies, and endemic bird species that thrive in this untouched mountain environment.
            </p>
          </div>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Gerandi Ella Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Gerandi Ella Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Height:</strong> Over 100 meters tall
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Location:</strong> Nuwara Eliya District, Central Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Ecosystem:</strong> Tropical montane rainforest
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Difficulty:</strong> Moderate hiking required
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> Year-round (peak: Dec-Mar)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Trek Duration:</strong> 2-3 hours round trip
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/gerandi-ella-forest.jpeg"
                      alt="Pristine forest surrounding Gerandi Ella with diverse flora and fauna"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Biodiversity Hotspot</p>
                      <p className="text-sm text-blue-800">
                        Gerandi Ella&apos;s untouched forest is home to over 30 species of endemic birds, rare orchids, and unique butterfly species. The waterfall&apos;s mist creates a micro-climate that supports extraordinary biodiversity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">Half-day trip including hiking and photography time for the complete experience.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Photography Time</p>
                      <p className="text-sm text-green-800">Early morning (7-9 AM) for soft lighting and afternoon (2-4 PM) for rainbow formations.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Get to Gerandi Ella */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Gerandi Ella
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Ella Town (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 25km from Ella</li>
                      <li>• <strong>Duration:</strong> 45 minutes by vehicle</li>
                      <li>• <strong>Route:</strong> Ella → Wellawaya → Gerandi village</li>
                      <li>• <strong>Transport:</strong> Tuk-tuk or hired jeep</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">From Badulla</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 35km from Badulla</li>
                      <li>• <strong>Duration:</strong> 1 hour</li>
                      <li>• <strong>Route:</strong> A16 highway → village roads</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Colombo</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 250km via Ella</li>
                      <li>• <strong>Duration:</strong> 6-7 hours total</li>
                      <li>• <strong>Route:</strong> A4 → Ella → Gerandi</li>
                      <li>• <strong>Overnight:</strong> Stay in Ella recommended</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">Final Approach</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Trail Start:</strong> Gerandi village end</li>
                      <li>• <strong>Hiking Time:</strong> 45-60 minutes each way</li>
                      <li>• <strong>Difficulty:</strong> Moderate with some steep sections</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early to avoid afternoon heat and crowds</li>
                    <li>• Hire a local guide for the best trail experience</li>
                    <li>• Bring hiking shoes and rain protection</li>
                    <li>• Inform your accommodation about your hiking plans</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Waterfall Guide */}
        <section className="mb-12" id="waterfall-guide">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">The Magnificent Gerandi Ella Waterfall</h2>

          <div className="space-y-8">
            {/* Main Waterfall Description */}
            <Card>
              <CardHeader>
                <CardTitle>Nature&apos;s Spectacular Display</CardTitle>
                <CardDescription>Understanding the beauty and power of Gerandi Ella</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/gerandi-ella-main.jpeg"
                    alt="Magnificent Gerandi Ella waterfall showing the full 100-meter cascade through pristine rainforest"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-lg mb-3">The Waterfall Experience</h4>
                    <p className="text-muted-foreground mb-4">
                      Gerandi Ella presents a breathtaking spectacle as mountain spring water cascades down over 100 meters of rocky cliff face in multiple tiers. The waterfall is fed by natural springs and seasonal rainfall, ensuring a consistent flow throughout the year, though the volume varies dramatically between dry and wet seasons.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Multi-tiered cascade:</strong> Water falls in several distinct levels creating pools
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Natural pools:</strong> Crystal-clear pools perfect for refreshing dips
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Rainbow formations:</strong> Mist creates spectacular rainbows in afternoon sun
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Pristine water:</strong> Pure mountain spring water safe for drinking
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seasonal Variations */}
            <Card>
              <CardHeader>
                <CardTitle>Seasonal Beauty Changes</CardTitle>
                <CardDescription>How Gerandi Ella transforms throughout the year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Wet Season (May-September)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Maximum water volume and power</li>
                        <li>• Thunderous roar audible from distance</li>
                        <li>• Lush green vegetation at peak</li>
                        <li>• More challenging hiking conditions</li>
                        <li>• Spectacular mist and spray</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800">Dry Season (December-March)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• Clear, gentle cascade</li>
                        <li>• Perfect for swimming and photos</li>
                        <li>• Easier hiking conditions</li>
                        <li>• Best visibility for photography</li>
                        <li>• Comfortable weather</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-50 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800">Transition Months (Apr, Oct-Nov)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-orange-700 text-sm">
                        <li>• Moderate water flow</li>
                        <li>• Excellent rainbow opportunities</li>
                        <li>• Pleasant hiking weather</li>
                        <li>• Fewer crowds</li>
                        <li>• Best overall experience</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hiking Trails */}
        <section className="mb-12" id="hiking-trails">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">Hiking Trails & Adventure Routes</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Trail Options for Every Adventurer</CardTitle>
                <CardDescription>Choose your perfect route to the waterfall</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-green-700">Main Trail (Recommended for beginners)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div><strong>Distance:</strong> 2.5 km each way</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div><strong>Duration:</strong> 45-60 minutes each way</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div><strong>Difficulty:</strong> Moderate with some steep sections</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div><strong>Features:</strong> Well-marked path through village and forest</div>
                      </li>
                    </ul>

                    <h4 className="font-semibold text-lg mb-3 mt-6 text-orange-700">Adventure Trail (For experienced hikers)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Mountain className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <div><strong>Distance:</strong> 4 km with multiple viewpoints</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Mountain className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <div><strong>Duration:</strong> 2-3 hours each way</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Mountain className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <div><strong>Difficulty:</strong> Challenging with rocky terrain</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Mountain className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <div><strong>Features:</strong> Top viewpoint and hidden pools access</div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <Image
                      src="/gerandi-ella-trail.jpeg"
                      alt="Scenic hiking trail through lush forest leading to Gerandi Ella waterfall"
                      width={400}
                      height={300}
                      className="rounded-lg mb-4"
                    />
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-100 mb-2">Trail Safety Tips</h4>
                      <ul className="text-sm text-yellow-700 dark:text-gray-200 space-y-1">
                        <li>• Wear proper hiking shoes with good grip</li>
                        <li>• Carry enough water (2+ liters per person)</li>
                        <li>• Start early to avoid afternoon heat</li>
                        <li>• Inform others about your hiking plans</li>
                        <li>• Consider hiring a local guide for safety</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="mb-12" id="did-you-know">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">Did You Know? Fascinating Gerandi Ella Facts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-purple-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  💧
                </div>
                <h3 className="font-semibold text-lg mb-2 text-purple-700 dark:text-purple-300">Ancient Water Source</h3>
                <p className="text-sm text-muted-foreground">
                  Gerandi Ella is fed by natural springs that have been flowing continuously for over 1,000 years. Local villagers have used this pristine water source for generations, believing it has healing properties due to its mineral content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🦋
                </div>
                <h3 className="font-semibold text-lg mb-2 text-green-700 dark:text-green-300">Butterfly Paradise</h3>
                <p className="text-sm text-muted-foreground">
                  The waterfall area hosts over 25 species of butterflies, including the rare Sri Lankan Rose and Blue Mormon. The mist from the waterfall creates perfect humidity conditions for these delicate creatures to thrive year-round.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🌈
                </div>
                <h3 className="font-semibold text-lg mb-2 text-blue-700 dark:text-blue-300">Rainbow Magic</h3>
                <p className="text-sm text-muted-foreground">
                  Between 2-4 PM on sunny days, the waterfall's mist creates spectacular double rainbows that can last for hours. This natural phenomenon occurs due to the perfect angle of sunlight hitting the water droplets at this specific time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🏔️
                </div>
                <h3 className="font-semibold text-lg mb-2 text-orange-700 dark:text-orange-300">Hidden Cave System</h3>
                <p className="text-sm text-muted-foreground">
                  Behind the main waterfall lies a network of natural caves formed by centuries of water erosion. These caves were once used by local monks for meditation and still contain ancient stone carvings dating back 600 years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🐦
                </div>
                <h3 className="font-semibold text-lg mb-2 text-red-700 dark:text-red-300">Endemic Bird Haven</h3>
                <p className="text-sm text-muted-foreground">
                  The pristine forest around Gerandi Ella is home to 15 endemic bird species, including the Sri Lankan Spurfowl and Yellow-eared Bulbul. Early morning visitors often hear the distinctive calls of these rare birds echoing through the mist.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🌿
                </div>
                <h3 className="font-semibold text-lg mb-2 text-yellow-700 dark:text-yellow-300">Medicinal Plant Sanctuary</h3>
                <p className="text-sm text-muted-foreground">
                  The forest surrounding the waterfall contains over 40 species of medicinal plants used in traditional Ayurvedic medicine. Local healers still visit the area to harvest rare herbs that grow only in this unique micro-climate.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Places */}
        <section className="mb-12" id="nearby-places">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">Nearby Attractions & Places to Explore</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Nine Arch Bridge</CardTitle>
                <CardDescription>Iconic railway bridge in Ella</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/nine-arch-bridge.jpeg"
                  alt="Famous Nine Arch Bridge in Ella with train crossing through lush green valley"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Famous colonial-era railway bridge offering spectacular views and train photography opportunities. Best visited early morning for perfect lighting and fewer crowds.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/nine-arch-bridge" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Little Adam&apos;s Peak</CardTitle>
                <CardDescription>Scenic hiking destination</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/little-adams-peak.jpeg"
                  alt="Panoramic view from Little Adam's Peak showing rolling hills and tea plantations"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Easy hiking trail offering panoramic views of Ella Gap and surrounding tea plantations. Perfect for sunrise viewing and landscape photography.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/little-adams-peak" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Ravana Falls</CardTitle>
                <CardDescription>Legendary waterfall nearby</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/ravana-falls.jpeg"
                  alt="Spectacular Ravana Falls cascading down rocky cliff with multiple tiers"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  One of Sri Lanka's most famous waterfalls with connections to the Ramayana epic. Easily accessible and perfect for a refreshing swim after hiking Gerandi Ella.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ravana-falls" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Ella Rock</CardTitle>
                <CardDescription>Challenging mountain hike</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/ella-rock.jpeg"
                  alt="Dramatic cliff face of Ella Rock with hikers enjoying panoramic mountain views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Challenging hike to one of Sri Lanka's most spectacular viewpoints. Offers breathtaking 360-degree views of the hill country and surrounding valleys.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ella-rock" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Diyaluma Falls</CardTitle>
                <CardDescription>Sri Lanka&apos;s second highest waterfall</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/diyaluma-falls.jpeg"
                  alt="Magnificent Diyaluma Falls, Sri Lanka's second highest waterfall in pristine mountain setting"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  At 220 meters, Sri Lanka's second-highest waterfall offers natural pools for swimming and spectacular views. A perfect addition to your waterfall exploration journey.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/diyaluma-falls" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Lipton&apos;s Seat</CardTitle>
                <CardDescription>Historic tea plantation viewpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/liptons-seat.jpeg"
                  alt="Scenic view from Lipton's Seat showing endless tea plantations and mountain ranges"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Historic viewpoint where Sir Thomas Lipton used to survey his tea empire. Offers stunning panoramic views of seven provinces on clear days.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/liptons-seat" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12" id="visiting-guide">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">Complete Visiting Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Peak Season:</strong> December to March (dry weather)</li>
                    <li>• <strong>Wet Season:</strong> May to September (maximum water flow)</li>
                    <li>• <strong>Best Months:</strong> February, March, October, November</li>
                    <li>• <strong>Avoid:</strong> Heavy monsoon periods (June-August)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sturdy hiking shoes with good grip</li>
                    <li>• Waterproof backpack and clothing</li>
                    <li>• Plenty of water (2+ liters per person)</li>
                    <li>• Energy snacks and lunch</li>
                    <li>• Camera with waterproof casing</li>
                    <li>• First aid kit and insect repellent</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Accommodation Options</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Ella:</strong> Wide range of guesthouses and hotels</li>
                    <li>• <strong>Badulla:</strong> Budget and mid-range options</li>
                    <li>• <strong>Local Village:</strong> Homestays available</li>
                    <li>• <strong>Camping:</strong> With permission from locals</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Essential Tips & Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Safety Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Never swim alone in the natural pools</li>
                    <li>• Be cautious near waterfall edges - rocks can be slippery</li>
                    <li>• Check weather conditions before hiking</li>
                    <li>• Inform someone about your hiking plans</li>
                    <li>• Consider hiring a local guide for safety</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use polarizing filters to reduce glare from water</li>
                    <li>• Long exposure shots create silky water effects</li>
                    <li>• Best lighting: early morning and late afternoon</li>
                    <li>• Protect camera equipment from mist and spray</li>
                    <li>• Capture rainbows during 2-4 PM on sunny days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Etiquette</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Respect local customs and traditions</li>
                    <li>• Ask permission before photographing villagers</li>
                    <li>• Don&apos;t litter - pack out all waste</li>
                    <li>• Support local guides and businesses</li>
                    <li>• Be mindful of noise in natural areas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Journey to Gerandi Ella Paradise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Gerandi Ella represents everything that makes Sri Lanka&apos;s hill country magical - pristine natural beauty, untouched wilderness, and the thrill of discovering hidden treasures. This magnificent waterfall offers more than just a scenic destination; it provides a genuine connection with nature and an escape from the modern world into a realm where time moves at nature&apos;s pace.
              </p>
              <p className="text-muted-foreground mb-4">
                As you stand before the thundering cascade, breathing in the mist-filled air and listening to the eternal song of falling water, you&apos;ll understand why this hidden gem has become a sanctuary for those seeking authentic natural experiences. The journey to Gerandi Ella may be challenging, but the rewards are immeasurable - crystal-clear pools, rainbow formations, rare wildlife, and memories that will last a lifetime.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your visit during the ideal seasons, come prepared for adventure, and respect the pristine environment that makes Gerandi Ella one of Sri Lanka&apos;s most treasured natural wonders! 🌿💧🌈
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
