"use client"

import Image from "next/image"
import { useState } from "react"

type CarouselImage = { src: string; caption: string }
function ImageCarousel({ images, alt }: { images: CarouselImage[]; alt: string }) {
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
      <div className="relative overflow-hidden rounded-xl" style={{ height: '400px', width: '100%' }}>
        <Image
          src={images[currentIndex]?.src || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="rounded-xl transition-all duration-300 object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {/* Caption */}
        {images[currentIndex]?.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2 rounded-b-xl">
            {images[currentIndex].caption}
          </div>
        )}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={prevImage}
            >
              <span className="sr-only">Previous</span>
              &#8592;
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={nextImage}
            >
              <span className="sr-only">Next</span>
              &#8594;
            </Button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
import Link from "next/link"
import { Clock, MapPin, CheckCircle, Star, Calendar, Building, ShoppingBag, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"



export default function ColomboTourGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Colombo-City.jpeg"
          alt="Colombo skyline showing modern buildings, colonial architecture, and bustling city life"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Colombo</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Dynamic Commercial Capital</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Western Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Building className="w-4 h-4 mr-1" />
              Commercial & Cultural Hub
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <ShoppingBag className="w-4 h-4 mr-1" />
              Shopping & Dining Paradise
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Colombo: Where Tradition Meets Modernity
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Colombo, Sri Lanka&apos;s bustling commercial capital and largest city, is a fascinating blend of colonial
              heritage, modern development, and vibrant local culture. This dynamic metropolis serves as the country&apos;s
              economic heart while preserving its rich history through magnificent architecture, bustling markets, and
              diverse cultural attractions.
            </p>
            <p className="text-lg">
              From the historic Fort district with its colonial buildings to the modern skyscrapers of the business
              district, from the aromatic spice markets of Pettah to the serene Buddhist temples, Colombo offers
              visitors an authentic urban Sri Lankan experience that captures the essence of this island nation&apos;s past,
              present, and future.
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
                Essential Colombo Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Population:</strong> 5.6 million (Greater Colombo)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Founded:</strong> Ancient trading port, colonial era
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> December to March
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Famous for:</strong> Shopping, Dining, Culture
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Must-See:</strong> Galle Face Green, Fort District
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Duration:</strong> 2-3 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historic Districts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Historic Districts & Colonial Heritage</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <div className="rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  images={[
                    { src: "/placeholder.svg", caption: "Independence Memorial Hall exterior" },
                    { src: "/placeholder.svg", caption: "Independence Square illuminated at night" }
                  ]}
                  alt="Independence Memorial Hall in Colombo showing national monument and Kandyan-style architecture"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 italic">
                The Fort district showcases Colombo&apos;s rich colonial architectural heritage
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Colombo&apos;s Fort district, the historic heart of the city, tells the story of Sri Lanka&apos;s colonial past
                through its magnificent architecture. Originally built by the Portuguese and later expanded by the Dutch
                and British, this area now serves as the central business district while preserving its historical
                charm.
              </p>
              <p>
                Walk through streets lined with colonial-era buildings, visit the iconic Clock Tower, explore the Old
                Parliament Building, and discover how this ancient trading port evolved into modern Sri Lanka&apos;s
                commercial capital.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Colonial Highlights:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Old Parliament Building - British colonial architecture</li>
                  <li>• Clock Tower - Iconic Colombo landmark</li>
                  <li>• Dutch Period Museum - Colonial artifacts</li>
                  <li>• Grand Oriental Hotel - Historic luxury</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Colombo</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Galle Face Green */}
            <Card>
              <CardHeader>
                <CardTitle>1. Galle Face Green</CardTitle>
                <CardDescription>Iconic oceanfront promenade and urban park</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/Galle-face.jpg", caption: "Galle Face Green with families and city skyline" },
                        { src: "/placeholder.svg", caption: "Sunset at Galle Face Green promenade" }
                      ]}
                      alt="Galle Face Green in Colombo showing families enjoying the oceanfront park with city skyline"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This half-kilometer stretch of oceanfront lawn is Colombo&apos;s most beloved public space. Originally
                      created by the British in 1859, Galle Face Green serves as the city&apos;s social hub where families
                      gather, children play, and visitors enjoy spectacular sunsets over the Indian Ocean.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for evening strolls and sunset viewing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Street food vendors selling local snacks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Kite flying and family activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic Galle Face Hotel nearby
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/galle-face-green">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gangarama Temple */}
            <Card>
              <CardHeader>
                <CardTitle>2. Gangarama Temple</CardTitle>
                <CardDescription>Iconic Buddhist temple and cultural center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Gangarama Temple is one of Colombo&apos;s most important Buddhist temples, known for its eclectic
                      architecture that blends Sri Lankan, Thai, Indian, and Chinese styles. The temple complex includes
                      a museum, library, and vocational training institute, making it a significant cultural and educational center.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Buddha statues and religious artifacts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Diverse architectural styles from multiple cultures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere for meditation and reflection
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Museum with extensive Buddhist art collection
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/gangarama-temple">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/Gangaramaya-temple.jpg", caption: "Gangarama Temple with golden Buddha statues" },
                        { src: "/Gangaramaya4.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya-temple3.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya-temple4.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya-temple-at-night.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya1.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya8.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya7.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya2.jpg", caption: "Gangarama Temple illuminated at night" },
                        { src: "/Gangaramaya6.jpg", caption: "Gangarama Temple illuminated at night" },
                      ]}
                      alt="Gangarama Temple in Colombo showing ornate Buddhist architecture and golden Buddha statues"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pettah Market */}
            <Card>
              <CardHeader>
                <CardTitle>3. Pettah Floating Market & Bazaar</CardTitle>
                <CardDescription>Vibrant traditional market experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Pettah is Colombo&apos;s bustling commercial heart, a maze of narrow streets filled with shops,
                      markets, and vendors selling everything from spices and textiles to electronics and jewelry. The
                      floating market on Beira Lake adds a unique dimension to this traditional shopping experience.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic Sri Lankan spices and tea
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional textiles and handicrafts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Floating market on Beira Lake
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bargaining culture and local interaction
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/pettah">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg", caption: "Pettah market with vendors and spices" },
                        { src: "/placeholder.svg", caption: "Floating market on Beira Lake, Pettah" }
                      ]}
                      alt="Busy Pettah market in Colombo showing vendors, spices, and traditional shopping atmosphere"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Independence Square */}
            <Card>
              <CardHeader>
                <CardTitle>4. Independence Memorial Hall</CardTitle>
                <CardDescription>National monument and architectural masterpiece</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg", caption: "Independence Memorial Hall exterior" },
                        { src: "/placeholder.svg", caption: "Independence Square illuminated at night" },
                        { src: "/placeholder.svg", caption: "Park area around Independence Memorial Hall" }
                      ]}
                      alt="Independence Memorial Hall in Colombo showing the grand monument and surrounding park"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built to commemorate Sri Lanka&apos;s independence from British rule in 1948, this magnificent monument
                      combines traditional Kandyan architecture with modern design. The surrounding Independence Square
                      is a popular spot for locals and tourists alike.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Kandyan-style architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Museum showcasing independence history
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful park for walking and relaxation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Popular jogging and exercise area
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/independence-square">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Red Mosque */}
            <Card>
              <CardHeader>
                <CardTitle>5. Red Mosque (Jami Ul-Alfar Mosque)</CardTitle>
                <CardDescription>Stunning Indo-Saracenic architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This striking red and white striped mosque is one of Colombo&apos;s most photographed buildings. Built
                      in 1908, it showcases beautiful Indo-Saracenic architecture and serves as an important religious
                      and cultural center for the Muslim community.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique red and white striped design
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful Indo-Saracenic architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Located in the heart of Pettah
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Respectful photography allowed from outside
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/red-mosque">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/Red-mosq-colombo.jpg", caption: "Red Mosque with red and white stripes" },
                        { src: "/Red-mosq.webp", caption: "Red Mosque with red and white stripes" },
                        { src: "/Red-mosq2.webp", caption: "Another view of Red Mosque" },
                        { src: "/Red-mosq3.webp", caption: "Another view of Red Mosque" },
                        { src: "/Red-mosq-colombo1.jpg", caption: "Red Mosque with red and white stripes" },
                        { src: "/Red-mosq1.webp", caption: "Interior view of Jami Ul-Alfar Mosque" }
                      ]}
                      alt="Red Mosque in Colombo showing distinctive red and white striped architecture"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Port City Colombo */}
            <Card>
              <CardHeader>
                <CardTitle>6. Port City Colombo</CardTitle>
                <CardDescription>Sri Lanka&apos;s newest urban development marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg", caption: "Port City Colombo with modern skyscrapers" },
                        { src: "/placeholder.svg", caption: "Marina and waterfront at Port City Colombo" }
                      ]}
                      alt="Port City Colombo showing modern skyscrapers, marina, and waterfront development"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Port City Colombo is Sri Lanka&apos;s most ambitious urban development project, built on reclaimed land
                      from the sea. This futuristic city-within-a-city features ultra-modern architecture, luxury residences,
                      world-class shopping and dining, business districts, and a state-of-the-art marina.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ultra-modern waterfront development
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Luxury shopping and fine dining venues
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        World-class marina and yacht facilities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning city and ocean views
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/destinations/port-city">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                          Explore More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Modern Colombo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Modern Colombo: Shopping & Entertainment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Port City Colombo</CardTitle>
                <CardDescription>Ultra-modern waterfront development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl shadow-lg overflow-hidden mb-3">
                  <ImageCarousel
                    images={[
                      { src: "/placeholder.svg", caption: "Port City Colombo futuristic skyline" },
                      { src: "/placeholder.svg", caption: "Port City Colombo at night" }
                    ]}
                    alt="Port City Colombo showing futuristic skyline and waterfront development"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Sri Lanka&apos;s newest and most ambitious development featuring luxury residences, shopping, business districts, and world-class marina facilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">One Galle Face Mall</CardTitle>
                <CardDescription>Luxury shopping destination</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl shadow-lg overflow-hidden mb-3">
                  <ImageCarousel
                    images={[
                      { src: "/placeholder.svg", caption: "One Galle Face Mall exterior" },
                      { src: "/placeholder.svg", caption: "Interior of One Galle Face Mall" }
                    ]}
                    alt="One Galle Face Mall showing modern shopping complex with luxury stores"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Premium shopping mall with international brands, fine dining, and entertainment options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Colombo City Centre</CardTitle>
                <CardDescription>Modern mixed-use development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl shadow-lg overflow-hidden mb-3">
                  <ImageCarousel
                    images={[
                      { src: "/placeholder.svg", caption: "Colombo City Centre exterior" },
                      { src: "/placeholder.svg", caption: "Shops inside Colombo City Centre" }
                    ]}
                    alt="Colombo City Centre showing modern architecture and shopping facilities"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Contemporary shopping, dining, and residential complex in the heart of the city.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Arcade Independence Square</CardTitle>
                <CardDescription>Historic shopping arcade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl shadow-lg overflow-hidden mb-3">
                  <ImageCarousel
                    images={[
                      { src: "/placeholder.svg", caption: "Arcade Independence Square exterior" },
                      { src: "/placeholder.svg", caption: "Shops at Arcade Independence Square" }
                    ]}
                    alt="Arcade Independence Square showing colonial-style shopping arcade"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Beautifully restored colonial building housing boutique shops and restaurants.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cultural Experiences & Local Life</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Religious & Cultural Sites</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Gangaramaya Temple</h4>
                  <p className="text-sm text-muted-foreground">
                    One of Colombo&apos;s most important Buddhist temples, featuring eclectic architecture and artifacts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">St. Lucia&apos;s Cathedral</h4>
                  <p className="text-sm text-muted-foreground">
                    Beautiful Catholic cathedral showcasing colonial religious architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hindu Temples</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit colorful Hindu temples in Pettah and experience diverse religious traditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Food & Dining Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Street Food Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore local street food culture with kottu roti, hoppers, and tropical fruits.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fine Dining</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience world-class restaurants serving fusion cuisine and traditional Sri Lankan dishes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tea Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit tea lounges and learn about Sri Lanka&apos;s famous Ceylon tea heritage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weather & Best Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>December to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pleasant temperatures (24-30°C)</li>
                  <li>• Minimal rainfall, clear skies</li>
                  <li>• Perfect for sightseeing and walking</li>
                  <li>• Peak tourist season</li>
                  <li>• Higher hotel rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April-May & October-November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Warm temperatures with occasional showers</li>
                  <li>• Good for indoor attractions and shopping</li>
                  <li>• Fewer crowds, better prices</li>
                  <li>• Lush green city parks</li>
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
                  <li>• Heavy rainfall and humidity</li>
                  <li>• Great for museums and indoor activities</li>
                  <li>• Lowest accommodation prices</li>
                  <li>• Vibrant green landscapes</li>
                  <li>• Potential flooding in some areas</li>
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
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Colombo Urban Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Colombo offers a perfect introduction to Sri Lanka&apos;s rich culture, history, and modern aspirations. This
                vibrant city seamlessly blends ancient traditions with contemporary life, creating unique experiences
                that showcase the best of Sri Lankan urban culture.
              </p>
              <p className="text-muted-foreground mb-4">
                From exploring colonial architecture and bustling markets to enjoying world-class dining and modern
                shopping, Colombo provides diverse experiences that cater to every interest. Take time to interact with
                locals, sample street food, and discover the warmth and hospitality that makes Sri Lanka special.
              </p>
              <p className="text-muted-foreground font-medium">Explore the heart of Sri Lanka! 🏙️🇱🇰</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
