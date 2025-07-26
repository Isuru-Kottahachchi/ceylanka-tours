import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Sun, Camera } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Mirissa Sri Lanka: Ultimate Beach Guide 2025 | Whale Watching Paradise",
  description:
    "Discover Mirissa, Sri Lanka's premier beach destination. Complete guide to whale watching, surfing, pristine beaches, and the best things to do in this tropical paradise.",
  keywords:
    "Mirissa Sri Lanka, whale watching, blue whales, surfing, beach paradise, coconut hill, stilt fishermen, tropical beaches",
  openGraph: {
    title: "Mirissa: Ultimate Beach Paradise Guide 2025",
    description: "Your complete guide to Sri Lanka's most beautiful beach destination",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function MirissaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Stunning aerial view of Mirissa beach showing golden sand, turquoise waters, palm trees, and the iconic coconut hill"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mirissa</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Premier Whale Watching Paradise</p>
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mirissa: Where Ocean Dreams Come True</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled along Sri Lanka's stunning southern coast, Mirissa is a slice of tropical paradise that captures 
              hearts with its pristine golden beaches, world-renowned whale watching opportunities, and laid-back island vibes. 
              This charming fishing village has evolved into one of Sri Lanka's most sought-after beach destinations while 
              maintaining its authentic charm and natural beauty.
            </p>
            <p className="text-lg">
              From witnessing majestic blue whales in their natural habitat to surfing perfect waves, from climbing the 
              iconic Coconut Hill for sunset views to enjoying fresh seafood by the ocean, Mirissa offers an unforgettable 
              tropical escape that combines adventure, relaxation, and natural wonder.
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
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World's Best Whale Watching Experience</h2>
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
                Blue whales, the largest animals on Earth, frequent Mirissa's waters
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mirissa is globally recognized as one of the best places to spot blue whales, sperm whales, and dolphins. 
                The continental shelf drops dramatically just off the coast, creating deep waters where these magnificent 
                creatures feed and play, often coming remarkably close to shore.
              </p>
              <p>
                Join a whale watching tour and witness the breathtaking sight of blue whales - the largest animals ever 
                to have lived on Earth - surfacing in the crystal-clear waters of the Indian Ocean. The success rate 
                for whale sightings during peak season is over 90%.
              </p>
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
        <section className="mb-12">
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
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Coconut Hill in Mirissa with palm trees silhouetted against golden sunset sky"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This small rocky outcrop connected to the mainland by a narrow strip of sand is Mirissa's most 
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
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Mirissa main beach showing golden sand, clear blue water, palm trees, and beachgoers relaxing"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
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
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Secret Beach in Mirissa showing secluded cove with pristine sand and fewer crowds"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Tucked away behind Coconut Hill, this smaller, more secluded beach offers privacy and tranquility 
                      away from the crowds. It's perfect for couples seeking romance or anyone wanting a peaceful beach 
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
                Mirissa represents the perfect blend of adventure and relaxation, where you can witness the world's 
                largest mammals in their natural habitat by morning and watch spectacular sunsets from Coconut Hill 
                by evening. This tropical paradise offers experiences that will create memories to last a lifetime.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you're seeking the thrill of whale watching, the peace of pristine beaches, or the adventure 
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
