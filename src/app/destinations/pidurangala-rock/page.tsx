"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Users, Mountain, Sunrise } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Button } from "@/components/ui/button"

export default function PidurangalaRockGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Pidurangala.jpeg"
          alt="Stunning sunrise view of Sigiriya Rock from Pidurangala Rock summit with golden sky"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pidurangala Rock</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">The Perfect Viewpoint for Sigiriya&apos;s Majesty</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Matale District, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Sunrise className="w-4 h-4 mr-1" />
              Best Sunrise Views
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Mountain className="w-4 h-4 mr-1" />
              Easier Climb than Sigiriya
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Pidurangala: Sigiriya&apos;s Best Friend
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Want the perfect photo of Sigiriya Rock? Pidurangala Rock is your answer! Located just 1km from the famous
              Sigiriya, this ancient Buddhist monastery site offers the most spectacular views of the Lion Rock,
              especially during sunrise and sunset.
            </p>
            <p className="text-lg">
              While Sigiriya gets all the fame, Pidurangala offers a more adventurous and rewarding experience. The
              climb is shorter, less crowded, and ends with arguably the best views in all of Sri Lanka!
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts About Pidurangala Rock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Height:</strong> nearly 200 meters (656 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Climb Time:</strong> 30 to 45 minutes one-way (Depends on fitness level)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Difficulty:</strong> Moderate
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Sigiriya:</strong>  2.5 km north
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sunrise className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> Sunrise (5:30-6:30 AM)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Entry Fee:</strong> 500 LKR (~$1.50)
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Ancient Buddhist Heritage</h2>
          
          {/* Historical Overview */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pidurangala Rock has been a sacred Buddhist site for over 2,000 years. When King Kashyapa built his
              palace on Sigiriya in the 5th century CE, he relocated the monks who were living there to Pidurangala,
              transforming it into an important monastery complex that would serve as a spiritual sanctuary for centuries.
            </p>
          </div>

          {/* Three Main Features in Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Ancient Monastery Complex */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-amber-500" />
                  Ancient Monastery Complex
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Your journey begins at the ancient monastery complex at the base of the rock, where Buddhist monks
                  lived and practiced for centuries.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ruins of ancient meditation halls where monks practiced mindfulness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Living quarters and prayer halls carved into rock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Peaceful atmosphere perfect for reflection and photography</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Stone Inscriptions */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-500" />
                  Ancient Stone Inscriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The monastery features stone inscriptions in ancient Brahmi script, offering a glimpse into
                  Sri Lanka&apos;s early Buddhist history.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ancient Brahmi script dating back over 2,000 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Historical records of monastery donations and royal patronage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Evidence of the site&apos;s importance in ancient times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Reclining Buddha */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  The Reclining Buddha
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Halfway up the climb, you&apos;ll encounter a massive reclining Buddha statue carved directly
                  into the rock face - a masterpiece of ancient craftsmanship.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Over 15 meters long, representing Buddha&apos;s Parinirvana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Uniquely positioned halfway up the rock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Perfect rest stop and pilgrimage site during your climb</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Image Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/Pidurangala-Reclining-Buddha.jpg"
                alt="Ancient Buddhist monastery ruins at Pidurangala Rock with stone structures and meditation areas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The magnificent 15-meter reclining Buddha at Pidurangala Rock
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Why Pidurangala is Special
                </h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                  Today, Pidurangala is not just a historical Buddhist site but also offers the best vantage point
                  to appreciate the engineering marvel that is Sigiriya Rock Fortress from a distance.
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  The combination of ancient Buddhist heritage, stunning natural beauty, and spectacular views
                  of Sigiriya makes this one of Sri Lanka&apos;s most rewarding destinations for both spiritual
                  seekers and adventure enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <div className="space-y-8">
    
            <Card>
              <CardHeader>
                <CardTitle>The Summit Views</CardTitle>
                <CardDescription>Breathtaking 360-degree panoramas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      { 
                        src: "/Pidurangala-View.jpg", 
                        alt: "Breathtaking view of Sigiriya Rock Fortress from Pidurangala summit with lush greenery"
                      },
                      { 
                        src: "/Pidurangala-View1.jpg", 
                        alt: "Panoramic view of dense jungle and ancient irrigation systems from Pidurangala summit"
                      },
                    ]}
                  />
                  
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The summit offers the most spectacular views in Sri Lanka&apos;s Cultural Triangle. After your
                      climb, you&apos;ll be rewarded with breathtaking panoramas that make every step worthwhile:
                    </p>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Perfect Frontal View of Sigiriya Rock Fortress</strong>
                          <p className="text-sm mt-1">The iconic Lion Rock rises majestically before you, offering the best photographic angle of this UNESCO World Heritage Site. You can see the entire fortress structure, including the gardens, terraces, and summit palace ruins.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>360-Degree Panoramic Views</strong>
                          <p className="text-sm mt-1">Endless green jungle canopy stretches in every direction, dotted with ancient rock formations and distant mountain ranges. On clear days, you can see for miles across the Central Province.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Spectacular Sunrise and Sunset Photography</strong>
                          <p className="text-sm mt-1">Watch the sky transform into brilliant oranges, pinks, and purples as the sun rises or sets behind Sigiriya. The golden hour light creates magical silhouettes and dramatic shadows perfect for photography.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Ancient Irrigation Systems and Traditional Villages</strong>
                          <p className="text-sm mt-1">Spot the ancient man-made reservoirs (tanks) that still irrigate rice fields below. You&apos;ll see traditional Sri Lankan villages with their terracotta-roofed houses nestled among coconut groves and paddy fields.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Distant Mountain Ranges</strong>
                          <p className="text-sm mt-1">On clear mornings, you can see the Knuckles Mountain Range and the Central Highlands in the distance, creating stunning layered silhouettes against the horizon.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Wildlife Spotting from Above</strong>
                          <p className="text-sm mt-1">Keep your eyes open for birds of prey soaring below you, and if you&apos;re lucky, you might spot wild elephants moving through the forest canopy in the early morning hours.</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Pro Tip:</strong> The summit gets crowded after sunrise, so aim to arrive by 6:00 AM to secure the best spot for photos. Bring a wide-angle lens to capture the full panorama of Sigiriya and the surrounding landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Don&apos;ts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - For the Best Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Start very early:</strong> Begin at 5:00 AM for sunrise views
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Wear good shoes:</strong> The final scramble requires grip
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect the Buddha statue:</strong> Remove shoes and hats
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring water and snacks:</strong> Stay hydrated and energized
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON&apos;Ts - Avoid These Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t climb in flip-flops:</strong> The rocks can be slippery
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t go without a guide:</strong> Easy to get lost in the dark
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t climb alone:</strong> Always go with others for safety
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t forget insect repellent:</strong> Mosquitoes are active at dawn
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Photography Tips for Epic Shots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Photo Opportunities:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sunrise over Sigiriya (golden hour magic)</li>
                    <li>• Silhouette shots with Sigiriya backdrop</li>
                    <li>• 360-degree panoramic views</li>
                    <li>• The reclining Buddha statue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Camera Settings Tips:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use tripod for sunrise long exposures</li>
                    <li>• Shoot in RAW for better editing flexibility</li>
                    <li>• Bring extra batteries (cold morning air drains them)</li>
                    <li>• Use graduated ND filters for balanced exposure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Archaeological Wonders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="nearby-archaeological-wonders">Nearby Archaeological Wonders</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Discover more ancient treasures within Sri Lanka's Cultural Triangle
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/SigiriyaDrone.jpg"
                  alt="Sigiriya Rock Fortress rising majestically from the jungle landscape"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  2 km
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Sigiriya Rock Fortress</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The iconic Lion Rock fortress showcasing 5th-century royal architecture and ancient frescoes.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  2 km from Pidurangala
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/sigiriya-rock-fortress" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/dambulla-cave-temple.jpg"
                  alt="Dambulla Cave Temple showing golden Buddha statue and ancient rock-cut monastery"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  30 km
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Dambulla Cave Temple</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A UNESCO World Heritage site featuring five rock-cut Buddhist caves with over 150 Buddha statues.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  30 km from Pidurangala
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/dambulla-cave-temple" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Polonnaruwa.jpeg"
                  alt="Ancient capital Polonnaruwa showing Buddhist monuments and medieval architecture"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  60 km
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Polonnaruwa</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sri Lanka's second ancient capital featuring magnificent Gal Vihara rock sculptures and medieval palaces.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  60 km from Pidurangala
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/polonnaruwa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Day Trip Suggestions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Suggested Day Trip Combinations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">🏛️ Cultural Triangle Classic</h4>
                <p className="text-sm text-muted-foreground">Pidurangala sunrise → Sigiriya → Dambulla (Full day)</p>
                <p className="text-xs text-muted-foreground mt-1">Start with an unforgettable sunrise, then explore the cultural wonders.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">⛩️ Ancient Capitals Tour</h4>
                <p className="text-sm text-muted-foreground">Pidurangala → Polonnaruwa → Dambulla (2 days)</p>
                <p className="text-xs text-muted-foreground mt-1">Combine multiple ancient cities for a comprehensive historical journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
            <CardHeader>
              <CardTitle className="text-orange-800 dark:text-orange-400">Your Pidurangala Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-neutral-800 dark:text-neutral-200">
                Pidurangala Rock offers one of the most rewarding experiences in Sri Lanka. The combination of ancient
                Buddhist heritage, moderate adventure, and absolutely stunning views makes it a must-visit destination.
              </p>
              <p className="text-muted-foreground font-medium text-neutral-800 dark:text-neutral-200">
                Wake up early, embrace the adventure, and prepare to witness one of the most beautiful sunrises of your
                life! 🌅🏔️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
