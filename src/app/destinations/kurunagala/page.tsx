"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Clock,
  MapPin,
  Calendar,
  CheckCircle,
  Mountain,
  Bus,
  Utensils,
  Hotel,
  Sun,
  CloudRain,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";



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
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
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
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
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

export default function KurunegalaPage() {
  const ethagalaImages = [
    "/Athgala.jpg",
    "/ethagala-temple.jpg",
    "/ethagala-sunrise.jpg",
    "/ethagala-panorama.jpg"
  ]
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kurunagala.webp"
          alt="Panoramic view of Kurunegala city with majestic Ethagala rock formation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kurunegala</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">City of Ancient Rock Giants</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <MapPin className="w-4 h-4 mr-1" />
              North Western Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
              <Mountain className="w-4 h-4 mr-1" />
              Rock Formations
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Calendar className="w-4 h-4 mr-1" />
              Medieval Capital
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#rock-formations" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Rock Formations</a>
          <a href="#historical-sites" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Historical Sites</a>
          <a href="#activities" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Activities</a>
          <a href="#nearby-places" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby Places</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kurunegala: The City of Rock Giants</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover Kurunegala, a city where ancient legends meet natural wonders, dominated by eight majestic rock formations 
              that have watched over the landscape for millennia. As Sri Lanka&apos;s medieval capital during the 13th century, 
              Kurunegala combines rich historical heritage with modern urban development.
            </p>
            <p className="text-lg">
              Each of the city&apos;s iconic rock formations bears the name of the animal it resembles - from the towering 
              Elephant Rock (Ethagala) to the distinctive Tortoise Rock (Ibbanagala). These natural monuments not only 
              provide a stunning backdrop to the city but also offer panoramic views and house ancient temples that continue 
              to draw pilgrims and tourists alike.
            </p>
          </div>
        </section>

        {/* Quick Facts & Getting There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Kurunegala Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Province:</strong> North Western
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Famous For:</strong> 8 iconic rock formations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Historical Period:</strong> 13th century capital
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~120,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 1-2 days
                    </span>
                  </div>
                </div>
                {/* Additional info for desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1–2 full days to explore the rock formations, temples, and historic sites at a comfortable pace.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">December to April (dry season) for clear views and comfortable climbing weather.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Getting There */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Kurunegala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Colombo</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 116km (72 miles)</li>
                      <li>• <strong>By Car:</strong> 3-4 hours via A6 highway</li>
                      <li>• <strong>By Train:</strong> 4-5 hours regular service</li>
                      <li>• <strong>By Bus:</strong> Frequent services, 3-4 hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Local Transport</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Tuk-tuks:</strong> Available throughout city</li>
                      <li>• <strong>Local buses:</strong> Connect to rock sites</li>
                      <li>• <strong>Walking:</strong> City center is walkable</li>
                      <li>• <strong>Bicycle:</strong> Available for rent</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Early morning visits to rocks for cooler weather</li>
                    <li>• Bring water and sunscreen for outdoor activities</li>
                    <li>• Respect temple dress codes at sacred sites</li>
                    <li>• Negotiate tuk-tuk prices before starting journey</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The City of Rock Giants</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Kurunegala, a historic city in Sri Lanka&apos;s North Western Province, served as a royal capital during 
              the 13th century. The city is famous for its distinctive landscape dominated by eight rock formations, 
              each named after the animals they resemble - Elephant Rock (Ethagala), Tortoise Rock (Ibbanagala), 
              and more.
            </p>
            <p className="mb-4">
              Today, Kurunegala combines its rich historical heritage with modern development, serving as a major 
              commercial hub while preserving its ancient temples, lakes, and cultural landmarks. The city&apos;s unique 
              geography and historical significance make it an interesting destination for both history enthusiasts 
              and nature lovers.
            </p>
          </div>
        </section>

        {/* Ethagala (Elephant Rock) - Featured Section */}
        <section className="mb-16" id="ethagala-featured">
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950 rounded-xl p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 text-orange-800 dark:text-orange-200">
                Ethagala (Elephant Rock)
              </h2>
              <p className="text-lg text-orange-600 dark:text-orange-300">
                The Majestic Guardian of Kurunegala
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <Badge className="bg-orange-600 text-white text-xs">
                  <Mountain className="w-3 h-3 mr-1" />
                  316m tall
                </Badge>
                <Badge className="bg-amber-600 text-white text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  Ancient site
                </Badge>
                <Badge className="bg-yellow-600 text-white text-xs">
                  <Sun className="w-3 h-3 mr-1" />
                  Best views
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <ImageCarousel
                  images={ethagalaImages}
                  alt="Ethagala (Elephant Rock) and temple complex"
                />
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-2 text-center italic">
                  Majestic Ethagala rising 316 meters above Kurunegala
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Rising majestically to 316 meters above sea level, Ethagala (Elephant Rock) is Kurunegala&apos;s most 
                  iconic landmark. This massive rock formation gets its name from its distinctive elephant-like silhouette 
                  and has been a sacred site for over 2,000 years with ancient Buddhist temples at its summit.
                </p>

                <div className="grid md:grid-cols-2 gap-3">
                  <Card className="border-l-4 border-orange-500 bg-white/70 dark:bg-gray-900/70">
                    <CardContent className="p-3">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 text-sm">Temple Features</h4>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>• Ancient cave temples with murals</li>
                        <li>• Sacred Buddha statues</li>
                        <li>• Meditation chambers in rock</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-amber-500 bg-white/70 dark:bg-gray-900/70">
                    <CardContent className="p-3">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2 text-sm">Visit Info</h4>
                      <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                        <li>• 45-minute climb to summit</li>
                        <li>• 360-degree panoramic views</li>
                        <li>• Best sunrise/sunset spot</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">316m</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Height</div>
                  </div>
                  <div className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <div className="text-lg font-bold text-amber-600 dark:text-amber-400">45min</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Climb</div>
                  </div>
                  <div className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">2000+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Rock Formations */}
        <section className="mb-16" id="rock-formations">
          <h2 className="text-3xl font-bold mb-8">The Seven Sacred Rock Giants</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ibbanagala */}
            <Card className="group hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-300">Ibbanagala (Tortoise Rock)</CardTitle>
                <CardDescription>The Ancient Guardian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/ibbanagala.jpg"
                    alt="Ibbanagala Rock Formation resembling a tortoise"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground text-sm">
                    Named for its distinctive tortoise-like shape, this rock formation holds significant 
                    archaeological importance with ancient cave inscriptions and Brahmi script writings.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Archaeological site with ancient inscriptions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Cave temples with historical significance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Moderate hiking difficulty</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Andagala */}
            <Card className="group hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-300">Andagala (Eel Rock)</CardTitle>
                <CardDescription>The Serpentine Wonder</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/andagala.jpg"
                    alt="Andagala Rock Formation with its unique elongated shape"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground text-sm">
                    Known for its elongated shape resembling an eel, this formation offers excellent hiking 
                    opportunities and stunning valley views from multiple vantage points.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Popular hiking destination</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Multiple scenic viewpoints</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Photography opportunities</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yakdessagala */}
            <Card className="group hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-700 dark:text-purple-300">Yakdessagala (Devil&apos;s Rock)</CardTitle>
                <CardDescription>The Mysterious Formation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/yakdessagala.jpg"
                    alt="Yakdessagala Devil's Rock with mysterious atmosphere"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground text-sm">
                    Shrouded in local legends and folklore, this dramatic rock formation offers adventurous 
                    climbs and panoramic views, though it requires more challenging hiking skills.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Rich in local folklore and legends</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Challenging but rewarding climb</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Unique geological features</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gonagala */}
            <Card className="group hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-300">Gonagala (Bull Rock)</CardTitle>
                <CardDescription>The Powerful Giant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/gonagala.jpg"
                    alt="Gonagala Bull Rock showing its powerful silhouette"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground text-sm">
                    Resembling a powerful bull, this imposing rock formation stands as a testament to nature&apos;s 
                    artistry and offers meditation spots and quiet reflection areas.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Peaceful meditation spots</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Less crowded, tranquil atmosphere</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Easy access from city center</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kuruminiyagala */}
            <Card className="group hover:shadow-lg transition-shadow border-l-4 border-teal-500">
              <CardHeader>
                <CardTitle className="text-teal-700 dark:text-teal-300">Kuruminiyagala (Beetle Rock)</CardTitle>
                <CardDescription>The Unique Silhouette</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/kuruminiyagala.jpg"
                    alt="Kuruminiyagala Beetle Rock with its distinctive shape"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground text-sm">
                    The smallest of the main rock formations, resembling a beetle, this site offers intimate 
                    nature experiences and is perfect for families with children due to easier access.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Family-friendly hiking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Unique geological formations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Great for beginners</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wanduragala */}
            <Card className="group hover:shadow-lg transition-shadow border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-300">Wanduragala (Monkey Rock)</CardTitle>
                <CardDescription>The Playful Guardian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/wanduragala.jpg"
                    alt="Wanduragala Monkey Rock with wildlife around"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground text-sm">
                    Named for its monkey-like appearance, this rock attracts wildlife and offers nature 
                    enthusiasts opportunities to observe local fauna in their natural habitat.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Wildlife observation opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Nature photography paradise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Bird watching opportunities</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Historical Sites */}
        <section className="mb-16" id="historical-sites">
          <h2 className="text-3xl font-bold mb-8">Historical Treasures</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kurunegala Lake */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Kurunegala Lake</CardTitle>
                <CardDescription>Medieval Engineering Marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/kurunegala-lake.jpg"
                    alt="Scenic Kurunegala Lake with surrounding greenery"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground">
                    This artificial lake, dating back to the 13th century, represents medieval Sri Lankan engineering 
                    prowess. Today, it&apos;s the heart of the city with a 2km walking track and recreational areas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Historical significance from 13th century</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>2km walking track around the lake</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Evening recreational activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Popular local gathering spot</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Royal Palace Complex */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Royal Palace Complex</CardTitle>
                <CardDescription>Medieval Royal Residence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/kurunegala-palace.jpg"
                    alt="Archaeological remains of Kurunegala Royal Palace"
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                  />
                  <p className="text-muted-foreground">
                    The remains of the 13th-century royal palace complex offer glimpses into Sri Lanka&apos;s medieval 
                    period. Archaeological findings reveal sophisticated architecture and royal lifestyle.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Important archaeological site</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Historical artifacts and exhibits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Guided tours available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Medieval architecture remnants</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-16" id="activities">
          <h2 className="text-3xl font-bold mb-8">Things to Do in Kurunegala</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rock Climbing & Hiking */}
            <Card className="group hover:shadow-lg transition-shadow border border-slate-200">
              <CardHeader>
                <CardTitle>Adventure Activities</CardTitle>
                <CardDescription>Explore the Rock Giants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Guided rock climbing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Nature trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Photography tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Sunrise hikes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cultural Activities */}
            <Card className="group hover:shadow-lg transition-shadow border border-slate-200">
              <CardHeader>
                <CardTitle>Cultural Experiences</CardTitle>
                <CardDescription>Local Heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Temple visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Archaeological tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Local markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Food tasting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Nature & Leisure */}
            <Card className="group hover:shadow-lg transition-shadow border border-slate-200 sm:col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Leisure Activities</CardTitle>
                <CardDescription>Relax & Unwind</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Lake walking trail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Bird watching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Sunset viewing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Garden visits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Places */}
        <section className="mb-16" id="nearby-places">
          <h2 className="text-3xl font-bold mb-8">Explore Nearby</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Yapahuwa */}
            <Card className="group hover:shadow-lg transition-shadow border border-slate-200">
              <CardHeader>
                <CardTitle>Yapahuwa</CardTitle>
                <CardDescription>25km from Kurunegala</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/yapahuwa-rock.jpg"
                  alt="Ancient Yapahuwa Rock Fortress"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-muted-foreground mb-4">
                  13th-century rock fortress with remarkable stone carvings and unique architectural features.
                </p>
                <Button asChild className="w-full">
                  <Link href="/destinations/yapahuwa">Explore Yapahuwa</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Dambulla */}
            <Card className="group hover:shadow-lg transition-shadow border border-slate-200">
              <CardHeader>
                <CardTitle>Dambulla</CardTitle>
                <CardDescription>67km from Kurunegala</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dambulla-cave-temple.jpg"
                  alt="Dambulla Cave Temple Complex"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-muted-foreground mb-4">
                  UNESCO World Heritage site featuring ancient cave temples with remarkable Buddhist art.
                </p>
                <Button asChild className="w-full">
                  <Link href="/destinations/dambulla-cave-temple">Visit Dambulla</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kandy */}
            <Card className="group hover:shadow-lg transition-shadow border border-slate-200 sm:col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Kandy</CardTitle>
                <CardDescription>42km from Kurunegala</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Kandy.jpeg"
                  alt="Sacred Temple of the Tooth in Kandy"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 w-full object-cover h-48 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-muted-foreground mb-4">
                  Last royal capital of Sri Lanka, home to the Temple of the Tooth and stunning botanical gardens.
                </p>
                <Button asChild className="w-full">
                  <Link href="/destinations/kandy">Discover Kandy</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16" id="visitor-guide">
          <h2 className="text-3xl font-bold mb-8">Essential Visitor Information</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accommodation & Dining */}
            <div className="space-y-6">
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-blue-500" />
                    Where to Stay
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Luxury & Mid-Range</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Hotels near Kurunegala Lake</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>City center accommodations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Budget Options</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Local guesthouses</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Backpacker hostels</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-orange-500" />
                    Where to Eat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Local Cuisine</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Traditional rice & curry restaurants</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Lake-side dining options</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Quick Eats</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Street food near Clock Tower</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Central Market food stalls</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transportation & Tips */}
            <div className="space-y-6">
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bus className="w-5 h-5 text-green-500" />
                    Getting Around
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Local Transport</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Tuk-tuks available throughout city</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Local bus service</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Taxi services on call</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Best Times to Visit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Peak Season</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Sun className="w-4 h-4 text-yellow-500" />
                          <span>December to April (Dry Season)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Off Season</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CloudRain className="w-4 h-4 text-blue-500" />
                          <span>May to November (Some rain)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Essential Travel Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold">Visiting Temples & Rocks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Dress modestly - cover shoulders and knees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Remove shoes at temples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Early morning visits recommended for rock climbing</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">General Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Carry plenty of water, especially for rock visits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Use sunscreen and wear a hat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Negotiate tuk-tuk prices before riding</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-3">Shopping & Markets</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Visit Central Market in the morning for fresh produce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Look for local handicrafts in shops around the lake</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
