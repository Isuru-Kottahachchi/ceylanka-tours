import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Leaf, Building, History, Sun } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Wasgamuwa National Park: Complete Safari Guide 2025 | Wildlife Sanctuary",
  description:
    "Explore the untamed wilderness of Wasgamuwa National Park, a hidden gem of Sri Lanka's wildlife. Complete guide with safari details, best times to visit, and essential tips for wildlife enthusiasts.",
  keywords: "Wasgamuwa National Park, Sri Lanka safari, wildlife sanctuary, elephant corridor, Sri Lankan wildlife, nature reserve, bird watching, ancient ruins",
  authors: [{ name: "Wildlife Explorer" }],
  openGraph: {
    title: "Wasgamuwa National Park: Complete Safari Guide 2025",
    description: "Discover the pristine wilderness and rich biodiversity of Wasgamuwa National Park",
    type: "article",
    images: ["/wasgamuwa-main.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasgamuwa National Park: Complete Safari Guide 2025",
    description: "Discover the pristine wilderness and rich biodiversity of Wasgamuwa National Park",
  },
}

export default function WasgamuwaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/wasgamuwa-main.jpg"
          alt="Scenic landscape of Wasgamuwa National Park with wild elephants grazing in their natural habitat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Wasgamuwa National Park</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">A Hidden Paradise of Sri Lankan Wildlife</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Polonnaruwa District
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Leaf className="w-4 h-4 mr-1" />
              Wildlife Sanctuary
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <History className="w-4 h-4 mr-1" />
              Est. 1984
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Discover Wasgamuwa: Sri Lanka&apos;s Untamed Wilderness
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-white/90 leading-relaxed font-medium">
            <p className="text-lg mb-4 tracking-wide">
              Nestled between the Mahaweli and Amban Rivers, Wasgamuwa National Park stands as one of 
              Sri Lanka&apos;s most pristine wildlife sanctuaries. Established in 1984, this 36,948-hectare 
              paradise serves as a crucial elephant corridor and hosts a remarkable diversity of flora 
              and fauna.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              The park&apos;s name "Wasgamuwa" derives from the words "Walas Gamuwa," meaning the "woods 
              of bear," reflecting its historical significance as a habitat for sloth bears. Today, 
              while bears still roam these forests, the park is particularly renowned for its 
              substantial elephant population and peaceful atmosphere away from the more crowded 
              safari circuits.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              Beyond its wildlife significance, Wasgamuwa holds ancient ruins dating back to the 
              Polonnaruwa period, including ancient tanks and Buddhist temples, making it a unique 
              blend of natural and cultural heritage.
            </p>
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/40 border-l-4 border-amber-600 dark:border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Safari Guidelines</h4>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Entry Requirements:</strong> Visitors must obtain permits from the Department 
                  of Wildlife Conservation. Safari must be conducted with registered guides and vehicles.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Safety:</strong> Maintain safe distance from wildlife. Never exit the vehicle 
                  during safari except in designated areas.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100">
                  <strong>Best Time:</strong> November to May offers optimal wildlife viewing conditions.
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
                Essential Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Area:</strong> 36,948 hectares
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Climate:</strong> Dry zone tropical
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Safari Duration:</strong> 3-4 hours
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Peak Season:</strong> November-May
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Elevation:</strong> 76-536m
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Habitat:</strong> Dry-mixed evergreen
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wildlife */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Wildlife and Biodiversity</h2>
          
          <div className="grid gap-8">
            {/* Elephants */}
            <Card className="border-l-4 border-l-gray-600 dark:border-l-gray-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  Elephants of Wasgamuwa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <Image
                      src="/wasgamuwa-elephants.jpg"
                      alt="Wild elephants roaming in Wasgamuwa National Park"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 mb-4">
                      Wasgamuwa is home to significant herds of Sri Lankan elephants, known for their 
                      peaceful nature compared to other regions. The park serves as a vital elephant 
                      corridor, allowing these magnificent creatures to move between different habitats. 
                      Studies have shown that Wasgamuwa&apos;s elephant population exhibits unique social 
                      behaviors and migration patterns, making it an important site for elephant conservation 
                      and research.
                    </p>
                    <p className="text-gray-800 dark:text-white/90 mb-4">
                      The park&apos;s elephant herds are particularly known for their family-oriented behavior, 
                      with large matriarchal groups often seen protecting their young and teaching them 
                      essential survival skills. These elephants have adapted well to the park&apos;s varying 
                      terrain, moving between the riverine forests and grasslands as seasons change.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                      <li>• Large family herds</li>
                      <li>• Natural behavior patterns</li>
                      <li>• Year-round presence</li>
                      <li>• Important migration routes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Wildlife */}
            <Card className="border-l-4 border-l-green-600 dark:border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Diverse Wildlife
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Mammals</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Sri Lankan Sloth Bear</li>
                      <li>• Purple-faced Langur</li>
                      <li>• Sri Lankan Leopard</li>
                      <li>• Water Buffalo</li>
                      <li>• Golden Jackal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Birds</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Sri Lanka Junglefowl</li>
                      <li>• Red-faced Malkoha</li>
                      <li>• Endemic Spurfowl</li>
                      <li>• Various Eagle species</li>
                      <li>• Painted Stork</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ancient Ruins */}
        <section className="mb-12">
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-50">
                <History className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Historical Heritage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-800 dark:text-white/90 mb-4">
                  Wasgamuwa&apos;s landscape is dotted with archaeological treasures dating back to the 
                  ancient Polonnaruwa period, adding a cultural dimension to its natural splendor. 
                  The park&apos;s territory was once part of a thriving ancient civilization, as evidenced 
                  by the numerous ruins and irrigation works found throughout the area.
                </p>
                <p className="text-gray-800 dark:text-white/90">
                  The ancient Kalinga Yoda Ela, a remarkable feat of hydraulic engineering, stands as 
                  testament to the advanced civilization that once flourished here. This canal system, 
                  built during the reign of King Parakramabahu I (1153-1186 CE), showcases the 
                  sophisticated water management techniques of ancient Sri Lanka.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-50">Ancient Sites</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Kalinga Yoda Ela</li>
                      <li>• Ancient Buddhist temples</li>
                      <li>• Historic water tanks</li>
                      <li>• Stone inscriptions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-50">Historical Significance</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Ancient irrigation systems</li>
                      <li>• Religious monuments</li>
                      <li>• Trade route remnants</li>
                      <li>• Cultural heritage sites</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Information */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-50">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Planning Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Access Details</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Located 225km from Colombo</li>
                    <li>• Accessible via Polonnaruwa</li>
                    <li>• 4WD vehicle required</li>
                    <li>• Prior booking recommended</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Accommodation</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Wildlife bungalows with full amenities</li>
                    <li>• Eco-friendly camping facilities</li>
                    <li>• Luxury safari lodges nearby</li>
                    <li>• Traditional village homestays</li>
                    <li>• Park circuit bungalows</li>
                    <li>• Mobile camping options</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-800 dark:text-white/90">
                    Accommodation ranges from basic camping to luxury lodges. Wildlife bungalows 
                    offer authentic safari experience with modern comforts. Advance booking is 
                    essential, especially during peak season.
                  </p>
                </div>
              </div>
              <h4 className="font-semibold mb-3 mt-6 text-blue-900 dark:text-blue-50">Seasonal Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-100">Dry Season (May-September)</h5>
                  <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                    <li>• Best wildlife viewing opportunities</li>
                    <li>• Animals concentrate near water bodies</li>
                    <li>• Easier navigation of park tracks</li>
                    <li>• Ideal photography conditions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-100">Wet Season (October-April)</h5>
                  <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                    <li>• Lush green landscapes</li>
                    <li>• Migratory birds present</li>
                    <li>• Fewer tourists</li>
                    <li>• Challenging but rewarding safaris</li>
                  </ul>
                </div>
              </div>
              
              <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Available Activities</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                  <li>• Guided wildlife safaris (morning/evening)</li>
                  <li>• Bird watching tours</li>
                  <li>• Archaeological site visits</li>
                  <li>• Nature photography workshops</li>
                </ul>
                <ul className="space-y-1 text-sm text-gray-800 dark:text-white/90">
                  <li>• Guided nature walks (with permits)</li>
                  <li>• Cultural village visits</li>
                  <li>• Research opportunities</li>
                  <li>• Educational programs</li>
                </ul>
              </div>

              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-50 font-medium">
                  <strong>💡 Pro Tip:</strong> Book morning safaris (5:30-9:30 AM) for best wildlife sightings. 
                  Afternoon sessions (2:30-6:00 PM) are ideal for bird watching and visiting historical sites. 
                  Consider a full-day safari package to maximize your wildlife viewing opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photography Guide */}
        <section className="mb-12">
          <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-900 dark:text-pink-50">
                <Camera className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                Safari Photography Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Best Photo Opportunities</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Early morning elephant herds</li>
                    <li>• Water holes at dawn</li>
                    <li>• Ancient ruins backdrop</li>
                    <li>• River crossing points</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Camera Tips</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Telephoto lens (200-600mm) recommended</li>
                    <li>• Fast shutter speeds (1/1000+) for wildlife</li>
                    <li>• Image stabilization essential</li>
                    <li>• Professional dust protection gear</li>
                    <li>• Wide-angle for landscapes (16-35mm)</li>
                    <li>• Multiple camera bodies if possible</li>
                    <li>• Extra batteries and memory cards</li>
                    <li>• Monopod or beanbag support</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-800 dark:text-white/90">
                    Morning light (6-8 AM) and evening golden hour (4-6 PM) offer the best 
                    photographic opportunities. Consider weather-sealed equipment during wet season.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
