"use client"

import Image from "next/image"
import { MapPin, Calendar, Clock, Waves, Info, ShieldAlert, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function WhaleWatchingGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Whale-in-Mirissa.jpg"
          alt="A magnificent blue whale breaching in the waters of Mirissa, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Marine Life Experience in Sri Lanka</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Your Ultimate Guide to Witnessing Ocean creatures up close without disturbing them</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <MapPin className="w-4 h-4 mr-1" />
              Multiple Coastal Locations
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Calendar className="w-4 h-4 mr-1" />
              Best Season: November to April
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <Clock className="w-4 h-4 mr-1" />
              Duration: 3-6 Hours
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Introduction</a>
          <a href="#locations" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Best Locations</a>
          <a href="#species" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Marine Life</a>
          <a href="#season" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Best Season</a>
          <a href="#tips" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Travel Tips</a>
          <a href="#booking" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Booking Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section id="introduction" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Sri Lanka: A Marine Life Paradise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Sri Lanka's strategic position in the Indian Ocean makes it one of the world's premier destinations for whale 
              watching. The island's deep coastal waters serve as important migration routes for various marine mammals, 
              offering visitors unprecedented opportunities to witness these magnificent creatures in their natural habitat.
            </p>
            <p className="mb-4">
              From the gentle giants of the ocean - the Blue Whales - to playful pods of dolphins, Sri Lanka's waters host 
              an incredible diversity of marine life. The country's unique geographic location, where the continental shelf 
              is closest to the shore, creates perfect conditions for observing these majestic creatures.
            </p>
          </div>
        </section>

        {/* Marine Species in Sri Lanka */}
        <section id="species" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Marine Creatures You Can See in Sri Lanka</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sri Lanka's coastal waters are home to an amazing variety of marine life. Here are the magnificent creatures you might encounter during your ocean adventure.
          </p>

          {/* Whales Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Waves className="w-6 h-6 text-blue-600" />
              Whales
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blue Whale */}
            <Card className="border-l-4 border-blue-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Blue Whale in Sri Lankan waters"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐋</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-700">Blue Whale</h4>
                    <p className="text-xs text-muted-foreground">Balaenoptera musculus</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  The largest animal ever to exist on Earth. These gentle giants can grow up to 30 meters long and weigh as much as 200 tons. Blue whales visit Sri Lankan waters to feed on the abundant krill populations.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> Nov-Apr (South), Mar-Aug (East)</p>
                  <p><strong>Locations:</strong> Mirissa, Trincomalee, Kalpitiya</p>
                  <p><strong>Size:</strong> Up to 30 meters long</p>
                </div>
              </CardContent>
            </Card>

            {/* Sperm Whale */}
            <Card className="border-l-4 border-indigo-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Sperm Whale diving"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐋</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-indigo-700">Sperm Whale</h4>
                    <p className="text-xs text-muted-foreground">Physeter macrocephalus</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  The largest toothed whale and deepest diving mammal on Earth. Sperm whales can dive up to 2,000 meters deep and hold their breath for up to 90 minutes while hunting giant squid.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> Year-round, peak Nov-Apr</p>
                  <p><strong>Locations:</strong> Mirissa, Trincomalee</p>
                  <p><strong>Diving:</strong> Up to 2,000 meters deep</p>
                </div>
              </CardContent>
            </Card>

            {/* Bryde's Whale */}
            <Card className="border-l-4 border-purple-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Bryde's whale surfacing"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐋</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-purple-700">Bryde's Whale</h4>
                    <p className="text-xs text-muted-foreground">Balaenoptera edeni</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  A medium-sized baleen whale that stays in tropical waters year-round. They are about 12-15 meters long and have three ridges on their head. These whales are curious and sometimes approach boats closely.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> Year-round</p>
                  <p><strong>Locations:</strong> Mirissa, Trincomalee</p>
                  <p><strong>Size:</strong> 12-15 meters long</p>
                </div>
              </CardContent>
            </Card>

            {/* Pilot Whales */}
            <Card className="border-l-4 border-slate-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Pilot whale pod"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐋</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-700">Pilot Whales</h4>
                    <p className="text-xs text-muted-foreground">Globicephala spp.</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Actually large dolphins with distinctive bulbous heads. They travel in tight family groups and are very social. Pilot whales are dark gray or black and can grow up to 6 meters long.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> November to April</p>
                  <p><strong>Locations:</strong> Kalpitiya, Mirissa</p>
                  <p><strong>Behavior:</strong> Travel in family groups</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

          {/* Dolphins Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Waves className="w-6 h-6 text-blue-600" />
              Dolphins
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Spinner Dolphins */}
            <Card className="border-l-4 border-cyan-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/Orca.jpg"
                    alt="Spinner dolphins jumping"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐬</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-cyan-700">Spinner Dolphins</h4>
                    <p className="text-xs text-muted-foreground">Stenella longirostris</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Named for their amazing spinning jumps out of the water. These playful dolphins travel in large groups, sometimes over 1,000 individuals. They are incredibly acrobatic and love to put on a show.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> Nov-Mar (Kalpitiya), Year-round</p>
                  <p><strong>Locations:</strong> Kalpitiya, Mirissa, Trincomalee</p>
                  <p><strong>Behavior:</strong> Acrobatic spins and jumps</p>
                </div>
              </CardContent>
            </Card>

            {/* Bottlenose Dolphins */}
            <Card className="border-l-4 border-teal-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Bottlenose dolphins swimming"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐬</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-teal-700">Bottlenose Dolphins</h4>
                    <p className="text-xs text-muted-foreground">Tursiops truncatus</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  The most well-known dolphin species with their friendly nature and characteristic smile. These intelligent creatures often approach boats to surf in the bow waves.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> Year-round</p>
                  <p><strong>Locations:</strong> Mirissa, Trincomalee, Kalpitiya</p>
                  <p><strong>Behavior:</strong> Bow riding, highly social</p>
                </div>
              </CardContent>
            </Card>

            {/* Risso's Dolphins */}
            <Card className="border-l-4 border-emerald-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Risso's dolphin with scars"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐬</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-emerald-700">Risso's Dolphins</h4>
                    <p className="text-xs text-muted-foreground">Grampus griseus</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  These unique dolphins have no beak and their bodies are covered in white scars from social interactions and squid battles. They start dark gray but become whiter with age due to scarring.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> November to April</p>
                  <p><strong>Locations:</strong> Mirissa, Trincomalee</p>
                  <p><strong>Habitat:</strong> Deep offshore waters</p>
                </div>
              </CardContent>
            </Card>

            {/* Striped Dolphins */}
            <Card className="border-l-4 border-sky-600">
              <CardContent className="p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Striped dolphins jumping"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover bg-gray-50 h-40"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐬</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sky-700">Striped Dolphins</h4>
                    <p className="text-xs text-muted-foreground">Stenella coeruleoalba</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Beautiful dolphins with distinctive blue and white stripes running along their sides. They are energetic and acrobatic, often leaping high out of the water. They travel in groups of 10-500 individuals.
                </p>
                <div className="text-xs space-y-1">
                  <p><strong>Best Time:</strong> November to April</p>
                  <p><strong>Locations:</strong> Mirissa, Trincomalee</p>
                  <p><strong>Behavior:</strong> Fast swimmers, acrobatic leaps</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </section>

        {/* Best Locations */}
        <section id="locations" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Premier Whale Watching Locations</h2>
          
          {/* Mirissa */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Mirissa</CardTitle>
              <CardDescription>The Whale Watching Capital of Sri Lanka</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ImageCarousel 
                    images={[
                      {
                        src: "/mirissa-whale-watching-1.jpg",
                        alt: "Blue whale sighting in Mirissa",
                        caption: "Blue whale sighting near Mirissa coast",
                        title: "Mirissa Whale Watching"
                      },
                      {
                        src: "/mirissa-whale-watching-2.jpg",
                        alt: "Whale watching boat in Mirissa",
                        caption: "Modern whale watching vessel",
                        title: "Mirissa Boats"
                      }
                    ]}
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Located in the Southern Province, Mirissa has earned its reputation as Sri Lanka's premier whale watching 
                    destination. The deep waters off its coast are frequented by Blue Whales, Sperm Whales, and various 
                    species of dolphins throughout the season.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Information</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peak Season: November to April
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Trip Duration: 4-6 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Start Time: Early morning (5:30 - 6:30 AM)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        High sighting success rate (90%+)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trincomalee */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Trincomalee</CardTitle>
              <CardDescription>The East Coast's Marine Life Haven</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ImageCarousel 
                    images={[
                      {
                        src: "/trinco-whale-watching-1.jpg",
                        alt: "Sperm whale near Trincomalee",
                        caption: "Sperm whale sighting in Trincomalee",
                        title: "Trincomalee Whales"
                      },
                      {
                        src: "/trinco-whale-watching-2.jpg",
                        alt: "Dolphins in Trincomalee",
                        caption: "Dolphin pod in Trincomalee waters",
                        title: "Trincomalee Dolphins"
                      }
                    ]}
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Trincomalee offers a unique whale watching experience along Sri Lanka's eastern coast. The deep 
                    natural harbor and submarine canyon create perfect conditions for whales and dolphins, particularly 
                    during the east coast season.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Information</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peak Season: March to August
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Trip Duration: 3-4 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique opportunity to see Blue Whales in summer
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Combined with snorkeling opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kalpitiya */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Kalpitiya</CardTitle>
              <CardDescription>Dolphin Watching Paradise</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ImageCarousel 
                    images={[
                      {
                        src: "/kalpitiya-dolphins-1.jpg",
                        alt: "Dolphin pod in Kalpitiya",
                        caption: "Large pod of spinner dolphins",
                        title: "Kalpitiya Dolphins"
                      },
                      {
                        src: "/kalpitiya-dolphins-2.jpg",
                        alt: "Dolphins jumping in Kalpitiya",
                        caption: "Spinner dolphins performing acrobatics",
                        title: "Jumping Dolphins"
                      }
                    ]}
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Kalpitiya is renowned for its large pods of dolphins, sometimes numbering in the thousands. The 
                    area is particularly famous for spinner dolphins, known for their acrobatic displays, making it 
                    a photographer's paradise.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Information</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best Season: November to March
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Trip Duration: 2-3 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Specializes in dolphin watching
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Occasional pilot whale sightings
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Marine Species */}
        <section id="species" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Marine Life You Can Encounter</h2>
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Sri Lanka's waters are home to an incredible diversity of marine mammals, making it one of the world's 
                top destinations for whale and dolphin watching. The unique geographic location and deep waters create 
                perfect conditions for these magnificent creatures to thrive and migrate through the area.
              </p>
            </div>

            {/* Large Whales */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Large Whales</CardTitle>
                <CardDescription>The Ocean's Majestic Giants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Blue Whale */}
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Blue Whale</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        The largest animal to have ever existed on Earth, the Blue Whale is truly a magnificent sight.
                      </p>
                      <ul className="text-sm space-y-2 text-blue-600 dark:text-blue-400">
                        <li>• <strong>Size:</strong> 24-30 meters (79-98 feet)</li>
                        <li>• <strong>Weight:</strong> Up to 173 tonnes</li>
                        <li>• <strong>Diet:</strong> Primarily krill, consuming up to 6 tons per day</li>
                        <li>• <strong>Unique Features:</strong> Heart the size of a car, tongue weighing as much as an elephant</li>
                        <li>• <strong>Best Sighting Locations:</strong> Mirissa (Dec-Apr), Trincomalee (Mar-Aug)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sperm Whale */}
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Sperm Whale</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        The largest of the toothed whales and the deepest diving mammal known to science.
                      </p>
                      <ul className="text-sm space-y-2 text-indigo-600 dark:text-indigo-400">
                        <li>• <strong>Size:</strong> 11-18 meters (36-59 feet)</li>
                        <li>• <strong>Weight:</strong> Up to 45 tonnes</li>
                        <li>• <strong>Diving Ability:</strong> Can dive up to 2,250 meters for 90 minutes</li>
                        <li>• <strong>Special Feature:</strong> Largest brain of any animal (up to 8kg)</li>
                        <li>• <strong>Best Sighting Locations:</strong> Mirissa, Kalpitiya (Nov-Apr)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Bryde's Whale */}
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">Bryde's Whale</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        Year-round residents in Sri Lankan waters, known for their distinctive triple ridge on their rostrum.
                      </p>
                      <ul className="text-sm space-y-2 text-purple-600 dark:text-purple-400">
                        <li>• <strong>Size:</strong> 12-14 meters (39-46 feet)</li>
                        <li>• <strong>Weight:</strong> Up to 25 tonnes</li>
                        <li>• <strong>Behavior:</strong> Often seen feeding near the surface</li>
                        <li>• <strong>Diet:</strong> Fish, krill, and small crustaceans</li>
                        <li>• <strong>Sighting Season:</strong> Year-round in Sri Lankan waters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dolphins */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Dolphins</CardTitle>
                <CardDescription>Acrobatic Ambassadors of the Ocean</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Spinner Dolphins */}
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <h4 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-2">Spinner Dolphins</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-cyan-600 dark:text-cyan-400">
                        Famous for their acrobatic displays, spinning up to 7 times in one jump.
                      </p>
                      <ul className="text-sm space-y-2 text-cyan-600 dark:text-cyan-400">
                        <li>• <strong>Size:</strong> 1.8-2.4 meters (6-8 feet)</li>
                        <li>• <strong>Group Size:</strong> Can form pods of thousands</li>
                        <li>• <strong>Special Skills:</strong> Can spin multiple times in a single leap</li>
                        <li>• <strong>Best Viewing:</strong> Early morning in Kalpitiya</li>
                        <li>• <strong>Behavior:</strong> Highly social, often riding bow waves</li>
                      </ul>
                    </div>
                  </div>

                  {/* Bottlenose Dolphins */}
                  <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
                    <h4 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-2">Bottlenose Dolphins</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-teal-600 dark:text-teal-400">
                        The most well-known dolphin species, known for their intelligence and social behavior.
                      </p>
                      <ul className="text-sm space-y-2 text-teal-600 dark:text-teal-400">
                        <li>• <strong>Size:</strong> 2-4 meters (6.5-13 feet)</li>
                        <li>• <strong>Intelligence:</strong> One of the smartest marine mammals</li>
                        <li>• <strong>Social Structure:</strong> Complex family groups</li>
                        <li>• <strong>Lifespan:</strong> 40-60 years</li>
                        <li>• <strong>Habitat:</strong> Both coastal waters and deep seas</li>
                      </ul>
                    </div>
                  </div>

                  {/* Risso's Dolphins */}
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <h4 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Risso's Dolphins</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">
                        Distinctive appearance with heavily scarred bodies from social interactions.
                      </p>
                      <ul className="text-sm space-y-2 text-emerald-600 dark:text-emerald-400">
                        <li>• <strong>Size:</strong> 3-4 meters (10-13 feet)</li>
                        <li>• <strong>Appearance:</strong> Grey with white scarring</li>
                        <li>• <strong>Diet:</strong> Primarily squid and octopus</li>
                        <li>• <strong>Habitat:</strong> Deep offshore waters</li>
                        <li>• <strong>Behavior:</strong> Less acrobatic, more deep-diving</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Marine Life */}
            <Card>
              <CardHeader>
                <CardTitle>Other Marine Life</CardTitle>
                <CardDescription>Additional Species You Might Encounter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* False Killer Whales */}
                  <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-200 dark:border-rose-800">
                    <h4 className="text-lg font-semibold text-rose-800 dark:text-rose-200 mb-2">False Killer Whales</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-rose-600 dark:text-rose-400">
                        Despite their name, these social creatures are actually large dolphins.
                      </p>
                      <ul className="text-sm space-y-2 text-rose-600 dark:text-rose-400">
                        <li>• <strong>Size:</strong> 4.5-6 meters (15-20 feet)</li>
                        <li>• <strong>Social Nature:</strong> Highly social, form strong bonds</li>
                        <li>• <strong>Diet:</strong> Large fish and squid</li>
                        <li>• <strong>Unique Feature:</strong> Known to share food with other pods</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sea Turtles */}
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Sea Turtles</h4>
                    <div className="space-y-3">
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Several species of sea turtles can be spotted during whale watching trips.
                      </p>
                      <ul className="text-sm space-y-2 text-green-600 dark:text-green-400">
                        <li>• <strong>Species:</strong> Green, Hawksbill, and Olive Ridley turtles</li>
                        <li>• <strong>Size:</strong> Varying from 60-120 cm shell length</li>
                        <li>• <strong>Habitat:</strong> Coastal waters and reefs</li>
                        <li>• <strong>Conservation:</strong> Protected species in Sri Lanka</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Season Guide */}
        <section id="season" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">When to Visit</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">South Coast (Mirissa)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">Peak Season: November to April</span>
                    </div>
                    <p className="text-muted-foreground">
                      The calm seas and clear skies during these months provide ideal conditions for whale watching. 
                      Blue whales are frequently spotted as they migrate through these waters.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Best Months</h4>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• December to March: Highest sighting rates</li>
                        <li>• February: Peak migration period</li>
                        <li>• April: Last month before monsoon</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">East Coast (Trincomalee)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">Peak Season: March to August</span>
                    </div>
                    <p className="text-muted-foreground">
                      The east coast offers unique summer whale watching opportunities when the south coast is affected 
                      by monsoons. The deep Trincomalee canyon attracts various marine species.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Best Months</h4>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• May to July: Optimal weather conditions</li>
                        <li>• March: Start of the season</li>
                        <li>• August: Last chance before weather changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section id="tips" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Essential Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-500" />
                  Preparation Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Early Start</span>
                      <p className="text-sm text-muted-foreground">Arrive at least 30 minutes before departure (usually 5:30-6:00 AM)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">What to Bring</span>
                      <p className="text-sm text-muted-foreground">Sunscreen, hat, sunglasses, light jacket, camera, seasickness medication</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Clothing</span>
                      <p className="text-sm text-muted-foreground">Wear comfortable, quick-drying clothes and non-slip shoes</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-500" />
                  Safety Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Listen to Crew</span>
                      <p className="text-sm text-muted-foreground">Always follow safety instructions from your boat crew</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Stay Seated</span>
                      <p className="text-sm text-muted-foreground">Remain seated during navigation unless instructed otherwise</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Seasickness Prevention</span>
                      <p className="text-sm text-muted-foreground">Take medication before departure if prone to motion sickness</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Booking Guide */}
        <section id="booking" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">How to Book Your Experience</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  To ensure the best whale watching experience in Sri Lanka, it's important to book through reliable 
                  operators who prioritize both your safety and marine life conservation. Here's our recommended 
                  booking process:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Booking Tips</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Book in Advance</span>
                          <p className="text-sm text-muted-foreground">Especially during peak season (December-April)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Check Reviews</span>
                          <p className="text-sm text-muted-foreground">Look for operators with good safety records and ethical practices</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Confirm Details</span>
                          <p className="text-sm text-muted-foreground">Verify pickup location, time, and included services</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">Book with CeyLanka Tours</h4>
                    <ul className="space-y-3 text-blue-600 dark:text-blue-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>Modern, safety-equipped boats</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>Experienced crew and naturalist guides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>Responsible whale watching practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span>Flexible booking and cancellation</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-4 bg-white dark:bg-blue-800/50 rounded-lg">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Contact us for bookings and inquiries:
                      </p>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>📞 +94 70 764 6765</p>
                        <p>✉️ ceylonkatoursinfor@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
