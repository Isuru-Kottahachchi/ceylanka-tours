import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Landmark, Coffee, Clock, Mountain, Eye, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Lipton's Seat Sri Lanka: History & Travel Guide 2025 | Tea Country Icon",
  description:
    "Explore Lipton's Seat, the legendary viewpoint in Sri Lanka's tea country. Discover the story of Sir Thomas Lipton, the Scottish tea baron, and plan your visit to this breathtaking hilltop destination.",
  keywords:
    "Lipton's Seat Sri Lanka, Sir Thomas Lipton, tea country, Haputale, Dambatenne, Sri Lanka travel, hill country, tea plantations, scenic views",
  openGraph: {
    title: "Lipton's Seat Sri Lanka: History & Travel Guide 2025",
    description: "Discover Lipton's Seat, its history, and the legacy of Sir Thomas Lipton in Sri Lanka's tea country.",
    type: "article",
    images: ["/Lipton-seat.jpg"],
  },
}

export default function LiptonsSeatPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Lipton-seat.jpg"
          alt="Panoramic view from Lipton's Seat overlooking tea estates in Haputale, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-bold mb-4">Lipton&apos;s Seat</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&rsquo;s Legendary Tea Country Viewpoint</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Haputale, Uva Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,970m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Coffee className="w-4 h-4 mr-1" />
              Dambatenne Tea Estate
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#history" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">History</a>
          <a href="#viewpoint" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">The Viewpoint</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
          <a href="#nearby" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Introduction */}
        <section className="mb-12 scroll-mt-40" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Lipton&apos;s Seat: The Crown of Sri Lanka&rsquo;s Tea Country</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                Lipton&apos;s Seat is a world-famous viewpoint perched at <strong>1,970 metres</strong> above sea level, high above the emerald tea fields of Haputale in Sri Lanka&rsquo;s central highlands. From this iconic summit, visitors can gaze across rolling plantations, misty valleys, and distant peaks, just as Sir Thomas Lipton did over a century ago.
              </p>
              <p className="text-lg">
                Whether you&rsquo;re a nature lover, history buff, or tea enthusiast, Lipton&apos;s Seat offers a unique blend of breathtaking scenery and fascinating heritage. It&rsquo;s a must-visit for anyone exploring the island&rsquo;s hill country.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Lipton-seat1.jpg"
                alt="Rolling tea plantations viewed from Lipton's Seat on a clear morning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12 scroll-mt-40" id="quick-facts">
          <Card className="border-2 border-green-200 dark:border-green-700 bg-gradient-to-br from-green-50 to-teal-50 dark:bg-none dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-green-800 dark:text-green-300">
                <Star className="w-6 h-6 text-yellow-500" />
                Quick Facts: Lipton&apos;s Seat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-800 dark:text-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span><strong>Elevation:</strong> 1,970m (6,463 ft)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span><strong>Location:</strong> Haputale, Badulla District</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span><strong>Views:</strong> Up to 7 provinces on clear days</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Best Time:</strong> 6–8 AM (sunrise)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span><strong>Best Season:</strong> December to April</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <span><strong>Entry:</strong> Free (open all year)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                    <span><strong>Nearby:</strong> Dambatenne Tea Factory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span><strong>From Haputale:</strong> ~8 km by road</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span><strong>Highlight:</strong> Bust of Sir Thomas Lipton</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* History Section */}
        <section className="mb-12 scroll-mt-40" id="history">
          <h2 className="text-2xl font-bold mb-6 text-foreground">The Story of Sir Thomas Lipton &amp; His Tea Empire</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-muted-foreground dark:text-gray-300 leading-relaxed">
              <p>
                Lipton&apos;s Seat is named after Sir Thomas Lipton, the Scottish tea magnate who revolutionized the global tea trade. Arriving in Sri Lanka (then Ceylon) in the late 19th century, Lipton purchased vast tracts of land in Haputale and established the Dambatenne Tea Estate in 1890. His vision was simple: to bring high-quality Ceylon tea directly to the world, making it affordable and accessible for all.
              </p>
              <p>
                Sir Thomas Lipton was known for his hands-on approach. He would often climb to this very spot (now called Lipton&apos;s Seat) to survey his flourishing plantations and chat with estate workers. His legacy lives on in the Lipton tea brand, which remains a household name worldwide.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Lipton&apos;s Legacy at a Glance</h4>
                <ul className="space-y-1 text-sm text-amber-900 dark:text-amber-200">
                  <li>• <strong>Born:</strong> Glasgow, Scotland, 10 May 1848</li>
                  <li>• <strong>Dambatenne Estate Founded:</strong> 1890</li>
                  <li>• <strong>Died:</strong> London, 2 October 1931</li>
                  <li>• <strong>Legacy:</strong> Pioneered direct plantation-to-consumer tea sales</li>
                  <li>• <strong>Honour:</strong> Knighted 1898, created 1st Baronet Lipton</li>
                </ul>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Lipton-tea.jpg"
                alt="Sir Thomas Lipton's tea empire: sweeping plantations of Dambatenne estate, Haputale"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                <p className="text-white text-sm italic">Sir Thomas Lipton&apos;s vision transformed these mountains into a global tea paradise</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Viewpoint Section */}
        <section className="mb-12 scroll-mt-40" id="viewpoint">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Lipton&apos;s Seat: A Panoramic Wonder</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground dark:text-gray-300 leading-relaxed">
                <p>
                  The journey to Lipton&apos;s Seat is as memorable as the destination itself. Winding through lush tea gardens at 1,970 metres, you&rsquo;ll pass smiling tea pluckers and colonial-era factories before reaching the summit. On a clear day, the view stretches across <strong>seven provinces</strong>, with dramatic vistas of tea estates, rolling valleys, and mountains that seem to stretch to the edge of the world.
                </p>
                <p>
                  Sunrise is especially magical here, as golden light spills over the misty hills and slowly burns away the morning clouds to reveal the vast landscape below. A bust of Sir Thomas Lipton stands at the summit, and a small tea shop lets you enjoy a freshly brewed cup of Ceylon tea while taking in the view.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/Lipton-seat.jpg"
                    alt="Sunrise view from Lipton's Seat showing tea estates glowing in morning light"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/Lipton-seat1.jpg"
                    alt="Panoramic tea estate views from Lipton's Seat on a clear day"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <Card className="border-l-4 border-blue-400 bg-blue-50 dark:bg-slate-800">
              <CardContent className="p-5">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">What You&apos;ll See from the Summit</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Endless carpets of tea plantations rolling to the horizon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Panoramic views across up to 7 provinces on clear days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dramatic mist and cloud formations rolling through valleys</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Bust of Sir Thomas Lipton at the summit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Spectacular Sri Lankan sunrises in golden and pink hues</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Tea pickers at work in the plantations below</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide Section */}
        <section className="mb-12 scroll-mt-40" id="visiting-guide">
          <h2 className="text-2xl font-bold mb-6 text-foreground">How to Visit Lipton&apos;s Seat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  Getting There
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground dark:text-gray-300">
                <div>
                  <strong className="text-foreground">By Tuk-tuk or Car:</strong>
                  <p>~8 km drive from Haputale town through the Dambatenne Tea Estate. Tuk-tuks are available from the town centre.</p>
                </div>
                <div>
                  <strong className="text-foreground">By Hiking:</strong>
                  <p>~7 km scenic walk uphill from the Dambatenne Tea Factory through tea gardens. Allow 2–3 hours one-way. Wear sturdy shoes.</p>
                </div>
                <div>
                  <strong className="text-foreground">By Train to Haputale:</strong>
                  <p>Arrive at Haputale railway station on the Colombo–Badulla scenic line, then take a tuk-tuk to the viewpoint.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <Calendar className="w-5 h-5" />
                  Best Time to Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground dark:text-gray-300">
                <div>
                  <strong className="text-foreground">Time of Day:</strong>
                  <p>Arrive by 6:00–6:30 AM for the clearest views and a spectacular sunrise. Clouds typically roll in by mid-morning.</p>
                </div>
                <div>
                  <strong className="text-foreground">Best Season:</strong>
                  <p>December to April (dry season) offers the clearest skies. Views can be obscured by mist and rain during the monsoon (May–September).</p>
                </div>
                <div className="bg-orange-50 dark:bg-slate-700 p-3 rounded-lg">
                  <p className="text-orange-800 dark:text-orange-100"><strong>Tip:</strong> Check local weather before heading up. The reward for an early start on a clear morning is unforgettable.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                  <CheckCircle className="w-5 h-5" />
                  Practical Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
                <p><strong className="text-foreground">Entrance Fee:</strong> Free (open outdoor viewpoint)</p>
                <p><strong className="text-foreground">Facilities:</strong> Small tea shop at the summit, rest area, bust of Sir Thomas Lipton</p>
                <p><strong className="text-foreground">What to Bring:</strong> Warm jacket (cold at altitude), camera, water bottle</p>
                <p><strong className="text-foreground">Combine With:</strong> Dambatenne Tea Factory tour on the way up or down</p>
                <p><strong className="text-foreground">Ideal Duration:</strong> Half day including hike or 1–2 hours if driving</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50/50 dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <AlertTriangle className="w-5 h-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground dark:text-gray-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Weather can change rapidly; clouds can completely obscure views within minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>The road can be slippery and challenging during or after heavy rain</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>If hiking, start early as afternoon heat and limited shade make it very tiring</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Respect tea estate workers and always ask permission before photographing people</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dambatenne Tea Factory */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Pair Your Visit: Dambatenne Tea Factory</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Dambatenna-Tea-factory.webp"
                alt="Historic Dambatenne Tea Factory built by Sir Thomas Lipton in 1890, still operational today"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-muted-foreground dark:text-gray-300">
              <p>
                The Dambatenne Tea Factory, built by Sir Thomas Lipton in 1890, sits along the road to Lipton&apos;s Seat and makes for a perfect pairing with the viewpoint. Still operational today, it produces premium high-grown Ceylon tea. Guided tours take visitors through every stage of the process, from withering and rolling to firing and packaging, and you can purchase freshly packaged tea to take home.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Built in 1890 by Sir Thomas Lipton, still in operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Guided tours of traditional Ceylon tea processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Tea tasting and purchase of premium packaged tea</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Located on the route to Lipton&apos;s Seat, easy to combine in one trip</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12 scroll-mt-40" id="nearby">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Explore More Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Haputhale.jpeg"
                  alt="Haputale town nestled among tea plantations and mountains"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Haputale</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The charming hill town at the base of Lipton&apos;s Seat, with stunning panoramic views, colonial architecture, and easy access to tea estates.
                </p>
                <Link href="/destinations/haputhale">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-sm w-full">See More →</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Adisham-Monastery.jpeg"
                  alt="Adisham Monastery Tudor-style building surrounded by mountain gardens"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Adisham Monastery</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A stunning Tudor-style mansion turned Benedictine monastery, set among beautiful mountain gardens just outside Haputale town.
                </p>
                <Link href="/destinations/haputhale">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-sm w-full">See More →</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Diyaluma-Falls1.jpg"
                  alt="Diyaluma Falls cascading down a cliff in Sri Lanka's hill country"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Diyaluma Falls</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  One of Sri Lanka&apos;s tallest waterfalls at 171m, about an hour from Haputale, with natural infinity pools at the top.
                </p>
                <Link href="/destinations/diyaluma-falls">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-sm w-full">See More →</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:bg-slate-800 dark:[background-image:none] border-green-200 dark:border-green-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">Ready to Stand Where Lipton Stood?</h3>
              <p className="text-gray-600 dark:text-gray-100 mb-6 max-w-2xl mx-auto">
                Lipton&apos;s Seat is one of those rare places where history, nature, and the sheer scale of Sri Lanka&apos;s beauty all come together in a single breathtaking view. Set your alarm early, bring a warm jacket, and prepare to be amazed. 🍃🏔️
              </p>
              <Link href="/destinations/haputhale">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-base">
                  Plan Your Haputale Visit →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  )
}
