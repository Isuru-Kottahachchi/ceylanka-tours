import Image from "next/image";

const palaceImages = [
  "/Polonnaruwa2.jpeg",
  "/Polonnaruwa3.jpeg",
  "/PolonnaruwaVatadageya.jpg",
  "/Rankothvehera.jpeg"
];
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ParakkramabahuRoyalPalaceGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Polonnaruwa2.jpeg"
          alt="Ruins of Parakkramabahu Royal Palace in Polonnaruwa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Parakkramabahu Royal Palace</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">The Majestic Heart of Ancient Polonnaruwa</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Polonnaruwa
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              12th Century AD
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Image Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Image Gallery: Explore the Palace</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {palaceImages.map((img, idx) => (
              <div key={idx} className="relative h-56 w-full rounded-lg overflow-hidden shadow">
                <Image
                  src={img}
                  alt={`Parakkramabahu Royal Palace view ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </section>
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to the Royal Palace of King Parakkramabahu</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into the world of ancient kings at the Parakkramabahu Royal Palace, the grand centerpiece of Polonnaruwa&apos;s medieval city. Built by King Parakkramabahu I in the 12th century, this palace was once a magnificent seven-story building with over a thousand rooms, filled with royal courts, storerooms, and beautiful gardens. Today, its towering brick walls and mysterious ruins invite you to imagine the glory and secrets of Sri Lanka’s golden age.
            </p>
            <p className="text-lg mb-4">
              The palace complex was the heart of royal life. It included the king&apos;s audience hall, council chambers, and even a royal bath. The thick brick walls, some still standing over 10 meters high, show the skill and ambition of ancient Sri Lankan builders. Archaeologists believe the palace was once decorated with wooden pillars, tiled roofs, and colorful frescoes, making it a true wonder of its time.
            </p>
            <p className="text-lg mb-4">
              As you walk through the ruins, look for the grand staircase at the entrance and the stone carvings that decorate the site. Imagine the palace bustling with ministers, guards, and visitors from distant lands. The nearby Audience Hall, with its famous stone lions, is another highlight you shouldn&apos;t miss.
            </p>
            <p className="text-lg mb-4">
              The palace is surrounded by legends and stories. Some say it was so tall that its roof touched the clouds, while others believe secret tunnels still lie hidden beneath the ground. As you wander through the ancient halls, you&apos;ll feel the magic and power that once ruled this land.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mb-4">
              <li><strong>Don&apos;t Miss:</strong> The massive brick walls, the grand staircase, the Audience Hall with its lion statues, the royal bath, and the peaceful gardens around the ruins.</li>
              <li><strong>Royal Bath (Kumara Pokuna):</strong> This ancient bathing pool, located near the palace, was used by royalty and is beautifully designed with stone steps and a lotus shape.</li>
              <li><strong>Audience Hall:</strong> The king&apos;s council chamber is famous for its stone lions and carved pillars. Imagine royal meetings and important decisions happening here.</li>
              <li><strong>Best Time to Visit:</strong> Early morning or late afternoon, when the light is soft and the site is less crowded.</li>
              <li><strong>Photography Tip:</strong> The golden hour brings out the warm colors of the ancient bricks—perfect for memorable photos.</li>
              <li><strong>Wildlife:</strong> Look for monkeys, peacocks, and colorful birds that live among the ruins. The site is peaceful and full of nature&apos;s sounds.</li>
              <li><strong>Accessibility:</strong> The main paths are flat, but some areas have uneven stones. Wear comfortable shoes and bring water.</li>
            </ul>
            <p className="text-lg mb-4">
              Visiting the Parakkramabahu Royal Palace is like stepping into a living history book. Take your time, listen to the sounds of nature, and let your imagination bring the ancient kingdom back to life. Don&apos;t rush—every corner has a story!
            </p>
            <p className="text-lg">
              <strong>Practical Tips:</strong> The site can get hot, so bring a hat, sunscreen, and plenty of water. There are shaded areas to rest, and benches for relaxing. Local vendors sometimes sell fresh king coconut—a refreshing treat after exploring!
            </p>
          </div>
        </section>

  {/* How to Get In Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                How to Get to Parakkramabahu Royal Palace
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  The palace is located inside the main Polonnaruwa archaeological park, a UNESCO World Heritage Site. Here&apos;s how you can visit:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>
                    <strong>By Private Car or Taxi:</strong> The fastest and most comfortable way. From Colombo, it takes about 4-5 hours (216 km). You can also hire a taxi from Kandy or Dambulla.
                  </li>
                  <li>
                    <strong>By Train & Bus:</strong> Take a train from Colombo Fort to Habarana or Gal Oya Junction, then a local bus or tuk-tuk to Polonnaruwa. The journey is scenic and relaxing.
                  </li>
                  <li>
                    <strong>By Bus:</strong> Direct buses run from Colombo, Kandy, and other major cities. Buses are cheap and frequent, but can be crowded.
                  </li>
                  <li>
                    <strong>By Tour Package:</strong> Many travel agencies offer Cultural Triangle tours that include Polonnaruwa and the Royal Palace. This is a great way to learn from expert guides and travel hassle-free.
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    <strong>Tip:</strong> Buy your ticket at the main entrance. Renting a bicycle is a fun way to explore the vast ruins and see everything at your own pace!
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>Local Guide:</strong> Hiring a local guide at the entrance can make your visit much richer. Guides share stories, point out hidden details, and help you understand the palace&apos;s history in a fun way.
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>Facilities:</strong> There are restrooms and small shops near the entrance for snacks and drinks. Bring water, sunscreen, and a hat, as the site can get hot during midday.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

  {/* Beliefs & Legends Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                Myths and Mysteries of the Royal Palace
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  The Parakkramabahu Royal Palace is not just a marvel of ancient engineering it&apos;s also wrapped in fascinating stories, beliefs, and mysteries passed down through generations. Many visitors say the site has a special energy, especially at sunrise and sunset.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>
                    <strong>The 1,000 Rooms:</strong> Legend says the palace once had 1,000 rooms, though only a few remain today. Some believe secret tunnels and hidden chambers still lie beneath the ruins. Children in the area sometimes play hide-and-seek among the fallen bricks, hoping to find a secret passage.
                  </li>
                  <li>
                    <strong>King Parakkramabahus Wisdom:</strong> The king is famous for saying, “Not even a drop of water must flow to the sea without serving a purpose.” Many believe the palace&apos;s design and the nearby Parakrama Samudra reservoir reflect this deep respect for water and nature. Some locals leave flowers at the site to honor the king&apos;s vision.
                  </li>
                  <li>
                    <strong>Haunted by History:</strong> Some locals whisper that the palace is watched over by the spirits of ancient kings and royal guards, especially at dusk. Visitors sometimes feel a mysterious sense of awe and silence among the towering brick walls. It&apos;s said that if you listen closely, you might hear echoes of royal footsteps or distant music from ancient celebrations.
                  </li>
                  <li>
                    <strong>Royal Gardens:</strong> The palace was once surrounded by beautiful gardens and ponds. Some believe the gardens were enchanted, and that rare medicinal plants still grow in the area, protected by the spirits of the past.
                  </li>
                </ul>
                <p>
                  Whether you believe the legends or not, the palace&apos;s atmosphere is truly magical—especially in the golden light of early morning or late afternoon. Take a quiet moment to sit on the ancient steps, close your eyes, and imagine the palace in its full glory.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
