import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Waves, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Balangoda Travel Guide 2025: Archaeological Wonder & Prehistoric Heritage | Sri Lanka",
  description:
    "Discover Balangoda, home of prehistoric Balangoda Man. Complete guide to archaeological sites, Samanalawewa Reservoir, traditional crafts, and ancient cave complexes.",
  keywords:
    "Balangoda Sri Lanka, Balangoda Man, archaeological sites, Samanalawewa Reservoir, prehistoric caves, traditional pottery, ancient heritage",
  authors: [{ name: "Sri Lanka Travel Expert" }],
  openGraph: {
    title: "Balangoda Travel Guide 2025: Archaeological Wonder & Prehistoric Heritage",
    description: "Your complete guide to Balangoda - prehistoric discoveries, ancient caves, and traditional crafts",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balangoda Travel Guide 2025: Archaeological Wonder & Prehistoric Heritage",
    description: "Your complete guide to Balangoda - prehistoric discoveries, ancient caves, and traditional crafts",
  },
}

export default function BalangodaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Balangoda's ancient cave complexes and archaeological sites with Samanalawewa Reservoir in the background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Balangoda</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Where Prehistoric History Comes Alive</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              Prehistoric Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              Samanalawewa Reservoir
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Traditional Crafts Center
            </Badge>
          </div>
        </div>
      </section>

      {/* Ad Banner - Top */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Archaeological Tours & Cultural Heritage Experiences]
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Balangoda: Gateway to Prehistoric Sri Lanka
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the Ratnapura District of Sabaragamuwa Province, Balangoda holds a unique place in human
              history as the discovery site of "Balangoda Man" - prehistoric human remains dating back 37,000 years.
              This fascinating town offers visitors a rare glimpse into Sri Lanka's ancient past through archaeological
              wonders and traditional crafts.
            </p>
            <p className="text-lg">
              Beyond its prehistoric significance, Balangoda enchants visitors with the stunning Samanalawewa Reservoir,
              ancient cave complexes, traditional pottery villages, and pristine natural beauty. This hidden gem
              combines archaeological importance with scenic landscapes and authentic cultural experiences.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Balangoda Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Famous For:</strong> Balangoda Man Discovery
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Province:</strong> Sabaragamuwa Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~25,000 residents
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Elevation:</strong> 680m (2,230 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> December to April
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-blue-600" />
                    <span>
                      <strong>Climate:</strong> Tropical Highland
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Balangoda</h2>

          {/* Ad Banner - Mid Content */}
          <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
            [Advertisement Space - 300x250 Medium Rectangle - Archaeological Site Tours & Educational Experiences]
          </div>

          <div className="space-y-8">
            {/* Archaeological Sites */}
            <Card>
              <CardHeader>
                <CardTitle>1. Balangoda Man Archaeological Sites</CardTitle>
                <CardDescription>Prehistoric human discovery sites dating back 37,000 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Balangoda archaeological excavation sites showing ancient cave complexes and prehistoric human remains discovery areas"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The discovery of "Balangoda Man" in 1986 revolutionized understanding of prehistoric Sri Lanka.
                      These archaeological sites contain evidence of human habitation spanning 37,000 years, making them
                      among the most significant prehistoric discoveries in South Asia.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        37,000-year-old prehistoric human remains
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient cave dwelling complexes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stone tools and prehistoric artifacts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided archaeological tours available
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Samanalawewa Reservoir */}
            <Card>
              <CardHeader>
                <CardTitle>2. Samanalawewa Reservoir</CardTitle>
                <CardDescription>Stunning man-made lake and engineering marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Created by the Samanalawewa Dam on the Walawe River, this massive reservoir is both an engineering
                      achievement and a scenic wonder. The lake stretches for kilometers through mountainous terrain,
                      creating breathtaking landscapes and recreational opportunities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular mountain and water views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Boat rides and water sports
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fishing and recreational activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sunset viewing and photography
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Samanalawewa Reservoir with crystal clear waters surrounded by lush mountains and dramatic landscapes"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Traditional Pottery Villages */}
            <Card>
              <CardHeader>
                <CardTitle>3. Traditional Pottery Villages</CardTitle>
                <CardDescription>Ancient craft traditions preserved for generations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional pottery making in Balangoda villages with artisans creating clay pots using ancient techniques"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Balangoda is renowned for its traditional pottery industry, where ancient techniques passed down
                      through generations are still practiced today. Visit working pottery villages to see master
                      craftsmen create beautiful clay vessels using methods unchanged for centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional pottery-making demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on pottery workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase authentic handmade pottery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about ancient clay preparation methods
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
              <Card>
              <CardHeader>
                <CardTitle>3. Bakers Bend</CardTitle>
                <CardDescription>Though the scenery is unparalleled, Nonpareil state</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional pottery making in Balangoda villages with artisans creating clay pots using ancient techniques"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                     BAKERS BEND is a breathtaking viewpoint located in the Balangoda region, offering panoramic views of the surrounding mountains and valleys. This scenic spot is perfect for photography enthusiasts and nature lovers, providing a serene escape into the heart of Sri Lanka's natural beauty.
                     <br />
                     <strong>Important:</strong>
                     The Nonpareil road is considered one of the challenging and dangerous roads in Sri Lanka. It is highly recommended to use a 4x4 vehicle to access this location. The road is steep and narrow, with sharp turns and steep drops, making it unsuitable for regular cars.
                     There are several 4by 4 jeep servoces called Ahas gauwwa that can be hired from Balangoda town to reach the Bakers Bend viewpoint. If you are not confident by owns driving, it is advisable to hire a local driver who is familiar with the road conditions.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional pottery-making demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on pottery workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase authentic handmade pottery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about ancient clay preparation methods
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
              <Card>
              <CardHeader>
                <CardTitle>3. Pahanthudawa</CardTitle>
                <CardDescription>Ancient craft traditions preserved for generations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional pottery making in Balangoda villages with artisans creating clay pots using ancient techniques"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Balangoda is renowned for its traditional pottery industry, where ancient techniques passed down
                      through generations are still practiced today. Visit working pottery villages to see master
                      craftsmen create beautiful clay vessels using methods unchanged for centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional pottery-making demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on pottery workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase authentic handmade pottery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about ancient clay preparation methods
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
              <Card>
              <CardHeader>
                <CardTitle>3. Belihuloya</CardTitle>
                <CardDescription>Ancient craft traditions preserved for generations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional pottery making in Balangoda villages with artisans creating clay pots using ancient techniques"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Balangoda is renowned for its traditional pottery industry, where ancient techniques passed down
                      through generations are still practiced today. Visit working pottery villages to see master
                      craftsmen create beautiful clay vessels using methods unchanged for centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional pottery-making demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on pottery workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase authentic handmade pottery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about ancient clay preparation methods
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Prehistoric Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Balangoda Man Discovery</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Archaeological reconstruction showing Balangoda Man and prehistoric life in ancient Sri Lankan caves"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Balangoda Man represents one of South Asia's most significant prehistoric discoveries
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In 1986, archaeologists made a groundbreaking discovery in Balangoda's cave systems - human remains
                dating back 37,000 years. This prehistoric human, dubbed "Balangoda Man," represents one of the earliest
                known inhabitants of Sri Lanka and provides crucial insights into human migration patterns in South
                Asia.
              </p>
              <p>
                The discovery included not only human remains but also stone tools, evidence of fire use, and signs of
                organized community living. These findings suggest that Balangoda was a significant center of
                prehistoric human activity, with sophisticated hunter-gatherer societies thriving in the region.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Archaeological Significance:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Oldest human remains found in Sri Lanka</li>
                  <li>• Evidence of advanced stone tool technology</li>
                  <li>• Insights into prehistoric migration patterns</li>
                  <li>• Connection to broader South Asian prehistory</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Crafts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Traditional Crafts & Cultural Heritage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Pottery Making</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ancient clay preparation techniques</li>
                  <li>• Traditional wheel and hand-forming methods</li>
                  <li>• Natural firing processes</li>
                  <li>• Decorative glazing and painting</li>
                  <li>• Functional and artistic pottery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Wood Carving</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Traditional carving tools and techniques</li>
                  <li>• Religious and decorative sculptures</li>
                  <li>• Furniture and household items</li>
                  <li>• Local wood selection and preparation</li>
                  <li>• Master craftsman workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Weaving & Textiles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Traditional loom weaving</li>
                  <li>• Natural fiber preparation</li>
                  <li>• Traditional dyeing methods</li>
                  <li>• Cultural patterns and designs</li>
                  <li>• Handmade textile products</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner - Mid Content 2 */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Traditional Craft Workshops & Cultural Tours]
        </div>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Balangoda</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Road</CardTitle>
                <CardDescription>Most convenient access to attractions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours via A4 highway through Ratnapura</p>
                </div>
                <div>
                  <strong>From Ratnapura:</strong>
                  <p className="text-sm text-muted-foreground">1.5 hours via A4 road - scenic mountain route</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours via Nuwara Eliya and Haputale</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Tip:</strong> Private vehicle recommended for visiting archaeological sites
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>By Public Transport</CardTitle>
                <CardDescription>Budget-friendly travel options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Bus from Colombo:</strong>
                  <p className="text-sm text-muted-foreground">5-6 hours via Ratnapura, regular services</p>
                </div>
                <div>
                  <strong>Bus from Ratnapura:</strong>
                  <p className="text-sm text-muted-foreground">2 hours, frequent departures throughout day</p>
                </div>
                <div>
                  <strong>Local Transport:</strong>
                  <p className="text-sm text-muted-foreground">Tuk-tuks and local buses for site visits</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Some archaeological sites require guided access
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Balangoda</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Guesthouses</CardTitle>
                <CardDescription>$15-35 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family-run accommodations</li>
                  <li>• Local hospitality and home cooking</li>
                  <li>• Cultural immersion experiences</li>
                  <li>• Help with tour arrangements</li>
                  <li>• Authentic village atmosphere</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$35-70 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Comfortable rooms with modern amenities</li>
                  <li>• Restaurant and room service</li>
                  <li>• Tour booking assistance</li>
                  <li>• WiFi and air conditioning</li>
                  <li>• Mountain or reservoir views</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Eco-Lodges</CardTitle>
                <CardDescription>$40-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable tourism practices</li>
                  <li>• Natural forest or lakeside settings</li>
                  <li>• Organic local cuisine</li>
                  <li>• Nature walks and bird watching</li>
                  <li>• Educational programs about local heritage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Archaeological Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cave Exploration:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Guided tours of prehistoric cave sites where Balangoda Man remains were discovered.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Archaeological Workshops:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Learn about excavation techniques and artifact identification from local experts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Museum Visits:</h4>
                    <p className="text-sm text-muted-foreground">
                      Explore local museums showcasing prehistoric artifacts and cultural heritage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nature & Recreation</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Recreational activities at Samanalawewa Reservoir including boating, fishing, and scenic viewpoints"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Boat rides on Samanalawewa Reservoir</li>
                  <li>• Fishing and water sports</li>
                  <li>• Nature walks and hiking trails</li>
                  <li>• Bird watching and wildlife spotting</li>
                  <li>• Photography tours of landscapes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Culture & Cuisine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Culture & Cuisine</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Traditional Cuisine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Local Specialties:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Traditional rice and curry with local vegetables</li>
                      <li>• Fresh water fish from Samanalawewa</li>
                      <li>• Wild honey and forest products</li>
                      <li>• Traditional sweets and desserts</li>
                      <li>• Herbal teas and natural drinks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dining Experiences:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Village home cooking experiences</li>
                      <li>• Traditional clay pot cooking</li>
                      <li>• Lakeside dining with fresh fish</li>
                      <li>• Local market food exploration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Traditional cultural festival in Balangoda with local dancers, craftsmen, and community celebrations"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Experience authentic local festivals celebrating heritage and crafts.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Traditional pottery festivals</li>
                  <li>• Harvest celebrations and ceremonies</li>
                  <li>• Cultural dance and music performances</li>
                  <li>• Craft exhibitions and competitions</li>
                  <li>• Religious festivals and processions</li>
                </ul>
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
                  <span className="text-sm">Book archaeological site tours in advance through local guides</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect archaeological sites - no touching or removing artifacts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Support local craftsmen by purchasing authentic handmade items</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Learn basic Sinhala phrases - locals appreciate the effort</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Carry cash for craft purchases and local experiences</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Some archaeological sites require special permits for access</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Weather can change quickly in mountainous areas</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Limited ATMs - carry sufficient cash for rural areas</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Pottery workshops may have limited availability</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect local customs and photography restrictions</span>
                </div>
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
                <CardTitle className="text-lg">Ratnapura</CardTitle>
                <CardDescription>Gem capital - 1.5 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Ratnapura gem mining and traditional gem cutting workshops with precious stones"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Explore Sri Lanka's gem capital with mine visits, gem museums, and traditional cutting workshops.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Adam's Peak</CardTitle>
                <CardDescription>Sacred mountain - 2 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Adam's Peak sacred mountain with pilgrims climbing the holy summit at sunrise"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Climb the sacred Adam's Peak for spiritual experiences and spectacular sunrise views.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sinharaja Forest</CardTitle>
                <CardDescription>UNESCO rainforest - 2.5 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Sinharaja Forest Reserve with pristine rainforest, endemic species, and nature trails"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the UNESCO World Heritage Sinharaja Forest with endemic species and pristine nature.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Recommendations */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Balangoda Heritage Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Balangoda offers a unique opportunity to connect with Sri Lanka's prehistoric past while experiencing
                authentic traditional crafts and stunning natural beauty. From the groundbreaking archaeological
                discoveries to the serene waters of Samanalawewa Reservoir, this destination provides insights into both
                ancient and modern Sri Lankan life.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you're fascinated by prehistoric human history, interested in traditional crafts, or simply
                seeking peaceful natural settings, Balangoda delivers experiences that few other destinations can match.
                This is where 37,000 years of human history comes alive.
              </p>
              <p className="text-muted-foreground font-medium">
                Discover the prehistoric wonders and living traditions of Balangoda! 🏛️🏺
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner - Bottom */}
        <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Heritage Tours & Traditional Craft Experiences]
        </div>
      </div>
    </main>
  )
}
