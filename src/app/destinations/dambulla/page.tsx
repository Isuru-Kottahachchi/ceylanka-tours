import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Users, TreePine, ShoppingBag, Utensils, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dambulla Town Sri Lanka: Complete Guide 2026 | Local Life, Markets & Cultural Heritage",
  description:
    "Explore Dambulla town beyond the famous caves - local markets, authentic restaurants, cultural sites, and the real Sri Lankan experience in this historic trading hub.",
  keywords:
    "Dambulla town, Sri Lanka local life, Dambulla market, authentic Sri Lankan culture, local restaurants, trading hub, cultural heritage",
  openGraph: {
    title: "Dambulla Town: Complete Local Guide 2026",
    description: "Your ultimate guide to experiencing authentic Sri Lankan life in historic Dambulla",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function DambullaTownGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/dambulla-cave-temple.jpg"
          alt="Bustling Dambulla town with local markets, traditional buildings and daily life"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Dambulla</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">UNESCO World Heritage Site</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 bg-green-600/80 text-white border-green-500">
              <ShoppingBag className="w-4 h-4 mr-2" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 bg-yellow-600/80 text-white border-yellow-500">
              <Utensils className="w-4 h-4 mr-2" />
              Authentic Local Cuisine
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 bg-blue-600/80 text-white border-blue-500">
              <Users className="w-4 h-4 mr-2" />
              Real Sri Lankan Culture
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Detailed Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground dark:text-gray-100">
            Dambulla Town Guide
          </h2>
          <div className="prose prose-xl dark:prose-invert max-w-none leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed">
              Most visitors come to Dambulla for the cave temples and move on quickly. But the town itself is worth
              your time. Busy streets, a massive wholesale market, and genuinely friendly locals make it one of the
              most down-to-earth towns in Sri Lanka.
            </p>
            <p className="text-lg mb-6">
              Dambulla is at the center of Sri Lanka&apos;s Cultural Triangle, 148 km from Colombo. It&apos;s home to the
              country&apos;s largest wholesale fruit and vegetable market, where farmers from across the island bring
              their produce every day. The town has been an important trading stop for over 2,000 years.
            </p>
            <p className="text-lg mb-6">
              There are very few tourist traps here. Most shops, restaurants, and tea stalls serve locals. Family
              businesses have been here for generations and people are welcoming without being pushy. It feels
              like the real Sri Lanka.
            </p>
            <p className="text-lg">
              Dambulla also makes a great base for the Cultural Triangle. Sigiriya, Polonnaruwa,
              Anuradhapura, and Minneriya are all within easy reach for day trips.
            </p>
          </div>
        </section>

    

        {/* Enhanced Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-slate-800 dark:[background-image:none]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-green-800 dark:text-white">
                <Star className="w-8 h-8 text-green-500" />
                Quick Dambulla Town Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-green-700 dark:text-green-300 mb-4">Location &amp; Geography</h4>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Province:</strong> Central Province, Matale District
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-purple-500 dark:text-purple-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>From Colombo:</strong> 148 km (3 hours drive)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500 dark:text-green-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Elevation:</strong> ~175 m above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500 dark:text-orange-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Population:</strong> Approximately 75,000 residents
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-blue-700 dark:text-blue-300 mb-4">Economic Importance</h4>
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-red-500 dark:text-red-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Market:</strong> Largest wholesale market in Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500 dark:text-green-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Agriculture:</strong> Major vegetable &amp; fruit trading hub
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Tourism:</strong> Gateway to Cultural Triangle
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-purple-500 dark:text-purple-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Transport:</strong> Major bus and transport hub
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-purple-700 dark:text-purple-300 mb-4">Cultural Highlights</h4>
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5 text-orange-500 dark:text-orange-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Cuisine:</strong> Authentic local food scene
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Community:</strong> Multi-ethnic harmony
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500 dark:text-green-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Temples:</strong> Multiple Buddhist &amp; Hindu sites
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-500 dark:text-red-300" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>History:</strong> 2,000+ years of trading heritage
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
         {/* Nearby Attractions */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Attractions Near Dambulla</h2>

          <div className="space-y-12">
            {/* Dambulla Cave Temple */}
            <Card className="overflow-hidden border-2 border-gold-200 dark:border-yellow-700">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:bg-slate-800 dark:[background-image:none]">
                <CardTitle className="text-2xl text-yellow-800 dark:text-yellow-300">Dambulla Cave Temple (Golden Temple)</CardTitle>
                <CardDescription className="text-lg text-yellow-600 dark:text-yellow-400">
                  UNESCO World Heritage Site - The largest cave temple complex in Sri Lanka
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/Dambullacavetemple.jpeg"
                    alt="Ancient Dambulla Cave Temple with golden Buddha statues and colorful frescoes"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The rock rises 160 metres above the surrounding plains. Five caves carved into the granite
                      hold 153 Buddha statues and paintings covering around 2,100 square metres of walls and
                      ceilings. It is one of the best-preserved ancient temple complexes in Asia.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      King Valagamba carved these caves into temples in the 1st century BCE after sheltering here
                      during a 14-year exile. When he returned to power, he renovated them as an act of thanks.
                      Drip-ledges cut above the cave openings have kept rain off the paintings for 2,000 years.
                      The largest statue is the 15-metre reclining Buddha in Cave 1.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The painting styles change from cave to cave, showing how Buddhist art developed over centuries.
                      You can also see some of the oldest Sinhala writing in Sri Lanka carved into the rock walls.
                    </p>

                    <div className="bg-yellow-50 dark:bg-slate-700 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Cave Temple Highlights:</h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-100">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Cave 1 (Devaraja Viharaya):</strong> 47-foot reclining Buddha and ancient Brahmi inscriptions
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Cave 2 (Maharaja Viharaya):</strong> Largest cave with 56 statues and stunning ceiling frescoes
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Cave 3 (Maha Alut Viharaya):</strong> 18th-century additions with Kandyan period artwork
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Distance from Town:</strong> Just 2 km uphill - 10 minutes by tuk-tuk or 30-minute walk
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Best Visit Time:</strong> Early morning (7:00-9:00 AM) for cooler temperatures and better light
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="mt-6 flex justify-start">
                      <Link href="/destinations/dambulla-cave-temple">
                        <Button variant="secondary" className="bg-yellow-600 hover:bg-yellow-700 text-white dark:bg-yellow-500 dark:hover:bg-yellow-600 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
                          Explore Dambulla Cave Temple
                        </Button>
                      </Link>
                    </div> */}
                    <div className="mt-4 flex justify-start">
                  <Link href="/destinations/dambulla-cave-temple" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                  </Link>
                </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Ibbankatuwa
            <Card className="overflow-hidden border-2 border-red-200 dark:border-red-700">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30">
                <CardTitle className="text-2xl text-red-800 dark:text-red-300">Ibbankatuwa Megalithic Tombs</CardTitle>
                <CardDescription className="text-lg text-red-600 dark:text-red-400">
                  Ancient burial site with unique stone caskets and artifacts
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Just 22 kilometers from Dambulla town stands one of the world&apos;s most extraordinary archaeological 
                      sites - Sigiriya, the ancient rock fortress that defies both gravity and imagination. This massive 
                      200-meter-high monolithic rock served as the capital of King Kashyapa&apos;s kingdom in the 5th century 
                      CE, featuring an elaborate palace complex, sophisticated water gardens, and defensive systems that 
                      showcase the pinnacle of ancient Sri Lankan engineering and artistry.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The fortress represents one of the earliest examples of urban planning in Asia, with its symmetrical 
                      water gardens, terraced landscapes, and innovative hydraulic systems that still function after 1,500 
                      years. The famous Sigiriya frescoes - ancient paintings of celestial maidens - represent some of the 
                      finest examples of classical Sinhalese art, while the Mirror Wall&apos;s ancient graffiti provides a 
                      unique window into the thoughts and emotions of visitors from over a millennium ago.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The climb to the summit reveals the full genius of ancient architects who created a luxury palace 
                      complex atop an apparently inaccessible rock. The Lion&apos;s Gate, royal pools carved into solid rock, 
                      and the throne room offer breathtaking insights into royal life 1,500 years ago, while the panoramic 
                      views from the top provide unforgettable vistas across the central plains of Sri Lanka.
                    </p>

                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Sigiriya Experience:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Climb Duration:</strong> 2-3 hours round trip with stops for photography and rest
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Famous Frescoes:</strong> 18 surviving paintings of celestial maidens from 22 originals
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Water Gardens:</strong> Sophisticated hydraulic systems and landscaped terraces
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>From Dambulla:</strong> 30-minute drive, day trips easily arranged from town
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Majestic Sigiriya Rock Fortress rising from green plains with ancient palace ruins"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pidurangala Rock */}
            {/* <Card className="overflow-hidden border-2 border-green-200 dark:border-green-700">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30">
                <CardTitle className="text-2xl text-green-800 dark:text-green-300">Pidurangala Rock Temple</CardTitle>
                <CardDescription className="text-lg text-green-600 dark:text-green-400">
                  Ancient monastery and the best viewpoint for Sigiriya Rock
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sunrise view of Sigiriya Rock from Pidurangala summit with ancient Buddha statue"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Located just 2 kilometers from Sigiriya, Pidurangala Rock offers an entirely different but equally 
                      rewarding experience. This ancient Buddhist monastery, established in the 3rd century BCE, predates 
                      Sigiriya by centuries and provides the most spectacular views of the famous rock fortress. The climb 
                      to the summit is less crowded than Sigiriya, making it perfect for those seeking a more peaceful 
                      and contemplative experience while still enjoying world-class archaeology and natural beauty.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The rock shelters at Pidurangala contain some of the earliest Buddhist cave inscriptions in Sri Lanka, 
                      dating back over 2,000 years. The massive reclining Buddha statue, carved from a single granite 
                      boulder, represents one of the largest ancient Buddhist sculptures in the country. The monastery&apos;s 
                      peaceful atmosphere and spiritual significance make it a favorite among both pilgrims and travelers 
                      seeking authentic Buddhist heritage experiences.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Sunrise from Pidurangala&apos;s summit is considered one of Sri Lanka&apos;s most breathtaking experiences. 
                      As the first light illuminates Sigiriya Rock across the valley, the ancient fortress appears to glow 
                      against the misty landscape, creating photographic opportunities that capture the timeless beauty of 
                      Sri Lanka&apos;s cultural triangle.
                    </p>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Pidurangala Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Ancient Monastery:</strong> 3rd century BCE cave dwellings with Brahmi inscriptions
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Giant Buddha:</strong> Massive reclining statue carved from single granite boulder
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Best Sunrise View:</strong> Unobstructed panoramic view of Sigiriya Rock at dawn
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Easier Climb:</strong> Less strenuous than Sigiriya, suitable for most fitness levels
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}
            {/* <Card className="overflow-hidden border-2 border-blue-200 dark:border-blue-700">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30">
                <CardTitle className="text-2xl text-blue-800 dark:text-blue-300">Minneriya National Park</CardTitle>
                <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                  Home to the famous &quot;Elephant Gathering&quot; - one of Asia&apos;s greatest wildlife spectacles
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Just 24 kilometers from Dambulla town lies one of Asia&apos;s most spectacular wildlife destinations - 
                      Minneriya National Park, renowned worldwide for hosting the largest gathering of Asian elephants on 
                      Earth. During the dry season (July to October), hundreds of elephants converge around the ancient 
                      Minneriya Tank, creating a wildlife spectacle that has remained unchanged for thousands of years and 
                      represents one of the most profound wildlife experiences available anywhere in Asia.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The park&apos;s 8,890 hectares encompass diverse ecosystems including dry zone forests, grasslands, and 
                      wetlands that support over 170 bird species, 26 fish species, and numerous mammals including the 
                      endangered Sri Lankan sloth bear, leopards, and sambar deer. The ancient Minneriya Tank, built by 
                      King Mahasen in the 3rd century CE, continues to serve as the life-giving heart of this ecosystem, 
                      demonstrating the sophisticated understanding of environmental conservation by ancient Sri Lankan rulers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond the famous elephant gathering, Minneriya offers exceptional opportunities to observe Asian 
                      elephant behavior in their natural habitat. Visitors can witness complex social interactions, 
                      playful youngsters learning from adults, and the ancient migration patterns that connect this park 
                      with neighboring Kaudulla and Hurulu Eco Parks, forming a vital wildlife corridor that ensures the 
                      survival of these magnificent creatures for future generations.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Safari Experience:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Peak Season:</strong> July-October for elephant gathering (300+ elephants)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Best Game Times:</strong> Early morning (6:00 AM) and late afternoon (3:00 PM)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Safari Duration:</strong> 3-4 hours with experienced local guides
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>From Dambulla:</strong> 45-minute drive, safaris easily organized from town
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Large herd of elephants gathering around Minneriya Tank with stunning sunset backdrop"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card> */}

            {/* Nalanda Gedige */}
            {/* <Card className="overflow-hidden border-2 border-purple-200 dark:border-purple-700">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-300">Nalanda Gedige Ancient Temple</CardTitle>
                <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                  Unique stone temple showcasing ancient Hindu-Buddhist architectural fusion
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Ancient Nalanda Gedige stone temple with intricate carvings and unique architecture"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Hidden among the hills 20 kilometers from Dambulla lies one of Sri Lanka&apos;s most archaeologically 
                      intriguing sites - Nalanda Gedige, a completely stone-built temple that represents a unique fusion 
                      of Hindu and Buddhist architectural elements. Dating from the 8th to 10th centuries CE, this 
                      remarkable structure stands as the only example of its kind in Sri Lanka, featuring tantric Hindu 
                      influences combined with Mahayana Buddhist elements in an architectural style more commonly found 
                      in Java and Sumatra.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The temple&apos;s most fascinating aspect is its construction entirely without mortar - massive stone 
                      blocks fitted together with precision engineering that has withstood over 1,000 years of monsoons 
                      and tropical weather. The intricate stone carvings depicting Hindu deities, Buddhist symbols, and 
                      tantric motifs provide valuable insights into the religious syncretism that characterized medieval 
                      Sri Lanka, when Hindu and Buddhist traditions coexisted and influenced each other.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Recent archaeological work has revealed that Nalanda Gedige was part of a larger monastic complex, 
                      with evidence of meditation caves, residential areas for monks, and sophisticated water management 
                      systems. The site&apos;s peaceful setting beside an ancient reservoir, surrounded by forest-covered 
                      hills, creates an atmosphere of timeless tranquility that helps visitors understand why ancient 
                      practitioners chose this location for spiritual contemplation.
                    </p>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Temple Features:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Unique Architecture:</strong> Only all-stone temple in Sri Lanka with Hindu-Buddhist fusion
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Ancient Engineering:</strong> Precision stone fitting without mortar construction
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Historical Period:</strong> 8th-10th centuries CE during Anuradhapura period
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Peaceful Setting:</strong> Serene forest location perfect for meditation and reflection
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </section>


        {/* Planning Your Attraction Visits */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Planning Your Visit</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-indigo-200 dark:border-indigo-700">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:bg-slate-800 dark:[background-image:none]">
                <CardTitle className="text-2xl text-indigo-700 dark:text-indigo-300">Multi-Day Itinerary Suggestions</CardTitle>
                <CardDescription className="dark:text-gray-300">Maximize your cultural triangle experience from Dambulla base</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Day 1: Dambulla Cave Temple & Town</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Head to the cave temple by 7 AM - cooler and quieter. Allow 2-3 hours for all five caves.
                      Afternoon: walk the town market. Evening: visit a local community temple.
                    </p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Perfect introduction to local culture and history</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Day 2: Sigiriya & Pidurangala</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Leave by 5:30 AM for sunrise at Pidurangala Rock. Then Sigiriya before 9 AM before crowds
                      arrive. Full day out - bring water and snacks. Back to Dambulla by late afternoon.
                    </p>
                    <p className="text-xs text-green-600 font-medium">UNESCO World Heritage double experience</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Day 3: Minneriya Safari & Nalanda</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Early morning game drive at Minneriya National Park. Stop at Nalanda Gedige on the way back
                      - a quiet, undervisited temple worth seeing. Afternoon free for the market and shopping.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">Wildlife and archaeology combination day</p>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Pro Tips for Multi-Day Visits:</h4>
                  <ul className="text-sm text-indigo-700 dark:text-gray-200 space-y-1">
                    <li>• Book accommodations with early breakfast arrangements</li>
                    <li>• Arrange transport with reliable local operators</li>
                    <li>• Carry plenty of water and sun protection</li>
                    <li>• Respect photography restrictions at religious sites</li>
                    <li>• Learn basic Sinhala greetings for better local interactions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 dark:border-teal-700">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:bg-slate-800 dark:[background-image:none]">
                <CardTitle className="text-2xl text-teal-700 dark:text-teal-300">Transportation & Costs</CardTitle>
                <CardDescription className="dark:text-gray-300">Budget planning and transport options from Dambulla</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-teal-800 dark:text-teal-300">Transport Options & Costs</h4>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-slate-700 p-3 rounded border-l-4 border-teal-500">
                      <p className="font-medium text-teal-700 dark:text-teal-300 mb-1">Tuk-Tuk (Three-Wheeler):</p>
                      <p className="text-sm text-teal-600 dark:text-teal-400">
                        Most flexible option. Cave Temple: Rs. 300-500. Sigiriya: Rs. 1,500-2,000. Day hire: Rs. 4,000-6,000
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-slate-700 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">Private Car with Driver:</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        Most comfortable. Day hire: Rs. 8,000-12,000. Multi-day packages available with hotel bookings
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-slate-700 p-3 rounded border-l-4 border-green-500">
                      <p className="font-medium text-green-700 dark:text-green-300 mb-1">Local Buses:</p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Most economical. To Sigiriya: Rs. 50-80. Limited schedules, authentic local experience
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-slate-700 p-3 rounded border-l-4 border-purple-500">
                      <p className="font-medium text-purple-700 dark:text-purple-300 mb-1">Bicycle Rental:</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        Eco-friendly option. Rs. 500-1,000/day. Suitable for Cave Temple and nearby attractions
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-teal-800 dark:text-teal-300">Entrance Fees & Costs</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Dambulla Cave Temple:</strong> Rs. 1,500 (foreigners), Rs. 50 (locals)</p>
                    <p><strong>Sigiriya Rock Fortress:</strong> USD 30 (foreigners), Rs. 50 (locals)</p>
                    <p><strong>Pidurangala Rock:</strong> Rs. 500 (all visitors)</p>
                    <p><strong>Minneriya Safari:</strong> Park fees + jeep hire = Rs. 8,000-12,000 total</p>
                    <p><strong>Nalanda Gedige:</strong> Rs. 300 (foreigners), Rs. 25 (locals)</p>
                    <p className="text-teal-600 dark:text-teal-400 font-medium pt-2">
                      Cultural Triangle Round Ticket available for multiple site visits
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-teal-800 dark:text-teal-300">Best Times to Visit</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Peak Season:</strong> December-March (cooler, dry weather)</p>
                    <p><strong>Elephant Gathering:</strong> July-October (Minneriya peak season)</p>
                    <p><strong>Avoid:</strong> April-May (hottest period, 35°C+)</p>
                    <p><strong>Monsoon:</strong> October-November (fewer crowds, some rain)</p>
                    <p className="text-teal-600 dark:text-teal-400 font-medium pt-2">
                      Early morning visits recommended for all outdoor attractions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Main Attractions & Experiences */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">What to Do in Dambulla Town</h2>

          <div className="space-y-12">
            {/* Dambulla Market */}
            <Card className="overflow-hidden border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="text-2xl text-orange-800">Dambulla Dedicated Economic Centre</CardTitle>
                <CardDescription className="text-lg text-orange-600">
                  Sri Lanka&apos;s largest wholesale market - a sensory explosion of colors, aromas, and energy
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/Dambulla-Market.webp"
                    alt="Bustling Dambulla wholesale market with vendors and fresh produce"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The Dambulla Dedicated Economic Centre is the biggest wholesale market in Sri Lanka.
                      Trucks arrive through the night, and by 4 AM trading is in full swing. Farmers, merchants,
                      and buyers from all over the country come here daily to trade fruits and vegetables.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Walking through early in the morning is worth doing. Prices are called out in Sinhala and Tamil,
                      stalls overflow with tropical produce, and it has a real, working energy that tourist markets
                      simply don&apos;t have.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Many vendors have traded here for decades. Ask about an unfamiliar fruit or vegetable and
                      you&apos;ll usually get a full explanation - sometimes a free taste too.
                    </p>

                    <div className="bg-orange-50 dark:bg-slate-700 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">Market Experience Highlights:</h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-100">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Peak Hours:</strong> 4:00-8:00 AM for wholesale activity, 6:00-10:00 AM for retail
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Seasonal Specialties:</strong> Different fruits and vegetables depending on harvest
                            seasons
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Photography:</strong> Incredible colors and scenes, but ask permission from vendors
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Fresh Juice Stalls:</strong> Try freshly squeezed tropical fruit juices
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Cultural Exchange:</strong> Practice basic Sinhala/Tamil with friendly vendors
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Food Scene */}
            <Card className="overflow-hidden border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-lime-50">
                <CardTitle className="text-2xl text-green-800">Authentic Local Food Scene</CardTitle>
                <CardDescription className="text-lg text-green-600">
                  Discover real Sri Lankan cuisine away from tourist restaurants
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Dambulla has plenty of good local food. Because the wholesale market is right here, restaurants
                      get fresh ingredients every day. Local rice and curry spots serve proper Sri Lankan food -
                      not a watered-down tourist version.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Many cooks grind their own spice mixes and use clay pots, which gives the curries more depth.
                      Lunch spots fill up fast between 11 AM and 1 PM with locals - always a good sign.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Street food stalls near the market, bus stand, and town temples open early and close late.
                      Hoppers, kottu, and fresh king coconut are all easy to find and very affordable.
                    </p>

                    <div className="bg-green-50 dark:bg-slate-700 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Must-Try Local Foods:</h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-100">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Rice & Curry:</strong> Traditional lunch with multiple curries, sambols, and
                            papadams
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Hoppers (Appa):</strong> Bowl-shaped pancakes, perfect for breakfast with curry
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Kottu Roti:</strong> Chopped roti stir-fried with vegetables, egg, and meat
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Fresh King Coconut:</strong> Natural electrolyte drink straight from the shell
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Curd & Treacle:</strong> Traditional dessert with buffalo curd and palm syrup
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Traditional Sri Lankan rice and curry meal with multiple dishes"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Local Temples & Spiritual Life */}
            <Card className="overflow-hidden border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl text-purple-800">Community Temples & Spiritual Life</CardTitle>
                <CardDescription className="text-lg text-purple-600">
                  Experience the spiritual heart of local community life
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Local Buddhist temple with community members participating in daily prayers"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Dambulla has several local Buddhist temples used by the community, not visitors. Morning
                      and evening prayer sessions are open to anyone who attends quietly and respectfully.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Each temple has its own regular community - the same families attending for decades.
                      It is calm and contemplative, a nice contrast to the busy market streets nearby.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      There are Hindu temples in town too. Dambulla is a genuinely mixed community, and during
                      festival seasons both Buddhist and Hindu celebrations spill out into the streets.
                    </p>

                    <div className="bg-purple-50 dark:bg-slate-700 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Spiritual Experiences:</h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-100">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Morning Prayers:</strong> Join 5:30 AM chanting sessions at local temples
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Poya Day Celebrations:</strong> Special full moon ceremonies with community
                            participation
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Meditation Sessions:</strong> Learn traditional meditation techniques from local
                            monks
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Festival Participation:</strong> Join colorful Hindu and Buddhist festivals
                            throughout the year
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
       
        {/* Local Life & Culture */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Local Life & Culture</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-2xl text-blue-700">Daily Rhythms of Dambulla</CardTitle>
                <CardDescription>Experience the authentic pace of Sri Lankan town life</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Early Morning (4:00-7:00 AM)</h4>
                    <p className="text-sm text-muted-foregroundutedort mb-2">
                      Produce trucks arrive from midnight. By 4 AM the market is busy and the tea stalls are open.
                      Temple bells ring for morning prayers. This is the most local time of day.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">Best time to experience authentic local life</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Mid-Morning (7:00-11:00 AM)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Children head to school, shops open, and the market hits its peak. Buses come and go.
                      Good time to walk around and grab a street food breakfast.
                    </p>
                    <p className="text-xs text-green-600 font-medium">Perfect for market visits and street food</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Afternoon (11:00 AM-4:00 PM)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Things slow down in the heat. Some shops close for lunch. A good time to sit in a local
                      restaurant and have a proper rice and curry meal.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">Ideal for authentic lunch experiences</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Evening (4:00-8:00 PM)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Cooler air brings everyone outside. Families head to temples, kids play in the courtyards,
                      and street food stalls set up for the evening crowd. The most social time of day.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">
                      Best time for temple visits and community interaction
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl text-green-700">Cultural Interactions & Etiquette</CardTitle>
                <CardDescription>Connect respectfully with the local community</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Language & Communication</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Not everyone speaks fluent English but most people are patient. Try &quot;Ayubowan&quot; as a
                      greeting and &quot;Sthuthi&quot; for thank you - just making the effort goes a long way.
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      Basic phrases: &quot;Sthuthi&quot; (thank you), &quot;Kiyawada?&quot; (how much?)
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Market Interactions</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Bargaining is normal in the market - start around 70-80% of the asking price and keep
                      it friendly. Ask about unfamiliar produce; vendors are happy to explain and often let you taste.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      Start bargaining at about 70% of the asking price
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Religious Respect</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Dress modestly and remove shoes at all temples. Don&apos;t point your feet toward Buddha statues
                      or monks. Ask before taking photos inside the temple.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">White clothing is preferred for temple visits</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Hospitality Culture</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      If someone offers you tea, accept it. Refusing can come across as rude. Sri Lankan
                      hospitality is genuine - people are not looking for anything in return.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">
                      Always accept at least a cup of tea when offered
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Practical Information</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:bg-slate-800 dark:[background-image:none]">
                <CardTitle className="text-2xl text-yellow-700 dark:text-yellow-300">Getting Around & Transportation</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-yellow-800 dark:text-yellow-200">Local Transportation</h4>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                      <p className="font-medium text-yellow-700 mb-1">Tuk-Tuks (Three-Wheelers):</p>
                      <p className="text-sm text-yellow-600">
                        Most convenient for short distances. Negotiate fare before starting. Typical town rides: Rs.
                        100-300
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-medium text-blue-700 mb-1">Local Buses:</p>
                      <p className="text-sm text-blue-600">
                        Very cheap (Rs. 10-50) but crowded. Great for authentic local experience. Main bus stand near
                        market area
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                      <p className="font-medium text-green-700 mb-1">Walking:</p>
                      <p className="text-sm text-green-600">
                        Town center is compact and walkable. Best way to discover hidden gems and interact with locals
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                      <p className="font-medium text-purple-700 mb-1">Bicycle Rental:</p>
                      <p className="text-sm text-purple-600">
                        Available from some guesthouses. Great for exploring surrounding areas at your own pace
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-yellow-800 dark:text-yellow-200">Intercity Connections</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>To Colombo:</strong> Regular buses (3 hours, Rs. 200-400) or private transport
                    </p>
                    <p>
                      <strong>To Kandy:</strong> 1.5 hours by bus (Rs. 100-200) or car
                    </p>
                    <p>
                      <strong>To Sigiriya:</strong> 30 minutes by tuk-tuk or bus (Rs. 50-100)
                    </p>
                    <p>
                      <strong>To Polonnaruwa:</strong> 1 hour by bus (Rs. 80-150)
                    </p>
                    <p>
                      <strong>To Anuradhapura:</strong> 1.5 hours by bus (Rs. 150-250)
                    </p>
                    <p className="text-yellow-600 dark:text-yellow-400 font-medium">Bus station located near the main market area</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 dark:bg-slate-800 dark:[background-image:none]">
                <CardTitle className="text-2xl text-red-700 dark:text-red-300">Accommodation & Practical Tips</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-800 dark:text-red-200">Where to Stay</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                      <p className="font-medium text-red-700 mb-1">Budget Guesthouses (Rs. 2,000-4,000):</p>
                      <p className="text-sm text-red-600">
                        Family-run places with authentic local experience. Basic but clean facilities
                      </p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                      <p className="font-medium text-orange-700 mb-1">Mid-Range Hotels (Rs. 5,000-10,000):</p>
                      <p className="text-sm text-orange-600">
                        Comfortable rooms with AC, hot water, and sometimes pool facilities
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                      <p className="font-medium text-green-700 mb-1">Luxury Resorts (Rs. 15,000+):</p>
                      <p className="text-sm text-green-600">
                        High-end properties on outskirts with full amenities and cultural programs
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-800 dark:text-red-200">Essential Services</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Banks & ATMs:</strong> Several banks with ATMs near market area
                    </p>
                    <p>
                      <strong>Internet Cafes:</strong> Available but WiFi in hotels/cafes more reliable
                    </p>
                    <p>
                      <strong>Medical:</strong> Government hospital and private clinics available
                    </p>
                    <p>
                      <strong>Pharmacies:</strong> Multiple pharmacies open until late evening
                    </p>
                    <p>
                      <strong>Post Office:</strong> Main post office near bus station
                    </p>
                    <p>
                      <strong>Police Station:</strong> Tourist police available for assistance
                    </p>
                    <p className="text-red-600 dark:text-red-400 font-medium">
                      Most services concentrated around market and bus station area
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-800 dark:text-red-200">Money & Shopping</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Currency:</strong> Sri Lankan Rupees (LKR) - carry cash for local purchases
                    </p>
                    <p>
                      <strong>Credit Cards:</strong> Accepted in hotels and some restaurants, not in markets
                    </p>
                    <p>
                      <strong>Bargaining:</strong> Expected in markets, not in established shops
                    </p>
                    <p>
                      <strong>Souvenirs:</strong> Spices, handmade crafts, traditional textiles
                    </p>
                    <p>
                      <strong>Market Hours:</strong> 4:00 AM - 6:00 PM (peak: 6:00-10:00 AM)
                    </p>
                    <p className="text-red-600 dark:text-red-400 font-medium">Always carry small bills for street vendors and tuk-tuks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Inspirational Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:bg-slate-800 dark:[background-image:none] border-2 border-green-200 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-green-800 dark:text-white mb-4">
                Ready to Visit Dambulla?
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dambulla is more than a quick stop before the cave temples. The market, the food, the local
                  temples, and the people all add up to something genuine that most tourist spots can&apos;t offer.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  You don&apos;t need a full itinerary here. Walk the market in the morning, find a local rice and curry
                  spot for lunch, visit a community temple in the evening. That is often enough to feel like you
                  actually spent time in Sri Lanka rather than just passed through.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Wake up before sunrise at least once. The wholesale market before dawn, a cup of tea at a roadside
                  stall, the town slowly coming to life - it&apos;s the kind of experience you don&apos;t plan but always remember.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Come with no big expectations. Be curious and respectful. Dambulla will do the rest.
                </p>
                <div className="bg-white/70 dark:bg-slate-700 p-6 rounded-xl border border-green-200 dark:border-slate-600 mt-8">
                  <p className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                    Dambulla - see Sri Lanka as it actually is. 🏪🥥🙏
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    A real town, real food, real people. Worth more than an afternoon.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
