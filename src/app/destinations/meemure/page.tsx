"use client"

import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Car, TreePine, Home, Utensils, Bed, Compass, Cloud, XCircle, Sun, CloudRain, Battery, Flashlight, Shirt, Footprints } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"



export default function MeemureTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Meemure.jpeg"
          alt="Scenic view of Meemure village nestled in the lush Knuckles Mountains of Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meemure Village</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Experience Sri Lanka&apos;s Last Traditional Mountain Village</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Knuckles Mountains, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Mountain className="w-4 h-4 mr-1" />
              1,100m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Users className="w-4 h-4 mr-1" />
              Living Heritage Village
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Discover Meemure Village</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Welcome to Meemure, a magical mountain village tucked away in the Knuckles Range where time seems to have stood still! Picture this: buffalo still plow the rice fields, villagers weave bamboo baskets just like their great-great-grandparents did, and traditional wooden houses nestle among misty mountain peaks. It&apos;s like stepping into a living museum, except this is real life for the friendly folks who call Meemure home.
            </p>
            <p className="text-lg mb-4">
              Here&apos;s what makes this place special - the village has been around for over 1,000 years! The current residents are descendants of King Rajasinghe II&apos;s soldiers who were sent here in the 1600s to watch for Portuguese invaders from the coast. When those soldiers settled down in this remote valley, they created something amazing: a community that kept ancient Sri Lankan traditions alive while the rest of the world changed around them.
            </p>
            <p className="text-lg mb-4">
              Getting here is part of the adventure - you&apos;ll drive through stunning mountain scenery for about 3 hours from Kandy. The road&apos;s gotten better lately (regular cars can make it in dry weather!), but a 4WD is more comfortable. While basic electricity and limited mobile coverage recently arrived, don&apos;t expect WiFi or your usual modern comforts. That&apos;s the beauty of it - you&apos;ll actually unplug and connect with nature and real people!
            </p>
            <p className="text-lg">
              What can you do here? Join villagers in their daily routines, learn to cook traditional meals over wood fires, help harvest rice, or just relax by crystal-clear mountain streams. Also don't forget about water activities in Meemure. Sleep in cozy homestays where your hosts treat you like family, and fall asleep under a sky absolutely packed with stars. This isn&apos;t just tourism - it&apos;s an authentic cultural exchange you&apos;ll remember forever.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Quick Heads-Up!</h4>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>Road Conditions:</strong> A 4WD makes the journey comfier, especially after rain. Regular cars work fine in dry weather though!
                </p>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>Modern Stuff:</strong> Basic electricity and patchy mobile coverage exist, but forget about WiFi. Perfect digital detox time!
                </p>
                <p className="text-sm text-amber-700">
                  Book your homestay early through guides in Hunnasgiriya village - spots fill up fast during peak season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Did You Know */}
        <section className="mb-12">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Star className="w-5 h-5 text-purple-600" />
                Did You Know?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-900">The "Honey Village"</p>
                      <p className="text-sm text-muted-foreground">Meemure means "place of honey" in old Sinhalese! Villagers still collect wild honey from cliff faces using traditional rope techniques.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-900">Unique Dialect</p>
                      <p className="text-sm text-muted-foreground">The locals speak a special dialect of Sinhala that&apos;s different from the rest of Sri Lanka - preserved from centuries of isolation!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-900">No Shops Here</p>
                      <p className="text-sm text-muted-foreground">There are no stores in the village! Bring your own snacks and cash - this is as off-the-grid as it gets in Sri Lanka.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-900">Living Heritage</p>
                      <p className="text-sm text-muted-foreground">About 400 people live here, maintaining traditions that vanished elsewhere in Sri Lanka hundreds of years ago!</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Knuckles Mountains, Kandy District
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 1,100 meters above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> About 400-420 people
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Status:</strong> Protected Conservation Area
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Access:</strong> 4WD recommended
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>From Kandy:</strong> 78km, 2.5-3 hours
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting to Meemure from Kandy */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <MapPin className="w-5 h-5" />
                How to Get There
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">By Private Vehicle</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 78km from Kandy</li>
                    <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                    <li>• <strong>Vehicle:</strong> 4WD recommended for comfort</li>
                    <li>• <strong>Route:</strong> Kandy → Hunnasgiriya → Meemure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Via Public Transport</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bus/van to Hunnasgiriya from Kandy</li>
                    <li>• Hire local vehicle and driver in Hunnasgiriya</li>
                    <li>• Total journey: 4-5 hours</li>
                    <li>• More economical option</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Pro Tip:</strong> Local drivers from Hunnasgiriya know these mountain roads like the back of their hand. They&apos;re worth hiring, especially if it&apos;s been raining!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Things to Do in Meemure */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Things to Do in Meemure</h2>
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>Traditional Village Experience</CardTitle>
                <CardDescription>Experience authentic Sinhalese mountain culture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Stay with local families in traditional mud-and-wattle homes and participate in daily village activities. Experience authentic farming, crafts, cooking, and mountain exploration that showcase centuries-old traditions.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Buffalo plowing and traditional rice cultivation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bamboo basket weaving and wooden tool making
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Clay pot cooking and traditional meals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Waterfall hikes and meditation cave visits
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Homestay with village families
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/meemure-village.jpg",
                        alt: "Traditional mud houses in Meemure village",
                        caption: "Village Life",
                        title: "Meemure Village"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Lakegala Rock Hiking</CardTitle>
                <CardDescription>Challenge yourself with this iconic mountain trek</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Meemure.jpeg",
                        alt: "Lakegala Rock rising 1,310 meters above Meemure village",
                        caption: "Lakegala Rock",
                        title: "Lakegala Mountain"
                      },
                      {
                        src: "/Lakegala-Hike1.jpg",
                        alt: "Hikers ascending the steep trail to Lakegala summit",
                        caption: "Hiking Trail",
                        title: "Lakegala Hike"
                      },
                      {
                        src: "/Lakegala-Hike.jpg",
                        alt: "Hikers ascending the steep trail to Lakegala summit",
                        caption: "Hiking Trail",
                        title: "Lakegala Hike"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The prominent 1,310-meter Lakegala rock formation dominates the skyline above Meemure. This challenging hike requires a local guide and takes 3-4 hours to reach the summit, rewarding hikers with panoramic views of the Knuckles Range and surrounding valleys.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Local guide required for safety
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best attempted during dry season
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning 360-degree summit views
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Water Activities</CardTitle>
                <CardDescription>Explore pristine mountain streams and waterfalls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/meemure-river.jpg",
                        alt: "Crystal-clear river flowing through Meemure",
                        caption: "Meemure River",
                        title: "Mountain Streams"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The area features several waterfalls and streams with crystal-clear mountain water. Take refreshing dips in natural pools, enjoy picnics by the riverside, or simply relax to the sound of flowing water in this pristine environment.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple waterfalls within walking distance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural swimming pools
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided nature walks along streams
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nature & Wildlife Exploration</CardTitle>
                <CardDescription>Discover the rich biodiversity of the Knuckles Range</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The surrounding forests are home to diverse flora and fauna, including endemic birds and butterflies. Guided nature walks reveal medicinal plants, observe wildlife in their natural habitat, and learn about the region&apos;s unique ecosystem.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Endemic bird species watching
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Medicinal plant identification
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Forest trail exploration
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/knuckles-forest.jpg",
                        alt: "Dense forest of the Knuckles Mountain Range",
                        caption: "Knuckles Forest",
                        title: "Mountain Biodiversity"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photography Tours</CardTitle>
                <CardDescription>Capture stunning mountain landscapes and village scenes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/meemure-landscape.jpg",
                        alt: "Panoramic view of Meemure valley and mountains",
                        caption: "Meemure Landscape",
                        title: "Mountain Photography"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Meemure offers exceptional photography opportunities year-round. From misty mountain mornings and terraced rice fields to traditional village life and dramatic rock formations, every corner presents a new composition for photography enthusiasts.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sunrise/sunset over Lakegala
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional village documentation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Landscape and nature photography
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wild Honey Harvesting</CardTitle>
                <CardDescription>Witness traditional honey collection from cliff faces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Local villagers practice the ancient art of collecting wild honey from giant honeybee hives on cliff faces. During the season, you may observe (from a safe distance) this fascinating and dangerous traditional practice that has been passed down through generations.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Seasonal activity (March-April)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Pure wild honey available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn traditional techniques
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/honey-harvesting.jpg",
                        alt: "Traditional honey harvesting in Meemure",
                        caption: "Honey Harvesting",
                        title: "Wild Honey Collection"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Do's and Don'ts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Guidelines for Visiting</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  Do&apos;s - Respectful Visiting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Respect local customs and dress modestly when visiting the village temple</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Ask permission before photographing people or entering their homes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Participate in village activities and learn from local traditions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Support the local economy by purchasing handmade crafts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Follow leave-no-trace principles to preserve the pristine environment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <XCircle className="w-5 h-5" />
                  Don&apos;ts - What to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t bring plastic items - the village has no waste management system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t expect consistent electricity, internet, or hot water</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t disturb wildlife or pick plants in the protected conservation area</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t rush - village life moves at a peaceful, natural pace</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Don&apos;t ignore safety advice from local guides on mountain trails</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Meemure</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Sun className="w-5 h-5" />
                  Dry Season (Dec-Mar)
                </CardTitle>
                <Badge className="bg-green-100 text-green-700">Best Time</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Clear roads and easy access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Perfect weather for trekking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Comfortable temperatures (18-25°C)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Harvest season activities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <Cloud className="w-5 h-5" />
                  Shoulder Season (Apr-May, Oct-Nov)
                </CardTitle>
                <Badge className="bg-yellow-100 text-yellow-700">Good Time</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span>Lush green landscapes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span>Fewer tourists</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span>Some road challenges</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span>Occasional rainfall</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <CloudRain className="w-5 h-5" />
                  Monsoon (Jun-Sep)
                </CardTitle>
                <Badge className="bg-red-100 text-red-700">Avoid</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Roads often impassable</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Heavy rainfall and landslides</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Village may be cut off</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Limited outdoor activities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Else to See Nearby */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="text-blue-800">Hunnasgiriya Village</CardTitle>
                <CardDescription>Gateway to Meemure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The last village with basic amenities before reaching Meemure. Vehicle rentals and local guides available.
                </p>
                <div className="flex justify-between text-xs text-blue-600">
                  <span><strong>Distance:</strong> 15km</span>
                  <span><strong>Time:</strong> 1 hour drive</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader>
                <CardTitle className="text-green-800">Knuckles Conservation Forest</CardTitle>
                <CardDescription>UNESCO World Heritage Site</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Pristine mountain ecosystem with endemic flora and fauna. Guided nature walks and research programs available.
                </p>
                <div className="flex justify-between text-xs text-green-600">
                  <span><strong>Distance:</strong> 5km</span>
                  <span><strong>Activity:</strong> Nature walks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/30">
              <CardHeader>
                <CardTitle className="text-purple-800">Sera Ella Waterfall</CardTitle>
                <CardDescription>Hidden Mountain Cascade</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Beautiful waterfall accessible through village trails. Perfect for photography and refreshing dips.
                </p>
                <div className="flex justify-between text-xs text-purple-600">
                  <span><strong>Distance:</strong> 3km hike</span>
                  <span><strong>Difficulty:</strong> Moderate</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/30">
              <CardHeader>
                <CardTitle className="text-orange-800">Kandy City</CardTitle>
                <CardDescription>Cultural Capital</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Historic city with Temple of the Tooth, colonial architecture, and cultural attractions. Perfect base for Meemure trips.
                </p>
                <div className="flex justify-between text-xs text-orange-600">
                  <span><strong>Distance:</strong> 45km</span>
                  <span><strong>Time:</strong> 2-3 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader>
                <CardTitle className="text-red-800">Mahiyanganaya</CardTitle>
                <CardDescription>Ancient Buddhist Site</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Historic town with Mahiyangana Raja Maha Vihara temple, one of the earliest Buddhist sites in Sri Lanka.
                </p>
                <div className="flex justify-between text-xs text-red-600">
                  <span><strong>Distance:</strong> 35km</span>
                  <span><strong>Significance:</strong> Pilgrimage site</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200 bg-teal-50/30">
              <CardHeader>
                <CardTitle className="text-teal-800">Dambulla Cave Temple</CardTitle>
                <CardDescription>Ancient Rock Temple</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Magnificent rock temple complex with stunning Buddha statues and ancient paintings. UNESCO World Heritage Site.
                </p>
                <div className="flex justify-between text-xs text-teal-600">
                  <span><strong>Distance:</strong> 60km</span>
                  <span><strong>Status:</strong> UNESCO Site</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Experience Authentic Sri Lankan Mountain Life</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
                Meemure village offers a rare opportunity to step back in time and experience authentic Sinhalese mountain
                culture that has remained unchanged for centuries. This hidden gem in the Knuckles Mountains provides not
                just breathtaking natural beauty, but a genuine connection with traditional Sri Lankan life.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Whether you&apos;re seeking adventure, cultural immersion, or simply a break from modern life, Meemure delivers
                an unforgettable experience that will leave you with lasting memories and a deeper appreciation for
                Sri Lanka&apos;s rich heritage.
              </p>
              <Badge className="bg-green-600 hover:bg-green-700 text-white border-0 px-6 py-2 text-lg">
                Plan Your Meemure Adventure Today
              </Badge>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  )
}
