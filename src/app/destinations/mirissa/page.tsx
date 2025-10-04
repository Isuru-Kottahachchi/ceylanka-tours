"use client"

import Image from "next/image"
import { Clock, MapPin, Star, Calendar, Waves, Sun, Camera, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import { Button } from "@/components/ui/button"



export default function MirissaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mirissa.jpg"
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
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              World-Class Whale Watching
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
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
          <a href="#surfing" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Surfing</a>
          <a href="#cuisine" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Cuisine</a>
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

        {/* Quick Facts */}
        <section className="mb-12 scroll-mt-24" id="quick-facts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Mirissa Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
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
                </div>
                <div className="space-y-3">
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
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Whale Watching */}
        <section className="mb-12 scroll-mt-24" id="whale-watching">
          <h2 className="text-3xl font-bold mb-6">World&apos;s Best Whale Watching Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Magnificent blue whale surfacing near Mirissa with whale watching boat in background"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Blue whales, the largest animals on Earth, frequent Mirissa&apos;s waters
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mirissa is globally recognized as one of the best places to spot blue whales, sperm whales, and dolphins.
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
                  <li>• Sperm Whales and Pilot Whales</li>
                  <li>• Spinner and Bottlenose Dolphins</li>
                  <li>• Flying Fish and Sea Turtles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12 scroll-mt-24" id="attractions">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Mirissa</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

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
                        src: "/coconut-hill-1.jpg",
                        alt: "Coconut Hill with sunset view",
                        caption: "Sunset at Coconut Hill",
                        title: "Coconut Hill",
                      },
                      {
                        src: "/coconut-hill-2.jpg",
                        alt: "Coconut Hill with panoramic ocean view",
                        caption: "Panoramic views from Coconut Hill",
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
                        src: "/mirissa-beach-1.jpg",
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
                        src: "/secret-beach.jpeg",
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

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Explore More Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Weligama Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Weligama</CardTitle>
                <CardDescription>Surfing paradise with sandy beaches</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/IMG_8209.jpg"
                  alt="Weligama Beach"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Weligama is a popular destination for beginner surfers, offering gentle waves and a laid-back atmosphere.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/waligama" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Galle Fort Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Galle Fort</CardTitle>
                <CardDescription>Historic UNESCO World Heritage Site</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/galle-fort-sarmat-batagov-unsplash.jpg"
                  alt="Galle Fort"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Galle Fort is a historic colonial-era fortification with charming streets, boutique shops, and ocean views.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/galle-fort" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Unawatuna Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Unawatuna</CardTitle>
                <CardDescription>Vibrant beach town with coral reefs</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/unawatuna.jpg"
                  alt="Unawatuna Beach"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Unawatuna is known for its vibrant nightlife, coral reefs, and golden sandy beaches perfect for snorkeling.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/unawatuna" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

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
