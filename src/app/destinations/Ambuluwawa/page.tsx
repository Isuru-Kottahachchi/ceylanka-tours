import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Users, TreePine, Mountain, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ambuluwawa Tower Sri Lanka: Complete Guide 2025 | Multi-Religious Sacred Site & Scenic Views",
  description:
    "Explore Ambuluwawa Tower, Sri Lanka's unique multi-religious site with stunning 360° views. Complete guide to the sacred mountain and biodiversity center.",
  keywords:
    "Ambuluwawa Tower, multi-religious site, Gampola, scenic views, biodiversity center, Sri Lanka mountains, sacred site",
  openGraph: {
    title: "Ambuluwawa Tower: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's unique multi-religious sacred mountain",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function AmbuluwawaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Ambuluwawa-tower.jpg"
          alt="Ambuluwawa Tower showing the unique spiral tower structure on mountain top with panoramic views"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ambuluwawa Tower</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Unique Multi-Religious Sacred Site</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-600">
              <MapPin className="w-4 h-4 mr-1" />
              Gampola, Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-600">
              <Mountain className="w-4 h-4 mr-1" />
              1,087m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-600">
              <TreePine className="w-4 h-4 mr-1" />
              Biodiversity Center
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Ambuluwawa: Where All Religions Meet</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover Ambuluwawa, one of the most unique places in Sri Lanka! This special mountain is home to a tower
              that represents all major religions - Buddhism, Hinduism, Christianity, and Islam - all in one beautiful
              building. The tower sits 1,087 meters above sea level and offers amazing 360-degree views of the Central
              Province mountains and valleys.
            </p>
            <p className="text-lg">
              Ambuluwawa is not just about the tower - it&apos;s also a biodiversity center with many different plants and
              animals. The mountain has peaceful walking paths, beautiful gardens, and a spiritual atmosphere that makes
              visitors feel calm and happy. It&apos;s a perfect place for people who love nature, photography, and learning
              about different cultures and religions.
            </p>
             <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Important Safety Notice</h4>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>Always be aware about the crowd:</strong> If you are fear of heights, be cautious when visiting the tower as it can get crowded and may cause discomfort and If you a tall person (above 6 feet), the narrow spiral stairs tower may be challenging to navigate and handrail also a bit low.
                </p>
             
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Ambuluwawa Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Height:</strong> 1,087 meters above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Location:</strong> Gampola, Central Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Special Feature:</strong> Multi-religious tower
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Time:</strong> 2-3 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Best For:</strong> Families, photographers
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Views:</strong> 360-degree mountain panorama
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Amazing Things to See</h2>

          <div className="space-y-8">
            {/* The Multi-Religious Tower */}
            <Card>
              <CardHeader>
                <CardTitle>The Multi-Religious Tower</CardTitle>
                <CardDescription>A unique tower representing all major religions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Multi-religious tower showing spiral architecture with symbols from Buddhism, Hinduism, Christianity, and Islam"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The tower is the most special thing about Ambuluwawa. It&apos;s built in a spiral shape and has symbols
                      and designs from Buddhism, Hinduism, Christianity, and Islam all together. This shows that all
                      religions can live in peace and harmony. You can climb up inside the tower to get amazing views.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Represents 4 major religions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique spiral architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Climbable for panoramic views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Symbol of religious harmony
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenic Views */}
            <Card>
              <CardHeader>
                <CardTitle>360-Degree Mountain Views</CardTitle>
                <CardDescription>Breathtaking views in all directions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      From the top of Ambuluwawa, you can see beautiful mountains, green valleys, and tea plantations in
                      every direction. On clear days, you can see very far - sometimes even to the coast! The views
                      change throughout the day as the light changes, making it perfect for photography.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Views of Central Province mountains
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Tea plantations and valleys
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for sunrise and sunset
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great photography opportunities
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Panoramic view from Ambuluwawa showing mountain ranges, tea plantations, and green valleys"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Biodiversity Center */}
            <Card>
              <CardHeader>
                <CardTitle>Biodiversity Center & Gardens</CardTitle>
                <CardDescription>Rich plant and animal life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Biodiversity center showing beautiful gardens with native plants, flowers, and walking paths"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Ambuluwawa is home to many different types of plants and animals. The mountain has beautiful
                      gardens with native flowers, medicinal plants, and trees. There are also many birds and
                      butterflies that you can see while walking on the peaceful paths.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Native plant species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Medicinal herb gardens
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bird watching opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful walking trails
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Things to Do at Ambuluwawa</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Outdoor Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tower Climbing</h4>
                  <p className="text-sm text-muted-foreground">
                    Climb the spiral tower for the best views. It&apos;s a bit challenging but totally worth it!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nature Walking</h4>
                  <p className="text-sm text-muted-foreground">
                    Walk on peaceful paths through gardens and see different plants and animals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography</h4>
                  <p className="text-sm text-muted-foreground">
                    Take amazing photos of the views, tower, and beautiful gardens.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Peaceful Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Meditation & Prayer</h4>
                  <p className="text-sm text-muted-foreground">
                    The peaceful atmosphere makes it perfect for quiet thinking and prayer.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Picnicking</h4>
                  <p className="text-sm text-muted-foreground">
                    Enjoy a picnic with your family while looking at the beautiful mountain views.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn about different religions and how they can work together in harmony.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Visit Ambuluwawa</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: $5 USD</li>
                    <li>• Foreign children: $3 USD</li>
                    <li>• Local adults: Rs. 100</li>
                    <li>• Vehicle parking: Rs. 200</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Early morning (7:00-9:00 AM)</li>
                    <li>• Late afternoon (4:00-6:00 PM)</li>
                    <li>• Clear weather days</li>
                    <li>• Any season is good</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• From Kandy: 35 km (1 hour)</li>
                    <li>• From Colombo: 115 km (2.5 hours)</li>
                    <li>• From Gampola: 8 km (20 minutes)</li>
                    <li>• Private vehicle recommended</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Important Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comfortable walking shoes</li>
                    <li>• Water bottle</li>
                    <li>• Camera for amazing photos</li>
                    <li>• Light jacket (can be windy)</li>
                    <li>• Snacks for energy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Safety Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Be careful when climbing the tower</li>
                    <li>• Hold railings on steep parts</li>
                    <li>• Don&apos;t go too close to edges</li>
                    <li>• Stay on marked paths</li>
                    <li>• Check weather before visiting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Respect Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Respect all religious symbols</li>
                    <li>• Keep the area clean</li>
                    <li>• Don&apos;t damage plants</li>
                    <li>• Be quiet in prayer areas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Your Peaceful Journey at Ambuluwawa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ambuluwawa is a very special place that shows how different religions and cultures can come together in
                peace and harmony. The beautiful tower, amazing views, and peaceful atmosphere make it a perfect place
                for families, couples, and anyone who wants to experience something unique in Sri Lanka.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you&apos;re interested in religion, love nature, or just want to see incredible views, Ambuluwawa has
                something for everyone. The climb to the top might be a little challenging, but the views and the
                feeling of peace you&apos;ll get are worth every step.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your visit to this amazing place where all religions meet in harmony! 🏔️🙏✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
