import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Anuradhapura Sri Lanka: Complete Guide 2025 | Ancient Capital & Sacred City",
  description:
    "Explore Anuradhapura, Sri Lankas first capital and sacred Buddhist city. Complete guide to ancient ruins, sacred Bodhi tree, and UNESCO World Heritage sites.",
  keywords:
    "Anuradhapura, ancient capital Sri Lanka, sacred Bodhi tree, Buddhist temples, UNESCO World Heritage, ancient ruins, dagobas",
  openGraph: {
    title: "Anuradhapura: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lankas ancient sacred capital",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function AnuradhapuraTravelGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Ruwanwalisaya.jpeg"
          alt="Ancient Ruwanwelisaya dagoba in Anuradhapura with white dome against blue sky and pilgrims visiting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Anuradhapura</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Ancient Sacred Capital</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Sacred City
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              Founded 4th Century BC
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
          <a href="#sacred-sites" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sacred Sites</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sample Itinerary</a>
          <a href="#nearby-archaeological-wonders" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Archaeological Wonders</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Anuradhapura: Cradle of Buddhism</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step back 2,300 years into Sri Lankas glorious past at Anuradhapura, the islands first capital and one
              of the oldest continuously inhabited cities in the world. This UNESCO World Heritage site is not just an
              archaeological wonder - its the sacred heart of Sri Lankan Buddhism, home to the worlds oldest recorded
              tree and some of the most magnificent ancient monuments in Asia.
            </p>
            <p className="text-lg">
              From towering dagobas (stupas) that rival the pyramids in age and grandeur to the sacred Sri Maha Bodhi
              tree grown from a cutting of the very tree under which Buddha attained enlightenment, Anuradhapura offers
              a profound journey through both spiritual and temporal history that continues to inspire pilgrims and
              visitors from around the world.
            </p>
          </div>
        </section>


        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Anuradhapura Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Anuradhapura Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Founded:</strong> 4th Century BC
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Capital Period:</strong> 1,400 years (380 BC - 1017 AD)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Sacred Bodhi Tree:</strong> 2,300+ years old
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Area:</strong> 40 square kilometers
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage (1982)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> Full day (8+ hours)
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Gregory_Lake.jpg"
                      alt="Ancient reservoir in Anuradhapura, Sri Lanka"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Irrigation Marvels of the Ancient World</p>
                      <p className="text-sm text-blue-800">
                        Anuradhapura’s ancient engineers built massive reservoirs (tanks) like Nuwara Wewa and Tissa Wewa, some over 2,000 years old and still functioning today. These marvels turned the dry zone into a lush, thriving kingdom—an engineering legacy admired worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1–2 full days to explore the sacred sites, ancient tanks, and local culture at a relaxed pace.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May to September (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Anuradhapura */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Anuradhapura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 205km (127 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                      <li>• <strong>Cost:</strong> $60-90 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Anuradhapura. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 77 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✈️</span>
                          <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                            <strong>Airport Transfer Services</strong> - Click for details & booking
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Kurunegala → Anuradhapura</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Anuradhapura</li>
                      <li>• <strong>Duration:</strong> 5.5-6 hours</li>
                      <li>• <strong>Cost:</strong> $2-8 USD (depending on class)</li>
                      <li>• <strong>Scenic journey:</strong> Through countryside</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early morning to avoid traffic and heat</li>
                    <li>• Carry water and snacks for the journey</li>
                    <li>• Book accommodations in advance during peak season</li>
                    <li>• Consider staying overnight to explore all sites properly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sacred Sites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="sacred-sites">Sacred Sites & Ancient Monuments</h2>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-4">
              Local People piligimage to Anuradhapura as &quot;Atamasthana&quot; </h3>
            {/* Sri Maha Bodhi */}
            <Card>
              <CardHeader>
                <CardTitle>1. Sri Maha Bodhi Tree</CardTitle>
                <CardDescription>The worlds oldest recorded tree - 2,300+ years old</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/JayaSrimahaBodhi.jpeg"
                    alt="Sacred Sri Maha Bodhi tree in Anuradhapura with pilgrims offering prayers and white flags"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This sacred fig tree is the most revered site in Anuradhapura and one of the holiest places in the Buddhist world. Grown from a cutting of the original Bodhi tree in India under which Buddha attained enlightenment, it was brought to Sri Lanka in 288 BC by Sanghamitta Theri, the daughter of Emperor Ashoka. The tree has survived storms, invasions, and centuries of change, remaining a living symbol of peace and resilience.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Pilgrims from all over the world come to offer flowers, light oil lamps, and walk quietly around the golden railings. The air is filled with the scent of jasmine and the gentle sound of prayers. Visiting at dawn or dusk is especially magical, as the tree glows in the soft light and the atmosphere is calm and spiritual.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400 dark:border-yellow-600 mt-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-100 mb-2">Visitor Tip</h4>
                      <p className="text-sm text-yellow-700 dark:text-gray-200">Dress modestly, remove your shoes, and bring a small flower offering. Take a moment to sit quietly and reflect under the ancient branches.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Worlds oldest recorded tree with documented history
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Direct descendant of Buddhas enlightenment tree
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Continuous worship for over 2,300 years
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Protected by golden railings and platforms
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/jaya-sri-maha-bodhi" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ruwanwelisaya */}
            <Card>
              <CardHeader>
                <CardTitle>2. Ruwanwelisaya Dagoba</CardTitle>
                <CardDescription>The Great Stupa - architectural marvel of ancient world</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built by King Dutugemunu in 140 BC, this magnificent white dagoba stands 103 meters tall and is considered one of the finest examples of ancient Sinhalese architecture. The structure contains sacred relics of Buddha and remains an active pilgrimage site. The Ruwanwelisaya is surrounded by a wall of 344 stone elephants, each one unique, symbolizing strength and protection.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The stupa is especially beautiful at sunrise and sunset, when its white dome glows against the sky and the chanting of monks fills the air. During full moon (Poya) days, thousands of devotees gather here, creating a sea of white-clad pilgrims and colorful lotus flowers. Restoration efforts have kept the dagoba shining for generations to come.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 mt-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-2">Did You Know?</h4>
                      <p className="text-sm text-blue-700 dark:text-gray-200">The Ruwanwelisaya is believed to enshrine the largest collection of Buddha relics in Sri Lanka. Walk clockwise around the stupa for good luck and spiritual merit.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        103 meters tall with 292-meter circumference
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Contains sacred relics of Lord Buddha
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Surrounded by elephant wall with 344 elephants
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Restored to original glory in modern times
                      </li>
                    </ul>

                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/ruwanwali-saya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src="/Ruwanwalisaya.jpeg"
                    alt="Magnificent white Ruwanwelisaya dagoba with its distinctive dome shape and surrounding elephant wall"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Jetavanaramaya */}
            <Card>
              <CardHeader>
                <CardTitle>3. Jetavanaramaya Dagoba</CardTitle>
                <CardDescription>Once the worlds third tallest structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Jetavanaramaya.jpg"
                    alt="Massive Jethavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 3rd century AD, Jetavanaramaya was once the world’s third tallest structure after the pyramids of Giza. At its peak, it soared to 122 meters (400 feet) and was the tallest stupa in the ancient world. The massive brick monument is a testament to the engineering genius and spiritual devotion of ancient Sri Lanka.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Today, Jetavanaramaya is a place of quiet reflection, surrounded by grassy courtyards and ancient ruins. Archaeological excavations continue to reveal new secrets about the monastery complex that once housed thousands of monks. The stupa’s reddish bricks glow warmly in the afternoon sun, and the site is less crowded than other main attractions, making it perfect for peaceful exploration.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-400 dark:border-orange-600 mt-4">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Travel Tip</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-100">Bring water and a hat, as the area can be hot and exposed. Look for ancient inscriptions and carvings on the surrounding ruins.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Originally 122 meters tall (400 feet)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Built with over 93 million bricks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Contains Buddhas sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ongoing archaeological excavations
                      </li>
                    </ul>

                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/jethawanaramaya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>4. Thuparamaya Dagoba</CardTitle>
                <CardDescription>The first dagoba built in Sri Lanka - oldest Buddhist monument</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Thooparamaya.jpeg"
                    alt="Thuparamaya dagoba showing the first Buddhist stupa built in Sri Lanka with its unique bell shape"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Thuparamaya holds the distinction of being the very first dagoba built in Sri Lanka, constructed in the
                      3rd century BCE by King Devanampiya Tissa. This sacred monument houses the right collarbone relic of
                      Lord Buddha, making it one of the most important pilgrimage sites in the Buddhist world. The original
                      bell-shaped design has influenced Sri Lankan stupa architecture for over 2,000 years.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What makes Thuparamaya unique is its architectural evolution - it has been restored multiple times
                      throughout history, each restoration reflecting the artistic styles of different periods. The dagoba
                      is surrounded by stone pillars that once supported a wooden roof, a distinctive feature that sets
                      it apart from other stupas.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        First dagoba built in Sri Lanka (3rd century BCE)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />

                        Contains Buddha&apos;s right collarbone relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Original bell-shaped architectural prototype
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique stone pillar arrangement around the stupa
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple historical restorations spanning centuries
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/thuparamaya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>5. Lovamahapaya (Brazen Palace)</CardTitle>
                <CardDescription>Ancient nine-story monastery - marvel of ancient architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Lovamahapaya.jpeg"
                    alt="Lovamahapaya stone pillars showing remains of the ancient nine-story Brazen Palace monastery"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Lovamahapaya, also known as the &quot;Brazen Palace,&quot; was once a magnificent nine-story monastery built
                      by King Dutugemunu in the 2nd century BCE. This architectural marvel housed 1,000 monks and was
                      entirely covered with copper tiles, giving it the name &quot;Brazen Palace.&quot; Today, only the stone
                      pillars remain, but they still convey the grandeur of this ancient structure.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The building was constructed using advanced engineering techniques of the time, with 1,600 stone
                      pillars supporting multiple floors. Each floor had specific purposes - from dining halls and
                      meditation chambers to libraries and living quarters. The palace was destroyed and rebuilt several
                      times throughout history, with the current stone pillars representing the foundation of various
                      reconstruction attempts.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Originally nine stories tall with 1,600 stone pillars
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Housed 1,000 monks in its heyday
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Covered with copper tiles (hence &quot;Brazen Palace&quot;)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Advanced ancient engineering and architectural design
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple reconstruction attempts throughout history
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/lovamahapaya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>6. Abhayagiri Dagaba</CardTitle>
                <CardDescription>Ancient monastery complex and center of Mahayana Buddhism</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Abhayagiriya.jpeg"
                    alt="Abhayagiri dagoba showing the impressive stupa that was once part of a vast monastery complex"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Abhayagiri Dagaba was the centerpiece of one of the most important monastic complexes in ancient
                      Sri Lanka, built in the 1st century BCE by King Valagamba. This massive stupa, standing 75 meters
                      tall, was once part of a monastery that housed over 5,000 monks and served as a major center of
                      Mahayana Buddhist learning. The complex was so large it covered an area of 200 hectares.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The monastery was famous for its international character, attracting scholars from China, Korea,
                      and other Buddhist countries. It had advanced facilities including hospitals, libraries, and
                      refectories. The shape of this stupa is slightly different from Jetavanaramaya, featuring a more
                      elegant bell-shaped dome that has influenced Buddhist architecture across Asia.
                      <Link href="/destinations/anuradhapura/abhyagiri" className="text-blue-600 hover:underline ml-1">
                        Read more about Shapes of Stupa
                      </Link>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        75 meters tall with 200-hectare monastery complex
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Housed over 5,000 monks at its peak
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        International center of Mahayana Buddhist learning
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Advanced facilities: hospitals, libraries, refectories
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique architectural style influencing Asian Buddhism
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/abhayagiriya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>7. Mirisavetiya Stupa</CardTitle>
                <CardDescription>A monument of royal regret and Buddhist devotion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Mirisawatiya.jpeg"
                    alt="Mirisavetiya Stupa surrounded by ancient ruins and Buddhist statuary"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Mirisavetiya Stupa has one of the most poignant origin stories in Sri Lankan Buddhist history.
                      Built by King Dutugemunu in the 2nd century BCE, this stupa was constructed as an act of
                      atonement. According to legend, the king once forgot to share his meal with the sangha (monks)
                      while eating chili curry, a breach of Buddhist protocol that deeply troubled his conscience.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      To atone for this oversight, the king built this beautiful stupa on the exact spot where he
                      had his meal. The name &quot;Mirisavetiya&quot; literally means &quot;the place where chili was consumed.&quot;
                      Standing 60 meters tall, it enshrines sacred relics and represents the Buddhist principle
                      of mindfulness in daily actions. The surrounding area contains ruins of ancient buildings
                      and beautiful stone carvings.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Built as royal atonement for forgotten Buddhist protocol
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        60 meters tall with beautiful proportions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Contains sacred Buddhist relics
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Surrounded by ancient ruins and stone carvings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Symbol of mindfulness in Buddhist practice
                      </li>
                    </ul>

                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/mirisavatiya" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>8. Lankarama Dagaba</CardTitle>
                <CardDescription>An intimate forest monastery with unique architectural features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Lankaramaya.jpeg"
                    alt="Lankarama Dagaba nestled among trees showing its distinctive design and forest setting"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Lankarama Dagaba, built in the 1st century CE by King Valagamba, represents a unique architectural
                      style among Anuradhapura&apos;s great stupas. Unlike the massive monuments elsewhere in the city,
                      Lankarama was designed as an intimate forest monastery with distinctive circular stone pillars
                      surrounding the stupa. This 30-meter tall structure showcases the Vajrayana architectural
                      influence that was rare in Sri Lankan Buddhist construction.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The most striking feature of Lankarama is its unique design with stone pillars arranged in concentric
                      circles around the stupa base. These pillars once supported wooden structures that served as meditation
                      halls and living quarters for forest-dwelling monks. The peaceful forest setting and smaller scale
                      create an atmosphere perfect for contemplation and meditation, making it a favorite among visitors
                      seeking tranquility.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique circular stone pillar arrangement
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Intimate 30-meter forest monastery design
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Vajrayana architectural influence
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful forest setting for meditation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Built by King Valagamba in 1st century CE
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/lankarama" passHref legacyBehavior>
                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read more →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* More Sacred Sites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Sacred Sites</h2>
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Avukana Buddha Statue</CardTitle>
                <CardDescription>A stunning rock-cut statue of the Buddha in a serene meditation pose</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Avukana-statue.jpg"
                    alt="Avukana Buddha Statue showing its intricate details and serene expression"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Avukana Buddha Statue is a magnificent rock-cut statue located about 8 kilometers from
                      Anuradhapura. Carved out of a large granite rock face in the 5th century AD, this statue stands
                      approximately 12 meters tall and depicts the Buddha in a standing posture with his right hand
                      raised in the gesture of reassurance (abhaya mudra). The intricate details of the robe and
                      facial features showcase the exceptional craftsmanship of ancient Sri Lankan artisans.
                    </p>
                    <Link href="/destinations/anuradhapura/avukana-buddha" className="text-blue-600 hover:underline mb-4 inline-block">
                      If you want to know more about the gesture
                    </Link>
                    <p className="text-muted-foreground mb-4">
                      The statue is set against a natural rock backdrop, creating a striking contrast that enhances its
                      visual impact. The serene expression on the Buddha&apos;s face and the intricate details of the carving
                      invite contemplation and reflection.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Carved from a single granite rock face
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stands approximately 12 meters tall
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Depicts Buddha in abhaya mudra (gesture of reassurance)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Exceptional craftsmanship with intricate details
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Set against a natural rock backdrop for visual impact
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <Card>
            <CardHeader>
              <CardTitle>Sandahirusaya</CardTitle>
              <CardDescription>A smaller but equally sacred stupa with unique historical significance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <Image
                  src="/Sandahirusaya.jpeg"
                  alt="Sandahirusaya stupa showing its white dome structure similar to Ruwanwelisaya but smaller in scale"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <div>
                  <p className="text-muted-foreground mb-4">
                    If you visit Anuradhapura, you might have seen this stupa - it&apos;s similar to the Ruwanwelisaya but not as large.
                    Sandahirusaya, also known as &quot;Sandahiru Seya,&quot; is a beautiful white dagoba that showcases the classic
                    bell-shaped architectural style of ancient Sri Lankan stupas. This is actually a modern construction,
                    built in recent times following traditional Buddhist architectural principles and designs.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    What makes Sandahirusaya unique is its role as a contemporary Buddhist monument that maintains traditional
                    design elements. While it may appear ancient due to its classical style, it represents modern Sri Lankan
                    Buddhist devotion and craftsmanship. The stupa is surrounded by well-maintained gardens and provides
                    excellent opportunities for meditation and photography, especially during sunrise and sunset.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Modern construction following traditional Buddhist architecture
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Classic bell-shaped design with white limestone coating
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Contemporary Buddhist devotion and craftsmanship
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Peaceful setting ideal for meditation and reflection
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Less crowded alternative to ancient stupas
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </section>

        {/* Itinerary Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">Sample Itinerary for Visiting Anuradhapura</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <p>
              Make the most of your day in Anuradhapura with this practical, time-efficient itinerary. Adjust the schedule to your pace and interests!
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg bg-white dark:bg-slate-900 text-sm shadow-md">
              <thead>
                <tr className="bg-blue-50 dark:bg-slate-800">
                  <th className="px-4 py-2 text-left font-semibold text-blue-900 dark:text-blue-200">Time</th>
                  <th className="px-4 py-2 text-left font-semibold text-blue-900 dark:text-blue-200">Activity</th>
                  <th className="px-4 py-2 text-left font-semibold text-blue-900 dark:text-blue-200">Highlights</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">6:30 AM</td>
                  <td className="px-4 py-2">Arrive in Anuradhapura</td>
                  <td className="px-4 py-2">Start early to beat the heat and crowds</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">7:00 AM</td>
                  <td className="px-4 py-2">Sri Maha Bodhi Tree</td>
                  <td className="px-4 py-2">Morning prayers, peaceful atmosphere</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">8:00 AM</td>
                  <td className="px-4 py-2">Ruwanwelisaya Dagoba</td>
                  <td className="px-4 py-2">Iconic stupa, elephant wall, photo ops</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">9:00 AM</td>
                  <td className="px-4 py-2">Thuparamaya & Lovamahapaya</td>
                  <td className="px-4 py-2">Oldest dagoba, Brazen Palace pillars</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">10:00 AM</td>
                  <td className="px-4 py-2">Abhayagiri Monastery Complex</td>
                  <td className="px-4 py-2">Stupa, museum, Samadhi Buddha</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">11:30 AM</td>
                  <td className="px-4 py-2">Jetavanaramaya Dagoba</td>
                  <td className="px-4 py-2">Massive brick stupa, quiet grounds</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">12:30 PM</td>
                  <td className="px-4 py-2">Lunch Break</td>
                  <td className="px-4 py-2">Try a local rice & curry restaurant</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">1:30 PM</td>
                  <td className="px-4 py-2">Kuttam Pokuna (Twin Ponds)</td>
                  <td className="px-4 py-2">Ancient bathing pools, engineering marvel</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">2:00 PM</td>
                  <td className="px-4 py-2">Lankarama & Mirisavetiya</td>
                  <td className="px-4 py-2">Forest monastery, stupa with legend</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">3:00 PM</td>
                  <td className="px-4 py-2">Isurumuniya Temple</td>
                  <td className="px-4 py-2">Rock carvings, Isurumuniya Lovers</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">4:00 PM</td>
                  <td className="px-4 py-2">Ranmusu Uyana & Moonstone</td>
                  <td className="px-4 py-2">Royal gardens, unique stonework</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">5:00 PM</td>
                  <td className="px-4 py-2">Sunset at Ruwanwelisaya or Mihinthale</td>
                  <td className="px-4 py-2">Golden hour photos, spiritual close</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 prose prose-sm text-muted-foreground max-w-none">
            <ul>
              <li>Wear modest, light clothing and bring water, sunscreen, and a hat.</li>
              <li>Bicycles or tuk-tuks are the best way to get around the vast site.</li>
              <li>Adjust the schedule for your interests—consider a second day for a deeper experience!</li>
            </ul>
          </div>
        </section>

        {/* Archaeological Wonders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="nearby-archaeological-wonders">Near by Archaeological Wonders</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Isurumuniya Temple</CardTitle>
                <CardDescription>Ancient temple</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Isurumuniya.jpeg"
                  alt="Isurumuniya rock temple showing ancient stone carvings and cave architecture"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for the &quot;Isurumuniya Lovers&quot; carving and beautiful rock-cut architecture from the 3rd century BC.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/isurumuniya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Ranmusu uyana with universal stargate</CardTitle>
                <CardDescription>Royal park with ancient ruins</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Ranmusuuyana.jpeg"
                  alt="View of Sigiriya Rock from Pidurangala Rock"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the mysterious Ranmusu uyana, an ancient site with unique stone carvings and a universal stargate.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ranmusu-uyana" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Mihinthalaya</CardTitle>
                <CardDescription>Sacred site</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Mihinthale.jpg"
                  alt="View of Sigiriya Rock from Pidurangala Rock"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Just a few kilometers from Anuradhapura, Mihinthalaya is a sacred site where Buddhism was first introduced to Sri Lanka.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            {/* <Card>
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
                <div className="mt-4">
                  <Link href="/destinations/moonstone-guard-stones">
                    <Button
                      className="mt-2 h-9 px-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer text-sm"
                      variant="default"
                    >
                      See More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card> */}

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Sophisticated bathing pools for monks, showcasing advanced hydraulic engineering from ancient times.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kuttam-pokuna" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="visiting-guide">Complete Visiting Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees & Tickets</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: $25 USD</li>
                    <li>• Foreign children: $12.50 USD</li>
                    <li>• SAARC nationals: Discounted rates</li>
                    <li>• Valid for same day only</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Early morning (6:00-9:00 AM)</li>
                    <li>• Late afternoon (4:00-6:00 PM)</li>
                    <li>• Avoid midday heat (11 AM-3 PM)</li>
                    <li>• Dry season: May to September</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Transportation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bicycle rental (most popular)</li>
                    <li>• Three-wheeler (tuk-tuk)</li>
                    <li>• Private car with driver</li>
                    <li>• Organized tour groups</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Essential Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comfortable walking shoes</li>
                    <li>• Sun protection (hat, sunscreen)</li>
                    <li>• Water bottles (2-3 liters)</li>
                    <li>• Modest clothing for temples</li>
                    <li>• Camera with extra batteries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Etiquette</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Remove shoes at sacred sites</li>
                    <li>• Cover shoulders and knees</li>
                    <li>• Dont point feet toward Buddha statues</li>
                    <li>• Maintain respectful silence</li>
                    <li>• Photography rules vary by site</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Health & Safety</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stay hydrated in hot weather</li>
                    <li>• Watch for uneven ancient surfaces</li>
                    <li>• Beware of monkeys near food</li>
                    <li>• Use insect repellent</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Anuradhapura</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Options</CardTitle>
                <CardDescription>$15-40 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guesthouses near sacred area</li>
                  <li>• Backpacker hostels in town</li>
                  <li>• Government rest houses</li>
                  <li>• Family-run accommodations</li>
                  <li>• Basic but clean facilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$40-100 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hotels with air conditioning</li>
                  <li>• Swimming pools and restaurants</li>
                  <li>• Tour arrangement services</li>
                  <li>• Bicycle rental facilities</li>
                  <li>• Good location for sightseeing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Luxury Resorts</CardTitle>
                <CardDescription>$100+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heritage hotels with character</li>
                  <li>• Spa and wellness facilities</li>
                  <li>• Fine dining restaurants</li>
                  <li>• Professional guide services</li>
                  <li>• Cultural programs and activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Sacred Journey Through Anuradhapura</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Anuradhapura is more than an archaeological site - its a living testament to 2,300 years of continuous
                Buddhist civilization. As you cycle through this ancient city, youre following paths walked by kings,
                monks, and pilgrims for over two millennia. Each dagoba, each carved stone, and each sacred tree tells a
                story of faith, artistry, and human achievement.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to sit quietly at the sacred Bodhi tree, marvel at the engineering genius of the ancient
                dagobas, and appreciate the spiritual atmosphere that has made this city a pilgrimage destination for
                centuries. Remember that youre visiting not just historical monuments, but active places of worship
                that continue to inspire devotion and wonder.
              </p>
              <p className="text-muted-foreground font-medium">
                May your journey through this sacred city bring you peace, wisdom, and a deeper appreciation for Sri
                Lankas incredible spiritual heritage! 🙏🌳✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
