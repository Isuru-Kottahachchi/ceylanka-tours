import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Mountain, Sunrise } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Adam's Peak Sri Lanka: Complete Climbing Guide 2024 | Sacred Mountain Pilgrimage",
  description:
    "Conquer Adam's Peak (Sri Pada), Sri Lanka's sacred mountain. Complete climbing guide with sunrise tips, best routes, and everything you need for this spiritual journey.",
  keywords:
    "Adams Peak, Sri Pada, sacred mountain Sri Lanka, sunrise climb, pilgrimage, hiking Sri Lanka, sacred footprint, mountain climbing",
  openGraph: {
    title: "Adam's Peak: Complete Climbing Guide 2024",
    description: "Your ultimate guide to climbing Sri Lanka's most sacred mountain",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function AdamsPeakTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Spectacular sunrise view from Adam's Peak summit showing the sacred mountain's shadow and pilgrims watching the dawn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Adam's Peak</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Mountain of Four Faiths</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Ratnapura District
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              2,243m Above Sea Level
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Sunrise className="w-4 h-4 mr-1" />
              Sacred to 4 Religions
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Adam's Peak: Sri Lanka's Most Sacred Mountain
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Rising majestically to 2,243 meters above sea level, Adam's Peak (Sri Pada) is not just Sri Lanka's most
              sacred mountain - it's a spiritual beacon that has drawn pilgrims from four major religions for over 1,000
              years. This conical peak, crowned with a mysterious footprint-shaped depression, offers one of the world's
              most profound spiritual and physical challenges.
            </p>
            <p className="text-lg">
              Whether you're seeking spiritual enlightenment, physical adventure, or simply want to witness one of the
              world's most spectacular sunrises, the climb to Adam's Peak is a transformative experience that combines
              ancient pilgrimage traditions with breathtaking natural beauty.
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
                Essential Adam's Peak Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Height:</strong> 2,243 meters (7,359 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Climbing Time:</strong> 2-4 hours ascent
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Pilgrimage Season:</strong> December to May
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Starting Points:</strong> Nallathanniya, Rathnapura or Kuruwita (There are a few more routes but recommned to use thease main routes for your safety)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Steps to Summit:</strong> ~5,500 steps
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sunrise className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Sunrise Time:</strong> 6:00-6:30 AM
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sacred Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Sacred Footprint: Four Faiths, One Mountain</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sacred footprint depression at Adam's Peak summit with pilgrims paying respects and colorful prayer flags"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The sacred footprint at the summit - revered by four major religions
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At the summit of Adam's Peak lies a mysterious footprint-shaped depression in the rock, measuring 1.8
                meters long. This sacred impression is revered by four major religions, each with their own
                interpretation of its divine origin.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Buddhism</h4>
                  <p className="text-sm text-blue-700">Buddha's footprint left during his third visit to Sri Lanka</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Islam</h4>
                  <p className="text-sm text-green-700">Adam's footprint when he was cast out of paradise</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Hinduism</h4>
                  <p className="text-sm text-purple-700">Lord Shiva's footprint during his cosmic dance</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Christianity</h4>
                  <p className="text-sm text-orange-700">St. Thomas's footprint during his mission to India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Climbing Routes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Climbing Routes to the Summit</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Nallathanniya Route */}
            <Card>
              <CardHeader>
                <CardTitle>1. Nallathanniya Route (Most Popular)</CardTitle>
                <CardDescription>The traditional pilgrimage path with facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Hatton-road.jpeg"
                    alt="Nallathanniya route to Adam's Peak showing illuminated steps at night with pilgrims climbing"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Starting from Nallathanniya (Dalhousie), this is the most popular and well-developed route. The
                      path is illuminated during pilgrimage season and has rest stops, tea stalls, and basic facilities
                      along the way.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Distance: 7km, 2-4 hours climbing time
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-lit path during pilgrimage season
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Tea stalls and rest stops available
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Suitable for all fitness levels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Can get very crowded during peak times
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ratnapura Route */}
            <Card>
              <CardHeader>
                <CardTitle>2. Ratnapura Route (Challenging)</CardTitle>
                <CardDescription>Longer, more difficult path through wilderness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      <b>Buddist people belives Loard buddha came to foot print this mountain during his third visit to Sri Lanka, and used this route to climb the mountain.</b> This route starts from Ratnapura and takes you through dense forest and wilderness areas. It's
                      This route starts from Ratnapura and takes you through dense forest and wilderness areas. It's
                      significantly longer and more challenging but offers a more authentic wilderness experience with
                      fewer crowds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Distance: 15km, 6-8 hours climbing time
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Requires good fitness and experience
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful forest scenery and wildlife
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Much fewer crowds
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Guide recommended for safety
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Sripadaya-rathnapura.jpeg"
                    alt="Ratnapura route through dense forest showing challenging wilderness path to Adam's Peak"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
                {/* Ratnapura Route */}
            <Card>
              <CardHeader>
                <CardTitle>3. Kuruwita Erantha Road (Challenging)</CardTitle>
                <CardDescription>Longer, more difficult path through wilderness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This route starts from Ratnapura and takes you through dense forest and wilderness areas. It's
                      significantly longer and more challenging but offers a more authentic wilderness experience with
                      fewer crowds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Distance: 15km, 6-8 hours climbing time
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Requires good fitness and experience
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful forest scenery and wildlife
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Much fewer crowds
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Guide recommended for safety
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Erantha.jpeg"
                    alt="Ratnapura route through dense forest showing challenging wilderness path to Adam's Peak"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
                {/* Ratnapura Route */}
            <Card>
              <CardHeader>
                <CardTitle>Sandagala thannna (Challenging and not main)</CardTitle>
                <CardDescription>Longer, more difficult path through wilderness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This route starts from Ratnapura and takes you through dense forest and wilderness areas. It's
                      significantly longer and more challenging but offers a more authentic wilderness experience with
                      fewer crowds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Distance: 15km, 6-8 hours climbing time
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Requires good fitness and experience
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful forest scenery and wildlife
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Much fewer crowds
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        Guide recommended for safety
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ratnapura route through dense forest showing challenging wilderness path to Adam's Peak"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Climbing Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Climbing Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Timing Your Climb</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">For Sunrise (Recommended)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Start: 2:00-3:00 AM from Nallathanniya</li>
                    <li>• Reach summit: 5:30-6:00 AM</li>
                    <li>• Sunrise: 6:00-6:30 AM (varies by season)</li>
                    <li>• Descent: 7:00 AM onwards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Alternative Timings</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Afternoon climb: Start 2:00 PM, overnight at summit</li>
                    <li>• Day climb: Start 6:00 AM, return by evening</li>
                    <li>• Full moon nights: Popular for night climbing</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Peak Season:</strong> December to May when weather is clear and paths are lit
                  </p>

                  <p>There can be venaumous creature and elepahts in teh route specillay execpt Hatton Nallathanniya</p>
                  Follow the linsk to get to know about most venomous snakes in Sri lanka
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What to Bring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Essential Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Warm clothing (temperature drops to 5°C)</li>
                    <li>• Good hiking shoes with grip</li>
                    <li>• Headlamp or flashlight with extra batteries</li>
                    <li>• Water (2-3 liters per person)</li>
                    <li>• Energy snacks and light meals</li>
                    <li>• Rain jacket (weather can change quickly)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Optional Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Walking stick for support</li>
                    <li>• Camera for sunrise photos</li>
                    <li>• Small blanket for summit wait</li>
                    <li>• First aid kit</li>
                    <li>• Cash for tea stalls and donations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pilgrimage Season */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pilgrimage Season Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Thousands of pilgrims climbing Adam's Peak during pilgrimage season with illuminated path at night"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                During pilgrimage season (December to May), Adam's Peak transforms into a spiritual highway with
                thousands of pilgrims making the sacred journey. The path is illuminated with lights, tea stalls operate
                throughout the night, and the atmosphere is filled with devotional songs and chanting.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Pilgrimage Season Highlights:</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Path illuminated with electric lights</li>
                  <li>• Tea stalls and food vendors along the route</li>
                  <li>• Free water and refreshments from volunteers</li>
                  <li>• Devotional music and chanting</li>
                  <li>• Thousands of pilgrims from all backgrounds</li>
                  <li>• Special ceremonies at the summit</li>
                </ul>
              </div>
              <p>
                The experience during pilgrimage season is truly unique - you'll be part of an ancient tradition that
                has continued for over 1,000 years, climbing alongside people from all walks of life united in their
                spiritual quest.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Safety & Preparation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Safety Guidelines & Preparation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Essential Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Start early:</strong> Begin climb by 2-3 AM for sunrise viewing
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Check weather:</strong> Avoid climbing during heavy rain or storms
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Stay hydrated:</strong> Drink water regularly but don't overdo it
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Pace yourself:</strong> Take regular breaks, especially if you feel dizzy
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Follow the crowd:</strong> During pilgrimage season, stay with other climbers
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Warnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Altitude sickness:</strong> Be aware of symptoms like headache and nausea
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Steep sections:</strong> Use handrails and watch your footing
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Weather changes:</strong> Temperature can drop suddenly at altitude
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Crowded conditions:</strong> Be patient and courteous during peak times
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Off-season risks:</strong> Paths unlit and facilities closed May-December
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Adam's Peak</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>To Nallathanniya (Dalhousie)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    4-5 hours by car via Avissawella and Hatton. Public buses available but take longer.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Kandy</h4>
                  <p className="text-sm text-muted-foreground">
                    3-4 hours by car via Gampola and Hatton. Regular bus services available.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Nuwara Eliya</h4>
                  <p className="text-sm text-muted-foreground">
                    2-3 hours by car via Hatton. Most convenient base for the climb.
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Stay overnight in Nallathanniya or nearby Hatton before climbing
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accommodation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Nallathanniya</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Basic guesthouses and rest houses</li>
                    <li>• Very close to trailhead</li>
                    <li>• Limited facilities but convenient</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hatton</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Better hotel options available</li>
                    <li>• 30 minutes drive to trailhead</li>
                    <li>• More restaurants and facilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nuwara Eliya</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Luxury hotels and resorts</li>
                    <li>• 2-3 hours drive to trailhead</li>
                    <li>• Can combine with tea country tour</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Sunrise Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Magical Sunrise Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                The sunrise from Adam's Peak is considered one of the world's most spectacular. As the first rays of
                sunlight hit the summit, the mountain casts a perfect triangular shadow across the landscape - a
                phenomenon that has amazed visitors for centuries.
              </p>
              <p>
                During clear weather, you can see for miles in every direction, with views stretching to the coast on
                one side and the central highlands on the other. The moment when the sun breaks the horizon and
                illuminates the sacred footprint is truly magical.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Best Photography Tips:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Arrive 30 minutes before sunrise</li>
                  <li>• Bring a tripod for stable shots</li>
                  <li>• Capture the mountain's shadow</li>
                  <li>• Take photos of fellow pilgrims</li>
                  <li>• Don't forget the sacred footprint</li>
                </ul>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Spectacular sunrise from Adam's Peak showing the triangular shadow cast by the mountain across the landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-orange-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Your Sacred Journey to Adam's Peak</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Climbing Adam's Peak is more than just a physical challenge - it's a spiritual journey that connects you
                with centuries of pilgrims who have made this sacred ascent. Whether you're seeking spiritual
                enlightenment, personal achievement, or simply want to witness one of nature's most spectacular
                sunrises, this climb will leave you transformed.
              </p>
              <p className="text-muted-foreground mb-4">
                Remember that this is a sacred site for millions of people. Approach your climb with respect, patience,
                and an open heart. The physical challenge is significant, but the spiritual and emotional rewards are
                immeasurable. Take time to appreciate not just the destination, but the incredible journey and the
                fellow pilgrims who share this ancient path with you.
              </p>
              <p className="text-muted-foreground font-medium">
                May your journey to the sacred summit bring you peace, wonder, and unforgettable memories! 🏔️🌅🙏
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
