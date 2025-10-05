"use client"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Waves, Palmtree, X, AlertTriangle, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

// Beach Safety Popup Modal Component
function BeachSafetyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="relative p-6">
                    {/* Close button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 cursor-pointer"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>

                    {/* Modal content */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                <Waves className="h-8 w-8 text-blue-600" />
                            </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-foreground">Stay Safe at Pasikuda Beach!</h2>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Before you enjoy Pasikuda&apos;s crystal-clear shallow waters, learn about important beach safety, 
                            including seasonal conditions, sea creatures, and emergency procedures.
                        </p>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="h-5 w-5 text-orange-600" />
                                <h3 className="font-semibold text-orange-800 dark:text-orange-400">Important Safety Topics:</h3>
                            </div>
                            <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 text-left">
                                <li>• Northeast monsoon safety (Oct-Feb)</li>
                                <li>• Identifying dangerous sea creatures</li>
                                <li>• Understanding coral reef areas</li>
                                <li>• Emergency procedures and contacts</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <Link href="/blog/things-you-aware-in-the-beach">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transition-colors flex items-center justify-center">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Read Complete Beach Safety Guide
                                </Button>
                            </Link>
                            
                            <Button 
                                variant="outline" 
                                className="w-full cursor-pointer"
                                onClick={onClose}
                            >
                                Continue to Pasikuda Page
                            </Button>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            Your safety is our priority. Learn these essential tips for eastern coast beaches!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
      <BeachSafetyModal isOpen={showSafetyModal} onClose={handleCloseModal} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Pasikuda Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
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
                </div>
                <div className="space-y-3">
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
              </div>
            </CardContent>
          </Card>
        </section>

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
