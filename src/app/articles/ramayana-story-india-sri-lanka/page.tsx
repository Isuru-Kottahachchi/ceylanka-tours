"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, Users, Book, Heart, Zap, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function RamayanaStoryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Book className="h-16 w-16 text-orange-100" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Ramayana: Epic Story Between India and Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 font-light">
              Discover the ancient tale of love, courage, and devotion that connects two great nations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Ancient Epic Story
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                India & Sri Lanka
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Cultural Heritage
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Introduction */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The Ramayana is one of the world&apos;s greatest stories. This ancient tale tells us about brave Prince Rama,
                his beloved wife Sita, and the powerful king Ravana who ruled Sri Lanka long ago. The story shows us how
                righteousness and love always prevail, and how compassion can overcome any challenge.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This epic connects India and Sri Lanka through an amazing adventure that happened thousands of years ago.
                Today, you can still visit many places in both countries where this story took place.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Authors and Origins */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Who Wrote This Amazing Story?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sage Valmiki */}
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Sage Valmiki</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">Original Sanskrit Author</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Known as the &apos;Adi Kavi&apos; (First Poet), Sage Valmiki wrote the original Ramayana in Sanskrit around
                  500-400 BCE. His beautiful verses tell the complete story in 24,000 verses divided into 7 books.
                  He is considered the father of Sanskrit poetry.
                </p>
              </CardContent>
            </Card>

            {/* Kambar */}
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Kambar</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">Tamil Version</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The great Tamil poet Kambar wrote &quot;Kamba Ramayanam&quot; in the 12th century. His version is very popular
                  in Tamil Nadu and Sri Lanka. He added beautiful Tamil poetry and cultural elements that made the
                  story more meaningful for Tamil-speaking people.
                </p>
              </CardContent>
            </Card>

            {/* Other Versions */}
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Many Other Writers</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">Regional Versions</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Over thousands of years, many talented writers have retold this story in different languages:
                  Tulsidas in Hindi, Krittibas in Bengali, Ezhuthachan in Malayalam, and many Sinhala poets in
                  Sri Lanka. Each version adds local flavor while keeping the main story.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/50 w-12 h-12 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">A Living Story</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                    What makes the Ramayana special is that it&apos;s not just one person&apos;s creation. Over thousands of years,
                    storytellers, poets, and writers from different regions have added their own beautiful touches while
                    keeping the heart of the story alive. This is why you&apos;ll find slight differences in versions from
                    different places, but the main message of love, courage, and righteousness remains the same everywhere.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Characters */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Meet the Main Characters</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Rama */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <img
                    src="/Rama.png"
                    alt="Prince Rama"
                    className="rounded-full w-48 h-48 sm:w-32 sm:h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Prince Rama</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A brave and good prince from Ayodhya in India. He was kind, strong, and always did the right thing.
                  People loved him because he was fair and honest.
                </p>
              </CardContent>
            </Card>

            {/* Sita */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <img
                    src="/Princess-Sita.png"
                    alt="Princess Sita"
                    className="rounded-full w-48 h-48 sm:w-32 sm:h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Princess Sita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rama&apos;s beautiful and wise wife. She was brave, loyal, and pure-hearted. Even when facing great danger,
                  she stayed strong and faithful.
                </p>
              </CardContent>
            </Card>

            {/* Ravana */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <img
                    src="/King-Ravana.png"
                    alt="King Ravana"
                    className="rounded-full w-48 h-48 sm:w-32 sm:h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-lg">King Ravana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The powerful ten-headed king of Lanka (Sri Lanka). He was very smart and strong, but his pride and
                  selfishness led him to make bad choices.
                </p>
                <div className="mt-4 flex justify-center">
                  <Link href="/blog/king-ravana" passHref legacyBehavior>
                    <Button
                      variant="secondary"
                      className="group bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all duration-300 font-semibold text-base cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                    >
                      About King Ravana
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>


            {/* Hanuman */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <img
                    src="/Hanuman.png"
                    alt="Hanuman"
                    className="rounded-full w-48 h-48 sm:w-32 sm:h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Hanuman</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A brave monkey warrior who could fly and had amazing strength. He was Rama&apos;s most loyal friend and
                  helped rescue Sita with his courage and wisdom. He could change his size and had magical powers.
                </p>
              </CardContent>
            </Card>

            {/* Lakshmana */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <img
                    src="/Lakshmana.png"
                    alt="Lakshmana"
                    className="rounded-full w-48 h-48 sm:w-32 sm:h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Lakshmana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rama&apos;s younger brother who loved him so much that he left his comfortable life to protect Rama and
                  Sita in the forest. He was brave, loyal, and always ready to fight for what was right.
                </p>
              </CardContent>
            </Card>

            {/* Vibhishana */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <img
                    src="/Vibhishana.png"
                    alt="Vibhishana"
                    className="rounded-full w-48 h-48 sm:w-32 sm:h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Vibhishana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ravana&apos;s younger brother who was good and righteous. Even though Ravana was his brother, he chose
                  to help Rama because he knew what was right. He became the wise king of Lanka after Ravana.
                </p>
              </CardContent>
            </Card>

            {/* Sugriva */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <img
                    src="/Sugriva.png"
                    alt="Sugriva"
                    className="rounded-full w-48 h-48 sm:w-32 sm:h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Sugriva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The king of the monkeys who became Rama&apos;s ally. Rama helped him get back his kingdom, and in return,
                  Sugriva provided his entire monkey army to help search for Sita and fight against Ravana.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Amazing Story</h2>

          <div className="space-y-8">

            {/* Chapter 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  Rama and Sita&apos;s Exile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Prince Rama was supposed to become the king of Ayodhya, a beautiful city in India. But his stepmother
                  wanted her own son to be king instead. She asked Rama&apos;s father to send Rama away to the forest for
                  14 years. Rama agreed because he always respected his father. His wife Sita and brother Lakshmana
                  decided to go with him to the forest.
                </p>
              </CardContent>
            </Card>

            {/* Chapter 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-red-100 dark:bg-red-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 font-bold">2</span>
                  </div>
                  Ravana Kidnaps Sita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  While living in the forest, Ravana heard about Sita&apos;s beauty and wanted to marry her. He used magic
                  to trick Rama and Lakshmana into leaving Sita alone. Then he disguised himself as a holy man and
                  kidnapped Sita. He took her to his golden city of Lanka, which is now Sri Lanka. Sita refused to marry
                  Ravana and stayed faithful to Rama.
                </p>
              </CardContent>
            </Card>

            {/* Chapter 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-orange-100 dark:bg-orange-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">3</span>
                  </div>
                  Hanuman&apos;s Great Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rama was heartbroken when he discovered Sita was missing. He met Hanuman and the monkey army who
                  promised to help find her. Hanuman used his magical powers to jump across the ocean from India to
                  Sri Lanka. He found Sita in Ravana&apos;s garden and gave her Rama&apos;s ring to show she was not forgotten.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Before leaving, Hanuman destroyed part of Lanka to show Ravana how powerful Rama&apos;s friends were.
                  He set fire to the golden city with his burning tail, but made sure not to hurt innocent people.
                  When he jumped back to India, he carried with him Sita&apos;s jewel as proof that he had found her.
                </p>
              </CardContent>
            </Card>

            {/* Chapter 4 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-red-100 dark:bg-red-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 font-bold">4</span>
                  </div>
                  Lakshmana&apos;s Injury and Hanuman&apos;s Medicine Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During the great battle in Lanka, Lakshmana was badly hurt by a poisoned arrow from Ravana&apos;s son.
                  He fell unconscious and was dying. The only medicine that could save him was a special herb called
                  &quot;Sanjeevani&quot; that grew on a mountain in the far-away Himalayas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hanuman flew all the way to the Himalayas to get this life-saving herb. But when he reached the
                  mountain, he couldn&apos;t identify which plant was the right medicine among so many herbs. So he
                  lifted the entire mountain and flew back to Lanka! On his way, a piece of the mountain fell near
                  Galle in Sri Lanka - this is now called Rumassala Hill, where you can still find rare healing plants today.
                </p>
              </CardContent>
            </Card>

            {/* Chapter 5 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-green-100 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">5</span>
                  </div>
                  The Great Battle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To reach Lanka, Rama&apos;s army faced a big challenge - how to cross the vast ocean? The wise bear Jambavan
                  suggested building a bridge. Under the guidance of Nala and Nila (sons of the divine architect Vishvakarma),
                  thousands of monkeys and bears worked together to build an incredible bridge across the sea.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This amazing bridge was made of huge rocks, trees, and mountains that the monkeys carried from far away.
                  Hanuman and other mighty monkeys could lift entire hills! Each stone floated on water because they wrote
                  Rama&apos;s holy name on them. The bridge was 100 yojanas (about 800 miles) long and took just 5 days to build.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This bridge is known today as <strong>Adam&apos;s Bridge</strong> or <strong>Rama Setu</strong>. You can still see
                  the remains of this ancient bridge - it&apos;s a chain of coral reefs, sandbanks, and rocks between
                  Pamban Island in India and Mannar Island in Sri Lanka. Even today, scientists and archaeologists study
                  this natural formation that connects the two countries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When they reached Lanka, there was a great war between good and evil. Many brave warriors fought on
                  both sides. Ravana had ten heads and twenty arms, making him very powerful. But Rama&apos;s arrows were
                  blessed by the gods. Finally, Rama defeated Ravana with his special arrow, and righteousness prevailed.
                  The earth shook and the heavens celebrated when Ravana fell.
                </p>
              </CardContent>
            </Card>

            {/* Chapter 6 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-pink-100 dark:bg-pink-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 dark:text-pink-400 font-bold">6</span>
                  </div>
                  Sita&apos;s Test of Purity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After Ravana was defeated, some people questioned whether Sita had remained pure while living in
                  Lanka. To prove her faithfulness and purity, Sita asked for a test by fire. She walked into a
                  burning fire, but the fire god protected her because she was completely innocent and faithful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The fire didn&apos;t harm her at all - not even her clothes were burned! This miracle proved to everyone
                  that Sita had always remained true to Rama. This test took place at what is now called Divurumpola
                  in Sri Lanka, where there&apos;s a beautiful temple commemorating this event.
                </p>
              </CardContent>
            </Card>

            {/* Chapter 7 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">7</span>
                  </div>
                  Happy Reunion and Return Home
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After the battle, Rama and Sita were reunited. They were so happy to be together again! Ravana&apos;s
                  brother Vibhishana, who was good and had helped Rama during the war, became the new king of Lanka.
                  He promised to rule with kindness and justice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Rama, Sita, and Lakshmana flew back to India in Pushpaka, a magical flying chariot that belonged to
                  Ravana. As they flew over the places where they had lived during their exile, they remembered all
                  their adventures. When they returned to Ayodhya, the whole city celebrated with lights and joy.
                  This is why people still celebrate Diwali - the festival of lights - to remember Rama&apos;s return home.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Focus: Rumassala Hill */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            The Miracle of Rumassala Hill
          </h2>

          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                Hanuman&apos;s Flying Mountain
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-400">The Legend</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      When Lakshmana was dying from a poisoned arrow, time was running out. Hanuman had to bring the
                      life-saving Sanjeevani herb from the Himalayas before sunrise, or Lakshmana would die forever.
                    </p>
                    <p>
                      Flying at incredible speed while carrying the entire mountain, Hanuman was racing against time.
                      As he flew over the ocean near Galle in Sri Lanka, a piece of the mountain broke off and fell
                      into the sea, creating what we now call Rumassala Hill.
                    </p>
                    <p>
                      This wasn&apos;t just any ordinary rock - it was a piece of the sacred Himalayan mountain filled
                      with powerful healing herbs and magical plants that don&apos;t grow anywhere else in Sri Lanka.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-400">What Makes It Special Today</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Scientists and botanists are amazed by Rumassala Hill because it has plants that normally grow
                      only in the Himalayas - thousands of miles away! These include rare medicinal herbs that have
                      been used for healing for centuries.
                    </p>
                    <p>
                      Local people still use plants from Rumassala to make traditional medicines. The hill has over
                      200 different types of plants, many of which are found nowhere else in Sri Lanka.
                    </p>
                    <p>
                      The hill rises 130 meters above sea level and offers beautiful views of the ocean. You can walk
                      through peaceful trails and see the same herbs that Hanuman carried to save Lakshmana&apos;s life.
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-400">Visiting Rumassala Hill</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Location</h4>
                    <p className="text-xs text-muted-foreground">Near Unawatuna Beach, Galle District</p>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Best Time</h4>
                    <p className="text-xs text-muted-foreground">Early morning or evening for cooler weather</p>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <Star className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Experience</h4>
                    <p className="text-xs text-muted-foreground">Nature walks, herb gardens, ocean views</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Places You Can Visit Today */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Places You Can Visit Today</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Sri Lanka Sites */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-green-600" />
                  Ramayana Sites in Sri Lanka
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Sita Eliya</h4>
                    <p className="text-sm text-muted-foreground">
                      A beautiful temple where people believe Sita was kept. You can see the place where she sat and
                      prayed every day, hoping Rama would come to save her.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Ravana Falls</h4>
                    <p className="text-sm text-muted-foreground">
                      A stunning waterfall named after King Ravana. Legend says this was near his palace. The water
                      falls from high mountains and creates a magical sight.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Adam&apos;s Bridge (Rama Setu)</h4>
                    <p className="text-sm text-muted-foreground">
                      A remarkable chain of coral reefs, sandbanks, and rocks stretching 30 km between Pamban Island
                      (India) and Mannar Island (Sri Lanka). Many believe this is the legendary bridge built by Rama&apos;s
                      monkey army to reach Lanka. Best viewed from Mannar or by boat tours. You can see the bridge
                      formations extending into the sea, creating a natural causeway that matches ancient descriptions.
                      The shallow waters make it possible to walk partway across during low tide!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Ashoka Vatika</h4>
                    <p className="text-sm text-muted-foreground">
                      The garden in Kandy where people believe Sita was kept. It&apos;s now a peaceful place with
                      beautiful trees and flowers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Rumassala Hill</h4>
                    <p className="text-sm text-muted-foreground">
                      A magical hill near Galle with healing herbs. Legend says Hanuman dropped this piece of the
                      Himalayan mountain while bringing medicine to save Lakshmana&apos;s life during the great battle.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Divurumpola Temple</h4>
                    <p className="text-sm text-muted-foreground">
                      The place where Sita proved her purity through a fire test. Located in central Sri Lanka,
                      this temple marks where Sita walked through fire to show she remained faithful to Rama.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* India Sites */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Ramayana Sites in India
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">Ayodhya</h4>
                    <p className="text-sm text-muted-foreground">
                      Rama&apos;s birthplace and kingdom in northern India. You can visit temples and see where this
                      great story began thousands of years ago.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">Kishkindha</h4>
                    <p className="text-sm text-muted-foreground">
                      The mountain kingdom where Rama met Hanuman and the monkey army. Located in Karnataka state,
                      you can see caves and rocks from the story.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">Rameshwaram</h4>
                    <p className="text-sm text-muted-foreground">
                      The place where Rama started building the bridge to Lanka. There&apos;s a famous temple here and
                      you can see the ocean that Hanuman jumped across.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">Chitrakoot</h4>
                    <p className="text-sm text-muted-foreground">
                      One of the forest places where Rama, Sita, and Lakshmana lived during their exile. It&apos;s now
                      a peaceful pilgrimage site.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What This Story Teaches Us */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What This Story Teaches Us</h2>

          <Card className="border-t-4 border-t-purple-500">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Good Values</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Heart className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Love and loyalty in marriage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Friendship and helping others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Being honest and keeping promises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Courage in difficult times</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Life Lessons</h3>
                  <ul className="space-y-3 text-muted-foreground">

                    <li className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Patience helps us overcome problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Working together makes us stronger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Pride and selfishness cause problems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why This Story Connects India and Sri Lanka */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why This Story Connects India and Sri Lanka
          </h2>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">Cultural Bridge</h3>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Ramayana story shows how India and Sri Lanka have been connected for thousands of years. Both
                    countries share this beautiful tale that teaches the same good values.
                  </p>
                  <p>
                    People in both countries celebrate festivals like Diwali and Dussehra that remember this story.
                    They build temples, create art, and tell these tales to their children.
                  </p>
                  <p>
                    When you visit both countries, you can see how the same story is told in different ways but with
                    the same important messages about being good, brave, and loving.
                  </p>
                  <p>
                    Today, many people travel between India and Sri Lanka to visit the places from this ancient story.
                    It brings people together and helps them understand each other better.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Cultural Connections */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-6 w-6 text-orange-600" />
                    Language and Literature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>
                      The original Ramayana was written by <strong>Sage Valmiki</strong> in ancient Sanskrit around 500-400 BCE.
                      His 24,000 verses became the foundation for all other versions. Both countries have their own
                      beautiful adaptations in local languages.
                    </p>
                    <p>
                      In Sri Lanka, there are beautiful Sinhala and Tamil versions. The Tamil poet <strong>Kambar</strong>
                      wrote the famous &quot;Kamba Ramayanam&quot; in the 12th century, which is very popular in both Tamil Nadu
                      and Sri Lanka. Other notable authors include <strong>Tulsidas</strong> (Hindi), <strong>Krittibas</strong> (Bengali),
                      and many Sinhala poets.
                    </p>
                    <p>
                      Each writer added their own cultural touches while keeping the main message of righteousness
                      prevailing. Even today, you can watch traditional dance performances, puppet shows, and plays
                      based on these different versions in both India and Sri Lanka.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-6 w-6 text-purple-600" />
                    Festivals and Celebrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>
                      <strong>Diwali:</strong> The festival of lights celebrates Rama&apos;s return home to Ayodhya.
                      People light oil lamps just like the citizens of Ayodhya did thousands of years ago.
                    </p>
                    <p>
                      <strong>Dussehra:</strong> This festival celebrates Rama&apos;s victory over Ravana. Giant
                      effigies of Ravana are burned to show that good always wins over evil.
                    </p>
                    <p>
                      <strong>Ram Navami:</strong> Rama&apos;s birthday is celebrated with prayers, processions, and
                      storytelling in temples across both countries.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-emerald-600" />
                  Archaeological Evidence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    While the Ramayana is an ancient story, archaeologists have found interesting evidence that supports
                    some parts of the tale:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Adam&apos;s Bridge</h4>
                      <p className="text-sm">
                        Satellite images show a chain of limestone, sand, and coral between India and Sri Lanka.
                        This natural formation matches the description of the bridge built by Rama&apos;s army.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Ancient Cities</h4>
                      <p className="text-sm">
                        Archaeological sites in both countries show evidence of ancient civilizations that existed
                        during the time period when the Ramayana is said to have taken place.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Plant Evidence</h4>
                      <p className="text-sm">
                        Rumassala Hill really does have Himalayan plants that don&apos;t grow elsewhere in Sri Lanka,
                        supporting the story of Hanuman dropping part of the mountain.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Cultural Practices</h4>
                      <p className="text-sm">
                        Similar customs, architectural styles, and religious practices in both countries suggest
                        ancient connections that could date back to Ramayana times.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Planning Your Ramayana Journey */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Plan Your Ramayana Journey</h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Sri Lanka Ramayana Tour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visit all the main Ramayana sites in Sri Lanka including Sita Eliya, Ravana Falls, Rumassala Hill,
                    and ancient temples with expert guides who know the stories.
                  </p>
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 mb-2">
                    5-7 Days
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-2">
                    Includes: Transport, Guide, Temple visits, Cultural shows
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">India-Sri Lanka Combined</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience the complete Ramayana trail across both countries. Start in Ayodhya, follow Rama&apos;s
                    journey to Sri Lanka, and return via the sacred sites.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-2">
                    12-16 Days
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-2">
                    Includes: Flights, Visas, Guides, All accommodations
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Cultural Immersion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn from storytellers, attend festivals, participate in temple ceremonies, and experience
                    traditional dances that bring the Ramayana to life.
                  </p>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 mb-2">
                    Custom Duration
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-2">
                    Includes: Cultural experiences, Local experts, Workshops
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Itinerary Sample */}
            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-cyan-600" />
                  Sample 7-Day Sri Lanka Ramayana Tour
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Day 1-2: Colombo & Galle</h4>
                      <p className="text-sm text-muted-foreground">
                        Arrive in Colombo, visit National Museum for Ramayana artifacts. Travel to Galle, explore
                        Rumassala Hill where Hanuman dropped the healing herbs. Sunset at Unawatuna Beach.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Day 3-4: Ella & Badulla</h4>
                      <p className="text-sm text-muted-foreground">
                        Visit Ravana Falls and Ravana Cave. Explore Sita Eliya temple where Sita was held captive.
                        Take the scenic train ride through tea country that Hanuman might have flown over.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Day 5-6: Nuwara Eliya & Kandy</h4>
                      <p className="text-sm text-muted-foreground">
                        Visit Ashoka Vatika gardens in Nuwara Eliya. Travel to Kandy to see more Ramayana sites and
                        attend traditional cultural performances featuring Ramayana stories.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Day 7: Mannar & Adam&apos;s Bridge</h4>
                      <p className="text-sm text-muted-foreground">
                        Travel to Mannar to see Adam&apos;s Bridge (Rama Setu) - the legendary bridge built by Hanuman
                        and the monkey army. Take a boat tour to see the coral formations and sandbanks stretching
                        toward India. Visit Divurumpola Temple where Sita proved her purity. Return to Colombo for departure.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    What&apos;s Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Expert local guides who know all the Ramayana stories
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Comfortable air-conditioned transport
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      All temple entrance fees and donations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Cultural performances and storytelling sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Traditional lunch at local restaurants
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Ramayana guidebook and site maps
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-6 w-6 text-blue-600" />
                    Special Experiences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Meet with temple priests who preserve ancient stories
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Participate in traditional blessing ceremonies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Learn about medicinal plants at Rumassala Hill
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Watch traditional puppet shows telling Ramayana stories
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Photography workshops at scenic Ramayana locations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Evening storytelling by campfire under the stars
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Conclusion */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Experience This Timeless Story
              </h2>
              <p className="text-xl mb-6 text-orange-100 max-w-3xl mx-auto">
                The Ramayana is more than just a story – it&apos;s a journey through ancient lands, timeless values, and
                the connection between two beautiful countries. Come and walk in the footsteps of these legendary characters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-base">
                  <Heart className="h-5 w-5 mr-2" />
                  Ancient Love Story
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-base">
                  <Star className="h-5 w-5 mr-2" />
                  Eternal Values
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-base">
                  <MapPin className="h-5 w-5 mr-2" />
                  Real Places to Visit
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  )
}
