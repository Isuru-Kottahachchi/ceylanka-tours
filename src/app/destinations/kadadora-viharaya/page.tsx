"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, LandmarkIcon, Mountain, Cloud, Droplet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/carousel"

const carouselImages = [
    {
        src: "/kadadora-temple.jpg",
        alt: "Front view of Kadadora Viharaya showing the temple entrance",
        title: "Temple Entrance",
        description: "The beautiful entrance of Kadadora Viharaya with traditional Sri Lankan architecture"
    },
    {
        src: "/kadadora-buddha.jpg",
        alt: "Ancient Buddha statue at Kadadora Viharaya",
        title: "Ancient Buddha Statue",
        description: "The main Buddha statue showing remarkable craftsmanship from the Kandyan era"
    },
    {
        src: "/kadadora-paintings.jpg",
        alt: "Traditional wall paintings inside Kadadora temple",
        title: "Temple Paintings",
        description: "Colorful wall paintings depicting Buddhist stories and local history"
    },
    {
        src: "/kadadora-view.jpg",
        alt: "Scenic view from Kadadora temple overlooking Kothmale reservoir",
        title: "Scenic View",
        description: "Breathtaking view of the Kothmale reservoir and surrounding mountains"
    }
];

export default function KadadoraViharayaPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Kadadora-Viharaya.jpg"
                    alt="Panoramic view of Kadadora Viharaya with Kothmale reservoir in background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Kadadora Viharaya</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Ancient Temple Submerged by Kothmale Reservoir</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-amber-600/80">
                            <MapPin className="w-4 h-4 mr-1" />
                            Kothmale
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80">
                            <LandmarkIcon className="w-4 h-4 mr-1" />
                            Buddhist Temple
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80">
                            <Droplet className="w-4 h-4 mr-1" />
                            Submerged Heritage
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Section Navigation */}
            <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
                    <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Introduction</a>
                    <a href="#history" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">History</a>
                    <a href="#gallery" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Gallery</a>
                    <a href="#features" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Key Features</a>
                    <a href="#visitor-guide" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Visitor Guide</a>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12" id="introduction">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Temple Above the Reservoir</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Kadadora Viharaya is a historic Buddhist temple located in the Kothmale region, offering
                            stunning views of the Kothmale reservoir and surrounding mountains. The temple stands as
                            a testament to Sri Lankan Buddhist architecture and holds significant religious importance
                            for the local community.
                        </p>
                        <p className="text-lg">
                            What makes this temple special is its location and history. Before the Kothmale reservoir
                            was built, the temple served the old Kadadora village. When the reservoir was created, the
                            temple was carefully preserved on higher ground, making it one of the few remaining
                            structures from the original village.
                        </p>
                    </div>
                </section>

                {/* Historical Significance */}
                <section className="mb-12" id="history">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historical Significance</CardTitle>
                            <CardDescription>A Heritage Preserved Above the Waters</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    The temple holds special significance as it represents the cultural heritage of the
                                    submerged Kothmale valley. Key historical aspects include:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                        <span>Original temple dates back to the Kandyan period</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                        <span>Preserved during the Kothmale reservoir project</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                        <span>Houses ancient Buddha statues and paintings</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                        <span>Represents the cultural heritage of old Kothmale</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Image Gallery */}
                <section className="mb-16" id="gallery">
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle>Temple Gallery</CardTitle>
                            <CardDescription>Visual journey through Kadadora Viharaya</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ImageCarousel images={carouselImages} />
                        </CardContent>
                    </Card>
                </section>

                {/* Quick Facts & Location */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Quick Facts */}
                    <section className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Quick Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Period:</strong> Kandyan Era
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LandmarkIcon className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Type:</strong> Buddhist Temple
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mountain className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Elevation:</strong> Overlooking reservoir
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Cloud className="w-4 h-4 text-purple-500" />
                                        <span>
                                            <strong>Climate:</strong> Cool mountain weather
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Location & Access */}
                    <section className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    Location & Access
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Location:</strong> Kothmale, Central Province
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Best Time:</strong> Early morning or sunset
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Access:</strong> By road, parking available
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Key Features */}
                <section className="mb-16" id="features">
                    <h2 className="text-3xl font-bold mb-8">Temple Highlights</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Temple Architecture */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Temple Architecture</CardTitle>
                                <CardDescription>Traditional Buddhist Design</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <Image
                                        src="/kadadora-architecture.jpg"
                                        alt="Architectural features of Kadadora Viharaya"
                                        width={600}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Traditional Kandyan architecture</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Wooden carvings and pillars</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Ancient shrine room</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sacred Artifacts */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Sacred Artifacts</CardTitle>
                                <CardDescription>Religious and Cultural Heritage</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <Image
                                        src="/kadadora-artifacts.jpg"
                                        alt="Sacred artifacts at Kadadora Viharaya"
                                        width={600}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Ancient Buddha statues</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Traditional wall paintings</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Historical inscriptions</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Visitor Information */}
                <section className="mb-16" id="visitor-guide">
                    <Card>
                        <CardHeader>
                            <CardTitle>Visitor Guidelines</CardTitle>
                            <CardDescription>Important information for your visit</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-lg mb-4">Before You Visit</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span>Temple open from sunrise to sunset</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span>Dress modestly - cover knees and shoulders</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span>Remove shoes before entering temple buildings</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-4">At the Temple</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span>Photography allowed (no flash inside)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span>Maintain silence in worship areas</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                            <span>Local guides available for historical information</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Travel Tips */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 dark:from-amber-950 dark:via-amber-900 dark:to-amber-950">
                        <CardContent className="p-8">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl font-bold mb-4">Essential Tips</h2>
                                <div className="max-w-3xl mx-auto text-muted-foreground space-y-2">
                                    <p>• Only visible during low water levels</p>
                                    <p>• Visit during early morning for best views and photography</p>
                                    <p>• Bring a light jacket as it can be cool and windy</p>
                                    <p>• Plan to spend 1-2 hours exploring the temple</p>
                                    <p>• Combine with a visit to Kothmale reservoir</p>
                                    <p>• Best visited during the dry season (May to September)</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
