"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, TelescopeIcon as Binoculars, AlertTriangle, Camera, TreePine, Crown, Globe, Leaf, Building, History, Sun, Wind, Droplets, Mountain, Bird, Eye, Target, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { ImageCarousel } from "@/components/ui/image-carousel"


export default function WasgamuwaNationalParkTravelGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Wasgamuwa-National-Park.jpg"
          alt="Magnificent herd of wild elephants at ancient reservoir in Wasgamuwa National Park with historical ruins in background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Wasgamuwa National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Where Ancient History Meets Wild Majesty</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Polonnaruwa & Matale Districts
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <History className="w-4 h-4 mr-1" />
              Ancient Ruins & Wildlife
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Users className="w-4 h-4 mr-1" />
              Less Crowded Paradise
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Discover Wasgamuwa: Sri Lanka's Best Kept Wildlife Secret</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Welcome to Wasgamuwa National Park, a hidden jewel where ancient Sri Lankan history seamlessly blends with pristine wilderness! This extraordinary 39,322-hectare sanctuary offers you the rare opportunity to witness magnificent wildlife roaming freely among ancient ruins from the Polonnaruwa period, creating magical moments you'll find nowhere else on Earth.
            </p>
            <p className="text-lg mb-4">
              Unlike the crowded safari destinations, Wasgamuwa provides an intimate wildlife experience where you can enjoy peaceful encounters with Sri Lanka's iconic species. Home to over 150 wild elephants, rare bird species, and ancient reservoirs that have sustained life for millennia, this park represents the perfect harmony between conservation and cultural heritage.
            </p>
            <p className="text-lg">
              Whether you're seeking the thrill of spotting elusive sloth bears, the serenity of watching elephants bathe in ancient reservoirs, or the excitement of discovering historical ruins deep in the jungle, Wasgamuwa offers an authentic Sri Lankan adventure that few travelers ever experience.
            </p>
          </div>
        </section>

        {/* Did You Know Card */}
        <section className="mb-12">
          <Card className="border-blue-200 bg-blue-50/30 dark:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <Lightbulb className="w-5 h-5" />
                Did You Know? Wasgamuwa's Ancient Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 dark:text-blue-300">
                Wasgamuwa National Park contains remarkable ancient irrigation systems constructed during the reign of King Parākramabāhu I (1153-1186 CE), including the famous Kalinga Yoda Ela canal. These same water sources that sustained ancient civilizations continue to support wildlife today, making this one of the world's longest continuously functioning wildlife corridors!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Wasgamuwa Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Wasgamuwa National Park Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Established:</strong> 1984 (Gazetted as National Park)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 393 km² (152 sq miles)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Elephant Population:</strong> ~150 individuals
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Historical Sites:</strong> Ancient ruins & reservoirs
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> July to September (Dry Season) & December to March
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bird className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Bird Species:</strong> 143 recorded species
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Get There */}
          <section className="flex-1">
            <Card className="border-blue-200 bg-blue-50/30 dark:bg-blue-950/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                  <MapPin className="w-5 h-5" />
                  How to Get to Wasgamuwa National Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Colombo (Recommended Route)</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 225km (140 miles)</li>
                      <li>• <strong>Time:</strong> 4-5 hours by car</li>
                      <li>• <strong>Route:</strong> A1 → Dambulla → Habarana → Park</li>
                      <li>• <strong>Cost:</strong> Rs. 8,000-12,000 by taxi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Cultural Triangle</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Polonnaruwa:</strong> 45km (1 hour)</li>
                      <li>• <strong>Sigiriya:</strong> 60km (1.5 hours)</li>
                      <li>• <strong>Dambulla:</strong> 80km (2 hours)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Perfect Combo:</strong> Visit Wasgamuwa as part of your Cultural Triangle tour - it's perfectly positioned between Polonnaruwa and Sigiriya!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* What Makes Wasgamuwa Special */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Makes Wasgamuwa Truly Special</h2>
          <div className="grid md:grid-cols-1 gap-8">
            
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5 text-green-500" />
                  Wildlife Among Ancient Ruins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Elephants grazing near ancient stone ruins", title: "Wildlife & History", caption: "Ancient ruins provide stunning backdrops" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "2000-year-old reservoir with elephants bathing", title: "Ancient Engineering", caption: "Historic reservoirs still sustaining wildlife" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Stone pillars and wildlife in jungle setting", title: "Archaeological Wonders", caption: "Discovering history in the wilderness" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Wasgamuwa is the only national park where you can witness elephants roaming freely among ancient ruins dating back to the Polonnaruwa period (12th century CE). Ancient stone reservoirs, pillars, and foundations create a magical setting where wildlife and history coexist in perfect harmony.
                    </p>
                    <h4 className="font-semibold mb-2">Historical Highlights:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Ancient irrigation systems from King Parākramabāhu I period</li>
                      <li>• Kalinga Yoda Ela canal (12th century CE)</li>
                      <li>• Ruins of ancient settlements and temples</li>
                      <li>• Chulangani chaitya built by King Mahanaga</li>
                      <li>• Historical battle site between Dutthagamani and Ellalan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  Peaceful, Uncrowded Safari Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Unlike crowded safari destinations, Wasgamuwa offers intimate wildlife encounters with minimal tourist traffic. You'll often have the entire park to yourself, creating magical moments of connection with nature that simply aren't possible in busier parks.
                    </p>
                    <h4 className="font-semibold mb-2">Peaceful Experience Benefits:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Fewer than 50 visitors per day on average</li>
                      <li>• No jeep traffic jams around wildlife sightings</li>
                      <li>• More relaxed animal behavior for better photography</li>
                      <li>• Longer time to observe and enjoy wildlife encounters</li>
                      <li>• Authentic wilderness experience without crowds</li>
                    </ul>
                  </div>
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Single safari jeep with elephant herd", title: "Intimate Encounters", caption: "Personal wildlife experiences" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Peaceful morning safari scene", title: "Tranquil Mornings", caption: "Serene start to your day" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Photographer alone with wildlife", title: "Perfect Photography", caption: "Unobstructed shots without crowds" }
                      ]}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-500" />
                  Unique Wildlife You Can Only See Here
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Rare sloth bear in natural habitat", title: "Elusive Sloth Bears", caption: "One of the few places to spot them" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Purple heron fishing in ancient reservoir", title: "Rare Water Birds", caption: "Unique species in historical setting" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Toque macaques playing near ruins", title: "Endemic Primates", caption: "Sri Lankan species in their element" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Wasgamuwa's unique ecosystem supports several rare and endemic species that are difficult or impossible to spot elsewhere in Sri Lanka. The park's location at the intersection of wet and dry zones creates diverse habitats perfect for specialized wildlife.
                    </p>
                    <h4 className="font-semibold mb-2">Rare Species Specialties:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Sloth bears (highest density outside Yala Block II)</li>
                      <li>• Purple heron and other rare water birds</li>
                      <li>• Endemic toque macaques in large troops</li>
                      <li>• Mugger crocodiles in ancient reservoirs</li>
                      <li>• Sri Lankan junglefowl in pristine habitat</li>
                      <li>• Various endemic butterfly species</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wildlife Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wasgamuwa's Wildlife Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Asian Elephants</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Over 150 elephants roam freely, often gathering around ancient reservoirs. Best elephant bathing experiences in Sri Lanka!
                </p>
                <Badge variant="outline" className="text-green-600">🐘 Almost Guaranteed Sightings</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Sloth Bears</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Elusive and rare, Wasgamuwa offers one of your best chances to spot these fascinating creatures in the wild.
                </p>
                <Badge variant="outline" className="text-purple-600">🐻 Rare Encounters</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Bird className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Water Birds</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  143 bird species including rare purple herons, painted storks, and endemic Sri Lankan junglefowl.
                </p>
                <Badge variant="outline" className="text-blue-600">🦅 Birdwatcher's Paradise</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Times to Visit */}
        <section className="mb-12">
          <Card className="border-green-200 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <Calendar className="w-5 h-5" />
                Best Times to Visit Wasgamuwa National Park
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Dry Season (July - September)</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-300">Peak Wildlife Season</h5>
                      <p className="text-sm text-muted-foreground">Animals gather around water sources, making sightings more predictable. Best elephant encounters around ancient reservoirs.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-300">Weather Advantage</h5>
                      <p className="text-sm text-muted-foreground">Clear skies perfect for photography, cooler mornings ideal for safari drives.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Cool Season (December - March)</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-300">Comfortable Climate</h5>
                      <p className="text-sm text-muted-foreground">Pleasant temperatures for longer safari drives. Less dust, better visibility.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 dark:text-green-300">Bird Migration</h5>
                      <p className="text-sm text-muted-foreground">Migratory species arrive, increasing bird diversity significantly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Planning Your Safari */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Planning Your Wasgamuwa Safari Adventure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Safari Options & Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Morning Safari (6:00 AM - 11:00 AM)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Best for elephant sightings and bird watching. Cool temperatures perfect for photography.</p>
                    <p className="text-sm font-medium">Rs. 3,500 per person</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Afternoon Safari (2:00 PM - 6:30 PM)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Great for sloth bear spotting and sunset photography among ruins.</p>
                    <p className="text-sm font-medium">Rs. 3,500 per person</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Full Day Safari (6:00 AM - 6:30 PM)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Complete experience including lunch at ranger station. Best value for wildlife enthusiasts.</p>
                    <p className="text-sm font-medium">Rs. 6,000 per person</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">Photography Equipment</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Camera with telephoto lens (200-400mm recommended)</li>
                      <li>• Extra batteries and memory cards</li>
                      <li>• Dust protection for equipment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">Comfort Essentials</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Wide-brimmed hat and sunglasses</li>
                      <li>• Light, breathable clothing in neutral colors</li>
                      <li>• Comfortable closed-toe shoes</li>
                      <li>• Water bottle and light snacks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Did You Know Card 3 */}
        <section className="mb-12">
          <Card className="border-indigo-200 bg-indigo-50/30 dark:bg-indigo-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800 dark:text-indigo-200">
                <Crown className="w-5 h-5" />
                Did You Know? Royal Elephant Sanctuary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-700 dark:text-indigo-300">
                Ancient texts reveal that Wasgamuwa was once a royal elephant sanctuary where kings would come to capture elephants for ceremonies and warfare. The traditional elephant corridors and water sources established then continue to guide elephant movements today!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Conservation & Respect */}
        <section className="mb-12">
          <Card className="border-green-200 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <CheckCircle className="w-5 h-5" />
                Responsible Safari Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Wildlife Respect</h4>
                  <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                    <li>• Maintain safe distance from all animals</li>
                    <li>• No loud noises or sudden movements</li>
                    <li>• Never feed wildlife</li>
                    <li>• Respect elephant right-of-way on roads</li>
                    <li>• Photography without flash only</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Cultural Heritage</h4>
                  <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                    <li>• Do not touch or climb on ancient ruins</li>
                    <li>• Respect historical sites and inscriptions</li>
                    <li>• Follow designated paths near archaeological areas</li>
                    <li>• Support local communities and guides</li>
                    <li>• Leave only footprints, take only memories</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Experience the Magic of Wasgamuwa</h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed mb-6">
                Wasgamuwa National Park offers something truly special - a chance to witness magnificent wildlife in the same landscapes where ancient civilizations thrived. This hidden gem provides intimate encounters with nature, rich historical discoveries, and peaceful moments that will stay with you forever.
              </p>
              <div className="flex justify-center">
                <Badge variant="outline" className="text-blue-700 border-blue-300 bg-white dark:bg-gray-800">
                  <History className="w-4 h-4 mr-1" />
                  Where History Lives and Wildlife Thrives
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <History className="w-4 h-4 mr-1" />
              Est. 1984
            </Badge>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Discover Wasgamuwa: Sri Lanka&apos;s Untamed Wilderness
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-white/90 leading-relaxed font-medium">
            <p className="text-lg mb-4 tracking-wide">
              Nestled between the Mahaweli and Amban Rivers, Wasgamuwa National Park stands as one of 
              Sri Lanka&apos;s most pristine wildlife sanctuaries. Established in 1984, this 36,948-hectare 
              paradise serves as a crucial elephant corridor and hosts a remarkable diversity of flora 
              and fauna.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              The park&apos;s name &quot;Wasgamuwa&quot; derives from the words &quot;Walas Gamuwa,&quot; meaning the &quot;woods 
              of bear,&quot; reflecting its historical significance as a habitat for sloth bears. Today, 
              while bears still roam these forests, the park is particularly renowned for its 
              substantial elephant population and peaceful atmosphere away from the more crowded 
              safari circuits.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              Beyond its wildlife significance, Wasgamuwa holds ancient ruins dating back to the 
              Polonnaruwa period, including ancient tanks and Buddhist temples, making it a unique 
              blend of natural and cultural heritage.
            </p>
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/40 border-l-4 border-amber-600 dark:border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Safari Guidelines</h4>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Entry Requirements:</strong> Visitors must obtain permits from the Department 
                  of Wildlife Conservation. Safari must be conducted with registered guides and vehicles.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Safety:</strong> Maintain safe distance from wildlife. Never exit the vehicle 
                  during safari except in designated areas.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100">
                  <strong>Best Time:</strong> November to May offers optimal wildlife viewing conditions.
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
                Essential Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Area:</strong> 36,948 hectares
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Climate:</strong> Dry zone tropical
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Safari Duration:</strong> 3-4 hours
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Peak Season:</strong> November-May
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Elevation:</strong> 76-536m
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Habitat:</strong> Dry-mixed evergreen
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wildlife */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Wildlife and Biodiversity</h2>
          
          <div className="grid gap-8">
            {/* Elephants */}
            <Card className="border-l-4 border-l-gray-600 dark:border-l-gray-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  Elephants of Wasgamuwa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <Image
                      src="/wasgamuwa-elephants.jpg"
                      alt="Wild elephants roaming in Wasgamuwa National Park"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 mb-4">
                      Wasgamuwa is home to significant herds of Sri Lankan elephants, known for their 
                      peaceful nature compared to other regions. The park serves as a vital elephant 
                      corridor, allowing these magnificent creatures to move between different habitats. 
                      Studies have shown that Wasgamuwa&apos;s elephant population exhibits unique social 
                      behaviors and migration patterns, making it an important site for elephant conservation 
                      and research.
                    </p>
                    <p className="text-gray-800 dark:text-white/90 mb-4">
                      The park&apos;s elephant herds are particularly known for their family-oriented behavior, 
                      with large matriarchal groups often seen protecting their young and teaching them 
                      essential survival skills. These elephants have adapted well to the park&apos;s varying 
                      terrain, moving between the riverine forests and grasslands as seasons change.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                      <li>• Large family herds</li>
                      <li>• Natural behavior patterns</li>
                      <li>• Year-round presence</li>
                      <li>• Important migration routes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Wildlife */}
            <Card className="border-l-4 border-l-green-600 dark:border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Diverse Wildlife
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Mammals</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Sri Lankan Sloth Bear</li>
                      <li>• Purple-faced Langur</li>
                      <li>• Sri Lankan Leopard</li>
                      <li>• Water Buffalo</li>
                      <li>• Golden Jackal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Birds</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Sri Lanka Junglefowl</li>
                      <li>• Red-faced Malkoha</li>
                      <li>• Endemic Spurfowl</li>
                      <li>• Various Eagle species</li>
                      <li>• Painted Stork</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ancient Ruins */}
        <section className="mb-12">
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-50">
                <History className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Historical Heritage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-800 dark:text-white/90 mb-4">
                  Wasgamuwa&apos;s landscape is dotted with archaeological treasures dating back to the 
                  ancient Polonnaruwa period, adding a cultural dimension to its natural splendor. 
                  The park&apos;s territory was once part of a thriving ancient civilization, as evidenced 
                  by the numerous ruins and irrigation works found throughout the area.
                </p>
                <p className="text-gray-800 dark:text-white/90">
                  The ancient Kalinga Yoda Ela, a remarkable feat of hydraulic engineering, stands as 
                  testament to the advanced civilization that once flourished here. This canal system, 
                  built during the reign of King Parakramabahu I (1153-1186 CE), showcases the 
                  sophisticated water management techniques of ancient Sri Lanka.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-50">Ancient Sites</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Kalinga Yoda Ela</li>
                      <li>• Ancient Buddhist temples</li>
                      <li>• Historic water tanks</li>
                      <li>• Stone inscriptions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-50">Historical Significance</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Ancient irrigation systems</li>
                      <li>• Religious monuments</li>
                      <li>• Trade route remnants</li>
                      <li>• Cultural heritage sites</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Information */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-50">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Planning Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Access Details</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Located 225km from Colombo</li>
                    <li>• Accessible via Polonnaruwa</li>
                    <li>• 4WD vehicle required</li>
                    <li>• Prior booking recommended</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Accommodation</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Wildlife bungalows with full amenities</li>
                    <li>• Eco-friendly camping facilities</li>
                    <li>• Luxury safari lodges nearby</li>
                    <li>• Traditional village homestays</li>
                    <li>• Park circuit bungalows</li>
                    <li>• Mobile camping options</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-800 dark:text-white/90">
                    Accommodation ranges from basic camping to luxury lodges. Wildlife bungalows 
                    offer authentic safari experience with modern comforts. Advance booking is 
                    essential, especially during peak season.
                  </p>
                </div>
              </div>
              <h4 className="font-semibold mb-3 mt-6 text-blue-900 dark:text-blue-50">Seasonal Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-100">Dry Season (July-September)</h5>
                  <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                    <li>• Best wildlife viewing opportunities</li>
                    <li>• Animals concentrate near water bodies</li>
                    <li>• Easier navigation of park tracks</li>
                    <li>• Ideal photography conditions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-100">Wet Season (October-April)</h5>
                  <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                    <li>• Lush green landscapes</li>
                    <li>• Migratory birds present</li>
                    <li>• Fewer tourists</li>
                    <li>• Challenging but rewarding safaris</li>
                  </ul>
                </div>
              </div>
              
              <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Available Activities</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                  <li>• Guided wildlife safaris (morning/evening)</li>
                  <li>• Bird watching tours</li>
                  <li>• Archaeological site visits</li>
                  <li>• Nature photography workshops</li>
                </ul>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                  <li>• Guided nature walks (with permits)</li>
                  <li>• Cultural village visits</li>
                  <li>• Research opportunities</li>
                  <li>• Educational programs</li>
                </ul>
              </div>

              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-50 font-medium">
                  <strong>💡 Pro Tip:</strong> Book morning safaris (5:30-9:30 AM) for best wildlife sightings. 
                  Afternoon sessions (2:30-6:00 PM) are ideal for bird watching and visiting historical sites. 
                  Consider a full-day safari package to maximize your wildlife viewing opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photography Guide */}
        <section className="mb-12">
          <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-900 dark:text-pink-50">
                <Camera className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                Safari Photography Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Best Photo Opportunities</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Early morning elephant herds</li>
                    <li>• Water holes at dawn</li>
                    <li>• Ancient ruins backdrop</li>
                    <li>• River crossing points</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Camera Tips</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Telephoto lens (200-600mm) recommended</li>
                    <li>• Fast shutter speeds (1/1000+) for wildlife</li>
                    <li>• Image stabilization essential</li>
                    <li>• Professional dust protection gear</li>
                    <li>• Wide-angle for landscapes (16-35mm)</li>
                    <li>• Multiple camera bodies if possible</li>
                    <li>• Extra batteries and memory cards</li>
                    <li>• Monopod or beanbag support</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-800 dark:text-white/90">
                    Morning light (6-8 AM) and evening golden hour (4-6 PM) offer the best 
                    photographic opportunities. Consider weather-sealed equipment during wet season.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
