"use client"
import Image from "next/image"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, TreePine, Leaf, Droplets } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InsuranceBanner from "@/components/insurance-banner"



export default function MataleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Walpolmulla1.jpg"
          alt="Lush spice gardens in Matale with cinnamon, cardamom, and pepper plants growing in terraced hillsides"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Matale</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Spice Garden Capital of Sri Lanka</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Leaf className="w-4 h-4 mr-1" />
              World&apos;s Finest Spices
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <TreePine className="w-4 h-4 mr-1" />
              Ancient Buddhist Heritage
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Quick Facts</a>
          <a href="#getting-there" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Getting There</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Attractions</a>
          <a href="#spice-heritage" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Spice Heritage</a>
          <a href="#stay" className="px-3 py-1 rounded-full font-medium text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition">Where to Stay</a>
        </div>
      </nav>

      {/* Ad Banner - Top */}
      {/* <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Spice Garden Tours & Culinary Experiences]
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Matale: Where Spices Tell Stories</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Located in the heart of Sri Lanka&apos;s Central Province, Matale is renowned as the island&apos;s spice garden
              capital. This aromatic town has been the center of spice cultivation for over 2,000 years, producing the
              world&apos;s finest cinnamon, cardamom, pepper, and countless other spices that have shaped global cuisine.
            </p>
            <p className="text-lg">
              Beyond its fragrant spice gardens, Matale offers rich Buddhist heritage at the historic Aluvihare Rock
              Temple, pristine natural beauty at Sembuwatta Lake, and authentic culinary experiences that showcase the
              true flavors of Sri Lankan cuisine. This is where ancient traditions meet modern gastronomy.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Matale Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Essential Matale Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous For:</strong> World&apos;s Finest Spices
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Province:</strong> Central Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~100,000 residents
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Elevation:</strong> 364m (1,194 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> December to April
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span>
                      <strong>Climate:</strong> Tropical with Cool Evenings
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  {/* <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Gregory_Lake.jpg"
                      alt="Ancient reservoir in Anuradhapura, Sri Lanka"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Wonderful streets among ancient reservoirs</p>
                      <p className="text-sm text-blue-800">
                       Mathale is a historic fortress that showcases stunning Dutch colonial architecture, surrounded by the Indian Ocean waves.
                      </p>
                    </div>
                  </div> */}
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1 full day to explore the fort and its surroundings.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May to September (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner />
          </section>
          {/* How to Get to Mathale */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Mathale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 205km (127 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                      <li>• <strong>Cost:</strong> $60-90 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Mathale. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Recommended)</h4>
                    <p>Take the scenic coastal railway from Colombo Fort Station to Galle Station</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Galle</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li>
                    </ul>

                    {/* <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Galle</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $2-8 USD (depending on the bus type)</li>
                      <li>• <strong>Scenic journey:</strong> Through Coastline road</li>
                    </ul> */}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early morning to beat the heat</li>
                    <li>• Carry water and use sun protection</li>
                    <li>• Wear comfortable clothing and footwear</li>
                    <li>• Plan your itinerary to cover key attractions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Getting to Matale (moved up) */}
        <section className="mb-12 scroll-mt-40" id="getting-there">
          <h2 className="text-3xl font-bold mb-6">Getting to Matale</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Road</CardTitle>
                <CardDescription>Most convenient access to spice gardens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours via A1 highway through Kandy</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">1 hour via A9 road - very scenic route</p>
                </div>
                <div>
                  <strong>From Dambulla:</strong>
                  <p className="text-sm text-muted-foreground">45 minutes via B162 road</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Tip:</strong> Many spice gardens offer pickup services from Kandy
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>By Public Transport</CardTitle>
                <CardDescription>Budget-friendly travel options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Bus from Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours via Kandy, frequent services</p>
                </div>
                <div>
                  <strong>Bus from Kandy:</strong>
                  <p className="text-sm text-muted-foreground">1.5 hours, regular departures every 30 minutes</p>
                </div>
                <div>
                  <strong>Train + Bus:</strong>
                  <p className="text-sm text-muted-foreground">Train to Kandy, then bus to Matale</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Tuk-tuks available for local transportation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-800">Recommended Tour Operator</p>
                <p className="text-amber-700 text-sm mt-1">
                  For a hassle-free and insightful journey to Matale, we recommend booking with <strong>Ceylanka Tours</strong>a trusted local operator offering guided tours, private transfers, and authentic experiences throughout the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12 scroll-mt-40" id="attractions">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Matale</h2>

          {/* Ad Banner - Mid Content */}
          {/* <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
            [Advertisement Space - 300x250 Medium Rectangle - Spice Plantation Tours & Cooking Classes]
          </div> */}

          <div className="space-y-8">

            {/* Riverston Peak (Moved to 1st) */}
            <Card>
              <CardHeader>
                <CardTitle>1. Riverston Peak</CardTitle>
                <CardDescription>Dramatic cliff-top viewpoint with panoramic vistas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Rising 1,348 meters above sea level, Riverston Peak offers one of the most spectacular viewpoints
                      in the Matale region. This dramatic cliff-top location provides breathtaking panoramic views
                      across the Knuckles Mountain Range and the surrounding valleys, especially stunning at sunrise
                      and sunset.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">The Famous Wind Area</h4>
                      <p className="text-sm text-blue-900 dark:text-blue-100">
                        Just before reaching the summit, you will pass through the legendary <strong>Riverston Wind Gap</strong>—a narrow mountain pass famous for its incredibly strong, howling winds and swirling mist. Here, gusts can reach over 60 km/h, making it feel like you are walking through a natural wind tunnel! The sudden drop in temperature, thick fog, and the roar of the wind create an unforgettable, almost otherworldly experience. Hold onto your hats and enjoy the thrill—this is one of the most unique natural phenomena in Sri Lanka.
                      </p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        360-degree panoramic mountain views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise and sunset vistas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cool mountain climate year-round
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Popular camping and hiking destination
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Riverston-Peak.jpg",
                        alt: "Dramatic cliff viewpoint at Riverston Peak",
                        caption: "Panoramic view of the Knuckles Mountain Range",
                        title: "Riverston Peak Vista"
                      },
                      {
                        src: "/Riverston-Peak1.jpg",
                        alt: "The famous Riverston Wind Gap",
                        caption: "Experience the powerful winds at Wind Gap",
                        title: "Riverston Wind Gap"
                      },
                      {
                        src: "/Riverston-Peak2.jpg",
                        alt: "The famous Riverston Wind Gap",
                        caption: "Experience the powerful winds at Wind Gap",
                        title: "Riverston Wind Gap"
                      },
                      {
                        src: "/Riverston-Peak3.jpg",
                        alt: "The famous Riverston Wind Gap",
                        caption: "Experience the powerful winds at Wind Gap",
                        title: "Riverston Wind Gap"
                      },
                      {
                        src: "/Riverston-Peak4.jpg",
                        alt: "The famous Riverston Wind Gap",
                        caption: "Experience the powerful winds at Wind Gap",
                        title: "Riverston Wind Gap"
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Spice Gardens */}
            <Card>
              <CardHeader>
                <CardTitle>2. Matale Spice Gardens</CardTitle>
                <CardDescription>World&apos;s finest spice plantations and authentic experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Matale-Spice-Garden.jpg",
                        alt: "Traditional spice garden in Matale",
                        caption: "Aromatic spices growing in their natural habitat",
                        title: "Matale Spice Gardens"
                      },
                      {
                        src: "/Cinnamon-Processing.jpg",
                        alt: "Traditional cinnamon processing",
                        caption: "Traditional cinnamon peeling techniques",
                        title: "Ceylon Cinnamon Processing"
                      },
                      {
                        src: "/Spice-Display.jpg",
                        alt: "Colorful display of various spices",
                        caption: "Various spices produced in Matale",
                        title: "Spice Varieties"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Matale&apos;s spice gardens are living museums where you can see, smell, and taste the world&apos;s finest
                      spices in their natural habitat. Learn about traditional cultivation methods passed down through
                      generations and discover how these precious spices shaped world history.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        World&apos;s finest Ceylon cinnamon cultivation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Premium cardamom, pepper, and nutmeg
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided tours with spice experts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh spice purchases directly from source
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aluvihare Rock Temple */}
            <Card>
              <CardHeader>
                <CardTitle>3. Aluvihare Rock Temple</CardTitle>
                <CardDescription>Historic temple where Buddhist scriptures were first written</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Dating back to the 3rd century BCE, Aluvihare Rock Temple holds immense significance in Buddhist
                      history. This is where the Tripitaka (Buddhist scriptures) were first committed to writing on palm
                      leaves, preserving Buddha&apos;s teachings for future generations.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Birthplace of written Buddhist scriptures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient cave temples with beautiful murals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation caves and gardens
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic views of Matale valley
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Mathale-Aluvihare.jpg",
                        alt: "Ancient Aluvihare Rock Temple",
                        caption: "Historic Buddhist temple complex",
                        title: "Aluvihare Rock Temple"
                      },
                      {
                        src: "/Aluvihare-Caves.jpg",
                        alt: "Sacred cave temples at Aluvihare",
                        caption: "Ancient cave temples with Buddhist murals",
                        title: "Aluvihare Cave Temples"
                      },
                      {
                        src: "/Aluvihare-Scriptures.jpg",
                        alt: "Ancient Buddhist scriptures",
                        caption: "Historic Buddhist texts and artifacts",
                        title: "Ancient Buddhist Scriptures"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sembuwatta Lake */}
            <Card>
              <CardHeader>
                <CardTitle>4. Sembuwatta Lake</CardTitle>
                <CardDescription>Pristine mountain lake with natural beauty and adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Sembuwatta-Lake.jpg",
                        alt: "Pristine Sembuwatta Lake",
                        caption: "Crystal clear waters surrounded by mountains",
                        title: "Sembuwatta Lake"
                      },
                      {
                        src: "/Sembuwatta-Lake1.jpg",
                        alt: "Adventure activities at Sembuwatta",
                        caption: "Zip-lining and water activities",
                        title: "Adventure at Sembuwatta"
                      },
                      {
                        src: "/Sembuwatta-Sunset.jpg",
                        alt: "Sunset at Sembuwatta Lake",
                        caption: "Beautiful sunset reflections on the lake",
                        title: "Sembuwatta Sunset"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Created by the Kotmale Dam, Sembuwatta Lake is a hidden gem nestled in the mountains near Matale.
                      This pristine lake offers crystal-clear waters perfect for swimming, surrounded by lush forests
                      and dramatic mountain scenery.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear mountain lake waters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural swimming and picnic areas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Zip-lining and adventure activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning mountain and forest views
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sera Ella Waterfall */}
            <Card>
              <CardHeader>
                <CardTitle>4. Sera Ella Waterfall</CardTitle>
                <CardDescription>Hidden cascade through lush tropical forest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Tucked away in the dense forests near Matale, Sera Ella is a magnificent waterfall that cascades
                      down rocky cliffs into crystal-clear pools below. This hidden gem offers a refreshing escape
                      into nature, where the sound of rushing water mingles with the calls of tropical birds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multi-tiered waterfall with natural pools
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for nature photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hiking trail through tropical forest
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural swimming opportunities
                      </li>
                    </ul>
                  </div>

                  <ImageCarousel
                    images={[
                      {
                        src: "/Sera-Ella.jpg",
                        alt: "Dramatic cliff viewpoint at Riverston Peak",
                        caption: "Panoramic view of the Knuckles Mountain Range",
                        title: "Riverston Peak Vista"
                      },
                      {
                        src: "/Riverston-Wind-Gap.jpg",
                        alt: "The famous Riverston Wind Gap",
                        caption: "Experience the powerful winds at Wind Gap",
                        title: "Riverston Wind Gap"
                      },
                      {
                        src: "/Riverston-Sunrise.jpg",
                        alt: "Sunrise view from Riverston Peak",
                        caption: "Misty sunrise over the valleys",
                        title: "Sunrise at Riverston"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Nalanda Gedige */}
            <Card>
              <CardHeader>
                <CardTitle>5. Nalanda Gedige</CardTitle>
                <CardDescription>Ancient stone temple with unique architectural fusion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Nalanda-Gedige.jpeg",
                        alt: "Ancient Nalanda Gedige temple",
                        caption: "Unique Buddhist-Hindu architectural fusion",
                        title: "Nalanda Gedige Temple"
                      },
                      {
                        src: "/Nalanda-Carvings.jpg",
                        alt: "Intricate stone carvings at Nalanda",
                        caption: "Ancient stone craftsmanship",
                        title: "Stone Carvings at Nalanda"
                      },
                      {
                        src: "/Nalanda-Architecture.jpg",
                        alt: "Architectural details of Nalanda Gedige",
                        caption: "Sophisticated ancient engineering",
                        title: "Architectural Details"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Dating from the 8th to 10th centuries, Nalanda Gedige is a remarkable archaeological site that
                      showcases a unique blend of Buddhist and Hindu architectural styles. This ancient stone temple,
                      built entirely without mortar, demonstrates the sophisticated engineering skills of ancient
                      Sri Lankan craftsmen.
                    </p>
                    <div className="p-3 mb-4 rounded border-l-4 border-blue-500 bg-blue-100 dark:bg-blue-900">
                      <span className="font-semibold text-blue-900 dark:text-blue-100">Note:</span> <span className="text-blue-900 dark:text-blue-100">Nalanda Gedige is considered by many to be the geographical center of Sri Lanka, making it a symbolic heart of the island as well as an archaeological treasure.</span>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        8th-10th century stone architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Buddhist-Hindu architectural fusion
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Built without mortar - ancient engineering
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Intricate stone carvings and sculptures
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>



            {/* Pitawala Pathana */}
            <Card>
              <CardHeader>
                <CardTitle>6. Pitawala Pathana</CardTitle>
                <CardDescription>Mini World&apos;s End with rolling grasslands</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Pitawala-pathana.jpg",
                        alt: "Mini World's End at Pitawala Pathana",
                        caption: "Dramatic cliffs and rolling grasslands",
                        title: "Pitawala Pathana"
                      },
                      {
                        src: "/Pitawala-Sunrise.jpg",
                        alt: "Sunrise at Pitawala Pathana",
                        caption: "Golden sunrise over misty valleys",
                        title: "Pitawala Sunrise"
                      },
                      {
                        src: "/Pitawala-Grasslands.jpg",
                        alt: "Rolling grasslands of Pitawala",
                        caption: "Pristine montane grasslands",
                        title: "Pitawala Grasslands"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Often called the &apos;Mini World&apos;s End&apos;, Pitawala Pathana is a stunning plateau featuring rolling
                      grasslands that suddenly drop off into dramatic cliff faces. This lesser-known gem offers
                      incredible views without the crowds of its more famous counterpart, making it perfect for
                      peaceful contemplation and photography.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Dramatic cliff-edge viewpoint
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rolling montane grasslands
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded than World&apos;s End
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for sunrise photography
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Knuckles Mountain Range */}
            <Card>
              <CardHeader>
                <CardTitle>7. Knuckles Mountain Range</CardTitle>
                <CardDescription>UNESCO World Heritage biodiversity hotspot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Knuckles Mountain Range, easily accessible from Matale, is a UNESCO World Heritage site
                      renowned for its incredible biodiversity and unique ecosystems. This mountain range offers
                      some of the best hiking in Sri Lanka, with trails ranging from easy walks to challenging
                      multi-day treks through pristine cloud forests.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        UNESCO World Heritage site
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Incredible biodiversity hotspot
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple hiking trails for all levels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Endemic flora and fauna species
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Knuckles-Range.jpg",
                        alt: "Knuckles Mountain Range panorama",
                        caption: "UNESCO World Heritage mountain landscape",
                        title: "Knuckles Mountain Range"
                      },
                      {
                        src: "/Knuckles-Forest.jpg",
                        alt: "Cloud forests of Knuckles",
                        caption: "Pristine cloud forest ecosystem",
                        title: "Knuckles Cloud Forest"
                      },
                      {
                        src: "/Knuckles-Trail.jpg",
                        alt: "Hiking trail in Knuckles",
                        caption: "Scenic hiking trails through the mountains",
                        title: "Knuckles Hiking Trail"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
            {/* ...existing code for Riverston Peak, Spice Gardens, Aluvihare Rock Temple, Sembuwatta Lake... */}

            {/* Kalabokka View Point */}
            <Card>
              <CardHeader>
                <CardTitle>Kalabokka View Point</CardTitle>
                <CardDescription>Stunning panoramic viewpoint over the Knuckles and central highlands</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Kalabokka-Viewpoint.jpg",
                        alt: "Panoramic view from Kalabokka",
                        caption: "360-degree views of mountains and valleys",
                        title: "Kalabokka View Point"
                      },
                      {
                        src: "/Kalabokka-Sunrise.jpg",
                        alt: "Sunrise at Kalabokka",
                        caption: "Golden sunrise over tea estates",
                        title: "Kalabokka Sunrise"
                      },
                      {
                        src: "/Kalabokka-Tea.jpg",
                        alt: "Tea plantations near Kalabokka",
                        caption: "Rolling tea estates and mountain views",
                        title: "Kalabokka Tea Estates"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kalabokka View Point is one of Matale&apos;s best-kept secrets, offering breathtaking 360-degree views of the Knuckles Mountain Range, lush tea estates, and distant valleys. The viewpoint is especially magical at sunrise and sunset, when the mist rolls over the hills and the landscape glows with golden light.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic vistas of Knuckles and central highlands
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for sunrise, sunset, and photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Surrounded by tea plantations and rural villages
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful, less crowded than other viewpoints
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Spice Heritage */}
        <section className="mb-12 scroll-mt-20" id="spice-heritage">
          <h2 className="text-3xl font-bold mb-6">The Spice Heritage of Matale</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Traditional spice processing in Matale showing cinnamon peeling, cardamom drying, and pepper harvesting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Traditional spice processing methods preserved for over 2,000 years
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For over two millennia, Matale has been the heart of Sri Lanka&apos;s spice trade. The region&apos;s unique
                climate and soil conditions create perfect growing environments for the world&apos;s most prized spices,
                particularly Ceylon cinnamon, which is considered the finest variety globally.
              </p>
              <p>
                Ancient trade routes brought Arab, Portuguese, Dutch, and British traders to Matale, all seeking these
                precious spices that were once worth more than gold. Today, traditional cultivation and processing
                methods are still used, ensuring authentic flavors and premium quality.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Matale&apos;s Famous Spices:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Ceylon Cinnamon - World&apos;s finest variety</li>
                  <li>• Cardamom - Premium green and white varieties</li>
                  <li>• Black Pepper - The &quot;King of Spices&quot;</li>
                  <li>• Nutmeg, Cloves, and Vanilla</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Culinary Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Culinary Experiences & Spice Tours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Spice Garden Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guided plantation walks</li>
                  <li>• Learn traditional cultivation methods</li>
                  <li>• See spice processing demonstrations</li>
                  <li>• Taste fresh spices and herbs</li>
                  <li>• Purchase authentic spices directly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Cooking Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Traditional Sri Lankan curry cooking</li>
                  <li>• Learn to use fresh spices properly</li>
                  <li>• Authentic family recipes</li>
                  <li>• Hands-on cooking experiences</li>
                  <li>• Take recipes home with you</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Spice Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Watch cinnamon bark peeling</li>
                  <li>• See cardamom pod processing</li>
                  <li>• Learn about spice grading</li>
                  <li>• Traditional drying methods</li>
                  <li>• Quality control processes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner - Mid Content 2 */}
        {/* <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Authentic Spice Products & Cooking Equipment]
        </div> */}

        {/* Where to Stay */}
        {/* <section className="mb-12 scroll-mt-20" id="stay">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Matale</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Spice Garden Resorts</CardTitle>
                <CardDescription>$40-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Surrounded by spice plantations</li>
                  <li>• Authentic plantation experiences</li>
                  <li>• Guided spice tours included</li>
                  <li>• Traditional Sri Lankan cuisine</li>
                  <li>• Peaceful natural settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">City Hotels</CardTitle>
                <CardDescription>$25-60 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Convenient town center locations</li>
                  <li>• Modern amenities and WiFi</li>
                  <li>• Easy access to attractions</li>
                  <li>• Restaurant and room service</li>
                  <li>• Tour booking assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Eco-Lodges</CardTitle>
                <CardDescription>$30-70 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable tourism practices</li>
                  <li>• Natural forest settings</li>
                  <li>• Organic farm-to-table dining</li>
                  <li>• Nature walks and bird watching</li>
                  <li>• Cultural immersion experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Local Cuisine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Cuisine & Specialties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Spice-Infused Dishes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Must-Try Specialties:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Matale-style curry with fresh spices</li>
                      <li>• Traditional spice-rubbed grilled meats</li>
                      <li>• Fresh coconut sambol with spices</li>
                      <li>• Spiced rice dishes and biryanis</li>
                      <li>• Traditional spice teas and drinks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dining Experiences:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spice garden restaurants</li>
                      <li>• Traditional village home cooking</li>
                      <li>• Local market food stalls</li>
                      <li>• Cooking class experiences</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spice Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Traditional spice market in Matale with colorful displays of cinnamon, cardamom, and other spices"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Take home the authentic flavors of Matale&apos;s world-famous spices.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Premium Ceylon cinnamon sticks</li>
                  <li>• Fresh cardamom pods and powder</li>
                  <li>• Whole black peppercorns</li>
                  <li>• Spice blends and curry powders</li>
                  <li>• Essential oils and extracts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Temple Visits:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Explore Aluvihare Rock Temple and learn about Buddhist history and meditation practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Village Experiences:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Visit traditional villages, meet local families, and learn about rural Sri Lankan life.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Craft Workshops:</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn traditional crafts like pottery, weaving, and wood carving from local artisans.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nature & Adventure</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Adventure activities at Sembuwatta Lake including zip-lining and nature walks through spice forests"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Swimming and picnicking at Sembuwatta Lake</li>
                  <li>• Zip-lining and adventure sports</li>
                  <li>• Nature walks through spice forests</li>
                  <li>• Bird watching and wildlife spotting</li>
                  <li>• Photography tours of plantations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Mathale adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pattipola */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Pattipola.webp"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Pattipola</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Known for its scenic beauty and cool climate, Pattipola is home to the highest railway station in Sri Lanka.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pattipola" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Pattipola.webp"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Dunsinane Falls</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dunsinane Falls is a stunning waterfall located near Nuwara Eliya.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pattipola" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Nine-arch-ella.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  1 hours 50 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Ella</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Famous for the Nine Arch Bridge, Little Adam&apos;s Peak, and stunning train journeys through tea country.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  56 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ella-town" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Bandarawela */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Bandarawela.jpeg"
                  alt="Bandarawela town with rolling hills and tea plantations in the background"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Bandarawela</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Charming hill station with cooler climate, beautiful views, and the historic Bandarawela Hotel.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  45 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bandarawela" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Haputhale */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Haputhale.jpeg"
                  alt="Haputhale railway station and surrounding tea plantation landscapes"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  1 hour
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Haputhale</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Small town famous for Lipton&apos;s Seat viewpoint and Adisham Monastery with panoramic views.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  30 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/haputhale" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Badulla */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Badulla.jpeg"
                  alt="Badulla town nestled in mountains with ancient temples and railway heritage"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                  2.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Badulla</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  End point of the famous hill country train journey with ancient temples and beautiful waterfalls.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  55 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/badulla" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Kandy */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Kandy.jpeg"
                  alt="Temple of the Tooth in Kandy with traditional Sri Lankan architecture"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  3 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kandy</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Cultural capital with the Temple of the Tooth, beautiful lake, and traditional performances.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  75 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kandy" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Adam&apos;s Peak */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Adams-peak.jpeg"
                  alt="Adam&apos;s Peak mountain with pilgrims climbing the sacred summit at sunrise"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded">
                  4 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Adam&apos;s Peak</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sacred mountain pilgrimage site famous for sunrise views and the sacred footprint at the summit.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  90 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/adams-peak" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Visit spice gardens early morning for best experiences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Bring cash for spice purchases - better prices than cards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Try cooking classes to learn authentic spice usage</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect temple dress codes and photography rules</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Ask for quality certificates when buying expensive spices</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Some spice gardens may have aggressive sales tactics</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Compare prices at multiple locations before buying</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Check customs regulations for spice imports to your country</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Sembuwatta Lake can be crowded on weekends</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Carry insect repellent for plantation visits</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Recommendations */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-amber-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Aromatic Matale Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Matale offers a unique sensory journey through the world of spices that have shaped global cuisine for
                millennia. From the moment you arrive, you&apos;ll be enveloped in the intoxicating aromas of cinnamon,
                cardamom, and pepper that have made this region famous worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Beyond the spice gardens, discover ancient Buddhist heritage, pristine natural beauty, and authentic
                culinary experiences that showcase the true flavors of Sri Lankan cuisine. This is where tradition meets
                taste in the most delicious way possible.
              </p>
              <p className="text-muted-foreground font-medium">
                Come and discover why Matale is the aromatic heart of Sri Lanka! 🌿🍛
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner - Bottom */}
        {/* <div className="my-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
          [Advertisement Space - 728x90 Leaderboard - Premium Spice Products & Culinary Tours]
        </div> */}
      </div>
    </main>
  )
}
