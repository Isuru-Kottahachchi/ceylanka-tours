import type { Metadata } from "next";
import Image from "next/image";
import { Clock, MapPin, CheckCircle, Star, Calendar, TreePine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Kanneliya Sri Lanka: Complete Guide 2025 | Biodiversity Hotspot",
  description:
    "Explore Kanneliya, a pristine rainforest in Sri Lanka. Discover its rich biodiversity, scenic trails, and serene waterfalls.",
  keywords:
    "Kanneliya, Sri Lanka rainforest, biodiversity, nature trails, waterfalls, eco-tourism, Sinharaja forest reserve",
  openGraph: {
    title: "Kanneliya: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's lush rainforest escape",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
};

export default function KanneliyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kanneliya.jpg"
          alt="Lush greenery and waterfalls in Kanneliya rainforest"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kanneliya</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Biodiversity Hotspot</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Southern Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Rainforest Reserve
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Year-Round Adventure
            </Badge>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kanneliya: A Rainforest Paradise</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="text-lg mb-4">
            Kanneliya, located in Sri Lanka's Southern Province, is a pristine rainforest that forms part of the Kanneliya-Dediyagala-Nakiyadeniya (KDN) forest complex. Recognized as a UNESCO Biosphere Reserve, Kanneliya is a biodiversity hotspot teeming with endemic flora and fauna. This lush rainforest offers a tranquil escape into nature, with scenic trails, cascading waterfalls, and a serene atmosphere.
          </p>
          <p className="text-lg">
            Whether you're a nature enthusiast, a birdwatcher, or simply seeking a peaceful retreat, Kanneliya has something to offer. From exploring its rich biodiversity to enjoying the soothing sounds of its waterfalls, this rainforest paradise is a must-visit destination for eco-tourism in Sri Lanka.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Essential Kanneliya Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>
                    <strong>Location:</strong> Southern Province, near Galle
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Famous for:</strong> Biodiversity and waterfalls
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span>
                    <strong>Best Time to Visit:</strong> November to April
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span>
                    <strong>Ideal Stay:</strong> 1-2 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500" />
                  <span>
                    <strong>Must-See:</strong> Anagimale Falls, Giant Nawada Tree
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    <strong>Activities:</strong> Hiking, birdwatching, photography
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final Section */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Discover the Wonders of Kanneliya</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Kanneliya is more than just a rainforest; it's a living testament to Sri Lanka's incredible biodiversity. Whether you're trekking through its lush trails, marveling at its cascading waterfalls, or spotting rare bird species, Kanneliya offers an unforgettable experience for nature lovers.
            </p>
            <p className="text-muted-foreground mb-4">
              Plan your visit to Kanneliya and immerse yourself in the beauty and tranquility of one of Sri Lanka's most treasured natural wonders.
            </p>
            <p className="text-muted-foreground font-medium">Your rainforest adventure awaits! 🌿🌊</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
