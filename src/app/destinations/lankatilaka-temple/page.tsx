"use client"

import Image from "next/image"
import { Clock, MapPin, Palette, Star, Calendar, Users, Landmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function LankathilakaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Lankatilaka-Image-House.jpeg"
          alt="The majestic Lankathilaka Temple standing tall on Panhalgala rock, showcasing its impressive Kandyan architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lankathilaka Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">A Masterpiece of Gampola Era Architecture</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Kandy District, Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Landmark className="w-4 h-4 mr-1" />
              Built in 1344 CE
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Palette className="w-4 h-4 mr-1" />
              Ancient Buddhist Art
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Lankathilaka: A Medieval Architectural Marvel</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Standing proudly on the Panhalgala rock near Kandy, Lankathilaka Temple is one of Sri Lanka&apos;s most impressive
              medieval Buddhist temples. Built during the Gampola Era in 1344 CE by King Bhuvanekabahu IV, this architectural 
              masterpiece combines Sinhalese, Dravidian, and Hindu building styles.
            </p>
            <p className="text-lg">
              The temple rises majestically from its rocky foundation, reaching four stories high and showcasing the 
              remarkable engineering skills of ancient Sri Lankan builders. Its unique design and cultural importance make 
              it a must-visit destination for anyone interested in Sri Lankan history and architecture.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Temple Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built in:</strong> 1344 CE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Architecture:</strong> Gampola Era
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Built By:</strong> King Bhuvanekabahu IV
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> 12km from Kandy
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Height:</strong> Four Stories
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 1-2 hours
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architectural Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Unique Architectural Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Temple Design</CardTitle>
                <CardDescription>A Blend of Different Styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Exterior Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Built on a natural rock formation</li>
                    <li>• Four-story high brick structure</li>
                    <li>• Distinctive entrance with dragon arch</li>
                    <li>• Intricate stone carvings</li>
                    <li>• Traditional Kandyan roof design</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Interior Elements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ancient wall paintings</li>
                    <li>• Buddha statue chamber</li>
                    <li>• Carved wooden pillars</li>
                    <li>• Decorative ceiling artwork</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Did you know?</strong> The temple&apos;s walls were originally plastered with white lime mortar
                    mixed with crushed seashells, creating a brilliant white appearance that could be seen from miles away.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <ImageCarousel
                images={[
                  {
                    src: "/lankathilaka-exterior.jpg",
                    alt: "Exterior view of Lankathilaka Temple showing its impressive height and architecture",
                    caption: "Temple Exterior",
                    title: "Lankathilaka Temple"
                  },
                  {
                    src: "/lankathilaka-entrance.jpg",
                    alt: "The ornate entrance gateway with dragon arch",
                    caption: "Main Entrance",
                    title: "Temple Entrance"
                  },
                  {
                    src: "/lankathilaka-paintings.jpg",
                    alt: "Ancient wall paintings inside the temple showing Buddhist stories",
                    caption: "Wall Paintings",
                    title: "Interior Art"
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Historical Significance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Historical Significance</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Temple History</h3>
                  <p className="text-muted-foreground mb-4">
                    Built during a time when both Buddhism and Hinduism were practiced together, Lankathilaka Temple 
                    represents the harmony between these two religions in medieval Sri Lanka. The temple originally had 
                    separate shrines for both Buddhist and Hindu worship.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-medium">Historical Timeline:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 1344: Construction began under King Bhuvanekabahu IV</li>
                      <li>• 1347: Main shrine room completed</li>
                      <li>• 14th-15th centuries: Addition of paintings</li>
                      <li>• 18th century: Renovations during Kandyan period</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Cultural Impact</h3>
                  <p className="text-muted-foreground mb-4">
                    The temple played a crucial role in the religious and cultural life of the Gampola Kingdom. It was 
                    not just a place of worship but also a center for learning and arts.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-medium">Temple&apos;s Importance:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Major Buddhist education center</li>
                      <li>• Preserved ancient art techniques</li>
                      <li>• Influenced temple architecture</li>
                      <li>• Symbol of religious harmony</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Art and Paintings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ancient Art & Paintings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Wall Paintings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The temple&apos;s interior walls are adorned with remarkable paintings from different periods, showcasing
                  the evolution of Sri Lankan Buddhist art. These paintings tell stories from Buddha&apos;s life and
                  important Jataka tales.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Painting Styles:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Gampola period murals</li>
                    <li>• Kandyan era additions</li>
                    <li>• Traditional color schemes</li>
                    <li>• Religious symbolism</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Art Preservation:</strong> Recent conservation efforts have helped protect these ancient 
                    paintings from environmental damage and restore their original beauty.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sculptures & Carvings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The temple features intricate stone and wood carvings that demonstrate the exceptional skill of 
                  medieval Sri Lankan craftsmen.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Notable Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stone makara toranas (gateways)</li>
                    <li>• Wooden door frames</li>
                    <li>• Decorative roof supports</li>
                    <li>• Buddha statues</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Craftsmanship:</strong> Each carving was made by hand using traditional tools and techniques, 
                    some of which are still practiced by local artisans today.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visitor Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Planning Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Opening Hours</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Daily: 6:00 AM - 6:00 PM</li>
                    <li>• Best time: Early morning or late afternoon</li>
                    <li>• Special ceremonies on full moon days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Entrance Fees</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Local visitors: Free (small donation appreciated)</li>
                    <li>• Foreign visitors: 500 LKR</li>
                    <li>• Camera fee: 250 LKR</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Dress Code:</strong> Modest dress required. Cover shoulders and knees. Remove shoes before entering.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Kandy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• By Tuk-tuk: 30-40 minutes</li>
                    <li>• By Bus: Take Udunuwara bus</li>
                    <li>• By Car: 25 minutes drive</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Transport</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tuk-tuks available at temple</li>
                    <li>• Local buses pass nearby</li>
                    <li>• Parking available for vehicles</li>
                  </ul>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> Combine your visit with nearby Gadaladeniya and Embekke temples for a complete 
                    cultural experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Morning</CardTitle>
                <CardDescription>6:00 AM - 10:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Peaceful atmosphere</li>
                  <li>• Morning Buddhist rituals</li>
                  <li>• Cool temperatures</li>
                  <li>• Best lighting for photos</li>
                  <li>• Less crowded</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Midday</CardTitle>
                <CardDescription>10:00 AM - 2:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regular temple activities</li>
                  <li>• Good visibility</li>
                  <li>• Warmer temperatures</li>
                  <li>• More visitors present</li>
                  <li>• Full sunlight</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Evening</CardTitle>
                <CardDescription>2:00 PM - 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Evening prayers</li>
                  <li>• Cooler temperatures</li>
                  <li>• Beautiful sunset views</li>
                  <li>• Peaceful atmosphere</li>
                  <li>• Good for photography</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conservation Efforts */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Preservation & Conservation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Lankathilaka Temple is a living monument that continues to serve as an active place of Buddhist worship 
                while preserving its historical significance. Ongoing conservation efforts focus on protecting the ancient 
                paintings, strengthening the structure, and maintaining the temple&apos;s authentic character.
              </p>
              <p className="text-muted-foreground mb-4">
                Recent restoration work has helped stabilize the building&apos;s structure while preserving its original 
                architectural features. Conservation experts use traditional methods and materials whenever possible to 
                maintain the temple&apos;s historical authenticity.
              </p>
              <p className="text-muted-foreground font-medium">
                Your visit helps support the continued preservation of this remarkable piece of Sri Lankan heritage. 
                Remember to treat the temple with respect and follow all guidelines to help protect it for future 
                generations. 🙏✨🏛️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
