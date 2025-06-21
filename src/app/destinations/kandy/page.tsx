import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Kandy Sri Lanka: Complete Travel Guide 2024 | Temple of the Tooth & Cultural Capital",
  description:
    "Discover Kandy, Sri Lanka's cultural capital. Complete guide to Temple of the Tooth, Kandy Lake, cultural shows, and the best things to do in this UNESCO World Heritage city.",
  keywords:
    "Kandy Sri Lanka, Temple of the Tooth, Kandy Maligawa, cultural capital, UNESCO World Heritage, Sri Lanka travel",
  openGraph: {
    title: "Kandy Sri Lanka: Complete Travel Guide 2024",
    description: "Your ultimate guide to Kandy, Sri Lanka's cultural heart",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function KandyTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Beautiful view of Kandy Lake with Temple of the Tooth and surrounding hills in Sri Lanka's cultural capital"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kandy</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Sacred Cultural Capital</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              500m Above Sea Level
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kandy: The Heart of Sri Lankan Culture</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the misty hills of central Sri Lanka, Kandy is a city that captures your heart from the moment
              you arrive. As the last royal capital of ancient Sri Lanka and home to the sacred Temple of the Tooth
              Relic, Kandy is where spirituality meets stunning natural beauty. This UNESCO World Heritage city offers a
              perfect blend of ancient traditions, colonial architecture, and breathtaking landscapes.
            </p>
            <p className="text-lg">
              Whether you're seeking spiritual enlightenment, cultural immersion, or simply want to experience the charm
              of old Ceylon, Kandy promises an unforgettable journey through Sri Lanka's rich heritage.
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
                Essential Kandy Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Founded:</strong> 14th Century
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 500m (1,640 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~125,000
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Colombo:</strong> 116km
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage (1988)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Best Visit Duration:</strong> 2-3 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Temple of the Tooth */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Temple of the Tooth Relic (Sri Dalada Maligawa)</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sacred Temple of the Tooth Relic in Kandy showing traditional Kandyan architecture with golden roof"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The sacred Temple of the Tooth Relic - Buddhism's most important shrine
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Temple of the Tooth Relic is not just Kandy's crown jewel – it's one of Buddhism's most sacred sites
                worldwide. This magnificent temple houses a tooth relic of Lord Buddha, making it a pilgrimage
                destination for millions of Buddhists from around the globe.
              </p>
              <p>
                Built in the 16th century, the temple showcases exquisite Kandyan architecture with its intricate
                woodwork, beautiful paintings, and golden roof. The daily rituals (pujas) held here are deeply moving
                spiritual experiences that offer visitors a glimpse into Sri Lanka's Buddhist heritage.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Puja Times (Daily Rituals):</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Morning: 5:30 AM - 6:45 AM</li>
                  <li>• Afternoon: 9:30 AM - 11:00 AM</li>
                  <li>• Evening: 6:30 PM - 8:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Must-Visit Attractions in Kandy</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="space-y-8">
            {/* Kandy Lake */}
            <Card>
              <CardHeader>
                <CardTitle>1. Kandy Lake (Bogambara Lake)</CardTitle>
                <CardDescription>Serene artificial lake in the heart of the city</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Peaceful Kandy Lake surrounded by hills with walking path and local people enjoying evening stroll"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Created by the last king of Kandy in 1807, this beautiful artificial lake is perfect for peaceful
                      walks and stunning photography. The lake is surrounded by a scenic walking path and offers
                      gorgeous views of the surrounding hills.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for morning or evening walks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful reflections for photography
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Small island in the center (Kiri Samudraya)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Royal Botanical Gardens */}
            <Card>
              <CardHeader>
                <CardTitle>2. Royal Botanical Gardens, Peradeniya</CardTitle>
                <CardDescription>147 acres of botanical paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just 6km from Kandy city, these world-renowned botanical gardens are home to over 4,000 species of
                      plants. Originally a royal pleasure garden, it's now one of the finest botanical gardens in Asia.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Famous orchid collection with over 300 varieties
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Giant Javan fig tree with massive canopy
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spice garden and medicinal plants section
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for picnics and family outings
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Lush Royal Botanical Gardens Peradeniya showing diverse tropical plants and well-maintained pathways"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cultural Shows */}
            <Card>
              <CardHeader>
                <CardTitle>3. Traditional Kandyan Cultural Shows</CardTitle>
                <CardDescription>Experience authentic Sri Lankan performing arts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Colorful Kandyan dancers performing traditional fire dance in elaborate costumes"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Don't miss the spectacular Kandyan cultural shows featuring traditional dances, fire walking, and
                      drumming. These performances showcase centuries-old traditions passed down through generations.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Popular Venues:</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Kandy Cultural Centre (7:00 PM daily)</li>
                        <li>• Red Cross Society (6:30 PM daily)</li>
                        <li>• YMBA Cultural Hall (7:00 PM daily)</li>
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

        {/* Do's and Don'ts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Do's and Don'ts for Kandy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DO's - Respect the Sacred City
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Dress modestly:</strong> Cover shoulders and knees, especially at temples
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Remove shoes:</strong> Always remove footwear before entering temples
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Attend a puja:</strong> Experience the spiritual atmosphere during prayer times
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Try local food:</strong> Sample authentic Kandyan cuisine
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Learn basic Sinhala:</strong> "Ayubowan" (hello) goes a long way
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DON'Ts - Avoid Cultural Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't point feet:</strong> Never point your feet toward Buddha statues
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't turn your back:</strong> Avoid turning your back to Buddha statues
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't wear hats:</strong> Remove hats and caps inside temples
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't be loud:</strong> Maintain respectful silence in sacred areas
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don't rush:</strong> Take time to appreciate the spiritual atmosphere
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where to Stay in Kandy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Budget Options</CardTitle>
                <CardDescription>$10-30 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Backpacker hostels in city center</li>
                  <li>• Guesthouses near the lake</li>
                  <li>• Family-run homestays</li>
                  <li>• Shared dormitories</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Mid-Range Hotels</CardTitle>
                <CardDescription>$30-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Boutique hotels with lake views</li>
                  <li>• Colonial-style accommodations</li>
                  <li>• Hotels near Temple of Tooth</li>
                  <li>• Properties with cultural programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Luxury Resorts</CardTitle>
                <CardDescription>$80+ per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heritage hotels with history</li>
                  <li>• Hilltop resorts with panoramic views</li>
                  <li>• Spa resorts in the hills</li>
                  <li>• Premium service and amenities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Around Kandy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Transportation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tuk-Tuks (Three-wheelers)</h4>
                  <p className="text-sm text-muted-foreground">
                    Most convenient for short distances. Always negotiate the fare beforehand.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Buses</h4>
                  <p className="text-sm text-muted-foreground">
                    Cheapest option but can be crowded. Good for reaching nearby attractions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Walking</h4>
                  <p className="text-sm text-muted-foreground">
                    City center is walkable. Perfect for exploring the lake area and main temples.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Taxi/Uber</h4>
                  <p className="text-sm text-muted-foreground">
                    Available but limited. Book through hotels for reliable service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting to Kandy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    3 hours by train (scenic route) or 2.5 hours by car/bus
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Airport</h4>
                  <p className="text-sm text-muted-foreground">3.5 hours by car. Pre-arranged transfers recommended.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Train Journey</h4>
                  <p className="text-sm text-muted-foreground">
                    One of the world's most scenic train rides through tea plantations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Food Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Kandyan Cuisine & Where to Eat</h2>

          {/* Ad Space */}
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Must-Try Kandyan Dishes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">Rice & Curry</h4>
                  <p className="text-sm text-muted-foreground">
                    Traditional Sri Lankan meal with multiple curries, sambols, and papadams
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Kiribath</h4>
                  <p className="text-sm text-muted-foreground">
                    Coconut milk rice, often served during special occasions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Kandyan Sweets</h4>
                  <p className="text-sm text-muted-foreground">Traditional desserts like kokis, aluwa, and bibikkan</p>
                </div>
                <div>
                  <h4 className="font-semibold">Ceylon Tea</h4>
                  <p className="text-sm text-muted-foreground">World-famous tea grown in the surrounding hills</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Restaurants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">The Empire Cafe</h4>
                  <p className="text-sm text-muted-foreground">Colonial-style cafe with great views and local dishes</p>
                </div>
                <div>
                  <h4 className="font-semibold">Balaji Dosai</h4>
                  <p className="text-sm text-muted-foreground">Authentic South Indian vegetarian food</p>
                </div>
                <div>
                  <h4 className="font-semibold">Kandy Muslim Hotel</h4>
                  <p className="text-sm text-muted-foreground">Famous for biriyani and local Muslim cuisine</p>
                </div>
                <div>
                  <h4 className="font-semibold">Slightly Chilled Lounge Bar</h4>
                  <p className="text-sm text-muted-foreground">Rooftop dining with lake views</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Your Kandy Adventure Awaits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Kandy is more than just a destination – it's a spiritual journey that connects you with the soul of Sri
                Lanka. From the sacred Temple of the Tooth to the serene lake walks, every moment in this cultural
                capital offers something magical.
              </p>
              <p className="text-muted-foreground mb-4">
                Take time to immerse yourself in the local culture, attend a traditional dance performance, and don't
                rush through the temples. The beauty of Kandy lies not just in its sights, but in the peaceful
                atmosphere that has made it a pilgrimage destination for centuries.
              </p>
              <p className="text-muted-foreground font-medium">
                May your journey to Kandy bring you peace, wonder, and unforgettable memories! 🙏✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
