"use client"

import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Users, Anchor, Fish, Waves, Church, Coffee, Utensils} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"


export default function NegomboTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Negombo.jpg"
          alt="Stunning aerial view of Negombo Beach with traditional fishing boats, golden sand, and vibrant Catholic church spires in Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text-shadow text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">Negombo</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Vibrant Coastal Gateway - Where Culture Meets the Sea</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30  bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Western Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Anchor className="w-4 h-4 mr-1" />
              Fishing Heritage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Church className="w-4 h-4 mr-1" />
              Catholic Heritage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Gateway Beach
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Negombo: Where Every Day is a Celebration</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Welcome to Negombo, the vibrant coastal town that perfectly captures the essence of Sri Lankan life! 
              Just 37 kilometers north of Colombo and about 15-20 minutes from Bandaranaike International Airport, 
              Negombo serves as the perfect introduction to Sri Lanka&apos;s rich cultural tapestry and stunning natural beauty.
            </p>
            <p className="text-lg mb-4">
              Known affectionately as &quot;Little Rome&quot; due to its strong Catholic heritage, Negombo is where ancient 
              fishing traditions meet colonial architecture, where sunrise prayers at beautiful churches blend with 
              the daily rhythm of fishermen casting their nets. This bustling coastal town offers visitors an authentic 
              taste of Sri Lankan life that&apos;s both deeply traditional and refreshingly vibrant.
            </p>
            <p className="text-lg mb-4">
              What makes Negombo truly special is the genuine warmth of its people and their &quot;Punchi Romaya&quot; 
              (little enjoyment) approach to life. Here, every sunset is celebrated, every catch from the sea is a blessing, 
              and every visitor is welcomed as family. The town&apos;s unique blend of Sinhalese, Tamil, and Portuguese colonial 
              influences creates a cultural richness that&apos;s immediately felt in its bustling markets, colorful festivals, 
              and the infectious joy of daily life.
            </p>
            <p className="text-lg">
              Whether you&apos;re arriving in Sri Lanka for the first time or seeking a peaceful coastal retreat, 
              Negombo offers the perfect balance of relaxation and cultural immersion. From watching traditional 
              outrigger boats return with the morning catch to experiencing the spiritual beauty of centuries-old 
              Catholic churches, Negombo invites you to slow down and savor life&apos;s simple pleasures.
            </p>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <Fish className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-800">Perfect for First-Time Visitors</p>
                <p className="text-blue-700 text-sm mt-1">
                  Negombo&apos;s proximity to the airport makes it ideal for acclimatizing to Sri Lankan culture before 
                  exploring the rest of the island, or for a relaxing final stop before departure.
                </p>
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
                Essential Negombo Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>Location:</strong> Western Province</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span><strong>Population:</strong> ~142,000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span><strong>Best time:</strong> November to April</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Anchor className="w-4 h-4 text-purple-500" />
                    <span><strong>Famous for:</strong> Fishing & Catholic culture</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Coffee className="w-4 h-4 text-orange-500" />
                    <span><strong>Cuisine:</strong> Fresh seafood & Italian</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span><strong>Colonial Era:</strong> Portuguese influence from the 16th century</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-pink-500" />
                    <span><strong>Photography:</strong> Fishing boats & churches</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="w-4 h-4 text-cyan-500" />
                    <span><strong>Beach length:</strong> 7km golden sand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>Airport:</strong> about 15-20 minutes drive</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions & Experiences in Negombo</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Negombo Fish Market - Heart of Local Life</CardTitle>
                <CardDescription>Experience the vibrant energy of Sri Lanka&apos;s second-largest fish market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Negombo-Fish-Market.jpg"
                    alt="Bustling Negombo fish market with colorful boats, fresh catch, and local fishermen in traditional attire"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Start your day with the incredible energy of Negombo&apos;s fish market, where traditional outrigger 
                      boats called &quot;oruwa&quot; return with their overnight catch. This is authentic Sri Lankan life at its 
                      most vibrant - fishermen sorting their catch, vendors negotiating prices, and the community coming 
                      together in a daily ritual that&apos;s remained unchanged for centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best time: Early morning (5:00-8:00 AM)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional fishing boats and techniques
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fresh seafood purchasing opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <Camera className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Incredible photography opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. St. Mary&apos;s Church - Catholic Heritage Jewel</CardTitle>
                <CardDescription>Stunning neo-classical church showcasing Negombo&apos;s rich Catholic tradition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      St. Mary&apos;s Church stands as a magnificent testament to Negombo&apos;s deep Catholic roots, earning 
                      the town its nickname &quot;Little Rome.&quot; This beautiful neo-classical church, built in 1874, 
                      features stunning ceiling frescoes, intricate stained glass windows, and an atmosphere of 
                      peaceful devotion that reflects the spiritual heart of the community.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful neo-classical architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning ceiling artwork and frescoes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Active place of worship and community
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        Dress modestly and be respectful during services
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/St-Mary-Church-Negombo.jpg",
                        alt: "Interior of St. Mary's Church Negombo with stunning ceiling frescoes, stained glass windows, and peaceful atmosphere",
                        caption: "",
                      },
                      {
                        src: "/St-Mary-Church-Exterior.webp",
                        alt: "Exterior of St. Mary's Church Negombo with its neo-classical architecture and vibrant community",
                        caption: "",
                      },
                  ]}
                />
                </div>

                {/* Other Churches in Negombo */}
                {/* <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-1">More Churches in Negombo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Negombo is home to over 40 Catholic churches — more per square kilometre than almost anywhere in Asia. Here are some other significant ones worth visiting.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {[
                      {
                        name: "St. Sebastian's Church",
                        location: "Katuwapitiya",
                        note: "One of the largest churches; site of the 2019 Easter Sunday bombing",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "St. Sebastian's Church Katuwapitiya, Negombo",
                      },
                      {
                        name: "St. Anne's Church",
                        location: "Talahena",
                        note: "Popular pilgrimage destination, especially during the Feast of St. Anne in July",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "St. Anne's Church Talahena, Negombo",
                      },
                      {
                        name: "Holy Rosary Church",
                        location: "Duwa Island",
                        note: "Accessible by boat; unique island church with a devout fishing community",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "Holy Rosary Church on Duwa Island, Negombo",
                      },
                      {
                        name: "St. Joseph's Church",
                        location: "Negombo Town",
                        note: "Historic church in the town centre with a distinct colonial facade",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "St. Joseph's Church Negombo Town",
                      },
                      {
                        name: "St. Peter's Church",
                        location: "Pitipana",
                        note: "Quiet neighbourhood church with traditional architecture and local character",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "St. Peter's Church Pitipana, Negombo",
                      },
                      {
                        name: "St. Francis of Assisi Church",
                        location: "Negombo",
                        note: "Named after the patron saint of the environment, set in a peaceful compound",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "St. Francis of Assisi Church, Negombo",
                      },
                      {
                        name: "Our Lady of Lourdes",
                        location: "Negombo",
                        note: "Grotto-style church popular for Marian devotions and novenas",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "Our Lady of Lourdes Church, Negombo",
                      },
                      {
                        name: "St. Lucia's Cathedral",
                        location: "Colombo (nearby)",
                        note: "The largest Catholic cathedral in Sri Lanka, worth visiting on the way to/from Negombo",
                        src: "/placeholder.svg?height=120&width=160",
                        alt: "St. Lucia's Cathedral Colombo",
                      },
                    ].map((church) => (
                      <div
                        key={church.name}
                        className="group rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-24 w-full">
                          <Image
                            src={church.src}
                            alt={church.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-2">
                          <p className="text-xs font-semibold text-foreground leading-tight">{church.name}</p>
                          <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">{church.location}</p>
                          <p className="text-xs text-muted-foreground mt-1 leading-snug">{church.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Negombo Lagoon - Nature&apos;s Sanctuary</CardTitle>
                <CardDescription>Peaceful boat rides through mangroves and birdwatching paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Negombo-Lagoon.jpg"
                    alt="Serene Negombo Lagoon with traditional boats, lush mangroves, and diverse birdlife in golden evening light"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Escape the bustle of town life with a peaceful boat ride through Negombo Lagoon, a pristine 
                      ecosystem where mangroves create natural tunnels and over 100 bird species make their home. 
                      This tranquil waterway offers a different perspective on local life, with traditional fishing 
                      communities living in harmony with nature.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Mangrove forest boat tours
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent birdwatching opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional fishing village visits
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sunset tours available
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Negombo Beach - Golden Sand Paradise</CardTitle>
                <CardDescription>7km of pristine coastline perfect for relaxation and water activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Negombo&apos;s beautiful golden sand beach stretches for 7 kilometers, offering the perfect blend 
                      of relaxation and activity. Watch traditional outrigger boats being launched at dawn, enjoy 
                      fresh seafood at beachside restaurants, or simply soak up the tropical sun while listening 
                      to the gentle waves of the Indian Ocean.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        7km of golden sand coastline
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water sports and boat rides
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beachside dining and bars
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        Strong currents - swim in designated areas only
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Negombo-beach.jpg"
                    alt="Beautiful Negombo Beach with golden sand, traditional fishing boats, palm trees, and clear blue waters"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cultural Experiences & Local Life</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The &quot;Punchi Romaya&quot; Identity</CardTitle>
                <CardDescription>Embrace the local philosophy of finding joy in simple pleasures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Negombo is widely known as &quot;Punchi Romaya&quot; (Little Rome) because of its strong Catholic 
                      heritage and historic churches. Alongside this identity, local life emphasizes finding happiness in everyday moments - 
                      sharing a meal with friends, watching the sunset, celebrating small victories, and maintaining 
                      a positive outlook even in challenging times.
                    </p>
                    <h4 className="font-semibold mb-2">Experience Local Joy:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Join evening beach strolls with locals</li>
                      <li>• Participate in community festivals</li>
                      <li>• Share meals at family-run restaurants</li>
                      <li>• Learn traditional fishing techniques</li>
                      <li>• Attend Catholic church services</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg h-[180px]">
                    <h4 className="font-semibold text-orange-800 mb-2">Local Wisdom</h4>
                    <p className="text-sm text-orange-700 italic">
                      &quot;In Negombo, we celebrate life through faith, family, and the sea. Every day brings 
                      small joys - a good catch, a shared laugh, and a beautiful sunset.&quot;
                    </p>
                    <p className="text-sm text-orange-600 mt-2">- Local saying</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Catholic Heritage & Festivals</CardTitle>
                <CardDescription>Discover the deep Catholic traditions that earned Negombo the name &quot;Little Rome&quot;</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Negombo&apos;s Catholic heritage dates back to Portuguese colonization in the 16th century, creating 
                    a unique blend of European religious traditions with local Sri Lankan culture. The town hosts 
                    some of Sri Lanka&apos;s most vibrant Catholic festivals and maintains a strong sense of community 
                    centered around its beautiful churches.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Major Churches</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• St. Mary&apos;s Church</li>
                        <li>• St. Sebastian&apos;s Church</li>
                        <li>• Our Lady of Perpetual Help</li>
                        <li>• St. Anthony&apos;s Church</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Annual Festivals</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Easter Celebrations (March/April)</li>
                        <li>• Feast of St. Mary (August)</li>
                        <li>• Christmas Festivities (December)</li>
                        <li>• Good Friday Processions</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Cultural Blend</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Portuguese architectural influence</li>
                        <li>• Traditional Sri Lankan devotions</li>
                        <li>• Community-centered celebrations</li>
                        <li>• Multilingual services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coastal Dining */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Negombo: Coastal Culinary Paradise</h2>
          <Card>
            <CardHeader>
              <CardTitle>Seafood, Local Flavors & International Dining</CardTitle>
              <CardDescription>Discover Negombo&apos;s rich coastal food culture shaped by local traditions and global tastes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Negombo&apos;s dining scene is built on fresh seafood, traditional Sri Lankan recipes, and a wide range 
                  of international cuisines available in beachside restaurants and family-run eateries. The town&apos;s 
                  Catholic and coastal heritage has created a unique food culture with strong community traditions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="text-red-800">Must-Try Italian Dishes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-red-700">
                        <li className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 mt-1 flex-shrink-0" />
                          Fresh seafood pasta with local catch
                        </li>
                        <li className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 mt-1 flex-shrink-0" />
                          Wood-fired pizza with Sri Lankan toppings
                        </li>
                        <li className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 mt-1 flex-shrink-0" />
                          Risotto with crab from Negombo Lagoon
                        </li>
                        <li className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 mt-1 flex-shrink-0" />
                          Gelato with tropical fruit flavors
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800">Fusion Specialties</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <Coffee className="w-4 h-4 mt-1 flex-shrink-0" />
                          Seafood lasagna with curry spices
                        </li>
                        <li className="flex items-start gap-2">
                          <Coffee className="w-4 h-4 mt-1 flex-shrink-0" />
                          Coconut milk-based Italian soups
                        </li>
                        <li className="flex items-start gap-2">
                          <Coffee className="w-4 h-4 mt-1 flex-shrink-0" />
                          Pizza with local vegetables and spices
                        </li>
                        <li className="flex items-start gap-2">
                          <Coffee className="w-4 h-4 mt-1 flex-shrink-0" />
                          Ceylon tea-infused Italian desserts
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Top Restaurant Recommendations
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-yellow-700">Beachside Italian</p>
                      <ul className="text-yellow-600 space-y-1">
                        <li>• Dolce Vita - Authentic Italian atmosphere</li>
                        <li>• Lords Restaurant - Fresh seafood pasta</li>
                        <li>• Icebear Guest House - Budget-friendly options</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-yellow-700">Fusion Excellence</p>
                      <ul className="text-yellow-600 space-y-1">
                        <li>• The Ruddy Garden - Creative fusion dishes</li>
                        <li>• Coconut Primitive - Local-Italian blend</li>
                        <li>• Mama&apos;s Coral Beach - Family recipes</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Things to Do */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Adventures</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Water Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Lagoon Boat Tours</h4>
                  <p className="text-sm text-muted-foreground">Explore mangroves and spot exotic birds</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Deep Sea Fishing</h4>
                  <p className="text-sm text-muted-foreground">Join local fishermen for authentic experience</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Catamaran Sailing</h4>
                  <p className="text-sm text-muted-foreground">Sunset sailing along the beautiful coastline</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Snorkeling & Diving</h4>
                  <p className="text-sm text-muted-foreground">Discover coral reefs and marine life</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Church Heritage Tour</h4>
                  <p className="text-sm text-muted-foreground">Visit historic Catholic churches and learn their stories</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fishing Village Visits</h4>
                  <p className="text-sm text-muted-foreground">Experience traditional fishing community life</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cooking Classes</h4>
                  <p className="text-sm text-muted-foreground">Learn to prepare local seafood dishes</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Market Tours</h4>
                  <p className="text-sm text-muted-foreground">Guided tours of fish and spice markets</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Negombo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Budget Accommodations</CardTitle>
                <CardDescription>$10-30 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Backpacker&apos;s hostels near beach</li>
                  <li>• Family-run guesthouses</li>
                  <li>• Basic beach hotels</li>
                  <li>• Shared dormitory options</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Clean, friendly accommodations perfect for travelers seeking authentic local experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mid-Range Hotels</CardTitle>
                <CardDescription>$30-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Beachfront boutique hotels</li>
                  <li>• Colonial-style accommodations</li>
                  <li>• Hotels with pools and restaurants</li>
                  <li>• Air-conditioned comfort</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Perfect balance of comfort, location, and value with excellent amenities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Luxury Resorts</CardTitle>
                <CardDescription>$80+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Beach resort complexes</li>
                  <li>• Spa and wellness centers</li>
                  <li>• Fine dining restaurants</li>
                  <li>• Water sports facilities</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Premium accommodations with world-class amenities and exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to &amp; Around Negombo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Getting to Negombo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Airport (Recommended)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    About 15-20 minutes from Bandaranaike International Airport - perfect for arrival or departure stays.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Taxi: 15-20 minutes ($8-12)</li>
                    <li>• Tuk-tuk: 20-25 minutes ($5-8)</li>
                    <li>• Hotel pickup services available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    Multiple transport options connecting to the capital city.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bus: 1.5 hours ($1-2)</li>
                    <li>• Train: 1.5 hours ($1-3)</li>
                    <li>• Taxi: 1 hour ($15-25)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting Around Negombo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Local Transport</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Tuk-tuk:</strong> Most convenient for short distances</li>
                    <li>• <strong>Bicycle rental:</strong> Perfect for exploring the town</li>
                    <li>• <strong>Walking:</strong> Town center is compact and walkable</li>
                    <li>• <strong>Local buses:</strong> Cheap for longer distances</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Day Trip Options</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Colombo city tour (1 hour away)</li>
                    <li>• Pinnawala Elephant Orphanage (2 hours)</li>
                    <li>• Kandy cultural triangle (3 hours)</li>
                    <li>• Sigiriya day trip (4 hours)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Negombo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700">Peak Season</CardTitle>
                <CardDescription>December - March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Perfect weather, minimal rainfall</li>
                  <li>• Ideal for beach activities</li>
                  <li>• Best fishing season</li>
                  <li>• Festival season with celebrations</li>
                  <li>• Higher accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-yellow-700">Shoulder Season</CardTitle>
                <CardDescription>April & September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Warm weather with occasional showers</li>
                  <li>• Good value accommodation</li>
                  <li>• Fewer crowds</li>
                  <li>• Great for cultural activities</li>
                  <li>• Fresh, green landscapes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-700">Monsoon Season</CardTitle>
                <CardDescription>May - August & October - November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Periods of regular rainfall and humid weather</li>
                  <li>• Lowest accommodation prices</li>
                  <li>• Perfect for indoor cultural activities</li>
                  <li>• Atmospheric church visits</li>
                  <li>• Limited beach activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Essential Negombo Travel Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Cultural Etiquette</h4>
                  <ul className="space-y-2 text-blue-600 text-sm">
                    <li>• Dress modestly when visiting churches</li>
                    <li>• Remove shoes before entering religious buildings</li>
                    <li>• Ask permission before photographing locals</li>
                    <li>• Respect fishing communities and their work</li>
                    <li>• Learn basic Sinhala or Tamil greetings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">Practical Advice</h4>
                  <ul className="space-y-2 text-green-600 text-sm">
                    <li>• Visit fish market early morning for best experience</li>
                    <li>• Negotiate tuk-tuk fares in advance</li>
                    <li>• Try local street food for authentic flavors</li>
                    <li>• Carry cash - many places don&apos;t accept cards</li>
                    <li>• Stay hydrated and use sunscreen</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-blue-700 font-medium mb-2">
                  🌟 Local Insider Tip: 
                </p>
                <p className="text-blue-600 text-sm">
                  Wake up early at least one morning to experience the magical atmosphere of the fish market at dawn. 
                  Join locals for a cup of strong tea and fresh string hoppers, then watch the sunrise over the 
                  Indian Ocean while traditional fishing boats return home - it&apos;s the essence of Negombo&apos;s 
                  vibrant coastal spirit!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Negombo Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Negombo is more than just a convenient stop near the airport - it&apos;s a vibrant introduction to 
                the heart and soul of Sri Lankan coastal life. Here, every day begins with the blessing of the 
                sea&apos;s bounty, continues with the warmth of community spirit, and ends with the simple joy of 
                watching another spectacular sunset over the Indian Ocean.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you&apos;re arriving in Sri Lanka for the first time or saying goodbye after an incredible 
                journey, Negombo offers something special - a chance to slow down, connect with local culture, 
                and experience the genuine hospitality that makes Sri Lanka so unforgettable. From the bustling 
                energy of the fish market to the peaceful devotion of centuries-old churches, from Italian-fusion 
                restaurants to traditional fishing communities, Negombo captures the beautiful diversity that 
                defines modern Sri Lanka.
              </p>
              <p className="text-muted-foreground font-medium">
                Come for the convenience, stay for the culture, and leave with a heart full of Negombo&apos;s 
                - the Negombo way of finding joy in every moment! 🌅🐟⛪️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
