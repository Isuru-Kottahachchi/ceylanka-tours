import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Calendar,
  CheckCircle,
  Mountain,
  Train,
  Bus,
  Utensils,
  Hotel,
  Sun,
  CloudRain,
  Users,
  Star,
  Car,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kurunegala Travel Guide 2025 | City of Rock Giants | Complete Guide",
  description: "Explore Kurunegala, Sri Lanka's medieval royal capital with its iconic rock formations, ancient temples, and rich heritage. Complete guide to attractions, activities, and travel tips.",
  keywords: "Kurunegala, Sri Lanka tourism, Ethagala rock, Kurunegala lake, Buddhist temples, rock formations, travel guide, historic city, medieval capital",
  openGraph: {
    title: "Kurunegala: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's City of Rock Giants",
    type: "article",
    images: ["/kurunegala-hero.jpg"],
  },
};

export default function KurunegalaPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/kurunegala-hero.jpg"
          alt="Panoramic view of Kurunegala city with majestic Ethagala rock formation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kurunegala</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">City of Ancient Rock Giants</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <MapPin className="w-4 h-4 mr-1" />
              North Western Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
              <Mountain className="w-4 h-4 mr-1" />
              Rock Formations
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Calendar className="w-4 h-4 mr-1" />
              Medieval Capital
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#rock-formations" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Rock Formations</a>
          <a href="#historical-sites" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Historical Sites</a>
          <a href="#activities" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Activities</a>
          <a href="#nearby-places" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby Places</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kurunegala: The City of Rock Giants</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover Kurunegala, a city where ancient legends meet natural wonders, dominated by eight majestic rock formations 
              that have watched over the landscape for millennia. As Sri Lanka&apos;s medieval capital during the 13th century, 
              Kurunegala combines rich historical heritage with modern urban development.
            </p>
            <p className="text-lg">
              Each of the city&apos;s iconic rock formations bears the name of the animal it resembles - from the towering 
              Elephant Rock (Ethagala) to the distinctive Tortoise Rock (Ibbanagala). These natural monuments not only 
              provide a stunning backdrop to the city but also offer panoramic views and house ancient temples that continue 
              to draw pilgrims and tourists alike.
            </p>
          </div>
        </section>

        {/* Quick Facts & Getting There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Kurunegala Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Province:</strong> North Western
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Famous For:</strong> 8 iconic rock formations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Historical Period:</strong> 13th century capital
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> ~120,000
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Getting There */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Getting There
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>By Train:</strong> Regular services from Colombo (4-5 hours)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>By Bus:</strong> Frequent buses from major cities
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>By Car:</strong> 116km from Colombo (3-4 hours)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The City of Rock Giants</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Kurunegala, a historic city in Sri Lanka&apos;s North Western Province, served as a royal capital during 
              the 13th century. The city is famous for its distinctive landscape dominated by eight rock formations, 
              each named after the animals they resemble - Elephant Rock (Ethagala), Tortoise Rock (Ibbanagala), 
              and more.
            </p>
            <p className="mb-4">
              Today, Kurunegala combines its rich historical heritage with modern development, serving as a major 
              commercial hub while preserving its ancient temples, lakes, and cultural landmarks. The city&apos;s unique 
              geography and historical significance make it an interesting destination for both history enthusiasts 
              and nature lovers.
            </p>
          </div>
        </section>

        {/* Rock Formations */}
        <section className="mb-16" id="rock-formations">
          <h2 className="text-3xl font-bold mb-8">The Eight Rock Giants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ethagala */}
            <Card>
              <CardHeader>
                <CardTitle>Ethagala (Elephant Rock)</CardTitle>
                <CardDescription>The Majestic Guardian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/ethagala-rock.jpg"
                    alt="Ethagala Rock Formation in Kurunegala"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    Standing at 316 meters, this is the city&apos;s most prominent rock formation. Houses an ancient 
                    Buddhist temple and offers breathtaking panoramic views.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Best sunrise views</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Sacred temple site</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Ibbanagala */}
            <Card>
              <CardHeader>
                <CardTitle>Ibbanagala (Tortoise Rock)</CardTitle>
                <CardDescription>The Ancient Guardian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/ibbanagala.jpg"
                    alt="Ibbanagala Rock Formation resembling a tortoise"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    Named for its distinctive tortoise-like shape, this rock formation holds significant 
                    archaeological importance with ancient cave inscriptions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Archaeological site</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Cave inscriptions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Andagala */}
            <Card>
              <CardHeader>
                <CardTitle>Andagala (Eel Rock)</CardTitle>
                <CardDescription>The Serpentine Wonder</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/andagala.jpg"
                    alt="Andagala Rock Formation with its unique shape"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    Known for its elongated shape resembling an eel, this formation offers excellent hiking 
                    opportunities and stunning valley views.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Hiking trails</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Valley viewpoints</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Rock Information Card */}
          <Card className="mt-8 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900">
            <CardHeader>
              <CardTitle>Other Sacred Rocks</CardTitle>
              <CardDescription>The remaining guardians of Kurunegala</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-blue-500" />
                    <span><strong>Yakdessagala</strong> (Devil&apos;s Rock)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-green-500" />
                    <span><strong>Gonagala</strong> (Bull Rock)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-purple-500" />
                    <span><strong>Kuruminiyagala</strong> (Beetle Rock)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-orange-500" />
                    <span><strong>Wanduragala</strong> (Monkey Rock)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Sites */}
        <section className="mb-16" id="historical-sites">
          <h2 className="text-3xl font-bold mb-8">Historical Treasures</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kurunegala Lake */}
            <Card>
              <CardHeader>
                <CardTitle>Kurunegala Lake</CardTitle>
                <CardDescription>Medieval Engineering Marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/kurunegala-lake.jpg"
                    alt="Scenic Kurunegala Lake with surrounding greenery"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    This artificial lake, dating back to the 13th century, represents medieval Sri Lankan engineering 
                    prowess. Today, it&apos;s the heart of the city with a 2km walking track and recreational areas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Historical significance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Evening activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Local gathering spot</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Royal Palace Complex */}
            <Card>
              <CardHeader>
                <CardTitle>Royal Palace Complex</CardTitle>
                <CardDescription>Medieval Royal Residence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/kurunegala-palace.jpg"
                    alt="Archaeological remains of Kurunegala Royal Palace"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The remains of the 13th-century royal palace complex offer glimpses into Sri Lanka&apos;s medieval 
                    period. Archaeological findings reveal sophisticated architecture and royal lifestyle.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Archaeological site</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Historical artifacts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Guided tours available</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section className="mb-16" id="activities">
          <h2 className="text-3xl font-bold mb-8">Things to Do in Kurunegala</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Rock Climbing & Hiking */}
            <Card>
              <CardHeader>
                <CardTitle>Adventure Activities</CardTitle>
                <CardDescription>Explore the Rock Giants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Guided rock climbing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Nature trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Photography tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Sunrise hikes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cultural Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Cultural Experiences</CardTitle>
                <CardDescription>Local Heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Temple visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Archaeological tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Local markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Food tasting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Nature & Leisure */}
            <Card>
              <CardHeader>
                <CardTitle>Leisure Activities</CardTitle>
                <CardDescription>Relax & Unwind</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Lake walking trail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Bird watching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Sunset viewing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Garden visits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Places */}
        <section className="mb-16" id="nearby-places">
          <h2 className="text-3xl font-bold mb-8">Explore Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Yapahuwa */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Yapahuwa</CardTitle>
                <CardDescription>25km from Kurunegala</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/yapahuwa-rock.jpg"
                  alt="Ancient Yapahuwa Rock Fortress"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-muted-foreground mb-4">
                  13th-century rock fortress with remarkable stone carvings and unique architectural features.
                </p>
                <Button asChild className="w-full">
                  <Link href="/destinations/yapahuwa">Explore Yapahuwa</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Dambulla */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Dambulla</CardTitle>
                <CardDescription>67km from Kurunegala</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dambulla-cave-temple.jpg"
                  alt="Dambulla Cave Temple Complex"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-muted-foreground mb-4">
                  UNESCO World Heritage site featuring ancient cave temples with remarkable Buddhist art.
                </p>
                <Button asChild className="w-full">
                  <Link href="/destinations/dambulla-cave-temple">Visit Dambulla</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kandy */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Kandy</CardTitle>
                <CardDescription>42km from Kurunegala</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Kandy.jpeg"
                  alt="Sacred Temple of the Tooth in Kandy"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-muted-foreground mb-4">
                  Last royal capital of Sri Lanka, home to the Temple of the Tooth and stunning botanical gardens.
                </p>
                <Button asChild className="w-full">
                  <Link href="/destinations/kandy">Discover Kandy</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16" id="visitor-guide">
          <h2 className="text-3xl font-bold mb-8">Essential Visitor Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Accommodation & Dining */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-blue-500" />
                    Where to Stay
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Luxury & Mid-Range</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Hotels near Kurunegala Lake</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>City center accommodations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Budget Options</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Local guesthouses</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Backpacker hostels</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-orange-500" />
                    Where to Eat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Local Cuisine</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Traditional rice & curry restaurants</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Lake-side dining options</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Quick Eats</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Street food near Clock Tower</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Central Market food stalls</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transportation & Tips */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bus className="w-5 h-5 text-green-500" />
                    Getting Around
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Local Transport</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Tuk-tuks available throughout city</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Local bus service</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Taxi services on call</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Best Times to Visit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Peak Season</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Sun className="w-4 h-4 text-yellow-500" />
                          <span>December to April (Dry Season)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Off Season</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CloudRain className="w-4 h-4 text-blue-500" />
                          <span>May to November (Some rain)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Essential Travel Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold">Visiting Temples & Rocks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Dress modestly - cover shoulders and knees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Remove shoes at temples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Early morning visits recommended for rock climbing</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">General Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Carry plenty of water, especially for rock visits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Use sunscreen and wear a hat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Negotiate tuk-tuk prices before riding</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-3">Shopping & Markets</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Visit Central Market in the morning for fresh produce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Look for local handicrafts in shops around the lake</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
