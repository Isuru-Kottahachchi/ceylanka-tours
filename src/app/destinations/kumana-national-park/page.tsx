import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TreePine, Camera, Binoculars, Bird } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kumana National Park Sri Lanka: Complete Wildlife Guide 2025 | Bird Paradise & Safari",
  description:
    "Discover Kumana National Park, Sri Lanka's premier birdwatching destination. Complete guide to wildlife, safari tours, and over 200 bird species in this pristine wilderness.",
  keywords:
    "Kumana National Park, Sri Lanka safari, birdwatching Sri Lanka, wildlife photography, painted stork, pelican, elephant safari, crocodile watching, Ampara district",
  openGraph: {
    title: "Kumana National Park: Complete Wildlife Guide 2025",
    description: "Your ultimate guide to Sri Lanka's bird paradise and wildlife haven",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function KumanaNationalParkGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/kumana-birds.jpeg"
          alt="Colorful painted storks and pelicans gathering at Kumana lagoon with lush mangrove background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kumana National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Bird Paradise & Wildlife Haven</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Bird className="w-4 h-4 mr-1" />
              200+ Bird Species
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <TreePine className="w-4 h-4 mr-1" />
              35,664 Hectares
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
          <a href="#wildlife-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Wildlife Guide</a>
          <a href="#best-time-safari" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Safari Guide</a>
          <a href="#did-you-know" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Did You Know</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kumana National Park: Nature&apos;s Bird Paradise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover the magic of Kumana National Park, Sri Lanka&apos;s premier birdwatching destination and one of the country&apos;s most important wildlife sanctuaries. Located in the southeastern corner of Sri Lanka, this 35,664-hectare wilderness is famous for its incredible diversity of bird life, with over 200 species calling this pristine ecosystem home.
            </p>
            <p className="text-lg mb-4">
              Known locally as &quot;Yala East,&quot; Kumana is a photographer&apos;s paradise where thousands of migratory and resident birds gather around the famous Kumana Tank and lagoon system. From magnificent painted storks and spot-billed pelicans to colorful bee-eaters and kingfishers, this park offers some of the best wildlife viewing opportunities in Asia.
            </p>
            <p className="text-lg">
              Beyond its feathered residents, Kumana is home to Sri Lankan elephants, leopards, crocodiles, and countless other species that thrive in this unique coastal ecosystem where dry zone forest meets lagoons, mangroves, and pristine beaches along the Indian Ocean.
            </p>
          </div>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Kumana Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Kumana Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1970 as National Park
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Size:</strong> 35,664 hectares (88,136 acres)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bird className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Bird Species:</strong> 200+ recorded species
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Best Season:</strong> April to July (nesting)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Ecosystems:</strong> Mangroves, lagoons, dry forest
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Safari Duration:</strong> 3-6 hours
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/kumana-lagoon.jpg"
                      alt="Kumana lagoon with diverse water birds and mangrove ecosystem"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">UNESCO Ramsar Wetland Site</p>
                      <p className="text-sm text-blue-800">
                        Kumana&apos;s wetlands are internationally recognized for their importance to migratory birds. The park serves as a crucial stopover point on the Central Asian Flyway, hosting thousands of birds during migration seasons.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">2-3 days with early morning and evening safaris for the best wildlife viewing experience.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Photography Time</p>
                      <p className="text-sm text-green-800">Golden hour (6-8 AM and 5-7 PM) for stunning bird photography with perfect lighting.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Get to Kumana */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Kumana National Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Via Arugam Bay (Most Popular)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 18km from Arugam Bay</li>
                      <li>• <strong>Duration:</strong> 30 minutes by vehicle</li>
                      <li>• <strong>Route:</strong> Arugam Bay → Panama → Kumana</li>
                      <li>• <strong>Best option:</strong> Most convenient base</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">From Colombo</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 390km (242 miles)</li>
                      <li>• <strong>Duration:</strong> 6-7 hours</li>
                      <li>• <strong>Route:</strong> A4 → Monaragala → Pottuvil</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Tissamaharama</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 65km via Kataragama</li>
                      <li>• <strong>Duration:</strong> 1.5 hours</li>
                      <li>• <strong>Route:</strong> Tissa → Kataragama → Panama</li>
                      <li>• <strong>Combine:</strong> Perfect with Yala safari</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">Park Entrance</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Main Gate:</strong> Okanda entrance</li>
                      <li>• <strong>Opening:</strong> 6:00 AM - 6:00 PM</li>
                      <li>• <strong>Permits:</strong> Available at entrance</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Book safari vehicles in advance during peak season</li>
                    <li>• Stay in Arugam Bay for easy park access and beach relaxation</li>
                    <li>• Combine with Lahugala Kitulana National Park visit</li>
                    <li>• Bring binoculars for optimal birdwatching experience</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Wildlife Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="wildlife-guide">Incredible Wildlife of Kumana</h2>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-4">
              Bird Paradise: Over 200 Species in One Ecosystem
            </h3>

            {/* Water Birds */}
            <Card>
              <CardHeader>
                <CardTitle>Water Birds & Wetland Species</CardTitle>
                <CardDescription>The stars of Kumana&apos;s lagoon and tank systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-start">
                  <div className="order-2 lg:order-1">
                    <Image
                      src="/painted-stork.jpeg"
                      alt="Magnificent painted stork with distinctive black and white plumage feeding in Kumana lagoon"
                      width={400}
                      height={300}
                      className="rounded-lg w-full object-cover aspect-[4/3]"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h4 className="font-semibold text-lg mb-3">Featured Water Birds</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Painted Storks:</strong> Large wading birds with striking black and white plumage and bright pink bills. They nest in large colonies during April-July.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Spot-billed Pelicans:</strong> Massive water birds with enormous pouches, often seen fishing cooperatively in groups.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Asian Openbills:</strong> Unique storks with gap-toothed bills perfectly adapted for eating mollusks and crustaceans.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Various Herons:</strong> Including Grey Herons, Purple Herons, and the stunning Black-crowned Night Herons.
                        </div>
                      </li>
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 mt-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-2">Best Viewing Spots</h4>
                      <p className="text-sm text-blue-700 dark:text-gray-200">
                        Kumana Tank and the main lagoon offer the best water bird watching. Visit during early morning (6-8 AM) when birds are most active.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forest Birds */}
            <Card>
              <CardHeader>
                <CardTitle>Forest Birds & Colorful Species</CardTitle>
                <CardDescription>Vibrant birds of the dry zone forests and mangroves</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-start">
                  <div className="order-2 lg:order-1">
                    <h4 className="font-semibold text-lg mb-3">Spectacular Forest Birds</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Sri Lanka Blue Magpie:</strong> Endemic bird with brilliant blue plumage and a distinctive long tail, often seen in small flocks.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Bee-eaters:</strong> Colorful birds including Blue-tailed and Green Bee-eaters that catch insects in spectacular aerial displays.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Kingfishers:</strong> Multiple species including Common, White-throated, and Pied Kingfishers fishing in the lagoons.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Hornbills:</strong> The impressive Malabar Pied Hornbill with its distinctive casque and loud calls echoing through the forest.
                        </div>
                      </li>
                    </ul>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400 dark:border-yellow-600 mt-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-100 mb-2">Photography Tip</h4>
                      <p className="text-sm text-yellow-700 dark:text-gray-200">
                        Use a telephoto lens (300mm+) for forest birds. The mangrove areas near the lagoon edges offer excellent opportunities for close-up shots.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/blue-magpie.jpeg"
                      alt="Endemic Sri Lanka Blue Magpie with brilliant blue feathers perched on a branch in Kumana forest"
                      width={400}
                      height={300}
                      className="rounded-lg w-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mammals */}
            <Card>
              <CardHeader>
                <CardTitle>Large Mammals & Reptiles</CardTitle>
                <CardDescription>Elephants, leopards, and ancient reptiles in their natural habitat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-start">
                  <div className="order-2 lg:order-1">
                    <Image
                      src="/kumana-elephant.jpeg"
                      alt="Sri Lankan elephant family bathing and drinking at Kumana Tank surrounded by lush vegetation"
                      width={400}
                      height={300}
                      className="rounded-lg w-full object-cover aspect-[4/3]"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h4 className="font-semibold text-lg mb-3">Magnificent Mammals & Reptiles</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Sri Lankan Elephants:</strong> Herds frequent the tank areas for drinking and bathing, especially during dry season (May-September).
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Sri Lankan Leopards:</strong> These elusive big cats patrol the park, though sightings require patience and luck.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Mugger Crocodiles:</strong> Ancient reptiles bask on lagoon banks and can grow up to 4 meters in length.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Water Buffalo:</strong> Wild buffalo herds graze near water sources and are impressive to observe from a safe distance.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Spotted Deer:</strong> Graceful herds provide prey for leopards and create beautiful photographic opportunities.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Bird Species Cards */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Featured Bird Species Guide</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Painted Stork */}
                <Card className="border-l-4 border-red-400">
                  <CardContent className="p-4">
                    <Image
                      src="/Painted-Stork.webp"
                      alt="Beautiful painted stork with distinctive black and white plumage at Kumana lagoon"
                      width={300}
                      height={650}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🦢</div>
                      <div>
                        <h4 className="font-semibold text-red-700">Painted Stork</h4>
                        <p className="text-xs text-muted-foreground">Mycteria leucocephala</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Large white bird with striking black flight feathers and bright pink-orange bill. Adults reach 1 meter in height with distinctive black head markings.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> April-July (nesting season)</p>
                      <p><strong>Behavior:</strong> Builds large stick nests in colonies</p>
                      <p><strong>Diet:</strong> Fish, frogs, small reptiles</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Spot-billed Pelican */}
                <Card className="border-l-4 border-blue-400">
                  <CardContent className="p-4">
                    <Image
                      src="/spot-billed-pelican.jpeg"
                      alt="Large spot-billed pelican with distinctive spotted bill fishing at Kumana"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🦆</div>
                      <div>
                        <h4 className="font-semibold text-blue-700">Spot-billed Pelican</h4>
                        <p className="text-xs text-muted-foreground">Pelecanus philippensis</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Massive water bird with grey-white plumage and distinctive spotted bill. Can have wingspan up to 2.5 meters and weigh up to 5kg.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Early morning feeding</p>
                      <p><strong>Behavior:</strong> Cooperative fishing in groups</p>
                      <p><strong>Status:</strong> Near threatened species</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Asian Openbill */}
                <Card className="border-l-4 border-green-400">
                  <CardContent className="p-4">
                    <Image
                      src="/asian-openbill-stork.jpeg"
                      alt="Asian openbill stork showing unique gap-billed feeding adaptation"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🦅</div>
                      <div>
                        <h4 className="font-semibold text-green-700">Asian Openbill</h4>
                        <p className="text-xs text-muted-foreground">Anastomus oscitans</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Medium-sized stork with unique gap between upper and lower mandibles. Perfectly adapted for extracting snails from shells.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Wet season (April-September)</p>
                      <p><strong>Behavior:</strong> Specialized mollusk feeder</p>
                      <p><strong>Size:</strong> 68cm length, 1.5m wingspan</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Little Egret */}
                <Card className="border-l-4 border-yellow-400">
                  <CardContent className="p-4">
                    <Image
                      src="/little-egret.jpeg"
                      alt="Elegant little egret with distinctive yellow feet hunting in shallow water"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🕊️</div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Little Egret</h4>
                        <p className="text-xs text-muted-foreground">Egretta garzetta</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Elegant white heron with black bill and distinctive yellow feet ("golden slippers"). Active hunter in shallow waters.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Year-round resident</p>
                      <p><strong>Behavior:</strong> Runs through water chasing fish</p>
                      <p><strong>Habitat:</strong> Lagoon edges and mudflats</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Purple Heron */}
                <Card className="border-l-4 border-purple-400">
                  <CardContent className="p-4">
                    <Image
                      src="/purple-heron.jpeg"
                      alt="Secretive purple heron with distinctive purple-grey plumage camouflaged in reeds"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🦆</div>
                      <div>
                        <h4 className="font-semibold text-purple-700">Purple Heron</h4>
                        <p className="text-xs text-muted-foreground">Ardea purpurea</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Large, secretive heron with distinctive purple-grey plumage and long snake-like neck. Master of camouflage in reed beds.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Dawn and dusk</p>
                      <p><strong>Behavior:</strong> Freezes motionless when hunting</p>
                      <p><strong>Size:</strong> 90cm tall with 1.5m wingspan</p>
                    </div>
                  </CardContent>
                </Card>

                {/* White-breasted Kingfisher */}
                <Card className="border-l-4 border-cyan-400">
                  <CardContent className="p-4">
                    <Image
                      src="/white-breasted-kingfisher.jpeg"
                      alt="Vibrant white-breasted kingfisher with blue wings perched near water"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🐦</div>
                      <div>
                        <h4 className="font-semibold text-cyan-700">White-breasted Kingfisher</h4>
                        <p className="text-xs text-muted-foreground">Halcyon smyrnensis</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Vibrant blue and white kingfisher with chestnut head. Known for its loud, trilling call and spectacular diving fishing technique.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Early morning near water</p>
                      <p><strong>Behavior:</strong> Dives headfirst for fish</p>
                      <p><strong>Call:</strong> Distinctive loud trill</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Other Wildlife Species Cards */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Other Wildlife Species Guide</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Sri Lankan Elephant */}
                <Card className="border-l-4 border-gray-400">
                  <CardContent className="p-4">
                    <Image
                      src="/sri-lankan-elephant-kumana.jpeg"
                      alt="Sri Lankan elephant with distinctive depigmentation patches bathing in Kumana Tank"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🐘</div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Sri Lankan Elephant</h4>
                        <p className="text-xs text-muted-foreground">Elephas maximus maximus</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Smaller than African elephants, with distinctive patches of depigmentation. Endemic subspecies with only 12% of males having tusks.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Dry season at water sources</p>
                      <p><strong>Behavior:</strong> Family herds led by matriarch</p>
                      <p><strong>Size:</strong> Up to 3.2m tall, 5,500kg weight</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Sri Lankan Leopard */}
                <Card className="border-l-4 border-orange-400">
                  <CardContent className="p-4">
                    <Image
                      src="/sri-lankan-leopard.jpeg"
                      alt="Majestic Sri Lankan leopard with distinctive rosette patterns resting on tree branch"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🐆</div>
                      <div>
                        <h4 className="font-semibold text-orange-700">Sri Lankan Leopard</h4>
                        <p className="text-xs text-muted-foreground">Panthera pardus kotiya</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Endemic subspecies and largest predator in Sri Lanka. More robust than other leopard subspecies with distinctive rosette patterns.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Early morning and evening</p>
                      <p><strong>Behavior:</strong> Solitary, excellent climber</p>
                      <p><strong>Status:</strong> Endangered (700-950 remaining)</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Mugger Crocodile */}
                <Card className="border-l-4 border-green-600">
                  <CardContent className="p-4">
                    <Image
                      src="/mugger-crocodile.jpeg"
                      alt="Large mugger crocodile with broad snout basking on Kumana lagoon bank"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🐊</div>
                      <div>
                        <h4 className="font-semibold text-green-700">Mugger Crocodile</h4>
                        <p className="text-xs text-muted-foreground">Crocodylus palustris</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Medium-sized crocodile with broad snout perfect for varied diet. Can live 70+ years and survive months without food.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Midday basking on banks</p>
                      <p><strong>Behavior:</strong> Ambush predator, excellent swimmer</p>
                      <p><strong>Size:</strong> Up to 4-5m length, 450kg weight</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Wild Water Buffalo */}
                <Card className="border-l-4 border-brown-400">
                  <CardContent className="p-4">
                    <Image
                      src="/wild-water-buffalo.jpeg"
                      alt="Wild water buffalo with massive curved horns grazing near Kumana wetlands"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🐃</div>
                      <div>
                        <h4 className="font-semibold text-yellow-800">Wild Water Buffalo</h4>
                        <p className="text-xs text-muted-foreground">Bubalus arnee</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Massive bovine with distinctive curved horns spanning up to 2 meters. Prefers marshy areas and muddy wallows.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Morning and evening grazing</p>
                      <p><strong>Behavior:</strong> Wallows in mud to cool down</p>
                      <p><strong>Size:</strong> Up to 1.8m tall, 1,200kg weight</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Spotted Deer */}
                <Card className="border-l-4 border-amber-400">
                  <CardContent className="p-4">
                    <Image
                      src="/spotted-deer-chital.jpeg"
                      alt="Beautiful spotted deer with white spots and branched antlers grazing in Kumana grasslands"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🦌</div>
                      <div>
                        <h4 className="font-semibold text-amber-700">Spotted Deer (Chital)</h4>
                        <p className="text-xs text-muted-foreground">Axis axis</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Beautiful deer with white spots throughout life. Males have branched antlers and make distinctive alarm calls when leopards are near.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Open grasslands, dawn/dusk</p>
                      <p><strong>Behavior:</strong> Forms large herds, sentinel system</p>
                      <p><strong>Role:</strong> Primary prey for leopards</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Indian Monitor Lizard */}
                <Card className="border-l-4 border-stone-400">
                  <CardContent className="p-4">
                    <Image
                      src="/water-monitor-lizard.jpeg"
                      alt="Large water monitor lizard with forked tongue basking on rocks near water"
                      width={300}
                      height={200}
                      className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-32"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">🦎</div>
                      <div>
                        <h4 className="font-semibold text-stone-700">Water Monitor Lizard</h4>
                        <p className="text-xs text-muted-foreground">Varanus salvator</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Large semi-aquatic lizard reaching 2+ meters. Excellent swimmer and climber with forked tongue for chemical detection.
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Best Time:</strong> Sunny mornings basking</p>
                      <p><strong>Behavior:</strong> Scavenges and hunts actively</p>
                      <p><strong>Diet:</strong> Fish, eggs, small mammals, carrion</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time for Safari */}
        <section className="mb-12" id="best-time-safari">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">Best Time for Safari & Wildlife Viewing</h2>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Birding Season</CardTitle>
                <CardDescription>April to July - Nesting & Migration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Why This Season is Special</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Thousands of water birds arrive for nesting</li>
                      <li>• Painted storks and pelicans in breeding plumage</li>
                      <li>• Active nest-building and courtship displays</li>
                      <li>• Best photography opportunities</li>
                      <li>• Pleasant weather with occasional showers</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-100 font-medium">
                      💡 Pro Tip: Visit in May-June for peak nesting activity when the lagoon comes alive with bird calls and activity!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Elephant Season</CardTitle>
                <CardDescription>August to October - Dry Period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Wildlife Concentration</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Elephants gather around permanent water sources</li>
                      <li>• Easier wildlife spotting due to sparse vegetation</li>
                      <li>• Crocodiles more visible on lagoon banks</li>
                      <li>• Clear skies perfect for photography</li>
                      <li>• Hot weather - bring plenty of water</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-100 font-medium">
                      🦣 Best for: Large mammal viewing and crocodile spotting when water levels are lower.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Daily Schedule */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recommended Safari Schedule</CardTitle>
              <CardDescription>Optimize your wildlife viewing experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Time</th>
                      <th className="text-left p-2 font-semibold">Activity</th>
                      <th className="text-left p-2 font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="px-4 py-2">6:00 AM</td>
                      <td className="px-4 py-2">Early Morning Safari Start</td>
                      <td className="px-4 py-2">Active birds, cool weather, golden light</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">7:00-9:00 AM</td>
                      <td className="px-4 py-2">Main Lagoon & Tank Areas</td>
                      <td className="px-4 py-2">Water birds feeding, elephant sightings</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">9:00-11:00 AM</td>
                      <td className="px-4 py-2">Forest Tracks & Mangroves</td>
                      <td className="px-4 py-2">Forest birds, mammals in shade</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">4:00 PM</td>
                      <td className="px-4 py-2">Afternoon Safari Start</td>
                      <td className="px-4 py-2">Avoiding midday heat, better animal activity</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">5:30-6:00 PM</td>
                      <td className="px-4 py-2">Sunset at Kumana Tank</td>
                      <td className="px-4 py-2">Spectacular sunset shots, evening bird activity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Did You Know Section */}
        <section className="mb-12" id="did-you-know">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">Did You Know? Amazing Kumana Facts</h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-purple-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🦅
                </div>
                <h3 className="font-semibold text-lg mb-2 text-purple-700 dark:text-purple-300">Migration Marvel</h3>
                <p className="text-sm text-muted-foreground">
                  Kumana is a crucial stopover on the Central Asian Flyway. Some birds travel over 10,000 kilometers from Siberia and Mongolia to reach this sanctuary, making it one of the world&apos;s most important bird migration destinations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🥚
                </div>
                <h3 className="font-semibold text-lg mb-2 text-green-700 dark:text-green-300">Nesting Giants</h3>
                <p className="text-sm text-muted-foreground">
                  During peak nesting season, over 20,000 water birds can be found in the park simultaneously. A single tree can host 40-50 painted stork nests, creating &quot;apartment buildings&quot; for birds!
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🌊
                </div>
                <h3 className="font-semibold text-lg mb-2 text-blue-700 dark:text-blue-300">Ancient Lagoon System</h3>
                <p className="text-sm text-muted-foreground">
                  The Kumana lagoon system is over 1,000 years old. Local legends say ancient kings used these waters for royal bathing ceremonies, and the area has been a wildlife sanctuary for centuries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🐊
                </div>
                <h3 className="font-semibold text-lg mb-2 text-orange-700 dark:text-orange-300">Crocodile Kingdom</h3>
                <p className="text-sm text-muted-foreground">
                  Kumana has one of Sri Lanka&apos;s highest crocodile densities. The largest recorded mugger crocodile here was 4.2 meters long and estimated to be over 60 years old!
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🦋
                </div>
                <h3 className="font-semibold text-lg mb-2 text-red-700 dark:text-red-300">Butterfly Paradise</h3>
                <p className="text-sm text-muted-foreground">
                  Beyond birds, Kumana hosts over 40 butterfly species including the stunning Blue Mormon and Rose Swallowtail. The best butterfly watching is during morning hours near water sources.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-400">
              <CardContent className="p-6">
                <div className="mb-3">
                  🌙
                </div>
                <h3 className="font-semibold text-lg mb-2 text-yellow-700 dark:text-yellow-300">Night Symphony</h3>
                <p className="text-sm text-muted-foreground">
                  Kumana transforms at night with a symphony of sounds. Fishing owls, nightjars, and frogmouth birds create an amazing nocturnal chorus, while elephants often visit water sources under moonlight.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Wildlife Attractions</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Lahugala Kitulana National Park</CardTitle>
                <CardDescription>Elephant gathering site</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/lahugala-elephants.jpeg"
                  alt="Large elephant herd gathered around Lahugala Tank during dry season"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for large elephant gatherings around Lahugala Tank. Best visited during dry months when up to 150 elephants congregate.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/lahugala-kitulana-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Arugam Bay</CardTitle>
                <CardDescription>Beach paradise & base for Kumana</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/arugam-bay-beach.jpeg"
                  alt="Beautiful Arugam Bay beach with surfers and palm trees at sunset"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  World-famous surf destination and perfect base for visiting Kumana. Excellent restaurants and accommodations with beach relaxation.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/arugambay" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Panama Beach</CardTitle>
                <CardDescription>Pristine coastline near park</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/panama-beach.jpeg"
                  alt="Pristine Panama Beach with golden sand and clear blue waters"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Untouched beach near Kumana with opportunities to see sea turtles nesting and dolphins offshore. Perfect for post-safari relaxation.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/panama-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12" id="visiting-guide">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40">Complete Visiting Guide</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Safari</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees & Permits</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: $20 USD per person</li>
                    <li>• Children (3-12): $10 USD</li>
                    <li>• Vehicle permit: $25 USD per vehicle</li>
                    <li>• Service charge: $5 USD per group</li>
                    <li>• Guide fees: $15-20 USD (recommended)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Safari Options</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Half-day safari: 3-4 hours ($80-100)</li>
                    <li>• Full-day safari: 6-8 hours ($120-150)</li>
                    <li>• Private jeep (up to 6 people)</li>
                    <li>• Shared safari options available</li>
                    <li>• Photography tours with specialized guides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• High-quality binoculars (8x42 or 10x42)</li>
                    <li>• Camera with telephoto lens (300mm+)</li>
                    <li>• Sun protection and insect repellent</li>
                    <li>• Plenty of water and light snacks</li>
                    <li>• Field guide to Sri Lankan birds</li>
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
                  <h4 className="font-semibold mb-2">Best Photography Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use fast shutter speeds for birds in flight</li>
                    <li>• Shoot in RAW format for better editing flexibility</li>
                    <li>• Focus on the eyes for sharp bird portraits</li>
                    <li>• Respect minimum distance guidelines</li>
                    <li>• Early morning light provides warmest tones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wildlife Viewing Ethics</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Maintain 25-meter distance from elephants</li>
                    <li>• Never feed or disturb wildlife</li>
                    <li>• Keep voices low near nesting birds</li>
                    <li>• Follow your guide&apos;s safety instructions</li>
                    <li>• Stay in vehicle unless guide permits otherwise</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Health & Safety</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use strong insect repellent (DEET-based)</li>
                    <li>• Wear neutral-colored, long-sleeved clothing</li>
                    <li>• Stay hydrated in hot, humid conditions</li>
                    <li>• Inform your hotel of any medical conditions</li>
                    <li>• Have emergency contact numbers ready</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay Near Kumana</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Accommodations</CardTitle>
                <CardDescription>$25-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guesthouses in Arugam Bay</li>
                  <li>• Eco-lodges near park entrance</li>
                  <li>• Camping sites (with permission)</li>
                  <li>• Backpacker hostels in Pottuvil</li>
                  <li>• Basic but clean facilities</li>
                  <li>• Often include safari arrangements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$50-120 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Beach resorts in Arugam Bay</li>
                  <li>• Safari lodges near park</li>
                  <li>• Air-conditioned rooms</li>
                  <li>• Restaurant and pool facilities</li>
                  <li>• Professional safari coordination</li>
                  <li>• Equipment rental available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Luxury Safari Lodges</CardTitle>
                <CardDescription>$120+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exclusive eco-lodges with park access</li>
                  <li>• Professional naturalist guides</li>
                  <li>• High-end photography equipment</li>
                  <li>• Gourmet dining with local cuisine</li>
                  <li>• Spa services and sunset platforms</li>
                  <li>• Private vehicle and customized tours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Summary */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Journey into Sri Lanka&apos;s Bird Paradise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Kumana National Park offers one of the world&apos;s most spectacular wildlife experiences, where thousands of birds from across Asia gather in a pristine ecosystem of lagoons, mangroves, and dry forests. Whether you&apos;re an avid birdwatcher, wildlife photographer, or nature lover, this park provides unforgettable encounters with some of the planet&apos;s most beautiful creatures.
              </p>
              <p className="text-muted-foreground mb-4">
                From the magnificent painted storks nesting in giant colonies to the ancient elephants bathing in the lagoons, every moment in Kumana reveals new wonders. The park&apos;s unique location on the migration flyway makes it a globally important conservation area where you can witness one of nature&apos;s greatest annual spectacles.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your visit during the peak season (April-July) for the ultimate birding experience, and prepare for a wildlife adventure that will leave you with memories and photographs to treasure forever! 🦅🌿📸
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
