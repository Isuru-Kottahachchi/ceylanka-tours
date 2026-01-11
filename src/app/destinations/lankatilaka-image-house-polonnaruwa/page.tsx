"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Building2, Crown, Camera, Calendar, Users, Mountain, Book } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LankatilakaPollonnaruwaGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Lankatilaka-Image-House.jpeg"
          alt="Majestic Lankatilaka Image House showing towering brick walls and ancient Buddhist architecture in Polonnaruwa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lankatilaka Image House</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">Ancient Temple of the Towering Buddha</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
              <MapPin className="w-4 h-4 mr-1" />
              Polonnaruwa, North Central Province
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
              <Building2 className="w-4 h-4 mr-1" />
              Ancient Image House
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
              <Calendar className="w-4 h-4 mr-1" />
              12th Century (1157 CE)
            </Badge>
          </div>
        </div>
      </section>

      {/* Section Navigation Bar */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
          <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
          <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Quick Facts</a>
          <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">How to Get There</a>
          <a href="#what-to-see" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">What to See</a>
          <a href="#visitor-tips" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visitor Tips</a>
          <a href="#nearby" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Nearby Sites</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 scroll-mt-40" id="introduction">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Discover Lankatilaka: A Monument of Ancient Grandeur
          </h2>
          <div className="grid md:grid-cols-[1fr_140px] gap-6 items-start">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg mb-4">
                Lankatilaka Image House stands as one of the most impressive structures in the ancient city of Polonnaruwa. 
                Built in the 12th century by King Parakramabahu the Great, this massive brick temple once housed a giant 
                standing Buddha statue that reached over 40 feet tall. The towering walls that remain today still show 
                the incredible skill of ancient Sri Lankan builders.
              </p>
              <p className="text-lg">
                What makes Lankatilaka special is its unique design - four massive walls that rise up like a fortress, 
                with beautiful stone carvings and detailed decorations. Although the roof is gone and parts of the Buddha 
                statue have broken over time, walking through this ancient temple still feels magical. You can see the 
                original stone doorways, wall paintings, and imagine how grand this place must have been 900 years ago.
              </p>
            </div>
            
            {/* Small Sri Lanka Map with Polonnaruwa Location */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-[120px] bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 border border-blue-200 dark:border-blue-800">
                <svg viewBox="310 30 130 180" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                  {/* Sri Lanka outline */}
                  <path
                    d="M 350,40 
                       C 355,38 360,37 365,38 
                       L 372,42 378,48 383,56 387,65 
                       L 390,75 392,86 393,98 393,110 392,122
                       L 390,135 387,148 383,161 378,174 372,187
                       L 365,199 357,210 348,220 338,229 327,237
                       L 320,170 318,155 317,140 318,125 320,110
                       L 323,95 327,81 332,68 338,56 345,46 Z"
                    fill="#dbeafe"
                    stroke="#2563eb"
                    strokeWidth="1"
                    className="dark:fill-blue-900/40 dark:stroke-blue-500"
                  />
                  
                  {/* Polonnaruwa location marker - north central */}
                  <circle cx="370" cy="90" r="3" fill="#dc2626" />
                  <circle cx="370" cy="90" r="5" fill="#dc2626" opacity="0.4">
                    <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Colombo reference */}
                  <circle cx="325" cy="145" r="1.5" fill="#6b7280" />
                </svg>
                
                <div className="text-center mt-1">
                  <div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-bold text-[10px]">
                    <MapPin className="w-3 h-3" />
                    <span>You are here</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground">North Central</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <div className="my-8 p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/60 border-l-4 border-yellow-400 dark:border-yellow-500">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Did you know?</h4>
              <p className="text-gray-800 dark:text-yellow-100">
                The name &quot;Lankatilaka&quot; means &quot;Beauty of Lanka&quot; in Sanskrit. This temple was built to show 
                the power and wealth of King Parakramabahu the Great, who ruled from 1153 to 1186 CE. The original 
                Buddha statue inside was so tall that visitors had to look up at its face from the doorway. The walls 
                are over 50 feet high and 17 feet thick in some places, built to last forever without modern tools 
                or machinery!
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts & How to Get There side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Quick Facts (left) */}
          <section className="flex-1 scroll-mt-40" id="quick-facts">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Lankatilaka Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>
                        <strong>Location:</strong> Polonnaruwa Ancient City
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>
                        <strong>Built in:</strong> 1157 CE (12th century)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-purple-500" />
                      <span>
                        <strong>Built by:</strong> King Parakramabahu I
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyan-500" />
                      <span>
                        <strong>Type:</strong> Buddhist Image House
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-green-500" />
                      <span>
                        <strong>Wall height:</strong> Over 50 feet (17 meters)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-pink-500" />
                      <span>
                        <strong>Visit time:</strong> 30-45 minutes
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Get There (right) */}
          <section className="flex-1 scroll-mt-40" id="how-to-get">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  How to Get to Lankatilaka
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">From Colombo</h4>
                  <ul className="text-sm text-muted-foreground space-y-0.5">
                    <li>• Distance: 215 km (134 miles)</li>
                    <li>• By car: 4-5 hours via A1 highway</li>
                    <li>• Private transfer: $80-120 USD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">From Polonnaruwa Town</h4>
                  <ul className="text-sm text-muted-foreground space-y-0.5">
                    <li>• Distance: 5 km from town center</li>
                    <li>• Tuk-tuk: $5-8 USD (15 minutes)</li>
                    <li>• Bicycle rental: Popular option $3-5/day</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Train to Polonnaruwa</h4>
                  <ul className="text-sm text-muted-foreground space-y-0.5">
                    <li>• From Colombo: 6-7 hours, $3-8 USD</li>
                    <li>• Scenic journey through countryside</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Inside Polonnaruwa Site</h4>
                  <ul className="text-sm text-muted-foreground space-y-0.5">
                    <li>• Part of main archaeological site</li>
                    <li>• Walk, bike, or tuk-tuk between ruins</li>
                    <li>• Site entrance ticket required ($25 USD)</li>
                  </ul>
                </div>
                <div className="mt-3 p-2 bg-orange-100 dark:bg-slate-700 rounded border-l-4 border-orange-500 dark:border-orange-400">
                  <p className="text-xs text-orange-800 dark:text-orange-200">
                    <strong>🌟 Tip:</strong> Visit early morning (8-10 AM) to avoid heat. Bring water, sunscreen, and hat!
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* What to See Section */}
        <section className="mb-12 scroll-mt-40" id="what-to-see">
          <h2 className="text-3xl font-bold mb-8">What to See at Lankatilaka Image House</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* The Giant Buddha Statue */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-500" />
                  The Headless Buddha Statue
                </CardTitle>
                <CardDescription>The Towering Central Figure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Headless Buddha statue inside Lankatilaka Image House Polonnaruwa"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The main attraction is the massive standing Buddha statue carved from brick and plaster. Although 
                      the head is missing (it fell off centuries ago), the body still stands over 40 feet tall. You can 
                      see the detailed robes carved into the statue and the peaceful posture with hands in the blessing 
                      position. The statue was originally covered in gold and colorful paint.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Original Height:</strong> Over 41 feet (12.5 meters) when complete</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Hand Position:</strong> Abhaya mudra (gesture of fearlessness and protection)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Material:</strong> Built with brick core covered in limestone plaster</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                        <span><strong>Special Feature:</strong> Can see ancient plaster work and paint traces</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Massive Walls */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  The Towering Brick Walls
                </CardTitle>
                <CardDescription>Ancient Engineering Marvel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Massive brick walls of Lankatilaka temple showing ancient construction"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Four giant walls rise up around the Buddha statue, each over 50 feet high and decorated with 
                      beautiful carvings. The walls are incredibly thick (up to 17 feet) and built from millions of 
                      handmade bricks. Look closely at the outer walls to see decorative panels showing dancers, 
                      musicians, and flower patterns carved in stone.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Wall Thickness:</strong> Up to 17 feet (5 meters) at the base</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Height:</strong> Over 50 feet (17 meters) still standing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Decorations:</strong> Stone carvings of celestial beings and flower designs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <span><strong>Construction:</strong> Built without cement using special clay mortar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stone Doorways */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-purple-500" />
                  Carved Stone Doorways
                </CardTitle>
                <CardDescription>Intricate Entrance Decorations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Ornate stone doorway with carvings at Lankatilaka temple entrance"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      The main entrance has beautiful stone doorways (called &quot;vahalkadas&quot;) covered in detailed 
                      carvings. You can see images of guardian lions, dwarfs holding decorative arches, lotus flowers, 
                      and mythical creatures. These decorative doorways were meant to show that you are entering a 
                      sacred space.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>Vahalkada:</strong> Special decorated entrance found only in Sri Lankan temples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>Carvings:</strong> Lions, guardian figures, and floral patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>Moonstone:</strong> Semi-circular stone at entrance with animal carvings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                        <span><strong>Guardstones:</strong> Two tall stones with guardian figures at doorway</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ancient Wall Paintings */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5 text-green-500" />
                  Faded Wall Paintings
                </CardTitle>
                <CardDescription>Traces of Ancient Art</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Faded ancient wall paintings inside Lankatilaka Image House"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      If you look carefully at the inner walls, you can still see traces of ancient paintings. These 
                      murals once covered the entire interior with colorful scenes from Buddha&apos;s life and stories. 
                      Most have faded after 900 years, but some patterns and figures are still visible, especially on 
                      the upper walls protected from rain.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Subject:</strong> Scenes from Jataka tales (Buddha&apos;s previous lives)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Technique:</strong> Painted on plaster using natural mineral colors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Colors Used:</strong> Red, yellow, black from natural minerals and plants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span><strong>Best Preserved:</strong> Look at upper sections near the ceiling area</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Architectural Design */}
            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-cyan-500" />
                  Unique Architectural Style
                </CardTitle>
                <CardDescription>Fusion of Traditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Architectural design showing South Indian and Sinhalese elements"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Lankatilaka shows a unique mix of South Indian and Sri Lankan architectural styles. The thick 
                      walls and fortress-like design come from South Indian temple building, while the decorations 
                      and Buddha statue are purely Sri Lankan. This combination makes it different from any other 
                      temple in the country.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>South Indian Influence:</strong> Thick walls and fortress-like structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>Sinhalese Style:</strong> Buddha image and decorative elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>Original Roof:</strong> Had a wooden roof (collapsed long ago)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-1" />
                        <span><strong>Windows:</strong> Small openings let light fall on Buddha&apos;s face at dawn</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visitor Tips Section */}
        <section className="mb-12 scroll-mt-40" id="visitor-tips">
          <Card className="border-amber-200 dark:border-gray-700 bg-amber-50 dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Essential Visitor Information
              </CardTitle>
              <CardDescription className="text-amber-700 dark:text-amber-300">
                Make the most of your visit to Lankatilaka Image House
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">Before You Visit:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Opening Hours:</strong> 7:00 AM - 5:30 PM daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Entry Fee:</strong> $25 USD (Polonnaruwa site ticket covers all ruins)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Dress Code:</strong> Cover shoulders and knees (this is a sacred site)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Shoes:</strong> Remove footwear before entering the temple area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Best Time:</strong> Early morning (7-9 AM) or late afternoon (4-5 PM) for soft light</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">What to Bring:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Water:</strong> Stay hydrated in the hot climate (bring 1-2 liters)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Sun Protection:</strong> Hat, sunglasses, and sunscreen (SPF 50+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Camera:</strong> Photography allowed (no flash needed in daylight)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Socks:</strong> Optional but helpful for walking on hot stone surfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span><strong>Cash:</strong> For entrance fee and guide tips (no cards accepted)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-100 dark:bg-slate-700 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-200">Photography Tips:</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Best light is in early morning when sun rays enter through the eastern windows</li>
                  <li>• Stand at the main doorway for the classic shot looking up at the Buddha</li>
                  <li>• Wide-angle lens works best to capture the massive walls</li>
                  <li>• Look for details in the stone carvings on the outer walls</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Context */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950 dark:via-purple-950 dark:to-blue-950">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">The Story Behind Lankatilaka</h3>
              <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
                <p>
                  King Parakramabahu the Great built Lankatilaka during the golden age of Polonnaruwa (1153-1186 CE). 
                  This was a time when Sri Lanka was very powerful and wealthy. The king wanted to create monuments 
                  that would last forever and show the greatness of Buddhist teachings.
                </p>
                <p>
                  The temple took many years to build and required hundreds of workers. Ancient chronicles say that 
                  artists and builders came from India to help with the construction. The king himself visited the 
                  site regularly to check on progress. When finished, it was one of the tallest buildings in Sri Lanka.
                </p>
                <p>
                  After Polonnaruwa was abandoned in the 13th century, the temple fell into ruins. The wooden roof 
                  rotted away, and the Buddha&apos;s head fell off during an earthquake. But even as a ruin, Lankatilaka 
                  remains one of the most impressive ancient buildings in South Asia, showing the incredible skill of 
                  medieval Sri Lankan builders.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12 scroll-mt-40" id="nearby">
          <h2 className="text-3xl font-bold mb-8">Other Sites to Visit in Polonnaruwa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Gal Vihara</CardTitle>
                <CardDescription>Four Giant Rock Buddhas</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Gal Vihara rock carved Buddha statues in Polonnaruwa"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Four magnificent Buddha statues carved from a single granite rock. The reclining Buddha is 46 feet 
                  long and considered one of the finest examples of ancient sculpture in Asia.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 1.5 km from Lankatilaka</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/gal-vihara" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Parakrama Samudra</CardTitle>
                <CardDescription>Ancient Giant Reservoir</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Parakrama Samudra ancient lake in Polonnaruwa"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  Massive man-made lake built by King Parakramabahu covering 5,940 acres. Perfect spot for sunset 
                  watching and understanding ancient Sri Lankan water management systems.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 3 km from Lankatilaka</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/parakrama-samudra" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Rankot Vehera</CardTitle>
                <CardDescription>Massive Brick Stupa</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=250"
                  alt="Rankot Vehera stupa dome in Polonnaruwa"
                  width={250}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm text-muted-foreground mb-3">
                  The fourth largest stupa in Sri Lanka, standing 180 feet tall. Built by King Nissankamalla, this 
                  golden-colored dome is visible from miles away and perfect for sunrise visits.
                </p>
                <p className="text-xs text-muted-foreground"><strong>Distance:</strong> 1 km from Lankatilaka</p>
                <div className="mt-4 flex justify-start">
                  <Link href="/destinations/rankot-vehera" passHref legacyBehavior>
                    <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-amber-50 via-orange-100 to-amber-50 dark:from-amber-950 dark:via-orange-900 dark:to-amber-950">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold mb-4">Planning Your Visit</h2>
                <div className="max-w-3xl mx-auto text-muted-foreground space-y-2">
                  <p>✓ Allow 30-45 minutes to properly explore Lankatilaka</p>
                  <p>✓ Combine with other Polonnaruwa sites for a full day tour</p>
                  <p>✓ Hire a local guide ($15-25) for fascinating historical stories</p>
                  <p>✓ Bicycle is the best way to get around the archaeological zone</p>
                  <p>✓ Bring plenty of water - it gets very hot, especially midday</p>
                  <p>✓ Visit in the dry season (May-September) for best weather</p>
                  <p>✓ Respect the sacred nature - this is an active place of worship</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
