"use client"

import Image from "next/image"
import { Clock, MapPin, AlertTriangle, CheckCircle, Star, Calendar, Camera, Heart, Sunrise, Car, Bus, Train, Anchor } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/ui/image-carousel"


export default function KoneswaramTempleGuide() {
  const koneswaramImages = [
    {src:"/Koneshwaram.jpeg",alt:"Koneswaram Temple gopuram with ocean backdrop at sunrise"},
    {src:"/Trinco.jpeg",alt:"Aerial view of Trincomalee showing pristine beaches, turquoise waters, and the ancient Koneswaram temple on rocky cliffs"},
  ]

  const swamiRockLoversLeapImages = [
    {src: "/Swami-Rock.jpeg", alt: "Swami Rock cliff  Koneswaram Temple promontory"},
    {src: "/Koneshwaram.jpeg", alt: "Koneswaram Temple on Swami Rock overlooking the Indian Ocean"},
    {src: "/placeholder.jpg", alt: "Lover's Leap viewpoint at Swami Rock, Trincomalee"},
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/Koneshwaram.jpeg"
            alt="Koneswaram Temple on Swami Rock overlooking the Indian Ocean at sunrise"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="hero-text-shadow text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.1] tracking-tight">
            Koneswaram Temple
            <br />
            Sri Lanka&apos;s Sacred Cliff Temple
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover the ancient Hindu temple perched dramatically on Swami Rock, 
            offering breathtaking ocean views and 2000 years of sacred history
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Trincomalee, Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Clock className="w-4 h-4 mr-1" />
              4-6 Hours Visit
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Star className="w-4 h-4 mr-1" />
              UNESCO Heritage Site
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Koneswaram Temple: Where Heaven Meets Earth</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Standing majestically 130 feet above the crashing waves of the Indian Ocean, Koneswaram Temple 
              is one of Sri Lanka&apos;s most sacred and dramatically positioned religious sites. This ancient Hindu 
              temple, dedicated to Lord Shiva as Koneshwara (Lord of the East), sits on the legendary Swami Rock 
              in Trincomalee and has been a place of worship for over 2,000 years.
            </p>
            <p className="text-lg">
              Known as one of the five Pancha Ishwarams (five abodes of Shiva in Sri Lanka), Koneswaram Temple 
              combines breathtaking natural beauty with deep spiritual significance. The temple offers visitors 
              stunning panoramic views of the eastern coastline, rich Tamil cultural heritage, and a peaceful 
              atmosphere perfect for meditation and reflection.
            </p>
          </div>
        </section>

        {/* How to Get There - Quick Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">How to Get There</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <Card className="p-4 kones-box-blue">
              <div className="flex items-center space-x-3">
                <Car className="h-6 w-6 kones-icon-blue" />
                <div>
                  <h3 className="font-semibold kones-title-blue">By Car</h3>
                  <p className="text-sm kones-text-blue-slate">4 hrs from Colombo</p>
                  <p className="text-sm kones-text-blue-slate">2.5 hrs from Kandy</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 kones-box-green">
              <div className="flex items-center space-x-3">
                <Bus className="h-6 w-6 kones-icon-green" />
                <div>
                  <h3 className="font-semibold kones-title-green">By Bus</h3>
                  <p className="text-sm kones-text-green-slate">Direct from Colombo</p>
                  <p className="text-sm kones-text-green-slate">6-7 hours journey</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 kones-box-purple">
              <div className="flex items-center space-x-3">
                <Train className="h-6 w-6 kones-icon-purple" />
                <div>
                  <h3 className="font-semibold kones-title-purple">By Train</h3>
                  <p className="text-sm kones-text-purple-slate">Scenic route</p>
                  <p className="text-sm kones-text-purple-slate">8-9 hours from Colombo</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 kones-box-orange">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 kones-icon-orange" />
                <div>
                  <h3 className="font-semibold kones-title-orange-light">Location</h3>
                  <p className="text-sm kones-text-orange-slate">Swami Rock</p>
                  <p className="text-sm kones-text-orange-slate">Trincomalee</p>
                  <a 
                    href="https://www.google.com/maps/dir//H6JW%2BX4H,+Trincomalee/@8.5824349,81.1629537,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3afbbca209ddef57:0x2e9e4b68861922df!2m2!1d81.2453556!2d8.5824436?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs kones-link-orange underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Temple Hours:</strong> 5:00 AM - 9:00 PM daily • 
              <strong>Entry:</strong> Free • 
              <strong>Best Time:</strong> Early morning or evening
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="kones-box-blue p-6">
              <div className="flex items-center space-x-4">
                <Calendar className="h-10 w-10 kones-icon-blue" />
                <div>
                  <h3 className="text-xl font-bold kones-title-blue">Ancient Heritage</h3>
                  <p className="kones-text-blue-slate">Over 2,000 years of continuous worship</p>
                </div>
              </div>
            </Card>

            <Card className="kones-box-orange p-6">
              <div className="flex items-center space-x-4">
                <Star className="h-10 w-10 kones-icon-orange" />
                <div>
                  <h3 className="text-xl font-bold kones-title-orange-light">Sacred Significance</h3>
                  <p className="kones-text-orange-slate">One of five Pancha Ishwarams in Sri Lanka</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Main Temple Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Sacred Koneswaram Temple</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <ImageCarousel 
                images={koneswaramImages} 
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Temple of the Thousand Pillars</h3>
              <p className="text-muted-foreground mb-4">
                Koneswaram Temple was once known as the &quot;Temple of the Thousand Pillars&quot; due to its magnificent 
                architecture. The current temple, rebuilt in the 1960s, features beautiful Dravidian-style 
                architecture with a colorful gopuram (tower) that serves as a beacon visible from far out at sea.
              </p>
              <p className="text-muted-foreground mb-4">
                The temple houses the sacred Shiva Lingam and several other deities including Ganesha, Murugan, 
                and Goddess Mathumai Amman. Daily pujas (prayer ceremonies) are conducted at dawn and dusk, 
                creating a deeply spiritual atmosphere enhanced by the sound of crashing waves below.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Active Hindu temple with daily worship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Beautiful Dravidian architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Panoramic ocean views from clifftop location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Sacred Shiva Lingam and multiple shrines</span>
                </div>
              </div>

              <div className="kones-box-yellow p-4 rounded-lg border">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 kones-icon-yellow mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-yellow mb-1">Temple Etiquette</h4>
                    <p className="text-sm kones-text-yellow-slate">
                      Remove shoes before entering, dress modestly covering shoulders and knees, 
                      maintain silence during prayers, and photography may be restricted in certain areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ramayana Connection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Koneswaram Temple in the Ramayana Epic</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">King Ravana&apos;s Sacred Site</h3>
              <p className="text-muted-foreground mb-4">
                According to ancient Hindu texts and the Ramayana epic, Koneswaram Temple holds immense 
                significance as the place where the mighty King Ravana of Lanka performed intense penance 
                and worship to Lord Shiva. The ten-headed demon king, despite his eventual downfall, was 
                known as a great devotee of Shiva and a learned scholar of the Vedas.
              </p>
              <p className="text-muted-foreground mb-4">
                Legend states that Ravana&apos;s devotion at this very cliff was so powerful that it pleased 
                Lord Shiva, who granted him immense strength and knowledge. It is said that Ravana 
                offered his own heads as sacrifice to Shiva here, only to have them restored by the 
                compassionate deity, earning him the name &quot;Dashagriva&quot; (ten-necked one).
              </p>
              
              <div className="kones-box-purple p-4 rounded-lg border mb-4">
                <div className="flex items-start space-x-2">
                  <Star className="h-5 w-5 kones-icon-purple mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-purple mb-1">The Shiva Lingam Legend</h4>
                    <p className="text-sm kones-text-purple-slate">
                      According to tradition, the original Shiva Lingam at Koneswaram was one of the 
                      naturally formed lingams that Ravana discovered and consecrated. This made the 
                      temple one of the most powerful Shiva shrines in ancient Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Mount Kailash Connection</h3>
              <p className="text-muted-foreground mb-4">
                Hindu mythology describes how Ravana once attempted to lift Mount Kailash (Shiva&apos;s abode) 
                to Lanka. When Shiva pressed down the mountain with his toe, a piece broke off and fell 
                to earth at Trincomalee, forming Swami Rock. This is why the site is considered as 
                sacred as Mount Kailash itself.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Ravana&apos;s place of penance and worship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Fragment of Mount Kailash legend</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">One of five Pancha Ishwarams in Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Mentioned in ancient Tamil literature</span>
                </div>
              </div>

              <div className="kones-box-orange p-4 rounded-lg border">
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 kones-icon-orange-dk mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-orange mb-1">Epic Timeline</h4>
                    <p className="text-sm kones-text-orange-slate mb-2">
                      The Ramayana events are believed to have occurred in the Treta Yuga, making 
                      this temple&apos;s mythological history span thousands of years.
                    </p>
                    <ul className="text-sm kones-text-orange-slate space-y-1">
                      <li>• Ravana&apos;s reign and devotion to Shiva</li>
                      <li>• Abduction of Sita and war with Rama</li>
                      <li>• Temple&apos;s continued significance post-Ramayana</li>
                      <li>• Connection to other Pancha Ishwarams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Ramayana Details */}
          <div className="mt-8">
            <Card className="p-6 kones-card-amber-orange border">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl kones-title-amber">The Scholarly King&apos;s Devotion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 kones-title-amber">Ravana&apos;s Achievements at Koneswaram:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Composed the powerful &quot;Shiva Tandava Stotram&quot; hymn</li>
                      <li>• Performed severe penances for thousands of years</li>
                      <li>• Received boons of invincibility and knowledge</li>
                      <li>• Established the temple as a major pilgrimage site</li>
                      <li>• Created sacred traditions still followed today</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 kones-title-amber">Cultural Legacy:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Temple festivals honor this ancient connection</li>
                      <li>• Local folklore preserves Ramayana stories</li>
                      <li>• Pilgrims seek blessings at Ravana&apos;s worship site</li>
                      <li>• Sanskrit inscriptions reference epic events</li>
                      <li>• Archaeological evidence supports ancient origins</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 kones-bg-amber rounded-lg">
                  <p className="text-sm kones-title-amber italic">
                    &quot;Even today, devotees believe that worshipping at Koneswaram with the same devotion 
                    as Ravana can bring divine blessings and spiritual enlightenment, making this temple 
                    a powerful connection to the epic Ramayana tradition.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ravana's Sword Legend */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The Legend of Ravana&apos;s Sword at Koneswaram</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Divine Weapon&apos;s Origin</h3>
              <p className="text-muted-foreground mb-4">
                According to ancient legends, King Ravana&apos;s most powerful weapon was not just any ordinary sword, 
                but a divine blade blessed by Lord Shiva himself at Koneswaram Temple. This celestial weapon, 
                known as &quot;Chandrahasa&quot; (Moon-blade), was granted to Ravana as a reward for his intense devotion 
                and penance performed at this very sacred site.
              </p>
              <p className="text-muted-foreground mb-4">
                The legend states that after Ravana completed years of rigorous worship at Swami Rock, 
                Lord Shiva was so pleased that he not only restored Ravana&apos;s sacrificed heads but also 
                gifted him this supernatural sword. The weapon was said to shine like the crescent moon 
                and could cut through any material in creation.
              </p>
              
              <div className="kones-box-blue p-4 rounded-lg border mb-4">
                <div className="flex items-start space-x-2">
                  <Star className="h-5 w-5 kones-icon-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-blue mb-1">Chandrahasa - The Moon Blade</h4>
                    <p className="text-sm kones-text-blue">
                      The name &quot;Chandrahasa&quot; means &quot;laughter of the moon&quot; in Sanskrit, reflecting both 
                      its curved, crescent-like shape and its divine radiance that could illuminate 
                      the darkest nights during battle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The Sacred Cut in the Rock</h3>
              <p className="text-muted-foreground mb-4">
                Local tradition tells of a dramatic moment when Ravana, in a display of the sword&apos;s 
                divine power, struck Swami Rock with Chandrahasa. The blade cut so deeply into the 
                sacred stone that it created a permanent fissure that can still be seen today. This 
                cut is believed to mark the exact spot where Ravana received his divine blessings.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Visible rock fissure attributed to the sword strike</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Divine weapon blessed by Lord Shiva</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Symbol of Ravana&apos;s supernatural powers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Connected to temple&apos;s sacred geography</span>
                </div>
              </div>

              <div className="kones-box-red p-4 rounded-lg border">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 kones-icon-red mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-red mb-1">The Sword&apos;s Fate</h4>
                    <p className="text-sm kones-text-red mb-2">
                      According to Ramayana tradition, the Chandrahasa sword was eventually lost 
                      during Ravana&apos;s final battle with Lord Rama, marking the end of his reign.
                    </p>
                    <ul className="text-sm kones-text-red space-y-1">
                      <li>• Granted by Shiva at Koneswaram Temple</li>
                      <li>• Used throughout Ravana&apos;s conquests</li>
                      <li>• Left its mark on the sacred rock</li>
                      <li>• Lost in the battle of Lanka</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Connection */}
          <div className="mt-8">
            <Card className="p-6 kones-card-slate-gray border">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl kones-title-slate">The Living Legend Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 kones-title-slate">Pilgrims and the Rock Cut:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Visitors seek out the legendary fissure in the rock</li>
                      <li>• Local guides point out the &quot;sword cut&quot; to tourists</li>
                      <li>• Devotees touch the marked stone for blessings</li>
                      <li>• Photography spot for mythology enthusiasts</li>
                      <li>• Archaeological interest in rock formations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 kones-title-slate">Cultural Significance:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Represents the power of divine blessings</li>
                      <li>• Symbol of Ravana&apos;s devotion to Lord Shiva</li>
                      <li>• Connection between mythology and physical reality</li>
                      <li>• Inspiration for local art and literature</li>
                      <li>• Part of temple&apos;s oral tradition</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 kones-bg-slate rounded-lg">
                  <p className="text-sm kones-title-slate italic">
                    &quot;The mark of Ravana&apos;s sword in the sacred rock serves as a tangible reminder that 
                    the divine and earthly realms once intersected at this holy site, making Koneswaram 
                    Temple not just a place of worship, but a witness to epic history.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Swami Rock / Lover's Leap */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Swami Rock Also Known as Lover&apos;s Leap</h2>
          <p className="text-muted-foreground mb-6">One cliff, two identities. This sacred 130-foot promontory is called <strong>Swami Rock</strong> (Konesar Malai) by Hindus, and <strong>Lover&apos;s Leap</strong> by history two names for the same awe-inspiring place.</p>

          <ImageCarousel images={swamiRockLoversLeapImages} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

            {/* Hindu sacred identity */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">The Sacred Hindu Cliff</h3>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                Known as Swami Rock, this is the clifftop on which Koneswaram Temple stands. 
                According to Hindu legend, King Ravana worshipped Lord Shiva here, and the rock 
                is believed to be a fragment of Mount Kailash that fell to earth making it as 
                sacred as Shiva&apos;s own abode. The 130-foot drop into the Indian Ocean below adds 
                to its dramatic, otherworldly character.
              </p>
              <div className="kones-box-blue p-4 rounded-lg border">
                <div className="flex items-start space-x-2">
                  <Sunrise className="h-5 w-5 kones-icon-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-blue mb-1">Best Photography Times</h4>
                    <p className="text-sm kones-text-blue">
                      Golden hour (6:30–7:30 AM and 5:30–6:30 PM) offers spectacular lighting. 
                      The temple gopuram glows beautifully against the ocean backdrop.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonial legend */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">The Dutch Colonial Legend</h3>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                The same cliff is also called Lover&apos;s Leap after a haunting 17th-century story. 
                A Dutch officer&apos;s daughter and her local lover, forbidden from being together under 
                colonial rule, are said to have leapt from this edge in a final act of eternal love. 
                The name stuck adding a layer of romantic tragedy to this already mythic place.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Heart className="h-4 w-4 text-red-500" /> Dutch colonial legend</span>
                <span className="flex items-center gap-1"><Camera className="h-4 w-4 text-purple-500" /> Stunning coastal views</span>
              </div>
              <div className="kones-box-red p-4 rounded-lg border">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 kones-icon-red mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-red mb-1">Safety Warning</h4>
                    <p className="text-sm kones-text-red">
                      Stay well back from cliff edges. Strong ocean winds and loose rocks can be dangerous. 
                      Always supervise children and avoid visiting during heavy rain or storms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Historical Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Rich Historical Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-orange-600" />
                  Ancient Origins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Historical records suggest that Koneswaram Temple existed as early as the 3rd century BCE. 
                  Ancient Tamil literature mentions the temple as one of the most important Shiva temples in 
                  the region, attracting pilgrims from across South Asia.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mentioned in ancient Tamil texts and poetry</li>
                  <li>• Religious site for over 2,000 years</li>
                  <li>• Important pilgrimage destination for centuries</li>
                  <li>• Connected to Ramayana and other Hindu epics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                  Colonial Period
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  In 1624, Portuguese colonizers destroyed the original temple and used its stones to build 
                  Fort Frederick. The temple remained in ruins for over 300 years until reconstruction began 
                  in the 1950s, culminating in the current structure completed in 1963.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Destroyed by Portuguese in 1624</li>
                  <li>• Stones used to build Fort Frederick</li>
                  <li>• Rebuilt starting in 1950s</li>
                  <li>• Current temple completed in 1963</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <Anchor className="w-6 h-6 mr-2 text-blue-600" />
                  World War II Legacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  During World War II, Trincomalee harbor became a crucial Allied naval base, and Swami Rock 
                  served as a strategic observation point. The temple area witnessed historic moments, including 
                  Japanese air raids in 1942 and the presence of British Eastern Fleet operations.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Strategic British naval base during WWII</li>
                  <li>• Japanese air raids on April 9, 1942</li>
                  <li>• Allied ships used the natural harbor</li>
                  <li>• Observation post on Swami Rock cliffs</li>
                  <li>• War memorials nearby commemorate events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Temple Festivals and Ceremonies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Sacred Festivals and Ceremonies</h2>
          <div className="space-y-6">
            <Card className="p-6 kones-card-orange-red border">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl kones-title-orange">Maha Shivarathri Festival</CardTitle>
                <CardDescription className="kones-text-orange">Usually in February/March</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The most important festival at Koneswaram Temple, Maha Shivarathri attracts thousands of devotees 
                  from across Sri Lanka and South India. The celebration includes special pujas, cultural performances, 
                  and a grand procession with the temple&apos;s sacred chariot.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 kones-title-orange">Festival Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All-night prayers and meditation</li>
                      <li>• Traditional music and dance performances</li>
                      <li>• Sacred chariot procession</li>
                      <li>• Special feast preparation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 kones-title-orange">Visitor Information:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Arrive early for parking and viewing spots</li>
                      <li>• Dress in traditional or conservative clothing</li>
                      <li>• Photography restrictions may apply</li>
                      <li>• Free community meals available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Daily Worship Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Morning Puja</span>
                      <Badge variant="outline">6:00 AM - 8:00 AM</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Afternoon Service</span>
                      <Badge variant="outline">12:00 PM - 1:00 PM</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Evening Puja</span>
                      <Badge variant="outline">6:00 PM - 8:00 PM</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Temple Open</span>
                      <Badge variant="outline">5:00 AM - 9:00 PM</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Other Important Festivals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Thai Pusam</h4>
                      <p className="text-sm text-muted-foreground">January/February - Devotees carry kavadi</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Navaratri</h4>
                      <p className="text-sm text-muted-foreground">September/October - Nine nights of goddess worship</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Deepavali</h4>
                      <p className="text-sm text-muted-foreground">October/November - Festival of lights</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Thai Amavasai</h4>
                      <p className="text-sm text-muted-foreground">January - New moon day prayers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* World War II Historical Connection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Koneswaram Temple During World War II</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Strategic Military Importance</h3>
              <p className="text-muted-foreground mb-4">
                During World War II, Trincomalee&apos;s natural harbor became one of the most important Allied naval 
                bases in the Indian Ocean. The temple area on Swami Rock served as a strategic observation point, 
                offering commanding views of the harbor approaches and the surrounding seas.
              </p>
              <p className="text-muted-foreground mb-4">
                The British Eastern Fleet, including aircraft carriers HMS Formidable and HMS Indomitable, 
                frequently used Trincomalee harbor as a base of operations. Local residents, including temple 
                priests, witnessed massive naval vessels anchored in the bay below the sacred cliff.
              </p>
              
              <div className="kones-box-red p-4 rounded-lg border mb-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 kones-icon-red mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-red mb-1">The Easter Raid - April 9, 1942</h4>
                    <p className="text-sm kones-text-red">
                      Japanese aircraft launched a surprise attack on Trincomalee harbor. Bombs fell near 
                      the temple area, and locals took shelter in the ancient caves and bunkers around 
                      Swami Rock. The temple survived the raid intact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Local Stories and Memories</h3>
              <p className="text-muted-foreground mb-4">
                Elderly residents of Trincomalee still share stories passed down about the war years. 
                The temple served as a gathering place for families seeking comfort during air raid warnings. 
                Many devotees believe the temple&apos;s spiritual protection helped keep the community safe during 
                the dangerous wartime period.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">British naval observation post on Swami Rock</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Allied warships anchored in temple&apos;s view</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Temple used as community shelter during raids</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">War memorial sites nearby in Fort Frederick</span>
                </div>
              </div>

              <div className="kones-box-blue p-4 rounded-lg border">
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 kones-icon-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold kones-title-blue mb-1">Historical Timeline</h4>
                    <ul className="text-sm kones-text-blue space-y-1">
                      <li>• 1941: British Eastern Fleet establishes Trincomalee base</li>
                      <li>• April 1942: Japanese air raids on harbor and surrounding areas</li>
                      <li>• 1942-1945: Continuous Allied naval operations</li>
                      <li>• 1945: War ends, temple area returns to peaceful pilgrimage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get There */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">How to Reach Koneswaram Temple</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Card className="p-6 kones-box-blue">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center kones-title-blue">
                  <Car className="w-6 h-6 mr-2" />
                  By Private Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="kones-text-blue mb-3">
                  The most convenient way to reach the temple. Drive to Trincomalee town and follow signs to 
                  Koneswaram Temple. Limited parking available near the temple.
                </p>
                <ul className="text-sm kones-text-blue space-y-1">
                  <li>• 4 hours from Colombo (258 km)</li>
                  <li>• 2.5 hours from Kandy (110 km)</li>
                  <li>• 1 hour from Batticaloa (58 km)</li>
                  <li>• Parking fees: Rs. 100-200</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 kones-box-green">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center kones-title-green">
                  <Bus className="w-6 h-6 mr-2" />
                  By Public Bus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="kones-text-green mb-3">
                  Regular bus services connect Trincomalee with major cities. From Trincomalee bus station, 
                  take a local bus or three-wheeler to the temple.
                </p>
                <ul className="text-sm kones-text-green space-y-1">
                  <li>• Direct buses from Colombo (6-7 hours)</li>
                  <li>• Buses from Kandy via Dambulla (4 hours)</li>
                  <li>• Local bus fare to temple: Rs. 20-30</li>
                  <li>• Three-wheeler from town: Rs. 300-500</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 kones-box-purple">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center kones-title-purple">
                  <Train className="w-6 h-6 mr-2" />
                  By Train
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="kones-text-purple mb-3">
                  The scenic train journey to Trincomalee is popular among tourists. The railway station is 
                  about 2 km from the temple.
                </p>
                <ul className="text-sm kones-text-purple space-y-1">
                  <li>• Daily trains from Colombo Fort</li>
                  <li>• Journey time: 8-9 hours</li>
                  <li>• Beautiful coastal and rural scenery</li>
                  <li>• Station to temple: taxi or three-wheeler</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 kones-box-orange-deep">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center kones-title-orange">
                  <Plane className="w-6 h-6 mr-2" />
                  By Air
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="kones-text-orange mb-3">
                  Trincomalee has a domestic airport with occasional flights. Most visitors fly into Colombo 
                  and take ground transportation.
                </p>
                <ul className="text-sm kones-text-orange space-y-1">
                  <li>• China Bay Airport (domestic flights only)</li>
                  <li>• Mainly charter and private flights</li>
                  <li>• Airport to temple: 15 minutes by car</li>
                  <li>• Most visitors use Bandaranaike Airport (Colombo)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Practical Visitor Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Entry & Timings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Temple Timings:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Daily: 5:00 AM - 9:00 PM</li>
                      <li>• Best visiting hours: 6:00-8:00 AM, 5:00-7:00 PM</li>
                      <li>• Special ceremonies: Check temple calendar</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entry Fees:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Temple entry: Free</li>
                      <li>• Parking: Rs. 100-200</li>
                      <li>• Photography: Usually permitted (check restrictions)</li>
                      <li>• Donations welcome but not mandatory</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Essential Items:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comfortable walking shoes (removable)</li>
                      <li>• Conservative clothing covering shoulders and knees</li>
                      <li>• Water bottle and sun protection</li>
                      <li>• Camera for stunning ocean views</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Optional Items:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Flowers or fruits for offerings</li>
                      <li>• Coconuts for traditional breaking ceremony</li>
                      <li>• Light snacks (limited facilities nearby)</li>
                      <li>• Small cash for donations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Explore More in Trincomalee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  alt="Fort Frederick historical fort ruins"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Fort Frederick</CardTitle>
                <CardDescription>Historic Dutch fort built with temple stones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Explore the colonial fort built by the Portuguese and expanded by the Dutch, 
                  using stones from the original Koneswaram Temple.
                </p>
                <Badge variant="outline" className="text-xs">5-minute walk</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  alt="Nilaveli Beach pristine white sand and clear water"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Nilaveli Beach</CardTitle>
                <CardDescription>Pristine white sand beach paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Relax on one of Sri Lanka&apos;s most beautiful beaches with crystal-clear water, 
                  perfect for swimming and snorkeling.
                </p>
                <Badge variant="outline" className="text-xs">15 minutes by car</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  alt="Whale watching boat tour in Trincomalee waters"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Whale Watching</CardTitle>
                <CardDescription>Blue whales and dolphins in natural habitat</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Experience incredible whale watching opportunities in the deep waters off 
                  Trincomalee, best from March to August.
                </p>
                <Badge variant="outline" className="text-xs">Harbor departure</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Best Time to Visit Koneswaram Temple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="p-6 kones-box-green">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-green">Dry Season</CardTitle>
                <CardDescription className="kones-text-green">April - September</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="kones-text-green mb-3">
                  The best time to visit with clear skies, calm seas, and excellent visibility for ocean views 
                  and photography. Ideal weather for temple exploration and nearby beach activities.
                </p>
                <ul className="text-sm kones-text-green space-y-1">
                  <li>• Perfect weather for sightseeing</li>
                  <li>• Clear ocean views from temple</li>
                  <li>• Best for photography</li>
                  <li>• Comfortable temperature (25-30°C)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 kones-box-yellow-deep">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-yellow">Festival Season</CardTitle>
                <CardDescription className="kones-text-yellow">February - March</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="kones-text-yellow mb-3">
                  Experience the temple during Maha Shivarathri for authentic cultural immersion, 
                  though expect larger crowds and book accommodation well in advance.
                </p>
                <ul className="text-sm kones-text-yellow space-y-1">
                  <li>• Maha Shivarathri celebrations</li>
                  <li>• Cultural performances and processions</li>
                  <li>• Spiritual atmosphere at its peak</li>
                  <li>• Book accommodation early</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 kones-box-blue">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-blue">Monsoon Season</CardTitle>
                <CardDescription className="kones-text-blue">October - January</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="kones-text-blue mb-3">
                  Visit during this time for fewer crowds and dramatic cloudy skies, though rain may 
                  limit outdoor activities and ocean views may be restricted.
                </p>
                <ul className="text-sm kones-text-blue space-y-1">
                  <li>• Fewer tourist crowds</li>
                  <li>• Dramatic cloudy skies</li>
                  <li>• Occasional heavy rainfall</li>
                  <li>• Some outdoor activities limited</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Cultural Guidelines and Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="p-6 kones-box-purple">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-purple">Temple Etiquette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 kones-icon-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-purple">Remove shoes before entering temple premises</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 kones-icon-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-purple">Dress modestly - cover shoulders, arms, and legs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 kones-icon-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-purple">Maintain respectful silence during prayer times</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 kones-icon-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-purple">Ask permission before photographing people</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 kones-icon-purple mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-purple">Turn off mobile phones or keep on silent mode</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 kones-box-orange-deep">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-orange">Local Customs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 kones-icon-orange-dk mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-orange">Greet with &quot;Vanakkam&quot; (traditional Tamil greeting)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 kones-icon-orange-dk mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-orange">Join hands in prayer position when greeting priests</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 kones-icon-orange-dk mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-orange">Accept prasadam (blessed food) with both hands</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 kones-icon-orange-dk mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-orange">Clockwise circumambulation around the main shrine</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 kones-icon-orange-dk mt-0.5 flex-shrink-0" />
                    <span className="text-sm kones-text-orange">Small donations are appreciated but not required</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation Suggestions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Where to Stay in Trincomalee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="p-6 kones-card-blue">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-blue">Luxury Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="kones-text-blue mb-4">
                  High-end beach resorts and boutique hotels offering premium comfort and services.
                </p>
                <ul className="text-sm kones-text-blue space-y-2">
                  <li>• <strong>Anantamaa Resort:</strong> Luxury beachfront resort with spa</li>
                  <li>• <strong>Trinco Blu by Cinnamon:</strong> Premium beach hotel</li>
                  <li>• <strong>Uga Jungle Beach:</strong> Eco-luxury resort experience</li>
                </ul>
                <Badge className="mt-3 bg-blue-600 text-white">$100-300/night</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 kones-card-green">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-green">Mid-Range Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="kones-text-green mb-4">
                  Comfortable hotels and guesthouses offering good value for money and quality service.
                </p>
                <ul className="text-sm kones-text-green space-y-2">
                  <li>• <strong>The Chaaya Blu:</strong> Beachfront hotel with modern amenities</li>
                  <li>• <strong>Hotel Club Oceanic:</strong> Popular choice near temple</li>
                  <li>• <strong>Nilaveli Beach Hotel:</strong> Traditional beachside location</li>
                </ul>
                <Badge className="mt-3 bg-green-600 text-white">$30-100/night</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 kones-card-purple">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl kones-title-purple">Budget Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="kones-text-purple mb-4">
                  Affordable guesthouses and hostels perfect for budget travelers and backpackers.
                </p>
                <ul className="text-sm kones-text-purple space-y-2">
                  <li>• <strong>Trincomalee Rest House:</strong> Government rest house option</li>
                  <li>• <strong>Sea View Hotel:</strong> Basic accommodation near harbor</li>
                  <li>• <strong>Local guesthouses:</strong> Family-run establishments</li>
                </ul>
                <Badge className="mt-3 bg-purple-600 text-white">$10-30/night</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to know before visiting Koneswaram Temple</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Q1 */}
            <div className="flex gap-4 p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">Is Koneswaram Temple suitable for non-Hindu visitors?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes, absolutely. The temple welcomes visitors of all faiths. Simply follow basic respect guidelines 
                  modest dress, removing shoes before entering, and respectful silence during prayer times.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="flex gap-4 p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">How long should I plan for a temple visit?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Allow <strong>2–3 hours</strong> for a comprehensive visit main temple (30–45 min), Lover&apos;s Leap (30 min), 
                  ocean views &amp; photography (45 min), and Fort Frederick if desired (30–45 min). Add extra time during festivals.
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="flex gap-4 p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">Are there guided tours available?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Local English-speaking guides are available at the temple entrance during peak seasons. Guide fees 
                  typically range from <strong>Rs. 1,000–2,500</strong> depending on group size. Hotels in Trincomalee can also 
                  arrange professional guided tours.
                </p>
              </div>
            </div>

            {/* Q4 */}
            <div className="flex gap-4 p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">What facilities are available at the temple?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Basic facilities include restrooms, drinking water, shoe storage, and small shops for religious items 
                  and refreshments. It&apos;s advisable to bring water and snacks. The nearest restaurants are in 
                  Trincomalee town, approximately <strong>2–3 km</strong> away.
                </p>
              </div>
            </div>

            {/* Q5 */}
            <div className="flex gap-4 p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                05
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 leading-snug">Is the temple accessible for people with mobility challenges?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The clifftop location and stone steps present some challenges. However, the main temple area is 
                  relatively accessible and the ocean views can be enjoyed from several vantage points. Contact 
                  temple authorities in advance to discuss specific accessibility needs and available assistance.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <Card className="p-8 kones-final-card border">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center mb-4">Plan Your Sacred Journey to Koneswaram Temple</CardTitle>
              <CardDescription className="text-lg text-center max-w-3xl mx-auto">
                Experience the spiritual power and breathtaking beauty of Sri Lanka&apos;s most dramatically located temple. 
                From ancient legends to stunning ocean views, Koneswaram Temple offers an unforgettable journey through 
                faith, history, and natural beauty.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/destinations/trincomalee">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Explore More of Trincomalee
                  </Button>
                </Link>
                <Link href="/destinations">
                  <Button size="lg" variant="outline">
                    Discover Other Destinations
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
