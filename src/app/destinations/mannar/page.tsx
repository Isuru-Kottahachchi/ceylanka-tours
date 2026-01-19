"use client"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, CheckCircle, Star, Waves, Users, Compass } from "lucide-react"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"



export default function MannarGuide() {


  const mannarCarouselImages = [
    {
      src: "/Baobab.jpg",
      alt: "Baobab trees at sunset on Mannar Island"
    },
    {
      src: "/Mannar.jpg",
      alt: "Pristine beach landscape on Mannar Island"
    },
    {

      src: "/placeholder.svg?height=400&width=600&text=Mannar+Island+View",
      alt: "Aerial view of Mannar Island and Adam's Bridge"
    }]


  const mannarBeachesImages = [
    { src: "/placeholder.svg?height=300&width=400&text=Mannar+Beaches", alt: "Pristine beaches of Mannar with white sand and clear waters" },
    { src: "/Mannar.jpg", alt: "Sunset over Mannar Island beach" }
  ]

  const mannarReligiousImages = [
    { src: "/placeholder.svg?height=300&width=400&text=Religious+Sites", alt: "Ancient temple architecture in Mannar showing diverse religious heritage" },
    { src: "/placeholder.svg?height=300&width=400&text=Church+Mosque+Temple", alt: "Various religious sites in Mannar including temples, churches and mosques" }
  ]

  const doricBungalowImages = [

    { src: "/Doric-Bungalow.jpg", alt: "Doric Bungalow interior view", caption: "Elegant interior design of the Doric Bungalow in Mannar" },
    { src: "/Doric-Bungalow1.jpg", alt: "Doric Bungalow garden view", caption: "Past view of the garden surrounding the Doric Bungalow in Mannar" }
  ]

  const talaimannarLighthouseImages = [
    { src: "/Talaimannar-Pier.jpg", alt: "Talaimannar Lighthouse exterior view", caption: "Historic Talaimannar Lighthouse on Mannar Island" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mannar.jpg"
          alt="Ancient baobab trees silhouetted against sunset sky in Mannar Island with pristine landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mannar Island</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s biggest Island</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Northern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Waves className="w-4 h-4 mr-1" />
              Pristine Beaches
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Compass className="w-4 h-4 mr-1" />
              Ancient Baobab Trees
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Mannar: Where Time Stands Still</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Discover the enchanting island of Mannar, Sri Lanka&apos;s best-kept secret in the far north, where ancient
              baobab trees stand as silent sentinels over pristine beaches and a landscape that seems untouched by time.
              Connected to the mainland by a causeway, this mystical island offers a unique blend of natural wonders,
              cultural heritage, and spiritual significance that sets it apart from any other destination in Sri Lanka.
            </p>
            <p className="text-lg">
              From the legendary Adam&apos;s Bridge (Rama Setu) that connects Sri Lanka to India, to the majestic baobab
              trees that create an almost African landscape in the heart of the Indian Ocean, Mannar is a place where
              mythology meets reality. This remote paradise offers pristine beaches, rich birdlife, ancient temples, and
              a pace of life that allows visitors to truly disconnect and experience the raw beauty of untouched Sri
              Lanka.
            </p>
          </div>
        </section>
        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Mannar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Northern Province, connected by causeway
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Speciality:</strong> Biggest Island in Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Coastline:</strong> 130 km of pristine beaches
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous for:</strong> Ancient baobab trees
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Population:</strong> Diverse Tamil, Muslim, Sinhalese
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Best Time:</strong> October to March
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2-3 days
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
                  How to Get to Mannar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 180km (112 miles) from Colombo</li>
                      <li>• <strong>Duration:</strong> 4-5 hours</li>
                      <li>• <strong>Cost:</strong> $60-85 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Mannar. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
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
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Mannar railway station</li>
                      <li>• <strong>Duration:</strong> 6-7 hours total</li>
                      <li>• <strong>Cost:</strong> (depending on class)</li>
                      <li>• <strong>Note:</strong> Get off at <span className="font-semibold text-blue-600 dark:text-blue-400">Mannar railway station</span></li>
                      {/* <li>• <strong>From Mannar:</strong> 8km taxi/tuk-tuk ride to Nuwara Eliya</li> */}
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Mannar bus stand</li>
                      <li>• <strong>Duration:</strong> 5-6 hours</li>
                      <li>• <strong>Cost:</strong> $4-6 USD (budget-friendly)</li>
                      {/* <li>• <strong>Frequency:</strong> Regular departures from Kandy</li> */}
                    </ul>
                  </div>
                </div>
                {/* <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">🚂 Special Note about Train Journey</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The train journey from Kandy to Nanu Oya is considered one of the world&apos;s most scenic train rides, passing through breathtaking tea plantations, mountain tunnels, and misty landscapes. <strong>Important:</strong> Nanu Oya is the closest railway station to Nuwara Eliya - you&apos;ll need to take a taxi or tuk-tuk for the final 8km uphill journey to the town center.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book reserved seats in advance for the best views</li>
                    <li>• Sit on the right side for better mountain scenery</li>
                    <li>• Bring warm clothes - it gets cool in the mountains</li>
                    <li>• Pre-arrange transport from Nanu Oya station</li>
                  </ul>
                </div> */}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Natural Wonders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Natural Wonders & Unique Landscapes</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Ancient Baobab Trees</CardTitle>
                <CardDescription>Mystical giants from another continent</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <ImageCarousel images={mannarCarouselImages} />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Mannar is home to some of the most magnificent baobab trees outside of Africa and Madagascar.
                      These ancient giants, some over 700 years old, create a surreal landscape that transports visitors
                      to another continent entirely.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 100 ancient baobab trees scattered across the island
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Some trees estimated to be 700+ years old
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique bottle-shaped trunks up to 20 meters in circumference
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular at sunrise and sunset photography
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Adam&apos;s Bridge (Rama Setu)</CardTitle>
                <CardDescription>Legendary causeway said to connect Sri Lanka to India in ancient texts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This chain of limestone shoals, coral, and sandstone extends 30 km from Mannar to Rameswaram in India. Steeped in mythology and mentioned in the Ramayana, it&apos;s both a geological wonder and a site of immense spiritual significance.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>Ramayana Connection:</strong> According to the ancient Hindu epic <em>Ramayana</em>, Adam&apos;s Bridge is believed to be the legendary <strong>Rama Setu</strong> built by Lord Rama&apos;s vanara (monkey) army, led by the devoted Hanuman. The bridge was constructed to allow Rama and his allies to cross from India to Lanka (Sri Lanka) to rescue his wife Sita from the king Ravana. Hanuman&apos;s pivotal role included leaping across the sea to locate Sita and later helping to organize the construction of this massive causeway using floating stones inscribed with Rama&apos;s name.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      For millions of Hindus, Adam&apos;s Bridge is not only a natural marvel but also a sacred symbol of faith, devotion, and the triumph of good over evil. Pilgrims and visitors are inspired by the story of Hanuman&apos;s strength, loyalty, and the collective effort of Rama&apos;s army, which are celebrated in festivals and rituals to this day.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        30 km chain of natural formations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Central to the Ramayana epic and Hanuman legends
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important pilgrimage site for Hindus
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique marine ecosystem and coral formations
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        {
                          src: "/Ram-Setu.jpg",
                          alt: "Ram Setu or Adam's Bridge aerial view",
                          caption: "Aerial view of the Ram Setu",
                          title: "Ram Setu Vista"
                        },
                        {
                          src: "/Riverston-Peak1.jpg",
                          alt: "The famous Riverston Wind Gap",
                          caption: "Experience the powerful winds at Wind Gap",
                          title: "Riverston Wind Gap"
                        },
                        {
                          src: "/Riverston-Peak2.jpg",
                          alt: "The famous Riverston Wind Gap",
                          caption: "Experience the powerful winds at Wind Gap",
                          title: "Riverston Wind Gap"
                        },
                        {
                          src: "/Riverston-Peak3.jpg",
                          alt: "The famous Riverston Wind Gap",
                          caption: "Experience the powerful winds at Wind Gap",
                          title: "Riverston Wind Gap"
                        },
                        {
                          src: "/Riverston-Peak4.jpg",
                          alt: "The famous Riverston Wind Gap",
                          caption: "Experience the powerful winds at Wind Gap",
                          title: "Riverston Wind Gap"
                        },
                      ]}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Pristine Beaches & Coastal Beauty</CardTitle>
                <CardDescription>Untouched shorelines and crystal-clear waters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <ImageCarousel images={mannarBeachesImages} />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Mannar&apos;s 130 km coastline offers some of Sri Lanka&apos;s most pristine and undeveloped beaches. These
                      secluded shores provide perfect solitude and stunning natural beauty away from commercial tourism.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        130 km of largely undeveloped coastline
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Crystal-clear waters perfect for swimming
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Excellent for shell collecting and beachcombing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular sunsets over the Gulf of Mannar
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Heritage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cultural Heritage & Historical Sites</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>4. Mannar Fort</CardTitle>
                <CardDescription>Portuguese colonial fortress by the sea</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/Mannar-Fort.jpg", alt: "Historic Mannar Fort with stone walls and ramparts overlooking the sea" },
                        { src: "/Mannar-Fort1.jpg", alt: "Inside Mannar Fort ramparts and walkways" },
                        { src: "/Mannar-Fort2.jpg", alt: "Inside Mannar Fort ramparts and walkways" }
                      ]}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built by the Portuguese in 1560 and later expanded by the Dutch, Mannar Fort stands as a testament
                      to the island&apos;s strategic importance in colonial maritime trade routes.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Built in 1560 by Portuguese colonizers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Expanded and modified by Dutch rulers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Strategic location overlooking the sea
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved ramparts and bastions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>4. Doric Bungalow </CardTitle>
                <CardDescription>Portuguese colonial fortress by the sea</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <ImageCarousel images={doricBungalowImages} />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 19th century, Doric Bungalow is a fine example of colonial architecture, was the private residence of fisrt British Governor of Ceylon, Frederick North. The bungalow is known for its unique Doric columns and panoramic views of the surrounding landscape.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        First British Governor of Ceylon, Frederick North&apos;s private residence
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Famous for haunting stories and paranormal activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Strategic location overlooking the sea
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved ramparts and bastions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>4. Talaimannar Pier and Lighthouse </CardTitle>
                <CardDescription>Light house which is a famous landmark in Mannar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <ImageCarousel images={talaimannarLighthouseImages} />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built in the 20th century, Talaimannar Lighthouse is a prominent maritime navigation aid and a symbol of Mannar&apos;s coastal heritage. The lighthouse offers stunning views of the Indian Ocean and the surrounding landscape.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        First British Governor of Ceylon, Frederick North&apos;s private residence
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Famous for haunting stories and paranormal activities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Strategic location overlooking the sea
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved ramparts and bastions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>5. Ancient Temples & Religious Sites</CardTitle>
                <CardDescription>Sacred spaces of multiple faiths</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Mannar&apos;s diverse religious heritage is reflected in its ancient temples, churches, and mosques,
                      showcasing the harmonious coexistence of different faiths throughout history.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Hindu temples with unique architecture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historic Catholic churches from colonial era
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional mosques serving Muslim community
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful coexistence of different faiths
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <ImageCarousel images={mannarReligiousImages} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wildlife & Nature */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wildlife & Natural Habitats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Migratory Birds</CardTitle>
                <CardDescription>Important stopover for bird migration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=350&text=Migratory+Birds"
                  alt="Flocks of migratory birds in Mannar wetlands and coastal areas"
                  width={350}
                  height={200}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-semibold mb-2">Seasonal Bird Paradise</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Mannar serves as a crucial stopover point for thousands of migratory birds traveling between Europe
                    and Southeast Asia.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Over 150 bird species recorded</li>
                    <li>• Peak migration: October-March</li>
                    <li>• Flamingos, pelicans, and waders</li>
                    <li>• Important wetland ecosystems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Marine Life</CardTitle>
                <CardDescription>Rich underwater biodiversity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=350&text=Marine+Life"
                  alt="Diverse marine life in the waters around Mannar including coral reefs and fish"
                  width={350}
                  height={200}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-semibold mb-2">Gulf of Mannar Marine Park</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The waters around Mannar are part of a protected marine ecosystem with exceptional biodiversity.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Coral reefs and seagrass beds</li>
                    <li>• Dugongs (sea cows) occasionally spotted</li>
                    <li>• Diverse fish species and sea turtles</li>
                    <li>• Important for marine conservation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visiting Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Visiting Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Getting There</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 6-7 hours drive from Colombo</li>
                    <li>• Train to Medawachchiya + bus to Mannar</li>
                    <li>• Domestic flights to Jaffna + road transfer</li>
                    <li>• Private vehicle recommended for flexibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• October to March (dry season)</li>
                    <li>• Peak bird migration: December-February</li>
                    <li>• Avoid monsoon: May-September</li>
                    <li>• Early morning and evening best for photography</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Duration & Itinerary</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minimum 2 days recommended</li>
                    <li>• 3-4 days for comprehensive exploration</li>
                    <li>• Combine with Jaffna for extended trip</li>
                    <li>• Allow time for slow travel and relaxation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Essential Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sun protection (hat, sunscreen, sunglasses)</li>
                    <li>• Comfortable walking shoes</li>
                    <li>• Camera with telephoto lens for wildlife</li>
                    <li>• Binoculars for bird watching</li>
                    <li>• Light, breathable clothing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Culture</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Predominantly Tamil-speaking region</li>
                    <li>• Respect religious sites and customs</li>
                    <li>• Modest dress code appreciated</li>
                    <li>• Local hospitality is exceptional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Photography Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Golden hour lighting for baobab trees</li>
                    <li>• Wide-angle lens for landscape shots</li>
                    <li>• Respect wildlife and maintain distance</li>
                    <li>• Ask permission before photographing people</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Accommodation Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Eco-Lodges</CardTitle>
                <CardDescription>$40-80 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable accommodation options</li>
                  <li>• Close to natural attractions</li>
                  <li>• Local guide arrangements</li>
                  <li>• Traditional meals included</li>
                  <li>• Bird watching facilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Guesthouses</CardTitle>
                <CardDescription>$20-50 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Family-run accommodations</li>
                  <li>• Authentic local experience</li>
                  <li>• Home-cooked meals available</li>
                  <li>• Basic but comfortable facilities</li>
                  <li>• Warm hospitality guaranteed</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Beach Camps</CardTitle>
                <CardDescription>$30-70 per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Beachfront camping experiences</li>
                  <li>• Glamping and tent options</li>
                  <li>• Direct beach access</li>
                  <li>• Sunset viewing opportunities</li>
                  <li>• Unique adventure experience</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Nearby Places to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Mannar with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Delft-Island.jpg"
                  alt="Delft Island"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  30 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Delft Island</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A remote island known for its wild horses, ancient baobab trees, and Dutch colonial ruins.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  19 km from Mannar
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/delft-island" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Sigiriya.jpeg"
                  alt="Sigiriya Rock Fortress"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  30 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Thanthirimale</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An ancient rock fortress and UNESCO World Heritage Site known for its stunning frescoes and panoramic views.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  19 km from Dambulla Cave Temple
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/sigiriya-rock-fortress" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Madu-Church.jpg"
                  alt="Madu Church"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  30 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Shrine of Our Lady of Madu</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An important Catholic pilgrimage site located in the Mannar District, known for its historical significance and beautiful architecture.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  50 km from Mannar
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/shrine-of-our-lady-of-madu" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Minneriyanationalpark.jpg"
                  alt="Minneriya National Park"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  45 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Nainativu Island</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Nainativu Island is known for its beautiful beaches and historical significance.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  30 km from Dambulla Cave Temple
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/minneriya-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Nallur-Kovil.jpg"
                  alt="Nine Arch Bridge in Ella with train passing through lush green tea plantations"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  1 hours 50 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Jaffna</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A Northern city rich in Tamil culture, historic sites, and vibrant markets.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  22 km from Mannar
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jaffna" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Day Trip Suggestions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Suggested Day Trip Combinations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Cultural triangle trip</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Dambulla Cave Temple → Ambewela Farm → Haputhale (Lipton&apos;s Seat) → Return
                </p>
                <div className="flex items-center text-xs text-green-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (8-10 hours)
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Hill Country Explorer</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Dambulla Cave Temple → Ella (Nine Arch Bridge) → Bandarawela → Return
                </p>
                <div className="flex items-center text-xs text-blue-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Full day trip (10-12 hours)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">Your Journey to the Edge of Paradise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Mannar Island offers a travel experience unlike anywhere else in Sri Lanka—a place where ancient baobab
                trees create African landscapes, pristine beaches stretch endlessly, and time seems to move at nature&apos;s
                pace. This remote paradise rewards those who venture beyond the beaten path with unforgettable
                encounters with wildlife, stunning natural beauty, and genuine cultural experiences.
              </p>
              <p className="text-muted-foreground mb-4">
                As you stand beneath the ancient baobab trees or watch the sunset paint the sky over Adam&apos;s Bridge,
                you&apos;ll understand why Mannar has remained one of Sri Lanka&apos;s best-kept secrets. The island&apos;s untouched
                beauty and peaceful atmosphere provide the perfect escape from the modern world, offering a chance to
                reconnect with nature and discover the magic of slow travel.
              </p>
              <p className="text-muted-foreground font-medium">
                May your journey to Mannar fill you with wonder and leave you with memories of a truly unique corner of
                our beautiful world! 🌅🌴✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
