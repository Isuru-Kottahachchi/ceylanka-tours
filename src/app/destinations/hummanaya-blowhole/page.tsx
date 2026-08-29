import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";


export default function HummanayaBlowholeGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/HummanayaBlowhole.jpeg"
          alt="Hummanaya Blowhole spraying water high above the rocky coast"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Hummanaya Blowhole</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka’s Roaring Natural Wonder</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              Southern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              Blowhole
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              Natural Phenomenon
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Hummanaya: The Only Blowhole in Sri Lanka</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Hummanaya is a spectacular natural blowhole located near Dikwella on Sri Lanka’s southern coast. It’s the only known blowhole in the country and the second largest in all of Asia! When the ocean waves crash into the rocky shore, water is forced through a narrow crevice, shooting a powerful jet of spray up to 25 meters (82 feet) into the air. The sound is thunderous, and the sight is unforgettable.
            </p>
            <p className="text-lg mb-4">
              The name “Hummanaya” comes from the Sinhala word “humana,” meaning “to make a noise.” True to its name, you’ll hear the blowhole’s deep roar long before you see the water burst skyward. It’s a favorite stop for travelers seeking a unique natural wonder and a bit of coastal adventure.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mb-4">
              <li><strong>Height of the spray:</strong> Up to 25 meters (82 feet) on a good day</li>
              <li><strong>Best time to visit:</strong> During the southwest monsoon (May–September) when the sea is roughest</li>
              <li><strong>Fun fact:</strong> Hummanaya is one of only a handful of blowholes in the world!</li>
              <li><strong>Local legend:</strong> Some villagers believe the blowhole is guarded by a sea spirit who “breathes” through the rocks, protecting the coast from danger.</li>
            </ul>
            <p className="text-lg">
              Whether you’re a nature lover, a photographer, or just curious, Hummanaya promises a thrilling experience you won’t find anywhere else in Sri Lanka.
            </p>
          </div>
        </section>

        {/* How to Get In Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                How to Get to Hummanaya Blowhole
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Hummanaya is located about 1.1 km from the small fishing village of Kudawella, near Dikwella town in the Southern Province.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>
                    <strong>By Car or Tuk-Tuk:</strong> The easiest way is to hire a tuk-tuk or drive from Dikwella (about 5 km away). There’s a small parking area near the entrance.
                  </li>
                  <li>
                    <strong>By Bus:</strong> Take a bus to Dikwella from Matara or Tangalle, then a tuk-tuk to Kudawella village.
                  </li>
                  <li>
                    <strong>On Foot:</strong> From the entrance, it’s a short, scenic walk along a marked path to the viewing platform.
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Tip:</strong> Visit during high tide or just after a storm for the most dramatic sprays. Bring a raincoat or poncho—if you stand close, you might get soaked!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interesting Facts Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                Fascinating Facts & Local Legends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-muted-foreground mb-4">
                <li>
                  <strong>Rare Wonder:</strong> Hummanaya is the only blowhole in Sri Lanka and one of the largest in the world.
                </li>
                <li>
                  <strong>Natural Power:</strong> The force of the spray depends on the strength of the waves and the tide. Sometimes, the sound can be heard over a kilometer away!
                </li>
                <li>
                  <strong>Community Pride:</strong> The local community has built a small visitor center and viewing platform to help protect the site and share its story.
                </li>
                <li>
                  <strong>Mythical Guardian:</strong> Some say the blowhole is watched over by a sea spirit who brings good luck to fishermen.
                </li>
                <li>
                  <strong>Great for Photos:</strong> The best photos are taken with the sun behind you and the ocean spray lit up against the blue sky.
                </li>
              </ul>
              <p>
                Hummanaya is a place where nature’s power and local legend come together. Don’t miss this unique stop on your Sri Lankan adventure!
              </p>
            </CardContent>
          </Card>
        </section>
        
        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Pair your visit to Hummanaya with these nearby destinations along the southern coast.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Hirikatiya.jpg"
                  alt="Hirikatiya Beach with surfers and palm trees"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  10 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Hirikatiya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A calm bay beach popular with surfers of all levels. Laid-back vibe with beachfront cafes just minutes from Dikwella.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 5 km from Hummanaya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/hirikatiya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Blue-beach.jpg"
                  alt="Nilwella Blue Beach with clear turquoise water"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  15 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Nilwella Blue Beach</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A quiet rocky beach known for campfires and clear blue water. Great for swimming and snorkelling away from the crowds.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 8 km from Hummanaya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/nilwella-blue-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Waligama.jpg"
                  alt="Weligama Bay with stilt fishermen"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  25 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Weligama</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A wide sheltered bay ideal for beginner surfing. Famous for its stilt fishermen and fresh seafood along the waterfront.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 15 km from Hummanaya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/waligama" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Mirissa1.jpg"
                  alt="Mirissa Beach with palm trees and golden sand"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  30 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Mirissa</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  One of the south coast's most popular beaches. Known for whale watching from November to April and a lively strip of restaurants.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 20 km from Hummanaya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/mirissa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Kanneliya.jpg"
                  alt="Kanneliya rainforest canopy"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1.5 hours
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Kanneliya</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Part of the Kanneliya-Dediyagala-Nakiyadeniya biosphere reserve. A dense rainforest full of rare birds, reptiles, and towering trees.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 65 km from Hummanaya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kanneliya" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/Thalpe-beach.jpg"
                  alt="Thalpe Beach coral wells and golden sand with turquoise water"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  55 mins
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Thalpe Beach</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A quiet beach south of Galle with unique coral wells, natural pools formed in the reef. Good for swimming at low tide and enjoying seafood.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 50 km from Hummanaya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src="/jungle-beach.jpeg"
                  alt="Jungle Beach Roomassala with lush greenery and clear water"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  1 hour
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Jungle Beach Roomassala</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A secluded beach tucked at the end of a forested peninsula near Galle. Clear water, calm waves, and a relaxed atmosphere.
                </p>
                <div className="flex items-center text-xs text-blue-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nearly 55 km from Hummanaya
                </div>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/jungle-beach-roomassala" passHref legacyBehavior>
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