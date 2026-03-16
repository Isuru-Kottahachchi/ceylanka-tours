"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, AlertTriangle, Camera, History, Bird, Eye, Car } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function WasgamuwaNationalParkGuide() {
    const elephantImages = [
        { src: "/Wasgamuwa-National-Park.jpg", caption: "Wild elephants at Wasgamuwa", alt: "Wild elephants roaming in Wasgamuwa National Park" },
    ]

    const wildlifeImages = [
        { src: "/Wasgamuwa-National-Park.jpg", caption: "Wildlife at Wasgamuwa", alt: "Wildlife in Wasgamuwa National Park" },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Wasgamuwa-National-Park.jpg"
                    alt="Wild elephants and ancient landscape in Wasgamuwa National Park"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="hero-text-shadow text-4xl md:text-6xl font-extrabold mb-4 leading-[1.1] tracking-tight">Wasgamuwa National Park</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Least Crowded Elephant and Sloth Bear Haven</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-yellow-600/80 text-white border-yellow-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Polonnaruwa &amp; Matale Districts
                        </Badge>
                        <Badge variant="secondary" className="bg-green-600/80 text-white border-green-500">
                            <Users className="w-4 h-4 mr-1" />
                            150+ Wild Elephants
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600/80 text-white border-blue-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            Established 1984
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Wasgamuwa: The Woods of the Bear</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Wasgamuwa National Park takes its name from the Sinhala words &quot;Walas Gamuwa,&quot; meaning &quot;woods of the bear&quot; a nod to the sloth bears that have long called this forest home. Established in 1984 and covering 36,948 hectares along the banks of the Mahaweli and Amban Rivers, Wasgamuwa is one of Sri Lanka&apos;s quieter national parks, offering genuine wilderness encounters away from the busier safari circuits.
                        </p>
                        <p className="text-lg mb-4">
                            The park sits at the southern end of the elephant corridor connecting it with Minneriya and Kaudulla National Parks to the north. Around 150 Sri Lankan elephants use this corridor seasonally, making Wasgamuwa an important conservation link. The park&apos;s dry mixed evergreen forests, open grasslands, and river edges each attract different wildlife, giving visitors varied scenery throughout a single safari.
                        </p>
                        <p className="text-lg">
                            Scattered through the forest are ancient ruins from the Polonnaruwa period stone tanks, canal systems, and temple foundations built over 800 years ago. These remnants sit quietly alongside wildlife today, giving Wasgamuwa a character unlike any other national park in Sri Lanka.
                        </p>
                    </div>
                </section>

                {/* Quick Facts & How to Get There */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    <section className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Quick Wasgamuwa Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 text-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                        <span><strong>Established:</strong> 1984</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span><strong>Area:</strong> 36,948 hectares (369 km²)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                        <span><strong>Elephant Population:</strong> ~150 individuals</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bird className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                        <span><strong>Bird Species:</strong> 143 recorded</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                        <span><strong>Mammal Species:</strong> 23 recorded</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                                        <span><strong>Best Time:</strong> July – September (dry season)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-4 h-4 text-red-500 flex-shrink-0" />
                                        <span><strong>Special Wildlife:</strong> Sloth bears, leopards</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <History className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                        <span><strong>Historical Sites:</strong> Polonnaruwa period ruins</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="flex-1">
                        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                                    <Car className="w-5 h-5" />
                                    How to Get to Wasgamuwa
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Colombo</h4>
                                        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                                            <li>• <strong>Distance:</strong> ~220 km</li>
                                            <li>• <strong>Time:</strong> 4–5 hours by car</li>
                                            <li>• <strong>Route:</strong> A1 → Dambulla → Habarana → Wasgamuwa</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">From Nearby Cities</h4>
                                        <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                                            <li>• <strong>Polonnaruwa:</strong> ~45 km (1 hour)</li>
                                            <li>• <strong>Sigiriya:</strong> ~60 km (1.5 hours)</li>
                                            <li>• <strong>Dambulla:</strong> ~65 km (1.5 hours)</li>
                                        </ul>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                        <p className="text-sm text-blue-800 dark:text-blue-200">
                                            <strong>Tip:</strong> A 4WD vehicle is required inside the park. A registered guide is mandatory for all safaris.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Wildlife */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Wildlife at Wasgamuwa</h2>
                    <div className="grid gap-8">

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-green-600" />
                                    Sri Lankan Elephants
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-start">
                                    <ImageCarousel images={elephantImages} />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Around 150 Sri Lankan elephants live in and move through Wasgamuwa throughout the year. During the dry season from July to September, herds gather around the ancient tanks and river edges, offering some of the best elephant watching in the country without the crowds found at Minneriya or Kaudulla.
                                        </p>
                                        <p className="text-muted-foreground mb-4">
                                            Wasgamuwa forms the southern part of the elephant corridor connecting it to Kaudulla and Minneriya. Family herds with calves are commonly seen, especially near the Mahaweli River during morning safaris.
                                        </p>
                                        <h4 className="font-semibold mb-2 text-foreground">What to Expect:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Family herds near river banks</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Calves with matriarchal groups</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Bathing at ancient tanks</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Year-round presence</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Eye className="w-5 h-5 text-purple-600" />
                                    Other Mammals
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-start">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Wasgamuwa is one of the better parks in Sri Lanka to spot sloth bears, which are naturally elusive. The park&apos;s name itself reflects this relationship. Sightings are more likely during afternoon safaris near rocky outcrops and fruiting trees.
                                        </p>
                                        <p className="text-muted-foreground mb-4">
                                            Sri Lankan leopards are present but rarely seen due to dense forest cover. Water buffalo, spotted deer, sambar, and wild boar are commonly encountered. Golden jackals are often active around dusk near open grassland edges.
                                        </p>
                                        <h4 className="font-semibold mb-2 text-foreground">Mammals List:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Sri Lankan Sloth Bear</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Sri Lankan Leopard</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Water Buffalo</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Spotted Deer &amp; Sambar</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Purple-faced Langur</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Mugger Crocodile</li>
                                        </ul>
                                    </div>
                                    <ImageCarousel images={wildlifeImages} />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Bird className="w-5 h-5 text-blue-600" />
                                    Bird Life — 143 Species
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    The ancient tanks and river edges attract a wide variety of water birds. The dry forest holds several endemic species. December to March brings migratory birds that increase diversity significantly.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-foreground">Water Birds</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Painted Stork</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Purple Heron</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Indian Darter</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Little Cormorant</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-foreground">Forest Birds</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Sri Lanka Junglefowl</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Red-faced Malkoha</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Sri Lanka Spurfowl</li>
                                            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />Crested Hawk-Eagle</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Historical Heritage */}
                <section className="mb-12">
                    <Card className="border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                                <History className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                Ancient Heritage Inside the Park
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-amber-900 dark:text-amber-200 mb-4">
                                The forest at Wasgamuwa contains ruins from the Polonnaruwa Kingdom period. Ancient stone tanks, temple foundations, and canal systems built during the reign of King Parakramabahu I (1153–1186 CE) are scattered across the park — a reminder that this land supported a thriving civilization over 800 years ago.
                            </p>
                            <p className="text-amber-900 dark:text-amber-200 mb-4">
                                The Kalinga Yoda Ela, an ancient irrigation canal, is one of the most notable engineering works within the park boundary. The same water sources built by ancient kings now sustain wildlife — elephants drink from tanks constructed centuries ago.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Notable Sites</h4>
                                    <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-300">
                                        <li>• Kalinga Yoda Ela canal</li>
                                        <li>• Ancient stone reservoirs (tanks)</li>
                                        <li>• Buddhist temple ruins</li>
                                        <li>• Stone inscriptions</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Historical Period</h4>
                                    <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-300">
                                        <li>• Polonnaruwa Kingdom era</li>
                                        <li>• King Parakramabahu I (1153–1186 CE)</li>
                                        <li>• Ancient battlefield site</li>
                                        <li>• Traditional royal elephant range</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Safari Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Safari Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">

                        <Card className="border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                                    <Calendar className="w-5 h-5" />
                                    Best Times to Visit
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Dry Season — July to September</h4>
                                        <p className="text-sm text-green-800 dark:text-green-200">Wildlife gathers around water sources. Best time for elephant encounters and photography. Tracks are easier to navigate.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Cool Season — December to March</h4>
                                        <p className="text-sm text-green-800 dark:text-green-200">Comfortable temperatures. Migratory birds arrive. Good for birdwatching and forest drives with lush greenery.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Wet Season — April to June</h4>
                                        <p className="text-sm text-green-800 dark:text-green-200">Fewer visitors, green landscapes. Some tracks may be difficult. Good for those who prefer solitude.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Camera className="w-5 h-5 text-pink-600" />
                                    Safari Timing &amp; Tips
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-1 text-foreground">Morning Safari (6:00 AM – 11:00 AM)</h4>
                                        <p className="text-sm text-muted-foreground">Best for elephant sightings and birds. Cool air and good light for photography.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1 text-foreground">Afternoon Safari (2:00 PM – 6:30 PM)</h4>
                                        <p className="text-sm text-muted-foreground">Better chance of sloth bear sightings. Golden hour light near ancient tanks.</p>
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="font-semibold mb-2 text-foreground">What to Bring</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Telephoto lens (200–400mm recommended)</li>
                                            <li>• Light neutral-coloured clothing</li>
                                            <li>• Water and light snacks</li>
                                            <li>• Hat, sunscreen, insect repellent</li>
                                            <li>• Closed-toe shoes</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Responsible Safari */}
                <section className="mb-12">
                    <Card className="border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                Responsible Safari Guidelines
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-amber-900 dark:text-amber-100">Wildlife</h4>
                                    <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
                                        <li>• Keep a safe distance from all animals</li>
                                        <li>• No loud noises or sudden movements</li>
                                        <li>• Never feed wildlife</li>
                                        <li>• Give elephants right-of-way on roads</li>
                                        <li>• No flash photography</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-amber-900 dark:text-amber-100">Heritage &amp; Environment</h4>
                                    <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
                                        <li>• Do not touch or climb on ancient ruins</li>
                                        <li>• Stay on designated paths</li>
                                        <li>• Do not remove rocks, plants or artefacts</li>
                                        <li>• Take all rubbish out of the park</li>
                                        <li>• Support local guides and communities</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Nearby Attractions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Nearby Attractions</h2>
                    <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                        Extend your Wasgamuwa adventure with these incredible destinations within easy reach
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Polonnaruwa.jpeg"
                                    alt="Ancient ruins of Polonnaruwa, Sri Lanka's medieval capital"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">
                                    ~45 km from Wasgamuwa
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Polonnaruwa</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Sri Lanka&apos;s medieval capital with UNESCO-listed ruins, ancient temples, and the magnificent Gal Vihara rock sculptures.
                                </p>
                                <div className="flex items-center text-xs text-amber-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    ~45 km from Wasgamuwa
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/polonnaruwa" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-amber-600 text-white hover:bg-amber-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Sigiriya.jpeg"
                                    alt="Sigiriya Rock Fortress rising above the forest canopy"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                    ~60 km from Wasgamuwa
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Sigiriya Rock Fortress</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    An iconic UNESCO World Heritage Site — a 5th-century citadel perched on a 180-metre rock pinnacle with ancient frescoes and water gardens.
                                </p>
                                <div className="flex items-center text-xs text-orange-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    ~60 km from Wasgamuwa
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/sigiriya-rock-fortress" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Kaudulla-National-Park.jpg"
                                    alt="Elephants gathering at Kaudulla National Park tank"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                    ~65 km from Wasgamuwa
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Kaudulla National Park</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Famous for the &quot;Gathering&quot; — one of Asia&apos;s largest wild elephant assemblies around Kaudulla Tank between August and October.
                                </p>
                                <div className="flex items-center text-xs text-green-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    ~65 km from Wasgamuwa
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/kaudulla-national-park" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700">
                        <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-400">Your Wasgamuwa Adventure Awaits!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4">
                                Wasgamuwa offers something hard to find at more popular parks space. You can sit quietly beside an ancient tank as elephants wade in, without a line of jeeps behind you. The combination of rich wildlife, deep forest, and historical ruins makes for a safari experience that feels genuinely unhurried.
                            </p>
                            <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4">
                                Visit during July to September for the best elephant and dry-season wildlife viewing, or come in December to March for birdlife and comfortable temperatures. Whatever time you choose, Wasgamuwa rewards those who seek the less-travelled path.
                            </p>
                            <p className="font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                Plan your Wasgamuwa safari and experience one of Sri Lanka&apos;s most authentic and peaceful wildlife encounters. 🐘🐻🌿
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}
