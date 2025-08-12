import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Anchor, TriangleAlert } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Trincomalee Sri Lanka: Complete Guide 2025 | Beaches, Temples & Natural Harbor",
  description:
    "Discover Trincomalee, Sri Lankas eastern coastal gem. Complete guide to pristine beaches, ancient temples, whale watching, and one of the worlds finest natural harbors.",
  keywords:
    "Trincomalee, Sri Lanka beaches, whale watching, Nilaveli beach, Uppuveli, Koneswaram temple, natural harbor, eastern coast",
  openGraph: {
    title: "Trincomalee: Complete Travel Guide 2025",
    description: "Your ultimate guide to Sri Lankas eastern coastal paradise",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function TrincomaleeTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Trinco.jpeg"
          alt="Stunning aerial view of Trincomalee showing pristine beaches, turquoise waters, and the ancient Koneswaram temple on rocky cliffs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trincomalee</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lankas Eastern Coastal Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Anchor className="w-4 h-4 mr-1" />
              Worlds 5th Largest Natural Harbor
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              Pristine Beaches & Whale Watching
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Trincomalee: Where History Meets Paradise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover Trincomalee, Sri Lankas best-kept secret on the stunning eastern coast. This ancient port city
              boasts one of the worlds finest natural harbors, pristine white sand beaches, crystal-clear turquoise
              waters, and a rich tapestry of Tamil, Sinhalese, and colonial history spanning over 2,000 years.
            </p>
            <p className="text-lg">
              From the sacred Koneswaram Temple perched dramatically on Swami Rock to the untouched beaches of Nilaveli
              and Uppuveli, from incredible whale watching opportunities to world-class diving and snorkeling,
              Trincomalee offers an authentic Sri Lankan coastal experience away from the crowds of the south and west
              coasts.
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
                Essential Trincomalee Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Ancient History:</strong> Over 2,000 years old
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Harbor Ranking:</strong> Worlds 5th largest natural harbor
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Best Beach Season:</strong> May to September
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 257km (5-6 hours)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous for:</strong> Whale watching & pristine beaches
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Ideal Stay Duration:</strong> 3-5 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Trincomalee</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Koneswaram Temple */}
            <Card>
              <CardHeader>
                <CardTitle>1. Koneswaram Temple</CardTitle>
                <CardDescription>Ancient Hindu temple on dramatic clifftop</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Koneshwaram.jpeg"
                    alt="Koneswaram Temple perched on Swami Rock cliff overlooking the Indian Ocean with colorful gopuram"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Perched dramatically on Swami Rock, 130 feet above the Indian Ocean, this ancient Hindu temple
                      dedicated to Lord Shiva is one of the Pancha Ishwarams (five abodes of Shiva) in Sri Lanka. The
                      temple offers breathtaking ocean views and spectacular sunrises.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 2,000 years of continuous worship
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise and ocean views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Dravidian architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sacred to both Hindus and Buddhists
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nilaveli Beach */}
            <Card>
              <CardHeader>
                <CardTitle>2. Nilaveli Beach</CardTitle>
                <CardDescription>Pristine white sand paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Often called one of Sri Lankas most beautiful beaches, Nilaveli stretches for miles with
                      powder-white sand, crystal-clear turquoise waters, and minimal development. Its perfect for
                      swimming, sunbathing, and water sports in a pristine tropical setting.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Miles of pristine white sand
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear, calm waters perfect for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent snorkeling and diving opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded than southern beaches
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Pristine Nilaveli Beach showing white sand, turquoise waters, and palm trees with few tourists"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pigeon Island */}
            <Card>
              <CardHeader>
                <CardTitle>3. Pigeon Island National Park</CardTitle>
                <CardDescription>Marine sanctuary with incredible coral reefs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Pigeon Island showing coral reefs, tropical fish, and snorkelers in crystal clear waters"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a short boat ride from Nilaveli Beach, this marine national park consists of two small
                      islands surrounded by some of Sri Lankas best coral reefs. Its a snorkeling and diving paradise
                      with over 100 species of coral and 300 species of fish.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 coral species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        300+ species of reef fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Blacktip reef sharks and sea turtles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent visibility for diving
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>4. Hot water wells</CardTitle>
                <CardDescription>Marine sanctuary with incredible coral reefs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Pigeon Island showing coral reefs, tropical fish, and snorkelers in crystal clear waters"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a short boat ride from Nilaveli Beach, this marine national park consists of two small
                      islands surrounded by some of Sri Lankas best coral reefs. Its a snorkeling and diving paradise
                      with over 100 species of coral and 300 species of fish.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 coral species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        300+ species of reef fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Blacktip reef sharks and sea turtles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent visibility for diving
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle>5. Giri handu saya</CardTitle>
                <CardDescription>First stupa in Sri Lanka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Girihadusaya.jpeg"
                    alt="Pigeon Island showing coral reefs, tropical fish, and snorkelers in crystal clear waters"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Giri handu saya was the first stupa built in Sri Lanka, located in Trincomalee. It is a significant historical and religious site, believed to have been constructed during the reign of King Devanampiya Tissa in the 3rd century BC.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                       <li className="flex items-start gap-2">
                        <TriangleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Not Suitable for Swimming or Snorkeling, because of the strong currents and rocky seabed.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 coral species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        300+ species of reef fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Blacktip reef sharks and sea turtles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent visibility for diving
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Arisi Male beach</CardTitle>
                <CardDescription>Beach with uncommons stand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Arisimale.jpeg"
                    alt="Pigeon Island showing coral reefs, tropical fish, and snorkelers in crystal clear waters"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      "Arisi Male" beach is a hidden gem in Trincomalee, known for its unique sand formations and tranquil atmosphere.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                       <li className="flex items-start gap-2">
                        <TriangleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Not Suitable for Swimming or Snorkeling, because of the strong currents and rocky seabed.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 coral species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        300+ species of reef fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Blacktip reef sharks and sea turtles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent visibility for diving
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Whale Watching */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Class Whale Watching</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Trincomalee offers some of the worlds best whale watching opportunities, with blue whales, sperm
                whales, and dolphins frequently spotted in the deep waters off the coast. The continental shelf drops
                dramatically close to shore, bringing these magnificent creatures within easy reach.
              </p>
              <p>
                The best season runs from May to October when the seas are calm and whale activity is at its peak. Tours
                typically last 3-4 hours and have high success rates for sightings, especially of blue whales - the
                largest animals on Earth.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">What You Might See:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Blue whales (largest animals on Earth)</li>
                  <li>• Sperm whales and pilot whales</li>
                  <li>• Spinner and bottlenose dolphins</li>
                  <li>• Flying fish and sea turtles</li>
                  <li>• Various seabird species</li>
                </ul>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Blue whale surfacing near Trincomalee with whale watching boat and excited tourists in background"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* More Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Uppuveli Beach</CardTitle>
                <CardDescription>Quieter alternative to Nilaveli</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Peaceful Uppuveli Beach with golden sand, fishing boats, and local fishermen"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A more local and authentic beach experience with fishing boats, fewer tourists, and beautiful sunrises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fort Frederick</CardTitle>
                <CardDescription>Colonial fort with harbor views</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Historic Fort Frederick showing colonial architecture and panoramic harbor views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Built by the Portuguese and later occupied by Dutch and British, offering great harbor views and
                  historical insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lovers Leap</CardTitle>
                <CardDescription>Dramatic clifftop viewpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Lovers Leap cliff showing dramatic drop to ocean with panoramic coastal views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A dramatic cliff near Koneswaram Temple with stunning ocean views and a tragic local legend.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Uppuveli Beach</CardTitle>
                <CardDescription>Quieter alternative to Nilaveli</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Peaceful Uppuveli Beach with golden sand, fishing boats, and local fishermen"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A more local and authentic beach experience with fishing boats, fewer tourists, and beautiful sunrises.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Uppuveli Beach</CardTitle>
                <CardDescription>Quieter alternative to Nilaveli</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Peaceful Uppuveli Beach with golden sand, fishing boats, and local fishermen"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A more local and authentic beach experience with fishing boats, fewer tourists, and beautiful sunrises.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Uppuveli Beach</CardTitle>
                <CardDescription>Quieter alternative to Nilaveli</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Peaceful Uppuveli Beach with golden sand, fishing boats, and local fishermen"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A more local and authentic beach experience with fishing boats, fewer tourists, and beautiful sunrises.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Trincomalee</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dry, sunny weather</li>
                  <li>• Calm seas perfect for swimming</li>
                  <li>• Best whale watching season</li>
                  <li>• Ideal for water sports</li>
                  <li>• Higher accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April & October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional rain showers</li>
                  <li>• Fewer crowds</li>
                  <li>• Good value for money</li>
                  <li>• Still good for beach activities</li>
                  <li>• Mixed weather conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Monsoon Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall and rough seas</li>
                  <li>• Many beach activities suspended</li>
                  <li>• Lowest accommodation prices</li>
                  <li>• Good for temple visits</li>
                  <li>• Limited whale watching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Water Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Diving & Snorkeling</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore coral reefs at Pigeon Island and various dive sites with excellent visibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Whale Watching</h4>
                  <p className="text-sm text-muted-foreground">
                    Half-day boat trips to spot blue whales, sperm whales, and dolphins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Water Sports</h4>
                  <p className="text-sm text-muted-foreground">
                    Kayaking, windsurfing, and jet skiing available at major beaches.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Temple Visits</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore ancient Hindu and Buddhist temples with rich history and architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Markets</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit fish markets and local bazaars for authentic cultural experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Historical Sites</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore colonial forts and archaeological sites dating back centuries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Trincomalee Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Trincomalee offers an authentic Sri Lankan coastal experience that combines pristine natural beauty with
                rich cultural heritage. From the spiritual atmosphere of ancient temples to the thrill of spotting blue
                whales in their natural habitat, this eastern gem provides experiences that are both profound and
                exhilarating.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to appreciate the slower pace of life here, respect the local customs and religious sites, and
                immerse yourself in the natural wonders that make Trincomalee special. Whether youre seeking adventure
                on the water or peace on pristine beaches, this coastal paradise will exceed your expectations.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your journey to Sri Lankas eastern coastal paradise! 🌊🐋🏛️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
