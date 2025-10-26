"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function GadaladeniyaTemplePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/gadaladeniya-main.jpg"
          alt="Panoramic view of Gadaladeniya Temple showcasing its ancient architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Gadaladeniya Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Masterpiece of South Indian Architecture</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-amber-600/80">
              <MapPin className="w-4 h-4 mr-1" />
              Kandy District
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80">
              <Mountain className="w-4 h-4 mr-1" />
              Ancient Temple
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80">
              <Calendar className="w-4 h-4 mr-1" />
              14th Century
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#gallery" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Gallery</a>
          <a href="#features" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Temple Features</a>
          <a href="#architecture" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Architecture</a>
          <a href="#visitor-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visitor Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">A Temple with Unique Architecture</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Built in 1344, Gadaladeniya Temple is one of the largest and most impressive ancient temples 
              near Kandy. What makes this temple special is its South Indian style architecture, which is 
              different from most other temples in Sri Lanka. The temple was built by King Bhuvanekabahu IV 
              and designed by a South Indian architect named Ganesvarachari.
            </p>
            <p className="text-lg">
              The temple sits on a rock and offers beautiful views of the surrounding area. It&apos;s famous for
              its stone carvings, ancient paintings, and the way it mixes South Indian and Sri Lankan 
              building styles. Today, it stands as an important place for both worship and learning about 
              history.
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        {/* <section className="mb-16" id="gallery">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Temple Gallery</CardTitle>
              <CardDescription>Explore the beauty and architecture of Gadaladeniya Temple</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ImageCarousel images={carouselImages} />
            </CardContent>
          </Card>
        </section> */}

        {/* Quick Facts & Location */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built in:</strong> 1344 CE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Built by:</strong> King Bhuvanekabahu IV
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Location:</strong> Built on a natural rock
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Style:</strong> South Indian architecture
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
                      <strong>Distance:</strong> 15km from Kandy city
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Travel Time:</strong> 40 minutes from Kandy
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Access:</strong> Road access with parking
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Temple Features */}
        <section className="mb-16" id="features">
          <h2 className="text-3xl font-bold mb-8">Key Temple Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Shrine */}
            <Card>
              <CardHeader>
                <CardTitle>Main Shrine Room</CardTitle>
                <CardDescription>Sacred Buddha Image and Paintings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/gadaladeniya-shrine.jpg"
                    alt="Inside view of Gadaladeniya Temple's main shrine"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The main shrine room houses a large seated Buddha statue and beautiful wall paintings. 
                    The walls are decorated with paintings from different time periods, showing Buddhist stories 
                    and local history.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Large Buddha statue</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Ancient wall paintings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Stone carved details</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Architecture */}
            <Card>
              <CardHeader>
                <CardTitle>Unique Architecture</CardTitle>
                <CardDescription>South Indian Design Elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/gadaladeniya-architecture-details.jpg"
                    alt="Architectural details of Gadaladeniya Temple"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The temple shows clear South Indian influence in its design, with features like the 
                    stone-cut pillars and devales (shrines) for Hindu gods. This mix of Buddhist and Hindu 
                    elements makes it unique.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Dravidian architecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Stone carved pillars</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Hindu shrines</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16" id="visitor-guide">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Visitor Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Before You Visit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Open from 6:00 AM to 6:00 PM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Dress modestly - cover knees and shoulders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Remove shoes before entering temple buildings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">At the Temple</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Local guides available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Small entrance fee for foreigners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Photography allowed (no flash inside)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 dark:from-amber-950 dark:via-amber-900 dark:to-amber-950">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">Essential Tips</h2>
                <div className="max-w-3xl mx-auto text-muted-foreground space-y-2">
                  <p>• Visit early morning for best lighting and fewer crowds</p>
                  <p>• Combine with visits to nearby Lankatilaka and Embekke temples</p>
                  <p>• Bring socks as the stone floor can be hot</p>
                  <p>• Take time to observe the unique architectural details</p>
                  <p>• Plan about 1-2 hours for the visit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
