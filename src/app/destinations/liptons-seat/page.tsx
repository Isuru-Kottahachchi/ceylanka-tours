import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Landmark, Coffee } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Lipton's Seat Sri Lanka: History & Travel Guide 2025 | Tea Country Icon",
  description:
    "Explore Lipton's Seat, the legendary viewpoint in Sri Lanka's tea country. Discover the story of Sir Thomas Lipton, the Scottish tea baron, and plan your visit to this breathtaking hilltop destination.",
  keywords:
    "Lipton's Seat Sri Lanka, Sir Thomas Lipton, tea country, Haputale, Dambatenne, Sri Lanka travel, hill country, tea plantations, scenic views",
  openGraph: {
    title: "Lipton's Seat Sri Lanka: History & Travel Guide 2025",
    description: "Discover Lipton's Seat, its history, and the legacy of Sir Thomas Lipton in Sri Lanka's tea country.",
    type: "article",
    images: ["/Lipton-seat.jpg"],
  },
}

export default function LiptonsSeatPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Lipton-seat.jpg"
          alt="Panoramic view from Lipton&apos;s Seat overlooking tea estates in Haputale, Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lipton&apos;s Seat</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&rsquo;s Legendary Tea Country Viewpoint</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-1" />
              Haputale
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Landmark className="w-4 h-4 mr-1" />
              Dambatenne Estate
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Coffee className="w-4 h-4 mr-1" />
              Tea Plantations
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#history" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">History</a>
          <a href="#viewpoint" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">The Viewpoint</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-40" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Lipton's Seat: The Crown of Sri Lanka’s Tea Country</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Lipton&apos;s Seat is a world-famous viewpoint perched high above the emerald tea fields of Haputale, in Sri Lanka&rsquo;s central highlands. From this iconic spot, you can gaze across rolling plantations, misty valleys, and distant peaks—just as Sir Thomas Lipton did over a century ago.
            </p>
            <p className="text-lg">
              Whether you&rsquo;re a nature lover, history buff, or tea enthusiast, Lipton&apos;s Seat offers a unique blend of breathtaking scenery and fascinating heritage. It&rsquo;s a must-visit for anyone exploring the island&rsquo;s hill country.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-12 scroll-mt-40" id="history">
          <h2 className="text-2xl font-bold mb-4 text-foreground">The Story of Sir Thomas Lipton & His Tea Empire</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p>
              Lipton&apos;s Seat is named after Sir Thomas Lipton, the Scottish tea magnate who revolutionized the global tea trade. Arriving in Sri Lanka (then Ceylon) in the late 19th century, Lipton purchased vast tracts of land in Haputale and established the Dambatenne Tea Estate. His vision was simple: to bring high-quality Ceylon tea directly to the world, making it affordable and accessible for all.
            </p>
            <p>
              Sir Thomas Lipton was known for his hands-on approach. He would often climb to this very spot—now called Lipton&apos;s Seat—to survey his flourishing plantations and chat with estate workers. His legacy lives on in the Lipton tea brand, which remains a household name worldwide.
            </p>
            <ul>
              <li><strong>Born:</strong> Glasgow, Scotland, 1848</li>
              <li><strong>Founded:</strong> Dambatenne Tea Estate, 1890</li>
              <li><strong>Legacy:</strong> Pioneered direct-to-consumer tea sales, improving quality and affordability</li>
            </ul>
          </div>
        </section>

        {/* The Viewpoint Section */}
        <section className="mb-12 scroll-mt-40" id="viewpoint">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Lipton's Seat: A Panoramic Wonder</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p>
              The journey to Lipton&apos;s Seat is as memorable as the destination itself. Winding through lush tea gardens, you&rsquo;ll pass smiling tea pluckers and colonial-era factories before reaching the summit. On a clear day, the view stretches across five provinces, with dramatic vistas of tea estates, lakes, and distant mountains.
            </p>
            <p>
              Sunrise is especially magical here, as golden light spills over the misty hills. There&rsquo;s a statue of Sir Thomas Lipton at the viewpoint, commemorating his enduring connection to Sri Lanka&rsquo;s tea country.
            </p>
          </div>
        </section>

        {/* Visiting Guide Section */}
        <section className="mb-12 scroll-mt-40" id="visiting-guide">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Visit Lipton's Seat</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <ul>
              <li><strong>Location:</strong> Near Haputale, Badulla District, Sri Lanka</li>
              <li><strong>Best Time:</strong> Early morning for sunrise and clear views</li>
              <li><strong>Getting There:</strong> Scenic drive or tuk-tuk from Haputale; hike from Dambatenne Tea Factory (about 7 km)</li>
              <li><strong>Facilities:</strong> Small caf&eacute;, rest area, and statue of Sir Thomas Lipton</li>
              <li><strong>Tip:</strong> Combine your visit with a tour of the Dambatenne Tea Factory for a full tea country experience</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
