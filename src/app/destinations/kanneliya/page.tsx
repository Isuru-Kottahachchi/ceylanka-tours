import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, TreePine, CloudRain, Droplets, Bird } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const metadata: Metadata = {
  title: "Kanneliya Forest Reserve Sri Lanka: Complete Guide 2025 | Rainforest Paradise",
  description:
    "Explore Kanneliya Forest Reserve, a biodiversity hotspot in Sri Lanka. Complete guide to hiking trails, waterfalls, rare species, and eco-tourism experiences.",
  keywords:
    "Kanneliya Forest Reserve, Sri Lanka rainforest, biodiversity hotspot, nature trails, waterfalls, endemic species, eco-tourism, wildlife watching, hiking trails",
  openGraph: {
    title: "Kanneliya Forest: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's pristine rainforest paradise",
    type: "article",
    images: ["/kanneliya-forest.jpg"],
  },
};

export default function KanneliyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kanneliya.jpg"
          alt="Lush canopy and waterfalls of Kanneliya Forest Reserve showcasing its pristine rainforest environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kanneliya Forest Reserve</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">A Pristine Rainforest Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-emerald-600/80 text-white border-emerald-500">
              <TreePine className="w-4 h-4 mr-1" />
              UNESCO Biosphere
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Bird className="w-4 h-4 mr-1" />
              Endemic Species
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Sri Lanka&apos;s Hidden Rainforest Gem</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Kanneliya Forest Reserve, part of the UNESCO-designated biosphere reserve, is one of Sri Lanka&apos;s most
              pristine rainforests. This spectacular ecosystem spans 5,306 hectares and hosts an incredible variety
              of flora and fauna, including many species found nowhere else on Earth.
            </p>
            <p className="mb-4">
              Home to over 220 bird species, 86 species of mammals, and countless plant species, Kanneliya represents
              one of the last remaining rainforest complexes in Sri Lanka. Its network of hiking trails, stunning
              waterfalls, and rich biodiversity make it a paradise for nature lovers, researchers, and eco-tourists.
            </p>
          </div>
        </section>
        {/* Quick Overview */}
        <section className="mb-16">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Essential Information</CardTitle>
              <CardDescription>Key details for planning your visit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Location & Access</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>38km from Galle</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span>Open 6:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Climate</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CloudRain className="w-5 h-5 text-blue-500" />
                      <span>Annual rainfall: 3750-4250mm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      <span>High humidity year-round</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Best Time to Visit</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-green-500" />
                      <span>January to March (Dry Season)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Early morning for wildlife</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Highlights of Kanneliya</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Waterfalls */}
            <Card>
              <CardHeader>
                <CardTitle>Scenic Waterfalls</CardTitle>
                <CardDescription>Natural wonders within the forest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/kanneliya-falls.jpg"
                    alt="Beautiful cascading waterfalls in Kanneliya Forest Reserve"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    Kanneliya features several spectacular waterfalls, including the famous Narangas Falls and
                    Anagimale Falls. These pristine cascades, surrounded by lush vegetation, offer perfect spots
                    for photography and natural relaxation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Multiple accessible waterfalls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Natural swimming pools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Photography opportunities</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Wildlife */}
            <Card>
              <CardHeader>
                <CardTitle>Rich Biodiversity</CardTitle>
                <CardDescription>Endemic species and rare sightings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/kanneliya-wildlife.jpg"
                    alt="Endemic wildlife and lush vegetation in Kanneliya Forest"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The reserve is a haven for wildlife enthusiasts, hosting numerous endemic species. From rare birds
                    to elusive mammals and vibrant butterflies, Kanneliya offers unique opportunities for wildlife
                    observation and photography.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Endemic bird species</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Rare mammals and reptiles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Diverse butterfly population</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Things to Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Hiking */}
            <Card>
              <CardHeader>
                <CardTitle>Nature Trails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Guided forest walks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Multiple trail difficulty levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Scenic viewpoints</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bird Watching */}
            <Card>
              <CardHeader>
                <CardTitle>Bird Watching</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>220+ bird species</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Endemic species spotting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Professional guides available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Photography */}
            <Card>
              <CardHeader>
                <CardTitle>Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Waterfall photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Wildlife photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Macro photography opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Visitor Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Entry Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Entrance permit required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Guide mandatory for trails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Advanced booking recommended</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">What to Bring</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Comfortable hiking shoes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Leech socks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Water and snacks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Jungle beach Roomassala</CardTitle>
                <CardDescription>A beach with a great atmosphere</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/jungle-beach.jpeg"
                  alt="View of Jungle Beach"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the scenic Jungle Beach with its lush greenery and clear waters. Perfect for a relaxing day trip.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jungle-beach-roomassala" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Kanneliya</CardTitle>
                <CardDescription>Part of a Kanneliya Dediyagala Nakiyadeniya Complex</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Kanneliya.jpg"
                  alt="View of Kanneliya"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the lush Kanneliya rainforest, part of the Sinharaja Forest Reserve. Home to diverse flora and fauna, perfect for nature lovers.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kanneliya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Hummanaya Blowhole</CardTitle>
                <CardDescription>Sri Lanka&apos;s only natural blowhole</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/HummanayaBlowhole.jpeg"
                  alt="Hummanaya Blowhole spraying water high above the rocky coast"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Witness the power of the Indian Ocean at Hummanaya, where water shoots up to 25 meters through a coastal rock crevice. A unique natural wonder and a must-see for nature lovers!
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hummanaya-blowhole" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Mirissa</CardTitle>
                <CardDescription>Best views of the coastline</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Mirissa1.jpg"
                  alt="View of Mirissa"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Mirissa is a picturesque coastal town known for its stunning beaches and vibrant nightlife. Enjoy whale watching, water sports, and delicious seafood.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mirissa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Waligama</CardTitle>
                <CardDescription>Best views of the coastline</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Waligama.jpg"
                  alt="View of Waligama"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Waligama is a charming coastal town known for its stunning beaches and vibrant fishing community. Enjoy fresh seafood, water sports, and breathtaking sunsets.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/waligama" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Hirikatiya</CardTitle>
                <CardDescription>Best views of the coastline and Surfing</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Hirikatiya.jpg"
                  alt="Hirikatiya Beach with surfers riding waves and palm trees lining the shore"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Surfing hotspot with consistent waves suitable for all levels. Relaxed vibe with beachfront cafes. 30 min drive.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hirikatiya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Nilwella Blue Beach</CardTitle>
                <CardDescription>Beach that can campfire</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Blue-beach.jpg"
                  alt="Large herd of elephants gathering at Minneriya National Park during dry season"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for The Gathering - hundreds of elephants come together during dry season. 1 hour drive.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/blue-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Thalpe Beach */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Thalpe Beach</CardTitle>
                <CardDescription>Coral wells & peaceful sands</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Thalpe-beach.jpg"
                  alt="Thalpe Beach coral wells and golden sand with turquoise water"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Discover Thalpe Beach, just south of Galle. Famous for its unique coral wells—natural pools carved into the reef—this quiet beach is perfect for swimming at low tide, relaxing on golden sand, and enjoying local seafood.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conservation Message */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">Help Preserve Kanneliya</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Kanneliya Forest Reserve is a precious ecosystem that needs our protection. Follow the park rules,
                  stay on marked trails, and help maintain this pristine environment for future generations.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
