"use client"

import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Camera, Heart, ChevronLeft, ChevronRight, Sunrise, Sunset, Car, Bus, Train, Plane, Book, Building, Waves, Mountain, Droplets } from "lucide-react"
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

export default function JaffnaGuide() {

  const fortImages = [
    "/Jaffna-fort.jpg",
    "/placeholder.jpg",
  ]

  const templeImages = [
    "/Nallur-Kovil.jpg",
    "/placeholder.jpg",
  ]

  const jaffnaLibraryImages = [
    "/Jaffna-library.jpg",
    "/placeholder.jpg",
  ]

  const delftIslandImages = [
    "/Delft-Island.jpg",
    "/placeholder.jpg",
  ]

  const casuarinaBeachImages = [
    "/Casuarina-Beach.jpg",
    "/placeholder.jpg",
  ]

  const nilavaraiWellImages = [
    "/Nilavarai-Bottomless-Well.jpeg",
    "/placeholder.jpg",
  ]

  const pointPedroImages = [
    "/Point-Pedro.jpg",
    "/Point-Pedro2.jpg",
    "/Point-Pedro1.jpg",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Nallur-Kovil.jpg"
          alt="Beautiful view of Jaffna with Dutch Fort, Nallur Temple and northern peninsula landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Jaffna</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Cultural Capital of Northern Sri Lanka</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Northern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Heart className="w-4 h-4 mr-1" />
              Tamil Cultural Heritage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Building className="w-4 h-4 mr-1" />
              Historic Dutch Fort
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Jaffna: The Heart of Tamil Sri Lanka</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Located at the northern tip of Sri Lanka, Jaffna is a fascinating city that offers visitors a completely
              different cultural experience from the rest of the island. This ancient city has been the center of Tamil
              civilization for over 2,000 years, preserving unique traditions, language, and customs that make it feel
              like stepping into a different country altogether.
            </p>
            <p className="text-lg mb-4">
              Jaffna was once the capital of an independent Tamil kingdom that ruled northern Sri Lanka for over 400 years.
              Despite centuries of colonization by Portuguese, Dutch, and British forces, the city has managed to maintain
              its distinct identity. Today, you&apos;ll find magnificent Hindu temples alongside colonial forts, traditional
              palmyra palm cultivation next to modern developments, and warm Tamil hospitality everywhere you go.
            </p>
            <p className="text-lg mb-4">
              What makes Jaffna truly special is its authentic atmosphere. Unlike tourist-heavy southern beaches or hill
              country towns, Jaffna offers genuine cultural immersion. Here, you&apos;ll hear Tamil spoken on every street
              corner, see women in colorful saris buying fresh palmyra products at markets, and witness ancient religious
              festivals that have been celebrated the same way for generations.
            </p>
            <p className="text-lg">
              The city is surrounded by beautiful lagoons, pristine beaches, and unique coral islands that can only be
              reached by boat. Whether you&apos;re interested in history, spirituality, culture, or nature, Jaffna provides
              an authentic Sri Lankan experience that few visitors get to enjoy.
            </p>
          </div>
        </section>

        {/* How to Reach Jaffna */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">How to Reach Jaffna</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* By Car */}
            <Card className="p-4 bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600">
              <div className="flex items-center space-x-3 mb-3">
                <Car className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">By Car</h3>
              </div>
              <div className="space-y-2 text-sm text-blue-700 dark:text-slate-300">
                <p><strong>Duration:</strong> 6-7 hours from Colombo</p>
                <p><strong>Route:</strong> A1 → A3 → A9 Highway</p>
                <p><strong>Cost:</strong> ~LKR 8,000-12,000 (fuel + tolls)</p>
                <p className="text-xs"><strong>Tip:</strong> Start early morning to avoid traffic</p>
              </div>
            </Card>

            {/* By Bus */}
            <Card className="p-4 bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600">
              <div className="flex items-center space-x-3 mb-3">
                <Bus className="h-6 w-6 text-green-600 dark:text-green-300" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">By Bus</h3>
              </div>
              <div className="space-y-2 text-sm text-green-700 dark:text-slate-300">
                <p><strong>Duration:</strong> 8-9 hours</p>
                <p><strong>From:</strong> Bastian Mawatha Bus Terminal</p>
                <p><strong>Cost:</strong> LKR 800-3,500 (Normal/A/C)</p>
                <p className="text-xs"><strong>Times:</strong> 5:30 AM, 7:00 AM, 9:00 AM, 2:00 PM, 6:00 PM</p>
              </div>
            </Card>

            {/* By Train */}
            <Card className="p-4 bg-purple-50 dark:bg-slate-800 border-purple-200 dark:border-slate-600">
              <div className="flex items-center space-x-3 mb-3">
                <Train className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">By Train</h3>
              </div>
              <div className="space-y-2 text-sm text-purple-700 dark:text-slate-300">
                <p><strong>Duration:</strong> 9-10 hours (scenic)</p>
                <p><strong>Train:</strong> Yal Devi Express (5:55 AM)</p>
                <p><strong>Cost:</strong> LKR 390-2,500 (class-based)</p>
                <p className="text-xs"><strong>Booking:</strong> eticket.railway.gov.lk</p>
              </div>
            </Card>

            {/* By Air */}
            <Card className="p-4 bg-orange-50 dark:bg-slate-800 border-orange-200 dark:border-slate-600">
              <div className="flex items-center space-x-3 mb-3">
                <Plane className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">By Air</h3>
              </div>
              <div className="space-y-2 text-sm text-orange-700 dark:text-slate-300">
                <p><strong>Duration:</strong> 1 hour 15 minutes</p>
                <p><strong>Airlines:</strong> SriLankan Airlines, FitsAir</p>
                <p><strong>Cost:</strong> LKR 15,000-25,000 (round trip)</p>
                <p className="text-xs"><strong>Transfer:</strong> Taxi to city ~LKR 2,000</p>
              </div>
            </Card>
          </div>

          {/* Quick Travel Tips */}
          <div className="mt-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <h4 className="font-semibold mb-2 text-foreground">Travel Essentials</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p><strong>Best Season:</strong> November to March</p>
                <p><strong>ID Required:</strong> Passport/NIC for checkpoints</p>
              </div>
              <div>
                <p><strong>Major Stops:</strong> Vavuniya, Kilinochchi, Elephant Pass</p>
                <p><strong>Currency:</strong> Carry Sri Lankan Rupees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Jaffna Facts - Everything You Need to Know
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Founded:</strong> 13th Century (Over 800 years old!)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~88,000 Tamil-speaking locals
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Local Name:</strong> &ldquo;Yaazhpanam&rdquo; (Land of the Lyre)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Historic Significance:</strong> Former Jaffna Kingdom capital
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 400km (6-7 hour drive)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 w-4 text-blue-500" />
                    <span>
                      <strong>Flight from Colombo:</strong> 1 hour to Jaffna Airport
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Visit Duration:</strong> 2-3 days minimum
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sunset className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Best Weather:</strong> November to March (dry season)
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Why Jaffna is Special:</h4>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Jaffna is the only place in Sri Lanka where you can experience authentic Tamil culture in its purest form.
                  The city maintained its independence for centuries and developed unique traditions, cuisine, and art forms
                  that you won&apos;t find anywhere else on the island. It&apos;s like visiting a different country without leaving Sri Lanka!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Historical Background</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Ancient Jaffna Kingdom</h3>
              <p className="text-muted-foreground mb-4">
                Jaffna&apos;s history stretches back over two millennia, with the region serving as the capital
                of the independent Jaffna Kingdom from the 13th to 17th centuries. The kingdom was established
                by Chandragupta, a prince from the Kalinga dynasty, and became a powerful Tamil state that
                controlled northern Sri Lanka and parts of southern India.
              </p>
              <p className="text-muted-foreground mb-4">
                The kingdom reached its zenith under rulers like Cankili I and Cankili II, who fiercely
                resisted Portuguese colonization. The strategic location of Jaffna, with its natural harbors
                and fertile lands, made it a crucial trading hub connecting South India with Southeast Asia.
              </p>

              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-slate-600 mb-4">
                <div className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Royal Legacy</h4>
                    <p className="text-sm text-blue-700 dark:text-slate-300">
                      The Jaffna Kingdom maintained its independence for over 400 years, developing a unique
                      Tamil culture that blended South Indian traditions with local customs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Colonial Era</h3>
              <p className="text-muted-foreground mb-4">
                The Portuguese conquered Jaffna in 1619, ending centuries of independence. They built the
                first European fort and introduced Christianity, though many Hindu traditions persisted.
                The Dutch later captured the city in 1658, significantly expanding the fortifications and
                establishing the impressive star-shaped fort that stands today.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Portuguese rule (1619-1658)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Dutch period (1658-1795)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">British colonial era (1795-1948)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Independence and modern era (1948-present)</span>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-slate-800 p-4 rounded-lg border border-yellow-200 dark:border-slate-600">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Cultural Resilience</h4>
                    <p className="text-sm text-yellow-700 dark:text-slate-300">
                      Despite centuries of foreign rule, Jaffna maintained its distinct Tamil identity,
                      language, and Hindu religious traditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Jaffna</h2>

          <div className="space-y-8">
            {/* Nallur Kandaswamy Temple */}
            <Card>
              <CardHeader>
                <CardTitle>1. Nallur Kandaswamy Temple - Sacred Heart of Tamil Hinduism</CardTitle>
                <CardDescription>The most important Hindu temple in Northern Sri Lanka with stunning Dravidian architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel
                      images={templeImages}
                      alt="Nallur Kandaswamy Temple showing colorful gopuram and Dravidian architecture"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Nallur Kandaswamy Temple - Northern Sri Lanka&apos;s most sacred Hindu site
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The magnificent Nallur Kandaswamy Temple stands as the most important Hindu temple
                      in Northern Sri Lanka, dedicated to Lord Murugan (Kandaswamy). Originally built
                      in 948 AD and reconstructed multiple times, the current structure showcases stunning
                      Dravidian architecture with intricate carvings and a towering gopuram that dominates
                      Jaffna&apos;s skyline.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The temple serves as the spiritual heart of Jaffna&apos;s Tamil community, hosting the
                      famous 25-day Nallur Festival annually. The complex includes multiple shrines,
                      a sacred tank, and beautiful pavilions where thousands gather for daily prayers
                      and special ceremonies. Even outside festival time, the daily pujas here are deeply
                      moving spiritual experiences that offer visitors insight into authentic Tamil Hindu traditions.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Daily Prayer Times:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Sunrise className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span><strong>Morning Prayers:</strong> 4:30 AM, 6:00 AM, 10:00 AM</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sunset className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span><strong>Evening Prayers:</strong> 6:00 PM, 7:30 PM, 8:30 PM</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Festival Season:</strong> July-August (25-day Nallur Festival)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span><strong>Special Days:</strong> Tuesdays and Fridays - Extra ceremonies</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Temple Etiquette & Guidelines:</h4>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                        <li>• <strong>Dress Code:</strong> Cover shoulders and knees - modest clothing essential</li>
                        <li>• <strong>Footwear:</strong> Remove shoes before entering temple premises</li>
                        <li>• <strong>Photography:</strong> No photos inside the main shrine area</li>
                        <li>• <strong>Behavior:</strong> Maintain silence during prayers and ceremonies</li>
                        <li>• <strong>Circumambulation:</strong> Follow clockwise direction around the shrine</li>
                        <li>• <strong>Offerings:</strong> Coconuts, flowers, and fruits can be purchased nearby</li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      🏛️ <strong>Historical Note:</strong> The temple was a royal temple of the Jaffna Kingdom
                      and has been the center of Tamil Hindu culture in Sri Lanka for over 1,000 years.
                      The annual festival attracts devotees from around the world.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jaffna Fort */}
            <Card>
              <CardHeader>
                <CardTitle>2. Jaffna Fort (Dutch Fort) - Fortress of the North</CardTitle>
                <CardDescription>One of Asia&apos;s largest Dutch fortifications covering 22 hectares on Jaffna Lagoon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel
                      images={fortImages}
                      alt="Jaffna Dutch Fort showing massive stone walls and historical architecture"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      The mighty Jaffna Fort - one of Asia&apos;s largest Dutch fortifications
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The imposing Jaffna Fort is one of the largest and best-preserved Dutch fortifications in Asia,
                      covering an incredible 22 hectares on the shores of Jaffna Lagoon. Originally built by the Portuguese
                      in 1618 and massively expanded by the Dutch, this star-shaped fortress tells the story of European
                      colonial ambitions in the Indian Ocean.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What makes this fort extraordinary is its sheer size and the quality of its construction. The massive
                      stone walls, built from coral and limestone, have survived centuries of monsoons, wars, and time itself.
                      Walking through the fort feels like traveling back in time - you can almost hear the footsteps of Dutch
                      soldiers and see the ships that once anchored in the protected harbor.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Must-See Inside the Fort:</h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-400 space-y-1">
                        <li>• <strong>Governor&apos;s Palace ruins</strong> with underground chambers</li>
                        <li>• <strong>Dutch Reformed Church</strong> (still standing)</li>
                        <li>• <strong>Old armory and soldiers&apos; barracks</strong></li>
                        <li>• <strong>Rampart walls</strong> with stunning ocean views</li>
                        <li>• <strong>Underground tunnels</strong> and secret passages</li>
                        <li>• <strong>Main gateway</strong> with Dutch coat of arms</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Visitor Information:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Opening Hours:</strong> 8:00 AM - 6:00 PM daily</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Entry Fee:</strong> LKR 50 locals, LKR 500 foreigners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Camera className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span><strong>Best Photo Spots:</strong> Ramparts at sunset, main gate</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      🏰 <strong>Archaeological Note:</strong> Currently under restoration by the Archaeological Department,
                      revealing fascinating insights into colonial military architecture and daily life of Dutch soldiers.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delft Island */}
            <Card>
              <CardHeader>
                <CardTitle>3. Delft Island (Neduntheevu) - Coral Island Adventure</CardTitle>
                <CardDescription>Unique coral island with wild horses, baobab trees, and Dutch colonial ruins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Delft Island is like nowhere else in Sri Lanka - a small coral island that feels almost mythical
                      with its wild horses roaming freely, ancient baobab trees, and ruins that tell stories of colonial
                      times. Getting here requires a 45-minute boat ride from Kurikadduwan jetty, but the journey itself
                      is part of the adventure as you cruise through beautiful lagoons.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The island gets its name from the Dutch word for Delft pottery, as the Dutch established a small
                      settlement here. Today, only about 5,000 people live on this 50-square-kilometer island, maintaining
                      a simple lifestyle that hasn&apos;t changed much over centuries. The wild horses are descendants of horses
                      brought by the Portuguese centuries ago.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Island Highlights:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Wild horses roaming freely across the island
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Ancient baobab trees (brought from Africa)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Dutch colonial ruins and old fort remains
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Unique coral stone houses and architecture
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Pristine beaches perfect for peaceful walks
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Growing ground (Vallipuram Alvar) temple ruins
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Practical Information:</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                        <li>• <strong>Boat Schedule:</strong> Multiple departures daily from Kurikadduwan jetty</li>
                        <li>• <strong>Journey Time:</strong> 45 minutes each way</li>
                        <li>• <strong>Best Time:</strong> Early morning departure for full day exploration</li>
                        <li>• <strong>What to Bring:</strong> Water, snacks, hat, sunscreen, camera</li>
                        <li>• <strong>Duration:</strong> Full day trip recommended</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <ImageCarousel
                      images={delftIslandImages}
                      alt="Delft Island showing wild horses, baobab trees, and coral landscape"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Delft Island - a unique coral island adventure with wild horses and ancient trees
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Casuarina Beach */}
            <Card>
              <CardHeader>
                <CardTitle>4. Casuarina Beach - Northern Paradise</CardTitle>
                <CardDescription>Pristine golden sand beach lined with casuarina trees, perfect for sunset viewing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 8 kilometers from Jaffna town, Casuarina Beach is a stunning stretch of golden sand that feels
                      like your own private paradise. Named after the casuarina trees that line the shore, this beach
                      offers some of the most spectacular sunsets in Sri Lanka. Unlike the crowded southern beaches,
                      Casuarina Beach maintains a peaceful, almost untouched atmosphere.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The beach faces west, making it absolutely perfect for sunset photography. The gentle waves and
                      shallow waters make it safe for swimming, while the soft sand is ideal for long walks. The casuarina
                      trees provide natural shade during the day, and you&apos;ll often see local families having picnics under
                      their branches, especially on weekends.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Perfect Beach Activities:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Sunset photography (best views 5:30-6:30 PM)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Swimming in calm, clear waters
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Beach walks and shell collecting
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Picnics under shady casuarina trees
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          Bird watching (many seabirds visit the area)
                        </li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      🏖️ <strong>Local Tip:</strong> Bring your own food and drinks as there are limited facilities.
                      The beach is most beautiful in the late afternoon when the light is perfect for photography.
                    </div>
                  </div>
                  <div>
                    <ImageCarousel
                      images={casuarinaBeachImages}
                      alt="Casuarina Beach showing golden sand, casuarina trees, and sunset views"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Casuarina Beach - pristine northern coastline perfect for peaceful relaxation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jaffna Public Library */}
            <Card>
              <CardHeader>
                <CardTitle>5. Jaffna Public Library - Symbol of Knowledge and Resilience</CardTitle>
                <CardDescription>One of South Asia&apos;s largest libraries, rebuilt as a symbol of Tamil literary heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Jaffna Public Library stands as more than just a repository of books - it&apos;s a powerful symbol
                      of knowledge, resilience, and Tamil cultural identity. Originally built in 1933, the library was
                      one of the largest in South Asia before its tragic destruction in 1981. The current magnificent
                      structure, rebuilt and reopened in 2003, represents the unbreakable spirit of Jaffna&apos;s people.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Today, the library houses over 97,000 volumes, including rare Tamil manuscripts, historical documents,
                      and one of the finest collections of Tamil literature in the world. The architecture combines
                      traditional Tamil design elements with modern functionality, featuring beautiful reading halls,
                      research sections, and digital facilities.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Library Highlights:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Book className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Tamil Collection:</strong> Extensive rare manuscripts and literature</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Reading Halls:</strong> Peaceful spaces for study and research</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span><strong>Architecture:</strong> Modern design with Tamil cultural elements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span><strong>Open Hours:</strong> 8:00 AM - 8:00 PM (Mon-Sat)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      📚 <strong>Cultural Note:</strong> The library serves as a center for Tamil cultural activities,
                      hosting literary events, exhibitions, and educational programs throughout the year.
                    </div>
                  </div>
                  <div>
                    <ImageCarousel
                      images={jaffnaLibraryImages}
                      alt="Jaffna Public Library showing modern architecture and Tamil cultural design elements"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Jaffna Public Library - a beacon of knowledge and Tamil literary heritage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Point Pedro */}
            <Card>
              <CardHeader>
                <CardTitle>6. Point Pedro ( Sakkotai Cape) - Northernmost Tip of Sri Lanka</CardTitle>
                <CardDescription>The geographical extremity of the island with lighthouse, beaches, and coastal views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel
                      images={pointPedroImages}
                      alt="Point Pedro lighthouse and coastal landscape at Sri Lanka's northernmost point"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Point Pedro - where Sri Lanka meets the northern horizon
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Point Pedro town holds the distinction of being the northernmost point of Sri Lanka, offering visitors
                      a unique geographical experience and stunning coastal scenery. This small fishing town, about
                      38 kilometers from Jaffna, provides panoramic views of the Indian Ocean and, on clear days,
                      you might even catch glimpses of the Indian coastline in the distance.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The area is dominated by the historic Point Pedro Lighthouse, built during the British colonial
                      period, which has guided ships safely through these waters for over a century. The surrounding
                      coastline, including the beautiful Sakkotai Cape area, features pristine beaches, rocky outcrops,
                      and vibrant coral reefs. The traditional fishing villages maintain their authentic character, with
                      outrigger boats (catamarans) dotting the shoreline, creating picture perfect scenes especially
                      during sunrise and sunset.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The shallow lagoons around Sakkotai Cape are perfect for spotting marine life and snorkeling,
                      while the untouched beaches offer a peaceful escape from the more touristy destinations. The
                      local fishing communities welcome visitors, providing a genuine glimpse into traditional northern
                      Sri Lankan coastal life.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Point Pedro Attractions:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span><strong>Geographic Significance:</strong> Northernmost point of Sri Lanka</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span><strong>Historic Lighthouse:</strong> British-era navigation landmark</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Waves className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Coastal Views:</strong> Panoramic ocean and fishing village scenes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Camera className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span><strong>Photography:</strong> Dramatic sunrise and sunset opportunities</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Practical Information:</h4>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                        <li>• <strong>Distance:</strong> 38 km from Jaffna city (1-hour drive)</li>
                        <li>• <strong>Best Time:</strong> Early morning or late afternoon for best light</li>
                        <li>• <strong>Activities:</strong> Lighthouse visit, beach walks, fishing village tours</li>
                        <li>• <strong>What to Bring:</strong> Camera, sunscreen, water, comfortable walking shoes</li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      🧭 <strong>Geographic Fact:</strong> Point Pedro is approximately 9°50&apos;N latitude,
                      making it the true northernmost inhabited point of Sri Lanka.
                    </div>
                    <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-sm text-muted-foreground">
                      💡 <strong>Quick Tip:</strong> If you enjoy geographic extremes, note that Sri Lanka&apos;s
                      southernmost point is Deundara Thuduwa (Dondra Head, near Dondra/Matara) — a dramatic contrast to Point Pedro and
                      a great pairing for travelers planning a north-to-south island itinerary.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Keerimalai Sacred Springs */}
            <Card>
              <CardHeader>
                <CardTitle>7. Keerimalai Sacred Springs - Ancient Healing Waters</CardTitle>
                <CardDescription>Sacred freshwater springs with legendary healing properties and natural pools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Keerimalai Sacred Springs is one of Jaffna&apos;s most mystical and spiritually significant sites,
                      featuring natural freshwater springs that emerge from deep underground wells near the coast.
                      According to ancient legends, these springs possess healing properties and have been considered
                      sacred for over 2,000 years. The name &ldquo;Keerimalai&rdquo; means &ldquo;mongoose hill&rdquo; in Tamil, referring
                      to local folklore about the area.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What makes Keerimalai truly remarkable is the phenomenon of fresh water springs emerging so close
                      to the sea. The natural pools formed by these springs maintain a constant temperature and are
                      believed to have therapeutic qualities. Hindu devotees from across Sri Lanka visit these springs,
                      especially during religious festivals, to bathe in the sacred waters.
                    </p>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">Sacred Springs Features:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Droplets className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                          <span><strong>Natural Wells:</strong> Deep freshwater springs emerging from underground</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span><strong>Healing Legend:</strong> Believed to cure skin ailments and illnesses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Waves className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Natural Pools:</strong> Clear water pools perfect for ritual bathing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span><strong>Naguleswaram Temple:</strong> Ancient temple dedicated to Lord Shiva nearby</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span><strong>Festival Time:</strong> Thousands visit during Mahashivaratri</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Visitor Guidelines:</h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-400 space-y-1">
                        <li>• <strong>Dress Modestly:</strong> Respectful clothing required at this sacred site</li>
                        <li>• <strong>Best Time:</strong> Early morning (6-8 AM) for peaceful experience</li>
                        <li>• <strong>Bathing Etiquette:</strong> Maintain silence and respect during ritual bathing</li>
                        <li>• <strong>Photography:</strong> Be mindful of devotees and ask permission</li>
                        <li>• <strong>Location:</strong> About 2 km from Keerimalai town, near Naguleswaram Temple</li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      🙏 <strong>Spiritual Note:</strong> The springs are mentioned in ancient Tamil literature and are
                      considered one of the five sacred bathing sites (Panchai Theertham) in Tamil tradition.
                    </div>
                  </div>
                  <div>
                    <ImageCarousel
                      images={casuarinaBeachImages}
                      alt="Keerimalai Sacred Springs showing natural freshwater pools and sacred bathing areas"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Keerimalai Sacred Springs - where legend, spirituality, and natural wonder converge
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nilavarai Bottomless Well */}
            <Card>
              <CardHeader>
                <CardTitle>8. Nilavarai Bottomless Well - Mystery of the Depths</CardTitle>
                <CardDescription>Mysterious freshwater well with unknown depth and legendary significance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Nilavarai Bottomless Well is one of Jaffna&apos;s most intriguing natural mysteries, a circular
                      freshwater well whose depth has never been accurately measured despite numerous attempts.
                      Located near the village of Puttur, about 6 kilometers from Jaffna town, this well has captured
                      the imagination of locals and visitors for centuries with its crystal-clear water and seemingly
                      infinite depth.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What makes this well extraordinary is not just its mysterious depth, but also the legend
                      surrounding it. According to local folklore, the well was created by a meteor impact in ancient
                      times, while others believe it connects to underground river systems. The water remains
                      consistently fresh and clear throughout the year, never running dry even during severe droughts
                      that affect other wells in the region.
                    </p>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Well Mysteries:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Droplets className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                          <span><strong>Unknown Depth:</strong> Multiple measurement attempts have failed to find bottom</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Crystal Clear Water:</strong> Exceptional water quality and clarity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span><strong>Never Dry:</strong> Consistent water level throughout all seasons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Book className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span><strong>Ancient Legend:</strong> Mentioned in old Tamil literature and folklore</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Mountain className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                          <span><strong>Geological Wonder:</strong> Possible connection to underground aquifers</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Visitor Experience:</h4>
                      <ul className="text-sm text-emerald-700 dark:text-emerald-400 space-y-1">
                        <li>• <strong>Location:</strong> Puttur village, 6 km from Jaffna town</li>
                        <li>• <strong>Best Time:</strong> Early morning or late afternoon for peaceful visit</li>
                        <li>• <strong>Duration:</strong> 30-45 minutes including travel time</li>
                        <li>• <strong>Activities:</strong> Photography, meditation, local folklore stories</li>
                        <li>• <strong>Combine With:</strong> Visit nearby villages and rural Jaffna experience</li>
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground italic">
                      🔬 <strong>Scientific Interest:</strong> Geologists and hydrologists continue to study this natural
                      phenomenon, making it both a tourist attraction and a subject of ongoing research.
                    </div>
                  </div>
                  <div>
                    <ImageCarousel
                      images={nilavaraiWellImages}
                      alt="Nilavarai Bottomless Well showing the mysterious circular freshwater well"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Nilavarai Bottomless Well - a geological mystery with crystal-clear depths
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>



          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600 p-6">
              <div className="flex items-center space-x-4">
                <Calendar className="h-10 w-10 text-blue-600 dark:text-blue-300" />
                <div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">Ancient Heritage</h3>
                  <p className="text-blue-700 dark:text-slate-300">Over 2,000 years of Tamil civilization</p>
                </div>
              </div>
            </Card>

            <Card className="bg-orange-50 dark:bg-slate-800 border-orange-200 dark:border-slate-600 p-6">
              <div className="flex items-center space-x-4">
                <Building className="h-10 w-10 text-orange-600 dark:text-orange-300" />
                <div>
                  <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200">Colonial Legacy</h3>
                  <p className="text-orange-700 dark:text-slate-300">Portuguese, Dutch, and British influences</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Cultural Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Rich Cultural Heritage</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Tamil Traditions and Arts</h3>
              <p className="text-muted-foreground mb-4">
                Jaffna is the beating heart of Tamil culture in Sri Lanka, preserving ancient traditions
                that have been passed down through generations. The city is renowned for its classical
                music, traditional dance, and literary contributions that have enriched Tamil culture
                across the world.
              </p>
              <p className="text-muted-foreground mb-4">
                The traditional arts flourish here, from Bharatanatyam dance performances to Carnatic
                music concerts. The Tamil language spoken in Jaffna has unique dialectical features
                that distinguish it from other Tamil-speaking regions, reflecting centuries of
                independent cultural development.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Classical Bharatanatyam dance tradition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Carnatic music heritage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Traditional Tamil literature</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Unique architectural styles</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Festivals and Celebrations</h3>
              <p className="text-muted-foreground mb-4">
                Jaffna&apos;s calendar is filled with vibrant festivals that showcase the deep religious
                and cultural traditions of the Tamil community. The most spectacular is the Nallur
                Festival, a 25-day celebration that transforms the entire city into a stage of
                devotion, music, and cultural performances.
              </p>

              <div className="bg-red-50 dark:bg-slate-800 p-4 rounded-lg border border-red-200 dark:border-slate-600">
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Major Festivals</h4>
                    <ul className="text-sm text-red-700 dark:text-slate-300 space-y-1">
                      <li>• <strong>Nallur Festival</strong> - July/August (25 days)</li>
                      <li>• <strong>Thai Pusam</strong> - January/February</li>
                      <li>• <strong>Deepavali</strong> - October/November</li>
                      <li>• <strong>Vel Festival</strong> - Various temples throughout the year</li>
                      <li>• <strong>Tamil New Year</strong> - April</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-orange-50 dark:bg-slate-800 p-4 rounded-lg border border-orange-200 dark:border-slate-600">
                <div className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Cultural Experiences</h4>
                    <p className="text-sm text-orange-700 dark:text-slate-300">
                      Visitors can witness traditional palmyra crafts, taste authentic Jaffna cuisine
                      including crab curry and palmyra-based sweets, and experience the unique
                      hospitality of Tamil families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Cuisine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Authentic Jaffna Cuisine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-red-50 dark:bg-slate-800 border-red-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-3">Jaffna Crab Curry</h3>
              <p className="text-red-700 dark:text-slate-300 mb-3">
                The signature dish of Jaffna, featuring fresh lagoon crabs cooked in a rich,
                spicy coconut curry with unique Tamil spice blends.
              </p>
              <div className="text-sm text-red-600 dark:text-red-400">
                <strong>Best Places:</strong> Green Grass Hotel, Malayan Cafe
              </div>
            </Card>

            <Card className="p-6 bg-yellow-50 dark:bg-slate-800 border-yellow-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3">Palmyra Products</h3>
              <p className="text-yellow-700 dark:text-slate-300 mb-3">
                Traditional sweets and dishes made from palmyra palm including odiyal, panankarkandu,
                and refreshing palmyra toddy.
              </p>
              <div className="text-sm text-yellow-600 dark:text-yellow-400">
                <strong>Specialty:</strong> Naturally sweetened, unique to Jaffna region
              </div>
            </Card>

            <Card className="p-6 bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-3">Mutton Rolls</h3>
              <p className="text-green-700 dark:text-slate-300 mb-3">
                Crispy pastry rolls filled with spiced mutton, a beloved snack that originated
                in Jaffna&apos;s bakeries and spread across Sri Lanka.
              </p>
              <div className="text-sm text-green-600 dark:text-green-400">
                <strong>Must Try:</strong> Rio Ice Cream parlor, local bakeries
              </div>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Practical Travel Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Where to Stay</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Luxury Options</h4>
                  <p className="text-sm text-blue-600 dark:text-slate-300">
                    Jetwing Jaffna, Fox Jaffna, Thinnai Resort
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Mid-Range Hotels</h4>
                  <p className="text-sm text-blue-600 dark:text-slate-300">
                    Green Grass Hotel, Hotel Rolex, Subhas Hotel
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">Budget Accommodation</h4>
                  <p className="text-sm text-blue-600 dark:text-slate-300">
                    Morgan&apos;s Guest House, YWCA, various guesthouses
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Transportation Tips</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Getting Around</h4>
                  <p className="text-sm text-green-600 dark:text-slate-300">
                    Three-wheelers, buses, rental bicycles, and taxis
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Day Trip Options</h4>
                  <p className="text-sm text-green-600 dark:text-slate-300">
                    Delft Island boat tours, Point Pedro excursions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Local Transport</h4>
                  <p className="text-sm text-green-600 dark:text-slate-300">
                    CTB buses connect major attractions within the city
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 p-6 rounded-lg border border-yellow-200 dark:border-slate-600">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Important Travel Tips</h3>
                <ul className="text-sm text-yellow-700 dark:text-slate-300 space-y-1">
                  <li>• Respect local customs and religious practices</li>
                  <li>• Tamil is the primary language; basic phrases are appreciated</li>
                  <li>• Dress modestly when visiting temples and religious sites</li>
                  <li>• Carry sunscreen and water; the northern climate can be hot</li>
                  <li>• Try to visit during festival seasons for authentic cultural experiences</li>
                  <li>• Book accommodation in advance during peak tourist season</li>
                  <li>• Respect photography restrictions at certain sites</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-lg border border-blue-200 dark:border-slate-600">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Experience the Soul of Tamil Sri Lanka</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Jaffna offers visitors a unique journey through time, culture, and tradition. From the ancient
              stones of Dutch Fort to the sacred halls of Nallur Temple, from the pristine beaches of
              Casuarina to the mystical landscapes of Delft Island, every corner of this remarkable
              peninsula tells a story of resilience, faith, and cultural richness.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you&apos;re drawn by the historical significance, the spiritual atmosphere, the delicious
              cuisine, or the warm hospitality of the Tamil people, Jaffna promises an authentic and
              unforgettable Sri Lankan experience that will leave you with a deeper appreciation for
              the island&apos;s diverse cultural heritage.
            </p>
          </div>
        </section>

        {/* Related Destinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Explore More Northern Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trincomalee Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Trincomalee</CardTitle>
                <CardDescription>Historic port city & beautiful beaches</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Trinco.jpeg"
                  alt="Trincomalee harbor and Koneswaram Temple"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Trincomalee is famed for its deep-water natural harbor, pristine beaches, and the revered Koneswaram Temple perched on Swami Rock.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/trincomalee" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Nainativu Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Nainativu</CardTitle>
                <CardDescription>Ancient capital & Buddhist monuments</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Nagadeepaya.jpg"
                  alt="Nainativu"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Nainativu is a sacred island known for its ancient temples, including the Naguleswaram Hindu Temple and the Buddhist Nagadeepa Vihara.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/nainativu" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Wilpattu National Park Card */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 min-h-[430px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Wilpattu National Park</CardTitle>
                <CardDescription>Sri Lanka&apos;s largest national park</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Wilpattu.jpeg"
                  alt="Wilpattu National Park wildlife and lakes"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Wilpattu is renowned for its leopard population, natural lakes (villus), and untamed wilderness perfect for wildlife enthusiasts.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/wilpattu-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
