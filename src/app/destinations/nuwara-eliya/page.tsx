import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, Thermometer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Nuwara Eliya Sri Lanka: Complete Guide 2025 | Little England in the Hills",
  description:
    "Discover Nuwara Eliya, Sri Lankas hill station paradise. Complete guide to tea plantations, colonial charm, cool climate, and the best things to do in Little England.",
  keywords:
    "Nuwara Eliya, Little England Sri Lanka, tea plantations, hill country, colonial architecture, cool climate, tea factory tours",
  openGraph: {
    title: "Nuwara Eliya: Complete Travel Guide 2025",
    description: "Your ultimate guide to Sri Lankas charming hill station",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function NuwaraEliyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Nuwara-Eliya.jpg"
          alt="Stunning panoramic view of Nuwara Eliya showing lush green tea plantations, colonial buildings, and misty mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nuwara Eliya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Little England in the Heart of Tea Country</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,868m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Thermometer className="w-4 h-4 mr-1" />
              Cool Climate Year-Round
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Nuwara Eliya: Sri Lankas Cool Escape</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Escape the tropical heat and step into a world that feels like a slice of England transported to the heart
              of Sri Lanka. Nuwara Eliya, fondly known as &quot;Little England,&quot; sits majestically at 1,868 meters above sea
              level, offering a refreshing cool climate, rolling green tea plantations, and charming colonial
              architecture that tells stories of a bygone era.

            </p>
            <p className="text-lg">
              From world-famous Ceylon tea estates to pristine lakes, from strawberry farms to misty mountain peaks,
              Nuwara Eliya is a paradise for nature lovers, tea enthusiasts, and anyone seeking respite from Sri Lankas
              tropical heat. This hill station promises an unforgettable journey through some of the worlds most
              beautiful tea country.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Nuwara Eliya Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1846 by British
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 1,868m (6,128 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Temperature:</strong> 15-20°C year-round
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 180km
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous for:</strong> Ceylon Tea & Cool Climate
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Visit Duration:</strong> 2-3 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tea Plantations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Famous Tea Plantations & Factory Tours</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Nuwara-Eliya.jpg"
                alt="Lush green tea plantations in Nuwara Eliya with tea pickers working among perfectly manicured tea bushes"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                World-renowned Ceylon tea plantations surrounding Nuwara Eliya
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nuwara Eliya is the heart of Sri Lankas tea industry, producing some of the worlds finest Ceylon tea.
                The cool climate, high altitude, and misty conditions create the perfect environment for growing premium
                tea thats exported globally and cherished by tea connoisseurs everywhere.
              </p>
              <p>
                Take a guided tour through the emerald green plantations where you can witness tea pickers at work,
                learn about the tea-making process from leaf to cup, and sample fresh Ceylon tea while enjoying
                panoramic views of the rolling hills.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Must-Visit Tea Factories:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Pedro Tea Estate - Historic factory with tours</li>
                  <li>• Mackwoods Labookellie Tea Centre - Popular tourist spot</li>
                  <li>• Bluefield Tea Gardens - Scenic plantation walks</li>
                  <li>• Damro Labookellie Tea Centre - Traditional processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Nuwara Eliya</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Gregory Lake */}
            <Card>
              <CardHeader>
                <CardTitle>1. Gregory Lake</CardTitle>
                <CardDescription>Scenic artificial lake perfect for recreation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Gregory_Lake.jpg"
                    alt="Beautiful Gregory Lake in Nuwara Eliya with paddle boats, walking paths, and surrounding hills"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Created in 1873 by British Governor Sir William Gregory, this picturesque lake is the heart of
                      Nuwara Eliyas recreational activities. Surrounded by eucalyptus trees and rolling hills, it
                      offers a perfect setting for relaxation and family fun.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Paddle boating and swan boats available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful walking path around the lake
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Horse riding and pony rides for children
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for picnics and photography
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horton Plains */}
            <Card>
              <CardHeader>
                <CardTitle>2. Horton Plains National Park</CardTitle>
                <CardDescription>UNESCO World Heritage site with Worlds End cliff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 32km from Nuwara Eliya, Horton Plains offers one of Sri Lankas most spectacular hiking
                      experiences. The highlight is Worlds End, a sheer cliff drop of 870 meters offering breathtaking
                      views on clear days.<br/>
                      You can see worlds end
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Worlds End viewpoint - 870m cliff drop
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bakers Falls - beautiful 20m waterfall
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        9km circular hiking trail
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique montane ecosystem and wildlife
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Best Time:</strong> Start early (6 AM) to avoid clouds at Worlds End
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dramatic Worlds End cliff at Horton Plains showing the spectacular 870-meter drop with misty valleys below"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Victoria Park */}
            <Card>
              <CardHeader>
                <CardTitle>3. Victoria Park</CardTitle>
                <CardDescription>Beautiful botanical garden in the town center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Victoria Park in Nuwara Eliya showing well-maintained gardens, colorful flowers, and visitors enjoying the peaceful atmosphere"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Named after Queen Victoria, this 27-acre park is a delightful escape in the heart of Nuwara Eliya.
                      With its well-maintained gardens, diverse bird life, and peaceful atmosphere, its perfect for a
                      leisurely stroll or family outing.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 bird species including migratory birds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful flower gardens and tree-lined paths
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Childrens playground and picnic areas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Entry fee: 60 LKR for adults, 30 LKR for children
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Colonial Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Colonial Charm & Architecture</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Grand Hotel</CardTitle>
                <CardDescription>Historic colonial luxury</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Grand Hotel Nuwara Eliya showing classic colonial architecture with red roof and elegant facade"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Built in 1891, this iconic hotel maintains its colonial grandeur with period furnishings and old-world
                  charm.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nuwara Eliya Golf Club</CardTitle>
                <CardDescription>Asias finest golf course</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Nuwara Eliya Golf Club showing pristine green fairways surrounded by tea plantations and mountains"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Established in 1889, this 18-hole championship course offers stunning views and challenging play at
                  high altitude.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hill Club</CardTitle>
                <CardDescription>Exclusive colonial club</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Hill Club Nuwara Eliya showing traditional colonial club architecture with manicured gardens"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A gentlemens club from 1876 that still maintains strict dress codes and colonial traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Activities & Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Unique Experiences in Nuwara Eliya</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Strawberry Farms & Fresh Produce</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Strawberry Picking</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit local strawberry farms where you can pick your own fresh strawberries and enjoy
                    strawberry-based treats.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fresh Vegetables</h4>
                  <p className="text-sm text-muted-foreground">
                    The cool climate produces excellent carrots, leeks, cabbage, and other temperate vegetables.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Markets</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit the central market for fresh produce, flowers, and local specialties.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adventure Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Hiking & Trekking</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore numerous trails through tea plantations and montane forests with stunning views.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Boat Rides</h4>
                  <p className="text-sm text-muted-foreground">
                    Enjoy peaceful boat rides on Gregory Lake and nearby reservoirs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    Capture the beauty of tea country, colonial architecture, and mountain landscapes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weather & Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>December to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear skies and minimal rainfall</li>
                  <li>• Perfect for Horton Plains hiking</li>
                  <li>• Best visibility for mountain views</li>
                  <li>• Cool temperatures (15-20°C)</li>
                  <li>• Peak tourist season</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April-May & September-November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional light showers</li>
                  <li>• Lush green landscapes</li>
                  <li>• Fewer crowds</li>
                  <li>• Good for tea plantation visits</li>
                  <li>• Moderate accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>June to August</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall and mist</li>
                  <li>• Limited visibility at viewpoints</li>
                  <li>• Lush, vibrant vegetation</li>
                  <li>• Lowest tourist numbers</li>
                  <li>• Best rates for accommodation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Nuwara Eliya Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Nuwara Eliya offers a unique escape from tropical Sri Lanka into a world of cool mountain air,
                world-class tea, and colonial charm. Whether youre sipping fresh Ceylon tea while overlooking emerald
                plantations or hiking to Worlds End for sunrise views, this hill station provides experiences youll
                treasure forever.
              </p>
              <p className="text-muted-foreground mb-4">
                Dont forget to pack warm clothes - the cool climate is a refreshing change but can catch tropical
                travelers off guard! Take time to slow down, breathe the fresh mountain air, and immerse yourself in the
                timeless beauty of Sri Lankas tea country.
              </p>
              <p className="text-muted-foreground font-medium">Enjoy your journey through Little England! 🍃🏔️</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
