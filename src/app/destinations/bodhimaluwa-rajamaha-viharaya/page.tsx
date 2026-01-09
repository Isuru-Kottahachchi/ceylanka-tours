"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Heart, TreePine, Gem } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function BodhimaluwaTempleGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Beautiful view of Bodhimaluwa Raja Maha Viharaya temple with ancient dagoba and peaceful surroundings in Bentota"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bodhimaluwa Raja Maha Viharaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Ancient Temple with Living History in Bentota</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
              <MapPin className="w-4 h-4 mr-1" />
              Bentota, Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Sacred Bodhi Tree
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-purple-600/80 text-white border-purple-500">
              <Gem className="w-4 h-4 mr-1" />
              Ancient Relics
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Discover Bodhimaluwa: A Temple Where Faith Meets History
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Hidden in the peaceful town of Bentota stands Bodhimaluwa Raja Maha Viharaya, one of Sri Lanka's most spiritually significant temples. This ancient temple has served as a beacon of Buddhist faith and cultural heritage in the southern coastal region for centuries.
            </p>
            <p className="text-lg">
              What makes this temple truly special is not just its age, but the living traditions that continue here today. From the ancient Bodhi tree that has witnessed centuries of prayers to the sacred relics housed within its walls, every corner of this temple tells a story of devotion, history, and spiritual awakening.
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
                      <strong>Location:</strong> Bentota, 65km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Age:</strong> Centuries-old ancient temple
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Famous for:</strong> Sacred Bodhi Tree & Ancient Relics
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Visit Time:</strong> 1-2 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Best for:</strong> Prayer, Meditation, History
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gem className="w-4 h-4 text-indigo-500" />
                    <span>
                      <strong>Special:</strong> Living Buddhist Temple
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
                  How to Get to Bodhimaluwa Temple
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Colombo (Recommended)</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 65km (40 miles)</li>
                      <li>• <strong>Time:</strong> 1.5 hours by car</li>
                      <li>• <strong>Route:</strong> Colombo → Kalutara → Bentota</li>
                      <li>• <strong>Cost:</strong> Rs. 3000-4000 by taxi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Galle</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 35km north</li>
                      <li>• <strong>Time:</strong> 45 minutes</li>
                      <li>• <strong>Transport:</strong> Bus or taxi available</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Tip:</strong> Combine with Bentota Beach visit for a perfect day trip mixing culture and relaxation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* What Makes Bodhimaluwa Special */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Makes Bodhimaluwa Temple Special</h2>
          <div className="grid md:grid-cols-1 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="w-5 h-5 text-green-500" />
                  The Sacred Bodhi Tree
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Ancient Bodhi tree with prayer flags and offerings", title: "Sacred Bodhi Tree", caption: "The heart of temple worship" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Devotees praying under the Bodhi tree", title: "Daily Prayers", caption: "Continuous worship for centuries" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Colorful prayer flags hanging from Bodhi branches", title: "Prayer Flags", caption: "Traditional Buddhist offerings" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The centerpiece of Bodhimaluwa Temple is its magnificent ancient Bodhi tree. This sacred tree provides a peaceful canopy for meditation and worship, serving as a living symbol of Buddhist heritage and spiritual continuity.
                    </p>
                    <h4 className="font-semibold mb-2">Why It's Sacred:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Ancient sacred tree revered by generations</li>
                      <li>• Witness to centuries of prayers and devotion</li>
                      <li>• Natural shelter for meditation and worship</li>
                      <li>• Symbol of eternal Buddhist teachings</li>
                      <li>• Center of all temple ceremonies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gem className="w-5 h-5 text-purple-500" />
                  Ancient Relics and Sacred Objects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Bodhimaluwa Temple houses several important Buddhist relics and sacred objects that have been preserved for centuries. These treasures make the temple a significant pilgrimage site for Buddhists from around the world.
                    </p>
                    <h4 className="font-semibold mb-2">Sacred Treasures:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Ancient Buddha statues from different periods</li>
                      <li>• Sacred Buddhist artifacts and relics</li>
                      <li>• Traditional ritual objects</li>
                      <li>• Historical inscriptions and carvings</li>
                    </ul>
                  </div>
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Ancient Buddha statue in temple shrine room", title: "Ancient Buddha", caption: "Centuries-old sacred statue" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Traditional ritual objects and offerings", title: "Sacred Objects", caption: "Traditional Buddhist artifacts" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Ancient stone inscriptions with Buddhist teachings", title: "Stone Inscriptions", caption: "Historical Buddhist teachings" }
                      ]}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-orange-500" />
                  Living Temple Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <ImageCarousel 
                      images={[
                        { src: "/placeholder.svg?height=300&width=400", alt: "Local devotees participating in daily prayers", title: "Daily Devotion", caption: "Active local community worship" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Children learning Buddhist teachings", title: "Teaching Tradition", caption: "Passing wisdom to new generations" },
                        { src: "/placeholder.svg?height=300&width=400", alt: "Festival celebrations at the temple", title: "Festival Time", caption: "Community celebrations and traditions" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Unlike many tourist temples, Bodhimaluwa remains a living, breathing center of Buddhist practice. Local families have been coming here for generations, creating an authentic spiritual atmosphere that visitors can truly experience.
                    </p>
                    <h4 className="font-semibold mb-2">Community Life:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Daily morning and evening prayers</li>
                      <li>• Weekly Dhamma teachings for children</li>
                      <li>• Full moon day special ceremonies</li>
                      <li>• Festival celebrations throughout the year</li>
                      <li>• Community service and charity work</li>
                    </ul>
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
                Best Times to Visit Bodhimaluwa Temple
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300">Daily Visit Times</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Early Morning (6:00 - 8:00 AM)</h5>
                      <p className="text-sm text-muted-foreground">Join local devotees for morning prayers. Peaceful atmosphere with soft lighting and chanting.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Late Afternoon (4:00 - 6:00 PM)</h5>
                      <p className="text-sm text-muted-foreground">Perfect for meditation under the Bodhi tree. Golden hour lighting creates beautiful photos.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300">Special Occasions</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Full Moon Days (Poya)</h5>
                      <p className="text-sm text-muted-foreground">Most sacred time for Buddhist worship. Special ceremonies and increased devotee participation.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-700 dark:text-amber-300">Vesak Festival (May)</h5>
                      <p className="text-sm text-muted-foreground">Biggest celebration of the year. Colorful decorations and special programs throughout the day.</p>
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
                Respectful Temple Visit Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Dress Code & Behavior</h4>
                  <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                    <li>• Wear modest clothing covering shoulders and knees</li>
                    <li>• Remove shoes before entering temple buildings</li>
                    <li>• Keep voices low and peaceful</li>
                    <li>• Show respect to monks and devotees</li>
                    <li>• Ask permission before photographing people</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">What to Bring</h4>
                  <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                    <li>• White lotus flowers for offerings (optional)</li>
                    <li>• Small donation for temple maintenance</li>
                    <li>• Water bottle for hot weather</li>
                    <li>• Camera for capturing peaceful moments</li>
                    <li>• Open heart and respectful mind</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>🙏 Remember:</strong> This is an active place of worship. Your respectful behavior helps preserve the sacred atmosphere for everyone.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What to Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Experience at Bodhimaluwa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <TreePine className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Meditation Under Bodhi Tree</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Sit quietly under the ancient Bodhi tree and feel the peace that has touched thousands of hearts over the centuries.
                </p>
                <Badge variant="outline" className="text-blue-600">🧘 Spiritual Experience</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Join Daily Prayers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Participate in morning or evening prayers with the local community and experience authentic Buddhist worship.
                </p>
                <Badge variant="outline" className="text-green-600">🙏 Cultural Immersion</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                    <Gem className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">View Sacred Relics</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Admire ancient Buddha statues and learn about the precious relics that make this temple historically important.
                </p>
                <Badge variant="outline" className="text-purple-600">🏛️ Historical Learning</Badge>
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
                <CardTitle className="text-lg">Bentota Beach</CardTitle>
                <CardDescription>Golden sand and water sports</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Bentotabeach.jpeg"
                  alt="Bentota Beach with golden sand and clear waters"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Relax on beautiful golden beaches just minutes from the temple. Perfect for combining spiritual and leisure experiences.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 2km from temple</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/bentota" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Lunuganga Garden</CardTitle>
                <CardDescription>Geoffrey Bawa's masterpiece</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Lunuganga Garden by Geoffrey Bawa"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Visit the famous garden designed by Sri Lanka's legendary architect Geoffrey Bawa, showcasing tropical modernism.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 5km from temple</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/lunuganga-garden-by-geoffrey-bawa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Galapatha Temple</CardTitle>
                <CardDescription>Sacred relics of Buddha's disciples</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Galapatha Raja Maha Viharaya temple"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Another important Buddhist temple housing sacred relics of Sariputta and Moggallana, Buddha's chief disciples.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 3km from temple</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/galapatha-rajamaha-viharaya" passHref legacyBehavior>
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
                Planning Your Temple Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Best Duration</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Quick Visit:</strong> 30 minutes</li>
                    <li>• <strong>Peaceful Experience:</strong> 1-2 hours</li>
                    <li>• <strong>Full Immersion:</strong> Half day with nearby temples</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">What to Expect</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Free Entry:</strong> Donations welcome</li>
                    <li>• <strong>Peaceful Environment:</strong> Active place of worship</li>
                    <li>• <strong>Local Interaction:</strong> Friendly community</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Combine With</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Bentota Beach:</strong> Relaxation after temple visit</li>
                    <li>• <strong>Other Temples:</strong> Galapatha nearby</li>
                    <li>• <strong>Cultural Sites:</strong> Lunuganga Garden</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Experience Sacred Peace at Bodhimaluwa</h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed mb-6">
                Bodhimaluwa Raja Maha Viharaya offers more than just a temple visit - it provides a window into living Buddhist tradition and Sri Lankan spiritual heritage. Whether you seek peace, cultural understanding, or historical insights, this sacred place welcomes all with open arms.
              </p>
              <div className="flex justify-center">
                <Badge variant="outline" className="text-green-700 border-green-300 bg-white dark:bg-gray-800">
                  <Heart className="w-4 h-4 mr-1" />
                  A Place Where Faith Lives On
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
