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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Thalpe-beach.jpg"
          alt="Golden sands and turquoise water at Thalpe Beach, Sri Lanka, with coral wells in the foreground"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Thalpe Beach</h1>
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
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to H. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 77 123 4567</span>
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
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Thalpe beach</li>
                      <li>• <strong>Duration:</strong> 6-7 hours total</li>
                      <li>• <strong>Cost:</strong> $3-12 USD (depending on class)</li>
                      <li>• <strong>Note:</strong> Get off at <span className="font-semibold text-blue-600 dark:text-blue-400">Thalpe station</span></li>
                      {/* <li>• <strong>From Nanu Oya:</strong> 8km taxi/tuk-tuk ride to Nuwara Eliya</li> */}
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Thalpe beach</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $4-6 USD (budget-friendly)</li>
                      <li>• <strong>Frequency:</strong> Regular departures from Kandy</li>
                    </ul>
                  </div>
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
                <strong>Important:</strong> Always check the tide times before visiting. The coral can be sharp, and sea urchins sometimes hide in the wells—wear water shoes and step carefully.
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
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Jungle beach Roomassala</CardTitle>
                <CardDescription>A beach with a great atmosphere</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/jungle-beach.jpeg"
                  alt="View of Jungle Beach"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the scenic Jungle Beach with its lush greenery and clear waters. Perfect for a relaxing day trip.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jungle-beach-roomassala" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Kanneliya</CardTitle>
                <CardDescription>Part of a Kanneliya Dediyagala Nakiyadeniya Complex</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Kanneliya.jpg"
                  alt="View of Kanneliya"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the lush Kanneliya rainforest, part of the Sinharaja Forest Reserve. Home to diverse flora and fauna, perfect for nature lovers.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kanneliya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Hummanaya Blowhole</CardTitle>
                <CardDescription>Sri Lanka&apos;s only natural blowhole</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/HummanayaBlowhole.jpeg"
                  alt="Hummanaya Blowhole spraying water high above the rocky coast"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Witness the power of the Indian Ocean at Hummanaya, where water shoots up to 25 meters through a coastal rock crevice. A unique natural wonder and a must-see for nature lovers!
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hummanaya-blowhole" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Mirissa</CardTitle>
                <CardDescription>Best views of the coastline</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Mirissa1.jpg"
                  alt="View of Mirissa"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Mirissa is a picturesque coastal town known for its stunning beaches and vibrant nightlife. Enjoy whale watching, water sports, and delicious seafood.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mirissa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Waligama</CardTitle>
                <CardDescription>Best views of the coastline</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Waligama.jpg"
                  alt="View of Waligama"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Waligama is a charming coastal town known for its stunning beaches and vibrant fishing community. Enjoy fresh seafood, water sports, and breathtaking sunsets.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/waligama" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Hirikatiya</CardTitle>
                <CardDescription>Best views of the coastline and Surfing</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Hirikatiya.jpg"
                  alt="Hirikatiya Beach with surfers riding waves and palm trees lining the shore"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Surfing hotspot with consistent waves suitable for all levels. Relaxed vibe with beachfront cafes. 30 min drive.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hirikatiya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Blue Beach</CardTitle>
                <CardDescription>Beach that can campfire</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Blue-beach.jpg"
                  alt="Large herd of elephants gathering at Minneriya National Park during dry season"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for The Gathering - hundreds of elephants come together during dry season. 1 hour drive.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/nilwella-blue-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Thalpe Beach */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Thalpe Beach</CardTitle>
                <CardDescription>Coral wells & peaceful sands</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Thalpe-beach.jpg"
                  alt="Thalpe Beach coral wells and golden sand with turquoise water"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Discover Thalpe Beach, just south of Galle. Famous for its unique coral wells—natural pools carved into the reef—this quiet beach is perfect for swimming at low tide, relaxing on golden sand, and enjoying local seafood.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
