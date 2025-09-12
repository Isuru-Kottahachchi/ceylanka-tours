import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Users, TreePine, ShoppingBag, Utensils, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Dambulla Town Sri Lanka: Complete Guide 2025 | Local Life, Markets & Cultural Heritage",
  description:
    "Explore Dambulla town beyond the famous caves - local markets, authentic restaurants, cultural sites, and the real Sri Lankan experience in this historic trading hub.",
  keywords:
    "Dambulla town, Sri Lanka local life, Dambulla market, authentic Sri Lankan culture, local restaurants, trading hub, cultural heritage",
  openGraph: {
    title: "Dambulla Town: Complete Local Guide 2025",
    description: "Your ultimate guide to experiencing authentic Sri Lankan life in historic Dambulla",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function DambullaTownGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=900&width=1400"
          alt="Bustling Dambulla town with local markets, traditional buildings and daily life"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Dambulla</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">UNESCO world heritage site</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <ShoppingBag className="w-4 h-4 mr-2" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Utensils className="w-4 h-4 mr-2" />
              Authentic Local Cuisine
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Real Sri Lankan Culture
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Detailed Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Welcome to Dambulla: Where Real Sri Lanka Comes Alive
          </h2>
          <div className="prose prose-xl max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed">
              While millions of visitors come to Dambulla to see the famous cave temples, the real treasure of this
              historic town lies in its vibrant streets, bustling markets, and the warm-hearted people who call it home.
              Dambulla town is the beating heart of Sri Lanka&apos;s central province - a place where ancient traditions
              blend seamlessly with modern life, where the aroma of fresh spices fills the air, and where every corner
              tells a story of centuries-old trading heritage.
            </p>
            <p className="text-lg mb-6">
              This isn&apos;t just another tourist destination - Dambulla is a living, breathing community that has been a
              major trading hub for over 2,000 years. Located at the crossroads of ancient trade routes, the town has
              always been a melting pot of cultures, religions, and traditions. Today, it continues this legacy as one
              of Sri Lanka&apos;s most important agricultural and commercial centers, where farmers from across the region
              bring their finest produce to the famous Dambulla Dedicated Economic Centre - the largest wholesale market
              in the country.
            </p>
            <p className="text-lg mb-6">
              What makes Dambulla town truly special is its authenticity. Here, you won&apos;t find tourist traps or
              artificial experiences designed for visitors. Instead, you&apos;ll discover the real Sri Lanka - families
              running businesses that have been passed down through generations, street food vendors who&apos;ve perfected
              their recipes over decades, and a community that welcomes visitors not as tourists, but as friends. The
              town&apos;s streets are alive with the sounds of tuk-tuks, the calls of vendors, and the laughter of children
              playing in temple courtyards.
            </p>
            <p className="text-lg">
              From the crack of dawn when the wholesale market comes alive with trucks loaded with fresh vegetables, to
              the evening when families gather at local temples for prayers, Dambulla offers an immersive experience
              into authentic Sri Lankan life. The town serves as the perfect base for exploring the cultural triangle,
              but more importantly, it provides a window into the soul of Sri Lanka - a place where hospitality isn't
              just a business practice, it's a way of life.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl text-center text-gray-500 border-2 border-dashed border-green-300">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Enhanced Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Star className="w-8 h-8 text-green-500" />
                Essential Dambulla Town Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-green-700 mb-4">Location & Geography</h4>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Province:</strong> Central Province, Matale District
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>From Colombo:</strong> 148 km (3 hours drive)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 300 meters above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Population:</strong> Approximately 75,000 residents
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-blue-700 mb-4">Economic Importance</h4>
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Market:</strong> Largest wholesale market in Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Agriculture:</strong> Major vegetable & fruit trading hub
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Tourism:</strong> Gateway to Cultural Triangle
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Transport:</strong> Major bus and transport hub
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-purple-700 mb-4">Cultural Highlights</h4>
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Cuisine:</strong> Authentic local food scene
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Community:</strong> Multi-ethnic harmony
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Temples:</strong> Multiple Buddhist & Hindu sites
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span>
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
          <h2 className="text-4xl font-bold mb-10">World-Class Attractions Near Dambulla Town</h2>

          <div className="space-y-12">
            {/* Dambulla Cave Temple */}
            <Card className="overflow-hidden border-2 border-gold-200 dark:border-yellow-700">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30">
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
                      Rising majestically 160 meters above the surrounding plains, the Dambulla Cave Temple represents 
                      over 2,000 years of continuous Buddhist devotion. This extraordinary complex consists of five main 
                      caves carved into a massive granite outcrop, each transformed into a sacred sanctuary filled with 
                      over 150 Buddha statues, ancient frescoes covering 2,100 square meters of walls and ceilings, and 
                      countless artifacts that chronicle the evolution of Buddhist art in Sri Lanka.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The temple&apos;s origins trace back to the 1st century BCE when King Valagamba sought refuge in these 
                      caves during his 14-year exile. Upon reclaiming his throne, he transformed the caves into magnificent 
                      temples as a gesture of gratitude. Each cave tells a unique story through its artistic treasures - 
                      from the 47-foot-long reclining Buddha in Cave 1 to the spectacular drip-ledge formations that have 
                      naturally protected these ancient artworks from the elements for millennia.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes Dambulla truly exceptional is how it showcases the continuous artistic evolution over 
                      two millennia. The older frescoes display influences from Indian Gupta art, while later additions 
                      show the development of distinctly Sinhalese artistic styles. The caves also house the largest 
                      collection of ancient Sinhalese inscriptions, providing invaluable insights into the island&apos;s 
                      early history and the development of Buddhism in Sri Lanka.
                    </p>

                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">Cave Temple Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
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
          <h2 className="text-4xl font-bold mb-10">Planning Your Cultural Triangle Adventure</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-indigo-200 dark:border-indigo-700">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30">
                <CardTitle className="text-2xl text-indigo-700 dark:text-indigo-300">Multi-Day Itinerary Suggestions</CardTitle>
                <CardDescription className="dark:text-indigo-400">Maximize your cultural triangle experience from Dambulla base</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Day 1: Dambulla Cave Temple & Town</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Start early (7:00 AM) at cave temple for cooler temperatures and better photography light. Spend 
                      2-3 hours exploring all five caves. Afternoon in town market and local restaurants. Evening at 
                      community temples for authentic cultural immersion.
                    </p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Perfect introduction to local culture and history</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Day 2: Sigiriya & Pidurangala</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Early departure (5:30 AM) for Pidurangala sunrise, then Sigiriya by 9:00 AM before crowds. Pack 
                      lunch or eat at Sigiriya village. Return to Dambulla for afternoon rest. Evening exploration of 
                      local food scene and night market areas.
                    </p>
                    <p className="text-xs text-green-600 font-medium">UNESCO World Heritage double experience</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Day 3: Minneriya Safari & Nalanda</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Morning safari at Minneriya (6:00 AM departure) for 4 hours including travel time. Late morning 
                      visit to Nalanda Gedige for peaceful temple experience. Afternoon return to Dambulla for market 
                      visits and souvenir shopping. Final evening at local temple ceremonies.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">Wildlife and archaeology combination day</p>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Pro Tips for Multi-Day Visits:</h4>
                  <ul className="text-sm text-indigo-700 dark:text-indigo-400 space-y-1">
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
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30">
                <CardTitle className="text-2xl text-teal-700 dark:text-teal-300">Transportation & Costs</CardTitle>
                <CardDescription className="dark:text-teal-400">Budget planning and transport options from Dambulla</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-teal-800 dark:text-teal-300">Transport Options & Costs</h4>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded border-l-4 border-teal-500">
                      <p className="font-medium text-teal-700 dark:text-teal-300 mb-1">Tuk-Tuk (Three-Wheeler):</p>
                      <p className="text-sm text-teal-600 dark:text-teal-400">
                        Most flexible option. Cave Temple: Rs. 300-500. Sigiriya: Rs. 1,500-2,000. Day hire: Rs. 4,000-6,000
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">Private Car with Driver:</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        Most comfortable. Day hire: Rs. 8,000-12,000. Multi-day packages available with hotel bookings
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border-l-4 border-green-500">
                      <p className="font-medium text-green-700 dark:text-green-300 mb-1">Local Buses:</p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Most economical. To Sigiriya: Rs. 50-80. Limited schedules, authentic local experience
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded border-l-4 border-purple-500">
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
          <h2 className="text-4xl font-bold mb-10">Authentic Dambulla Town Experiences</h2>

          <div className="space-y-12">
            {/* Dambulla Market */}
            <Card className="overflow-hidden border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="text-2xl text-orange-800">Dambulla Dedicated Economic Centre</CardTitle>
                <CardDescription className="text-lg text-orange-600">
                  Sri Lanka's largest wholesale market - a sensory explosion of colors, aromas, and energy
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Bustling Dambulla wholesale market with vendors and fresh produce"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The Dambulla Dedicated Economic Centre is not just a market - it's the agricultural heartbeat of
                      Sri Lanka. This massive complex, covering over 27 hectares, comes alive every day before dawn as
                      trucks loaded with fresh produce arrive from farms across the island. By 4:00 AM, the market is
                      buzzing with activity as wholesale traders, retailers, and buyers from across the country gather
                      to trade everything from exotic tropical fruits to the freshest vegetables you've ever seen.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Walking through this market is like experiencing a symphony of Sri Lankan agriculture. The air is
                      filled with the sweet aroma of ripe mangoes, the earthy scent of fresh root vegetables, and the
                      spicy fragrance of chilies and herbs. Vendors call out prices in Sinhala and Tamil, creating a
                      multilingual chorus that reflects Sri Lanka's diverse culture. The colors are absolutely stunning
                      - pyramids of bright red tomatoes, mountains of golden bananas, and rows of deep purple eggplants
                      create a visual feast.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes this market truly special is its role in Sri Lankan society. This isn't just commerce -
                      it's community. Families have been trading here for generations, passing down knowledge about
                      seasonal produce, quality assessment, and the art of negotiation. The relationships between
                      farmers, wholesalers, and retailers are built on decades of trust and mutual respect.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-3">Market Experience Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
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
                      Dambulla's food scene is a delicious journey through authentic Sri Lankan cuisine, where family
                      recipes have been perfected over generations and every meal tells a story. Unlike tourist-oriented
                      restaurants, the local eateries in Dambulla serve food the way Sri Lankan families have been
                      preparing it for centuries - with love, tradition, and the freshest ingredients from the nearby
                      market.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The town's location at the heart of Sri Lanka's agricultural region means that restaurants here
                      have access to the freshest vegetables, fruits, and spices. Local cooks take pride in their curry
                      preparations, often grinding their own spice mixtures and using traditional clay pots that impart
                      unique flavors to the food. The result is cuisine that's more authentic and flavorful than what
                      you'll find in most tourist areas.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Street food culture thrives in Dambulla, with vendors setting up stalls near the market, bus
                      station, and temple areas. These aren't just quick snacks - they're culinary traditions passed
                      down through families. From crispy hoppers filled with spicy sambol to sweet treats like kokis and
                      kavum, every bite connects you to Sri Lankan food heritage.
                    </p>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3">Must-Try Local Foods:</h4>
                      <ul className="space-y-3 text-muted-foreground">
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
                      While tourists flock to the famous cave temples, the real spiritual heart of Dambulla beats in its
                      community temples where local families have worshipped for generations. These temples aren't just
                      religious sites - they're community centers where people gather for festivals, children learn
                      traditional values, and the elderly share wisdom with younger generations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The town is home to several beautiful Buddhist temples, each with its own character and community.
                      Morning and evening prayer sessions are open to visitors, offering a chance to experience
                      authentic Buddhist practices. The sound of chanting, the fragrance of incense, and the peaceful
                      atmosphere provide a stark contrast to the bustling market life just streets away.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Hindu temples also play an important role in Dambulla's spiritual landscape, reflecting the town's
                      multicultural heritage. During festival seasons, the entire town comes alive with colorful
                      processions, traditional music, and community celebrations that welcome everyone regardless of
                      their background.
                    </p>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-3">Spiritual Experiences:</h4>
                      <ul className="space-y-3 text-muted-foreground">
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

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-yellow-300 dark:border-yellow-600">
          [Premium Advertisement Space - 300x250 Medium Rectangle]
        </div>

       
        {/* Local Life & Culture */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Immerse Yourself in Local Life & Culture</h2>
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
                    <p className="text-sm text-muted-foreground mb-2">
                      The town awakens with the arrival of produce trucks at the market. Temple bells ring for morning
                      prayers, and the aroma of fresh hoppers and tea fills the air as breakfast stalls open. This is
                      when Dambulla is most authentic - before the tourist buses arrive and when locals go about their
                      daily routines.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">Best time to experience authentic local life</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Mid-Morning (7:00-11:00 AM)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Children walk to school in crisp white uniforms, shops open their shutters, and the market reaches
                      peak activity. Local buses arrive and depart with their distinctive horn sounds, and office
                      workers grab quick breakfasts from street vendors. The town buzzes with productive energy.
                    </p>
                    <p className="text-xs text-green-600 font-medium">Perfect for market visits and street food</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Afternoon (11:00 AM-4:00 PM)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The pace slows as the tropical heat intensifies. Many shops close for lunch and afternoon rest.
                      This is when families gather for rice and curry meals, and when you can find quiet corners to
                      observe daily life. Local restaurants serve their best traditional meals during this time.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">Ideal for authentic lunch experiences</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Evening (4:00-8:00 PM)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The town comes alive again as temperatures cool. Families visit temples for evening prayers,
                      children play in temple courtyards, and street food vendors set up for the evening crowd. This is
                      the most social time of day, when community bonds are strongest.
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
                    <p className="text-sm text-muted-foreground mb-2">
                      While many people speak basic English, learning a few Sinhala phrases will open hearts and doors.
                      "Ayubowan" (may you live long) is a traditional greeting that shows respect. Most locals are
                      patient and helpful with visitors who make an effort to communicate in their language.
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      Basic phrases: "Sthuthi" (thank you), "Kiyawada?" (how much?)
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Market Interactions</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Bargaining is expected in markets, but do it with a smile and respect. Vendors appreciate
                      customers who show genuine interest in their products. Don't be afraid to ask about unfamiliar
                      fruits or vegetables - locals love sharing knowledge about their produce.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      Start bargaining at about 70% of the asking price
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Religious Respect</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      When visiting local temples, dress modestly and remove shoes. Don't point your feet toward Buddha
                      statues or monks. If invited to participate in ceremonies, follow the lead of locals. Photography
                      is usually okay, but ask permission first.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">White clothing is preferred for temple visits</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Hospitality Culture</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Sri Lankan hospitality is legendary, and Dambulla locals embody this tradition. If invited to
                      someone's home, it's a great honor. Bring a small gift like sweets or fruit. Don't be surprised if
                      you're offered tea or a meal - refusing might be considered rude.
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
          <h2 className="text-4xl font-bold mb-10">Practical Guide to Dambulla Town</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-yellow-200">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardTitle className="text-2xl text-yellow-700">Getting Around & Transportation</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-yellow-800">Local Transportation</h4>
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
                  <h4 className="font-semibold text-lg mb-3 text-yellow-800">Intercity Connections</h4>
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
                    <p className="text-yellow-600 font-medium">Bus station located near the main market area</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
                <CardTitle className="text-2xl text-red-700">Accommodation & Practical Tips</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-800">Where to Stay</h4>
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
                  <h4 className="font-semibold text-lg mb-3 text-red-800">Essential Services</h4>
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
                    <p className="text-red-600 font-medium">
                      Most services concentrated around market and bus station area
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-800">Money & Shopping</h4>
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
                    <p className="text-red-600 font-medium">Always carry small bills for street vendors and tuk-tuks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Inspirational Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-2 border-green-200 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-green-800 mb-4">
                Your Authentic Dambulla Town Adventure Awaits
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dambulla town offers something that no tourist attraction can provide - the authentic soul of Sri
                  Lanka. Here, in the bustling markets, family-run restaurants, and community temples, you'll discover
                  the real heart of this beautiful island nation. This is where Sri Lankan hospitality isn't a business
                  strategy, but a genuine way of life that has been passed down through generations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every interaction in Dambulla is an opportunity to connect with the local community and understand Sri
                  Lankan culture from the inside. Whether you're sharing a cup of tea with a market vendor, learning to
                  make hoppers from a local family, or joining evening prayers at a neighborhood temple, you're not just
                  observing Sri Lankan life - you're becoming part of it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The memories you'll create in Dambulla town will be different from typical tourist experiences.
                  They'll be personal, authentic, and deeply meaningful. You'll remember the taste of fresh king coconut
                  on a hot afternoon, the sound of temple bells mixing with market calls, and the warmth of people who
                  welcomed you not as a tourist, but as a friend.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Take time to slow down and embrace the rhythm of local life. Wake up early to experience the market at
                  its most vibrant, linger over meals to savor authentic flavors, and don't be afraid to strike up
                  conversations with locals. Dambulla town rewards those who approach it with curiosity, respect, and an
                  open heart.
                </p>
                <div className="bg-white/70 p-6 rounded-xl border border-green-200 mt-8">
                  <p className="text-xl font-semibold text-green-800 mb-2">
                    Embrace the authentic spirit of Sri Lanka in beautiful Dambulla! 🏪🥥🙏✨
                  </p>
                  <p className="text-sm text-green-600">
                    Experience real Sri Lankan hospitality and create memories that will last a lifetime
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
