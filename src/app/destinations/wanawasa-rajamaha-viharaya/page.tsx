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
                    src="/wanawasa1.jpg"
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
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            Bentota, Southern Province
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <Clock className="w-4 h-4 mr-1" />
                            12th Century CE
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
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
                        <p>
                            Wanawasa Rajamaha Viharaya is one of the most important ancient Buddhist temples in Bentota. 
                            Built during the reign of King Parakramabahu the Great (1153-1186 CE), this temple has served 
                            as a significant center of Buddhist learning and meditation for over 800 years.
                        </p>
                        
                        <div className="my-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500">
                            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Historical Significance</h4>
                            <p className="text-amber-800 dark:text-amber-300">
                                The temple was part of an ancient network of five royal temples in the Bentota region, 
                                connected by underground tunnels. Today, it houses one of the best-preserved tunnel 
                                entrances, offering a rare glimpse into medieval Sri Lankan monastery design.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Landmark className="w-5 h-5 text-primary" />
                                Main Attractions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Ancient Architecture</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                            <span>
                                                <strong>Ancient Tunnel Entrance:</strong> One of the best-preserved entrances 
                                                to the medieval tunnel network that connected five major temples in Bentota.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                            <span>
                                                <strong>Image House:</strong> Features traditional Polonnaruwa era architecture 
                                                with detailed stone carvings and Buddha statues.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                            <span>
                                                <strong>Stone Inscriptions:</strong> Contains valuable historical records from 
                                                the 12th century, documenting royal patronage and temple administration.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Sacred Spaces</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                            <span>
                                                <strong>Main Shrine Room:</strong> Houses ancient Buddha statues and wall 
                                                paintings depicting scenes from Buddhist scripture.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                            <span>
                                                <strong>Meditation Areas:</strong> Peaceful spaces used by monks for 
                                                meditation, surrounded by ancient stone walls and tropical gardens.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                            <span>
                                                <strong>Bodhi Tree Shrine:</strong> A sacred space centered around an 
                                                ancient Bo tree, used for meditation and offerings.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
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
