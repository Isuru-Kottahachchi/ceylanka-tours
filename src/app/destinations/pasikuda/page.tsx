"use client"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Palmtree } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"
import InsuranceBanner from "@/components/insurance-banner"
import { BeachSafetyModal } from "@/components/beach-safety-modal"


export default function PasikudaTravelGuide() {
  // Beach Safety Modal State
  const [showSafetyModal, setShowSafetyModal] = useState(false)

  // Show modal after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSafetyModal(true)
    }, 1500) // Show after 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleCloseModal = () => {
    setShowSafetyModal(false)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Beach Safety Modal */}
      <BeachSafetyModal isOpen={showSafetyModal} onClose={handleCloseModal} beachName={"Pasikuda"} />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/PasikudaCover.jpeg"
          alt="Stunning aerial view of Pasikuda beach showing pristine white sand, crystal clear shallow waters, and coral reefs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pasikuda</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lankas Pristine Eastern Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Shallow Coral Bay
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Palmtree className="w-4 h-4 mr-1" />
              Luxury Beach Resorts
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Pasikuda: Where Paradise Meets Perfection</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover Pasikuda, Sri Lankas most pristine beach destination on the stunning eastern coast. This
              crescent-shaped bay boasts some of the islands clearest waters, finest white sand, and most spectacular
              coral reefs, all protected within a shallow lagoon that extends nearly 2 kilometers into the ocean.
            </p>
            <p className="text-lg">
              From luxury beachfront resorts to world-class water sports, from vibrant coral gardens perfect for
              snorkeling to serene stretches of sand ideal for relaxation, Pasikuda offers the ultimate tropical beach
              experience. The calm, shallow waters make it perfect for families, while the pristine coral reefs attract
              diving enthusiasts from around the world.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Pasikuda Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Pasikuda Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Shallow Bay:</strong> Extends 2km into ocean
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palmtree className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Beach Length:</strong> 2 kilometers of pristine sand
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Best Season:</strong> May to September
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 300km (6-7 hours)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Famous for:</strong> Crystal clear shallow waters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 3-5 days minimum
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">1–2 full days to explore the sacred sites, ancient tanks, and local culture at a relaxed pace.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">May to September (dry season) for pleasant weather and clear skies. Early mornings and late afternoons are best for sightseeing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <InsuranceBanner/>
          </section>
          {/* How to Get to Pasikuda */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Pasikuda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 287km (178 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                      <li>• <strong>Cost:</strong> Contact  Ceylanka tours for more details</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Pasikuda. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 70 764 6765</span>
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
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Valaichchenai
                        then take a bus to Pasikuda</li>
                      <li>• <strong>Duration:</strong> 6-6.5 hours</li>
                      <li>• <strong>Cost:</strong> Depend on class</li>
                      <li>• <strong>Frequency:</strong> A few trains daily</li>
                    </ul>

                    {/* <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo Fort → Pasikuda</li>
                      <li>• <strong>Duration:</strong> 5.5-6 hours</li>
                      <li>• <strong>Cost:</strong> $2-8 USD (depending on class)</li>
                      <li>• <strong>Scenic journey:</strong> Through countryside</li>
                    </ul> */}
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early morning to avoid traffic and heat</li>
                    <li>• Carry water and snacks for the journey</li>
                    <li>• Book accommodations in advance during peak season</li>
                    <li>• Consider staying overnight to explore all sites properly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Unique Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Makes Pasikuda Special</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/PasikudainEve.jpeg"
                alt="Crystal clear shallow waters of Pasikuda bay showing coral formations and tropical fish underwater"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The unique shallow bay extends nearly 2 kilometers, creating perfect conditions for swimming and
                snorkeling
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pasikudas most remarkable feature is its unique geography - a shallow coral bay that extends nearly 2
                kilometers into the Indian Ocean while maintaining a depth of just 1-2 meters. This creates an enormous
                natural swimming pool with crystal-clear waters that remain calm even when the ocean beyond is rough.
              </p>
              <p>
                The bay is protected by a natural coral reef barrier that not only keeps the waters calm but also
                creates a vibrant underwater ecosystem. The coral gardens are home to hundreds of species of tropical
                fish, making snorkeling here an unforgettable experience even for beginners.
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Unique Features:</h4>
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• Shallow waters extending 2km from shore</li>
                  <li>• Natural coral reef protection</li>
                  <li>• Consistently calm conditions</li>
                  <li>• Exceptional water clarity</li>
                  <li>• Perfect for all swimming abilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Beach Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Beach Activities & Water Sports</h2>

          <div className="space-y-8">
            {/* Snorkeling & Diving */}
            <Card>
              <CardHeader>
                <CardTitle>1. Snorkeling & Diving Paradise</CardTitle>
                <CardDescription>Explore vibrant coral reefs and marine life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Snorkelers exploring colorful coral reefs in Pasikuda with tropical fish and clear blue water"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Pasikudas coral reefs are among Sri Lankas most accessible and pristine. The shallow, clear
                      waters make it perfect for beginners, while the diversity of marine life satisfies experienced
                      snorkelers and divers. The protected bay ensures excellent visibility year-round.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Pristine coral gardens with 100+ fish species
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for beginners and families
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Equipment rental available at resorts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Guided snorkeling tours offered
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Water Sports */}
            <Card>
              <CardHeader>
                <CardTitle>2. Exciting Water Sports</CardTitle>
                <CardDescription>Adventure activities for all skill levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The calm, shallow waters of Pasikuda create ideal conditions for a wide range of water sports.
                      From gentle kayaking through the coral gardens to thrilling jet skiing in the deeper areas, theres
                      something for every adventure level and age group.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Kayaking through coral gardens
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stand-up paddleboarding (SUP)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Jet skiing and banana boat rides
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Windsurfing and catamaran sailing
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Various water sports activities in Pasikuda including kayaking, jet skiing, and paddleboarding"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Beach Relaxation */}
            <Card>
              <CardHeader>
                <CardTitle>3. Pure Beach Bliss</CardTitle>
                <CardDescription>Pristine sand and perfect relaxation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Pasikudabeach.jpeg"
                    alt="Pristine Pasikuda beach with white sand, palm trees, and luxury beach loungers under umbrellas"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Beyond the water activities, Pasikuda offers some of Sri Lankas finest beach relaxation
                      experiences. The soft white sand, gentle sea breeze, and stunning sunrises create the perfect
                      setting for ultimate tropical relaxation.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        2km of pristine white sand beach
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunrise views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Luxury beach loungers and umbrellas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beachside massage and spa services
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Luxury Accommodations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Luxury Beach Resorts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5-Star Beach Resorts</CardTitle>
                <CardDescription>Ultimate luxury beachfront experience</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Luxury beachfront resort in Pasikuda with infinity pool, elegant architecture, and ocean views"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Direct beachfront locations</li>
                  <li>• Infinity pools and spa facilities</li>
                  <li>• Multiple dining options</li>
                  <li>• Water sports centers</li>
                  <li>• Premium service and amenities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Boutique Beach Hotels</CardTitle>
                <CardDescription>Intimate luxury with personal service</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Boutique beach hotel in Pasikuda with elegant rooms, private beach access, and personalized service"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Smaller, more intimate properties</li>
                  <li>• Personalized service and attention</li>
                  <li>• Unique design and architecture</li>
                  <li>• Private beach areas</li>
                  <li>• Customized experiences</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Beach Villas</CardTitle>
                <CardDescription>Private luxury accommodations</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Private beach villa in Pasikuda with direct beach access, private pool, and luxury amenities"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Private beachfront villas</li>
                  <li>• Personal staff and chef services</li>
                  <li>• Private pools and gardens</li>
                  <li>• Complete privacy and exclusivity</li>
                  <li>• Perfect for families or groups</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Pasikuda</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Perfect weather conditions</li>
                  <li>• Calm seas and clear skies</li>
                  <li>• Ideal for all water activities</li>
                  <li>• Best visibility for snorkeling</li>
                  <li>• Higher accommodation rates</li>
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
                  <li>• Good weather with occasional showers</li>
                  <li>• Fewer crowds</li>
                  <li>• Better accommodation deals</li>
                  <li>• Still excellent for beach activities</li>
                  <li>• Moderate temperatures</li>
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
                  <li>• Many water activities suspended</li>
                  <li>• Lowest accommodation prices</li>
                  <li>• Limited beach enjoyment</li>
                  <li>• Some resorts may close</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Pasikuda</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Transportation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Colombo Airport</h4>
                  <p className="text-sm text-muted-foreground">
                    300km (6-7 hours) by road. Private transfers, taxis, or rental cars available.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Via Batticaloa</h4>
                  <p className="text-sm text-muted-foreground">
                    35km (45 minutes) from Batticaloa town. Regular bus services and three-wheelers available.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Train + Road</h4>
                  <p className="text-sm text-muted-foreground">
                    Train to Batticaloa, then road transport to Pasikuda. Scenic but longer journey.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Travel Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Best Route</h4>
                  <p className="text-sm text-muted-foreground">
                    Colombo → Kandy → Mahiyanganaya → Batticaloa → Pasikuda for scenic mountain and coastal views.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Travel Time</h4>
                  <p className="text-sm text-muted-foreground">
                    Allow full day for travel from Colombo. Consider overnight stop in Cultural Triangle.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Resort Transfers</h4>
                  <p className="text-sm text-muted-foreground">
                    Most luxury resorts offer airport transfer services. Book in advance for convenience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
            <CardHeader>
              <CardTitle className="text-cyan-800">Your Pasikuda Paradise Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Pasikuda represents the pinnacle of Sri Lankan beach experiences, combining natural beauty with luxury
                amenities in perfect harmony. The unique shallow bay creates conditions found nowhere else on the
                island, making it a truly special destination for beach lovers and water sports enthusiasts alike.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to explore both the underwater coral gardens and the pristine beaches above. Whether youre
                seeking adventure in the crystal-clear waters or pure relaxation on the white sand, Pasikuda offers an
                experience that will exceed your expectations and create memories to last a lifetime.
              </p>
              <p className="text-muted-foreground font-medium">
                Enjoy your slice of paradise on Sri Lankas eastern coast! 🏖️🐠🌊
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
