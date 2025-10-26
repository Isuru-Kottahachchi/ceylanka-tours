import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, Sunrise, TreePine, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export const metadata: Metadata = {
  title: "Nelligala International Buddhist Center | Complete Guide 2025 | Mountain Temple",
  description: "Explore Nelligala Temple, a modern Buddhist sanctuary with panoramic views of Kandy. Complete guide to meditation halls, Buddha statues, and cultural significance.",
  keywords: "Nelligala Temple, Buddhist meditation center, Kandy mountains, Sri Lanka temples, panoramic views, Buddha statues, international Buddhist center",
  openGraph: {
    title: "Nelligala International Buddhist Center: Complete Guide 2025",
    description: "Modern Buddhist sanctuary with breathtaking mountain views",
    type: "article",
    images: ["/nelligala-aerial.jpg"],
  },
}

export default function NelligalaTemplePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Nelligala.png"
          alt="Aerial view of Nelligala International Buddhist Center perched on mountain top"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nelligala Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">International Buddhist Center of Peace</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Mountain className="w-4 h-4 mr-1" />
              Mountain Temple
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
              <Sunrise className="w-4 h-4 mr-1" />
              Panoramic Views
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#temple-features" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Temple Features</a>
          <a href="#meditation" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Meditation</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Nelligala: Mountain Sanctuary of Modern Buddhism</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Perched atop a majestic mountain near Kandy, Nelligala International Buddhist Center stands as a 
              testament to contemporary Buddhist architecture and spiritual practice. This modern sanctuary 
              combines traditional Sri Lankan temple design with innovative features, creating a unique space 
              for meditation, learning, and cultural exchange.
            </p>
            <p className="text-lg">
              Rising approximately 2,000 feet above sea level, the temple offers breathtaking panoramic views 
              of the surrounding mountains and valleys. Beyond its scenic beauty, Nelligala serves as an 
              important center for international Buddhist studies, meditation retreats, and cultural programs 
              that bridge ancient wisdom with modern spiritual needs.
            </p>
          </div>
        </section>

        {/* Quick Facts & Location */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Nelligala Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Elevation:</strong> ~2,000 feet above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Established:</strong> Late 20th century
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Known For:</strong> International meditation programs
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Environment:</strong> Mountain forest sanctuary
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Location & Access */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Location & Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Distance:</strong> 12km from Kandy city
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Travel Time:</strong> 30 minutes from Kandy
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Access:</strong> Paved road to temple entrance
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Temple Features */}
        <section className="mb-16" id="temple-features">
          <h2 className="text-3xl font-bold mb-8">Sacred Spaces & Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Temple Building */}
            <Card>
              <CardHeader>
                <CardTitle>Main Temple Complex</CardTitle>
                <CardDescription>Modern Buddhist Architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/nelligala-temple.jpg"
                    alt="Main temple building of Nelligala Buddhist Center"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The main temple building combines contemporary architecture with traditional Buddhist elements. 
                    Its distinctive design features clean lines, modern materials, and traditional Sri Lankan 
                    temple motifs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Modern meditation hall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Sacred relic chamber</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Ceremonial spaces</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Buddha Statues */}
            <Card>
              <CardHeader>
                <CardTitle>Sacred Buddha Statues</CardTitle>
                <CardDescription>Artistic and Spiritual Heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/nelligala-buddha.jpg"
                    alt="Buddha statues at Nelligala Temple"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The temple houses several significant Buddha statues, including a large seated Buddha figure 
                    that overlooks the valley. These statues represent different mudras (hand positions) and 
                    teachings of Buddhism.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Multiple meditation postures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Traditional craftsmanship</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Symbolic arrangements</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meditation Programs */}
        <section className="mb-16" id="meditation">
          <h2 className="text-3xl font-bold mb-8">Meditation & Spiritual Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Daily Programs */}
            <Card>
              <CardHeader>
                <CardTitle>Daily Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Morning chanting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Guided meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Evening ceremonies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Retreats */}
            <Card>
              <CardHeader>
                <CardTitle>Meditation Retreats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Weekend programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>International retreats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Buddhist studies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Special Events */}
            <Card>
              <CardHeader>
                <CardTitle>Cultural Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Full moon ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Buddhist festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Cultural exchanges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16" id="visiting-guide">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Visitor Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Planning Your Visit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Best visited early morning or evening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Dress modestly - cover shoulders and knees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Remove shoes before entering temple buildings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Facilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Free parking available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Rest areas and viewpoints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Basic refreshments available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">Essential Tips</h2>
                <div className="max-w-3xl mx-auto text-muted-foreground space-y-2">
                  <p>• Visit during sunrise or sunset for best views and photography</p>
                  <p>• Bring a light jacket as mountain temperatures can be cool</p>
                  <p>• Respect silence in meditation areas</p>
                  <p>• Photography restrictions apply in certain areas</p>
                  <p>• Consider combining with visits to nearby temples</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
