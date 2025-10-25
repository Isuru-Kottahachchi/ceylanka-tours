"use client"

import Image from "next/image"
import { MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Waves, TreePine, Brain, TentTree } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BalangodaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Balangoda.jpeg"
          alt="Balangoda's ancient cave complexes and archaeological sites with Samanalawewa Reservoir in the background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Balangoda</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Where Prehistoric History Comes Alive</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30  bg-yellow-600/80 text-white border-yellow-600">
              <TentTree className="w-4 h-4 mr-1" />
              Prehistoric Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30  bg-blue-600/80 text-white border-blue-600">
              <Mountain className="w-4 h-4 mr-1" />
              Scenic Beauty
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-600">
              <Brain className="w-4 h-4 mr-1" />
              Relaxing Nature
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Balangoda: Gateway to Prehistoric Sri Lanka
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the Ratnapura District of Sabaragamuwa Province, Balangoda holds a unique place in human
              history as the discovery site of &quot;Balangoda Man&quot; - prehistoric human remains dating back 37,000 years.
              This fascinating town offers visitors a rare glimpse into Sri Lanka&apos;s ancient past through archaeological
              wonders and traditional crafts.
            </p>
            <p className="text-lg">
              Beyond its prehistoric significance, Balangoda enchants visitors with the stunning Samanalawewa Reservoir,
              ancient cave complexes, traditional pottery villages, and pristine natural beauty. This hidden gem
              combines archaeological importance with scenic landscapes and authentic cultural experiences.
            </p>
          </div>
        </section>

        {/* Quick Facts and Travel Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Balangoda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Famous For:</strong> Balangoda Man Discovery
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Province:</strong> Sabaragamuwa Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~25,000 residents
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Elevation:</strong> 680m (2,230 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> December to April
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-blue-600" />
                    <span>
                      <strong>Climate:</strong> Tropical Highland
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Getting to Balangoda from Colombo */}
          <section>
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2  text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Travel from Colombo to Balangoda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 170km (105 miles)</li>
                      <li>• <strong>Duration:</strong> 3.5-4 hours</li>
                      <li>• <strong>Cost:</strong> $50-80 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Balangoda. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Balangoda bus stand</li>
                      <li>• <strong>Duration:</strong> 4-5 hours total</li>
                      <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                      <li>• <strong>Note:</strong> Requires bus change in Dambulla or Habarana</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>💡 Pro Tip:</strong> Start early (6-7 AM) from Colombo to avoid traffic and reach Balangoda before the midday heat.
                    Most visitors stay overnight in nearby Dambulla or Habarana for a more relaxed experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Prehistoric Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Balangoda Man Discovery</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Balangoda-Pre-Historic-Man.jpg"
                alt="Archaeological reconstruction showing Balangoda Man and prehistoric life in ancient Sri Lankan caves"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Balangoda Man represents one of South Asia&apos;s most significant prehistoric discoveries
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In 1986, archaeologists made a groundbreaking discovery in Balangoda&apos;s cave systems - human remains
                dating back 37,000 years. This prehistoric human, dubbed &quot;Balangoda Man,&quot; represents one of the earliest
                known inhabitants of Sri Lanka and provides crucial insights into human migration patterns in South
                Asia.
              </p>
              <p>
                The discovery included not only human remains but also stone tools, evidence of fire use, and signs of
                organized community living. These findings suggest that Balangoda was a significant center of
                prehistoric human activity, with sophisticated hunter-gatherer societies thriving in the region.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Archaeological Significance:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Oldest human remains found in Sri Lanka</li>
                  <li>• Evidence of advanced stone tool technology</li>
                  <li>• Insights into prehistoric migration patterns</li>
                  <li>• Connection to broader South Asian prehistory</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Tip:</strong> Private vehicle recommended for visiting archaeological sites
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions in Balangoda</h2>

          <div className="space-y-8">
            {/* Archaeological Sites */}
            <Card>
              <CardHeader>
                <CardTitle>1. Balangoda Man Archaeological Sites</CardTitle>
                <CardDescription>Prehistoric human discovery sites dating back 37,000 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Beli-Lena.webp",
                        alt: "Beli Lena Cave with stunning rock formations",
                        caption: "Beli Lena Cave",
                        title: "Beli Lena Cave"
                      },
                      {
                        src: "/Batadomba-Lena.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The discovery of &quot;Balangoda Man&quot; in 1986 revolutionized understanding of prehistoric Sri Lanka.
                      These archaeological sites contain evidence of human habitation spanning 37,000 years, making them
                      among the most significant prehistoric discoveries in South Asia.
                    </p>
                    <br />
                    <p>In Balangoda Area You can explore Prehistoric sites such as: Beli Lena, Fa Hien Cave, and Batadomba Cave etc where Balangoda Man lived.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        37,000-year-old prehistoric human remains
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient cave dwelling complexes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stone tools and prehistoric artifacts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided archaeological tours available
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/balangoda-archaeological-sites" passHref legacyBehavior>
                        <Button
                          variant="secondary"
                          className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          Read more
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
            {/* Lime Stone Pool Attraction Card */}
            <Card>
              <CardHeader>
                <CardTitle>2. Lime Stone Pool/ Hunugal Pokuna</CardTitle>
                <CardDescription>Natural rock pool with crystal-clear waters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Hunugal-Pokuna.jpg",
                        alt: "Hunugal Pokuna with crystal-clear waters",
                        caption: "Hunugal Pokuna",
                        title: "Hunugal Pokuna"
                      },
                      {
                        src: "/Hunugal-Pokuna3.jpg",
                        alt: "Hunugal Pokuna with crystal-clear waters",
                        caption: "Hunugal Pokuna",
                        title: "Hunugal Pokuna"
                      },
                      {
                        src: "/Hunugal-Pokuna1.webp",
                        alt: "Hunugal Pokuna with crystal-clear waters",
                        caption: "Hunugal Pokuna",
                        title: "Hunugal Pokuna"
                      },

                      {
                        src: "/Hunugal-Pokuna2.webp",
                        alt: "Hunugal Pokuna with crystal-clear waters",
                        caption: "Hunugal Pokuna",
                        title: "Hunugal Pokuna"
                      },


                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Hidden amidst the hills near Balangoda, the Lime Stone Pool is a stunning natural formation where cool, clear spring water collects in a basin carved from limestone rock. Surrounded by lush forest, this tranquil pool is perfect for a refreshing dip and a peaceful escape into nature. The unique mineral content of the limestone gives the water a beautiful turquoise hue, making it a favorite spot for both locals and adventurous travelers.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Safe for relaxing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Surrounded by scenic forest trails
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique turquoise water from limestone minerals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for picnics and nature photography
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/balangoda-archaeological-sites" passHref legacyBehavior>
                        <Button
                          variant="secondary"
                          className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          Read more
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Bakers Bend</CardTitle>
                <CardDescription>Though the scenery is unparalleled, Nonpareil state</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Bakers-Bend.jpg",
                        alt: "Bakers Bend with lush greenery and scenic views",
                        caption: "Bakers Bend",
                        title: "Bakers Bend"
                      },
                      {
                        src: "/Bakers-Bend1.jpg",
                        alt: "Bakers Bend scenic viewpoint showing panoramic mountain and valley views",
                        caption: "Bakers Bend Scenic Viewpoint",
                        title: "Bakers Bend Scenic Viewpoint"
                      },
                      {
                        src: "/Balangoda.jpeg",
                        alt: "Balangoda scenic viewpoint showing panoramic mountain and valley views",
                        caption: "Balangoda Scenic Viewpoint",
                        title: "Balangoda Scenic Viewpoint"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      BAKERS BEND is a breathtaking viewpoint located in the Balangoda region, offering panoramic views of the surrounding mountains and valleys. This scenic spot is perfect for photography enthusiasts and nature lovers, providing a serene escape into the heart of Sri Lanka&apos;s natural beauty.
                      <br />
                      <strong>Important:</strong>
                      The Nonpareil road is considered one of the challenging and dangerous roads in Sri Lanka. It is highly recommended to use a 4x4 vehicle to access this location. The road is steep and narrow, with sharp turns and steep drops, making it unsuitable for regular cars.
                      There are several 4by 4 jeep servoces called Ahas gauwwa that can be hired from Balangoda town to reach the Bakers Bend viewpoint. If you are not confident by owns driving, it is advisable to hire a local driver who is familiar with the road conditions.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional pottery-making demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on pottery workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase authentic handmade pottery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about ancient clay preparation methods
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/balangoda-archaeological-sites" passHref legacyBehavior>
                        <Button
                          variant="secondary"
                          className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          Read more
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Nagrak Village Attraction Card */}
            <Card>
              <CardHeader>
                <CardTitle>4. Nagrak Village</CardTitle>
                <CardDescription>Remote mountain village with breathtaking views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Nagrak-Village.png",
                        alt: "Nagrak Village with lush greenery and mountains",
                        caption: "Nagrak Village",
                        title: "Nagrak Village"
                      },
                      {
                        src: "/Nagrak-Village1.png",
                        alt: "Nagrak Village with lush greenery and mountains",
                        caption: "Nagrak Village",
                        title: "Nagrak Village"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Perched high in the central highlands, Nagrak Village is a hidden gem known for its panoramic mountain vistas, cool climate, and authentic rural charm. The village is accessible via scenic hiking trails and is a popular base for trekkers exploring the Horton Plains and surrounding tea estates. Visitors can experience traditional village life, enjoy home-cooked meals, and wake up to breathtaking sunrises above the clouds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Gateway to Horton Plains trekking
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic homestay experiences
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise and mountain views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Surrounded by tea plantations and cloud forests
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/balangoda-archaeological-sites" passHref legacyBehavior>
                        <Button
                          variant="secondary"
                          className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          Read more
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>5. Pahanthudawa</CardTitle>
                <CardDescription>Ancient craft traditions preserved for generations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Pahanthudawa.jpeg",
                        alt: "Pahanthudawa with its lush greenery and traditional crafts",
                        caption: "Pahanthudawa",
                        title: "Pahanthudawa"
                      },
                      {
                        src: "/Lunugangabawa2.jpeg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Eye Catching waterfall only 16 feet height but beautiful scenery around the waterfall. &quot;Pahanthuwada&quot; name is derived from the fact that the waterfall resembles a oil lamp (pahana) being extinguished (thudawa) as the water cascades down the rocks.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Easy Access from the main road
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Picnic spots and resting areas
                      </li>

                    </ul>
                     <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Safety Tips</h4>
                        <ul className="text-sm text-amber-600 dark:text-amber-400 space-y-1">
                          <li>• Always follow the instructions of your guide and the locals</li>
                          <li>• Water level of the above waterfall can be unpredictable always be aware about the rain and the water stream</li>
                          <li>• Don&apos;t swim near the waterfall</li>
                          <li>• Road to the waterfall can be slippery be carefull</li>
                        </ul>
                      </div>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/balangoda-archaeological-sites" passHref legacyBehavior>
                        <Button
                          variant="secondary"
                          className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          Read more
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>6. Belihuloya</CardTitle>
                <CardDescription>Ancient craft traditions preserved for generations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Bentotabeach.jpeg",
                        alt: "Bentota Beach with golden sand and clear waters",
                        caption: "Bentota Beach",
                        title: "Bentota Beach"
                      },
                      {
                        src: "/Lunugangabawa2.jpeg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Balangoda is renowned for its traditional pottery industry, where ancient techniques passed down
                      through generations are still practiced today. Visit working pottery villages to see master
                      craftsmen create beautiful clay vessels using methods unchanged for centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional pottery-making demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on pottery workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase authentic handmade pottery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about ancient clay preparation methods
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-start">
                      <Link href="/destinations/balangoda-archaeological-sites" passHref legacyBehavior>
                        <Button
                          variant="secondary"
                          className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                          Read more
                          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Samanalawewa Reservoir */}
            <Card>
              <CardHeader>
                <CardTitle>7. Samanalawewa Reservoir</CardTitle>
                <CardDescription>Stunning man-made lake and engineering marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Created by the Samanalawewa Dam on the Walawe River, this massive reservoir is both an engineering
                      achievement and a scenic wonder. The lake stretches for kilometers through mountainous terrain,
                      creating breathtaking landscapes and recreational opportunities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular mountain and water views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Boat rides and water sports
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fishing and recreational activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sunset viewing and photography
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Samanala-Wewa.jpg",
                        alt: "Samanala Wewa Reservoir with lush greenery and mountains",
                        caption: "Samanala Wewa Reservoir",
                        title: "Samanala Wewa Reservoir"
                      },
                      {
                        src: "/Lunugangabawa2.jpeg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },

                    ]}
                  />
                </div>
              </CardContent>
            </Card>
            {/* Traditional Pottery Villages */}
            <Card>
              <CardHeader>
                <CardTitle>8. Traditional Pottery Villages</CardTitle>
                <CardDescription>Ancient craft traditions preserved for generations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Traditional pottery making in Balangoda villages with artisans creating clay pots using ancient techniques"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Balangoda is renowned for its traditional pottery industry, where ancient techniques passed down
                      through generations are still practiced today. Visit working pottery villages to see master
                      craftsmen create beautiful clay vessels using methods unchanged for centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional pottery-making demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Hands-on pottery workshops
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Purchase authentic handmade pottery
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about ancient clay preparation methods
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />


        {/* Traditional Crafts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Traditional Crafts & Cultural Heritage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Pottery Making</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ancient clay preparation techniques</li>
                  <li>• Traditional wheel and hand-forming methods</li>
                  <li>• Natural firing processes</li>
                  <li>• Decorative glazing and painting</li>
                  <li>• Functional and artistic pottery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Wood Carving</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Traditional carving tools and techniques</li>
                  <li>• Religious and decorative sculptures</li>
                  <li>• Furniture and household items</li>
                  <li>• Local wood selection and preparation</li>
                  <li>• Master craftsman workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Weaving & Textiles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Traditional loom weaving</li>
                  <li>• Natural fiber preparation</li>
                  <li>• Traditional dyeing methods</li>
                  <li>• Cultural patterns and designs</li>
                  <li>• Handmade textile products</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Balangoda</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>By Road</CardTitle>
                <CardDescription>Most convenient access to attractions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours via A4 highway through Ratnapura</p>
                </div>
                <div>
                  <strong>From Ratnapura:</strong>
                  <p className="text-sm text-muted-foreground">1.5 hours via A4 road - scenic mountain route</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">3-4 hours via Nuwara Eliya and Haputale</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Tip:</strong> Private vehicle recommended for visiting archaeological sites
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
                  <p className="text-sm text-muted-foreground">5-6 hours via Ratnapura, regular services</p>
                </div>
                <div>
                  <strong>Bus from Ratnapura:</strong>
                  <p className="text-sm text-muted-foreground">2 hours, frequent departures throughout day</p>
                </div>
                <div>
                  <strong>Local Transport:</strong>
                  <p className="text-sm text-muted-foreground">Tuk-tuks and local buses for site visits</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Some archaeological sites require guided access
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Balangoda</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Guesthouses</CardTitle>
                <CardDescription>$15-35 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family-run accommodations</li>
                  <li>• Local hospitality and home cooking</li>
                  <li>• Cultural immersion experiences</li>
                  <li>• Help with tour arrangements</li>
                  <li>• Authentic village atmosphere</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$35-70 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Comfortable rooms with modern amenities</li>
                  <li>• Restaurant and room service</li>
                  <li>• Tour booking assistance</li>
                  <li>• WiFi and air conditioning</li>
                  <li>• Mountain or reservoir views</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Eco-Lodges</CardTitle>
                <CardDescription>$40-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable tourism practices</li>
                  <li>• Natural forest or lakeside settings</li>
                  <li>• Organic local cuisine</li>
                  <li>• Nature walks and bird watching</li>
                  <li>• Educational programs about local heritage</li>
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
                <CardTitle>Archaeological Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cave Exploration:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Guided tours of prehistoric cave sites where Balangoda Man remains were discovered.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Archaeological Workshops:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Learn about excavation techniques and artifact identification from local experts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Museum Visits:</h4>
                    <p className="text-sm text-muted-foreground">
                      Explore local museums showcasing prehistoric artifacts and cultural heritage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nature & Recreation</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Samanala-Wewa.jpg"
                  alt="Recreational activities at Samanalawewa Reservoir including boating, fishing, and scenic viewpoints"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Boat rides on Samanalawewa Reservoir</li>
                  <li>• Fishing and water sports</li>
                  <li>• Nature walks and hiking trails</li>
                  <li>• Bird watching and wildlife spotting</li>
                  <li>• Photography tours of landscapes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Culture & Cuisine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Local Culture & Cuisine</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Traditional Cuisine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Local Specialties:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Traditional rice and curry with local vegetables</li>
                      <li>• Fresh water fish from Samanalawewa</li>
                      <li>• Wild honey and forest products</li>
                      <li>• Traditional sweets and desserts</li>
                      <li>• Herbal teas and natural drinks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dining Experiences:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Village home cooking experiences</li>
                      <li>• Traditional clay pot cooking</li>
                      <li>• Lakeside dining with fresh fish</li>
                      <li>• Local market food exploration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Traditional cultural festival in Balangoda with local dancers, craftsmen, and community celebrations"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Experience authentic local festivals celebrating heritage and crafts.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Traditional pottery festivals</li>
                  <li>• Harvest celebrations and ceremonies</li>
                  <li>• Cultural dance and music performances</li>
                  <li>• Craft exhibitions and competitions</li>
                  <li>• Religious festivals and processions</li>
                </ul>
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
                  <span className="text-sm">Book archaeological site tours in advance through local guides</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect archaeological sites - no touching or removing artifacts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Support local craftsmen by purchasing authentic handmade items</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Learn basic Sinhala phrases - locals appreciate the effort</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Carry cash for craft purchases and local experiences</span>
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
                  <span className="text-sm">Some archaeological sites require special permits for access</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Weather can change quickly in mountainous areas</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Limited ATMs - carry sufficient cash for rural areas</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Pottery workshops may have limited availability</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Respect local customs and photography restrictions</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Balangoda adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rathnapura */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Saman-devalaya.jpeg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  1.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Rathnapura</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Known for its scenic beauty and cool climate, Pattipola is home to the highest railway station in Sri Lanka.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  50 km from Balangoda
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/rathnapura" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Adamspeaskmain.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Adam&apos;s Peak</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Known for its scenic beauty and cool climate, Adam&apos;s Peak is home to the highest railway station in Sri Lanka.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  18 km from Nuwara Eliya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/adams-peak" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Adamspeaskmain.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hawagala</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Known for its scenic beauty and cool climate, Pattipola is home to the highest railway station in Sri Lanka.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  17 km from Balangoda
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hawagala" passHref legacyBehavior>
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
