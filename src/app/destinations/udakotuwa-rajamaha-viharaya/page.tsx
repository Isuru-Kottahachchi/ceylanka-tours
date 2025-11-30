"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, History, Landmark, ScrollText, Eye, Camera, TreePine } from "lucide-react"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function UdakotuwaTemple() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/udakotuwa-temple.jpg"
                    alt="Udakotuwa Rajamaha Viharaya with giant Buddha statues overlooking Bentota River"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Udakotuwa Rajamaha Viharaya</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Home of the Majestic Bentota River Buddha Statues</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80">
                            <MapPin className="w-4 h-4 mr-1" />
                            Bentota River Front
                        </Badge>
                        <Badge variant="secondary" className="bg-red-600/80 text-white border-white/30">
                            <Clock className="w-4 h-4 mr-1" />
                            12th Century CE
                        </Badge>
                        <Badge variant="secondary" className="bg-green-600/80 text-white border-white/30">
                            <Landmark className="w-4 h-4 mr-1" />
                            Royal Buddhist Temple
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Discover Udakotuwa Rajamaha Viharaya</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p className="mb-4">
                            Udakotuwa Rajamaha Viharaya stands as one of the most visually striking Buddhist temples in Sri Lanka, 
                            renowned for its magnificent collection of colossal Buddha statues positioned along the scenic Bentota 
                            River. As one of the five interconnected Rajamaha Viharayas (Royal Great Temples) in the Bentota region, 
                            this sacred site combines breathtaking riverside natural beauty with profound spiritual significance and 
                            centuries of Buddhist heritage.
                        </p>
                        <p className="mb-4">
                            Established during the glorious Polonnaruwa period in the 12th century under King Parakramabahu I 
                            (1153-1186 CE), Udakotuwa has evolved over 800+ years into a unique blend of ancient monastic traditions 
                            and modern Buddhist artistry. The temple gained international recognition for its spectacular giant Buddha 
                            statues - some reaching heights of over 50 feet - that greet travelers crossing the Bentota River bridge, 
                            creating one of Sri Lanka&apos;s most photographed and spiritually moving riverside landscapes.
                        </p>

                        <div className="my-8 p-6 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-l-4 border-amber-500">
                            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3 text-lg">
                                Understanding Rajamaha Viharaya Status
                            </h4>
                            <p className="text-amber-800 dark:text-amber-300 mb-3">
                                A <strong>Rajamaha Viharaya</strong> designation signifies a Buddhist temple of exceptional historical, 
                                religious, and cultural importance that received royal patronage from ancient Sri Lankan monarchs. These 
                                temples enjoyed special privileges including extensive land grants, protection from royal armies, tax 
                                exemptions, and substantial resources to support large monastic communities. They served as principal 
                                centers for Buddhist education, meditation practice, religious ceremonies, and preservation of sacred texts.
                            </p>
                            <p className="text-amber-800 dark:text-amber-300">
                                Udakotuwa, together with Wanawasa, Galapatha, Ganepansala, and Bodhimaluwa temples, constitutes the 
                                historically significant network of five Rajamaha Viharayas in Bentota. This interconnected temple system 
                                played a vital role in maintaining Buddhist traditions throughout Southern Sri Lanka during medieval times, 
                                especially during periods of foreign invasion and political instability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Temple Highlights & Specialties */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Temple Highlights & Sacred Attractions</h2>
                    <div className="space-y-6">
                        {/* Giant Buddha Statues Card */}
                        <Card className="border-l-4 border-l-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                    Magnificent Giant Buddha Statues Along Bentota River
                                </CardTitle>
                                <CardDescription>Sri Lanka&apos;s Most Iconic Riverside Buddhist Monument</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Udakotuwa-Rajamaha-Viharaya-Statue.jpeg",
                                                alt: "Towering Buddha statues at Udakotuwa overlooking Bentota River",
                                                caption: "Giant Riverside Buddhas",
                                                title: "Monumental Buddha Statues"
                                            },
                                            {
                                                src: "/udakotuwa-giant-buddha2.jpg",
                                                alt: "Close-up of seated Buddha statue in meditation posture",
                                                caption: "Meditation Buddha",
                                                title: "Sacred Buddha Image"
                                            },
                                            {
                                                src: "/udakotuwa-giant-buddha3.jpg",
                                                alt: "Standing Buddha statue with raised hand blessing gesture",
                                                caption: "Blessing Posture",
                                                title: "Abhaya Mudra Buddha"
                                            },
                                            {
                                                src: "/udakotuwa-river-view.jpg",
                                                alt: "Panoramic view of Buddha statues with Bentota River and bridge",
                                                caption: "River Panorama",
                                                title: "Bentota River View"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            The defining feature of Udakotuwa Rajamaha Viharaya is its extraordinary collection of 
                                            colossal Buddha statues positioned strategically along the Bentota River bank. These 
                                            monumental sculptures, some soaring over 50 feet (15+ meters) in height, create a 
                                            powerful spiritual presence visible from the Bentota Bridge and surrounding areas, making 
                                            this one of Southern Sri Lanka&apos;s most recognizable religious landmarks.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            While the temple&apos;s ancient origins date to the 12th century, these impressive modern 
                                            Buddha statues were constructed in recent decades as expressions of devotion by local 
                                            Buddhist communities. The statues showcase multiple traditional Buddha postures (mudras) 
                                            and have become beloved symbols of peace, protection, and Buddhist teachings for both 
                                            pilgrims and travelers passing through Bentota.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-primary">Statue Features:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Multiple Buddha images:</strong> Several statues in various postures and sizes</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Seated meditation Buddha:</strong> Largest statue in Dhyana mudra (meditation gesture)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Standing Buddha:</strong> Abhaya mudra (fearlessness blessing gesture)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>White and golden colors:</strong> Traditional Buddhist symbolic colors</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Riverside positioning:</strong> Dramatic backdrop of Bentota River waters</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-primary">Photography Opportunities:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Bridge viewpoint:</strong> Stunning perspective from Bentota Bridge</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Sunset photography:</strong> Golden hour light illuminating statues</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>River reflections:</strong> Mirror images in calm water conditions</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Wide-angle compositions:</strong> Capturing statues with natural landscape</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                        <span><strong>Detail shots:</strong> Close-ups of Buddha faces and hand gestures</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg mt-4">
                                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                                <strong>Visitor Tip:</strong> The Buddha statues are best photographed during early morning 
                                                (6:00-8:00 AM) or late afternoon (4:00-6:00 PM) when soft natural light enhances their 
                                                serene beauty. The viewpoint from Bentota Bridge offers spectacular panoramic shots, while 
                                                temple grounds provide close-up access for detailed photography.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Ancient Temple Ruins Card */}
                        <Card className="border-l-4 border-l-amber-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <History className="w-6 h-6 text-amber-600" />
                                    Ancient Temple Ruins & Archaeological Treasures
                                </CardTitle>
                                <CardDescription>12th Century Polonnaruwa Period Heritage</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/udakotuwa-ruins1.jpg",
                                                alt: "Ancient stone pillars and foundations from Polonnaruwa era",
                                                caption: "Ancient Foundations",
                                                title: "12th Century Ruins"
                                            },
                                            {
                                                src: "/udakotuwa-ruins2.jpg",
                                                alt: "Carved stone inscriptions with Sinhala script",
                                                caption: "Stone Inscriptions",
                                                title: "Historical Records"
                                            },
                                            {
                                                src: "/udakotuwa-ruins3.jpg",
                                                alt: "Remains of ancient stupa with brick construction",
                                                caption: "Stupa Remains",
                                                title: "Buddhist Stupa"
                                            },
                                            {
                                                src: "/udakotuwa-ruins4.jpg",
                                                alt: "Archaeological excavation area showing ancient structures",
                                                caption: "Excavation Site",
                                                title: "Archaeological Findings"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            Beneath the modern temple developments lie fascinating archaeological remains from 
                                            Udakotuwa&apos;s original 12th-century monastery complex. These ancient structures provide 
                                            tangible connections to the temple&apos;s Polonnaruwa period origins and offer insights into 
                                            medieval Buddhist monastic life in Southern Sri Lanka.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Archaeological surveys have uncovered stone pillar bases, foundation walls, stupa remains, 
                                            carved moonstones, and ancient inscription stones documenting land grants from King 
                                            Parakramabahu&apos;s reign. These discoveries confirm Udakotuwa&apos;s status as an important 
                                            royal temple within the interconnected network of five Bentota Rajamaha Viharayas.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-primary">Archaeological Features:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Ancient stone pillar foundations from original monastery</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Brick stupa remains showing traditional construction</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Carved moonstones at entrance thresholds</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Guard stones with traditional deity figures</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Stone inscription slabs documenting temple history</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-primary">Historical Significance:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Built during King Parakramabahu I&apos;s reign (1153-1186 CE)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Part of royal temple network in Bentota region</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Strategic riverside location for monastic activities</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Connected to underground tunnel system</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                                                        <span>Survived through 800+ years of history</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Underground Tunnel Connection Card */}
                        <Card className="border-l-4 border-l-green-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <TreePine className="w-6 h-6 text-green-600" />
                                    Underground Tunnel Network Connection
                                </CardTitle>
                                <CardDescription>Secret Passages Linking Five Royal Temples</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/udakotuwa-tunnel1.jpg",
                                                alt: "Ancient tunnel entrance at Udakotuwa temple grounds",
                                                caption: "Tunnel Entrance",
                                                title: "Underground Passage"
                                            },
                                            {
                                                src: "/udakotuwa-tunnel2.jpg",
                                                alt: "Stone archway leading to underground passages",
                                                caption: "Stone Archway",
                                                title: "Medieval Architecture"
                                            },
                                            {
                                                src: "/udakotuwa-tunnel3.jpg",
                                                alt: "Historical diagram showing tunnel network connecting temples",
                                                caption: "Tunnel Network Map",
                                                title: "Five Temple Connection"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            Udakotuwa was historically connected to the remarkable underground tunnel network that 
                                            linked all five Rajamaha Viharayas in Bentota (Udakotuwa, Wanawasa, Galapatha, Ganepansala, 
                                            and Bodhimaluwa). This sophisticated subterranean system represented extraordinary medieval 
                                            engineering and served crucial functions for the monastic community.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            The tunnel network enabled monks to travel safely between temples during periods of foreign 
                                            invasion, provided emergency evacuation routes, facilitated religious ceremonies requiring 
                                            coordination between temples, and allowed secure transport of sacred relics. While most tunnel 
                                            sections have collapsed over centuries, remnants of entrance structures can still be observed 
                                            at temple grounds.
                                        </p>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-primary">Tunnel Network Purposes:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Safe passage for monks:</strong> Protected travel during conflicts and invasions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Emergency evacuation routes:</strong> Quick escape during attacks or natural disasters</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Religious ceremonies:</strong> Connected sacred spaces for special Buddhist rituals</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Relic protection:</strong> Secure transfer of valuable Buddhist artifacts</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                                                    <span><strong>Communication network:</strong> Information exchange between temple communities</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg mt-4">
                                            <p className="text-sm text-green-800 dark:text-green-200">
                                                <strong>Historical Note:</strong> Best-preserved tunnel entrance can be seen at Wanawasa 
                                                Rajamaha Viharaya. While Udakotuwa&apos;s tunnel sections are no longer accessible, historical 
                                                records and archaeological evidence confirm its connection to this fascinating medieval network.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Modern Temple Complex Card */}
                        <Card className="border-l-4 border-l-purple-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <Landmark className="w-6 h-6 text-purple-600" />
                                    Modern Temple Complex & Meditation Facilities
                                </CardTitle>
                                <CardDescription>Active Buddhist Center with Contemporary Amenities</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/udakotuwa-modern1.jpg",
                                                alt: "Modern shrine room with Buddha statues and offerings",
                                                caption: "Modern Shrine Room",
                                                title: "Contemporary Temple Hall"
                                            },
                                            {
                                                src: "/udakotuwa-modern2.jpg",
                                                alt: "Meditation hall with peaceful atmosphere",
                                                caption: "Meditation Hall",
                                                title: "Tranquil Meditation Space"
                                            },
                                            {
                                                src: "/udakotuwa-modern3.jpg",
                                                alt: "Temple garden with flowering plants and sacred Bodhi tree",
                                                caption: "Temple Gardens",
                                                title: "Peaceful Garden Areas"
                                            },
                                            {
                                                src: "/udakotuwa-modern4.jpg",
                                                alt: "Devotees offering flowers and prayers at temple",
                                                caption: "Religious Activities",
                                                title: "Buddhist Ceremonies"
                                            }
                                        ]}
                                    />
                                    <div className="space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            While honoring its ancient heritage, Udakotuwa functions as a vibrant contemporary Buddhist 
                                            temple serving local communities and welcoming visitors from around the world. The temple 
                                            complex includes modern shrine halls, meditation facilities, monk residences, ceremonial 
                                            spaces, and beautifully maintained gardens that provide peaceful environments for spiritual 
                                            practice and contemplation.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            The temple remains especially active during Buddhist festival days (Poya days) when devotees 
                                            gather for special ceremonies, Dhamma teachings, meditation sessions, and traditional rituals. 
                                            Visitors are welcome to participate respectfully in these activities, offering unique 
                                            opportunities to experience living Buddhist traditions in Sri Lanka.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-primary">Temple Facilities:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Main shrine hall with multiple Buddha images</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Dedicated meditation halls for practitioners</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Sacred Bodhi tree with offering platform</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Traditional alms hall (Dana sala) for offerings</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Landscaped gardens with shaded walking paths</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-primary">Visitor Activities:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Offer flowers, incense, and oil lamps</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Participate in meditation sessions</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Attend Dhamma talks and chanting ceremonies</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Experience Poya day celebrations</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                        <span>Peaceful contemplation in garden areas</span>
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

                {/* What to See & Do */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">What to See & Experience at Udakotuwa</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Camera className="w-5 h-5 text-blue-500" />
                                    Photography Paradise
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Capture stunning photographs of the giant Buddha statues from Bentota Bridge, riverside viewpoints, 
                                    and temple grounds. Sunset and sunrise offer spectacular lighting for memorable shots of these 
                                    iconic monuments against natural riverside beauty.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Landmark className="w-5 h-5 text-amber-500" />
                                    Archaeological Exploration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Discover ancient ruins dating to the 12th century Polonnaruwa period. Observe stone pillar 
                                    foundations, stupa remains, carved moonstones, and inscription stones that document the temple&apos;s 
                                    800+ year history as a royal Buddhist monastery.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Eye className="w-5 h-5 text-green-500" />
                                    Spiritual Contemplation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Experience the peaceful atmosphere of meditation halls, offer prayers at the main shrine, 
                                    make offerings at the sacred Bodhi tree, and participate in Buddhist ceremonies. The riverside 
                                    setting provides naturally tranquil environments perfect for reflection.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <History className="w-5 h-5 text-purple-500" />
                                    Historical Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Learn about the fascinating underground tunnel network connecting five Bentota temples, 
                                    King Parakramabahu&apos;s Buddhist development projects, and the role Udakotuwa played in 
                                    preserving Buddhism through centuries of challenges.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <ScrollText className="w-5 h-5 text-red-500" />
                                    Cultural Immersion
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Join local devotees during Poya day celebrations, observe traditional Buddhist rituals, 
                                    participate in meditation sessions, listen to Dhamma talks, and experience authentic Sri Lankan 
                                    Buddhist temple culture and community life.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <TreePine className="w-5 h-5 text-teal-500" />
                                    Nature Appreciation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    Enjoy the scenic Bentota River views, stroll through beautifully maintained temple gardens 
                                    with tropical flowering plants, observe river wildlife, and appreciate the harmonious 
                                    integration of sacred monuments with natural riverside landscapes.
                                </p>
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
                                Essential Visitor Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Planning Your Temple Visit</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500" />
                                            <div>
                                                <strong>Opening Hours:</strong>
                                                <br />6:00 AM - 7:00 PM daily (Temple grounds accessible throughout daylight hours)
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-green-500" />
                                            <div>
                                                <strong>Location:</strong>
                                                <br />Bentota River bank, near Bentota Bridge, Southern Province
                                                <br />Easily visible from main Colombo-Galle highway (A2)
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <History className="w-4 h-4 mt-1 flex-shrink-0 text-purple-500" />
                                            <div>
                                                <strong>Best Visiting Times:</strong>
                                                <br />Early morning (6:00-8:00 AM) for meditation and soft lighting
                                                <br />Late afternoon (4:00-6:00 PM) for photography and sunset views
                                                <br />Poya days (Full moon) for special ceremonies and cultural experiences
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Camera className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                                            <div>
                                                <strong>Photography:</strong>
                                                <br />Exterior Buddha statues: Freely photographable
                                                <br />Bridge viewpoint: Excellent panoramic shots
                                                <br />Inside shrines: Ask permission respectfully before photographing
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Temple Etiquette & Guidelines</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span><strong>Dress modestly:</strong> Cover shoulders and knees (sarongs available if needed)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span><strong>Remove footwear:</strong> Take off shoes and hats before entering shrine buildings</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span><strong>Respectful behavior:</strong> Maintain quiet voices in sacred areas and meditation halls</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span><strong>Buddha images:</strong> Never turn your back directly to Buddha statues; sit or stand facing them</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span><strong>Photography permissions:</strong> Request approval before photographing inside shrines or monks</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span><strong>Offerings:</strong> You may offer flowers, incense, or oil lamps at designated areas</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span><strong>Donations:</strong> Voluntary contributions support temple maintenance (donation boxes available)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* How to Get There */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                How to Reach Udakotuwa Rajamaha Viharaya
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">From Colombo</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                            <span><strong>By Car/Taxi:</strong> 90 km via Southern Expressway (E01) and Galle Road (A2). Journey time: 1.5-2 hours</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                            <span><strong>By Train:</strong> Coastal line to Bentota Railway Station, then 10-minute tuk-tuk ride (3 km) to temple</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                            <span><strong>By Bus:</strong> Regular buses from Colombo Fort/Pettah to Bentota (Route 2), temple visible from main road</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">From Galle & South Coast</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                            <span><strong>Distance:</strong> 60 km north of Galle via Galle Road (A2), approximately 1 hour drive</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                            <span><strong>By Train:</strong> Coastal train to Bentota Station, very scenic journey along coastline</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                                    <p className="text-sm text-blue-800 dark:text-blue-200">
                                        <strong>Local Tip:</strong> The giant Buddha statues are prominently visible from Bentota Bridge 
                                        on the main A2 highway. If arriving by public transport, ask the driver for "Udakotuwa Temple" 
                                        or "Bentota Bridge Buddha statues" - it&apos;s a well-known local landmark. Temple parking available 
                                        for private vehicles.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Nearby Attractions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Explore Nearby Bentota Attractions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Other Rajamaha Viharayas in Bentota</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong>Wanawasa Rajamaha Viharaya:</strong> Best-preserved underground tunnel entrance, 
                                            archaeological museum (5 km away)
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong>Galapatha Rajamaha Viharaya:</strong> Ancient murals, colonial-era image house, 
                                            historical significance (6 km away)
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong>Ganepansala & Bodhimaluwa:</strong> Meditation caves and forest temples 
                                            completing the five-temple network
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Bentota Area Activities</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong>Bentota Beach:</strong> Golden sand beach perfect for swimming, water sports, 
                                            and relaxation (3 km away)
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong>Bentota River Safari:</strong> Mangrove boat tours, wildlife watching, 
                                            river cruises (starting point nearby)
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong>Brief Garden:</strong> Bevis Bawa&apos;s stunning landscape garden and art collection 
                                            (15 km away, highly recommended)
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2">
                        <CardContent className="pt-6">
                            <h3 className="text-2xl font-bold mb-4 text-foreground">Experience Udakotuwa&apos;s Unique Blend of Ancient Heritage & Riverside Majesty</h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                Udakotuwa Rajamaha Viharaya offers visitors an extraordinary combination of awe-inspiring giant Buddha 
                                statues, scenic Bentota River views, 12th-century archaeological treasures, and active Buddhist temple 
                                life. Whether you&apos;re seeking spectacular photography opportunities, spiritual contemplation, historical 
                                exploration, or cultural immersion, this remarkable temple delivers unforgettable experiences.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                As part of the five interconnected Rajamaha Viharayas in Bentota, Udakotuwa represents an essential piece 
                                of Southern Sri Lanka&apos;s Buddhist heritage. The temple&apos;s iconic riverside Buddha statues have become 
                                beloved landmarks recognized throughout the country, welcoming travelers while serving as symbols of peace, 
                                protection, and timeless Buddhist teachings. Plan your visit to this unique riverside sanctuary and discover 
                                why Udakotuwa remains one of Bentota&apos;s most cherished spiritual and cultural treasures.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
