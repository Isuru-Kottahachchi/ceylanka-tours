
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Users, Mountain, Sunrise } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function PidurangalaRockGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Pidurangala.jpeg"
          alt="Stunning sunrise view of Sigiriya Rock from Pidurangala Rock summit with golden sky"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pidurangala Rock</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">The Perfect Viewpoint for Sigiriya&apos;s Majesty</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Matale District, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Sunrise className="w-4 h-4 mr-1" />
              Best Sunrise Views
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              Easier Climb than Sigiriya
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Pidurangala: Sigiriya&apos;s Best Friend
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Want the perfect photo of Sigiriya Rock? Pidurangala Rock is your answer! Located just 1km from the famous
              Sigiriya, this ancient Buddhist monastery site offers the most spectacular views of the Lion Rock,
              especially during sunrise and sunset.
            </p>
            <p className="text-lg">
              While Sigiriya gets all the fame, Pidurangala offers a more adventurous and rewarding experience. The
              climb is shorter, less crowded, and ends with arguably the best views in all of Sri Lanka!
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts About Pidurangala Rock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Height:</strong> nearly 200 meters (656 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Climb Time:</strong> 45-60 minutes up
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Difficulty:</strong> Moderate
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Sigiriya:</strong> 1km
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sunrise className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> Sunrise (5:30-6:30 AM)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Entry Fee:</strong> 500 LKR (~$1.50)
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Ancient Buddhist Heritage</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Ancient+Buddhist+Ruins"
                alt="Ancient Buddhist monastery ruins at Pidurangala Rock with stone structures and meditation areas"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Ancient Buddhist monastery ruins at the base of Pidurangala Rock
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pidurangala Rock has been a sacred Buddhist site for over 2,000 years. When King Kashyapa built his
                palace on Sigiriya, he relocated the monks who were living there to Pidurangala, making it an important
                monastery complex.
              </p>
              <p>
                The rock served as a meditation retreat for Buddhist monks, and you can still see the remains of ancient
                structures, caves, and a massive reclining Buddha statue carved into the rock face.
              </p>
              <p>
                Today, it&apos;s not just a historical site but also the best vantage point to appreciate the
                engineering marvel that is Sigiriya Rock Fortress.
              </p>
            </div>
          </div>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What You&apos;ll Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. The Ancient Monastery Ruins</CardTitle>
                <CardDescription>Buddhist heritage at the base</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Monastery+Ruins"
                    alt="Ancient Buddhist monastery ruins with stone foundations and meditation areas"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Your journey begins at the ancient monastery complex at the base of the rock. Here you&apos;ll
                      find:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ruins of ancient meditation halls and living quarters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stone inscriptions in ancient Brahmi script
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful atmosphere perfect for reflection
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. The Reclining Buddha</CardTitle>
                <CardDescription>Massive ancient statue carved in rock</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Halfway up the climb, you&apos;ll encounter a magnificent reclining Buddha statue carved directly
                      into the rock face. This ancient sculpture is:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 15 meters long and beautifully preserved
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />A perfect rest stop during
                        your climb
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        An important pilgrimage site for Buddhists
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Pidurangala-Reclining-Buddha.jpg"
                    alt="Large reclining Buddha statue carved into Pidurangala Rock face"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. The Summit Views</CardTitle>
                <CardDescription>Breathtaking 360-degree panoramas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Pidurangala-Summit-View.jpg"
                    alt="Spectacular sunrise view of Sigiriya Rock from Pidurangala summit with golden light"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The summit offers the most spectacular views in Sri Lanka&apos;s Cultural Triangle:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect frontal view of Sigiriya Rock Fortress
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        360-degree views of the surrounding jungle
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise and sunset photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Views of ancient irrigation systems and villages
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Don&apos;ts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - For the Best Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Start very early:</strong> Begin at 5:00 AM for sunrise views
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring a headlamp:</strong> Essential for pre-dawn climbing
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Wear good shoes:</strong> The final scramble requires grip
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect the Buddha statue:</strong> Remove shoes and hats
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring water and snacks:</strong> Stay hydrated and energized
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON&apos;Ts - Avoid These Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t climb in flip-flops:</strong> The rocks can be slippery
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t go without a guide:</strong> Easy to get lost in the dark
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t climb alone:</strong> Always go with others for safety
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t forget insect repellent:</strong> Mosquitoes are active at dawn
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Photography Tips for Epic Shots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Photo Opportunities:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sunrise over Sigiriya (golden hour magic)</li>
                    <li>• Silhouette shots with Sigiriya backdrop</li>
                    <li>• 360-degree panoramic views</li>
                    <li>• The reclining Buddha statue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Camera Settings Tips:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use tripod for sunrise long exposures</li>
                    <li>• Shoot in RAW for better editing flexibility</li>
                    <li>• Bring extra batteries (cold morning air drains them)</li>
                    <li>• Use graduated ND filters for balanced exposure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
            <CardHeader>
              <CardTitle className="text-orange-800 dark:text-orange-400">Your Pidurangala Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-neutral-800 dark:text-neutral-200">
                Pidurangala Rock offers one of the most rewarding experiences in Sri Lanka. The combination of ancient
                Buddhist heritage, moderate adventure, and absolutely stunning views makes it a must-visit destination.
              </p>
              <p className="text-muted-foreground font-medium text-neutral-800 dark:text-neutral-200">
                Wake up early, embrace the adventure, and prepare to witness one of the most beautiful sunrises of your
                life! 🌅🏔️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
