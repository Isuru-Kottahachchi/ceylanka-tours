"use client"

import Image from "next/image"
import { Clock, MapPin, Palette, Star, Calendar, Users, Theater } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function AmbalangodaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/ambalangoda-masks.jpg"
          alt="Traditional Sri Lankan masks displayed in Ambalangoda, showcasing intricate craftsmanship and vibrant colors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ambalangoda</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Traditional Mask Making Capital</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Palette className="w-4 h-4 mr-1" />
              Traditional Crafts Center
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Theater className="w-4 h-4 mr-1" />
              Mask Heritage Site
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Ambalangoda: The Heart of Sri Lankan Mask Culture</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled along Sri Lanka&apos;s southern coast, Ambalangoda is renowned worldwide as the epicenter of 
              traditional mask making and puppet crafts. This charming coastal town has preserved centuries-old 
              artistic traditions, passing down intricate carving techniques and cultural knowledge through generations 
              of skilled artisans.
            </p>
            <p className="text-lg">
              From the mesmerizing Kolam masks used in traditional dance performances to the elaborate Sanni masks 
              employed in healing rituals, Ambalangoda&apos;s mask-making tradition represents a unique intersection of 
              art, culture, and ancient wisdom.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Ambalangoda Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Best Time to Visit:</strong> December to April
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Famous For:</strong> Traditional Masks & Puppets
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Local Population:</strong> Approximately 30,000
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> 80km south of Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>Known As:</strong> Mask Capital of Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Recommended Stay:</strong> 1-2 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Traditional Mask Making */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Art of Traditional Mask Making</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Types of Traditional Masks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Kolam Masks</h4>
                  <p className="text-muted-foreground mb-3">
                    Used in traditional folk drama performances, these masks represent various characters from village life 
                    and folklore. Each mask is intricately carved and painted to portray specific personalities and emotions.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kings and queens characters</li>
                    <li>• Village officials and common folk</li>
                    <li>• Comic and dramatic personas</li>
                    <li>• Animals and mythical creatures</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Sanni Masks</h4>
                  <p className="text-muted-foreground mb-3">
                    These masks are traditionally used in healing rituals to ward off diseases and evil spirits. There are 
                    18 main Sanni masks, each representing a different illness or ailment.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Unique designs for each illness</li>
                    <li>• Used in traditional healing ceremonies</li>
                    <li>• Highly detailed facial expressions</li>
                    <li>• Sacred cultural significance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Raksha Masks</h4>
                  <p className="text-muted-foreground mb-3">
                    Decorative masks often seen at entrances to homes and buildings, believed to ward off evil spirits 
                    and bring prosperity.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vibrant colors and fierce expressions</li>
                    <li>• Protective symbolic meaning</li>
                    <li>• Popular architectural elements</li>
                    <li>• Various sizes and designs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <ImageCarousel
                images={[
                  {
                    src: "/kolam-masks.jpg",
                    alt: "Collection of traditional Kolam masks showing various character expressions",
                    caption: "Traditional Kolam Masks",
                    title: "Kolam Character Masks"
                  },
                  {
                    src: "/sanni-masks.jpg",
                    alt: "Set of Sanni masks used in traditional healing rituals",
                    caption: "Sanni Healing Masks",
                    title: "Traditional Sanni Masks"
                  },
                  {
                    src: "/raksha-masks.jpg",
                    alt: "Colorful Raksha masks displayed on building facades",
                    caption: "Protective Raksha Masks",
                    title: "Decorative Raksha Masks"
                  }
                ]}
              />

              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p className="text-amber-900 text-sm">
                  <strong>Traditional Craftsmanship:</strong> Mask making in Ambalangoda follows ancient techniques 
                  passed down through generations. The process begins with selecting the proper wood (usually light 
                  Kaduru wood), followed by careful carving, sanding, and painting using natural pigments. A single 
                  mask can take several weeks to complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Puppet Making Tradition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Traditional Puppet Making & Performances</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">The Art of Puppet Making</h3>
                  <p className="text-muted-foreground">
                    Ambalangoda is also famous for its traditional puppet making, known as Rukada Sandarshana. These 
                    puppets are used to tell ancient stories, folklore, and Buddhist tales through captivating performances.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-medium">Puppet Types:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• String puppets (most common)</li>
                      <li>• Rod puppets for special characters</li>
                      <li>• Hand puppets for children&apos;s shows</li>
                      <li>• Giant puppets for festivals</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Did you know?</strong> Traditional puppet shows in Ambalangoda often include live music 
                      played on ancient instruments, with performances lasting several hours as they tell epic stories 
                      from Sri Lankan history and mythology.
                    </p>
                  </div>
                </div>

                <div>
                  <ImageCarousel
                    images={[
                      {
                        src: "/traditional-puppets.jpg",
                        alt: "Collection of traditional Sri Lankan puppets showing detailed craftsmanship",
                        caption: "Traditional String Puppets",
                        title: "Rukada Puppets"
                      },
                      {
                        src: "/puppet-performance.jpg",
                        alt: "Live puppet performance showing puppeteers and musicians",
                        caption: "Traditional Performance",
                        title: "Puppet Show"
                      },
                      {
                        src: "/puppet-making.jpg",
                        alt: "Craftsman working on creating traditional puppets",
                        caption: "Puppet Making Process",
                        title: "Puppet Craftsmanship"
                      }
                    ]}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Museums and Workshops */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Museums & Traditional Workshops</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Ariyapala Mask Museum</CardTitle>
                <CardDescription>Sri Lanka&apos;s Premier Mask Museum</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Established in 1987, this museum showcases an extensive collection of traditional masks and the 
                  history of mask making in Sri Lanka. Visitors can observe the mask-making process and learn about 
                  the cultural significance of different mask types.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold">Museum Highlights:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comprehensive mask collection</li>
                    <li>• Live demonstrations</li>
                    <li>• Educational programs</li>
                    <li>• Traditional tools display</li>
                    <li>• Souvenir shop</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Opening Hours:</strong> 9:00 AM - 6:00 PM daily
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traditional Workshops</CardTitle>
                <CardDescription>Learn from Master Craftsmen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Several traditional workshops in Ambalangoda offer visitors the chance to learn about mask and 
                  puppet making directly from skilled artisans.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold">Workshop Activities:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mask carving demonstrations</li>
                    <li>• Painting workshops</li>
                    <li>• Puppet making sessions</li>
                    <li>• Cultural performances</li>
                    <li>• Hands-on experiences</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Tip:</strong> Book workshops in advance during peak season (December-April)
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
                <CardTitle>Getting There & Around</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• By Train: Regular services from Colombo Fort</li>
                    <li>• By Bus: Frequent buses from Colombo Central</li>
                    <li>• By Car: 2-3 hours via Southern Expressway</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Transport</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tuk-tuks readily available</li>
                    <li>• Local buses to nearby towns</li>
                    <li>• Walking distance to most attractions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Where to Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Accommodation Options</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Beachfront hotels</li>
                    <li>• Boutique guesthouses</li>
                    <li>• Family-run homestays</li>
                    <li>• Budget hostels</li>
                  </ul>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Recommendation:</strong> Stay near the town center for easy access to mask workshops and museums
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
                <CardTitle className="text-green-600">Peak Season</CardTitle>
                <CardDescription>December - April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Perfect weather conditions</li>
                  <li>• Regular cultural performances</li>
                  <li>• Active workshop schedules</li>
                  <li>• Higher accommodation rates</li>
                  <li>• Advance booking recommended</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>September - November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Moderate crowds</li>
                  <li>• Better accommodation rates</li>
                  <li>• Some afternoon showers</li>
                  <li>• Pleasant temperatures</li>
                  <li>• Good workshop availability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Off Season</CardTitle>
                <CardDescription>May - August</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fewer tourists</li>
                  <li>• Lower prices</li>
                  <li>• Some rain likely</li>
                  <li>• More personal attention</li>
                  <li>• Flexible workshop schedules</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Cultural Heritage & Preservation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ambalangoda&apos;s mask and puppet-making traditions represent more than just artistic craftsmanship - they 
                are living links to Sri Lanka&apos;s rich cultural heritage. These art forms have been recognized by UNESCO 
                as important elements of intangible cultural heritage, highlighting the need for their preservation and 
                continued practice.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, local artisans and cultural organizations work tirelessly to pass these traditional skills to 
                new generations, ensuring that these unique art forms continue to thrive and tell their stories for 
                years to come.
              </p>
              <p className="text-muted-foreground font-medium">
                A visit to Ambalangoda offers more than just a tourist experience - it&apos;s an opportunity to witness 
                and support the preservation of ancient Sri Lankan artistic traditions. 🎭🎨✨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
