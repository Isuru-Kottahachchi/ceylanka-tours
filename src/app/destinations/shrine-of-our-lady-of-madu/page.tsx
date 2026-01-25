"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Heart, Palmtree, Fish, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ImageCarousel } from "@/components/ui/image-carousel"
import InsuranceBanner from "@/components/insurance-banner"

export default function ShrineOfOurLadyOfMaduGuide() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Madu-Church.jpg"
                    alt="Historic Shrine of Our Lady of Madu on Madu Island with traditional colonial architecture and Madu Ganga River surrounding"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Shrine of Our Lady of Madhu</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka's Most Revered Catholic Sanctuary</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Madhu, Mannar District
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
                            <Heart className="w-4 h-4 mr-1" />
                            Sacred Pilgrimage Site
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-amber-600/80 text-white border-amber-500">
                            <Clock className="w-4 h-4 mr-1" />
                            17th Century Heritage
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Section Navigation Bar */}
            <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-wrap gap-2 px-4 py-2 justify-center">
                    <a href="#introduction" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Introduction</a>
                    <a href="#quick-facts" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Quick Facts</a>
                    <a href="#how-to-get" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">How to Get There</a>
                    <a href="#visiting-guide" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Visiting Guide</a>
                    <a href="#attractions" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Attractions</a>
                    <a href="#nearby" className="px-3 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Nearby Places</a>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12 scroll-mt-40" id="introduction">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        A Sacred Sanctuary of Faith and Refuge
                    </h2>
                    <div className="grid md:grid-cols-[1fr_140px] gap-6 items-start">
                        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                            <p className="text-lg mb-4">
                                The Shrine of Our Lady of Madhu stands as the most venerated Catholic pilgrimage site in Sri Lanka, located in the remote interior of Mannar District in the Northern Province. This sacred sanctuary, dedicated to the Virgin Mary, has served as a spiritual beacon for over 400 years, drawing devotees from across the island and beyond. The church houses a miraculous statue of Our Lady, believed to have been brought to Sri Lanka by Catholic missionaries during the Portuguese colonial period in the early 1600s.
                            </p>
                            <p className="text-lg mb-4">
                                What makes Madhu Church particularly significant in Sri Lankan history is its role as a place of refuge and hope during times of conflict. During the civil war that affected the northern regions, the shrine remained a neutral sanctuary where people of all backgrounds sought shelter and peace. The annual feast in August transforms this remote location into a vibrant gathering of faith, with tens of thousands of pilgrims undertaking arduous journeys to pay homage to Our Lady of Madhu, making it one of the largest religious gatherings in Asia.
                            </p>
                        </div>

                        {/* Small Sri Lanka Map with Location */}
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="relative w-[200px] md:w-[180px] lg:w-[200px] bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 border border-blue-200 dark:border-blue-800">
                                <div className="w-full h-[200px] bg-gradient-to-br from-blue-300 to-purple-300 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-6 h-6 text-red-600 mx-auto mb-2" />
                                        <p className="text-xs font-bold text-red-600">Madhu Shrine</p>
                                        <p className="text-[9px] text-purple-900">Northern Province</p>
                                    </div>
                                </div>
                                <div className="text-center mt-2">
                                    <div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-bold text-[10px]">
                                        <MapPin className="w-3 h-3" />
                                        <span>Sacred Shrine</span>
                                    </div>
                                    <p className="text-[9px] text-muted-foreground">Mannar District Interior</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mt-8">
                        <div className="my-8 p-4 rounded-lg bg-blue-100 dark:bg-blue-900/60 border-l-4 border-blue-400 dark:border-blue-500">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">The Miraculous Statue</h4>
                            <p className="text-gray-800 dark:text-blue-100">
                                The shrine houses a small wooden statue of the Virgin Mary holding the infant Jesus, brought to Sri Lanka by Catholic missionaries in the early 1600s. According to tradition, when the Dutch persecuted Catholics in the 1670s, faithful devotees fled with the statue deep into the Madhu jungle to protect it. The statue is believed to have miraculous powers, with countless devotees attributing healings, answered prayers, and divine interventions to Our Lady of Madhu. The statue stands just 2 feet tall but holds immense spiritual significance for millions of Catholics across South Asia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Facts & How to Get There */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Quick Facts */}
                    <section className="flex-1 scroll-mt-40" id="quick-facts">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-500" />
                                    Shrine Quick Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-1 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Location:</strong> Madhu village, Mannar District, Northern Province
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Heart className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Dedication:</strong> Our Lady of Madhu (Virgin Mary)
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Established:</strong> Early 1600s (Portuguese Catholic mission)
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Palmtree className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Environment:</strong> Remote jungle interior (peaceful sanctuary)
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Annual Feast:</strong> Mid-August (typically 2 weeks of celebrations)
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <strong>Pilgrims Annually:</strong> Over 500,000 during feast season
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <InsuranceBanner />
                    </section>

                    {/* How to Get There */}
                    <section className="flex-1 scroll-mt-40" id="how-to-get">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    How to Get to Madhu Shrine
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">From Colombo</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Distance: ~340 km northwest</li>
                                        <li>• Duration: 6-7 hours by car</li>
                                        <li>• Via A3 → Chilaw → A12 → Puttalam → A14 to Mannar</li>
                                        <li>• Then local road to Madhu village</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">From Mannar Town</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Distance: ~35 km southeast</li>
                                        <li>• Duration: 45 minutes - 1 hour</li>
                                        <li>• Via interior roads through Madhu region</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">From Vavuniya</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Distance: ~70 km west</li>
                                        <li>• Duration: 1.5-2 hours</li>
                                        <li>• Popular route for pilgrims from eastern regions</li>
                                    </ul>
                                </div>

                                <div className="p-3 bg-blue-100 dark:bg-slate-700 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                                    <p className="text-xs text-blue-800 dark:text-blue-200">
                                        <strong>💡 Tip:</strong> The shrine is in a remote location. Hire a reliable vehicle with a knowledgeable driver. During the annual feast (mid-August), arrange accommodation well in advance as the area becomes extremely crowded with over 500,000 pilgrims. Basic facilities are available near the shrine; better hotels are in Mannar town.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Visiting Guide */}
                <section className="mb-12 scroll-mt-40" id="visiting-guide">
                    <Card className="border-blue-200 dark:border-gray-700 bg-blue-50 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle className="text-blue-800 dark:text-blue-300 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Essential Visiting Information
                            </CardTitle>
                            <CardDescription className="text-blue-700 dark:text-blue-300">
                                Important details to know before visiting the Shrine of Our Lady of Madhu
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">🙏 Dress Code & Conduct</h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Dress modestly - covering shoulders and knees is respectful</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Remove shoes before entering the shrine</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Maintain silence and reverence within the sacred space</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Photography may be restricted in certain areas - ask permission</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">⏰ Visiting Hours & Services</h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                            <span>Morning mass: 6:30 AM - 7:30 AM (local time)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                            <span>Afternoon mass: 4:00 PM - 5:00 PM</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                            <span>Open for prayer throughout the day</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Heart className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>Annual Feast: August 15 (Assumption of Mary) - Major celebration</span>
                                        </li>
                                    </ul>
                                </div>



                                <div className="p-4 bg-amber-100 dark:bg-slate-700 rounded-lg border-l-4 border-amber-500 dark:border-amber-400">
                                    <p className="text-sm text-amber-800 dark:text-amber-200">
                                        <strong>⚠️ Important:</strong> The shrine is in a remote inland location with limited facilities. Roads can be challenging during monsoon season (May-September). The dry season (December-March) offers better travel conditions. During the annual feast in August, expect massive crowds and book everything in advance. Respect the sacred nature of the site at all times.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Top Attractions & Features */}
                <section className="mb-12 scroll-mt-40" id="attractions">
                    <h2 className="text-3xl font-bold mb-6">Key Attractions & Features</h2>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. The Sacred Shrine Church</CardTitle>
                                <CardDescription>A historic monument of Portuguese colonial architecture</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Madu-Church.jpg",
                                                alt: "Shrine of Our Lady of Madu church with Portuguese colonial architecture",
                                                caption: "Shrine Church View",
                                                title: "Our Lady of Madu Shrine"
                                            },
                                        ]}
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Madhu Church stands in a remote jungle clearing, housing the sacred statue of Our Lady of Madhu. While architecturally simple, the shrine's spiritual power lies in its history as a sanctuary that survived persecution. The church grounds include outdoor spaces for the massive pilgrim gatherings during the annual feast, where hundreds of thousands come to seek blessings and miracles.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                Home to the miraculous 2-foot wooden statue of Mary
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                Protected since 1670s when Catholics fled Dutch persecution
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                Neutral sanctuary during civil war years
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                Countless testimonies of miraculous healings
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>2. The Annual Feast & Pilgrimage</CardTitle>
                                <CardDescription>A celebration of faith attracting thousands of devotees</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Annual Feast of Our Lady of Madhu (mid-August) is one of Asia's largest Catholic pilgrimages, transforming this remote sanctuary into a massive gathering of over 500,000 devotees. Pilgrims travel for days on foot from across Sri Lanka, India, and beyond to honor Our Lady of Madhu. The feast celebrations span nearly two weeks, featuring special masses, all-night prayer vigils, candlelight processions, and countless testimonies of miraculous healings and answered prayers.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                                Processions with religious icons and statues
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                                Special masses and religious services
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                                Candle lighting ceremonies and prayer vigils
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                                Community meals and cultural celebrations
                                            </li>
                                        </ul>
                                        <p className="text-sm text-amber-700 dark:text-amber-300 mt-4 p-3 bg-amber-100 dark:bg-amber-900/40 rounded">
                                            <strong>Note:</strong> If visiting during the feast, arrive early as large crowds gather and boat services are in high demand.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-amber-50 dark:bg-slate-700 rounded-lg">
                                        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Feast Highlights</h4>
                                        <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                                            <li>📅 Date: Mid-August (usually 2 weeks)</li>
                                            <li>⛪ Peak Day: August 15 (Assumption)</li>
                                            <li>👥 Attendance: 500,000+ pilgrims</li>
                                            <li>🕯️ Traditions: All-night vigils, novenas</li>
                                            <li>🚶 Many walk for days to reach shrine</li>
                                            <li>🙏 Testimonies of miracles shared publicly</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>3. Historical Significance & Colonial Heritage</CardTitle>
                                <CardDescription>Understanding centuries of spiritual and cultural history</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">
                                        The Shrine of Our Lady of Madhu represents over 400 years of unwavering Catholic faith in Sri Lanka. The miraculous statue was brought by Portuguese Catholic missionaries in the early 1600s. When the Dutch conquered Ceylon in 1658 and began persecuting Catholics, devoted villagers fled with the sacred statue deep into the Madhu jungle to protect it. This remote location became a permanent sanctuary, and the shrine has remained a powerful symbol of faith preserved through persecution, colonialism, and modern conflict.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-amber-50 dark:bg-slate-700 rounded-lg border border-amber-200 dark:border-amber-700">
                                            <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Dutch Persecution Era (1658-1796)</h5>
                                            <p className="text-sm text-amber-700 dark:text-amber-300">
                                                When the Dutch conquered Ceylon and banned Catholicism, faithful Catholics fled with the miraculous statue into the remote Madhu jungle. For over a century, the shrine existed as a hidden sanctuary where Catholics secretly gathered to worship despite severe persecution and harsh penalties.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-blue-50 dark:bg-slate-700 rounded-lg border border-blue-200 dark:border-blue-700">
                                            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Civil War Sanctuary (1983-2009)</h5>
                                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                                During Sri Lanka's civil war, Madhu Church became a neutral sanctuary zone where thousands sought refuge from conflict. Despite being in a war zone, the shrine remained respected by all parties, serving as a symbol of peace and providing shelter to displaced people of all faiths and backgrounds.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-blue-100 dark:bg-slate-700 rounded-lg border-l-4 border-blue-500">
                                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🏛️ The Sacred Shrine</h4>
                                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                                            <li>• The miraculous statue stands in an ornate shrine within the church</li>
                                            <li>• Simple, functional architecture befitting its jungle origins</li>
                                            <li>• Large open grounds to accommodate massive pilgrim gatherings</li>
                                            <li>• Stations of the Cross path for meditation</li>
                                            <li>• Multiple confessionals serve thousands during feast</li>
                                            <li>• Candle offerings area where devotees light votive candles</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="mb-12 scroll-mt-40" id="nearby">
                    <h2 className="text-3xl font-bold mb-6">What Else is Nearby</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    Mannar Town & Fort
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-sm space-y-2">
                                <p><strong>Distance from Shrine:</strong> 35 km northwest</p>
                                <p>
                                    Historic coastal town with Dutch Fort remains, baobab trees, and access to Mannar Island. The town serves as the main base for visitors to Madhu Shrine, offering hotels, restaurants, and supplies.
                                </p>
                                <p><strong>What to do:</strong> Fort exploration, beach visits, birdwatching</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Palmtree className="w-5 h-5 text-green-600" />
                                    Wilpattu National Park
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-sm space-y-2">
                                <p><strong>Distance from Shrine:</strong> 50 km south</p>
                                <p>
                                    Sri Lanka's largest national park, famous for leopards and natural lakes (villus). The park's western entrance is relatively accessible from Madhu Shrine area.
                                </p>
                                <p><strong>What to do:</strong> Wildlife safari, leopard spotting, nature photography</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-red-500" />
                                    Thiruketheeswaram Temple
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-sm space-y-2">
                                <p><strong>Distance from Shrine:</strong> 40 km north</p>
                                <p>
                                    One of the ancient Pancha Ishwarams (five abodes of Shiva) in Sri Lanka, this Hindu temple has been a pilgrimage site for over 2,000 years, showing the region's multi-faith heritage.
                                </p>
                                <p><strong>What to do:</strong> Temple visits, spiritual experience, architecture</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Adam's Bridge (Ram Setu)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-sm space-y-2">
                                <p><strong>Distance from Shrine:</strong> 70 km northwest</p>
                                <p>
                                    A chain of limestone shoals connecting Mannar to India's Rameswaram. This geological formation holds religious significance in Hindu and Islamic traditions.
                                </p>
                                <p><strong>What to do:</strong> Coastal views, historical sites, bird sanctuary</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Travel Tips */}
                <section className="mb-12">
                    <Card className="border-green-200 dark:border-gray-700 bg-green-50 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-300">🌟 Essential Travel Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <span className="text-lg">🚗</span>
                                        <div>
                                            <p className="font-semibold">Hire a Vehicle</p>
                                            <p className="text-xs text-muted-foreground">Use Ceylanka Tours or similar services for comfortable transport with knowledgeable drivers</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">🎫</span>
                                        <div>
                                            <p className="font-semibold">Entry is Free</p>
                                            <p className="text-xs text-muted-foreground">Donations are welcomed to support shrine maintenance and community programs</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">📸</span>
                                        <div>
                                            <p className="font-semibold">Photography Guidelines</p>
                                            <p className="text-xs text-muted-foreground">Ask permission before photographing religious ceremonies or inside the shrine</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <span className="text-lg">🏨</span>
                                        <div>
                                            <p className="font-semibold">Stay in Nearby Towns</p>
                                            <p className="text-xs text-muted-foreground">Negombo or Puttalam offer better accommodation options than the shrine area</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">💧</span>
                                        <div>
                                            <p className="font-semibold">Bring Water & Sunscreen</p>
                                            <p className="text-xs text-muted-foreground">The island has limited facilities. Protect yourself from sun exposure during boat tours</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-lg">🌧️</span>
                                        <div>
                                            <p className="font-semibold">Best Season</p>
                                            <p className="text-xs text-muted-foreground">December to March offers the most pleasant weather and accessible conditions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Religious Significance Card */}
                <section className="mb-12">
                    <Card className="border-red-200 dark:border-gray-700">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Heart className="w-5 h-5 text-red-500" />
                                Spiritual & Religious Significance
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <p>
                                The Shrine of Our Lady of Madu holds profound spiritual significance for Catholic communities across Sri Lanka and Asia. Dedicated to Mary, the mother of Jesus, the shrine embodies centuries of Catholic tradition, faith, and devotion that has been passed down through generations.
                            </p>
                            <p>
                                The annual feast celebration is more than a religious observance; it represents community identity, cultural continuity, and the enduring power of faith. Pilgrims come not only seeking spiritual blessing but also to connect with a living tradition that links them to centuries of believers who have gathered at this sacred site.
                            </p>
                            <p>
                                The peaceful setting on Madu Island, surrounded by the serene Madu Ganga, creates an ideal environment for prayer, reflection, and spiritual renewal. Many visitors report profound personal experiences and a sense of inner peace when visiting the shrine, making it a destination that appeals to both the religiously devoted and those seeking spiritual solitude.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="mb-8 p-6 bg-gradient-to-r from-blue-100 to-amber-100 dark:from-slate-700 dark:to-slate-800 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">Plan Your Pilgrimage to Madhu Shrine</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Experience the miraculous sanctuary that has inspired faith and devotion for over 400 years
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/tours">
                            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6">
                                Explore Tours Including Shrine
                            </Button>
                        </Link>
                        <Link href="/contact-us">
                            <Button variant="outline" className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6">
                                Contact Us for Custom Itinerary
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}