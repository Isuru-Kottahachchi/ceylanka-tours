import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, Star, Users, Leaf, Home, History } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Nissanka Latha Mandapaya: Ancient Dance Pavilion Guide 2025 | Anuradhapura, Sri Lanka",
  description:
    "Explore the unique stone carved pillars of Nissanka Latha Mandapaya, a 12th-century architectural marvel in Anuradhapura. Complete visitor guide with history, architecture details, and photography tips.",
  keywords: "Nissanka Latha Mandapaya, Anuradhapura, Sri Lanka heritage, ancient architecture, stone carvings, Polonnaruwa period, dance pavilion, cultural tourism",
  authors: [{ name: "Heritage Explorer" }],
  openGraph: {
    title: "Nissanka Latha Mandapaya: Complete Visitor Guide 2025",
    description: "Discover the architectural beauty of this unique 12th-century stone pavilion in Anuradhapura",
    type: "article",
    images: ["/nissanka-latha-mandapaya.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nissanka Latha Mandapaya: Complete Visitor Guide 2025",
    description: "Discover the architectural beauty of this unique 12th-century stone pavilion in Anuradhapura",
  },
}

export default function NissankaLathaMandapayaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Nishshankalatha-mandapaya.jpg"
          alt="The ancient stone pillars of Nissanka Latha Mandapaya showing intricate lotus carvings in Anuradhapura"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nissanka Latha Mandapaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">A Masterpiece of Ancient Stone Architecture</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500 ">
              <History className="w-4 h-4 mr-1" />
              Built 12th Century
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500 ">
              <Home className="w-4 h-4 mr-1" />
              Ancient Dance Pavilion
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Discovering Nissanka Latha Mandapaya: An Architectural Marvel
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg mb-4">
              Nestled within the sacred city of Anuradhapura, the Nissanka Latha Mandapaya stands as a 
              remarkable testament to the architectural ingenuity of ancient Sri Lanka. Built during the 
              reign of King Nissanka Malla (1187-1196 CE), this unique structure showcases some of the 
              most intricate stone carvings found in Sri Lankan architectural history.
            </p>
            <p className="text-lg mb-4">
              The pavilion is particularly famous for its distinctive stone pillars, each carved to 
              resemble a lotus stalk, complete with intricate lotus flower designs. These pillars, 
              unlike any others found in ancient Sri Lankan architecture, demonstrate the remarkable 
              skill of the craftsmen of the Polonnaruwa period.
            </p>
            <p className="text-lg mb-4">
              Originally believed to have served as a dancing pavilion where sacred performances were 
              held for the nearby Ruwanwelisaya stupa, the Mandapaya&apos;s design incorporates sophisticated 
              acoustic principles. The structure&apos;s layout and the unique shape of its pillars may have 
              played a role in sound projection during performances.
            </p>
            <p className="text-lg">
              Today, the Nissanka Latha Mandapaya serves as a crucial piece in understanding the 
              architectural and cultural achievements of medieval Sri Lanka, offering visitors a glimpse 
              into the artistic sophistication of the island&apos;s ancient civilization.
            </p>
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 dark:border-amber-500 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">Visitor Guidelines</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                  <strong>Sacred Site Etiquette:</strong> As part of the Sacred City of Anuradhapura, 
                  proper dress code and respectful behavior are required.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                  <strong>Photography:</strong> Photography is allowed but please be mindful of other visitors. 
                  Early morning or late afternoon light provides the best conditions for capturing the intricate stone work.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Conservation:</strong> Please do not touch or climb on the ancient stone structures. 
                  Help preserve this invaluable piece of history for future generations.
                </p>
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
                Essential Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Period:</strong> 12th Century CE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Built By:</strong> King Nissanka Malla
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Structure Type:</strong> Dance Pavilion
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Location:</strong> Sacred City of Anuradhapura
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Visit Duration:</strong> 30-45 minutes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>UNESCO Status:</strong> World Heritage Site
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architectural Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Unique Architectural Features</h2>
          
          <div className="grid gap-8">
            {/* Stone Pillars */}
            <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  The Famous Lotus Pillars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <Image
                      src="/Lotus-pillars.jpg"
                      alt="Close-up of the intricately carved lotus pillars at Nissanka Latha Mandapaya"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The most striking feature of the Mandapaya is its unique stone pillars, carved to 
                      represent blooming lotus flowers. These pillars are unlike any others found in 
                      ancient Sri Lankan architecture and showcase exceptional craftsmanship.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Intricate lotus petal designs</li>
                      <li>• Unique spiral construction</li>
                      <li>• Load-bearing engineering</li>
                      <li>• Acoustic properties</li>
                      <li>• Symbolic religious significance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Structure and Layout */}
            <Card className="border-l-4 border-l-green-600 dark:border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Structure and Layout
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Mandapaya follows a square plan with significant architectural sophistication. 
                  Its design incorporates both practical and symbolic elements, creating a space that 
                  served both ceremonial and acoustic purposes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Structural Elements</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Square foundation platform</li>
                      <li>• Central stone platform</li>
                      <li>• Symmetrical pillar arrangement</li>
                      <li>• Original wooden roof (no longer exists)</li>
                      <li>• Carved stone moldings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Design Purpose</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Acoustic enhancement</li>
                      <li>• Religious ceremonies</li>
                      <li>• Dance performances</li>
                      <li>• Visual symbolism</li>
                      <li>• Sacred space creation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Historical Significance */}
        <section className="mb-12">
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                <History className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Historical Significance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Built during the reign of King Nissanka Malla, the Mandapaya represents a period of 
                  artistic and architectural innovation in medieval Sri Lanka. Its unique design elements 
                  provide valuable insights into the technological and artistic achievements of the era.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Cultural Context</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Religious ceremonies importance</li>
                      <li>• Royal patronage of arts</li>
                      <li>• Buddhist influence on architecture</li>
                      <li>• Cultural exchange evidence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Archaeological Value</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Unique architectural style</li>
                      <li>• Stone carving techniques</li>
                      <li>• Construction methods</li>
                      <li>• Historical documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Information */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Visiting Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">Access Details</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Location:</strong> Within Sacred City complex</li>
                    <li>• <strong>Tickets:</strong> Included in site pass</li>
                    <li>• <strong>Hours:</strong> Dawn to dusk daily</li>
                    <li>• <strong>Best Time:</strong> Early morning/late afternoon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">Facilities</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Information boards nearby</li>
                    <li>• Guide services available</li>
                    <li>• Part of walking circuit</li>
                    <li>• Restrooms at main complex</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>💡 Pro Tip:</strong> Visit early morning for the best photography conditions 
                  and fewer crowds. The stone carvings are particularly impressive in the morning light.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photography Tips */}
        <section className="mb-12">
          <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-900 dark:text-pink-100">
                <Camera className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                Photography Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-100">Best Photo Spots</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Pillar Details:</strong> Close-ups of lotus carvings</li>
                    <li>• <strong>Full Structure:</strong> Wide-angle from corners</li>
                    <li>• <strong>Morning Light:</strong> Eastern side details</li>
                    <li>• <strong>Evening Light:</strong> Western perspective</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-100">Photography Tips</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Use early morning light for textures</li>
                    <li>• Bring macro lens for details</li>
                    <li>• Consider HDR for contrast</li>
                    <li>• Include people for scale</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
