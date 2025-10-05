import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hummanaya Blowhole</h1>
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
      </div>
    </main>
  );
}