import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Users, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Isurumuniya Temple: Complete Guide 2025 | Ancient Rock Temple & Lovers",
  description: "Discover Isurumuniya Temple in Anuradhapura, famous for the Lovers sculpture and ancient rock carvings. Complete travel guide with history and tips.",
  keywords: "Isurumuniya Temple, Anuradhapura, Lovers sculpture, rock temple, Sri Lanka Buddhism, ancient art",
  openGraph: {
    title: "Isurumuniya Temple: Complete Guide 2025",
    description: "Explore the ancient rock temple famous for its romantic sculptures and Buddhist heritage",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function IsurumuniyaTempleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Isurumuniya+Temple"
          alt="Ancient Isurumuniya rock temple with carved Buddha statues and lotus pond in Anuradhapura"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Isurumuniya Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Rock Temple of Love & Devotion</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-1" />
              Famous Lovers Sculpture
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              3rd Century BC
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Isurumuniya: Where Art Meets Spirituality</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled among the ancient ruins of Anuradhapura, Isurumuniya Temple is a masterpiece of ancient Sri Lankan art and architecture. This rock temple, dating back to the 3rd century BC, is famous worldwide for its exquisite stone carvings, particularly the romantic &quot;Lovers&quot; sculpture.
            </p>
            <p className="text-lg">
              More than just a temple, Isurumuniya is an artistic treasure trove that showcases the sophisticated craftsmanship of ancient Sri Lankan sculptors. The temple complex, built around natural rock formations, offers a unique blend of spiritual significance and artistic beauty.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts About Isurumuniya Temple
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span><strong>Built:</strong> 3rd Century BC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span><strong>Built by:</strong> King Devanampiya Tissa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span><strong>Famous for:</strong> Lovers sculpture</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span><strong>Location:</strong> Anuradhapura Ancient City</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span><strong>Visit Duration:</strong> 1-2 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span><strong>Entry:</strong> Included in Anuradhapura ticket</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Romantic Legend Behind the Temple</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Lovers+Sculpture"
                alt="Famous Isurumuniya Lovers sculpture showing intimate couple carved in stone"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The world-famous &quot;Lovers&quot; sculpture at Isurumuniya Temple
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The temple&apos;s most famous sculpture tells a romantic story that has captivated visitors for centuries. The &quot;Lovers&quot; carving is believed to represent Prince Saliya (son of King Dutugemunu) and his beloved Asokamala, a woman of lower caste.
              </p>
              <p>
                According to legend, Prince Saliya gave up his right to the throne for love, choosing to marry Asokamala despite social conventions. This sculpture immortalizes their eternal love story in stone.
              </p>
              <p>
                However, some scholars believe the sculpture might represent a divine couple or celestial beings, adding to the mystery and allure of this ancient masterpiece.
              </p>
            </div>
          </div>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Artistic Treasures to Discover</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. The Lovers Sculpture</CardTitle>
                <CardDescription>World-renowned romantic carving</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Lovers+Detail"
                    alt="Close-up detail of the Isurumuniya Lovers sculpture showing intricate carving work"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The centerpiece of Isurumuniya, this sculpture is considered one of the finest examples of ancient Sri Lankan art:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Exquisite detail showing intimate human emotion
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect preservation after 2,000+ years
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Symbol of eternal love and devotion
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. The Elephant Pond Sculpture</CardTitle>
                <CardDescription>Magnificent elephants in their natural habitat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Another masterpiece at Isurumuniya shows a family of elephants at a water hole, demonstrating the ancient artists&apos; keen observation of nature:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Realistic portrayal of elephant behavior
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Shows mother elephant with baby
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Demonstrates advanced artistic skills
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Elephant+Sculpture"
                    alt="Ancient stone carving of elephants at water pond showing family group"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. The Royal Family Sculpture</CardTitle>
                <CardDescription>Depicting ancient royal court life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Royal+Family"
                    alt="Stone carving showing ancient Sri Lankan royal family in traditional dress"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This sculpture provides insight into ancient Sri Lankan royal court life and fashion:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Shows traditional royal attire and jewelry
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Depicts court ceremonies and customs
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical documentation in stone
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. The Sacred Lotus Pond</CardTitle>
                <CardDescription>Tranquil water feature with spiritual significance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The temple complex includes a beautiful lotus pond that adds to the serene atmosphere:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sacred lotus flowers bloom seasonally
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect reflection pool for photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation spot
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Lotus+Pond"
                    alt="Sacred lotus pond at Isurumuniya Temple with blooming flowers and reflections"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />
              <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Near by Archaeological Wonders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            

            <Link href="/destinations/ranmusuuyana" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Ranmusu uyana with universal stargate</CardTitle>
                  <CardDescription>Ancient city</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Minneriyanationalpark"
                    alt="View of Sigiriya Rock from Pidurangala Rock"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Explore the mysterious Ranmusu uyana, an ancient site with unique stone carvings and a universal stargate.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    See More →
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/destinations/mihinthalaya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Mihinthalaya</CardTitle>
                  <CardDescription>Scared site </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Minneriyanationalpark"
                    alt="View of Sigiriya Rock from Pidurangala Rock"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                   Just a few kilometers from Anuradhapura, Mihinthalaya is a sacred site where Buddhism was first introduced to Sri Lanka.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    See More →
                  </span>
                </CardContent>
              </Card>
            </Link>


            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Moonstone & Guard Stones</CardTitle>
                <CardDescription>Exquisite stone craftsmanship</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Intricate moonstone carving showing concentric circles with animals and lotus designs"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Masterpieces of ancient stone carving found at temple entrances, depicting Buddhist philosophy in art.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Twin Ponds (Kuttam Pokuna)</CardTitle>
                <CardDescription>Ancient hydraulic engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Kuttampokuna.jpeg"
                  alt="Twin Ponds showing sophisticated ancient water management system with stone steps"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Sophisticated bathing pools for monks, showcasing advanced hydraulic engineering from ancient times.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Don&apos;ts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - For the Best Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dress modestly:</strong> Cover shoulders and knees in this sacred space
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Remove shoes:</strong> Before entering temple buildings
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Hire a guide:</strong> Learn the fascinating stories behind each sculpture
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Visit early morning:</strong> Best lighting and fewer crowds
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring water:</strong> Stay hydrated while exploring
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON&apos;Ts - Respect the Sacred Site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t touch sculptures:</strong> Oils from hands damage ancient stone
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t pose inappropriately:</strong> Respect the sacred nature
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t use flash photography:</strong> Can damage ancient carvings
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t climb on structures:</strong> Preserve for future generations
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Photography Tips for Stunning Shots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Photo Opportunities:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• The Lovers sculpture (most famous shot)</li>
                    <li>• Elephant pond carving with detail focus</li>
                    <li>• Lotus pond reflections</li>
                    <li>• Temple architecture against rock formations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technical Tips:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use natural light - no flash allowed</li>
                    <li>• Macro lens for sculpture details</li>
                    <li>• Early morning for soft, warm lighting</li>
                    <li>• Respect photography restrictions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-pink-50 to-red-50 border-pink-200">
            <CardHeader>
              <CardTitle className="text-pink-800">Your Isurumuniya Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Isurumuniya Temple offers a unique glimpse into ancient Sri Lankan artistry and the timeless theme of love. The exquisite sculptures here represent some of the finest examples of classical Sri Lankan art, preserved for over two millennia.
              </p>
              <p className="text-muted-foreground font-medium">
                Take your time to appreciate these masterpieces - they tell stories of love, devotion, and artistic excellence that transcend time! 💕🎨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
