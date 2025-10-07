import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Users, Compass, History } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Ranmusu Uyana: Complete Guide 2025 | Ancient Park & Stargate Mystery",
  description:
    "Discover Ranmusu Uyana, Sri Lanka's mysterious ancient park with the enigmatic Stargate/Universal Gate. Complete guide with history, archaeology, and visitor information.",
  keywords:
    "Ranmusu Uyana, Stargate, Universal Gate, Sri Lanka archaeology, ancient technology, sacred grove, Anuradhapura",
  openGraph: {
    title: "Ranmusu Uyana: Complete Guide 2025 | Ancient Park & Stargate Mystery",
    description: "Explore the mysterious ancient park with its enigmatic Universal Gate carving",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function RanmusuUyanaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Ranmusuuyana.jpeg"
          alt="Ancient stone structures and rock formations at Ranmusu Uyana park with lush greenery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ranmusu Uyana</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Park & The Mysterious Universal Gate</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Compass className="w-4 h-4 mr-1" />
              Enigmatic Stargate
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <History className="w-4 h-4 mr-1" />
              3rd Century BC
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Ranmusu Uyana: Where Ancient Mystery Meets Nature
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Hidden between the Tissa Wewa reservoir and the Isurumuniya Rock Temple in Anuradhapura lies Ranmusu
              Uyana, an ancient park shrouded in mystery and intrigue. This 40-acre archaeological site, dating back to
              the 3rd century BC, was once a royal pleasure garden for the kings of Anuradhapura.
            </p>
            <p className="text-lg">
              What makes Ranmusu Uyana truly fascinating is the enigmatic &quot;Stargate&quot; or &quot;Universal Gate&quot; - a mysterious
              carved stone panel featuring an intricate diagram of circles and symbols that has sparked countless
              theories about its purpose and origin. Whether you&apos;re an archaeology enthusiast, history buff, or simply
              curious about ancient mysteries, Ranmusu Uyana offers a unique glimpse into Sri Lanka&apos;s rich and enigmatic
              past.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts About Ranmusu Uyana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Age:</strong> 3rd century BC - 5th century AD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Size:</strong> Approximately 40 acres
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Famous for:</strong> The Universal Gate/Stargate carving
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Original purpose:</strong> Royal pleasure garden
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit duration:</strong> 1-2 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Entry:</strong> Included in Anuradhapura ticket
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Mystery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Universal Gate: Ancient Mystery</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Universal+Gate+Carving"
                alt="Mysterious Universal Gate carving at Ranmusu Uyana showing intricate circular patterns and symbols"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The enigmatic Universal Gate carving that has puzzled researchers for generations
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The most intriguing feature of Ranmusu Uyana is undoubtedly the mysterious carved stone panel known as
                the &quot;Stargate&quot; or &quot;Universal Gate&quot;. This fascinating artifact features an intricate diagram of
                concentric circles, rectangular compartments, and various symbols carved into the rock face.
              </p>
              <p>
                Some researchers suggest it could be an ancient star map, a cosmological diagram, or even a key to
                understanding interdimensional travel. Others propose more practical explanations, such as a map for
                meditation practices or an ancient teaching tool for astronomy or mathematics.
              </p>
              <p>
                What makes this carving particularly interesting is that similar patterns have been found in other
                ancient sites around the world, leading to speculation about possible connections between ancient
                civilizations or shared knowledge systems that have been lost to time.
              </p>
            </div>
          </div>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Attractions at Ranmusu Uyana</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. The Universal/Star Gate (Sakwala Chakraya)</CardTitle>
                <CardDescription>Mysterious ancient carving with unknown purpose</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Universal+Gate+Detail"
                    alt="Close-up detail of the Universal Gate carving showing intricate symbols and circular patterns"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The centerpiece of Ranmusu Uyana that draws researchers and mystery enthusiasts:
                      There is a conspiracy theory that there are aliens behind this gate and similar gates around the world. Ex Peru and Egypt
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Intricate carving featuring concentric circles and symbols
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Contains over 30 distinct symbols and patterns
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purpose remains debated among archaeologists and researchers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Also known as &quot;Sakwala Chakraya&quot; (Universe Cycle)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Ancient Swimming Pools</CardTitle>
                <CardDescription>Sophisticated bathing facilities for ancient royalty</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The park contains several well-preserved ancient swimming pools:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Carved from solid bedrock with precise engineering
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sophisticated water filtration and drainage systems
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Used by royalty for bathing and relaxation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Demonstrates advanced hydraulic knowledge
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Ancient+Pools"
                    alt="Ancient stone swimming pools carved into bedrock at Ranmusu Uyana"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Boulder Gardens & Meditation Caves</CardTitle>
                <CardDescription>Natural rock formations used for spiritual practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Meditation+Caves"
                    alt="Ancient meditation caves among large boulders at Ranmusu Uyana"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The park features impressive boulder formations and ancient meditation spaces:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural rock shelters modified for meditation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Evidence of ancient ascetic practices
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere perfect for contemplation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Impressive natural rock formations throughout the park
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Ancient Inscriptions & Carvings</CardTitle>
                <CardDescription>Historical writings and artistic expressions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Throughout the park, you&apos;ll find various ancient inscriptions and carvings:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Brahmi script inscriptions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Decorative carvings on rock surfaces
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical records of royal donations and events
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Evidence of the site&apos;s importance through different eras
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Ancient+Inscriptions"
                    alt="Ancient Brahmi inscriptions carved into rock at Ranmusu Uyana"
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

        {/* Theories About the Universal Gate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Theories About the Universal Gate</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-700">Scientific Interpretations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Astronomical Map:</strong> Representation of the known universe or star systems
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Navigation Tool:</strong> Ancient seafaring or land navigation system
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Mathematical Diagram:</strong> Teaching tool for geometry or mathematics
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>World Map:</strong> Ancient representation of the known world
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader>
                <CardTitle className="text-purple-700">Spiritual & Alternative Theories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Meditation Map:</strong> Guide for spiritual practices and consciousness levels
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Energy Portal:</strong> Device for harnessing natural energies
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Interdimensional Gateway:</strong> Portal to other realms or dimensions
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Ancient Technology:</strong> Blueprint for forgotten advanced technology
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visitor Guidelines</h2>
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
                    <strong>Hire a knowledgeable guide:</strong> To understand the site&apos;s significance
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Wear comfortable shoes:</strong> The terrain is uneven and rocky
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring water:</strong> Limited facilities available on site
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Visit early morning:</strong> For better lighting and fewer crowds
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect the site:</strong> It&apos;s an important archaeological treasure
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON&apos;Ts - Protect the Ancient Site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t touch the carvings:</strong> Oils from hands damage ancient stone
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t climb on structures:</strong> Many are fragile despite appearance
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t litter:</strong> Preserve the natural and historical environment
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t wander off alone:</strong> Some areas can be disorienting
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t make rubbings or casts:</strong> This damages the ancient carvings
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
                Photography Tips for Ancient Mysteries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Photo Opportunities:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• The Universal Gate carving (different angles and lighting)</li>
                    <li>• Ancient pools with reflections</li>
                    <li>• Boulder formations against the sky</li>
                    <li>• Natural frames created by rock formations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technical Tips:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Early morning or late afternoon for best lighting</li>
                    <li>• Use oblique lighting to highlight carvings</li>
                    <li>• Bring a polarizing filter for rock details</li>
                    <li>• Include people for scale in wide shots</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Visiting Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Opening Hours:</strong>
                  <p className="text-sm text-muted-foreground">7:00 AM - 6:00 PM daily</p>
                </div>
                <div>
                  <strong>Entry Fee:</strong>
                  <p className="text-sm text-muted-foreground">
                    Included in the Anuradhapura Sacred City ticket ($25 USD)
                  </p>
                </div>
                <div>
                  <strong>Best Time to Visit:</strong>
                  <p className="text-sm text-muted-foreground">Early morning for best lighting on the carvings</p>
                </div>
                <div>
                  <strong>Visit Duration:</strong>
                  <p className="text-sm text-muted-foreground">1-2 hours</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Anuradhapura City:</strong>
                  <p className="text-sm text-muted-foreground">10-15 minutes by tuk-tuk or taxi</p>
                </div>
                <div>
                  <strong>Location:</strong>
                  <p className="text-sm text-muted-foreground">Between Isurumuniya Temple and Tissa Wewa reservoir</p>
                </div>
                <div>
                  <strong>Local Transport:</strong>
                  <p className="text-sm text-muted-foreground">Tuk-tuks available from Anuradhapura town</p>
                </div>
                <div>
                  <strong>Accessibility:</strong>
                  <p className="text-sm text-muted-foreground">
                    Moderate difficulty with uneven terrain; not wheelchair accessible
                  </p>
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
                <CardTitle className="text-lg">Isurumuniya Temple</CardTitle>
                <CardDescription>Famous rock temple with Lovers sculpture</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Isurumuniya.jpeg"
                  alt="Ancient Isurumuniya rock temple with carved Buddha statues and lotus pond"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Beautiful rock temple famous for its romantic Lovers sculpture, just a short walk from Ranmusu
                  Uyana.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/isurumuniya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sri Maha Bodhi</CardTitle>
                <CardDescription>The world&apos;s oldest documented tree</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/JayaSriMahaBodhi.jpeg"
                  alt="Ancient Sri Maha Bodhi tree with prayer flags and worshippers"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  The world&apos;s oldest documented tree, grown from a cutting of the original Bodhi tree under which
                  Buddha attained enlightenment.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jaya-sri-maha-bodhi" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ruwanwelisaya Stupa</CardTitle>
                <CardDescription>Magnificent ancient Buddhist monument</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Ruwanwalisaya.jpeg"
                  alt="Massive white Ruwanwelisaya stupa with ceremonial elephants and worshippers"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Impressive white stupa built in 140 BC, standing 103 meters tall and considered one of the world&apos;s
                  most venerated Buddhist sites.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ruwanwali-saya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-indigo-800">Exploring Ancient Mysteries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ranmusu Uyana offers a unique opportunity to connect with Sri Lanka&apos;s ancient past and ponder one of
                archaeology&apos;s most intriguing mysteries. The Universal Gate carving continues to fascinate researchers
                and visitors alike, inviting us to question what advanced knowledge our ancestors may have possessed.
              </p>
              <p className="text-muted-foreground mb-4">
                As you explore this ancient site, take time to appreciate both the natural beauty and the remarkable
                human achievements it contains. Whether you&apos;re drawn by archaeological interest, spiritual curiosity, or
                simply the allure of ancient mysteries, Ranmusu Uyana provides a thought-provoking experience that will
                stay with you long after your visit.
              </p>
              <p className="text-muted-foreground font-medium">
                Let the ancient mysteries of Ranmusu Uyana inspire your imagination! 🌌🔍
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
