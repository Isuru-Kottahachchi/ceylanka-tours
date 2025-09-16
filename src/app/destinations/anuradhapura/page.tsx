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

        {/* How to Get There */}
        <section className="mb-12">
          <Card className="border-l-4 border-blue-500">
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
                    <li>• <strong>Route:</strong> Colombo → Kurunegala → Anuradhapura</li>
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
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Start early morning to avoid traffic and heat</li>
                  <li>• Carry water and snacks for the journey</li>
                  <li>• Book accommodations in advance during peak season</li>
                  <li>• Consider staying overnight to explore all sites properly</li>
                </ul>
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
                    <div className="mt-6">
                      <Link href="/destinations/jaya-sri-maha-bodhi">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Discover More about Sri Maha Bodhi
                        </Button>
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
                    <div className="mt-6">
                      <Link href="/destinations/ruwanwali-saya">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Explore Ruwanwelisaya Dagaba
                        </Button>
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
                    <div className="mt-6">
                      <Link href="/destinations/jethawanaramaya">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Visit Jethawanaramaya Dagoba
                        </Button>
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
                    <div className="mt-6">
                      <Link href="/destinations/thuparamaya">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Explore Thuparamaya Dagoba
                        </Button>
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
                    <div className="mt-6">
                      <Link href="/destinations/lovamahapaya">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Discover Lovamahapaya
                        </Button>
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
                    <div className="mt-6">
                      <Link href="/destinations/abhayagiri">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Learn About Abhayagiri
                        </Button>
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
                    <div className="mt-6">
                      <Link href="/destinations/mirisavetiya">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Visit Mirisavetiya Stupa
                        </Button>
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
                    <div className="mt-6">
                      <Link href="/destinations/lankarama">
                        <Button
                          className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                          variant="default"
                        >
                          Explore Lankarama Dagaba
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <div className="mt-6">
                    <Link href="/destinations/abhayagiri">
                      <Button
                        className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                        variant="default"
                      >
                        Discover More
                      </Button>
                    </Link>
                  </div>
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
                  <div className="mt-6">
                    <Link href="/destinations/thuparamaya">
                      <Button
                        className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                        variant="default"
                      >
                        See More
                      </Button>
                    </Link>
                  </div>
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
                  <div className="mt-4">
                    <Button
                      className="mt-2 h-9 px-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer text-sm"
                      variant="default"
                    >
                      See More →
                    </Button>
                  </div>
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
                    src="/Ranmusuuyana.jpeg"
                    alt="View of Sigiriya Rock from Pidurangala Rock"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Explore the mysterious Ranmusu uyana, an ancient site with unique stone carvings and a universal stargate.
                  </p>
                  <div className="mt-4">
                    <Button
                      className="mt-2 h-9 px-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer text-sm"
                      variant="default"
                    >
                      See More →
                    </Button>
                  </div>
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
                    src="/Mihinthale.jpg"
                    alt="View of Sigiriya Rock from Pidurangala Rock"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                   Just a few kilometers from Anuradhapura, Mihinthalaya is a sacred site where Buddhism was first introduced to Sri Lanka.
                  </p>
                  <div className="mt-4">
                    <Button
                      className="mt-2 h-9 px-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer text-sm"
                      variant="default"
                    >
                      See More →
                    </Button>
                  </div>
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
                <div className="mt-4">
                  <Link href="/destinations/kuttam-pokuna">
                    <Button
                      className="mt-2 h-9 px-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer text-sm"
                      variant="default"
                    >
                      See More →
                    </Button>
                  </Link>
                </div>
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
