import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Crown, Heart, Gem, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Ruwanwelisaya Stupa Anuradhapura: Complete Guide 2025 | Sacred Buddha Relics & Ancient Architecture",
  description:
    "Explore Ruwanwelisaya, the magnificent Great Stupa of Anuradhapura built by King Dutugemunu in 140 BC. Complete guide to Sri Lanka's most sacred Buddhist monument with Buddha relics, elephant wall, and spiritual significance.",
  keywords:
    "Ruwanwelisaya, Great Stupa, Anuradhapura, Buddha relics, King Dutugemunu, Buddhist pilgrimage, sacred monument, elephant wall, ancient architecture, UNESCO World Heritage",
  openGraph: {
    title: "Ruwanwelisaya Stupa: Complete Guide to Sri Lanka's Great Stupa",
    description: "Your ultimate guide to the most magnificent Buddhist monument in Sri Lanka",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function RuwanwelisayaDetailedGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Ruwanwalisaya.jpeg"
          alt="Magnificent white Ruwanwelisaya stupa with its distinctive dome and pilgrims offering prayers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">Ruwanwelisaya</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">The Great Stupa of Sacred Anuradhapura</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Crown className="w-4 h-4 mr-2" />
              Built by King Dutugemunu 140 BC
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <TreePine className="w-4 h-4 mr-2" />
              103 Meters Tall - Ancient Wonder
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Gem className="w-4 h-4 mr-2" />
              Contains Sacred Buddha Relics
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Detailed Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Welcome to Ruwanwelisaya: The Crown Jewel of Buddhist Architecture
          </h2>
          <div className="prose prose-xl max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed">
              Prepare to be overwhelmed by the sheer magnificence of Ruwanwelisaya, the Great Stupa that has stood as a
              beacon of Buddhist faith for over 2,100 years. Rising majestically 103 meters into the sky with its
              brilliant white dome gleaming in the Sri Lankan sun, this architectural masterpiece represents the
              pinnacle of ancient Sinhalese engineering and spiritual devotion. Built by the legendary King Dutugemunu
              in 140 BC, Ruwanwelisaya is not just a monument - it&apos;s a living testament to the enduring power of faith,
              the genius of ancient architects, and the unbreakable connection between the people of Sri Lanka and their
              Buddhist heritage.
            </p>
            <p className="text-lg mb-6">
              What makes Ruwanwelisaya truly extraordinary is the incredible story woven into every stone of its
              construction. This is the stupa that King Dutugemunu dreamed of building as the ultimate offering to Lord
              Buddha - a monument so magnificent that it would inspire pilgrims for thousands of years to come. The king
              poured his heart, soul, and the entire wealth of his kingdom into this project, employing the finest
              craftsmen, using the most precious materials, and incorporating sacred relics of Lord Buddha himself into
              the very heart of the structure.
            </p>
            <p className="text-lg mb-6">
              The stupa&apos;s perfect proportions follow ancient mathematical principles that create a sense of harmony and
              spiritual balance that you can actually feel when you stand before it. The massive dome, with its
              circumference of 292 meters, represents the cosmic egg from which all existence emerges, while the spire
              reaching toward heaven symbolizes the path to enlightenment. Every element of Ruwanwelisaya&apos;s design
              carries deep spiritual meaning, from the lotus-shaped base representing purity to the crystal at the very
              top that catches and reflects the light of the sun and moon.
            </p>
            <p className="text-lg">
              But perhaps the most enchanting feature of Ruwanwelisaya is the famous elephant wall that surrounds its
              base - 344 stone elephants, each carved with exquisite detail and no two exactly alike. These magnificent
              creatures, symbols of strength, wisdom, and protection in Buddhist tradition, have stood guard over the
              sacred relics for over two millennia, creating one of the most photographed and beloved architectural
              features in all of Sri Lanka. Walking around this elephant wall, you&apos;re following in the footsteps of
              countless pilgrims, kings, and devotees who have come here seeking blessings, peace, and spiritual
              inspiration.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-orange-300 dark:border-orange-600">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* How to Get There Section */}
        <section className="mb-16">
          <Card className="border-2 border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-blue-700 dark:text-blue-300">
                <Car className="w-8 h-8 text-blue-500" />
                How to Get to Ruwanwelisaya
              </CardTitle>
              <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">
                Multiple transportation options to reach this sacred UNESCO World Heritage Site in Anuradhapura
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* By Private Vehicle - Recommended */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                      <Car className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300">By Private Vehicle</h3>
                        <Badge className="bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600">
                          Recommended
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Via A1 Highway</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Colombo → Kurunegala → Anuradhapura</p>
                    <div className="flex justify-between text-sm">
                      <span><strong>Distance:</strong> 205 km</span>
                      <span><strong>Duration:</strong> 3-4 hours</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Taxi/Tuk-tuk</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">From Anuradhapura town center</p>
                    <div className="flex justify-between text-sm">
                      <span><strong>Taxi:</strong> Rs. 500-800</span>
                      <span><strong>Tuk-tuk:</strong> Rs. 300-500</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Rental Car</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Self-drive or with driver</p>
                    <div className="flex justify-between text-sm">
                      <span><strong>Self-drive:</strong> Rs. 8,000-12,000/day</span>
                      <span><strong>With driver:</strong> Rs. 12,000-18,000/day</span>
                    </div>
                  </div>
                </div>

                {/* By Public Transport */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <Car className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">By Public Bus</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">From Colombo</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Regular CTB and private buses to Anuradhapura</p>
                    <div className="flex justify-between text-sm">
                      <span><strong>Duration:</strong> 4-5 hours</span>
                      <span><strong>Cost:</strong> Rs. 300-500</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">From Kandy</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Direct buses via Dambulla</p>
                    <div className="flex justify-between text-sm">
                      <span><strong>Duration:</strong> 2.5-3 hours</span>
                      <span><strong>Cost:</strong> Rs. 200-350</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">By Train</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Intercity Express</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Colombo Fort to Anuradhapura</p>
                    <div className="flex justify-between text-sm">
                      <span><strong>Duration:</strong> 3.5-4 hours</span>
                      <span><strong>Cost:</strong> Rs. 400-1,500</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Local Transport</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">From Anuradhapura bus station to site</p>
                    <div className="flex justify-between text-sm">
                      <span><strong>Duration:</strong> 15-20 minutes</span>
                      <span><strong>Cost:</strong> Rs. 30-50</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Travel Tips */}
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Important Travel Tips
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Best visited early morning (6 AM - 9 AM) or late afternoon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Free parking available at the archaeological site</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Site open daily from 6:00 AM to 6:00 PM</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Entry fee: Rs. 30 for locals, USD 30 for foreigners</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Enhanced Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-yellow-200 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Star className="w-8 h-8 text-yellow-500" />
                Essential Ruwanwelisaya Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-yellow-700 mb-4">Historical Significance</h4>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Construction:</strong> 140 BC by King Dutugemunu
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Dynasty:</strong> Anuradhapura Kingdom
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gem className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Contains:</strong> Sacred Buddha relics & precious gems
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Status:</strong> UNESCO World Heritage Site
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-green-700 mb-4">Physical Dimensions</h4>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Height:</strong> 103 meters (338 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Circumference:</strong> 292 meters at base
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Elephant Wall:</strong> 344 unique stone elephants
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <span>
                      <strong>Base Shape:</strong> Perfect lotus design
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-purple-700 mb-4">Visitor Information</h4>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 1-2 hours recommended
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Best Time:</strong> Early morning or late afternoon
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Entry:</strong> Part of Anuradhapura Sacred City
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <span>
                      <strong>Spiritual:</strong> Active place of worship
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Epic Story */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">The Epic Story of Ruwanwelisaya</h2>

          <div className="space-y-12">
            {/* King Dutugemunu's Vision */}
            <Card className="overflow-hidden border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30">
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-300">King Dutugemunu&apos;s Sacred Vision</CardTitle>
                <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                  The divine inspiration that created Sri Lanka&apos;s greatest monument
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Artistic representation of King Dutugemunu overseeing the construction of Ruwanwelisaya"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The story of Ruwanwelisaya begins with a young prince&apos;s extraordinary vision. King Dutugemunu,
                      after unifying Sri Lanka and establishing peace across the land, experienced a profound spiritual
                      awakening. Legend tells us that he had a divine vision where Lord Buddha himself appeared to him
                      and requested that he build a great stupa that would house sacred relics and serve as a beacon of
                      Buddhist teaching for all future generations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The king was so moved by this vision that he dedicated the rest of his life and the entire wealth
                      of his kingdom to this sacred project. He gathered the finest architects, master craftsmen, and
                      skilled workers from across the known world. The construction became a national endeavor, with
                      people from all walks of life contributing their skills, labor, and resources to create something
                      truly magnificent.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes this story even more remarkable is that King Dutugemunu didn&apos;t live to see his great
                      stupa completed. He died during construction, but his vision was so powerful and his plans so
                      detailed that his successors continued the work exactly as he had envisioned. The stupa was
                      finally completed during the reign of his brother, King Saddha Tissa, making it a monument that
                      spans generations and represents the collective devotion of an entire civilization.
                    </p>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">The King&apos;s Sacred Commitment:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Divine Vision:</strong> Received direct inspiration from Lord Buddha in a dream
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>National Project:</strong> United the entire kingdom in this sacred endeavor
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Master Craftsmen:</strong> Employed the finest architects and artists of the age
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Lifetime Dedication:</strong> Devoted his entire reign to this sacred project
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Generational Legacy:</strong> Continued by successors to honor his vision
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sacred Relics */}
            <Card className="overflow-hidden border-2 border-gold-200">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30">
                <CardTitle className="text-2xl text-yellow-800 dark:text-yellow-300">The Sacred Buddha Relics</CardTitle>
                <CardDescription className="text-lg text-yellow-600 dark:text-yellow-400">
                  The precious relics that make this stupa the holiest site in Sri Lanka
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      At the very heart of Ruwanwelisaya lies one of Buddhism&apos;s most precious treasures - authentic
                      relics of Lord Buddha himself. These sacred remains, including bone fragments and teeth, were
                      carefully enshrined in a specially constructed relic chamber at the center of the stupa,
                      surrounded by an incredible collection of precious gems, gold ornaments, and sacred objects that
                      represent the devotion of an entire civilization.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The relic chamber itself is an architectural marvel, constructed with multiple layers of
                      protection to ensure the sacred contents would be preserved for eternity. Ancient texts describe
                      how the chamber was filled with precious stones including sapphires, rubies, emeralds, and pearls,
                      along with golden lotus flowers and other sacred symbols. The chamber was then sealed with special
                      ceremonies and blessed by the most revered monks of the time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes these relics even more significant is their authenticated provenance. Historical
                      records show that these relics were obtained through diplomatic missions to India and other
                      Buddhist kingdoms, with each relic&apos;s authenticity verified by learned monks and scholars. The
                      presence of these genuine Buddha relics is what transforms Ruwanwelisaya from merely an impressive
                      monument into one of the most sacred pilgrimage sites in the Buddhist world.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The spiritual power attributed to these relics is immense. Pilgrims from across Asia have traveled
                      here for over 2,000 years, believing that proximity to these sacred remains can bring blessings,
                      healing, and spiritual merit. The very air around Ruwanwelisaya is considered sacred because of
                      the presence of these relics, and many visitors report feeling a profound sense of peace and
                      spiritual energy when they visit.
                    </p>

                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">The Sacred Relic Collection:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Buddha&apos;s Bone Relics:</strong> Authenticated fragments from Lord Buddha&apos;s cremation
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Sacred Teeth:</strong> Precious dental relics with verified provenance
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Precious Gems:</strong> Sapphires, rubies, emeralds surrounding the relics
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Golden Artifacts:</strong> Sacred lotus flowers and ceremonial objects
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Protected Chamber:</strong> Multi-layered sealed chamber at stupa&apos;s heart
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Artistic representation of the sacred relic chamber with precious gems and Buddhist artifacts"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* The Famous Elephant Wall */}
            <Card className="overflow-hidden border-2 border-gray-200">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-stone-50 dark:from-gray-800/50 dark:to-stone-800/50">
                <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">The Magnificent Elephant Wall</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                  344 stone guardians protecting the sacred stupa for over 2,000 years
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Stone elephant wall showing carved elephants surrounding the base of Ruwanwelisaya stupa"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The elephant wall of Ruwanwelisaya is perhaps the most beloved and photographed feature of this
                      magnificent stupa. This extraordinary architectural element consists of 344 stone elephants, each
                      standing about 2 meters tall and carved with incredible attention to detail. What makes this wall
                      truly remarkable is that no two elephants are exactly alike - each one has its own unique
                      expression, posture, and decorative elements, showcasing the incredible skill and creativity of
                      ancient Sinhalese stone carvers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      In ancient Sri Lankan and Indian culture, elephants were revered as symbols of strength, wisdom,
                      loyalty, and protection. By surrounding the sacred stupa with these majestic creatures, the
                      architects created a powerful spiritual barrier that would guard the precious relics within for
                      all eternity. The elephants are positioned as if they are eternally circumambulating the stupa,
                      performing the sacred ritual of walking clockwise around holy sites that Buddhist pilgrims have
                      practiced for centuries.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Each elephant in the wall tells its own story through the intricate details carved into the stone.
                      Some elephants are shown with elaborate decorative cloths and ornaments, indicating their royal
                      status. Others display different emotional expressions - some appear serene and meditative, others
                      alert and protective. The variety in their poses and expressions creates a sense of movement and
                      life that makes the wall feel almost animated, as if these stone guardians could come to life at
                      any moment.
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">The Elephant Wall Features:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>344 Unique Elephants:</strong> Each carved with individual characteristics and
                            expressions
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>2-Meter Height:</strong> Life-sized elephants creating an impressive visual impact
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Symbolic Protection:</strong> Eternal guardians of the sacred relics within
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Master Craftsmanship:</strong> Incredible detail showing ancient artistic skills
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Circumambulation Design:</strong> Positioned for eternal clockwise walking ritual
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-purple-300 dark:border-purple-600">
          [Premium Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Detailed Architecture & Spiritual Symbolism */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Sacred Architecture & Spiritual Symbolism</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30">
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">Architectural Marvel</CardTitle>
                <CardDescription>Ancient engineering and mathematical precision</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Perfect Mathematical Proportions</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ruwanwelisaya was built using ancient mathematical principles that create perfect harmony and
                      balance. The ratio between the height and circumference follows the golden ratio, creating a sense
                      of visual perfection that the human eye finds naturally pleasing. This mathematical precision
                      wasn&apos;t accidental - it was based on sacred geometry principles that ancient architects believed
                      would enhance the spiritual power of the structure.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      The dome&apos;s curvature follows precise mathematical curves that distribute weight evenly
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Advanced Construction Techniques</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The construction of Ruwanwelisaya demonstrates incredibly advanced engineering for its time. The
                      massive dome was built using a technique called &quot;corbelling,&quot; where each layer of stones slightly
                      overhangs the layer below, creating a self-supporting structure without the need for mortar in
                      many sections. The foundation extends deep underground with multiple layers of different materials
                      to ensure stability for millennia.
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      Foundation includes layers of stone, clay, and special binding materials
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Weather-Resistant Design</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The stupa&apos;s design incorporates sophisticated drainage systems and weather-resistant features that
                      have allowed it to survive over 2,000 years of monsoons, earthquakes, and other natural
                      challenges. The dome&apos;s shape naturally sheds rainwater, while internal channels direct moisture
                      away from the sacred relic chamber. The white limestone surface was specially treated to resist
                      weathering and maintain its brilliant appearance.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">
                      Internal drainage systems protect the sacred relic chamber from moisture
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Restoration and Preservation</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Throughout its long history, Ruwanwelisaya has undergone several major restoration projects, each
                      one carefully designed to preserve the original architectural integrity while ensuring the
                      structure&apos;s continued stability. The most recent major restoration was completed in the 20th
                      century, using traditional materials and techniques wherever possible to maintain authenticity.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">
                      Modern conservation techniques preserve ancient craftsmanship
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
                <CardTitle className="text-2xl text-purple-700 dark:text-purple-300">Deep Spiritual Symbolism</CardTitle>
                <CardDescription>Sacred meanings embedded in every element</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">The Cosmic Egg (Dome)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The massive white dome of Ruwanwelisaya represents the cosmic egg from which all existence emerges
                      in Buddhist cosmology. Its perfect spherical shape symbolizes the completeness and perfection of
                      Buddha&apos;s teachings, while the brilliant white color represents purity, enlightenment, and the
                      transcendence of all earthly concerns. The dome&apos;s size and prominence make it visible from great
                      distances, serving as a beacon calling pilgrims to the sacred site.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">
                      White color symbolizes purity and enlightenment in Buddhist tradition
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">The Lotus Base</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The base of Ruwanwelisaya is designed in the shape of a lotus flower, one of the most important
                      symbols in Buddhism. The lotus represents the journey from ignorance to enlightenment - just as
                      the lotus flower grows from muddy water to bloom in pure beauty above the surface, so too can
                      humans rise from the suffering of earthly existence to achieve spiritual awakening. The multiple
                      tiers of the base represent the different stages of this spiritual journey.
                    </p>
                    <p className="text-xs text-pink-600 font-medium">
                      Multiple tiers represent stages of spiritual development
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">The Spire (Reaching Heaven)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The spire at the top of Ruwanwelisaya reaches toward heaven, symbolizing the connection between
                      earth and the divine realms. At its very peak sits a crystal that catches and reflects sunlight
                      and moonlight, representing the illumination of wisdom that comes from following Buddha&apos;s
                      teachings. This spire serves as a spiritual antenna, channeling divine blessings down to the earth
                      and carrying the prayers of pilgrims upward to the heavens.
                    </p>
                    <p className="text-xs text-yellow-600 font-medium">
                      Crystal at peak reflects light as symbol of divine wisdom
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Four Cardinal Directions</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ruwanwelisaya is perfectly aligned with the four cardinal directions, symbolizing that Buddha&apos;s
                      teachings are meant for all people in all directions of the world. Each direction has special
                      significance in Buddhist cosmology, and the stupa&apos;s design ensures that pilgrims approaching from
                      any direction will have an equally magnificent view. This universal orientation reflects
                      Buddhism&apos;s message of compassion and enlightenment for all beings.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      Universal orientation welcomes pilgrims from all directions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comprehensive Visiting Guide */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Complete Guide to Visiting Ruwanwelisaya</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30">
                <CardTitle className="text-2xl text-green-700 dark:text-green-300">Practical Planning Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Entry Fees & Access</h4>
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg space-y-2 border border-green-200 dark:border-green-700">
                    <p className="text-sm">
                      <strong>Anuradhapura Sacred City Ticket:</strong>
                    </p>
                    <p className="text-sm">• Foreign Adults: $25 USD (valid for all sites)</p>
                    <p className="text-sm">• Foreign Children: $12.50 USD</p>
                    <p className="text-sm">• SAARC Nationals: $12.50 USD</p>
                    <p className="text-sm">• Local Adults: Rs. 50</p>
                    <p className="text-sm">• Local Children: Rs. 25</p>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                      Ticket includes access to all major sites in Anuradhapura Sacred City
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Best Times to Visit</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="font-medium text-blue-700">Early Morning (6:00-8:00 AM)</p>
                      <p className="text-sm text-muted-foreground">
                        Cool temperatures, soft golden light, peaceful atmosphere, active bird life
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-3">
                      <p className="font-medium text-orange-700">Late Afternoon (4:00-6:00 PM)</p>
                      <p className="text-sm text-muted-foreground">
                        Beautiful sunset lighting, comfortable temperatures, evening prayers
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-3">
                      <p className="font-medium text-purple-700">Full Moon Days (Poya Days)</p>
                      <p className="text-sm text-muted-foreground">
                        Special ceremonies, increased spiritual activity, traditional offerings
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800">Transportation Options</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>From Colombo:</strong> 205 km (4-5 hours by car/bus)
                    </p>
                    <p>
                      <strong>From Kandy:</strong> 140 km (3 hours by car)
                    </p>
                    <p>
                      <strong>From Dambulla:</strong> 70 km (1.5 hours by car)
                    </p>
                    <p>
                      <strong>Local Transport:</strong> Tuk-tuks, bicycles, walking within Sacred City
                    </p>
                    <p>
                      <strong>Organized Tours:</strong> Day trips available from major cities
                    </p>
                    <p className="text-green-600 font-medium">
                      Recommendation: Stay overnight in Anuradhapura to visit multiple sites
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800">Accommodation Options</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Luxury Hotels:</strong> Heritage Anuradhapura, Ulagalla Resort
                    </p>
                    <p>
                      <strong>Mid-Range:</strong> Milano Tourist Rest, Sanctuary at Tissawewa
                    </p>
                    <p>
                      <strong>Budget Options:</strong> Guesthouses, backpacker hostels
                    </p>
                    <p>
                      <strong>Unique Stay:</strong> Forest monasteries (with permission)
                    </p>
                    <p className="text-green-600 font-medium">Book in advance during peak season (December-March)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30">
                <CardTitle className="text-2xl text-orange-700 dark:text-orange-300">Temple Etiquette & Cultural Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">Dress Code Requirements</h4>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg space-y-2 border border-orange-200 dark:border-orange-700">
                    <p className="text-sm">
                      <strong>Essential Requirements:</strong>
                    </p>
                    <p className="text-sm">• Cover shoulders and knees completely</p>
                    <p className="text-sm">• Remove shoes and hats before entering sacred areas</p>
                    <p className="text-sm">• White clothing is preferred and considered respectful</p>
                    <p className="text-sm">• Avoid tight-fitting or revealing clothing</p>
                    <p className="text-sm">• Bring socks for walking on hot stone surfaces</p>
                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">Sarongs available for rent if needed</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">Respectful Behavior</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded border-l-4 border-red-500 dark:border-red-400">
                      <p className="font-medium text-red-700 dark:text-red-300 mb-1">Essential Respect Guidelines:</p>
                      <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                        <li>• Walk clockwise around the stupa (circumambulation)</li>
                        <li>• Never point feet toward the stupa or Buddha images</li>
                        <li>• Maintain quiet, respectful conversation</li>
                        <li>• Don&apos;t climb on the stupa or elephant wall</li>
                        <li>• Show respect to monks and pilgrims</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border-l-4 border-blue-500 dark:border-blue-400">
                      <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">Photography Guidelines:</p>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• Photography allowed in most areas</li>
                        <li>• No flash photography near Buddha statues</li>
                        <li>• Ask permission before photographing people</li>
                        <li>• Be respectful of worshippers and ceremonies</li>
                        <li>• Don&apos;t pose inappropriately with religious objects</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">Spiritual Practices</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Circumambulation:</strong> Walk clockwise around the stupa while meditating
                    </p>
                    <p>
                      <strong>Offerings:</strong> Lotus flowers, incense, oil lamps available for purchase
                    </p>
                    <p>
                      <strong>Meditation:</strong> Quiet areas available for personal reflection
                    </p>
                    <p>
                      <strong>Prayers:</strong> Join group chanting sessions if invited
                    </p>
                    <p>
                      <strong>Merit Making:</strong> Participate in traditional Buddhist merit-making activities
                    </p>
                    <p className="text-orange-600 font-medium">
                      Local guides can explain spiritual practices and their significance
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">Health & Safety</h4>
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
                    <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                      <li>• Bring water and stay hydrated</li>
                      <li>• Wear sunscreen and protective clothing</li>
                      <li>• Watch for uneven stone surfaces</li>
                      <li>• Be aware of monkeys (don&apos;t feed them)</li>
                      <li>• Carry basic first aid supplies</li>
                      <li>• Have emergency contact numbers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Inspirational Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 border-2 border-yellow-200 dark:border-yellow-700 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-orange-800 dark:text-orange-300 mb-4">
                Your Sacred Journey at Ruwanwelisaya Awaits
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Standing before Ruwanwelisaya is more than just sightseeing - it&apos;s a profound spiritual experience
                  that connects you with over 2,100 years of continuous Buddhist devotion and faith. This magnificent
                  white dome, rising majestically against the Sri Lankan sky, has witnessed the prayers of countless
                  pilgrims, the devotion of kings and commoners alike, and the unbroken chain of Buddhist tradition that
                  continues to this day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As you walk clockwise around the elephant wall, following the ancient ritual of circumambulation,
                  you&apos;re participating in the same sacred practice that has been performed here for over two millennia.
                  Each of the 344 stone elephants has watched over millions of pilgrims, and the sacred relics at the
                  heart of the stupa continue to radiate the spiritual energy that has made this place a beacon of peace
                  and enlightenment for the Buddhist world.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Take time to absorb the incredible history, the masterful architecture, and the deep spiritual
                  significance of what you&apos;re experiencing. This is not just ancient stone and mortar - this is a living
                  monument to human faith, artistic achievement, and the enduring power of spiritual devotion. The peace
                  and serenity you feel here is the same that has touched the hearts of pilgrims for over 2,000 years.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you come as a Buddhist pilgrim seeking blessings, a history enthusiast marveling at ancient
                  engineering, or simply a traveler in search of beauty and meaning, Ruwanwelisaya will leave an
                  indelible mark on your soul. This is Sri Lanka&apos;s greatest architectural achievement and one of
                  Buddhism&apos;s most sacred sites - a place where earth truly meets heaven.
                </p>
                <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl border border-orange-200 dark:border-gray-600 mt-8">
                  <p className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-2">
                    May your visit to this sacred monument bring you peace, wisdom, and blessings! 🙏✨🏛️
                  </p>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    Experience the spiritual power of Sri Lanka&apos;s most magnificent stupa and carry its blessings with
                    you always
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
