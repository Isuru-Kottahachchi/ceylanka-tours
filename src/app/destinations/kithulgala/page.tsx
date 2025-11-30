import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Waves, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kithulgala Sri Lanka: Complete Guide 2025 | White Water Rafting & Adventure Capital",
  description:
    "Discover Kithulgala, Sri Lanka's adventure hub famous for white water rafting on Kelani River, rainforest treks, Bridge on the River Kwai filming location, and thrilling outdoor activities. Complete travel guide.",
  keywords:
    "Kithulgala, white water rafting Sri Lanka, Kelani River rafting, adventure sports Sri Lanka, Kithulgala rainforest, Bridge on River Kwai, canyoning Sri Lanka, waterfall abseiling, Kithulgala activities",
  openGraph: {
    title: "Kithulgala: Complete Adventure Guide 2025",
    description: "Your ultimate guide to Sri Lanka's white water rafting capital and adventure destination",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function KithulgalaTravelGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Water-Rafting-Kithulgala.jpg"
          alt="White water rafting on Kelani River in Kithulgala with lush rainforest and rapids"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kithulgala</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s  White Water Rafting Hub</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Sabaragamuwa Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Waves className="w-4 h-4 mr-1" />
              White Water Rafting
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <TreePine className="w-4 h-4 mr-1" />
              Rainforest Adventures
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
          <a href="#activities" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Activities</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sample Itinerary</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Attractions</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kithulgala: Adventure Paradise in the Rainforest</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the lush wet zone of Sri Lanka, approximately 90 kilometers east of Colombo, Kithulgala is a small town that has earned a big reputation as the country&apos;s premier destination for adventure sports and outdoor activities. Set along the banks of the mighty Kelani River and surrounded by dense tropical rainforest, this scenic location offers an adrenaline-packed escape into nature that attracts thrill-seekers from around the world.
            </p>
            <p className="text-lg mb-4">
              Kithulgala is best known as Sri Lanka&apos;s white water rafting capital. The Kelani River, particularly during the monsoon season from May to December, offers exciting rapids ranging from Grade 2 to Grade 3, making it perfect for both beginners and experienced rafters. The 5-7 kilometer rafting route takes you through stunning scenery of rainforest-covered hills, rocky outcrops, and cascading waterfalls, creating an unforgettable combination of adventure and natural beauty.
            </p>
            <p className="text-lg">
              Beyond rafting, Kithulgala has emerged as a hub for diverse adventure activities including canyoning, waterfall abseiling, confidence jumps into natural pools, jungle trekking, bird watching, and river bathing. The town also holds a unique place in cinema history as the filming location for the iconic 1957 movie &quot;The Bridge on the River Kwai,&quot; which won seven Academy Awards. Whether you&apos;re seeking heart-pumping adventures, peaceful nature experiences, or simply a refreshing break from city life, Kithulgala offers the perfect rainforest retreat with something for everyone from families to extreme sports enthusiasts.
            </p>
          </div>
        </section>


        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Kithulgala Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Kithulgala Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Sabaragamuwa Province, Kegalle District
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Best Season:</strong> May-December (monsoon for best rapids)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Famous For:</strong> White water rafting on Kelani River
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Climate:</strong> Wet zone, high rainfall year-round
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Movie Fame:</strong> Bridge on the River Kwai (1957)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 1-3 days
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/placeholder.svg?height=80&width=120"
                      alt="White water rafting on Kelani River rapids in Kithulgala"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Sri Lanka&apos;s Adventure Capital</p>
                      <p className="text-sm text-blue-800">
                        Kithulgala receives some of the highest rainfall in Sri Lanka (over 5,000mm annually), making the Kelani River perfect for year-round water sports. The town has become the country&apos;s premier destination for white water rafting, attracting thousands of adventure seekers every year.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1-2 days for rafting and main activities, 3 days to fully explore all adventures and rainforest trails.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May-December for best rafting conditions. March-April has lower water levels but calmer for beginners.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Kithulgala */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Kithulgala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Colombo (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 90 km (56 miles)</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Route:</strong> A4 Colombo-Hatton road</li>
                      <li>• <strong>Cost:</strong> $50-70 USD by private car/taxi</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">From Kandy</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 85 km (53 miles)</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Scenic route:</strong> Through tea country</li>
                      <li>• <strong>Cost:</strong> $45-60 USD</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Public Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Colombo:</strong> Bus to Hatton, get off at Kithulgala</li>
                      <li>• <strong>Duration:</strong> 3-4 hours</li>
                      <li>• <strong>Cost:</strong> $2-3 USD (budget option)</li>
                      <li>• <strong>Frequency:</strong> Multiple buses daily</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">Package Tours</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Many operators:</strong> Offer day trips from Colombo</li>
                      <li>• <strong>Includes:</strong> Transport, rafting, lunch, guide</li>
                      <li>• <strong>Cost:</strong> $60-100 USD per person</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Road can be winding - take motion sickness medication if needed</li>
                    <li>• Most adventure companies offer pickup from Colombo</li>
                    <li>• Book rafting and activities in advance during peak season</li>
                    <li>• Overnight stay recommended to enjoy multiple activities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Adventure Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="activities">Adventure Activities & Water Sports</h2>

          <div className="space-y-8">
            {/* White Water Rafting */}
            <Card>
              <CardHeader>
                <CardTitle>1. White Water Rafting on Kelani River</CardTitle>
                <CardDescription>The main attraction - Grade 2-3 rapids through stunning rainforest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Kithulgala-waterrafting.jpg"
                    alt="White water rafting team navigating rapids on Kelani River in Kithulgala"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      White water rafting on the Kelani River is the number one reason people visit Kithulgala. This thrilling adventure takes you on a 5-7 kilometer journey down the river, navigating exciting rapids rated Grade 2 to 3, which provide plenty of excitement without being too dangerous for beginners. Each raft holds 6-8 people plus an experienced guide who steers from the back and gives instructions.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The rafting route passes through absolutely stunning scenery - dense rainforest on both banks, dramatic rocky outcrops, natural swimming pools, and small waterfalls cascading into the river. Between the rapids, there are calm sections where you can catch your breath, take in the views, and even jump into the refreshing water for a swim. The entire experience typically lasts 2-3 hours including safety briefing, equipment fitting, and transportation.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 mt-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-2">Safety & Requirements</h4>
                      <p className="text-sm text-blue-700 dark:text-gray-200">No prior experience needed! Minimum age is usually 10 years. All safety equipment (helmets, life jackets) provided. Professional guides ensure safety throughout. Swimming ability recommended but not mandatory.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Grade 2-3 rapids perfect for beginners and families
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        5-7 km route through pristine rainforest
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Professional guides and safety equipment included
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cost: $30-50 USD per person
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Canyoning */}
            <Card>
              <CardHeader>
                <CardTitle>2. Canyoning & Stream Sliding</CardTitle>
                <CardDescription>Navigate streams, natural slides, and water chutes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Canyoning in Kithulgala is an exhilarating adventure that takes you through small streams and waterfalls in the rainforest. You&apos;ll walk, swim, slide, and sometimes jump your way downstream, navigating natural water slides formed by smooth rocks, wading through chest-deep pools, and working your way around cascading waterfalls. It&apos;s like nature&apos;s own water park!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This activity is incredibly fun and refreshing, combining adventure with cooling off in the forest streams. Routes vary from easy (suitable for families) to more challenging courses involving bigger jumps and tougher terrain. Most canyoning adventures last 2-3 hours and are led by guides who know every rock, pool, and safe route through the water.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Navigate natural water slides and pools
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple difficulty levels available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for families and groups
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cost: $25-40 USD per person
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Canyoning adventure sliding down natural water chutes in Kithulgala rainforest"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Waterfall Abseiling */}
            <Card>
              <CardHeader>
                <CardTitle>3. Waterfall Abseiling (Rappelling)</CardTitle>
                <CardDescription>Descend cascading waterfalls on rope</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Waterfall abseiling down a cascading waterfall in Kithulgala"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      For those seeking a bigger adrenaline rush, waterfall abseiling is an unforgettable experience. You&apos;ll be harnessed up with professional climbing equipment and guided to descend down the face of a waterfall, with water cascading over and around you as you lower yourself down the rocks. It&apos;s challenging, thrilling, and incredibly rewarding when you reach the bottom!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The main abseiling site features a beautiful 30-meter waterfall surrounded by lush rainforest. Even if you&apos;ve never tried abseiling before, the expert guides provide thorough instruction and constant support via radio communication. The sensation of descending through falling water with the forest around you is truly unique and makes for spectacular photos.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        30-meter waterfall descent
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Professional climbing equipment and instruction
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Suitable for first-timers with guidance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cost: $35-50 USD per person
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Confidence Jumps */}
            <Card>
              <CardHeader>
                <CardTitle>4. Confidence Jumps & River Swimming</CardTitle>
                <CardDescription>Leap into natural pools from rocks and cliffs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Confidence jumps are exactly what they sound like - building up your courage to jump from rocks or small cliffs into deep, natural pools in the river. The Kelani River has several perfect spots with jumps ranging from small 2-meter beginner jumps to more daring 8-meter leaps for the brave. All jump sites are carefully checked by guides to ensure safety and proper water depth.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Between jumps, you can swim in the crystal-clear natural pools, float peacefully in calm sections of the river, or simply relax on the rocks soaking up the forest atmosphere. River swimming in Kithulgala is refreshing and fun, with the cool mountain water providing relief from the tropical heat. This activity is often included free with rafting packages or as part of multi-activity days.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple jump heights from 2m to 8m
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural pools with crystal-clear water
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        All sites safety-checked by guides
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Often included with other activities
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Person jumping from cliff into natural pool in Kelani River at Kithulgala"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Jungle Trekking */}
            <Card>
              <CardHeader>
                <CardTitle>5. Rainforest Trekking & Bird Watching</CardTitle>
                <CardDescription>Explore pristine jungle trails and spot endemic wildlife</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Jungle trekking through lush rainforest trails in Kithulgala"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      For those who prefer land-based adventures, Kithulgala&apos;s rainforest offers excellent jungle trekking opportunities. The surrounding forests are part of Sri Lanka&apos;s wet zone biodiversity hotspot, home to numerous endemic plant and animal species. Guided treks range from easy 1-2 hour walks to full-day expeditions deeper into the Makandawa Rainforest Reserve.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Kithulgala is a paradise for bird watchers, with over 50 bird species recorded including several endemic species like the Sri Lanka Blue Magpie, Yellow-fronted Barbet, and Layard&apos;s Parakeet. Early morning treks offer the best opportunities for bird sighting. You may also encounter monkeys, giant squirrels, endemic frogs, colorful butterflies, and if you&apos;re lucky, even shy jungle cats or leopards.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Access to pristine rainforest trails
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent bird watching opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Endemic flora and fauna
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cost: $15-30 USD for guided treks
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sample Itinerary */}
        <section className="mb-12 scroll-mt-40" id="itinerary">
          <h2 className="text-3xl font-bold mb-6">Sample Itinerary</h2>
          
          {/* Day Trip */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>One-Day Adventure from Colombo</CardTitle>
              <CardDescription>Action-packed day trip with rafting and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">6:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Depart Colombo</h4>
                    <p className="text-sm text-muted-foreground">Early departure to maximize time at Kithulgala. Enjoy scenic drive through rubber plantations and gradually entering rainforest zone.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">8:30 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Arrive & Safety Briefing</h4>
                    <p className="text-sm text-muted-foreground">Check in at activity center, change into appropriate clothing, receive safety briefing and equipment (helmet, life jacket, paddle).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">9:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">White Water Rafting</h4>
                    <p className="text-sm text-muted-foreground">2-3 hours of exciting rafting through Grade 2-3 rapids. Navigate exciting sections, enjoy calm stretches, and take in the stunning rainforest scenery.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">12:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Lunch Break</h4>
                    <p className="text-sm text-muted-foreground">Enjoy traditional Sri Lankan rice and curry lunch at riverside restaurant. Rest and dry off before afternoon activities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">1:30 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Confidence Jumps & Swimming</h4>
                    <p className="text-sm text-muted-foreground">Jump into natural pools from various heights, swim in crystal-clear river water, and relax in beautiful natural surroundings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">3:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Return to Colombo</h4>
                    <p className="text-sm text-muted-foreground">Change back into dry clothes, collect belongings, and begin journey back to Colombo. Arrive by 6:00 PM.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Two Day Adventure */}
          <Card>
            <CardHeader>
              <CardTitle>Two-Day Complete Adventure Experience</CardTitle>
              <CardDescription>Overnight stay to enjoy all activities at a relaxed pace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h4 className="font-semibold text-lg">Day 1</h4>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">9:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Arrive & Check-in</h4>
                    <p className="text-sm text-muted-foreground">Arrive at Kithulgala, check into riverside hotel or eco-lodge. Many accommodations offer beautiful river views and natural surroundings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">10:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">White Water Rafting</h4>
                    <p className="text-sm text-muted-foreground">Morning rafting session on Kelani River. Take your time navigating rapids and enjoying the pristine environment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">1:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Lunch & Rest</h4>
                    <p className="text-sm text-muted-foreground">Return to accommodation for lunch and relaxation. Perhaps swim in hotel pool or explore the immediate surroundings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">3:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Canyoning Adventure</h4>
                    <p className="text-sm text-muted-foreground">Afternoon canyoning through rainforest streams. Slide, jump, and swim your way downstream through natural water features.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">6:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Evening at Leisure</h4>
                    <p className="text-sm text-muted-foreground">Dinner at hotel, enjoy sounds of the rainforest, share stories with other adventurers. Perhaps visit the historic Bridge site if interested.</p>
                  </div>
                </div>
                
                <h4 className="font-semibold text-lg mt-8">Day 2</h4>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">6:30 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Bird Watching Trek</h4>
                    <p className="text-sm text-muted-foreground">Early morning guided rainforest trek. Best time to spot endemic bird species and other wildlife in the cool morning air.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">9:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Breakfast & Check-out</h4>
                    <p className="text-sm text-muted-foreground">Return for hearty breakfast, pack up belongings, and check out of accommodation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">10:30 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Waterfall Abseiling</h4>
                    <p className="text-sm text-muted-foreground">Final adventure - abseil down the 30-meter waterfall. Thrilling conclusion to your Kithulgala adventure!</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">1:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Lunch & Departure</h4>
                    <p className="text-sm text-muted-foreground">Final meal in Kithulgala before heading to your next destination or returning to Colombo with unforgettable memories.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Attractions & Points of Interest */}
        <section className="mb-12 scroll-mt-40" id="attractions">
          <h2 className="text-3xl font-bold mb-6">Points of Interest & Attractions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bridge on the River Kwai Site</CardTitle>
                <CardDescription>Historic movie filming location</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Kithulgala gained international fame as the filming location for the 1957 Academy Award-winning movie &quot;The Bridge on the River Kwai.&quot; While the actual bridge structure is no longer there, the site remains a point of interest for film buffs and history enthusiasts. The river and surrounding forest look much as they did in the film.
                </p>
                <Badge variant="outline" className="text-xs">Movie Location</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Makandawa Forest Reserve</CardTitle>
                <CardDescription>Protected rainforest biodiversity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  This 1,000-hectare virgin rainforest reserve adjacent to Kithulgala is a treasure trove of biodiversity. Home to endemic plants, birds, butterflies, and mammals, it offers serious trekkers and nature enthusiasts a chance to experience pristine Sri Lankan rainforest. Multi-hour guided treks available.
                </p>
                <Badge variant="outline" className="text-xs">Nature Reserve</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Belilena Cave</CardTitle>
                <CardDescription>Archaeological site - ancient human habitation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Located about 7 km from Kithulgala, this cave is an important archaeological site where evidence of prehistoric human habitation dating back 32,000 years was discovered. The cave offers insight into Sri Lanka&apos;s ancient history and is accessible via a short trek.
                </p>
                <Badge variant="outline" className="text-xs">15 min drive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rubber and Tea Plantations</CardTitle>
                <CardDescription>Working plantations around town</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The area around Kithulgala features extensive rubber plantations and some tea estates. You can visit working plantations to see rubber tapping in action (early morning) and learn about the industry that supports much of the local economy. Scenic drives through these estates are beautiful.
                </p>
                <Badge variant="outline" className="text-xs">Local Experience</Badge>
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
                  When to Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-sm">Best Season for Rafting:</p>
                  <p className="text-sm text-muted-foreground">May to December (Southwest Monsoon)</p>
                  <p className="text-sm text-muted-foreground">Higher water levels, best rapids</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Calmer Season:</p>
                  <p className="text-sm text-muted-foreground">January to April (Drier months)</p>
                  <p className="text-sm text-muted-foreground">Lower water, suitable for beginners and kids</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Climate:</p>
                  <p className="text-sm text-muted-foreground">Wet zone - expect rain year-round</p>
                  <p className="text-sm text-muted-foreground">Temperature: 24-30°C (75-86°F)</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Peak Season:</p>
                  <p className="text-sm text-muted-foreground">June-August & December-January</p>
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
                    <span><strong>Swimwear:</strong> Quick-dry swimsuit or shorts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Change of clothes:</strong> Dry clothes and towel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Footwear:</strong> Secure sandals or water shoes (no flip-flops)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Sun protection:</strong> Waterproof sunscreen, sunglasses with strap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Waterproof bag/case:</strong> For phone, camera, valuables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Insect repellent:</strong> Rainforest has mosquitoes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Safety & Requirements */}
          <Card className="border-l-4 border-orange-500 mb-6">
            <CardHeader>
              <CardTitle className="text-orange-700 dark:text-orange-300">Safety Information & Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">General Requirements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Age limit:</strong> Minimum 10 years for rafting (varies by operator)</li>
                    <li>• <strong>Swimming:</strong> Basic swimming ability recommended but not mandatory</li>
                    <li>• <strong>Health:</strong> Good physical fitness required for most activities</li>
                    <li>• <strong>Medical conditions:</strong> Inform guides of any conditions</li>
                    <li>• <strong>Pregnancy:</strong> Not recommended for pregnant women</li>
                    <li>• <strong>Insurance:</strong> Travel insurance covering adventure sports advised</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Safety Standards</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• All operators provide life jackets and helmets</li>
                    <li>• Professional guides certified in water safety</li>
                    <li>• Safety briefings mandatory before all activities</li>
                    <li>• Rescue kayakers accompany rafting groups</li>
                    <li>• First aid equipment available</li>
                    <li>• Choose reputable operators with good safety records</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Choosing Operators */}
          <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">Choosing Activity Operators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Reputable Operators:</strong> Several well-established adventure companies operate in Kithulgala including Adventure Team, Borderlands, Kithulgala Adventures, and RnR Adventure. Look for operators with good online reviews and proper safety equipment.
                </p>
                <p>
                  <strong>What&apos;s Included:</strong> Most packages include all safety equipment, professional guides, rafting/activity itself, and often lunch. Some offer transport from Colombo, photos/videos, and changing facilities. Clarify what&apos;s included when booking.
                </p>
                <p>
                  <strong>Booking:</strong> During peak season (June-August), book 2-3 days in advance. For day trips from Colombo, many operators offer pickup and drop-off service. Overnight packages often include accommodation at partner hotels or camps.
                </p>
                <p>
                  <strong>Pricing:</strong> Expect to pay $30-50 USD for rafting, $25-40 for canyoning, $35-50 for abseiling. Package deals combining multiple activities offer better value. Prices usually include all equipment and guides but confirm before booking.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Accommodation */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Kithulgala</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="text-lg">Riverside Hotels</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Several comfortable hotels sit right on the Kelani River with beautiful views. Options include Borderlands, Plantation Hotel, and River Side Eco Lodge. Rooms range from $40-100 USD per night. Most offer in-house adventure activity booking.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Eco-Lodges & Campsites</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                For a more immersive rainforest experience, several eco-lodges and organized campsites offer basic but comfortable accommodation in natural surroundings. Camping under the stars by the river is popular with adventure groups. Prices from $15-40 USD.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="text-lg">Budget Guesthouses</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Several family-run guesthouses in Kithulgala town offer budget-friendly rooms from $10-30 USD per night. Basic but clean, these are good options for backpackers and those on tight budgets. Walking distance to activity centers.
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Why Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Visit Kithulgala?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="text-lg">Adventure Hub</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Sri Lanka&apos;s premier destination for white water rafting and adventure sports. Multiple activities in one location mean you can try rafting, canyoning, abseiling, and jungle trekking all in one trip. Something for every thrill level.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Natural Beauty</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Pristine rainforest, crystal-clear river waters, cascading waterfalls, and abundant wildlife create a stunning natural playground. The scenery alone makes the journey worthwhile, even before you start any activities.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="text-lg">Accessible Adventure</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Just 2.5 hours from Colombo makes Kithulgala perfect for day trips or quick weekend getaways. Professional operators ensure activities are safe and accessible even for first-timers. Great for families, friends, and solo travelers alike.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Kithulgala adventure with these incredible natural attractions within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Makandawa Forest Reserve pristine rainforest and biodiversity"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Adjacent to town
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Makandawa Forest Reserve</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A 1,000-hectare virgin rainforest reserve with incredible biodiversity. Perfect for serious trekkers, bird watchers, and nature photographers seeking pristine jungle experience.
                </p>
                <div className="flex items-center text-xs text-green-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Adjacent to Kithulgala
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">Nature Reserve</Badge>
                  <Badge variant="outline" className="text-xs">Bird Watching</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Belilena Cave archaeological site with ancient history"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">
                  15 mins drive
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Belilena Cave</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ancient archaeological site with evidence of human habitation from 32,000 years ago. Massive cave chambers accessible via scenic trek through plantations.
                </p>
                <div className="flex items-center text-xs text-amber-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  7 km from Kithulgala
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">Archaeological</Badge>
                  <Badge variant="outline" className="text-xs">Free Entry</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Nalagana Ella waterfall cascading through jungle"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  10 mins drive
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Nalagana Ella Waterfall</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Beautiful cascade hidden in the rainforest, accessible via short trek. Less crowded than major falls, perfect for swimming and photography in natural surroundings.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  5 km from Kithulgala
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">Waterfall</Badge>
                  <Badge variant="outline" className="text-xs">Swimming</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Handun Ella waterfall with natural pool"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded">
                  20 mins drive
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Handun Ella Waterfall</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Picturesque waterfall with deep natural pool at the base. Popular local swimming spot surrounded by lush vegetation. Great for family visits and picnics.
                </p>
                <div className="flex items-center text-xs text-cyan-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  12 km from Kithulgala
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">Natural Pool</Badge>
                  <Badge variant="outline" className="text-xs">Family Friendly</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Aberdeen Falls cascading 98 meters through jungle"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  30 mins drive
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Aberdeen Falls</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Spectacular 98-meter waterfall plunging into a large pool. Requires 30-minute trek through tea estates. Best during wet season for maximum water flow and drama.
                </p>
                <div className="flex items-center text-xs text-purple-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  26 km from Kithulgala
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">Major Attraction</Badge>
                  <Badge variant="outline" className="text-xs">Trekking Required</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Adam's Peak sacred mountain visible from distance"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                  1 hour drive
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Adam&apos;s Peak (Sri Pada)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sacred mountain pilgrimage site at 2,243m elevation. Famous for sunrise treks and sacred footprint at summit. Best combined with Kithulgala for multi-day adventure.
                </p>
                <div className="flex items-center text-xs text-orange-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  40 km from Kithulgala
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">Sacred Site</Badge>
                  <Badge variant="outline" className="text-xs">Hiking</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl">Final Tips for Your Kithulgala Adventure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Kithulgala offers an incredible escape into nature where adventure and beauty combine perfectly. Whether you&apos;re seeking the adrenaline rush of white water rafting, the challenge of waterfall abseiling, or the peaceful joy of jungle trekking and bird watching, this rainforest destination delivers experiences you&apos;ll never forget.
              </p>
              <p className="text-muted-foreground">
                The key to enjoying Kithulgala is embracing the wet zone climate - yes, you will get wet, probably very wet, and that&apos;s all part of the fun! Come prepared with the right attitude, appropriate gear, and an open mind. The professional guides ensure safety while helping you push your boundaries and create amazing memories in one of Sri Lanka&apos;s most beautiful natural settings.
              </p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Best Visited As Part Of:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Day trip from Colombo (arrive early, return evening)</li>
                  <li>• Weekend adventure getaway (1-2 nights)</li>
                  <li>• Combined with Adam&apos;s Peak trek (40 km away)</li>
                  <li>• Part of hill country circuit (en route to Kandy/Nuwara Eliya)</li>
                  <li>• Multi-activity adventure tour of Sri Lanka</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Kithulgala Adventure?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let us help you plan the perfect adventure getaway to Kithulgala with professional operators, comfortable accommodation, and all the thrilling activities you desire.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact-us" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Plan Your Adventure
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
