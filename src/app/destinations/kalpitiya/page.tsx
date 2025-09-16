import { Metadata } from "next"
import Image from "next/image"
import { Calendar, Clock, MapPin, Star, Users, Mountain, AlertTriangle, Heart, Waves, Fish, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Kalpitiya Peninsula: Complete Beach & Water Sports Guide 2025 | Dolphin Watching Paradise",
  description:
    "Discover Kalpitiya Peninsula - Sri Lanka's premier beach destination for dolphin watching, kitesurfing, snorkeling, and pristine lagoons. Complete travel guide with best times to visit, water sports, and accommodation tips.",
  keywords: "Kalpitiya, dolphin watching, kitesurfing, snorkeling, lagoon, beach, water sports, Sri Lanka, whale watching, windsurfing, bar reef",
  authors: [{ name: "Beach & Water Sports Guide" }],
  openGraph: {
    title: "Kalpitiya Peninsula: Complete Beach & Water Sports Guide 2025",
    description: "Experience Sri Lanka's hidden beach paradise - pristine lagoons, dolphins, and world-class water sports",
    images: ["/placeholder.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalpitiya Peninsula: Complete Beach & Water Sports Guide 2025",
    description: "Discover Kalpitiya - dolphin watching, kitesurfing paradise, and pristine beaches in Sri Lanka",
  },
}

export default function KalpitiyaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.jpg"
          alt="Kalpitiya Peninsula showing pristine lagoon waters with dolphins jumping and kitesurfers in the background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kalpitiya Peninsula
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Sri Lanka&apos;s Hidden Beach Paradise - Dolphins, Lagoons & Water Sports
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Fish className="w-4 h-4 mr-1" />
              Dolphin Watching
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Wind className="w-4 h-4 mr-1" />
              Kitesurfing Paradise
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              Pristine Beaches
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kalpitiya Peninsula: Sri Lanka&apos;s Best Kept Beach Secret</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Get ready to discover one of Sri Lanka&apos;s most spectacular yet unspoiled beach destinations! Kalpitiya Peninsula 
              is a magical 14-island cluster located on the northwest coast, where crystal-clear lagoons meet the Indian Ocean 
              in a breathtaking display of natural beauty. This hidden paradise offers some of the best dolphin watching 
              experiences in the world, world-class water sports, and miles of pristine, uncrowded beaches.
            </p>
            <p className="text-lg mb-4">
              What makes Kalpitiya truly special is its unique geography - a narrow peninsula that creates calm lagoon waters 
              on one side perfect for beginners learning water sports, and exciting ocean waves on the other side for 
              experienced adventurers. The area is famous for having one of the largest pods of dolphins in the world, 
              with spinner dolphins, bottle-nose dolphins, and occasionally even whales visiting these waters year-round.
            </p>
            <p className="text-lg mb-4">
              Beyond marine life, Kalpitiya has become a world-renowned destination for kitesurfing and windsurfing, 
              thanks to consistent wind conditions from May to September. The shallow, flat lagoon waters provide perfect 
              conditions for beginners, while the ocean side offers challenging waves for advanced riders. The area also 
              boasts excellent snorkeling spots, traditional fishing villages, and some of the most stunning sunsets you&apos;ll ever see.
            </p>
            <p className="text-lg">
              Whether you&apos;re seeking adventure on the water, peaceful relaxation on pristine beaches, wildlife encounters 
              with dolphins and birds, or simply want to escape the crowds and experience authentic Sri Lankan coastal life, 
              Kalpitiya Peninsula offers an unforgettable tropical paradise experience that few visitors have discovered yet!
            </p>
          </div>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-400 dark:border-blue-600 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Water Safety Guidelines</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  <strong>Swimming:</strong> Always swim in designated areas and be aware of strong currents. The lagoon side 
                  is generally calmer and safer for swimming than the ocean side.
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Water Sports:</strong> Use proper safety equipment and consider taking lessons from certified 
                  instructors, especially for kitesurfing and windsurfing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Kalpitiya Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Northwestern coast, Puttalam District
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Geography:</strong> 14-island peninsula with lagoons
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fish className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Marine Life:</strong> Dolphins, whales, tropical fish
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Wind Season:</strong> May to September (kitesurfing)
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Time:</strong> December to April (calm weather)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Crowd Level:</strong> Low to moderate (hidden gem)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-indigo-500" />
                    <span>
                      <strong>Activities:</strong> 15+ water sports & wildlife tours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-500" />
                    <span>
                      <strong>Stay Duration:</strong> 3-5 days for full experience
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Get In */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <MapPin className="w-5 h-5" />
                How to Get to Kalpitiya Peninsula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Transportation Options</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm">From Colombo</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> 165km (103 miles)</li>
                        <li>• <strong>Duration:</strong> 3-4 hours by car</li>
                        <li>• <strong>Route:</strong> A3 highway via Chilaw and Puttalam</li>
                        <li>• <strong>Cost:</strong> $50-80 USD private transport</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">From Negombo Airport</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> 120km (75 miles)</li>
                        <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                        <li>• <strong>Best option:</strong> Direct route from airport</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Public Transport</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Bus:</strong> Colombo to Puttalam, then local bus</li>
                        <li>• <strong>Train:</strong> Colombo to Chilaw, then bus/taxi</li>
                        <li>• <strong>Duration:</strong> 4-5 hours total journey</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Recommended Services</h4>
                  <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> offers specialized beach and water sports packages with experienced drivers who know the best routes and can arrange water sports activities.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span><strong>Contact:</strong> +94 77 123 4567</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🏄‍♂️</span>
                        <span><strong>Beach Packages:</strong> Transport + water sports + dolphin tours</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div>
                      <h5 className="font-medium text-sm">Getting Around Kalpitiya</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Tuk-tuk:</strong> Most convenient for short distances</li>
                        <li>• <strong>Bicycle:</strong> Popular for exploring the peninsula</li>
                        <li>• <strong>Boat:</strong> For island hopping and dolphin tours</li>
                        <li>• <strong>Walking:</strong> Main beach areas are walkable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Pro Tip:</strong> Visit during the dry season (December-April) for the best weather and dolphin watching conditions. Book accommodations in advance during peak season (December-January).
                </p>
              </div>
              <div className="mt-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h5 className="font-medium text-blue-800 dark:text-blue-200">Entry Fee</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-300">FREE for beaches</p>
                    <p className="text-xs text-muted-foreground">Activity fees separate</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <h5 className="font-medium text-green-800 dark:text-green-200">Best Weather</h5>
                    <p className="text-sm text-green-600 dark:text-green-300">Dec-Apr: Calm & sunny</p>
                    <p className="text-xs text-muted-foreground">May-Sep: Windy (kitesurfing)</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <h5 className="font-medium text-purple-800 dark:text-purple-200">Accommodation</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-300">Beach resorts & guesthouses</p>
                    <p className="text-xs text-muted-foreground">$20-200 per night</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Top Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Amazing Activities in Kalpitiya</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fish className="w-5 h-5 text-blue-500" />
                  1. Dolphin & Whale Watching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kalpitiya is home to one of the largest pods of dolphins in the world! You can see hundreds of 
                      spinner dolphins, bottle-nose dolphins, and sometimes even pilot whales and sperm whales.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">What You&apos;ll See:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Spinner dolphins (most common - acrobatic jumpers)</li>
                        <li>• Bottle-nose dolphins (larger, friendly species)</li>
                        <li>• Sperm whales (occasionally, especially March-April)</li>
                        <li>• Flying fish and sea turtles</li>
                        <li>• Various seabirds and marine life</li>
                      </ul>
                      <div className="mt-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                        <p className="text-sm text-green-800 dark:text-green-300">
                          <strong>Best Time:</strong> Early morning (6-9 AM) tours have 90%+ success rate!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.jpg"
                      alt="Pod of spinner dolphins jumping out of the water near Kalpitiya with tourists watching from a boat"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Spinner dolphins performing acrobatic jumps - a daily spectacle in Kalpitiya waters
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="w-5 h-5 text-cyan-500" />
                  2. Kitesurfing & Windsurfing Paradise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kalpitiya is considered one of Asia&apos;s top kitesurfing destinations! The unique geography creates 
                      perfect conditions with consistent winds and both calm lagoon waters for beginners and challenging 
                      ocean waves for experts.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Beginner-Friendly:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Shallow, flat lagoon waters (waist-deep)</li>
                          <li>• Steady 15-25 knot winds May-September</li>
                          <li>• Professional kite schools with certified instructors</li>
                          <li>• Equipment rental available</li>
                          <li>• Safe launching and landing areas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Advanced Options:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Ocean side waves for freestyle and jumping</li>
                          <li>• Downwinders to nearby islands</li>
                          <li>• Night kitesurfing options</li>
                          <li>• Hydrofoil and wing foiling</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-4">
                      <div className="p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                        <h5 className="font-semibold text-cyan-800 dark:text-cyan-200">Wind Season</h5>
                        <p className="text-sm text-cyan-700 dark:text-cyan-300">May to September: 15-25 knots</p>
                        <p className="text-xs text-muted-foreground">Perfect for all skill levels</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200">Lesson Costs</h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">$50-80 per day (group)</p>
                        <p className="text-xs text-muted-foreground">$100-150 private instruction</p>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                        <h5 className="font-semibold text-purple-800 dark:text-purple-200">Equipment Rental</h5>
                        <p className="text-sm text-purple-700 dark:text-purple-300">$30-50 per day</p>
                        <p className="text-xs text-muted-foreground">Kites, boards, harnesses included</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-teal-500" />
                  3. Snorkeling & Diving Adventures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Explore the underwater world around Kalpitiya&apos;s islands and coral reefs. The Bar Reef Marine 
                      Sanctuary, just offshore, is one of Sri Lanka&apos;s largest coral reef systems with incredible 
                      marine biodiversity.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Marine Life You&apos;ll See:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Colorful tropical fish (parrotfish, angelfish, butterflyfish)</li>
                        <li>• Sea turtles (hawksbill and green turtles)</li>
                        <li>• Reef sharks (harmless blacktip and whitetip)</li>
                        <li>• Moray eels and octopus</li>
                        <li>• Vibrant hard and soft corals</li>
                        <li>• Rays and eagle rays</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-3">
                      <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                        <h5 className="font-semibold text-teal-800 dark:text-teal-200">Best Spots</h5>
                        <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-1">
                          <li>• Bar Reef Marine Sanctuary</li>
                          <li>• Dolphin Beach coral gardens</li>
                          <li>• Talawila reef area</li>
                          <li>• Kappalady lagoon (beginners)</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200">Snorkeling Tours</h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">$25-40 per person</p>
                        <p className="text-xs text-muted-foreground">Equipment and boat included</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <h5 className="font-semibold text-green-800 dark:text-green-200">Visibility</h5>
                        <p className="text-sm text-green-700 dark:text-green-300">15-25 meters (excellent)</p>
                        <p className="text-xs text-muted-foreground">Best Dec-Apr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* More Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">More Amazing Experiences</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Island Hopping Adventures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Explore the 14 islands of Kalpitiya Peninsula by traditional fishing boat or speedboat. Each island 
                  has its own unique character and attractions.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Baththalangunduwa Island:</strong> Historic Dutch fort ruins</li>
                  <li>• <strong>Elephant Island:</strong> Mangrove forests and bird watching</li>
                  <li>• <strong>Coconut Tree Island:</strong> Perfect for picnics and swimming</li>
                  <li>• <strong>Bar Island:</strong> Pristine beaches and snorkeling</li>
                </ul>
                <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Cost:</strong> $30-60 per person for half-day island hopping tour
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mangrove Safaris</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Navigate through dense mangrove forests in traditional boats and discover a completely different 
                  ecosystem with unique wildlife and bird species.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Over 150 bird species including herons and kingfishers</li>
                  <li>• Monitor lizards and various reptile species</li>
                  <li>• Peaceful waterways through ancient mangrove tunnels</li>
                  <li>• Traditional fishing village visits</li>
                  <li>• Sunset tours available for romantic experiences</li>
                </ul>
                <div className="mt-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    <strong>Best Time:</strong> Early morning or late afternoon for wildlife activity
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traditional Fishing Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Join local fishermen on traditional outrigger boats (oruwa) and learn ancient fishing techniques 
                  that have been passed down through generations.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Early morning fishing expeditions (4-8 AM)</li>
                  <li>• Learn to use traditional nets and fishing methods</li>
                  <li>• Experience authentic Sri Lankan fishing culture</li>
                  <li>• Fresh fish breakfast prepared by fishermen</li>
                  <li>• Support local fishing communities</li>
                </ul>
                <div className="mt-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
                  <p className="text-sm text-orange-800 dark:text-orange-300">
                    <strong>Cultural Impact:</strong> Direct support to local fishing families
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beach & Lagoon Relaxation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Sometimes the best activity is simply relaxing on pristine, uncrowded beaches with crystal-clear 
                  waters and stunning natural beauty.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Miles of pristine, white sand beaches</li>
                  <li>• Calm lagoon waters perfect for swimming</li>
                  <li>• Spectacular sunsets over the Indian Ocean</li>
                  <li>• Beach volleyball and frisbee areas</li>
                  <li>• Beachfront dining with fresh seafood</li>
                  <li>• Hammocks and beach loungers available</li>
                </ul>
                <div className="mt-3 p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
                  <p className="text-sm text-purple-800 dark:text-purple-300">
                    <strong>Perfect for:</strong> Honeymoons, family time, and peaceful relaxation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Best Times to Visit Kalpitiya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">December - April</h4>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-green-600">🌟 BEST FOR MOST VISITORS</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Perfect weather: sunny and dry</li>
                      <li>• Calm seas ideal for dolphin watching</li>
                      <li>• Excellent snorkeling visibility</li>
                      <li>• Comfortable temperatures (26-30°C)</li>
                      <li>• Peak tourist season</li>
                    </ul>
                    <p className="text-xs text-orange-600 font-medium">⚠️ Higher prices and more crowds</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-cyan-600">May - September</h4>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-blue-600">🏄‍♂️ PERFECT FOR WATER SPORTS</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Consistent winds (15-25 knots)</li>
                      <li>• World-class kitesurfing conditions</li>
                      <li>• Lower accommodation prices</li>
                      <li>• Less crowded beaches</li>
                      <li>• Occasional rain showers</li>
                    </ul>
                    <p className="text-xs text-blue-600 font-medium">💰 Best value for money</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-600">October - November</h4>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-amber-600">🌦️ SHOULDER SEASON</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Transition period with mixed weather</li>
                      <li>• Some rain but also sunny days</li>
                      <li>• Very few tourists</li>
                      <li>• Great for budget travelers</li>
                      <li>• Unpredictable conditions</li>
                    </ul>
                    <p className="text-xs text-amber-600 font-medium">🎲 Weather can be unpredictable</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Accommodation Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Kalpitiya</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Luxury Beach Resorts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  High-end beachfront properties with full-service amenities and water sports facilities.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Beachfront villas with private pools</li>
                  <li>• On-site water sports centers</li>
                  <li>• Spa and wellness facilities</li>
                  <li>• Fine dining restaurants</li>
                  <li>• Butler and concierge services</li>
                </ul>
                <div className="mt-3 p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
                  <p className="text-sm text-purple-800 dark:text-purple-300">
                    <strong>Price Range:</strong> $150-400 per night
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Boutique Beach Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  Charming mid-range properties offering comfort, style, and personalized service.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Stylish rooms with sea views</li>
                  <li>• Swimming pools and beach access</li>
                  <li>• Restaurant serving local and international cuisine</li>
                  <li>• Tour desk for activity bookings</li>
                  <li>• Bicycle and kayak rentals</li>
                </ul>
                <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Price Range:</strong> $50-150 per night
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Guesthouses & Hostels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-sm">
                  Budget-friendly options perfect for backpackers and travelers seeking authentic local experiences.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Family-run guesthouses</li>
                  <li>• Shared and private room options</li>
                  <li>• Home-cooked Sri Lankan meals</li>
                  <li>• Local family interaction and cultural exchange</li>
                  <li>• Basic but clean facilities</li>
                </ul>
                <div className="mt-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    <strong>Price Range:</strong> $15-50 per night
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Travel Tips for Kalpitiya</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What to Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-2">Beach & Water Essentials:</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• High SPF waterproof sunscreen (30+ SPF)</li>
                      <li>• Swimwear and quick-dry clothing</li>
                      <li>• Snorkel gear (optional - rentals available)</li>
                      <li>• Waterproof phone case</li>
                      <li>• Beach towels and flip-flops</li>
                      <li>• Sun hat and polarized sunglasses</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">General Travel Items:</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Light, breathable clothing</li>
                      <li>• Insect repellent for evenings</li>
                      <li>• Basic first aid kit</li>
                      <li>• Reusable water bottle</li>
                      <li>• Camera with extra batteries</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Money & Practical Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-2">Currency & Payments:</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Sri Lankan Rupees (LKR) is local currency</li>
                      <li>• USD widely accepted for tours and hotels</li>
                      <li>• Limited ATMs - bring cash from cities</li>
                      <li>• Credit cards accepted at resorts only</li>
                      <li>• Negotiate prices for activities and transport</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Communication:</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Mobile coverage generally good</li>
                      <li>• WiFi available at most hotels</li>
                      <li>• English widely spoken in tourism areas</li>
                      <li>• Download offline maps before arrival</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <Heart className="w-5 h-5" />
                Your Kalpitiya Adventure Awaits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-300 mb-4">
                Kalpitiya Peninsula truly is Sri Lanka&apos;s best-kept beach secret - a place where pristine nature, 
                incredible wildlife, and world-class water sports come together in perfect harmony. Whether you&apos;re 
                seeking the thrill of kitesurfing, the wonder of swimming alongside dolphins, the tranquility of 
                uncrowded beaches, or the adventure of exploring uninhabited islands, Kalpitiya offers experiences 
                that will create memories to last a lifetime.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                This hidden paradise won&apos;t remain secret forever, so visit now while you can still enjoy its 
                unspoiled beauty and authentic charm. From sunrise dolphin tours to sunset kitesurfing sessions, 
                every moment in Kalpitiya is an opportunity for adventure and wonder. Pack your sense of adventure 
                and get ready to discover why those who visit Kalpitiya never want to leave! 🐬🏄‍♂️🌅
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}