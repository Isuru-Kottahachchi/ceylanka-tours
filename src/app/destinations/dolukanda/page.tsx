"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, TreePine, Eye, Footprints, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { ImageCarousel } from "@/components/ui/image-carousel"

// Dolukanda Image Carousel Component
function DolukandaImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const dolukandaImages = [
    {
      src: "/dolukanda-temple-mountain.jpg",
      alt: "Dolukanda Raja Maha Viharaya temple perched on the mountain peak with stunning valley views",
      caption: "Ancient temple on the mountain peak"
    },
    {
      src: "/dolukanda-buddha-statue.jpg", 
      alt: "Giant Buddha statue at Dolukanda temple overlooking the countryside",
      caption: "Majestic Buddha statue watching over the valley"
    },
    {
      src: "/dolukanda-view-panorama.jpg",
      alt: "Panoramic view from Dolukanda mountain showing endless green hills and valleys",
      caption: "Breathtaking panoramic views from the summit"
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === dolukandaImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? dolukandaImages.length - 1 : prevIndex - 1
    )
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative group">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={dolukandaImages[currentImageIndex].src}
          alt={dolukandaImages[currentImageIndex].alt}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentImageIndex === 0}
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Image Caption */}
      <div className="mt-3 text-center">
        <p className="text-sm font-medium text-muted-foreground">{dolukandaImages[currentImageIndex].caption}</p>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {dolukandaImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
              ? 'bg-blue-600 scale-110'
              : 'bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function DolukandaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Dolukanda.jpg"
          alt="Spectacular sunset view of Dolukanda Raja Maha Viharaya temple on the mountain peak with golden light illuminating the ancient Buddhist sanctuary"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dolukanda Raja Maha Viharaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Mountain Temple with Breathtaking Views</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
              <Mountain className="w-4 h-4 mr-1" />
              Mountain Temple
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Eye className="w-4 h-4 mr-1" />
              Panoramic Views
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Ancient Heritage
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Dolukanda: Where Heaven Touches Earth</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Standing majestically on a towering peak in the hill country, Dolukanda Raja Maha Viharaya is one of Sri Lanka&apos;s most spectacular mountain temples.
              Located near Kurunegala, this ancient Buddhist sanctuary offers visitors an extraordinary spiritual journey combined with some of the most breathtaking panoramic views in the country.
              The name &quot;Dolukanda&quot; is believed to refer to the unique rock formations that crown this sacred peak.
            </p>
            <p className="text-lg">
              What makes Dolukanda truly special is its perfect combination of spiritual significance, natural beauty, and adventure.
              The temple complex features ancient cave temples, a magnificent Buddha statue, and meditation chambers carved into the rock itself.
              Visitors must climb stone steps carved into the mountain face to reach the summit, where they are rewarded with 360-degree views of rolling hills,
              ancient villages, and distant mountains that stretch to the horizon. This sacred site has been a place of Buddhist worship and meditation for centuries.
            </p>
          </div>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Dolukanda Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Essential Dolukanda Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Kurunegala District, North Western Province
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Elevation:</strong> Elevated mountain peak
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>History:</strong> Ancient Buddhist heritage site
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Footprints className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Climb:</strong> Lengthy stone stairway to summit
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Views:</strong> 360-degree panoramic vistas
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Visit Time:</strong> 2-4 hours for complete experience
                    </span>
                  </div>
                </div>
                {/* Valuable Facts for Desktop */}
                <div className="hidden lg:block mt-6 space-y-4">
                  <div className="flex gap-4 items-center bg-blue-50 border-l-4 border-blue-400 rounded p-4">
                    <Image
                      src="/dolukanda-ancient-cave.jpg"
                      alt="Ancient cave temple at Dolukanda with Buddha statue and wall paintings"
                      width={120}
                      height={80}
                      className="rounded shadow-md object-cover"
                    />
                    <div>
                      <p className="text-base text-blue-900 font-semibold mb-1">Ancient Cave Temple Complex</p>
                      <p className="text-sm text-blue-800">
                        The temple features ancient cave chambers with historic Buddhist artwork, Buddha statues, and meditation cells carved directly into the rock. 
                        These sacred caves have provided shelter for Buddhist monks for centuries.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-amber-50 border-l-4 border-yellow-400 rounded p-4 flex-1">
                      <p className="text-sm text-yellow-900 font-semibold mb-1">Ideal Duration</p>
                      <p className="text-sm text-yellow-800">Half day (3-4 hours) including the climb, temple visit, and enjoying the panoramic views.</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 rounded p-4 flex-1">
                      <p className="text-sm text-green-900 font-semibold mb-1">Best Time to Visit</p>
                      <p className="text-sm text-green-800">Early morning (6-10 AM) or late afternoon (3-6 PM) for cooler weather and the best lighting for views.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Get to Dolukanda */}
          <section className="flex-1">
            <Card className="border-l-4 border-blue-500 scroll-mt-40" id="how-to-get-there">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Get to Dolukanda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Colombo (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> Approximately 120km (75 miles)</li>
                      <li>• <strong>Duration:</strong> Approximately 2.5-3 hours by car</li>
                      <li>• <strong>Route:</strong> A1 highway via Kurunegala</li>
                      <li>• <strong>Cost:</strong> $40-60 USD by taxi</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">From Kurunegala</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> Approximately 25km (40 minutes)</li>
                      <li>• <strong>By Bus:</strong> Local buses every 30 minutes</li>
                      <li>• <strong>By Tuk-tuk:</strong> 1,500-2,000 LKR</li>
                      <li>• <strong>Best option:</strong> Most convenient base</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Kandy</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> Approximately 65km via Kurunegala</li>
                      <li>• <strong>Duration:</strong> Approximately 1.5-2 hours</li>
                      <li>• <strong>Route:</strong> A6 to Kurunegala, then local roads</li>
                      <li>• <strong>Cost:</strong> $25-35 USD by taxi</li>
                    </ul>

                    <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">Final Approach</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Parking:</strong> Available at mountain base</li>
                      <li>• <strong>Climb:</strong> 30-45 minute walk to summit</li>
                      <li>• <strong>Difficulty:</strong> Moderate (stone steps)</li>
                      <li>• <strong>Facilities:</strong> Basic refreshments available</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Travel Tips</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Start early to avoid midday heat during the climb</li>
                    <li>• Wear comfortable walking shoes with good grip</li>
                    <li>• Bring water and light snacks for the journey</li>
                    <li>• Respect temple rules - remove shoes and cover shoulders</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* The Sacred Mountain */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Sacred Mountain: A Journey to the Heavens</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <DolukandaImageCarousel />
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The journey to Dolukanda&apos;s summit is as rewarding as the destination itself. Carved stone steps wind their way up the mountain face,
                following ancient pathways used by pilgrims for centuries. As you climb higher, the world below gradually unfolds into a spectacular
                tapestry of green hills, traditional villages, and distant mountain ranges that seem to stretch into infinity.
              </p>
              <p>
                The temple complex at the summit is a masterpiece of ancient architecture, seamlessly integrated into the natural rock formations.
                Ancient cave temples house original Buddha statues and wall paintings that have survived for over two millennia.
                The main attraction is the magnificent Buddha statue that sits in meditation, overlooking the entire valley with a serene expression of peace and wisdom.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">What Makes Dolukanda Special:</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Perfect 360-degree panoramic views from elevated peak</li>
                  <li>• Ancient cave temples with historic Buddhist artwork</li>
                  <li>• Spectacular sunrise and sunset viewing opportunities</li>
                  <li>• Active meditation center for Buddhist monks</li>
                  <li>• Unique rock formations creating natural temple chambers</li>
                  <li>• Peaceful atmosphere away from tourist crowds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Temple Complex & Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Sites & Temple Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Main Buddha Statue</CardTitle>
                <CardDescription>The guardian of the valley</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dolukanda-main-buddha.jpg"
                  alt="Large Buddha statue at Dolukanda temple in meditation pose overlooking valley"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover h-40"
                />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The magnificent Buddha statue sits in perfect meditation pose, facing the valley with a serene expression. 
                    This modern addition to the ancient temple represents peace and wisdom watching over the land.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Height: 15 meters (49 feet)</li>
                    <li>• Position: Meditation pose (Dhyana mudra)</li>
                    <li>• View: Overlooks entire valley</li>
                    <li>• Best photos: Sunrise and sunset</li>
                    <li>• Significance: Symbol of peace and protection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Ancient Cave Temples</CardTitle>
                <CardDescription>Historic sacred chambers</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dolukanda-cave-temple.jpg"
                  alt="Ancient cave temple at Dolukanda with wall paintings and Buddha statues"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover h-40"
                />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Natural rock caves transformed into sacred temples centuries ago. These chambers house historic Buddhist artwork, 
                    ancient Buddha statues, and meditation spaces carved directly into the mountain.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Age: Centuries-old heritage site</li>
                    <li>• Features: Historic Buddhist artwork</li>
                    <li>• Statues: Ancient Buddha images</li>
                    <li>• Purpose: Meditation and worship</li>
                    <li>• Preservation: Remarkably well-maintained</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Summit Viewpoint</CardTitle>
                <CardDescription>360-degree panoramic vistas</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dolukanda-summit-view.jpg"
                  alt="Breathtaking 360-degree panoramic view from Dolukanda summit showing endless green hills"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover h-40"
                />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    From the temple summit, visitors enjoy unobstructed 360-degree views of the surrounding countryside. 
                    Green hills roll endlessly to the horizon, traditional villages dot the landscape, and distant mountains create a stunning backdrop.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Visibility: Up to 50km on clear days</li>
                    <li>• Direction: Complete 360-degree views</li>
                    <li>• Features: Hills, villages, mountains</li>
                    <li>• Best time: Early morning, late afternoon</li>
                    <li>• Photography: Spectacular sunrise/sunset</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Rock Formations</CardTitle>
                <CardDescription>The seven sacred rocks</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dolukanda-rock-formation.jpg"
                  alt="Unique seven rock formations at Dolukanda that give the mountain its name"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover h-40"
                />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The unique rock formations that crown the mountain give Dolukanda its name - &quot;Seven Rock Mountain.&quot; 
                    These natural granite formations create perfect platforms for meditation and offer dramatic backdrops for the temple complex.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Formation: Seven distinct rock outcrops</li>
                    <li>• Material: Natural granite</li>
                    <li>• Use: Temple foundations and platforms</li>
                    <li>• Significance: Sacred meditation spots</li>
                    <li>• Features: Natural caves and chambers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Meditation Chambers</CardTitle>
                <CardDescription>Peaceful spaces for reflection</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dolukanda-meditation.jpg"
                  alt="Peaceful meditation chamber carved into rock at Dolukanda temple"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover h-40"
                />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Several meditation chambers are carved into the rock face, providing quiet spaces for reflection and spiritual practice. 
                    These chambers offer protection from the elements while maintaining connection to the natural environment.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Location: Carved into mountain rock</li>
                    <li>• Purpose: Meditation and retreat</li>
                    <li>• Features: Natural ventilation, quiet</li>
                    <li>• Use: Active Buddhist practice</li>
                    <li>• Access: Open to respectful visitors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">Ancient Stairway</CardTitle>
                <CardDescription>Steep climb to enlightenment</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/dolukanda-stairs.jpg"
                  alt="Ancient stone steps carved into mountain leading to Dolukanda temple summit"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover h-40"
                />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The journey to the summit follows a lengthy stone stairway carved into the mountain face by ancient builders. 
                    This pilgrimage path has been used for centuries and offers a spiritual journey as well as physical challenge.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Steps: Lengthy stone carved stairway</li>
                    <li>• Duration: 30-45 minutes to summit</li>
                    <li>• Difficulty: Moderate physical fitness needed</li>
                    <li>• Safety: Handrails in steep sections</li>
                    <li>• Rest points: Several viewing platforms</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spiritual Experience & Cultural Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Spiritual Significance & Cultural Heritage</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Living Buddhist Heritage</CardTitle>
                <CardDescription>Over 2,000 years of continuous spiritual practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Dolukanda Raja Maha Viharaya represents one of Sri Lanka&apos;s most important mountain temples, with a long tradition
                      of Buddhist practice spanning many centuries. The temple has served as a refuge for monks seeking solitude and meditation,
                      a place of pilgrimage for devotees, and a center of learning for Buddhist philosophy. The name itself holds deep meaning -
                      &quot;Raja Maha Viharaya&quot; indicates its status as a &quot;Great Royal Temple,&quot; suggesting historical royal patronage.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Active monastery with resident Buddhist monks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Daily prayer sessions and meditation programs
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Important pilgrimage site for Buddhist devotees
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Teaching center for Buddhist philosophy and meditation
                      </li>
                    </ul>
                  </div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/dolukanda-monks.jpg",
                        alt: "Buddhist monks in meditation at Dolukanda temple",
                        caption: "",
                        title: ""
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Archaeological & Historical Importance</CardTitle>
                <CardDescription>Preserving ancient Sri Lankan Buddhist culture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">Ancient Period</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cave temples carved by early Buddhist monks</li>
                      <li>• Buddhist artwork created using traditional methods</li>
                      <li>• Buddha statues carved from granite</li>
                      <li>• Monastery established for forest-dwelling monks</li>
                      <li>• Strategic location for meditation and spiritual practice</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Medieval Period (5th-15th Century)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Royal patronage during various kingdoms</li>
                      <li>• Expansion of temple complex with new buildings</li>
                      <li>• Development of sophisticated water management</li>
                      <li>• Increased pilgrimage activity from across island</li>
                      <li>• Center for Buddhist learning and scholarship</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Archaeological Features:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <ul className="space-y-1 text-purple-700">
                      <li>• Historic inscriptions</li>
                      <li>• Ancient drip-ledges (katarama) on caves</li>
                      <li>• Archaeological artifacts and pottery</li>
                    </ul>
                    <ul className="space-y-1 text-purple-700">
                      <li>• Medieval period renovations and additions</li>
                      <li>• Traditional Sri Lankan architectural elements</li>
                      <li>• Historic irrigation channels and water features</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Planning Your Visit to Dolukanda</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Best Times to Visit</CardTitle>
                <CardDescription>Weather, lighting, and crowd considerations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orange-800">Time of Day</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium text-orange-600">Early Morning (6:00-9:00 AM)</p>
                        <p className="text-muted-foreground">Cool temperatures, stunning sunrise views, fewer crowds, clear air for photography</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-600">Late Afternoon (3:00-6:00 PM)</p>
                        <p className="text-muted-foreground">Golden hour lighting, spectacular sunset, cooler climbing conditions</p>
                      </div>
                      <div>
                        <p className="font-medium text-red-600">Avoid Midday (11:00 AM-2:00 PM)</p>
                        <p className="text-muted-foreground">Very hot sun, hazy views, challenging climbing conditions</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-800">Seasonal Considerations</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium text-green-600">Dry Season (May-September)</p>
                        <p className="text-muted-foreground">Clear skies, excellent views, minimal rain, dusty conditions</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-600">Monsoon Season (October-January)</p>
                        <p className="text-muted-foreground">Lush greenery, dramatic clouds, possible rain, slippery steps</p>
                      </div>
                      <div>
                        <p className="font-medium text-purple-600">Inter-Monsoon (February-April)</p>
                        <p className="text-muted-foreground">Variable weather, occasional showers, good photography light</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-800">Special Events</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium text-purple-600">Full Moon Days (Poya Days)</p>
                        <p className="text-muted-foreground">Special religious ceremonies, increased pilgrims, spiritual atmosphere</p>
                      </div>
                      <div>
                        <p className="font-medium text-orange-600">Vesak Festival (May)</p>
                        <p className="text-muted-foreground">Major Buddhist celebration, decorations, cultural events</p>
                      </div>
                      <div>
                        <p className="font-medium text-teal-600">Regular Days</p>
                        <p className="text-muted-foreground">Peaceful atmosphere, fewer crowds, easier parking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What to Bring & Preparation</CardTitle>
                <CardDescription>Essential items for a safe and comfortable visit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-800">Climbing Essentials</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comfortable walking shoes with good grip</li>
                      <li>• Light backpack for water and snacks</li>
                      <li>• Water bottles (1-2 liters per person)</li>
                      <li>• Energy snacks or light meals</li>
                      <li>• Small towel for perspiration</li>
                      <li>• Basic first aid supplies</li>
                      <li>• Mobile phone with emergency contacts</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-800">Temple Visit Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Modest clothing covering shoulders and knees</li>
                      <li>• Socks to wear inside temple (remove shoes)</li>
                      <li>• Head covering for women (optional but respectful)</li>
                      <li>• Small donation for temple maintenance</li>
                      <li>• Quiet, respectful behavior in sacred areas</li>
                      <li>• Camera (photography usually allowed outside)</li>
                      <li>• Plastic bag for carrying removed shoes</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orange-800">Photography & Comfort</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Camera or smartphone with extra batteries</li>
                      <li>• Portable charger/power bank</li>
                      <li>• Sunscreen and wide-brimmed hat</li>
                      <li>• Insect repellent for natural areas</li>
                      <li>• Light rain jacket (seasonal)</li>
                      <li>• Binoculars for distant views</li>
                      <li>• Small mat or cloth for sitting</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Important Tips:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-yellow-700">
                    <ul className="space-y-1">
                      <li>• Start early to avoid heat and crowds</li>
                      <li>• Inform someone of your climbing plans</li>
                      <li>• Check weather conditions before departure</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Respect local customs and temple rules</li>
                      <li>• Stay hydrated throughout the climb</li>
                      <li>• Take breaks at designated rest areas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Photography Paradise: Capturing Dolukanda</h2>
          <Card>
            <CardHeader>
              <CardTitle>Best Photography Spots & Techniques</CardTitle>
              <CardDescription>Creating stunning memories of your mountain temple experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Prime Photography Locations</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-700">Summit Panoramic Views</h5>
                      <p className="text-sm text-muted-foreground">360-degree landscapes, rolling hills, distant mountains</p>
                      <p className="text-xs text-blue-600">Best: Sunrise/sunset, wide-angle lens, tripod recommended</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-orange-700">Buddha Statue Compositions</h5>
                      <p className="text-sm text-muted-foreground">Majestic statue with valley backdrop, meditation poses</p>
                      <p className="text-xs text-orange-600">Best: Golden hour, multiple angles, respectful distance</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-green-700">Ancient Cave Temples</h5>
                      <p className="text-sm text-muted-foreground">Wall paintings, Buddha statues, atmospheric interiors</p>
                      <p className="text-xs text-green-600">Best: Natural lighting, no flash, ask permission first</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-purple-700">Climbing Journey</h5>
                      <p className="text-sm text-muted-foreground">Stone steps, pilgrims, changing perspectives</p>
                      <p className="text-xs text-purple-600">Best: Various points during ascent, candid moments</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-800 mb-3">Photography Tips & Techniques</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <h5 className="font-medium text-orange-600">Lighting Considerations</h5>
                      <p className="text-muted-foreground">Golden hour provides warm, dramatic light. Blue hour after sunset creates mystical atmosphere. Avoid harsh midday sun.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-600">Composition Ideas</h5>
                      <p className="text-muted-foreground">Use leading lines of stairs, frame Buddha statue with rock formations, include foreground elements for depth.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-600">Equipment Recommendations</h5>
                      <p className="text-muted-foreground">Wide-angle lens for landscapes, telephoto for distant details, tripod for low light, extra batteries in cool weather.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-600">Respect & Ethics</h5>
                      <p className="text-muted-foreground">Ask permission before photographing people, no flash in temples, maintain quiet behavior during photography.</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Pro Photography Tips:</h5>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• Arrive 30 minutes before sunrise for best summit shots</li>
                      <li>• Use foreground rocks to add depth to landscape photos</li>
                      <li>• Capture the journey - photos of the climb tell a story</li>
                      <li>• Include scale - people make the views more impressive</li>
                      <li>• Bracket exposures for high contrast sunset/sunrise scenes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions & Extended Itinerary</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card className="border-l-4 border-blue-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Kurunegala City</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Historic city with ancient rock formations and modern amenities. Perfect base for exploring Dolukanda with good hotels and restaurants.
                </p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Distance: Approximately 25km (40 minutes from Dolukanda)</li>
                  <li>• Attractions: Ethagala Rock, Clock Tower, markets</li>
                  <li>• Services: Hotels, restaurants, ATMs, hospitals</li>
                  <li>• Best for: Base accommodation and supplies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Arankele Monastery</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ancient forest monastery ruins dating back to 6th century. Peaceful meditation site with archaeological importance.
                </p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Distance: Approximately 35km from Dolukanda</li>
                  <li>• Period: 6th-14th century monastery complex</li>
                  <li>• Features: Ancient ruins, meditation platforms</li>
                  <li>• Best for: History and archaeology enthusiasts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Ridi Viharaya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sacred temple where silver ore was discovered, leading to funding for ancient Ruwanwelisaya stupa. Beautiful cave temples.
                </p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• Distance: Approximately 45km from Dolukanda</li>
                  <li>• Significance: Silver temple with royal history</li>
                  <li>• Features: Cave temples, ancient wall paintings</li>
                  <li>• Best for: Religious and cultural exploration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Panduwasnuwara</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ancient royal capital with palace ruins and archaeological museum. Important medieval period site with royal connections.
                </p>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• Distance: Approximately 30km from Dolukanda</li>
                  <li>• Period: 12th-13th century royal capital</li>
                  <li>• Features: Palace ruins, museum, moated city</li>
                  <li>• Best for: History and archaeology exploration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Yakdessa Temple</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Rock temple with stunning views and historic Buddhist artwork. Less crowded alternative to major temples.
                </p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• Distance: Approximately 20km from Dolukanda</li>
                  <li>• Features: Cave temple, wall paintings, views</li>
                  <li>• Difficulty: Moderate climb to reach temple</li>
                  <li>• Best for: Peaceful temple experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-teal-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-teal-800 mb-2">Deduru Oya River</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Scenic river with boat rides and natural swimming areas. Rural countryside experience with traditional villages.
                </p>
                <ul className="text-xs text-teal-700 space-y-1">
                  <li>• Distance: Approximately 15km from Dolukanda base</li>
                  <li>• Activities: Boat rides, swimming, fishing</li>
                  <li>• Scenery: Rural villages, traditional life</li>
                  <li>• Best for: Nature and cultural immersion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visitor Guidelines & Temple Etiquette</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Temple Etiquette & Respect</CardTitle>
                <CardDescription>Proper behavior in sacred spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Dress Code Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cover shoulders and knees (long pants/skirts, sleeves)</li>
                      <li>• Remove shoes and hats before entering temple buildings</li>
                      <li>• Avoid tight-fitting or revealing clothing</li>
                      <li>• White or light-colored clothing is preferred</li>
                      <li>• Bring socks to wear when shoes are removed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Behavioral Guidelines</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Maintain quiet, respectful behavior at all times</li>
                      <li>• No pointing feet toward Buddha statues</li>
                      <li>• Keep Buddha statues higher than yourself (don&apos;t climb on)</li>
                      <li>• Follow monks&apos; instructions and requests</li>
                      <li>• No loud talking, laughing, or disruptive behavior</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Photography Rules</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ask permission before photographing inside temples</li>
                      <li>• No flash photography near ancient wall paintings</li>
                      <li>• Don&apos;t photograph monks without permission</li>
                      <li>• Landscape photography usually freely allowed outside</li>
                      <li>• Respect &quot;No Photography&quot; signs where posted</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safety & Environmental Responsibility</CardTitle>
                <CardDescription>Protecting yourself and the sacred site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Climbing Safety</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use handrails where provided</li>
                      <li>• Take frequent rest breaks during ascent</li>
                      <li>• Stay hydrated - bring plenty of water</li>
                      <li>• Climb during cooler parts of the day</li>
                      <li>• Don&apos;t attempt climb in severe weather</li>
                      <li>• Inform others of your climbing plans</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Environmental Protection</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Carry out all trash - leave no trace</li>
                      <li>• Don&apos;t pick flowers or damage plants</li>
                      <li>• Stay on designated paths and stairs</li>
                      <li>• Don&apos;t carve names or messages on rocks</li>
                      <li>• Respect wildlife - don&apos;t feed animals</li>
                      <li>• Use reusable water bottles to reduce plastic</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Emergency Preparedness</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Carry emergency contact information</li>
                      <li>• Know basic first aid for heat exhaustion</li>
                      <li>• Have mobile phone with local emergency numbers</li>
                      <li>• Travel with companions when possible</li>
                      <li>• Know the quickest route back to vehicle</li>
                      <li>• Check weather forecast before departure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
