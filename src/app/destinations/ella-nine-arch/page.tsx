import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Users, Camera, TreePine, Train } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Nine Arch Bridge Ella: Complete Guide 2025 | Train Spotting & Photography Paradise",
  description:
    "Explore the iconic Nine Arch Bridge in Ella, Sri Lanka's most photographed railway bridge. Complete guide to train times, best viewpoints, and photography tips.",
  keywords:
    "Nine Arch Bridge, Ella Sri Lanka, train spotting, railway bridge, photography, Demodara Bridge, hill country attractions",
  openGraph: {
    title: "Nine Arch Bridge Ella: Complete Photography & Train Spotting Guide",
    description: "Your ultimate guide to Sri Lanka's most iconic railway bridge and train spotting paradise",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function NineArchBridgeGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=900&width=1400"
          alt="Nine Arch Bridge with blue train crossing through lush green tea plantations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Nine Arch Bridge</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">Ella&apos;s Iconic Railway Marvel</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Train className="w-4 h-4 mr-2" />
              Historic Railway Bridge
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Camera className="w-4 h-4 mr-2" />
              Photography Paradise
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <TreePine className="w-4 h-4 mr-2" />
              Tea Country Views
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Detailed Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">The Most Photographed Bridge in Sri Lanka</h2>
          <div className="prose prose-xl max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed">
              Rising majestically from the emerald tea plantations of Ella, the Nine Arch Bridge stands as one of Sri
              Lanka&apos;s most iconic landmarks and a testament to the engineering brilliance of the colonial era. This
              magnificent stone and brick railway bridge, also known as the &quot;Bridge in the Sky,&quot; spans a deep ravine
              surrounded by lush tropical vegetation, creating one of the most photographed and Instagram-worthy
              locations in all of Sri Lanka. The bridge&apos;s perfect blend of human engineering and natural beauty has made
              it a pilgrimage site for photographers, train enthusiasts, and travelers seeking that perfect shot.
            </p>
            <p className="text-lg mb-6">
              Built during the British colonial period as part of the railway line connecting Colombo to Badulla, the
              Nine Arch Bridge represents a remarkable feat of engineering that was completed without using any steel -
              a necessity during World War I when steel was scarce and expensive. Instead, British engineers and local
              craftsmen used locally quarried stone, brick, and cement to create this 91-meter-long, 24-meter-high
              architectural marvel that has withstood nearly a century of tropical weather, earthquakes, and the daily
              passage of trains.
            </p>
            <p className="text-lg mb-6">
              What makes the Nine Arch Bridge truly special is not just its architectural beauty, but its setting in one
              of Sri Lanka&apos;s most scenic landscapes. The bridge curves gracefully through a valley surrounded by tea
              plantations, tropical forests, and misty hills that create an ever-changing backdrop of colors and moods.
              During the early morning hours, mist rises from the valley floor, creating an ethereal atmosphere that
              transforms the bridge into something from a fairy tale. As the day progresses, the changing light creates
              different moods and photographic opportunities that keep visitors returning again and again.
            </p>
            <p className="text-lg">
              The bridge has become synonymous with the romance of train travel in Sri Lanka, as the colorful blue and
              red trains of Sri Lanka Railways cross this architectural gem several times daily, creating moments of
              pure magic that have been captured in countless photographs and videos. The sight of a vintage train
              slowly crossing the bridge while surrounded by lush greenery has become an iconic image that represents
              the beauty and charm of Sri Lanka&apos;s hill country, making this location a must-visit destination for anyone
              exploring the island.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl text-center text-gray-500 border-2 border-dashed border-green-300">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Enhanced Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Train className="w-8 h-8 text-green-500" />
                Essential Bridge Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-green-700 mb-4">Engineering Marvel</h4>
                  <div className="flex items-center gap-3">
                    <Train className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Length:</strong> 91 meters (300 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Height:</strong> 24 meters (80 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Built:</strong> 1921 (British colonial era)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Materials:</strong> Stone, brick, cement (no steel)
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-blue-700 mb-4">Train Schedule</h4>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Morning:</strong> 6:20 AM, 9:45 AM, 11:45 AM
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Afternoon:</strong> 2:30 PM, 4:20 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Evening:</strong> 6:10 PM (most popular)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Note:</strong> Times may vary, check locally
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-purple-700 mb-4">Photography Tips</h4>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Best Light:</strong> Early morning (6-8 AM)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Golden Hour:</strong> 5-7 PM for warm tones
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Best Spots:</strong> Multiple viewpoints available
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Crowds:</strong> Arrive early to avoid crowds
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Experiences */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">The Complete Nine Arch Bridge Experience</h2>

          <div className="space-y-12">
            {/* Train Spotting Experience */}
            <Card className="overflow-hidden border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-sky-50">
                <CardTitle className="text-2xl text-blue-800">Train Spotting & Railway Romance</CardTitle>
                <CardDescription className="text-lg text-blue-600">
                  Witness the magic of vintage trains crossing this architectural marvel
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Colorful Sri Lankan train crossing the Nine Arch Bridge with passengers waving"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The heart-stopping moment when a train appears around the bend and slowly makes its way across the
                      Nine Arch Bridge is pure magic that never gets old, no matter how many times you witness it. The
                      vintage blue and red carriages of Sri Lanka Railways, often packed with locals and tourists alike,
                      create a scene straight out of a romantic movie as they curve gracefully across the stone arches
                      while surrounded by emerald tea plantations and misty hills.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes train spotting here so special is the interaction between passengers and spectators.
                      Train passengers often wave enthusiastically from windows and doorways, creating a joyful
                      connection between those on the bridge and those watching from below. The slow speed of trains
                      crossing the bridge (for safety reasons) gives everyone plenty of time to capture photos, wave,
                      and soak in the magical atmosphere.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The most popular train crossing is the evening service around 6:10 PM, when the golden hour light
                      creates perfect conditions for photography. However, the early morning crossings offer a more
                      serene experience with fewer crowds and often dramatic mist rising from the valley below. Each
                      crossing has its own character - morning trains often carry commuters and school children, while
                      afternoon trains are filled with tourists exploring the hill country.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3">Train Spotting Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Daily Crossings:</strong> 6-8 trains cross the bridge daily in both directions
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Vintage Carriages:</strong> Classic blue and red Sri Lankan railway cars
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Passenger Interaction:</strong> Friendly waves and photo opportunities
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Slow Crossing:</strong> Trains move slowly for safety, perfect for photos
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Sound Experience:</strong> Rhythmic clacking and steam whistle echoes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photography Paradise */}
            <Card className="overflow-hidden border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl text-purple-800">Photography Paradise & Best Viewpoints</CardTitle>
                <CardDescription className="text-lg text-purple-600">
                  Multiple angles and perspectives for the perfect shot
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The Nine Arch Bridge offers photographers an incredible variety of perspectives and compositions,
                      from classic wide shots that capture the entire bridge in its natural setting to intimate details
                      of the stonework and surrounding vegetation. The bridge&apos;s curved design and multiple arches create
                      natural leading lines that draw the eye through the frame, while the surrounding tea plantations
                      and forest provide layers of green that change color and mood throughout the day.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The most famous viewpoint is from the valley floor, where you can capture the bridge&apos;s full height
                      and grandeur with the train crossing above. However, there are several other excellent vantage
                      points: from the hillside tea plantations for elevated shots, from the bridge itself for unique
                      perspectives down the railway line, and from various points along the walking trails that offer
                      different angles and compositions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes photography here so rewarding is the constantly changing conditions. Morning mist
                      creates ethereal, dreamy images; midday sun brings out the vibrant greens of the vegetation;
                      golden hour provides warm, romantic lighting; and even overcast days create moody, atmospheric
                      shots. The bridge looks completely different in each season - lush and green during monsoons,
                      crisp and clear in dry weather.
                    </p>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-3">Photography Locations:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Valley Floor:</strong> Classic full bridge view with maximum height impact
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Tea Plantation Hills:</strong> Elevated shots showing bridge in landscape context
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Bridge Walkway:</strong> Unique perspectives along the railway line
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Forest Trails:</strong> Hidden viewpoints through tropical vegetation
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Drone Photography:</strong> Aerial perspectives (with proper permits)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Photographer capturing the Nine Arch Bridge from valley viewpoint during golden hour"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Historical & Engineering Marvel */}
            <Card className="overflow-hidden border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="text-2xl text-orange-800">Engineering Marvel & Historical Significance</CardTitle>
                <CardDescription className="text-lg text-orange-600">
                  A testament to colonial-era engineering brilliance
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Close-up view of the stone arches and engineering details of Nine Arch Bridge"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The Nine Arch Bridge represents one of the most remarkable engineering achievements of the British
                      colonial period in Sri Lanka, built during World War I when steel was scarce and expensive.
                      British engineers, working with local craftsmen and using traditional materials, created a
                      structure that has withstood nearly a century of tropical weather, earthquakes, and daily train
                      traffic without requiring major repairs - a testament to both the quality of design and
                      construction.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The bridge&apos;s construction required innovative solutions to overcome the challenges of building in
                      a remote, mountainous location with limited access to modern materials. Local stone was quarried
                      from nearby hills, bricks were made using traditional methods, and the cement was transported by
                      bullock cart and coolie labor up treacherous mountain paths. The precision of the stonework and
                      the perfect alignment of the arches demonstrate the skill of local craftsmen working under British
                      supervision.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes the bridge&apos;s engineering particularly impressive is its integration with the natural
                      landscape. The curve of the bridge follows the natural contours of the valley, while the height
                      and span were calculated to minimize environmental impact while providing the necessary clearance
                      for the railway line. The drainage systems built into the structure have prevented water damage,
                      while the foundation design has proven earthquake-resistant.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-3">Engineering Features:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>No Steel Construction:</strong> Built entirely with stone, brick, and cement
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Nine Perfect Arches:</strong> Each arch precisely calculated for load distribution
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Curved Design:</strong> Follows natural valley contours for stability
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Drainage Systems:</strong> Built-in water management prevents damage
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Earthquake Resistant:</strong> Foundation design withstands seismic activity
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
        <div className="my-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-center text-gray-500 border-2 border-dashed border-blue-300">
          [Premium Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Practical Visiting Information */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Planning Your Nine Arch Bridge Visit</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl text-green-700">Getting There & Best Times</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800">Transportation Options</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                      <p className="font-medium text-green-700 mb-1">From Ella Town:</p>
                      <p className="text-sm text-green-600">
                        30-minute walk through tea plantations or 10-minute tuk-tuk ride. Walking is recommended for the
                        scenic experience.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-medium text-blue-700 mb-1">By Train:</p>
                      <p className="text-sm text-blue-600">
                        Take the train to Demodara station and walk 15 minutes to the bridge. You can even cross the
                        bridge as a passenger!
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                      <p className="font-medium text-purple-700 mb-1">Private Transport:</p>
                      <p className="text-sm text-purple-600">
                        Hire a car or motorcycle taxi from Ella. Parking available near the bridge entrance.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800">Optimal Visiting Times</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Early Morning (6:00-8:00 AM):</strong> Best light, fewer crowds, misty atmosphere
                    </p>
                    <p>
                      <strong>Golden Hour (5:00-7:00 PM):</strong> Warm lighting, popular train times
                    </p>
                    <p>
                      <strong>Weekdays:</strong> Less crowded than weekends and holidays
                    </p>
                    <p>
                      <strong>Dry Season (December-March):</strong> Clear skies, best visibility
                    </p>
                    <p>
                      <strong>Monsoon Season (May-September):</strong> Lush greenery, dramatic clouds
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800">What to Bring</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Camera Equipment:</strong> DSLR/mirrorless camera, tripod for long exposures
                    </p>
                    <p>
                      <strong>Comfortable Shoes:</strong> Good grip for walking on uneven terrain
                    </p>
                    <p>
                      <strong>Sun Protection:</strong> Hat, sunscreen, sunglasses
                    </p>
                    <p>
                      <strong>Water & Snacks:</strong> Stay hydrated during your visit
                    </p>
                    <p>
                      <strong>Train Schedule:</strong> Check current times locally
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-sky-50">
                <CardTitle className="text-2xl text-blue-700">Safety & Photography Tips</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800">Safety Guidelines</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                      <p className="font-medium text-red-700 mb-1">Railway Safety:</p>
                      <p className="text-sm text-red-600">
                        Never walk on active railway tracks. Stay clear when trains approach. Follow all posted safety
                        signs.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                      <p className="font-medium text-yellow-700 mb-1">Terrain Awareness:</p>
                      <p className="text-sm text-yellow-600">
                        Paths can be slippery when wet. Watch for uneven ground and steep drops near the bridge.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                      <p className="font-medium text-blue-700 mb-1">Weather Conditions:</p>
                      <p className="text-sm text-blue-600">
                        Check weather before visiting. Avoid during heavy rain or storms for safety.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800">Photography Pro Tips</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Composition:</strong> Use the bridge arches as natural frames
                    </p>
                    <p>
                      <strong>Timing:</strong> Arrive 30 minutes before train times
                    </p>
                    <p>
                      <strong>Settings:</strong> Fast shutter for moving trains, slow for motion blur
                    </p>
                    <p>
                      <strong>Angles:</strong> Try both horizontal and vertical compositions
                    </p>
                    <p>
                      <strong>Foreground:</strong> Include tea plants or flowers for depth
                    </p>
                    <p>
                      <strong>Patience:</strong> Wait for the perfect moment when train appears
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800">Nearby Attractions</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Little Adam&apos;s Peak:</strong> 1-hour hike with panoramic views
                    </p>
                    <p>
                      <strong>Ella Rock:</strong> Challenging hike to summit viewpoint
                    </p>
                    <p>
                      <strong>Ravana Falls:</strong> Beautiful waterfall 10 minutes away
                    </p>
                    <p>
                      <strong>Tea Factory Tours:</strong> Learn about Ceylon tea production
                    </p>
                    <p>
                      <strong>Ella Gap:</strong> Stunning valley views from town
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Inspirational Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 border-2 border-green-200 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-green-800 mb-4">
                Capture the Magic of Sri Lanka&apos;s Most Iconic Bridge
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Nine Arch Bridge offers more than just a photo opportunity - it&apos;s a journey into the romance of
                  train travel, the beauty of Sri Lankan engineering, and the breathtaking landscapes of the hill
                  country. Whether you&apos;re a photography enthusiast seeking that perfect shot, a train lover fascinated
                  by vintage railways, or simply a traveler looking for one of Sri Lanka&apos;s most beautiful locations,
                  this iconic bridge will exceed your expectations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every visit to the Nine Arch Bridge is unique. The changing light throughout the day, the different
                  trains that cross, the varying weather conditions, and the seasonal changes in the surrounding
                  vegetation ensure that no two visits are ever the same. This is a place that rewards patience,
                  creativity, and multiple visits to fully appreciate its beauty and capture its magic.
                </p>
                <div className="bg-white/70 p-6 rounded-xl border border-green-200 mt-8">
                  <p className="text-xl font-semibold text-green-800 mb-2">
                    Experience the iconic Nine Arch Bridge in all its glory! 🚂🌉📸✨
                  </p>
                  <p className="text-sm text-green-600">
                    Where engineering meets artistry in the heart of Sri Lanka&apos;s tea country
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
