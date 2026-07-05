import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, Sunrise, TreePine, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export const metadata: Metadata = {
  title: "Nelligala International Buddhist Center | Complete Guide 2025 | Mountain Temple",
  description: "Guide to Nelligala Temple, a hilltop Buddhist site near Kandy with meditation spaces, viewpoints, and a Saman Deva statue.",
  keywords: "Nelligala Temple, Nelligala International Buddhist Center, Saman Deva statue, Kandy temples, Sri Lanka Buddhist sites, hilltop temple",
  openGraph: {
    title: "Nelligala International Buddhist Center: Complete Guide 2025",
    description: "Hilltop Buddhist site near Kandy with meditation spaces and wide views",
    type: "article",
    images: ["/nelligala-aerial.jpg"],
  },
}

export default function NelligalaTemplePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
          <p className="text-xl md:text-2xl mb-6 font-light">Hilltop Buddhist site near Kandy</p>
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
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-foreground">Nelligala: Mountain Sanctuary of Modern Buddhism</h2>
            <Badge variant="outline" className="border-green-600 text-green-700 dark:border-green-500 dark:text-green-300">
              <CheckCircle className="w-4 h-4 mr-1" />
              Fact checked
            </Badge>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nelligala Temple is a modern Buddhist site in the hills near Kandy. People visit for worship, quiet surroundings, and the wide view from the upper grounds.
            </p>
            <p className="text-lg">
              The site includes temple buildings, open terraces, and prominent statues. It is a popular stop for local visitors and travelers who want a short hill-country temple visit outside the Kandy city area.
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
                      <strong>Setting:</strong> Hilltop temple complex
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Type:</strong> Modern Buddhist site
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Known For:</strong> Views, temple grounds, and large statues
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Environment:</strong> Hill country setting
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
                      <strong>Distance from Kandy:</strong> Nearly 13 km by road
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Drive time from Kandy:</strong> Nearly 35 minutes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Access:</strong> Paved road to the temple entrance
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
                    src="/Nelligala-Main-Temple.jpeg"
                    alt="Main temple building of Nelligala Buddhist Center"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The main temple complex includes prayer spaces, terraces, and Buddha statues placed around the upper grounds. The layout mixes modern construction with familiar Sri Lankan temple features, making the site easy to walk through while still feeling like a place of worship.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Modern meditation hall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Buddha statues within the main worship area</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Open ceremonial and viewing spaces</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Saman Deva Statue */}
            <Card>
              <CardHeader>
                <CardTitle>Saman Deva Statue</CardTitle>
                <CardDescription>One of the notable features at the site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/Nelligala.webp"
                    alt="Saman Deva statue at Nelligala Temple"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    A large Saman Deva statue is one of the features visitors notice at Nelligala. It stands prominently within the temple grounds and is part of the site&apos;s modern visual identity.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Prominent hilltop landmark</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Visible from different points in the grounds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Important photo stop for visitors</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meditation Programs */}
        <section className="mb-16" id="meditation">
          <h2 className="text-3xl font-bold mb-8">Worship & Quiet Time</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Daily Programs */}
            <Card>
              <CardHeader>
                <CardTitle>Quiet Visiting Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Quiet atmosphere in the morning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Space for private worship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Good time for a slower visit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Retreats */}
            <Card>
              <CardHeader>
                <CardTitle>What You See</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Temple buildings on the upper level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Open terraces and viewpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Statues placed across the grounds</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Special Events */}
            <Card>
              <CardHeader>
                <CardTitle>Visitor Etiquette</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Dress modestly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Keep noise low in worship areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Remove shoes before entering temple buildings</span>
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
                      <span>Open areas for walking and short stops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Rest areas and viewpoints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Temple grounds with several viewing points</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-transparent bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-blue-50">Essential Tips</h2>
                <div className="max-w-3xl mx-auto text-slate-700 dark:text-blue-100 space-y-2">
                  <p>• Go early or late in the day if you want a calmer visit</p>
                  <p>• The road climbs near the temple, so drive slowly on the final stretch</p>
                  <p>• Respect silence in meditation areas</p>
                  <p>• Ask before taking close photos near worship spaces</p>
                  <p>• Wear footwear that is easy to remove</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
