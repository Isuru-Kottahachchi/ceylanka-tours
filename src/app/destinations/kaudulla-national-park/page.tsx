"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, AlertTriangle, Camera, TreePine, Leaf, History, Sun, Wind, Droplets, Mountain, Bird, Eye, Target, Lightbulb, Car, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function KaudullaNationalParkGuide() {
    const elephantImages = [
        { src: "/Kaudulla-National-Park1.jpg", caption: "Large herd of elephants at Kaudulla reservoir", alt: "Wild elephants gathering at Kaudulla reservoir during evening" },
        { src: "/Kaudulla-National-Park2.jpg", caption: "Baby elephants playing in water", alt: "Baby elephants playing and splashing in Kaudulla reservoir" },
        { src: "/Kaudulla-National-Park3.jpg", caption: "Elephant family walking through grasslands", alt: "Family of elephants walking through the grasslands of Kaudulla" },
    ];

    const birdLifeImages = [
        { src: "/placeholder.svg?height=400&width=600", caption: "Painted Stork at Kaudulla", alt: "Painted Stork fishing in the shallow waters of Kaudulla" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Various water birds", alt: "Different species of water birds at Kaudulla reservoir" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Peacocks in natural habitat", alt: "Peacocks displaying their feathers in Kaudulla" },
    ];

    const landscapeImages = [
        { src: "/placeholder.svg?height=400&width=600", caption: "Kaudulla reservoir sunset", alt: "Beautiful sunset over Kaudulla reservoir" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Grasslands and water bodies", alt: "Vast grasslands and water bodies of Kaudulla National Park" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Ancient tank system", alt: "Ancient tank system at Kaudulla National Park" },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Kaudulla-National-Park.jpg"
                    alt="Panoramic view of Kaudulla National Park with massive elephant herd at reservoir during golden hour sunset"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Kaudulla National Park</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Witness The Gathering - Nature&apos;s Greatest Elephant Spectacle</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            North Central Province - Cultural Triangle
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                            <Users className="w-4 h-4 mr-1" />
                            200+ Elephant Gatherings
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            Established 2002
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Experience Kaudulla: Where Ancient Engineering Meets Wild Majesty</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Welcome to Kaudulla National Park, home to one of nature&apos;s most spectacular wildlife events - &quot;The Gathering&quot;! This 6,900-hectare sanctuary in the heart of Sri Lanka&apos;s Cultural Triangle showcases one of the largest seasonal congregations of Asian elephants on Earth, with herds of 150-200 elephants regularly assembling around the ancient Kaudulla Tank during the dry season months from July to October.
                        </p>
                        <p className="text-lg mb-4">
                            What makes Kaudulla truly extraordinary is its perfect blend of ancient human ingenuity and natural wildlife abundance. The magnificent Kaudulla Tank, an engineering marvel constructed by King Mahasena in the 3rd century AD (around 276 AD), continues to serve its original purpose nearly 1,750 years later - sustaining life during the harsh dry season. This historical irrigation reservoir now attracts incredible concentrations of wildlife, creating unparalleled opportunities for intimate elephant encounters and spectacular photography.
                        </p>
                        <p className="text-lg">
                            As a vital link in the elephant corridor connecting Minneriya, Kaudulla, and Wasgamuwa National Parks, Kaudulla plays a crucial conservation role in protecting Sri Lanka&apos;s wild elephant populations. Here you&apos;ll experience wild elephants in their most natural behaviors - bathing, feeding, socializing, and nurturing their young against the stunning backdrop of ancient reservoirs and pristine wilderness.
                        </p>
                    </div>
                </section>

                {/* Quick Facts & How to Get There */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Quick Facts */}
                    <section className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Quick Kaudulla National Park Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Established:</strong> 2002 (National Park status)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Area:</strong> 6,900 hectares (26.6 sq miles)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-purple-500" />
                                        <span>
                                            <strong>Peak Elephant Gathering:</strong> 150-200 individuals
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bird className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Bird Species:</strong> 160+ recorded
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-red-500" />
                                        <span>
                                            <strong>Safari Duration:</strong> 3-4 hours
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sun className="w-4 h-4 text-yellow-500" />
                                        <span>
                                            <strong>Best Time:</strong> July-October (Dry Season)
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* How to Get There */}
                    <section className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Car className="w-5 h-5 text-blue-500" />
                                    How to Reach Kaudulla
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-green-500" />
                                            From Colombo
                                        </h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                197 km via Kurunegala-Dambulla Road (A6)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                5-6 hours by car/bus
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-blue-500" />
                                            From Cultural Triangle
                                        </h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                25 km from Habarana (30 minutes)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                35 km from Sigiriya (40 minutes)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                55 km from Dambulla (1 hour)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* What Makes Kaudulla Unique */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">What Makes Kaudulla Nationally Unique</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="border-l-4 border-l-yellow-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Users className="w-5 h-5 text-yellow-500" />
                                    The Elephant Gathering
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Witness &quot;The Gathering&quot; - one of Asia&apos;s largest seasonal elephant congregations with 150-200 elephants assembling during dry months (July-October), creating spectacular viewing opportunities you&apos;ll find nowhere else in Sri Lanka.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <History className="w-5 h-5 text-blue-500" />
                                    Ancient Reservoir System
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    The 1,750-year-old Kaudulla Tank, built by King Mahasena, represents ancient Sri Lankan hydraulic engineering excellence. This massive reservoir still functions perfectly, sustaining both agriculture and wildlife through centuries.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-green-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <ArrowRight className="w-5 h-5 text-green-500" />
                                    Elephant Corridor Connection
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Kaudulla serves as a critical wildlife corridor linking Minneriya and Wasgamuwa National Parks, enabling safe elephant migration across 150+ km. This connectivity is vital for genetic diversity and long-term elephant population survival.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-purple-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Bird className="w-5 h-5 text-purple-500" />
                                    Birdwatcher&apos;s Paradise
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Home to 160+ bird species including rare Painted Storks, Asian Spoonbills, and Grey-headed Fish Eagles. The reservoir ecosystem attracts both resident breeding populations and winter migratory visitors.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-orange-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <MapPin className="w-5 h-5 text-orange-500" />
                                    Cultural Triangle Location
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Perfect location within the Cultural Triangle, just 25 km from Habarana. Easily combine world-class wildlife safaris with UNESCO World Heritage sites like Sigiriya, Polonnaruwa, and Dambulla in one trip.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-red-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Eye className="w-5 h-5 text-red-500" />
                                    Intimate Wildlife Encounters
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Less crowded than Minneriya with better vehicle limits, offering closer elephant encounters. Safari jeeps can approach within safe viewing distances, providing exceptional photography and observation opportunities.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Did You Know Card 1 */}
                <Card className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500 rounded-full">
                                <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">Did You Know? The Elephant Corridor Network</h3>
                                <p className="text-muted-foreground mb-3 leading-relaxed">
                                    Kaudulla is part of a remarkable 150-kilometer elephant corridor connecting three major national parks: Minneriya, Kaudulla, and Wasgamuwa. Elephants migrate seasonally between these parks following ancient pathways passed down through generations. During dry months (May-October), elephants concentrate at Minneriya and Kaudulla where water and grass remain abundant. As conditions change, they move to Kaudulla (July-October peak), then migrate to Wasgamuwa.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    This corridor system is crucial for elephant survival, allowing them to access food, water, and breeding opportunities across a vast landscape. Conservation efforts focus on protecting these migration routes from human development, ensuring future generations of elephants can continue their ancestral journeys!
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Wildlife Highlights */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Wildlife Highlights at Kaudulla</h2>
                    <div className="space-y-8">
                        {/* Elephants */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-6 h-6 text-yellow-600" />
                                    The Magnificent Elephant Gathering Experience
                                </CardTitle>
                                <CardDescription>Asia&apos;s Most Spectacular Seasonal Wildlife Event</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel images={elephantImages} />
                                    <div>
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            Kaudulla&apos;s claim to international fame is &quot;The Gathering&quot; - a phenomenal seasonal event where 150-200 Asian elephants congregate around the ancient reservoir from July through October. As the dry season intensifies and water sources elsewhere diminish, elephants from surrounding forests migrate to Kaudulla where the tank bed&apos;s exposed grasslands provide abundant fresh grazing and reliable water supplies.
                                        </p>
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            What makes this gathering truly extraordinary is the opportunity to observe complete elephant family dynamics in action. You&apos;ll witness protective matriarchs leading their herds, playful baby elephants learning social skills, teenage elephants testing boundaries, and massive bull elephants maintaining order. The shallow tank edges allow elephants to wade, splash, mud-bathe, and socialize while safari vehicles maintain respectful distances for safe observation.
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold mb-3 text-foreground">Natural Elephant Behaviors You&apos;ll Observe:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <span><strong>Family bonding:</strong> Extended family groups with calves protected by multiple adult females</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <span><strong>Bathing rituals:</strong> Elephants spraying water, wallowing in mud for cooling and skin protection</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <span><strong>Feeding patterns:</strong> Using trunks to uproot fresh grass and consuming 150-200 kg daily</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <span><strong>Social play:</strong> Young elephants wrestling, chasing, and learning survival skills</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <span><strong>Communication:</strong> Trumpeting calls, rumbling infrasound, and complex trunk gestures</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <span><strong>Breeding behaviors:</strong> Bulls courting females during musth season</span>
                                                    </li>
                                                </ul>

                                            </div>
                                            <Link href="/blog/sri-lankan-elephants">
                                                <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 h-12 cursor-pointer">
                                                    <span>Learn More About Sri Lankan Elephants</span>
                                                    <ArrowRight className="h-5 w-5" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Other Mammals */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TreePine className="w-6 h-6 text-green-600" />
                                    Other Fascinating Mammals
                                </CardTitle>
                                <CardDescription>Beyond Elephants - Rich Mammalian Diversity</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-foreground">Large Mammals</h4>
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Sri Lankan Leopard:</strong> Elusive and rarely spotted, these apex predators hunt at dawn and dusk near forested areas
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Sambar Deer:</strong> Largest deer species in Sri Lanka, frequently seen grazing near forest edges
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Sri Lankan Axis Deer (Spotted Deer):</strong> Graceful herds often seen in open grasslands
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Wild Buffalo:</strong> Small populations inhabit wetland areas and reservoir margins
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-foreground">Medium & Small Mammals</h4>
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Golden Jackal:</strong> Commonly seen scavenging and hunting in pairs or small family groups
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Wild Boar:</strong> Active foragers that root through undergrowth for tubers and insects
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Toque Macaque:</strong> Endemic monkey species often observed in troops near forest areas
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <strong>Grey Langur:</strong> Leaf-eating monkeys inhabiting tall trees around the park
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Bird Life */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Bird className="w-6 h-6 text-blue-600" />
                                    Exceptional Birdwatching Paradise
                                </CardTitle>
                                <CardDescription>160+ Recorded Species - Resident & Migratory Birds</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            Kaudulla&apos;s diverse habitats - reservoir, wetlands, grasslands, and dry zone forests - create ideal conditions for over 160 bird species. The ancient tank attracts massive concentrations of water birds while surrounding forests shelter endemic and rare species. Birdwatchers consider Kaudulla exceptional for both resident breeding populations and northern winter migrants arriving October-March.
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold mb-2 text-foreground">Notable Water Birds:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Painted Stork:</strong> Large breeding colonies nesting in dead trees
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Asian Spoonbill:</strong> Distinctive bill-sweeping feeding technique
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Grey-headed Fish Eagle:</strong> Majestic raptor hunting reservoir fish
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Little Cormorant:</strong> Skilled diving hunters in shallow waters
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Black-headed Ibis:</strong> Wading in tank margins during dry season
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 text-foreground">Endemic & Forest Species:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Sri Lankan Junglefowl:</strong> National bird, common in undergrowth
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Indian Peafowl:</strong> Spectacular displays during breeding season
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <strong>Malabar Pied Hornbill:</strong> Large tree-cavity nesting species
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ImageCarousel images={birdLifeImages} />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Did You Know Card 2 */}
                <Card className="mb-12 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-800">
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-amber-500 rounded-full">
                                <History className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 text-amber-900 dark:text-amber-100">Did You Know? King Mahasena&apos;s Engineering Marvel</h3>
                                <p className="text-muted-foreground mb-3 leading-relaxed">
                                    The magnificent Kaudulla Tank was constructed around 276 AD during the reign of King Mahasena, one of ancient Sri Lanka&apos;s greatest builders. This massive reservoir stretches over 6,900 hectares and was designed to capture monsoon rainwater, storing it for agricultural irrigation during dry months. The engineering precision required to build such a structure without modern technology is astounding!
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nearly 1,750 years later, the tank still functions exactly as intended, demonstrating the incredible hydraulic engineering knowledge of ancient Sri Lankan civilization. The reservoir&apos;s design includes sophisticated spillways, sluice gates, and canals that continue irrigating thousands of hectares of paddy fields while simultaneously sustaining the park&apos;s wildlife ecosystem. It stands as living proof that sustainable water management has been perfected in Sri Lanka for millennia!
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Landscape and Ecosystems */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mountain className="w-6 h-6 text-green-600" />
                                Diverse Landscapes & Ancient Heritage
                            </CardTitle>
                            <CardDescription>Where Natural Ecosystems Meet Historical Engineering</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <ImageCarousel images={landscapeImages} />
                                <div>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        The ancient Kaudulla Tank, an architectural masterpiece from 276 AD built by King Mahasena, forms the park&apos;s magnificent centerpiece. This vast reservoir showcases ancient Sri Lankan hydraulic engineering brilliance that continues functioning perfectly after 1,750 years. The tank&apos;s seasonal water level fluctuations create dynamic habitats that sustain incredible wildlife concentrations throughout the year.
                                    </p>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        Kaudulla&apos;s landscape includes dry zone forests, open grasslands, seasonal wetlands, and the massive reservoir itself - creating habitat diversity that supports remarkable biodiversity. During dry months, the exposed tank bed transforms into lush grasslands that attract massive elephant gatherings, while monsoon seasons flood the reservoir, dispersing wildlife into surrounding forests.
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2 text-foreground">Key Landscape Features:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    <strong>Kaudulla Reservoir:</strong> 6,900-hectare ancient tank with seasonal water fluctuations
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    <strong>Dry Zone Forests:</strong> Tropical dry evergreen and deciduous forest patches
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    <strong>Grasslands:</strong> Extensive open plains ideal for elephant viewing and grazing
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    <strong>Wetland Habitats:</strong> Seasonal marshes attracting diverse water bird populations
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    <strong>Ancient Ruins:</strong> Historical sites and archaeological features within park boundaries
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Planning Your Safari */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Planning Your Kaudulla Safari Adventure</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Clock className="w-5 h-5 text-blue-500" />
                                    Safari Timings
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <Sun className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Morning Safari:</strong> 6:00 AM - 10:00 AM (Best for photography & active wildlife)
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Sun className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Afternoon Safari:</strong> 2:30 PM - 6:30 PM (Peak elephant gathering time)
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Clock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Duration:</strong> 3-4 hours per safari
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Camera className="w-5 h-5 text-purple-500" />
                                    Essential Safari Gear
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Camera with telephoto lens (200-400mm recommended)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Binoculars for distant wildlife viewing
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Sun protection (hat, sunscreen, sunglasses)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Light, neutral-colored clothing
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Drinking water (2 liters per person)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Insect repellent with DEET
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Target className="w-5 h-5 text-green-500" />
                                    Pro Safari Tips
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Book registered safari operators in advance
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Afternoon safaris peak during July-October
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Hire experienced trackers for leopard sightings
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Maintain silence near wildlife for better views
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Stay inside vehicle at all times
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        Multiple safaris increase sighting chances
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Did You Know Card 3 */}
                <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800">
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-500 rounded-full">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100">Did You Know? Kaudulla vs Minneriya - Smart Safari Planning!</h3>
                                <p className="text-muted-foreground mb-3 leading-relaxed">
                                    Kaudulla and neighboring Minneriya National Parks form a unique interconnected ecosystem where elephants migrate seasonally between the two based on water and food availability. From May to October, as Minneriya&apos;s water levels drop significantly, elephants begin concentrating at Kaudulla where grass remains abundant. By July-October (peak dry season), Kaudulla typically hosts larger elephant gatherings than Minneriya!
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Smart tip for visitors: Check which park currently has better elephant gatherings before booking your safari! Local operators monitor elephant movements daily and can recommend whether Kaudulla or Minneriya offers superior viewing on your visit date. Many experienced safari-goers visit both parks during their Cultural Triangle stay, maximizing chances for spectacular elephant encounters. The parks are only 20 km apart, making it easy to switch between them based on real-time wildlife reports!
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Best Time to Visit */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">When to Visit Kaudulla National Park</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-blue-500" />
                                Seasonal Wildlife Viewing Guide
                            </CardTitle>
                            <CardDescription>Choose your timing for optimal wildlife experiences</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                                        <h4 className="font-bold mb-3 flex items-center gap-2 text-orange-900 dark:text-orange-100 text-lg">
                                            <Sun className="w-5 h-5 text-orange-500" />
                                            Peak Dry Season (July - October)
                                        </h4>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            <strong>BEST TIME FOR THE GATHERING!</strong> This is when Kaudulla truly shines with spectacular elephant congregations.
                                        </p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>150-200 elephants:</strong> Largest seasonal gatherings around reservoir
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Exposed grasslands:</strong> Fresh grass growth on tank bed attracts herds
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Optimal photography:</strong> Clear skies, golden light, minimal vegetation obstruction
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Wildlife concentration:</strong> All animals gather near water sources
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Better than Minneriya:</strong> Kaudulla typically surpasses Minneriya July-October
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                                <strong>Note:</strong> Higher safari prices, advance booking essential
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
                                        <h4 className="font-bold mb-3 flex items-center gap-2 text-green-900 dark:text-green-100 text-lg">
                                            <Droplets className="w-5 h-5 text-green-500" />
                                            Early Dry Season (May - June)
                                        </h4>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            Transition period as dry conditions begin developing. Good elephant viewing as herds start congregating.
                                        </p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Growing gatherings:</strong> 50-100 elephants as herds begin arriving
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Lush vegetation:</strong> Forests still green from monsoon rains
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Breeding bird activity:</strong> Many species actively nesting
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Moderate crowds:</strong> Fewer tourists than peak months
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Competitive pricing:</strong> Safari rates more affordable
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                                        <h4 className="font-bold mb-3 flex items-center gap-2 text-blue-900 dark:text-blue-100 text-lg">
                                            <Wind className="w-5 h-5 text-blue-500" />
                                            Wet Season (November - April)
                                        </h4>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            Monsoon and inter-monsoon periods. Wildlife disperses into forests as water becomes abundant everywhere.
                                        </p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Migratory birds:</strong> Northern winter visitors arrive October-March
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Forest wildlife:</strong> Elephants scatter into woodlands feeding naturally
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Lush landscapes:</strong> Beautiful green scenery, waterfalls active
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Peaceful atmosphere:</strong> Very few tourists, intimate experiences
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <strong>Budget-friendly:</strong> Best rates for accommodations and safaris
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                                <strong>Note:</strong> No large gatherings, elephants dispersed, occasional rain
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                                        <h4 className="font-bold mb-3 flex items-center gap-2 text-purple-900 dark:text-purple-100 text-lg">
                                            <Target className="w-5 h-5 text-purple-500" />
                                            Photography Recommendations
                                        </h4>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            Optimal conditions for capturing stunning wildlife photographs at Kaudulla.
                                        </p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <Camera className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                                <strong>Best months:</strong> August-September for largest elephant gatherings
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Camera className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                                <strong>Golden hour magic:</strong> Early morning (6:30-8:00 AM) for soft light
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Camera className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                                <strong>Sunset drama:</strong> Late afternoon (4:30-6:00 PM) with silhouettes
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Camera className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                                <strong>Dust clouds:</strong> Dry season creates atmospheric elephant shots
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Camera className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                                <strong>Reflection shots:</strong> Shallow water areas perfect for mirror images
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Conservation and Responsible Tourism */}
                <section className="mb-12">
                    <Card className="border-l-4 border-l-green-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Leaf className="w-6 h-6 text-green-600" />
                                Conservation & Responsible Safari Guidelines
                            </CardTitle>
                            <CardDescription>Help protect Kaudulla&apos;s precious wildlife for future generations</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-foreground">Safari Etiquette:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Maintain 30-meter minimum distance from elephants
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Never feed wildlife or litter in the park
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Keep noise levels minimal - no loud music or shouting
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Never exit vehicle unless authorized by rangers
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Respect vehicle limits - avoid overcrowding sightings
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Follow designated tracks only - protect habitat
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-foreground">Conservation Impact:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Park entrance fees directly fund wildlife protection
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Supports elephant corridor conservation efforts
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Provides livelihoods for local communities
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Protects ancient reservoir ecosystem
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Monitors elephant populations and health
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Maintains critical habitat connectivity
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2">
                        <CardContent className="pt-6">
                            <h3 className="text-2xl font-bold mb-4 text-foreground">Your Kaudulla Adventure Awaits!</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Kaudulla National Park offers one of Sri Lanka&apos;s most spectacular wildlife experiences - witnessing &quot;The Gathering&quot; where hundreds of elephants congregate in a magnificent display of nature&apos;s rhythms. Combined with its strategic location in the Cultural Triangle, ancient historical significance, and role as a vital elephant corridor, Kaudulla represents the perfect harmony between wildlife conservation and cultural heritage tourism.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Whether you&apos;re photographing elephant families bathing in golden light, observing rare bird species at the ancient reservoir, or simply marveling at 1,750 years of continuous ecosystem functionality, Kaudulla creates memories that last a lifetime. Plan your visit during July-October for peak elephant gatherings, or explore year-round for different wildlife experiences.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Book your Kaudulla safari today and become part of this incredible conservation success story - where ancient kings&apos; engineering genius continues sustaining wild elephants, and responsible tourism helps protect Sri Lanka&apos;s natural heritage for future generations to treasure!
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}
