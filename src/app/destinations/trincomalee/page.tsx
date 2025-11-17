"use client"

import Image from "next/image"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Anchor, TriangleAlert, Thermometer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function TrincomaleeTravelGuide() {


  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section id="introduction" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Trinco.jpeg"
          alt="Stunning aerial view of Trincomalee showing pristine beaches, turquoise waters, and the ancient Koneswaram temple on rocky cliffs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trincomalee</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Eastern Coastal Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Anchor className="w-4 h-4 mr-1" />
              World&apos;s 5th Largest Natural Harbor
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Pristine Beaches
            </Badge>
          </div>
        </div>
      </section>
      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Top Attractions</a>
          <a href="#more-places" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">More Places</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Trincomalee: Where History Meets Paradise</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover Trincomalee, Sri Lankas best-kept secret on the stunning eastern coast. This ancient port city
              boasts one of the worlds finest natural harbors, pristine white sand beaches, crystal-clear turquoise
              waters, and a rich tapestry of Tamil, Sinhalese, and colonial history spanning over 2,000 years.
            </p>
            <p className="text-lg">
              From the sacred Koneswaram Temple perched dramatically on Swami Rock to the untouched beaches of Nilaveli
              and Uppuveli, from incredible whale watching opportunities to world-class diving and snorkeling,
              Trincomalee offers an authentic Sri Lankan coastal experience away from the crowds of the south and west
              coasts.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12" >
          {/* Quick Trincomalee Facts */}
          <section className="flex-1">
            <Card className="scroll-mt-40" id="quick-facts">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Trincomalee Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Ancient History:</strong> Over 2,000 years old
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Average Temperature:</strong> 28.5°C (83.3°F).
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Harbor Ranking:</strong> World&apos;s 5th largest natural harbor
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Best Beach Season:</strong>May to September
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 257km (5-6 hours)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous for:</strong>Whale watching & pristine beaches
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 3-5 days
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Trincomalee is typically hot and humid, so dress accordingly</li>
                      <li>• Carry water and snacks for the journey</li>
                      <li>• Book accommodations in advance during peak season</li>
                      <li>• Consider staying overnight to explore all sites properly</li>
                    </ul>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1–2 full days to explore the sacred sites, ancient tanks, and local culture at a relaxed pace.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">April to October (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Trincomalee */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Trincomalee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 257km (127 miles) from Colombo</li>
                      <li>• <strong>Route:</strong>Colombo → Kurunegala → Dambulla → Habarana → Trincomalee</li>
                      <li>• <strong>Duration:</strong> 5-7 hours</li>
                      <li>• <strong>Cost:</strong> $60-90 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul><div>
                      <br></br>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Air (Fastest)</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Airport:</strong> China Bay Airport (military, limited civilian use)</li>
                        <li>• <strong>Duration:</strong> 45 minutes flight</li>
                        <li>• <strong>Availability:</strong> Charter flights only</li>
                      </ul>
                    </div>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Trincoma. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                      <li>• <strong>Route:</strong>Colombo → Kurunegala → Dambulla → Habarana → Trincomalee</li>
                      <li>• <strong>Duration:</strong> 6-7 hours</li>
                      <li>• <strong>Cost:</strong> $4-8 USD (air-conditioned buses)</li>
                      <li>• <strong>Frequency:</strong> Multiple departures daily</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Trincomalee</li>
                      <li>• <strong>Duration:</strong> 6-7 hours</li>
                      <li>• <strong>Cost:</strong> $2-8 USD (depending on class)</li>
                      <li>• <strong>Scenic journey:</strong> Through countryside</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>


        {/* Top Attractions */}
        <section id="attractions" className="mb-12 scroll-mt-40">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Trincomalee</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Fort Frederick</CardTitle>
                <CardDescription>Historic fort with stunning views and rich history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Fort-Frederick.jpg",
                        alt: "Panoramic view from Fort Frederick with ocean backdrop",
                        caption: "Sunrise at Fort Frederick",
                        title: "Fort Frederick - Sunrise View"
                      },
                      {
                        src: "/Fort-Frederick1.jpg",
                        alt: "View from Fort Frederick",
                        caption: "Inside Fort Frederick",
                        title: "Viewpoint Tea Country"
                      },
                      {
                        src: "/placeholder.svg?height=300&width=400",
                        alt: "Lipton's Seat viewpoint showing panoramic views across seven provinces with endless tea plantations",
                        caption: "Viewpoint across 7 provinces",
                        title: "Panoramic Viewpoint"
                      }
                    ]}
                  />

                  <div>
                    <p className="text-muted-foreground mb-4">
                      This was built during the Portuguese ruled season in 1600s and later expanded by the Dutch
                      in the 17th century. The fort offers panoramic views of the Trincomalee harbor and coastline.
                      Explore the ramparts, old cannons, and historic buildings within the fort complex. It is a great
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Koneshwaram Kovil is located within this fort complex. Also a one of Irish Colonel Arthur Wellesley&apos;s bungalow also located here.
                      spot for photography, especially during sunrise and sunset. The fort is still an active
                      military base, so some areas may be restricted. Entry is free, and it is open to visitors daily.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Portuguese colonial architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water temperatures around 40°C (104°F)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rich in minerals with believed healing properties
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Visitor Information:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                    <strong>Entry Fee:</strong> Small nominal charge for maintenance.
                    <strong>Best Time:</strong> Early morning or late afternoon to avoid crowds.
                  </p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Note:</strong> Bring a towel and change of clothes. Photography is allowed but be respectful
                    of pilgrims and religious activities. The water is safe for bathing.
                  </p>
                </div>
              </CardContent>
            </Card>
            {/* Koneswaram Temple */}
            <Card>
              <CardHeader>
                <CardTitle>2. Koneswaram Temple</CardTitle>
                <CardDescription>Ancient Hindu temple on dramatic clifftop - One of the Pancha Ishwarams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Koneshwaram.jpeg",
                        alt: "Panoramic view from Koneshwaram Temple with Indian Ocean backdrop",
                        caption: "Sunrise at Koneshwaram Temple",
                        title: "Koneshwaram Temple - Sunrise View"
                      },

                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Rising majestically 130 feet above the churning Indian Ocean on the iconic Swami Rock,
                      Koneswaram Temple stands as one of Sri Lanka&apos;s most sacred and dramatically located temples.
                      This ancient Hindu temple, dedicated to Lord Shiva in his form as Koneshwara (&quot;Lord of the East&quot;),
                      is one of the revered Pancha Ishwarams (five abodes of Shiva) and has been a place of
                      continuous worship for over 2,000 years.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The temple&apos;s stunning Dravidian architecture features a magnificent 7-tiered gopuram (tower)
                      adorned with intricate sculptures of Hindu deities, mythical creatures, and celestial beings.
                      Ancient chronicles describe this as the legendary &quot;Temple of a Thousand Pillars&quot; (Dakshina
                      Kailasam) before its destruction by Portuguese colonizers in 1624. The current structure,
                      lovingly rebuilt in 1963, maintains the spiritual essence and architectural grandeur.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 2,000 years of continuous worship and pilgrimage tradition
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise views over the endless Indian Ocean
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Magnificent 7-tiered gopuram with hundreds of intricate carvings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sacred to both Hindu and Buddhist communities across Sri Lanka
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rich historical significance in ancient Tamil and Sanskrit literature
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Extended Historical & Cultural Details */}
                <div className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Ancient History & Legends</h4>
                      <div className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                        <p>
                          <strong>Ramayana Connection:</strong> According to legend, King Ravana&apos;s mother Kaikasi
                          worshipped Lord Shiva at this very spot, making it one of the most ancient religious sites in Asia.
                        </p>
                        <p>
                          <strong>Mahabharata References:</strong> The temple is mentioned in ancient Sanskrit texts
                          as &quot;Gokanna&quot; or &quot;Gokarna,&quot; meaning &quot;cow&apos;s ear,&quot; referring to the unique shape of the bay.
                        </p>
                        <p>
                          <strong>Tamil Literature:</strong> Celebrated in classical Tamil works including Tevaram hymns
                          by Saint Sambandar (7th century AD), who called it the &quot;Rome of the Pagans.&quot;
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Architectural Marvels</h4>
                      <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <p>
                          <strong>Gopuram Design:</strong> The 7-tiered tower follows traditional South Indian
                          Dravidian architecture with over 1,000 individual sculptural elements.
                        </p>
                        <p>
                          <strong>Sacred Geometry:</strong> The temple layout follows ancient Vastu Shastra principles,
                          with the main shrine perfectly aligned to face the rising sun.
                        </p>
                        <p>
                          <strong>Stone Carving:</strong> Features intricate depictions of the 108 dance poses
                          (Karanas) of Lord Shiva, mythological scenes, and celestial beings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Religious Significance & Festivals</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                      <div>
                        <p className="mb-2"><strong>Major Festivals:</strong></p>
                        <ul className="space-y-1">
                          <li>• <strong>Maha Shivaratri:</strong> Grand celebration with thousands of devotees</li>
                          <li>• <strong>Koneswaram Festival:</strong> Annual 22-day festival in March/April</li>
                          <li>• <strong>Thai Pusam:</strong> Colorful procession with decorated chariots</li>
                          <li>• <strong>Navaratri:</strong> Nine nights celebrating divine feminine energy</li>
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2"><strong>Sacred Elements:</strong></p>
                        <ul className="space-y-1">
                          <li>• <strong>Shiva Lingam:</strong> Main deity representing cosmic consciousness</li>
                          <li>• <strong>Sacred Well:</strong> Ancient fresh water source called &quot;Papmochani&quot;</li>
                          <li>• <strong>Swami Rock:</strong> Natural formation considered Lord Shiva&apos;s meditation seat</li>
                          <li>• <strong>Prayer Halls:</strong> Multiple mandapams for different rituals</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/50 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">Colonial Period & Reconstruction</h4>
                    <div className="text-sm text-red-700 dark:text-red-300 space-y-2">
                      <p>
                        <strong>Portuguese Destruction (1624):</strong> The original temple complex was systematically
                        destroyed by Portuguese colonizers who built Fort Frederick using the temple stones. Many
                        precious artifacts and sculptures were thrown into the ocean.
                      </p>
                      <p>
                        <strong>Dutch Period:</strong> During Dutch rule, the site remained abandoned, though local
                        Hindus continued secret worship in small shrines around the area.
                      </p>
                      <p>
                        <strong>Modern Restoration (1963):</strong> The temple was magnificently rebuilt by the
                        Hindu community with support from devotees across South Asia. The new structure combines
                        traditional Dravidian architecture with modern engineering techniques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/50 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Visitor Experience & Practical Information</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-orange-700 dark:text-orange-300">
                    <div>
                      <p className="mb-2"><strong>Best Times to Visit:</strong></p>
                      <ul className="space-y-1">
                        <li>• <strong>Sunrise:</strong> 5:30-7:00 AM for spectacular ocean views</li>
                        <li>• <strong>Evening:</strong> 5:00-6:30 PM for beautiful sunset lighting</li>
                        <li>• <strong>Full Moon:</strong> Night visits during full moon are magical</li>
                        <li>• <strong>Festivals:</strong> Experience authentic celebrations and rituals</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Temple Etiquette:</strong></p>
                      <ul className="space-y-1">
                        <li>• Remove shoes before entering temple premises</li>
                        <li>• Dress modestly (covered shoulders and legs)</li>
                        <li>• Photography allowed outside, restricted inside sanctum</li>
                        <li>• Respectful behavior during prayers and ceremonies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Lover's Leap Information */}
                <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg border-l-4 border-indigo-400">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">🌊 Lover&apos;s Leap - The Dramatic Cliff</h4>
                  <div className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
                    <p>
                      <strong>Historic Tragedy:</strong> Just beside Koneswaram Temple lies the famous Lover&apos;s Leap,
                      a dramatic cliff where according to legend, a Dutch officer&apos;s daughter and her native lover
                      chose to leap to their deaths rather than be separated by colonial prejudices.
                    </p>
                    <p>
                      <strong>Spectacular Views:</strong> Today, this 130-foot cliff offers some of the most breathtaking
                      panoramic views of the Indian Ocean. The spot provides an incredible vantage point for photography
                      and witnessing the raw power of waves crashing against the rocks below.
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-amber-600 dark:text-amber-400">⚠️</span>
                      <strong>Safety Note:</strong> Exercise extreme caution near the cliff edge. Strong winds and
                      unstable footing make this area potentially dangerous.
                    </p>
                  </div>
                </div>

                {/* See More Details Button */}
                <div className="mt-6 text-center">
                  <Link href="/destinations/koneswaram-temple-trincomalee">
                    <Button
                      className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                      variant="default"
                    >
                      See More Details About Koneswaram Temple
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Trincomalee Natural Harbour */}
            <Card>
              <CardHeader>
                <CardTitle>3. Trincomalee Natural Harbour</CardTitle>
                <CardDescription>World&apos;s 5th largest natural deep-water harbour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Trincomalee boasts one of the world&apos;s most magnificent natural harbours, ranked as the 5th largest
                      globally. This deep-water harbour stretches over 30 square kilometers and can accommodate the
                      largest naval vessels. Its strategic importance has made it a coveted prize for colonial powers
                      throughout history.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The harbour&apos;s crystal-clear blue waters are protected by land on three sides, creating perfect
                      conditions for both commercial shipping and recreational activities. Admiral Horatio Nelson once
                      declared it the &quot;finest harbour in the world,&quot; and today it continues to serve as Sri Lanka&apos;s
                      premier eastern port.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        5th largest natural harbour in the world
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 30 square kilometers of protected waters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Strategic naval importance for centuries
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for boat tours and fishing expeditions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Praised by Admiral Nelson as &quot;finest harbour in the world&quot;
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Trinco.jpeg",
                        alt: "Panoramic view from Fort Frederick with ocean backdrop",
                        caption: "Sunrise at Fort Frederick",
                        title: "Fort Frederick - Sunrise View"
                      },

                    ]}
                  />
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Harbour Activities:</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Boat tours to explore the harbour&apos;s hidden coves and bays</li>
                    <li>• Sport fishing for marlin, tuna, and other deep-sea species</li>
                    <li>• Sunset cruises with spectacular views of the coastline</li>
                    <li>• Historical tours explaining colonial naval significance</li>
                    <li>• Photography opportunities from various viewpoints</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Nilaveli Beach */}
            <Card>
              <CardHeader>
                <CardTitle>4. Nilaveli Beach</CardTitle>
                <CardDescription>Pristine white sand paradise - Sri Lanka&apos;s most beautiful beach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Stretching for over 5 kilometers along the northeastern coast, Nilaveli Beach is often hailed as
                      Sri Lanka&apos;s most spectacular beach. This untouched paradise features powder-soft white sand,
                      crystal-clear turquoise waters, and gentle waves that make it perfect for swimming and water sports.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Unlike the busier southern beaches, Nilaveli maintains its pristine character with minimal
                      development and fewer crowds. The beach serves as the gateway to Pigeon Island National Park,
                      and its shallow, calm waters make it ideal for families with children. Palm trees provide natural
                      shade, and local fishermen add authentic charm to the scene.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 5km of pristine powder-white sand
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear, calm waters perfect for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Gateway to Pigeon Island National Park
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded than southern Sri Lankan beaches
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for families and water sports enthusiasts
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Nilaveli-beach.jpg",
                        alt: "Nilaveli beach showing white sand, turquoise waters, and palm trees with few tourists",
                        caption: "Nilaveli Beach Paradise",
                        title: "Nilaveli Beach Paradise"
                      },
                      {
                        src: "/Nilaveli-beach1.jpg",
                        alt: "Wide view of Nilaveli beach with white sand, turquoise waters, and palm trees",
                        caption: "Nilaveli Beach Scenic View",
                        title: "Nilaveli Beach Scenic View"
                      },
                      {
                        src: "/Nilaveli-beach2.jpg",
                        alt: "Nilaveli beach showing white sand, turquoise waters, and palm trees with few tourists",
                        caption: "Nilaveli Beach View",
                        title: "Nilaveli Beach View"
                      },
                      {
                        src: "/Nilaveli-beach3.jpg",
                        alt: "Nilaveli beach showing white sand, turquoise waters, and palm trees with few tourists",
                        caption: "Nilaveli Beach View",
                        title: "Nilaveli Beach View"
                      },
                    ]}
                  />
                  {/* <div>
                    {createAttractionCarousel(nilaveliImages, nilaveliIndex, setNilaveliIndex) || (
                      <Image
                        src="/Pasikuda.jpeg"
                        alt="Pristine Nilaveli Beach showing white sand, turquoise waters, and palm trees with few tourists"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div> */}
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                  <h4 className="font-semibold text-teal-800 mb-2">Beach Activities & Tips:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-700">
                    <div>
                      <p className="mb-2"><strong>Water Activities:</strong></p>
                      <ul className="space-y-1">
                        <li>• Snorkeling and diving excursions</li>
                        <li>• Boat trips to Pigeon Island</li>
                        <li>• Kayaking and paddleboarding</li>
                        <li>• Deep-sea fishing trips</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Best Experience:</strong></p>
                      <ul className="space-y-1">
                        <li>• Visit early morning for serenity</li>
                        <li>• Bring reef-safe sunscreen</li>
                        <li>• Try fresh seafood from beach vendors</li>
                        <li>• Stay for spectacular sunset views</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pigeon Island */}
            <Card>
              <CardHeader>
                <CardTitle>5. Pigeon Island National Park</CardTitle>
                <CardDescription>Marine sanctuary with incredible coral reefs and diverse marine life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* <div>
                    {createAttractionCarousel(pigeonIslandImages, pigeonIslandIndex, setPigeonIslandIndex) || (
                      <Image
                        src="/Sea-turtle-bentota.jpeg"
                        alt="Pigeon Island showing coral reefs, tropical fish, and snorkelers in crystal clear waters"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div> */}
                  <ImageCarousel
                    images={[
                      {
                        src: "/Pigeon-island.jpg",
                        alt: "Pigeon Island National Park with coral reefs and turquoise waters",
                        caption: "Pigeon Island View",
                        title: "Pigeon Island View"
                      },
                      {
                        src: "/Pigeon-island1.webp",
                        alt: "Wide view of Pigeon Island National Park with coral reefs and turquoise waters",
                        caption: "Pigeon Island View",
                        title: "Pigeon Island View"
                      },
                      {
                        src: "/Pigeon-island2.jpg",
                        alt: "Pigeon Island National Park with coral reefs and turquoise waters",
                        caption: "Pigeon Island View",
                        title: "Pigeon Island View"
                      },
                      {
                        src: "/Pigeon-island6.jpg",
                        alt: "Pigeon Island National Park with coral reefs and turquoise waters",
                        caption: "Pigeon Island View",
                        title: "Pigeon Island View"
                      },
                      {
                        src: "/Pigeon-island4.jpg",
                        alt: "Pigeon Island National Park with coral reefs and turquoise waters",
                        caption: "Pigeon Island View",
                        title: "Pigeon Island View"
                      },
                      {
                        src: "/Pigeon-island5.jpg",
                        alt: "Pigeon Island National Park with coral reefs and turquoise waters",
                        caption: "Pigeon Island View",
                        title: "Pigeon Island View"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a 15-minute boat ride from Nilaveli Beach, Pigeon Island National Park consists of two small
                      coral islands surrounded by some of Sri Lanka&apos;s most pristine coral reefs. This marine sanctuary
                      is home to over 100 species of coral and 300 species of tropical fish, making it a snorkeling and
                      diving paradise.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The park gets its name from the rock pigeons that nest on the larger island. Visitors can spot
                      blacktip reef sharks, sea turtles, and colorful parrotfish in the crystal-clear waters. The
                      shallow reefs are perfect for beginners, while deeper areas offer exciting experiences for
                      advanced divers.
                    </p>
                    <p>If you are good to swim you can snorkeling here and see closer sharks with the guidance of local experts.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 species of colorful coral formations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        300+ species of tropical reef fish
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Blacktip reef sharks and sea turtles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent underwater visibility up to 30 meters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Protected marine national park status since 2003
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/50 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Marine Life Highlights:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                    <div>
                      <p className="mb-2"><strong>Fish Species:</strong></p>
                      <ul className="space-y-1">
                        <li>• Angelfish and butterflyfish</li>
                        <li>• Parrotfish and surgeonfish</li>
                        <li>• Groupers and snappers</li>
                        <li>• Moorish idols and clownfish</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Other Marine Life:</strong></p>
                      <ul className="space-y-1">
                        <li>• Green and hawksbill sea turtles</li>
                        <li>• Blacktip reef sharks (harmless)</li>
                        <li>• Stingrays and eagle rays</li>
                        <li>• Octopus and moray eels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kanniya Hot Springs */}
            <Card>
              <CardHeader>
                <CardTitle>6. Kanniya Hot Springs</CardTitle>
                <CardDescription>Natural thermal springs with healing properties and ancient legends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* <div>
                    {createAttractionCarousel(kanniyaImages, kanniyaIndex, setKanniyaIndex) || (
                      <Image
                        src="/placeholder.jpg"
                        alt="Kanniya Hot Springs showing natural thermal pools surrounded by tropical vegetation"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    )}
                  </div> */}
                  <ImageCarousel
                    images={[
                      {
                        src: "/Kanniya-Hot-Springs.jpg",
                        alt: "Kanniya Hot Springs with natural thermal pools",
                        caption: "Kanniya Hot Springs View",
                        title: "Kanniya Hot Springs View"
                      },
                      {
                        src: "/Kanniya-Hot-Springs1.jpg",
                        alt: "Kanniya Hot Springs with natural thermal pools  ",
                        caption: "Kanniya Hot Springs View",
                        title: "Kanniya Hot Springs View"
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located just 8km northwest of Trincomalee, the Kanniya Hot Springs consist of seven natural
                      thermal wells with water temperatures reaching 40°C (104°F). These springs hold deep cultural
                      significance and are mentioned in the ancient Ramayana epic, where they&apos;re associated with
                      Ravana&apos;s mother&apos;s tears.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Each of the seven wells is said to have different mineral compositions and healing properties.
                      Local tradition believes bathing in these waters can cure various ailments, and the site remains
                      an important pilgrimage destination for both Hindus and Buddhists. The springs are surrounded by
                      lush tropical vegetation, creating a serene natural spa environment.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Seven distinct thermal wells with unique properties
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Water temperatures around 40°C (104°F)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rich in minerals with believed healing properties
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical significance in Ramayana epic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important pilgrimage site for multiple religions
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Visitor Information:</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                    <strong>Entry Fee:</strong> Small nominal charge for maintenance.
                    <strong>Best Time:</strong> Early morning or late afternoon to avoid crowds.
                  </p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Note:</strong> Bring a towel and change of clothes. Photography is allowed but be respectful
                    of pilgrims and religious activities. The water is safe for bathing.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Girihandu Seya */}
            <Card>
              <CardHeader>
                <CardTitle>7. Girihandu Seya</CardTitle>
                <CardDescription>Ancient Buddhist stupa with profound historical significance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Perched on a hill overlooking Trincomalee bay, Girihandu Seya is believed to be one of the earliest
                      Buddhist stupas built in Sri Lanka. According to Buddhist chronicles and ancient inscriptions found at
                      the site, this sacred stupa was built by two merchant brothers, Trapusa (Tapassu) and Bahalika (Bhalluka),
                      who received hair relics directly from the Buddha immediately after his enlightenment.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The stupa&apos;s name translates to &quot;Hill Stupa&quot; and it offers panoramic views of the natural harbour
                      and surrounding coastline. Archaeological evidence shows the original structure was enlarged in the
                      8th century AD. The site represents an extraordinary archaeological treasure that connects visitors
                      to the very first disciples of the Buddha, making it potentially the earliest Buddhist monument in
                      Sri Lanka. The peaceful hilltop setting makes it an ideal place for meditation and reflection.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        One of Sri Lanka&apos;s earliest Buddhist stupas built by Buddha&apos;s first disciples
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful hilltop location with panoramic bay views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Houses sacred relics of the Buddha
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important archaeological and religious site
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere perfect for meditation
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/Girihadusaya.jpeg",
                        alt: "Girihandu Seya stupa",
                        caption: "Girihandu Seya stupa",
                        title: "Girihandu Seya stupa"
                      },
                      {
                        src: "/Girihandu-Seya.jpeg",
                        alt: "Girihandu Seya stupa ",
                        caption: "Girihandu Seya stupa ",
                        title: "Girihandu Seya stupa "
                      },
                      {
                        src: "/Girihandu-Seya1.jpeg",
                        alt: "Girihandu Seya stupa",
                        caption: "Girihandu Seya stupa",
                        title: "Girihandu Seya stupa"
                      },
                      {
                        src: "/Girihandu-Seya2.jpeg",
                        alt: "Girihandu Seya stupa",
                        caption: "Girihandu Seya stupa",
                        title: "Girihandu Seya stupa"
                      },
                    ]}
                  />
                </div>
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/50 rounded-lg border-l-4 border-amber-400">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Cultural Significance:</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    This stupa marks the beginning of Buddhism in Sri Lanka and represents over 2,300 years of continuous
                    religious tradition. Visitors often combine their visit with nearby Koneswaram Temple to experience
                    both Buddhist and Hindu heritage in one trip.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Arisi Male Beach */}
            <Card>
              <CardHeader>
                <CardTitle>8. Arisi Male Beach</CardTitle>
                <CardDescription>Unique coastal landscape with distinctive sand formations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Arisimale.jpeg",
                        alt: "Panoramic view from Fort Frederick with ocean backdrop",
                        caption: "Sunrise at Fort Frederick",
                        title: "Fort Frederick - Sunrise View"
                      },
                      {
                        src: "/Kanniya-Hot-Springs1.jpg",
                        alt: "Wide view of Haputale mountains and tea fields",
                        caption: "Haputale's rolling tea hills",
                        title: "Viewpoint Tea Country"
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This lesser-known beach near Trincomalee offers a completely different coastal experience with its
                      unique sand formations and rugged natural beauty. Unlike the gentle shores of Nilaveli, Arugam Male
                      features dramatic coastal landscapes shaped by wind and waves over centuries, creating fascinating
                      geological formations.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The beach is perfect for photography enthusiasts and nature lovers who appreciate untouched coastal
                      environments. While not suitable for swimming due to strong currents and rocky areas, it offers
                      excellent opportunities for coastal walks, bird watching, and experiencing Sri Lanka&apos;s raw natural beauty.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique natural sand formations and rock structures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Secluded location with minimal human impact
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for photography and nature observation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for coastal walks and exploration
                      </li>
                      <li className="flex items-start gap-2">
                        <TriangleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Strong currents and rocky seabed - swimming not recommended
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">Safety & Access Information:</h4>
                  <p className="text-sm text-yellow-700">
                    <strong>Access:</strong> Requires local transportation or guided tour as it&apos;s off the main tourist path.
                    <strong>Safety:</strong> Stay away from water&apos;s edge due to unpredictable waves and currents.
                    Best visited during dry season for easier access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* More Unique Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hidden Gems & Unique Experiences</h2>
          <div className="space-y-8">
            {/* China Bay Beach */}
            <Card>
              <CardHeader>
                <CardTitle>China Bay Beach</CardTitle>
                <CardDescription>Secluded military beach with pristine conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located within the naval base area, China Bay Beach is one of Trincomalee&apos;s best-kept secrets.
                      This pristine stretch of coastline features incredibly clear waters, soft white sand, and minimal
                      crowds due to its controlled access. The beach is named after Chinese traders who once used this
                      bay as a safe harbor.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      While access requires permission from naval authorities, the effort is worthwhile for those seeking
                      an unspoiled beach experience. The protected status has preserved its natural beauty, making it
                      feel like a private paradise with excellent swimming conditions and stunning sunset views.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Pristine, uncrowded beach conditions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear waters perfect for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical significance as ancient trading port
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunset viewing location
                      </li>
                      <li className="flex items-start gap-2">
                        <TriangleAlert className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Requires naval permission for access
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="China Bay Beach showing pristine white sand and clear blue waters with minimal development"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sunrise Viewing Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Spectacular Sunrise Viewing</CardTitle>
                <CardDescription>Experience magical sunrises on the eastern coast beaches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      One of Trincomalee&apos;s most magical experiences is watching the sunrise from its pristine eastern beaches.
                      Unlike the southern coast where you can only see sunsets over the ocean, Trincomalee&apos;s eastern position
                      offers breathtaking sunrise views directly over the Indian Ocean, painting the sky in brilliant oranges,
                      pinks, and golds.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The best sunrise viewing spots include Nilaveli Beach, Uppuveli Beach, and Koneswaram Temple grounds.
                      Early morning beach walks during sunrise hours (around 6:00-6:30 AM) provide an unforgettable experience
                      with minimal crowds and perfect lighting for photography. The contrast is remarkable - while southern
                      beaches like Mirissa and Unawatuna offer stunning sunsets, only the eastern coast provides this magical
                      sunrise experience over the ocean.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning ocean sunrise views unavailable on southern coast
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for early morning photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful beach walks with minimal crowds
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best viewing: Nilaveli, Uppuveli, and Koneswaram area
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        Optimal time: 6:00-6:30 AM year-round
                      </li>
                    </ul>
                  </div>
                  {/* Sunrise Image Carousel */}
                  <ImageCarousel
                    images={[
                      {
                        src: "/Sunrise-in-trinco.jpeg",
                        alt: "Panoramic view from Fort Frederick with ocean backdrop",
                        caption: "Sunrise at Fort Frederick",
                        title: "Fort Frederick - Sunrise View"
                      },
                      {
                        src: "/Sunrise-in-trinco1.jpeg",
                        alt: "Wide view of Haputale mountains and tea fields",
                        caption: "Haputale's rolling tea hills",
                        title: "Viewpoint Tea Country"
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Seruwila Ancient Temple */}
            <Card>
              <CardHeader>
                <CardTitle>Seruwawila Mangala Raja Maha Vihara</CardTitle>
                <CardDescription>Ancient Buddhist temple with sacred forehead relic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Seruwawila-temple.jpeg",
                        alt: "Seruwila temple showing white dagoba surrounded by lush greenery and smaller stupas",
                        caption: "Seruwawila Mangala Raja Maha Vihara - Main Stupa",
                        title: "Seruwawila Mangala Raja Maha Vihara"
                      },
                      {
                        src: "/Seruwawila-temple2.jpeg",
                        alt: "Pilgrims and monks at Seruwawila temple complex",
                        caption: "Pilgrims at the ancient temple grounds",
                        title: "Pilgrims at Seruwawila"
                      },
                      {
                        src: "/placeholder.svg?height=300&width=400",
                        alt: "Seruwawila dagoba and forest setting",
                        caption: "White dagoba in a peaceful forest setting",
                        title: "Forest Setting"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located about 45km from Trincomalee, this ancient Buddhist temple houses one of the most sacred
                      relics in Sri Lanka - a piece of the Buddha&apos;s forehead bone. The temple complex features a
                      magnificent white dagoba surrounded by smaller stupas and meditation halls in a serene forest setting.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The site dates back over 2,000 years and has been continuously maintained as a place of worship.
                      The temple is particularly significant for Buddhist pilgrims and offers visitors a chance to
                      experience authentic religious practices in a peaceful, natural environment away from tourist crowds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Houses sacred Buddha&apos;s forehead relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 2,000 years of continuous worship
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful white dagoba and forest setting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important pilgrimage destination
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation and reflection environment
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Lankapatuna Samudragiri Viharaya (moved here) */}
            <Card>
              <CardHeader>
                <CardTitle>Lankapatuna Samudragiri Viharaya</CardTitle>
                <CardDescription>Seaside Buddhist temple with legendary landing site of the Sacred Tooth Relic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Lankapatuna-Samudragiri-Viharaya.jpg",
                        alt: "Lankapatuna Samudragiri Viharaya stupa by the sea with dramatic sky",
                        caption: "Lankapatuna stupa overlooking the Indian Ocean",
                        title: "Lankapatuna Samudragiri Viharaya"
                      },
                     
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Lankapatuna Samudragiri Viharaya is a unique Buddhist temple dramatically set on the eastern coast, about 50km south of Trincomalee. According to legend, this is the historic site where Prince Dantha and Princess Hemamala landed in the 4th century AD, bringing the Sacred Tooth Relic of the Buddha to Sri Lanka from India.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The temple complex features a striking white stupa, a colorful pedestrian bridge, and panoramic views of the Indian Ocean. The site is both a place of pilgrimage and a scenic spot for visitors, offering a blend of spiritual significance and natural beauty. The peaceful setting is ideal for meditation, reflection, and photography.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Legendary landing site of the Sacred Tooth Relic
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful seaside stupa and temple complex
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colorful bridge and panoramic ocean views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere for meditation and reflection
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Places to Visit */}
        <section id="more-places" className="mb-12 scroll-mt-40">
          <h2 className="text-3xl font-bold mb-6">More Amazing Places Near Trincomalee</h2>
          <div className="space-y-8">
            {/* Marble Beach */}
            <Card>
              <CardHeader>
                <CardTitle>Marble Beach</CardTitle>
                <CardDescription>Hidden gem with crystal-clear waters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      A secluded beach located about 6km from Trincomalee town, Marble Beach gets its name from the
                      smooth, marble-like rocks that line the shore. The beach offers excellent snorkeling opportunities
                      and pristine waters perfect for swimming.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful marble-like rock formations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for snorkeling and swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less developed and more natural
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for peaceful beach days
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Marble Beach showing smooth rocks and clear turquoise waters"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Velgam Vehera */}
            <Card>
              <CardHeader>
                <CardTitle>Velgam Vehera</CardTitle>
                <CardDescription>Ancient Buddhist monastery ruins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Velgam Vehera ancient monastery ruins with stone pillars and stupas"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This ancient Buddhist monastery complex dates back to the 2nd century BC and features impressive
                      ruins including stupas, stone pillars, and meditation halls. It&apos;s an important archaeological
                      site that offers insights into early Buddhist civilization in Sri Lanka.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient monastery dating to 2nd century BC
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved stone structures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important archaeological significance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful setting for reflection
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Whale Watching */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">World-Class Whale Watching</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Trincomalee offers some of the worlds best whale watching opportunities, with blue whales, sperm
                whales, and dolphins frequently spotted in the deep waters off the coast. The continental shelf drops
                dramatically close to shore, bringing these magnificent creatures within easy reach.
              </p>
              <p>
                The best season runs from May to October when the seas are calm and whale activity is at its peak. Tours
                typically last 3-4 hours and have high success rates for sightings, especially of blue whales - the
                largest animals on Earth.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">What You Might See:</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Blue whales (largest animals on Earth)</li>
                  <li>• Sperm whales and pilot whales</li>
                  <li>• Spinner and bottlenose dolphins</li>
                  <li>• Flying fish and sea turtles</li>
                  <li>• Various seabird species</li>
                </ul>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Blue whale surfacing near Trincomalee with whale watching boat and excited tourists in background"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Arugam Bay adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Panama-Tank.jpg"
                  alt="Panama Tank with elephants and natural scenery"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  12 mins from Arugam Bay
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Sober Island</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sober Island is a tranquil getaway known for its pristine beaches, crystal-clear waters, and vibrant marine life.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  12 Km from Arugam Bay
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/panama-tank" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Kumana-National-Park.jpg"
                  alt="Kumana National Park with birds, elephants and diverse wildlife"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  around 2 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kumana National Park</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A great bird watching destination and Sri Lankan leopard habitat in Sri Lanka and a haven for wildlife enthusiasts.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  56 km from Arugam Bay
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kumana-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Panama-Beach-Camping.jpg"
                  alt="Panama Beach Camping Awidinno"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  12 mins from Arugam Bay
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Sober Island</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sober Island is a tranquil getaway known for its pristine beaches, crystal-clear waters, and vibrant marine life.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  12 Km from Arugam Bay
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/panama-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* More Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Uppuveli Beach</CardTitle>
                <CardDescription>Quieter alternative to Nilaveli</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Peaceful Uppuveli Beach with golden sand, fishing boats, and local fishermen"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A more local and authentic beach experience with fishing boats, fewer tourists, and beautiful sunrises.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="/destinations/uppuveli-beach">See More</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sober Island</CardTitle>
                <CardDescription>Historic naval base with colonial architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Historic Sober Island showing colonial architecture and panoramic harbor views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Built by the Portuguese and later occupied by Dutch and British, offering great harbor views and
                  historical insights.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="/destinations/sober-island">See More</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lover&apos;s Leap</CardTitle>
                <CardDescription>Dramatic clifftop viewpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Lovers Leap cliff showing dramatic drop to ocean with panoramic coastal views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A dramatic cliff near Koneswaram Temple with stunning ocean views and a tragic local legend.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="/destinations/lovers-leap">See More</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dutch Bay</CardTitle>
                <CardDescription>Peaceful bay with mangrove forests</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dutch Bay showing calm waters surrounded by mangrove forests and small fishing boats"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A serene bay perfect for kayaking through mangroves and observing local birdlife in their natural habitat.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="/destinations/dutch-bay">See More</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trincomalee War Cemetery</CardTitle>
                <CardDescription>Commonwealth war graves</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Well-maintained war cemetery with rows of white headstones and tropical vegetation"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  A beautifully maintained cemetery honoring Commonwealth soldiers who died during World War II in the region.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="/destinations/trincomalee-war-cemetery">See More</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Somawathiya National Park</CardTitle>
                <CardDescription>Wildlife sanctuary near Trincomalee</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Somawathiya National Park showing elephants near water with lush forest background"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Home to elephants, leopards, and diverse bird species. Perfect for wildlife enthusiasts seeking safari adventures.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="/destinations/somawathiya-national-park">See More</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Trincomalee</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dry, sunny weather</li>
                  <li>• Calm seas perfect for swimming</li>
                  <li>• Best whale watching season</li>
                  <li>• Ideal for water sports</li>
                  <li>• Higher accommodation prices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>April & October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional rain showers</li>
                  <li>• Fewer crowds</li>
                  <li>• Good value for money</li>
                  <li>• Still good for beach activities</li>
                  <li>• Mixed weather conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Monsoon Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall and rough seas</li>
                  <li>• Many beach activities suspended</li>
                  <li>• Lowest accommodation prices</li>
                  <li>• Good for temple visits</li>
                  <li>• Limited whale watching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Water Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Diving & Snorkeling</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore coral reefs at Pigeon Island and various dive sites with excellent visibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Whale Watching</h4>
                  <p className="text-sm text-muted-foreground">
                    Half-day boat trips to spot blue whales, sperm whales, and dolphins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Water Sports</h4>
                  <p className="text-sm text-muted-foreground">
                    Kayaking, windsurfing, and jet skiing available at major beaches.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Temple Visits</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore ancient Hindu and Buddhist temples with rich history and architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Markets</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit fish markets and local bazaars for authentic cultural experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Historical Sites</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore colonial forts and archaeological sites dating back centuries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/50 dark:to-teal-950/50 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">Your Trincomalee Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Trincomalee offers an authentic Sri Lankan coastal experience that combines pristine natural beauty with
                rich cultural heritage. From the spiritual atmosphere of ancient temples to the thrill of spotting blue
                whales in their natural habitat, this eastern gem provides experiences that are both profound and
                exhilarating.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to appreciate the slower pace of life here, respect the local customs and religious sites, and
                immerse yourself in the natural wonders that make Trincomalee special. Whether youre seeking adventure
                on the water or peace on pristine beaches, this coastal paradise will exceed your expectations.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your journey to Sri Lankas eastern coastal paradise! 🌊🐋🏛️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
