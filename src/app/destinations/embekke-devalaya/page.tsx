"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, ScrollText, Users, Gavel } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"





export default function EmbekkeDevalayaPage() {
//   const carouselImages = [
//     {
//       src: "/embekke-carvings-1.jpg",
//       alt: "Intricate wooden pillar carvings showing mythical creatures",
//       title: "Mythical Creatures",
//       description: "These carvings show unique creatures from ancient stories, including birds with human features and dragon-like beings."
//     },
//     {
//       src: "/embekke-carvings-2.jpg",
//       alt: "Detailed wood carvings of wrestlers and dancers",
//       title: "Wrestlers & Dancers",
//       description: "These carvings show ancient Sri Lankan sports and dance forms, giving us a glimpse of entertainment in medieval times."
//     },
//     {
//       src: "/embekke-carvings-3.jpg",
//       alt: "Wood carvings depicting daily life scenes",
//       title: "Daily Life Scenes",
//       description: "These intricate carvings show how people lived in the 14th century, including farming, cooking, and celebration scenes."
//     },
//     {
//       src: "/embekke-carvings-4.jpg",
//       alt: "Floral and animal patterns in wood carvings",
//       title: "Nature Designs",
//       description: "Beautiful patterns showing local flowers, leaves, and animals, demonstrating the artist's attention to natural details."
//     }
//   ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Embekke-Devalaya.jpg"
          alt="Embekke Devalaya wooden temple with detailed carvings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Embekke Devalaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Home of Amazing Wood Carvings</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80">
              <MapPin className="w-4 h-4 mr-1" />
              Kandy District
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80">
              <Gavel className="w-4 h-4 mr-1" />
              Wood Carvings
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
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#wood-carvings" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Wood Carvings</a>
          <a href="#buildings" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Buildings</a>
          <a href="#visitor-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visitor Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">A Masterpiece of Wood Carving</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Embekke Devalaya is a special temple near Kandy that was built in the 14th century. It&apos;s famous
              for having some of the most beautiful wood carvings in Sri Lanka. The temple was built during 
              the time of King Wickramabahu III and is dedicated to God Kataragama.
            </p>
            <p className="text-lg">
              What makes this temple really special is its wooden pillars. Each pillar has different carvings 
              showing animals, plants, wrestlers, mythical creatures, and designs from daily life. These carvings 
              tell us a lot about how people lived in ancient Sri Lanka.
            </p>
          </div>
        </section>

        {/* Wood Carvings Showcase */}
        {/* <section className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Famous Wood Carvings Gallery</CardTitle>
              <CardDescription>Discover the intricate artistry of Embekke Devalaya</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ImageCarousel images={carouselImages} />
            </CardContent>
          </Card>
        </section> */}

        {/* Quick Facts & History */}
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
                      <strong>Built in:</strong> 14th century CE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Built by:</strong> King Wickramabahu III
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ScrollText className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> Detailed wood carvings
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
                      <strong>Location:</strong> 12km from Kandy
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
                      <strong>Access:</strong> Easy road access
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Wood Carvings Section */}
        <section className="mb-16" id="wood-carvings">
          <h2 className="text-3xl font-bold mb-8">Famous Wood Carvings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wooden Pillars */}
            <Card>
              <CardHeader>
                <CardTitle>Dancing Pillars</CardTitle>
                <CardDescription>Masterpieces of Kandyan Craftsmanship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/embekke-pillars.jpg"
                    alt="Intricately carved wooden pillars at Embekke Devalaya"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The temple&apos;s wooden pillars are its most famous feature. Each pillar shows different
                    carvings, and some can even make a small sound when you tap them - that&apos;s why they&apos;re
                    called &quot;dancing pillars.&quot;
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>26 wooden pillars with unique designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Over 500 different carving designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Special musical pillars</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Carving Designs */}
            <Card>
              <CardHeader>
                <CardTitle>Carving Designs</CardTitle>
                <CardDescription>Stories in Wood</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/embekke-designs.jpg"
                    alt="Detailed wood carvings showing various designs at Embekke"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The carvings show many different things from ancient Sri Lankan life. You can see 
                    soldiers, dancers, animals, birds, plants, and mythical creatures carved into the wood.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Daily life scenes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Animal and plant designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Wrestling matches and dances</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Carving Designs</CardTitle>
                <CardDescription>Stories in Wood</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/embekke-designs.jpg"
                    alt="Detailed wood carvings showing various designs at Embekke"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The carvings show many different things from ancient Sri Lankan life. You can see 
                    soldiers, dancers, animals, birds, plants, and mythical creatures carved into the wood.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Daily life scenes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Animal and plant designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Wrestling matches and dances</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Carving Designs</CardTitle>
                <CardDescription>Stories in Wood</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/embekke-designs.jpg"
                    alt="Detailed wood carvings showing various designs at Embekke"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The carvings show many different things from ancient Sri Lankan life. You can see 
                    soldiers, dancers, animals, birds, plants, and mythical creatures carved into the wood.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Daily life scenes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Animal and plant designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Wrestling matches and dances</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Carving Designs</CardTitle>
                <CardDescription>Stories in Wood</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/embekke-designs.jpg"
                    alt="Detailed wood carvings showing various designs at Embekke"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The carvings show many different things from ancient Sri Lankan life. You can see 
                    soldiers, dancers, animals, birds, plants, and mythical creatures carved into the wood.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Daily life scenes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Animal and plant designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Wrestling matches and dances</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Temple Buildings */}
        <section className="mb-16" id="buildings">
          <h2 className="text-3xl font-bold mb-8">Temple Buildings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Shrine */}
            <Card>
              <CardHeader>
                <CardTitle>Main Shrine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Dedicated to God Kataragama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Beautiful wooden roof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Ancient architecture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Digge */}
            <Card>
              <CardHeader>
                <CardTitle>Digge (Drummers&apos; Hall)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Where temple music is played</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Famous carved pillars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Traditional design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Vahalkada */}
            <Card>
              <CardHeader>
                <CardTitle>Vahalkada (Entrance)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Decorated entrance way</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Stone carved steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Traditional design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16" id="visitor-guide">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Visitor Guide</CardTitle>
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
                      <span>Wear clothes that cover knees and shoulders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Remove shoes before entering</span>
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
                      <span>Small entrance fee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Photography allowed (no flash)</span>
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
                <h2 className="text-3xl font-bold mb-4">Helpful Tips</h2>
                <div className="max-w-3xl mx-auto text-muted-foreground space-y-2">
                  <p>• Visit in the morning for the best lighting to see the carvings</p>
                  <p>• Take a guide to learn about the carving stories</p>
                  <p>• Combine with visits to nearby temples in Kandy</p>
                  <p>• Bring socks as the ground can be hot</p>
                  <p>• Plan about 1-2 hours for the visit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
