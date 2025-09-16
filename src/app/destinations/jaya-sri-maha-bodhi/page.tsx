import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Star, Users, Mountain, AlertTriangle, Heart, TreePine, Book } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Jaya Sri Maha Bodhi: Complete Pilgrimage Guide 2025 | Sacred Bo Tree of Anuradhapura",
  description:
    "Discover Jaya Sri Maha Bodhi, the sacred Bo tree in Anuradhapura, Sri Lanka. Complete pilgrimage guide with history, significance, best time to visit, and everything you need to know for a spiritual journey.",
  keywords: "Jaya Sri Maha Bodhi, Bo tree, Anuradhapura, Buddhist pilgrimage, sacred tree, Sri Lanka Buddhism, spiritual journey, ancient Ceylon",
  authors: [{ name: "Spiritual Travel Guide" }],
  openGraph: {
    title: "Jaya Sri Maha Bodhi: Complete Pilgrimage Guide 2025",
    description: "Experience the sacred Bo tree - the oldest human-planted tree in the world with recorded history",
    images: ["/JayaSrimahaBodhi.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaya Sri Maha Bodhi: Complete Pilgrimage Guide 2025",
    description: "Discover the sacred Bo tree of Anuradhapura - a spiritual journey through 2,300 years of history",
  },
}

export default function JayaSriMahaBodhiGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Sacred Buddhist Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              288 BC - Present
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-1" />
              Pilgrimage Destination
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Jaya Sri Maha Bodhi: The World&apos;s Most Sacred Tree</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into the presence of living history at Jaya Sri Maha Bodhi, the sacred Bo tree that has been growing
              in Anuradhapura for over 2,300 years! This magnificent tree is not just any ordinary plant - it&apos;s a direct
              descendant of the very Bodhi tree under which Lord Buddha attained enlightenment in Bodh Gaya, India.
            </p>
            <p className="text-lg mb-4">
              Brought to Sri Lanka in 288 BC by Princess Sanghamitta, daughter of Emperor Ashoka, this sacred sapling has
              witnessed the rise and fall of kingdoms, survived invasions, and continued to inspire millions of pilgrims
              from around the world. Today, it stands as the oldest human-planted tree in the world with a recorded history.
            </p>
            <p className="text-lg mb-4">
              What makes this tree truly special is its unbroken spiritual lineage connecting directly to Buddha himself.
              For Buddhists worldwide, visiting Jaya Sri Maha Bodhi is one of the most important pilgrimages they can make.
              The peaceful energy surrounding this ancient tree creates an atmosphere of deep meditation and spiritual reflection.
            </p>
            <p className="text-lg">
              Whether you&apos;re a devoted Buddhist, a spiritual seeker, or someone interested in ancient history and culture,
              Jaya Sri Maha Bodhi offers a profound experience that touches the heart and soul. The tree continues to thrive,
              its branches reaching toward the sky as they have for over two millennia, offering shade and blessings to all who visit.
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
        </section>

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
                  <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> specializes in Buddhist pilgrimage tours with knowledgeable guides who understand the spiritual significance and can enhance your sacred journey.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span><strong>Contact:</strong> +94 77 123 4567</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🙏</span>
                        <span><strong>Pilgrimage Tours</strong> - Spiritual guides & cultural insights</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Transportation Options</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm">From Colombo</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> 205km (127 miles)</li>
                        <li>• <strong>Duration:</strong> 4-5 hours by car</li>
                        <li>• <strong>Cost:</strong> $70-100 USD private transport</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">From Sigiriya</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> 70km (44 miles)</li>
                        <li>• <strong>Duration:</strong> 1.5-2 hours</li>
                        <li>• <strong>Ideal:</strong> Perfect for Cultural Triangle tour</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">From Polonnaruwa</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> 110km (68 miles)</li>
                        <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                        <li>• <strong>Route:</strong> Ancient capitals historical journey</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Pro Tip:</strong> Visit early morning (6-8 AM) for the most peaceful experience and to avoid crowds. Many pilgrims prefer to meditate during sunrise hours when the spiritual energy is strongest.
                </p>
              </div>
              <div className="mt-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h5 className="font-medium text-blue-800 dark:text-blue-200">Entry Fee</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-300">FREE for all visitors</p>
                    <p className="text-xs text-muted-foreground">Donations welcome</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <h5 className="font-medium text-green-800 dark:text-green-200">Opening Hours</h5>
                    <p className="text-sm text-green-600 dark:text-green-300">5:00 AM - 8:00 PM daily</p>
                    <p className="text-xs text-muted-foreground">Special ceremonies on Poya days</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <h5 className="font-medium text-purple-800 dark:text-purple-200">Best Time</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-300">Early morning or evening</p>
                    <p className="text-xs text-muted-foreground">Cooler & more spiritual</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

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
                    href="/blog/buddisam-in-srilanka"
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
          <h2 className="text-3xl font-bold mb-6">Spiritual Significance & What Makes It Special</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Living Buddhist Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Jaya Sri Maha Bodhi represents the oldest living symbol of Buddhism in the world. For over 2,300 years,
                    this sacred tree has been continuously venerated, making it a unique repository of spiritual energy
                    and Buddhist heritage that cannot be found anywhere else.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Spiritual Benefits:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Deep meditation and inner peace</li>
                        <li>• Connection to Buddha&apos;s enlightenment energy</li>
                        <li>• Purification of negative karma</li>
                        <li>• Inspiration for spiritual growth</li>
                        <li>• Blessings for wisdom and compassion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Pilgrimage Practices:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Circumambulation (walking around the tree)</li>
                        <li>• Offering flowers, water, and incense</li>
                        <li>• Meditation under the sacred branches</li>
                        <li>• Chanting Buddhist prayers and sutras</li>
                        <li>• Taking the Five Precepts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Miraculous Survival Through History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Throughout its long history, Jaya Sri Maha Bodhi has survived invasions, natural disasters, and
                    the rise and fall of kingdoms. Many consider its survival itself to be miraculous, as it has
                    witnessed over two millennia of human history while continuing to grow and flourish.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Historical Challenges:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Multiple foreign invasions and wars</li>
                        <li>• Natural disasters and weather changes</li>
                        <li>• Political upheavals and kingdom changes</li>
                        <li>• Periods of neglect and restoration</li>
                        <li>• Modern urban development pressures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Protected Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Golden protective railings around the tree</li>
                        <li>• Dedicated temple complex and grounds</li>
                        <li>• Round-the-clock security and maintenance</li>
                        <li>• Government protection as heritage site</li>
                        <li>• International Buddhist community support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. The Sacred Rituals and Ceremonies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Daily rituals and special ceremonies take place at Jaya Sri Maha Bodhi, creating a continuous
                    atmosphere of devotion and spiritual practice. These ceremonies connect modern practitioners
                    with traditions that have been maintained for over 2,000 years.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Daily Rituals:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Morning puja (worship ceremony) at dawn</li>
                        <li>• Offering of flowers and water throughout the day</li>
                        <li>• Evening prayers and chanting</li>
                        <li>• Continuous meditation by pilgrims</li>
                        <li>• Oil lamp lighting ceremonies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Special Occasions:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Poya Day celebrations (monthly full moon)</li>
                        <li>• Vesak festival (Buddha&apos;s birth, enlightenment, death)</li>
                        <li>• Annual Bodhi Puja ceremony</li>
                        <li>• International Buddhist gatherings</li>
                        <li>• Meditation retreats and teachings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

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
                  <div>
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
                  <div>
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
                    <li>• <strong>Early Morning (5-7 AM):</strong> Most peaceful, perfect for meditation</li>
                    <li>• <strong>Late Afternoon (4-6 PM):</strong> Beautiful light, cooler weather</li>
                    <li>• <strong>Evening (6-8 PM):</strong> Prayer ceremonies, oil lamps</li>
                    <li>• <strong>Avoid Midday:</strong> Very hot and crowded</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Special Days:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Poya Days:</strong> Monthly full moon - special ceremonies</li>
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
                  <li>• Clean restroom facilities available</li>
                  <li>• Drinking water stations throughout grounds</li>
                  <li>• Small shop for religious items and offerings</li>
                  <li>• Parking available for vehicles</li>
                  <li>• Information center with English-speaking guides</li>
                  <li>• Wheelchair accessibility to main viewing areas</li>
                  <li>• Small meditation halls for quiet reflection</li>
                  <li>• Security presence for safety and guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Sacred Sites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Other Sacred Sites in Anuradhapura</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/destinations/ruwanweli-saya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
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
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Magnificent white stupa built by King Dutugemunu in 140 BC. Contains sacred relics of Buddha and showcases ancient engineering.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>5 minutes walk from Jaya Sri Maha Bodhi</span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mt-3 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm">
                    Visit Ruwanwelisaya →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/thuparamaya" className="block hover:shadow-md transition-shadow duration-200">
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
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    The first Buddhist stupa built in Sri Lanka (3rd century BCE), housing Buddha&apos;s sacred collarbone relic.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>10 minutes walk from Jaya Sri Maha Bodhi</span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mt-3 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm">
                    Explore Thuparamaya →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/abhayagiri" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
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
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Ancient monastery complex that housed 5,000 monks and was a major center of Buddhist learning for over 1,000 years.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>15 minutes drive from Jaya Sri Maha Bodhi</span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mt-3 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm">
                    Discover Abhayagiri →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/jethawanaramaya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
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
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Built in 3rd century AD, once the world&apos;s third tallest structure. Contains Buddha&apos;s sash relic and showcases ancient engineering.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>12 minutes walk from Jaya Sri Maha Bodhi</span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mt-3 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm">
                    Visit Jetavanaramaya →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/lovamahapaya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
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
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Ancient nine-story monastery built by King Dutugemunu. Once housed 1,000 monks and was covered with copper tiles.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>8 minutes walk from Jaya Sri Maha Bodhi</span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mt-3 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm">
                    Explore Lovamahapaya →
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/destinations/mihinthalaya" className="block hover:shadow-md transition-shadow duration-200">
              <Card className="cursor-pointer">
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
                    className="rounded-lg mb-3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Sacred site where Arahant Mahinda first introduced Buddhism to King Devanampiya Tissa in 247 BCE.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>20 minutes drive from Jaya Sri Maha Bodhi</span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mt-3 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm">
                    Visit Mihintale →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

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
                Jaya Sri Maha Bodhi offers more than just a visit to an ancient tree - it provides a profound spiritual
                experience that connects you directly with the Buddha&apos;s enlightenment energy. Whether you come as a
                devout Buddhist seeking blessings, a spiritual seeker exploring inner peace, or a history enthusiast
                fascinated by living heritage, this sacred tree offers something deeply meaningful.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                As you stand beneath its ancient branches, you&apos;ll join millions of pilgrims who have found peace,
                inspiration, and spiritual awakening in this sacred space. The tree continues to grow and flourish,
                just as it has for over 2,300 years, offering its timeless blessings to all who visit with respect
                and devotion. May your pilgrimage to Jaya Sri Maha Bodhi bring you wisdom, peace, and spiritual fulfillment! 🙏🌳✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}