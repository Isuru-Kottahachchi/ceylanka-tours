import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, BookOpen, Crown, Users, Info, User, Eye, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Ramayana Sites in Sri Lanka | Ancient Temples & Sacred Locations",
  description:
    "Explore the legendary Ramayana sites across Sri Lanka including Sita Amman Temple, Ravana Falls, Divurumpola, and Hakgala Gardens. Discover where ancient epic events took place.",
  keywords:
    "Ramayana sites, Sri Lanka temples, Sita Amman Temple, Ravana Falls, ancient Sri Lanka, Hindu pilgrimage, Ashok Vatika, Divurumpola, sacred sites",
  openGraph: {
    title: "Ramayana Sites in Sri Lanka - Journey Through the Ancient Epic",
    description:
      "Visit the legendary locations where the Ramayana epic unfolded in ancient Sri Lanka",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

interface RamayanaSite {
  name: string
  location: string
  significance: string
  description: string
  highlights: string[]
  image: string
}

const ramayanaSites: RamayanaSite[] = [
  {
    name: "Seetha Amman Temple",
    location: "Nuwara Eliya",
    significance: "Where Sita was held captive by Ravana",
    description:
      "Nestled beside a mountain stream, this vibrant temple marks the legendary spot where Sita was kept captive by King Ravana. The temple is adorned with colorful statues depicting scenes from the Ramayana, and devotees believe the nearby stream is where Sita bathed. Footprints in the rock are said to be those of Hanuman, who brought Rama's message to Sita here. The temple is a focal point for pilgrims, especially during the annual Ramayana festival, and offers a peaceful setting for reflection and prayer.",
    highlights: [
      "Believed to be the only temple in the world dedicated to Sita Devi",
      "Features shrines to Rama, Lakshmana, and Hanuman",
      "Surrounded by lush tea estates and misty hills",
      "Sacred stream where Sita bathed",
    ],
    image: "/Seetha-Amman-Temple.jpg",
  },
  {
    name: "Ravana Ella & Ravana Cave",
    location: "Ella",
    significance: "Linked to Ravana's hideout",
    description:
      "The dramatic Ravana Falls cascade down a rocky cliff, while the nearby cave is believed to have been used by Ravana to hide Sita. The cave's winding passages and the falls' misty spray evoke the mystery and drama of the Ramayana legend. Archaeological finds, such as ancient inscriptions and artifacts, add to the site's intrigue. The area is also popular for hiking and offers breathtaking views of the surrounding valleys.",
    highlights: [
      "One of the widest waterfalls in Sri Lanka",
      "Ravana Cave is over 1,000 meters above sea level",
      "Guided tours available for cave exploration",
      "Archaeological artifacts discovered inside",
    ],
    image: "/Ravana-Ella.jpg",
  },
  {
    name: "Divurumpola",
    location: "Nuwara Eliya",
    significance: "Sita's fire ordeal",
    description:
      "Divurumpola is revered as the place where Sita underwent her famous 'Agni Pariksha' (trial by fire) to prove her purity to Rama. The peaceful temple grounds are surrounded by forest, and the site is a place of solemn pilgrimage for many devotees following the Ramayana trail. The temple is also known for its ancient Bo tree and tranquil meditation areas.",
    highlights: [
      "Site of Sita's legendary fire ordeal",
      "Popular for religious vows and blessings",
      "Features a sacred Bo tree and meditation hall",
      "Peaceful forest surroundings",
    ],
    image: "/Divurumpola.jpg",
  },
  {
    name: "Rumassala",
    location: "Galle",
    significance: "Believed to be part of Himalayas dropped by Hanuman",
    description:
      "According to legend, Hanuman carried a mountain of medicinal herbs from the Himalayas to Lanka. A piece is said to have fallen at Rumassala, giving rise to its unique flora. The hill offers panoramic views of the southern coast and is a haven for rare plants and birds. The area is also home to the Japanese Peace Pagoda and several scenic walking trails.",
    highlights: [
      "Rich in rare medicinal plants and herbs",
      "Popular for hiking and birdwatching",
      "Site of the Japanese Peace Pagoda",
      "Panoramic views of the southern coast",
    ],
    image: "/Roomassala.jpg",
  },
  {
    name: "Ashok Vatika (Hakgala Garden)",
    location: "Nuwara Eliya",
    significance: "Where Sita stayed during captivity",
    description:
      "Hakgala Botanical Garden is believed to be the site of Ashok Vatika, the pleasure garden where Sita was kept during her captivity. Today, the garden is famous for its lush landscapes, rare orchids, and cool climate, making it a tranquil spot for reflection and exploration. The garden's terraced layout and diverse plant collections attract botanists and tourists alike.",
    highlights: [
      "Second largest botanical garden in Sri Lanka",
      "Home to over 10,000 species of flora",
      "Features themed gardens and scenic viewpoints",
      "Cool climate ideal for rare plants",
    ],
    image: "/Hakgala-Garden.jpg",
  },
  {
    name: "Thiruketheeswaram Temple",
    location: "Mannar",
    significance: "Connected to Ravana's kingdom",
    description:
      "One of the oldest and most revered Shiva temples in Sri Lanka, Thiruketheeswaram is said to have been frequented by Ravana and his ancestors. The temple's ancient stonework and sacred tank attract pilgrims from across the region, especially during the annual Maha Shivaratri festival. The temple complex is also known for its intricate carvings and vibrant processions.",
    highlights: [
      "Major pilgrimage site for Shaivites",
      "Features a sacred water tank (pond)",
      "Hosts colorful annual festivals",
      "Ancient stonework and intricate carvings",
    ],
    image: "/Thiruketheeswaram.jpg",
  },
  {
    name: "Trincomalee Koneswaram Temple",
    location: "Trincomalee",
    significance: "Ravana's worship site",
    description:
      "Perched atop Swami Rock, Koneswaram Temple is a dramatic clifftop shrine dedicated to Lord Shiva. The temple is steeped in Ramayana lore, with legends stating that Ravana and his mother worshipped here. The panoramic views of the Indian Ocean and the temple's vibrant festivals make it a must-visit. The temple is also famous for its annual chariot festival and ancient lingam.",
    highlights: [
      "Known as the 'Temple of a Thousand Pillars'",
      "Offers breathtaking ocean views",
      "Hosts the annual Ther (Chariot) Festival",
      "Clifftop location on Swami Rock",
    ],
    image: "/Koneswaram-Temple.jpg",
  },
  {
    name: "Chariot Path",
    location: "Nuwara Eliya",
    significance: "Believed route of Ravana's chariot",
    description:
      "High in the misty hills, the Chariot Path is said to be the route taken by Ravana's chariot when transporting Sita. The area is dotted with unique flora and offers sweeping views of the surrounding valleys. Pilgrims and trekkers alike are drawn to its mystical atmosphere and natural beauty. The path is especially popular during the Ramayana festival season.",
    highlights: [
      "Popular trekking route for pilgrims",
      "Rich in endemic plant species",
      "Offers panoramic views of Nuwara Eliya",
      "Mystical atmosphere in misty hills",
    ],
    image: "/Chariot-Path.jpg",
  },
  {
    name: "Ravana Cave (Ravana Guhawa)",
    location: "Ella",
    significance: "Ancient cave system with historical significance",
    description:
      "This extensive cave complex is believed to be one of the hiding places where King Ravana kept Sita during her captivity. The cave's remarkable architecture showcases ancient engineering, with its complex network of tunnels and chambers carved into the rock face. Archaeological discoveries within the cave, including ancient inscriptions and artifacts, provide tangible connections to its historical significance.",
    highlights: [
      "Complex network of tunnels and chambers",
      "Evidence of ancient habitation found",
      "Located over 1,000 meters above sea level",
      "Guided tours available with local experts",
    ],
    image: "/Ravana-Cave.jpg",
  },
  {
    name: "Nil Diya Pokuna (Blue Water Pool)",
    location: "Ella",
    significance: "Ancient sacred pool (Currently closed)",
    description:
      "Near the Ravana Cave complex lies the mysterious Nil Diya Pokuna, a natural pool with crystal-clear blue waters. Historically associated with the Ramayana period, this pool is believed to have been used during Ravana's time. The pristine waters and surrounding landscape create an almost mystical atmosphere that connects visitors to the ancient past. Note: This site is currently closed to visitors for conservation purposes and safety measures.",
    highlights: [
      "Natural pool with crystal-clear waters",
      "Historical connection to Ramayana period",
      "Surrounded by pristine forest",
      "Protected natural heritage site - Currently closed",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function RamayanaSitesArticle() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Ancient Ramayana sites in Sri Lanka with misty mountains and sacred temples"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-600 text-white border-orange-500">
            <BookOpen className="w-4 h-4 mr-1" />
            Ancient Legends & Sacred Sites
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ramayana Sites in Sri Lanka</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Journey through the legendary locations of the ancient epic
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Ancient Era
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Across Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Users className="w-4 h-4 mr-1" />
              10+ Sacred Sites
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Navigation */}
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Crown className="w-8 h-8 text-orange-600" />
                The Ramayana Trail in Sri Lanka
              </CardTitle>
              <CardDescription className="text-lg">
                Sacred Sites Connected to the Ancient Epic
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sri Lanka holds a special place in the ancient Indian epic, the Ramayana. According to legend, 
                this beautiful island was the kingdom of Ravana, the ten-headed demon king who abducted Sita, 
                the wife of Prince Rama. Today, visitors can explore numerous sites across Sri Lanka that are 
                connected to this timeless story, offering a unique blend of spirituality, history, and natural beauty.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From sacred temples built where Sita was held captive to caves where Ravana is believed to have 
                hidden, these locations provide insight into one of the world&apos;s greatest epics. Whether you&apos;re 
                a devotee, history enthusiast, or curious traveler, the Ramayana trail in Sri Lanka offers an 
                unforgettable journey through myth and legend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each site tells a part of the epic story - from Sita&apos;s captivity in Ashok Vatika to Hanuman&apos;s 
                heroic search, from Ravana&apos;s magnificent kingdom to the final battle between good and evil. 
                These places are not just historical curiosities; they are living sites of worship and pilgrimage 
                that continue to inspire devotion and wonder.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Historical Context */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-orange-600" />
            The Ramayana Story in Lanka
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Key Events in Lanka</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  According to the Ramayana, Sri Lanka was known as Lanka, the golden kingdom ruled by the 
                  powerful Ravana. The island became central to the epic when Ravana abducted Sita while 
                  she was in exile with Rama and Lakshmana in the forests of India.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Sita&apos;s captivity in Ashok Vatika</li>
                  <li>• Hanuman&apos;s search and discovery of Sita</li>
                  <li>• The burning of Lanka by Hanuman&apos;s tail</li>
                  <li>• Rama&apos;s arrival with his army</li>
                  <li>• The great battle between Rama and Ravana</li>
                  <li>• Sita&apos;s rescue and return to India</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Cultural Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  The Ramayana sites in Sri Lanka represent a unique blend of Hindu and Buddhist traditions. 
                  Local legends passed down through generations have preserved these stories, making them an 
                  integral part of Sri Lankan culture and heritage.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Blend of Hindu and Buddhist traditions</li>
                  <li>• Archaeological sites with ancient connections</li>
                  <li>• Pilgrimage destinations for devotees</li>
                  <li>• Cultural festivals celebrating the epic</li>
                  <li>• Integration with Sri Lankan folklore</li>
                  <li>• Living traditions of worship and devotion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Ramayana Sites */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-orange-600" />
              Sacred Ramayana Sites to Visit
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the legendary locations where the ancient epic came to life across Sri Lanka
            </p>
          </div>

          <div className="space-y-8">
            {ramayanaSites.map((site, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600"
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={site.image}
                      alt={`${site.name} - ${site.location}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600 text-white font-bold">
                        Site #{index + 1}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{site.name}</h3>
                      <p className="text-lg text-muted-foreground mb-2">{site.location}</p>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        {site.significance}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold">Location:</span>
                        <span className="text-muted-foreground">{site.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{site.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Info className="w-4 h-4 text-orange-600" />
                        Highlights:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {site.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Planning Your Ramayana Tour</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-xl">Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-blue-600">December to March:</span>
                    <span className="text-muted-foreground ml-2">
                      Ideal weather for temple visits and outdoor exploration
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-green-600">April to June:</span>
                    <span className="text-muted-foreground ml-2">
                      Warm weather, fewer crowds at sites
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-orange-600">Festival Seasons:</span>
                    <span className="text-muted-foreground ml-2">
                      Special ceremonies and celebrations at temples
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-xl">Tour Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Dress Code:</strong> Modest clothing for temple visits</li>
                  <li>• <strong>Guide:</strong> Local guide recommended for historical context</li>
                  <li>• <strong>Duration:</strong> 3-5 days for complete Ramayana trail</li>
                  <li>• <strong>Transportation:</strong> Private vehicle recommended</li>
                  <li>• <strong>Respect:</strong> Follow temple customs and traditions</li>
                  <li>• <strong>Photography:</strong> Ask permission at religious sites</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-4 bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-900 dark:to-amber-900 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Discover the Ramayana Trail</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Walk through the ancient sites where this legendary epic unfolded. Experience the magnificent 
            temples and sacred locations from this golden age of Sri Lankan civilization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-trip" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Plan Your Ramayana Tour
              </Button>
            </Link>
            <Link href="/contact-us" passHref legacyBehavior>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
