import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, CheckCircle, Star, Calendar, Users, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InsuranceBanner from '@/components/insurance-banner'

export const metadata: Metadata = {
  title: "Sigiriya Rock Fortress: Complete Travel Guide 2025 | Ancient Wonder of Sri Lanka",
  description:
    "Discover Sigiriya Rock Fortress, Sri Lankas ancient wonder. Complete travel guide with tips, photos, best time to visit, and everything you need to know for an amazing experience.",
  keywords: "Sigiriya, Rock Fortress, Sri Lanka travel, ancient ruins, UNESCO World Heritage, travel guide, tourism",
  authors: [{ name: "Travel Explorer" }],
  openGraph: {
    title: "Sigiriya Rock Fortress: Complete Travel Guide 2025",
    description: "Your ultimate guide to visiting Sigiriya Rock Fortress in Sri Lanka",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigiriya Rock Fortress: Complete Travel Guide 2025",
    description: "Your ultimate guide to visiting Sigiriya Rock Fortress in Sri Lanka",
  },
}


export default function SigiriyaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/SigiriyaDrone.jpg"
          alt="Majestic view of Sigiriya Rock Fortress rising from lush green landscape in Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sigiriya Rock Fortress</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Discover Sri Lanka&apos;s Ancient Wonder in the Sky</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Matale District, Sri Lanka
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Mountain className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              5th Century AD

            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Calendar className="w-4 h-4 mr-1" />
              8th Wonder of the World
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Sigiriya: The Lion Rock</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Imagine climbing to a palace in the clouds, built over 1,500 years ago! That&apos;s exactly what awaits you at
              Sigiriya Rock Fortress, one of Sri Lanka&apos;s most incredible ancient wonders. This massive rock formation
              rises 200 meters (660 feet) above the surrounding jungle, topped with the ruins of what was once a
              magnificent royal palace that housed the most powerful king of ancient Sri Lanka.
            </p>
            <p className="text-lg mb-4">
              Known locally as &quot;Sinhagiri&quot; (Lion Rock), Sigiriya is not just a tourist attraction it&apos;s a journey
              through time that will leave you breathless, both from the climb and the stunning views that await at the
              top! This incredible fortress-palace represents one of the most ambitious architectural projects ever
              attempted in the ancient world, combining military defense, royal luxury, and artistic beauty in ways
              that still amaze engineers and architects today.
            </p>
            <p className="text-lg mb-4">
              When you visit Sigiriya, you&apos;re not just climbing a rock - you&apos;re following in the footsteps of ancient
              kings, Buddhist monks, and countless pilgrims who have made this journey for over 1,500 years. Every step
              up the ancient staircases carved into the rock face brings you closer to understanding how remarkable
              ancient Sri Lankan civilization truly was.
            </p>
            <p className="text-lg">
              The climb to the top takes about 2-3 hours, but don&apos;t worry - there are plenty of rest stops along the
              way where you can catch your breath and learn about the amazing history of this place. Whether you&apos;re
              interested in ancient history, incredible views, or just want to experience one of the world&apos;s most
              unique archaeological sites, Sigiriya has something special waiting for you.
            </p>
          </div>

          {/* UK Travel Insurance Ad Banner */}
          <InsuranceBanner />

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Important Safety Notice</h4>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>Stay quiet during your climb:</strong> Hornets and bees live in the rock cracks and can become
                  aggressive if disturbed by loud noises. Speak softly and avoid sudden movements near the rock face.
                </p>

                <Link
                  href="/blog/how-to-save-from-bees-hornets-attack"
                  className="inline-block px-3 py-1 text-xs font-medium text-amber-700 bg-amber-300 rounded-full hover:bg-amber-200 transition-colors"
                >
                  🐝 Safety Tips: Hornet & Bee Attacks
                </Link>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>There can be strong winds:</strong> Be prepared for sudden gusts, especially near the summit.
                  Secure loose items and watch your step.
                </p>
                <p className="text-sm text-amber-700 mb-2">
                  <strong>Stay hydrated:</strong> Bring enough water for the climb, especially on hot days.
                </p>
                <p className="text-sm text-amber-700">
                  Local guides will show you safe areas to rest and take photos. Follow their instructions for a safe and
                  enjoyable experience.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts and Travel Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Quick Facts */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Quick Facts About Sigiriya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Built:</strong> 5th Century AD (477-495 AD)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Height:</strong> 200 meters (660 feet)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Built by:</strong> King Kashyapa I
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Location:</strong> Central Province, Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage Site (1982)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Climb Time:</strong> 1-3 hours round trip (depending on pace and fitness level)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Getting to Sigiriya from Colombo */}
          <section>
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2  text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5" />
                  How to Travel from Colombo to Sigiriya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Distance:</strong> 170km (105 miles)</li>
                      <li>• <strong>Duration:</strong> 3.5-4 hours</li>
                      <li>• <strong>Cost:</strong> $50-80 USD for day trip</li>
                      <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                    </ul>
                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                      <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                        <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylantours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Sigiriya. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                      </p>
                      <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                        <div className="flex items-center gap-2">
                          <span>📞</span>
                          <span><strong>Contact:</strong> +94 77 123 4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>✈️</span>
                          <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                            <strong>Airport Transfer Services</strong> - Click for details & booking
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Bus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Route:</strong> Colombo → Dambulla/Habarana → Sigiriya</li>
                      <li>• <strong>Duration:</strong> 4-5 hours total</li>
                      <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                      <li>• <strong>Note:</strong> Requires bus change in Dambulla or Habarana</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>💡 Pro Tip:</strong> Start early (6-7 AM) from Colombo to avoid traffic and reach Sigiriya before the midday heat.
                    Most visitors stay overnight in nearby Dambulla or Habarana for a more relaxed experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Fascinating Story Behind Sigiriya</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Image
                src="/SigiriyaView.jpg"
                alt="Ancient frescoes of Sigiriya showing beautiful celestial maidens painted on rock walls"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                The majestic view of Sigiriya from the surrounding landscape, showing how the rock fortress dominates the
                central plains of Sri Lanka. (Image by Polina Kocheva)
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The story of Sigiriya reads like a dramatic movie script filled with family betrayal, royal ambition,
                and ultimate tragedy! In the 5th century AD, Prince Kashyapa committed the ultimate crime - he killed
                his own father, King Dhatusena, to steal the throne from his younger brother Moggallana, who was the
                rightful heir according to royal tradition.
              </p>
              <p>
                After this terrible deed, Kashyapa knew his brother would return someday to seek revenge. So he made
                an incredible decision - instead of living in the traditional royal palace in Anuradhapura, he would
                build an completely new capital city on top of this massive rock, 200 meters high in the sky, where
                no army could easily reach him.
              </p>
              <p>
                For 18 amazing years (477-495 AD), Kashyapa ruled from his sky-high palace, complete with beautiful
                gardens, swimming pools carved from solid rock, and stunning wall paintings. He turned this natural
                rock formation into the most incredible fortress-palace the world had ever seen, using the most
                advanced engineering and artistic skills of ancient Sri Lanka.
              </p>
              <p>
                But the story has a tragic ending. In 495 AD, his brother Moggallana finally returned with a powerful
                army. During the final battle at the base of the rock, Kashyapa&apos;s war elephant suddenly turned back
                toward his own troops. His soldiers thought their king was retreating in fear, so they started running
                away too. Seeing his army abandon him and knowing he was defeated, the proud king took his own life
                rather than be captured.
              </p>
              <p>
                After the king died, nobody lived in his beautiful palace anymore. Later, Buddhist monks came and
                turned it into a quiet place where they could pray and meditate. The monks stayed there until the
                1400s. Today, people from all over the world visit Sigiriya because it shows how clever and skilled
                ancient builders were.
              </p>
              <h1>The forgotten rock fortress remained hidden in the jungle until British Army Major Jonathan Forbes stumbled upon it in 1831, sparking the first systematic archaeological studies that would eventually uncover the incredible secrets of King Kashyapa&apos;s ancient citadel.</h1>
            </div>
          </div>

          {/* Additional Historical Context */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Amazing Historical Facts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-blue-700">Engineering Marvels</h4>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• The water gardens still work after 1,500 years</li>
                  <li>• Rock carvings include a complex drainage system</li>
                  <li>• The spiral staircase was built without modern tools</li>
                  <li>• Royal pools were carved directly into solid rock</li>
                  <li>• The Mirror Wall was polished to reflect like glass</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-700">Cultural Significance</h4>
                <ul className="space-y-2 text-sm text-blue-600">
                  <li>• UNESCO World Heritage Site since 1982</li>
                  <li>• Called the &quot;8th Wonder of the World&quot; by many</li>
                  <li>• Influenced by both Indian and local Sri Lankan art</li>
                  <li>• Inspired architects and engineers for centuries</li>
                  <li>• Symbol of ancient Sri Lankan achievement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to See */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Youll See During Your Visit</h2>
          <div className="space-y-8">
            {/* Water Gardens */}
            <Card>
              <CardHeader>
                <CardTitle>1. The Water Gardens - Ancient Engineering Wonder</CardTitle>
                <CardDescription>1,500-year-old hydraulic systems that still work today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Waterfountainsinseegriya.jpg"
                    alt="Sigiriya water gardens showing ancient pools and fountains with geometric design"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Your amazing journey begins with the incredible water gardens at the base of Sigiriya Rock. These
                      1,500-year-old gardens are not just beautiful - they&apos;re working examples of ancient engineering
                      that would impress modern architects! The gardens show how smart King Kashyapa&apos;s engineers were,
                      creating a complex water system that still functions perfectly today.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Local legends say that King Kashyapa kept crocodiles in some of these pools as an extra layer of
                      security for his fortress. While we can&apos;t prove this story, it shows how creative ancient people
                      were in protecting their homes! The geometric design of these gardens influenced garden design
                      across Asia for centuries.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Symmetrical pools and fountains that magically work during rainy season without electricity
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient irrigation channels showing advanced water management knowledge
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect spots for photography with the rock formation as backdrop
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Peaceful walking paths where you can imagine royal processions 1,500 years ago
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Fun Water Garden Facts:</h4>
                  <p className="text-sm text-blue-700">
                    The fountains work using water pressure - no pumps needed! During heavy rains, underground channels
                    fill with water and create enough pressure to make the fountains spray water several feet high.
                    This shows that ancient Sri Lankan engineers understood physics concepts that we use today.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lions Paws */}
            <Card>
              <CardHeader>
                <CardTitle>2. The Lion&apos;s Paws - Gateway to the Royal Palace</CardTitle>
                <CardDescription>Massive stone paws that once supported a giant lion sculpture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      About halfway up the rock, you&apos;ll reach one of Sigiriya&apos;s most impressive and mysterious features -
                      the enormous Lion&apos;s Paws! These two massive stone paws are all that remain of what was once a
                      giant lion sculpture that guarded the entrance to King Kashyapa&apos;s palace. Imagine how amazing
                      it must have looked 1,500 years ago when visitors had to walk through the lion&apos;s mouth to reach
                      the royal palace above!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The paws are carved from the natural rock and are incredibly detailed, showing the skill of ancient
                      Sri Lankan stone carvers. Each paw is about 3 meters long and shows individual claws and muscles.
                      Some people believe there were actually secret chambers inside the rock behind the lion sculpture,
                      though this has never been proven. Local legends say the lion&apos;s roar could be heard across the
                      valley as a warning to enemies!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This is also where many visitors take a break before the steepest part of the climb. The metal
                      staircase from here to the top can be challenging, so it&apos;s smart to rest, drink water, and
                      prepare mentally for the final push to the summit. The views from here are already incredible,
                      but they get even better as you go higher!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect spot for memorable photos that show the massive scale of ancient construction
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Great place to rest and prepare for the steep final climb to the summit
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Amazing panoramic views of the central plains and distant mountains
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Close-up view of the incredible stone carving techniques used by ancient craftsmen
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Lions-paw.jpeg"
                    alt="Giant stone lion paws at Sigiriya with tourists climbing metal stairs between them"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-2">Local Legend:</h4>
                  <p className="text-sm text-orange-700">
                    According to local stories, the complete lion sculpture was so realistic and fierce-looking that
                    enemy soldiers would be too scared to enter the palace! The lion was meant to show King Kashyapa&apos;s
                    power and protect the royal family. Some archaeologists think the head and body of the lion were
                    destroyed by natural weathering over the centuries.
                  </p>
                  <br />
                  <br />
                  <div className="bg-amber-50 dark:bg-slate-800 border-l-4 border-amber-400 dark:border-amber-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-100 mb-2">🔒 The Mystery of the Closed Interior Passages</h4>
                    <p className="text-sm text-amber-700 dark:text-slate-200 mb-3">
                      According to local folklore and some archaeological evidence, Sigiriya Rock once had secret interior passages and chambers that allowed access deep inside the rock fortress. These hidden tunnels were reportedly used by King Kashyapa and his court for:
                    </p>
                    <ul className="text-sm text-amber-700 dark:text-slate-200 mb-3 ml-4 space-y-1">
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Secret escape routes</strong> in case of enemy attacks</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Hidden treasure chambers</strong> where royal valuables were stored</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Underground water systems</strong> connecting to natural springs</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Private meditation caves</strong> for the king&apos;s spiritual practices</li>
                    </ul>
                    <p className="text-sm text-amber-700 dark:text-slate-200 mb-3">
                      <strong className="text-amber-800 dark:text-amber-200">Why were they closed?</strong> Several factors led to sealing these interior passages:
                    </p>
                    <ul className="text-sm text-amber-700 dark:text-slate-200 mb-3 ml-4 space-y-1">
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Safety concerns:</strong> Structural instability and risk of rockfalls</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Preservation efforts:</strong> Protecting ancient artifacts and inscriptions inside</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Wildlife protection:</strong> Bats and other creatures use these caves as habitat</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Archaeological research:</strong> Ongoing studies require controlled access</li>
                    </ul>
                    <p className="text-sm text-amber-700 dark:text-slate-200 mb-3">
                      <strong className="text-amber-800 dark:text-amber-200">H.C.P. Bell&apos;s Archaeological Work:</strong> The renowned British archaeologist H.C.P. Bell (Harry Charles Purvis Bell) conducted extensive research at Sigiriya in the early 1900s. According to local accounts and some historical references, Bell may have documented several interior passages and chambers within the rock fortress that were accessible at the time. However, these details are not 100% confirmed and should be considered as part of local folklore mixed with historical research. The reported features include:
                    </p>
                    <ul className="text-sm text-amber-700 dark:text-slate-200 mb-3 ml-4 space-y-1">
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Possible hidden chambers</strong> (unconfirmed accounts)</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Alleged water cisterns</strong> carved into the rock</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Rumored secret passages</strong> between different levels</li>
                      <li>• <strong className="text-amber-800 dark:text-amber-200">Undocumented drainage systems</strong> (speculative)</li>
                    </ul>
                    <p className="text-sm text-amber-700 dark:text-slate-200">
                      <strong className="text-amber-800 dark:text-amber-200">Important note:</strong> While H.C.P. Bell did conduct archaeological work at Sigiriya, the specific details about interior passages remain largely unverified and are based on local legends and incomplete historical records. Modern archaeologists continue to study the rock using advanced technology, but these mysterious interior spaces remain off-limits to visitors for safety and conservation reasons.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frescoes */}
            <Card>
              <CardHeader>
                <CardTitle>3. The World-Famous Sigiriya Frescoes &amp; Mirror Wall</CardTitle>
                <CardDescription>1,500-year-old paintings that still shine with vibrant colors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <Image
                    src="/Sigiriyapaintings.jpeg"
                    alt="Close-up of Sigiriya frescoes showing detailed ancient paintings of women with jewelry and flowers"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      On your way up to the Lion&apos;s Paws, don&apos;t miss one of the world&apos;s most incredible art treasures -
                      the Sigiriya frescoes! These ancient paintings are located in a naturally sheltered pocket of the
                      rock face, which has protected them from rain and wind for over 1,500 years. The paintings show
                      beautiful women who might be celestial beings (angels), court ladies, or even members of the royal
                      family - nobody knows for sure, which makes them even more mysterious!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What makes these paintings so special is their incredible quality and the fact that the colors are
                      still bright and clear after all these centuries. The artists used natural pigments made from plants
                      and minerals found in Sri Lanka. You can see similar style paintings in the famous Ajanta Caves in
                      India, showing how art and culture traveled between countries in ancient times.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Right next to the frescoes is the famous Mirror Wall - a surface that was once polished so smooth
                      it reflected images like a real mirror! For over 1,000 years, visitors have been writing poems and
                      comments on this wall, creating the world&apos;s oldest guest book. You can still read some of these
                      ancient writings today, though new graffiti is strictly forbidden.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Originally there were about 500 frescoes covering the entire rock face - now only 18 survive
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Colors are still amazingly vibrant after 1,500 years thanks to natural protection
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Photography is strictly not allowed to help preserve these priceless paintings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Mirror Wall contains over 1,800 ancient poems and comments from visitors
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Similar artistic style to Ajanta Caves in India, showing ancient cultural connections
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-2">Amazing Art Facts:</h4>
                  <p className="text-sm text-purple-700 mb-2">
                    The Mirror Wall was made by mixing honey, egg whites, and lime to create an incredibly smooth surface.
                    The ancient writings on it include love poems, religious prayers, and comments about the beauty of
                    the frescoes. Some of these writings are over 1,000 years old!
                  </p>
                  <p className="text-sm text-purple-700">
                    The frescoes show women holding flowers and making hand gestures that have religious meaning in
                    Buddhism and Hinduism. The artists paid incredible attention to details like jewelry, hairstyles,
                    and facial expressions that tell us a lot about ancient Sri Lankan culture and fashion.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summit */}
            <Card>
              <CardHeader>
                <CardTitle>4. The Summit Palace Ruins - King&apos;s Castle in the Clouds</CardTitle>
                <CardDescription>Royal palace remains with breathtaking 360° views of ancient Sri Lanka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The summit of Sigiriya is where all your climbing efforts pay off with absolutely incredible rewards!
                      At the top, you&apos;ll find the ruins of King Kashyapa&apos;s magnificent palace and some of the most
                      spectacular views in all of Sri Lanka. Standing here, you can truly understand why the king chose
                      this spot for his royal home - it&apos;s like being on top of the world, with endless green landscapes
                      stretching out in every direction as far as your eyes can see.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      From the summit, you can clearly see Pidurangala Rock rising nearby - another important ancient site
                      that&apos;s also worth visiting for even better views of Sigiriya itself. On clear days, you can see
                      mountains in the distance and the ancient irrigation systems that still feed farms throughout the
                      region. This view helps you understand how powerful and strategic this location was for controlling
                      the entire central region of ancient Sri Lanka.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The palace ruins themselves are fascinating to explore. You can walk through the foundations of the
                      royal apartments, see where the king held court, and marvel at the royal swimming pool that was
                      carved directly from the solid rock. Imagine living in luxury 200 meters above the ground,
                      surrounded by the most beautiful gardens and fountains, with the entire kingdom spread out below you!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Complete 360-degree panoramic views of central Sri Lankan countryside and distant mountains
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Clear views of Pidurangala Rock and other ancient sites in the Cultural Triangle region
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ruins of the royal palace including throne area and royal living quarters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient royal swimming pool carved from solid rock - still holding rainwater after 1,500 years
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect location for sunrise or sunset photography with incredible golden light
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Cool breeze and peaceful atmosphere - perfect place to rest and reflect on the climb
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/SigiriyaDrone.jpg"
                    alt="Panoramic view from Sigiriya summit showing vast green landscape and ancient palace ruins"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Summit Experience Tips:</h4>
                  <p className="text-sm text-green-700 mb-2">
                    Take your time at the summit! Many visitors rush to take photos and leave quickly, but this is a
                    special place that deserves at least 30-45 minutes of exploration. Sit quietly and imagine what
                    life was like here 1,500 years ago when this was one of the most important places in Asia.
                  </p>
                  <p className="text-sm text-green-700">
                    The best photos are taken from the throne area looking out over the landscape. Early morning and
                    late afternoon provide the most beautiful golden lighting. Remember to stay hydrated and wear
                    sun protection - there&apos;s no shade at the summit!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* King's Throne */}
            <Card>
              <CardHeader>
                <CardTitle>5. King Kashyapa&apos;s Throne - The Seat of Ancient Power</CardTitle>
                <CardDescription>A magnificent stone throne where a king once ruled his kingdom from the clouds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      At the summit of Sigiriya, one of the most significant features is the ancient stone throne where
                      King Kashyapa would sit in royal splendor to conduct court business and religious ceremonies.
                      This throne, carved from solid rock and once decorated with precious gems and gold, represented
                      the absolute peak of power in ancient Sri Lanka - both literally and figuratively!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The throne was strategically positioned so that anyone approaching would have to climb hundreds of
                      steps and walk through multiple ceremonial gateways before finally reaching the king. This journey
                      was designed to humble visitors and demonstrate the king&apos;s power and authority. The throne also
                      offered panoramic views of the surrounding landscape, allowing the king to survey his domain.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Archaeological evidence suggests that the throne was once sheltered by an elaborate wooden
                      pavilion with a gilded roof. The pavilion&apos;s posts would have been anchored in the carved holes
                      still visible in the rock today. During ceremonies, cool mountain breezes would have rustled
                      through silk curtains while the king sat in judgment, surrounded by courtiers and guards.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Original stone throne still visible with carved details and post holes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Perfect example of how architecture was used to demonstrate royal power
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Evidence of elaborate decorative pavilion that once covered the throne
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Spectacular 360-degree views from the throne position
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Sigiriya-throne.jpg"
                    alt="Ancient stone throne at Sigiriya summit where King Kashyapa once ruled"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">Royal Ceremonies:</h4>
                  <p className="text-sm text-yellow-700 mb-2">
                    Historical records suggest that King Kashyapa would hold elaborate court ceremonies at sunrise,
                    when the first rays of the morning sun would illuminate his golden throne pavilion. This created
                    a dazzling effect that made the king appear to be sitting in divine light - a powerful symbol
                    of his authority as both political and religious leader.
                  </p>
                  <p className="text-sm text-yellow-700">
                    The throne&apos;s position at the highest point of Sigiriya wasn&apos;t just for show - it was carefully
                    planned to create perfect acoustics. The king&apos;s voice would carry clearly to everyone in the
                    audience hall, while the surrounding rock walls created natural amplification effects.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. The Sigiriya Mirror Wall - Ancient Guest Book</CardTitle>
                <CardDescription>World&apos;s oldest visitor comments dating back over 1,000 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The Mirror Wall is one of Sigiriya&apos;s most fascinating and unique features that shows how this place
                      has been amazing visitors for over 1,000 years! Originally, this wall was polished so smooth and
                      shiny that it worked like a perfect mirror, reflecting the images of people walking by. The ancient
                      builders achieved this incredible shine by mixing honey, egg whites, and lime to create a surface
                      smoother than most modern mirrors!
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What makes the Mirror Wall truly special is that for over 1,000 years, visitors have been writing
                      poems, comments, and thoughts on this wall, creating the world&apos;s oldest guest book! These ancient
                      writings include beautiful love poems, religious prayers, comments about the stunning frescoes, and
                      personal thoughts from people who climbed Sigiriya centuries ago. Reading these old writings gives
                      you a magical connection to people from the past who stood in the exact same spot you&apos;re standing now.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Some of the most interesting writings are from the 8th to 10th centuries, when Sigiriya was used
                      as a Buddhist monastery. Monks and pilgrims wrote about their spiritual experiences and the beauty
                      of the frescoes. Later visitors wrote romantic poems comparing the painted women to their loved ones.
                      These writings help us understand how people from different time periods experienced and appreciated
                      this incredible place.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Originally polished to mirror-like shine using honey, egg whites, and lime mixture
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Over 1,800 ancient visitor writings and poems preserved from 8th-18th centuries
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Fascinating glimpse into thoughts and feelings of ancient Sri Lankan visitors
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Includes love poems, religious writings, and comments about the beautiful frescoes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Now strictly protected - touching or writing on the wall is completely forbidden
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Provides valuable insights into ancient Sinhala language and poetry styles
                      </li>
                    </ul>
                  </div>
                  <Image
                    src="/Mirrorwall.jpeg"
                    alt="Close-up of the ancient Mirror Wall showing old Sinhala script and visitor writings"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                  <h4 className="font-semibold text-amber-800 mb-2">Ancient Visitor Voices:</h4>
                  <p className="text-sm text-amber-700 mb-2">
                    One famous 8th-century poem on the wall says: &quot;The ladies who wear golden chains on their breasts
                    laugh and speak with sweet voices... my mind was captured by their beauty.&quot; Another visitor wrote:
                    &quot;I am Budal. The sight of these women makes me want to stay here forever.&quot;
                  </p>
                  <p className="text-sm text-amber-700">
                    These personal messages show that people 1,200 years ago had the same feelings of wonder and amazement
                    that visitors have today when they see the incredible frescoes and experience the magic of Sigiriya!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Climbing Experience Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Complete Climbing Experience Guide</h2>
          <div className="space-y-8">
            {/* Path Selection Note */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Important Path Information</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                    <strong>Note:</strong> The sequence of attractions described below will be found according to the path you select.
                    There are multiple routes to reach the summit, and some areas may be visited in different orders depending
                    on your chosen climbing route and current site conditions. Your guide or the site map will show you the
                    best path for your visit.
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>The Step-by-Step Climbing Journey</CardTitle>
                <CardDescription>What to expect during your 2-3 hour adventure to the top</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-800 mb-2">Stage 1: Water Gardens (30 minutes)</h4>
                      <p className="text-sm text-blue-700 mb-2">
                        Easy flat walking through ancient gardens and pools. Perfect for photos and getting excited about
                        the adventure ahead. Take time to read the information boards about the engineering marvels.
                      </p>
                      <p className="text-xs text-blue-600 font-medium">Difficulty: Very Easy 🟢</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-2">Stage 2: Boulder Gardens (45 minutes)</h4>
                      <p className="text-sm text-yellow-700 mb-2">
                        Moderate climbing with some steep paths and stairs. You&apos;ll pass ancient meditation caves and
                        see how monks lived here for centuries. Great views start appearing here.
                      </p>
                      <p className="text-xs text-yellow-600 font-medium">Difficulty: Moderate 🟡</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-bold text-orange-800 mb-2">Stage 3: Frescoes &amp; Mirror Wall (30 minutes)</h4>
                      <p className="text-sm text-orange-700 mb-2">
                        Steeper climbing with metal staircases. This is where you see the famous paintings and ancient
                        writings. Take breaks and don&apos;t rush - this is the most culturally important part.
                      </p>
                      <p className="text-xs text-orange-600 font-medium">Difficulty: Moderate-Hard 🟠</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-bold text-red-800 mb-2">Stage 4: Lion&apos;s Paws to Summit (45 minutes)</h4>
                      <p className="text-sm text-red-700 mb-2">
                        The most challenging part with steep metal stairs attached to the rock face. Not recommended for
                        people afraid of heights. Take it slow, rest when needed, and focus on the amazing achievement
                        you&apos;re about to complete!
                      </p>
                      <p className="text-xs text-red-600 font-medium">Difficulty: Hard 🔴</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 mb-2">Stage 5: Summit Exploration (45 minutes)</h4>
                      <p className="text-sm text-green-700 mb-2">
                        Flat walking around the palace ruins with incredible 360° views. This is your reward time!
                        Explore the royal pools, throne area, and take lots of photos. The descent takes about 1 hour.
                      </p>
                      <p className="text-xs text-green-600 font-medium">Difficulty: Easy 🟢</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Physical Preparation &amp; Fitness Requirements</CardTitle>
                <CardDescription>How to prepare for this incredible but challenging climb</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Who Can Climb Sigiriya?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• People with reasonable fitness (can walk for 2-3 hours with breaks)</li>
                      <li>• Children over 8 years old with adult supervision</li>
                      <li>• Seniors who exercise regularly and have no serious health problems</li>
                      <li>• Anyone who can climb stairs without getting extremely tired</li>
                      <li>• People comfortable with heights and metal staircases</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Who Should Consider Carefully?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• People with serious heart or breathing problems</li>
                      <li>• Anyone with severe fear of heights</li>
                      <li>• Very young children (under 8) or elderly with mobility issues</li>
                      <li>• People with recent injuries or surgeries</li>
                      <li>• Anyone who gets dizzy easily or has balance problems</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Preparation Tips:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                    <div>
                      <p className="mb-2"><strong>Week Before:</strong></p>
                      <ul className="space-y-1">
                        <li>• Walk for 30-60 minutes daily</li>
                        <li>• Practice climbing stairs</li>
                        <li>• Drink plenty of water daily</li>
                        <li>• Get good sleep</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2"><strong>Day Before:</strong></p>
                      <ul className="space-y-1">
                        <li>• Eat a good dinner with carbs</li>
                        <li>• Go to bed early</li>
                        <li>• Drink water but don&apos;t overdo it</li>
                        <li>• Prepare clothes and gear</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Dos and Donts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Dos and Donts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dos */}
            <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  DOs - For the Best Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Start early:</strong> Begin your climb by 6:30 AM to avoid crowds and heat
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Wear comfortable shoes:</strong> Good grip is essential for the metal stairs
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Bring water:</strong> At least 1-2 liters per person
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Use sunscreen:</strong> The sun can be intense, especially at the summit
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Respect the site:</strong> It&apos;s a UNESCO World Heritage Site
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Take your time:</strong> Enjoy the journey, not just the destination
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Hire a guide:</strong> Learn fascinating stories and history
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Donts */}
            <Card className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  DONTs - Avoid These Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t make unnecessary noise:</strong> Hornets and bees live in the rock cracks and can become dangerous if you are too loud
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t visit midday:</strong> It&apos;s extremely hot and crowded (11 AM - 3 PM)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t wear flip-flops:</strong> The metal stairs can be slippery
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t photograph frescoes:</strong> It&apos;s strictly prohibited
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t rush:</strong> Take breaks and enjoy the views along the way
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t litter:</strong> Keep this ancient wonder clean for future generations
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t climb if afraid of heights:</strong> The final stairs are quite steep
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Don&apos;t forget tickets:</strong> Buy them at the entrance, not online
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Visit Sigiriya</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Best Season</CardTitle>
                <CardDescription>December to April</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dry weather with minimal rain</li>
                  <li>• Clear skies for photography</li>
                  <li>• Comfortable temperatures</li>
                  <li>• Best visibility from summit</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Shoulder Season</CardTitle>
                <CardDescription>May & November</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fewer crowds</li>
                  <li>• Occasional rain showers</li>
                  <li>• Lower accommodation prices</li>
                  <li>• Lush green landscapes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Monsoon Season</CardTitle>
                <CardDescription>June to October</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heavy rainfall possible</li>
                  <li>• Slippery climbing conditions</li>
                  <li>• Beautiful water gardens active</li>
                  <li>• Lowest tourist numbers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tickets & Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Entry Fee:</strong>
                  <ul className="mt-1 text-sm text-muted-foreground">
                    <li>• Adults: $35 USD</li>
                    <li>• Children (6-12): $18.50 USD</li>
                    <li>• SAARC nationals: Discounted rates</li>
                  </ul>
                </div>
                <div>
                  <strong>Opening Hours:</strong>
                  <p className="text-sm text-muted-foreground">5:00 AM - 5:30 PM (last entry 4:30 PM)</p>
                  <p className="text-sm text-muted-foreground">*The frescoes area will be closed for tourists at 17:45 PM</p>
                </div>
                <div>
                  <strong>Climbing Time:</strong>
                  <p className="text-sm text-muted-foreground">2-3 hours round trip (including exploration time)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>From Colombo:</strong>
                  <p className="text-sm text-muted-foreground">4-5 hours by car/bus via Dambulla</p>
                </div>
                <div>
                  <strong>From Kandy:</strong>
                  <p className="text-sm text-muted-foreground">2.5-3 hours by car/bus</p>
                </div>
                <div>
                  <strong>Nearest Town:</strong>
                  <p className="text-sm text-muted-foreground">Dambulla (20 minutes drive)</p>
                </div>
                <div>
                  <strong>Accommodation:</strong>
                  <p className="text-sm text-muted-foreground">Stay in Sigiriya village or Dambulla for easy access</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Photography Tips for Instagram-Worthy Shots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Best Photo Spots:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Water gardens with rock backdrop</li>
                    <li>• Lions paws with people for scale</li>
                    <li>• Summit panoramic views</li>
                    <li>• Sunrise/sunset from nearby Pidurangala Rock</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Photography Tips:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Golden hour (6-8 AM, 4-6 PM) for best lighting</li>
                    <li>• Bring extra batteries (heat drains them fast)</li>
                    <li>• Use wide-angle lens for landscape shots</li>
                    <li>• Respect no-photography zones (frescoes)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Pidurangala Rock</CardTitle>
                <CardDescription>Best views of Sigiriya</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Pidurangala.jpeg"
                  alt="View of Sigiriya Rock from Pidurangala Rock"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Climb this nearby rock for the perfect photo of Sigiriya. Easier climb, amazing sunrise views!
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/pidurangala-rock" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Dambulla Cave Temple</CardTitle>
                <CardDescription>Golden Temple complex</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Dambullacavetemple.jpeg"
                  alt="Dambulla Cave Temple showing ancient Buddhist statues and paintings inside rock caves"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  UNESCO site with 5 cave temples filled with Buddha statues and ancient paintings.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/dambulla-cave-temple" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Minneriya National Park</CardTitle>
                <CardDescription>Elephant gathering</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Minneriyanationalpark.jpeg"
                  alt="Large herd of elephants gathering at Minneriya National Park during dry season"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Famous for &quot;The Gathering&quot; - hundreds of elephants come together during dry season.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/minneriya-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Habarana</CardTitle>
                <CardDescription>Gateway to Cultural Triangle</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Habarana.jpg"
                  alt="Habarana town entrance sign"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the gateway town of Habarana, a key access point to Sri Lanka&apos;s Cultural Triangle. Surrounded by lush forests and ancient ruins, Habarana is the perfect base for exploring nearby attractions like Sigiriya Rock Fortress and the ancient city of Polonnaruwa. Experience the rich history and natural beauty of this region, making it a must-visit destination for travelers. About 1.5 hours from Sigiriya.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/habarana" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Polonnaruwa</CardTitle>
                <CardDescription>Ancient city</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Polonnaruwa3.jpeg"
                  alt="View of Sigiriya Rock from Pidurangala Rock"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Ancient city with well-preserved ruins of palaces, temples, and statues. 1.5 hours drive.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/polonnaruwa" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Anuradapura</CardTitle>
                <CardDescription>Ancient city</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Anuradhapura.jpg"
                  alt="View of Sigiriya Rock from Pidurangala Rock"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Explore the sacred city of Anuradhapura, the first capital and ancient heart of Sri Lanka. Famous for its massive dagobas, centuries-old monasteries, and the revered Sri Maha Bodhi tree, Anuradhapura is a UNESCO World Heritage Site and a center of Buddhist pilgrimage. Wander through sprawling ruins, marvel at ancient engineering, and experience the spiritual atmosphere of this legendary kingdom that shaped Sri Lankan civilization for over a thousand years. About 1.5 hours from Sigiriya.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/anuradhapura" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Wasgamuwa National Park</CardTitle>
                <CardDescription>National park</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Wasgamuwa-National-Park"
                  alt="View of Wasgamuwa National Park"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
                  Climb this nearby rock for the perfect photo of Sigiriya. Easier climb, amazing sunrise views!
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/wasgamuwa-national-park" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

                <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Kurunagala</CardTitle>
                <CardDescription>National park</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/Kurunagala"
                  alt="View of Kurunagala"
                  width={300}
                  height={200}
                  className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                />
                <p className="text-sm text-muted-foreground">
               Wonderful city with ancient temples and vibrant culture.
                </p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/kurunagala" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Visitor Guide &amp; Final Tips</h2>
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Essential Tips for an Amazing Sigiriya Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">Before You Go</h4>
                    <ul className="space-y-2 text-sm text-blue-600">
                      <li>• Book accommodations in Sigiriya village or Dambulla for easy early morning access</li>
                      <li>• Check weather forecast - avoid climbing during heavy rain or storms</li>
                      <li>• Inform someone about your climbing plans and expected return time</li>
                      <li>• Consider hiring a local guide for deeper cultural understanding</li>
                      <li>• Bring a small backpack with water, snacks, and first aid supplies</li>
                      <li>• Charge your camera/phone fully - you&apos;ll want lots of photos!</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-700">During Your Climb</h4>
                    <ul className="space-y-2 text-sm text-purple-600">
                      <li>• Start early (6:30-7:00 AM) to avoid crowds and heat</li>
                      <li>• Take breaks every 15-20 minutes to rest and enjoy the views</li>
                      <li>• Follow the designated paths and respect all barriers and signs</li>
                      <li>• Be patient with other climbers - help elderly or struggling visitors</li>
                      <li>• Take time to read information boards and learn about the history</li>
                      <li>• Stay hydrated but don&apos;t drink too much water at once</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">Cultural Respect &amp; Environmental Care</h4>
                  <p className="text-sm text-yellow-700 mb-2">
                    Remember that Sigiriya is not just a tourist attraction - it&apos;s a sacred place with incredible historical
                    and cultural importance. Show respect by following all rules, not touching ancient walls or artifacts,
                    and keeping your voice down near the frescoes and religious areas.
                  </p>
                  <p className="text-sm text-yellow-700">
                    Help preserve this amazing place for future generations by not littering, staying on marked paths,
                    and following photography restrictions. Every visitor has a responsibility to protect this UNESCO
                    World Heritage Site for people to enjoy for many more centuries to come.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Making Your Visit Extra Special</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">Photography Tips</h4>
                      <ul className="text-sm text-green-600 space-y-1">
                        <li>• Best light: 6:30-8:30 AM and 4:30-6:00 PM</li>
                        <li>• Bring wide-angle lens for landscape shots</li>
                        <li>• Use people in photos to show the massive scale</li>
                        <li>• Capture details: carvings, pools, ancient stairs</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-2">Cultural Learning</h4>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Read about King Kashyapa before your visit</li>
                        <li>• Learn basic Sinhala greetings for local interactions</li>
                        <li>• Ask guides about Buddhist traditions and symbols</li>
                        <li>• Understand the connection to other Cultural Triangle sites</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700 mb-2">Personal Reflection</h4>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• Spend quiet time at the summit thinking about history</li>
                        <li>• Imagine what life was like 1,500 years ago</li>
                        <li>• Appreciate the incredible human achievement</li>
                        <li>• Consider keeping a travel journal of your experience</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3">Why Sigiriya Will Change You</h4>
                    <p className="text-muted-foreground mb-4">
                      Visiting Sigiriya is more than just seeing an ancient building or climbing a big rock. It&apos;s a journey
                      that connects you with the incredible achievements of human civilization. When you stand at the summit,
                      looking out over the same landscape that King Kashyapa saw 1,500 years ago, you become part of a
                      continuous story that links the ancient past with the present moment.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This experience will change how you think about what humans can accomplish when they combine vision,
                      determination, and incredible skill. The fact that ancient people could build something so magnificent
                      without modern technology shows the power of human creativity and ambition. Many visitors say that
                      Sigiriya inspires them to think bigger about their own goals and dreams.
                    </p>
                    <p className="text-muted-foreground">
                      Most importantly, Sigiriya teaches us about the importance of preserving cultural heritage. When you
                      climb those ancient steps and see the frescoes that have survived for 1,500 years, you understand
                      why protecting these treasures is so important. You become an ambassador for cultural preservation,
                      carrying the story of Sigiriya with you wherever you go.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
              <CardHeader>
                <CardTitle className="text-rose-800">Your Sigiriya Adventure Awaits!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Remember, you&apos;re about to climb one of the most incredible archaeological sites in the world! Every step
                  up those ancient staircases brings you closer to understanding the genius and ambition of ancient Sri Lankan
                  civilization. The climb might be challenging, but the sense of achievement and the breathtaking views make
                  every bit of effort completely worthwhile.
                </p>
                <p className="text-muted-foreground mb-4">
                  Take time to appreciate not just the destination, but the incredible journey itself. You&apos;re walking in
                  the footsteps of ancient kings, Buddhist monks, and countless pilgrims who have made this sacred climb
                  for over 1,500 years. The memories you create at Sigiriya will stay with you for the rest of your life.
                </p>
                <p className="text-muted-foreground font-medium text-center text-lg">
                  Safe travels, and enjoy your incredible adventure at the Lion Rock! 🦁🏰✨
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div >
    </main >
  )
}
