import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Anuradhapura Sri Lanka: Complete Guide 2024 | Ancient Capital & Sacred City",
  description:
    "Explore Anuradhapura, Sri Lanka's first capital and sacred Buddhist city. Complete guide to ancient ruins, sacred Bodhi tree, and UNESCO World Heritage sites.",
  keywords:
    "Anuradhapura, ancient capital Sri Lanka, sacred Bodhi tree, Buddhist temples, UNESCO World Heritage, ancient ruins, dagobas",
  openGraph: {
    title: "Anuradhapura: Complete Guide 2024",
    description: "Your ultimate guide to Sri Lanka's ancient sacred capital",
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
          src="/placeholder.svg?height=800&width=1200"
          alt="Ancient Ruwanwelisaya dagoba in Anuradhapura with white dome against blue sky and pilgrims visiting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Anuradhapura</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Ancient Sacred Capital</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Sacred Bodhi Tree
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Founded 4th Century BC
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Anuradhapura: Cradle of Buddhism</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step back 2,300 years into Sri Lanka's glorious past at Anuradhapura, the island's first capital and one
              of the oldest continuously inhabited cities in the world. This UNESCO World Heritage site is not just an
              archaeological wonder - it's the sacred heart of Sri Lankan Buddhism, home to the world's oldest recorded
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
                Essential Anuradhapura Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
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
                </div>
                <div className="space-y-3">
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
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sacred Sites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Sites & Ancient Monuments</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Sri Maha Bodhi */}
            <Card>
              <CardHeader>
                <CardTitle>1. Sri Maha Bodhi Tree</CardTitle>
                <CardDescription>The world's oldest recorded tree - 2,300+ years old</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sacred Sri Maha Bodhi tree in Anuradhapura with pilgrims offering prayers and white flags"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This sacred fig tree is the most revered site in Anuradhapura and one of the holiest places in the
                      Buddhist world. Grown from a cutting of the original Bodhi tree in India under which Buddha
                      attained enlightenment, it was brought to Sri Lanka in 288 BC by Sanghamitta Theri.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        World's oldest recorded tree with documented history
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Direct descendant of Buddha's enlightenment tree
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
                      Built by King Dutugemunu in 140 BC, this magnificent white dagoba stands 103 meters tall and is
                      considered one of the finest examples of ancient Sinhalese architecture. The structure contains
                      sacred relics of Buddha and remains an active pilgrimage site.
                    </p>
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
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
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
                <CardDescription>Once the world's third tallest structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 3rd century AD, Jetavanaramaya was once the world's third tallest structure after the
                      pyramids of Giza. Though partially ruined, it still stands at an impressive 70 meters and
                      showcases the engineering prowess of ancient Sri Lankan civilization.
                    </p>
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
                        Contains Buddha's sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ongoing archaeological excavations
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* More Sacred Sites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Sacred Sites</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Abhayagiri Monastery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Historical Significance</h4>
                  <p className="text-sm text-muted-foreground">
                    Once housed 5,000 monks and was a major center of Buddhist learning for over 1,000 years.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 75-meter tall dagoba</li>
                    <li>• Extensive monastery ruins</li>
                    <li>• Ancient hospital and medical facilities</li>
                    <li>• Samadhi Buddha statue</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Thuparamaya Dagoba</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">First Dagoba in Sri Lanka</h4>
                  <p className="text-sm text-muted-foreground">
                    Built in 3rd century BC, it's the oldest dagoba in Sri Lanka and contains Buddha's collarbone relic.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Unique Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bell-shaped design (original style)</li>
                    <li>• Contains Buddha's collarbone</li>
                    <li>• Surrounded by stone pillars</li>
                    <li>• Restored multiple times</li>
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

        {/* Archaeological Wonders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Archaeological Wonders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Isurumuniya Temple</CardTitle>
                <CardDescription>Rock temple with famous carvings</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Isurumuniya rock temple showing ancient stone carvings and cave architecture"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for the "Isurumuniya Lovers" carving and beautiful rock-cut architecture from the 3rd century
                  BC.
                </p>
              </CardContent>
            </Card>

            <Card>
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Twin Ponds (Kuttam Pokuna)</CardTitle>
                <CardDescription>Ancient hydraulic engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Twin Ponds showing sophisticated ancient water management system with stone steps"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Sophisticated bathing pools for monks, showcasing advanced hydraulic engineering from ancient times.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Visiting Guide</h2>
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
                    <li>• Don't point feet toward Buddha statues</li>
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
                Anuradhapura is more than an archaeological site - it's a living testament to 2,300 years of continuous
                Buddhist civilization. As you cycle through this ancient city, you're following paths walked by kings,
                monks, and pilgrims for over two millennia. Each dagoba, each carved stone, and each sacred tree tells a
                story of faith, artistry, and human achievement.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to sit quietly at the sacred Bodhi tree, marvel at the engineering genius of the ancient
                dagobas, and appreciate the spiritual atmosphere that has made this city a pilgrimage destination for
                centuries. Remember that you're visiting not just historical monuments, but active places of worship
                that continue to inspire devotion and wonder.
              </p>
              <p className="text-muted-foreground font-medium">
                May your journey through this sacred city bring you peace, wisdom, and a deeper appreciation for Sri
                Lanka's incredible spiritual heritage! 🙏🌳✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
