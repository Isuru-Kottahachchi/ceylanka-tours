"use client";

import Image from "next/image"
import { MapPin, Star, Waves, Sun, Camera, Users, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ImageCarousel } from "@/components/ui/image-carousel"


export default function BlueBeachGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Blue-beach.jpg"
          alt="Crystal clear waters and golden sands of Blue Beach, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nilwella Blue Beach</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka’s Hidden Blue-Water Escape</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Calm Blue Waters
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Sun className="w-4 h-4 mr-1" />
              Family Friendly
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Quick Facts</a>
          <a href="#highlights" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Highlights</a>
          <a href="#tips" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Travel Tips</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-24" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Blue Beach: Sri Lanka’s Secret Coastal Gem</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Tucked away on Sri Lanka’s southern coast, Blue Beach is a tranquil haven where turquoise waters meet soft golden sands. Far from the crowds, this hidden beach is beloved by locals for its calm, shallow lagoon, making it ideal for families, swimmers, and anyone seeking a peaceful escape.
            </p>
            <p className="text-lg">
              The beach’s name comes from the striking clarity and color of its water, which glows a brilliant blue under the tropical sun. Here, you’ll find gentle waves, swaying palms, and a laid-back village atmosphere that invites you to slow down and savor the moment.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mb-10 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Blue Beach
                </CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Southern Coast, near Nilwella
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Water:</strong> Calm, crystal-clear blue
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Season:</strong> December to April
                    </span>
                  </div>
           
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Must-See:</strong> Blue lagoon, coral reef
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Vibe:</strong> Quiet, local, family-friendly
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 1-2 days
                    </span>
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
                  How to Get to Blue Beach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 180km (112 miles) from Colombo (Depends on the road Express way or coastal road)</li>
                      <li>• <strong>Duration:</strong> 4-5 hours</li>
                      <li>• <strong>Cost:</strong> Around $60 USD</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Blue Beach. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Waligama</li>
                      <li>• <strong>Duration:</strong> 6-7 hours total</li>
                      <li>• <strong>Cost:</strong> $3-12 USD (depending on class)</li>
                      <li>• <strong>Note:</strong> Get off at <span className="font-semibold text-blue-600 dark:text-blue-400">Waligama station</span></li>
                      {/* <li>• <strong>From Nanu Oya:</strong> 8km taxi/tuk-tuk ride to Nuwara Eliya</li> */}
                    </ul>

                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>


        {/* Highlights */}
        <section className="mb-12 scroll-mt-24" id="highlights">
          <h2 className="text-3xl font-bold mb-6">Top Highlights of Blue Beach</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Blue Beach Island</CardTitle>
                <CardDescription>Photogenic island with beautiful views and natural surroundings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: '/Blue-Beach-Island.jpg',
                        alt: 'Calm blue lagoon at Blue Beach, Sri Lanka with palm trees and clear skies',
                      },
                      {
                        src: '/Blue-Beach-Island3.jpg',
                        alt: 'Aerial view of the blue lagoon and sandy beach at Blue Beach, Sri Lanka',    
                      },
                      {
                        src: '/Blue-Beach-Island1.jpg',
                        alt: 'Families enjoying the shallow blue lagoon at Blue Beach, Sri Lanka',    
                      },
                      {
                        src: '/Blue-Beach-Island2.jpg',
                        alt: 'Aerial view of the blue lagoon and sandy beach at Blue Beach, Sri Lanka',    
                      },
                       {
                        src: '/Blue-Beach-Island4.jpg',
                        alt: 'Aerial view of the blue lagoon and sandy beach at Blue Beach, Sri Lanka',    
                      },
                       {
                        src: '/Blue-Beach-Island5.jpg',
                        alt: 'Aerial view of the blue lagoon and sandy beach at Blue Beach, Sri Lanka',    
                      },
                    ]}

                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The lagoon at Blue Beach is protected by a natural reef, creating a safe, shallow pool perfect for swimming, floating, and relaxing. The water is so clear you can see colorful fish darting between the rocks. <strong>Blue Beach is a private island</strong>, so please respect the tranquility and privacy of the area.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>🌊 Special Natural Feature:</strong> During certain times of the year, there is a narrow sandy path where you can see ocean waves coming from both sides - left and right. This creates a beautiful view and is perfect for taking amazing photos. The waves meet in the middle making it a very special sight!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>🏝️ Explore the Island:</strong> Blue Beach island has walking paths inside the island where you can explore and discover different areas. You can walk through the island, enjoy the natural surroundings, and take beautiful photos of the beach, palm trees, and blue water from various viewpoints.
                    </p>
                    <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 rounded-r-lg">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Important Safety Warning</h4>
                      <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                        <li className="flex items-start gap-2">
                          <span className="font-bold">🦔</span>
                          <span><strong>Watch for Sea Urchins:</strong> The rocks and reef areas have sea urchins with sharp spines. Always wear water shoes or sandals when walking in shallow water or near rocks. Do not touch or step on rocks without looking first.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">🏊</span>
                          <span><strong>Swimming Safety:</strong> While the lagoon is generally calm, always check current conditions before swimming. Stay within the protected lagoon area. Strong swimmers should still be careful near the outer reef where currents can be stronger.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">👨‍👩‍👧</span>
                          <span><strong>Children:</strong> Always watch children closely, especially near rocks and deeper water. Even calm water can have unexpected waves.</span>
                        </li>
                      </ul>
                    </div>
                    <ul className="space-y-2 text-muted-foreground mt-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Ideal for families and beginner swimmers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Calm even when other beaches are rough
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Great for floating and sunbathing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Walking path around the island for photos
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Special wave path during certain seasons
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle>Coral Reef & Snorkeling</CardTitle>
                <CardDescription>Discover vibrant marine life just offshore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a few meters from the sand, Blue Beach’s coral reef teems with tropical fish, sea urchins, and the occasional sea turtle. Bring your own snorkel or rent one from a local guesthouse for an unforgettable underwater adventure.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Snorkeling for all skill levels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        See parrotfish, angelfish, and more
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Best visibility December–April
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/blue-beach-snorkeling.jpg"
                    alt="Snorkeler exploring coral reef at Blue Beach, Sri Lanka"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card> */}
            <Card>
              <CardHeader>
                <CardTitle>Camping Experience</CardTitle>
                <CardDescription>Unforgettable nights under the stars</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Nilwella-Beach-Camping.jpg"
                    alt="Tents set up on Nilwella Blue Beach with a campfire and starry sky"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      For those seeking a true escape, Blue Beach offers a unique camping experience. Set up your tent on the soft sand, fall asleep to the sound of gentle waves, and wake to a sunrise over the Indian Ocean. Campfires, stargazing, and the privacy of a secluded island make this an unforgettable adventure. <strong>Note: As Blue Beach is a private island, always obtain permission from the owners or local caretakers before camping overnight.</strong>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Camp right on the sand with ocean views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Stargazing and campfires permitted (with care)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Bring your own gear and leave no trace
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12 scroll-mt-24" id="tips">
          <h2 className="text-3xl font-bold mb-6">Travel Tips for Blue Beach</h2>
          <Card>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Arrive early to enjoy the quietest hours</li>
                <li>There are a few small cafes and guesthouses nearby for snacks and shade</li>
                <li>Bring sun protection shade is limited on the sand</li>
                <li>Weekdays are less crowded than weekends</li>
                <li>Support local businesses by renting gear or buying refreshments</li>
                <li><strong>Blue Beach is a private island</strong> always respect the privacy of owners and other guests</li>
                <li>If camping, obtain permission and leave no trace</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final Inspiration */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Discover the Magic of Blue Beach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Blue Beach is a place to unwind, explore, and reconnect with the simple joys of sun, sea, and sand. Whether you’re snorkeling with tropical fish, floating in the lagoon, or simply soaking up the peaceful atmosphere, this hidden gem offers a slice of Sri Lankan paradise away from the crowds.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your Blue Beach escape and experience the best of Sri Lanka’s southern coast.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
