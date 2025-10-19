import type { Metadata } from "next"
import Image from "next/image"
import {
  Clock,
  MapPin,
  CheckCircle,
  Star,
  Footprints,
  Mountain,
  History,
  Skull,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Balangoda Man Archaeological Sites | Prehistoric Human Settlements in Sri Lanka",
  description:
    "Discover the fascinating prehistoric caves and archaeological sites of Balangoda, home to 'Balangoda Man' (Homo sapiens balangodensis) dating back 30,000 years. Explore ancient human settlements, tools, and cultural artifacts.",
  keywords:
    "Balangoda Man, prehistoric caves Sri Lanka, Fa Hien Cave, Batadomba Cave, ancient human settlements, Stone Age Sri Lanka, archaeological sites Balangoda, Homo sapiens balangodensis, prehistoric tools, cave paintings",
  openGraph: {
    title: "Balangoda Prehistoric Sites: Cradle of Early Human Settlement in Sri Lanka",
    description: "Journey through 30,000 years of human history in the prehistoric caves of Balangoda",
    type: "article",
    images: ["/Balangoda-archaeological.jpg"],
  },
}

export default function BalangodaPrehistoricSites() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Balangoda-archaeological.jpg"
          alt="Ancient cave settlements in Balangoda where prehistoric humans lived"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Balangoda Prehistoric Sites</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light leading-relaxed">
            Journey Through 30,000 Years of Human History
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <History className="w-4 h-4 mr-2" />
              30,000+ Years of History
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Skull className="w-4 h-4 mr-2" />
              Homo sapiens balangodensis
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Skull className="w-4 h-4 mr-2" />
              Stone Age Tools & Artifacts
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">The Cradle of Early Human Settlement in Sri Lanka</h2>
          <div className="prose prose-xl max-w-none text-muted-foreground">
            <p className="text-xl mb-6 leading-relaxed">
              In the misty highlands of Balangoda lies one of South Asia&apos;s most significant prehistoric discoveries - the
              remains of ancient human settlements that have revolutionized our understanding of early human civilization
              in the region. These caves and archaeological sites are home to the famous &quot;Balangoda Man&quot; (Homo sapiens
              balangodensis), who lived here over 30,000 years ago.
            </p>
            <p className="text-lg mb-6">
              The prehistoric humans of Balangoda weren&apos;t just survivors; they were innovators who developed sophisticated
              tools, created intricate cave art, and established complex social structures. Their legacy is preserved in
              the numerous caves and archaeological sites scattered throughout the region, each telling a unique story of
              human ingenuity and adaptation.
            </p>
            <p className="text-lg">
              These sites represent some of the earliest evidence of human habitation in South Asia, providing invaluable
              insights into the lives, culture, and technologies of our ancient ancestors. From stone tools to burial
              practices, from ancient artwork to food remains, every discovery here adds another piece to the fascinating
              puzzle of human evolution and migration.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-16">
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                <Star className="w-6 h-6 text-yellow-500" />
                Essential Information About Balangoda Prehistoric Sites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-3">Historical Significance</h4>
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Age:</strong> 30,000+ years old
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Skull className="w-5 h-5 text-purple-500" />
                    <span>
                      <strong>Human Species:</strong> Homo sapiens balangodensis
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Skull className="w-5 h-5 text-orange-500" />
                    <span>
                      <strong>Artifacts:</strong> Stone tools, pottery, ornaments
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-green-700 dark:text-green-300 mb-3">Location & Access</h4>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Region:</strong> Sabaragamuwa Province
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-red-500" />
                    <span>
                      <strong>Terrain:</strong> Mountainous, cave networks
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>
                      <strong>Visit Duration:</strong> 3-4 hours per site
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-3">Visitor Information</h4>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>
                      <strong>Best Time:</strong> Year-round access
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Footprints className="w-5 h-5 text-green-500" />
                    <span>
                      <strong>Guide Required:</strong> Yes, for cave exploration
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Major Cave Sites */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Major Prehistoric Cave Sites</h2>
          <div className="space-y-12">
            

            {/* Batadomba Cave */}
            <Card className="overflow-hidden border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                <CardTitle className="text-2xl text-blue-800 dark:text-blue-300">Batadomba Cave</CardTitle>
                <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
                  Rich in prehistoric artifacts and human remains
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/Batadomba-Lena.jpg"
                    alt="Batadomba Cave showing archaeological excavation site"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Batadomba Cave has provided some of the most significant insights into the life of prehistoric
                      humans in Sri Lanka. The site has revealed multiple phases of human occupation, with the earliest
                      dating back approximately 31,000 years. The cave is particularly notable for its well-preserved
                      human remains and sophisticated stone tools.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Archaeological excavations have uncovered evidence of advanced tool-making techniques, suggesting
                      that the inhabitants were highly skilled craftsmen. The cave also contains evidence of ancient
                      burial practices, providing valuable insights into the spiritual and cultural lives of our
                      ancestors.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Notable Findings:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Human Burials:</strong> Multiple skeletal remains with burial goods
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Stone Tools:</strong> Advanced microlith technology
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Cave Art:</strong> Primitive markings and symbols
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Animal Remains:</strong> Evidence of hunting practices
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Belilena Cave */}
            <Card className="overflow-hidden border-2 border-emerald-200">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
                <CardTitle className="text-2xl text-emerald-800 dark:text-emerald-300">Belilena Cave</CardTitle>
                <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
                  One of Sri Lanka&apos;s largest prehistoric cave complexes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Belilena Cave, located near Kitulgala, is one of the largest and most important prehistoric cave sites 
                      in Sri Lanka. The cave has revealed amazing discoveries from our ancient past, with human settlements 
                      dating back over 32,000 years. Its huge main chamber served as a comfortable home for early humans, 
                      protecting them from the weather and wild animals.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Scientists have found many exciting things here, like old tools, jewelry made from seashells, and 
                      leftover food from ancient meals. These findings help us understand how our ancestors lived, what 
                      they ate, and how they made their tools. The cave also shows that these early people were quite 
                      clever - they knew how to use different materials to make tools and even traded with people living 
                      near the coast.
                    </p>

                    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border border-emerald-200 dark:border-emerald-700">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Amazing Discoveries:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Ancient Tools:</strong> Stone tools and hunting equipment from 32,000 years ago
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Shell Jewelry:</strong> Beautiful ornaments made from seashells
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Food Evidence:</strong> Remains of ancient meals showing what they ate
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Living Areas:</strong> Well-preserved living spaces and fire pits
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/Beli-Lena.webp"
                    alt="Belilena Cave showing the impressive entrance and archaeological excavation areas"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Kuragala Cave */}
            <Card className="overflow-hidden border-2 border-violet-200">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950">
                <CardTitle className="text-2xl text-violet-800 dark:text-violet-300">Kuragala Cave</CardTitle>
                <CardDescription className="text-lg text-violet-600 dark:text-violet-400">
                  Ancient cave dwelling with both prehistoric and religious significance
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Image
                    src="/kuragala-cave.jpg"
                    alt="Kuragala Cave showing its unique rock formation and religious monuments"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Kuragala Cave is a special place that tells two interesting stories: one about very old human 
                      settlements and another about religious history. The cave sits high up on a rocky hill, giving 
                      amazing views of the surrounding area. Long ago, prehistoric humans used this cave as their home, 
                      leaving behind tools and other items that help us learn about their daily life.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What makes Kuragala really interesting is how it shows different periods of Sri Lanka&apos;s history. 
                      After the prehistoric people lived here, it became an important religious place. Today, you can 
                      see both old human tools and religious artifacts in the same place, making it a unique site that 
                      connects Sri Lanka&apos;s ancient past with its more recent history.
                    </p>

                    <div className="bg-violet-50 dark:bg-violet-950/30 p-6 rounded-lg border border-violet-200 dark:border-violet-700">
                      <h4 className="font-semibold text-violet-800 dark:text-violet-300 mb-3">Site Highlights:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Location:</strong> Perched on a scenic hilltop with panoramic views
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Prehistoric Finds:</strong> Stone tools and early human artifacts
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Religious Heritage:</strong> Ancient inscriptions and religious monuments
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Natural Features:</strong> Unique rock formations and cave systems
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Fa Hien Cave */}
            <Card className="overflow-hidden border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
                <CardTitle className="text-2xl text-orange-800 dark:text-orange-300">Fa Hien Cave / Pahiyangala</CardTitle>
                <CardDescription className="text-lg text-orange-600 dark:text-orange-400">
                  The oldest recorded prehistoric human settlement in Sri Lanka
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Fa Hien Cave, also known as Pahiyangala, stands as one of South Asia&apos;s most important prehistoric
                      sites. Carbon dating has revealed human habitation here dating back over 37,000 years, making it
                      one of the oldest archaeological sites in Sri Lanka. The cave has yielded remarkable discoveries,
                      including human remains, tools, and evidence of early human culture.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The cave system is massive, with the main chamber reaching heights of over 175 feet. Archaeological
                      excavations have uncovered multiple layers of human occupation, each telling its own story of how
                      our ancestors lived, hunted, and evolved over tens of thousands of years.
                    </p>

                    <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Key Discoveries:</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Human Remains:</strong> Skeletal remains dating back 37,000 years
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Tools:</strong> Geometric microliths and bone tools
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Ornaments:</strong> Beads made from marine shells
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            <strong>Food Remains:</strong> Evidence of hunting and gathering
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image
                    src="/fahien-cave.jpg"
                    alt="Fa Hien Cave entrance showing the massive archaeological site"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Balangoda Man */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">The Balangoda Man: Sri Lanka&apos;s Prehistoric Human</h2>
          <Card className="border-2 border-green-200">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Physical Characteristics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Balangoda Man (Homo sapiens balangodensis) represents a distinct group of prehistoric humans who
                    inhabited Sri Lanka. They were robust people, standing approximately 174 cm tall for males and 166 cm
                    for females, with thick skull bones and prominent brow ridges. Their teeth were larger than those of
                    modern humans, suggesting a diet that required heavy chewing.
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Physical Traits:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Robust skeletal structure</li>
                      <li>• Strong muscular attachments</li>
                      <li>• Large teeth with thick enamel</li>
                      <li>• Pronounced brow ridges</li>
                      <li>• Broad facial features</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Cultural Achievements</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These early humans were remarkably advanced for their time, developing sophisticated tools and
                    possessing complex social structures. They created geometric microliths - small stone tools that
                    could be used for various purposes - and showed evidence of symbolic behavior through their use of
                    ochre and the creation of personal ornaments.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Cultural Elements:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Advanced tool-making techniques</li>
                      <li>• Use of bone tools</li>
                      <li>• Shell bead ornaments</li>
                      <li>• Ochre use for decoration</li>
                      <li>• Structured burial practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visiting Information */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Planning Your Visit</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Essential Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Getting There</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Located in Sabaragamuwa Province</li>
                    <li>• Accessible from Balangoda town</li>
                    <li>• Private transport recommended</li>
                    <li>• Local guide necessary for cave visits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Best Time to Visit</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Year-round accessibility</li>
                    <li>• Early morning visits recommended</li>
                    <li>• Avoid heavy rain seasons</li>
                    <li>• 2-3 days needed for all sites</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl">Visitor Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">What to Bring</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comfortable walking shoes</li>
                    <li>• Water and snacks</li>
                    <li>• Camera (permission required)</li>
                    <li>• Lightweight clothing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Important Notes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Respect archaeological sites</li>
                    <li>• No touching artifacts</li>
                    <li>• Stay with your guide</li>
                    <li>• Follow safety instructions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Did You Know? */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Did You Know?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-2xl">Fascinating Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-lg">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>Balangoda Man used advanced tools 40,000 years before the invention of agriculture!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>They created the world&apos;s earliest known geometric microliths (tiny stone tools).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>Evidence shows they traded with coastal communities over 30,000 years ago.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>Some cave paintings in the region may be over 20,000 years old.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Archaeological Discoveries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <History className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Scientists found evidence of ancient herbal medicine use in the caves.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <History className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Shell beads found here are among Asia&apos;s oldest personal ornaments.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <History className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span>The caves preserved ancient plant remains, showing what people ate 30,000 years ago.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <History className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Multiple human generations used these caves continuously for thousands of years.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Cave Sites */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10">Other Important Cave Sites</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl">Beli Lena Cave</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Beli Lena is a crucial prehistoric site that has yielded human remains dating back to 32,000 years ago. 
                  The cave contains evidence of advanced tool-making and early human adaptation to Sri Lanka&apos;s wet-zone 
                  environment.
                </p>
                <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Multiple burial sites</li>
                    <li>• Well-preserved stone tools</li>
                    <li>• Ancient food remains</li>
                    <li>• Evidence of fire use</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl">Ravana Cave</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  While famous in mythology, Ravana Cave also holds archaeological significance. Recent studies have 
                  revealed evidence of prehistoric human habitation, though not as extensive as other sites in the region.
                </p>
                <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">Notable Aspects:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mythological significance</li>
                    <li>• Stone age artifacts</li>
                    <li>• Natural rock formations</li>
                    <li>• Cultural heritage site</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conservation Message */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">Preserving Our Prehistoric Heritage</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  These archaeological sites are invaluable windows into our past. Help protect them by following
                  guidelines, respecting the sites, and supporting conservation efforts. Together, we can ensure these
                  prehistoric treasures remain for future generations to study and appreciate.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
