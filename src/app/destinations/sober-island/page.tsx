import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Anchor, Ship, Castle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export const metadata: Metadata = {
  title: "Sober Island Trincomalee | Historic Naval Base & Cultural Heritage | Complete Guide 2025",
  description: "Explore Sober Island in Trincomalee, a historic naval fortress with Portuguese, Dutch, and British heritage. Discover military history, scenic views, and maritime attractions.",
  keywords: "Sober Island, Trincomalee harbor, Sri Lanka naval base, Portuguese fort, Dutch heritage, British naval history, maritime tourism",
  openGraph: {
    title: "Sober Island: Historic Naval Base of Trincomalee",
    description: "Discover the strategic maritime fortress with centuries of colonial history",
    type: "article",
    images: ["/sober-island-aerial.jpg"],
  },
}

export default function SoberIslandPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Sober-Island.jpg"
          alt="Aerial view of Sober Island in Trincomalee Harbor with historic fortifications"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sober Island</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Historic Naval Fortress of Trincomalee</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <MapPin className="w-4 h-4 mr-1" />
              Eastern Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Ship className="w-4 h-4 mr-1" />
              Naval Heritage
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-orange-600/80 text-white border-orange-500">
              <Castle className="w-4 h-4 mr-1" />
              Colonial History
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#colonial-history" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Colonial History</a>
          <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Attractions</a>
          <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visiting Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Sober Island: Guardian of Trincomalee Harbor</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Sober Island stands as a silent sentinel in Trincomalee&apos;s natural harbor, one of the world&apos;s finest 
              deep-water ports. This strategic island fortress has witnessed centuries of naval history, serving 
              as a crucial military installation for Portuguese, Dutch, French, and British forces who recognized 
              its vital importance in controlling the Indian Ocean trade routes.
            </p>
            <p className="text-lg">
              Today, while still maintaining its role as a Sri Lankan naval base, Sober Island offers visitors 
              a unique glimpse into maritime history. Its well-preserved fortifications, colonial buildings, and 
              scenic coastal views tell the story of centuries of seafaring and strategic significance in the 
              Indian Ocean region.
            </p>
          </div>
        </section>

        {/* Quick Facts & Historical Timeline */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 scroll-mt-40" id="quick-facts">
          {/* Quick Facts */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Sober Island Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Location:</strong> Trincomalee Harbor, Eastern Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ship className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Current Use:</strong> Sri Lankan Naval Base
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Castle className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Historical Period:</strong> 16th-20th century fortifications
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Strategic Value:</strong> Deep-water harbor defense
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Historical Timeline */}
          <section className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Colonial Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-[100px]">1623:</span>
                    <span>Portuguese establish first fortifications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-[100px]">1639:</span>
                    <span>Dutch capture and expand defenses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-[100px]">1782:</span>
                    <span>British take control during Anglo-Dutch War</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold min-w-[100px]">1942:</span>
                    <span>Major WWII naval base development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Colonial History */}
        <section className="mb-16" id="colonial-history">
          <h2 className="text-3xl font-bold mb-8">Colonial Heritage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Portuguese & Dutch Period */}
            <Card>
              <CardHeader>
                <CardTitle>Portuguese & Dutch Era</CardTitle>
                <CardDescription>16th-18th Century</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/sober-island-dutch-fort.jpg"
                    alt="Historic Dutch fortifications on Sober Island"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    The Portuguese first recognized Sober Island&apos;s strategic value in the early 1600s, establishing
                    initial fortifications to protect their trade interests. The Dutch later expanded these defenses 
                    significantly, building sophisticated gun batteries and military installations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Original gun placements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Dutch-era buildings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Historic water cisterns</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* British Period */}
            <Card>
              <CardHeader>
                <CardTitle>British Naval Base</CardTitle>
                <CardDescription>18th-20th Century</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="/sober-island-british-base.jpg"
                    alt="British colonial buildings on Sober Island"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    Under British rule, Sober Island became a major naval installation, particularly during World War II 
                    when it served as a crucial Allied base in the Indian Ocean. The British expanded the infrastructure 
                    significantly, adding modern facilities and defenses.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Victorian architecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>WWII bunkers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Naval workshops</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Attractions */}
        <section className="mb-16" id="attractions">
          <h2 className="text-3xl font-bold mb-8">Must-See Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Fortifications */}
            <Card>
              <CardHeader>
                <CardTitle>Historic Fortifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Colonial era gun batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Defensive walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Watch towers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Naval Heritage */}
            <Card>
              <CardHeader>
                <CardTitle>Maritime Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Historic dock yards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Naval workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Signal station</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Natural Features */}
            <Card>
              <CardHeader>
                <CardTitle>Natural Beauty</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Panoramic harbor views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Coastal cliffs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Marine wildlife</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-16" id="visiting-guide">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Visitor Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Access Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Navy permission required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Guided tours only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Advance booking needed</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Visit Planning</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Best visited during morning hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Photography restrictions apply</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span>Bring valid identification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">Essential Tips</h2>
                <div className="max-w-3xl mx-auto text-muted-foreground space-y-2">
                  <p>• Book your visit through Sri Lanka Navy or authorized tour operators</p>
                  <p>• Carry passport or national ID for security clearance</p>
                  <p>• Respect military installation rules and guidelines</p>
                  <p>• Wear comfortable walking shoes for exploring</p>
                  <p>• Best combined with visits to Fort Frederick and Trincomalee Harbor</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
