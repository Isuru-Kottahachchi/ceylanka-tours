"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Users, TreePine, Flame, Heart, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ImageCarousel } from "@/components/ui/image-carousel"



export default function KatharagamaGuide() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/Katharagama.jpg"
            alt="Sacred Katharagama temple complex with devotees offering prayers during evening ceremony"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
          <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
            <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Katharagama</h1>
            <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed">
              Sri Lanka&apos;s Most Sacred Pilgrimage Site
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 bg-yellow-600/80 text-white border-yellow-500">
                <Flame className="w-4 h-4 mr-2" />
                Sacred Temples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 bg-green-600/80 text-white border-green-500">
                <Users className="w-4 h-4 mr-2" />
                Multi-Religious Site
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 bg-blue-600/80 text-white border-blue-500">
                <Heart className="w-4 h-4 mr-2" />
                Spiritual Journey
              </Badge>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground" id="welcome">Welcome to Katharagama</h2>
            {/* ...existing code... */}
            <div className="prose prose-xl max-w-none text-foreground dark:text-foreground leading-relaxed space-y-6">
              <p className="text-xl mb-6 leading-relaxed text-muted-foreground dark:text-muted-foreground">
                Katharagama is one of Sri Lanka&apos;s best known pilgrimage towns. Hindus, Buddhists, Muslims, and Vedda
                communities all have links to this sacred area. The main shrine is associated with Lord Murugan, also
                called Skanda or Kataragama Deviyo.
              </p>
              <p className="text-lg mb-6 text-muted-foreground dark:text-muted-foreground">
                The town becomes much busier during major religious festivals, especially in the Esala season. At that
                time, large crowds arrive from different parts of Sri Lanka and South India. Processions, devotional
                music, and fire-walking ceremonies are all part of the festival period.
              </p>
              <p className="text-lg mb-6 text-muted-foreground dark:text-muted-foreground">
                Katharagama is known for its multi-religious character. Alongside the main Hindu shrine, visitors also
                find Buddhist sites, a mosque, and places linked with Vedda traditions. This mix is an important part of
                the town&apos;s identity.
              </p>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground">
                Katharagama is also a practical stop for travelers heading to the Yala area. A visit here gives a closer
                look at Sri Lankan pilgrimage culture, temple customs, and the role religion still plays in daily life.
              </p>
            </div>
          </section>

          {/* Quick Facts */}
          <section className="mb-16" id="quick-facts">
            <Card className="border-2 border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/40 dark:to-red-900/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl text-foreground" id="essential-info">
                  <Star className="w-8 h-8 text-orange-500" />
                  Quick Katharagama Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl text-orange-700 dark:text-orange-300 mb-4">Sacred Site Details</h4>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <span>
                        <strong>Province:</strong> Uva Province, Southeast
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Flame className="w-5 h-5 text-orange-500" />
                      <span>
                        <strong>Main Deity:</strong> Lord Murugan (Skanda)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span>
                        <strong>Religions:</strong> Hindu, Buddhist, Muslim, Vedda
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span>
                        <strong>History:</strong> Ancient pilgrimage site with a long recorded history
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl text-blue-700 dark:text-blue-300 mb-4">Pilgrimage Information</h4>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>
                        <strong>Peak Season:</strong> Esala Festival (July/August)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-green-500" />
                      <span>
                        <strong>Annual Visitors:</strong> Large pilgrimage crowds during major festival periods
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Flame className="w-5 h-5 text-red-500" />
                      <span>
                        <strong>Ceremonies:</strong> Daily puja, fire-walking
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <span>
                        <strong>Purpose:</strong> Prayer, vows, and offerings
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl text-green-700 dark:text-green-300 mb-4">Practical Details</h4>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span>
                        <strong>From Colombo:</strong> Nearly 262 km, nearly 3 hours 40 minutes by road
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TreePine className="w-5 h-5 text-green-500" />
                      <span>
                        <strong>Nearby:</strong> Yala area, travel time varies by gate and route
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span>
                        <strong>Accommodation:</strong> Pilgrim rest houses, hotels
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-purple-500" />
                      <span>
                        <strong>Best Duration:</strong> 1-3 days
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              {/* ...existing code... */}
            </Card>
            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Safety Notice</h4>
                  <p className="text-sm text-amber-700 mb-2">
                    <strong>Be careful near the water:</strong> When visiting Katharagama, you may see the Menik Ganga and other water bodies around the area. Avoid getting too close to the water&apos;s edge, especially in wet weather. Follow local safety guidance at all times.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Get to Katharagama */}
          <section className="mb-16" id="how-to-get">
            <Card className="border-2 border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/40 dark:to-cyan-900/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl text-blue-700 dark:text-blue-300">
                  <MapPin className="w-8 h-8 text-blue-500" />
                  How to Get to Katharagama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-xl text-blue-700 dark:text-blue-300 mb-4">By Road</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>From Colombo:</strong> Nearly 262 km, nearly 3 hours 40 minutes by road</li>
                      <li>• <strong>From Kandy:</strong> Nearly 217 km, nearly 5 hours by road</li>
                      <li>• <strong>From Yala National Park:</strong> Travel time varies by gate, hotel, and route, so check your exact road journey before leaving</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-blue-700 dark:text-blue-300 mb-4">By Public Transport</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Bus:</strong> Bus services connect Katharagama with Colombo, Kandy, Matara, and nearby towns. Check current schedules locally before travel</li>
                      <li>• <strong>Train:</strong> There is no railway station in Katharagama. Most rail travelers continue the final part of the trip by road</li>
                      <li>• <strong>Tuk-tuk:</strong> Widely available for short trips and local travel</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book accommodation in advance during festival season</li>
                    <li>• Roads can be busy during major religious events</li>
                    <li>• Early morning or late evening travel recommended for cooler weather</li>
                    <li>• Combine your visit with a safari in Yala National Park for a unique experience</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sacred Sites & Temples */}
          <section className="mb-16" id="sacred-sites">
            <h2 className="text-4xl font-bold mb-10 text-foreground">Sacred Sites & Temples in Katharagama</h2>
            {/* ...existing code... */}

            <div className="space-y-12">
              {/* Main Katharagama Temple */}
              <Card className="overflow-hidden border-2 border-red-200 dark:border-red-700">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/40 dark:to-orange-900/40">
                  <CardTitle className="text-2xl text-red-800 dark:text-red-300">Katharagama Devalaya (Main Temple)</CardTitle>
                  <CardDescription className="text-lg text-red-600 dark:text-red-300">
                      Sacred shrine of Lord Murugan, central to the Katharagama pilgrimage
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <ImageCarousel
                      images={[
                        {
                          src: "/Katharagama-dewalaya1.jpg", caption: "Katharagama dewalaya illuminated at night",
                          alt: "Katharagama dewalaya illuminated at night"
                        },
                        {
                          src: "/Katharagama-dewalaya2.jpg", caption: "Katharagama dewalaya illuminated at night",
                          alt: "Katharagama dewalaya illuminated at night"
                        },
                        {
                          src: "/Katharagama-dewalaya.jpg", caption: "Main Katharagama dewalaya with devotees and oil lamps",
                          alt: "Main Katharagama dewalaya with devotees and oil lamps"
                        },
                      ]}
                    />
                    <div className="space-y-6">
                      <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                        The main Katharagama temple is the spiritual center of the entire complex, housing the sacred
                        shrine of Lord Murugan. Unlike typical Hindu temples with elaborate statues, the main deity here
                        is represented by a simple yantra (sacred geometric symbol) embedded in the wall. This unique
                        feature makes the temple accessible to people of all faiths, as there are no specific religious
                        images that might exclude any particular group.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        The temple follows long-standing traditions where devotees make offerings of fruits, flowers, and
                        coconuts, while lighting oil lamps during prayer. Many visitors choose to come for the evening
                        puja, when the temple is especially active and crowded.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        Many pilgrims come to Katharagama to keep vows made during difficult periods in their lives. Some
                        devotees arrive on foot, carry kavadi as offerings, or take part in acts of penance as part of
                        their religious practice.
                      </p>

                      <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-lg border border-red-200 dark:border-red-700">
                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Temple Experience:</h4>
                        <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Puja Times:</strong> Check current temple schedules locally, as ceremony times can change
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Offerings:</strong> Fruits, flowers, coconuts, oil for lamps
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Dress Code:</strong> Modest clothing, remove shoes before entering
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Photography:</strong> Not allowed inside the main shrine
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Special Feature:</strong> Yantra symbol instead of statue
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-2 border-red-200 dark:border-red-700">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/40 dark:to-orange-900/40">
                  <CardTitle className="text-2xl text-red-800 dark:text-red-300">Sella Katharagama</CardTitle>
                  <CardDescription className="text-lg text-red-600 dark:text-red-300">
                    Small shrine linked with local pilgrimage traditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <ImageCarousel
                      images={[
                        {
                          src: "/Sella-Katharagama.jpeg", caption: "Sella Katharagama",
                          alt: "Sella Katharagama shrine surrounded by lush forest"
                        },
                      ]}
                    />
                    <div className="space-y-6">
                      <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                        Sella Katharagama is a small shrine a short distance from the main temple complex. In local
                        tradition, it is linked with Valli and family blessings, so many devotees visit it during their
                        wider pilgrimage through Katharagama.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        The shrine is usually quieter than the main Maha Devalaya, so it is often used for personal prayer
                        and reflection. Families sometimes visit to make offerings and pray for wellbeing.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        Pilgrims often include Sella Katharagama as part of the wider pilgrimage circuit around the sacred
                        town, visiting it before or after the main puja ceremonies.
                      </p>

                      <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-lg border border-red-200 dark:border-red-700">
                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Visitor Information:</h4>
                        <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Common Reasons for Visiting:</strong> Family prayers, offerings, and quiet reflection</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Atmosphere:</strong> Peaceful and less crowded than main temple</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Location:</strong> Short walk from the main Maha Devalaya complex</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Dress Code:</strong> Modest clothing, remove shoes before entering</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span><strong>Part of:</strong> Extended pilgrimage circuit around Katharagama</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Kiri Vehera Buddhist Temple */}
              <Card className="overflow-hidden border-2 border-yellow-200 dark:border-yellow-700">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/40 dark:to-orange-900/40">
                  <CardTitle className="text-2xl text-yellow-800 dark:text-yellow-300">Kiri Vehera Buddhist Temple</CardTitle>
                  <CardDescription className="text-lg text-yellow-600 dark:text-yellow-300">
                    Ancient Buddhist stupa representing religious harmony
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                        The Kiri Vehera is a white Buddhist stupa within the Katharagama sacred complex. It is an
                        important worship site for Buddhist pilgrims who visit Katharagama alongside the Hindu shrines.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        The name &quot;Kiri Vehera&quot; means &quot;Milk White Temple&quot; in Sinhala, referring to the stupa&apos;s pristine
                        white color that gleams beautifully against the blue sky. Buddhist devotees circumambulate the
                        stupa while chanting prayers and offering flowers, creating a peaceful atmosphere that contrasts
                        with the more intense energy of the main Hindu temple. Many visitors find this to be an ideal
                        place for quiet reflection and meditation.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        Kiri Vehera is often included in the same visit as the main shrines in Katharagama. Many visitors
                        come here for a quieter setting and time for reflection.
                      </p>

                      <div className="bg-yellow-50 dark:bg-yellow-900/40 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">Buddhist Temple Features:</h4>
                        <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Architecture:</strong> Classic Sri Lankan stupa design, pristine white color
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Background:</strong> Ancient stupa with long-standing Buddhist pilgrimage associations
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Activities:</strong> Meditation, circumambulation, flower offerings
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Best Time:</strong> Early morning, evening, full moon nights
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Atmosphere:</strong> Peaceful, meditative, perfect for reflection
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ImageCarousel
                      images={[
                        {
                          src: "/Kiri-vehera.jpeg", caption: "Kiri Vehera stupa with devotees circumambulating",
                          alt: ""
                        },
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Mosque and Other Religious Sites */}
              <Card className="overflow-hidden border-2 border-green-200 dark:border-green-700">
                <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/40 dark:to-teal-900/40">
                  <CardTitle className="text-2xl text-green-800 dark:text-green-300">Mosque & Multi-Religious Sites</CardTitle>
                  <CardDescription className="text-lg text-green-600 dark:text-green-300">
                    Symbols of religious harmony and universal devotion
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <ImageCarousel
                      images={[
                        {
                          src: "/placeholder.svg?height=400&width=600&text=Katharagama+Mosque", caption: "Mosque in Katharagama sacred complex",
                          alt: ""
                        },
                        {
                          src: "/placeholder.svg?height=400&width=600&text=Mosque+Festival+Night", caption: "Mosque during festival night",
                          alt: ""
                        }
                      ]}
                    />
                    <div className="space-y-6">
                      <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                        Within the Katharagama sacred area, there is also a mosque used by the local Muslim community.
                        This is one reason Katharagama is often described as a shared sacred town rather than a single
                        religious site.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        Katharagama is also linked with Vedda traditions in local belief and oral history. These
                        associations add another layer to the town&apos;s long religious history.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        During busy periods, visitors can see different religious practices taking place in and around the
                        wider sacred area. This shared use of the town is one of Katharagama&apos;s most distinctive features.
                      </p>

                      <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Religious Diversity:</h4>
                        <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Hindu Traditions:</strong> Main temple, kavadi ceremonies, fire-walking
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Buddhist Elements:</strong> Kiri Vehera stupa, meditation practices
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Muslim Presence:</strong> Mosque and local community worship
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Vedda Traditions:</strong> Local sacred associations and oral traditions
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>
                              <strong>Universal Appeal:</strong> All faiths welcome, shared sacred space
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Okanda Dewalaya */}
              <Card className="border-2 border-pink-200 dark:border-pink-700">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/40 dark:to-red-900/40">
                  <CardTitle className="text-2xl text-pink-700 dark:text-pink-300">Okanda Dewalaya</CardTitle>
                  <CardDescription className="text-lg text-pink-600 dark:text-pink-300">
                    Sacred coastal shrine, legendary gateway of Lord Murugan
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Okanda-Devalaya.jpg", caption: "Okanda Dewalaya shrine on the eastern coast",
                        alt: ""
                      },
                      {
                        src: "/Okanda-Devalaya1.jpg", caption: "Pilgrims at Okanda beach near the shrine",
                        alt: ""
                      },
                      {
                        src: "/Okanda-Devalaya2.jpg", caption: "Pilgrims at Okanda beach near the shrine",
                        alt: ""
                      }
                    ]}
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                      Okanda Dewalaya is a Hindu shrine on Sri Lanka&apos;s eastern coast, dedicated to Lord Murugan
                      (Kataragama Deviyo). In local tradition, it is linked with the start of the pilgrimage route to
                      Katharagama.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      Today, Okanda Dewalaya is an important stop for pilgrims walking the Pada Yatra route from the
                      north and east to Katharagama, especially during the Esala season. Pilgrims rest, pray, and
                      continue their journey from here.
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground dark:text-muted-foreground">
                      <li>Linked in local tradition with the journey to Katharagama</li>
                      <li>Key stop on the traditional Pada Yatra pilgrimage</li>
                      <li>Beautiful, remote beach setting</li>
                      <li>Busy pilgrimage stop during the festival season</li>
                      <li>Open to all faiths, known for its welcoming atmosphere</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Kebalitta Dewalaya */}
              <Card className="border-2 border-cyan-200 dark:border-cyan-700">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/40 dark:to-blue-900/40">
                  <CardTitle className="text-2xl text-cyan-700 dark:text-cyan-300">Kebalitta Dewalaya</CardTitle>
                  <CardDescription className="text-lg text-cyan-600 dark:text-cyan-300">
                    Remote jungle shrine, spiritual gateway to Katharagama
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Kebiliththa-dewalaya.jpg", caption: "",
                        alt: ""
                      },
                      {
                        src: "/Kebiliththa-dewalaya1.jpg", caption: "",
                        alt: ""
                      }
                    ]}
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                      Kebalitta Dewalaya is a jungle shrine on the banks of the Menik Ganga, in the wider Yala and
                      Katharagama area. In local tradition, it is treated as an important stopping point for Pada Yatra
                      pilgrims before they enter Katharagama.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      The shrine is surrounded by dense forest. Rituals here are simple and usually focus on purification,
                      humility, and respect for the sacred landscape.
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground dark:text-muted-foreground">
                      <li>Traditional entry point for pilgrims on foot</li>
                      <li>Located on the banks of the Menik Ganga river</li>
                      <li>Emphasis on purification and humility</li>
                      <li>Surrounded by pristine jungle and wildlife</li>
                      <li>Important for both Hindu and Buddhist devotees</li>
                    </ul>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm text-amber-800">
                        <strong>Special Notes</strong> Some devotees avoid meat and alcohol before visiting this sacred site as part of their religious observance.
                      </p>
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* Valli Amma Kovil */}
              <Card className="border-2 border-purple-200 dark:border-purple-700">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/40 dark:to-pink-900/40">
                  <CardTitle className="text-2xl text-purple-700 dark:text-purple-300">Valli Amma Kovil (Valli Shrine)</CardTitle>
                  <CardDescription className="text-lg text-purple-600 dark:text-purple-300">
                    Shrine dedicated to Valli, the beloved consort of Lord Murugan
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                        The Valli Amma Kovil is dedicated to Valli, who is linked with Lord Murugan in Hindu tradition.
                        The shrine is an important part of the local pilgrimage circuit.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        Pilgrims often visit Valli Amma Kovil after the main Katharagama temple. The shrine is quieter
                        than the main temple and is often visited for family-related prayers.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        The story of Valli also shows how local traditions became part of Katharagama worship over time.
                      </p>
                      <ul className="list-disc pl-5 text-muted-foreground dark:text-muted-foreground">
                        <li>Essential part of traditional pilgrimage circuit</li>
                        <li>Represents cultural fusion of Vedda and Hindu traditions</li>
                        <li>Popular for family and marriage blessings</li>
                        <li>Quieter, more peaceful atmosphere than main temple</li>
                        <li>Beautiful traditional architecture</li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        {
                          src: "/placeholder.svg?height=400&width=600&text=Valli+Amma+Kovil", caption: "Valli Amma Kovil shrine",
                          alt: ""
                        },
                        {
                          src: "/placeholder.svg?height=400&width=600&text=Valli+Shrine+Interior", caption: "Interior of Valli shrine with devotees",
                          alt: ""
                        }
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Menik Ganga River */}
              <Card className="border-2 border-teal-200 dark:border-teal-700">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/40 dark:to-blue-900/40">
                  <CardTitle className="text-2xl text-teal-700 dark:text-teal-300">Menik Ganga River (Holy Bathing)</CardTitle>
                  <CardDescription className="text-lg text-teal-600 dark:text-teal-300">
                    Sacred river for ritual purification before temple worship
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <ImageCarousel
                      images={[
                        {
                          src: "/placeholder.svg?height=400&width=600&text=Menik+Ganga+Bathing", caption: "Pilgrims bathing in Menik Ganga",
                          alt: ""
                        },
                        {
                          src: "/placeholder.svg?height=400&width=600&text=River+Ghats", caption: "Bathing ghats on Menik Ganga river",
                          alt: ""
                        }
                      ]}
                    />
                    <div className="space-y-6">
                      <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                        The Menik Ganga is treated as a sacred river and is an important part of the Katharagama
                        pilgrimage. Many pilgrims bathe before entering the temple complex as part of their ritual
                        preparation.
                      </p>
                      <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                        Early morning is the most popular time for ritual bathing, when hundreds of devotees gather at the designated bathing ghats (steps) to perform their ablutions. Many pilgrims also use this opportunity to perform prayers, offer flowers to the river, and mentally prepare themselves for temple worship.
                      </p>
                      <div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg border border-red-200 dark:border-red-700">
                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Important Safety Warning:
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                          <li>• <strong>Crocodiles inhabit this river</strong> - exercise extreme caution</li>
                          <li>• Only bathe at designated ghats with proper steps</li>
                          <li>• Do not venture into deep water</li>
                          <li>• Supervise children closely at all times</li>
                          <li>• Early morning bathing is safest (more people present)</li>
                          <li>• Follow local guidance and posted warnings</li>
                        </ul>
                      </div>
                      <ul className="list-disc pl-5 text-muted-foreground dark:text-muted-foreground">
                        <li>Traditional purification ritual before temple entry</li>
                        <li>Ritual bathing remains important to many pilgrims</li>
                        <li>Designated safe bathing areas with steps</li>
                        <li>Best time: Early morning (5-7 AM)</li>
                        <li>Part of authentic pilgrimage experience</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Wadasiti Kanda */}
              <Card className="border-2 border-indigo-200 dark:border-indigo-700">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/40 dark:to-blue-900/40">
                  <CardTitle className="text-2xl text-indigo-700 dark:text-indigo-300">Wadasiti Kanda</CardTitle>
                  <CardDescription className="text-lg text-indigo-600 dark:text-indigo-300">
                    Sacred mountain of penance and meditation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Wada-siti-kanda.jpeg", caption: "Wadasiti Kanda mountain with pilgrims climbing",
                        alt: "Wadasiti Kanda mountain with pilgrims climbing"
                      },
                      {
                        src: "/Wada-siti-kanda1.jpeg", caption: "Summit view from Wadasiti Kanda",
                        alt: "Summit view from Wadasiti Kanda"
                      },
                      {
                        src: "/Wada-siti-kanda2.jpeg", caption: "Summit view from Wadasiti Kanda",
                        alt: "Summit view from Wadasiti Kanda"
                      }
                    ]}
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                      Wadasiti Kanda is a forested hill near Katharagama. In local tradition, it is linked with King
                      Dutugemunu and with acts of penance and devotion. Pilgrims climb the hill as part of their visit.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      The climb is steep but rewarding, offering panoramic views of the surrounding jungle and the sacred town below. At the summit, a small shrine and meditation area await, where pilgrims light lamps, pray, and reflect in peace.
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground dark:text-muted-foreground">
                      <li>Important pilgrimage for both Buddhists and Hindus</li>
                      <li>Associated with legends of King Dutugemunu</li>
                      <li>Popular for meditation, vows, and penance</li>
                      <li>Best climbed early morning or late afternoon for cooler weather</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Festivals & Ceremonies */}
          <section className="mb-16" id="festivals">
            <h2 className="text-4xl font-bold mb-10" id="festivals-title">Festivals & Sacred Ceremonies</h2>
            {/* ...existing code... */}
            <div className="grid lg:grid-cols-2 gap-10">
              <Card className="border-2 border-orange-200">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle className="text-2xl text-orange-700">Esala Festival</CardTitle>
                  <CardDescription>Annual grand festival in July/August</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The Esala Festival is Katharagama&apos;s most important annual celebration, usually held in July or
                      August. During this period, large numbers of pilgrims arrive from Sri Lanka and South India.
                    </p>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Festival Highlights</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Grand processions with decorated elephants</li>
                        <li>• Fire-walking ceremonies by devoted pilgrims</li>
                        <li>• Kavadi dancing and elaborate offerings</li>
                        <li>• 24-hour continuous prayers and chanting</li>
                        <li>• Traditional music and cultural performances</li>
                        <li>• Mass feeding of pilgrims (free meals)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">What to Expect</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Extremely crowded conditions</li>
                        <li>• Accommodation fully booked months ahead</li>
                        <li>• Intense spiritual atmosphere</li>
                        <li>• Street food vendors and temporary shops</li>
                        <li>• Traffic restrictions and road closures</li>
                        <li>• Unforgettable cultural experience</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded border border-orange-200">
                      <p className="text-sm text-orange-700 font-medium">
                        <strong>Planning Tip:</strong> Book accommodation well in advance. Consider staying in nearby
                        towns if Katharagama is full.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
                  <CardTitle className="text-2xl text-red-700">Fire-Walking Ceremonies</CardTitle>
                  <CardDescription>Sacred ritual of devotion and faith</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Fire-walking is one of Katharagama&apos;s most dramatic and spiritually significant ceremonies. Devoted
                      pilgrims walk barefoot across beds of burning coals as an expression of their faith and to fulfill
                      vows made to Lord Murugan. This ancient practice requires intense spiritual preparation and is
                      considered a powerful form of penance and devotion.
                    </p>
                    <ImageCarousel
                      images={[
                        {
                          src: "/Katharagama-Festival.jpg", caption: "",
                          alt: "Fire-walking ceremony at Katharagama Festival"
                        },
                      ]}
                    />
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">The Ritual Process</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Weeks of fasting and spiritual preparation</li>
                        <li>• Blessing ceremony before the fire-walk</li>
                        <li>• Walking across 10-15 feet of burning coals</li>
                        <li>• Immediate foot washing in blessed water</li>
                        <li>• Community celebration and blessing</li>
                        <li>• Medical assistance available if needed</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Spiritual Significance</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Demonstration of complete faith in the deity</li>
                        <li>• Fulfillment of vows made during difficult times</li>
                        <li>• Purification of sins and negative karma</li>
                        <li>• Some devotees make vows during periods of illness or hardship</li>
                        <li>• Expression of gratitude for answered prayers</li>
                        <li>• Community witness to devotion</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded border border-red-200">
                      <p className="text-sm text-red-700 font-medium">
                        <strong>Observer Note:</strong> Fire-walking ceremonies happen mainly during festivals. Respectful
                        observation from designated areas only.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Practical Information */}
          <section className="mb-16" id="practical-info">
            <h2 className="text-4xl font-bold mb-10" id="practical-info-title">Practical Pilgrimage Information</h2>
            {/* ...existing code... */}
            <div className="grid lg:grid-cols-2 gap-10">
              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="text-2xl text-blue-700">Getting to Katharagama</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-blue-800">Transportation Options</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                        <p className="font-medium text-blue-700 mb-1">From Colombo (nearly 3 hours 40 minutes):</p>
                        <p className="text-sm text-blue-600">
                          Private car or taxi is the most direct option. Bus services are also available. Check current fares and schedules before travel
                        </p>
                      </div>
                      <div className="bg-cyan-50 p-3 rounded border-l-4 border-cyan-500">
                        <p className="font-medium text-cyan-700 mb-1">From Kandy (nearly 5 hours):</p>
                        <p className="text-sm text-cyan-600">
                          Travel is usually by road, either by bus or private vehicle. Route conditions can affect the total time
                        </p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-500">
                        <p className="font-medium text-teal-700 mb-1">From Yala National Park area:</p>
                        <p className="text-sm text-teal-600">Travel time depends on the gate, hotel, and road route you use</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-blue-800">Local Transportation</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Within Town:</strong> Walking distance to all temples
                      </p>
                      <p>
                        <strong>Tuk-tuks:</strong> Available for short trips, fares vary by distance
                      </p>
                      <p>
                        <strong>Bicycles:</strong> Some guesthouses provide free bikes
                      </p>
                      <p>
                        <strong>During Festivals:</strong> Walking only in temple area
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="text-2xl text-green-700">Accommodation & Facilities</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-green-800">Accommodation Types</h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                        <p className="font-medium text-green-700 mb-1">Pilgrim Rest Houses ($5-15):</p>
                        <p className="text-sm text-green-600">
                          Basic accommodation for pilgrims, shared facilities, very affordable
                        </p>
                      </div>
                      <div className="bg-emerald-50 p-3 rounded border-l-4 border-emerald-500">
                        <p className="font-medium text-emerald-700 mb-1">Guesthouses ($15-40):</p>
                        <p className="text-sm text-emerald-600">
                          Family-run places with simple rooms, local meals, friendly service
                        </p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-500">
                        <p className="font-medium text-teal-700 mb-1">Hotels ($40-100):</p>
                        <p className="text-sm text-teal-600">
                          Modern amenities, AC rooms, restaurants, suitable for tourists
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-green-800">Essential Facilities</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Food:</strong> Many vegetarian restaurants, free meals during festivals
                      </p>
                      <p>
                        <strong>Banking:</strong> ATMs available, banks open limited hours
                      </p>
                      <p>
                        <strong>Medical:</strong> Basic medical facilities, hospital in nearby Tissamaharama
                      </p>
                      <p>
                        <strong>Shopping:</strong> Religious items, offerings, basic supplies
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cultural Guidelines */}
          <section className="mb-16" id="cultural-guidelines">
            <h2 className="text-4xl font-bold mb-10" id="cultural-guidelines-title">Cultural Guidelines & Etiquette</h2>
            {/* ...existing code... */}
            <div className="grid lg:grid-cols-2 gap-10">
              <Card className="border-2 border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="text-2xl text-purple-700">Temple Etiquette</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Dress Code</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cover shoulders and knees (men and women)</li>
                        <li>• Remove shoes before entering temple areas</li>
                        <li>• White or light-colored clothing preferred</li>
                        <li>• Avoid leather items in temple premises</li>
                        <li>• Head covering optional but respectful</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Behavior Guidelines</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Maintain quiet, respectful demeanor</li>
                        <li>• Don&apos;t point feet toward shrines</li>
                        <li>• Follow the flow of other devotees</li>
                        <li>• Don&apos;t interrupt prayers or ceremonies</li>
                        <li>• Ask permission before taking photos</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Offerings & Donations</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Fruits, flowers, coconuts are traditional</li>
                        <li>• Oil for lamps is highly appreciated</li>
                        <li>• Small monetary donations welcome</li>
                        <li>• No obligation to give specific amounts</li>
                        <li>• Offerings can be purchased at temple shops</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                  <CardTitle className="text-2xl text-orange-700">Spiritual Preparation</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Mental Preparation</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Approach with open mind and heart</li>
                        <li>• Respect all religious traditions present</li>
                        <li>• Be prepared for intense spiritual energy</li>
                        <li>• Understand this is a working pilgrimage site</li>
                        <li>• Expect crowds, especially during festivals</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Physical Preparation</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Comfortable walking shoes (removed at temples)</li>
                        <li>• Light, modest clothing for hot weather</li>
                        <li>• Water bottle for hydration</li>
                        <li>• Basic first aid supplies</li>
                        <li>• Patience for long queues during festivals</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Cultural Sensitivity</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Learn basic greetings in Sinhala/Tamil</li>
                        <li>• Understand significance of rituals you observe</li>
                        <li>• Don&apos;t judge unfamiliar religious practices</li>
                        <li>• Show respect to all pilgrims regardless of background</li>
                        <li>• Ask questions politely if curious about customs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Nearby Attractions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Nearby Places to Visit</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Extend your Katharagama visit with these other places in the wider area
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/Yala-national-park.jpg"
                    alt="Yala National Park with elephants and natural scenery"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Check route
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Yala National Park</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A renowned national park in Sri Lanka, famous for its diverse wildlife and stunning landscapes.
                  </p>
                  <div className="flex items-center text-xs text-blue-600 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    Travel time depends on the gate and route
                  </div>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/yala-national-park" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              {/* Sithulpawwa Raja Maha Viharaya */}
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/Sithul-Pawwa.jpg"
                    alt="Sithulpawwa Raja Maha Viharaya with ancient rock carvings"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Check route
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Sithulpawwa Raja Maha Viharaya</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    An ancient Buddhist cave temple within Yala National Park, known for its serene atmosphere and historical significance.
                  </p>
                  <div className="flex items-center text-xs text-blue-600 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    Road distance and timing vary by access route
                  </div>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/sithulpawwa-raja-maha-viharaya" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/Ridiyagama.jpeg"
                    alt="Ridiyagama Safari Park with diverse wildlife"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Check route
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Ridiyagama Safari Park</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Sri Lanka&apos;s largest safari park, home to diverse wildlife in naturalistic habitats.
                  </p>
                  <div className="flex items-center text-xs text-blue-600 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    Check the current road route before visiting
                  </div>
                  <div className="mt-4 flex justify-start">
                    <Link href="/destinations/ridiyagama-safari-park" passHref legacyBehavior>
                      <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final Section */}
          <section className="mb-12" id="final-section">
            <Card className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border-2 border-orange-200 overflow-hidden">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl text-orange-800 mb-4">Your Sacred Journey to Katharagama Awaits</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="space-y-6 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Katharagama is an active pilgrimage town, not just a sightseeing stop. People come here to pray,
                    keep vows, and take part in long-standing religious traditions.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    For visitors, the value of Katharagama is in watching how different rituals, shrines, and local
                    customs still shape daily life. The town can be quiet on ordinary days and very crowded during the
                    festival season.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Visit with respect, dress modestly, and follow local guidance inside the sacred areas. That approach
                    gives you the best chance to understand why Katharagama remains important to so many people.
                  </p>
                  <div className="bg-white/70 p-6 rounded-xl border border-orange-200 mt-8">
                    <p className="text-xl font-semibold text-orange-800 mb-2">
                      Plan your visit with respect for the town, the pilgrims, and the sacred sites.
                    </p>
                    <p className="text-sm text-orange-600">
                      Check your route in advance, expect crowds in festival periods, and allow time to move slowly through the sacred area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>


        </div>
      </main>

    </>
  );
}
