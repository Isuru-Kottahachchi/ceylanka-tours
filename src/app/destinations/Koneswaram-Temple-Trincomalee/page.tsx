"use client"

import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Camera, Heart, ChevronLeft, ChevronRight, Sunrise, Car, Bus, Train, Anchor } from "lucide-react"
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

export default function KoneswaramTempleGuide() {
  const koneswaramImages = [
    "/Koneshwaram.jpeg",
    "/Trinco.jpeg",
    "/placeholder.jpg",
  ]

  const swamirockImages = [
    "/placeholder.jpg",
    "/Koneshwaram.jpeg",
  ]

  const loversLeapImages = [
    "/placeholder.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/Koneshwaram.jpeg"
            alt="Koneswaram Temple on Swami Rock overlooking the Indian Ocean at sunrise"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Koneswaram Temple: Sri Lanka&apos;s Sacred Cliff Temple
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover the ancient Hindu temple perched dramatically on Swami Rock, 
            offering breathtaking ocean views and 2000 years of sacred history
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Trincomalee, Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Clock className="w-4 h-4 mr-1" />
              4-6 Hours Visit
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-1" />
              UNESCO Heritage Site
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Koneswaram Temple: Where Heaven Meets Earth</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Standing majestically 130 feet above the crashing waves of the Indian Ocean, Koneswaram Temple 
              is one of Sri Lanka&apos;s most sacred and dramatically positioned religious sites. This ancient Hindu 
              temple, dedicated to Lord Shiva as Koneshwara (Lord of the East), sits on the legendary Swami Rock 
              in Trincomalee and has been a place of worship for over 2,000 years.
            </p>
            <p className="text-lg">
              Known as one of the five Pancha Ishwarams (five abodes of Shiva in Sri Lanka), Koneswaram Temple 
              combines breathtaking natural beauty with deep spiritual significance. The temple offers visitors 
              stunning panoramic views of the eastern coastline, rich Tamil cultural heritage, and a peaceful 
              atmosphere perfect for meditation and reflection.
            </p>
          </div>
        </section>

        {/* How to Get There - Quick Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">How to Get There</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <Card className="p-4 bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600">
              <div className="flex items-center space-x-3">
                <Car className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                <div>
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">By Car</h3>
                  <p className="text-sm text-blue-700 dark:text-slate-300">4 hrs from Colombo</p>
                  <p className="text-sm text-blue-700 dark:text-slate-300">2.5 hrs from Kandy</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600">
              <div className="flex items-center space-x-3">
                <Bus className="h-6 w-6 text-green-600 dark:text-green-200" />
                <div>
                  <h3 className="font-semibold text-green-800 dark:text-green-200">By Bus</h3>
                  <p className="text-sm text-green-700 dark:text-slate-300">Direct from Colombo</p>
                  <p className="text-sm text-green-700 dark:text-slate-300">6-7 hours journey</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-purple-50 dark:bg-slate-800 border-purple-200 dark:border-slate-600">
              <div className="flex items-center space-x-3">
                <Train className="h-6 w-6 text-purple-600 dark:text-purple-200" />
                <div>
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200">By Train</h3>
                  <p className="text-sm text-purple-700 dark:text-slate-300">Scenic route</p>
                  <p className="text-sm text-purple-700 dark:text-slate-300">8-9 hours from Colombo</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-orange-50 dark:bg-slate-800 border-orange-200 dark:border-slate-600">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                <div>
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200">Location</h3>
                  <p className="text-sm text-orange-700 dark:text-slate-300">Swami Rock</p>
                  <p className="text-sm text-orange-700 dark:text-slate-300">Trincomalee</p>
                  <a 
                    href="https://www.google.com/maps/dir//H6JW%2BX4H,+Trincomalee/@8.5824349,81.1629537,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3afbbca209ddef57:0x2e9e4b68861922df!2m2!1d81.2453556!2d8.5824436?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-orange-600 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Temple Hours:</strong> 5:00 AM - 9:00 PM daily • 
              <strong>Entry:</strong> Free • 
              <strong>Best Time:</strong> Early morning or evening
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600 p-6">
              <div className="flex items-center space-x-4">
                <Calendar className="h-10 w-10 text-blue-600 dark:text-blue-200" />
                <div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">Ancient Heritage</h3>
                  <p className="text-blue-700 dark:text-slate-300">Over 2,000 years of continuous worship</p>
                </div>
              </div>
            </Card>

            <Card className="bg-orange-50 dark:bg-slate-800 border-orange-200 dark:border-slate-600 p-6">
              <div className="flex items-center space-x-4">
                <Star className="h-10 w-10 text-orange-600 dark:text-orange-300" />
                <div>
                  <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200">Sacred Significance</h3>
                  <p className="text-orange-700 dark:text-slate-300">One of five Pancha Ishwarams in Sri Lanka</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Main Temple Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Sacred Koneswaram Temple</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <ImageCarousel 
                images={koneswaramImages} 
                alt="Koneswaram Temple with its colorful gopuram and ocean views" 
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Temple of the Thousand Pillars</h3>
              <p className="text-muted-foreground mb-4">
                Koneswaram Temple was once known as the &quot;Temple of the Thousand Pillars&quot; due to its magnificent 
                architecture. The current temple, rebuilt in the 1960s, features beautiful Dravidian-style 
                architecture with a colorful gopuram (tower) that serves as a beacon visible from far out at sea.
              </p>
              <p className="text-muted-foreground mb-4">
                The temple houses the sacred Shiva Lingam and several other deities including Ganesha, Murugan, 
                and Goddess Mathumai Amman. Daily pujas (prayer ceremonies) are conducted at dawn and dusk, 
                creating a deeply spiritual atmosphere enhanced by the sound of crashing waves below.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Active Hindu temple with daily worship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Beautiful Dravidian architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Panoramic ocean views from clifftop location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Sacred Shiva Lingam and multiple shrines</span>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-slate-800 p-4 rounded-lg border border-yellow-200 dark:border-slate-600">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Temple Etiquette</h4>
                    <p className="text-sm text-yellow-700 dark:text-slate-300">
                      Remove shoes before entering, dress modestly covering shoulders and knees, 
                      maintain silence during prayers, and photography may be restricted in certain areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ramayana Connection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Koneswaram Temple in the Ramayana Epic</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">King Ravana's Sacred Site</h3>
              <p className="text-muted-foreground mb-4">
                According to ancient Hindu texts and the Ramayana epic, Koneswaram Temple holds immense 
                significance as the place where the mighty King Ravana of Lanka performed intense penance 
                and worship to Lord Shiva. The ten-headed demon king, despite his eventual downfall, was 
                known as a great devotee of Shiva and a learned scholar of the Vedas.
              </p>
              <p className="text-muted-foreground mb-4">
                Legend states that Ravana's devotion at this very cliff was so powerful that it pleased 
                Lord Shiva, who granted him immense strength and knowledge. It is said that Ravana 
                offered his own heads as sacrifice to Shiva here, only to have them restored by the 
                compassionate deity, earning him the name "Dashagriva" (ten-necked one).
              </p>
              
              <div className="bg-purple-50 dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-slate-600 mb-4">
                <div className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-purple-600 dark:text-purple-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">The Shiva Lingam Legend</h4>
                    <p className="text-sm text-purple-700 dark:text-slate-300">
                      According to tradition, the original Shiva Lingam at Koneswaram was one of the 
                      naturally formed lingams that Ravana discovered and consecrated. This made the 
                      temple one of the most powerful Shiva shrines in ancient Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Mount Kailash Connection</h3>
              <p className="text-muted-foreground mb-4">
                Hindu mythology describes how Ravana once attempted to lift Mount Kailash (Shiva's abode) 
                to Lanka. When Shiva pressed down the mountain with his toe, a piece broke off and fell 
                to earth at Trincomalee, forming Swami Rock. This is why the site is considered as 
                sacred as Mount Kailash itself.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Ravana's place of penance and worship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Fragment of Mount Kailash legend</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">One of five Pancha Ishwarams in Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Mentioned in ancient Tamil literature</span>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-lg border border-orange-200 dark:border-slate-600">
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-1">Epic Timeline</h4>
                    <p className="text-sm text-orange-700 dark:text-slate-300 mb-2">
                      The Ramayana events are believed to have occurred in the Treta Yuga, making 
                      this temple's mythological history span thousands of years.
                    </p>
                    <ul className="text-sm text-orange-700 dark:text-slate-300 space-y-1">
                      <li>• Ravana's reign and devotion to Shiva</li>
                      <li>• Abduction of Sita and war with Rama</li>
                      <li>• Temple's continued significance post-Ramayana</li>
                      <li>• Connection to other Pancha Ishwarams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Ramayana Details */}
          <div className="mt-8">
            <Card className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border border-amber-200 dark:border-amber-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-amber-800 dark:text-amber-300">The Scholarly King's Devotion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-300">Ravana's Achievements at Koneswaram:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Composed the powerful "Shiva Tandava Stotram" hymn</li>
                      <li>• Performed severe penances for thousands of years</li>
                      <li>• Received boons of invincibility and knowledge</li>
                      <li>• Established the temple as a major pilgrimage site</li>
                      <li>• Created sacred traditions still followed today</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-300">Cultural Legacy:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Temple festivals honor this ancient connection</li>
                      <li>• Local folklore preserves Ramayana stories</li>
                      <li>• Pilgrims seek blessings at Ravana's worship site</li>
                      <li>• Sanskrit inscriptions reference epic events</li>
                      <li>• Archaeological evidence supports ancient origins</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
                  <p className="text-sm text-amber-800 dark:text-amber-300 italic">
                    "Even today, devotees believe that worshipping at Koneswaram with the same devotion 
                    as Ravana can bring divine blessings and spiritual enlightenment, making this temple 
                    a powerful connection to the epic Ramayana tradition."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ravana's Sword Legend */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Legend of Ravana's Sword at Koneswaram</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Divine Weapon's Origin</h3>
              <p className="text-muted-foreground mb-4">
                According to ancient legends, King Ravana's most powerful weapon was not just any ordinary sword, 
                but a divine blade blessed by Lord Shiva himself at Koneswaram Temple. This celestial weapon, 
                known as "Chandrahasa" (Moon-blade), was granted to Ravana as a reward for his intense devotion 
                and penance performed at this very sacred site.
              </p>
              <p className="text-muted-foreground mb-4">
                The legend states that after Ravana completed years of rigorous worship at Swami Rock, 
                Lord Shiva was so pleased that he not only restored Ravana's sacrificed heads but also 
                gifted him this supernatural sword. The weapon was said to shine like the crescent moon 
                and could cut through any material in creation.
              </p>
              
              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-slate-600 mb-4">
                <div className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-600 dark:text-blue-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Chandrahasa - The Moon Blade</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">
                      The name "Chandrahasa" means "laughter of the moon" in Sanskrit, reflecting both 
                      its curved, crescent-like shape and its divine radiance that could illuminate 
                      the darkest nights during battle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Sacred Cut in the Rock</h3>
              <p className="text-muted-foreground mb-4">
                Local tradition tells of a dramatic moment when Ravana, in a display of the sword's 
                divine power, struck Swami Rock with Chandrahasa. The blade cut so deeply into the 
                sacred stone that it created a permanent fissure that can still be seen today. This 
                cut is believed to mark the exact spot where Ravana received his divine blessings.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Visible rock fissure attributed to the sword strike</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Divine weapon blessed by Lord Shiva</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Symbol of Ravana's supernatural powers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Connected to temple's sacred geography</span>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">The Sword's Fate</h4>
                    <p className="text-sm text-red-700 dark:text-red-400 mb-2">
                      According to Ramayana tradition, the Chandrahasa sword was eventually lost 
                      during Ravana's final battle with Lord Rama, marking the end of his reign.
                    </p>
                    <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                      <li>• Granted by Shiva at Koneswaram Temple</li>
                      <li>• Used throughout Ravana's conquests</li>
                      <li>• Left its mark on the sacred rock</li>
                      <li>• Lost in the battle of Lanka</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Connection */}
          <div className="mt-8">
            <Card className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 border border-slate-200 dark:border-slate-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-300">The Living Legend Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-slate-800 dark:text-slate-300">Pilgrims and the Rock Cut:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Visitors seek out the legendary fissure in the rock</li>
                      <li>• Local guides point out the "sword cut" to tourists</li>
                      <li>• Devotees touch the marked stone for blessings</li>
                      <li>• Photography spot for mythology enthusiasts</li>
                      <li>• Archaeological interest in rock formations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-slate-800 dark:text-slate-300">Cultural Significance:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Represents the power of divine blessings</li>
                      <li>• Symbol of Ravana's devotion to Lord Shiva</li>
                      <li>• Connection between mythology and physical reality</li>
                      <li>• Inspiration for local art and literature</li>
                      <li>• Part of temple's oral tradition</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                  <p className="text-sm text-slate-800 dark:text-slate-300 italic">
                    "The mark of Ravana's sword in the sacred rock serves as a tangible reminder that 
                    the divine and earthly realms once intersected at this holy site, making Koneswaram 
                    Temple not just a place of worship, but a witness to epic history."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Swami Rock Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Swami Rock: The Sacred Cliff</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Legend of Swami Rock</h3>
              <p className="text-muted-foreground mb-4">
                Swami Rock, the dramatic clifftop on which Koneswaram Temple stands, is steeped in both 
                mythology and history. According to Hindu legend, this is where King Ravana of Lanka 
                worshipped Lord Shiva. The rock formation itself is considered sacred, believed to be 
                a piece of Mount Kailash that fell to earth.
              </p>
              <p className="text-muted-foreground mb-4">
                The 130-foot high cliff offers breathtaking views of the Indian Ocean and Trincomalee's 
                natural harbor. Early morning and late evening visits provide the most spectacular lighting, 
                with the temple's golden spire gleaming against the blue ocean backdrop.
              </p>
              
              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-slate-600">
                <div className="flex items-start space-x-2">
                  <Sunrise className="h-5 w-5 text-blue-600 dark:text-blue-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Best Photography Times</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">
                      Golden hour (6:30-7:30 AM and 5:30-6:30 PM) offers the most stunning lighting for photography. 
                      The temple gopuram is beautifully illuminated against the ocean backdrop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageCarousel 
                images={swamirockImages} 
                alt="Dramatic cliffs of Swami Rock with temple and ocean views" 
              />
            </div>
          </div>
        </section>

        {/* Lover's Leap Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Lover's Leap: A Tale of Tragic Romance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <ImageCarousel 
                images={loversLeapImages} 
                alt="Lover's Leap cliff overlooking the ocean with dramatic views" 
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Dutch Colonial Story</h3>
              <p className="text-muted-foreground mb-4">
                Adjacent to Koneswaram Temple lies Lover's Leap, a cliff with a haunting colonial-era story. 
                During Dutch rule in the 17th century, a Dutch officer's daughter and her local lover, 
                unable to be together due to colonial restrictions, are said to have jumped from this cliff 
                in a tragic act of eternal love.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, Lover's Leap offers some of the most dramatic coastal views in Sri Lanka. The cliff 
                provides a different perspective of Trincomalee's coastline and is a popular spot for 
                photography and quiet contemplation.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Romantic legend from Dutch colonial period</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Spectacular photography opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">5-minute walk from main temple</span>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Safety Warning</h4>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      Stay well back from cliff edges. Strong ocean winds and loose rocks can be dangerous. 
                      Always supervise children and avoid visiting during heavy rain or storms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Rich Historical Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-orange-600" />
                  Ancient Origins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Historical records suggest that Koneswaram Temple existed as early as the 3rd century BCE. 
                  Ancient Tamil literature mentions the temple as one of the most important Shiva temples in 
                  the region, attracting pilgrims from across South Asia.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mentioned in ancient Tamil texts and poetry</li>
                  <li>• Religious site for over 2,000 years</li>
                  <li>• Important pilgrimage destination for centuries</li>
                  <li>• Connected to Ramayana and other Hindu epics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                  Colonial Period
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  In 1624, Portuguese colonizers destroyed the original temple and used its stones to build 
                  Fort Frederick. The temple remained in ruins for over 300 years until reconstruction began 
                  in the 1950s, culminating in the current structure completed in 1963.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Destroyed by Portuguese in 1624</li>
                  <li>• Stones used to build Fort Frederick</li>
                  <li>• Rebuilt starting in 1950s</li>
                  <li>• Current temple completed in 1963</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Anchor className="w-6 h-6 mr-2 text-blue-600" />
                  World War II Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  During World War II, Trincomalee harbor became a crucial Allied naval base, and Swami Rock 
                  served as a strategic observation point. The temple area witnessed historic moments, including 
                  Japanese air raids in 1942 and the presence of British Eastern Fleet operations.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Strategic British naval base during WWII</li>
                  <li>• Japanese air raids on April 9, 1942</li>
                  <li>• Allied ships used the natural harbor</li>
                  <li>• Observation post on Swami Rock cliffs</li>
                  <li>• War memorials nearby commemorate events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Temple Festivals and Ceremonies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Sacred Festivals and Ceremonies</h2>
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border border-orange-200 dark:border-orange-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-orange-800 dark:text-orange-300">Maha Shivarathri Festival</CardTitle>
                <CardDescription className="text-orange-700 dark:text-orange-400">Usually in February/March</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The most important festival at Koneswaram Temple, Maha Shivarathri attracts thousands of devotees 
                  from across Sri Lanka and South India. The celebration includes special pujas, cultural performances, 
                  and a grand procession with the temple's sacred chariot.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-300">Festival Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All-night prayers and meditation</li>
                      <li>• Traditional music and dance performances</li>
                      <li>• Sacred chariot procession</li>
                      <li>• Special feast preparation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-300">Visitor Information:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Arrive early for parking and viewing spots</li>
                      <li>• Dress in traditional or conservative clothing</li>
                      <li>• Photography restrictions may apply</li>
                      <li>• Free community meals available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Daily Worship Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Morning Puja</span>
                      <Badge variant="outline">6:00 AM - 8:00 AM</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Afternoon Service</span>
                      <Badge variant="outline">12:00 PM - 1:00 PM</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Evening Puja</span>
                      <Badge variant="outline">6:00 PM - 8:00 PM</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Temple Open</span>
                      <Badge variant="outline">5:00 AM - 9:00 PM</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Other Important Festivals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Thai Pusam</h4>
                      <p className="text-sm text-muted-foreground">January/February - Devotees carry kavadi</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Navaratri</h4>
                      <p className="text-sm text-muted-foreground">September/October - Nine nights of goddess worship</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Deepavali</h4>
                      <p className="text-sm text-muted-foreground">October/November - Festival of lights</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Thai Amavasai</h4>
                      <p className="text-sm text-muted-foreground">January - New moon day prayers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* World War II Historical Connection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Koneswaram Temple During World War II</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Strategic Military Importance</h3>
              <p className="text-muted-foreground mb-4">
                During World War II, Trincomalee's natural harbor became one of the most important Allied naval 
                bases in the Indian Ocean. The temple area on Swami Rock served as a strategic observation point, 
                offering commanding views of the harbor approaches and the surrounding seas.
              </p>
              <p className="text-muted-foreground mb-4">
                The British Eastern Fleet, including aircraft carriers HMS Formidable and HMS Indomitable, 
                frequently used Trincomalee harbor as a base of operations. Local residents, including temple 
                priests, witnessed massive naval vessels anchored in the bay below the sacred cliff.
              </p>
              
              <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 mb-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">The Easter Raid - April 9, 1942</h4>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      Japanese aircraft launched a surprise attack on Trincomalee harbor. Bombs fell near 
                      the temple area, and locals took shelter in the ancient caves and bunkers around 
                      Swami Rock. The temple survived the raid intact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Local Stories and Memories</h3>
              <p className="text-muted-foreground mb-4">
                Elderly residents of Trincomalee still share stories passed down about the war years. 
                The temple served as a gathering place for families seeking comfort during air raid warnings. 
                Many devotees believe the temple's spiritual protection helped keep the community safe during 
                the dangerous wartime period.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">British naval observation post on Swami Rock</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Allied warships anchored in temple's view</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Temple used as community shelter during raids</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">War memorial sites nearby in Fort Frederick</span>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-slate-600">
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Historical Timeline</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-1">
                      <li>• 1941: British Eastern Fleet establishes Trincomalee base</li>
                      <li>• April 1942: Japanese air raids on harbor and surrounding areas</li>
                      <li>• 1942-1945: Continuous Allied naval operations</li>
                      <li>• 1945: War ends, temple area returns to peaceful pilgrimage</li>
                    </ul>
                  </div>
                </div>
              </div>123
            </div>
          </div>
        </section>

        {/* How to Get There */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">How to Reach Koneswaram Temple</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Card className="p-6 bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center text-blue-800 dark:text-blue-200">
                  <Car className="w-6 h-6 mr-2" />
                  By Private Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 dark:text-blue-200 mb-3">
                  The most convenient way to reach the temple. Drive to Trincomalee town and follow signs to 
                  Koneswaram Temple. Limited parking available near the temple.
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-1">
                  <li>• 4 hours from Colombo (258 km)</li>
                  <li>• 2.5 hours from Kandy (110 km)</li>
                  <li>• 1 hour from Batticaloa (58 km)</li>
                  <li>• Parking fees: Rs. 100-200</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center text-green-800 dark:text-green-200">
                  <Bus className="w-6 h-6 mr-2" />
                  By Public Bus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-200 mb-3">
                  Regular bus services connect Trincomalee with major cities. From Trincomalee bus station, 
                  take a local bus or three-wheeler to the temple.
                </p>
                <ul className="text-sm text-green-700 dark:text-green-200 space-y-1">
                  <li>• Direct buses from Colombo (6-7 hours)</li>
                  <li>• Buses from Kandy via Dambulla (4 hours)</li>
                  <li>• Local bus fare to temple: Rs. 20-30</li>
                  <li>• Three-wheeler from town: Rs. 300-500</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-purple-50 dark:bg-slate-800 border-purple-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center text-purple-800 dark:text-purple-200">
                  <Train className="w-6 h-6 mr-2" />
                  By Train
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 dark:text-purple-200 mb-3">
                  The scenic train journey to Trincomalee is popular among tourists. The railway station is 
                  about 2 km from the temple.
                </p>
                <ul className="text-sm text-purple-700 dark:text-purple-200 space-y-1">
                  <li>• Daily trains from Colombo Fort</li>
                  <li>• Journey time: 8-9 hours</li>
                  <li>• Beautiful coastal and rural scenery</li>
                  <li>• Station to temple: taxi or three-wheeler</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center text-orange-800 dark:text-orange-300">
                  <Plane className="w-6 h-6 mr-2" />
                  By Air
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 dark:text-orange-400 mb-3">
                  Trincomalee has a domestic airport with occasional flights. Most visitors fly into Colombo 
                  and take ground transportation.
                </p>
                <ul className="text-sm text-orange-700 dark:text-orange-400 space-y-1">
                  <li>• China Bay Airport (domestic flights only)</li>
                  <li>• Mainly charter and private flights</li>
                  <li>• Airport to temple: 15 minutes by car</li>
                  <li>• Most visitors use Bandaranaike Airport (Colombo)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Practical Visitor Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Entry & Timings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Temple Timings:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Daily: 5:00 AM - 9:00 PM</li>
                      <li>• Best visiting hours: 6:00-8:00 AM, 5:00-7:00 PM</li>
                      <li>• Special ceremonies: Check temple calendar</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entry Fees:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Temple entry: Free</li>
                      <li>• Parking: Rs. 100-200</li>
                      <li>• Photography: Usually permitted (check restrictions)</li>
                      <li>• Donations welcome but not mandatory</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Essential Items:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comfortable walking shoes (removable)</li>
                      <li>• Conservative clothing covering shoulders and knees</li>
                      <li>• Water bottle and sun protection</li>
                      <li>• Camera for stunning ocean views</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Optional Items:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Flowers or fruits for offerings</li>
                      <li>• Coconuts for traditional breaking ceremony</li>
                      <li>• Light snacks (limited facilities nearby)</li>
                      <li>• Small cash for donations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Explore More in Trincomalee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  alt="Fort Frederick historical fort ruins"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Fort Frederick</CardTitle>
                <CardDescription>Historic Dutch fort built with temple stones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Explore the colonial fort built by the Portuguese and expanded by the Dutch, 
                  using stones from the original Koneswaram Temple.
                </p>
                <Badge variant="outline" className="text-xs">5-minute walk</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  alt="Nilaveli Beach pristine white sand and clear water"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Nilaveli Beach</CardTitle>
                <CardDescription>Pristine white sand beach paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Relax on one of Sri Lanka's most beautiful beaches with crystal-clear water, 
                  perfect for swimming and snorkeling.
                </p>
                <Badge variant="outline" className="text-xs">15 minutes by car</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  alt="Whale watching boat tour in Trincomalee waters"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Whale Watching</CardTitle>
                <CardDescription>Blue whales and dolphins in natural habitat</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Experience incredible whale watching opportunities in the deep waters off 
                  Trincomalee, best from March to August.
                </p>
                <Badge variant="outline" className="text-xs">Harbor departure</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Best Time to Visit Koneswaram Temple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="p-6 bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-green-800 dark:text-green-200">Dry Season</CardTitle>
                <CardDescription className="text-green-700 dark:text-green-200">April - September</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-200 mb-3">
                  The best time to visit with clear skies, calm seas, and excellent visibility for ocean views 
                  and photography. Ideal weather for temple exploration and nearby beach activities.
                </p>
                <ul className="text-sm text-green-700 dark:text-green-200 space-y-1">
                  <li>• Perfect weather for sightseeing</li>
                  <li>• Clear ocean views from temple</li>
                  <li>• Best for photography</li>
                  <li>• Comfortable temperature (25-30°C)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-yellow-800 dark:text-yellow-300">Festival Season</CardTitle>
                <CardDescription className="text-yellow-700 dark:text-yellow-400">February - March</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 dark:text-yellow-400 mb-3">
                  Experience the temple during Maha Shivarathri for authentic cultural immersion, 
                  though expect larger crowds and book accommodation well in advance.
                </p>
                <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                  <li>• Maha Shivarathri celebrations</li>
                  <li>• Cultural performances and processions</li>
                  <li>• Spiritual atmosphere at its peak</li>
                  <li>• Book accommodation early</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-blue-800 dark:text-blue-200">Monsoon Season</CardTitle>
                <CardDescription className="text-blue-700 dark:text-blue-200">October - January</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 dark:text-blue-200 mb-3">
                  Visit during this time for fewer crowds and dramatic cloudy skies, though rain may 
                  limit outdoor activities and ocean views may be restricted.
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-1">
                  <li>• Fewer tourist crowds</li>
                  <li>• Dramatic cloudy skies</li>
                  <li>• Occasional heavy rainfall</li>
                  <li>• Some outdoor activities limited</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Cultural Guidelines and Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="p-6 bg-purple-50 dark:bg-slate-800 border-purple-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-purple-800 dark:text-purple-200">Temple Etiquette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-purple-700 dark:text-purple-200">Remove shoes before entering temple premises</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-purple-700 dark:text-purple-200">Dress modestly - cover shoulders, arms, and legs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-purple-700 dark:text-purple-200">Maintain respectful silence during prayer times</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-purple-700 dark:text-purple-200">Ask permission before photographing people</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-purple-700 dark:text-purple-200">Turn off mobile phones or keep on silent mode</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-orange-800 dark:text-orange-300">Local Customs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-orange-700 dark:text-orange-400">Greet with "Vanakkam" (traditional Tamil greeting)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-orange-700 dark:text-orange-400">Join hands in prayer position when greeting priests</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-orange-700 dark:text-orange-400">Accept prasadam (blessed food) with both hands</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-orange-700 dark:text-orange-400">Clockwise circumambulation around the main shrine</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-orange-700 dark:text-orange-400">Small donations are appreciated but not required</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation Suggestions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Where to Stay in Trincomalee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-blue-800 dark:text-blue-200">Luxury Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 dark:text-blue-200 mb-4">
                  High-end beach resorts and boutique hotels offering premium comfort and services.
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-2">
                  <li>• <strong>Anantamaa Resort:</strong> Luxury beachfront resort with spa</li>
                  <li>• <strong>Trinco Blu by Cinnamon:</strong> Premium beach hotel</li>
                  <li>• <strong>Uga Jungle Beach:</strong> Eco-luxury resort experience</li>
                </ul>
                <Badge className="mt-3 bg-blue-600 text-white">$100-300/night</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-green-800 dark:text-green-200">Mid-Range Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-200 mb-4">
                  Comfortable hotels and guesthouses offering good value for money and quality service.
                </p>
                <ul className="text-sm text-green-700 dark:text-green-200 space-y-2">
                  <li>• <strong>The Chaaya Blu:</strong> Beachfront hotel with modern amenities</li>
                  <li>• <strong>Hotel Club Oceanic:</strong> Popular choice near temple</li>
                  <li>• <strong>Nilaveli Beach Hotel:</strong> Traditional beachside location</li>
                </ul>
                <Badge className="mt-3 bg-green-600 text-white">$30-100/night</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-slate-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-purple-800 dark:text-purple-200">Budget Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 dark:text-purple-200 mb-4">
                  Affordable guesthouses and hostels perfect for budget travelers and backpackers.
                </p>
                <ul className="text-sm text-purple-700 dark:text-purple-200 space-y-2">
                  <li>• <strong>Trincomalee Rest House:</strong> Government rest house option</li>
                  <li>• <strong>Sea View Hotel:</strong> Basic accommodation near harbor</li>
                  <li>• <strong>Local guesthouses:</strong> Family-run establishments</li>
                </ul>
                <Badge className="mt-3 bg-purple-600 text-white">$10-30/night</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-6">
            
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Is Koneswaram Temple suitable for non-Hindu visitors?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, absolutely! Koneswaram Temple welcomes visitors of all faiths and backgrounds. Non-Hindu 
                  visitors are encouraged to explore the temple, enjoy the stunning ocean views, and learn about 
                  Tamil culture and Hindu traditions. Simply follow basic respect guidelines like modest dress and 
                  removing shoes before entering.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">How long should I plan for a temple visit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Allow 2-3 hours for a comprehensive visit. This includes exploring the main temple (30-45 minutes), 
                  visiting Lover's Leap (30 minutes), taking photographs and enjoying ocean views (45 minutes), 
                  and exploring Fort Frederick if desired (30-45 minutes). Add extra time during festival periods 
                  or if you want to participate in prayer ceremonies.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Are there guided tours available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local guides are usually available at the temple entrance, especially during peak tourist seasons. 
                  Many speak English and can provide detailed information about the temple's history, architecture, 
                  and religious significance. Tour guide fees typically range from Rs. 1,000-2,500 depending on 
                  group size and tour length. Hotels can also arrange professional guided tours.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">What facilities are available at the temple?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Basic facilities include restrooms, drinking water, shoe storage areas, and small shops selling 
                  religious items and refreshments. However, facilities are limited, so it's advisable to bring 
                  water, snacks, and any necessary items. The nearest restaurants and hotels are in Trincomalee town, 
                  about 2-3 km away.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Is the temple accessible for people with mobility challenges?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The temple has some challenges for visitors with mobility issues due to its clifftop location and 
                  stone steps. However, the main temple area is relatively accessible, and the stunning ocean views 
                  can be enjoyed from several vantage points. It's recommended to contact the temple authorities in 
                  advance to discuss specific accessibility needs and possible assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <Card className="p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 dark:from-blue-950 dark:via-purple-950 dark:to-orange-950 border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center mb-4">Plan Your Sacred Journey to Koneswaram Temple</CardTitle>
              <CardDescription className="text-lg text-center max-w-3xl mx-auto">
                Experience the spiritual power and breathtaking beauty of Sri Lanka's most dramatically located temple. 
                From ancient legends to stunning ocean views, Koneswaram Temple offers an unforgettable journey through 
                faith, history, and natural beauty.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/destinations/trincomalee">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Explore More of Trincomalee
                  </Button>
                </Link>
                <Link href="/destinations">
                  <Button size="lg" variant="outline">
                    Discover Other Destinations
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
