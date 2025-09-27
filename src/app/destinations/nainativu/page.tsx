import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Anchor, Landmark, Heart, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export const metadata: Metadata = {
  title: "Nagadeepa (Nainativu) Sri Lanka: Complete Guide 2025 | Sacred Island for Buddhists & Hindus",
  description:
    "Discover Nainativu (Nagadeepa), a revered island in northern Sri Lanka sacred to both Buddhists and Hindus. Explore the Nagadeepa Viharaya, Nagapooshani Amman Kovil, travel tips, and how to visit this unique pilgrimage site.",
  keywords:
    "Nagadeepa, Nainativu, Nagadeepa Viharaya, Nagapooshani Amman Kovil, Jaffna islands, Sri Lanka pilgrimage, Buddhist sites, Hindu temples, northern Sri Lanka, travel guide",
  openGraph: {
    title: "Nagadeepa (Nainativu): Complete Guide 2025",
    description: "Your essential guide to Sri Lanka's sacred northern island for Buddhists and Hindus",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function NainativuTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Nagadeepa-Viharaya.jpg"
          alt="Nagadeepa Viharaya and Nagapooshani Amman Kovil on Nainativu Island, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nagadeepa (Nainativu)</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Island of Reconciliation & Faith</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Jaffna District, Northern Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Anchor className="w-4 h-4 mr-1" />
              Island Pilgrimage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-1" />
              Shared Buddhist & Hindu Heritage
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#sacred-sites" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sacred Sites</a>
          <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
          <a href="#safety" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Safety Tips</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Nagadeepa (Nainativu): Island of Legends & Harmony</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nainativu, also known as Nagadeepa, is a tiny island off the Jaffna Peninsula, revered by both Buddhists and Hindus for centuries. This sacred land is home to the Nagadeepa Purana Viharaya—one of the holiest Buddhist sites in Sri Lanka—and the vibrant Nagapooshani Amman Kovil, a major Hindu temple dedicated to the goddess Parvati. The island&apos;s unique spiritual atmosphere, where two faiths coexist peacefully, makes it a symbol of reconciliation and religious harmony in Sri Lanka.
            </p>
            <p className="text-lg mb-4">
              According to Buddhist chronicles, the Buddha himself visited Nagadeepa in the 6th century BCE to resolve a dispute between two Naga kings, bringing peace to the land. Today, pilgrims and travelers alike are drawn to the island's tranquil shores, ancient legends, and colorful rituals. Whether you seek spiritual solace, cultural discovery, or a glimpse into Sri Lanka's multi-faith heritage, Nainativu offers a truly unforgettable experience.
            </p>
            <p className="text-lg">
              The journey to Nagadeepa is as memorable as the destination—crossing scenic causeways and taking a short boat ride across the Palk Strait, you'll witness the beauty of the northern lagoons and the resilience of island communities. Plan your visit to coincide with temple festivals for a vibrant display of devotion, music, and tradition.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12" id="quick-facts">
          {/* Essential Nainativu Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Essential Nainativu Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Historical Era:</strong> 6th Century BCE legends
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Population:</strong> ~2,500 (mainly Tamil)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Key Sites:</strong> Nagadeepa Viharaya, Nagapooshani Amman Kovil
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>
                        <strong>Location:</strong> 35km NW of Jaffna town
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>Religious Importance:</strong> Major Buddhist & Hindu pilgrimage
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Visit Duration:</strong> Half-day trip
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Nagapooshani-Amman-Kovil.jpg"
                      alt="Nagapooshani Amman Kovil temple gopuram in Nainativu, Sri Lanka"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">A Living Island of Faith</p>
                      <p className="text-sm text-blue-800">
                        Nainativu is one of the few places in the world where Buddhist and Hindu shrines stand side by side, drawing pilgrims from across Sri Lanka and South India. The island's annual temple festivals are a vibrant celebration of devotion and unity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">Half-day to one day, including travel from Jaffna.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">April–September (dry season) for calm seas and festival season. Early morning is best for a peaceful visit.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Nainativu */}
          <section className="flex-1" id="how-to-get">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <Anchor className="w-5 h-5" />
                  How to Get to Nainativu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">By Road & Ferry</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Jaffna:</strong> Take a bus, tuk-tuk, or taxi to Kurikadduwan Jetty (KKD), about 30km northwest of Jaffna town.</li>
                      <li>• <strong>By Bus:</strong> Regular buses run from Jaffna to KKD (route #776), taking 1–1.5 hours.</li>
                      <li>• <strong>By Car/Taxi:</strong> Private vehicles can reach the jetty via the causeway through Pungudutivu island.</li>
                      <li>• <strong>By Ferry:</strong> From KKD, passenger ferries depart every 20–30 minutes to Nainativu (20 min crossing). Ferries operate 6am–6pm daily.</li>
                      <li>• <strong>Tickets:</strong> Purchase at the jetty (very affordable; separate lines for locals and tourists).</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-md border-l-4 border-blue-500 dark:border-blue-400">
                    <p className="text-xs text-blue-800 dark:text-blue-200 mb-2">
                      <strong>Tip:</strong> Arrive early on festival days and weekends, as ferries can get crowded with pilgrims.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sacred Sites */}
        <section id="sacred-sites" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Sacred Sites of Nainativu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Nagadeepa Purana Viharaya</CardTitle>
                <CardDescription>One of the holiest Buddhist temples in Sri Lanka</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Nagadeepa-Viharaya.jpg"
                  alt="White stupa and shrine of Nagadeepa Purana Viharaya, Nainativu"
                  width={400}
                  height={220}
                  className="rounded-lg mb-4 w-full object-cover aspect-[4/3]"
                />
                <p className="text-muted-foreground mb-2">
                  According to the Mahavamsa chronicle, the Buddha visited Nagadeepa in the 6th century BCE to mediate a conflict between two Naga kings, Chulodara and Mahodara. The Nagadeepa Viharaya commemorates this event and is a revered pilgrimage site, especially during the annual Poson festival. The temple complex features a gleaming white stupa, sacred Bo tree, and ancient relics.
                </p>
                <p className="text-muted-foreground">
                  Visitors are welcome to observe rituals, offer flowers, and learn about the island's Buddhist heritage. Modest dress and respectful behavior are expected.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nagapooshani Amman Kovil</CardTitle>
                <CardDescription>Vibrant Hindu temple dedicated to Goddess Parvati</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Nagapooshani-Amman-Kovil.jpg"
                  alt="Colorful gopuram of Nagapooshani Amman Kovil, Nainativu"
                  width={400}
                  height={220}
                  className="rounded-lg mb-4 w-full object-cover aspect-[4/3]"
                />
                <p className="text-muted-foreground mb-2">
                  The Nagapooshani Amman Kovil is one of the 64 Shakti Peethas in South Asia and a major center of goddess worship. Its towering gopuram (gateway tower) is adorned with thousands of colorful sculptures. The temple&apos;s annual Ther Thiruvizha (chariot festival) draws thousands of devotees from Sri Lanka and India, filling the island with music, dance, and devotion.
                </p>
                <p className="text-muted-foreground">
                  Non-Hindu visitors are welcome to enter most areas (except the innermost sanctum). Dress modestly, remove shoes, and respect temple customs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety Tips */}
        <section id="safety" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Safety & Travel Tips for Nainativu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /> General Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>Nainativu is generally very safe for travelers, including solo visitors and families.</li>
                  <li>Carry water, sunscreen, and a hat—shade is limited and the sun can be intense.</li>
                  <li>Ferries are basic but reliable; follow crew instructions and avoid overcrowded boats.</li>
                  <li>There are a few small shops and eateries on the island, but bring snacks if you have dietary restrictions.</li>
                  <li>Photography is allowed in most areas, but always ask before photographing people or rituals.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> Pilgrimage Etiquette</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>Dress modestly: shoulders and knees covered for all visitors.</li>
                  <li>Remove shoes and hats before entering temple buildings.</li>
                  <li>Respect ongoing rituals and avoid loud conversation near shrines.</li>
                  <li>Do not touch sacred objects or enter restricted areas.</li>
                  <li>During festivals, expect large crowds and vibrant processions—keep valuables secure.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Inspiration */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-cyan-50 to-green-50 border-cyan-200">
            <CardHeader>
              <CardTitle className="text-cyan-800">Experience the Spirit of Nagadeepa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Nainativu is more than a destination—it&apos;s a living testament to Sri Lanka&apos;s spiritual diversity and resilience. Whether you come as a pilgrim or a curious traveler, the island&apos;s sacred sites, warm community, and peaceful shores will leave a lasting impression.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your journey to Nagadeepa and discover the harmony of faiths at the heart of the northern seas.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
