"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import InsuranceBanner from "@/components/insurance-banner"
import { Button } from "@/components/ui/button"
import { featureFlags } from "@/lib/feature-flags"

export default function DambullaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/dambulla-cave-temple.jpg"
          alt="Magnificent Dambulla Cave Temple complex showing golden Buddha statues and ancient cave paintings in atmospheric lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Dambulla Cave Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Largest Cave Temple Complex</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Matale District, Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Palette className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              1st Century BC
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-foreground">Dambulla Cave Temple</h2>
            <Badge variant="outline" className="border-green-600 text-green-700 dark:border-green-500 dark:text-green-300">
              <CheckCircle className="w-4 h-4 mr-1" />
              Fact checked
            </Badge>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Dambulla Cave Temple is Sri Lanka&apos;s largest and best-preserved cave temple complex. Five caves cut into
              a granite rock that rises 160 metres above the surrounding plains hold 153 Buddha statues and paintings
              covering 2,100 square metres of walls and ceilings. It has been an active place of worship for over
              2,000 years and was listed as a UNESCO World Heritage Site in 1991.
            </p>
            <p className="text-lg">
              The caves were first converted to temples by King Valagamba in the 1st century BC. He sheltered here
              during a 14-year exile from Anuradhapura and renovated the caves as an act of thanks after regaining
              his throne. The paintings and statues span styles from the 1st century BC through to the 18th century
              Kandyan period, showing how Buddhist art developed over centuries.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Dambulla Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts: Dambulla Cave Temple
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Founded:</strong> 1st Century BC
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Cave Paintings:</strong> 2,100 square meters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Buddha Statues:</strong> Over 150
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Sigiriya:</strong> Nearly 17 km by road
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage (1991)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2-3 hours
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
                      <p className="text-sm text-yellow-800">0.5 day to explore the Cave temple and its surroundings.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">Year Around destination with no specific season</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early morning to beat the heat</li>
                    <li>• Avoid poya days and public holidays for a less crowded experience</li>
                    <li>• wear long sleeves and a hat for sun protection</li>
                    <li>• Plan your itinerary to cover key attractions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner />
          </section>
          {/* How to Get to Dambulla Cave Temple */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Dambulla Cave Temple
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> Nearly 158 km from Colombo</li>
                      <li>• <strong>Duration:</strong> Nearly 3.5 hours</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    {featureFlags.showTours && (
                    <div data-promo="true" className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Dambullla Cave Temple. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 70 764 6765</span>
                        </div>
                           <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                      <span>🗓️</span>
                      <Link href="/tours/sigiriya" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                        <strong>One Day Tour</strong> - Click for details & booking
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                      <span>🗓️</span>
                      <Link href="/tours/sigiriya" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                        <strong>Tour that also includes Dambulla Cave Temple</strong> - Click for details & booking
                      </Link>
                    </div>
                        <div className="flex items-center gap-2">
                          <span>✈️</span>
                          <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                            <strong>Airport Transfer Services</strong> - Click for details & booking
                          </Link>
                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train</h4>
                    <p className="text-sm text-muted-foreground">There is no railway station in Dambulla. If you prefer rail travel, use a nearby station and continue by taxi or bus.</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Check current train routes and choose the most practical connection before continuing by road</li>
                      <li>• <strong>Duration:</strong> Travel time depends on the train, connection, and road transfer</li>
                      <li>• <strong>Cost:</strong> Check current train fares by class</li>
                      {/* <li>• <strong>Frequency:</strong> Every 30 minutes from Colombo</li> */}
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort to Dambulla bus stand, then continue by taxi or tuk-tuk to the temple</li>
                      <li>• <strong>Duration:</strong> Travel time depends on the bus type and traffic conditions</li>
                      <li>• <strong>Cost:</strong> Check current fares based on the bus type</li>
                      {/* <li>• <strong>Scenic journey:</strong> Through Coastline road</li> */}
                    </ul>
                  </div>
                </div>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">From Sigiriya</h4>
                    <p className="text-sm text-muted-foreground">
                      Nearly 17 km, nearly 25 to 30 minutes by road. Easy to combine in one day.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">From Kandy</h4>
                    <p className="text-sm text-muted-foreground">
                      Nearly 73 km, nearly 2 hours 15 minutes by road. Private transport is the most direct option.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">From Colombo</h4>
                    <p className="text-sm text-muted-foreground">
                      Nearly 158 km, nearly 3.5 hours by road, depending on traffic and route.
                    </p>
                  </div>

                </CardContent>
              </CardContent>
            </Card>
          </section>
        </div>


        {/* Historical Engineering */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ancient Engineering Marvel</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cave Construction Techniques</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Natural caves were carefully expanded using ancient chiseling techniques</li>
                    <li>• Water drainage systems were integrated to protect the artwork</li>
                    <li>• Precise calculations were used to ensure cave stability</li>
                    <li>• Special drip ledges were carved to direct rainwater away</li>
                  </ul>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Engineering note:</strong> Drip-ledges were carved above the cave openings to direct
                      rainwater away from the walls. This simple technique has protected the murals for over 2,000
                      years and is why the paintings are still visible today.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Construction Timeline</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-600">1st Century BCE</h4>
                      <p className="text-sm text-muted-foreground">Initial cave excavation and basic temple structure</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">5th Century CE</h4>
                      <p className="text-sm text-muted-foreground">Major expansion and addition of more Buddha statues</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">12th Century CE</h4>
                      <p className="text-sm text-muted-foreground">Additional caves carved and paintings added</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">18th Century CE</h4>
                      <p className="text-sm text-muted-foreground">Kandyan era renovations and new artwork</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Five Caves */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Five Sacred Caves: A Journey Through Time</h2>

          <div className="space-y-8">
            {/* Cave 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Cave 1: Devaraja Lena (Cave of the Divine King)</CardTitle>
                <CardDescription>The smallest but historically significant cave</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Devaraja-lena.jpg",
                        alt: "The first cave of Dambulla showing the reclining Buddha statue",
                        caption: "Devaraja Lena Interior",
                        title: "Cave of the Divine King"
                      },
                      {
                        src: "/Dambulla-Cave-Temple-Arts.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The first cave youll encounter houses a 14-meter long reclining Buddha carved from the living
                      rock. This cave is believed to be where King Valagamba took refuge in the 1st century BC, marking
                      the beginning of Dambullas sacred history.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        14-meter reclining Buddha statue
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Statue of Ananda (Buddhas disciple) at the feet
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Brahmi inscriptions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical significance as royal refuge
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Did You Know Section */}
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-400 dark:border-blue-500">
                <p className="text-blue-900 dark:text-blue-200 text-base">
                  <strong>Did you know?</strong> In Cave 2, a small natural spring drips from the ceiling into a stone basin year-round, even in dry months. The water is collected and used in temple rituals.
                </p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-slate-800 rounded-lg border-l-4 border-amber-400 dark:border-amber-500">
                <p className="text-amber-900 dark:text-amber-200 text-base">
                  <strong>Historical note:</strong> King Valagamba (Vattagamani Abhaya) hid in these caves around 103 BC after being driven out of Anuradhapura. He stayed for 14 years, then converted the caves into a temple after reclaiming the throne.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-slate-800 rounded-lg border-l-4 border-green-400 dark:border-green-500">
                <p className="text-green-900 dark:text-green-200 text-base">
                  <strong>Art note:</strong> The earliest paintings in the complex date to the 1st century BC. Later artists painted over and alongside older work, so many walls show multiple layers from different periods.
                </p>
              </div>
            </div>

            {/* Cave 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Cave 2: Maharaja Lena (Cave of the Great Kings)</CardTitle>
                <CardDescription>The largest and most spectacular cave</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Cave 2 is the largest cave in the complex. It has 56 Buddha statues and the most paintings of any cave here.
                      The entire ceiling is painted with scenes from the Buddha&apos;s life and Jataka tales (stories of past lives).
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        56 Buddha statues in various poses
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Extensive ceiling paintings covering 1,500 sq meters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Statues of King Valagamba and King Nissanka Malla
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural spring providing holy water
                      </li>
                    </ul>
                  </div>
                  {/* <ImageCarousel
                    images={[
                      {
                        src: "/maharaja-lena.jpg",
                        alt: "The magnificent interior of Cave 2 showing multiple Buddha statues and painted ceiling",
                        caption: "Cave of the Great Kings Interior",
                        title: "Maharaja Lena"
                      },
                      {
                        src: "/cave2-ceiling.jpg",
                        alt: "Detailed view of the intricately painted ceiling in Cave 2",
                        caption: "Ceiling Murals",
                        title: "Cave 2 Ceiling Art"
                      },
                      {
                        src: "/buddha-statues-cave2.jpg",
                        alt: "Collection of Buddha statues in various poses within Cave 2",
                        caption: "Buddha Statues Array",
                        title: "Cave 2 Buddha Statues"
                      }
                    ]}
                  /> */}

                  {/* Cave 2 Facts */}
                  <div className="mt-6 p-4 bg-purple-50 dark:bg-slate-800 rounded-lg border-l-4 border-purple-400">
                    <p className="text-purple-900 dark:text-purple-200 text-base">
                      <strong>Did you know?</strong> Cave 2 contains the oldest paintings in the complex, dating to the
                      1st century BC. Artists painted the ceiling from scaffolding while lying on their backs. The scaffolding holes are still visible in the rock walls today.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cave 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Cave 3: Maha Alut Viharaya (Great New Monastery)</CardTitle>
                <CardDescription>18th-century addition with Kandyan period art</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* <ImageCarousel
                    images={[
                      {
                        src: "/maha-alut-viharaya.jpg",
                        alt: "The interior of Cave 3 showing Kandyan era paintings and statues",
                        caption: "Great New Monastery Interior",
                        title: "Maha Alut Viharaya"
                      },
                      {
                        src: "/cave3-paintings.jpg",
                        alt: "Detailed view of the Kandyan era paintings in Cave 3",
                        caption: "Kandyan Era Art",
                        title: "Cave 3 Wall Paintings"
                      },
                      {
                        src: "/statues-cave3.jpg",
                        alt: "Buddha statues from the Kandyan period in Cave 3",
                        caption: "Kandyan Buddha Statues",
                        title: "Cave 3 Statues"
                      }
                    ]}
                  /> */}

                  {/* Cave 3 Facts */}
                  <div className="mt-6 p-4 bg-emerald-50 dark:bg-slate-800 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-emerald-900 dark:text-emerald-200 text-base">
                      <strong>Did you know?</strong> The Kandyan-period artists who painted Cave 3 used natural mineral
                      pigments mixed with organic binders. The vivid reds, yellows, and blacks in this cave are still
                      clear after more than 200 years.
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built during the Kandyan period (18th century), this cave showcases the evolution of Sri Lankan
                      Buddhist art. The paintings here are more recent but equally beautiful, featuring vibrant colors
                      and detailed depictions of Buddhist stories.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        50 Buddha statues from Kandyan period
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Vibrant 18th-century paintings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique architectural features
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved ceiling artwork
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caves 4 & 5 */}
            <Card>
              <CardHeader>
                <CardTitle>Caves 4 & 5: Pachima Viharaya & Devana Alut Viharaya</CardTitle>
                <CardDescription>Smaller caves with unique features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Cave 4: Pachima Viharaya (Western Monastery)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Small but significant cave</li>
                      <li>• Central seated Buddha statue</li>
                      <li>• Dagoba (stupa) in the center</li>
                      <li>• Intimate spiritual atmosphere</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Cave 5: Devana Alut Viharaya (Second New Monastery)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Newest addition to the complex</li>
                      <li>• 11 Buddha statues</li>
                      <li>• Hindu deities also present</li>
                      <li>• Shows religious harmony</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> While smaller than the first three caves, Caves 4 and 5 offer unique insights
                    into the evolution of Buddhist art and religious practices in Sri Lanka.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Golden Temple */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Golden Temple: Modern Marvel</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                At the base of the rock is the Golden Temple, built in 2000. It serves as the main entrance to the
                cave complex. A large golden Buddha statue stands at the front. Inside there is a small museum with
                information about the site&apos;s history and some religious artifacts.
              </p>
              <p>
                The museum is worth a quick look before you climb. It gives background on the caves and the different
                periods of construction. The building also has toilets and a place to store your shoes before entering.
              </p>
              <div className="bg-gold-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">Golden Temple Features:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 30-meter tall golden Buddha statue</li>
                  <li>• Museum with ancient artifacts</li>
                  <li>• Air-conditioned visitor center</li>
                  <li>• Gift shop and facilities</li>
                  <li>• Starting point for cave temple visit</li>
                </ul>
              </div>
            </div>
            <Image
              src="/Rangiri-Dambulu.jpg"
              alt="Golden Temple at Dambulla showing the impressive 30-meter golden Buddha statue and modern architecture"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Art & Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ancient Art & Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Cave Paintings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Artistic Techniques</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Natural pigments from local minerals and plants</li>
                    <li>• Fresco technique applied to rock surfaces</li>
                    <li>• Multiple layers spanning different periods</li>
                    <li>• Remarkable preservation in cave environment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Themes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Buddhas life story and previous births</li>
                    <li>• Jataka tales (moral stories)</li>
                    <li>• Celestial beings and divine figures</li>
                    <li>• Geometric and floral patterns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Sculpture & Statuary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Buddha Statues</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Seated meditation pose (most common)</li>
                    <li>• Standing teaching pose</li>
                    <li>• Reclining parinirvana pose</li>
                    <li>• Various hand gestures (mudras)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Materials & Techniques</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Carved from living rock</li>
                    <li>• Clay and plaster additions</li>
                    <li>• Gold leaf and paint decoration</li>
                    <li>• Crystal and gem inlays</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visitor Information & Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Practical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees & Hours</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Check current ticket prices before you visit</li>
                    <li>• Check current opening hours before you travel</li>
                    <li>• Prices and access rules can change during holidays and special temple dates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Whats Included</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Access to all five caves</li>
                    <li>• Golden Temple museum entry</li>
                    <li>• Shoe storage at entrance</li>
                    <li>• Basic site information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Additional Services</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Local guides may be available at busy times</li>
                    <li>• Shoe storage is usually available near the entrance area</li>
                    <li>• Small shops and refreshments are often available near the base</li>
                    <li>• Ask on site about current photography rules</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Temple Etiquette</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Dress Code</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cover shoulders and knees</li>
                    <li>• Remove shoes before entering caves</li>
                    <li>• White or light-colored clothing preferred</li>
                    <li>• Avoid revealing or tight clothing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Behavior Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Maintain respectful silence</li>
                    <li>• Dont point feet toward Buddha statues</li>
                    <li>• No touching of paintings or statues</li>
                    <li>• Photography allowed (no flash)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Sensitivity</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• This is an active place of worship</li>
                    <li>• Be respectful of praying devotees</li>
                    <li>• Follow your guides instructions</li>
                    <li>• Consider making a small donation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Temple Life */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Temple Life Today</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Active Place of Worship</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Dambulla is not only a historic site, it is still an active Buddhist temple. You may see devotees bringing flowers, lighting oil lamps, or praying quietly inside the caves.
                </p>
                <p className="text-sm text-muted-foreground">
                  Visitor numbers often rise on Poya days and other religious dates. If you want a quieter visit, choose a normal weekday and arrive early.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Visit Respectfully</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Keep your voice low inside the caves</li>
                  <li>• Follow instructions from temple staff</li>
                  <li>• Give space to people who are praying</li>
                  <li>• Do not touch paintings, statues, or cave walls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conservation & Preservation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conservation & Preservation</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Why the Murals Survived</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Drip-ledges above the cave mouths help carry rainwater away</li>
                      <li>• The cave interiors are naturally sheltered from direct weather</li>
                      <li>• The site has been protected as a religious and heritage monument for centuries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">What Still Needs Protection</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Natural weathering of rock surfaces</li>
                      <li>• Moisture and dirt carried in by heavy visitor traffic</li>
                      <li>• Damage caused by touching painted or carved surfaces</li>
                      <li>• The need to balance access with long-term preservation</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">How Visitors Can Help</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Follow photography guidelines</li>
                      <li>• Maintain distance from paintings</li>
                      <li>• Do not touch statues, murals, or cave walls</li>
                      <li>• Follow marked paths and temple instructions</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-gray-300">
                      One of the simplest but most important preservation features is the carved drip-ledge above each cave opening. It helps keep rainwater off the decorated walls.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Dambulla</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Early Morning</CardTitle>
                <CardDescription>7:00 AM - 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cooler temperatures for climbing</li>
                  <li>• Fewer crowds and tour groups</li>
                  <li>• Better lighting for photography</li>
                  <li>• Peaceful atmosphere for meditation</li>
                  <li>• Fresh morning air</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Late Afternoon</CardTitle>
                <CardDescription>4:00 PM - 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Golden hour lighting</li>
                  <li>• Cooler than midday</li>
                  <li>• Beautiful sunset views</li>
                  <li>• Less crowded than morning</li>
                  <li>• Good for photography</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Avoid Midday</CardTitle>
                <CardDescription>11:00 AM - 3:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Very hot and humid</li>
                  <li>• Crowded with tour groups</li>
                  <li>• Harsh lighting for photos</li>
                  <li>• Uncomfortable climbing conditions</li>
                  <li>• Limited parking availability</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Nearby Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Other places worth visiting within easy reach of Dambulla Cave Temple
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pattipola */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Sigiriya.jpeg"
                  alt="Sigiriya Rock Fortress"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Nearly 25 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Sigiriya Rock Fortress</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An ancient rock fortress and UNESCO World Heritage Site known for its stunning frescoes and panoramic views.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 17 km from Dambulla Cave Temple
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
                  src="/Minneriyanationalpark.jpg"
                  alt="Minneriya National Park"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Nearly 35 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Minneriya National Park</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Minneriya National Park is known for its large elephant population and diverse wildlife.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 27 km from Dambulla Cave Temple
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/minneriya-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Pidurangala.jpeg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Nearly 30 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Pidurangala Rock</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A massive rock formation offering panoramic views of Sigiriya and the surrounding jungle.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 20 km from Dambulla Cave Temple
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pidurangala-rock" passHref legacyBehavior>
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
                  Nearly 2 hours 15 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kandy</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Cultural capital with the Temple of the Tooth, beautiful lake, and traditional performances.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 73 km from Dambulla Cave Temple
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kandy" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Day Trip Suggestions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Suggested Day Trip Combinations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Cultural Triangle</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Dambulla Cave Temple → Sigiriya Rock Fortress → Pidurangala Rock → Return
                </p>
                <div className="flex items-center text-xs text-green-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (8–10 hours)
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Wildlife &amp; History</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Dambulla Cave Temple → Minneriya National Park → Return
                </p>
                <div className="flex items-center text-xs text-blue-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (8–10 hours)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Dambulla Cave Temple</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Transportation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Sigiriya</h4>
                  <p className="text-sm text-muted-foreground">
                    Nearly 17 km, nearly 25 to 30 minutes by road. Perfect for combining both attractions in one day.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Kandy</h4>
                  <p className="text-sm text-muted-foreground">
                    Nearly 73 km, nearly 2 hours 15 minutes by road. Private transport is the most direct option.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    Nearly 158 km, nearly 3.5 hours by road, depending on traffic and route.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Transport</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tuk-tuks from Dambulla town</li>
                    <li>• Private cars and taxis</li>
                    <li>• Tour buses and organized tours</li>
                    <li>• Bicycle rentals for adventurous visitors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Cultural Triangle Sites</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sigiriya Rock Fortress, nearly 17 km by road</li>
                    <li>• Polonnaruwa Ancient City, nearly 64 km by road</li>
                    <li>• Anuradhapura Sacred City, nearly 64 km by road</li>
                    <li>• Ritigala Forest Monastery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Natural Attractions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minneriya National Park, nearly 27 km by road</li>
                    <li>• Kaudulla National Park</li>
                    <li>• Pidurangala Rock, nearly 20 km by road</li>
                    <li>• Nalanda Gedige Temple</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Dambulla is perfectly positioned for exploring the Cultural Triangle. Consider
                    staying 2-3 days to visit multiple sites.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-gold-50 border-purple-200 dark:bg-slate-800 dark:[background-image:none]">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-white">Visiting Dambulla Cave Temple</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Allow 2–3 hours for a proper visit. Start with the Golden Temple at the base, then climb the steps
                to the caves. The climb takes about 20 minutes on a stone staircase. Shoes must be removed before
                entering any cave.
              </p>
              <p className="text-muted-foreground mb-4">
                Cave 2 takes the most time. Move slowly and look at both the walls and ceiling. Flash photography
                damages the paint, so turn it off. Avoid touching any surfaces.
              </p>
              <p className="text-muted-foreground">
                Early morning (before 9 AM) is the best time. It is cooler, less crowded, and the light inside the
                caves is better. Avoid Poya days if you want fewer people.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
