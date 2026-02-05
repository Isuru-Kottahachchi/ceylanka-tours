"use client"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Mountain, TreePine, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function MahiyanganaayaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Mahiyanganaya.jpg"
          alt="Ancient Mahiyangana Raja Maha Vihara temple with golden stupa surrounded by lush mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mahiyanganaya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sacred Site of Lord Buddha's First Visit to Sri Lanka</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Uva Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Mountain className="w-4 h-4 mr-1" />
              Indigenous Vedda Culture
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Pristine Natural Beauty
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Welcome to Mahiyanganaya: Sacred Site of Lord Buddha's First Visit
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Mahiyanganaya holds the profound distinction of being the first place in Sri Lanka visited by Lord Buddha,
              making it one of the most sacred Buddhist pilgrimage sites on the island. This ancient town in the Uva
              Province is steeped in 2,500 years of Buddhist history and surrounded by pristine natural beauty that has
              remained largely unchanged through the centuries.
            </p>
            <p className="text-lg">
              Far from the tourist crowds, Mahiyanganaya offers visitors an authentic glimpse into Sri Lanka&apos;s spiritual
              heart and rural life. Here, ancient traditions live on, sacred sites inspire reverence, and the natural
              landscape provides a serene backdrop for reflection and discovery. This hidden gem represents the essence
              of Sri Lankan Buddhism and cultural heritage.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Mahiyanganaya Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Uva Province, 210km from Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Significance:</strong> First Buddhist site in Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>History:</strong> 2,500+ years of Buddhist heritage
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Environment:</strong> Pristine natural surroundings
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Must-See:</strong> Mahiyangana Raja Maha Vihara
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>
                      <strong>Ideal Stay:</strong> 1-2 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mahiyangana Raja Maha Vihara - Main Temple Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Mahiyangana Raja Maha Vihara: Sacred Site of Lord Buddha's First Visit</h2>
          
          {/* Image and Historical Account Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <ImageCarousel
                images={[
                  {
                    src: "/Mahiyanganaya-Rajamaha-Viharaya.jpeg",
                    alt: "Mahiyangana Raja Maha Vihara golden stupa with pilgrims and ancient architecture",
                  },
                  {
                    src: "/Mahiyanganaya-Rajamaha-Viharaya1.webp",
                    alt: "Ancient Bo tree at Mahiyangana Raja Maha Vihara with devotees offering prayers",
                  },
                  {
                    src: "/Mahiyanganaya-Rajamaha-Viharaya2.jpg",
                    alt: "Interior of Mahiyangana Raja Maha Vihara showing ancient murals and Buddha statues",
                  },
                ]}
              />
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                According to the Mahavamsa (the Great Chronicle of Sri Lanka) and Dipavamsa, Lord Buddha visited Mahiyanganaya 
                during the ninth month after his enlightenment, making it the <strong>first place in Sri Lanka blessed by his presence</strong>. 
                This momentous visit occurred approximately 2,544 years ago, predating even the arrival of Buddhism to many other parts of Asia.
              </p>
              <p>
                The Buddhist chronicles describe how Buddha came to this location to settle a conflict between the local tribes the 
                Yakkhas (Yakshas) and the Nagas who inhabited the area. At that time, the region was ruled by the Yaksha chief 
                Mahasumana. Through his divine presence and teachings, Buddha brought peace between the warring tribes and established 
                harmony in the land. Witnessing the Buddha&apos;s power and wisdom, Chief Mahasumana became a devoted follower.
              </p>
              <p>
                Before departing, Lord Buddha gave a lock of his hair to Chief Mahasumana as a sacred relic. The chief enshrined 
                this precious relic in a golden casket and built the original dagoba (stupa) on this very spot, marking the 
                beginning of Buddhist architecture in Sri Lanka. This makes Mahiyangana Raja Maha Vihara one of the 
                <strong> 16 holiest Buddhist pilgrimage sites (Solosmasthana)</strong> in the country.
              </p>
            </div>
          </div>

          {/* Temple Architecture & Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Temple Complex & Sacred Features</CardTitle>
              <CardDescription>Architectural marvels and spiritual significance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-600">🔸</span> The Sacred Dagoba (Stupa)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The magnificent golden stupa stands as the centerpiece, housing Lord Buddha&apos;s hair relic. 
                      The current structure has been renovated multiple times, with major reconstructions by King Dutugemunu 
                      (161-137 BCE) and King Bhatikabhaya (20 BCE - 9 CE). The stupa follows the traditional &quot;heap of paddy&quot; 
                      design (Garbha style) and gleams brilliantly in the tropical sun.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-green-600">🔸</span> The Sacred Bo Tree
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      A descendant of the Jaya Sri Maha Bodhi tree in Anuradhapura (itself descended from the original 
                      Bodhi tree in Bodh Gaya, India), this ancient Bo tree is a focal point for meditation and worship.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-blue-600">🔸</span> Image House & Museum
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The temple houses beautiful Buddha statues, ancient murals depicting Jataka tales, and a small museum 
                      displaying archaeological artifacts discovered in the area, including pottery and coins from various historical periods.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-600">🔸</span> Daily Ceremonies
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The temple conducts three daily puja ceremonies (morning, noon, and evening) where devotees offer 
                      flowers, incense, and oil lamps. The evening ceremony is particularly atmospheric with chanting monks.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg dark:bg-amber-950">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Visitor Information:</h4>
                    <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                      <li>• <strong>Entry:</strong> Free (donations welcome)</li>
                      <li>• <strong>Dress Code:</strong> Modest attire, covered shoulders and knees</li>
                      <li>• <strong>Photography:</strong> Allowed in courtyard, restricted inside shrine rooms</li>
                      <li>• <strong>Best Time:</strong> Early morning or evening for ceremonies</li>
                      <li>• <strong>Duration:</strong> 1-2 hours for respectful visit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Did You Know Section */}
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
                <span className="text-2xl">💡</span> Did You Know?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>First of Three Visits:</strong> Lord Buddha visited Sri Lanka three times according to the Mahavamsa. 
                      Mahiyanganaya was the first (to settle a conflict between Yakkhas and Nagas), followed by Nagadeepa (to settle a dispute between 
                      two Naga kings over a gem-studded throne), and Kelaniya (by invitation of King Maniakkika).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Royal Patronage:</strong> The temple received patronage from nearly all ancient Sinhalese kings, 
                      including Devanampiya Tissa, Dutugemunu, and Parakramabahu I, who each made significant contributions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Esala Perahera:</strong> The temple holds an annual Esala procession (July/August) featuring 
                      traditional dancers, drummers, and decorated elephants, though smaller in scale than Kandy&apos;s famous perahera.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Archaeological Discoveries:</strong> Excavations around the temple have unearthed artifacts 
                      dating back to 3rd century BCE, including ancient coins, pottery, and stone inscriptions in early Brahmi script.
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Yaksha Connection:</strong> The name &quot;Mahiyangana&quot; is believed to derive from &quot;Maha Yakshangana,&quot; 
                      meaning &quot;the great Yaksha assembly,&quot; referring to the gathering where Buddha preached to the Yaksha tribes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Vedda Sacred Site:</strong> Even before Buddhism, this location was considered sacred by the 
                      indigenous Vedda people, and they continue to regard it with reverence to this day.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Natural Spring:</strong> A natural spring near the temple is believed to have emerged during 
                      Buddha&apos;s visit and is considered to have healing properties by devotees.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Poya Day Significance:</strong> On full moon (Poya) days, especially during Duruthu Poya (January), 
                      thousands of pilgrims visit to commemorate Buddha&apos;s first visit to the island.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Other Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Other Sacred Sites & Attractions</h2>

          <div className="space-y-8">

            {/* Dambana Indigenous Village */}
            <Card>
              <CardHeader>
                <CardTitle>1. Dambana Indigenous Village</CardTitle>
                <CardDescription>Authentic Vedda community cultural experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                 <ImageCarousel
                    images={[
                      {
                        src: "/Mahiyanganaya-Vaddos1.jpg",
                      caption: "PC @azizfamilyofficial",
                        alt: "Vedda people demonstrating traditional hunting techniques in Dambana village",  
                      },
                      {
                        src: "/Mahiyanganaya-Vaddos.jpg",
                        caption: "PC @azizfamilyofficial",
                        alt: "Dambana Vedda village showing traditional huts, indigenous people, and cultural activities",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Located near Mahiyanganaya, Dambana is home to the Vedda people, Sri Lanka&apos;s indigenous community.
                      This authentic village experience offers insights into ancient traditions, hunting practices, and
                      a way of life that has remained unchanged for thousands of years.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Authentic indigenous Vedda culture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional hunting and gathering demonstrations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient language and customs preservation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique cultural exchange opportunity
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nagadeepa Purana Viharaya */}
            <Card>
              <CardHeader>
                <CardTitle>2. Nagadeepa Purana Rajamaha Viharaya</CardTitle>
                <CardDescription>Ancient temple with local historical significance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Nagadeepa Purana Rajamaha Viharaya is an ancient Buddhist temple in the Mahiyanganaya area. According 
                      to local legends and traditions, this temple is believed by some to date back to the time of King 
                      Dutugemunu (161-137 BCE). The temple holds a unique place in local Buddhist heritage, with some 
                      devotees believing it may be connected to Lord Buddha&apos;s second visit to settle the dispute between the Naga 
                      kings Chulodara and Mahodara, though the temple in Jaffna is the officially recognized Nagadeepa site.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg mb-4">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Note:</strong> The <a className="underline" href="/destinations/nainativu">Nagadeepa Rajamaha Viharaya (Nainativ) in Jaffna (Northern Province)</a> is the officially 
                        recognized site among the 16 sacred Buddhist pilgrimage sites (Solosmasthana) where Lord Buddha visited 
                        on his second visit to settle the dispute between the two Naga kings, Chulodara and Mahodara, over a gem-studded throne. 
                        This Mahiyanganaya temple, while ancient and significant in its own right, represents a local tradition 
                        and alternative belief.
                      </p>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient temple with local historical significance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Part of Mahiyanganaya&apos;s Buddhist heritage
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Traditional architecture and religious artifacts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful meditation grounds and Bo tree
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Quiet, authentic spiritual atmosphere
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Nagadeepa-purana-rajamaha-viharaya.jpg"
                    alt="Nagadeepa Purana Rajamaha Viharaya ancient temple in Mahiyanganaya eshan_saseth"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sorabora Wewa */}
            <Card>
              <CardHeader>
                <CardTitle>3. Sorabora Wewa (Ancient Reservoir)</CardTitle>
                <CardDescription>Historic irrigation marvel and scenic lake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built during the reign of King Dutugemunu (161-137 BCE), Sorabora Wewa is one of Sri Lanka&apos;s
                      ancient irrigation masterpieces. This scenic reservoir not only showcases ancient engineering
                      skills but also provides a peaceful setting surrounded by lush greenery and wildlife.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient irrigation system from 2nd century BCE
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Beautiful lake surrounded by nature
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Bird watching and wildlife spotting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful setting for reflection and photography
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Sorabora-Wewa.jpg"
                    alt="Sorabora Wewa ancient reservoir showing calm waters surrounded by green hills and wildlife"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Natural Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Natural Beauty & Outdoor Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Mountain Landscapes & Hiking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Scenic Mountain Views</h4>
                  <p className="text-sm text-muted-foreground">
                    Surrounded by rolling hills and pristine forests offering spectacular panoramic views.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nature Trails</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore forest paths and mountain trails with opportunities for wildlife spotting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Waterfall Excursions</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover hidden waterfalls and natural pools in the surrounding wilderness.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rural & Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Village Life</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience authentic rural Sri Lankan life with farming communities and traditional practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Agricultural Tours</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn about traditional farming methods and participate in seasonal agricultural activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Crafts</h4>
                  <p className="text-sm text-muted-foreground">
                    Observe traditional handicrafts and pottery making by local artisans.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pilgrimage & Spiritual Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pilgrimage & Spiritual Journey</h2>
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Sacred Pilgrimage Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-amber-800">Spiritual Practices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Participate in daily temple ceremonies</li>
                    <li>• Meditation sessions in peaceful surroundings</li>
                    <li>• Offering flowers and prayers at the stupa</li>
                    <li>• Learning about Buddhist teachings and history</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-800">Pilgrimage Guidelines</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dress modestly with covered shoulders and legs</li>
                    <li>• Remove shoes before entering temple buildings</li>
                    <li>• Maintain respectful silence during ceremonies</li>
                    <li>• Photography restrictions in certain sacred areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Weather & Best Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Weather & Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Dry Season</CardTitle>
                <CardDescription>May to September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear skies and minimal rainfall</li>
                  <li>• Perfect for temple visits and hiking</li>
                  <li>• Comfortable temperatures (22-28°C)</li>
                  <li>• Best for outdoor activities</li>
                  <li>• Ideal pilgrimage conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>October & April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Occasional light showers</li>
                  <li>• Lush green landscapes</li>
                  <li>• Fewer visitors, peaceful atmosphere</li>
                  <li>• Good for cultural experiences</li>
                  <li>• Pleasant weather overall</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Wet Season</CardTitle>
                <CardDescription>November to March</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Higher rainfall and humidity</li>
                  <li>• Vibrant green surroundings</li>
                  <li>• Waterfalls at their most spectacular</li>
                  <li>• Fewer tourists, authentic experience</li>
                  <li>• Some outdoor activities limited</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-amber-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Sacred Journey to Mahiyanganaya</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Mahiyanganaya offers a profound spiritual journey that connects visitors with the very roots of Buddhism
                in Sri Lanka. This sacred town provides an authentic experience far from commercial tourism, where
                ancient traditions, natural beauty, and spiritual significance create unforgettable memories.
              </p>
              <p className="text-muted-foreground mb-4">
                Whether you come as a pilgrim seeking spiritual enlightenment, a history enthusiast exploring ancient
                sites, or a nature lover discovering pristine landscapes, Mahiyanganaya welcomes you with open arms and
                timeless wisdom. Take time to absorb the peaceful atmosphere and connect with the sacred energy that has
                drawn visitors for over 2,500 years.
              </p>
              <p className="text-muted-foreground font-medium">Discover the sacred heart of Sri Lanka! 🙏⛩️</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
