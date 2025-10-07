"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function DambullaTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/dambulla-cave-temple.jpg"
          alt="Magnificent Dambulla Cave Temple complex showing golden Buddha statues and ancient cave paintings in atmospheric lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dambulla Cave Temple</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Largest Cave Temple Complex</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Matale District, Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
              <Palette className="w-4 h-4 mr-1" />
              UNESCO World Heritage Site
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              1st Century BC
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Dambulla: Temple of Ancient Wonders</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into a world where ancient artistry meets spiritual devotion at Dambulla Cave Temple, Sri Lanka&apos;s
              largest and best-preserved cave temple complex. This UNESCO World Heritage site houses over 150 Buddha
              statues, intricate cave paintings spanning 2,100 square meters, and 2,000 years of continuous Buddhist
              worship in five magnificent caves carved into a massive rock outcrop.
            </p>
            <p className="text-lg">
              From the moment you climb the steps to this sacred site, youll be transported through centuries of
              Buddhist art and devotion. Each cave tells a unique story through its stunning murals, sculptures, and
              architectural features, making Dambulla one of the most important pilgrimage sites in Sri Lanka and a
              treasure trove for art and history enthusiasts.
            </p>
          </div>
        </section>


        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Essential Dambulla Cave Temple Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Founded:</strong> 1st Century BC
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Cave Paintings:</strong> 2,100 square meters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Buddha Statues:</strong> Over 150
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Distance from Sigiriya:</strong> 19km
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>
                      <strong>UNESCO Status:</strong> World Heritage (1991)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Visit Duration:</strong> 2-3 hours
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Historical Engineering */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ancient Engineering Marvel</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cave Construction Techniques</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Natural caves were carefully expanded using ancient chiseling techniques</li>
                    <li>• Water drainage systems were integrated to protect the artwork</li>
                    <li>• Precise calculations were used to ensure cave stability</li>
                    <li>• Special drip ledges were carved to direct rainwater away</li>
                  </ul>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Engineering Fact:</strong> The caves were carved following the natural rock formation&apos;s stress lines, demonstrating the ancient engineers&apos; understanding of structural integrity. This is why the caves have survived for over 2,000 years without collapsing!
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Construction Timeline</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-600">1st Century BCE</h4>
                      <p className="text-sm text-muted-foreground">Initial cave excavation and basic temple structure</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">5th Century CE</h4>
                      <p className="text-sm text-muted-foreground">Major expansion and addition of more Buddha statues</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">12th Century CE</h4>
                      <p className="text-sm text-muted-foreground">Additional caves carved and paintings added</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600">18th Century CE</h4>
                      <p className="text-sm text-muted-foreground">Kandyan era renovations and new artwork</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Five Caves */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Five Sacred Caves: A Journey Through Time</h2>

          <div className="space-y-8">
            {/* Cave 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Cave 1: Devaraja Lena (Cave of the Divine King)</CardTitle>
                <CardDescription>The smallest but historically significant cave</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/Devaraja-lena.jpg",
                        alt: "The first cave of Dambulla showing the reclining Buddha statue",
                        caption: "Devaraja Lena Interior",
                        title: "Cave of the Divine King"
                      },
                      {
                        src: "/cave1-paintings.jpg",
                        alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                        caption: "Ancient Cave Paintings",
                        title: "Cave 1 Murals"
                      },
                      {
                        src: "/buddha-statue-cave1.jpg",
                        alt: "Detailed view of Buddha statue in Cave 1",
                        caption: "Buddha Statue Detail",
                        title: "Cave 1 Buddha Statue"
                      }
                    ]}
                  />
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The first cave youll encounter houses a 14-meter long reclining Buddha carved from the living
                      rock. This cave is believed to be where King Valagamba took refuge in the 1st century BC, marking
                      the beginning of Dambullas sacred history.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        14-meter reclining Buddha statue
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Statue of Ananda (Buddhas disciple) at the feet
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Ancient Brahmi inscriptions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Historical significance as royal refuge
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Did You Know Section */}
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg border-l-4 border-blue-400 dark:border-blue-500">
                <p className="text-blue-900 dark:text-blue-200 text-base">
                  <strong>Did you know?</strong> One of Dambulla Cave Temple&apos;s most intriguing features is the <span className="font-semibold">eternal water drop</span>—a tiny stream of water that drips from the cave ceiling into a stone basin, even during the driest months. This natural phenomenon is considered sacred and is used for rituals and offerings by monks and pilgrims.
                </p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-slate-800 rounded-lg border-l-4 border-amber-400 dark:border-amber-500">
                <p className="text-amber-900 dark:text-amber-200 text-base">
                  <strong>Historical Fact:</strong> King Valagamba (also known as Vattagamani Abhaya) took refuge in these caves in 103 BCE when exiled from Anuradhapura. After regaining his throne 14 years later, he transformed the caves into a magnificent temple complex as a gesture of gratitude.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-slate-800 rounded-lg border-l-4 border-green-400 dark:border-green-500">
                <p className="text-green-900 dark:text-green-200 text-base">
                  <strong>Artistic Marvel:</strong> The cave paintings at Dambulla use a unique technique where natural pigments were mixed with egg whites and wild honey to create colors that have remained vibrant for over 2,000 years!
                </p>
              </div>
            </div>

            {/* Cave 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Cave 2: Maharaja Lena (Cave of the Great Kings)</CardTitle>
                <CardDescription>The largest and most spectacular cave</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This is the crown jewel of Dambulla, featuring 56 Buddha statues and the most extensive collection
                      of cave paintings. The ceiling is completely covered with intricate paintings depicting Buddhas
                      life and Jataka tales (stories of Buddhas previous lives).
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        56 Buddha statues in various poses
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Extensive ceiling paintings covering 1,500 sq meters
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Statues of King Valagamba and King Nissanka Malla
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Natural spring providing holy water
                      </li>
                    </ul>
                  </div>
                 <ImageCarousel
                    images={[
                      {
                        src: "/maharaja-lena.jpg",
                        alt: "The magnificent interior of Cave 2 showing multiple Buddha statues and painted ceiling",
                        caption: "Cave of the Great Kings Interior",
                        title: "Maharaja Lena"
                      },
                      {
                        src: "/cave2-ceiling.jpg",
                        alt: "Detailed view of the intricately painted ceiling in Cave 2",
                        caption: "Ceiling Murals",
                        title: "Cave 2 Ceiling Art"
                      },
                      {
                        src: "/buddha-statues-cave2.jpg",
                        alt: "Collection of Buddha statues in various poses within Cave 2",
                        caption: "Buddha Statues Array",
                        title: "Cave 2 Buddha Statues"
                      }
                    ]}
                  />

                  {/* Cave 2 Facts */}
                  <div className="mt-6 p-4 bg-purple-50 dark:bg-slate-800 rounded-lg border-l-4 border-purple-400">
                    <p className="text-purple-900 dark:text-purple-200 text-base">
                      <strong>Did you know?</strong> Cave 2 contains the temple&apos;s oldest paintings, dating back to the 1st century BCE. The ceiling murals use a special technique where artists had to paint while lying on their backs on scaffolding, similar to Michelangelo&apos;s work in the Sistine Chapel!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cave 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Cave 3: Maha Alut Viharaya (Great New Monastery)</CardTitle>
                <CardDescription>18th-century addition with Kandyan period art</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <ImageCarousel
                    images={[
                      {
                        src: "/maha-alut-viharaya.jpg",
                        alt: "The interior of Cave 3 showing Kandyan era paintings and statues",
                        caption: "Great New Monastery Interior",
                        title: "Maha Alut Viharaya"
                      },
                      {
                        src: "/cave3-paintings.jpg",
                        alt: "Detailed view of the Kandyan era paintings in Cave 3",
                        caption: "Kandyan Era Art",
                        title: "Cave 3 Wall Paintings"
                      },
                      {
                        src: "/statues-cave3.jpg",
                        alt: "Buddha statues from the Kandyan period in Cave 3",
                        caption: "Kandyan Buddha Statues",
                        title: "Cave 3 Statues"
                      }
                    ]}
                  />

                  {/* Cave 3 Facts */}
                  <div className="mt-6 p-4 bg-emerald-50 dark:bg-slate-800 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-emerald-900 dark:text-emerald-200 text-base">
                      <strong>Did you know?</strong> Cave 3 showcases a unique blend of Kandyan era art styles with traditional Buddhist iconography. The artists used vibrant natural pigments including vermilion, lapis lazuli, and gold, creating some of the most colorful murals in ancient Sri Lankan art.
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Built during the Kandyan period (18th century), this cave showcases the evolution of Sri Lankan
                      Buddhist art. The paintings here are more recent but equally beautiful, featuring vibrant colors
                      and detailed depictions of Buddhist stories.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        50 Buddha statues from Kandyan period
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Vibrant 18th-century paintings
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Unique architectural features
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        Well-preserved ceiling artwork
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caves 4 & 5 */}
            <Card>
              <CardHeader>
                <CardTitle>Caves 4 & 5: Pachima Viharaya & Devana Alut Viharaya</CardTitle>
                <CardDescription>Smaller caves with unique features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Cave 4: Pachima Viharaya (Western Monastery)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Small but significant cave</li>
                      <li>• Central seated Buddha statue</li>
                      <li>• Dagoba (stupa) in the center</li>
                      <li>• Intimate spiritual atmosphere</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Cave 5: Devana Alut Viharaya (Second New Monastery)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Newest addition to the complex</li>
                      <li>• 11 Buddha statues</li>
                      <li>• Hindu deities also present</li>
                      <li>• Shows religious harmony</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> While smaller than the first three caves, Caves 4 and 5 offer unique insights
                    into the evolution of Buddhist art and religious practices in Sri Lanka.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Golden Temple */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Golden Temple: Modern Marvel</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                At the base of the rock, the modern Golden Temple (built in 2000) serves as the entrance to the cave
                complex. This impressive structure features a 30-meter tall golden Buddha statue and houses a museum
                with artifacts and information about the sites history.
              </p>
              <p>
                While not ancient like the caves above, the Golden Temple provides excellent context for your visit and
                offers air-conditioned relief from the tropical heat. The museum displays include ancient manuscripts,
                religious artifacts, and detailed explanations of Buddhist philosophy.
              </p>
              <div className="bg-gold-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">Golden Temple Features:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 30-meter tall golden Buddha statue</li>
                  <li>• Museum with ancient artifacts</li>
                  <li>• Air-conditioned visitor center</li>
                  <li>• Gift shop and facilities</li>
                  <li>• Starting point for cave temple visit</li>
                </ul>
              </div>
            </div>
            <Image
              src="/Rangiri-Dambulu.jpg"
              alt="Golden Temple at Dambulla showing the impressive 30-meter golden Buddha statue and modern architecture"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Art & Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ancient Art & Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Cave Paintings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Artistic Techniques</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Natural pigments from local minerals and plants</li>
                    <li>• Fresco technique applied to rock surfaces</li>
                    <li>• Multiple layers spanning different periods</li>
                    <li>• Remarkable preservation in cave environment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Themes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Buddhas life story and previous births</li>
                    <li>• Jataka tales (moral stories)</li>
                    <li>• Celestial beings and divine figures</li>
                    <li>• Geometric and floral patterns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Sculpture & Statuary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Buddha Statues</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Seated meditation pose (most common)</li>
                    <li>• Standing teaching pose</li>
                    <li>• Reclining parinirvana pose</li>
                    <li>• Various hand gestures (mudras)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Materials & Techniques</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Carved from living rock</li>
                    <li>• Clay and plaster additions</li>
                    <li>• Gold leaf and paint decoration</li>
                    <li>• Crystal and gem inlays</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Visitor Information & Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Practical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Entry Fees & Hours</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Foreign adults: 1,500 LKR</li>
                    <li>• Foreign children: 750 LKR</li>
                    <li>• SAARC nationals: 250 LKR</li>
                    <li>• Open: 7:00 AM - 7:00 PM daily</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Whats Included</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Access to all five caves</li>
                    <li>• Golden Temple museum entry</li>
                    <li>• Shoe storage at entrance</li>
                    <li>• Basic site information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Additional Services</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Audio guides available (extra cost)</li>
                    <li>• Professional guide services</li>
                    <li>• Photography permits for professionals</li>
                    <li>• Gift shop and refreshments</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Temple Etiquette</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Dress Code</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cover shoulders and knees</li>
                    <li>• Remove shoes before entering caves</li>
                    <li>• White or light-colored clothing preferred</li>
                    <li>• Avoid revealing or tight clothing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Behavior Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Maintain respectful silence</li>
                    <li>• Dont point feet toward Buddha statues</li>
                    <li>• No touching of paintings or statues</li>
                    <li>• Photography allowed (no flash)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Sensitivity</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• This is an active place of worship</li>
                    <li>• Be respectful of praying devotees</li>
                    <li>• Follow your guides instructions</li>
                    <li>• Consider making a small donation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sacred Rituals & Ceremonies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sacred Rituals & Ceremonies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Daily Rituals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Morning Offerings (Buddha Puja)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dawn offerings of flowers and incense</li>
                    <li>• Chanting of Buddhist sutras</li>
                    <li>• Lighting of oil lamps</li>
                    <li>• Meditation sessions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Evening Ceremonies</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sunset drum ceremonies</li>
                    <li>• Group meditation</li>
                    <li>• Evening chanting</li>
                    <li>• Blessing ceremonies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Ceremonies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Full Moon (Poya) Days</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Special alms giving</li>
                    <li>• All-night meditation</li>
                    <li>• Traditional dance offerings</li>
                    <li>• Mass prayer gatherings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Annual Festivals</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vesak celebrations</li>
                    <li>• Temple anniversary ceremonies</li>
                    <li>• New Year rituals</li>
                    <li>• Kathina ceremony</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conservation & Preservation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conservation & Preservation</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Current Conservation Efforts</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Climate control systems to protect paintings</li>
                      <li>• Regular restoration of damaged artwork</li>
                      <li>• Documentation of art and architecture</li>
                      <li>• Scientific monitoring of cave conditions</li>
                      <li>• Protection against water seepage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Challenges Faced</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Natural weathering of rock surfaces</li>
                      <li>• Impact of increased tourism</li>
                      <li>• Maintaining authentic restoration</li>
                      <li>• Balancing accessibility with preservation</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">How Visitors Can Help</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Follow photography guidelines</li>
                      <li>• Maintain distance from paintings</li>
                      <li>• Report any damage to authorities</li>
                      <li>• Support conservation funds</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Conservation Success:</strong> Thanks to careful preservation efforts, Dambulla&apos;s cave paintings have survived for over two millennia, making them some of the best-preserved ancient Buddhist art in South Asia.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Time to Visit Dambulla</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Early Morning</CardTitle>
                <CardDescription>7:00 AM - 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cooler temperatures for climbing</li>
                  <li>• Fewer crowds and tour groups</li>
                  <li>• Better lighting for photography</li>
                  <li>• Peaceful atmosphere for meditation</li>
                  <li>• Fresh morning air</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Late Afternoon</CardTitle>
                <CardDescription>4:00 PM - 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Golden hour lighting</li>
                  <li>• Cooler than midday</li>
                  <li>• Beautiful sunset views</li>
                  <li>• Less crowded than morning</li>
                  <li>• Good for photography</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Avoid Midday</CardTitle>
                <CardDescription>11:00 AM - 3:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Very hot and humid</li>
                  <li>• Crowded with tour groups</li>
                  <li>• Harsh lighting for photos</li>
                  <li>• Uncomfortable climbing conditions</li>
                  <li>• Limited parking availability</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting to Dambulla Cave Temple</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Transportation Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">From Sigiriya</h4>
                  <p className="text-sm text-muted-foreground">
                    19km (30 minutes) - Perfect for combining both attractions in one day
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Kandy</h4>
                  <p className="text-sm text-muted-foreground">
                    72km (2 hours) - Regular bus services and private transport available
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">From Colombo</h4>
                  <p className="text-sm text-muted-foreground">
                    148km (3.5 hours) - Highway route via Kurunegala or scenic route via Kandy
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Transport</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tuk-tuks from Dambulla town</li>
                    <li>• Private cars and taxis</li>
                    <li>• Tour buses and organized tours</li>
                    <li>• Bicycle rentals for adventurous visitors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Cultural Triangle Sites</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sigiriya Rock Fortress (19km)</li>
                    <li>• Polonnaruwa Ancient City (69km)</li>
                    <li>• Anuradhapura Sacred City (69km)</li>
                    <li>• Ritigala Forest Monastery (45km)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Natural Attractions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minneriya National Park (50km)</li>
                    <li>• Kaudulla National Park (35km)</li>
                    <li>• Pidurangala Rock (20km)</li>
                    <li>• Nalanda Gedige Temple (30km)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Dambulla is perfectly positioned for exploring the Cultural Triangle. Consider
                    staying 2-3 days to visit multiple sites.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-gold-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Your Dambulla Cave Temple Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Dambulla Cave Temple offers one of Sri Lanka&apos;s most profound cultural and spiritual experiences. As you
                explore these ancient caves, youre walking through 2,000 years of continuous Buddhist devotion and
                artistic achievement. Each cave tells a story, each painting holds meaning, and each statue represents
                centuries of faith and craftsmanship.
              </p>
              <p className="text-muted-foreground mb-4">
                Take your time to appreciate the intricate details of the cave paintings, the serene expressions of the
                Buddha statues, and the peaceful atmosphere that has drawn pilgrims for millennia. Remember that this is
                not just a tourist attraction but a living temple where people come to pray and find spiritual solace.
              </p>
              <p className="text-muted-foreground font-medium">
                May your visit to Dambulla bring you peace, wonder, and a deeper appreciation for Sri Lankas incredible
                cultural heritage! 🙏✨🎨
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
