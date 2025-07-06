import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Mountain, Train } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Ella Nine Arch Bridge Sri Lanka: Complete Guide 2025 | Iconic Railway Bridge in Tea Country",
  description:
    "Discover Ellas famous Nine Arch Bridge, Sri Lankas most photographed railway bridge. Complete guide with train times, best viewpoints, and everything you need to know.",
  keywords:
    "Ella Nine Arch Bridge, Sri Lanka railway, tea country, Ella travel guide, train bridge photography, hill country",
  openGraph: {
    title: "Ella Nine Arch Bridge: Complete Travel Guide 2025",
    description: "Your ultimate guide to visiting Sri Lankas most famous railway bridge",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function EllaNineArchTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Spectacular view of Nine Arch Bridge in Ella with train crossing through lush green tea plantations and misty mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nine Arch Bridge</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ellas Iconic Railway Marvel in the Clouds</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Ella, Uva Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Train className="w-4 h-4 mr-1" />
              Active Railway Bridge
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,041m Above Sea Level
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Nine Arch Bridge: Engineering Marvel in Paradise
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Rising majestically from the misty tea plantations of Ella, the Nine Arch Bridge is Sri Lankas most
              photographed railway bridge and an absolute must-see destination. This architectural masterpiece, built
              entirely without steel during World War I, stands as a testament to ingenious engineering and natural
              beauty.
            </p>
            <p className="text-lg">
              Whether youre chasing the perfect Instagram shot, seeking adventure in Sri Lankas hill country, or
              simply want to witness one of the worlds most scenic train journeys, the Nine Arch Bridge offers an
              unforgettable experience where colonial engineering meets tropical paradise.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Nine Arch Bridge Essential Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built:</strong> 1921 (During WWI)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Height:</strong> 24 meters (80 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Length:</strong> 91 meters (300 feet)
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Between Ella & Demodara
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Material:</strong> Stone, brick & cement only
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Visit Time:</strong> Early morning or late afternoon
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Engineering Marvel */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Story Behind the Bridge</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Close-up architectural view of Nine Arch Bridge showing detailed stonework and engineering without steel"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Masterful stonework and engineering - built entirely without steel
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Nine Arch Bridge was born out of necessity and ingenuity during World War I. When steel became
                scarce due to the war effort, British engineers had to find an alternative way to span the deep gorge
                between Ella and Demodara stations on the Badulla-Colombo railway line.
              </p>
              <p>
                Using only stone, brick, and cement, they created this architectural masterpiece that has withstood over
                100 years of tropical weather and daily train crossings. The bridges nine graceful arches not only
                provide structural strength but also create the perfect frame for the surrounding tea plantations and
                misty mountains.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Engineering Facts:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• No steel used in construction</li>
                  <li>• Built by local craftsmen and British engineers</li>
                  <li>• Designed to withstand earthquakes</li>
                  <li>• Still carries daily passenger trains</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Train Schedule & Best Times */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Train Schedule & Best Photography Times</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Daily Train Schedule</CardTitle>
                <CardDescription>Approximate times - always verify locally</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Morning Trains</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 6:20 AM - Badulla to Colombo</li>
                      <li>• 9:45 AM - Ella to Badulla</li>
                      <li>• 10:55 AM - Badulla to Colombo</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Afternoon/Evening Trains</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 2:30 PM - Ella to Badulla</li>
                      <li>• 4:20 PM - Badulla to Colombo</li>
                      <li>• 6:10 PM - Ella to Badulla</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Train times can vary by 15-30 minutes. Arrive early and be patient!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Best Photography Times</CardTitle>
                <CardDescription>Golden hours for perfect shots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Early Morning (6:00-8:00 AM)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Soft golden light</li>
                      <li>• Misty atmosphere</li>
                      <li>• Fewer crowds</li>
                      <li>• Cool temperature</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Late Afternoon (4:00-6:00 PM)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Warm golden light</li>
                      <li>• Clear mountain views</li>
                      <li>• Perfect for sunset shots</li>
                      <li>• Good train frequency</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Viewpoints */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Viewpoints & Photo Spots</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Classic Bottom View</CardTitle>
                <CardDescription>The most famous and Instagram-worthy angle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Classic bottom view of Nine Arch Bridge with train crossing and tourists watching from below"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This is the classic shot everyone comes for! From the bottom of the gorge, you get the full
                      majesty of all nine arches with the train crossing above. The perspective makes the bridge look
                      even more impressive against the jungle backdrop.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        15-minute walk from Ella town
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Best for wide-angle photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Can get crowded during peak times
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Side Angle View</CardTitle>
                <CardDescription>Unique perspective showing bridge length</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Walk along the railway track (carefully!) to get side-angle shots that show the bridges full
                      length and the dramatic drop into the gorge. This viewpoint offers a different perspective that
                      many visitors miss.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Less crowded than bottom view
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great for showing bridge architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        Be very careful of trains!
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Side angle view of Nine Arch Bridge showing full length and architectural details"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Aerial Drone View</CardTitle>
                <CardDescription>Birds eye perspective (with proper permits)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Aerial drone view of Nine Arch Bridge showing surrounding tea plantations and mountain landscape"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      For those with drone photography skills and proper permits, aerial shots reveal the bridges
                      perfect integration with the surrounding tea plantations and mountain landscape.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Important:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Drone permits required in Sri Lanka</li>
                        <li>• Check with Civil Aviation Authority</li>
                        <li>• Respect no-fly zones</li>
                        <li>• Consider hiring local drone operators</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Safety & Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Safety Guidelines & Essential Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - For the Perfect Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Arrive early:</strong> Beat the crowds and get the best light
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Wear good shoes:</strong> The path can be slippery and uneven
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring water:</strong> It can get hot during the day
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Check train times:</strong> Ask locals for current schedules
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect the environment:</strong> Dont litter in this pristine area
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DONTs - Critical Safety Warnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>NEVER walk on the bridge:</strong> Active railway with fast trains
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont make unnesssary sound:</strong> bees and hornests
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont ignore train horns:</strong> Move to safety immediately
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont climb on the bridge:</strong> Dangerous and illegal
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont venture too close:</strong> Maintain safe distance from tracks
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dont visit during heavy rain:</strong> Paths become very slippery
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Get to Nine Arch Bridge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>From Ella Town</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Walking (Recommended)</h4>
                  <p className="text-sm text-muted-foreground">
                    15-20 minute walk through tea plantations. Follow signs or ask locals for directions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tuk-tuk</h4>
                  <p className="text-sm text-muted-foreground">
                    5-minute ride, around 200-300 LKR. Driver can wait for you.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Train from Ella Station</h4>
                  <p className="text-sm text-muted-foreground">
                    Take train to Demodara and walk back (adventurous option!).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Other Cities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Kandy</h4>
                  <p className="text-sm text-muted-foreground">
                    Take the scenic train journey (6-7 hours) - one of the worlds most beautiful train rides!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    Train (8-9 hours) or car (5-6 hours). Train is more scenic but longer.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Nuwara Eliya</h4>
                  <p className="text-sm text-muted-foreground">
                    2-3 hours by car through beautiful hill country roads.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Else to Do in Ella */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Other Attractions in Ella</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Little Adams Peak</CardTitle>
                <CardDescription>Easy hike with stunning views</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Littleadamspeak.jpg"
                  alt="Panoramic view from Little Adams Peak showing Ella Gap and surrounding mountains"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  1-hour easy hike to a viewpoint offering 360-degree views of Ella Gap and surrounding tea country.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ella Rock</CardTitle>
                <CardDescription>Challenging hike for adventurers</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Hikers on Ella Rock summit with panoramic mountain views and tea plantations below"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  3-4 hour challenging hike to Ellas highest point. Spectacular views but requires good fitness level.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ravana Falls</CardTitle>
                <CardDescription>Scenic waterfall nearby</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Ravana Falls cascading down rocky cliff with lush vegetation and visitors enjoying the view"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground">
                  Beautiful waterfall just 6km from Ella. Perfect for a refreshing dip and photos. Easily accessible by
                  tuk-tuk.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Nine Arch Bridge Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Nine Arch Bridge is more than just a photo opportunity – its a testament to human ingenuity and the
                perfect harmony between engineering and nature. As you stand beneath those magnificent arches, listening
                for the distant whistle of an approaching train, youre experiencing one of Sri Lankas most magical
                moments.
              </p>
              <p className="text-muted-foreground mb-4">
                Remember to be patient with train timings, respect the active railway, and take time to appreciate not
                just the bridge itself but the stunning tea country landscape that surrounds it. The journey to get here
                is just as beautiful as the destination.
              </p>
              <p className="text-muted-foreground font-medium">
                Safe travels and enjoy this incredible piece of Sri Lankan heritage! 🚂🌿
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
