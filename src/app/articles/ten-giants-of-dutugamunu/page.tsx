import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Swords, Crown, Users, BookOpen, MapPin, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "The Ten Giants of King Dutugamunu | Ancient Sri Lankan Warriors & Heroes",
  description:
    "Learn about the Ten Giants (Dasa Maha Yodhayo) who fought with King Dutugamunu in battles like Vijithapura. These warriors from places like Kadol helped unify ancient Sri Lanka.",
  keywords:
    "Ten Giants, Dutugamunu, Dasa Maha Yodhayo, Sri Lankan warriors, ancient Sri Lanka, King Dutugamunu, Sri Lankan history, legendary warriors, Anuradhapura, King Elara",
  openGraph: {
    title: "The Ten Giants of King Dutugamunu - Legendary Warriors of Ancient Sri Lanka",
    description:
      "Explore the epic story of the Ten Giants who helped King Dutugamunu unify Sri Lanka in the 2nd century BCE",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

interface Giant {
  name: string
  sinhalaName: string
  title: string
  specialty: string
  description: string
  famousFor: string[]
  origin: string
  image: string
}

const tenGiants: Giant[] = [
  {
    name: "Nandhimitra",
    sinhalaName: "නන්දිමිත්‍ර",
    title: "The Chief Commander",
    specialty: "Supreme Military Strategy",
    description:
      "Nandhimitra was the leader of the Ten Giants. He planned the battles and told the other warriors where to go. At Vijitha Pura Satana (විජිත පුර සටන), his strategies helped win the day. The king trusted him completely with military decisions, and he never let Dutugamunu down.",
    famousFor: [
      "Chief among the ten warriors",
      "Planned the Vijithapura campaign",
      "The king's main military advisor",
      "Won many battles through smart tactics",
    ],
    origin: "Kajaragama",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Suranimala",
    sinhalaName: "සූරනිමල",
    title: "The Swift Warrior",
    specialty: "Speed and Agility",
    description:
      "Suranimala was renowned for his incredible speed and agility in battle. He could move so swiftly that enemies claimed he appeared in multiple places simultaneously. His speed made him an invaluable scout and messenger during military campaigns.",
    famousFor: [
      "Extraordinary speed in battle",
      "Quick strike tactics",
      "Swift intelligence gathering",
      "Rapid battlefield communication",
    ],
    origin: "Mahiyangana",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Mahasona",
    sinhalaName: "මහසෝන",
    title: "The Giant of Immense Strength",
    specialty: "Superhuman Power",
    description:
      "Mahasona possessed enormous physical strength and was said to be able to uproot trees and hurl massive boulders at enemy fortifications. His strength was so legendary that his name became synonymous with supernatural power in Sri Lankan folklore.",
    famousFor: [
      "Incredible physical strength",
      "Breaking through enemy fortifications",
      "Moving heavy siege equipment",
      "Inspiring fear in opponents",
    ],
    origin: "Mahiyangana",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Velusumana",
    sinhalaName: "වැලුසුමන",
    title: "The Master of Disguise",
    specialty: "Espionage and Intelligence",
    description:
      "Velusumana was a master of disguise and espionage. He could infiltrate enemy camps undetected and gather crucial intelligence. His skills in deception and information gathering were vital to Dutugamunu's military success.",
    famousFor: [
      "Espionage and intelligence gathering",
      "Master of disguise",
      "Infiltrating enemy positions",
      "Sabotage operations",
    ],
    origin: "Kosamba",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Vasabha",
    sinhalaName: "වාසභ",
    title: "The Bull Warrior",
    specialty: "Unwavering Courage",
    description:
      "Vasabha earned his name (meaning 'bull') from his unwavering courage and charging power in battle. Like a bull, he would charge fearlessly into enemy lines, breaking their formations and creating opportunities for his fellow warriors.",
    famousFor: [
      "Fearless charging attacks",
      "Breaking enemy formations",
      "Hand-to-hand combat excellence",
      "Inspiring troops with bravery",
    ],
    origin: "Mahagama",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Khanjadeva",
    sinhalaName: "ඛඤ්ජදේව",
    title: "The Weapon Master",
    specialty: "Mastery of All Weapons",
    description:
      "Khanjadeva was a master of every weapon known in ancient Sri Lanka. From swords and spears to bows and maces, he could wield them all with equal skill. He served as the weapons trainer for Dutugamunu's army.",
    famousFor: [
      "Expertise in all weapons",
      "Training the royal army",
      "Weapon innovation",
      "Combat versatility",
    ],
    origin: "Guttasala",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Phussadeva",
    sinhalaName: "ඵුස්සදේව",
    title: "The Tactician",
    specialty: "Battle Formations and Tactics",
    description:
      "Phussadeva specialized in battle formations and tactical maneuvers. He devised innovative fighting formations that maximized the effectiveness of Dutugamunu's forces and minimized casualties during engagements.",
    famousFor: [
      "Innovative battle formations",
      "Tactical planning",
      "Minimizing casualties",
      "Adapting strategies in real-time",
    ],
    origin: "Viharamahakala",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Labhiya Vasabha",
    sinhalaName: "ලභිය වාසභ",
    title: "The Swift Bull",
    specialty: "Combined Speed and Power",
    description:
      "Labhiya Vasabha combined the power of Vasabha with remarkable speed, making him a formidable opponent. He could deliver devastating attacks while maintaining agility, making him unpredictable in battle.",
    famousFor: [
      "Combining speed with strength",
      "Unpredictable combat style",
      "Devastating hit-and-run tactics",
      "Elite shock trooper",
    ],
    origin: "Kandavala",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Gothaimbara",
    sinhalaName: "ගෝතඉඹර",
    title: "The Shield of the King",
    specialty: "Defense and Protection",
    description:
      "Gothaimbara never left the king's side in battle. Some sources mention he came from the Kadol (කඩොල්) region. His job was simple - keep Dutugamunu alive. And he did, through countless battles including the fierce fight at Vijithapura. He knew how to defend fortresses and was an expert in protecting key positions during sieges.",
    famousFor: [
      "King's personal bodyguard",
      "Fought at Vijithapura battle",
      "Possibly from Kadol region",
      "Never left the king's side",
    ],
    origin: "Kadol/Uruvela area",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Theraputtabhaya",
    sinhalaName: "තෙරපුත්තාභය",
    title: "The Elephant Commander",
    specialty: "Elephant Warfare",
    description:
      "Theraputtabhaya was the master of elephant warfare, commanding and training the war elephants that formed a crucial part of Dutugamunu's military might. He understood elephant behavior and tactics better than anyone in the kingdom.",
    famousFor: [
      "Commander of war elephants",
      "Elephant training and tactics",
      "Cavalry coordination",
      "Siege warfare specialist",
    ],
    origin: "Culanagara",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function TenGiantsArticle() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Ten-giants-of-dutugamunu.png"
          alt="Ancient warriors of King Dutugamunu preparing for battle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-600 text-white border-orange-500">
            <BookOpen className="w-4 h-4 mr-1" />
            Ancient Sri Lankan History
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">The Ten Giants of Dutugamunu</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Legendary Warriors Who United Ancient Sri Lanka
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-neutral-100 bg-yellow-600/80 text-white border-yellow-500">
              <Calendar className="w-4 h-4 mr-1" />
              161-137 BCE
            </Badge>
            <Badge variant="secondary" className="bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-neutral-100 bg-blue-600/80 text-white border-blue-500">
              <MapPin className="w-4 h-4 mr-1" />
              Anuradhapura Kingdom
            </Badge>
            <Badge variant="secondary" className="bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-neutral-100 bg-red-600/80 text-white border-red-500">
              <Users className="w-4 h-4 mr-1" />
              10 Legendary Heroes
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Navigation */}
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Crown className="w-8 h-8 text-orange-600" />
                The Legendary Dasa Maha Yodhayo
              </CardTitle>
              <CardDescription className="text-lg">
                Heroes of Ancient Sri Lankan Warfare and Nation Building
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                These ten warriors - the <strong>Dasa Maha Yodhayo</strong> (දස මහා යෝධයෝ) - came from 
                different parts of the southern kingdom. Some say Gothaimbara was from Kadol area. They weren't 
                just soldiers - they were King Dutugamunu's trusted friends who stood by him from the beginning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Mahavamsa tells us these men fought in major battles during the campaign to reunite Sri Lanka. 
                The Battle of Vijithapura (Vijitha Pura Satana) was one of the fiercest encounters where the Ten 
                Giants proved their worth. After years of fighting, they helped Dutugamunu defeat King Elara and 
                bring the island under one rule again.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What makes their story special is the friendship between these men from different backgrounds. 
                They each had different skills - one was strong, another was fast, one knew strategy. Together 
                they were unstoppable. Even now, Sri Lankan children learn their names in school and hear stories 
                about their bravery.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Historical Context */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-orange-600" />
            Historical Context
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">The Era of Division</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Back then, Sri Lanka was split in two. King Elara ruled the north from Anuradhapura. 
                  The Sinhalese kings controlled the south from Mahagama (today's Tissamaharama). Elara 
                  was actually a fair king, but young Dutugamunu wanted to reunite the whole island.
                </p>
                <p className="text-muted-foreground">
                  His father King Kavantissa had started this mission but given up. Dutugamunu wouldn't quit. 
                  He gathered an army and started marching north, fighting battle after battle to reach Anuradhapura.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Dutugamunu&apos;s Quest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Dutugamunu gathered warriors from villages across the south - from Kajaragama, Mahiyangana, 
                  Kadol, and other areas. These men became the famous Ten Giants. Each one was special in his 
                  own way - some were incredibly strong, others were clever strategists or super fast.
                </p>
                <p className="text-muted-foreground">
                  The Battle of Vijithapura was one of their toughest fights. But working together, the Ten 
                  Giants helped clear the way to Anuradhapura. Finally, Dutugamunu and Elara fought one-on-one, 
                  and Dutugamunu won. Sri Lanka was united again, and a great era of building stupas and 
                  monasteries began.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Ten Giants */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-orange-600" />
              Meet the Ten Giants
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each warrior brought extraordinary abilities and unwavering loyalty to King Dutugamunu&apos;s cause
            </p>
          </div>

          <div className="space-y-8">
            {tenGiants.map((giant, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600"
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={giant.image}
                      alt={`${giant.name} - ${giant.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-600 text-white font-bold">
                        Giant #{index + 1}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{giant.name}</h3>
                      <p className="text-lg text-muted-foreground mb-2">{giant.sinhalaName}</p>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        {giant.title}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Swords className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold">Specialty:</span>
                        <span className="text-muted-foreground">{giant.specialty}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold">Origin:</span>
                        <span className="text-muted-foreground">{giant.origin}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{giant.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-orange-600" />
                        Famous For:
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {giant.famousFor.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Kadol Atha - The Royal War Elephant */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-blue-600 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <Crown className="w-7 h-7 text-blue-600" />
                Kadol Atha - The Royal War Elephant
              </CardTitle>
              <CardDescription className="text-lg">
                King Dutugamunu's Legendary Battle Companion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You can't tell the story of the Ten Giants without mentioning Kadol Atha (කඩොල් ඇතා). This wasn't 
                just any elephant - this was King Dutugamunu's royal war elephant, his most trusted companion in battle. 
                Some say the elephant came from the Kadol region, which might explain the name.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kadol Atha had a special bond with Nandhimitra, the chief of the Ten Giants. Nandhimitra often rode 
                this elephant into battle, commanding troops from up high where everyone could see him. The elephant 
                knew him well and would respond to his signals during fights. When Nandhimitra pointed his sword, 
                Kadol Atha charged. When he pulled the reins, the elephant stopped. They worked together like they 
                could read each other's minds.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                But Kadol Atha's main job was carrying King Dutugamunu himself. In the final battle against King Elara, 
                Dutugamunu rode Kadol Atha. The two kings faced each other on elephants, and when they charged, Kadol 
                Atha didn't back down. The chronicles say this brave elephant helped the king win that historic duel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After the wars ended, Kadol Atha lived peacefully with the king. When the great stupas were being built, 
                this elephant helped carry materials. Even in peace, Kadol Atha served his king. The bond between 
                Dutugamunu and his elephant became legendary - people still tell stories about how the king loved this 
                animal like a friend, not just a war beast.
              </p>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  <strong>Did you know?</strong> War elephants were essential in ancient Sri Lankan battles. They could 
                  break through enemy lines, carry commanders, and even had armor to protect them. Kadol Atha was 
                  considered the finest war elephant of that era.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legacy and Cultural Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legacy and Cultural Impact</h2>
          
          {/* Battle of Vijithapura */}
          <div className="mb-8">
            <Card className="border-l-4 border-l-red-600 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Swords className="w-6 h-6 text-red-600" />
                  The Battle of Vijithapura
                </CardTitle>
                <CardDescription>Where the Ten Giants Proved Their Worth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Vijithapura was a fortified city on Dutugamunu's path to Anuradhapura. The battle here was tough - 
                  the enemy had strong walls and plenty of soldiers. This is where each of the Ten Giants showed what 
                  they could really do.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Gothaimbara, the warrior from Kadol, stayed right next to the king through the whole fight. While 
                  arrows were flying everywhere, his only job was keeping Dutugamunu safe - and nobody got past him. 
                  Nandhimitra planned the attack, figuring out where to hit the walls and when to charge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mahasona used his incredible strength to break through the gates. People say he literally pushed 
                  the doors down. Suranimala was everywhere at once - running messages between units so fast the 
                  enemy thought there were multiple armies. Velusumana had already snuck into the city days before, 
                  learning their weak spots and where guards were stationed.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When the walls came down, Vasabha led the charge into the city like a bull. Khanjadeva fought with 
                  every weapon he had - sword, spear, bow - switching between them as needed. Phussadeva kept the 
                  troops in formation so they didn't get scattered. Labhiya Vasabha hit hard and moved fast, confusing 
                  the defenders. And Theraputtabhaya commanded the war elephants that smashed through the last defenses.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  After Vijithapura fell, people knew these ten warriors were special. They weren't just strong - they 
                  worked together like fingers on a hand. The road to Anuradhapura was open.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-orange-600">
              <CardHeader>
                <CardTitle className="text-lg">In Literature</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You can read about them in the Mahavamsa - that's our ancient history book written by monks. 
                Sri Lankan kids learn these stories in school. Poets have written about them, and old folk 
                songs mention their names. The Battle of Vijithapura and other fights are part of our heritage.
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-600">
              <CardHeader>
                <CardTitle className="text-lg">In Folk Culture</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Even today, if someone is very strong, people might say "strong like Mahasona." That's how 
                much these warriors are part of our culture. Mahasona especially became a character in ghost 
                stories - though the real Mahasona was just an incredibly strong man, not a demon!
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-600">
              <CardHeader>
                <CardTitle className="text-lg">Modern Inspiration</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                What can we learn from them? That friends with different talents working together can achieve 
                great things. They were loyal to each other and to their king. From the villages of Kadol to 
                Kajaragama, these men came together for a common purpose. That's still inspiring today.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visit Historical Sites */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="text-2xl">Visit Historical Sites Connected to This Era</CardTitle>
              <CardDescription>
                Walk in the footsteps of these legendary warriors and experience ancient Sri Lankan history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    Key Historical Locations:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <strong>Anuradhapura:</strong> The ancient capital where Dutugamunu ruled and built
                      magnificent monuments
                    </li>
                    <li>
                      <strong>Tissamaharama:</strong> Site of ancient Mahagama, where Dutugamunu began his
                      campaign
                    </li>
                    <li>
                      <strong>Ruwanwelisaya Stupa:</strong> Built by Dutugamunu as one of Sri Lanka&apos;s most
                      sacred Buddhist monuments
                    </li>
                    <li>
                      <strong>Mirisawetiya Stupa:</strong> Another magnificent construction by Dutugamunu
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Crown className="w-4 h-4 text-orange-600" />
                    What to Explore:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Ancient palace ruins and royal gardens</li>
                    <li>Massive stupas and Buddhist monasteries</li>
                    <li>Archaeological museums with artifacts from this period</li>
                    <li>Sacred sites mentioned in the Mahavamsa chronicle</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/destinations/anuradhapura" passHref legacyBehavior>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Explore Anuradhapura
                  </Button>
                </Link>
                <Link href="/destinations" passHref legacyBehavior>
                  <Button variant="outline">View All Historical Sites</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">King Dutugamunu</CardTitle>
                <CardDescription>The great king who unified Sri Lanka</CardDescription>
              </CardHeader>
              <CardContent>
              <Image src="/images/king-dutugamunu.jpg" alt="King Dutugamunu" width={400} height={250} />
                <Link href="/articles/king-dutugamunu" passHref legacyBehavior>
                  <Button variant="link" className="p-0 h-auto text-orange-600 cursor-pointer">
                    Read More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Ancient Kingdoms of Sri Lanka</CardTitle>
                <CardDescription>Explore the historical kingdoms and their rulers</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/articles" passHref legacyBehavior>
                  <Button variant="link" className="p-0 h-auto text-orange-600">
                    Explore Articles →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">UNESCO Sites in Sri Lanka</CardTitle>
                <CardDescription>Visit ancient cities and sacred sites</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/explore/unesco-sites" passHref legacyBehavior>
                  <Button variant="link" className="p-0 h-auto text-orange-600">
                    Discover Sites →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-4 bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-900 dark:to-amber-900 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Discover Ancient Sri Lankan History</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Walk through the ancient cities where these legendary warriors once stood. Experience the
            magnificent monuments and sacred sites from this golden age of Sri Lankan civilization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-trip" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Plan Your Historical Tour
              </Button>
            </Link>
            <Link href="/contact-us" passHref legacyBehavior>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
