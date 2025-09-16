import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, CheckCircle, Star, Calendar, Droplets, Crown, Building, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Kuttam Pokuna: Ancient Twin Pools of Anuradhapura | Complete Archaeological Guide 2025",
  description:
    "Discover Kuttam Pokuna, the magnificent twin pools of ancient Anuradhapura. Explore 1,500-year-old hydraulic engineering, Buddhist monastery bathing pools, and architectural marvels of Sri Lanka&apos;s golden age.",
  keywords: "Kuttam Pokuna, twin pools, Anuradhapura, ancient Sri Lanka, Buddhist monastery, hydraulic engineering, archaeological site, UNESCO heritage, travel guide",
  authors: [{ name: "Archaeological Explorer" }],
  openGraph: {
    title: "Kuttam Pokuna: Ancient Twin Pools of Anuradhapura",
    description: "Explore the magnificent 1,500-year-old twin bathing pools - a masterpiece of ancient hydraulic engineering",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuttam Pokuna: Ancient Twin Pools of Anuradhapura",
    description: "Explore the magnificent 1,500-year-old twin bathing pools - a masterpiece of ancient hydraulic engineering",
  },
}

export default function KuttamPokunaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Magnificent aerial view of Kuttam Pokuna twin pools showing ancient stepped architecture and crystal-clear water in Anuradhapura, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kuttam Pokuna</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Twin Pools - Masterpiece of Hydraulic Engineering</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura, North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              6th Century AD
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Droplets className="w-4 h-4 mr-1" />
              Ancient Bathing Pools
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Building className="w-4 h-4 mr-1" />
              UNESCO World Heritage Zone
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kuttam Pokuna: Where Ancient Engineering Meets Spiritual Purification</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into one of the most remarkable achievements of ancient Sri Lankan civilization! Kuttam Pokuna, 
              meaning &quot;Twin Pools&quot; in Sinhala, represents the pinnacle of 6th-century hydraulic engineering and 
              spiritual architecture. These magnificent bathing pools, built during the reign of King Aggabodhi I 
              (571-604 AD), showcase the incredible sophistication of ancient Anuradhapura&apos;s monastic civilization.
            </p>
            <p className="text-lg mb-4">
              What makes Kuttam Pokuna truly extraordinary is not just its age - over 1,400 years old - but the 
              ingenious engineering that still functions perfectly today! These pools were designed with such precision 
              that they maintain crystal-clear water through an intricate underground filtration system that would 
              impress modern engineers. The larger pool measures 91 feet in length, while the smaller companion pool 
              stretches 51 feet, both connected by an underground channel that creates a natural circulation system.
            </p>
            <p className="text-lg mb-4">
              Originally constructed as bathing facilities for Buddhist monks of the great Abhayagiri Monastery, 
              these pools served a dual purpose - physical cleansing and spiritual purification. The elegant stepped 
              design, carved from solid granite, features beautifully sculpted makara (dragon) heads that serve as 
              water spouts, while lotus motifs and geometric patterns adorn the pool edges, creating a harmonious 
              blend of functionality and artistic beauty.
            </p>
            <p className="text-lg">
              Today, Kuttam Pokuna stands as a testament to the remarkable achievements of ancient Sri Lankan civilization. 
              As you walk around these pristine pools, you&apos;re not just observing ancient architecture - you&apos;re 
              witnessing a 1,400-year-old engineering marvel that continues to function exactly as its creators intended, 
              making it one of the most perfectly preserved examples of ancient hydraulic technology in the world.
            </p>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <Droplets className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-800">Engineering Marvel Still Active</p>
                <p className="text-blue-700 text-sm mt-1">
                  The pools&apos; original filtration system continues to work after 1,400 years, automatically maintaining 
                  water clarity through underground channels and natural sedimentation chambers.
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
                Essential Kuttam Pokuna Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span><strong>Built:</strong> 6th Century AD (571-604)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-4 h-4 text-yellow-500" />
                    <span><strong>Commissioned by:</strong> King Aggabodhi I</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-green-500" />
                    <span><strong>Purpose:</strong> Monastic bathing facility</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span><strong>Large pool:</strong> 91 × 51 feet</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-4 h-4 text-cyan-500" />
                    <span><strong>Small pool:</strong> 51 × 33 feet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-indigo-500" />
                    <span><strong>Depth:</strong> 9 feet (both pools)</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span><strong>Visit duration:</strong> 1-2 hours</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span><strong>Location:</strong> Abhayagiri Complex</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-pink-500" />
                    <span><strong>Best light:</strong> Early morning/late afternoon</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Background */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Historical Background: The Golden Age of Anuradhapura</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The Reign of King Aggabodhi I (571-604 AD)</CardTitle>
                <CardDescription>The visionary monarch who commissioned this engineering masterpiece</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Artist&apos;s impression of King Aggabodhi I overseeing the construction of Kuttam Pokuna with ancient workers and engineers"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      King Aggabodhi I ascended to the throne during one of Anuradhapura&apos;s most prosperous periods. 
                      A devout Buddhist and patron of learning, he understood that the great Abhayagiri Monastery needed 
                      facilities worthy of its international reputation. The monastery attracted scholars from across 
                      Asia, including China, India, and Southeast Asia, making it essential to provide world-class amenities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ruled for 33 years (longest reign of his era)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Commissioned numerous hydraulic projects
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Promoted international Buddhist scholarship
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Master of ancient engineering techniques
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Abhayagiri Monastery Connection</CardTitle>
                <CardDescription>Understanding the monastic context of these sacred pools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kuttam Pokuna was built specifically for the monks of Abhayagiri Monastery, one of the most 
                      important Buddhist institutions in ancient Asia. With over 5,000 resident monks at its peak, 
                      the monastery required sophisticated infrastructure. These pools weren&apos;t just for bathing - 
                      they were an integral part of monastic discipline and spiritual practice.
                    </p>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2">Fascinating Fact</h4>
                      <p className="text-sm text-amber-700">
                        Archaeological evidence suggests that different pools were used at different times of day, 
                        with specific rituals for dawn and dusk bathing ceremonies. The positioning allows for 
                        perfect sunrise reflection in the eastern pool!
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ancient Abhayagiri Monastery complex reconstruction showing Kuttam Pokuna&apos;s position among monastic buildings"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Engineering Marvel */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Engineering Marvel: Ancient Technology That Still Works</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The Ingenious Hydraulic System</CardTitle>
                <CardDescription>How 1,400-year-old technology outperforms modern pools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    The hydraulic engineering of Kuttam Pokuna represents one of humanity&apos;s greatest achievements 
                    in water management. The system consists of multiple interconnected components that work together 
                    to maintain perfect water quality without any modern filtration equipment.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-blue-800">Water Supply System</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start gap-2">
                            <Droplets className="w-4 h-4 mt-1 flex-shrink-0" />
                            Underground channels from Periyakulam Tank
                          </li>
                          <li className="flex items-start gap-2">
                            <Droplets className="w-4 h-4 mt-1 flex-shrink-0" />
                            Multiple sedimentation chambers
                          </li>
                          <li className="flex items-start gap-2">
                            <Droplets className="w-4 h-4 mt-1 flex-shrink-0" />
                            Controlled flow rate mechanisms
                          </li>
                          <li className="flex items-start gap-2">
                            <Droplets className="w-4 h-4 mt-1 flex-shrink-0" />
                            Natural pressure regulation system
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-green-800">Filtration Technology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                            Multi-stage sand and gravel filtration
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                            Natural biological water treatment
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                            Continuous circulation prevents stagnation
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                            Self-cleaning overflow system
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Mind-Blowing Engineering Facts
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-2 text-purple-700">
                        <li>• Water maintains constant 78°F temperature year-round</li>
                        <li>• Zero maintenance required for 1,400+ years</li>
                        <li>• Natural pH balance prevents algae growth</li>
                        <li>• Earthquake-resistant foundation design</li>
                      </ul>
                      <ul className="space-y-2 text-purple-700">
                        <li>• Automatic water level regulation</li>
                        <li>• Built-in overflow prevention system</li>
                        <li>• Stone joints sealed with organic compounds</li>
                        <li>• Precision measurements accurate to millimeters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Architectural Features & Artistic Elements</CardTitle>
                <CardDescription>Where engineering meets artistic perfection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Close-up detail of carved makara dragon head water spout and lotus motifs on Kuttam Pokuna pool edge"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Every element of Kuttam Pokuna combines practical function with spiritual symbolism. The stepped 
                      design isn&apos;t just for easy access - each level represents a stage of spiritual purification. 
                      The carved makara heads aren&apos;t merely decorative - they&apos;re carefully angled water spouts 
                      that create gentle currents to keep the water circulating.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Precisely carved granite steps (each 9 inches high)
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Makara dragon head water spouts
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Lotus and geometric border carvings
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Underground connecting tunnel
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spiritual Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Spiritual Significance & Monastic Life</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Buddhist Purification Rituals</CardTitle>
                <CardDescription>Understanding the sacred purpose behind these ancient pools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    In Buddhist monastic tradition, physical cleanliness is inseparable from spiritual purity. 
                    Kuttam Pokuna served as more than bathing facilities - they were sacred spaces where monks 
                    prepared their bodies and minds for meditation, study, and religious ceremonies.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-orange-50 border-orange-200">
                      <CardHeader>
                        <CardTitle className="text-orange-800 text-lg">Dawn Rituals</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Pre-meditation purification</li>
                          <li>• Preparation for morning prayers</li>
                          <li>• Symbolic rebirth with sunrise</li>
                          <li>• Community bonding time</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-blue-800 text-lg">Ceremonial Use</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Ordination preparations</li>
                          <li>• Festival purification rites</li>
                          <li>• Healing and blessing ceremonies</li>
                          <li>• Seasonal observances</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-green-800 text-lg">Daily Practice</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Mindfulness meditation</li>
                          <li>• Physical discipline training</li>
                          <li>• Mental clarity preparation</li>
                          <li>• Community interaction</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-800 mb-2">Sacred Water Symbolism</h4>
                    <p className="text-sm text-indigo-700">
                      The constantly flowing, crystal-clear water represents the Buddhist concept of impermanence 
                      and the continuous flow of consciousness. Monks would meditate on the water&apos;s movement 
                      as a reflection of life&apos;s eternal change, using the pools as both physical and 
                      philosophical teaching tools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visiting Kuttam Pokuna: Complete Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Practical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Opening Hours & Access</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Hours:</strong> 6:00 AM - 6:00 PM daily</li>
                    <li>• <strong>Entry fee:</strong> Included in Anuradhapura site ticket</li>
                    <li>• <strong>Location:</strong> Abhayagiri Complex, Anuradhapura</li>
                    <li>• <strong>Parking:</strong> Available at visitor center</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Early morning:</strong> 6:30-8:30 AM (best lighting)</li>
                    <li>• <strong>Late afternoon:</strong> 4:00-5:30 PM (golden hour)</li>
                    <li>• <strong>Avoid:</strong> Midday heat (11 AM - 2 PM)</li>
                    <li>• <strong>Season:</strong> November to March (dry season)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sun protection and water</li>
                    <li>• Comfortable walking shoes</li>
                    <li>• Camera with extra batteries</li>
                    <li>• Respectful clothing (covered shoulders/knees)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photography & Etiquette</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Photography Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use polarizing filter for water reflections</li>
                    <li>• Wide-angle lens captures both pools</li>
                    <li>• Focus on architectural details and carvings</li>
                    <li>• Sunrise creates stunning light on granite</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Respect</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Maintain quiet, respectful behavior</li>
                    <li>• Don&apos;t touch or climb on ancient structures</li>
                    <li>• Follow designated walking paths</li>
                    <li>• Observe any local prayer or meditation</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-1">Conservation Note</h4>
                  <p className="text-sm text-green-700">
                    These pools are actively protected archaeological treasures. Help preserve them 
                    for future generations by following all guidelines and reporting any damage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Anuradhapura Experience</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Kuttam Pokuna is part of the magnificent Anuradhapura Sacred City, offering visitors the chance 
              to explore one of the world&apos;s oldest continuously inhabited cities and Sri Lanka&apos;s first capital.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Within Abhayagiri Complex</CardTitle>
                  <CardDescription>Sites within walking distance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Abhayagiri Dagoba:</strong> Massive ancient stupa (5-minute walk)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Samadhi Statue:</strong> Serene Buddha meditation statue
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Ratna Prasada:</strong> Ancient monastery foundation ruins
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Lankarama:</strong> Well-preserved ancient stupa
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Greater Anuradhapura</CardTitle>
                  <CardDescription>Must-visit sites in the sacred city</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Sri Maha Bodhi:</strong> Sacred Bo tree (2,300 years old)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Ruwanwelisaya:</strong> Great white stupa masterpiece
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Thuparamaya:</strong> First stupa built in Sri Lanka
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Archaeological Museum:</strong> Artifacts and history
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Suggested Itinerary
              </h4>
              <div className="text-sm text-yellow-700 space-y-1">
                <p><strong>Morning (6:30-11:00 AM):</strong> Kuttam Pokuna → Abhayagiri Dagoba → Samadhi Statue</p>
                <p><strong>Afternoon (3:00-6:00 PM):</strong> Sri Maha Bodhi → Ruwanwelisaya → Thuparamaya</p>
                <p><strong>Duration:</strong> Full day recommended for complete experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation & Research */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conservation Efforts & Archaeological Research</h2>
          <Card>
            <CardHeader>
              <CardTitle>Preserving a Wonder for Future Generations</CardTitle>
              <CardDescription>Ongoing efforts to protect and study this ancient marvel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Kuttam Pokuna represents not just a tourist attraction, but an active archaeological research site 
                  that continues to reveal secrets about ancient Sri Lankan engineering and monastic life. Modern 
                  conservation efforts focus on preserving the site&apos;s integrity while allowing continued study.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Recent Discoveries</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Underground water channel mapping completed in 2019</li>
                      <li>• Original water source identified using ground-penetrating radar</li>
                      <li>• Analysis reveals organic sealants still functioning after 1,400 years</li>
                      <li>• Excavation uncovered additional monastery buildings nearby</li>
                      <li>• Carbon dating confirmed 6th-century construction period</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Conservation Challenges</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Climate change affecting water table levels</li>
                      <li>• Increased tourist footfall requiring path management</li>
                      <li>• Monsoon water management and drainage</li>
                      <li>• Protecting ancient granite from modern pollutants</li>
                      <li>• Balancing access with preservation needs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Research Significance</h4>
                  <p className="text-sm text-blue-700">
                    Studies of Kuttam Pokuna&apos;s hydraulic system have influenced modern sustainable water management 
                    projects across Asia. Engineers from Japan, Singapore, and India regularly visit to study the 
                    ancient techniques that could inform contemporary green building practices and water conservation efforts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Journey Through Time Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Standing beside Kuttam Pokuna is like holding a conversation with genius across the centuries. 
                Here, in these perfectly preserved pools, you witness the remarkable achievements of a civilization 
                that understood both the practical needs of daily life and the spiritual requirements of the human soul. 
                The crystal-clear water that still flows through these ancient channels carries with it the wisdom 
                of 1,400 years of continuous operation.
              </p>
              <p className="text-muted-foreground mb-4">
                Every visit to Kuttam Pokuna offers new insights - the play of light on granite steps, the gentle 
                sound of water flowing through carved spouts, the perfect proportions that create such lasting beauty. 
                This isn&apos;t just archaeology; it&apos;s a living demonstration of what human ingenuity can achieve 
                when guided by wisdom, patience, and respect for both nature and spirit.
              </p>
              <p className="text-muted-foreground font-medium">
                Come, walk around these ancient pools, and let yourself be amazed by the genius of your ancestors. 
                In an age of planned obsolescence, Kuttam Pokuna stands as proof that true craftsmanship is eternal! 🏛️💧✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
