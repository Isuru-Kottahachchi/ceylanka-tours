"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, LandmarkIcon, Mountain, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/carousel"

const carouselImages = [
  {
    src: "/sithulpawwa-aerial.jpg",
    alt: "Aerial view of Sithulpawwa ancient monastery on rocky terrain",
    title: "Ancient Mountain Monastery",
    description: "Sithulpawwa monastery sits atop a rock, offering panoramic views of the surrounding wilderness"
  },
  {
    src: "/sithulpawwa-stupa.jpg",
    alt: "Ancient stupa at Sithulpawwa",
    title: "Ancient Stupa",
    description: "The well-preserved stupa stands as a testament to ancient Buddhist architecture"
  },
  {
    src: "/sithulpawwa-paintings.jpg",
    alt: "Ancient cave paintings at Sithulpawwa",
    title: "Cave Paintings",
    description: "Beautiful frescoes dating back to ancient times depicting Buddhist stories"
  },
  {
    src: "/sithulpawwa-caves.jpg",
    alt: "Meditation caves at Sithulpawwa",
    title: "Meditation Caves",
    description: "Ancient caves where Buddhist monks meditated in solitude"
  }
];

export default function SithulpawwaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/sithulpawwa-aerial.jpg"
          alt="Panoramic view of Sithulpawwa Raja Maha Viharaya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sithulpawwa Raja Maha Viharaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Mountain Monastery of Great Learning</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-amber-600/80">
              <MapPin className="w-4 h-4 mr-1" />
              Hambantota District
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80">
              <LandmarkIcon className="w-4 h-4 mr-1" />
              Ancient Monastery
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80">
              <Mountain className="w-4 h-4 mr-1" />
              Rock Monastery
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#history" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">History</a>
          <a href="#gallery" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Gallery</a>
          <a href="#features" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Key Features</a>
          <a href="#visitor-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visitor Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ancient Center of Buddhist Learning</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Sithulpawwa Raja Maha Viharaya, known as the &quot;hill of the quiet mind,&quot; is an ancient Buddhist
              monastery located in the Hambantota district. Built in the 2nd century BC by King Kavantissa, 
              it served as an important meditation center for Buddhist monks. The monastery sits on top of a 
              rock that rises about 400 feet above the surrounding plains.
            </p>
            <p className="text-lg">
              During its peak, Sithulpawwa was home to 12,000 Buddhist monks, making it one of the most 
              important Buddhist education centers in ancient Sri Lanka. The monastery is special because 
              it combines natural rock formations with man-made structures, creating a unique place for 
              meditation and learning.
            </p>
          </div>
        </section>

        {/* Historical Importance */}
        <section className="mb-12" id="history">
          <Card>
            <CardHeader>
              <CardTitle>Historical Significance</CardTitle>
              <CardDescription>A Center of Buddhist Education and Meditation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Sithulpawwa played a crucial role in ancient Sri Lanka&apos;s Buddhist education system. It was 
                  known as &quot;Chiththala Pabbatha&quot; in ancient texts, meaning the mountain of the quiet mind. 
                  The monastery was famous for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Being a major center for Buddhist studies and meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Housing thousands of scholarly monks who studied and taught Buddhist texts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Preserving ancient Buddhist manuscripts and teachings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Developing advanced irrigation systems for sustainable living</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Image Gallery */}
        <section className="mb-16" id="gallery">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Temple Gallery</CardTitle>
              <CardDescription>Visual journey through this ancient monastery</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ImageCarousel images={carouselImages} />
            </CardContent>
          </Card>
        </section>

        {/* Quick Facts & Location */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built in:</strong> 2nd century BC
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LandmarkIcon className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Built by:</strong> King Kavantissa
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Peak Population:</strong> 12,000 monks
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Height:</strong> 400 feet above plains
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Location & Access */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Location & Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Inside Yala National Park Block 2
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Best Time to Visit:</strong> Early morning or late afternoon
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Access:</strong> Special permit required for Block 2
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Key Features */}
        <section className="mb-16" id="features">
          <h2 className="text-3xl font-bold mb-8">Key Attractions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ancient Structures */}
            <Card>
              <CardHeader>
                <CardTitle>Ancient Structures</CardTitle>
                <CardDescription>Archaeological Treasures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/sithulpawwa-structures.jpg"
                    alt="Ancient structures at Sithulpawwa"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Ancient stupa and image house</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Meditation caves with inscriptions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Ancient stone bridges and paths</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cave Paintings */}
            <Card>
              <CardHeader>
                <CardTitle>Cave Paintings</CardTitle>
                <CardDescription>Ancient Buddhist Artwork</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/sithulpawwa-art.jpg"
                    alt="Ancient cave paintings at Sithulpawwa"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Well-preserved Buddhist murals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Unique color combinations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Stories from Buddhist literature</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16" id="visitor-guide">
          <Card>
            <CardHeader>
              <CardTitle>Visitor Guidelines</CardTitle>
              <CardDescription>Important information for your visit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Planning Your Visit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Obtain special permit for Yala Block 2 access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Arrange transport through authorized safari operators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Best visited during the dry season (May to September)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">At the Site</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Dress modestly and remove shoes at sacred areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Carry water and wear comfortable walking shoes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Photography allowed (no flash inside caves)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 dark:from-amber-950 dark:via-amber-900 dark:to-amber-950">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">Essential Tips</h2>
                <div className="max-w-3xl mx-auto text-muted-foreground space-y-2">
                  <p>• Start early to avoid afternoon heat</p>
                  <p>• Book a knowledgeable guide for historical context</p>
                  <p>• Bring binoculars for wildlife spotting</p>
                  <p>• Allow 2-3 hours for a complete visit</p>
                  <p>• Check weather conditions before planning your visit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
