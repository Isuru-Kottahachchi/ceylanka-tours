import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Star, Waves, Sun, Camera, Users, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blue Beach Sri Lanka: Complete Guide 2025 | Snorkeling, Relaxation & Hidden Gem",
  description:
    "Discover Blue Beach, Sri Lanka's hidden coastal paradise. Explore crystal-clear waters, snorkeling, family-friendly sands, and local culture in this detailed travel guide.",
  keywords:
    "Blue Beach Sri Lanka, snorkeling, hidden beach, Sri Lanka beaches, southern coast, family beach, crystal water, travel guide",
  openGraph: {
    title: "Blue Beach Sri Lanka: Complete Guide 2025",
    description: "Your essential guide to Blue Beach, Sri Lanka's hidden gem for snorkeling and relaxation.",
    type: "article",
    images: ["/blue-beach-hero.jpg"],
  },
}

export default function BlueBeachGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Blue-beach.jpg"
          alt="Crystal clear waters and golden sands of Blue Beach, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blue Beach</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka’s Hidden Blue-Water Escape</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Waves className="w-4 h-4 mr-1" />
              Calm Blue Waters
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Sun className="w-4 h-4 mr-1" />
              Family Friendly
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Quick Facts</a>
          <a href="#highlights" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Highlights</a>
          <a href="#snorkeling" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Snorkeling</a>
          <a href="#tips" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Travel Tips</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-24" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Blue Beach: Sri Lanka’s Secret Coastal Gem</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Tucked away on Sri Lanka’s southern coast, Blue Beach is a tranquil haven where turquoise waters meet soft golden sands. Far from the crowds, this hidden beach is beloved by locals for its calm, shallow lagoon, making it ideal for families, swimmers, and anyone seeking a peaceful escape.
            </p>
            <p className="text-lg">
              The beach’s name comes from the striking clarity and color of its water, which glows a brilliant blue under the tropical sun. Here, you’ll find gentle waves, swaying palms, and a laid-back village atmosphere that invites you to slow down and savor the moment.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12 scroll-mt-24" id="quick-facts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-500" />
                Essential Blue Beach Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Southern Coast, near Nilwella
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Water:</strong> Calm, crystal-clear blue
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Season:</strong> December to April
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Must-See:</strong> Blue lagoon, coral reef
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Vibe:</strong> Quiet, local, family-friendly
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 1-2 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Highlights */}
        <section className="mb-12 scroll-mt-24" id="highlights">
          <h2 className="text-3xl font-bold mb-6">Top Highlights of Blue Beach</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Blue Lagoon</CardTitle>
                <CardDescription>Natural swimming pool with gentle waves (Private Island)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/blue-beach-lagoon.jpg"
                    alt="Blue Beach lagoon with calm blue water and children swimming"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The lagoon at Blue Beach is protected by a natural reef, creating a safe, shallow pool perfect for swimming, floating, and relaxing. The water is so clear you can see colorful fish darting between the rocks. <strong>Blue Beach is a private island</strong>, so please respect the tranquility and privacy of the area.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Ideal for families and beginner swimmers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Calm even when other beaches are rough
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Great for floating and sunbathing
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coral Reef & Snorkeling</CardTitle>
                <CardDescription>Discover vibrant marine life just offshore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just a few meters from the sand, Blue Beach’s coral reef teems with tropical fish, sea urchins, and the occasional sea turtle. Bring your own snorkel or rent one from a local guesthouse for an unforgettable underwater adventure.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Snorkeling for all skill levels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        See parrotfish, angelfish, and more
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Best visibility December–April
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/blue-beach-snorkeling.jpg"
                    alt="Snorkeler exploring coral reef at Blue Beach, Sri Lanka"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Camping Experience</CardTitle>
                <CardDescription>Unforgettable nights under the stars</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/blue-beach-camping.jpg"
                    alt="Tents set up on Blue Beach with a campfire and starry sky"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      For those seeking a true escape, Blue Beach offers a unique camping experience. Set up your tent on the soft sand, fall asleep to the sound of gentle waves, and wake to a sunrise over the Indian Ocean. Campfires, stargazing, and the privacy of a secluded island make this an unforgettable adventure. <strong>Note: As Blue Beach is a private island, always obtain permission from the owners or local caretakers before camping overnight.</strong>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Camp right on the sand with ocean views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Stargazing and campfires permitted (with care)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        Bring your own gear and leave no trace
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Snorkeling Section */}
        <section className="mb-12 scroll-mt-24" id="snorkeling">
          <h2 className="text-3xl font-bold mb-6">Snorkeling at Blue Beach</h2>
          <Card>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Blue Beach is one of the best spots on the south coast for easy, safe snorkeling. The reef is close to shore, and the water is usually calm and clear. Early morning offers the best visibility and the chance to spot more marine life.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Bring your own mask and fins, or rent from a local guesthouse</li>
                <li>Watch for sea urchins and avoid stepping on coral</li>
                <li>Respect marine life—look, don’t touch</li>
                <li>Best months: December to April</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section className="mb-12 scroll-mt-24" id="tips">
          <h2 className="text-3xl font-bold mb-6">Travel Tips for Blue Beach</h2>
          <Card>
            <CardContent>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Arrive early to enjoy the quietest hours</li>
                <li>There are a few small cafes and guesthouses nearby for snacks and shade</li>
                <li>Bring sun protection—shade is limited on the sand</li>
                <li>Weekdays are less crowded than weekends</li>
                <li>Support local businesses by renting gear or buying refreshments</li>
                <li><strong>Blue Beach is a private island</strong>—always respect the privacy of owners and other guests</li>
                <li>If camping, obtain permission and leave no trace</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final Inspiration */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Discover the Magic of Blue Beach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Blue Beach is a place to unwind, explore, and reconnect with the simple joys of sun, sea, and sand. Whether you’re snorkeling with tropical fish, floating in the lagoon, or simply soaking up the peaceful atmosphere, this hidden gem offers a slice of Sri Lankan paradise away from the crowds.
              </p>
              <p className="text-muted-foreground font-medium">
                Plan your Blue Beach escape and experience the best of Sri Lanka’s southern coast.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
