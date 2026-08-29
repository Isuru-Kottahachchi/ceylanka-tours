import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Calendar, Star, Camera, CheckCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thalpe Beach Sri Lanka: Complete Travel Guide 2025 | Coral Wells & Natural Beauty",
  description: "Discover Thalpe Beach, Sri Lanka&apos;s hidden coastal gem. Complete travel guide with tips, photos, best time to visit, and everything you need to know about the famous coral wells, sea urchins, and more.",
  keywords: "Thalpe Beach, Sri Lanka, coral wells, sea urchins, travel guide, best beaches, southern coast, swimming, snorkeling, tourism",
  authors: [{ name: "Sri Lanka Beach Expert" }],
  openGraph: {
    title: "Thalpe Beach Sri Lanka: Complete Travel Guide 2025",
    description: "Your ultimate guide to Thalpe Beach, including coral wells and sea urchin safety tips.",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalpe Beach Sri Lanka: Complete Travel Guide 2025",
    description: "Your ultimate guide to Thalpe Beach, including coral wells and sea urchin safety tips.",
  },
};

export default function ThalpeBeachGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Thalpe-beach.jpg"
          alt="Golden sands and turquoise water at Thalpe Beach, Sri Lanka, with coral wells in the foreground"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Thalpe Beach</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Hidden Coral Coast</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Star className="w-4 h-4 mr-1" />
              Unique Coral Wells
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Calendar className="w-4 h-4 mr-1" />
              Best: December–April
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Thalpe Beach</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Thalpe Beach is a peaceful stretch of golden sand just south of Galle. Known for its crystal-clear water, palm trees, and famous coral wells, Thalpe is perfect for relaxing, swimming, and exploring Sri Lanka&apos;s southern coast.
            </p>
            <p className="text-lg">
              The beach is less crowded than Unawatuna or Mirissa, making it ideal for families and couples. Early mornings and late afternoons are the best times to enjoy the calm sea and gentle breeze.
            </p>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row gap-8 mb-10 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Thalpe beach Beach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Location:</strong> 10 km south of Galle
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Highlight:</strong> Natural coral wells
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Best Season:</strong> December–April
                    </span>
                  </div>
               
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-pink-500" />
                    <span>
                      <strong>Photo Spots:</strong> Sunrise, coral pools, palm trees
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Family Friendly:</strong> Yes (watch for sea urchins)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Safety:</strong> Beware of sea urchins in the coral wells
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* How to Get to  */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Thalpe beach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 180km (112 miles) from Colombo (Depends on the road Express way or coastal road)</li>
                      <li>• <strong>Duration:</strong> 4-5 hours</li>
                      <li>• <strong>Cost:</strong> Around $60 USD</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div data-promo="true" className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to H. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                  </div>
                  {/* <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Thalpe beach</li>
                      <li>• <strong>Duration:</strong> 6-7 hours total</li>
                      <li>• <strong>Cost:</strong> $3-12 USD (depending on class)</li>
                      <li>• <strong>Note:</strong> Get off at <span className="font-semibold text-blue-600 dark:text-blue-400">Thalpe station</span></li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Thalpe beach</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $4-6 USD (budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Regular departures from Colombo</li>
                    </ul>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* The Famous Coral Wells */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Famous Coral Wells</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/Thalpe-coral-ponds.jpg"
                alt="Natural coral wells at Thalpe Beach, Sri Lanka, with clear water and ocean beyond"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The unique coral wells of Thalpe hand cut pools in the reef, perfect for a dip at low tide
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Thalpe&apos;s coral wells are shallow pools carved into the coral reef by local fishermen decades ago. These natural pools fill with seawater at high tide and are perfect for a refreshing dip when the tide is low. The water is clear and calm, making it a favorite spot for families and Instagram photos.
              </p>
              <p>
                <strong>Important:</strong> Always check the tide times before visiting. The coral can be sharp, and sea urchins sometimes hide in the well wear water shoes and step carefully.
              </p>
            </div>
          </div>
        </section>

        {/* What to Do at Thalpe Beach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Do at Thalpe Beach</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Swim in the coral wells at low tide</li>
            <li>Relax on the soft sand under palm trees</li>
            <li>Try local seafood at beachside cafes</li>
            <li>Watch the sunrise or sunset over the Indian Ocean</li>
            <li>Snorkel (with care) to spot colorful fish and coral</li>
            <li>Take photos of the unique reef and pools</li>
          </ul>
        </section>

        {/* Safety & Sea Urchins */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 dark:from-red-900 dark:to-pink-900 dark:border-red-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-300" />
                Safety: Watch for Sea Urchins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-red-800 dark:text-red-200">
                Sea urchins are sometimes found in the coral wells and shallow reef. Their spines are sharp and can be painful if stepped on. Always look before you step, and consider wearing water shoes for extra protection.
              </p>
              <ul className="list-disc pl-5 text-sm mb-2 text-red-900 dark:text-red-200">
                <li>If stung, remove spines gently and seek medical help if needed</li>
                <li>Do not touch or disturb sea life</li>
                <li>Supervise children closely in the water</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* How to Get There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Get to Thalpe Beach</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-6">
            <ul>
              <li><strong>By Road:</strong> Thalpe is about 10 km south of Galle on the Matara Road (A2). Tuk-tuks, taxis, and buses are available from Galle and Unawatuna.</li>
              <li><strong>By Train:</strong> The nearest railway station is Unawatuna, just a short tuk-tuk ride away.</li>
              <li><strong>By Air:</strong> The closest airport is Koggala (domestic), or Bandaranaike International Airport (Colombo) for international flights.</li>
            </ul>
            <p>
              The beach is easy to find and well signposted. Parking is available near the main beach entrance.
            </p>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700">Best Time to Visit Thalpe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                The best time to visit Thalpe Beach is from December to April, when the sea is calm and the weather is sunny. Avoid the southwest monsoon (May–September), as the sea can be rough and swimming is not safe.
              </p>
            </CardContent>
          </Card>
        </section>
        
        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-2">What Else to See Nearby</h2>
          <p className="text-muted-foreground mb-8">More places worth visiting on the southern coast</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Jungle Beach */}
            <Link href="/destinations/jungle-beach-roomassala" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/jungle-beach.jpeg" alt="Jungle Beach Roomassala" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">3 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Jungle Beach Roomassala</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">A quiet beach surrounded by forest. Clear water and a relaxed atmosphere.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

            {/* Galle Fort */}
            <Link href="/destinations/galle-fort" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/Galle-Fort.jpg" alt="Galle Fort" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">10 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Galle Fort</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">UNESCO World Heritage fortress with Dutch colonial streets and ocean views.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

            {/* Mirissa */}
            <Link href="/destinations/mirissa" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/Mirissa1.jpg" alt="Mirissa Beach" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">25 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Mirissa</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">Whale watching, surfing, fresh seafood, and good sunsets from Parrot Rock.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

            {/* Weligama */}
            <Link href="/destinations/waligama" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/Waligama.jpg" alt="Weligama Bay" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">20 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Weligama</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">Calm bay good for beginner surfers. Known for stilt fishermen and fresh catch.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

            {/* Hiriketiya */}
            <Link href="/destinations/hirikatiya" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/Hirikatiya.jpg" alt="Hiriketiya Beach" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">30 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Hiriketiya</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">Crescent-shaped surf bay with beachfront cafes and a laid-back crowd.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

            {/* Hummanaya Blowhole */}
            <Link href="/destinations/hummanaya-blowhole" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/HummanayaBlowhole.jpeg" alt="Hummanaya Blowhole" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">40 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Hummanaya Blowhole</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">Sri Lanka&apos;s only natural blowhole. Ocean water shoots up through coastal rock.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

            {/* Nilwella Blue Beach */}
            <Link href="/destinations/nilwella-blue-beach" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/Blue-beach.jpg" alt="Nilwella Blue Beach" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">32 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Nilwella Blue Beach</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">Quiet beach with a small walkable island. Popular for campfires and snorkeling.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

            {/* Kanneliya */}
            <Link href="/destinations/kanneliya" className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block aspect-[4/3]">
              <Image src="/Kanneliya.jpg" alt="Kanneliya Rainforest" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">35 km</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">Kanneliya Rainforest</h3>
                <p className="text-white font-medium text-xs leading-snug mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">Part of the KDN biosphere reserve. Good for nature walks and birdwatching.</p>
                <span className="inline-block bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">See More →</span>
              </div>
            </Link>

          </div>
        </section>


        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Enjoy Your Thalpe Adventure!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Thalpe Beach is a true hidden gem on Sri Lanka&apos;s southern coast. Whether you come for the coral wells, the peaceful sand, or the beautiful sunsets, you&apos;ll leave with wonderful memories. Respect the reef, watch for sea urchins, and enjoy your time in paradise!
              </p>
              <p className="text-muted-foreground font-medium">
                Safe travels and happy beach days! 🏖️🌊
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
