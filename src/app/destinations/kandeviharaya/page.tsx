import type { Metadata } from "next"
import Image from "next/image"
import {
  Clock,
  MapPin,
  Camera,
  AlertTriangle,
  CheckCircle,
  Star,
  Calendar,
  Heart,
  ChurchIcon as PrayingIcon,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Kande Viharaya Aluthgama: Complete Guide 2025 | Sacred Buddhist Temple",
  description:
    "Discover Kande Viharaya in Aluthgama, Sri Lanka - home to one of the largest seated Buddha statues in the world. Complete visitor guide with history, attractions, and tips.",
  keywords: "Kande Viharaya, Aluthgama, Buddhist temple, seated Buddha statue, Sri Lanka Buddhism, meditation",
  openGraph: {
    title: "Kande Viharaya Aluthgama: Complete Guide 2025",
    description: "Explore this sacred Buddhist temple with one of the world's largest seated Buddha statues",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function KandeViharayaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kandeviharaya.jpeg"
          alt="Majestic white seated Buddha statue at Kande Viharaya temple with surrounding temple buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kande Viharaya Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Buddhist Sanctuary of Aluthgama</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Aluthgama, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <PrayingIcon className="w-4 h-4 mr-1" />
              Sacred Buddhist Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Calendar className="w-4 h-4 mr-1" />
              Founded 1734
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kande Viharaya: A Spiritual Haven</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Perched on a hilltop overlooking the coastal town of Aluthgama, Kande Viharaya is one of Sri Lanka&apos;s most
              revered Buddhist temples. This sacred site is home to one of the largest seated Buddha statues in the
              world, standing at an impressive 48 meters (160 feet) tall and visible from miles around.
            </p>
            <p className="text-lg">
              With a history dating back to 1734, this temple complex offers visitors a peaceful sanctuary for
              reflection and spiritual connection. Beyond its religious significance, Kande Viharaya provides
              breathtaking panoramic views of the surrounding landscape, making it a must-visit destination for both
              pilgrims and travelers seeking cultural enrichment.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts About Kande Viharaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1734
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PrayingIcon className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Buddha Statue Height:</strong> 48 meters (160 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Famous for:</strong> Giant seated Buddha statue
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Location:</strong> Aluthgama, Western Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 1-2 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Entry:</strong> Free (donations appreciated)
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Sacred History of Kande Viharaya</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Temple+History"
                alt="Historic buildings of Kande Viharaya temple complex with traditional Sri Lankan Buddhist architecture"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The historic temple buildings of Kande Viharaya with traditional Sri Lankan Buddhist architecture
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Kande Viharaya was established in 1734 during the Kandyan era by Venerable Deundara Dhammananda Thero.
                The name &quot;Kande Viharaya&quot; translates to &quot;Mountain Temple,&quot; reflecting its hilltop location that has made
                it a landmark for centuries.
              </p>
              <p>
                Throughout its history, the temple has been expanded and enhanced by successive chief monks. The most
                significant addition came in recent decades with the construction of the massive seated Buddha statue,
                which has transformed the temple into a major pilgrimage site.
              </p>
              <p>
                The temple played an important role during colonial times as a center for preserving Buddhist education
                and culture. Today, it continues to serve as both a place of worship for locals and an important
                cultural attraction that showcases Sri Lanka&apos;s rich Buddhist heritage.
              </p>
            </div>
          </div>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Treasures to Discover</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. The Giant Seated Buddha Statue</CardTitle>
                <CardDescription>One of the world&apos;s largest seated Buddha statues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Kandeviharaya.jpeg"
                    alt="Massive white seated Buddha statue at Kande Viharaya towering above the temple complex"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The centerpiece of Kande Viharaya is its magnificent seated Buddha statue:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Standing 48 meters (160 feet) tall
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Visible from miles around the countryside
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Depicts Buddha in the Dhyana Mudra meditation pose
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Completed in the early 2000s
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Ancient Image House (Pathimaghara)</CardTitle>
                <CardDescription>Historic building with valuable Buddha statues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Image House contains some of the temple&apos;s most sacred treasures:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Buddha statues in various poses
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Intricate wall paintings depicting Buddha&apos;s life
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional Sri Lankan Buddhist art
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere for meditation
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Image+House"
                    alt="Ancient Image House at Kande Viharaya with traditional Buddhist paintings and statues"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Stupa (Dagoba)</CardTitle>
                <CardDescription>Sacred Buddhist reliquary monument</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Stupa"
                    alt="White Buddhist stupa at Kande Viharaya temple complex against blue sky"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">The temple&apos;s stupa is an important sacred structure:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional bell-shaped design in gleaming white
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Contains sacred relics according to Buddhist tradition
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Devotees circumambulate it as a meditation practice
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Offers peaceful views of the surrounding area
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Panoramic Hilltop Views</CardTitle>
                <CardDescription>Breathtaking vistas of the surrounding landscape</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The temple&apos;s elevated position offers spectacular views:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sweeping vistas of Aluthgama town
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Views of the Indian Ocean on clear days
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Lush green landscapes of the surrounding countryside
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for photography, especially at sunset
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Panoramic+Views"
                    alt="Panoramic view from Kande Viharaya showing Aluthgama town and distant ocean"
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

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Temple Etiquette: Dos and Don&apos;ts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - Respectful Visiting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dress modestly:</strong> Cover shoulders and knees as a sign of respect
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Remove shoes:</strong> Before entering temple buildings and sacred areas
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Walk clockwise:</strong> Around stupas and sacred objects
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Speak quietly:</strong> Maintain the peaceful atmosphere
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Make a small donation:</strong> To support temple maintenance
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON&apos;Ts - Sacred Site Respect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t wear revealing clothing:</strong> No shorts, sleeveless tops, or mini skirts
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t point feet:</strong> At Buddha statues or monks (considered disrespectful)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t touch Buddha statues:</strong> Unless invited to pour water over them
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t take photos:</strong> Of monks without permission
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t be loud:</strong> Respect those who are praying or meditating
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
                Photography Tips for Temple Visits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Photo Opportunities:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• The giant Buddha statue from different angles</li>
                    <li>• Panoramic views from the temple grounds</li>
                    <li>• Traditional architecture details</li>
                    <li>• Sunset views with the Buddha silhouette</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Respectful Photography:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Always ask permission before photographing people</li>
                    <li>• No flash photography inside temple buildings</li>
                    <li>• Respect &quot;no photography&quot; signs in sacred areas</li>
                    <li>• Don&apos;t pose inappropriately with religious objects</li>
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
                <CardTitle>Visiting Hours & Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Opening Hours:</strong>
                  <p className="text-sm text-muted-foreground">6:00 AM - 8:00 PM daily</p>
                </div>
                <div>
                  <strong>Entry Fee:</strong>
                  <p className="text-sm text-muted-foreground">Free (donations appreciated)</p>
                </div>
                <div>
                  <strong>Best Time to Visit:</strong>
                  <p className="text-sm text-muted-foreground">
                    Early morning or late afternoon for best lighting and fewer crowds
                  </p>
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
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">2-3 hours by car or train to Aluthgama</p>
                </div>
                <div>
                  <strong>From Bentota:</strong>
                  <p className="text-sm text-muted-foreground">10-15 minutes by tuk-tuk or taxi</p>
                </div>
                <div>
                  <strong>Local Transport:</strong>
                  <p className="text-sm text-muted-foreground">Tuk-tuks available from Aluthgama town center</p>
                </div>
                <div>
                  <strong>Accessibility:</strong>
                  <p className="text-sm text-muted-foreground">
                    Involves climbing stairs; comfortable shoes recommended
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
            <Link href="/destinations/bentota" className="block hover:shadow-md transition-shadow duration-200">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Bentota</CardTitle>
                  <CardDescription>Golden sands and water sports</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Bentotabeach.jpeg"
                    alt="Golden sands of Bentota Beach with palm trees and blue water"
                    width={300}
                    height={200}
                     className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    Beautiful beach destination just 10 minutes from Kande Viharaya. Perfect for relaxation after temple
                    visit.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/bentota" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/destinations/brief-garden-by-bevis-bawa" className="block hover:shadow-md transition-shadow duration-200">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Brief Garden</CardTitle>
                  <CardDescription>Tropical landscape garden</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Brief-Garden-by-Bawa.jpg"
                    alt="Lush tropical garden with sculptures and pathways at Brief Garden"
                    width={300}
                    height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    Former home of landscape architect Bevis Bawa with beautiful tropical gardens and art collection.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/brief-garden-by-bevis-bawa" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/destinations/brief-garden-by-bevis-bawa" className="block hover:shadow-md transition-shadow duration-200">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lunuganga Garden</CardTitle>
                  <CardDescription>Tropical landscape garden</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Lunugangabawa2.jpeg"
                    alt="Lush tropical garden with sculptures and pathways at Lunuganga Garden"
                    width={300}
                    height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    Former home of landscape architect Bevis Bawa with beautiful tropical gardens and art collection.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/brief-garden-by-bevis-bawa" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/destinations/madu-river" className="block hover:shadow-md transition-shadow duration-200">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Madu River Safari</CardTitle>
                  <CardDescription>Mangrove ecosystem exploration</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Madu-river-safari.jpg"
                    alt="Boat safari through mangroves on Madu River with wildlife"
                    width={300}
                    height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                  />
                  <p className="text-sm text-muted-foreground">
                    Explore the biodiversity of Madu River&apos;s mangrove ecosystem with a boat safari through narrow
                    channels.
                  </p>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/lunuganga-garden-by-geoffrey-bawa" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Your Spiritual Journey Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Kande Viharaya offers a perfect blend of spiritual significance, cultural heritage, and natural beauty.
                Whether you&apos;re seeking a moment of peaceful reflection, interested in Buddhist architecture, or simply
                want to enjoy panoramic views, this hilltop temple provides a memorable experience.
              </p>
              <p className="text-muted-foreground mb-4">
                Take your time to absorb the serene atmosphere, observe local devotees in prayer, and appreciate the
                craftsmanship that went into creating this sacred space. The giant Buddha statue serves as a powerful
                reminder of the importance of mindfulness and inner peace.
              </p>
              <p className="text-muted-foreground font-medium">
                May your visit to Kande Viharaya bring you tranquility and inspiration! 🙏✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
