"use client"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Users, Crown, Camera, Calendar, Music, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"



function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
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
            <div className="relative overflow-hidden rounded-lg h-[500px] md:h-[500px] sm:h-[350px] flex items-center justify-center">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${alt} - Image ${currentIndex + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg transition-all duration-300 object-contain w-full h-full"
                />

                {/* Navigation buttons */}
                {images.length > 1 && (
                    <>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-4 w-4 text-gray-800 dark:text-gray-200" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-4 w-4 text-gray-800 dark:text-gray-200" />
                        </Button>
                    </>
                )}
            </div>

            {/* Dots indicator */}
            {images.length > 1 && (
                <div className="flex justify-center mt-3 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            )}

            {/* Image counter */}
            {images.length > 1 && (
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    )
}

    const peraharaImages = [
        "/Kandy-Procession.jpg",
        "/perahara.jpeg",
        "/perahara1.jpeg",
        "/perahara2.jpg",
        "/perahara.jpg",
    ]

export default function KandyEsalaPeraheraGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kandy-Procession.jpg"
          alt="Kandy Esala Perahera festival procession with magnificently decorated elephants, traditional dancers, and thousands of devotees under colorful lights"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Kandy Esala Perahera
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl mb-8 font-light leading-relaxed">
            The World&apos;s Most Beautiful Buddhist Festival
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Join millions of people who witness this magical celebration every year in the ancient city of Kandy, where
            sacred elephants, traditional dancers, and centuries-old customs create an unforgettable experience
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Crown className="w-4 h-4 mr-2" />
              Sacred Tooth Relic
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              100+ Elephants
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              10 Nights Festival
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              August
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Welcome to Sri Lanka&apos;s Greatest Festival
          </h2>
          <div className="prose prose-xl max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p className="text-xl mb-6 leading-relaxed">
              Every year when the full moon rises in the month of Esala (August), something truly magical happens
              in the ancient hill city of Kandy. The streets come alive with the sound of traditional drums, the air
              fills with the sweet smell of jasmine flowers, and hundreds of beautifully decorated elephants parade
              through the city carrying the most sacred treasure in all of Sri Lanka - the tooth relic of Lord Buddha.
            </p>
            <p className="text-lg mb-6">
              This is the Kandy Esala Perahera, and it is not just a festival - it is a living piece of history that has
              been celebrated for over 1,400 years. Imagine watching the same ceremonies that kings and queens witnessed
              centuries ago, seeing the same traditional dances that have been passed down from father to son for
              generations, and feeling the same spiritual energy that has drawn millions of people to this sacred
              celebration.
            </p>
            <p className="text-lg mb-6">
              What makes this festival so special is not just its age or beauty, but the way it brings together
              everything that makes Sri Lankan culture unique. You will see magnificent elephants dressed in golden
              cloth, skilled dancers performing ancient rituals, musicians playing instruments that sound like nothing
              else in the world, and thousands of people from all walks of life coming together in celebration and
              prayer.
            </p>
            <p className="text-lg">
              Whether you are interested in history, culture, religion, or simply want to witness one of the most
              beautiful sights on Earth, the Kandy Esala Perahera offers an experience that will stay with you forever.
              This guide will help you understand everything about this amazing festival, from its ancient beginnings to
              the practical details you need to plan your visit.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl">
                <Star className="w-8 h-8 text-orange-500" />
                Festival Quick Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-orange-700 dark:text-orange-300 mb-4">When & Where</h4>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Time:</strong> August (Esala month)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Duration:</strong> 10 nights of processions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Location:</strong> Kandy city streets
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Visitors:</strong> Over 1 million people
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-blue-700 dark:text-blue-300 mb-4">Festival Features</h4>
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-gold-500" />
                    <span>
                      <strong>Elephants:</strong> 100+ decorated elephants
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Performers:</strong> 1000+ dancers & musicians
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Traditions:</strong> 1400+ years old
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <span>
                      <strong>Purpose:</strong> Honor Buddha&apos;s tooth relic
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-purple-700 dark:text-purple-300 mb-4">Best Experience</h4>
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Best Nights:</strong> Final 5 nights (Randoli)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Start Time:</strong> 8:00 PM each night
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Best Spots:</strong> Temple area & main streets
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Booking:</strong> Reserve seats early
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-orange-300 dark:border-orange-600">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">The Amazing History of Esala Perahera</h2>

          <div className="space-y-12">
            {/* Ancient Beginnings */}
            <Card className="overflow-hidden border-2 border-amber-200 dark:border-amber-700">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30">
                <CardTitle className="text-2xl text-amber-800 dark:text-amber-300">How It All Started - 1,400 Years Ago</CardTitle>
                <CardDescription className="text-lg text-amber-600 dark:text-amber-400">
                  The fascinating story of how this festival began
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Long, long ago, around 600 years after Lord Buddha passed away, there was a terrible war in
                      ancient India. A brave princess named Hemamali had to escape from her kingdom with the most
                      precious thing in the Buddhist world - one of Buddha&apos;s teeth. She hid this sacred tooth in her
                      hair and traveled all the way to Sri Lanka to keep it safe.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When the tooth relic arrived in Sri Lanka in 313 CE, the king was so happy and honored that he
                      decided to build a special temple to keep it safe. But he wanted to do more than just hide it away
                      - he wanted to share this blessing with all his people. So he started a tradition of taking the
                      tooth relic out in a grand procession so everyone could see it and receive blessings.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      At first, these processions were simple affairs. But as years passed and different kings ruled Sri
                      Lanka, each one wanted to make the procession more beautiful and grand than before. They added
                      more elephants, more dancers, more musicians, and more decorations. What started as a simple
                      religious ceremony slowly grew into the magnificent festival we see today.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The festival got its current name &quot;Esala Perahera&quot; because it happens during the month of Esala in
                      the Buddhist calendar (which falls in August), and &quot;Perahera&quot; means &quot;procession&quot; in Sinhala.
                      For over 1,400 years, through wars, invasions, colonial rule, and modern times, this festival has
                      never stopped. It is one of the oldest continuously celebrated festivals in the world.
                    </p>

                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">Historical Timeline:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>313 CE:</strong> Sacred tooth relic arrives in Sri Lanka
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>600-1000 CE:</strong> First simple processions begin
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>1400-1600 CE:</strong> Festival grows under Kandyan kings
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>1815-1948:</strong> Continues under British colonial rule
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>1948-Present:</strong> Modern festival with global recognition
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Historical illustration showing ancient Sri Lankan king receiving the sacred tooth relic and early Buddhist procession"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            
        {/* Festival Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Complete Festival Schedule</h2>

          <Card className="border-2 border-indigo-200 dark:border-indigo-700">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
              <CardTitle className="text-2xl text-indigo-700 dark:text-indigo-300">10 Nights of Magic - What Happens When</CardTitle>
              <CardDescription>Your day-by-day guide to the festival</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Kap Situveema (Flag Hoisting)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The festival officially begins with the hoisting of special flags at all five temples. This
                      ceremony announces to the city that the Perahera season has started. Local people begin preparing
                      their homes and shops with decorations and lights.
                    </p>
                    <p className="text-xs text-indigo-600 font-medium">Duration: 1 day before processions begin</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Kumbal Perahera (First 5 Nights)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The first five nights feature smaller processions from each temple. These are practice runs that
                      help everyone prepare for the grand finale. You can see all the main elements - elephants,
                      dancers, musicians - but in smaller numbers. These nights are perfect for first-time visitors to
                      get familiar with the festival.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">
                      Best for: First-time visitors, less crowded experience
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Randoli Perahera (Final 5 Nights)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      The grand finale! These five nights feature the full procession with all 100+ elephants, thousands
                      of performers, and the most spectacular displays. The sacred casket containing Buddha&apos;s tooth
                      relic joins the procession, making these the most important and crowded nights. The final night is
                      the most magnificent of all.
                    </p>
                    <p className="text-xs text-red-600 font-medium">
                      Best for: Main event experience, book seats in advance
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <ImageCarousel
                                        images={peraharaImages}
                                        alt="Panchakapaduwa Island showing various views of the mystical island, temples, and meditation areas"
                                    />

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                    <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">Daily Schedule:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>6:00 PM:</strong> Temples prepare for procession
                      </li>
                      <li>
                        • <strong>7:30 PM:</strong> Elephants gather at starting points
                      </li>
                      <li>
                        • <strong>8:00 PM:</strong> Processions begin from temples
                      </li>
                      <li>
                        • <strong>8:30 PM:</strong> All processions merge into main parade
                      </li>
                      <li>
                        • <strong>9:00-11:00 PM:</strong> Main procession through city
                      </li>
                      <li>
                        • <strong>11:30 PM:</strong> Processions return to temples
                      </li>
                      <li>
                        • <strong>Next Morning:</strong> Water cutting ceremony (final day only)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

            {/* Kandyan Period */}
            <Card className="overflow-hidden border-2 border-purple-200 dark:border-purple-700">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-300">The Golden Age - Kandyan Kings Make It Grand</CardTitle>
                <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
                  How the festival became the magnificent celebration we know today
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Kandyan period royal procession showing magnificently decorated elephants, traditional dancers, and royal ceremonies"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The festival truly became spectacular during the time of the Kandyan Kingdom (1469-1815). The
                      Kandyan kings were very religious and wanted to show their devotion to Buddhism in the most
                      beautiful way possible. They believed that the more magnificent they made the procession, the more
                      merit they would earn and the more blessings their kingdom would receive.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      King Kirthi Sri Rajasinghe (1747-1782) was especially important in shaping the festival. He
                      decided that the procession should not just honor the tooth relic, but also pay respect to the
                      four guardian gods of Sri Lanka - Natha, Vishnu, Kataragama, and Pattini. This is why today&apos;s
                      Perahera actually includes five separate processions that all come together in one grand parade.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The Kandyan kings also established many of the traditions we still see today. They decided which
                      families would have the honor of providing elephants, which dancers would perform which dances,
                      what costumes everyone should wear, and even the exact route the procession should follow through
                      the city. These rules were written down and have been followed for hundreds of years.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      During this golden period, the festival became so famous that people traveled from all over Asia
                      to witness it. Foreign visitors wrote detailed descriptions of the procession, amazed by the
                      hundreds of elephants, thousands of performers, and the incredible organization required to put on
                      such a massive celebration year after year.
                    </p>

                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Kandyan Contributions:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Five Processions:</strong> Added four guardian god processions
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Royal Elephants:</strong> Introduced magnificent elephant decorations
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Traditional Dances:</strong> Formalized Kandyan dance performances
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Ceremonial Rules:</strong> Established protocols still followed today
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>International Fame:</strong> Made festival known across Asia
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Elephants Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">The Magnificent Elephants - Stars of the Show</h2>

          <div className="space-y-12">
            {/* Main Tusker */}
            <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-600">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50">
                <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">The Sacred Tusker - Most Important Elephant</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                  Meet the special elephant who carries Buddha&apos;s tooth relic
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      In the entire Perahera, there is one elephant who is more special than all the others. This is the
                      Maligawa Tusker - the sacred elephant who has the incredible honor of carrying the golden casket
                      that contains the tooth relic of Lord Buddha. This elephant is not just an animal; he is
                      considered almost like a holy being, treated with the same respect as a high-ranking monk.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The Maligawa Tusker is always a male elephant with beautiful, symmetrical tusks. He must be calm,
                      gentle, and completely comfortable with crowds and noise. Finding the right elephant for this job
                      can take years, and once chosen, he becomes part of the temple family. He lives in special
                      quarters near the Temple of the Tooth and receives the best care possible.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The most famous Maligawa Tusker in recent history was Raja, who served from 1950 to 1988. Raja was
                      so beloved that when he died, the entire country mourned. His body was preserved and is now
                      displayed in a special museum at the temple. People still visit to pay their respects to this
                      magnificent elephant who served Buddha&apos;s relic for nearly 40 years.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      During the Perahera, the Maligawa Tusker is dressed in the most beautiful decorations you can
                      imagine. He wears a golden cloth that covers his entire body, with intricate embroidery and
                      precious stones. On his back sits a golden howdah (a special seat) that holds the sacred casket.
                      Hundreds of small lights illuminate his path, making him look like a moving temple.
                    </p>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Sacred Tusker Facts:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Selection:</strong> Must be male with perfect tusks and calm temperament
                            <br></br>Its 5 body parts should be grounded, including the trunk, tusks, and all four legs and the genitalia and must be a good cast
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Training:</strong> Years of preparation for the sacred duty
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Care:</strong> Lives at temple with dedicated mahouts (handlers)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Decoration:</strong> Golden cloth, precious stones, and hundreds of lights
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Legacy:</strong> Famous tuskers like Raja are remembered forever
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="The sacred Maligawa Tusker magnificently decorated with golden cloth and lights, carrying the sacred casket containing Buddha's tooth relic"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Other Elephants */}
            <Card className="overflow-hidden border-2 border-green-200 dark:border-green-700">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30">
                <CardTitle className="text-2xl text-green-800 dark:text-green-300">
                  The Supporting Cast - 100+ Beautiful Elephants
                </CardTitle>
                <CardDescription className="text-lg text-green-600 dark:text-green-400">
                  Every elephant in the procession has a special role to play
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Multiple elephants decorated with colorful cloths and lights participating in the Kandy Esala Perahera procession"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      While the Maligawa Tusker gets the most attention, he is joined by over 100 other elephants, each
                      playing an important role in the grand procession. These elephants come from temples, wealthy
                      families, and elephant sanctuaries all across Sri Lanka. Being invited to participate in the
                      Perahera is considered a great honor, and families often spend months preparing their elephants
                      for this special event.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Each group of elephants represents different temples and deities. The elephants from the four
                      guardian god temples (Natha, Vishnu, Kataragama, and Pattini) form their own processions, each
                      with their own unique decorations and colors. Some elephants carry smaller caskets with sacred
                      objects, while others simply add to the magnificent spectacle with their presence.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The preparation for these elephants is incredible to watch. Weeks before the festival, skilled
                      craftsmen work day and night creating beautiful cloth decorations, each one unique and colorful.
                      The elephants are bathed, their skin is oiled to make it shine, and they are trained to walk
                      calmly in the procession despite the crowds, noise, and bright lights.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes this even more special is that many of these elephants have been participating in the
                      Perahera for years, sometimes decades. They seem to understand the importance of the event and
                      walk with a dignity and grace that amazes everyone who sees them. The bond between the elephants
                      and their mahouts (handlers) is beautiful to witness - built on years of trust and mutual respect.
                    </p>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Elephant Procession Details:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Total Number:</strong> Over 100 elephants from across Sri Lanka
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Five Groups:</strong> Each representing different temples and deities
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Unique Decorations:</strong> Each elephant has custom-made colorful cloth
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Experienced Participants:</strong> Many elephants return year after year
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Special Training:</strong> Months of preparation for crowd and noise tolerance
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-green-300 dark:border-green-600">
          [Premium Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Nilame Costumes Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">The Magnificent Nilame Costumes</h2>

          <Card className="overflow-hidden border-2 border-gold-200 dark:border-yellow-700">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-gold-50 dark:from-yellow-900/30 dark:to-yellow-900/30">
              <CardTitle className="text-2xl text-yellow-800 dark:text-yellow-300">Royal Dress Fit for Kings</CardTitle>
              <CardDescription className="text-lg text-yellow-600 dark:text-yellow-400">
                The most beautiful traditional costumes in Sri Lanka
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Among all the beautiful sights in the Perahera, few are as stunning as the Nilames in their
                    traditional costumes. Nilames are the chief officials of the temples, and during the Perahera, they
                    dress in the same magnificent style that was worn by Kandyan nobles and court officials hundreds of
                    years ago. These costumes are not just clothing - they are works of art that take months to create
                    and cost thousands of dollars.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The most important part of a Nilame&apos;s costume is the &quot;Nilame Hat&quot; - a tall, cone-shaped headpiece
                    made of silver or gold, decorated with precious stones and intricate carvings. This hat can be over
                    two feet tall and weighs several pounds. It takes years of practice to learn how to walk gracefully
                    while wearing such a magnificent but heavy headpiece.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The body of the costume consists of a white jacket with golden embroidery, a colorful silk cloth
                    wrapped around the waist, and a long white cloth that flows behind like a royal cape. The chest is
                    decorated with multiple chains of gold and silver, while the arms are adorned with beautiful
                    bracelets and armlets that catch the light as the Nilame walks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    What makes these costumes even more special is that many of them are family heirlooms, passed down
                    from father to son for generations. Some of the jewelry and decorations are hundreds of years old,
                    making each Nilame a walking piece of Sri Lankan history. The families spend weeks before the
                    Perahera cleaning, polishing, and preparing these precious costumes.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">Nilame Costume Components:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Nilame Hat:</strong> Tall golden cone with precious stones (2+ feet high)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>White Jacket:</strong> Silk jacket with intricate golden embroidery
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Colorful Cloth:</strong> Silk waist wrap in traditional patterns
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Royal Cape:</strong> Long white flowing cloth behind
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Gold Jewelry:</strong> Multiple chains, bracelets, and armlets
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Family Heirlooms:</strong> Many pieces passed down for generations
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Nilame dressed in magnificent traditional Kandyan costume with tall golden hat, white silk jacket, colorful waist cloth, and golden jewelry"
                  width={500}
                  height={600}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Water Cutting Ceremony */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">The Sacred Water Cutting Ceremony</h2>

          <Card className="overflow-hidden border-2 border-blue-200 dark:border-blue-700">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30">
              <CardTitle className="text-2xl text-blue-800 dark:text-blue-300">The Final Day - Ancient Water Ritual</CardTitle>
              <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                How the festival ends with a beautiful ceremony at the river
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Water cutting ceremony at Mahaweli River showing traditional officials performing sacred water rituals to conclude the Esala Perahera"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    After ten nights of magnificent processions, the Esala Perahera concludes with one of the most
                    beautiful and meaningful ceremonies in Sri Lankan culture - the Water Cutting Ceremony (Diya
                    Kapana). This ancient ritual takes place on the morning after the final procession, at the Mahaweli
                    River, just outside Kandy city.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The ceremony begins before dawn, when the chief officials from all five temples gather at the
                    riverbank. They are still wearing their magnificent costumes from the night before, but now they
                    carry special golden vessels and traditional swords. The atmosphere is peaceful and spiritual, very
                    different from the excitement of the processions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The most important moment comes when the Diyawadana Nilame (the chief custodian of the Temple of the
                    Tooth) uses a golden sword to &quot;cut&quot; the water of the river. This symbolic act represents the
                    division of the sacred water, which is then collected in golden vessels. This water is considered
                    very holy and will be used in temple ceremonies throughout the coming year.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The water cutting ceremony is not just the end of the festival - it is also the beginning of
                    preparations for next year&apos;s Perahera. The sacred water collected during this ceremony will be used
                    to bless the elephants, the costumes, and the sacred objects that will participate in the following
                    year&apos;s procession. In this way, each Perahera is connected to the ones before and after it.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Water Cutting Ceremony Details:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Location:</strong> Mahaweli River, just outside Kandy
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Time:</strong> Early morning after final procession
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Participants:</strong> Chief officials from all five temples
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Ritual:</strong> Golden sword symbolically cuts the river water
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Sacred Water:</strong> Collected for next year&apos;s ceremonies
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Significance:</strong> Connects each year&apos;s festival to the next
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Traditional Performances */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Amazing Traditional Performances</h2>

          <div className="space-y-12">
            {/* Kandyan Dancing */}
            <Card className="overflow-hidden border-2 border-red-200 dark:border-red-700">
              <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30">
                <CardTitle className="text-2xl text-red-800 dark:text-red-300">Kandyan Dancing - Poetry in Motion</CardTitle>
                <CardDescription className="text-lg text-red-600 dark:text-red-400">
                  The most beautiful traditional dance in Sri Lanka
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      One of the most breathtaking sights in the Perahera is the Kandyan dancers, performing ancient
                      dances that tell stories from Buddhist teachings and Sri Lankan folklore. These dancers train for
                      years to master the complex movements, and watching them perform is like seeing poetry come to
                      life. Their colorful costumes, graceful movements, and perfect timing create a magical atmosphere
                      that captivates everyone who sees them.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Kandyan dancing is not just entertainment - it is a form of worship and storytelling. Each dance
                      has a specific meaning, often depicting scenes from the life of Buddha, stories of ancient kings,
                      or tales of gods and goddesses. The dancers use their entire bodies to tell these stories, with
                      every hand gesture, facial expression, and body movement having a special significance.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The costumes worn by Kandyan dancers are works of art in themselves. The male dancers wear white
                      jackets with silver decorations, colorful silk cloths around their waists, and elaborate
                      headdresses with silver ornaments. The female dancers wear beautiful saris with golden borders and
                      traditional jewelry that sparkles in the light of the procession.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes Kandyan dancing even more special is that it is often passed down within families.
                      Fathers teach their sons, and mothers teach their daughters, preserving these ancient art forms
                      for future generations. Many of the dancers you see in the Perahera come from families that have
                      been performing these dances for hundreds of years.
                    </p>

                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border border-red-200 dark:border-red-700">
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Kandyan Dance Features:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Storytelling:</strong> Each dance tells Buddhist or cultural stories
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Training:</strong> Years of practice to master complex movements
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Costumes:</strong> Elaborate traditional dress with silver and gold
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Family Tradition:</strong> Often passed down through generations
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Spiritual Meaning:</strong> Form of worship and cultural expression
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Kandyan dancers in elaborate traditional costumes with silver decorations and colorful silk cloths performing graceful movements"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Fire Dancing and Music */}
            <Card className="overflow-hidden border-2 border-orange-200 dark:border-orange-700">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30">
                <CardTitle className="text-2xl text-orange-800 dark:text-orange-300">Fire Dancing and Traditional Music</CardTitle>
                <CardDescription className="text-lg text-orange-600 dark:text-orange-400">
                  Spectacular performances that light up the night
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Fire dancers creating spectacular displays with flames while traditional drummers play ancient rhythms during the night procession"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      As the sun sets and the Perahera begins, the night comes alive with some of the most spectacular
                      performances you will ever see. Fire dancers create amazing displays with burning torches,
                      spinning and twirling flames in patterns that seem to defy gravity. These skilled performers have
                      trained for years to safely handle fire while creating beautiful, mesmerizing shows that light up
                      the darkness.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The music of the Perahera is just as important as the visual spectacle. Traditional drummers play
                      ancient rhythms on drums that have been used in Sri Lankan ceremonies for over 2,000 years. The
                      sound of these drums - called &quot;geta bera&quot; - creates a heartbeat-like rhythm that seems to pulse
                      through the entire city. The drumming is so powerful that you can feel it in your chest as the
                      procession passes by.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Along with the drums, you will hear the haunting melodies of traditional flutes, the clash of
                      cymbals, and the chanting of Buddhist verses. Each temple&apos;s procession has its own unique musical
                      style, creating a symphony of sounds that blend together into something truly magical. The
                      musicians often come from families that have been playing these instruments for generations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The combination of fire, music, and movement creates an atmosphere that is both exciting and
                      deeply spiritual. Many visitors say that the sound and sight of the Perahera stays with them long
                      after they return home, like a beautiful dream that they can never quite forget.
                    </p>

                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Performance Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Fire Dancing:</strong> Spectacular flame displays by skilled performers
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Traditional Drums:</strong> Ancient &quot;geta bera&quot; drums with powerful rhythms
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Flute Melodies:</strong> Haunting traditional music that tells stories
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Buddhist Chanting:</strong> Sacred verses sung during the procession
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Family Traditions:</strong> Musicians from generations of performers
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Space */}
        <div className="my-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-purple-300 dark:border-purple-600">
          [Premium Advertisement Space - 728x90 Leaderboard]
        </div>


        {/* Practical Information */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Everything You Need to Know for Your Visit</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-2 border-green-200 dark:border-green-700">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30">
                <CardTitle className="text-2xl text-green-700 dark:text-green-300">Planning Your Trip</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Best Time to Visit</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border-l-4 border-green-500 dark:border-green-400">
                      <p className="font-medium text-green-700 dark:text-green-300 mb-1">Festival Dates:</p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Usually in August, dates change each year based on the lunar calendar. Check official
                        announcements in May-June for exact dates.
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border-l-4 border-blue-500 dark:border-blue-400">
                      <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">Weather:</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        Expect warm, humid weather with possible evening showers. Bring light, comfortable clothing and
                        a small umbrella or raincoat.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded border-l-4 border-purple-500 dark:border-purple-400">
                      <p className="font-medium text-purple-700 dark:text-purple-300 mb-1">Booking Advice:</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        Book accommodation and viewing seats at least 3-6 months in advance. Prices increase
                        significantly during festival time.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Where to Stay</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Luxury Hotels:</strong> Several 5-star properties with Perahera viewing packages
                    </p>
                    <p>
                      <strong>Boutique Hotels:</strong> Colonial-era buildings with character and good locations
                    </p>
                    <p>
                      <strong>Guesthouses:</strong> Family-run places offering local hospitality
                    </p>
                    <p>
                      <strong>Homestays:</strong> Stay with local families for authentic cultural experience
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-300">Getting to Kandy</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>From Colombo:</strong> 3-hour drive or scenic train journey
                    </p>
                    <p>
                      <strong>By Air:</strong> Fly to Colombo, then travel overland to Kandy
                    </p>
                    <p>
                      <strong>Local Transport:</strong> Tuk-tuks and taxis available, but book early during festival
                    </p>
                    <p>
                      <strong>Parking:</strong> Very limited during Perahera - use public transport when possible
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 dark:border-blue-700">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/30 dark:to-sky-900/30">
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">Viewing the Procession</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300">Best Viewing Spots</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border-l-4 border-blue-500 dark:border-blue-400">
                      <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">Temple Area:</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        Prime location where procession starts. Book paid seating for best views and comfort.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border-l-4 border-green-500 dark:border-green-400">
                      <p className="font-medium text-green-700 dark:text-green-300 mb-1">Main Streets:</p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Free viewing along the route, but arrive 3-4 hours early for good spots.
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded border-l-4 border-purple-500 dark:border-purple-400">
                      <p className="font-medium text-purple-700 dark:text-purple-300 mb-1">Hotel Balconies:</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        Some hotels offer viewing packages with dinner and comfortable seating.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300">What to Bring</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Comfortable Shoes:</strong> You&apos;ll be standing/walking for hours
                    </p>
                    <p>
                      <strong>Water & Snacks:</strong> Stay hydrated and energized
                    </p>
                    <p>
                      <strong>Camera:</strong> Capture memories, but respect photography rules
                    </p>
                    <p>
                      <strong>Cash:</strong> For food, drinks, and small purchases
                    </p>
                    <p>
                      <strong>Patience:</strong> Crowds are large, but the experience is worth it
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300">Cultural Etiquette</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Dress Respectfully:</strong> Cover shoulders and knees, white clothing preferred
                    </p>
                    <p>
                      <strong>Show Respect:</strong> Stand when sacred casket passes, join hands in prayer
                    </p>
                    <p>
                      <strong>Be Patient:</strong> This is a religious ceremony, not just entertainment
                    </p>
                    <p>
                      <strong>Help Others:</strong> Share space and be kind to fellow visitors
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why This Festival Matters So Much</h2>

          <Card className="border-2 border-pink-200 dark:border-pink-700">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30">
              <CardTitle className="text-2xl text-pink-800 dark:text-pink-300">More Than Just a Beautiful Show</CardTitle>
              <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
                Understanding the deep meaning behind the celebration
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  While the Kandy Esala Perahera is incredibly beautiful to watch, it is important to understand that
                  this is not just a tourist show or cultural performance. For millions of Sri Lankan Buddhists, this
                  festival is one of the most sacred and meaningful events of the year. It represents their deepest
                  religious beliefs, their connection to their ancestors, and their hopes for the future.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-pink-800 dark:text-pink-300">Religious Significance</h4>
                    <p className="text-muted-foreground">
                      The festival honors the Sacred Tooth Relic of Buddha, which Buddhists believe contains the
                      spiritual power and blessings of the Buddha himself. By participating in or witnessing the
                      Perahera, people believe they can earn merit, receive blessings, and progress on their spiritual
                      journey toward enlightenment.
                    </p>
                    <p className="text-muted-foreground">
                      The procession also honors the four guardian deities who are believed to protect Sri Lanka and its
                      people. By showing respect to these gods through elaborate ceremonies, people hope to ensure good
                      harvests, protection from disasters, and prosperity for their families and communities.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-pink-800 dark:text-pink-300">Cultural Heritage</h4>
                    <p className="text-muted-foreground">
                      The Perahera is a living museum of Sri Lankan culture. Every dance, every costume, every ritual
                      has been passed down through generations, preserving ancient knowledge and traditions that might
                      otherwise be lost. Families take great pride in their roles in the festival, whether as elephant
                      owners, dancers, musicians, or craftspeople.
                    </p>
                    <p className="text-muted-foreground">
                      The festival also brings together people from all social classes and backgrounds. Rich and poor,
                      young and old, all participate equally in this celebration, creating a sense of unity and shared
                      identity that strengthens Sri Lankan society.
                    </p>
                  </div>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border border-pink-200 dark:border-pink-700 mt-6">
                  <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-3">What Makes It Special:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>Spiritual Merit:</strong> Buddhists believe participation brings blessings
                      </li>
                      <li>
                        • <strong>Cultural Continuity:</strong> 1,400+ years of unbroken tradition
                      </li>
                      <li>
                        • <strong>Community Unity:</strong> Brings all social classes together
                      </li>
                      <li>
                        • <strong>Artistic Preservation:</strong> Keeps ancient arts alive
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>Family Heritage:</strong> Roles passed down through generations
                      </li>
                      <li>
                        • <strong>National Identity:</strong> Symbol of Sri Lankan Buddhist culture
                      </li>
                      <li>
                        • <strong>International Recognition:</strong> UNESCO cultural heritage
                      </li>
                      <li>
                        • <strong>Living History:</strong> Ancient traditions in modern times
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Inspirational Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 border-2 border-orange-200 dark:border-orange-700 overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-orange-800 dark:text-orange-300 mb-4">
                Experience the Magic of Kandy Esala Perahera
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="space-y-6 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Kandy Esala Perahera is more than just a festival - it is a journey into the heart and soul of Sri
                  Lankan culture. It is a chance to witness traditions that have survived for over 1,400 years, to see
                  the devotion and skill of thousands of performers, and to be part of something truly magical that
                  happens only once a year.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you come as a spiritual seeker, a culture enthusiast, or simply someone who loves beautiful
                  spectacles, the Perahera will touch your heart and create memories that will last a lifetime. The
                  sight of magnificently decorated elephants walking through ancient streets, the sound of traditional
                  drums echoing through the night, and the feeling of being part of something sacred and timeless -
                  these are experiences that no photograph or video can truly capture.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Plan your visit carefully, come with respect and an open heart, and prepare to be amazed by one of the
                  most beautiful celebrations on Earth. The Kandy Esala Perahera is waiting to welcome you into its
                  magical world of elephants, dancers, music, and ancient traditions that continue to inspire wonder in
                  everyone who witnesses them.
                </p>
                <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl border border-orange-200 dark:border-gray-600 mt-8">
                  <p className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-2">
                    Join the magic of Kandy Esala Perahera! 🐘✨🎭🙏
                  </p>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    Where ancient traditions create unforgettable memories in the heart of Sri Lanka
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
