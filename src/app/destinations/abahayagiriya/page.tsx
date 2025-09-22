import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Abhayagiriya Stupa Sri Lanka: Complete Guide 2025 | Ancient Monastery & Marvel",
  description:
    "Explore Abhayagiriya, one of Sri Lanka's greatest ancient Buddhist monasteries. Discover its colossal stupa, rich history, and spiritual significance in Anuradhapura.",
  keywords:
    "Abhayagiriya, Abhayagiri Stupa, Anuradhapura, ancient monastery Sri Lanka, Buddhist heritage, UNESCO World Heritage, ancient stupas, Sri Lankan history",
  openGraph: {
    title: "Abhayagiriya: Complete Guide 2025",
    description: "Your essential guide to Sri Lanka's monumental Abhayagiriya stupa and monastery complex.",
    type: "article",
    images: ["/Abhayagiriya.jpg"],
  },
}

export default function AbhayagiriyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Abhayagiriya.jpg"
          alt="Majestic Abhayagiriya stupa rising above ancient ruins in Anuradhapura, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Abhayagiriya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Ancient Monastic Marvel</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura, North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Landmark className="w-4 h-4 mr-1" />
              UNESCO World Heritage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Founded 1st Century BC
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Abhayagiriya: The Monastic Giant</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Journey into the heart of Sri Lanka’s ancient civilization at Abhayagiriya, one of the largest and most influential Buddhist monasteries of the ancient world. Towering above the sacred city of Anuradhapura, the Abhayagiriya stupa once ranked among the tallest monuments on earth, a testament to the island’s spiritual devotion and architectural genius.
            </p>
            <p className="text-lg">
              Founded in the 1st century BC, Abhayagiriya was not just a religious site but a thriving center of learning, attracting monks and scholars from across Asia. Today, its colossal brick stupa, sprawling monastic ruins, and tranquil surroundings invite visitors to explore a legacy of faith, innovation, and cultural exchange that shaped Sri Lankan history for centuries.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Essential Abhayagiriya Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Essential Abhayagiriya Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Founded:</strong> 1st Century BC
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Monastic Community:</strong> 5,000+ monks at its peak
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Stupa Height:</strong> Originally 115m (377ft), now 75m (246ft)
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>
                        <strong>Area:</strong> 200 hectares (494 acres)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>UNESCO Status:</strong> World Heritage (1982)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Visit Duration:</strong> 2–4 hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Abhayagiriya-ruins.jpg"
                      alt="Ruins of Abhayagiriya monastery complex in Anuradhapura"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">A Center of Ancient Innovation</p>
                      <p className="text-sm text-blue-800">
                        Abhayagiriya was a hub of Buddhist scholarship, art, and engineering. Its monks contributed to the spread of Theravada and Mahayana Buddhism, and the site features advanced ancient plumbing, stone carvings, and relic chambers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">Allow 2–4 hours to explore the stupa, museum, and monastic ruins at a relaxed pace.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">December to April (dry season) for comfortable weather. Early morning or late afternoon for the best light and fewer crowds.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Abhayagiriya */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Abhayagiriya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 210km (130 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-4.5 hours</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus/Train</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Anuradhapura → Abhayagiriya</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $3-8 USD (budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Regular services from Colombo</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dress modestly and remove shoes before entering sacred areas</li>
                    <li>• Bring water, sunscreen, and a hat for sun protection</li>
                    <li>• Hire a local guide for deeper historical insights</li>
                    <li>• Combine with a visit to the Abhayagiriya Museum for artifacts and context</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sacred Sites & Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Sites & Highlights</h2>
          <div className="my-6 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
            [Advertisement Space - 300x250 Medium Rectangle]
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Abhayagiriya Stupa</CardTitle>
                <CardDescription>One of the world’s greatest ancient brick monuments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Abhayagiriya-stupa.jpg"
                    alt="Abhayagiriya stupa with ancient brickwork and pilgrims"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Abhayagiriya stupa, built by King Valagamba in the 1st century BC, was once the second tallest structure in the ancient world. Its massive brick dome, now partially restored, rises above the ruins of a vast monastic complex. The stupa enshrines sacred relics and is a revered pilgrimage site for Buddhists worldwide.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient engineering marvel with 90+ million bricks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Center of Buddhist learning and international exchange
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Still an active site for rituals and festivals
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Abhayagiriya Monastery Ruins</CardTitle>
                <CardDescription>Explore the remains of a vast monastic city</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Abhayagiriya-monastery.jpg"
                    alt="Ruins of Abhayagiriya monastery with stone pillars and ancient carvings"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Wander through the atmospheric ruins of meditation halls, image houses, and ancient bathing ponds. The Abhayagiriya complex once housed thousands of monks and was a center for Buddhist art, philosophy, and science.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Intricate moonstones and guardstones at entrances
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient ponds and stone bridges
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Museum nearby with relics and artifacts
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Abhayagiriya Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Abhayagiriya is more than a monument—it's a living testament to Sri Lanka’s spiritual and cultural heritage. Take your time to explore, reflect, and absorb the peaceful atmosphere that has inspired pilgrims for over two millennia.
              </p>
              <p className="text-muted-foreground mb-4">
                Don’t miss the chance to visit the Abhayagiriya Museum for a deeper understanding of the site’s history and significance. Whether you’re a history buff, a spiritual seeker, or a curious traveler, Abhayagiriya offers a journey through time and faith.
              </p>
              <p className="text-muted-foreground font-medium">
                Welcome to Abhayagiriya – where ancient wisdom meets timeless wonder.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}