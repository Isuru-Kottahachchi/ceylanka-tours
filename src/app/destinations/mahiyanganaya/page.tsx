import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, TreePine, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Mahiyanganaya Sri Lanka: Hidden Gem Guide 2025 | Ancient Buddhist Heritage",
  description:
    "Discover Mahiyanganaya, Sri Lanka's ancient Buddhist heritage site. Complete guide to sacred temples, natural beauty, cultural significance, and authentic rural experiences.",
  keywords:
    "Mahiyanganaya Sri Lanka, Buddhist heritage, Mahiyangana Raja Maha Vihara, ancient temples, Uva Province, rural tourism, cultural sites",
  openGraph: {
    title: "Mahiyanganaya: Ancient Buddhist Heritage Guide 2025",
    description: "Your complete guide to Sri Lanka's sacred ancient town",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function MahiyanganaayaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Ancient Mahiyangana Raja Maha Vihara temple with golden stupa surrounded by lush mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mahiyanganaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Buddhist Heritage & Sacred Pilgrimage Site</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Uva Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              Ancient Buddhist Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Pristine Natural Beauty
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Mahiyanganaya: Where Buddhism First Touched Sri Lanka
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Mahiyanganaya holds the profound distinction of being the first place in Sri Lanka visited by Lord Buddha,
              making it one of the most sacred Buddhist pilgrimage sites on the island. This ancient town in the Uva
              Province is steeped in 2,500 years of Buddhist history and surrounded by pristine natural beauty that has
              remained largely unchanged through the centuries.
            </p>
            <p className="text-lg">
              Far from the tourist crowds, Mahiyanganaya offers visitors an authentic glimpse into Sri Lanka&apos;s spiritual
              heart and rural life. Here, ancient traditions live on, sacred sites inspire reverence, and the natural
              landscape provides a serene backdrop for reflection and discovery. This hidden gem represents the essence
              of Sri Lankan Buddhism and cultural heritage.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Mahiyanganaya Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Uva Province, 210km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Significance:</strong> First Buddhist site in Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>History:</strong> 2,500+ years of Buddhist heritage
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Environment:</strong> Pristine natural surroundings
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Must-See:</strong> Mahiyangana Raja Maha Vihara
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 1-2 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buddhist Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Buddhist Heritage & Ancient History</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Golden stupa of Mahiyangana Raja Maha Vihara with devotees offering prayers"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The sacred stupa where Lord Buddha&apos;s hair relic is enshrined
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                According to Buddhist chronicles, Lord Buddha visited Mahiyanganaya during his first year of
                enlightenment, making it the first place in Sri Lanka blessed by his presence. The Mahiyangana Raja Maha
                Vihara was built to enshrine a hair relic of the Buddha, given to the local Yaksha king Mahasumana.
              </p>
              <p>
                This ancient temple complex represents over 2,500 years of continuous Buddhist worship and is considered
                one of the 16 most sacred Buddhist sites in Sri Lanka. The golden stupa, ancient bo tree, and
                surrounding structures create a deeply spiritual atmosphere that draws pilgrims from across the Buddhist
                world.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Sacred Significance:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• First place visited by Lord Buddha in Sri Lanka</li>
                  <li>• Houses a sacred hair relic of the Buddha</li>
                  <li>• One of 16 most sacred Buddhist sites</li>
                  <li>• Continuous worship for over 2,500 years</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Sites & Attractions</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Mahiyangana Raja Maha Vihara */}
            <Card>
              <CardHeader>
                <CardTitle>1. Mahiyangana Raja Maha Vihara</CardTitle>
                <CardDescription>The most sacred Buddhist temple in the region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Mahiyangana Raja Maha Vihara showing the golden stupa, ancient architecture, and pilgrims"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The centerpiece of Mahiyanganaya, this ancient temple complex houses the sacred hair relic of Lord
                      Buddha in its golden stupa. The temple showcases beautiful traditional Sinhalese architecture and
                      provides a deeply spiritual experience for visitors and pilgrims alike.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Sacred hair relic of Lord Buddha
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful golden stupa and ancient bo tree
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional Sinhalese temple architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Active pilgrimage site with daily ceremonies
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sorabora Wewa */}
            <Card>
              <CardHeader>
                <CardTitle>2. Sorabora Wewa (Ancient Reservoir)</CardTitle>
                <CardDescription>Historic irrigation marvel and scenic lake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built during the reign of King Dutugemunu (161-137 BCE), Sorabora Wewa is one of Sri Lanka&apos;s
                      ancient irrigation masterpieces. This scenic reservoir not only showcases ancient engineering
                      skills but also provides a peaceful setting surrounded by lush greenery and wildlife.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient irrigation system from 2nd century BCE
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful lake surrounded by nature
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bird watching and wildlife spotting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful setting for reflection and photography
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sorabora Wewa ancient reservoir showing calm waters surrounded by green hills and wildlife"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dambana Indigenous Village */}
            <Card>
              <CardHeader>
                <CardTitle>3. Dambana Indigenous Village</CardTitle>
                <CardDescription>Authentic Vedda community cultural experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dambana Vedda village showing traditional huts, indigenous people, and forest setting"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located near Mahiyanganaya, Dambana is home to the Vedda people, Sri Lanka&apos;s indigenous community.
                      This authentic village experience offers insights into ancient traditions, hunting practices, and
                      a way of life that has remained unchanged for thousands of years.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic indigenous Vedda culture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional hunting and gathering demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient language and customs preservation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique cultural exchange opportunity
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Natural Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Natural Beauty & Outdoor Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Mountain Landscapes & Hiking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Scenic Mountain Views</h4>
                  <p className="text-sm text-muted-foreground">
                    Surrounded by rolling hills and pristine forests offering spectacular panoramic views.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nature Trails</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore forest paths and mountain trails with opportunities for wildlife spotting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Waterfall Excursions</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover hidden waterfalls and natural pools in the surrounding wilderness.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rural & Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Village Life</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience authentic rural Sri Lankan life with farming communities and traditional practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Agricultural Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn about traditional farming methods and participate in seasonal agricultural activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Crafts</h4>
                  <p className="text-sm text-muted-foreground">
                    Observe traditional handicrafts and pottery making by local artisans.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pilgrimage & Spiritual Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pilgrimage & Spiritual Journey</h2>
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Sacred Pilgrimage Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-amber-800">Spiritual Practices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Participate in daily temple ceremonies</li>
                    <li>• Meditation sessions in peaceful surroundings</li>
                    <li>• Offering flowers and prayers at the stupa</li>
                    <li>• Learning about Buddhist teachings and history</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-800">Pilgrimage Guidelines</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dress modestly with covered shoulders and legs</li>
                    <li>• Remove shoes before entering temple buildings</li>
                    <li>• Maintain respectful silence during ceremonies</li>
                    <li>• Photography restrictions in certain sacred areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Weather & Best Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear skies and minimal rainfall</li>
                  <li>• Perfect for temple visits and hiking</li>
                  <li>• Comfortable temperatures (22-28°C)</li>
                  <li>• Best for outdoor activities</li>
                  <li>• Ideal pilgrimage conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>October & April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional light showers</li>
                  <li>• Lush green landscapes</li>
                  <li>• Fewer visitors, peaceful atmosphere</li>
                  <li>• Good for cultural experiences</li>
                  <li>• Pleasant weather overall</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Wet Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Higher rainfall and humidity</li>
                  <li>• Vibrant green surroundings</li>
                  <li>• Waterfalls at their most spectacular</li>
                  <li>• Fewer tourists, authentic experience</li>
                  <li>• Some outdoor activities limited</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-amber-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Sacred Journey to Mahiyanganaya</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Mahiyanganaya offers a profound spiritual journey that connects visitors with the very roots of Buddhism
                in Sri Lanka. This sacred town provides an authentic experience far from commercial tourism, where
                ancient traditions, natural beauty, and spiritual significance create unforgettable memories.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you come as a pilgrim seeking spiritual enlightenment, a history enthusiast exploring ancient
                sites, or a nature lover discovering pristine landscapes, Mahiyanganaya welcomes you with open arms and
                timeless wisdom. Take time to absorb the peaceful atmosphere and connect with the sacred energy that has
                drawn visitors for over 2,500 years.
              </p>
              <p className="text-muted-foreground font-medium">Discover the sacred heart of Sri Lanka! 🙏⛩️</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
