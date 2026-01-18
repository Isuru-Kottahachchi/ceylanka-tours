"use client";

import Image from "next/image";
import { MapPin, CheckCircle, Star, Calendar, Users, TreePine, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";



function ImageCarousel({ images }: { images: { src: string; alt: string; caption?: string; title?: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-lg h-[300px] flex items-center justify-center">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={400}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default function OhiyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Ohiya.jpg"
          alt="Scenic view of Ohiya with lush greenery and misty mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ohiya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Gateway to Horton Plains & Scenic Beauty</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Uva Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <TreePine className="w-4 h-4 mr-1" />
              Nature&apos;s Paradise
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Calendar className="w-4 h-4 mr-1" />
              Perfect Year-Round
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#hiking-trails" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Hiking Trails</a>
          <a href="#horton-plains" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Horton Plains</a>
          <a href="#train-journey" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Scenic Train Journey</a>
          <a href="#guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Ohiya: Nature&apos;s Hidden Gem</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Nestled in the heart of Sri Lanka&apos;s hill country, Ohiya is a tranquil escape for nature lovers and adventure seekers alike. Known for its proximity to Horton Plains National Park and the breathtaking World&apos;s End viewpoint, Ohiya offers a serene retreat surrounded by lush greenery and misty mountains.
            </p>
            <p className="text-lg">
              Whether you&apos;re embarking on a scenic train journey through the hills, exploring hidden waterfalls, or hiking through pristine landscapes, Ohiya promises an unforgettable experience that connects you with the raw beauty of nature.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section id="quick-facts" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Ohiya Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Best Time to Visit:</strong> Year-round, but December to March offers the clearest skies.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Population:</strong> Small village with a close-knit community.
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Uva Province, 1,774m above sea level.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Highlights:</strong> Horton Plains, World&apos;s End, and scenic train rides.
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Attractions */}
        <section id="main-attractions" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Main Attractions in Ohiya</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Ohiya is a treasure trove of natural wonders and scenic trails. Here are the must-visit attractions:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Devil&apos;s Staircase:</strong> A thrilling hiking trail with steep climbs, sharp turns, and breathtaking views of the surrounding valleys and tea plantations.
              </li>
              <li>
                <strong>Idalgashinna Hike:</strong> A scenic trek that takes you through lush greenery, misty hills, and panoramic vistas, perfect for adventure enthusiasts.
              </li>
              <li>
                <strong>Horton Plains National Park:</strong> Just a short distance from Ohiya, this UNESCO World Heritage site is home to the famous World&apos;s End cliff and Baker&apos;s Falls.
              </li>
            </ul>
          </div>
        </section>
        {/* What You&apos;ll See During Your Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What You&apos;ll See During Your Visit</h2>
          <div className="space-y-8">
            {/* Devil&apos;s Staircase */}
            <Card>
              <CardHeader>
                <CardTitle>1. Devil&apos;s Staircase</CardTitle>
                <CardDescription>A thrilling hike with breathtaking views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/DevilsStaircase.jpeg",
                        alt: "Devil&apos;s Staircase trail view 1",
                        caption: "Steep and scenic paths",
                        title: "Devil&apos;s Staircase - Adventure Awaits",
                      },
                      {
                        src: "/devils-staircase2.jpg",
                        alt: "Devil&apos;s Staircase trail view 2",
                        caption: "Breathtaking mountain views",
                        title: "Devil&apos;s Staircase - Nature&apos;s Beauty",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Devil&apos;s Staircase is a thrilling hiking trail that challenges adventurers with its steep paths and rugged terrain. The journey rewards you with panoramic views of the surrounding hills and valleys.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Stunning viewpoints along the trail
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        A true test of endurance for hikers
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Idalgashinna Hike */}
            <Card>
              <CardHeader>
                <CardTitle>2. Idalgashinna Hike</CardTitle>
                <CardDescription>Picturesque trails through tea estates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Idalgashinna.jpg",
                        alt: "Idalgashinna trail view 1",
                        caption: "Tea plantations and misty hills",
                        title: "Idalgashinna - Scenic Beauty",
                      },
                      {
                        src: "/idalgashinna2.jpg",
                        alt: "Idalgashinna trail view 2",
                        caption: "A serene hiking experience",
                        title: "Idalgashinna - Tranquility",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Idalgashinna Hike offers a serene journey through lush tea plantations and misty landscapes. It&apos;s a perfect trail for those seeking tranquility and natural beauty.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ideal for photography enthusiasts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Gentle slopes suitable for all skill levels
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horton Plains National Park */}
            <Card>
              <CardHeader>
                <CardTitle>3. Horton Plains National Park</CardTitle>
                <CardDescription>Home to World&apos;s End and Baker&apos;s Falls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                       {
                        src: "/Hortonplains16.jpeg",
                        alt: "Horton Plains view 1",
                        caption: "World&apos;s End viewpoint",
                        title: "Horton Plains - Majestic Views",
                      },
                      {
                       src: "/Hortonplains15.jpeg",
                        alt: "Horton Plains view 2",
                        caption: "Baker&apos;s Falls in full flow",
                        title: "Horton Plains - Nature&apos;s Wonder",
                      },
                      {
                        src: "/Hortonplains12.jpeg",
                        alt: "Horton Plains view 1",
                        caption: "World&apos;s End viewpoint",
                        title: "Horton Plains - Majestic Views",
                      },
                      {
                       src: "/Hortonplains1.jpeg",
                        alt: "Horton Plains view 2",
                        caption: "Baker&apos;s Falls in full flow",
                        title: "Horton Plains - Nature&apos;s Wonder",
                      },
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Horton Plains National Park is a UNESCO World Heritage Site known for its stunning landscapes, diverse wildlife, and iconic attractions like World&apos;s End and Baker&apos;s Falls.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular views from World&apos;s End
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        A haven for birdwatchers and nature lovers
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Places */}
        <section id="nearby-places" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Places to Explore</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Extend your Ohiya adventure with these incredible destinations within easy reach
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Haputale Card */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Haputhale.jpeg"
                  alt="Haputale charming hill town with panoramic views and tea estates"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  15 km from Ohiya
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Haputale</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Charming hill town known for panoramic views, tea estates, and the famous Lipton's Seat viewpoint.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  15 km from Ohiya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/haputhale" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Pattipola Card */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Pattipola.jpg"
                  alt="Pattipola highest railway station in Sri Lanka with scenic mountain views"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  8 km from Ohiya
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Pattipola</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Home to Sri Lanka's highest railway station, offering scenic train journeys and quaint mountain village charm.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  8 km from Ohiya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pattipola" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Ambewela Card */}
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/New-Zealand-Farm.jpg"
                  alt="Ambewela Little New Zealand with dairy farms and lush green landscapes"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  10 km from Ohiya
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Ambewela</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Often called "Little New Zealand," this picturesque area is famous for dairy farms and lush greenery.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  10 km from Ohiya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/ambewela" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>        
      </div>
    </main>
  );
}