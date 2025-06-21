import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Sigiriya Rock Fortress: Complete Travel Guide 2024 | Ancient Wonder of Sri Lanka",
  description:
    "Discover Sigiriya Rock Fortress, Sri Lanka's ancient wonder. Complete travel guide with tips, photos, best time to visit, and everything you need to know for an amazing experience.",
  keywords: "Sigiriya, Rock Fortress, Sri Lanka travel, ancient ruins, UNESCO World Heritage, travel guide, tourism",
  authors: [{ name: "Travel Explorer" }],
  openGraph: {
    title: "Sigiriya Rock Fortress: Complete Travel Guide 2024",
    description: "Your ultimate guide to visiting Sigiriya Rock Fortress in Sri Lanka",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigiriya Rock Fortress: Complete Travel Guide 2024",
    description: "Your ultimate guide to visiting Sigiriya Rock Fortress in Sri Lanka",
  },
}

export default function SigiriyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Majestic view of Sigiriya Rock Fortress rising from lush green landscape in Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sigiriya Rock Fortress</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Discover Sri Lanka's Ancient Wonder in the Sky</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Matale District, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              5th Century AD
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Sigiriya: The Lion Rock</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Imagine climbing to a palace in the clouds, built over 1,500 years ago! That's exactly what awaits you at
              Sigiriya Rock Fortress, one of Sri Lanka's most incredible ancient wonders. This massive rock formation
              rises 200 meters (660 feet) above the surrounding jungle, topped with the ruins of what was once a
              magnificent royal palace.
            </p>
            <p className="text-lg">
              Known locally as "Sinhagiri" (Lion Rock), Sigiriya is not just a tourist attraction – it's a journey
              through time that will leave you breathless, both from the climb and the stunning views that await at the
              top!
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts About Sigiriya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built:</strong> 5th Century AD (477-495 AD)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Height:</strong> 200 meters (660 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Built by:</strong> King Kashyapa I
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Central Province, Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage Site (1982)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Climb Time:</strong> 2-3 hours round trip
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Fascinating Story Behind Sigiriya</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ancient frescoes of Sigiriya showing beautiful celestial maidens painted on rock walls"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The famous Sigiriya frescoes - ancient paintings of celestial maidens
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The story of Sigiriya reads like a dramatic movie script! In the 5th century, Prince Kashyapa killed his
                father, King Dhatusena, to claim the throne. Fearing revenge from his brother Moggallana (the rightful
                heir), Kashyapa decided to build an impregnable fortress-palace on top of this massive rock.
              </p>
              <p>
                For 18 years, Kashyapa ruled from his sky-high palace, complete with gardens, pools, and stunning
                frescoes. However, his brother eventually returned with an army. During the final battle, Kashyapa's
                elephant turned back, his army thought he was retreating, and in despair, the king took his own life.
              </p>
              <p>
                After Kashyapa's death, the palace was abandoned and later became a Buddhist monastery until the 14th
                century.
              </p>
            </div>
          </div>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What You'll See During Your Visit</h2>
          <div className="space-y-8">
            {/* Water Gardens */}
            <Card>
              <CardHeader>
                <CardTitle>1. The Water Gardens</CardTitle>
                <CardDescription>Ancient hydraulic engineering at its finest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sigiriya water gardens showing ancient pools and fountains with geometric design"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Your journey begins with the incredible water gardens at the base of the rock. These
                      1,500-year-old gardens still function today! People belives King Kashyapa put crocadiles for the safety. You'll see:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Symmetrical pools and fountains that still work during rainy season
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient irrigation channels and water management systems
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful landscaping that's perfect for photos
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lion's Paws */}
            <Card>
              <CardHeader>
                <CardTitle>2. The Lion's Paws</CardTitle>
                <CardDescription>Massive stone paws that once supported a giant lion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Halfway up the rock, you'll encounter the famous Lion's Paws - two enormous stone paws that are
                      all that remain of a giant lion sculpture. Originally, visitors had to walk through the lion's
                      mouth to reach the palace! <br />
                      Peoples belives - Still some people belives there was a entrance to enter the palace through the lion's mouth. and there was a place inside the rock
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect spot for memorable photos
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great place to rest before the final climb
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Amazing views of the surrounding countryside
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Lions-paw.jpeg"
                    alt="Giant stone lion paws at Sigiriya with tourists climbing metal stairs between them"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Frescoes */}
            <Card>
              <CardHeader>
                <CardTitle>3. The Sigiriya Frescoes on Enigmatic Mirror Wall</CardTitle>
                <CardDescription>Ancient paintings that have survived 1,500 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Close-up of Sigiriya frescoes showing detailed ancient paintings of women with jewelry and flowers"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      On your way up, don't miss the world-famous Sigiriya frescoes! These ancient paintings are located
                      in a sheltered pocket of the rock face and show beautiful women (possibly celestial beings or
                      court ladies).
                      <br />
                      You can see similar frescoes in Ajantha Caves in India.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Originally there were 500 frescoes, now only 18 remain
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colors are still vibrant after 1,500 years
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Photography is not allowed to preserve the paintings
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summit */}
            <Card>
              <CardHeader>
                <CardTitle>4. The Summit Palace Ruins</CardTitle>
                <CardDescription>Royal palace remains with breathtaking 360° views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The summit is where the magic happens! At the top, you'll find the ruins of King Kashyapa's palace
                      and some of the most spectacular views in Sri Lanka.<br/>
                      At the summit you can see the Pidurangala which is also have a rock similar to Sigiriya and importtant place to visit.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        360-degree panoramic views of the jungle and countryside
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Remains of the royal palace, including the throne area
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient swimming pool carved into the rock
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect spot for sunrise or sunset photos
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Panoramic view from Sigiriya summit showing vast green landscape and ancient palace ruins"
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

        {/* Do's and Don'ts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Do's and Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DO's - For the Best Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Start early:</strong> Begin your climb by 6:30 AM to avoid crowds and heat
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Wear comfortable shoes:</strong> Good grip is essential for the metal stairs
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring water:</strong> At least 1-2 liters per person
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Use sunscreen:</strong> The sun can be intense, especially at the summit
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect the site:</strong> It's a UNESCO World Heritage Site
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Take your time:</strong> Enjoy the journey, not just the destination
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Hire a guide:</strong> Learn fascinating stories and history
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON'Ts - Avoid These Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't visit midday:</strong> It's extremely hot and crowded (11 AM - 3 PM)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't wear flip-flops:</strong> The metal stairs can be slippery
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't photograph frescoes:</strong> It's strictly prohibited
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't rush:</strong> Take breaks and enjoy the views along the way
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't litter:</strong> Keep this ancient wonder clean for future generations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't climb if afraid of heights:</strong> The final stairs are quite steep
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't forget tickets:</strong> Buy them at the entrance, not online
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Visit Sigiriya</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Best Season</CardTitle>
                <CardDescription>December to April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dry weather with minimal rain</li>
                  <li>• Clear skies for photography</li>
                  <li>• Comfortable temperatures</li>
                  <li>• Best visibility from summit</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>May & November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fewer crowds</li>
                  <li>• Occasional rain showers</li>
                  <li>• Lower accommodation prices</li>
                  <li>• Lush green landscapes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>June to October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall possible</li>
                  <li>• Slippery climbing conditions</li>
                  <li>• Beautiful water gardens active</li>
                  <li>• Lowest tourist numbers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tickets & Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Entry Fee:</strong>
                  <ul className="mt-1 text-sm text-muted-foreground">
                    <li>• Adults: $37 USD (approx. 7,400 LKR)</li>
                    <li>• Children (6-12): $18.50 USD</li>
                    <li>• SAARC nationals: Discounted rates</li>
                  </ul>
                </div>
                <div>
                  <strong>Opening Hours:</strong>
                  <p className="text-sm text-muted-foreground">7:00 AM - 5:30 PM (last entry 4:30 PM)</p>
                </div>
                <div>
                  <strong>Climbing Time:</strong>
                  <p className="text-sm text-muted-foreground">2-3 hours round trip (including exploration time)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours by car/bus via Dambulla</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">2.5-3 hours by car/bus</p>
                </div>
                <div>
                  <strong>Nearest Town:</strong>
                  <p className="text-sm text-muted-foreground">Dambulla (20 minutes drive)</p>
                </div>
                <div>
                  <strong>Accommodation:</strong>
                  <p className="text-sm text-muted-foreground">Stay in Sigiriya village or Dambulla for easy access</p>
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
                Photography Tips for Instagram-Worthy Shots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Photo Spots:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Water gardens with rock backdrop</li>
                    <li>• Lion's paws with people for scale</li>
                    <li>• Summit panoramic views</li>
                    <li>• Sunrise/sunset from nearby Pidurangala Rock</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Photography Tips:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Golden hour (6-8 AM, 4-6 PM) for best lighting</li>
                    <li>• Bring extra batteries (heat drains them fast)</li>
                    <li>• Use wide-angle lens for landscape shots</li>
                    <li>• Respect no-photography zones (frescoes)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pidurangala Rock</CardTitle>
                <CardDescription>Best views of Sigiriya</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="View of Sigiriya Rock from Pidurangala Rock showing the fortress from a distance"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Climb this nearby rock for the perfect photo of Sigiriya. Easier climb, amazing sunrise views!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dambulla Cave Temple</CardTitle>
                <CardDescription>Golden Temple complex</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dambulla Cave Temple showing ancient Buddhist statues and paintings inside rock caves"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  UNESCO site with 5 cave temples filled with Buddha statues and ancient paintings. 20 minutes away.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Minneriya National Park</CardTitle>
                <CardDescription>Elephant gathering</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Large herd of elephants gathering at Minneriya National Park during dry season"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for "The Gathering" - hundreds of elephants come together during dry season. 1 hour drive.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Final Words of Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Visiting Sigiriya is more than just ticking off a tourist attraction – it's a journey through time that
                connects you with ancient Sri Lankan civilization. The climb might be challenging, but the sense of
                achievement and the breathtaking views make every step worth it.
              </p>
              <p className="text-muted-foreground mb-4">
                Remember, you're walking in the footsteps of ancient kings and monks. Take time to appreciate not just
                the destination, but the incredible engineering and artistry that went into creating this wonder 1,500
                years ago.
              </p>
              <p className="text-muted-foreground font-medium">
                Safe travels, and enjoy your adventure at the Lion Rock! 🦁🏰
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
