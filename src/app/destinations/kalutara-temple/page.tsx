import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, Star, Leaf, Building, History, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Kalutara Temple (Kalutara Bodhiya): Complete Guide 2025 | Sacred Buddhist Site",
  description:
    "Explore the sacred Kalutara Temple and Bodhiya, one of Sri Lanka's most revered Buddhist sites. Complete visitor guide with history, architecture, and spiritual significance of this magnificent stupa.",
  keywords: "Kalutara Temple, Kalutara Bodhiya, Kalutara Stupa, Buddhist temples Sri Lanka, sacred Bo tree, Gangatilaka Vihara, sacred sites, religious tourism",
  authors: [{ name: "Heritage Explorer" }],
  openGraph: {
    title: "Kalutara Temple and Bodhiya: Complete Visitor Guide 2025",
    description: "Discover the spiritual and architectural magnificence of Kalutara's iconic Buddhist temple complex",
    type: "article",
    images: ["/kalutara-temple-main.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalutara Temple and Bodhiya: Complete Visitor Guide 2025",
    description: "Discover the spiritual and architectural magnificence of Kalutara's iconic Buddhist temple complex",
  },
}

export default function KalutaraTempleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/kalutara-temple-main.jpg"
          alt="The magnificent white Kalutara Stupa and sacred Bodhiya temple complex against the blue sky"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kalutara Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Bodhiya and Magnificent Stupa</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Kalutara, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Building className="w-4 h-4 mr-1" />
              Sacred Buddhist Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <History className="w-4 h-4 mr-1" />
              Est. 1960s
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Kalutara Temple: A Sacred Haven of Buddhist Heritage
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-white/90 leading-relaxed font-medium">
            <p className="text-lg mb-4 tracking-wide">
              Standing majestically at the mouth of the Kalu Ganga (Black River), the Kalutara Temple, 
              officially known as the Gangatilaka Vihara, is one of Sri Lanka&apos;s most venerated Buddhist 
              sanctuaries. This remarkable complex is unique for being the only hollow Buddhist stupa in 
              the world, housing a smaller shrine room within its dome.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              The temple&apos;s most sacred feature is the Kalutara Bodhiya, a historic Bo tree that grew 
              from a sapling of the Jaya Sri Maha Bodhi in Anuradhapura. This ancient tree, believed to 
              be one of the 32 saplings that sprouted from the original Sacred Bo Tree in Sri Lanka, has 
              been a site of worship for centuries, drawing pilgrims from across the island and beyond.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              The pristine white stupa, rising gracefully against the coastal skyline, stands as a 
              testament to modern Buddhist architecture while honoring ancient traditions. Built in the 
              1960s through public donations, the temple serves as both a spiritual center and a symbol 
              of Buddhist cultural renaissance in modern Sri Lanka.
            </p>
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/40 border-l-4 border-amber-600 dark:border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Visitor Guidelines</h4>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Dress Code:</strong> Modest dress required. Shoulders and knees must be covered. 
                  Shoes must be removed before entering temple premises.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Photography:</strong> Permitted in most areas. Be respectful of worshippers 
                  and follow posted guidelines.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100">
                  <strong>Worship Times:</strong> Temple is busiest during poya (full moon) days and 
                  early mornings. Plan accordingly.
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
                    <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Stupa Height:</strong> 40 meters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Established:</strong> 1960s
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Sacred Bo Tree:</strong> Ancient sapling
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Location:</strong> Kalutara South
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Visit Duration:</strong> 1-2 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Type:</strong> Active Buddhist Temple
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Temple Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Sacred Features and Architecture</h2>
          
          <div className="grid gap-8">
            {/* The Stupa */}
            <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  The Hollow Stupa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <Image
                      src="/kalutara-stupa.jpg"
                      alt="The unique hollow stupa of Kalutara Temple showing its magnificent white dome"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 mb-4">
                      The Kalutara stupa is unique in Buddhist architecture as the world&apos;s only hollow
                      dagoba with an accessible interior shrine room. This innovative design allows 
                      devotees to worship inside the stupa itself.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Architectural Elements:</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                      <li>• Pure white exterior finish</li>
                      <li>• Interior meditation space</li>
                      <li>• Traditional Buddhist motifs</li>
                      <li>• Four vahalkadas (entrances)</li>
                      <li>• Circular ambulatory path</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Sacred Bo Tree */}
            <Card className="border-l-4 border-l-green-600 dark:border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
                  The Sacred Bodhiya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 dark:text-white/90 mb-4">
                  The Kalutara Bodhiya is one of the most venerated Bo trees in Sri Lanka, with a 
                  direct lineage to the original Jaya Sri Maha Bodhi in Anuradhapura. This sacred tree 
                  has been a site of continuous worship for generations.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Historical Significance</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Ancient sapling lineage</li>
                      <li>• Centuries of worship</li>
                      <li>• Historical protection</li>
                      <li>• Cultural preservation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Worship Practices</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Daily offerings</li>
                      <li>• Special puja ceremonies</li>
                      <li>• Meditation spaces</li>
                      <li>• Traditional rituals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Religious Significance */}
        <section className="mb-12">
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-50">
                <Heart className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Spiritual Significance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-800 dark:text-white/90">
                  Kalutara Temple holds immense spiritual significance in Sri Lankan Buddhism, serving 
                  as both a place of worship and a center for Buddhist education and cultural 
                  preservation.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-50">Religious Activities</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Daily prayer services</li>
                      <li>• Full moon ceremonies</li>
                      <li>• Buddhist education</li>
                      <li>• Meditation programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-50">Cultural Impact</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Community gatherings</li>
                      <li>• Traditional festivals</li>
                      <li>• Art preservation</li>
                      <li>• Heritage conservation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visiting Information */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-50">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Visitor Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Access Details</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Located on Galle Road</li>
                    <li>• Accessible by train or bus</li>
                    <li>• Open daily dawn to dusk</li>
                    <li>• Free admission (donations welcome)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Best Times to Visit</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Early morning for ceremonies</li>
                    <li>• Weekday mornings less crowded</li>
                    <li>• Full moon days for special events</li>
                    <li>• Sunset for peaceful atmosphere</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-50 font-medium">
                  <strong>💡 Pro Tip:</strong> Visit during early morning hours to witness daily 
                  ceremonies and enjoy a more serene atmosphere. Consider combining with a visit to 
                  nearby Richmond Castle for a full day of cultural exploration.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photography Guide */}
        <section className="mb-12">
          <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-900 dark:text-pink-50">
                <Camera className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                Photography Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Best Photo Spots</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• <strong>Stupa View:</strong> From bridge approach</li>
                    <li>• <strong>Bo Tree:</strong> Prayer flags and offerings</li>
                    <li>• <strong>Interior Shrine:</strong> With permission</li>
                    <li>• <strong>River View:</strong> Temple reflection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Photography Tips</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Early morning light best</li>
                    <li>• Respect worship areas</li>
                    <li>• Wide-angle for stupa</li>
                    <li>• No flash photography inside</li>
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
