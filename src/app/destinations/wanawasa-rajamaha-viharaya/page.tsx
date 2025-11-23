"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, History, Landmark, ScrollText } from "lucide-react"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function WanawasaTemple() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Wanawasa-Rajamaha-Viharaya.jpg"
                    alt="Wanawasa temple main entrance showing ancient architecture and stone carvings"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Wanawasa Rajamaha Viharaya</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">A 12th Century Buddhist Masterpiece</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 ">
                            <MapPin className="w-4 h-4 mr-1" />
                            Bentota, Southern Province
                        </Badge>
                        <Badge variant="secondary" className="bg-red-600/80 text-white border-white/30 bg-red-600/80 ">
                            <Clock className="w-4 h-4 mr-1" />
                            12th Century CE
                        </Badge>
                        <Badge variant="secondary" className="bg-green-600/80 text-white border-white/30 bg-green-600/80 ">
                            <Landmark className="w-4 h-4 mr-1" />
                            Ancient Royal Temple
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">About Wanawasa Rajamaha Viharaya</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p className="mb-4">
                            Wanawasa Rajamaha Viharaya is one of the five ancient royal Buddhist temples (Rajamaha Viharayas) 
                            in Bentota, Southern Sri Lanka. Built during the reign of King Parakramabahu the Great (1153-1186 CE) 
                            in the Polonnaruwa era, this temple has served as a significant center of Buddhist learning and 
                            meditation for over 800 years.
                        </p>
                        
                        <div className="my-8 p-6 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-l-4 border-amber-500">
                            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3 text-lg">
                                What is a Rajamaha Viharaya?
                            </h4>
                            <p className="text-amber-800 dark:text-amber-300 mb-3">
                                A <strong>Rajamaha Viharaya</strong> (Royal Great Temple) is a Buddhist temple of exceptional 
                                historical, religious, and architectural significance, often built or patronized by ancient Sri Lankan 
                                kings. These temples held royal privileges, extensive land grants, and served as major centers of 
                                Buddhist learning, meditation, and cultural preservation. They were typically connected to royal 
                                administration and enjoyed special protection and resources.
                            </p>
                            <p className="text-amber-800 dark:text-amber-300">
                                Wanawasa, along with Galapatha, Udakotuwa, Ganepansala, and Bodhimaluwa temples, forms the historic 
                                network of five interconnected Rajamaha Viharayas in the Bentota region, each playing a crucial role 
                                in preserving Buddhist heritage during the medieval period.
                            </p>
                        </div>

                        
                    </div>
                </section>

                {/* Key Features - Separate Cards */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Temple Highlights & Specialties</h2>
                    <div className="space-y-6">
                        {/* Ancient Tunnel Entrance Card */}
                        <Card className="border-l-4 border-l-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <History className="w-6 h-6 text-blue-600" />
                                    Ancient Underground Tunnel Entrance
                                </CardTitle>
                                <CardDescription>Best-Preserved Medieval Engineering Marvel</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/wanawasa-tunnel1.jpg",
                                                alt: "Ancient tunnel entrance at Wanawasa showing carved stone walls",
                                                caption: "Tunnel Entrance",
                                                title: "Underground Tunnel Entrance"
                                            },
                                            {
                                                src: "/wanawasa-tunnel2.jpg",
                                                alt: "Close-up of tunnel ventilation system and stone architecture",
                                                caption: "Ventilation System",
                                                title: "Medieval Engineering"
                                            },
                                            {
                                                src: "/wanawasa-tunnel3.jpg",
                                                alt: "Stone support structures and archways in the tunnel",
                                                caption: "Stone Archways",
                                                title: "Tunnel Architecture"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                        The crown jewel of Wanawasa Rajamaha Viharaya is its remarkably well-preserved underground 
                                        tunnel entrance - considered one of the finest examples of medieval monastery engineering in 
                                        Sri Lanka. This tunnel was part of the extensive underground network connecting all five 
                                        Rajamaha Viharayas in Bentota.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Engineering Features:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Carved stone entrance with intricate 12th-century design</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Advanced ventilation system still visible today</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Stone support structures and archways</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Drainage channels to prevent flooding</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Historical Connections:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Connected to Galapatha Rajamaha Viharaya</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Linked to Udakotuwa temple complex</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Extended to Ganepansala meditation caves</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <span>Reached Bodhimaluwa temple grounds</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg mt-4">
                                        <p className="text-sm text-blue-800 dark:text-blue-200">
                                            <strong>Visitor Note:</strong> The tunnel entrance can be viewed from a safe observation 
                                            point. For preservation and safety reasons, You can enter this tunnel only for a very short distance. For safety reasons, going further through the tunnel is restricted, 
                                            but the visible sections provide an excellent view of this architectural wonder.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 text-lg">
                                The Mystical Underground Tunnel Network
                            </h4>
                            <p className="text-blue-800 dark:text-blue-300 mb-3">
                                One of the most fascinating features of Wanawasa Rajamaha Viharaya is its connection to an ancient 
                                underground tunnel system that once linked all five Rajamaha Viharayas in Bentota. You can see remaing enternace of this tunnel in Galapatha Rajamaha Viaharaya. These tunnels were 
                                constructed during the 12th century for multiple purposes:
                            </p>
                            <ul className="space-y-2 text-blue-800 dark:text-blue-300 ml-4">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                                    <span><strong>Safe passage for monks:</strong> Allowed Buddhist monks to travel securely between temples during times of conflict or invasion</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                                    <span><strong>Emergency evacuation routes:</strong> Provided escape routes during attacks or natural disasters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                                    <span><strong>Religious ceremonies:</strong> Connected sacred spaces for special Buddhist rituals and processions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                                    <span><strong>Protection of sacred relics:</strong> Enabled quick transfer of valuable Buddhist artifacts to safer locations</span>
                                </li>
                            </ul>
                            <p className="text-blue-800 dark:text-blue-300 mt-3">
                                <strong>Today at Wanawasa:</strong> Visitors can still see one of the best-preserved tunnel entrances 
                                in Sri Lanka! The entrance showcases remarkable medieval engineering with carved stone walls, ventilation 
                                systems, and structural supports that have survived for over 800 years. While the full tunnel network is 
                                no longer accessible for safety reasons, the visible sections provide a rare glimpse into this extraordinary 
                                ancient engineering achievement.
                            </p>
                        </div>
                        </CardContent>
                    </Card>

                        {/* Archaeological Museum Card */}
                        <Card className="border-l-4 border-l-amber-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <ScrollText className="w-6 h-6 text-amber-600" />
                                    Archaeological Museum & Artifact Collection
                                </CardTitle>
                                <CardDescription>Treasures from the Polonnaruwa Era</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/wanawasa-museum1.jpg",
                                                alt: "Archaeological museum displaying ancient stone inscriptions",
                                                caption: "Stone Inscriptions",
                                                title: "Museum Collection"
                                            },
                                            {
                                                src: "/wanawasa-museum2.jpg",
                                                alt: "Ancient Buddha statues and religious artifacts on display",
                                                caption: "Buddha Statues",
                                                title: "Religious Artifacts"
                                            },
                                            {
                                                src: "/wanawasa-museum3.jpg",
                                                alt: "Carved moonstones and architectural elements in museum",
                                                caption: "Architectural Elements",
                                                title: "Stone Carvings"
                                            },
                                            {
                                                src: "/wanawasa-museum4.jpg",
                                                alt: "Ancient pottery and ceremonial vessels collection",
                                                caption: "Ancient Pottery",
                                                title: "Ceremonial Vessels"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                        The temple houses a small but fascinating archaeological museum containing artifacts discovered 
                                        during excavations and restorations over the past century. This collection offers invaluable 
                                        insights into medieval Buddhist monastic life in Southern Sri Lanka.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Stone Inscriptions:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>12th-century royal edicts</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Land grant documents</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Temple administration records</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Donor inscriptions (Sinhala script)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Religious Artifacts:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Ancient Buddha statues</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Ceremonial oil lamps</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Offering vessels and pottery</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Buddhist ritual implements</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Architectural Elements:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Carved moonstones fragments</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Guard stone pieces</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Decorative stone carvings</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                    <span>Ancient roof tiles and bricks</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg mt-4">
                                        <p className="text-sm text-amber-800 dark:text-amber-200">
                                            <strong>Museum Hours:</strong> Open to visitors during temple hours (6:00 AM - 6:00 PM). 
                                            Free entry with temple admission. Photography inside the museum may be restricted for 
                                            artifact preservation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                        {/* Image House & Sacred Art Card */}
                        <Card className="border-l-4 border-l-green-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <Landmark className="w-6 h-6 text-green-600" />
                                    Traditional Image House & Buddhist Art
                                </CardTitle>
                                <CardDescription>Polonnaruwa Era Architecture & Wall Paintings</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/wanawasa-imagehouse1.jpg",
                                                alt: "Wanawasa image house exterior showing Polonnaruwa architecture",
                                                caption: "Image House Exterior",
                                                title: "Traditional Image House"
                                            },
                                            {
                                                src: "/wanawasa-imagehouse2.jpg",
                                                alt: "Main Buddha statue in meditation posture inside image house",
                                                caption: "Main Buddha Statue",
                                                title: "Sacred Buddha Image"
                                            },
                                            {
                                                src: "/wanawasa-imagehouse3.jpg",
                                                alt: "Ancient wall murals depicting Jataka tales",
                                                caption: "Wall Murals",
                                                title: "Buddhist Art"
                                            },
                                            {
                                                src: "/wanawasa-imagehouse4.jpg",
                                                alt: "Ceiling paintings with floral motifs and celestial beings",
                                                caption: "Ceiling Paintings",
                                                title: "Sacred Art"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                        The temple&apos;s main image house (Budu-ge) showcases classic Polonnaruwa period architecture with 
                                        thick walls, characteristic entrance designs, and interior chambers housing sacred Buddha statues 
                                        and ancient murals depicting Buddhist teachings.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Architectural Features:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Thick stone walls:</strong> Traditional construction providing natural cooling</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Carved entrance:</strong> Intricate stonework with Buddhist symbols</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Vaulted ceiling:</strong> Original 12th-century roof structure</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Window arrangements:</strong> Strategic lighting for meditation atmosphere</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Sacred Art & Statues:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Main Buddha statue:</strong> Seated Buddha in meditation posture (Dhyana mudra)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Wall murals:</strong> Depictions of Jataka tales (Buddha&apos;s previous lives)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Ceiling paintings:</strong> Floral motifs and celestial beings</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Guardian deities:</strong> Protective figures at entrance sides</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bodhi Tree & Meditation Grounds Card */}
                        <Card className="border-l-4 border-l-purple-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <Landmark className="w-6 h-6 text-purple-600" />
                                    Sacred Bodhi Tree & Meditation Grounds
                                </CardTitle>
                                <CardDescription>Ancient Meditation Spaces & Spiritual Atmosphere</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/wanawasa-bodhi1.jpg",
                                                alt: "Ancient Bodhi tree with carved stone platform at Wanawasa",
                                                caption: "Sacred Bodhi Tree",
                                                title: "Bodhi Tree Shrine"
                                            },
                                            {
                                                src: "/wanawasa-bodhi2.jpg",
                                                alt: "Meditation pavilion surrounded by tropical gardens",
                                                caption: "Meditation Pavilion",
                                                title: "Peaceful Meditation Space"
                                            },
                                            {
                                                src: "/wanawasa-bodhi3.jpg",
                                                alt: "Walking meditation path through temple grounds",
                                                caption: "Meditation Path",
                                                title: "Temple Grounds"
                                            },
                                            {
                                                src: "/wanawasa-bodhi4.jpg",
                                                alt: "Devotees offering flowers and oil lamps at Bodhi tree",
                                                caption: "Offering Ceremonies",
                                                title: "Religious Ceremonies"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                        The temple grounds feature a centuries-old Bodhi tree (sacred fig tree) descended from the original 
                                        tree under which Buddha attained enlightenment. This area serves as the spiritual heart of the temple, 
                                        where monks and devotees gather for meditation and religious ceremonies.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Sacred Spaces:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Ancient Bodhi tree platform with carved stone base</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Open-air meditation pavilions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Shaded walking meditation paths</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Traditional alms hall (Dana sala)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Visitor Activities:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Offer flowers and oil lamps at Bodhi tree</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Join meditation sessions (early morning)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Participate in Poya day ceremonies</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <span>Experience peaceful temple atmosphere</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Temple Gallery</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Ancient Structures</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ImageCarousel
                                    images={[
                                        {
                                            src: "/wanawasa-temple1.jpg",
                                            alt: "Main entrance and stone carvings of Wanawasa temple",
                                            caption: "Temple Entrance",
                                            title: "Main Entrance"
                                        },
                                        {
                                            src: "/wanawasa-temple2.jpg",
                                            alt: "Ancient tunnel entrance at Wanawasa temple",
                                            caption: "Historic Tunnel",
                                            title: "Tunnel Entrance"
                                        },
                                        {
                                            src: "/wanawasa-temple3.jpg",
                                            alt: "Stone inscriptions and carvings from the 12th century",
                                            caption: "Stone Inscriptions",
                                            title: "Ancient Inscriptions"
                                        }
                                    ]}
                                />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Sacred Areas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ImageCarousel
                                    images={[
                                        {
                                            src: "/wanawasa-shrine1.jpg",
                                            alt: "Main shrine room with Buddha statues",
                                            caption: "Main Shrine",
                                            title: "Buddha Shrine"
                                        },
                                        {
                                            src: "/wanawasa-shrine2.jpg",
                                            alt: "Ancient meditation area surrounded by stone walls",
                                            caption: "Meditation Space",
                                            title: "Meditation Area"
                                        },
                                        {
                                            src: "/wanawasa-shrine3.jpg",
                                            alt: "Sacred Bodhi tree shrine area",
                                            caption: "Bodhi Tree",
                                            title: "Bo Tree Shrine"
                                        }
                                    ]}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Visitor Information */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ScrollText className="w-5 h-5 text-primary" />
                                Visitor Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Planning Your Visit</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Opening Hours:</strong>
                                                <br />6:00 AM - 6:00 PM daily
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Location:</strong>
                                                <br />Wanawasa Temple Road, Bentota
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <History className="w-4 h-4 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Best Time to Visit:</strong>
                                                <br />Early morning or late afternoon for meditation
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Temple Etiquette</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Remove shoes before entering sacred areas</li>
                                        <li>• Dress modestly covering shoulders and knees</li>
                                        <li>• Maintain silence in meditation areas</li>
                                        <li>• Ask permission before taking photos inside shrines</li>
                                        <li>• Show respect to monks and other worshippers</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Historical Context */}
                <section className="mb-12">
                    <Card className="bg-slate-50 dark:bg-slate-900">
                        <CardHeader>
                            <CardTitle>Historical Timeline</CardTitle>
                            <CardDescription>Key events in the temple&apos;s history</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-24 font-bold text-primary">1153-1186 CE</div>
                                    <div>
                                        <h4 className="font-semibold">Temple Foundation</h4>
                                        <p className="text-muted-foreground">
                                            Built during King Parakramabahu&apos;s reign as part of his religious development program
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-24 font-bold text-primary">12th-13th Century</div>
                                    <div>
                                        <h4 className="font-semibold">Golden Age</h4>
                                        <p className="text-muted-foreground">
                                            Functioned as a major Buddhist education center and monastery
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-24 font-bold text-primary">15th-16th Century</div>
                                    <div>
                                        <h4 className="font-semibold">Period of Challenge</h4>
                                        <p className="text-muted-foreground">
                                            Survived foreign invasions while maintaining its religious significance
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-24 font-bold text-primary">Present Day</div>
                                    <div>
                                        <h4 className="font-semibold">Active Buddhist Temple</h4>
                                        <p className="text-muted-foreground">
                                            Continues to serve as an important religious center and historical monument
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
