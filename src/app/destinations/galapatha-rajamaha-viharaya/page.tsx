import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Sparkles, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Galapatha Raja Maha Viharaya Bentota: Complete Guide 2025 | Sacred Relics & Annual Perahera",
  description:
    "Discover Galapatha Raja Maha Viharaya in Bentota, home to sacred relics of Chief Disciples Sariputta and Moggallana, famous stone inscription (Sila Lekhana), and vibrant annual perahera. Complete travel guide.",
  keywords:
    "Galapatha Viharaya, Bentota temple, Sariputta Moggallana relics, Galapatha perahera, Sila Lekhana stone inscription, Buddhist temples Bentota, sacred relics Sri Lanka, Galapata Raja Maha Viharaya",
  openGraph: {
    title: "Galapatha Raja Maha Viharaya: Complete Guide 2025",
    description: "Your ultimate guide to the sacred temple housing relics of Buddha's chief disciples in Bentota",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function GalapathaViharayaTravelGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Galapatha Raja Maha Viharaya temple complex in Bentota with golden dagoba and sacred relic chamber"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Galapatha Raja Maha Viharaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Temple of the Chief Disciples&apos; Relics</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Bentota, Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Sparkles className="w-4 h-4 mr-1" />
              Sacred Relics
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              Over 2,000 Years Old
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#how-to-get-there" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
          <a href="#sacred-treasures" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sacred Treasures</a>
          <a href="#perahera" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Annual Perahera</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sample Itinerary</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Galapatha Raja Maha Viharaya: A Sacred Buddhist Sanctuary</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Located in the coastal town of Bentota in Sri Lanka&apos;s Southern Province, Galapatha Raja Maha Viharaya is one of the most spiritually significant Buddhist temples in the country. This ancient temple, with a history spanning over 2,000 years, holds an extraordinary treasure that makes it a major pilgrimage destination - sacred relics of Sariputta (Sariputta Thera) and Moggallana (Maha Moggallana Thera), the two chief disciples of Lord Buddha himself.
            </p>
            <p className="text-lg mb-4">
              The temple&apos;s name &quot;Galapatha&quot; comes from the Sinhala words meaning &quot;stone inscription,&quot; referring to the famous ancient stone slab inscription (Sila Lekhana) found here that dates back to the 12th century. This historical inscription provides valuable information about land grants and the temple&apos;s ancient administration, making it not only a religious site but also an important archaeological treasure that helps us understand Sri Lanka&apos;s medieval period.
            </p>
            <p className="text-lg">
              Beyond its sacred relics and historical inscriptions, Galapatha Raja Maha Viharaya is famous for its vibrant annual perahera (religious procession) held in February, which attracts thousands of devotees and visitors from across Sri Lanka and beyond. The temple complex, with its gleaming golden dagoba, beautiful murals, ancient Bo tree, and peaceful atmosphere just a short distance from Bentota&apos;s beaches, offers visitors a perfect blend of spiritual enrichment, cultural immersion, and historical discovery in a serene coastal setting.
            </p>
          </div>
        </section>


        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Galapatha Viharaya Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Founded:</strong> Over 2,000 years ago (pre-Christian era)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Sacred Relics:</strong> Sariputta & Moggallana (Chief Disciples)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Annual Perahera:</strong> February (major pilgrimage event)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Bentota, Galle District
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous For:</strong> Stone inscription (Sila Lekhana)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 1-2 hours
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/placeholder.svg?height=80&width=120"
                      alt="Sacred relics chamber at Galapatha Viharaya"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Home to Buddha&apos;s Chief Disciples&apos; Relics</p>
                      <p className="text-sm text-blue-800">
                        Galapatha Viharaya is one of the rare temples in the world that houses authentic relics of both Sariputta and Moggallana, Buddha&apos;s two chief disciples known for their wisdom and supernatural powers. These sacred relics make the temple one of the most important pilgrimage sites in Sri Lanka.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1-2 hours to explore the temple, view relics, see the stone inscription, and experience the peaceful atmosphere.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">Year-round. December for the perahera festival. Early morning (6-8 AM) for peaceful worship and meditation.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Galapatha */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Galapatha Viharaya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Bentota Town (Closest)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 3 km (2 miles) inland</li>
                      <li>• <strong>Duration:</strong> 5-10 minutes</li>
                      <li>• <strong>Cost:</strong> $3-5 USD by tuk-tuk</li>
                      <li>• <strong>Best option:</strong> Very convenient from beach hotels</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">From Colombo</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 65 km (40 miles)</li>
                      <li>• <strong>Duration:</strong> 1.5 hours via Southern Expressway</li>
                      <li>• <strong>Cost:</strong> $40-60 USD by taxi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Station:</strong> Bentota Railway Station</li>
                      <li>• <strong>From Colombo:</strong> 1.5-2 hours on coastal line</li>
                      <li>• <strong>Then:</strong> 10 min tuk-tuk to temple</li>
                      <li>• <strong>Scenic route:</strong> Beautiful coastal views</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">From Galle</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 30 km (19 miles) north</li>
                      <li>• <strong>Duration:</strong> 40 minutes</li>
                      <li>• <strong>Route:</strong> Along scenic Galle Road</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Perfect day trip from Bentota beach resorts</li>
                    <li>• Combine with water sports and beach activities</li>
                    <li>• Most tuk-tuk drivers know the temple well</li>
                    <li>• Plan visit during perahera season (February) for festivities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sacred Treasures */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="sacred-treasures">Sacred Treasures & Historical Significance</h2>

          <div className="space-y-8">
            {/* Sacred Relics */}
            <Card>
              <CardHeader>
                <CardTitle>1. Sacred Relics of Sariputta and Moggallana</CardTitle>
                <CardDescription>Holy remains of Buddha&apos;s two chief disciples</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sacred relic chamber containing relics of Sariputta and Moggallana at Galapatha Viharaya"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The most precious treasures of Galapatha Raja Maha Viharaya are the sacred relics (sarira dhatu) of Venerable Sariputta and Venerable Moggallana, the two foremost disciples of Lord Buddha. Sariputta was renowned as the wisest disciple, possessing the greatest understanding of Buddha&apos;s teachings, while Moggallana was celebrated for his supernatural powers and psychic abilities. Both attained enlightenment during Buddha&apos;s lifetime and played crucial roles in establishing the Buddhist sangha (monastic community).
                    </p>
                    <p className="text-muted-foreground mb-4">
                      These sacred relics are housed in a special chamber within the temple and are shown to devotees during important religious occasions. According to Buddhist tradition, these relics were brought to Sri Lanka centuries ago and have been preserved with the greatest reverence. The presence of these relics makes Galapatha one of the most important pilgrimage sites for Buddhists worldwide, as only a handful of temples possess authentic relics of these great disciples.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-400 dark:border-purple-600 mt-4">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-100 mb-2">Spiritual Significance</h4>
                      <p className="text-sm text-purple-700 dark:text-gray-200">Buddhists believe that paying homage to these relics brings immense merit and blessings. Many devotees visit the temple to meditate near the relic chamber and offer flowers, incense, and oil lamps in devotion.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic relics of Buddha&apos;s two chief disciples
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Preserved for over 2,000 years
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Displayed during special religious occasions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Major pilgrimage destination for Buddhists
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stone Inscription */}
            <Card>
              <CardHeader>
                <CardTitle>2. Ancient Stone Inscription (Sila Lekhana)</CardTitle>
                <CardDescription>12th century archaeological treasure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      One of the most historically valuable features of Galapatha Viharaya is its famous ancient stone inscription, known as &quot;Sila Lekhana&quot; (stone writing). This remarkable stone slab inscription dates back to the 12th century during the reign of King Parakramabahu I, one of Sri Lanka&apos;s greatest monarchs. The inscription is carved in beautiful ancient Sinhala script and provides fascinating details about land grants, temple administration, and the religious practices of medieval Sri Lanka.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The stone inscription records how the king granted lands and villages to support the temple and its monastic community. It mentions the boundaries of these lands, the duties of those living on temple property, and the religious services that were to be performed. For historians and archaeologists, this inscription is an invaluable source of information about Sri Lanka&apos;s feudal system, temple economics, and medieval Buddhist society. The temple takes its name from this important stone inscription.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-400 dark:border-amber-600 mt-4">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-100 mb-2">Historical Value</h4>
                      <p className="text-sm text-amber-700 dark:text-gray-200">The inscription is considered one of the finest examples of medieval Sinhala epigraphy. Scholars and history enthusiasts can still read parts of this ancient text today.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        12th century stone inscription from King Parakramabahu era
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Records land grants and temple administration
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful ancient Sinhala script
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important archaeological and historical artifact
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ancient stone inscription (Sila Lekhana) with 12th century Sinhala script at Galapatha temple"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Main Dagoba */}
            <Card>
              <CardHeader>
                <CardTitle>3. Golden Dagoba and Temple Architecture</CardTitle>
                <CardDescription>Beautiful stupa and traditional design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Golden dagoba stupa at Galapatha Raja Maha Viharaya gleaming in sunlight"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The centerpiece of the temple complex is the magnificent golden dagoba (stupa), which gleams brilliantly in the tropical sun. This beautifully proportioned stupa was built to enshrine sacred relics and follows traditional Sri Lankan Buddhist architectural principles. The dome sits on a square base with four vahalkadas (frontispieces) facing the cardinal directions, and the entire structure is crowned with a traditional spire decorated with metal rings.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The temple complex also includes several shrine rooms housing Buddha statues, colorful murals depicting scenes from Buddha&apos;s life and Jataka stories, a sacred Bo tree (descended from the original Bodhi tree under which Buddha attained enlightenment), and various smaller shrines dedicated to protective deities. The architecture reflects the traditional Kandyan style mixed with coastal influences, creating a unique aesthetic that has been maintained through careful restoration over the centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful golden dagoba with traditional design
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colorful murals and Buddha statues
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sacred Bo tree and meditation areas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional Kandyan architectural elements
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Annual Perahera */}
        <section className="mb-12 scroll-mt-40" id="perahera">
          <h2 className="text-3xl font-bold mb-6">Galapatha Perahera: Annual Festival Celebration</h2>
          
          <Card className="border-l-4 border-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-orange-500" />
                The Vibrant Galapatha Perahera
              </CardTitle>
              <CardDescription>One of Sri Lanka&apos;s most colorful temple festivals held every February</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Image
                    src="/Galapatha-Perahara.jpeg"
                    alt="Galapatha Perahera procession with elephants, dancers, and drummers"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Every year in February, Galapatha Raja Maha Viharaya comes alive with one of the most spectacular religious festivals on Sri Lanka&apos;s west coast - the Galapatha Perahera. This week-long celebration attracts thousands of devotees and spectators from across the country who come to witness the magnificent procession and participate in the religious observances honoring the sacred relics housed in the temple.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The perahera (procession) is a dazzling spectacle of color, sound, and devotion. Beautifully decorated elephants adorned with colorful garments and LED lights carry sacred caskets representing the relics. They are accompanied by traditional Kandyan dancers performing acrobatic moves, fire dancers twirling flaming torches, drummers beating traditional drums (dawula and thammattama), and whip crackers whose sharp sounds cut through the night air. The procession winds through the streets of Bentota, creating an unforgettable atmosphere of celebration and spirituality.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-orange-800 dark:text-orange-100 mb-4">Perahera Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Decorated elephants:</strong> 20-30 elephants in ornate costumes with LED lights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Traditional dancers:</strong> Kandyan, low-country, and Sabaragamuwa styles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Drummers:</strong> Hundreds of traditional drummers in formation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Fire dancers:</strong> Spectacular fire performances and torch bearers</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Duration:</strong> 7-10 nights of processions in February</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Best viewing:</strong> Along the main procession route in Bentota</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Timing:</strong> Evening processions start around 7-8 PM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Free entry:</strong> Public can watch from streets and designated areas</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-2">Planning Your Perahera Visit</h4>
                  <ul className="text-sm text-blue-700 dark:text-gray-200 space-y-2">
                    <li>• <strong>Book accommodation early:</strong> Hotels in Bentota fill up quickly during perahera season</li>
                    <li>• <strong>Arrive early:</strong> Get a good viewing spot along the procession route at least 1-2 hours before start time</li>
                    <li>• <strong>Bring necessities:</strong> Water, snacks, cushion to sit on, and insect repellent</li>
                    <li>• <strong>Dress respectfully:</strong> Modest clothing as it&apos;s a religious event</li>
                    <li>• <strong>Photography:</strong> Cameras welcome but be respectful and don&apos;t use flash on elephants</li>
                    <li>• <strong>Check exact dates:</strong> Perahera dates vary slightly each year, confirm before planning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sample Itinerary */}
        <section className="mb-12 scroll-mt-40" id="itinerary">
          <h2 className="text-3xl font-bold mb-6">Sample Itinerary</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Half-Day Temple Visit</CardTitle>
              <CardDescription>Perfect 2-3 hour experience from Bentota beach hotels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">8:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Depart from Hotel</h4>
                    <p className="text-sm text-muted-foreground">Leave your Bentota beach hotel by tuk-tuk or taxi. The short 5-10 minute ride takes you inland through local villages, offering glimpses of everyday Sri Lankan life.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">8:15 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Arrive at Temple</h4>
                    <p className="text-sm text-muted-foreground">Enter the temple grounds. Purchase a small flower offering at the entrance if you wish. Observe the peaceful morning atmosphere as local devotees perform their puja (worship rituals).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">8:30 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Worship at Sacred Bo Tree</h4>
                    <p className="text-sm text-muted-foreground">Start your visit at the sacred Bo tree. Light an oil lamp, offer flowers, and take a moment for quiet reflection. Walk clockwise around the tree as is customary.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">8:45 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit the Golden Dagoba</h4>
                    <p className="text-sm text-muted-foreground">Walk to the beautiful golden dagoba. Circumambulate the stupa three times clockwise while reflecting or meditating. Observe the traditional architectural details and decorations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">9:15 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">View Sacred Relics Chamber</h4>
                    <p className="text-sm text-muted-foreground">Visit the special chamber housing the relics of Sariputta and Moggallana. Offer your respects and light incense or candles. Spend time in meditation near this sacred space.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">9:45 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Explore Ancient Stone Inscription</h4>
                    <p className="text-sm text-muted-foreground">Look for the famous 12th century stone inscription (Sila Lekhana). Examine the ancient Sinhala script and imagine the historical significance. Ask a monk or guide about its history if available.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">10:15 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Return to Beach</h4>
                    <p className="text-sm text-muted-foreground">Return to your hotel feeling spiritually refreshed. Spend the rest of the day enjoying Bentota&apos;s beautiful beaches, water sports, or exploring the town.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions in Bentota</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bentota Beach</CardTitle>
                <CardDescription>3 km from temple (10 minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Beautiful golden sandy beach perfect for swimming, sunbathing, and water sports. Bentota is famous for jet skiing, banana boat rides, windsurfing, and parasailing. Calm waters make it ideal for families.
                </p>
                <Badge variant="outline" className="text-xs">10 min drive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Brief Garden by Bevis Bawa</CardTitle>
                <CardDescription>8 km from temple (15 minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Stunning landscape garden created by renowned Sri Lankan architect Bevis Bawa. The 5-acre garden features sculptures, tropical plants, and artistic touches throughout. A peaceful oasis of creativity.
                </p>
                <Badge variant="outline" className="text-xs">15 min drive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bentota River & Mangroves</CardTitle>
                <CardDescription>5 km from temple (10 minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Scenic boat safari through mangrove forests along Bentota River. Spot monitor lizards, birds, and learn about the unique mangrove ecosystem. Sunset cruises are particularly beautiful.
                </p>
                <Badge variant="outline" className="text-xs">10 min drive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kosgoda Turtle Hatchery</CardTitle>
                <CardDescription>10 km south (15 minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Sea turtle conservation project where you can see baby turtles, learn about conservation efforts, and watch the evening release of hatchlings into the ocean. Educational and heartwarming experience.
                </p>
                <Badge variant="outline" className="text-xs">15 min drive</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12 scroll-mt-40" id="visiting-guide">
          <h2 className="text-3xl font-bold mb-6">Essential Visiting Information</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Opening Hours & Entry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-sm">Opening Hours:</p>
                  <p className="text-sm text-muted-foreground">Daily: 6:00 AM - 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Best time: Early morning (6-9 AM)</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Entrance Fee:</p>
                  <p className="text-sm text-muted-foreground">Free entry (donations welcome)</p>
                  <p className="text-sm text-muted-foreground">Offerings: Flowers, oil lamps available for purchase</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Visit Duration:</p>
                  <p className="text-sm text-muted-foreground">1-2 hours for comprehensive visit</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Special Days:</p>
                  <p className="text-sm text-muted-foreground">Poya Days (Full Moon): Very crowded with devotees</p>
                  <p className="text-sm text-muted-foreground">February: Annual Perahera festival week</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  What to Bring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Modest clothing:</strong> Cover shoulders and knees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Footwear:</strong> Easy to remove (you&apos;ll be barefoot in temple)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Cash:</strong> For offerings and donations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Camera:</strong> Photography allowed in most areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Water bottle:</strong> Stay hydrated in tropical heat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Respectful attitude:</strong> This is an active place of worship</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Temple Etiquette */}
          <Card className="border-l-4 border-orange-500 mb-6">
            <CardHeader>
              <CardTitle className="text-orange-700 dark:text-orange-300">Temple Etiquette & Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">DO:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Dress modestly with shoulders and knees covered</li>
                    <li>✓ Remove shoes and hats before entering sacred areas</li>
                    <li>✓ Speak softly and move quietly</li>
                    <li>✓ Walk clockwise around dagobas and sacred objects</li>
                    <li>✓ Show respect to monks and devotees</li>
                    <li>✓ Keep your head lower than Buddha statues (never turn back)</li>
                    <li>✓ Make donations if you wish to support the temple</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">DON&apos;T:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✗ Point your feet at Buddha statues or monks</li>
                    <li>✗ Turn your back to Buddha images for photos</li>
                    <li>✗ Touch sacred objects without permission</li>
                    <li>✗ Wear revealing or inappropriate clothing</li>
                    <li>✗ Touch or pat monks (especially women)</li>
                    <li>✗ Smoke, drink alcohol, or eat in sacred areas</li>
                    <li>✗ Be loud or disruptive</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photography Guidelines */}
          <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">Photography Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>General Photography:</strong> Photography is generally allowed in most areas of the temple. The beautiful architecture, golden dagoba, and ancient inscriptions make excellent subjects. However, always be respectful and ask permission if unsure.
                </p>
                <p>
                  <strong>Sacred Areas:</strong> Some special areas, particularly the relic chamber during worship times, may have photography restrictions. Look for signs or ask temple authorities before photographing in these sensitive areas.
                </p>
                <p>
                  <strong>Monks and Devotees:</strong> Always ask permission before photographing monks or local devotees at prayer. Many will be happy to oblige, but respect is key. Never photograph people in vulnerable or personal worship moments.
                </p>
                <p>
                  <strong>Best Photography Times:</strong> Early morning (6-9 AM) offers the best light and fewer crowds. The golden dagoba looks stunning in morning sunlight. During perahera season, evening processions provide spectacular photo opportunities with elephants, dancers, and colorful costumes.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Visit Galapatha Raja Maha Viharaya?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="text-lg">Sacred Spiritual Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                One of the rare places in the world where you can pay homage to authentic relics of Buddha&apos;s chief disciples. The spiritual energy and devotion create a profoundly moving experience for both Buddhists and those interested in world religions.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Historical Treasure</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                The 12th century stone inscription (Sila Lekhana) provides a tangible connection to medieval Sri Lankan civilization. History enthusiasts can explore authentic archaeological artifacts and learn about the temple&apos;s 2,000-year legacy.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="text-lg">Cultural Celebration</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                The annual February perahera is a spectacular display of Sri Lankan culture with decorated elephants, traditional dancers, and fire performers. It&apos;s one of the best cultural festivals on the west coast and shouldn&apos;t be missed if timing allows.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl">Final Tips for Your Visit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Galapatha Raja Maha Viharaya offers a unique opportunity to combine beach relaxation with profound spiritual and cultural experiences. Just minutes from Bentota&apos;s beautiful beaches, this ancient temple provides a peaceful sanctuary where you can connect with Sri Lanka&apos;s Buddhist heritage and pay respects to sacred relics that have been venerated for over 2,000 years.
              </p>
              <p className="text-muted-foreground">
                Whether you&apos;re a Buddhist pilgrim, history enthusiast, or curious traveler, the temple welcomes all visitors with open arms. The combination of sacred relics, ancient inscriptions, beautiful architecture, and the vibrant annual perahera makes Galapatha a must-visit destination when exploring Sri Lanka&apos;s southwestern coast.
              </p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Best Visited As Part Of:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Bentota beach holiday (morning temple visit, afternoon at beach)</li>
                  <li>• West coast cultural tour (combine with Galle Fort, other temples)</li>
                  <li>• February perahera season (plan 2-3 days to experience the full festival)</li>
                  <li>• Day trip from Colombo (visit temple, Brief Garden, river safari)</li>
                  <li>• Southern coastal road trip (between Colombo and Galle)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Galapatha Viharaya?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let us help you plan your perfect Bentota experience including a visit to this sacred temple and all the best attractions along Sri Lanka&apos;s beautiful west coast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact-us" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Plan Your Trip
              </Button>
            </Link>
            <Link href="/destinations" passHref legacyBehavior>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore More Destinations
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
