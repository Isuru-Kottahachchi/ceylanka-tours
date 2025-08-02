import type { Metadata } from "next"
import Image from "next/image"
import {
  Clock,
  MapPin,
  CheckCircle,
  Star,
  Users,
  TreePine,
  Thermometer,
  Camera,
  Mountain,
  Droplets,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Horton Plains National Park Complete Guide 2025 | World&apos;s End, Baker&apos;s Falls & Cloud Forest Trek",
  description:
    "Discover Horton Plains National Park - Sri Lanka&apos;s highest plateau at 2,100m. Complete guide to World&apos;s End cliff, Baker&apos;s Falls, endemic wildlife, hiking trails, and cloud forest ecosystem.",
  keywords:
    "Horton Plains, World&apos;s End, Baker&apos;s Falls, Sri Lanka national parks, cloud forest, endemic species, hiking trails, Nuwara Eliya, central highlands, plateau trek",
  openGraph: {
    title: "Horton Plains National Park: Ultimate Guide 2025",
    description: "Your complete guide to Sri Lanka&apos;s most spectacular high-altitude wilderness",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function HortonPlainsDetailedGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Hortonplains15.jpeg"
          alt="Dramatic cliff edge at World&apos;s End in Horton Plains with misty mountains and valleys below"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Horton Plains</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light leading-relaxed">
            Sri Lanka&apos;s Mystical High-Altitude Wilderness
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Central Highlands, 2,100m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <TreePine className="w-4 h-4 mr-2" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Mountain className="w-4 h-4 mr-2" />
              870m Cliff Drop at World&apos;s End
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Detailed Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Welcome to Horton Plains: Where Earth Meets Sky</h2>
          <div className="prose prose-xl max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed">
              Imagine standing on the edge of the world, where rolling grasslands suddenly disappear into a dramatic
              cliff that plunges 870 meters straight down into misty valleys below. This is Horton Plains National Park,
              Sri Lanka&apos;s most extraordinary high-altitude wilderness, where nature has created a landscape so unique
              and breathtaking that it feels like stepping into another realm entirely.
            </p>
            <p className="text-lg mb-6">
              Perched at an elevation of 2,100 to 2,300 meters above sea level, Horton Plains is Sri Lanka&apos;s highest
              plateau and one of the most biodiverse ecosystems in the country. This 3,160-hectare wonderland is home to
              a remarkable cloud forest ecosystem where mist-shrouded trees draped in moss create an almost fairy-tale
              atmosphere. The park&apos;s crown jewel is World&apos;s End, a sheer precipice that offers one of the most
              spectacular views in all of Asia, where on clear days you can see all the way to the southern coast of Sri
              Lanka, some 80 kilometers away.
            </p>
            <p className="text-lg mb-6">
              But Horton Plains is much more than just a scenic viewpoint. It&apos;s a living laboratory of evolution, home
              to numerous endemic species found nowhere else on Earth. The park&apos;s unique climate, created by its high
              altitude and position in the path of both monsoons, has fostered the development of specialized plant and
              animal communities that have adapted to life in the clouds. From the Sri Lankan sambar deer that graze
              fearlessly in the open grasslands to the elusive purple-faced langur monkeys that swing through the forest
              canopy, every corner of this park tells a story of adaptation and survival.
            </p>
            <p className="text-lg">
              The journey through Horton Plains is as much about the experience as it is about the destination. The
              circular hiking trail that takes you to World&apos;s End and Baker&apos;s Falls winds through three distinct
              ecosystems: the montane grasslands with their golden waves of grass, the cloud forest with its mysterious
              moss-covered trees, and the transitional zones where these two worlds meet and blend. Each step reveals
              new wonders, from tiny endemic flowers blooming in the grass to ancient trees that have stood sentinel
              over this landscape for centuries.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Enhanced Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                <Star className="w-6 h-6 text-yellow-500" />
                Essential Horton Plains Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-3">Location & Access</h4>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Province:</strong> Central Highlands, Nuwara Eliya District
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 2,100-2,300 meters above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Total Area:</strong> 3,160 hectares of protected wilderness
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-green-700 dark:text-green-300 mb-3">Trail & Timing</h4>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Hiking Duration:</strong> 3-4 hours circular trail
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Trail Distance:</strong> 9.5 kilometers total
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Best Visibility:</strong> 6:00-10:00 AM
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-3">Costs & Seasons</h4>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Foreign Entry:</strong> $15 USD adults, $8 children
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Dry Season:</strong> January-March, June-September
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Photography:</strong> Best light early morning
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Main Attractions */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">The Magnificent Attractions of Horton Plains</h2>

          <div className="space-y-12">
            {/* World&apos;s End - Detailed */}
            <Card className="overflow-hidden border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
                <CardTitle className="text-2xl text-orange-800 dark:text-orange-300">World&apos;s End: The Ultimate Cliff Experience</CardTitle>
                <CardDescription className="text-lg text-orange-600 dark:text-orange-400">
                  Sri Lanka&apos;s most dramatic viewpoint - an 870-meter sheer drop into eternity
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="World&apos;s End cliff showing the dramatic 870-meter drop with misty valleys below"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      World&apos;s End is not just a viewpoint - it&apos;s a geological marvel that will leave you speechless.
                      This massive cliff face drops vertically for 870 meters (2,854 feet) into the valley below,
                      creating one of the most dramatic landscapes in all of South Asia. The name &quot;World&apos;s End&quot;
                      perfectly captures the feeling you get when standing at this precipice - it truly feels like
                      you&apos;re at the edge of the world itself.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      On crystal-clear mornings, the view from World&apos;s End is absolutely breathtaking. You can see
                      across the entire southern plains of Sri Lanka, with the landscape stretching out like a vast
                      green carpet dotted with villages, tea plantations, and forests. On the clearest days, you can
                      even spot the glimmer of the Indian Ocean on the southern horizon, some 80 kilometers away. The
                      play of light and shadow across the valleys below creates an ever-changing panorama that
                      photographers and nature lovers find irresistible.
                    </p>

                    <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">What Makes World&apos;s End Special:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Sheer Drop:</strong> 870-meter vertical cliff face - one of the highest in Sri Lanka
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Panoramic Views:</strong> 180-degree views across southern Sri Lanka on clear days
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Ocean Views:</strong> On exceptionally clear days, see the Indian Ocean 80km away
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Safety Features:</strong> Protective barriers and warning signs for visitor safety
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Best Timing:</strong> Early morning (6-10 AM) before clouds roll in
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Baker&apos;s Falls - Detailed */}
            <Card className="overflow-hidden border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                <CardTitle className="text-2xl text-blue-800 dark:text-blue-300">Baker&apos;s Falls: A Hidden Waterfall Paradise</CardTitle>
                <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                  A 20-meter cascade through pristine cloud forest - nature&apos;s perfect rest stop
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Baker&apos;s Falls is like discovering a secret garden in the heart of Horton Plains. This enchanting
                      20-meter waterfall cascades down through moss-covered rocks in a series of beautiful tiers,
                      creating natural pools and a symphony of water sounds that provides the perfect soundtrack for
                      your mountain adventure. Named after Sir Samuel Baker, a British explorer who discovered this
                      hidden gem in the 1800s, the falls represent the gentler, more intimate side of Horton Plains.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The journey to Baker&apos;s Falls takes you through some of the most beautiful cloud forest in Sri
                      Lanka. The path winds through ancient trees draped in moss and epiphytes, where shafts of sunlight
                      filter through the canopy creating an almost cathedral-like atmosphere. The air here is cool and
                      fresh, filled with the sounds of endemic birds and the gentle rustle of leaves in the mountain
                      breeze.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes Baker&apos;s Falls truly special is its setting within the cloud forest ecosystem. The
                      waterfall is surrounded by a rich variety of endemic plants, including several species of
                      rhododendrons that bloom with spectacular pink and red flowers during the flowering season. The
                      area around the falls is also one of the best spots in the park for bird watching, with species
                      like the Sri Lanka white-eye and the dull-blue flycatcher frequently spotted in the surrounding
                      trees.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Baker&apos;s Falls Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Waterfall Height:</strong> 20 meters of cascading mountain water
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Natural Pools:</strong> Beautiful rock pools perfect for photography
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Cloud Forest Setting:</strong> Surrounded by moss-covered ancient trees
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Bird Watching:</strong> Excellent spot for endemic bird species
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Rest Area:</strong> Perfect spot for picnic and relaxation
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Baker&apos;s Falls waterfall cascading through lush forest with rocks and native vegetation"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Little World&apos;s End - Detailed */}
            <Card className="overflow-hidden border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                <CardTitle className="text-2xl text-green-800 dark:text-green-300">Little World&apos;s End: The Perfect Warm-Up</CardTitle>
                <CardDescription className="text-lg text-green-600 dark:text-green-400">
                  A smaller but equally stunning cliff viewpoint with fewer crowds
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Little World&apos;s End showing a smaller cliff with mountain views and grasslands"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Don&apos;t let the name fool you - Little World&apos;s End may be smaller than its famous big brother, but
                      it offers an equally spectacular and often more intimate viewing experience. This charming cliff
                      viewpoint, located about halfway along the trail to the main World&apos;s End, provides stunning
                      panoramic views across the Belihul Oya valley and the surrounding mountain ranges, often with
                      fewer crowds and a more peaceful atmosphere.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes Little World&apos;s End special is its position along the trail and the different
                      perspective it offers. From here, you can see the dramatic landscape of Horton Plains stretching
                      out in all directions, with the rolling grasslands in the foreground and the misty mountains in
                      the distance. Many visitors find that Little World&apos;s End actually offers better photographic
                      opportunities because you can capture both the cliff edge and the beautiful plateau landscape in a
                      single frame.
                    </p>

                    <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Why Visit Little World&apos;s End:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Less Crowded:</strong> More peaceful experience with fewer tourists
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Great Photography:</strong> Excellent angles for landscape photography
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Valley Views:</strong> Beautiful views of Belihul Oya valley
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Perfect Timing:</strong> Great spot to gauge weather conditions
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
        <div className="my-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-center text-gray-500 border-2 border-dashed border-purple-300">
          [Premium Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Detailed Wildlife & Ecosystem */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">The Incredible Wildlife & Ecosystem of Horton Plains</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                <CardTitle className="text-2xl text-green-700 dark:text-green-300">Endemic Animals & Mammals</CardTitle>
                <CardDescription className="dark:text-gray-300">Unique species found only in Sri Lanka&apos;s highlands</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Sri Lankan Sambar Deer</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The most visible and photogenic residents of Horton Plains, these magnificent deer have adapted
                      perfectly to the high-altitude grasslands. Unlike their forest-dwelling cousins, these sambar are
                      remarkably unafraid of humans and can often be seen grazing peacefully in the open grasslands,
                      especially in the early morning hours. Adult males can weigh up to 350kg and sport impressive
                      antlers that they shed and regrow annually.
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      Best Viewing: Early morning in the grasslands near the entrance
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Purple-faced Langur</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      These endangered primates are found only in Sri Lanka and represent one of the world&apos;s 25 most
                      endangered primates. The Horton Plains population is particularly special as they&apos;ve adapted to
                      the cooler mountain climate. They have distinctive purple-black faces and long tails, and live in
                      small family groups in the forest areas of the park. Their diet consists mainly of leaves, fruits,
                      and flowers from endemic plants.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">
                      Best Viewing: Forest areas near Baker&apos;s Falls, early morning
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Wild Boar</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The Sri Lankan wild boar found in Horton Plains is a subspecies endemic to the island. These
                      intelligent animals have adapted to the high-altitude environment and can often be seen foraging
                      in the early morning or late afternoon. They play an important role in the ecosystem by dispersing
                      seeds and creating small clearings that allow new plants to grow.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">
                      Best Viewing: Near water sources, dawn and dusk
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Giant Squirrel</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The Sri Lankan giant squirrel is one of the world&apos;s largest squirrel species and a true endemic
                      gem. In Horton Plains, they&apos;ve adapted to the cooler climate and can be spotted in the forest
                      areas, particularly around Baker&apos;s Falls. Their distinctive reddish-brown and black coloration
                      makes them easy to identify when you&apos;re lucky enough to spot one.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">                      Best Viewing: Forest canopy near Baker&apos;s Falls</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-950 dark:to-sky-950">
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">Endemic Birds & Plant Life</CardTitle>
                <CardDescription className="dark:text-gray-300">Unique flora and fauna of the cloud forest</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Sri Lanka Whistling Thrush</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This beautiful blue-black bird is endemic to Sri Lanka and is known for its melodious whistling
                      call that echoes through the misty forests. They&apos;re often called the &quot;voice of the mountains&quot; and
                      their song is one of the most distinctive sounds you&apos;ll hear in Horton Plains. They prefer the
                      rocky areas near streams and waterfalls.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">Best Hearing: Near Baker&apos;s Falls, early morning</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Sri Lanka Bush Warbler</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This small, elusive bird is found only in the high-altitude grasslands and forest edges of Sri
                      Lanka. They&apos;re particularly common in Horton Plains, where they nest in the tall grass and feed on
                      insects. Their distinctive call is often heard but the birds themselves are quite difficult to
                      spot due to their secretive nature.
                    </p>
                    <p className="text-xs text-red-600 font-medium">
                      Best Hearing: Grassland edges, throughout the day
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Rhododendron Trees</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The cloud forests of Horton Plains are home to several species of wild rhododendrons that bloom
                      with spectacular pink, red, and white flowers. These ancient trees, some over 100 years old,
                      create a magical atmosphere when in bloom (typically March-May and August-September). They&apos;re
                      often covered in moss and epiphytes, creating miniature ecosystems on their branches.
                    </p>
                    <p className="text-xs text-pink-600 font-medium">Best Viewing: Forest areas, flowering seasons</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Cloud Forest Ecosystem</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The cloud forest of Horton Plains is a unique ecosystem where trees are constantly bathed in mist
                      and fog. This creates perfect conditions for epiphytes (air plants), mosses, and ferns to thrive.
                      The forest floor is carpeted with endemic ferns, and the tree trunks are covered in a thick layer
                      of moss that acts like a sponge, absorbing moisture from the air.
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      Best Experience: Forest trail sections, any time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comprehensive Visiting Guide */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Complete Guide to Visiting Horton Plains</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                <CardTitle className="text-2xl text-purple-700 dark:text-purple-300">Detailed Planning Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-800 dark:text-purple-300">Entry Fees & Permits</h4>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg space-y-2">
                    <p className="text-sm dark:text-gray-200">
                      <strong>Foreign Adults:</strong> $15 USD (approximately Rs. 4,500)
                    </p>
                    <p className="text-sm dark:text-gray-200">
                      <strong>Foreign Children (6-12):</strong> $8 USD (approximately Rs. 2,400)
                    </p>
                    <p className="text-sm dark:text-gray-200">
                      <strong>SAARC Nationals:</strong> $8 USD (approximately Rs. 2,400)
                    </p>
                    <p className="text-sm dark:text-gray-200">
                      <strong>Local Adults:</strong> Rs. 60
                    </p>
                    <p className="text-sm dark:text-gray-200">
                      <strong>Local Children:</strong> Rs. 30
                    </p>
                    <p className="text-sm dark:text-gray-200">
                      <strong>Vehicle Entry:</strong> Additional Rs. 250 for cars, Rs. 100 for motorcycles
                    </p>
                    <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                      Note: Prices subject to change. Payment accepted in USD, LKR, or major credit cards
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-800 dark:text-purple-300">Best Times to Visit</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-3">
                      <p className="font-medium text-green-700 dark:text-green-300">Optimal Viewing (6:00-10:00 AM)</p>
                      <p className="text-sm text-muted-foreground">
                        Clear skies, best visibility, active wildlife, cool temperatures
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-3">
                      <p className="font-medium text-yellow-700 dark:text-yellow-300">Acceptable (10:00 AM-2:00 PM)</p>
                      <p className="text-sm text-muted-foreground">
                        Increasing cloud cover, warmer temperatures, some visibility
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-3">
                      <p className="font-medium text-red-700 dark:text-red-300">Not Recommended (After 2:00 PM)</p>
                      <p className="text-sm text-muted-foreground">
                        Heavy cloud cover, limited visibility, afternoon rains possible
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-800 dark:text-purple-300">Seasonal Considerations</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-blue-700 dark:text-blue-300">Dry Season (January-March, June-September)</p>
                      <p className="text-sm text-muted-foreground">
                        Best weather, clearest views, less rain, easier hiking conditions
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-orange-700 dark:text-orange-300">Wet Season (April-May, October-December)</p>
                      <p className="text-sm text-muted-foreground">
                        More rain, misty conditions, lush vegetation, fewer crowds
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-800 dark:text-purple-300">Getting There</h4>
                  <div className="space-y-2 text-sm dark:text-gray-200">
                    <p>
                      <strong>From Nuwara Eliya:</strong> 32 km (1 hour) via Ambewela and Pattipola
                    </p>
                    <p>
                      <strong>From Haputale:</strong> 25 km (45 minutes) via Diyatalawa
                    </p>
                    <p>
                      <strong>From Bandarawela:</strong> 35 km (1.5 hours) via Haputale
                    </p>
                    <p>
                      <strong>From Colombo:</strong> 200 km (4-5 hours) via Nuwara Eliya
                    </p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      Recommendation: Private vehicle or organized tour strongly recommended
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                <CardTitle className="text-2xl text-orange-700 dark:text-orange-300">Essential Tips & Safety</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">What to Pack</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-2">
                      <p className="font-medium text-orange-700 dark:text-orange-300">Clothing:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Warm jacket/fleece</li>
                        <li>• Long pants</li>
                        <li>• Waterproof jacket</li>
                        <li>• Comfortable hiking boots</li>
                        <li>• Hat and gloves</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-orange-700 dark:text-orange-300">Equipment:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Water (2+ liters)</li>
                        <li>• Energy snacks</li>
                        <li>• Camera + extra batteries</li>
                        <li>• First aid kit</li>
                        <li>• Flashlight/headlamp</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">Safety Guidelines</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded border-l-4 border-red-500">
                      <p className="font-medium text-red-700 dark:text-red-300 mb-1">Critical Safety Rules:</p>
                      <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                        <li>• Stay on marked trails at all times</li>
                        <li>• Never go beyond safety barriers at cliff edges</li>
                        <li>• Don&apos;t feed or approach wild animals</li>
                        <li>• Start early to avoid afternoon weather changes</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded border-l-4 border-yellow-500">
                      <p className="font-medium text-yellow-700 dark:text-yellow-300 mb-1">Weather Precautions:</p>
                      <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                        <li>• Temperature can drop to 5°C (41°F)</li>
                        <li>• Weather changes rapidly</li>
                        <li>• Fog can reduce visibility to zero</li>
                        <li>• Rain can start suddenly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">Trail Information</h4>
                  <div className="space-y-2 text-sm dark:text-gray-200">
                    <p>
                      <strong>Total Distance:</strong> 9.5 km circular trail
                    </p>
                    <p>
                      <strong>Duration:</strong> 3-4 hours at moderate pace
                    </p>
                    <p>
                      <strong>Difficulty:</strong> Moderate (some steep sections)
                    </p>
                    <p>
                      <strong>Trail Markers:</strong> Well-marked with distance indicators
                    </p>
                    <p>
                      <strong>Rest Points:</strong> Baker&apos;s Falls, Little World&apos;s End
                    </p>
                    <p className="text-orange-600 dark:text-orange-400 font-medium">Trail is one-way only - no turning back once started</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300">Environmental Responsibility</h4>
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border-l-4 border-green-500">
                    <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                      <li>• Carry out all trash - leave no trace</li>
                      <li>• Don&apos;t pick flowers or disturb plants</li>
                      <li>• Keep noise levels low</li>
                      <li>• Respect wildlife and their habitat</li>
                      <li>• Stay on designated paths to prevent erosion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Inspirational Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 border-2 border-blue-200 dark:border-blue-800 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-blue-800 dark:text-blue-300 mb-4">
                Your Unforgettable Horton Plains Adventure Awaits
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Horton Plains National Park offers one of the most extraordinary and unforgettable experiences in all
                  of Sri Lanka. This is not just a hike - it&apos;s a journey through one of the world&apos;s most unique
                  ecosystems, where every step reveals new wonders and every view takes your breath away. From the
                  moment you enter the park and see the vast grasslands stretching toward the misty mountains, you&apos;ll
                  know you&apos;re somewhere truly special.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The memory of standing at World&apos;s End, with the world spread out below you and the wind in your hair,
                  will stay with you forever. The peaceful sound of Baker&apos;s Falls, the sight of sambar deer grazing
                  fearlessly in the morning mist, and the magical atmosphere of the cloud forest will create memories
                  that last a lifetime. This is nature at its most spectacular, preserved in its pristine state for you
                  to experience and cherish.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Remember to start early, dress warmly, and bring your sense of wonder. Horton Plains rewards those who
                  come prepared and approach it with respect for its natural beauty and ecological importance. Whether
                  you&apos;re a nature lover, photographer, hiker, or simply someone seeking an extraordinary experience,
                  Horton Plains will exceed your expectations and leave you with a deep appreciation for Sri Lanka&apos;s
                  incredible natural heritage.
                </p>
                <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mt-8">
                  <p className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Have an amazing adventure at the top of Sri Lanka! 🏔️🦌🌿✨
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-300">
                    Share your Horton Plains experience and help preserve this incredible ecosystem for future
                    generations
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
