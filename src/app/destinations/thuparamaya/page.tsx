import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Camera, CheckCircle, Star, Calendar, Users, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Thuparamaya Temple: Complete Travel Guide 2025 | Sri Lanka's First Buddhist Stupa",
  description:
    "Discover Thuparamaya Temple in Anuradhapura, Sri Lanka's first Buddhist stupa. Complete travel guide with history, architecture, visiting tips, and everything you need to know.",
  keywords: "Thuparamaya, Anuradhapura, Buddhist temple, stupa, Sri Lanka travel, ancient ruins, Buddhist pilgrimage, travel guide",
  authors: [{ name: "Travel Explorer" }],
  openGraph: {
    title: "Thuparamaya Temple: Complete Travel Guide 2026",
    description: "Your ultimate guide to visiting Thuparamaya Temple, Sri Lanka's first Buddhist stupa in Anuradhapura",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thuparamaya Temple: Complete Travel Guide 2025",
    description: "Your ultimate guide to visiting Thuparamaya Temple, Sri Lanka's first Buddhist stupa in Anuradhapura",
  },
}

export default function ThuparamayaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Thooparamaya.jpeg"
          alt="Sacred Thuparamaya Temple with its distinctive white stupa surrounded by ancient stone pillars in Anuradhapura"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl hero-text-shadow text md:text-6xl font-bold mb-4">Thuparamaya Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s First Buddhist Sacred Shrine</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura, Sri Lanka
            </Badge>

            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              3rd Century BC
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Star className="w-4 h-4 mr-1" />
              First Buddhist Stupa
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-foreground">Welcome to Thuparamaya: Where Buddhism Began in Sri Lanka</h2>
            <Badge className="bg-green-600 text-white flex items-center gap-1 whitespace-nowrap">
              <CheckCircle className="w-3 h-3" />
              Fact Checked
            </Badge>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Thuparamaya is the first Buddhist stupa built in Sri Lanka. King Devanampiyatissa had it constructed in
              247 BC to house a relic of the Buddha. It stands in Anuradhapura and has been a place of worship for
              over 2,300 years. It is the oldest surviving stupa in the country.
            </p>
            <p className="text-lg mb-4">
              According to ancient chronicles, the stupa contains the right collarbone relic of the Buddha. This makes it
              one of the most important relic shrines in Sri Lanka. The stone pillars surrounding the stupa once supported
              a wooden roof that sheltered the structure. Buddhist pilgrims have been visiting this site for over 2,000 years.
            </p>
            <p className="text-lg mb-4">
              The temple follows a &quot;vatadage&quot; design, a circular arrangement of granite pillars that originally
              supported a wooden roof over the stupa. This design was later used at other sites across Sri Lanka.
              The pillars still stand around the whitewashed stupa and the site is quiet and well-maintained.
            </p>
            <p className="text-lg">
              Thuparamaya is one of the key sites within Anuradhapura&apos;s ancient city complex. If you are visiting
              Anuradhapura, it is worth including in your itinerary for its age and historical importance.
            </p>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Spiritual Etiquette</h4>
                <p className="text-sm text-blue-700 mb-2">
                  <strong>Dress respectfully:</strong> Cover shoulders and knees. White clothing is traditional and appreciated.
                </p>
                <p className="text-sm text-blue-700 mb-2">
                  <strong>Remove shoes:</strong> Take off footwear before entering the stupa platform area.
                </p>
                <p className="text-sm text-blue-700">
                  <strong>Maintain silence:</strong> This is an active place of worship. Speak softly and move mindfully.
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
                Quick Facts About Thuparamaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built:</strong> 3rd Century BC (247 BC)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Height:</strong> 19 meters (62 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Founded by:</strong> King Devanampiyatissa
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Anuradhapura, North Central Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Significance:</strong> First Buddhist Stupa in Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 30-45 minutes
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Getting There */}
        {/* <section className="mb-12">
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <MapPin className="w-5 h-5" />
                How to Reach Thuparamaya Temple
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">From Anuradhapura City</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 5km from city center</li>
                    <li>• <strong>By Tuktuk:</strong> 15-20 minutes, $3-5 USD</li>
                    <li>• <strong>By Bicycle:</strong> 20-30 minutes (available for rent)</li>
                    <li>• <strong>Walking:</strong> 45 minutes through ancient ruins</li>
                  </ul>
                  <div className="mt-3 p-3 bg-green-100 dark:bg-slate-700 rounded-md border-l-4 border-green-500 dark:border-green-400">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Pro Tip:</strong> Combine your visit with other nearby ancient sites like Ruwanwelisaya
                      and Jaya Sri Maha Bodhi for a complete sacred city experience.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">From Colombo</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 205km (127 miles)</li>
                    <li>• <strong>By Car:</strong> 4-5 hours via A1 highway</li>
                    <li>• <strong>By Bus:</strong> 5-6 hours, frequent services</li>
                    <li>• <strong>By Train:</strong> 4.5 hours to Anuradhapura station</li>
                  </ul>
                  <div className="mt-3 p-3 bg-amber-100 dark:bg-slate-700 rounded-md border-l-4 border-amber-500 dark:border-amber-400">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Best Option:</strong> Stay overnight in Anuradhapura to explore all ancient sites
                      at a comfortable pace without rushing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section> */}

        {/* Historical Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Sacred History of Thuparamaya</h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-500" />
                The Birth of Buddhism in Sri Lanka
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                In 247 BC, Arahant Mahinda, son of Indian Emperor Ashoka, arrived in Sri Lanka and introduced
                Buddhism to the island. King Devanampiyatissa, who ruled Anuradhapura at the time, accepted the
                teachings and became Sri Lanka&apos;s first Buddhist king.
              </p>
              <p className="text-muted-foreground">
                To mark this event and to house the collarbone relic of the Buddha brought by Mahinda,
                King Devanampiyatissa built Thuparamaya. It is the first stupa constructed in Sri Lanka.
              </p>
              <p className="text-muted-foreground">
                The name comes from the Pali words &quot;thupa&quot; (a relic monument) and &quot;aramaya&quot; (monastery),
                meaning &quot;the monastery of the stupa.&quot; Pali is the sacred language of Theravada Buddhism,
                which Sri Lanka has followed since the 3rd century BC.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-500" />
                Architectural Innovation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The original Thuparamaya was built using a &quot;vatadage&quot; design, a circular wooden structure
                supported by rings of stone pillars that sheltered the stupa from rain and sun.
                This design was later used at other Buddhist sites across Sri Lanka.
              </p>
              <p className="text-muted-foreground">
                Today, visitors can still see the remains of these granite pillars arranged in three concentric circles
                around the stupa. The innermost circle had 20 pillars, the middle circle had 32, and the outer circle
                had 40 pillars. These pillars, some standing over 8 feet tall, once supported an elaborate wooden roof
                that sheltered the precious stupa below.
              </p>
              <p className="text-muted-foreground">
                Building this circular pillar arrangement in the 3rd century BC required careful planning and
                skilled craftsmen. The even spacing and layout of the pillars show a good understanding of
                construction for that period.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">What to See at Thuparamaya</h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-500" />
                  The Sacred Stupa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The main feature of Thuparamaya is the bell-shaped white stupa, 19 metres tall. It has been
                  rebuilt several times but keeps its original shape. The white stupa stands in the middle of
                  the old granite pillars, which makes the site easy to recognise.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Contains Buddha&apos;s collar bone relic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Bell-shaped dome architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Circumambulation path for pilgrims</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  Ancient Stone Pillars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The granite pillars arranged in three circles are among the most photographed parts of Thuparamaya.
                  Some are carved with lotus designs and have been standing here for over 2,000 years.
                  Each pillar was placed to support the original wooden roof that covered the stupa.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>92 pillars in three circles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Carved lotus motifs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Original 3rd century BC construction</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-purple-500" />
                Sacred Features and Ritual Spaces
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Altar and Offering Area</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    The eastern side of the stupa features a traditional altar where devotees place offerings of flowers,
                    incense, and oil lamps. This sacred space maintains the ancient ritual traditions that have been
                    practiced here for over two millennia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Meditation Platforms</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Several raised stone platforms around the stupa provide peaceful spaces for meditation and
                    contemplation. These platforms offer different perspectives of the sacred structure and are
                    ideal spots for quiet reflection.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Ancient Inscriptions</h4>
                  <p className="text-sm text-muted-foreground">
                    Look for ancient Brahmi script inscriptions on some of the stone pillars and nearby rocks.
                    These historical records provide fascinating insights into the temple&apos;s construction and
                    the early Buddhist community that worshipped here.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Bodhi Tree Grove</h4>
                  <p className="text-sm text-muted-foreground">
                    The temple grounds have several Bodhi trees, grown from cuttings of the original Sri Maha Bodhi
                    tree. They provide good shade and the area around them is calm and quiet.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>



        {/* Best Time to Visit */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Best Time to Visit Thuparamaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Early Morning</h4>
                  <p className="text-sm text-muted-foreground">
                    6:00 AM - 8:00 AM<br />
                    Cool weather, peaceful atmosphere, golden sunrise light for photography
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Late Afternoon</h4>
                  <p className="text-sm text-muted-foreground">
                    4:00 PM - 6:00 PM<br />
                    Comfortable temperature, beautiful sunset colors, active prayer times
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Full Moon Days</h4>
                  <p className="text-sm text-muted-foreground">
                    Poya Days<br />
                    Special ceremonies, increased devotional activities, spiritual atmosphere
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Best Seasons</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>December - March:</strong> Cool, dry weather (recommended)</li>
                    <li>• <strong>April - May:</strong> Hot but manageable</li>
                    <li>• <strong>June - September:</strong> Some rain, fewer crowds</li>
                    <li>• <strong>October - November:</strong> Post-monsoon freshness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Special Occasions</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Vesak Day (May):</strong> Elaborate decorations and ceremonies</li>
                    <li>• <strong>Poson Poya (June):</strong> Celebrates arrival of Buddhism</li>
                    <li>• <strong>Daily Evening Prayers:</strong> 6:00 PM chanting sessions</li>
                    <li>• <strong>Weekly Programs:</strong> Sunday meditation sessions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Practical Visiting Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Opening Hours & Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Temple Hours</h4>
                  <p className="text-sm text-muted-foreground">Daily: 5:00 AM - 7:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Entry Fee</h4>
                  <p className="text-sm text-muted-foreground">
                    Included in Anuradhapura Sacred City ticket: $25 USD (valid for multiple sites)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Guided Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    Available at entrance: $10-15 USD per group
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Photography</h4>
                  <p className="text-sm text-muted-foreground">
                    Allowed in temple grounds, no flash photography near stupa
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  Visitor Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Dress Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Conservative clothing covering shoulders and knees. White is traditional and appreciated.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Behavior</h4>
                  <p className="text-sm text-muted-foreground">
                    Remove shoes before entering stupa platform. Maintain respectful silence and avoid pointing feet toward stupa.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Offerings</h4>
                  <p className="text-sm text-muted-foreground">
                    White flowers, incense, and oil lamps available for purchase at entrance ($1-3 USD).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Duration</h4>
                  <p className="text-sm text-muted-foreground">
                    Allow 30-45 minutes for a complete visit including circumambulation and meditation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Explore Nearby Sacred Sites</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Jaya Sri Maha Bodhi</CardTitle>
                <CardDescription>Sacred Bodhi Tree</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/JayaSrimahaBodhi.jpeg"
                  alt="Jaya Sri Maha Bodhi sacred Bodhi tree in Anuradhapura"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  The oldest living human-planted tree in the world, grown from a cutting of the original Bodhi tree
                  under which Buddha attained enlightenment.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>10 minutes walk from Thuparamaya</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jaya-sri-maha-bodhi" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Ruwanwelisaya</CardTitle>
                <CardDescription>Great Stupa</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Ruwanwalisaya.jpeg"
                  alt="Magnificent white Ruwanwelisaya stupa in Anuradhapura"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  One of the largest stupas in Sri Lanka, built by King Dutugemunu in the 2nd century BC.
                  A masterpiece of ancient Sinhalese architecture.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>1.5 km from Thuparamaya</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ruwanwali-saya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Abhayagiri Monastery</CardTitle>
                <CardDescription>Ancient Monastic Complex</CardDescription>
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
                  Ruins of one of the most important monasteries in ancient Sri Lanka, featuring a massive stupa and
                  fascinating archaeological remains spanning over 1,000 years of history.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>3 km from Thuparamaya</span>
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/abhayagiriya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips for Visitors */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Essential Tips for Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Photography Tips</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Early morning light creates beautiful golden tones on the white stupa</li>
                    <li>• Use the stone pillars to frame the central stupa in your photos</li>
                    <li>• Capture the contrast between ancient pillars and pristine white dome</li>
                    <li>• Wide-angle lenses work best to capture the full circular layout</li>
                    <li>• Respect photography restrictions during prayer times</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Cultural Experience</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Join the circumambulation (walking clockwise around the stupa)</li>
                    <li>• Attend the evening prayer sessions if you are there around 6:00 PM</li>
                    <li>• Bring white lotus flowers as traditional offerings</li>
                    <li>• Spend time in quiet meditation on the stone platforms</li>
                    <li>• Learn basic Buddhist etiquette from local devotees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">What to Bring</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Comfortable walking shoes (you&apos;ll remove them at the stupa)</li>
                    <li>• Sun hat and sunscreen for midday visits</li>
                    <li>• Water bottle to stay hydrated</li>
                    <li>• Modest clothing in white or light colors</li>
                    <li>• Small bag for shoes when entering sacred areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Local Insights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Visit during Poya (full moon) days for special ceremonies</li>
                    <li>• Local monks often conduct informal discussions about Buddhism</li>
                    <li>• The site is especially peaceful during weekday mornings</li>
                    <li>• Combine with nearby sites for a full day of exploration</li>
                    <li>• Respect local customs and participate mindfully</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Experience the Sacred Beginning of Sri Lankan Buddhism
              </h3>
              <p className="text-muted-foreground mb-4">
                Thuparamaya is an active place of worship. Devotees come daily to make offerings of flowers, incense,
                and oil lamps. Walking among the ancient pillars and around the stupa, you are following a practice
                that has continued here without interruption for over 2,300 years.
              </p>
              <p className="text-muted-foreground mb-4">
                The site is not just a historical monument. It is a functioning religious site, and the atmosphere
                reflects that. Visitors are welcome, but respectful behaviour is expected.
              </p>
              <p className="text-muted-foreground">
                Take your time when you visit. Sit among the pillars, watch the devotees, and walk around the stupa
                at a slow pace. The site is quiet and rarely crowded, especially on weekday mornings.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
