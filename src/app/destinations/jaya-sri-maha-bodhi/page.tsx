import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Star, Users, AlertTriangle, Heart, TreePine, Book, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { featureFlags } from "@/lib/feature-flags"

export const metadata: Metadata = {
  title: "Jaya Sri Maha Bodhi: Complete Pilgrimage Guide 2026 | Sacred Bo Tree of Anuradhapura",
  description:
    "Discover Jaya Sri Maha Bodhi, the sacred Bo tree in Anuradhapura, Sri Lanka. Complete pilgrimage guide with history, significance, best time to visit, and everything you need to know for a spiritual journey.",
  keywords: "Jaya Sri Maha Bodhi, Bo tree, Anuradhapura, Buddhist pilgrimage, sacred tree, Sri Lanka Buddhism, spiritual journey, ancient Ceylon",
  authors: [{ name: "Spiritual Travel Guide" }],
  openGraph: {
    title: "Jaya Sri Maha Bodhi: Complete Pilgrimage Guide 2026",
    description: "Experience the sacred Bo tree - the oldest human-planted tree in the world with recorded history",
    images: ["/JayaSrimahaBodhi.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaya Sri Maha Bodhi: Complete Pilgrimage Guide 2026",
    description: "Discover the sacred Bo tree of Anuradhapura - a spiritual journey through 2,300 years of history",
  },
}

export default function JayaSriMahaBodhiGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/JayaSrimahaBodhi.jpeg"
          alt="Jaya Sri Maha Bodhi sacred Bo tree in Anuradhapura showing pilgrims and golden railings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jaya Sri Maha Bodhi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            The Sacred Bo Tree - 2,300 Years of Spiritual Heritage
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Oldest recorded human-planted tree
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              288 BC - Present
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Heart className="w-4 h-4 mr-1" />
              Pilgrimage Destination
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-foreground">Jaya Sri Maha Bodhi: The Sacred Bo Tree of Anuradhapura</h2>
            <Badge variant="outline" className="border-green-600 text-green-700 dark:border-green-500 dark:text-green-300 flex items-center gap-1 whitespace-nowrap">
              <CheckCircle className="w-3 h-3" />
              Fact checked
            </Badge>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Jaya Sri Maha Bodhi is a sacred Bo tree growing in Anuradhapura, Sri Lanka. It has been
              continuously venerated for over 2,300 years and is a direct sapling of the Bodhi tree under
              which the Buddha attained enlightenment in Bodh Gaya, India.
            </p>
            <p className="text-lg mb-4">
              Brought to Sri Lanka in 288 BC by Princess Sanghamitta, daughter of Emperor Ashoka, this sapling
              has survived wars, invasions, and the collapse of kingdoms over more than two millennia. It is the
              oldest human-planted tree in the world with a recorded history.
            </p>
            <p className="text-lg mb-4">
              For Buddhists, the tree&apos;s direct lineage to the Bodhi tree under which the Buddha attained
              enlightenment makes it one of the most significant pilgrimage sites in the Buddhist world. Many
              people from Sri Lanka and other Buddhist countries visit to make offerings and meditate.
            </p>
            <p className="text-lg">
              Whether you are a Buddhist pilgrim, a history enthusiast, or simply curious, Jaya Sri Maha Bodhi
              is worth visiting. The tree continues to grow as it has for over two millennia, and people of
              all backgrounds come here to sit quietly in its shade.
            </p>
          </div>
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-400 dark:border-amber-600 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Respectful Visiting Guidelines</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                  <strong>Sacred Space:</strong> This is an active place of worship. Please dress modestly, speak quietly,
                  and remove shoes when entering the inner platform area.
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  <strong>Photography:</strong> While photography is generally allowed, be respectful of worshippers and
                  follow any posted guidelines. Flash photography may be restricted in certain areas.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Quick Facts */}
        <section className="mb-12">
          {/* Quick Facts & How to Get There side by side */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
            {/* Essential Jaya Sri Maha Bodhi Facts */}
            <section className="flex-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Quick Jaya Sri Maha Bodhi Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>
                        <strong>Location:</strong> Mahamewna Gardens, Anuradhapura
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Planted:</strong> 288 BC
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TreePine className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Species:</strong>  Ficus religiosa (Bo tree)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Brought By:</strong>  Princess Sanghamitta
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-500" />
                      <span>
                        <strong>Tradition:</strong> Daily worship and offerings continue here
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        <strong>Significance:</strong>Direct lineage to Buddha&apos;s Bodhi tree
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Record:</strong> Oldest planted tree with written history
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-500" />
                      <span>
                        <strong>Visit Duration:</strong> 1-2 hours for complete experience
                      </span>
                    </div>
                  </div>
                  {/* Valuable Fact for Desktop */}
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Start early morning to avoid traffic and heat</li>
                      <li>• Carry water and snacks for the journey</li>
                      <li>• Book accommodations in advance during peak season</li>
                      <li>• Consider staying overnight to explore all sites properly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
            {/* How to Get to Yala */}
            <section className="flex-1">
              <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <MapPin className="w-5 h-5" />
                    How to Get to Jaya Sri Maha Bodhi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> Nearly 206 km from Colombo</li>
                        <li>• <strong>Duration:</strong> Nearly 4.5 hours</li>
                        <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                      </ul>
                      {featureFlags.showTours && (
                      <div data-promo="true" className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                        <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                          <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Anuradhapura. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                        </p>
                        <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                          <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span><strong>Contact:</strong> +94 70 764 6765</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>✈️</span>
                            <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                              <strong>Airport Transfer Services</strong> - Click for details & booking
                            </Link>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Route:</strong> Colombo Fort → Kurunegala → Anuradhapura</li>
                        <li>• <strong>Duration:</strong> Travel time depends on the bus type and traffic conditions</li>
                        <li>• <strong>Cost:</strong> Check current fares before you travel</li>
                        <li>• <strong>Frequency:</strong> Check the latest bus schedule at Colombo Fort</li>
                      </ul>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </section>
          </div>
        </section>
        {/* Quick Facts */}
        {/* <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Sacred Facts About Jaya Sri Maha Bodhi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Planted:</strong> 288 BC (2,312 years ago)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Species:</strong> Ficus religiosa (Bo tree)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Brought by:</strong> Princess Sanghamitta
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Height:</strong> Approximately 20 meters (65 feet)
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Mahamewna Gardens, Anuradhapura
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span>
                      <strong>Significance:</strong> Direct lineage to Buddha&apos;s Bodhi tree
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Book className="w-4 h-4 text-indigo-500" />
                    <span>
                      <strong>Record:</strong> Oldest planted tree with written history
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Visit Duration:</strong> 1-2 hours for complete experience
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section> */}

        {/* How to Get In */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <MapPin className="w-5 h-5" />
                How to Get to Jaya Sri Maha Bodhi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Cultural Triangle Tours (Recommended)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Package Tours:</strong> 3-4 day Cultural Triangle packages</li>
                    <li>• <strong>Includes:</strong> Anuradhapura, Polonnaruwa, Sigiriya</li>
                    <li>• <strong>Transport:</strong> Air-conditioned vehicles with guide</li>
                    <li>• <strong>Best option:</strong> Most comprehensive spiritual journey</li>
                  </ul>
                  {featureFlags.showTours && (
                  <div data-promo="true" className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> specializes in Buddhist pilgrimage tours with knowledgeable guides who understand the spiritual significance and can enhance your sacred journey.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span><strong>Contact:</strong> +94 70 764 6765</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🙏</span>
                        <span><strong>Pilgrimage Tours</strong> - Spiritual guides & cultural insights</span>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Transportation Options</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm">From Colombo</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> Nearly 206 km by road</li>
                        <li>• <strong>Duration:</strong> Nearly 4.5 hours by car</li>
                        <li>• <strong>Cost:</strong> Check current private transport rates</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">From Sigiriya</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> Nearly 78 km by road</li>
                        <li>• <strong>Duration:</strong> Nearly 1 hour 40 minutes</li>
                        <li>• <strong>Ideal:</strong> Perfect for Cultural Triangle tour</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">From Polonnaruwa</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> Nearly 109 km by road</li>
                        <li>• <strong>Duration:</strong> Nearly 2 hours 15 minutes</li>
                        <li>• <strong>Route:</strong> Ancient capitals historical journey</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Tip:</strong> Visit early morning for a cooler and quieter experience. This is usually the best time to avoid crowds.
                </p>
              </div>
              <div className="mt-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h5 className="font-medium text-blue-800 dark:text-blue-200">Entry Fee</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-300">Check current access rules before you visit</p>
                    <p className="text-xs text-muted-foreground">Donations and local procedures may vary</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <h5 className="font-medium text-green-800 dark:text-green-200">Opening Hours</h5>
                    <p className="text-sm text-green-600 dark:text-green-300">Check current opening times before you travel</p>
                    <p className="text-xs text-muted-foreground">Hours can differ on religious and special days</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <h5 className="font-medium text-purple-800 dark:text-purple-200">Best Time</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-300">Early morning or late afternoon</p>
                    <p className="text-xs text-muted-foreground">Usually cooler and less crowded</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Sacred History */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Sacred History of Jaya Sri Maha Bodhi</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Sangamiththa-tharaniya.jpg"
                alt="Ancient illustration showing Princess Sanghamitta bringing the sacred Bo tree sapling to Sri Lanka"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Historical depiction of Princess Sanghamitta&apos;s arrival in Sri Lanka with the sacred Bo tree sapling in 288 BC
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">A Direct Connection to Buddha</h3>
              <p className="text-muted-foreground">
                The story begins over 2,300 years ago when Emperor Ashoka of India, after converting to Buddhism,
                wanted to spread the Buddha&apos;s teachings throughout the world. Earlier, his son Arahant Mahinda Thero
                had already introduced Buddhism to Sri Lanka in 247 BCE through his historic meeting with King
                Devanampiya Tissa at Mihintale. Following this spiritual foundation, his daughter, Princess Sanghamitta,
                was chosen for the sacred mission of bringing the sacred Bo tree to complete the spiritual establishment
                of Buddhism in Sri Lanka.
              </p>
              <p className="text-muted-foreground">
                She carried with her a precious sapling from the original Bodhi tree in Bodh Gaya, India - the very
                tree under which Prince Siddhartha became the Buddha. This sapling was planted in the royal gardens
                of Anuradhapura, where it has grown and thrived for over two millennia.
              </p>
              <p className="text-muted-foreground">
                What makes this tree truly remarkable is its unbroken lineage. Unlike many ancient sites that have
                been rebuilt or restored, Jaya Sri Maha Bodhi is the same living tree that was planted in 288 BC,
                making it a direct, living connection to the Buddha himself.
              </p>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-400 dark:border-blue-600 rounded-r-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Learn About Buddhism&apos;s Arrival in Sri Lanka</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Discover the complete story of how Arahant Mahinda Thero brought Buddhism to Sri Lanka and how the sacred Bo tree became part of this spiritual heritage.
                    </p>
                  </div>
                  <Link
                    href="/articles/buddisam-in-srilanka"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                  >
                    <Book className="w-4 h-4" />
                    Read Full Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spiritual Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500">
              Spiritual Significance & Sacred Heritage
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Jaya Sri Maha Bodhi holds a unique place in Buddhism. The tree has been in continuous use as a place of worship since 288 BC, making it one of the oldest documented pilgrimage sites in the world.
          </p>

          <div className="space-y-8">
            <Card className="border-l-4 border-amber-500 dark:border-amber-400 theme-card-amber-sig">
              <CardHeader className="space-y-4">
                <Badge variant="outline" className="w-fit border-amber-500 text-amber-700 dark:text-amber-400">
                  <TreePine className="w-4 h-4 mr-2" />
                  Living Heritage
                </Badge>
                <CardTitle className="text-2xl">Sacred Living Connection to Buddha</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    Jaya Sri Maha Bodhi represents the oldest living symbol of Buddhism in the world. For over 2,300 years,
                    this sacred tree has been continuously venerated, making it one of the most important living sites
                    in Buddhist heritage.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="theme-inner-box p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-400 flex items-center">
                        <Heart className="w-4 h-4 mr-2" />
                        Why Pilgrims Visit
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Quiet meditation and reflection
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Respect for a tree linked by tradition to the Bodhi tree at Bodh Gaya
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Offering flowers, water, and prayers
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Learning about Buddhist history in Sri Lanka
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Joining a long pilgrimage tradition
                        </li>
                      </ul>
                    </div>
                    <div className="theme-inner-box p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-400 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Pilgrimage Practices
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Circumambulation (walking around the tree)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Offering flowers, water, and incense
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Meditation under the sacred branches
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Chanting Buddhist prayers and sutras
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Taking the Five Precepts
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500 dark:border-blue-400 theme-card-blue-sig">
              <CardHeader className="space-y-4">
                <Badge variant="outline" className="w-fit border-blue-500 text-blue-700 dark:text-blue-400">
                  <Book className="w-4 h-4 mr-2" />
                  Historical Legacy
                </Badge>
                <CardTitle className="text-2xl">Miraculous Survival Through History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    Throughout its long history, Jaya Sri Maha Bodhi has survived invasions, natural disasters, and
                    the rise and fall of kingdoms. Its long survival has made it one of the most remarkable living
                    heritage sites in Sri Lanka.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="theme-inner-box p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Historical Challenges
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Multiple foreign invasions and wars
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Natural disasters and weather changes
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Political upheavals and kingdom changes
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Periods of neglect and restoration
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Modern urban development pressures
                        </li>
                      </ul>
                    </div>
                    <div className="theme-inner-box p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-400 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Protected Features
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Golden protective railings around the tree
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Dedicated temple complex and grounds
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Round-the-clock security and maintenance
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          Government protection as heritage site
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          International Buddhist community support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500 dark:border-purple-400 theme-card-purple-sig">
              <CardHeader className="space-y-4">
                <Badge variant="outline" className="w-fit border-purple-500 text-purple-700 dark:text-purple-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sacred Traditions
                </Badge>
                <CardTitle className="text-2xl">Living Worship Traditions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    Jaya Sri Maha Bodhi remains an active place of worship. Visitors often see devotees bringing
                    flowers, pausing for prayer, or walking quietly around the sacred area.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="theme-inner-box p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Common Practices
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Quiet prayer and meditation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Offering flowers and water
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Walking respectfully around the sacred area
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Listening to chanting or prayers during visits
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Spending quiet time in reflection
                        </li>
                      </ul>
                    </div>
                    <div className="theme-inner-box p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Busier Days
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Poya days often bring larger crowds
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Vesak is one of the busiest periods for Buddhist worship
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Religious dates can change the flow of visitors
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Extra security or access controls may be in place on busy days
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          Early arrival helps if you want a quieter visit
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Spiritual Journey Experience</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What to Expect During Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 dark:bg-slate-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">The Sacred Grounds:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Beautiful temple complex surrounding the tree</li>
                      <li>• Peaceful meditation areas and walking paths</li>
                      <li>• Golden railings protecting the sacred tree</li>
                      <li>• Lotus pond and traditional Buddhist gardens</li>
                      <li>• Small shrine rooms for private meditation</li>
                      <li>• Information displays about the tree&apos;s history</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Spiritual Activities:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Quiet meditation under the sacred branches</li>
                      <li>• Circumambulation (walking meditation around tree)</li>
                      <li>• Offering flowers, water, and incense</li>
                      <li>• Participating in group chanting sessions</li>
                      <li>• Photography (respectful, following guidelines)</li>
                      <li>• Learning about Buddhist teachings from monks</li>
                    </ul>
                  </div>
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
                Best Times for Your Sacred Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Time of Day:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Early Morning:</strong> Usually quieter and cooler</li>
                    <li>• <strong>Late Afternoon (4-6 PM):</strong> Beautiful light, cooler weather</li>
                    <li>• <strong>Evening:</strong> A calmer time after the hottest part of the day</li>
                    <li>• <strong>Avoid Midday:</strong> Very hot and crowded</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Special Days:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Poya Days:</strong> Monthly full moon days are usually busier</li>
                    <li>• <strong>Vesak Festival:</strong> Most important Buddhist celebration</li>
                    <li>• <strong>December-March:</strong> Dry season, ideal weather</li>
                    <li>• <strong>Weekdays:</strong> Less crowded, more peaceful experience</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Pilgrimage Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Essential Items:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Modest, respectful clothing (long pants/sleeves)</li>
                      <li>• Comfortable shoes (easy to remove)</li>
                      <li>• Water bottle for hydration</li>
                      <li>• Small offerings (flowers, incense if desired)</li>
                      <li>• Camera (respectful photography)</li>
                      <li>• Meditation cushion or mat (optional)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Spiritual Preparation:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Open mind and respectful attitude</li>
                      <li>• Basic knowledge of Buddhist customs</li>
                      <li>• Quiet, contemplative mindset</li>
                      <li>• Patience for crowds during peak times</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facilities & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Facilities can change depending on the access point and time of visit</li>
                  <li>• Restrooms and parking are usually easier to find in the wider sacred city area</li>
                  <li>• Small shops may be available near major pilgrimage areas</li>
                  <li>• Ask on site about the latest visitor services and access arrangements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Sacred Sites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Other Sacred Sites in Anuradhapura</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ruwanwelisaya Stupa</CardTitle>
                <CardDescription>The Great White Stupa</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Ruwanwalisaya.jpeg"
                  alt="Magnificent white Ruwanwelisaya stupa showing its perfect dome structure"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  One of the best-known sacred stupas in Anuradhapura, linked to King Dutugemunu and an important place of Buddhist worship.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Short walk from Jaya Sri Maha Bodhi</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ruwanwali-saya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Thuparamaya Stupa</CardTitle>
                <CardDescription>First Buddhist Monument</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Thooparamaya.jpeg"
                  alt="Ancient Thuparamaya stupa with its unique bell-shaped design and surrounding pillars"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Early Buddhist stupa in Anuradhapura and one of the island&apos;s oldest Buddhist monuments.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Short walk from Jaya Sri Maha Bodhi</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thuparamaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Abhayagiri Monastery</CardTitle>
                <CardDescription>Ancient Learning Center</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Abhayagiriya.jpeg"
                  alt="Abhayagiri monastery complex showing the massive stupa and surrounding ruins"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Large monastic complex in Anuradhapura that became an important center of Buddhist learning.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Short drive from Jaya Sri Maha Bodhi</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/abhayagiriya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Jetavanaramaya Stupa</CardTitle>
                <CardDescription>World&apos;s Third Tallest Ancient Structure</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Jetavanaramaya.jpg"
                  alt="Massive Jetavanaramaya stupa showing its impressive scale and ancient brick construction"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Massive brick stupa from the Anuradhapura period, known for its scale and long history.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Short walk from Jaya Sri Maha Bodhi</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jethawanaramaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card >
              <CardHeader>
                <CardTitle className="text-lg">Lovamahapaya (Brazen Palace)</CardTitle>
                <CardDescription>Ancient Nine-Story Monastery</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Lovamahapaya.jpeg"
                  alt="Lovamahapaya stone pillars showing remains of the ancient Brazen Palace monastery"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Ruins of a historic monastic building remembered today for its many stone pillars.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Short walk from Jaya Sri Maha Bodhi</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/lovamahapaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>



            <Card >
              <CardHeader>
                <CardTitle className="text-lg">Mihintale</CardTitle>
                <CardDescription>Cradle of Buddhism in Sri Lanka</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Mihinthale.jpg"
                  alt="Sacred Mihintale hill where Buddhism was first introduced to Sri Lanka"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Sacred site where Arahant Mahinda first introduced Buddhism to King Devanampiya Tissa in 247 BCE.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Nearly 17 km, nearly 30 minutes by road</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mihinthalaya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
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
                <TreePine className="w-5 h-5" />
                Your Sacred Journey Awaits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-300 mb-4">
                Jaya Sri Maha Bodhi is one of the most important Buddhist sites in Sri Lanka. It is a place where
                religious devotion, long history, and living tradition come together in one setting.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                Whether you visit as a pilgrim, a history lover, or a curious traveler, this sacred site offers a
                chance to understand a major part of Sri Lanka&apos;s Buddhist heritage. Visit respectfully, allow time
                to walk the area quietly, and combine it with other nearby sacred sites in Anuradhapura.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}