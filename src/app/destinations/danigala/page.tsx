import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, Star, Calendar, Mountain, Footprints, History, Compass } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Danigala Mountain: The Alien Mountain of Sri Lanka | Complete Guide 2025",
  description:
    "Explore Danigala, the mysterious 'UFO Mountain' of Sri Lanka. Discover ancient legends, alleged alien connections, and hiking details in this comprehensive guide to one of Sri Lanka's most enigmatic locations.",
  keywords: "Danigala Mountain, UFO Mountain Sri Lanka, Alien Mountain, Ravana legends, ancient mysteries, Sri Lanka hiking, megalithic sites, adventure tourism",
  authors: [{ name: "Mystery Explorer" }],
  openGraph: {
    title: "Danigala: Sri Lanka's Mysterious UFO Mountain - Complete Guide 2025",
    description: "Discover the legends, mysteries and hiking trails of Danigala Mountain, known for its unique flat top and ancient connections",
    type: "article",
    images: ["/danigala-mountain.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danigala: Sri Lanka's Mysterious UFO Mountain - Complete Guide 2025",
    description: "Discover the legends, mysteries and hiking trails of Danigala Mountain, known for its unique flat top and ancient connections",
  },
}

export default function DanigalaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/danigala-mountain.jpg"
          alt="The mysterious flat-topped Danigala Mountain rising above the surrounding landscape, showcasing its unique UFO-like appearance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Danigala Mountain</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">The Mysterious UFO Mountain of Sri Lanka</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Aralaganwila, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-1" />
              1,165 ft Elevation
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <History className="w-4 h-4 mr-1" />
              Ancient Mystery Site
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Danigala: Where Ancient Legends Meet Modern Mystery
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-white/90 leading-relaxed font-medium">
            <p className="text-lg mb-4 tracking-wide">
              Rising mysteriously from the landscapes of Sri Lanka&apos;s Aralaganwila region, Danigala 
              Mountain stands as one of the island&apos;s most enigmatic natural formations. Known locally
              as the &quot;UFO Mountain&quot; due to its distinctive flat top and perfect circular shape, this
              geological wonder has captured the imagination of both locals and visitors for generations.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              Standing at 1,165 feet above sea level, Danigala&apos;s most striking feature is its perfectly 
              flat summit plateau, which spans approximately 50 acres. This unique formation has given 
              rise to numerous theories and legends, from ancient chronicles linking it to King Ravana&apos;s 
              flying machine to modern UFO enthusiasts suggesting extraterrestrial connections.
            </p>
            <p className="text-lg mb-4 tracking-wide">
              Beyond its mysterious appearance, Danigala serves as home to significant archaeological 
              findings, including ancient cave inscriptions, megalithic structures, and artifacts that 
              suggest human habitation dating back thousands of years. The mountain&apos;s rich biodiversity 
              and panoramic views make it an increasingly popular destination for hikers, history 
              enthusiasts, and mystery seekers alike.
            </p>
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/40 border-l-4 border-amber-600 dark:border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notice</h4>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Access Requirements:</strong> A guide is recommended for the hike. Local 
                  permission may be required for certain areas.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100 mb-2">
                  <strong>Best Time:</strong> Early morning starts are recommended to avoid afternoon heat 
                  and for the best photography conditions.
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-100">
                  <strong>Safety:</strong> Carry sufficient water and wear appropriate hiking gear. Some 
                  sections can be challenging during wet weather.
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
                    <Mountain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Height:</strong> 1,165 feet (355 meters)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Summit Area:</strong> ~50 acres
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Hiking Time:</strong> 2-3 hours (round trip)
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Location:</strong> Aralaganwila, Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Footprints className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Difficulty:</strong> Moderate
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-gray-800 dark:text-gray-100">
                      <strong>Best Season:</strong> June to September
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legends and Mysteries */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ancient Legends and Modern Mysteries</h2>
          
          <div className="grid gap-8">
            {/* Ravana Connection */}
            <Card className="border-l-4 border-l-purple-600 dark:border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  The Ravana Legend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <Image
                      src="/danigala-ravana.jpg"
                      alt="Ancient carvings and structures believed to be connected to King Ravana's era"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 mb-4">
                      According to ancient Sri Lankan chronicles and local legends, Danigala played a
                      significant role in the story of King Ravana. The mountain&apos;s flat top is said to
                      have served as a landing site for his flying machine, the &quot;Dandu Monara&quot; or
                      Wooden Peacock.
                    </p>
                    <div className="space-y-3 text-gray-800 dark:text-white/90">
                      <p>Historical connections include:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Ancient stone carvings depicting aerial vehicles</li>
                        <li>Megalithic structures aligned with astronomical events</li>
                        <li>References in palm leaf manuscripts</li>
                        <li>Traditional stories passed through generations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UFO Theories */}
            <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Modern UFO Theories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 dark:text-white/90 mb-4">
                  In recent decades, Danigala has attracted attention from UFO researchers and ancient 
                  astronaut theorists due to its unusual geological features and unexplained phenomena. 
                  The perfectly flat summit and circular shape have led to various theories about 
                  possible extraterrestrial connections.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Reported Phenomena</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Unusual light phenomena</li>
                      <li>• Electromagnetic anomalies</li>
                      <li>• Unexplained geometric patterns</li>
                      <li>• Ancient technological artifacts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Scientific Studies</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Geological surveys</li>
                      <li>• Archaeological investigations</li>
                      <li>• Magnetic field measurements</li>
                      <li>• Satellite imaging analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hiking Information */}
        <section className="mb-12">
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-50">
                <Footprints className="w-5 h-5 text-green-600 dark:text-green-400" />
                Hiking Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-800 dark:text-white/90">
                  The hike to Danigala&apos;s summit offers a unique blend of natural beauty, historical
                  significance, and mysterious atmosphere. While moderate in difficulty, proper 
                  preparation is essential for a safe and enjoyable experience.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-900 dark:text-green-50">Trail Details</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Trail Length: 3.5 km (round trip)</li>
                      <li>• Elevation Gain: 355 meters</li>
                      <li>• Duration: 2-3 hours</li>
                      <li>• Difficulty: Moderate</li>
                      <li>• Terrain: Rocky paths, forest trails</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-900 dark:text-green-50">What to Bring</h4>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90">
                      <li>• Plenty of water (2L minimum)</li>
                      <li>• Proper hiking shoes</li>
                      <li>• Sun protection</li>
                      <li>• Camera equipment</li>
                      <li>• First aid supplies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-50">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                How to Reach Danigala
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">From Colombo</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• <strong>Distance:</strong> 265 km</li>
                    <li>• <strong>Duration:</strong> 5-6 hours</li>
                    <li>• <strong>Route:</strong> Via A1 and A11</li>
                    <li>• <strong>Transport:</strong> Private vehicle recommended</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-50">Local Access</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• 12 km from Aralaganwila town</li>
                    <li>• Local guides available in town</li>
                    <li>• 4x4 vehicle recommended for last stretch</li>
                    <li>• Limited public transport options</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-50 font-medium">
                  <strong>💡 Pro Tip:</strong> Arrange your guide in advance through local guesthouses 
                  or tour operators. They can also help with necessary permissions and transportation.
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
                Photography Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Best Photo Spots</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• <strong>Summit Edge:</strong> Panoramic views</li>
                    <li>• <strong>Ancient Inscriptions:</strong> Historical details</li>
                    <li>• <strong>Megalithic Structures:</strong> Mystery elements</li>
                    <li>• <strong>Sunrise/Sunset Points:</strong> Golden hour shots</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-50">Photography Tips</h4>
                  <ul className="space-y-2 text-gray-800 dark:text-white/90">
                    <li>• Early morning for best light</li>
                    <li>• Wide-angle lens recommended</li>
                    <li>• Tripod for low-light shots</li>
                    <li>• Drone photography requires permits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
