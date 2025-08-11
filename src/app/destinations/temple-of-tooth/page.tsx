import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Users, Crown, Camera, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Temple of the Tooth Kandy: Complete Guide 2025 | Sacred Relic & Raja Tusker Museum",
  description:
    "Explore the Temple of the Tooth in Kandy, Sri Lanka&apos;s most sacred Buddhist site housing Buddha&apos;s tooth relic, plus the fascinating Raja Tusker Museum and cultural experiences.",
  keywords:
    "Temple of Tooth Kandy, Sri Dalada Maligawa, Buddha tooth relic, Raja Tusker Museum, Kandy attractions, Buddhist temple Sri Lanka",
  openGraph: {
    title: "Temple of the Tooth Kandy: Complete Sacred Journey Guide",
    description: "Your ultimate guide to Sri Lanka&apos;s most sacred Buddhist temple and cultural treasures",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function TempleOfToothKandyGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Temple-of-the-tooth.jpeg"
          alt="Temple of the Tooth Kandy with golden roof and traditional architecture beside Kandy Lake"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Temple of the Tooth</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">
            Sri Lanka&apos;s Most Sacred Buddhist Sanctuary
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Crown className="w-4 h-4 mr-2" />
              Sacred Tooth Relic
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              UNESCO World Heritage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Royal Palace Complex
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Detailed Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">The Sacred Heart of Buddhist Sri Lanka</h2>
          <div className="prose prose-xl max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed">
              In the heart of Kandy, nestled beside the serene waters of Kandy Lake and surrounded by misty hills,
              stands the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) - the most revered Buddhist temple in
              Sri Lanka and one of the most sacred sites in the Buddhist world. This magnificent temple complex, with
              its golden roofs gleaming in the tropical sun and intricate architecture reflecting centuries of royal
              patronage, houses what Buddhists believe to be the left canine tooth of Lord Buddha himself, making it a
              pilgrimage destination of unparalleled spiritual significance.
            </p>
            <p className="text-lg mb-6">
              The temple&apos;s history spans over 1,600 years, beginning when the sacred tooth relic was brought to Sri
              Lanka in 313 CE, hidden in the hair of Princess Hemamali who fled the destruction of Kalinga in ancient
              India. Since that momentous arrival, the tooth relic has been the symbol of sovereignty in Sri Lanka - it
              was believed that whoever possessed the relic had the divine right to rule the island. This sacred
              connection between the relic and royal power shaped Sri Lankan history for centuries, with successive
              kingdoms building increasingly magnificent temples to house this most precious of Buddhist relics.
            </p>
            <p className="text-lg mb-6">
              The current temple complex, built during the Kandyan Kingdom period (1687-1815), represents the pinnacle
              of traditional Sri Lankan architecture and craftsmanship. Every element of the temple - from the
              intricately carved wooden pillars and painted ceilings to the golden lotus-shaped roof and precious stone
              inlays - was designed to create a dwelling worthy of housing Buddha&apos;s relic. The temple is not just a
              religious site but a masterpiece of art, architecture, and cultural heritage that tells the story of Sri
              Lankan Buddhist civilization.
            </p>
            <p className="text-lg">
              Today, the Temple of the Tooth continues to be the spiritual center of Sri Lankan Buddhism, attracting
              millions of pilgrims and visitors from around the world. The daily rituals, ancient ceremonies, and the
              famous Esala Perahera festival that culminates here make this temple a living, breathing center of
              Buddhist devotion where ancient traditions continue unchanged in the modern world. The temple complex also
              houses museums, libraries, and cultural centers that preserve and showcase the rich heritage of Buddhist
              Sri Lanka.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-yellow-300 dark:border-yellow-600">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Enhanced Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-yellow-200 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Crown className="w-8 h-8 text-yellow-500" />
                Essential Temple Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-yellow-700 dark:text-yellow-300 mb-4">Sacred Heritage</h4>
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Relic:</strong> Buddha&apos;s Sacred Tooth (313 CE)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Status:</strong> UNESCO World Heritage Site
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Significance:</strong> Most sacred Buddhist site
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Location:</strong> Central Kandy, beside lake
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-blue-700 dark:text-blue-300 mb-4">Architecture & Art</h4>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Style:</strong> Traditional Kandyan architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Features:</strong> Golden roof, carved pillars
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Artwork:</strong> Ancient frescoes and carvings
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-gold-500" />
                    <span>
                      <strong>Period:</strong> 1687-1815 (Kandyan era)
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-purple-700 dark:text-purple-300 mb-4">Visitor Information</h4>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Hours:</strong> 5:30 AM - 8:00 PM daily
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Dress Code:</strong> Conservative, white preferred
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Photography:</strong> Restricted in inner chambers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Best Time:</strong> Early morning or evening
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Temple Experience */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">The Sacred Temple Experience</h2>

          <div className="space-y-12">
            {/* The Sacred Tooth Relic */}
            <Card className="overflow-hidden border-2 border-yellow-200 dark:border-yellow-700">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30">
                <CardTitle className="text-2xl text-yellow-800 dark:text-yellow-300">The Sacred Tooth Relic Chamber</CardTitle>
                <CardDescription className="text-lg text-yellow-600 dark:text-yellow-400">
                  The holiest shrine in Buddhist Sri Lanka
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Golden shrine chamber housing the sacred tooth relic with ornate decorations"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      At the heart of the temple complex lies the most sacred space in Sri Lankan Buddhism - the inner
                      chamber where the Sacred Tooth Relic is enshrined. This golden sanctuary, accessible only to the
                      highest-ranking monks and officials, contains a series of seven nested golden caskets, each more
                      precious than the last, with the tooth relic housed in the innermost casket made of pure gold and
                      encrusted with the finest gems from Sri Lanka&apos;s ancient mines.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The relic chamber itself is a masterpiece of religious art and architecture. The walls are covered
                      in intricate paintings depicting scenes from Buddha&apos;s life and the history of the tooth relic,
                      while the ceiling features elaborate lotus designs symbolizing spiritual purity. The golden shrine
                      that houses the caskets is surrounded by offerings of flowers, incense, and precious objects
                      donated by devotees over centuries.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      While visitors cannot see the actual tooth relic (it&apos;s only displayed on very rare occasions), the
                      spiritual atmosphere in the chamber is overwhelming. The constant chanting of monks, the fragrance
                      of jasmine and frangipani flowers, and the soft glow of oil lamps create an environment of
                      profound reverence that has remained unchanged for over 1,300 years.
                    </p>

                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">Sacred Chamber Experience:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Daily Rituals:</strong> Three puja ceremonies at 5:30 AM, 9:30 AM, and 6:30 PM
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Offerings:</strong> Lotus flowers, jasmine, and traditional oil lamps
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Chanting:</strong> Ancient Pali verses and traditional Buddhist hymns
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Architecture:</strong> Seven-story golden shrine with precious gem inlays
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Spiritual Atmosphere:</strong> Profound sense of reverence and ancient devotion
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Raja Tusker Museum */}
            <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-600">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50">
                <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Raja Tusker Museum - Honoring Sacred Elephants</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                  Tribute to the majestic elephants of Esala Perahera
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Within the temple complex stands a unique and deeply moving museum dedicated to the sacred
                      elephants that have carried the tooth relic casket during the famous Esala Perahera procession.
                      The Raja Tusker Museum houses the preserved remains of the most revered elephants in Sri Lankan
                      history, including the legendary Raja, who carried the sacred casket for over 50 years and became
                      a beloved figure throughout the island.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The museum&apos;s centerpiece is the preserved body of Raja, the most famous tusker in Sri Lankan
                      history, who died in 1988 after decades of faithful service. Raja was not just an elephant - he
                      was considered a sacred being, blessed with the honor of carrying Buddha&apos;s relic. His
                      intelligence, gentle nature, and majestic presence made him a beloved figure who drew crowds
                      wherever he appeared. The museum preserves his memory with dignity and reverence.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond Raja, the museum tells the story of the sacred relationship between elephants and Buddhism
                      in Sri Lanka. Interactive displays explain the training, care, and spiritual significance of these
                      magnificent animals, while photographs and artifacts document the history of elephant
                      participation in religious ceremonies dating back over 2,000 years.
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Museum Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Raja&apos;s Remains:</strong> Preserved body of the legendary tusker (1913-1988)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Historical Artifacts:</strong> Ceremonial decorations and elephant regalia
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Photo Gallery:</strong> Decades of Perahera procession memories
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Educational Displays:</strong> Elephant training and care traditions
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Cultural Context:</strong> Role of elephants in Buddhist ceremonies
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Raja Tusker Museum displaying preserved elephant and ceremonial decorations"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Temple Architecture & Art */}
            <Card className="overflow-hidden border-2 border-purple-200 dark:border-purple-700">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-300">Architectural Masterpiece & Sacred Art</CardTitle>
                <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                  Kandyan craftsmanship at its finest
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Intricate wooden carvings and painted ceilings inside the temple"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The Temple of the Tooth represents the pinnacle of traditional Kandyan architecture, where every
                      element has been crafted with meticulous attention to both aesthetic beauty and spiritual
                      symbolism. The temple&apos;s distinctive features include the golden roof that gleams like a beacon
                      across Kandy, intricate wooden pillars carved by master craftsmen, and painted ceilings that tell
                      the story of Buddhism through vibrant colors and symbolic imagery.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The temple&apos;s wooden architecture is particularly remarkable, featuring pillars carved from single
                      pieces of timber and decorated with traditional motifs including lotus flowers, elephants, and
                      mythical creatures. The craftsmanship represents skills passed down through generations of Kandyan
                      artisans, with techniques that have remained unchanged for centuries. The intricate joinery work
                      was done without nails, using traditional methods that have allowed these structures to survive
                      for over 300 years.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The painted artwork throughout the temple complex depicts scenes from Buddha&apos;s life, Jataka tales
                      (stories of Buddha&apos;s previous lives), and the history of Buddhism in Sri Lanka. These paintings,
                      created using natural pigments and traditional techniques, serve both as decoration and as visual
                      teachings for devotees. The colors remain vibrant despite centuries of tropical weather, testament
                      to the skill of ancient artists.
                    </p>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Architectural Features:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Golden Roof:</strong> Traditional Kandyan-style roof with gold-plated tiles
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Carved Pillars:</strong> Intricate woodwork featuring traditional motifs
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Painted Ceilings:</strong> Vibrant frescoes depicting Buddhist stories
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Stone Work:</strong> Moonstone entrances and guard stones
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Layout:</strong> Traditional Buddhist temple design with multiple courtyards
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

        {/* Esala Perahera Festival */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">The Magnificent Esala Perahera Festival</h2>
          <Card className="border-2 border-orange-200 dark:border-orange-700">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30">
              <CardTitle className="text-2xl text-orange-700 dark:text-orange-300">World&apos;s Most Spectacular Buddhist Festival</CardTitle>
              <CardDescription>Annual procession celebrating the Sacred Tooth Relic</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-3">Festival Overview & History</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The Esala Perahera, held annually during the full moon of August (Esala month), is one of Asia&apos;s most spectacular religious
                      festivals and the grandest celebration in Sri Lanka. This magnificent 10-day festival has been celebrated for over 1,600 years,
                      beginning when the Sacred Tooth Relic first arrived in Sri Lanka in 313 CE. What started as a simple religious procession has
                      evolved into an extraordinary cultural extravaganza that showcases the finest traditions of Sri Lankan art, music, dance, and
                      religious devotion.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      The festival serves multiple purposes: it honors the Sacred Tooth Relic, celebrates the monsoon rains essential for agriculture,
                      and preserves ancient cultural traditions that might otherwise be lost. For ten magical nights, the streets of Kandy transform
                      into a living museum of Sri Lankan heritage, as performers wearing costumes passed down through generations recreate ceremonies
                      that have remained virtually unchanged since medieval times.
                    </p>
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                      Duration: 10 nights in August (Esala month) • UNESCO Recognized Cultural Heritage
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-lg mb-3">The Sacred Elephant Procession</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The centerpiece of the Esala Perahera is the majestic tusker elephant carrying the sacred golden casket (karaduwa) containing
                      a replica of the tooth relic. This magnificent animal, chosen for its size, temperament, and noble bearing, undergoes months
                      of special training and preparation. The elephant is adorned with intricate silk cloth embroidered with gold thread, elaborate
                      jewelry, and decorative lights that create a breathtaking spectacle against the night sky.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Behind the main tusker follow over 100 additional elephants, each representing different temples and cultural organizations
                      throughout Sri Lanka. These elephants, ranging from young calves to ancient matriarchs, are decorated according to traditional
                      styles specific to their regions, creating a diverse display of Sri Lankan elephant decoration traditions. The sight of these
                      gentle giants moving in perfect formation through the narrow streets of Kandy is both humbling and awe-inspiring.
                    </p>
                    <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                      Best viewing: Temple grounds, Dalada Veediya, and Queen&apos;s Hotel area
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-lg mb-3">Traditional Cultural Performances</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The Perahera showcases the finest traditional arts of Sri Lanka through performances that have been perfected over centuries.
                      Kandyan dancers, wearing elaborate costumes with silver ornaments and colorful silk, perform acrobatic dances that tell stories
                      from Buddhist Jataka tales. Their movements, synchronized with the rhythmic beating of traditional drums, create a mesmerizing
                      display of physical artistry and spiritual devotion.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Fire dancers create spectacular displays against the night sky, spinning burning torches in patterns that represent the
                      triumph of light over darkness. The haunting melodies of traditional instruments - including the gata bera drums, dawula
                      drums, and conch shells - fill the air with sounds that have accompanied these ceremonies for over a millennium. Each
                      performance group represents different regions of Sri Lanka, showcasing the incredible diversity of the island&apos;s cultural heritage.
                    </p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                      Performances: Kandyan dance, fire displays, traditional music, and folk theater
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <Image
                    src="/Kandy-Esela-Perahara.jpg"
                    alt="Esala Perahera procession with decorated elephants and traditional dancers illuminated by torchlight"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Festival Highlights:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Over 100 magnificently decorated elephants from across Sri Lanka</li>
                      <li>• 1,000+ traditional dancers in authentic costumes</li>
                      <li>• Sacred casket procession through historic Kandy streets</li>
                      <li>• Spectacular fire performances and acrobatic displays</li>
                      <li>• Ancient drumming traditions dating back 1,000+ years</li>
                      <li>• Whip crackers clearing the path for the sacred procession</li>
                      <li>• Traditional flag bearers and ceremonial umbrella holders</li>
                      <li>• Spectacular finale water cutting ceremony at Kandy Lake</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-700">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Ten Days of Celebration:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Days 1-5 (Kumbal Perahera):</strong> Smaller processions building anticipation</li>
                      <li>• <strong>Days 6-10 (Randoli Perahera):</strong> Grand processions with full splendor</li>
                      <li>• <strong>Final Day:</strong> Day procession and water cutting ceremony</li>
                      <li>• <strong>Each Night:</strong> Procession starts at around 7:00 PM, lasts 5-6 hours</li>
                      <li>• <strong>Route:</strong> 3km circuit through historic Kandy streets (Routes may vary each year)</li>
                      <li>• <strong>Participants:</strong> 5,000+ performers and officials</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Detailed Festival Components */}
              <div className="mt-8 space-y-6">
                <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-300">Understanding the Sacred Procession</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-orange-200 dark:border-orange-700">
                    <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
                      <CardTitle className="text-lg text-orange-700 dark:text-orange-300">The Four Devales</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        The procession includes four Hindu temples (devales) that honor the guardian deities of Sri Lanka:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Natha Devale:</strong> Dedicated to Bodhisattva Avalokiteshvara</li>
                        <li>• <strong>Vishnu Devale:</strong> Honoring Lord Vishnu, protector of Buddhism</li>
                        <li>• <strong>Kataragama Devale:</strong> Dedicated to God Skanda/Murugan</li>
                        <li>• <strong>Pattini Devale:</strong> Honoring Goddess Pattini</li>
                      </ul>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                        Each devale contributes its own elephant procession and dancers
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-200 dark:border-yellow-700">
                    <CardHeader className="bg-yellow-50 dark:bg-yellow-900/20">
                      <CardTitle className="text-lg text-yellow-700 dark:text-yellow-300">Traditional Performers</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Specialized performer groups maintain ancient traditions:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Perahera Dancers:</strong> Acrobatic Kandyan-style performances</li>
                        <li>• <strong>Fire Dancers:</strong> Torch spinning and flame manipulation</li>
                        <li>• <strong>Drummers:</strong> Traditional gata bera and dawula rhythms</li>
                        <li>• <strong>Whip Crackers:</strong> Clear the path with ceremonial whips</li>
                        <li>• <strong>Flag Bearers:</strong> Carry colorful silk banners</li>
                        <li>• <strong>Conch Blowers:</strong> Create sacred sounds</li>
                      </ul>
                      <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                        Many families have performed for generations
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-700">
                    <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
                      <CardTitle className="text-lg text-purple-700 dark:text-purple-300">Sacred Rituals</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Ancient ceremonies performed during the festival:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Kap Cutting:</strong> Sacred tree cutting ceremony</li>
                        <li>• <strong>Water Cutting:</strong> Final day ritual at Kandy Lake</li>
                        <li>• <strong>Coconut Ceremony:</strong> Breaking coconuts for blessings</li>
                        <li>• <strong>Flag Hoisting:</strong> Sacred flags raised at devales</li>
                        <li>• <strong>Perahera Route:</strong> Blessing the procession path</li>
                        <li>• <strong>Elephant Blessing:</strong> Sacred rituals for elephants</li>
                      </ul>
                      <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                        Each ritual has deep spiritual significance
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Visitor Information */}
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-4">Planning Your Perahera Experience</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Best Viewing Locations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• <strong>Temple of the Tooth:</strong> Starting point, most sacred atmosphere</li>
                      <li>• <strong>Dalada Veediya:</strong> Main street with excellent visibility</li>
                      <li>• <strong>Queen&apos;s Hotel Balcony:</strong> Premium paid seating (book early)</li>
                      <li>• <strong>Kandy Lake:</strong> Final ceremony viewing area</li>
                      <li>• <strong>Side Streets:</strong> Less crowded but still good views</li>
                    </ul>
                    
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Ticket Information</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Free Viewing:</strong> Street sides (arrive 3+ hours early)</li>
                      <li>• <strong>Paid Seating:</strong> Hotel balconies and stands ($50-200)</li>
                      <li>• <strong>VIP Experience:</strong> Premium locations with refreshments</li>
                      <li>• <strong>Photography Passes:</strong> Special access for professionals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Essential Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• <strong>Arrive Early:</strong> 2-3 hours before procession starts</li>
                      <li>• <strong>Bring Water & Snacks:</strong> Long wait times expected</li>
                      <li>• <strong>Wear Comfortable Shoes:</strong> Lots of standing and walking</li>
                      <li>• <strong>Respect Sacred Elements:</strong> Stand when casket passes</li>
                      <li>• <strong>Be Patient:</strong> Crowds are large but friendly</li>
                    </ul>
                    
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Accommodation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Book 6+ Months Ahead:</strong> Hotels fill up completely</li>
                      <li>• <strong>Premium Properties:</strong> Queen&apos;s Hotel, Hotel Suisse</li>
                      <li>• <strong>Budget Options:</strong> Guesthouses outside city center</li>
                      <li>• <strong>Alternative:</strong> Day trips from Colombo or other cities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* More Details Button */}
              <div className="mt-8 text-center">
                <a 
                  href="/blog/Kandy-esela-perahara"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Crown className="w-5 h-5" />
                  Explore Complete Esala Perahera Guide
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Discover detailed history, cultural significance, participant profiles, and insider tips for experiencing this magnificent festival
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Visiting Information */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Planning Your Sacred Journey</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-blue-200 dark:border-blue-700">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/30 dark:to-sky-900/30">
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">Visiting Guidelines & Etiquette</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300">Dress Code & Behavior</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border-l-4 border-blue-500 dark:border-blue-400">
                      <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">Required Attire:</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        Conservative clothing covering shoulders and knees. White clothing is preferred and shows
                        respect. Remove shoes and hats before entering.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border-l-4 border-green-500 dark:border-green-400">
                      <p className="font-medium text-green-700 dark:text-green-300 mb-1">Respectful Behavior:</p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Maintain silence in sacred areas, don&apos;t point feet toward Buddha statues, join hands in prayer
                        position when appropriate.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded border-l-4 border-purple-500 dark:border-purple-400">
                      <p className="font-medium text-purple-700 dark:text-purple-300 mb-1">Photography Rules:</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        Photography prohibited in inner shrine rooms. Allowed in courtyards and museum areas with
                        respect for other devotees.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300">Best Times to Visit</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Morning Puja (5:30-6:30 AM):</strong> Most sacred ceremony, fewer crowds
                    </p>
                    <p>
                      <strong>Evening Puja (6:30-7:30 PM):</strong> Beautiful atmosphere with oil lamps
                    </p>
                    <p>
                      <strong>Weekdays:</strong> Less crowded than weekends and holidays
                    </p>
                    <p>
                      <strong>Esala Season (August):</strong> Festival time but very crowded
                    </p>
                    <p>
                      <strong>Full Moon Days:</strong> Special significance but expect large crowds
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300">What to Bring</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Offerings:</strong> Lotus flowers, jasmine, or white flowers
                    </p>
                    <p>
                      <strong>Footwear:</strong> Easy-to-remove shoes or sandals
                    </p>
                    <p>
                      <strong>Clothing:</strong> Extra covering if needed
                    </p>
                    <p>
                      <strong>Respect:</strong> Open mind and heart for spiritual experience
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 dark:border-green-700">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30">
                <CardTitle className="text-2xl text-green-700 dark:text-green-300">Getting There & Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Transportation</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>From Colombo:</strong> 3-hour drive or train journey to Kandy
                    </p>
                    <p>
                      <strong>Local Transport:</strong> Walking distance from Kandy city center
                    </p>
                    <p>
                      <strong>Parking:</strong> Limited; use public transport when possible
                    </p>
                    <p>
                      <strong>Accessibility:</strong> Wheelchair accessible areas available
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Nearby Attractions</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border-l-4 border-green-500 dark:border-green-400">
                      <p className="font-medium text-green-700 dark:text-green-300 mb-1">Kandy Lake:</p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Beautiful lake for peaceful walks, just beside the temple
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border-l-4 border-blue-500 dark:border-blue-400">
                      <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">Royal Botanical Gardens:</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">World-famous gardens 15 minutes from temple</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded border-l-4 border-purple-500 dark:border-purple-400">
                      <p className="font-medium text-purple-700 dark:text-purple-300 mb-1">Kandy Cultural Center:</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">Traditional dance performances every evening</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Accommodation</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Luxury Hotels:</strong> Several 5-star options overlooking the lake
                    </p>
                    <p>
                      <strong>Boutique Hotels:</strong> Colonial-era properties with character
                    </p>
                    <p>
                      <strong>Budget Options:</strong> Guesthouses and hostels in city center
                    </p>
                    <p>
                      <strong>Booking Tip:</strong> Reserve early during Perahera season
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Inspirational Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-700 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-yellow-800 dark:text-yellow-300 mb-4">
                Experience the Sacred Heart of Buddhist Sri Lanka
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Temple of the Sacred Tooth Relic offers more than just a tourist experience - it provides a
                  profound spiritual journey into the heart of Buddhist devotion and Sri Lankan culture. Whether you
                  come as a pilgrim seeking spiritual enlightenment or as a traveler interested in cultural heritage,
                  this sacred temple will touch your soul and provide memories that last a lifetime.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the golden shrine housing Buddha&apos;s sacred relic to the moving tribute to Raja and other sacred
                  elephants, from the magnificent Esala Perahera festival to the daily rituals that have continued
                  unchanged for centuries, every aspect of your visit will deepen your understanding of Buddhism and Sri
                  Lankan culture.
                </p>
                <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl border border-yellow-200 dark:border-gray-600 mt-8">
                  <p className="text-xl font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    Discover the sacred majesty of the Temple of the Tooth! 🏛️👑🙏✨
                  </p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    Where ancient devotion meets timeless beauty in the heart of Kandy
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
