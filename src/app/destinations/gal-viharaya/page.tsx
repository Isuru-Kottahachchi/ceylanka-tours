import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Star, Crown, Hammer, Book, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Gal Viharaya Polonnaruwa: Complete Guide 2025 | Rock Temple's Sacred Statues",
  description: "Discover the magnificent Gal Viharaya in Polonnaruwa, featuring four colossal Buddha statues carved from a single granite rock. Learn about their history, symbolism, and artistic significance in ancient Sri Lanka.",
  keywords: "Gal Viharaya, Polonnaruwa rock temple, Buddha statues Sri Lanka, ancient rock carvings, Cultural Triangle, Buddhist heritage sites, Sri Lanka archaeology",
  authors: [{ name: "Ancient Heritage Explorer" }],
  openGraph: {
    title: "Gal Viharaya Polonnaruwa: Sacred Rock Temple Guide 2025",
    description: "Experience the masterpiece of ancient Sri Lankan rock carving art featuring four magnificent Buddha statues",
    images: ["/Galviharaya.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gal Viharaya: Ancient Rock Temple of Polonnaruwa",
    description: "Explore the magnificent Buddha statues carved from solid granite rock",
    images: ["/Galviharaya.jpeg"],
  },
}

export default function GalViharayaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Galviharaya3.jpeg"
          alt="Magnificent rock-cut Buddha statues at Gal Viharaya showing the seated, standing and reclining figures"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Gal Viharaya</h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            The Masterpiece of Ancient Sri Lankan Rock Carving
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Polonnaruwa, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              12th Century AD
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Crown className="w-4 h-4 mr-1" />
              Built by King Parakramabahu I
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Gal Viharaya: A Marvel of Buddhist Rock Art</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Gal Viharaya, meaning &quot;Rock Temple&quot; in Sinhala, stands as one of the most remarkable achievements of ancient
              Sri Lankan sculptural art. Created during the reign of King Parakramabahu I (1153-1186 AD), this masterpiece 
              features four colossal Buddha statues carved with extraordinary precision from a single granite rock face.
            </p>
            <p className="text-lg mb-4">
              Each statue represents different aspects of the Buddha&apos;s life and teachings, showcasing not only the 
              spiritual devotion of ancient Sri Lankans but also their exceptional mastery over stone carving. The 
              site continues to be an important place of worship and stands as a testament to the golden age of 
              Polonnaruwa&apos;s artistic achievement.
            </p>
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-400 dark:border-amber-600 rounded-r-lg">
              <div className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Respectful Visiting Guidelines</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                    <strong>Sacred Space:</strong> This is an active Buddhist temple. Please maintain silence near the statues 
                    and dress modestly, covering shoulders and knees.
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    <strong>Photography:</strong> Photography is allowed but be mindful not to pose disrespectfully with 
                    the Buddha statues. Remove shoes when approaching the statues on the stone platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts & How to Get There */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Facts */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Gal Viharaya Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span><strong>Period:</strong> 12th century AD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-purple-500" />
                      <span><strong>Built by:</strong> King Parakramabahu I</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Hammer className="w-4 h-4 text-green-500" />
                      <span><strong>Construction:</strong> Carved from single granite rock</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="w-4 h-4 text-red-500" />
                      <span><strong>Features:</strong> Four Buddha statues</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span><strong>Location:</strong> Northern Polonnaruwa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-500" />
                      <span><strong>Visit Duration:</strong> 1-2 hours</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <h5 className="font-medium text-blue-800 dark:text-blue-200">Statue Dimensions</h5>
                      <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
                        <li>• Seated Buddha: 4.6 meters high</li>
                        <li>• Standing Buddha: 7 meters high</li>
                        <li>• Reclining Buddha: 14 meters long</li>
                        <li>• Meditating Buddha: 4.3 meters high</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Get There */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How to Visit Gal Viharaya</h2>
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Part of Polonnaruwa Tour</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Gal Viharaya is included in the main Polonnaruwa archaeological site ticket.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Entrance Fee:</strong> $25 USD (Archaeological site ticket)</li>
                        <li>• <strong>Hours:</strong> 7:00 AM - 6:00 PM</li>
                        <li>• <strong>Best Time:</strong> Early morning or late afternoon</li>
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Getting Around</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 10 minutes by bicycle from Polonnaruwa Museum</li>
                        <li>• Part of the main archaeological site circuit</li>
                        <li>• Bicycles available for rent near site entrance</li>
                        <li>• Tuk-tuks available for transportation</li>
                      </ul>
                    </div>

                    <div className="mt-3 p-3 bg-orange-100 dark:bg-orange-800/30 rounded-md border-l-4 border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> Book a guided tour for detailed explanations of the statues&apos; 
                        symbolism and historical significance. Guides can enhance your understanding of Buddhist 
                        iconography and ancient sculptural techniques.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 77 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🏛️</span>
                          <Link href="/cultural-tours" className="underline hover:text-orange-600 dark:hover:text-orange-300">
                            <strong>Cultural Tours Available</strong> - Click for details & booking
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Four Buddha Statues */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Sacred Buddha Statues of Gal Viharaya</h2>

          <div className="space-y-8">
            {/* Seated Buddha */}
            <Card>
              <CardHeader>
                <CardTitle>1. The Seated Buddha (Samadhi Statue)</CardTitle>
                <CardDescription>Dhyana Mudra: The Meditation Posture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Galviharaya5.jpeg"
                    alt="Seated Buddha statue at Gal Viharaya showing meditation posture and detailed carving work"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The first statue depicts Buddha in deep meditation, seated in the classic dhyana mudra position. 
                      This magnificent 4.6-meter high statue is carved into a natural cavern in the rock face, creating 
                      an atmosphere of serene contemplation. The statue exemplifies the highest achievements of 
                      Polonnaruwa period sculpture.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Artistic Features:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Perfectly proportioned facial features</li>
                          <li>• Detailed robe folds and crown</li>
                          <li>• Smooth, polished granite surface</li>
                          <li>• Natural rock canopy protection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Symbolic Meaning:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Represents deep meditation state</li>
                          <li>• Shows path to enlightenment</li>
                          <li>• Emphasizes inner peace</li>
                          <li>• Teaches mindfulness practice</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Standing Buddha */}
            <Card>
              <CardHeader>
                <CardTitle>2. The Standing Buddha</CardTitle>
                <CardDescription>Unique Tristhana Posture with Crossed Arms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The 7-meter tall standing Buddha statue is notable for its unique pose with crossed arms, a 
                      feature that has generated much scholarly discussion. This exceptional statue demonstrates 
                      the sophistication of Polonnaruwa sculptural art, particularly in its ability to convey 
                      subtle emotional expressions through stone.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Distinctive Features:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Unique crossed arms position</li>
                          <li>• Subtle facial expression</li>
                          <li>• Detailed robe carving</li>
                          <li>• Perfect anatomical proportions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Historical Significance:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Rare artistic interpretation</li>
                          <li>• Influence on later Buddhist art</li>
                          <li>• Example of innovative design</li>
                          <li>• Shows artistic freedom in ancient times</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/Galviharaya4.jpeg"
                    alt="Standing Buddha statue at Gal Viharaya with unique crossed arms pose"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Reclining Buddha */}
            <Card>
              <CardHeader>
                <CardTitle>3. The Reclining Buddha</CardTitle>
                <CardDescription>Parinirvana Posture: Buddha&apos;s Final Liberation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Galviharaya3.jpeg"
                    alt="Reclining Buddha statue at Gal Viharaya showing the moment of final nirvana"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The massive 14-meter long reclining Buddha depicts the moment of Buddha&apos;s parinirvana (final
                      release from the cycle of rebirth). This statue is celebrated for its serene expression and 
                      the flowing lines of its robe, demonstrating extraordinary skill in transforming hard granite 
                      into an image of peaceful transition.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Artistic Excellence:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Perfectly balanced composition</li>
                          <li>• Intricate robe detail work</li>
                          <li>• Subtle facial expression</li>
                          <li>• Pillow carving technique</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Religious Significance:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Represents final enlightenment</li>
                          <li>• Teaches impermanence concept</li>
                          <li>• Shows peaceful departure</li>
                          <li>• Inspires spiritual reflection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cave Temple */}
            <Card>
              <CardHeader>
                <CardTitle>4. The Cave Temple (Vijjadhara Guha)</CardTitle>
                <CardDescription>Ancient Meditation and Worship Space</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Adjacent to the Buddha statues lies the cave temple, believed to be used by monks for 
                      meditation and religious ceremonies. This space showcases ancient architectural ingenuity 
                      in creating spiritual spaces within natural rock formations.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Cave Features:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Natural rock shelter</li>
                          <li>• Ancient drip ledges</li>
                          <li>• Meditation platforms</li>
                          <li>• Original stone inscriptions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Historical Use:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Monk residence</li>
                          <li>• Meditation center</li>
                          <li>• Religious ceremonies</li>
                          <li>• Buddhist education</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/GalviharayaCave.jpg"
                    alt="Ancient cave temple at Gal Viharaya showing meditation space and architectural features"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conservation and Present State */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conservation and Present Importance</h2>
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">Preserving Ancient Buddhist Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Today, Gal Viharaya stands as one of the best-preserved ancient Buddhist sites in Sri Lanka. 
                  Continuous conservation efforts focus on protecting these masterpieces from natural weathering 
                  while maintaining their spiritual significance for modern Buddhist practitioners.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Conservation Measures:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Regular monitoring of rock stability</li>
                      <li>• Protection from weather elements</li>
                      <li>• Scientific cleaning methods</li>
                      <li>• Visitor impact management</li>
                      <li>• Documentation and research</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Modern Significance:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Active Buddhist worship site</li>
                      <li>• Cultural education center</li>
                      <li>• Archaeological research location</li>
                      <li>• Tourist attraction</li>
                      <li>• National heritage monument</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Tips and Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Visitor Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-800 dark:text-blue-200">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best Time to Visit:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Early morning (7-9 AM): Best light for photos</li>
                      <li>• Late afternoon (3-5 PM): Cooler temperatures</li>
                      <li>• Avoid midday heat (11 AM - 2 PM)</li>
                      <li>• Full moon days: Special ceremonies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What to Bring:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Water bottle and sun protection</li>
                      <li>• Modest clothing (knees/shoulders covered)</li>
                      <li>• Camera (photography allowed)</li>
                      <li>• Small towel for feet (hot ground)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-200">Cultural Etiquette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Respectful Behavior:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Remove shoes before sacred areas</li>
                      <li>• Avoid pointing feet at Buddha statues</li>
                      <li>• Maintain quiet near meditation areas</li>
                      <li>• No disrespectful poses for photos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Photography Guidelines:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• No flash photography near statues</li>
                      <li>• Respect &quot;no photo&quot; signs</li>
                      <li>• Avoid disturbing worshippers</li>
                      <li>• Ask permission for close-up shots</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Other Attractions Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/destinations/polonnaruwa-vatadageya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Polonnaruwa Vatadageya</CardTitle>
                  <CardDescription>Circular Relic House</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Watadageya.jpg"
                    alt="Ancient Vatadageya circular relic house with stone pillars"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Unique circular shrine housing sacred relics, featuring beautiful moonstones and guard stones.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>5 minutes walk</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/rankoth-vehera" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Rankoth Vehera</CardTitle>
                  <CardDescription>Massive Buddhist Stupa</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Rankothvehera.jpeg"
                    alt="Massive Rankoth Vehera stupa showing its impressive scale"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    The largest stupa in Polonnaruwa, showing architectural grandeur of ancient Sri Lanka.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>10 minutes walk</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/lankatilaka" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Lankatilaka Temple</CardTitle>
                  <CardDescription>Towering Buddha Shrine</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Lankatilaka.jpeg"
                    alt="Impressive walls of Lankatilaka temple with Buddha statue"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Impressive brick-built temple with towering walls and colossal Buddha statue.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>15 minutes walk</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
