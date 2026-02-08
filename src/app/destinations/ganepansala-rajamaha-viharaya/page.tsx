"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Flower, BookOpen, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function GanepansalaTempleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Gane-Pansala.jpeg"
          alt="Beautiful ancient Ganepansala Raja Maha Viharaya temple with traditional architecture in Bentota"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ganepansala Raja Maha Viharaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Temple of Learning and Sacred Wisdom</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
              <MapPin className="w-4 h-4 mr-1" />
              Bentota, Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <BookOpen className="w-4 h-4 mr-1" />
              Ancient Learning Center
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Flower className="w-4 h-4 mr-1" />
              Sacred Teachings
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Discover Ganepansala: Where Ancient Wisdom Lives On
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Ganepansala Raja Maha Viharaya, also known as Bemvehera Gane Pansala, stands as one of Bentota's most important centers of Buddhist learning and spiritual practice. For over 1500 years, this temple has served as a beacon of education, where monks and scholars have studied ancient texts and preserved sacred knowledge for future generations.
            </p>
            <p className="text-lg">
              What makes Ganepansala truly special is its role as a traditional monastery school, where young monks still come to learn the Buddha's teachings just as their predecessors did centuries ago. The temple combines deep spiritual practice with scholarly tradition, creating a unique atmosphere where visitors can witness living Buddhism in its purest form.
            </p>
          </div>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Temple Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Temple Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Bentota, 68km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Age:</strong> Over 1500 years old
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Famous for:</strong> Buddhist Learning Center
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Visit Time:</strong> 1-2 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Best for:</strong> Learning, Meditation, Culture
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flower className="w-4 h-4 text-indigo-500" />
                    <span>
                      <strong>Special:</strong> Active Monastery School
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Get There */}
          <section className="flex-1">
            <Card className="border-blue-200 bg-blue-50/30 dark:bg-blue-950/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                  <MapPin className="w-5 h-5" />
                  How to Get to Ganepansala Temple
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Colombo (Recommended)</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 68km (42 miles)</li>
                      <li>• <strong>Time:</strong> 1.5-2 hours by car</li>
                      <li>• <strong>Route:</strong> A2 Highway via Kalutara</li>
                      <li>• <strong>Cost:</strong> Rs. 3500-4500 by taxi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Bentota Town</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 4km inland</li>
                      <li>• <strong>Time:</strong> 10 minutes by tuk-tuk</li>
                      <li>• <strong>Transport:</strong> Tuk-tuk or taxi available</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Tip:</strong> Best combined with other Bentota temples for a spiritual circuit tour.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* What Makes Ganepansala Special */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Makes Ganepansala Temple Unique</h2>
          <div className="grid md:grid-cols-1 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  Living Monastery School
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Young monks studying Buddhist texts in traditional setting", title: "Buddhist Education", caption: "Traditional learning continues today" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Ancient palm leaf manuscripts and sacred texts", title: "Sacred Texts", caption: "Preserving ancient wisdom" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Meditation hall where monks practice daily", title: "Meditation Practice", caption: "Daily spiritual training" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Ganepansala is not just a temple but a functioning monastery school where young monks come to learn Buddhist philosophy, meditation, and ancient texts. This tradition of education has continued unbroken for over fifteen centuries, making it one of Sri Lanka's most important centers of Buddhist learning.
                    </p>
                    <h4 className="font-semibold mb-2">Educational Traditions:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Study of Tripitaka (Buddhist scriptures)</li>
                      <li>• Traditional Pali language learning</li>
                      <li>• Meditation and mindfulness training</li>
                      <li>• Buddhist philosophy and ethics</li>
                      <li>• Preservation of ancient manuscripts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flower className="w-5 h-5 text-green-500" />
                  Sacred Architecture and Ancient Art
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The temple showcases beautiful traditional Sri Lankan architecture with intricate wood carvings, ancient stone pillars, and colorful murals that tell stories from Buddhist history. Every building reflects the artistic skills passed down through generations of craftsmen.
                    </p>
                    <h4 className="font-semibold mb-2">Architectural Highlights:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Hand-carved wooden pillars and doors</li>
                      <li>• Ancient stone Buddha statues</li>
                      <li>• Traditional tile work and murals</li>
                      <li>• Historic dagoba with sacred relics</li>
                      <li>• Beautiful meditation halls</li>
                    </ul>
                  </div>
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Intricate wood carvings on temple pillars", title: "Traditional Craftsmanship", caption: "Ancient artistic skills preserved" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Colorful murals depicting Buddhist stories", title: "Sacred Art", caption: "Stories from Buddhist history" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Ancient stone dagoba with prayer flags", title: "Sacred Dagoba", caption: "Center of temple worship" }
                      ]}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-500" />
                  Unique Cultural Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Monks engaged in daily study and discussion", title: "Scholarly Life", caption: "Monks studying ancient texts together" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Traditional alms giving ceremony", title: "Daily Rituals", caption: "Community supporting monastery life" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Peaceful temple grounds with local devotees", title: "Community Worship", caption: "Local families maintaining traditions" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Visiting Ganepansala offers a rare glimpse into authentic monastery life. You can observe young monks studying, participate in traditional ceremonies, and witness how Buddhist education has been preserved through the centuries.
                    </p>
                    <h4 className="font-semibold mb-2">Cultural Experiences:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Watch monks engaged in study sessions</li>
                      <li>• Participate in morning alms giving</li>
                      <li>• Learn about Buddhist manuscript preservation</li>
                      <li>• Join in community prayer sessions</li>
                      <li>• Experience traditional monastery life</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Underground Tunnel System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Archaeological evidence reveals the existence of underground tunnels that once connected Ganepansala Rajamaha Viharaya with other significant temples in the Bentota area. These ancient tunnel networks were likely used for secret passage during times of invasion or for connecting monastery complexes.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Currently, an 8-feet deep pit remains accessible beneath the temple, offering a glimpse into this fascinating underground network. While most of the tunnel system has collapsed or been filled over the centuries, this remaining section stands as a testament to the advanced engineering and strategic planning of ancient Sri Lankan monastery builders.
                    </p>
                    <h4 className="font-semibold mb-2">Historical Significance:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Connected multiple rajamaha viharas in Bentota region</li>
                      <li>• Used for safe passage during invasions</li>
                      <li>• Demonstrates ancient engineering expertise</li>
                      <li>• Only 8-feet pit section currently accessible</li>
                      <li>• Archaeological interest for researchers</li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">Tunnel Facts</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-orange-700 dark:text-orange-300">Original Purpose</p>
                          <p className="text-muted-foreground">Secret passages between temples for monks during times of danger</p>
                        </div>
                        <div>
                          <p className="font-medium text-orange-700 dark:text-orange-300">Current Status</p>
                          <p className="text-muted-foreground">8-feet deep pit accessible; most sections collapsed</p>
                        </div>
                        <div>
                          <p className="font-medium text-orange-700 dark:text-orange-300">Historical Value</p>
                          <p className="text-muted-foreground">Evidence of sophisticated ancient monastery infrastructure</p>
                        </div>
                        <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-900/40 rounded">
                          <p className="text-xs text-orange-800 dark:text-orange-200">
                            <strong>Visitor Note:</strong> Access to the tunnel pit may be restricted for safety reasons. Please ask temple authorities for guided viewing if interested.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Times to Visit */}
        <section className="mb-12">
          <Card className="border-amber-200 bg-amber-50/30 dark:bg-amber-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                <Calendar className="w-5 h-5" />
                Best Times to Visit Ganepansala Temple
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300">Daily Schedule</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Early Morning (5:30 - 7:00 AM)</h5>
                      <p className="text-sm text-muted-foreground">Witness morning prayers and alms giving. Most authentic time to see monastery life in action.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Study Hours (8:00 AM - 12:00 PM)</h5>
                      <p className="text-sm text-muted-foreground">Observe monks engaged in study and discussion. Quiet time perfect for meditation and reflection.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300">Special Events</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Poya Days (Full Moon)</h5>
                      <p className="text-sm text-muted-foreground">Special teaching sessions and community gatherings. Best time to experience traditional Buddhist education.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Poson Festival (June)</h5>
                      <p className="text-sm text-muted-foreground">Celebrates arrival of Buddhism in Sri Lanka. Special programs showcasing monastery's educational role.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Guidelines */}
        <section className="mb-12">
          <Card className="border-green-200 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <CheckCircle className="w-5 h-5" />
                Respectful Monastery Visit Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Monastery Etiquette</h4>
                  <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                    <li>• Speak softly to avoid disturbing study sessions</li>
                    <li>• Don't interrupt monks during learning activities</li>
                    <li>• Observe quietly from designated areas</li>
                    <li>• Show respect for all religious practices</li>
                    <li>• Follow the guidance of temple caretakers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">What to Bring</h4>
                  <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                    <li>• White clothing for respectful appearance</li>
                    <li>• Books or notebooks if interested in teachings</li>
                    <li>• Small donation for monastery maintenance</li>
                    <li>• Water and light snacks for longer visits</li>
                    <li>• Open mind ready for learning</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>📚 Special Note:</strong> This is an active learning center. Your quiet respect helps maintain the peaceful atmosphere needed for study.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What to Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Experience at Ganepansala</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Observe Buddhist Studies</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Watch young monks study ancient texts and participate in traditional Buddhist education that has continued for centuries.
                </p>
                <Badge variant="outline" className="text-blue-600">📖 Educational Experience</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Flower className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Join Morning Rituals</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Participate in traditional alms giving and morning prayers with the local community supporting the monastery.
                </p>
                <Badge variant="outline" className="text-green-600">🙏 Spiritual Participation</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Explore Sacred Art</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Admire traditional wood carvings, ancient murals, and architectural details that showcase centuries of craftsmanship.
                </p>
                <Badge variant="outline" className="text-purple-600">🎨 Cultural Appreciation</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions in Bentota</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Bodhimaluwa Temple</CardTitle>
                <CardDescription>Sacred Bodhi tree and ancient relics</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Bodhimaluwa temple with sacred Bodhi tree"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Visit another important Buddhist temple known for its ancient Bodhi tree and spiritual significance to local community.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 3km from Ganepansala</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bodhimaluwa-raja-maha-viharaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Brief Garden</CardTitle>
                <CardDescription>Artistic landscape by Bevis Bawa</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Brief-Garden-by-Bawa.jpg"
                  alt="Brief Garden showing artistic landscape design"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Explore the creative garden designed by Bevis Bawa, featuring sculptures, exotic plants, and artistic landscape design.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 8km from temple</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/brief-garden-by-bevis-bawa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Bentota River Safari</CardTitle>
                <CardDescription>Mangrove exploration and wildlife</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Bentota River with mangroves and wildlife"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Take a peaceful boat ride through Bentota River's mangroves, spotting monitor lizards, birds, and crocodiles.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 6km to river starting point</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bentota" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="mb-12">
          <Card className="border-indigo-200 bg-indigo-50/30 dark:bg-indigo-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800 dark:text-indigo-200">
                <CheckCircle className="w-5 h-5" />
                Planning Your Monastery Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Visit Duration</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Brief Visit:</strong> 45 minutes</li>
                    <li>• <strong>Learning Experience:</strong> 1.5-2 hours</li>
                    <li>• <strong>Deep Immersion:</strong> Half day with study observation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">What to Expect</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Free Entry:</strong> Donations appreciated</li>
                    <li>• <strong>Active Learning:</strong> Monks engaged in studies</li>
                    <li>• <strong>Cultural Education:</strong> Learn about monastery life</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Perfect Combinations</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Temple Circuit:</strong> Visit other Bentota temples</li>
                    <li>• <strong>Cultural Day:</strong> Combine with Brief Garden</li>
                    <li>• <strong>Nature Mix:</strong> Add Bentota River safari</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Experience Living Buddhist Education</h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed mb-6">
                Ganepansala Raja Maha Viharaya offers a unique window into the world of traditional Buddhist education and monastery life. Here, ancient wisdom continues to be passed down through generations, just as it has been for over fifteen centuries. This is more than a temple visit - it's a journey into the heart of Buddhist learning tradition.
              </p>
              <div className="flex justify-center">
                <Badge variant="outline" className="text-blue-700 border-blue-300 bg-white dark:bg-gray-800">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Where Ancient Wisdom Lives and Grows
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
