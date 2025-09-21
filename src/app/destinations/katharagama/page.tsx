"use client"

import Image from "next/image"
import { useState } from "react"
// Kandy-style local image carousel
type CarouselImage = { src: string; caption: string }
function ImageCarousel({ images, alt }: { images: CarouselImage[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl" style={{ height: '400px', width: '100%' }}>
        <Image
          src={images[currentIndex]?.src || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="rounded-xl transition-all duration-300 object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {/* Caption */}
        {images[currentIndex]?.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2 rounded-b-xl">
            {images[currentIndex].caption}
          </div>
        )}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={prevImage}
            >
              <span className="sr-only">Previous</span>
              &#8592;
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
              onClick={nextImage}
            >
              <span className="sr-only">Next</span>
              &#8594;
            </Button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
import { Clock, MapPin, CheckCircle, Star, Users, TreePine, Flame, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"



export default function KatharagamaGuide() {
    return (
      <>
        <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Katharagama.jpg"
          alt="Sacred Katharagama temple complex with devotees offering prayers during evening ceremony"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">Katharagama</h1>
          <p className="text-2xl md:text-4xl mb-8 font-light leading-relaxed text-primary">
            Sri Lanka&apos;s Most Sacred Pilgrimage Site
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-background/80 text-foreground border-border px-4 py-2">
              <Flame className="w-4 h-4 mr-2 text-orange-500" />
              Sacred Temples
            </Badge>
            <Badge variant="secondary" className="bg-background/80 text-foreground border-border px-4 py-2">
              <Users className="w-4 h-4 mr-2 text-purple-500" />
              Multi-Religious Site
            </Badge>
            <Badge variant="secondary" className="bg-background/80 text-foreground border-border px-4 py-2">
              <Heart className="w-4 h-4 mr-2 text-pink-500" />
              Spiritual Journey
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground" id="welcome">Welcome to Katharagama: Where Faith Comes Alive</h2>
          {/* ...existing code... */}
          <div className="prose prose-xl max-w-none text-foreground dark:text-foreground leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed text-muted-foreground dark:text-muted-foreground">
              Katharagama is Sri Lanka&apos;s most important pilgrimage destination, a sacred place where Hindus, Buddhists,
              Muslims, and indigenous Vedda people have worshipped together for over 2,000 years. This ancient holy city
              in the southeastern part of Sri Lanka attracts millions of devotees annually who come seeking blessings,
              spiritual healing, and divine intervention. The main deity worshipped here is Lord Murugan (also known as
              Skanda or Kataragama Deviyo), the Hindu god of war and victory, who is believed to grant wishes and
              protect devotees.
            </p>
            <p className="text-lg mb-6 text-muted-foreground dark:text-muted-foreground">
              The town of Katharagama transforms completely during religious festivals, especially during the annual
              Esala Festival in August, when hundreds of thousands of pilgrims arrive from across Sri Lanka and
              South India. During these times, the normally quiet town becomes a vibrant spiritual center filled with
              devotional music, colorful processions, fire-walking ceremonies, and intense religious fervor that creates
              an atmosphere unlike anywhere else in the world.
            </p>
            <p className="text-lg mb-6 text-muted-foreground dark:text-muted-foreground">
              What makes Katharagama unique is its multi-religious character. While primarily a Hindu temple complex, it
              also contains Buddhist temples, a mosque, and sites sacred to the indigenous Vedda people. This religious
              harmony reflects Sri Lanka&apos;s diverse spiritual heritage and creates a powerful atmosphere of universal
              devotion that transcends religious boundaries. Visitors of all faiths are welcome to participate in
              ceremonies and experience the profound spiritual energy that permeates this sacred place.
            </p>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Beyond its religious significance, Katharagama is located near Yala National Park, making it possible to
              combine spiritual experiences with wildlife viewing. The town also serves as a gateway to understanding
              Sri Lankan religious culture, traditional healing practices, and the deep faith that plays such an
              important role in local people&apos;s daily lives. Whether you come as a pilgrim seeking spiritual fulfillment
              or as a traveler interested in cultural experiences, Katharagama offers profound insights into the
              spiritual heart of Sri Lanka.
            </p>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-orange-100/80 to-red-100/80 dark:from-orange-900/40 dark:to-red-900/40 rounded-xl text-center text-muted-foreground border-2 border-dashed border-orange-300 dark:border-orange-700">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Quick Facts */}
  <section className="mb-16" id="quick-facts">
          <Card className="border-2 border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/40 dark:to-red-900/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-foreground" id="essential-info">
                <Star className="w-8 h-8 text-orange-500" />
                Essential Katharagama Information
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
                      <strong>History:</strong> Over 2,000 years old
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
                      <strong>Annual Visitors:</strong> Over 1 million pilgrims
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
                      <strong>Purpose:</strong> Wish fulfillment, healing
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-green-700 dark:text-green-300 mb-4">Practical Details</h4>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>From Colombo:</strong> 5-6 hours by road
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TreePine className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Nearby:</strong> Yala National Park (20 km)
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
                  Sacred shrine of Lord Murugan, the heart of pilgrimage
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/Katharagama-dewalaya.jpg", caption: "Main Katharagama temple with devotees and oil lamps" },
                        { src: "/placeholder.svg?height=400&width=600&text=Katharagama+Temple+Night", caption: "Katharagama temple illuminated at night" }
                      ]}
                      alt="Main Katharagama temple with devotees offering prayers and oil lamps during evening ceremony"
                    />
                  </div>
                  <div className="space-y-6">
                    <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                      The main Katharagama temple is the spiritual center of the entire complex, housing the sacred
                      shrine of Lord Murugan. Unlike typical Hindu temples with elaborate statues, the main deity here
                      is represented by a simple yantra (sacred geometric symbol) embedded in the wall. This unique
                      feature makes the temple accessible to people of all faiths, as there are no specific religious
                      images that might exclude any particular group.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      The temple follows ancient traditions where devotees make offerings of fruits, flowers, and
                      coconuts, while lighting oil lamps as symbols of their prayers. The most powerful time to visit is
                      during the evening puja (prayer ceremony) around 6:30 PM, when hundreds of devotees gather to
                      participate in collective worship. The atmosphere becomes electric with devotional chanting, drum
                      beats, and the flickering light of thousands of oil lamps.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      Many pilgrims come to Katharagama to fulfill vows made during difficult times in their lives. It&apos;s
                      common to see devotees who have traveled hundreds of miles on foot, carrying kavadi (decorated
                      structures) as offerings, or performing various forms of penance as expressions of their devotion
                      and gratitude. The temple is believed to be especially powerful for granting wishes related to
                      health, prosperity, and protection from harm.
                    </p>

                    <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Temple Experience:</h4>
                      <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Daily Puja Times:</strong> 4:30 AM, 10:30 AM, 6:30 PM (most important)
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
                      The Kiri Vehera is a beautiful white Buddhist stupa located within the Katharagama sacred complex,
                      demonstrating the remarkable religious harmony that exists at this holy site. Built over 2,000
                      years ago, this ancient monument is believed to contain relics of the Buddha and serves as an
                      important meditation and worship site for Buddhist pilgrims who visit Katharagama alongside their
                      Hindu counterparts.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      The name &quot;Kiri Vehera&quot; means &quot;Milk White Temple&quot; in Sinhala, referring to the stupa&apos;s pristine
                      white color that gleams beautifully against the blue sky. Buddhist devotees circumambulate the
                      stupa while chanting prayers and offering flowers, creating a peaceful atmosphere that contrasts
                      with the more intense energy of the main Hindu temple. Many visitors find this to be an ideal
                      place for quiet reflection and meditation.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      What makes Kiri Vehera special is how it represents the inclusive nature of Katharagama&apos;s
                      spirituality. Hindu and Buddhist pilgrims often visit both temples during their pilgrimage,
                      showing respect for all religious traditions. The temple is particularly beautiful during full
                      moon nights when special ceremonies are held and the white stupa is illuminated by moonlight and
                      oil lamps.
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
                            <strong>Age:</strong> Over 2,000 years old, contains Buddha relics
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
                      <div className="mt-4">
                        <Button asChild variant="outline" size="sm">
                          <a href="/destinations/kiri-vehera">See More</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/Kiri-vehera.jpeg", caption: "Kiri Vehera stupa with devotees circumambulating" },
                        { src: "/placeholder.svg?height=500&width=600&text=Kiri+Vehera+Full+Moon", caption: "Kiri Vehera illuminated on full moon night" }
                      ]}
                      alt="White Buddhist stupa Kiri Vehera with devotees circumambulating during evening prayers"
                    />
                  </div>
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
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <ImageCarousel
                      images={[
                        { src: "/placeholder.svg?height=400&width=600&text=Katharagama+Mosque", caption: "Mosque in Katharagama sacred complex" },
                        { src: "/placeholder.svg?height=400&width=600&text=Mosque+Festival+Night", caption: "Mosque during festival night" }
                      ]}
                      alt="Small mosque in Katharagama complex showing religious diversity and harmony"
                    />
                  </div>
                  <div className="space-y-6">
                    <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                      Within the Katharagama sacred complex, you&apos;ll find a small but significant mosque that serves the
                      Muslim community and demonstrates the remarkable religious tolerance that characterizes this holy
                      site. Muslim pilgrims also come to Katharagama seeking blessings, and many participate in the
                      general spiritual atmosphere while maintaining their own religious practices. This coexistence of
                      different faiths in one sacred space is rare and beautiful.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      The indigenous Vedda people, Sri Lanka&apos;s original inhabitants, also consider Katharagama sacred
                      and have their own traditional worship sites within the area. Their ancient spiritual practices,
                      which predate all other religions on the island, add another layer to Katharagama&apos;s
                      multi-religious character. Vedda shamans sometimes perform traditional ceremonies, especially
                      during major festivals.
                    </p>
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                      This religious diversity creates a unique atmosphere where people of different faiths pray side by
                      side, each following their own traditions while respecting others. During major festivals, you
                      might see Hindu devotees carrying kavadi, Buddhist monks chanting, Muslim families praying, and
                      Vedda elders performing traditional rituals - all within the same sacred space, creating a
                      powerful example of religious harmony.
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
                            <strong>Muslim Presence:</strong> Mosque, Islamic prayers, community participation
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Vedda Traditions:</strong> Indigenous ceremonies, ancient spiritual practices
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
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <ImageCarousel
                    images={[
                      { src: "/Katharagama-dewalaya.jpg", caption: "Okanda Dewalaya shrine on the eastern coast" },
                      { src: "/placeholder.svg?height=400&width=600&text=Okanda+Beach+View", caption: "Pilgrims at Okanda beach near the shrine" }
                    ]}
                    alt="Okanda Dewalaya shrine on the eastern coast with pilgrims and ocean backdrop"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                    Okanda Dewalaya is a revered Hindu shrine on Sri Lanka&apos;s wild eastern coast, dedicated to Lord Murugan (Kataragama Deviyo). According to legend, Lord Murugan landed here from India on his peacock mount, splitting the great Okanda rock with his divine spear (vel) to mark the start of his journey to Katharagama. The name &quot;Okanda&quot; is believed to derive from the Tamil &quot;Ukantai&quot; meaning &quot;to sit&quot;, as the deity is said to have rested here before continuing his pilgrimage.
                  </p>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    Today, Okanda Dewalaya is a vital stop for pilgrims walking the ancient Pada Yatra route from the north and east to Katharagama, especially during the Esala festival. Pilgrims rest, offer prayers, and bathe in the sea before continuing their journey. The shrine is set amidst dramatic coastal scenery, with the Indian Ocean on one side and dense jungle on the other. Okanda is also popular with surfers and travelers seeking a spiritual, off-the-beaten-path experience.
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground dark:text-muted-foreground">
                    <li>Legendary landing site of Lord Murugan&apos;s journey to Katharagama</li>
                    <li>Key stop on the traditional Pada Yatra pilgrimage</li>
                    <li>Beautiful, remote beach setting</li>
                    <li>Annual festival in July/August draws thousands of devotees</li>
                    <li>Open to all faiths, known for its welcoming atmosphere</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href="https://en.wikipedia.org/wiki/Okanda" target="_blank" rel="noopener noreferrer">Read More</a>
                    </Button>
                  </div>
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
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <ImageCarousel
                    images={[
                      { src: "/placeholder.svg?height=400&width=600&text=Kebalitta+Dewalaya", caption: "Kebalitta Dewalaya jungle shrine" },
                      { src: "/placeholder.svg?height=400&width=600&text=Kebalitta+River+View", caption: "Menik Ganga river near Kebalitta Dewalaya" }
                    ]}
                    alt="Kebalitta Dewalaya jungle shrine, sacred gateway for pilgrims"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                    Kebalitta Dewalaya is a sacred jungle shrine located on the banks of the Menik Ganga river, just outside Katharagama. It is considered the spiritual gateway to Katharagama for Pada Yatra pilgrims, who traditionally stop here to purify themselves in the river and seek blessings before entering the holy city.
                  </p>
                  <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                    The shrine is dedicated to a guardian spirit and is surrounded by dense forest, creating a mystical and tranquil atmosphere. Rituals at Kebalitta Dewalaya are simple and focus on purification, humility, and respect for nature. Many believe that only after paying respects here can one truly receive the blessings of Katharagama Deviyo.
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground dark:text-muted-foreground">
                    <li>Traditional entry point for pilgrims on foot</li>
                    <li>Located on the banks of the Menik Ganga river</li>
                    <li>Emphasis on purification and humility</li>
                    <li>Surrounded by pristine jungle and wildlife</li>
                    <li>Important for both Hindu and Buddhist devotees</li>
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href="https://www.lanka.com/about/destinations/katharagama/kebilitta-devalaya/" target="_blank" rel="noopener noreferrer">Read More</a>
                    </Button>
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
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <ImageCarousel
                    images={[
                      { src: "/Wada-siti-kanda.jpeg", caption: "Wadasiti Kanda mountain with pilgrims climbing" },
                      { src: "/Wada-siti-kanda1.jpeg", caption: "Summit view from Wadasiti Kanda" },
                      { src: "/Wada-siti-kanda2.jpeg", caption: "Summit view from Wadasiti Kanda" }
                    ]}
                    alt="Wadasiti Kanda mountain with pilgrims climbing and panoramic jungle views"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground dark:text-muted-foreground text-lg leading-relaxed">
                    Wadasiti Kanda is a forested hill rising near Katharagama, considered the legendary meditation site of King Dutugemunu and a place of penance for devotees. Pilgrims climb the mountain, often barefoot, as an act of devotion and to seek blessings for health, success, and spiritual growth.
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
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href="https://www.lanka.com/about/destinations/katharagama/wedasiti-kanda/" target="_blank" rel="noopener noreferrer">Read More</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl text-center text-gray-500 border-2 border-dashed border-purple-300">
          [Premium Advertisement Space - 300x250 Medium Rectangle]
        </div>

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
                    The Esala Festival is Katharagama&apos;s most important celebration, lasting for two weeks in July or
                    August. During this time, hundreds of thousands of pilgrims arrive from across Sri Lanka and South
                    India, transforming the quiet town into a vibrant spiritual center filled with devotional
                    activities, colorful processions, and intense religious fervor.
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
                      <strong>Planning Tip:</strong> Book accommodation 6+ months in advance. Consider staying in nearby
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
                      <li>• Seeking healing for serious illnesses</li>
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
                      <p className="font-medium text-blue-700 mb-1">From Colombo (5-6 hours):</p>
                      <p className="text-sm text-blue-600">
                        Private car/taxi ($80-120), bus via Ratnapura ($5-8), or train to Matara then bus
                      </p>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded border-l-4 border-cyan-500">
                      <p className="font-medium text-cyan-700 mb-1">From Kandy (4-5 hours):</p>
                      <p className="text-sm text-cyan-600">
                        Bus via Badulla and Wellawaya, or private vehicle through scenic hill country
                      </p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-500">
                      <p className="font-medium text-teal-700 mb-1">From Yala National Park (30 minutes):</p>
                      <p className="text-sm text-teal-600">Easy to combine wildlife safari with pilgrimage visit</p>
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
                      <strong>Tuk-tuks:</strong> Available for short trips ($1-2)
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

        {/* Final Section */}
  <section className="mb-12" id="final-section">
          <Card className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border-2 border-orange-200 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-orange-800 mb-4">Your Sacred Journey to Katharagama Awaits</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Katharagama offers a profound spiritual experience that transcends religious boundaries and touches
                  the very essence of human devotion and faith. Whether you come as a pilgrim seeking divine blessings,
                  a cultural enthusiast wanting to understand Sri Lankan religious traditions, or simply as a traveler
                  open to spiritual experiences, Katharagama will leave an indelible mark on your heart and soul.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The power of Katharagama lies not just in its ancient temples and sacred rituals, but in the
                  collective faith of millions of devotees who have found solace, healing, and hope within its sacred
                  boundaries. The sight of pilgrims from all walks of life united in devotion, the sound of ancient
                  chants echoing through temple halls, and the atmosphere of universal love and acceptance create an
                  experience that stays with visitors long after they leave.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As you plan your visit to this sacred site, remember that Katharagama is not just a tourist
                  destination - it&apos;s a living center of faith where real people come with real hopes, fears, and dreams.
                  Approach your visit with respect, openness, and humility, and you&apos;ll discover that Katharagama has the
                  power to transform not just the lives of devoted pilgrims, but anyone who enters its sacred space with
                  a sincere heart.
                </p>
                <div className="bg-white/70 p-6 rounded-xl border border-orange-200 mt-8">
                  <p className="text-xl font-semibold text-orange-800 mb-2">
                    Experience the divine power and universal love of sacred Katharagama! 🙏🕉️🔥✨
                  </p>
                  <p className="text-sm text-orange-600">
                    Where faith transcends boundaries and miracles become reality
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
