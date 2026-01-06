"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function GadaladeniyaTemplePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Gadaladeniya-Temple.jpg"
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
          <h2 className="text-3xl font-bold mb-8">Key Temple Features & Special Things to See</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Temple Specialty */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  Temple Specialty - Only South Indian Style Temple in Sri Lanka
                </CardTitle>
                <CardDescription>What Makes Gadaladeniya Unique</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/gadaladeniya-architecture-details.jpg"
                      alt="South Indian architectural style of Gadaladeniya Temple"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Gadaladeniya Temple is the only Buddhist temple in Sri Lanka built entirely in South Indian 
                      Dravidian architectural style. Designed by South Indian architect Ganesvarachari from 
                      Gangasiripuram, it combines Hindu temple construction techniques with Buddhist religious purposes, 
                      creating a rare architectural masterpiece.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Unique Feature:</strong> Built entirely with cut stone (no wood used)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Special Mix:</strong> Buddhist temple with Hindu architectural style</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Historic Value:</strong> 680+ years old, still in active worship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Cultural Blend:</strong> Hindu devales (shrines) within Buddhist temple complex</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Shrine */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-blue-500" />
                  Main Shrine Room - Sacred Buddha & Ancient Paintings
                </CardTitle>
                <CardDescription>The Heart of the Temple</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/gadaladeniya-shrine.jpg"
                      alt="Inside view of Gadaladeniya Temple's main shrine with Buddha statue"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The main shrine houses a magnificent seated Buddha statue surrounded by beautiful murals. 
                      The walls feature paintings from the Kandyan period showing Jataka tales (stories of Buddha&apos;s 
                      past lives) and local historical events. Notice the intricate stone carvings on the doorways 
                      and pillars.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Main Buddha:</strong> Large seated Buddha statue in meditation pose</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Wall Paintings:</strong> 18th-century Kandyan period murals depicting Jataka stories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Stone Doorway:</strong> Intricately carved entrance with makara (mythical creature) designs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Moonstone:</strong> Semi-circular stone carving at entrance showing Buddhist symbolism</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stone Pillars */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-purple-500" />
                  Stone Pillars - Masterpiece of Rock Carving
                </CardTitle>
                <CardDescription>Ancient Engineering Marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Stone pillars of Gadaladeniya Temple showing South Indian craftsmanship"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The temple features stunning octagonal stone pillars carved from solid rock, a hallmark of 
                      Dravidian architecture. Each pillar is uniquely decorated with intricate patterns and supports 
                      the heavy stone roof without any wooden beams - a remarkable engineering achievement from the 14th century.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>Octagonal Design:</strong> Eight-sided pillars typical of South Indian temples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>No Wood Used:</strong> Entire structure built with cut stone only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>Carved Details:</strong> Each pillar has unique floral and geometric patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>Load-Bearing:</strong> Support massive stone roof for 680+ years</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hindu Devales */}
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-orange-500" />
                  Hindu Devales - Religious Harmony
                </CardTitle>
                <CardDescription>Shrines for Hindu Deities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Hindu devales at Gadaladeniya Temple showing religious coexistence"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Within the temple complex are devales (Hindu shrines) dedicated to various deities including 
                      Vishnu, Ganesh, and Kataragama. This shows the religious harmony and cultural exchange between 
                      Buddhism and Hinduism in ancient Sri Lanka, making it a unique place of worship.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                        <span><strong>Vishnu Devale:</strong> Shrine dedicated to Lord Vishnu, protector deity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                        <span><strong>Ganesh Shrine:</strong> Small shrine for the elephant-headed god</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                        <span><strong>Kataragama Devale:</strong> Shrine for the war god, popular in Sri Lanka</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                        <span><strong>Religious Harmony:</strong> Buddhist and Hindu worship coexist peacefully</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inscription Stone */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  Ancient Inscription - Temple&apos;s Historical Record
                </CardTitle>
                <CardDescription>Stone Inscription from 1344 CE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Ancient stone inscription at Gadaladeniya Temple"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The temple has an important stone inscription (Rock Inscription) that records its construction 
                      details, the architect&apos;s name, and the king who built it. This inscription is one of the 
                      most valuable historical documents from the Gampola period, written in ancient Sinhala script.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Builder&apos;s Name:</strong> Records King Bhuvanekabahu IV as the patron</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Architect Details:</strong> Names Ganesvarachari from South India</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Date Recorded:</strong> Precise construction year of 1344 CE</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Historical Value:</strong> Rare surviving record from Gampola Kingdom era</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Panoramic Views */}
            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-cyan-500" />
                  Scenic Location - Built on a Rock Outcrop
                </CardTitle>
                <CardDescription>Panoramic Mountain Views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/Gadaladeniya-Temple.jpg"
                      alt="Panoramic view from Gadaladeniya Temple showing surrounding mountains"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The temple is built on top of a large natural rock, offering spectacular 360-degree views of 
                      the surrounding mountains and valleys. The elevated position not only provides stunning scenery 
                      but also follows the Buddhist tradition of building temples on elevated grounds.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>Rock Platform:</strong> Built on massive natural rock formation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>Mountain Views:</strong> 360-degree panoramic views of Kandy hills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>Photo Opportunity:</strong> Perfect spot for landscape photography</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>Peaceful Setting:</strong> Away from city noise, ideal for meditation</span>
                      </li>
                    </ul>
                  </div>
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
