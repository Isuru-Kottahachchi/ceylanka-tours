import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Bus, Car, Train, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mandaram Nuwara Sri Lanka: Hidden Valley Guide 2025 | Misty Village & Waterfalls",
  description:
    "Discover Mandaram Nuwara, Sri Lanka's secret misty valley. Complete guide to waterfalls, hiking, village life, and how to get there.",
  keywords:
    "Mandaram Nuwara, Sri Lanka, hidden valley, waterfalls, hiking, misty village, travel guide, Nuwara Eliya, Knuckles, Piduruthalagala",
  openGraph: {
    title: "Mandaram Nuwara: Hidden Valley Guide 2025",
    description: "Your complete guide to Sri Lanka's most mysterious misty village.",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function MandaramNuwaraGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mandaram-Nuwara.jpg"
          alt="Misty Mandaram Nuwara valley with lush green hills and waterfalls"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mandaram Nuwara</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Hidden Misty Valley</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              Knuckles Foothills
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Hidden Valley
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#highlights" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Highlights</a>
          <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
          <a href="#guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mandaram Nuwara: The Valley of Mist</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Mandaram Nuwara is a secluded village nestled at the base of Piduruthalagala, Sri Lanka's tallest mountain. Known as the "village without midday" because the sun rarely shines directly into the valley, Mandaram Nuwara is shrouded in mist, surrounded by lush tea fields, waterfalls, and dense forests. This hidden gem offers a tranquil escape for nature lovers, hikers, and anyone seeking authentic rural life far from the crowds.
            </p>
            <p className="text-lg">
              The village remains untouched by mass tourism, preserving its unique charm and slow pace. Here, you can wander through tea gardens, discover secret waterfalls, and experience the hospitality of local families. Mandaram Nuwara is a paradise for photographers and adventurers, with cool mountain air and breathtaking scenery at every turn.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Essential Mandaram Nuwara Facts */}
          <section className="flex-1" id="quick-facts">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Essential Mandaram Nuwara Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Elevation:</strong> 1,000m (3,280 ft)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Population:</strong> ~1,500 villagers
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TreePine className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Climate:</strong> Cool, misty, frequent rain
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>
                        <strong>Location:</strong> Central Province, Nuwara Eliya District
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>Known for:</strong> Waterfalls, tea, hidden valley
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Best Visit:</strong> May–September (dry season)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Mandaram-Nuwara-Valley.jpg"
                      alt="Mandaram Nuwara valley with tea fields and misty mountains"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Sri Lanka's Last Valley</p>
                      <p className="text-sm text-blue-800">
                        Mandaram Nuwara is called the "last valley" because it sits at the end of a winding road, surrounded by mountains on three sides and open only to the east. The village is often covered in mist, creating a magical, timeless atmosphere.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1–2 days to explore waterfalls, tea gardens, and village life at a relaxed pace.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May to September (dry season) for clear skies and best hiking conditions.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Mandaram Nuwara */}
          <section className="flex-1" id="how-to-get">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Mandaram Nuwara
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 170km from Colombo, 60km from Kandy</li>
                      <li>• <strong>Duration:</strong> 5 hours from Colombo, 2 hours from Kandy</li>
                      <li>• <strong>Best option:</strong> Most direct and comfortable</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> Hire a local driver familiar with the winding mountain roads for a safe and scenic journey.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Kandy → Padiyapelella → Mandaram Nuwara</li>
                      <li>• <strong>Duration:</strong> 6–7 hours from Colombo</li>
                      <li>• <strong>Cost:</strong> Very budget-friendly</li>
                      <li>• <strong>Frequency:</strong> Buses run regularly from Kandy to Padiyapelella</li>
                    </ul>
                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Nanu Oya (then taxi to Mandaram Nuwara)</li>
                      <li>• <strong>Duration:</strong> 6 hours by train, 1.5 hours by taxi</li>
                      <li>• <strong>Scenic journey:</strong> Through tea country and mountain vistas</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Start early to enjoy the morning mist and avoid afternoon rain</li>
                    <li>• Roads are narrow and winding—drive carefully</li>
                    <li>• Bring cash, as there are no ATMs in the village</li>
                    <li>• Book accommodation in advance, especially on weekends</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Highlights & Waterfalls */}
        <section className="mb-12" scroll-mt-12 id="highlights">
          <h2 className="text-3xl font-bold mb-6">Highlights & Waterfalls</h2>

          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Kolapathana Falls</CardTitle>
                <CardDescription>The most famous waterfall in Mandaram Nuwara</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Kolapathana-Falls.jpg"
                    alt="Kolapathana Falls plunging through lush forest in Mandaram Nuwara"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kolapathana Falls is a spectacular 50-meter cascade hidden in the jungle above Mandaram Nuwara. The hike to the falls takes you through tea fields, forest, and across clear mountain streams. The pool at the base is perfect for a refreshing dip, and the area is alive with birdsong and butterflies.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400 dark:border-yellow-600 mt-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Visitor Tip</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-100">Wear sturdy shoes for the hike and bring a rain jacket—weather can change quickly in the valley.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        50-meter waterfall, best viewed after rain
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Jungle hike through tea fields and forest
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural pool for swimming
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Waterfalls & Nature Trails</CardTitle>
                <CardDescription>Hidden cascades and scenic hikes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Mandaram-Nuwara-Trail.jpg"
                    alt="Hiking trail through misty tea fields in Mandaram Nuwara"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Beyond Kolapathana, Mandaram Nuwara is surrounded by smaller waterfalls and forest trails. Ask a local guide to show you secret spots like Kabaragala Falls, and enjoy birdwatching, wildflowers, and panoramic views of the Knuckles and Piduruthalagala ranges.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-400 dark:border-green-600 mt-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Nature Tip</h4>
                      <p className="text-sm text-green-700 dark:text-green-100">Respect local customs, avoid littering, and support village guides for a safe and authentic experience.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple hidden waterfalls and streams
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Scenic trails for all fitness levels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Birdwatching and wildflowers
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12" id="guide">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Practical Visiting Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Where to Stay</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Village Homestays</h4>
                  <p className="text-sm text-blue-600 dark:text-slate-300">
                    Experience authentic hospitality with local families. Simple, clean, and surrounded by nature.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Eco-Lodges</h4>
                  <p className="text-sm text-blue-600 dark:text-slate-300">
                    A few eco-lodges offer comfort and stunning views of the valley. Book ahead, especially on weekends.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Local Tips</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Village Life</h4>
                  <p className="text-sm text-green-600 dark:text-slate-300">
                    Life moves slowly here—enjoy the peace, greet locals, and try fresh village produce.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">What to Bring</h4>
                  <p className="text-sm text-green-600 dark:text-slate-300">
                    Rain jacket, sturdy shoes, cash, and a camera for the misty scenery.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 p-6 rounded-lg border border-yellow-200 dark:border-slate-600">
            <div className="flex items-start space-x-3">
              <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Important Travel Tips</h3>
                <ul className="text-sm text-yellow-700 dark:text-slate-300 space-y-1">
                  <li>• Respect local customs and privacy</li>
                  <li>• Dress modestly, especially in the village</li>
                  <li>• Weather changes quickly—be prepared</li>
                  <li>• Support local guides and businesses</li>
                  <li>• Mobile signal is weak in the valley</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
