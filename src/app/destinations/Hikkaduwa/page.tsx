"use client"

import Image from "next/image"
import { Clock,CheckCircle, Waves, Fish, Camera, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"



function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-lg" style={{ height: '500px', width: '100%' }}>
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="rounded-lg transition-all duration-300 object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4 text-gray-800 dark:text-gray-200" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4 text-gray-800 dark:text-gray-200" />
            </Button>
          </>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function HikkaduwaTravelGuide() {
  const beachImages = [
    "/placeholder.svg?height=500&width=800",
    "/placeholder.svg?height=500&width=800",
    "/placeholder.svg?height=500&width=800",
    "/placeholder.svg?height=500&width=800"
  ]

  const coralImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]

  const surfingImages = [
    "/placeholder.svg?height=400&width=600", 
    "/placeholder.svg?height=400&width=600"
  ]

  const turtleImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=900&width=1400"
          alt="Hikkaduwa beach with golden sand, palm trees, surfing waves and coral reef waters"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">Hikkaduwa</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">Surf, Coral Reef & Sea Turtle Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Waves className="w-4 h-4 mr-2" />
              World-Class Surfing
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Fish className="w-4 h-4 mr-2" />
              Coral Sanctuary
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Camera className="w-4 h-4 mr-2" />
              Sea Turtle Watching
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Hikkaduwa Beach Paradise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Hikkaduwa is Sri Lanka&apos;s most famous beach destination, located on the stunning southern coast. 
              This vibrant coastal town offers the perfect mix of adventure and relaxation with its coral reef 
              sanctuary, world-class surfing waves, sea turtle watching, and lively beach culture. From snorkeling 
              in crystal-clear waters to catching perfect waves, Hikkaduwa has something for every beach lover.
            </p>
            <p className="text-lg">
              The town stretches along 4 kilometers of golden sandy beach, where traditional fishing boats share 
              the waves with surfers from around the world. The protected coral sanctuary makes it one of the best 
              snorkeling spots in Sri Lanka, while the consistent surf breaks attract both beginners and experienced 
              surfers year-round.
            </p>
          </div>
        </section>

        {/* Main Image Carousel */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Experience Hikkaduwa&apos;s Beauty</h2>
          <ImageCarousel images={beachImages} alt="Hikkaduwa beach and activities" />
        </section>

        {/* Quick Info */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Essential Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Best Time to Visit</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Surfing Season: November - April</li>
                    <li>Swimming Season: December - March</li>
                    <li>Snorkeling: Year-round (best visibility Dec-Apr)</li>
                    <li>Avoid: Monsoon season May - September</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Getting There</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>From Colombo: 98 km, 2 hours by car</li>
                    <li>From Galle: 19 km, 30 minutes</li>
                    <li>By Train: Hikkaduwa Railway Station</li>
                    <li>By Bus: Regular buses from major cities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Beach Activities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Surfing lessons and board rentals</li>
                    <li>Snorkeling and diving trips</li>
                    <li>Glass bottom boat tours</li>
                    <li>Sea turtle watching</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Average Costs</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Surfboard rental: LKR 1,000-1,500/day</li>
                    <li>Surf lesson: LKR 2,500-4,000</li>
                    <li>Glass boat tour: LKR 1,500-2,000</li>
                    <li>Snorkeling gear: LKR 500-800/day</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Top Attractions & Activities</h2>
          <div className="space-y-8">

            {/* Coral Sanctuary */}
            <Card>
              <CardHeader>
                <CardTitle>Hikkaduwa Coral Sanctuary</CardTitle>
                <CardDescription>Protected marine park with colorful coral reefs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Hikkaduwa National Park is a protected coral sanctuary covering 101 hectares of marine area. 
                      This underwater wonderland is home to over 60 species of coral and 170 species of colorful tropical 
                      fish. The shallow reef makes it perfect for snorkeling, even for beginners.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Glass bottom boat tours offer a dry way to explore the reef, while snorkeling gives you the full 
                      underwater experience. The best time for snorkeling is early morning when the water is calmest and 
                      visibility is at its peak. You can see parrotfish, angelfish, butterflyfish, and even small reef sharks.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 60 coral species to discover
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        170+ tropical fish species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for beginner snorkelers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Glass bottom boat tours available
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel images={coralImages} alt="Hikkaduwa coral reef and marine life" />
                </div>
              </CardContent>
            </Card>

            {/* Surfing */}
            <Card>
              <CardHeader>
                <CardTitle>World-Class Surfing</CardTitle>
                <CardDescription>Perfect waves for all skill levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel images={surfingImages} alt="Surfing at Hikkaduwa beach" />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Hikkaduwa is the birthplace of surfing in Sri Lanka and remains the top surf destination. The beach 
                      offers consistent waves year-round, with the best conditions from November to April. Multiple surf 
                      breaks cater to different skill levels, from gentle waves perfect for beginners to more challenging 
                      breaks for advanced surfers.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The main surf spots include the north end near the coral sanctuary (gentle waves), the main beach 
                      (medium waves), and Coconut Tree Hill area (more advanced). Surf schools line the beach offering 
                      lessons in multiple languages, and board rentals are available everywhere.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Waves for all skill levels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Professional surf schools
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Board rentals widely available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Consistent waves Nov-Apr
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sea Turtle Watching */}
            <Card>
              <CardHeader>
                <CardTitle>Sea Turtle Sanctuary</CardTitle>
                <CardDescription>Conservation center and turtle watching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Hikkaduwa Turtle Hatchery is a conservation project that protects sea turtle eggs and raises 
                      baby turtles before releasing them into the ocean. Five species of sea turtles visit these shores: 
                      Green, Hawksbill, Olive Ridley, Loggerhead, and Leatherback turtles.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Visitors can learn about turtle conservation efforts, see baby turtles, and even participate in 
                      turtle releases during nesting season (October to April). The center also treats injured turtles 
                      and educates visitors about marine conservation. Early morning or evening visits offer the best 
                      chance to see turtle activity on the beach.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Five sea turtle species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Turtle release experiences
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Conservation education
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Nesting season Oct-Apr
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel images={turtleImages} alt="Sea turtles at Hikkaduwa sanctuary" />
                </div>
              </CardContent>
            </Card>

            {/* Beach Life & Nightlife */}
            <Card>
              <CardHeader>
                <CardTitle>Beach Life & Entertainment</CardTitle>
                <CardDescription>Vibrant beach culture and nightlife scene</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Hikkaduwa beach restaurants and nightlife with sunset views"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Hikkaduwa comes alive as the sun sets with beachfront restaurants, bars, and live music venues. 
                      The main beach strip is lined with restaurants serving fresh seafood, international cuisine, and 
                      local favorites. Many places offer tables right on the sand with stunning sunset views.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The nightlife scene includes beach bars with live music, DJ nights, and even occasional beach 
                      parties. Fire dancing shows are common along the beach, and many restaurants stay open late. 
                      The atmosphere is relaxed and friendly, attracting travelers from around the world.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beachfront dining experiences
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh seafood specialties
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Live music and entertainment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful sunset views
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Activity Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Activity Tips & Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Water Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Always swim in designated safe areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Check weather conditions before activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Use reef-safe sunscreen only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Book surf lessons with certified instructors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Don&apos;t touch or step on coral reefs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What to Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Reef-safe sunscreen (SPF 30+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Waterproof camera or phone case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Quick-dry swimwear and rashguard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Flip-flops and water shoes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Light cotton clothing for evenings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 t-green-500 mt-1 flex-shrink-0" />
                    <span>Reusable water bottle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Photography Guide */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Photography Guide
              </CardTitle>
              <CardDescription>Capture the best of Hikkaduwa</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Best Photo Spots</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Coral sanctuary underwater shots</li>
                    <li>• Surfing action from the beach</li>
                    <li>• Sunset from beachfront restaurants</li>
                    <li>• Traditional fishing boats at dawn</li>
                    <li>• Sea turtle release moments</li>
                    <li>• Beach life and local culture</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Photography Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use underwater camera for reef shots</li>
                    <li>• Golden hour for best beach lighting</li>
                    <li>• Polarizing filter reduces water glare</li>
                    <li>• Fast shutter speed for surfing shots</li>
                    <li>• Respect turtle sanctuary photography rules</li>
                    <li>• Protect gear from sand and salt water</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Where to Stay</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Beach Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Luxury:</strong> Beachfront resorts with full amenities</p>
                  <p><strong>Mid-range:</strong> Boutique hotels with pool and restaurant</p>
                  <p><strong>Features:</strong> Sea views, beach access, water sports</p>
                  <p><strong>Price Range:</strong> $50-200+ per night</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Guesthouses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Budget-friendly:</strong> Family-run accommodations</p>
                  <p><strong>Local experience:</strong> Authentic Sri Lankan hospitality</p>
                  <p><strong>Features:</strong> Home-cooked meals, local tips</p>
                  <p><strong>Price Range:</strong> $15-40 per night</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Surf Hostels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Backpacker-friendly:</strong> Dorm beds and private rooms</p>
                  <p><strong>Surf-focused:</strong> Board storage, surf lessons</p>
                  <p><strong>Features:</strong> Social atmosphere, young crowd</p>
                  <p><strong>Price Range:</strong> $8-25 per night</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Marine Conservation */}
        <section className="mb-12">
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">Protecting Hikkaduwa&apos;s Marine Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Hikkaduwa&apos;s coral reef is a fragile ecosystem that needs our protection. The coral sanctuary faces 
                threats from pollution, climate change, and tourism pressure. As a responsible visitor, you can help 
                preserve this underwater paradise for future generations.
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                Use only reef-safe sunscreen, don&apos;t touch or stand on corals, avoid single-use plastics, and 
                choose eco-friendly tour operators. Support local conservation efforts by visiting the turtle hatchery 
                and learning about marine protection initiatives. Your conscious choices make a real difference.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Planning Your Visit */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Plan Your Perfect Hikkaduwa Experience</CardTitle>
              <CardDescription>Make the most of your beach adventure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Recommended Itinerary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                    <div>
                      <p><strong>Day 1 - Arrival & Beach Time:</strong></p>
                      <ul className="space-y-1 mt-2">
                        <li>• Check-in and beach orientation</li>
                        <li>• Afternoon swim and sunbathing</li>
                        <li>• Sunset dinner at beachfront restaurant</li>
                        <li>• Evening beach walk</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Day 2 - Water Adventures:</strong></p>
                      <ul className="space-y-1 mt-2">
                        <li>• Morning snorkeling in coral sanctuary</li>
                        <li>• Glass bottom boat tour</li>
                        <li>• Afternoon surf lesson</li>
                        <li>• Visit turtle hatchery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    <strong>Local Tip:</strong> Visit during the week for fewer crowds and better deals. Book 
                    accommodation in advance during peak season (December-March). Try the local fish curry at 
                    small restaurants for authentic flavors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  )
}
