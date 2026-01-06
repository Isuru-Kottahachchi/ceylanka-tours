import type { Metadata } from "next";
import Image from "next/image";
import { Clock, MapPin, CheckCircle, Star, Calendar, TreePine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Kalabokka Sri Lanka: Complete Guide 2025 | Hidden Gem in the Highlands",
  description:
    "Explore Kalabokka, a serene destination in Sri Lanka's central highlands. Discover tea plantations, breathtaking views, and tranquil nature trails.",
  keywords:
    "Kalabokka, Sri Lanka highlands, tea plantations, nature trails, scenic views, off-the-beaten-path, eco-tourism",
  openGraph: {
    title: "Kalabokka: Complete Guide 2025",
    description: "Your ultimate guide to Sri Lanka's hidden highland gem",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
};

export default function KalabokkaTravelGuide() {
  return (
    <main className="min-h-screen bg-background max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Kalabokka.jpg"
          alt="Panoramic view of Kalabokka with lush tea plantations and misty mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kalabokka</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Hidden Highland Gem</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Central Province, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-1" />
              Scenic Tea Trails
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-1" />
              Year-Round Tranquility
            </Badge>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kalabokka: A Tranquil Escape in the Highlands</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="text-lg mb-4">
            Nestled in the heart of Sri Lanka&apos;s central highlands, Kalabokka is a serene destination that offers a perfect
            blend of natural beauty and cultural heritage. Known for its lush tea plantations, misty mountain views, and
            tranquil nature trails, Kalabokka is a hidden gem waiting to be explored.
          </p>
          <p className="text-lg">
            Whether you&apos;re a nature enthusiast, a photography lover, or someone seeking a peaceful retreat, Kalabokka has
            something for everyone. From hiking through verdant landscapes to sipping freshly brewed tea while enjoying
            panoramic vistas, this highland paradise promises an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Essential Kalabokka Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>
                    <strong>Location:</strong> Central Highlands, near Matale
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Famous for:</strong> Tea plantations and scenic views
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
                    <strong>Ideal Stay:</strong> 2-3 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500" />
                  <span>
                    <strong>Must-See:</strong> Kalabokka Viewpoint
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    <strong>Activities:</strong> Hiking, tea tasting, photography
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
            <CardTitle className="text-green-800">Discover the Serenity of Kalabokka</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Kalabokka is more than just a destination; it&apos;s an experience that rejuvenates the soul. Whether you&apos;re
              exploring the lush tea estates, hiking to breathtaking viewpoints, or simply soaking in the tranquility of
              the highlands, Kalabokka offers a unique escape from the hustle and bustle of everyday life.
            </p>
            <p className="text-muted-foreground mb-4">
              Plan your visit to Kalabokka and discover why this hidden gem is quickly becoming a favorite among travelers
              seeking authentic and serene experiences in Sri Lanka&apos;s highlands.
            </p>
            <p className="text-muted-foreground font-medium">Your highland adventure awaits! 🌄🍃</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
