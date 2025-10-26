"use client"

import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
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
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
export default function KandyTravelGuide() {

  const TempleOfTheToothImages = [
    "/Kandy2.jpeg",
    "/Temple-of-the-tooth.jpeg",
    "/Temple-of-the-tooth2.jpeg",
    "/Temple-of-the-tooth3.jpeg",
  ]

  const KandyLakeImages = [
    "/Kandy3.jpeg",
    "/Kandy.jpeg",
    "/Kandy1.jpeg",
  ]

  const BotanicalGardensImages = [
    "/Royal-botanical-garden-kandy.jpg",
    "/placeholder.svg?height=300&width=400",
  ]

  const BahirawakandaImages = [
    "/Bahirawakanda.jpeg",
    "/Temple-of-the-tooth3.jpeg",
  ]

  const CulturalShowImages = [
    "/Kandy-Esela-Perahara.JPG",
    "/Kandy-Procession.jpg",
    "/perahara.jpeg",
    "/perahara1.jpeg",
    "/perahara2.jpg",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kandy3.jpeg"
          alt="Beautiful view of Kandy Lake with Temple of the Tooth and surrounding hills in Sri Lankas cultural capital"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neutral-100 dark:text-neutral-100">Kandy</h1>
          <p className="text-xl md:text-2xl mb-6 font-light text-neutral-100 dark:text-neutral-200">Sri Lanka&apos;s Sacred Cultural Capital</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-neutral-100 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-neutral-100 bg-green-600/80 text-white border-green-500">
              <Heart className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-neutral-100 bg-blue-600/80 text-white border-blue-500">
              <Mountain className="w-4 h-4 mr-1" />
              500m Above Sea Level
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kandy: The Heart of Sri Lankan Culture</h2>
          <div className="prose prose-lg max-w-none text-neutral-800 dark:text-neutral-200 leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the misty hills of central Sri Lanka, Kandy is a magical city that will steal your heart the moment you step foot here.
              This beautiful city sits 500 meters above sea level, surrounded by green mountains and filled with cool, fresh air.
              As the last royal capital of ancient Sri Lanka and home to the sacred Temple of the Tooth Relic, Kandy is where ancient
              spirituality meets stunning natural beauty.
            </p>
            <p className="text-lg mb-4">
              Kandy is special because it&apos;s a UNESCO World Heritage site that has kept its old-world charm alive. The city was the final
              kingdom to resist British rule, making it the keeper of pure Sri Lankan traditions. You&apos;ll see this everywhere - in the
              traditional dances, the way people dress for temple visits, the old wooden houses, and the peaceful way of life.
            </p>
            <p className="text-lg mb-4">
              What makes Kandy truly unique is how it blends the old with the new. Ancient temples sit next to modern shops, traditional
              craftsmen work alongside young entrepreneurs, and age-old festivals happen in a city that&apos;s very much alive today.
              The weather here is perfect - not too hot, not too cold - making it comfortable to explore all year round.
            </p>
            <p className="text-lg">
              Whether you want to find inner peace at Buddhist temples, learn about Sri Lankan history, enjoy nature walks around the
              beautiful lake, or shop for authentic handicrafts, Kandy has something for everyone. This city doesn&apos;t just show you
              Sri Lankan culture - it lets you live and breathe it.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-700 dark:text-yellow-400" />
                <span className="text-neutral-900 dark:text-neutral-100">Quick Kandy Facts - Everything You Need to Know</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>Founded:</strong> 14th Century (Over 700 years old!)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-700 dark:text-green-400" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>Elevation:</strong> 500m (1,640 feet) - Perfect cool climate
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-800 dark:text-purple-300" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>Population:</strong> ~125,000 friendly locals
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-700 dark:text-pink-400" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>Local Name:</strong> &quot;Maha Nuwara&quot; (The Great City)
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>Distance from Colombo:</strong> 116km (2.5 hour drive)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-700 dark:text-yellow-400" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>UNESCO Status:</strong> World Heritage Site since 1988
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-800 dark:text-orange-400" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>Best Visit Duration:</strong> 2-3 days minimum
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-700 dark:text-green-400" />
                    <span className="text-neutral-900 dark:text-neutral-100">
                      <strong>Best Weather:</strong> December to April (dry season)
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Why Kandy is Special:</h4>
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  Kandy was the last independent kingdom of Sri Lanka, never fully conquered by Portuguese or Dutch colonizers.
                  This is why you&apos;ll find the purest forms of Sri Lankan culture, traditions, and architecture here. The city
                  is also the birthplace of the famous Kandy dance and is home to some of the most skilled traditional craftsmen in the country.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Get to Kandy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Get to Kandy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  From Colombo & Airport
                </CardTitle>
                <CardDescription>Multiple convenient options to reach Kandy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">🚗 By Car/Taxi (Recommended)</h4>
                  <ul className="text-sm text-orange-700 dark:text-orange-400 space-y-1">
                    <li>• <strong>Duration:</strong> 2.5 hours from Colombo</li>
                    <li>• <strong>Cost:</strong> 8,000-15,000 LKR for taxi</li>
                    <li>• <strong>Route:</strong> A1 Highway (well-maintained)</li>
                    <li>• <strong>From Airport:</strong> 3.5 hours, 12,000-20,000 LKR</li>
                    <li>• <strong>Best for:</strong> Families, groups, luggage convenience</li>
                  </ul>
                  <div className="mt-3 p-3 bg-orange-100 dark:bg-orange-800/30 rounded-md border-l-4 border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Kandy. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span><strong>Contact:</strong> +94 77 123 4567</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✈️</span>
                        <Link href="/airport-transfers" className="underline hover:text-orange-600 dark:hover:text-orange-300">
                          <strong>Airport Transfer Services</strong> - Click for details & booking
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">🚂 By Train (Most Scenic)</h4>
                  <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                    <li>• <strong>Duration:</strong> 3 hours from Colombo Fort Station</li>
                    <li>• <strong>Cost:</strong> 500-1500 LKR depending on class</li>
                    <li>• <strong>Frequency:</strong> Multiple trains daily (6:00 AM - 8:00 PM)</li>
                    <li>• <strong>Best seats:</strong> Right side for mountain views</li>
                    <li>• <strong>Tip:</strong> Book 1st or 2nd class for comfort</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🚌 By Bus (Budget Option)</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                    <li>• <strong>Duration:</strong> 2.5-3 hours from Colombo</li>
                    <li>• <strong>Cost:</strong> 200-400 LKR (very affordable)</li>
                    <li>• <strong>Types:</strong> Government buses & private coaches</li>
                    <li>• <strong>Departure:</strong> Bastian Mawatha Bus Station</li>
                    <li>• <strong>Frequency:</strong> Every 30 minutes</li>
                  </ul>
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-green-500" />
                  From Other Cities
                </CardTitle>
                <CardDescription>Connections from popular destinations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🏖️ From Galle (South Coast)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Train:</strong> 4-5 hours via Colombo (scenic coastal route)</li>
                    <li>• <strong>Bus:</strong> 3.5 hours direct or via Colombo</li>
                    <li>• <strong>Car:</strong> 3 hours via A2 and A1 highways</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🌿 From Nuwara Eliya (Hill Country)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Train:</strong> 3 hours (famous scenic route)</li>
                    <li>• <strong>Bus:</strong> 2.5 hours through tea plantations</li>
                    <li>• <strong>Car:</strong> 2 hours via A5 road (mountain driving)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">🦁 From Sigiriya (Cultural Triangle)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Bus:</strong> 2 hours direct buses available</li>
                    <li>• <strong>Car:</strong> 1.5 hours via A6 and A9</li>
                    <li>• <strong>Tour:</strong> Many combine both in day trips</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">💡 Pro Travel Tips</h4>
                  <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                    <li>• <strong>Train booking:</strong> Reserve seats online at railway.gov.lk</li>
                    <li>• <strong>Best travel time:</strong> Early morning for less traffic</li>
                    <li>• <strong>Weather check:</strong> Hill roads can be foggy in evenings</li>
                    <li>• <strong>Currency:</strong> Have small notes for bus fares</li>
                    <li>• <strong>Language:</strong> Drivers usually speak basic English</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Temple of the Tooth */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Temple of the Tooth Relic (Sri Dalada Maligawa)</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <ImageCarousel
                images={TempleOfTheToothImages}
                alt="Temple of the Tooth Relic showing various views of the sacred site"
              />

              <p className="text-sm text-muted-foreground mt-2 italic">
                The sacred Temple of the Tooth Relic - Buddhisms most important shrine
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Temple of the Tooth Relic is not just Kandys crown jewel – its one of Buddhisms most sacred sites
                worldwide. This magnificent temple houses a tooth relic of Lord Buddha, making it a pilgrimage
                destination for millions of Buddhists from around the globe.
              </p>
              <p>
                Built in the 16th century, the temple showcases exquisite Kandyan architecture with its intricate
                woodwork, beautiful paintings, and golden roof. The daily rituals (pujas) held here are deeply moving
                spiritual experiences that offer visitors a glimpse into Sri Lankas Buddhist heritage.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Puja Times (Daily Rituals):</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Morning: 5:30 AM - 6:45 AM</li>
                  <li>• Afternoon: 9:30 AM - 11:00 AM</li>
                  <li>• Evening: 6:30 PM - 8:00 PM</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/destinations/temple-of-tooth">
                  <Button
                    className="mt-2 h-12 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                    variant="default"
                  >
                    Discover More about Temple of the Tooth
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Kandy</h2>

          <div className="space-y-8">
            {/* Kandy Lake */}
            <Card>
              <CardHeader>
                <CardTitle>1. Kandy Lake (Bogambara Lake) - The Heart of the City</CardTitle>
                <CardDescription>A peaceful artificial lake with fascinating history and beautiful surroundings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel
                      images={KandyLakeImages}
                      alt="Kandy Lake showing peaceful views, walking paths, and surrounding hills"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      The beautiful Kandy Lake - perfect for peaceful walks and photography
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This beautiful man-made lake was created in 1807 by King Sri Wickrama Rajasinghe, the last king of Kandy.
                      The lake covers about 18 hectares and is the centerpiece of the city. What makes it extra special is that it&apos;s
                      right in front of the Temple of the Tooth, making it a sacred place for many visitors.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The lake has an interesting story - when the king first wanted to build it, his ministers were against it because
                      they thought it was too expensive. But the king built it anyway, and today everyone agrees it was one of the best
                      decisions ever made! The lake helps keep the city cool and provides a peaceful escape from busy streets.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Perfect Activities Here:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Early morning walks (5:30-7:00 AM) - see locals doing exercises
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Evening strolls (5:00-7:00 PM) - golden hour photography
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Feeding colorful fish (bring bread from nearby shops)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Bird watching - spot kingfishers, herons, and cormorants
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Small island visit (Kiri Samudraya) - once used by the royal family
                        </li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      💡 <strong>Local Tip:</strong> The best photos are taken from the pathway on the Temple of the Tooth side,
                      especially during sunset when the mountains reflect in the water.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Royal Botanical Gardens */}
            <Card>
              <CardHeader>
                <CardTitle>2. Royal Botanical Gardens, Peradeniya - A Paradise for Nature Lovers</CardTitle>
                <CardDescription>147 acres of incredible plants from around the world - one of Asia&apos;s finest gardens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 6km from Kandy city (15 minutes by tuk-tuk), these world-famous botanical gardens are like stepping
                      into a green paradise. Originally created as a pleasure garden for Kandyan royalty in 1371, today it&apos;s
                      home to over 4,000 different types of plants from all over the world. It&apos;s so beautiful that even Queen
                      Elizabeth II planted a tree here!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The gardens are huge - 147 acres - but don&apos;t worry, there are clear paths and helpful signs everywhere.
                      You can easily spend a whole day here, and there are plenty of shady spots to rest. The best part?
                      It&apos;s not just pretty to look at - you&apos;ll learn so much about plants, trees, and flowers.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Must-See Highlights:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Orchid House:</strong> Over 300 types of orchids, including rare varieties
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Giant Javan Fig Tree:</strong> Massive tree with branches covering huge area
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Spice Garden:</strong> See cinnamon, cardamom, pepper, and nutmeg growing
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Palm Avenue:</strong> Beautiful walkway lined with royal palm trees
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Medicinal Plants:</strong> Learn about traditional Sri Lankan healing plants
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Cannonball Tree:</strong> Weird and wonderful tree with unique round fruits
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Practical Information:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                        <li>• <strong>Entry Fee:</strong> Very affordable - around 500 LKR for foreigners</li>
                        <li>• <strong>Best Time:</strong> Early morning (8:00 AM) or late afternoon (4:00 PM)</li>
                        <li>• <strong>Duration:</strong> 2-4 hours depending on your interest</li>
                        <li>• <strong>Facilities:</strong> Restrooms, cafeteria, souvenir shop available</li>
                        <li>• <strong>Perfect for:</strong> Families, couples, solo travelers, photographers</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <ImageCarousel
                      images={BotanicalGardensImages}
                      alt="Royal Botanical Gardens Peradeniya showing diverse tropical plants and pathways"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Royal Botanical Gardens - 147 acres of botanical paradise
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Bahirawakanda Vihara Buddha Statue - See Kandy from Above</CardTitle>
                <CardDescription>Giant white Buddha statue with amazing city views and spiritual atmosphere</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      High up on Bahirawakanda hill stands a magnificent 88-foot tall white Buddha statue that watches over
                      the entire city of Kandy. Built in 1993, this peaceful temple complex is one of the best places to see
                      Kandy from above. The climb up the hill might make you a bit tired, but the views are absolutely worth it!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This place is special because it&apos;s very quiet and peaceful, unlike the busier temples in the city center.
                      Many locals come here early in the morning or evening to meditate and pray. The white statue looks especially
                      beautiful during sunset when it glows against the colorful sky.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">What Makes This Special:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          360-degree views of Kandy city, lake, and surrounding mountains
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Perfect for sunrise (6:00 AM) and sunset (6:00 PM) photography
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Peaceful meditation spots around the statue
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Less crowded than main city temples
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Cool, fresh mountain air - great escape from city heat
                        </li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      🚗 <strong>Getting There:</strong> 15-minute tuk-tuk ride from city center. The road gets steep,
                      so make sure your driver is experienced with hill driving!
                    </div>
                  </div>
                  <div>
                    <ImageCarousel
                      images={BahirawakandaImages}
                      alt="Bahirawakanda Buddha statue with panoramic views of Kandy city"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Bahirawakanda Buddha Statue - Amazing city views from above
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Shows */}
            <Card>
              <CardHeader>
                <CardTitle>4. Traditional Kandyan Cultural Shows - Experience Living History</CardTitle>
                <CardDescription>Spectacular performances of ancient dances, music, and fire walking that will amaze you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel
                      images={CulturalShowImages}
                      alt="Traditional Kandyan cultural performances and Esala Perahera festival"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Traditional Kandyan cultural shows and Esala Perahera performances
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Don&apos;t leave Kandy without watching these incredible cultural shows! These aren&apos;t just performances -
                      they&apos;re living pieces of Sri Lankan history that have been passed down from parent to child for over
                      500 years. You&apos;ll see dancers in beautiful, colorful costumes performing moves that tell ancient stories.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The shows usually last about 1 hour and include different types of traditional dances, drumming that will
                      make your heart beat faster, and the famous fire walking ceremony where performers walk on burning coals!
                      Don&apos;t worry - it&apos;s completely safe to watch, and the performers are highly skilled.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">What You&apos;ll See:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Kandyan Dance:</strong> Graceful movements in stunning traditional costumes
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Drum Performances:</strong> Powerful rhythms on traditional Sri Lankan drums
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Fire Walking:</strong> Amazing feat where performers walk on hot coals
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Peacock Dance:</strong> Beautiful dance mimicking the movements of peacocks
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <strong>Cobra Dance:</strong> Mesmerizing performance representing the snake
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Popular Venues & Times:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                        <li>• <strong>Kandy Cultural Centre:</strong> 7:00 PM daily (most popular)</li>
                        <li>• <strong>Red Cross Society:</strong> 6:30 PM daily (intimate setting)</li>
                        <li>• <strong>YMBA Cultural Hall:</strong> 7:00 PM daily (traditional venue)</li>
                        <li>• <strong>Ticket Price:</strong> Around 1000-1500 LKR (very reasonable!)</li>
                        <li>• <strong>Duration:</strong> 60-75 minutes with intermission</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* More Amazing Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">More Amazing Places to Visit Near Kandy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Kandy is surrounded by incredible places that are perfect for day trips. Each of these spots offers something
            unique - from adventure and nature to spirituality and breathtaking views. Most are within 1-2 hours from the city center.
          </p>
          <div className="grid md:grid-cols-3 gap-6">


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Ambuluwawa Tower - Amazing Views</CardTitle>
                <CardDescription>Multi-religious harmony site with stunning 360° views</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Ambuluwawa-tower.jpg"
                  alt="Ambuluwawa Tower showing stunning views and unique architecture"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  This unique place represents religious harmony with Buddhist, Hindu, Islamic, and Christian symbols all in one location.
                  The tower offers incredible 360-degree views of the central highlands. Perfect for a half-day trip!
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 45 minutes from Kandy | 🎫 Entry: 200 LKR | ⏰ Best time: Morning or late afternoon
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Hanthana Mountain Range - Hiking Paradise</CardTitle>
                <CardDescription>Seven peaks with hiking trails and tea plantations</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Hanthana-mountain-range.jpeg"
                  alt="View of Sigiriya Rock from Pidurangala Rock"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Seven beautiful mountain peaks perfect for hiking and nature lovers. You&apos;ll walk through tea plantations,
                  see amazing views, and breathe the freshest mountain air. Different trails for beginners and experienced hikers.
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 30 minutes from Kandy | 🥾 Difficulty: Easy to Moderate | ⏰ Duration: 2-6 hours
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            {/* <Link href="/destinations/hanthana-birds-park" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Hanthana Birds Park - Wildlife Heaven</CardTitle>
                  <CardDescription>See colorful birds in their natural habitat</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Minneriyanationalpark"
                    alt="Colorful birds in Hanthana Birds Park natural setting"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground mb-3">
                    Watch over 50 species of beautiful birds including kingfishers, hornbills, and colorful parrots. 
                    Perfect for families and bird lovers. Bring your camera - you&apos;ll get amazing photos!
                  </p>
                  <div className="text-xs text-muted-foreground mb-3">
                    📍 Distance: 25 minutes from Kandy | 🐦 Species: 50+ bird types | ⏰ Best time: Early morning
                  </div>
                  <span className="text-sm font-medium text-primary mt-3 inline-block">
                    Discover Birds →
                  </span>
                </CardContent>
              </Card>
            </Link> */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Nelligala Temple - Peace & Views</CardTitle>
                <CardDescription>Beautiful temple which is located in a mountain</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Nelligala.png"
                  alt="Nelligala Temple with ancient caves and mountain views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  A peaceful ancient temple built into natural rock caves. Perfect for meditation and quiet reflection.
                  The views of the surrounding valleys are breathtaking, and it&apos;s much less crowded than city temples.
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 40 minutes from Kandy | 🧘 Activity: Meditation & sightseeing | 🎫 Entry: Free
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/nelligala-temple" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Victoria Dam</CardTitle>
                <CardDescription>The Tallest The Largest Hydroelectric Power Station In Sri Lanka.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Victoria-Dam.jpg"
                  alt="Victoria Dam with stunning views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  The Victoria Dam is the tallest and largest hydroelectric power station in Sri Lanka, located in the central
                  highlands. It&apos;s an impressive feat of engineering and offers stunning views of the surrounding mountains
                  and the reservoir it creates. A great spot for photography and learning about renewable energy.
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 40 minutes from Kandy | 🧘 Activity: Meditation & sightseeing | 🎫 Entry: Free
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/nelligala" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Knuckles Mountain Range - Adventure</CardTitle>
                <CardDescription>UNESCO World Heritage hiking and camping destination</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Knuckles Mountain Range with hiking trails and misty peaks"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Named because the peaks look like knuckles of a clenched fist. This UNESCO site offers serious hiking,
                  camping, and some of the best mountain views in Sri Lanka. Great for adventure seekers!
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 1.5 hours from Kandy | 🏕️ Activity: Hiking & camping | 🥾 Difficulty: Challenging
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Gadaladeniya Temple - Ancient Art</CardTitle>
                <CardDescription>14th-century temple with stunning architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Gadaladeniya Temple showing ancient Sinhalese architecture"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Built in 1344, this temple shows a unique mix of Sinhalese and South Indian architecture.
                  The stone carvings and old paintings are incredible. Less touristy but equally beautiful.
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 45 minutes from Kandy | 🏛️ Built: 1344 CE | 🎫 Entry: Small donation
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Lankatilaka Temple - Sacred Heights</CardTitle>
                <CardDescription>Ancient temple on a hilltop with panoramic views</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Lankatilaka Temple perched on hilltop with valley views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Another 14th-century masterpiece built on a rock outcrop. The climb up is worth it for the views and
                  the sense of peace you&apos;ll feel. The architecture is a perfect example of ancient Sinhalese design.
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 50 minutes from Kandy | ⛰️ Location: Hilltop | 🚶 Climb: Moderate
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Embekke Devalaya - Wood Carving Art</CardTitle>
                <CardDescription>Famous for intricate wooden pillars and carvings</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Embekke Devalaya showing detailed wooden pillar carvings"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Famous for having the most beautiful wooden carvings in Sri Lanka. Each pillar is unique with amazing
                  details of dancers, musicians, and animals. Art lovers will be amazed by the craftsmanship.
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 40 minutes from Kandy | 🎨 Famous for: Wood carvings | 📸 Photography: Allowed
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Pinnawala Elephant Orphanage</CardTitle>
                <CardDescription>See elephants being cared for and bathing in the river</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Pinnawala.jpeg"
                  alt="Elephants at Pinnawala Elephant Orphanage bathing and being cared for"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Watch baby elephants being bottle-fed and see the whole herd bathing in the river. Started as a home
                  for orphaned elephants, now it&apos;s one of the most popular attractions near Kandy.
                </p>
                <div className="text-xs text-muted-foreground mb-3">
                  📍 Distance: 1 hour from Kandy | 🐘 Elephants: 80+ | ⏰ Feeding: 9AM, 1PM, 5PM
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pinnawala-elephant-orphanage" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Day Trip Suggestions */}
          <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">Perfect Day Trip Ideas from Kandy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">🌿 Nature & Adventure Day</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Start early at Hanthana Mountain Range for hiking (3 hours), then visit Hanthana Birds Park (1 hour),
                  and end at Ambuluwawa Tower for sunset views. Perfect for active travelers!
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🏛️ Temple & Culture Day</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit Gadaladeniya Temple in the morning, continue to Lankatilaka Temple, then Embekke Devalaya for the
                  wood carvings. End with a cultural show in Kandy. Perfect for history lovers!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Donts for Kandy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - Respect the Sacred City
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Dress modestly:</strong> Cover shoulders and knees, especially at temples
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Remove shoes:</strong> Always remove footwear before entering temples
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Attend a puja:</strong> Experience the spiritual atmosphere during prayer times
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Try local food:</strong> Sample authentic Kandyan cuisine
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Learn basic Sinhala:</strong> &quot;Ayubowan&quot; (hello) goes a long way

                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-700 bg-red-50/50 dark:bg-red-900/20">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DONTs - Avoid Cultural Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Dont point feet:</strong> Never point your feet toward Buddha statues
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Dont turn your back:</strong> Avoid turning your back to Buddha statues
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Dont wear hats:</strong> Remove hats and caps inside temples
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Dont be loud:</strong> Maintain respectful silence in sacred areas
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Dont rush:</strong> Take time to appreciate the spiritual atmosphere
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Kandy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Options</CardTitle>
                <CardDescription className="text-neutral-800 dark:text-neutral-200">$10-30 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Backpacker hostels in city center</li>
                  <li>• Guesthouses near the lake</li>
                  <li>• Family-run homestays</li>
                  <li>• Shared dormitories</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription className="text-neutral-800 dark:text-neutral-200">$30-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Boutique hotels with lake views</li>
                  <li>• Colonial-style accommodations</li>
                  <li>• Hotels near Temple of Tooth</li>
                  <li>• Properties with cultural programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Luxury Resorts</CardTitle>
                <CardDescription className="text-neutral-800 dark:text-neutral-200">$80+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heritage hotels with history</li>
                  <li>• Hilltop resorts with panoramic views</li>
                  <li>• Spa resorts in the hills</li>
                  <li>• Premium service and amenities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Around Kandy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Transportation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tuk-Tuks (Three-wheelers)</h4>
                  <p className="text-sm text-muted-foreground">
                    Most convenient for short distances. Always negotiate the fare beforehand.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Buses</h4>
                  <p className="text-sm text-muted-foreground">
                    Cheapest option but can be crowded. Good for reaching nearby attractions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Walking</h4>
                  <p className="text-sm text-muted-foreground">
                    City center is walkable. Perfect for exploring the lake area and main temples.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Taxi/Uber</h4>
                  <p className="text-sm text-muted-foreground">
                    Available but limited. Book through hotels for reliable service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting to Kandy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    3 hours by train (scenic route) or 2.5 hours by car/bus
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Airport</h4>
                  <p className="text-sm text-muted-foreground">3.5 hours by car. Pre-arranged transfers recommended.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Train Journey</h4>
                  <p className="text-sm text-muted-foreground">
                    One of the worlds most scenic train rides through tea plantations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Food Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Kandyan Cuisine & Where to Eat</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Must-Try Kandyan Dishes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">Rice & Curry</h4>
                  <p className="text-sm text-muted-foreground">
                    Traditional Sri Lankan meal with multiple curries, sambols, and papadams
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Kiribath</h4>
                  <p className="text-sm text-muted-foreground">
                    Coconut milk rice, often served during special occasions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Kandyan Sweets</h4>
                  <p className="text-sm text-muted-foreground">Traditional desserts like kokis, aluwa, and bibikkan</p>
                </div>
                <div>
                  <h4 className="font-semibold">Ceylon Tea</h4>
                  <p className="text-sm text-muted-foreground">World-famous tea grown in the surrounding hills</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Restaurants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">The Empire Cafe</h4>
                  <p className="text-sm text-muted-foreground">Colonial-style cafe with great views and local dishes</p>
                </div>
                <div>
                  <h4 className="font-semibold">Balaji Dosai</h4>
                  <p className="text-sm text-muted-foreground">Authentic South Indian vegetarian food</p>
                </div>
                <div>
                  <h4 className="font-semibold">Kandy Muslim Hotel</h4>
                  <p className="text-sm text-muted-foreground">Famous for biriyani and local Muslim cuisine</p>
                </div>
                <div>
                  <h4 className="font-semibold">Slightly Chilled Lounge Bar</h4>
                  <p className="text-sm text-muted-foreground">Rooftop dining with lake views</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-300">Your Kandy Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                Kandy is more than just a destination – its a spiritual journey that connects you with the soul of Sri
                Lanka. From the sacred Temple of the Tooth to the serene lake walks, every moment in this cultural
                capital offers something magical.
              </p>
              <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                Take time to immerse yourself in the local culture, attend a traditional dance performance, and dont
                rush through the temples. The beauty of Kandy lies not just in its sights, but in the peaceful
                atmosphere that has made it a pilgrimage destination for centuries.
              </p>
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                May your journey to Kandy bring you peace, wonder, and unforgettable memories! 🙏✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
