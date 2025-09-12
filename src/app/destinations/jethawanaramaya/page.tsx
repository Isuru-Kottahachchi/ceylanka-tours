import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Ruler } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Jetavanaramaya Stupa Anuradhapura: Complete Guide 2025 | World's Third Tallest Ancient Structure",
  description:
    "Explore Jetavanaramaya, once the world's third tallest structure after the pyramids. Complete guide to this massive ancient stupa in Anuradhapura.",
  keywords:
    "Jetavanaramaya, ancient stupa, Anuradhapura, world's tallest structure, Buddhist monument, King Mahasena, sacred relics",
  openGraph: {
    title: "Jetavanaramaya Stupa: Complete Guide 2025",
    description: "Your ultimate guide to the world's third tallest ancient structure",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function JetavanaaramayaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Massive Jetavanaramaya stupa showing its impressive scale and ancient brick construction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Jetavanaramaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">The World's Third Tallest Ancient Structure</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Ruler className="w-4 h-4 mr-1" />
              Originally 122m Tall
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Built 3rd Century AD
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Jetavanaramaya: Ancient Wonder of the World
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Prepare to be amazed by Jetavanaramaya, one of the most incredible ancient structures ever built by
              humans! This massive stupa was once the world's third tallest building, standing at 122 meters (400 feet)
              high - taller than the Statue of Liberty! Built in the 3rd century AD, it was surpassed in height only by
              the two largest pyramids of Giza in Egypt.
            </p>
            <p className="text-lg">
              Even though time and weather have reduced its height to about 70 meters today, Jetavanaramaya still stands
              as a testament to the incredible engineering skills and devotion of ancient Sri Lankan civilization. Built
              with over 93 million bricks, this sacred monument contains precious relics of Lord Buddha and continues to
              inspire visitors with its massive scale and spiritual significance.
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
                Essential Jetavanaramaya Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Original Height:</strong> 122 meters (400 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Current Height:</strong> 70 meters (230 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Bricks Used:</strong> Over 93 million bricks
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Built:</strong> 3rd Century AD (King Mahasena)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>World Ranking:</strong> 3rd tallest ancient structure
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Visit Time:</strong> 1-2 hours
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Incredible Scale */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Incredible Scale & Engineering Marvel</h2>

          <div className="space-y-8">
            {/* Size Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>How Big Was Jetavanaramaya?</CardTitle>
                <CardDescription>Comparing it to famous structures around the world</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Size comparison showing Jetavanaramaya compared to pyramids and other famous structures"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      When it was first built, Jetavanaramaya was absolutely massive! At 122 meters tall, it was taller
                      than the Statue of Liberty (93m), Big Ben (96m), and most modern buildings. Only the Great Pyramid
                      of Giza (146m) and the Pyramid of Khafre (136m) were taller. Imagine how amazing it must have
                      looked 1,700 years ago!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Taller than Statue of Liberty
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        3rd tallest structure in ancient world
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Only pyramids were taller
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Visible from many kilometers away
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Construction Marvel */}
            <Card>
              <CardHeader>
                <CardTitle>Amazing Construction Facts</CardTitle>
                <CardDescription>How ancient builders created this wonder</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Building Jetavanaramaya was an incredible achievement! The ancient builders used over 93 million
                      bricks, each one carefully made and placed by hand. They had no modern machines, cranes, or trucks
                      - everything was done with human power, elephants, and simple tools. The engineering knowledge
                      needed to build something this tall without it falling down was amazing!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        93+ million handmade bricks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        No modern construction equipment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Advanced engineering knowledge
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Took many years to complete
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Artistic representation of ancient construction methods with workers, bricks, and elephants"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sacred Relics */}
            <Card>
              <CardHeader>
                <CardTitle>The Sacred Sash Relic</CardTitle>
                <CardDescription>Precious Buddha relic inside the stupa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Artistic representation of the sacred Buddha sash relic in its golden chamber"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Deep inside Jetavanaramaya is a very precious relic - a piece of the sash (belt) that belonged to
                      Lord Buddha himself! This makes the stupa incredibly sacred to Buddhist people around the world.
                      The relic is kept in a special chamber at the center of the stupa, surrounded by precious gems and
                      gold offerings.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Contains Buddha's sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Extremely sacred to Buddhists
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Protected in central chamber
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Surrounded by precious offerings
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Archaeological Discoveries */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Archaeological Discoveries & Ongoing Research</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Amazing Discoveries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ancient Monastery Complex</h4>
                  <p className="text-sm text-muted-foreground">
                    Archaeologists have found remains of a huge monastery that once surrounded the stupa, where
                    thousands of monks lived.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Precious Artifacts</h4>
                  <p className="text-sm text-muted-foreground">
                    Beautiful statues, coins, jewelry, and pottery have been discovered, showing how rich and advanced
                    this place was.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Advanced Drainage System</h4>
                  <p className="text-sm text-muted-foreground">
                    The builders created a sophisticated water drainage system to protect the massive structure from
                    rain damage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Current Research</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ongoing Excavations</h4>
                  <p className="text-sm text-muted-foreground">
                    Archaeologists are still digging around the stupa and finding new things that help us understand
                    ancient life.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conservation Efforts</h4>
                  <p className="text-sm text-muted-foreground">
                    Experts are working to protect and preserve the stupa so future generations can see this amazing
                    structure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3D Mapping</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern technology is being used to create detailed maps and models of the entire complex.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Visit Jetavanaramaya</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry & Access</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Part of Anuradhapura Sacred City ticket</li>
                    <li>• Foreign adults: $25 USD</li>
                    <li>• Open from sunrise to sunset</li>
                    <li>• Easy walking access from parking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Early morning (6:00-9:00 AM)</li>
                    <li>• Late afternoon (4:00-6:00 PM)</li>
                    <li>• Cooler weather months</li>
                    <li>• Avoid midday heat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Located in Anuradhapura Sacred City</li>
                    <li>• Bicycle rental popular option</li>
                    <li>• Tuk-tuk or taxi available</li>
                    <li>• Walking distance from other sites</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What You'll See</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Massive ancient brick structure</li>
                    <li>• Archaeological excavation sites</li>
                    <li>• Monastery ruins around the base</li>
                    <li>• Information boards about history</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Best light in early morning/evening</li>
                    <li>• Capture the massive scale</li>
                    <li>• Include people for size comparison</li>
                    <li>• Wide-angle lens recommended</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Water bottle and sun protection</li>
                    <li>• Comfortable walking shoes</li>
                    <li>• Camera with extra batteries</li>
                    <li>• Guidebook or audio guide</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Your Journey to an Ancient Wonder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Standing before Jetavanaramaya is like meeting a giant from the ancient world. This incredible structure
                shows us just how advanced and skilled the people of ancient Sri Lanka were. When you look up at its
                massive walls, try to imagine it at its original height of 122 meters - it must have been absolutely
                breathtaking!
              </p>
              <p className="text-muted-foreground mb-4">
                The fact that this monument was built over 1,700 years ago using only human hands, simple tools, and
                incredible determination makes it even more amazing. It's a testament to the faith, skill, and vision of
                our ancestors, and a reminder that humans have always been capable of creating truly extraordinary
                things.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your visit to this ancient wonder of the world! 🏛️⭐🌟
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
