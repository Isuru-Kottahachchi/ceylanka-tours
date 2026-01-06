"use client"
import Image from "next/image";
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Anchor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/ui/image-carousel";



export default function MaduRiverSafariGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Madu-River-Safari.jpg"
          alt="Serene view of the Madu River with mangroves and a boat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Madu River Safari</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Mangrove Paradise</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Balapitiya, Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Anchor className="w-4 h-4 mr-1" />
              Eco-Tourism Hotspot
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Calendar className="w-4 h-4 mr-1" />
              Year-Round Destination
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#fish-therapy" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Fish Therapy</a>
          <a href="#wildlife" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Wildlife</a>
          <a href="#guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to the Madu River Safari</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              The Madu River Safari is a tranquil escape into Sri Lanka&apos;s lush mangrove forests. Located in Balapitiya, this eco-tourism hotspot offers a unique blend of natural beauty, wildlife, and cultural experiences. Glide through serene waterways, explore hidden islands, and immerse yourself in the untouched beauty of this biodiverse haven.
            </p>
            <p className="text-lg">
              Whether you&apos;re a nature enthusiast, a photographer, or simply looking for a peaceful retreat, the Madu River Safari promises an unforgettable journey. Don&apos;t miss the chance to experience the famous fish therapy, where tiny fish gently exfoliate your feet—a natural spa treatment like no other!
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section id="quick-facts" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Madu River Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Best Time to Visit:</strong> November to April (dry season)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Location:</strong> Balapitiya, 80km south of Colombo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Highlights:</strong> Mangroves, fish therapy, birdwatching
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Area:</strong> 915 hectares of mangroves
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> Biosphere Reserve
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2–3 hours
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fish Therapy */}
        <section id="fish-therapy" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Fish Therapy: A Natural Spa Experience</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              One of the highlights of the Madu River Safari is the unique fish therapy experience. As you dip your feet into the water, tiny fish gently nibble away dead skin, leaving your feet feeling refreshed and rejuvenated. This natural exfoliation process is not only relaxing but also a fun and memorable activity for visitors of all ages.
            </p>
            <p className="text-lg">
              Fish therapy stations are set up along the river, offering a chance to unwind while surrounded by the tranquil beauty of the mangroves. It&apos;s a must-try experience that combines relaxation with a touch of adventure.
            </p>
          </div>
        </section>

        {/* Wildlife */}
        <section id="wildlife" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Wildlife Encounters</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              The Madu River is a haven for wildlife enthusiasts. The mangroves are home to a diverse range of species, including colorful birds, playful monkeys, and even the occasional crocodile. Keep your camera ready to capture the vibrant biodiversity that thrives in this unique ecosystem.
            </p>
            <p className="text-lg">
              Birdwatchers will be delighted by the variety of avian species, from kingfishers to herons. The river&apos;s calm waters also make it an ideal spot for spotting aquatic life, including crabs and fish darting through the clear shallows.
            </p>
          </div>
        </section>

        {/* Visiting Guide */}
        <section id="guide" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Plan Your Visit</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              To make the most of your Madu River Safari, consider booking a guided boat tour. Local guides offer valuable insights into the ecosystem, ensuring a safe and informative experience. Morning tours are recommended for cooler weather and better wildlife sightings.
            </p>
            <p className="text-lg">
              Don&apos;t forget to bring sunscreen, a hat, and a camera to capture the stunning scenery. Comfortable clothing and footwear are also essential for a hassle-free adventure.
            </p>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Attractions During the Madu River Safari</h2>
          <div className="space-y-8">
                  <Card>
              <CardHeader>
                <CardTitle>Cinnamon Island (Kurudu Doowa)</CardTitle>
                <CardDescription>Island where you can see cinnamon cultivation and processing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Kothduwa-Temple.jpg",
                        alt: "Kothduwa Temple surrounded by lush greenery",
                        caption: "A serene Buddhist temple on an island",
                        title: "Kothduwa Temple - Tranquility in Nature",
                      },
                      {
                        src: "/Kothduwa-Temple1.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "Aerial view of Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                      {
                        src: "/Kothduwa-Temple2.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "View from Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kothduwa Temple is a tranquil Buddhist sanctuary located on an island in the Madu River. Accessible only by boat, this temple offers a peaceful retreat surrounded by lush mangroves and the gentle sounds of nature.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Accessible only by boat
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for meditation and relaxation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
             
            {/* Kothduwa Temple */}
            <Card>
              <CardHeader>
                <CardTitle>Kothduwa Temple</CardTitle>
                <CardDescription>A serene Buddhist temple on an island</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Kothduwa-Temple.jpg",
                        alt: "Kothduwa Temple surrounded by lush greenery",
                        caption: "A serene Buddhist temple on an island",
                        title: "Kothduwa Temple - Tranquility in Nature",
                      },
                      {
                        src: "/Kothduwa-Temple1.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "Aerial view of Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                      {
                        src: "/Kothduwa-Temple2.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "View from Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kothduwa Temple is a tranquil Buddhist sanctuary located on an island in the Madu River. Accessible only by boat, this temple offers a peaceful retreat surrounded by lush mangroves and the gentle sounds of nature.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Accessible only by boat
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for meditation and relaxation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
                  <Card>
              <CardHeader>
                <CardTitle>Birds and Wildlife</CardTitle>
                <CardDescription>A serene Buddhist temple on an island</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Kothduwa-Temple.jpg",
                        alt: "Kothduwa Temple surrounded by lush greenery",
                        caption: "A serene Buddhist temple on an island",
                        title: "Kothduwa Temple - Tranquility in Nature",
                      },
                      {
                        src: "/Kothduwa-Temple1.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "Aerial view of Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                      {
                        src: "/Kothduwa-Temple2.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "View from Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kothduwa Temple is a tranquil Buddhist sanctuary located on an island in the Madu River. Accessible only by boat, this temple offers a peaceful retreat surrounded by lush mangroves and the gentle sounds of nature.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Accessible only by boat
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for meditation and relaxation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sathapaha doowa</CardTitle>
                <CardDescription>A tiny island in the Madu River</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src:"/Madu-River-Safari.jpg",
                        alt: "Kothduwa Temple surrounded by lush greenery",
                        caption: "A serene Buddhist temple on an island",
                        title: "Kothduwa Temple - Tranquility in Nature",
                      },
                      {
                        src: "/Kothduwa-Temple1.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "Aerial view of Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                      {
                        src: "/Kothduwa-Temple2.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "View from Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kothduwa Temple is a tranquil Buddhist sanctuary located on an island in the Madu River. Accessible only by boat, this temple offers a peaceful retreat surrounded by lush mangroves and the gentle sounds of nature.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Accessible only by boat
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for meditation and relaxation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fish therapy</CardTitle>
                <CardDescription>Good for relaxation and rejuvenation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Kothduwa-Themple1.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "Aerial view of Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                      {
                        src: "/Kothduwa-Temple2.jpg",
                        alt: "Another view of Kothduwa Temple with the river",
                        caption: "View from Kothduwa Temple",
                        title: "Kothduwa Temple - Riverside Serenity",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Kothduwa Temple is a tranquil Buddhist sanctuary located on an island in the Madu River. Accessible only by boat, this temple offers a peaceful retreat surrounded by lush mangroves and the gentle sounds of nature.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Accessible only by boat
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for meditation and relaxation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Attractions */}
            <Card>
              <CardHeader>
                <CardTitle>Other Attractions</CardTitle>
                <CardDescription>Explore the hidden gems of the Madu River</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Madu-River-Islands.jpg"
                    alt="Scenic islands in the Madu River"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Madu River is dotted with numerous small islands, each offering unique experiences. From cinnamon plantations to birdwatching spots, there&apos;s something for everyone to enjoy.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Visit cinnamon plantations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spot exotic birds and wildlife
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
