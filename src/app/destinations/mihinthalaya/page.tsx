import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Mihintale Sri Lanka: Complete Guide 2025 | Cradle of Buddhism & Sacred Mountain",
  description:
    "Explore Mihintale, where Buddhism was first introduced to Sri Lanka. Complete guide to the sacred mountain, ancient stupas, and Arahat Mahinda's meeting place.",
  keywords:
    "Mihintale, Buddhism introduction Sri Lanka, Arahat Mahinda, King Devanampiyatissa, sacred mountain, Buddhist pilgrimage",
  openGraph: {
    title: "Mihintale: Complete Guide 2025",
    description: "Your ultimate guide to the birthplace of Buddhism in Sri Lanka",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function MihintaleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mihinthale.jpg"
          alt="Sacred Mihintale mountain with white stupas and ancient stone steps leading to the summit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mihintale</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">The Cradle of Buddhism in Sri Lanka</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Near Anuradhapura
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              Sacred Mountain
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              247 BC
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Mihintale: Where Buddhism Began in Sri Lanka
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into the most important place in Sri Lankan Buddhist history! Mihintale is the sacred mountain where
              Buddhism was first brought to Sri Lanka over 2,200 years ago. This is where Arahat Mahinda, the son of the
              great Indian Emperor Ashoka, met King Devanampiyatissa and introduced the teachings of Lord Buddha to the
              island.
            </p>
            <p className="text-lg">
              Climbing the 1,840 ancient stone steps to the top of Mihintale is like taking a journey through time.
              Along the way, you&apos;ll see beautiful stupas, ancient ruins, and peaceful meditation spots. The mountain
              offers amazing views and a spiritual atmosphere that has inspired pilgrims for over 22 centuries. Every
              full moon day, thousands of people climb these steps to pay their respects at this holy place.
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
                Essential Mihintale Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Historic Date:</strong> 247 BC
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Stone Steps:</strong> 1,840 ancient steps
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Distance:</strong> 13 km from Anuradhapura
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Key Figures:</strong> Arahat Mahinda & King Devanampiyatissa
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Significance:</strong> Buddhism&apos;s arrival in Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Climb Time:</strong> 1-2 hours to summit
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Great Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Amazing Story of Buddhism&apos;s Arrival</h2>

          <div className="space-y-8">
            {/* The Historic Meeting */}
            <Card>
              <CardHeader>
                <CardTitle>The Historic Meeting of 247 BC - (Mahindagamanaya)</CardTitle>
                <CardDescription>When Arahat Mahinda met King Devanampiyatissa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Mihinthale.jpg"
                    alt="Artistic representation of the historic meeting between Arahat Mahinda and King Devanampiyatissa"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Over 2,200 years ago, King Devanampiyatissa was hunting deer on this mountain when he met Arahat
                      Mahinda, a Buddhist monk from India. Mahinda was the son of Emperor Ashoka and had come to Sri
                      Lanka to share Buddha&apos;s teachings. Their meeting changed the history of Sri Lanka forever,
                      bringing Buddhism to the island.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        King was hunting when they met
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Mahinda was Emperor Ashoka&apos;s son
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Changed Sri Lankan history forever
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beginning of Buddhism in Sri Lanka
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Mango Test */}
            <Card>
              <CardHeader>
                <CardTitle>The Famous Mango Test</CardTitle>
                <CardDescription>How Mahinda tested the king&apos;s wisdom</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Before teaching Buddhism, Mahinda wanted to make sure the king was wise enough to understand
                      Buddha&apos;s teachings. He asked the king clever questions about a mango tree. The king answered so
                      well that Mahinda knew he was ready to learn about Buddhism. This famous conversation is still
                      remembered today!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Test of the king&apos;s intelligence
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Questions about a mango tree
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        King proved his wisdom
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Famous conversation in history
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Artistic representation of the mango tree conversation between Mahinda and the king"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sacred Sites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Sites on the Mountain</h2>

          <div className="space-y-8">
            {/* Mahaseya Dagoba */}
            <Card>
              <CardHeader>
                <CardTitle>Mahaseya Dagoba</CardTitle>
                <CardDescription>The main stupa at the summit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Mahaseya Dagoba white stupa at the summit of Mihintale with pilgrims"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      At the top of the mountain stands the beautiful white Mahaseya Dagoba. This stupa is believed to
                      contain hair relics of Lord Buddha. The climb to reach it is challenging but the peaceful
                      atmosphere and amazing views make it worth every step. Many pilgrims meditate here and feel a deep
                      sense of spiritual connection.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Contains Buddha&apos;s hair relics
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Located at mountain summit
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Panoramic views of countryside
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect for meditation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aradhana Gala */}
            <Card>
              <CardHeader>
                <CardTitle>Aradhana Gala (Meditation Rock)</CardTitle>
                <CardDescription>Where Arahat Mahinda meditated</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This large flat rock is where Arahat Mahinda used to sit and meditate. It&apos;s a very peaceful spot
                      with beautiful views of the surrounding area. Many visitors come here to sit quietly and think,
                      just like Mahinda did over 2,000 years ago. The rock has a special spiritual energy that makes
                      people feel calm and peaceful.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Mahinda&apos;s meditation spot
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Flat rock perfect for sitting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful panoramic views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful spiritual atmosphere
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Aradhana Gala meditation rock showing the flat stone where Arahat Mahinda meditated"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Ambasthala Dagoba */}
            <Card>
              <CardHeader>
                <CardTitle>Ambasthala Dagoba</CardTitle>
                <CardDescription>Built at the spot of the historic meeting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ambasthala Dagoba built at the exact spot where Mahinda met King Devanampiyatissa"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This special stupa marks the exact spot where Arahat Mahinda first met King Devanampiyatissa.
                      &quot;Ambasthala&quot; means &quot;mango place&quot; in the ancient language, remembering the famous mango tree
                      conversation. Standing here, you&apos;re at the very place where Buddhism began in Sri Lanka!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Marks the historic meeting spot
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        &quot;Ambasthala&quot; means mango place
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Where Buddhism began in Sri Lanka
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Very significant historical site
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

        {/* The Climb Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Sacred Climb Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">The 1,840 Stone Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ancient Craftsmanship</h4>
                  <p className="text-sm text-muted-foreground">
                    Each step was carefully carved from stone over 2,000 years ago and is still in perfect condition
                    today.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Gradual Ascent</h4>
                  <p className="text-sm text-muted-foreground">
                    The steps are designed to make the climb manageable, with rest areas and beautiful views along the
                    way.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spiritual Journey</h4>
                  <p className="text-sm text-muted-foreground">
                    Each step brings you closer to the sacred summit and deeper into the spiritual atmosphere.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">What You&apos;ll See Along the Way</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ancient Ruins</h4>
                  <p className="text-sm text-muted-foreground">
                    Remains of old monasteries, meditation halls, and living quarters of ancient monks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Beautiful Views</h4>
                  <p className="text-sm text-muted-foreground">
                    Panoramic views of the countryside, ancient cities, and other sacred mountains.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wildlife</h4>
                  <p className="text-sm text-muted-foreground">
                    Monkeys, colorful birds, and butterflies that call this sacred mountain home.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Visit Mihintale</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Pilgrimage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: $8 USD</li>
                    <li>• Foreign children: $4 USD</li>
                    <li>• Local visitors: Rs. 50</li>
                    <li>• Free on full moon days for worship</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Climb</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Early morning (5:30-7:00 AM)</li>
                    <li>• Late afternoon (4:00-6:00 PM)</li>
                    <li>• Full moon days (special ceremonies)</li>
                    <li>• Avoid midday heat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 13 km from Anuradhapura</li>
                    <li>• Bus service available</li>
                    <li>• Tuk-tuk or taxi ride</li>
                    <li>• Private vehicle parking available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Climbing Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comfortable walking shoes</li>
                    <li>• Water bottles (very important!)</li>
                    <li>• Hat and sunscreen</li>
                    <li>• Light snacks for energy</li>
                    <li>• Camera for memories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Climbing Advice</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Take your time, don&apos;t rush</li>
                    <li>• Rest at the designated areas</li>
                    <li>• Stay hydrated throughout</li>
                    <li>• Be respectful to other pilgrims</li>
                    <li>• Follow the marked path</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Temple Etiquette</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Remove shoes at sacred areas</li>
                    <li>• Dress modestly (cover shoulders/knees)</li>
                    <li>• Speak quietly and respectfully</li>
                    <li>• Don&apos;t point feet toward stupas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Sacred Journey to the Cradle of Buddhism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Climbing Mihintale is more than just a physical journey - it&apos;s a spiritual pilgrimage that connects you
                with the very beginning of Buddhism in Sri Lanka. Every step you take follows the path of countless
                pilgrims who have climbed this sacred mountain for over 2,200 years, all seeking the same peace and
                wisdom that Arahat Mahinda brought to this island.
              </p>
              <p className="text-muted-foreground mb-4">
                When you reach the summit and stand before the Mahaseya Dagoba, take a moment to appreciate the
                incredible history of this place. You&apos;re standing where one of the most important conversations in Sri
                Lankan history took place, and where the spiritual foundation of an entire nation was laid.
              </p>
              <p className="text-muted-foreground font-medium">
                May your pilgrimage to Mihintale bring you the same wisdom and peace that has blessed millions before
                you! 🏔️🙏✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
