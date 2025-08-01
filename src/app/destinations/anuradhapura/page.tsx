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
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Sacred City
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
                      This sacred fig tree is the most revered site in Anuradhapura and one of the holiest places in the
                      Buddhist world. Grown from a cutting of the original Bodhi tree in India under which Buddha
                      attained enlightenment, it was brought to Sri Lanka in 288 BC by Sanghamitta Theri.
                    </p>
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
                    <div className="relative mt-6">
                      <Link href="/destinations/horton-plains">
                        <Button
                          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Discover More about Sri Maha Bodhi
                        </Button>
                      </Link>
                      {/* Blinking finger pointer pointing to button */}
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-pulse">
                        <div className="text-2xl animate-bounce">👉</div>
                      </div>
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
                    <div className="relative mt-6">
                      <Link href="/destinations/ruwan-wali-saya">
                        <Button
                          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Explore Ruwanwelisaya Dagaba
                        </Button>
                      </Link>
                      {/* Blinking finger pointer pointing to button */}
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-pulse">
                        <div className="text-2xl animate-bounce">👉</div>
                      </div>
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
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 3rd century AD, Jetavanaramaya was once the worlds third tallest structure after the
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
                        Contains Buddhas sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ongoing archaeological excavations
                      </li>
                    </ul>
                    <div className="relative mt-6">
                      <Link href="/destinations/jetavanaramaya">
                        <Button
                          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Visit Jetavanaramaya Dagoba
                        </Button>
                      </Link>
                      {/* Blinking finger pointer pointing to button */}
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-pulse">
                        <div className="text-2xl animate-bounce">👉</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>4. Thuparamaya Dagoba</CardTitle>
                <CardDescription>Once the worlds third tallest structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Thooparamaya.jpeg"
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 3rd century AD, Jetavanaramaya was once the worlds third tallest structure after the
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
                        Contains Buddhas sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ongoing archaeological excavations
                      </li>
                    </ul>
                    <div className="relative mt-6">
                      <Link href="/destinations/thuparamaya">
                        <Button
                          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Explore Thuparamaya Dagoba
                        </Button>
                      </Link>
                      {/* Blinking finger pointer pointing to button */}
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-pulse">
                        <div className="text-2xl animate-bounce">👉</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>5. Lovamahapaya</CardTitle>
                <CardDescription>Once the worlds third tallest structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Lovamahapaya.jpeg"
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 3rd century AD, Jetavanaramaya was once the worlds third tallest structure after the
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
                        Contains Buddhas sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ongoing archaeological excavations
                      </li>
                    </ul>
                    <div className="relative mt-6">
                      <Link href="/destinations/lovamahapaya">
                        <Button
                          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Discover Lovamahapaya
                        </Button>
                      </Link>
                      {/* Blinking finger pointer pointing to button */}
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-pulse">
                        <div className="text-2xl animate-bounce">👉</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>6. Abhayagiri Dagaba</CardTitle>
                <CardDescription>Once the worlds third tallest structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Abhayagiriya.jpeg"
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This stupa is bit similar to jetawanaramaya, built in the 3rd century AD, but the shape is bit different.
                      <Link href="/destinations/anuradhapura/abhyagiri" className="text-blue-600 hover:underline">
                        Read more about Shapes of Stupa</Link>
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
                        Contains Buddhas sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ongoing archaeological excavations
                      </li>
                    </ul>
                    <div className="relative mt-6">
                      <Link href="/destinations/abhayagiri">
                        <Button
                          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Learn About Abhayagiri
                        </Button>
                      </Link>
                      {/* Blinking finger pointer pointing to button */}
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-pulse">
                        <div className="text-2xl animate-bounce">👉</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>7. Mirisavetiya Stupa</CardTitle>
                <CardDescription>Once the worlds third tallest structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Mirisawatiya.jpeg"
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 3rd century AD, Jetavanaramaya was once the worlds third tallest structure after the
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
                        Contains Buddhas sash relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ongoing archaeological excavations
                      </li>
                    </ul>
                    <div className="relative mt-6">
                      <Link href="/destinations/mirisavetiya">
                        <Button
                          className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Visit Mirisavetiya Stupa
                        </Button>
                      </Link>
                      {/* Blinking finger pointer pointing to button */}
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-pulse">
                        <div className="text-2xl animate-bounce">👉</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>8. Lankarama Dagaba</CardTitle>
                <CardDescription>Once the worlds third tallest structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Lankaramaya.jpeg"
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 3rd century AD, Jetavanaramaya was once the worlds third tallest structure after the
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
                        Contains Buddhas sash relic
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
            <Card>
              <CardHeader>
                <CardTitle>Sandahirusaya</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Sandahirusaya.jpeg"
                    alt="Massive Jetavanaramaya dagoba showing its impressive scale and ancient brick construction"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      If you viisted to Anuradhapura you might have seen this stupa, its similar to teh Ruwanwalisaya but not that much big.
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
                        Contains Buddhas sash relic
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
                    Built in 3rd century BC, its the oldest dagoba in Sri Lanka and contains Buddhas collarbone relic.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Unique Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bell-shaped design (original style)</li>
                    <li>• Contains Buddhas collarbone</li>
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
          <h2 className="text-3xl font-bold mb-6">Near by Archaeological Wonders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            

            <Link href="/destinations/isurumuniya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Isurumuniya Temple</CardTitle>
                  <CardDescription>Ancient city</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Isurumuniya.jpeg"
                    alt="Isurumuniya rock temple showing ancient stone carvings and cave architecture"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Famous for the &quot;Isurumuniya Lovers&quot; carving and beautiful rock-cut architecture from the 3rd century BC.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    See More →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/ranmusuuyana" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Ranmusu uyana with universal stargate</CardTitle>
                  <CardDescription>Ancient city</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Minneriyanationalpark"
                    alt="View of Sigiriya Rock from Pidurangala Rock"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Explore the mysterious Ranmusu uyana, an ancient site with unique stone carvings and a universal stargate.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    See More →
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/destinations/mihinthalaya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Mihinthalaya</CardTitle>
                  <CardDescription>Scared site </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Minneriyanationalpark"
                    alt="View of Sigiriya Rock from Pidurangala Rock"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                   Just a few kilometers from Anuradhapura, Mihinthalaya is a sacred site where Buddhism was first introduced to Sri Lanka.
                  </p>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    See More →
                  </span>
                </CardContent>
              </Card>
            </Link>


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
                  src="/Kuttampokuna.jpeg"
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
