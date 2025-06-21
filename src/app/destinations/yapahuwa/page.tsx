import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Yapahuwa Sri Lanka: Complete Guide 2024 | Ancient Rock Fortress & Royal Capital",
  description:
    "Explore Yapahuwa, Sri Lanka's medieval rock fortress and ancient capital. Complete guide to the ornate stone stairway, royal palace ruins, and archaeological treasures.",
  keywords:
    "Yapahuwa, rock fortress Sri Lanka, ancient capital, stone stairway, medieval architecture, archaeological site, royal palace",
  openGraph: {
    title: "Yapahuwa: Complete Guide 2024",
    description: "Your ultimate guide to Sri Lanka's magnificent medieval rock fortress",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function YapahuwaravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Magnificent Yapahuwa rock fortress showing the ornate stone stairway and ancient palace ruins against dramatic sky"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Yapahuwa</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Medieval Rock Fortress</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              North Western Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Crown className="w-4 h-4 mr-1" />
              Ancient Royal Capital
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              90m High Rock Fortress
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Yapahuwa: The Lion Rock of the North</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Rising dramatically from the northwestern plains of Sri Lanka, Yapahuwa stands as one of the island's most
              impressive medieval fortresses and a testament to 13th-century architectural brilliance. Often called the
              "Lion Rock of the North," this 90-meter high granite outcrop served as Sri Lanka's capital for 11 years
              and houses some of the finest stone carvings in the country.
            </p>
            <p className="text-lg">
              From the magnificent ornate stairway that rivals Sigiriya in grandeur to the ruins of the royal palace
              that once housed the sacred Tooth Relic, Yapahuwa offers visitors a chance to explore a lesser-known but
              equally fascinating chapter of Sri Lankan history, complete with breathtaking views and remarkable
              archaeological treasures.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Yapahuwa Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Capital Period:</strong> 1273-1284 AD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Height:</strong> 90 meters (295 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Built by:</strong> King Bhuvanekabahu I
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 175km
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous for:</strong> Ornate stone stairway
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2-3 hours
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Rise and Fall of a Medieval Capital</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Historical illustration showing Yapahuwa during its golden age with the royal palace and bustling medieval city"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Artist's impression of Yapahuwa during its golden age as Sri Lanka's capital
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Yapahuwa's story begins in 1273 when King Bhuvanekabahu I chose this strategic rock fortress as his
                capital, moving the seat of power from Polonnaruwa. The location was chosen for its defensive advantages
                and its position along important trade routes connecting the interior with coastal ports.
              </p>
              <p>
                For 11 years, Yapahuwa served as the island's political and religious center, housing the sacred Tooth
                Relic of Buddha in its magnificent palace complex. The king commissioned elaborate stone carvings and
                architectural works that rivaled the greatest achievements of medieval Sri Lankan art.
              </p>
              <p>
                However, the capital's glory was short-lived. After King Bhuvanekabahu's death in 1284, the Tooth Relic
                was moved, and Yapahuwa was gradually abandoned, leaving behind the remarkable ruins we see today.
              </p>
            </div>
          </div>
        </section>

        {/* Main Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Architectural Marvels of Yapahuwa</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* The Ornate Stairway */}
            <Card>
              <CardHeader>
                <CardTitle>1. The Ornate Stone Stairway</CardTitle>
                <CardDescription>Masterpiece of medieval Sri Lankan stone carving</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Intricate stone stairway at Yapahuwa showing elaborate carvings, guardian figures, and architectural details"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The crown jewel of Yapahuwa is its magnificent ornate stairway, considered one of the finest
                      examples of medieval Sinhalese stone carving. This elaborate entrance to the royal palace features
                      intricate sculptures, guardian figures, and decorative motifs that showcase the artistic
                      achievements of 13th-century craftsmen.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Exquisite stone carvings and sculptures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guardian lions and mythical creatures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Intricate floral and geometric patterns
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved after 750+ years
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Royal Palace Ruins */}
            <Card>
              <CardHeader>
                <CardTitle>2. Royal Palace Complex</CardTitle>
                <CardDescription>Ruins of the medieval royal residence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      At the summit of the rock, the ruins of the royal palace complex reveal the grandeur of medieval
                      Sri Lankan architecture. Though much has been lost to time, the remaining foundations, walls, and
                      architectural elements provide insight into the sophisticated planning and construction of this
                      13th-century royal residence.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Foundations of the main palace building
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Remains of the Tooth Relic chamber
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient water storage systems
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic views of surrounding countryside
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Royal palace ruins at Yapahuwa summit showing ancient foundations and panoramic countryside views"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Archaeological Museum */}
            <Card>
              <CardHeader>
                <CardTitle>3. Yapahuwa Archaeological Museum</CardTitle>
                <CardDescription>Artifacts and treasures from the medieval period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Yapahuwa Archaeological Museum displaying medieval artifacts, sculptures, and historical exhibits"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located at the base of the rock, the archaeological museum houses a fascinating collection of
                      artifacts discovered during excavations at Yapahuwa. The exhibits provide context for the site's
                      history and showcase the artistic and cultural achievements of the medieval period.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stone sculptures and architectural fragments
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient coins and jewelry
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Pottery and household items
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical information and site models
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Climbing Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Climbing Yapahuwa: What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">The Ascent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Climbing Route</h4>
                  <p className="text-sm text-muted-foreground">
                    The climb begins with the famous ornate stairway, followed by a series of rock-cut steps and natural
                    paths to reach the summit.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Difficulty Level</h4>
                  <p className="text-sm text-muted-foreground">
                    Moderate difficulty - suitable for most fitness levels but requires careful footing on ancient
                    steps.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Time Required</h4>
                  <p className="text-sm text-muted-foreground">
                    30-45 minutes to reach the summit, plus time to explore the ruins and enjoy the views.
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Safety Tip:</strong> Wear good grip shoes and take your time on the ancient stone steps.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What to Bring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comfortable walking shoes with good grip</li>
                    <li>• Water bottle (1-2 liters)</li>
                    <li>• Sun protection (hat, sunscreen)</li>
                    <li>• Camera for the spectacular views</li>
                    <li>• Light snacks for energy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Climb</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Early morning (7:00-9:00 AM)</li>
                    <li>• Late afternoon (4:00-6:00 PM)</li>
                    <li>• Avoid midday heat</li>
                    <li>• Dry season preferred</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Visitor Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visitor Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Practical Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: 500 LKR</li>
                    <li>• Foreign children: 250 LKR</li>
                    <li>• SAARC nationals: 50 LKR</li>
                    <li>• Local visitors: 30 LKR</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Opening Hours</h4>
                  <p className="text-sm text-muted-foreground">8:00 AM - 6:00 PM daily</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Facilities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Archaeological museum</li>
                    <li>• Parking area</li>
                    <li>• Basic refreshment stalls</li>
                    <li>• Restroom facilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    175km (4-5 hours) via Kurunegala. Regular bus services and private transport available.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Anuradhapura</h4>
                  <p className="text-sm text-muted-foreground">
                    75km (1.5-2 hours) - can be combined with Cultural Triangle tour.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Dambulla</h4>
                  <p className="text-sm text-muted-foreground">
                    85km (2 hours) - good for day trip from Cultural Triangle base.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Transport</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Three-wheelers from Maho town</li>
                    <li>• Private cars and taxis</li>
                    <li>• Organized tour groups</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Panduwasnuwara</CardTitle>
                <CardDescription>Ancient capital ruins</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Panduwasnuwara ancient ruins showing palace foundations and archaeological remains"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Another ancient capital with palace ruins and archaeological significance, 30km from Yapahuwa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Arankele Monastery</CardTitle>
                <CardDescription>Forest monastery ruins</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Arankele forest monastery showing ancient meditation caves and monastic ruins"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Ancient forest monastery with meditation caves and ruins, offering insight into monastic life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ridiyagama Safari Park</CardTitle>
                <CardDescription>Wildlife sanctuary</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Ridiyagama Safari Park showing elephants and other wildlife in natural habitat"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Wildlife park with elephants and other animals, offering a different perspective on the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Your Yapahuwa Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Yapahuwa offers a unique opportunity to explore a lesser-known but equally fascinating chapter of Sri
                Lankan history. As you climb the ornate stairway and explore the royal palace ruins, you're walking in
                the footsteps of medieval kings and experiencing architectural artistry that rivals the island's most
                famous sites.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to appreciate the intricate stone carvings, imagine the grandeur of the medieval court, and
                enjoy the panoramic views from the summit. The relatively few visitors mean you can often explore this
                magnificent site in peaceful solitude, making your experience even more special.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your journey through Sri Lanka's medieval masterpiece! 🏰👑⛰️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
