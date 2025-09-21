import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Waves, Users, Compass } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Mannar Sri Lanka: Complete Guide 2025 | Ancient Island & Baobab Trees",
  description:
    "Discover Mannar Island, Sri Lanka's hidden gem with ancient baobab trees, pristine beaches, and rich cultural heritage. Complete travel guide with attractions and tips.",
  keywords:
    "Mannar Island, baobab trees Sri Lanka, Mannar Fort, Adam's Bridge, pristine beaches, cultural heritage, northern Sri Lanka",
  openGraph: {
    title: "Mannar Island: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's mystical northern island with ancient baobab trees",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function MannarGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mannar.jpg"
          alt="Ancient baobab trees silhouetted against sunset sky in Mannar Island with pristine landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mannar Island</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Mystical Northern Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Northern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              Pristine Beaches
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Compass className="w-4 h-4 mr-1" />
              Ancient Baobab Trees
            </Badge>
          </div>
        </div>
      </section>

  <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mannar: Where Time Stands Still</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover the enchanting island of Mannar, Sri Lanka&apos;s best-kept secret in the far north, where ancient
              baobab trees stand as silent sentinels over pristine beaches and a landscape that seems untouched by time.
              Connected to the mainland by a causeway, this mystical island offers a unique blend of natural wonders,
              cultural heritage, and spiritual significance that sets it apart from any other destination in Sri Lanka.
            </p>
            <p className="text-lg">
              From the legendary Adam&apos;s Bridge (Rama Setu) that connects Sri Lanka to India, to the majestic baobab
              trees that create an almost African landscape in the heart of the Indian Ocean, Mannar is a place where
              mythology meets reality. This remote paradise offers pristine beaches, rich birdlife, ancient temples, and
              a pace of life that allows visitors to truly disconnect and experience the raw beauty of untouched Sri
              Lanka.
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
                Essential Mannar Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Northern Province, connected by causeway
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Coastline:</strong> 130 km of pristine beaches
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> Ancient baobab trees
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> Diverse Tamil, Muslim, Sinhalese
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Time:</strong> October to March
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2-3 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Natural Wonders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Natural Wonders & Unique Landscapes</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Ancient Baobab Trees</CardTitle>
                <CardDescription>Mystical giants from another continent</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Baobab+Trees"
                    alt="Majestic baobab trees in Mannar with their distinctive bottle-shaped trunks against blue sky"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Mannar is home to some of the most magnificent baobab trees outside of Africa and Madagascar.
                      These ancient giants, some over 700 years old, create a surreal landscape that transports visitors
                      to another continent entirely.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 ancient baobab trees scattered across the island
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Some trees estimated to be 700+ years old
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique bottle-shaped trunks up to 20 meters in circumference
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular at sunrise and sunset photography
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Adam&apos;s Bridge (Rama Setu)</CardTitle>
                <CardDescription>Legendary causeway said to connect Sri Lanka to India in ancient texts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This chain of limestone shoals, coral, and sandstone extends 30 km from Mannar to Rameswaram in India. Steeped in mythology and mentioned in the Ramayana, it&apos;s both a geological wonder and a site of immense spiritual significance.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>Ramayana Connection:</strong> According to the ancient Hindu epic <em>Ramayana</em>, Adam&apos;s Bridge is believed to be the legendary <strong>Rama Setu</strong> built by Lord Rama&apos;s vanara (monkey) army, led by the devoted Hanuman. The bridge was constructed to allow Rama and his allies to cross from India to Lanka (Sri Lanka) to rescue his wife Sita from the demon king Ravana. Hanuman&apos;s pivotal role included leaping across the sea to locate Sita and later helping to organize the construction of this massive causeway using floating stones inscribed with Rama&apos;s name.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      For millions of Hindus, Adam&apos;s Bridge is not only a natural marvel but also a sacred symbol of faith, devotion, and the triumph of good over evil. Pilgrims and visitors are inspired by the story of Hanuman&apos;s strength, loyalty, and the collective effort of Rama&apos;s army, which are celebrated in festivals and rituals to this day.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        30 km chain of natural formations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Central to the Ramayana epic and Hanuman legends
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important pilgrimage site for Hindus
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique marine ecosystem and coral formations
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Adams+Bridge"
                    alt="Aerial view of Adam's Bridge showing the chain of coral and limestone formations"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Pristine Beaches & Coastal Beauty</CardTitle>
                <CardDescription>Untouched shorelines and crystal-clear waters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Mannar+Beaches"
                    alt="Pristine beaches of Mannar with white sand, clear blue water, and minimal development"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Mannar&apos;s 130 km coastline offers some of Sri Lanka&apos;s most pristine and undeveloped beaches. These
                      secluded shores provide perfect solitude and stunning natural beauty away from commercial tourism.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        130 km of largely undeveloped coastline
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear waters perfect for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for shell collecting and beachcombing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunsets over the Gulf of Mannar
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Cultural Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cultural Heritage & Historical Sites</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>4. Mannar Fort</CardTitle>
                <CardDescription>Portuguese colonial fortress by the sea</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Mannar+Fort"
                    alt="Historic Mannar Fort with stone walls and ramparts overlooking the sea"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built by the Portuguese in 1560 and later expanded by the Dutch, Mannar Fort stands as a testament
                      to the island&apos;s strategic importance in colonial maritime trade routes.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Built in 1560 by Portuguese colonizers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Expanded and modified by Dutch rulers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Strategic location overlooking the sea
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved ramparts and bastions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Ancient Temples & Religious Sites</CardTitle>
                <CardDescription>Sacred spaces of multiple faiths</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Mannar&apos;s diverse religious heritage is reflected in its ancient temples, churches, and mosques,
                      showcasing the harmonious coexistence of different faiths throughout history.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Hindu temples with unique architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic Catholic churches from colonial era
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional mosques serving Muslim community
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful coexistence of different faiths
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Religious+Sites"
                    alt="Ancient temple architecture in Mannar showing diverse religious heritage"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wildlife & Nature */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wildlife & Natural Habitats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Migratory Birds</CardTitle>
                <CardDescription>Important stopover for bird migration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=350&text=Migratory+Birds"
                  alt="Flocks of migratory birds in Mannar wetlands and coastal areas"
                  width={350}
                  height={200}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-semibold mb-2">Seasonal Bird Paradise</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Mannar serves as a crucial stopover point for thousands of migratory birds traveling between Europe
                    and Southeast Asia.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Over 150 bird species recorded</li>
                    <li>• Peak migration: October-March</li>
                    <li>• Flamingos, pelicans, and waders</li>
                    <li>• Important wetland ecosystems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Marine Life</CardTitle>
                <CardDescription>Rich underwater biodiversity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=350&text=Marine+Life"
                  alt="Diverse marine life in the waters around Mannar including coral reefs and fish"
                  width={350}
                  height={200}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-semibold mb-2">Gulf of Mannar Marine Park</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The waters around Mannar are part of a protected marine ecosystem with exceptional biodiversity.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Coral reefs and seagrass beds</li>
                    <li>• Dugongs (sea cows) occasionally spotted</li>
                    <li>• Diverse fish species and sea turtles</li>
                    <li>• Important for marine conservation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Visiting Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 6-7 hours drive from Colombo</li>
                    <li>• Train to Medawachchiya + bus to Mannar</li>
                    <li>• Domestic flights to Jaffna + road transfer</li>
                    <li>• Private vehicle recommended for flexibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• October to March (dry season)</li>
                    <li>• Peak bird migration: December-February</li>
                    <li>• Avoid monsoon: May-September</li>
                    <li>• Early morning and evening best for photography</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Duration & Itinerary</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minimum 2 days recommended</li>
                    <li>• 3-4 days for comprehensive exploration</li>
                    <li>• Combine with Jaffna for extended trip</li>
                    <li>• Allow time for slow travel and relaxation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Essential Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sun protection (hat, sunscreen, sunglasses)</li>
                    <li>• Comfortable walking shoes</li>
                    <li>• Camera with telephoto lens for wildlife</li>
                    <li>• Binoculars for bird watching</li>
                    <li>• Light, breathable clothing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Culture</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Predominantly Tamil-speaking region</li>
                    <li>• Respect religious sites and customs</li>
                    <li>• Modest dress code appreciated</li>
                    <li>• Local hospitality is exceptional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Golden hour lighting for baobab trees</li>
                    <li>• Wide-angle lens for landscape shots</li>
                    <li>• Respect wildlife and maintain distance</li>
                    <li>• Ask permission before photographing people</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Accommodation Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Eco-Lodges</CardTitle>
                <CardDescription>$40-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable accommodation options</li>
                  <li>• Close to natural attractions</li>
                  <li>• Local guide arrangements</li>
                  <li>• Traditional meals included</li>
                  <li>• Bird watching facilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Guesthouses</CardTitle>
                <CardDescription>$20-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family-run accommodations</li>
                  <li>• Authentic local experience</li>
                  <li>• Home-cooked meals available</li>
                  <li>• Basic but comfortable facilities</li>
                  <li>• Warm hospitality guaranteed</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Beach Camps</CardTitle>
                <CardDescription>$30-70 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Beachfront camping experiences</li>
                  <li>• Glamping and tent options</li>
                  <li>• Direct beach access</li>
                  <li>• Sunset viewing opportunities</li>
                  <li>• Unique adventure experience</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Journey to the Edge of Paradise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Mannar Island offers a travel experience unlike anywhere else in Sri Lanka—a place where ancient baobab
                trees create African landscapes, pristine beaches stretch endlessly, and time seems to move at nature&apos;s
                pace. This remote paradise rewards those who venture beyond the beaten path with unforgettable
                encounters with wildlife, stunning natural beauty, and genuine cultural experiences.
              </p>
              <p className="text-muted-foreground mb-4">
                As you stand beneath the ancient baobab trees or watch the sunset paint the sky over Adam&apos;s Bridge,
                you&apos;ll understand why Mannar has remained one of Sri Lanka&apos;s best-kept secrets. The island&apos;s untouched
                beauty and peaceful atmosphere provide the perfect escape from the modern world, offering a chance to
                reconnect with nature and discover the magic of slow travel.
              </p>
              <p className="text-muted-foreground font-medium">
                May your journey to Mannar fill you with wonder and leave you with memories of a truly unique corner of
                our beautiful world! 🌅🌴✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
