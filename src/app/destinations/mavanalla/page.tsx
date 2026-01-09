import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Train, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mawanella Sri Lanka: Complete Travel Guide 2025 | Hidden Gem Town on Colombo-Kandy Road",
  description:
    "Discover Mawanella, Sri Lanka's charming town famous for its pottery, spice gardens, scenic beauty, and strategic location between Colombo and Kandy. Complete travel guide with attractions and activities.",
  keywords:
    "Mawanella, Mawanella Sri Lanka, Colombo Kandy road, spice gardens Sri Lanka, pottery Mawanella, Kadugannawa pass, Mawanella town, Sabaragamuwa Province Sri Lanka, Saradiel bandit",
  openGraph: {
    title: "Mawanella: Complete Travel Guide 2025",
    description: "Your ultimate guide to Mawanella, the scenic town between Colombo and Kandy",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function MawanellaTravelGuide() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mawanalla.jpg"
          alt="Scenic view of Mawanella town nestled in lush green hills with railway line and Kadugannawa pass"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mawanella</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Gateway Between Colombo and the Hill Country</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Sabaragamuwa Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Train className="w-4 h-4 mr-1" />
              Railway Town
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Utensils className="w-4 h-4 mr-1" />
              Famous for Pottery
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#how-to-get-there" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Attractions</a>
          <a href="#itinerary" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Sample Itinerary</a>
          <a href="#nearby-places" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby Places</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mawanella: The Scenic Stopover Town</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the verdant hills of Sri Lanka&apos;s Sabaragamuwa Province, Mawanella is a charming town that serves as a perfect stopover between the bustling capital of Colombo and the cultural heart of Kandy. Located approximately 90 kilometers from Colombo along the historic Colombo-Kandy road, this picturesque town offers travelers a delightful blend of natural beauty, local industry, and authentic Sri Lankan culture.
            </p>
            <p className="text-lg mb-4">
              Mawanella is best known for its sacred hilltop temples like Uthuwankanda, the legendary history of Saradiel the bandit, impressive natural landmarks like Bible Rock (Bathalegala), and pristine forest reserves perfect for hiking and nature exploration. The town sits at an elevation where the plains meet the hills, creating a unique landscape of rolling green hills, rubber plantations, and tropical forests that captivate visitors throughout the year.
            </p>
            <p className="text-lg">
              While many travelers pass through Mawanella on their way to other destinations, those who stop to explore discover a treasure trove of experiences - from hiking to the sacred Uthuwankanda temple with its panoramic views, exploring the legendary hideout of Saradiel the bandit, trekking to Bible Rock, and discovering the pristine Devanagala Forest Reserve. The town&apos;s friendly locals, fascinating history, and authentic rural atmosphere make it a refreshing escape from the more touristy spots, offering a genuine glimpse into everyday Sri Lankan life in the hill country foothills.
            </p>
          </div>
        </section>


        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Mawanella Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Mawanella Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Sabaragamuwa Province, Kegalle District
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> 180-260 meters above sea level
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> Approximately 112,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Famous For:</strong> Traditional pottery & Saradiel history
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Railway Station:</strong> Major stop on Colombo-Kandy line
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2-4 hours stopover or day trip
                    </span>
                  </div>
                </div>
                {/* Valuable Fact for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/Uthuwankanda.jpg"
                      alt="Uthuwankanda temple on hilltop near Mawanella"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Gateway to Adventure & History</p>
                      <p className="text-sm text-blue-800">
                        Mawanella is the perfect base for exploring ancient Buddhist temples, legendary bandit hideouts, dramatic rock formations, and pristine forest reserves. The area combines spiritual heritage with natural beauty and fascinating colonial-era history.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">2-4 hours for a stopover to visit spice gardens and try local treacle, or a full day to explore surrounding areas.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">Year-round destination. January to April offers driest weather, while monsoon months (May-August) bring lush greenery.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to Mawanella */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Mawanella
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Colombo:</strong> 90 km, 2-2.5 hours</li>
                      <li>• <strong>From Kandy:</strong> 45 km, 1-1.5 hours</li>
                      <li>• <strong>Cost from Colombo:</strong> $40-60 USD</li>
                      <li>• <strong>Route:</strong> A1 Colombo-Kandy Highway</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Train (Scenic Option)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Colombo Fort:</strong> Multiple daily trains</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $1-3 USD depending on class</li>
                      <li>• <strong>Highlight:</strong> Beautiful hill country views</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>From Colombo:</strong> Route 1 buses every 15-20 mins</li>
                      <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                      <li>• <strong>Cost:</strong> $1-2 USD (budget option)</li>
                      <li>• <strong>Frequency:</strong> Very frequent service</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">As a Stopover</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Perfect for:</strong> Colombo to Kandy journey</li>
                      <li>• <strong>Stop duration:</strong> 1-3 hours recommended</li>
                      <li>• <strong>Activities:</strong> Visit spice garden, lunch break</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Perfect stopover point when traveling between Colombo and Kandy</li>
                    <li>• Many spice gardens offer free tours with shops</li>
                    <li>• Try local kithul treacle products at roadside stalls</li>
                    <li>• The road gets winding after Mawanella towards Kandy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Attractions & Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 scroll-mt-40" id="attractions">Top Attractions & Activities</h2>

          <div className="space-y-8">
            {/* Uthuwankanda */}
            <Card>
              <CardHeader>
                <CardTitle>1. Uthuwankanda Buddhist Temple</CardTitle>
                <CardDescription>Sacred hilltop temple with panoramic views and ancient history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Uthuwankanda.jpg"
                    alt="Uthuwankanda temple complex on hilltop with white dagoba and stunning valley views"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Rising majestically above Mawanella, Uthuwankanda is a sacred Buddhist temple perched on a scenic hilltop that has been a place of worship for over 2,000 years. The temple complex features a beautiful white dagoba (stupa), ancient cave shrines, and meditation areas with breathtaking 360-degree views of the surrounding countryside, including distant mountain ranges and the valley below.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The climb to the top involves around 500 steps through lush forest, but the peaceful atmosphere and spectacular views make it worthwhile. According to legend, this site was visited by ancient kings and has been a meditation retreat for monks throughout history. The temple is especially beautiful at sunrise and sunset when the golden light bathes the dagoba and the views extend for miles across the Sabaragamuwa Province.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-400 dark:border-green-600 mt-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-100 mb-2">Visitor Tip</h4>
                      <p className="text-sm text-green-700 dark:text-gray-200">Visit early morning (6-8 AM) for the best views and to avoid heat. Dress modestly and bring water for the climb. The peaceful atmosphere makes it perfect for meditation and reflection.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Buddhist temple with 2,000+ year history
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular 360-degree panoramic views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation caves and shrines
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful white dagoba and forest surroundings
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saradiyel Gammanaya */}
            <Card>
              <CardHeader>
                <CardTitle>2. Saradiyel Gammanaya (Saradiel&apos;s Village)</CardTitle>
                <CardDescription>Historic hideout of Sri Lanka&apos;s legendary Robin Hood</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Saradiyel Gammanaya is a fascinating historical site that was once the hideout of Utuwankande Saradiel, Sri Lanka&apos;s most famous bandit often called the &quot;Robin Hood of Ceylon.&quot; During the British colonial period in the mid-1800s, Saradiel became a folk hero by robbing from wealthy colonists and corrupt officials while helping poor villagers. His hideout in the hills near Mawanella became legendary.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Today, you can visit this historic location nestled in the jungle-covered hills and see the caves, paths, and natural fortifications where Saradiel and his band evaded capture for years. The site offers insight into this colorful chapter of Sri Lankan history and features interpretive displays about Saradiel&apos;s exploits. The surrounding forest is beautiful, and the area has a mysterious, adventurous atmosphere that brings history to life.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-400 dark:border-amber-600 mt-4">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-100 mb-2">Historical Note</h4>
                      <p className="text-sm text-amber-700 dark:text-gray-200">Saradiel was eventually captured and hanged in 1864, but he remains a folk hero in Sri Lankan culture. His story has inspired movies, songs, and countless legends throughout the country.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic bandit hideout from colonial era
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Learn about Sri Lanka&apos;s &quot;Robin Hood&quot; legend
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Explore caves and jungle paths
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful natural forest surroundings
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Saradiyel Gammanaya historic site showing jungle caves and pathways where the bandit hid"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Kadugannawa Pass */}
            <Card>
              <CardHeader>
                <CardTitle>3. Kadugannawa Pass & Railway</CardTitle>
                <CardDescription>Historic mountain pass with spectacular views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Spectacular view from Kadugannawa pass showing the famous railway loop and mountain scenery"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Just beyond Mawanella lies the famous Kadugannawa Pass, one of the most scenic spots on the Colombo-Kandy road. This historic mountain pass was a major engineering achievement when the road was built, and the views from here are absolutely breathtaking. You can see the winding road snaking through the mountains, the historic railway line making its famous loop, and panoramic views of the surrounding hill country.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The railway line here is particularly impressive - built in the 1860s by British engineers, it includes tunnels, bridges, and a spectacular loop where the train goes around and over itself to gain elevation. There&apos;s a viewpoint where you can stop to take photos and watch trains slowly making their way up or down the pass. The area also has a memorial to the workers who built this remarkable railway.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular panoramic mountain views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Famous railway loop and engineering marvel
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic significance and photo opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cool mountain climate and fresh air
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bible Rock */}
            <Card>
              <CardHeader>
                <CardTitle>4. Bible Rock (Bathalegala)</CardTitle>
                <CardDescription>Iconic mountain landmark with hiking opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Bible Rock, known locally as Bathalegala, is a massive cliff face that rises dramatically from the surrounding landscape near Mawanella. This imposing rock formation gets its name from its resemblance to a closed book when viewed from certain angles. Standing at approximately 798 meters above sea level, it&apos;s one of the most distinctive landmarks in the Kegalle District and offers excellent hiking opportunities for adventure enthusiasts.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The hike to Bible Rock is challenging but rewarding, taking about 2-3 hours to reach the summit. The trail winds through rubber plantations, tropical forest, and rocky terrain before reaching the top where you&apos;re rewarded with spectacular panoramic views of the surrounding countryside. The sheer cliff faces are also popular among rock climbers. The area is rich in biodiversity with various bird species and wildlife along the trail.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Iconic rock formation and landmark
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Challenging but rewarding hiking trail
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular summit views
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Rock climbing opportunities for enthusiasts
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Bible Rock (Bathalegala) showing the massive cliff face rising from lush green landscape"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Devanagala */}
            <Card>
              <CardHeader>
                <CardTitle>5. Devanagala Forest Reserve & Mountain</CardTitle>
                <CardDescription>Pristine forest reserve with hiking and nature trails</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Devanagala mountain rising from dense forest with hiking trails and natural beauty"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Devanagala is a pristine forest reserve located near Mawanella, centered around a scenic mountain that rises to about 1,135 meters. This protected area is a paradise for nature lovers, hikers, and wildlife enthusiasts. The reserve is covered in dense tropical forest and is home to diverse flora and fauna including endemic bird species, butterflies, and occasional sightings of wild elephants and leopards.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Several hiking trails wind through the forest, ranging from easy nature walks to more challenging mountain treks. The trails take you past streams, waterfalls, and through different forest zones. At the summit, you&apos;ll find a small Buddhist temple and stunning views across the Sabaragamuwa Province. The forest is particularly beautiful during early morning when mist clings to the trees and bird calls fill the air.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-400 dark:border-orange-600 mt-4">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-100 mb-2">Nature Tip</h4>
                      <p className="text-sm text-orange-700 dark:text-gray-200">Hire a local guide for the best wildlife spotting opportunities and to learn about the forest ecosystem. Bring binoculars for bird watching and wear appropriate hiking shoes.</p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Protected forest reserve with rich biodiversity
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Multiple hiking trails for different skill levels
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent bird watching and wildlife spotting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Waterfalls, streams, and natural beauty
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sample Itinerary */}
        <section className="mb-12 scroll-mt-40" id="itinerary">
          <h2 className="text-3xl font-bold mb-6">Sample Itinerary</h2>
          
          {/* Stopover Itinerary */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quick Stopover (2-3 hours)</CardTitle>
              <CardDescription>Perfect break when traveling between Colombo and Kandy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">11:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Arrive in Mawanella</h4>
                    <p className="text-sm text-muted-foreground">Stop at the town center and visit the local market. Get a feel for authentic Sri Lankan town life and pick up some fresh fruits or snacks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">11:30 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Quick Temple Visit</h4>
                    <p className="text-sm text-muted-foreground">Visit a nearby local temple or drive past Uthuwankanda for photos. If time permits, make a brief stop at Saradiyel Gammanaya to learn about the legendary bandit&apos;s history.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">12:15 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Lunch at Local Restaurant</h4>
                    <p className="text-sm text-muted-foreground">Enjoy a traditional Sri Lankan rice and curry lunch at one of the popular roadside restaurants. Try multiple curries and don&apos;t miss the curd and treacle for dessert!</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">1:30 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Continue Journey</h4>
                    <p className="text-sm text-muted-foreground">Refreshed and satisfied, continue your journey to Kandy. Watch for the scenic Kadugannawa pass views ahead.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Day Itinerary */}
          <Card>
            <CardHeader>
              <CardTitle>Full Day Experience</CardTitle>
              <CardDescription>Complete exploration of Mawanella and surroundings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">7:00 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Uthuwankanda Temple Climb</h4>
                    <p className="text-sm text-muted-foreground">Start early with the climb to Uthuwankanda Buddhist Temple. Enjoy the cool morning air, peaceful atmosphere, and spectacular 360-degree views from the summit. Allow 1.5-2 hours for the full experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">9:30 AM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Saradiyel Gammanaya Visit</h4>
                    <p className="text-sm text-muted-foreground">Explore the historic hideout of Saradiel, Sri Lanka&apos;s legendary bandit. Walk through the jungle paths, see the caves where he hid, and learn about his fascinating story from the colonial era.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">12:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Lunch</h4>
                    <p className="text-sm text-muted-foreground">Enjoy an authentic rice and curry lunch at a popular local restaurant. Try different curries and save room for curd and treacle!</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">1:30 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Kadugannawa Pass</h4>
                    <p className="text-sm text-muted-foreground">Drive to Kadugannawa Pass viewpoint. Enjoy spectacular mountain views, photograph the famous railway loop, and learn about the area&apos;s history.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">2:30 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Bible Rock or Devanagala</h4>
                    <p className="text-sm text-muted-foreground">Choose between hiking Bible Rock (Bathalegala) for dramatic views and rock climbing opportunities, or exploring Devanagala Forest Reserve for pristine nature trails and wildlife spotting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600 dark:text-blue-400">5:00 PM</div>
                  <div>
                    <h4 className="font-semibold mb-1">Return & Departure</h4>
                    <p className="text-sm text-muted-foreground">Return to town, perhaps stop for tea or fresh juice, before continuing to your next destination or returning to Colombo/Kandy feeling refreshed and fulfilled.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Places */}
        <section className="mb-12 scroll-mt-40" id="nearby-places">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Explore</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Kandy</CardTitle>
                <CardDescription>45 km from Mawanella (1 hour drive)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The cultural capital of Sri Lanka, home to the sacred Temple of the Tooth Relic, beautiful Kandy Lake, botanical gardens, and vibrant cultural shows. A UNESCO World Heritage Site and must-visit destination.
                </p>
                <Badge variant="outline" className="text-xs">1 hour drive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pinnawala Elephant Orphanage</CardTitle>
                <CardDescription>30 km from Mawanella (40 minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Famous elephant orphanage where you can watch rescued elephants bathing in the river, feeding time, and learn about elephant conservation. Home to over 70 elephants of all ages.
                </p>
                <Badge variant="outline" className="text-xs">40 min drive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kegalle</CardTitle>
                <CardDescription>15 km from Mawanella (20 minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The district capital with a bustling market, colonial-era buildings, and access to rubber plantations. Good for experiencing everyday Sri Lankan town life and local shopping.
                </p>
                <Badge variant="outline" className="text-xs">20 min drive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ambuluwawa Tower</CardTitle>
                <CardDescription>35 km from Mawanella (50 minutes)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Unique multi-religious temple complex with a dramatic spiral tower offering 360-degree views. The narrow spiral staircase climb is thrilling and the summit views are spectacular.
                </p>
                <Badge variant="outline" className="text-xs">50 min drive</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12 scroll-mt-40" id="visiting-guide">
          <h2 className="text-3xl font-bold mb-6">Essential Visiting Information</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  When to Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-sm">Best Months:</p>
                  <p className="text-sm text-muted-foreground">January to April (driest weather)</p>
                  <p className="text-sm text-muted-foreground">December to March (peak comfort)</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Monsoon Season:</p>
                  <p className="text-sm text-muted-foreground">May to August (southwest monsoon)</p>
                  <p className="text-sm text-muted-foreground">Can still visit, brings lush greenery</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Best Time of Day:</p>
                  <p className="text-sm text-muted-foreground">Morning: 9 AM - 12 PM (cooler, active)</p>
                  <p className="text-sm text-muted-foreground">Lunch: 12 PM - 2 PM (great restaurant time)</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Temperature:</p>
                  <p className="text-sm text-muted-foreground">22-35°C (72-95°F) year-round</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  What to Bring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Cash:</strong> Small bills for purchases and food</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Comfortable clothes:</strong> Light, casual wear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Walking shoes:</strong> For spice garden tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Umbrella:</strong> For sun or sudden rain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Camera:</strong> For scenic photo opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Reusable bags:</strong> For spice shopping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Practical Tips */}
          <Card className="border-l-4 border-blue-500 mb-6">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">Practical Travel Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Shopping Tips</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Spice garden tours are usually free (no obligation to buy)</li>
                    <li>• Prices are negotiable but already reasonable</li>
                    <li>• Quality is generally excellent compared to tourist areas</li>
                    <li>• Ask about packaging for international travel</li>
                    <li>• Kithul treacle comes in bottles or solid jaggery blocks</li>
                    <li>• Buy spices in sealed packets for freshness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Food & Dining</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rice and curry meals are very affordable ($2-4)</li>
                    <li>• Food is spicy - ask for &quot;mild&quot; if sensitive</li>
                    <li>• Eat where locals eat for best quality</li>
                    <li>• Bottled water widely available</li>
                    <li>• Curd and treacle is a must-try dessert</li>
                    <li>• Lunch hours busy (12-2 PM) - arrive early or late</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Local Etiquette */}
          <Card className="border-l-4 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">Local Etiquette & Cultural Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Temple Visits:</strong> If visiting temples, dress modestly (cover shoulders and knees), remove shoes before entering, and be respectful of worshippers. Ask permission before photographing.
                </p>
                <p>
                  <strong>Language:</strong> While English is understood in tourist areas, learning a few Sinhala phrases like &quot;Ayubowan&quot; (hello) and &quot;Istuti&quot; (thank you) is appreciated by locals.
                </p>
                <p>
                  <strong>Bargaining:</strong> Gentle negotiation is acceptable in spice shops, but be reasonable - prices are already fair. Restaurants have fixed prices.
                </p>
                <p>
                  <strong>Photography:</strong> Always ask permission before photographing people. Locals are generally friendly but appreciate being asked first.
                </p>
                <p>
                  <strong>Tipping:</strong> Not expected in local restaurants but appreciated. 10% is generous. Round up taxi fares or add LKR 100-200 for good service.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Money & Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Budget Guide</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Budget Stopover</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Spice garden tour: Free</li>
                    <li>• Lunch: $2-4 USD</li>
                    <li>• Spices/souvenirs: $5-15 USD</li>
                    <li>• <strong>Total: $7-20 USD</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Mid-Range Visit</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Guided tours: $5-10 USD</li>
                    <li>• Good lunch: $5-8 USD</li>
                    <li>• Shopping: $20-40 USD</li>
                    <li>• Transport: $5-10 USD</li>
                    <li>• <strong>Total: $35-70 USD</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Comfort Day Trip</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Private car/driver: $40-60 USD</li>
                    <li>• Premium experiences: $20-30 USD</li>
                    <li>• Meals & refreshments: $15-20 USD</li>
                    <li>• Shopping: $50-100 USD</li>
                    <li>• <strong>Total: $125-210 USD</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Visit Mawanella?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="text-lg">Authentic Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Unlike touristy destinations, Mawanella offers genuine Sri Lankan experiences. You&apos;ll interact with real locals, eat authentic food, and see traditional industries still thriving in their original form.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Perfect Stopover</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Strategically located halfway between Colombo and Kandy, Mawanella is the ideal place to break your journey, stretch your legs, enjoy a meal, and learn something new about Sri Lankan culture.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="text-lg">Great Value</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Excellent prices on authentic spices, delicious meals at local rates, and free educational experiences make Mawanella outstanding value. You&apos;ll get quality products and experiences without tourist markups.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl">Final Tips for Your Visit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Mawanella may not be on every tourist itinerary, but that&apos;s exactly what makes it special. This charming town offers an authentic slice of Sri Lankan life, where you can experience traditional industries, taste genuine local food, and interact with friendly people who aren&apos;t jaded by mass tourism.
              </p>
              <p className="text-muted-foreground">
                Whether you&apos;re stopping for a quick lunch break or spending a few hours exploring, Mawanella rewards curious travelers with memorable experiences and excellent value. The spice gardens alone are worth the stop, but add in the delicious food, scenic surroundings, and fascinating treacle production, and you have a destination that deserves more attention than it gets.
              </p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Best Visited As Part Of:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Colombo to Kandy journey (perfect midway stop)</li>
                  <li>• Cultural Triangle tour (break from ancient sites)</li>
                  <li>• Spice and culinary tourism route</li>
                  <li>• Day trip from Colombo or Kandy (with nearby attractions)</li>
                  <li>• Hill country exploration starting point</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Mawanella?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let us help you plan your perfect journey through Sri Lanka with authentic stops like Mawanella included in your itinerary.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact-us" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Plan Your Trip
              </Button>
            </Link>
            <Link href="/destinations" passHref legacyBehavior>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore More Destinations
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
