"use client"
import Image from "next/image"
import { ImageCarousel } from "@/components/ui/image-carousel"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye, MapPin, Clock, ArrowLeft } from "lucide-react"



const ramayanaLocationData = [
  {
    name: "Sita Amman Temple",
    location: "Nuwara Eliya",
    significance: "Where Sita was held captive by Ravana",
    description: "A sacred temple built at the site where Sita Devi was imprisoned in Ashok Vatika",
    image: "/placeholder.svg?height=300&width=400",
    activities: ["Temple visit", "Prayer ceremony", "Garden exploration"]
  },
  {
    name: "Ravana Falls",
    location: "Ella",
    significance: "Named after King Ravana",
    description: "Magnificent waterfall associated with Ravana's bathing area",
    image: "/placeholder.svg?height=300&width=400",
    activities: ["Waterfall viewing", "Photography", "Nature walk"]
  },
  {
    name: "Ravana Caves",
    location: "Ella",
    significance: "Ravana's hiding place",
    description: "Ancient caves where Ravana is believed to have hidden Sita",
    image: "/placeholder.svg?height=300&width=400",
    activities: ["Cave exploration", "Historical tour", "Local legends"]
  },
  {
    name: "Hanuman Temple",
    location: "Ramboda",
    significance: "Hanuman's search for Sita",
    description: "Temple dedicated to Hanuman who searched for Sita in these hills",
    image: "/placeholder.svg?height=300&width=400",
    activities: ["Temple worship", "Mountain views", "Devotional activities"]
  }
]

export default function RamayanaySitesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Ancient Ramayana sites in Sri Lanka with misty mountains and sacred temples"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="bg-orange-600 text-white mb-4">Ancient Legends</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ramayana Sites in Sri Lanka</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Journey through the legendary locations of the ancient epic
          </p>
        </div>
      </section>

  <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>David Kumar</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>January 8, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>2.1K views</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>15 min read</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sri Lanka holds a special place in the ancient Indian epic, the Ramayana. According to legend, 
              this beautiful island was the kingdom of Ravana, the ten-headed demon king who abducted Sita, 
              the wife of Prince Rama. Today, visitors can explore numerous sites across Sri Lanka that are 
              connected to this timeless story, offering a unique blend of spirituality, history, and natural beauty.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              From sacred temples built where Sita was held captive to caves where Ravana is believed to have 
              hidden, these locations provide insight into one of the world's greatest epics. Whether you're 
              a devotee, history enthusiast, or curious traveler, the Ramayana trail in Sri Lanka offers an 
              unforgettable journey through myth and legend.
            </p>
          </div>

          {/* Featured Locations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Major Ramayana Sites to Visit
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {/* Seetha Amman Temple */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Seetha-Amman-Temple.jpg", alt: "Seetha Amman Temple exterior", caption: "Seetha Amman Temple, Nuwara Eliya" },
                    { src: "/Seetha-Amman-Temple-interior.jpg", alt: "Seetha Amman Temple interior", caption: "Colorful statues and shrines inside the temple" },
                    { src: "/Seetha-Amman-Temple-stream.jpg", alt: "Stream by Seetha Amman Temple", caption: "The stream where Sita is believed to have bathed" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Sacred Site</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Seetha Amman Temple</CardTitle>
                  <CardDescription className="text-muted-foreground">Nuwara Eliya – Where Sita was held captive</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">Nestled beside a mountain stream, this vibrant temple marks the legendary spot where Sita was kept captive by King Ravana. The temple is adorned with colorful statues depicting scenes from the Ramayana, and devotees believe the nearby stream is where Sita bathed. Footprints in the rock are said to be those of Hanuman, who brought Rama’s message to Sita here. The temple is a focal point for pilgrims, especially during the annual Ramayana festival, and offers a peaceful setting for reflection and prayer.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>Believed to be the only temple in the world dedicated to Sita Devi</li>
                    <li>Features shrines to Rama, Lakshmana, and Hanuman</li>
                    <li>Surrounded by lush tea estates and misty hills</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Ravana Ella & Ravana Cave */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Ravana-Ella.jpg", alt: "Ravana Ella Falls", caption: "Ravana Ella Falls, Ella" },
                    { src: "/Ravana-Ella1.jpg", alt: "Ravana Cave entrance", caption: "Entrance to the legendary Ravana Cave" },
                    { src: "/Ravana-Ella-view.jpg", alt: "View from Ravana Ella", caption: "Panoramic view from the top of the falls" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Legendary Falls</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Ravana Ella & Ravana Cave</CardTitle>
                  <CardDescription className="text-muted-foreground">Ella – Linked to Ravana’s hideout</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">The dramatic Ravana Falls cascade down a rocky cliff, while the nearby cave is believed to have been used by Ravana to hide Sita. The cave’s winding passages and the falls’ misty spray evoke the mystery and drama of the Ramayana legend. Archaeological finds, such as ancient inscriptions and artifacts, add to the site’s intrigue. The area is also popular for hiking and offers breathtaking views of the surrounding valleys.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>One of the widest waterfalls in Sri Lanka</li>
                    <li>Ravana Cave is over 1,000 meters above sea level</li>
                    <li>Guided tours available for cave exploration</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Divurumpola */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Divurumpola.jpg", alt: "Divurumpola Temple exterior", caption: "Divurumpola Temple, Nuwara Eliya" },
                    { src: "/Divurumpola-grounds.jpg", alt: "Divurumpola temple grounds", caption: "Sacred grounds of Divurumpola" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Historic Site</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Divurumpola</CardTitle>
                  <CardDescription className="text-muted-foreground">Nuwara Eliya – Sita’s fire ordeal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">Divurumpola is revered as the place where Sita underwent her famous “Agni Pariksha” (trial by fire) to prove her purity to Rama. The peaceful temple grounds are surrounded by forest, and the site is a place of solemn pilgrimage for many devotees following the Ramayana trail. The temple is also known for its ancient Bo tree and tranquil meditation areas.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>Site of Sita’s legendary fire ordeal</li>
                    <li>Popular for religious vows and blessings</li>
                    <li>Features a sacred Bo tree and meditation hall</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Rumassala Hill */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Rumassala.jpg", alt: "Rumassala Hill view", caption: "Rumassala Hill, Galle" },
                    { src: "/Rumassala-flora.jpg", alt: "Unique flora at Rumassala", caption: "Rare plants on Rumassala Hill" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Mythic Hill</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Rumassala</CardTitle>
                  <CardDescription className="text-muted-foreground">Galle – Believed to be part of Himalayas dropped by Hanuman</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">According to legend, Hanuman carried a mountain of medicinal herbs from the Himalayas to Lanka. A piece is said to have fallen at Rumassala, giving rise to its unique flora. The hill offers panoramic views of the southern coast and is a haven for rare plants and birds. The area is also home to the Japanese Peace Pagoda and several scenic walking trails.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>Rich in rare medicinal plants and herbs</li>
                    <li>Popular for hiking and birdwatching</li>
                    <li>Site of the Japanese Peace Pagoda</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Ashok Vatika (Hakgala Garden) */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Hakgala-Garden.jpg", alt: "Hakgala Botanical Garden", caption: "Hakgala Botanical Garden, Nuwara Eliya" },
                    { src: "/Hakgala-flowers.jpg", alt: "Orchids at Hakgala", caption: "Rare orchids in Hakgala Garden" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Botanical Garden</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Ashok Vatika (Hakgala Garden)</CardTitle>
                  <CardDescription className="text-muted-foreground">Nuwara Eliya – Where Sita stayed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">Hakgala Botanical Garden is believed to be the site of Ashok Vatika, the pleasure garden where Sita was kept during her captivity. Today, the garden is famous for its lush landscapes, rare orchids, and cool climate, making it a tranquil spot for reflection and exploration. The garden’s terraced layout and diverse plant collections attract botanists and tourists alike.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>Second largest botanical garden in Sri Lanka</li>
                    <li>Home to over 10,000 species of flora</li>
                    <li>Features themed gardens and scenic viewpoints</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Thiruketheeswaram Temple */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Thiruketheeswaram.jpg", alt: "Thiruketheeswaram Temple exterior", caption: "Thiruketheeswaram Temple, Mannar" },
                    { src: "/Thiruketheeswaram-festival.jpg", alt: "Festival at Thiruketheeswaram", caption: "Annual Maha Shivaratri festival at the temple" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Ancient Temple</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Thiruketheeswaram Temple</CardTitle>
                  <CardDescription className="text-muted-foreground">Mannar – Connected to Ravana’s kingdom</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">One of the oldest and most revered Shiva temples in Sri Lanka, Thiruketheeswaram is said to have been frequented by Ravana and his ancestors. The temple’s ancient stonework and sacred tank attract pilgrims from across the region, especially during the annual Maha Shivaratri festival. The temple complex is also known for its intricate carvings and vibrant processions.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>Major pilgrimage site for Shaivites</li>
                    <li>Features a sacred water tank (pond)</li>
                    <li>Hosts colorful annual festivals</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Trincomalee Koneswaram Temple */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Koneswaram-Temple.jpg", alt: "Koneswaram Temple exterior", caption: "Koneswaram Temple, Trincomalee" },
                    { src: "/Koneswaram-view.jpg", alt: "View from Koneswaram Temple", caption: "Clifftop view over the Indian Ocean" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Clifftop Temple</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Trincomalee Koneswaram Temple</CardTitle>
                  <CardDescription className="text-muted-foreground">Trincomalee – Ravana’s worship site</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">Perched atop Swami Rock, Koneswaram Temple is a dramatic clifftop shrine dedicated to Lord Shiva. The temple is steeped in Ramayana lore, with legends stating that Ravana and his mother worshipped here. The panoramic views of the Indian Ocean and the temple’s vibrant festivals make it a must-visit. The temple is also famous for its annual chariot festival and ancient lingam.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>Known as the "Temple of a Thousand Pillars"</li>
                    <li>Offers breathtaking ocean views</li>
                    <li>Hosts the annual Ther (Chariot) Festival</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Chariot Path (Nuwara Eliya) */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageCarousel images={[
                    { src: "/Chariot-Path.jpg", alt: "Chariot Path landscape", caption: "Chariot Path, Nuwara Eliya" },
                    { src: "/Chariot-Path-mist.jpg", alt: "Misty Chariot Path", caption: "Misty hills along the Chariot Path" }
                  ]} />
                  <div className="absolute top-3 left-3"><Badge className="bg-orange-600 text-white">Sacred Trail</Badge></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">Chariot Path</CardTitle>
                  <CardDescription className="text-muted-foreground">Nuwara Eliya – Believed route of Ravana’s chariot</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">High in the misty hills, the Chariot Path is said to be the route taken by Ravana’s chariot when transporting Sita. The area is dotted with unique flora and offers sweeping views of the surrounding valleys. Pilgrims and trekkers alike are drawn to its mystical atmosphere and natural beauty. The path is especially popular during the Ramayana festival season.</p>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm mb-2">
                    <li>Popular trekking route for pilgrims</li>
                    <li>Rich in endemic plant species</li>
                    <li>Offers panoramic views of Nuwara Eliya</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* The Epic Story */}
          <section className="mb-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              The Ramayana Story in Sri Lanka
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                According to the Ramayana, Sri Lanka was known as Lanka, the golden kingdom ruled by the 
                powerful Ravana. The island became central to the epic when Ravana abducted 
                Sita while she was in exile with Rama and Lakshmana in the forests of India.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">Key Events in Lanka</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sita's captivity in Ashok Vatika (now Sita Amman Temple area)</li>
                    <li>• Hanuman's search and discovery of Sita</li>
                    <li>• The burning of Lanka by Hanuman's tail</li>
                    <li>• Rama's arrival with his army</li>
                    <li>• The great battle between Rama and Ravana</li>
                    <li>• Sita's rescue and return to India</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">Cultural Significance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Blend of Hindu and Buddhist traditions</li>
                    <li>• Local legends passed down through generations</li>
                    <li>• Archaeological sites with ancient connections</li>
                    <li>• Pilgrimage destinations for devotees</li>
                    <li>• Cultural festivals celebrating the epic</li>
                    <li>• Integration with Sri Lankan folklore</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Planning Your Visit */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Planning Your Ramayana Tour
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
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
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Tour Tips</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• <strong>Dress Code:</strong> Modest clothing for temple visits</p>
                  <p>• <strong>Guide:</strong> Local guide recommended for historical context</p>
                  <p>• <strong>Duration:</strong> 3-5 days for complete Ramayana trail</p>
                  <p>• <strong>Transportation:</strong> Private vehicle recommended</p>
                  <p>• <strong>Respect:</strong> Follow temple customs and traditions</p>
                  <p>• <strong>Photography:</strong> Ask permission at religious sites</p>
                </div>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="text-center bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Experience the Epic Legend</h2>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              The Ramayana sites in Sri Lanka offer more than just religious significance—they provide 
              a window into ancient culture, stunning natural beauty, and timeless spiritual wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Plan Your Ramayana Tour
              </Link>
              <Link 
                href="/destinations"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Explore More Destinations
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
