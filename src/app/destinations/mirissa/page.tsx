"use client"

import Image from "next/image"
import { Clock, MapPin, Star, Calendar, Waves, Sun, Camera, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InsuranceBanner from "@/components/insurance-banner"



export default function MirissaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mirissa-Coco-Hill.jpeg"
          alt="Stunning aerial view of Mirissa beach showing golden sand, turquoise waters, palm trees, and the iconic coconut hill"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mirissa</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Premier Whale Watching Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              World-Class Whale Watching
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Sun className="w-4 h-4 mr-1" />
              Year-Round Tropical Paradise
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#whale-watching" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Whale Watching</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Attractions</a>
          {/* <a href="#surfing" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Surfing</a>
          <a href="#cuisine" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Cuisine</a> */}
          <a href="#tips" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Travel Tips</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-24" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mirissa: Where Ocean Dreams Come True</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled along Sri Lanka&apos;s stunning southern coast, Mirissa is a slice of tropical paradise that captures
              hearts with its pristine golden beaches, world-renowned whale watching opportunities, and laid-back island vibes.
              This charming fishing village has evolved into one of Sri Lanka&apos;s most sought-after beach destinations while
              maintaining its authentic charm and natural beauty.
            </p>
            <p className="text-lg">
              From witnessing majestic blue whales in their natural habitat to surfing perfect waves, from climbing the
              iconic Coconut Hill for sunset views to enjoying fresh seafood by the ocean, Mirissa offers an unforgettable
              tropical escape that combines adventure, relaxation, and natural wonder.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Mirissa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Southern Coast, 240km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> Blue Whale Watching
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Weather:</strong> November to April
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Whale Season:</strong> November to April
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Must-See:</strong> Coconut Hill Sunset
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 3-4 days
                    </span>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🕒 Tips for Visiting Mirissa</h4>
                    <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                      <li>• Early Morning (6-8 AM): Perfect for peaceful walks</li>
                      <li>• Late Afternoon (3-6 PM): Best for swimming</li>
                      <li>• Avoid weekends and public holidays for a quieter experience</li>
                      <li>• Bring reef-safe sunscreen to protect marine life</li>
                      <li>• Respect local customs and the environment</li>
                      <li>• Book whale watching tours in advance during peak season</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to  */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Mirissa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 180km (112 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 2.5-3.5 hours</li>
                      <li>• <strong>Cost:</strong> $60-85 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Mirissa. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 70 764 6765</span>
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Mirissa railway station</li>
                      <li>• <strong>Duration:</strong> 3-6 hours total</li>
                      <li>• <strong>Cost:</strong> $3-12 USD (depending on class)</li>
                      <li>• <strong>From Mirissa:</strong> hire taxi/tuk-tuk</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Mirissa bus station  (Coast road)</li>
                      <li>• <strong>Duration:</strong> 4-6 hours</li>
                      <li>• <strong>Cost:</strong> $4-6 USD (budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Regular departures from Colombo Fort Bus Station</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="https://maps.app.goo.gl/mApRuVKgTQKqDKyg6" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 cursor-pointer">
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </a>
                </div>
                {/* <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">🚂 Special Note about Train Journey</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The train journey from Kandy to Nanu Oya is considered one of the world&apos;s most scenic train rides, passing through breathtaking tea plantations, mountain tunnels, and misty landscapes. <strong>Important:</strong> Nanu Oya is the closest railway station to Nuwara Eliya - you&apos;ll need to take a taxi or tuk-tuk for the final 8km uphill journey to the town center.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book reserved seats in advance for the best views</li>
                    <li>• Sit on the right side for better mountain scenery</li>
                    <li>• Bring warm clothes - it gets cool in the mountains</li>
                    <li>• Pre-arrange transport from Nanu Oya station</li>
                  </ul>
                </div> */}
              </CardContent>
            </Card>
          </section>
        </div>

        <InsuranceBanner />

        {/* Whale Watching */}
        <section className="mb-12 scroll-mt-40" id="whale-watching">
          <h2 className="text-3xl font-bold mb-6">World&apos;s Best Whale Watching Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <ImageCarousel
                images={[
                  {
                    src: "/Whale-Shark-at-Mirissa.jpg",
                    alt: "Whale Shark swimming in the ocean",
                    caption: "Whale Shark sighting in Mirissa",
                    title: "Whale Shark",
                  },
                  {
                    src: "/Whale-in-Mirissa.jpg",
                    alt: "Whale watching in Mirissa",
                    caption: "Whale watching in Mirissa",
                    title: "Whale Watching",
                  },

                ]}
              />
              {/* <p className="text-sm text-muted-foreground mt-2 italic">
                Blue whales, the largest animals on Earth, frequent Mirissa&apos;s waters
              </p> */}
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                You might know about Mirissa Coconut tree hill but also Mirissa is globally recognized as one of the best places to spot blue whales, sperm whales, and dolphins.
                The continental shelf drops dramatically just off the coast, creating deep waters where these magnificent
                creatures feed and play, often coming remarkably close to shore.
              </p>
              <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Premier Whale Watching Paradise</p>
              Join a whale watching tour and witness the breathtaking sight of blue whales - the largest animals ever
              to have lived on Earth - surfacing in the crystal-clear waters of the Indian Ocean. The success rate
              for whale sightings during peak season is over 90%.
              Southern Province, Sri Lanka
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">What You Might See:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Blue Whales (largest animals on Earth)</li>
                  <li>• Whale Sharks (Largest Fish in the world)</li>
                  <li>• Sperm Whales and Pilot Whales</li>
                  <li>• Spinner and Bottlenose Dolphins</li>
                  <li>• Flying Fish and Sea Turtles</li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/articles/marine-life-experience">
                  <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer">
                    Read More About Sri Lankan Marine Life
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12 scroll-mt-24" id="attractions">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Mirissa</h2>

          <div className="space-y-8">
            {/* Coconut Hill */}
            <Card>
              <CardHeader>
                <CardTitle>1. Coconut Hill (Coconut Tree Island)</CardTitle>
                <CardDescription>Iconic viewpoint for spectacular sunsets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Mirissa1.jpg",
                        alt: "Coconut Hill with panoramic ocean view",
                        caption: "Panoramic views from Coconut Hill",
                        title: "Coconut Hill",
                      },
                      {
                        src: "/Mirissa-Coconut-Hill.jpg",
                        alt: "Coconut Hill with sunset view",
                        caption: "Sunset at Coconut Hill",
                        title: "Coconut Hill",
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This small rocky outcrop connected to the mainland by a narrow strip of sand is Mirissa&apos;s most
                      photographed landmark. Climb to the top for panoramic views of the coastline and unforgettable
                      sunset experiences that will leave you speechless.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect spot for sunset photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        360-degree views of the ocean and coastline
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Easy 5-minute climb to the top
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Free access, best visited 1 hour before sunset
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mirissa Beach */}
            <Card>
              <CardHeader>
                <CardTitle>2. Mirissa Main Beach</CardTitle>
                <CardDescription>Golden sand paradise with perfect swimming conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Mirissa-Beach.jpg",
                        alt: "Mirissa Beach with golden sand",
                        caption: "Relaxing at Mirissa Beach",
                        title: "Mirissa Beach",
                      },
                      {
                        src: "/mirissa-beach-2.jpg",
                        alt: "Mirissa Beach with palm trees",
                        caption: "Palm trees at Mirissa Beach",
                        title: "Mirissa Beach",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The main beach stretches for over a kilometer of pristine golden sand, fringed by swaying palm trees
                      and offering calm, clear waters perfect for swimming. The beach has a relaxed atmosphere with
                      beachside restaurants, bars, and accommodation options.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Safe swimming with gentle waves
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beachside restaurants and bars
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water sports and boat trips available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for sunbathing and relaxation
                      </li>
                    </ul>

                    <div className="mt-6 space-y-4">
                      {/* Best Time to Visit */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🕒 Best Time to Visit</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Early Morning (6-8 AM): Perfect for peaceful walks</li>
                          <li>• Late Afternoon (3-6 PM): Best for swimming</li>
                          <li>• December-April: Ideal beach weather</li>
                        </ul>
                      </div>

                      {/* Things to Do */}
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🏖 Beach Activities</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Swimming and snorkeling</li>
                          <li>• Beach volleyball and cricket</li>
                          <li>• Beachside dining</li>
                          <li>• Sunset watching</li>
                        </ul>
                      </div>

                      {/* Safety & Guidelines */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Safety Tips</h4>
                        <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                          <li>• Swim between the flags</li>
                          <li>• Watch for seasonal rip currents</li>
                          <li>• Use sunscreen and stay hydrated</li>
                          <li>• Keep valuables secure</li>
                        </ul>
                      </div>

                      {/* Fun Facts */}
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌟 Interesting Facts</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Longest beach stretch in Mirissa</li>
                          <li>• Home to diverse marine life</li>
                          <li>• Traditional fishing boats dock here</li>
                          <li>• Perfect surf waves during season</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mirissa Beach */}
            <Card>
              <CardHeader>
                <CardTitle>3. Mirissa Parrot Rock</CardTitle>
                <CardDescription>Good viewpoint with snorkeller&apos;s friendly environment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Parrot-Rock.jpg",
                        alt: "Mirissa Beach with golden sand",
                        caption: "Relaxing at Mirissa Beach",
                        title: "Mirissa Beach",
                      },
                      {
                        src: "/mirissa-beach-2.jpg",
                        alt: "Mirissa Beach with palm trees",
                        caption: "Palm trees at Mirissa Beach",
                        title: "Mirissa Beach",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Basically a small rock outcrop in the middle of the beach, this is a great spot to climb up and get a different perspective of the coastline. You can see Mirissa coasline and the beautiful horizon as your surroundings
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Safe swimming with gentle waves
                      </li>

                      <div className="mt-6 space-y-4">
                        {/* Best Time to Visit */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🕒 Best Time to Visit</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Early Morning (7-9 AM): Best for snorkeling</li>
                            <li>• Low Tide: Easier access to the rock</li>
                            <li>• Sunset: Perfect for photography</li>
                          </ul>
                        </div>

                        {/* Things to Do */}
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🏖 Activities</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Snorkeling around the rock</li>
                            <li>• Photography from various angles</li>
                            <li>• Rock climbing (with care)</li>
                            <li>• Marine life observation</li>
                          </ul>
                        </div>

                        {/* Safety & Guidelines */}
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Safety Tips</h4>
                          <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                            <li>• Check tide times before visiting</li>
                            <li>• Wear appropriate footwear</li>
                            {/* <li>• Don't climb when wet</li> */}
                            <li>• Watch for slippery surfaces</li>
                          </ul>
                        </div>

                        {/* Fun Facts */}
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌟 Interesting Facts</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Named for its bird-like shape</li>
                            <li>• Rich marine ecosystem around base</li>
                            <li>• Popular Instagram spot</li>
                            <li>• Unique geological formation</li>
                          </ul>
                        </div>
                      </div>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beachside restaurants and bars
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water sports and boat trips available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for sunbathing and relaxation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Secret Beach */}
            <Card>
              <CardHeader>
                <CardTitle>3. Secret Beach</CardTitle>
                <CardDescription>Hidden gem for privacy and tranquility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Secret-beach.jpeg",
                        alt: "Secret Beach with pristine sand",
                        caption: "Secluded Secret Beach",
                        title: "Secret Beach",
                      },
                      {
                        src: "/secret-beach-2.jpg",
                        alt: "Secret Beach with tide pools",
                        caption: "Tide pools at Secret Beach",
                        title: "Secret Beach",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Tucked away behind Coconut Hill, this smaller, more secluded beach offers privacy and tranquility
                      away from the crowds. It&apos;s perfect for couples seeking romance or anyone wanting a peaceful beach
                      experience with stunning natural beauty.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        More private and less crowded
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for photography and relaxation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural rock formations and tide pools
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        5-minute walk from main beach
                      </li>
                    </ul>
                  </div>
                </div>
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
                <CardTitle>Water Sports & Adventures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Surfing</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect waves for beginners and intermediate surfers, with several surf schools offering lessons.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Snorkeling & Diving</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore coral reefs and marine life in the clear waters around Mirissa.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stand-Up Paddleboarding</h4>
                  <p className="text-sm text-muted-foreground">
                    Calm morning waters are perfect for SUP with stunning coastal views.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural & Nature Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Stilt Fishermen</h4>
                  <p className="text-sm text-muted-foreground">
                    Witness traditional stilt fishing along the coast, a unique Sri Lankan cultural practice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Turtle Watching</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit nearby turtle hatcheries and watch baby turtles being released into the ocean.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ayurvedic Treatments</h4>
                  <p className="text-sm text-muted-foreground">
                    Relax with traditional Sri Lankan spa treatments and massages by the beach.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weather Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>November to April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Perfect weather with minimal rainfall</li>
                  <li>• Best whale watching conditions</li>
                  <li>• Calm seas ideal for water sports</li>
                  <li>• Temperatures 26-30°C</li>
                  <li>• Higher accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>May & October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional short showers</li>
                  <li>• Fewer tourists, better prices</li>
                  <li>• Still good for beach activities</li>
                  <li>• Lush green surroundings</li>
                  <li>• Mixed weather conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>June to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall and rough seas</li>
                  <li>• Limited whale watching tours</li>
                  <li>• Lowest accommodation rates</li>
                  <li>• Dramatic stormy seascapes</li>
                  <li>• Not ideal for beach activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Nearby Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Mirissa adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Waligama.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  20 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Waligama</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Weligama is a popular destination for beginner surfers, offering gentle waves and a laid-back atmosphere.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  7.5 km from Mirissa
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/waligama" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/galle-fort-sarmat-batagov-unsplash.jpg"
                  alt="Galle Fort with its iconic lighthouse and colonial architecture"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Galle Fort</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Galle Fort is a historic colonial-era fortification with charming streets, boutique shops, and ocean views.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  36 km from Mirissa
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/galle-fort" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Unawatuna.jpg"
                  alt="Unawatuna beach with golden sands and palm trees"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  50 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Unawatuna</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Unawatuna is known for its vibrant nightlife, coral reefs, and golden sandy beaches perfect for snorkeling.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  31 km from Mirissa
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/unawatuna" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Hirikatiya.jpg"
                  alt="Hirikatiya Beach with its serene environment"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hirikatiya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Charming hill station with cooler climate, beautiful views, and the historic Bandarawela Hotel.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  45 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hirikatiya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Day Trip Suggestions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Suggested Day Trip Combinations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Tea Country Adventure</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Nuwara Eliya → Ambewela Farm → Haputhale (Lipton&apos;s Seat) → Return
                </p>
                <div className="flex items-center text-xs text-green-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (8-10 hours)
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Hill Country Explorer</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Nuwara Eliya → Ella (Nine Arch Bridge) → Bandarawela → Return
                </p>
                <div className="flex items-center text-xs text-blue-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (10-12 hours)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Mirissa Paradise Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Mirissa represents the perfect blend of adventure and relaxation, where you can witness the world&apos;s
                largest mammals in their natural habitat by morning and watch spectacular sunsets from Coconut Hill
                by evening. This tropical paradise offers experiences that will create memories to last a lifetime.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you&apos;re seeking the thrill of whale watching, the peace of pristine beaches, or the adventure
                of water sports, Mirissa delivers it all with the warm hospitality that Sri Lanka is famous for.
                Come and discover why this small fishing village has captured the hearts of travelers from around the world.
              </p>
              <p className="text-muted-foreground font-medium">Dive into your Mirissa adventure! 🐋🏖️</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
