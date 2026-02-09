"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Waves, Sun, Palmtree, Fish, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ImageCarousel } from "@/components/ui/image-carousel"
import InsuranceBanner from "@/components/insurance-banner"
import { BeachSafetyModal } from "@/components/beach-safety-modal"

export default function BentotaGuide() {
    // Beach Safety Modal State
    const [showSafetyModal, setShowSafetyModal] = useState(false)


    // Show modal after page loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSafetyModal(true)
        }, 1500) // Show after 1.5 seconds

        return () => clearTimeout(timer)
    }, [])

    const handleCloseModal = () => {
        setShowSafetyModal(false)
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Beach Safety Modal */}
            <BeachSafetyModal
                isOpen={showSafetyModal}
                onClose={handleCloseModal}
                beachName="Bentota Beach"
            />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Bentota-beach.jpeg"
                    alt="Pristine Bentota beach with golden sand, turquoise waters, palm trees and luxury resorts along the coastline"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Bentota</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Golden Coast Paradise</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Southern Province,South Coast
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
                            <Waves className="w-4 h-4 mr-1" />
                            Premium Beach Resort
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
                            <Sun className="w-4 h-4 mr-1" />
                            Year-Round Sunshine
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
                    <a href="#beach-safety" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Beach Safety</a>
                    <a href="#top-attractions" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">Top Attractions</a>
                    <a href="#nearby" className="px-3 py-1 rounded-full font-medium text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition">What Else Nearby</a>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12 scroll-mt-40" id="introduction">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Welcome to Bentota: Where Golden Sands Meet Luxury
                    </h2>
                    <div className="grid md:grid-cols-[1fr_140px] gap-6 items-start">
                        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                            <p className="text-lg mb-4">
                                Bentota is Sri Lanka&apos;s premier beach destination, where pristine golden beaches meet world-class
                                luxury resorts. Located on the southwest coast at the beginning of the Southern Province, this tropical paradise
                                sits at the border between the Southern and Western provinces. It offers the perfect blend of
                                relaxation, adventure, and natural beauty, making it a favorite among honeymooners, families, and water
                                sports enthusiasts.
                            </p>
                            <p className="text-lg">
                                Bentota is an ideal place to enjoy the beach and river. From thrilling water sports on the Bentota River to peaceful turtle watching at nearby hatcheries, from
                                luxurious spa treatments to fresh seafood dining, Bentota provides the ultimate tropical beach experience
                                with Sri Lankan warmth and hospitality.
                            </p>
                        </div>

                        {/* Small Sri Lanka Map with Bentota Location */}
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="relative w-[200px] md:w-[180px] lg:w-[200px] bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 border border-blue-200 dark:border-blue-800">
                                <Image src="/bentota_blink_precise.gif" alt="Map of Sri Lanka showing Bentota location on the southwest coast" width={200} height={200} className="rounded-lg w-full h-auto" />

                                <div className="text-center mt-1">
                                    <div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-bold text-[10px]">
                                        <MapPin className="w-3 h-3" />
                                        <span>You are here</span>
                                    </div>
                                    <p className="text-[9px] text-muted-foreground">SW Coast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <div className="my-8 p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/60 border-l-4 border-yellow-400 dark:border-yellow-500">
                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Did you know?</h4>
                            <p className="text-gray-800 dark:text-yellow-100">
                                There is an interesting fact about Bentota that many people don&apos;t know. The name &quot;Bentota&quot; is derived from the Sinhalese words &quot;Benthota,&quot; which means &quot;river of the benth,&quot; referring to the Bentota River that flows through the area. This river is not only a natural beauty but also a vital part of the local ecosystem, supporting diverse wildlife and providing opportunities for water sports and boat rides.
                                There is another interesting story: There was a  mythical demon named called &quot;Ben&quot; who once inhabited this area, and the name is believed to have evolved from this ancient legend.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Quick Facts & How to Get There side by side */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    {/* Bentota Essential Facts (left) */}
                    <section className="flex-1 scroll-mt-40" id="quick-facts">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Bentota Quick Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-blue-500" />
                                            <span>
                                                <strong>Location:</strong> 65km south of Colombo
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Waves className="w-4 h-4 text-cyan-500" />
                                            <span>
                                                <strong>Beach length:</strong> 5km of golden sand
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Sun className="w-4 h-4 text-yellow-500" />
                                            <span>
                                                <strong>Climate:</strong> Tropical, 26-32°C
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Fish className="w-4 h-4 text-green-500" />
                                            <span>
                                                <strong>Famous for:</strong> Water sports & turtle hatchery
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Palmtree className="w-4 h-4 text-green-600" />
                                            <span>
                                                <strong>Best for:</strong> Beach relaxation & luxury
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-orange-500" />
                                            <span>
                                                <strong>Best time:</strong> December–April (peak season)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <InsuranceBanner />
                    </section>
                    {/* How to Get to Bentota (right, condensed) */}
                    <section className="flex-1 scroll-mt-40" id="how-to-get">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    How to Get to Bentota
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Private Transfer (Recommended)</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• 1.5-2 hours (90km) via Expressway</li>
                                        <li>• $40-60 USD</li>
                                        <li>• Most comfortable & direct</li>
                                    </ul>

                                    {/* Full Width Ceylanka Tours Recommendation */}
                                    <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 shadow-md">
                                        <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                                            <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Bentota. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                                        </p>
                                        <div className="flex flex-col gap-1.5 text-xs text-orange-800 dark:text-orange-200">
                                            <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded">
                                                <span>📞</span>
                                                <span><strong>Call:</strong></span>
                                                <a href="tel:+94707646765" className="underline hover:text-orange-700 dark:hover:text-orange-300">
                                                    <span className="hidden sm:inline">+94 70 764 6765</span>
                                                    <span className="sm:hidden">+944707646765</span>
                                                </a>
                                                <span>|</span>
                                                <a href="https://wa.me/94707646765" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                    </svg>
                                                    WhatsApp
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                                                <span>🗓️</span>
                                                <Link href="/tours/bentota" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                                                    <strong>One Day Tour</strong> - Click for details & booking
                                                </Link>
                                            </div>
                                            <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                                                <span>🏖️</span>
                                                <Link href="/tours" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                                                    <strong>Tours that include Bentota</strong> - Click for details & booking
                                                </Link>
                                            </div>
                                            <div className="flex items-center gap-2 py-1.5 px-2 bg-white/50 dark:bg-slate-600/50 rounded hover:bg-white/70 dark:hover:bg-slate-600/70 transition-colors">
                                                <span>✈️</span>
                                                <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                                                    <strong>Airport Transfer Services</strong> - Click for details & booking
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Train (Scenic)</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• 2-2.5 hours, $2-5 USD</li>
                                        <li>• Ocean views, departs Colombo Fort</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-foreground">Bus</h4>
                                    <ul className="text-sm text-muted-foreground space-y-0.5">
                                        <li>• 2-3 hours, $1-3 USD</li>
                                        <li>• Frequent from Colombo Central</li>
                                    </ul>
                                </div>
                                <div className="mt-3 p-2 bg-orange-100 dark:bg-slate-700 rounded border-l-4 border-orange-500 dark:border-orange-400">
                                    <p className="text-xs text-orange-800 dark:text-orange-200">
                                        <strong>🌟 Tip:</strong> Book transfers in advance for best rates. Avoid rush hours (7-9 AM, 5-7 PM).
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Beach Safety Section */}
                <section className="mb-12 scroll-mt-40" id="beach-safety">
                    <Card className="border-orange-200 dark:border-gray-700 bg-orange-50 dark:bg-slate-800">
                        <CardHeader>
                            <CardTitle className="text-orange-800 dark:text-orange-300 flex items-center gap-2">
                                <Waves className="w-5 h-5" />
                                Beach Safety at Bentota
                            </CardTitle>
                            <CardDescription className="text-orange-700 dark:text-orange-300">
                                Important safety information for enjoying Bentota&apos;s waters safely
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-gray-700 dark:text-gray-300">
                                    While Bentota is known for its calm waters and safe swimming conditions, it&apos;s important to understand
                                    ocean safety, especially during monsoon seasons when conditions can change dramatically.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">Current Conditions at Bentota:</h4>
                                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                            <li>• Generally calm waters protected by coral reef</li>
                                            <li>• Safe swimming most of the year</li>
                                            <li>• Lifeguards present at major resort beaches</li>
                                            <li>• Can have strong currents during monsoon (May-September)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">Watch Out For:</h4>
                                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                            <li>• Rip currents near river mouth</li>
                                            <li>• Stronger waves during southwest monsoon</li>
                                            <li>• Jet ski and boat traffic in water sports areas</li>
                                            <li>• Changing conditions with tides</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-blue-100 dark:bg-slate-700 rounded-lg border border-blue-200 dark:border-gray-600">
                                    <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                                        <Star className="w-4 h-4" />
                                        Complete Beach Safety Guide
                                    </h4>
                                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                                        Learn about rip currents, cross seas, monsoon safety, and emergency procedures
                                        to stay safe at all Sri Lankan beaches.
                                    </p>
                                    <Link href="/articles/things-to-beware-of-at-the-beach">
                                        <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white cursor-pointer">
                                            <Waves className="w-4 h-4 mr-2" />
                                            Read Complete Beach Safety Guide
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Quick Facts */}
                {/* <section className="mb-12 scroll-mt-40" id="quick-facts">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                Bentota Essential Facts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Location:</strong> 65km south of Colombo
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Waves className="w-4 h-4 text-cyan-500" />
                                        <span>
                                            <strong>Beach length:</strong> 5km of golden sand
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sun className="w-4 h-4 text-yellow-500" />
                                        <span>
                                            <strong>Climate:</strong> Tropical, 26-32°C
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Fish className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Famous for:</strong> Water sports & turtle hatchery
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Palmtree className="w-4 h-4 text-green-600" />
                                        <span>
                                            <strong>Best for:</strong> Beach relaxation & luxury
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Best season:</strong> November to April
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section> */}

                {/* Top Attractions */}
                <section className="mb-12 scroll-mt-40" id="top-attractions">
                    <h2 className="text-3xl font-bold mb-6">Top Attractions in Bentota</h2>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. Bentota Beach</CardTitle>
                                <CardDescription>5km of pristine golden sand and crystal-clear waters</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Bentota-beach.jpeg",
                                                alt: "Scenic view of Bentota Beach with golden sand, turquoise waters and palm trees",
                                                caption: "Bentota Beach View",
                                                title: "Bentota Beach"
                                            },
                                            {
                                                src: "/Bentotabeach.jpeg",
                                                alt: "Bentota Beach with golden sand and clear waters",
                                                caption: "Bentota Beach",
                                                title: "Bentota Beach"
                                            },

                                        ]}
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Visiting Bentota without experiencing its main beach?? You will definitely regret it! Bentota&apos;s main beach stretches for 5 kilometers of soft golden sand, protected by a coral
                                            reef that keeps the waters calm and perfect for swimming. The beach is lined with luxury resorts
                                            and offers excellent facilities for visitors.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Safe swimming with lifeguards
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Beach chairs and umbrellas available
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Multiple beach bars and restaurants
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>2. Bentota River & Baot Safari</CardTitle>
                                <CardDescription>Adventure hub for jet skiing, boat rides, and water sports</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Bentota River offers calm waters perfect for various water sports activities. From thrilling
                                            jet ski rides to peaceful boat safaris through mangrove forests, the river provides adventures for
                                            all ages and skill levels.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Jet skiing and water skiing
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Mangrove boat safaris
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Windsurfing and banana boat rides
                                            </li>
                                        </ul>
                                        During the boat safari, you might spot monitor lizards, kingfishers, and even crocodiles in their natural habitat. Your boat will go close to the estuary of Bentota river, where the Bentota river meets the indian ocean, providing stunning views of both landscapes.
                                    </div>
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Bentota-River.jpg",
                                                alt: "Scenic view of Bentota River with golden sand, turquoise waters and palm trees",
                                                caption: "Bentota River View",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River1.jpg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River2.jpg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River3.jpg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River4.jpeg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River5.jpeg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River6.jpeg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River7.jpeg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },
                                            {
                                                src: "/Bentota-River8.jpeg",
                                                alt: "Bentota River with golden sand and clear waters",
                                                caption: "Bentota River",
                                                title: "Bentota River"
                                            },




                                        ]}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>3. Lunuganga Geoffrey Bawa Garden</CardTitle>
                                <CardDescription>
                                    Masterpiece of landscape architecture by Sri Lanka&apos;s renowned architect
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Lunuganga is the country home and garden of Geoffrey Bawa, Sri Lanka&apos;s most famous architect. This
                                            stunning landscape garden showcases Bawa&apos;s vision of tropical modernism and offers breathtaking
                                            views of the Bentota lagoon.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Guided tours of the garden and house
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Stunning lagoon and countryside views
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Architecture and design inspiration
                                            </li>
                                        </ul>
                                        <p className="mt-4">For more details about this architectural masterpiece:</p>
                                        <Link href="/destinations/lunuganga-garden-by-geoffrey-bawa" className="text-blue-600 hover:underline">
                                            Read more about Lunuganga Garden
                                        </Link>
                                        <div className="bg-amber-50 p-3 rounded-lg">
                                            <p className="text-sm text-amber-800">
                                                <strong>Did You Know?</strong><br></br> Renowned architect Geoffrey Bawa is the architect who designed the Sri Lanka parliament building, Bentota railway station, University of Ruhuna, Heritance Kandalama, and many other iconic buildings in Sri Lanka. In fact Bevis baws was the Geoffrey Bawa&apos;s brother.
                                            </p>
                                        </div>

                                    </div>
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Lunugangabawa.jpeg",
                                                alt: "The first cave of Dambulla showing the reclining Buddha statue",
                                                caption: "",
                                                title: ""
                                            },
                                            {
                                                src: "/Lunugangabawa2.jpeg",
                                                alt: "Ancient cave paintings in the first cave showing intricate Buddhist artwork",
                                                caption: "Lunuganga Garden",
                                                title: "Cave 1 Murals"
                                            },
                                            {
                                                src: "/Lunugangabawa3.jpeg",
                                                alt: "Detailed view of Buddha statue in Cave 1",
                                                caption: "Buddha Statue Detail",
                                                title: "Cave 1 Buddha Statue"
                                            },
                                            {
                                                src: "/Lunugangabawa4.jpeg",
                                                alt: "Detailed view of Buddha statue in Cave 1",
                                                caption: "Buddha Statue Detail",
                                                title: "Cave 1 Buddha Statue"
                                            },
                                            {
                                                src: "/Lunugangabawa5.jpeg",
                                                alt: "Detailed view of Buddha statue in Cave 1",
                                                caption: "Buddha Statue Detail",
                                                title: "Cave 1 Buddha Statue"
                                            }
                                        ]}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* <Card>
                            <CardHeader>
                                <CardTitle>4. Bentota River Safari</CardTitle>
                                <CardDescription>Explore the mangroves and wildlife along the Bentota River</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Bentota River safari through mangroves with wildlife and traditional fishing boats"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Take a peaceful boat safari along the Bentota River through lush mangrove forests. Spot various
                                            bird species, monitor lizards, and experience the traditional fishing village life along the
                                            riverbanks.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Bird watching opportunities
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Mangrove ecosystem exploration
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Traditional fishing village visits
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card> */}

                        <Card>
                            <CardHeader>
                                <CardTitle>4. Five Raja Maha Temples in Bentota</CardTitle>
                                <CardDescription>Visit ancient temples with great historical significance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-6">
                                    <p className="text-muted-foreground mb-4">
                                        When you visit Bentota, you can explore five ancient royal temples (Rajamaha Viharas) with rich history and centuries of Buddhist
                                        heritage and architecture. These raja maha viharas are interconnected by ancient underground tunnels.
                                    </p>

                                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg mb-6">
                                        <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Historical Significance</h4>
                                        <p className="text-sm text-amber-700 dark:text-amber-300">
                                            In ancient times, these five rajamaha viharas were interconnected by underground tunnels.
                                            These tunnels were used by Buddhist monks for safe passage between temples. If you visit
                                            Wanawasa Rajamaha Viharaya, you can still see part of that tunnel, and there is also the
                                            beginning of the tunnel at Galapatha Viharaya.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Wanawasa Rajamaha Viharaya */}
                                    <div className="flex flex-col lg:flex-row p-6 border rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow gap-6">
                                        <div className="lg:w-1/3">
                                            <Image
                                                src="/Wanawasa-Rajamaha-Viharaya.jpg"
                                                alt="Wanawasa temple exterior with its historic entrance"
                                                width={400}
                                                height={300}
                                                className="rounded-lg object-cover w-full h-full"
                                            />
                                        </div>

                                        <div className="lg:w-2/3 space-y-4">
                                            <h4 className="text-2xl font-bold text-primary">Wanawasa Rajamaha Viharaya</h4>

                                            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                                                <p className="text-amber-800 dark:text-amber-200">
                                                    One of the most significant ancient temples in Bentota, dating back to the 12th century
                                                    during the reign of King Parakramabahu the Great. This royal temple is particularly famous
                                                    for housing one of the best-preserved entrances to the ancient tunnel network.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Key Features</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Ancient tunnel entrance
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            12th-century stone inscriptions
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Traditional image house
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Archaeological museum
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Historical Elements</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Polonnaruwa era architecture
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Ancient Buddhist artifacts
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Royal stone inscriptions
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/destinations/wanawasa-rajamaha-viharaya" passHref legacyBehavior>
                                                <Button
                                                    className="w-full mt-4 cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                                                >
                                                    <ChevronRight className="w-5 h-5 mr-2" />
                                                    Explore Full History & Details
                                                </Button>
                                            </Link>

                                        </div>
                                    </div>

                                    {/* Galapatha Raja Maha Viharaya */}
                                    <div className="flex flex-col lg:flex-row p-6 border rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow gap-6 mt-6">
                                        <div className="lg:w-1/3">
                                            <Image
                                                src="/Galapatha-Rajamaha-Viaharaya1.jpg"
                                                alt="Galapatha temple main entrance view showing historic architecture"
                                                width={400}
                                                height={300}
                                                className="rounded-lg object-cover w-full h-full"
                                            />
                                        </div>

                                        <div className="lg:w-2/3 space-y-4">
                                            <h4 className="text-2xl font-bold text-primary">Galapatha Raja Maha Viharaya</h4>

                                            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                                                <p className="text-amber-800 dark:text-amber-200">
                                                    A historic Buddhist temple with great history and rich cultural significance. The temple is renowned for sel lipiya and &quot;Sri Anubudda mahakashyapa&quot; perahara (procession) held annually, attracting devotees from across the region.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Temple Features</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Ancient stone inscriptions
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Ancient tunnel system
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Historic moonstone entrance
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Relic of Sariyuth thera
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Cultural Significance</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Annual procession festival
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Ancient tunnel remnants
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Historical guard stones
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/destinations/galapatha-rajamaha-viharaya" passHref legacyBehavior>
                                                <Button
                                                    className="w-full mt-4 cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                                                >
                                                    <ChevronRight className="w-5 h-5 mr-2" />
                                                    Explore Full History & Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Bentota Udakotuwa Maha Viharaya */}
                                    <div className="flex flex-col lg:flex-row p-6 border rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow gap-6 mt-6">
                                        <div className="lg:w-1/3">
                                            <Image
                                                src="/Udakotuwa-Rajamaha-Viharaya-Statue.jpeg"
                                                alt="Udakotuwa temple complex showing main shrine and stupa"
                                                width={400}
                                                height={300}
                                                className="rounded-lg object-cover w-full h-full"
                                            />
                                        </div>

                                        <div className="lg:w-2/3 space-y-4">
                                            <h4 className="text-2xl font-bold text-primary">Udakotuwa Bodhi Sameepa Rajamaha Viharaya</h4>

                                            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                                                <p className="text-amber-800 dark:text-amber-200">
                                                    A central temple in the Bentota temple network, known for its serene atmosphere
                                                    and traditional Buddhist architecture. The temple serves as a vital spiritual hub,
                                                    hosting important religious ceremonies throughout the year.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Sacred Features</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Traditional image house
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Ancient Buddhist stupa
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Meditation halls
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Cultural Activities</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Regular ceremonies
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Buddhist education
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Community gatherings
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/destinations/udakotuwa-rajamaha-viharaya" passHref legacyBehavior>
                                                <Button
                                                    className="w-full mt-4 cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                                                >
                                                    <ChevronRight className="w-5 h-5 mr-2" />
                                                    Explore Full History & Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Gane Pansala Viharaya */}
                                    <div className="flex flex-col lg:flex-row p-6 border rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow gap-6 mt-6">
                                        <div className="lg:w-1/3">
                                            <Image
                                                src="/Gane-Pansala.jpeg"
                                                alt="Gane Pansala temple meditation caves and historic structures"
                                                width={400}
                                                height={300}
                                                className="rounded-lg object-cover w-full h-full"
                                            />
                                        </div>

                                        <div className="lg:w-2/3 space-y-4">
                                            <h4 className="text-2xl font-bold text-primary">Bemvehera Gane Rajamaha Viharaya</h4>

                                            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                                                <p className="text-amber-800 dark:text-amber-200">
                                                    A historic meditation center renowned for its ancient cave complexes and simple,
                                                    yet profound architecture. This temple has served as a spiritual retreat for
                                                    Buddhist monks for centuries, maintaining its peaceful atmosphere to this day.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Meditation Spaces</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Ancient meditation caves
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Quiet reflection areas
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Scenic natural setting
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Spiritual Activities</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Guided meditation
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Dhamma discussions
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Monastic retreats
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/destinations/ganepansala-rajamaha-viharaya" passHref legacyBehavior>
                                                <Button
                                                    className="w-full mt-4 cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                                                >
                                                    <ChevronRight className="w-5 h-5 mr-2" />
                                                    Explore Full History & Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Bodhimaluwa Raja Maha Viharaya */}
                                    <div className="flex flex-col lg:flex-row p-6 border rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow gap-6 mt-6">
                                        <div className="lg:w-1/3">
                                            <Image
                                                src="/bodhimaluwa1.jpg"
                                                alt="Bodhimaluwa temple showcasing traditional Buddhist architecture and artwork"
                                                width={400}
                                                height={300}
                                                className="rounded-lg object-cover w-full h-full"
                                            />
                                        </div>

                                        <div className="lg:w-2/3 space-y-4">
                                            <h4 className="text-2xl font-bold text-primary">Bodhimaluwa Raja Maha Viharaya</h4>

                                            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                                                <p className="text-amber-800 dark:text-amber-200">
                                                    A cherished local temple that holds a special place in the community&apos;s heart.
                                                    Known for its exquisite traditional Buddhist artwork and as a center for
                                                    important annual ceremonies that bring together devotees from across the region.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Artistic Heritage</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Traditional murals
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Buddhist sculptures
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Decorative craftsmanship
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-primary">Annual Events</h5>
                                                    <ul className="space-y-1 text-muted-foreground">
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Vesak celebrations
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Poya day ceremonies
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                            Cultural festivals
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/destinations/bodhimaluwa-rajamaha-viharaya" passHref legacyBehavior>
                                                <Button
                                                    className="w-full mt-4 cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                                                >
                                                    <ChevronRight className="w-5 h-5 mr-2" />
                                                    Explore Full History & Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>5. Panchakapaduwa Island</CardTitle>
                                <CardDescription>A mystical island separated from the mainland with ancient history</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Panchakpaduwaisland.jpeg",
                                                alt: "Bentota Beach with golden sand and clear waters",
                                                caption: "Panchakapaduwa Island",
                                            },
                                            {
                                                src: "/Panchakpaduwaisland1.jpeg",
                                                alt: "Panchakapaduwa Island",
                                                caption: "",

                                            },
                                            {
                                                src: "/Panchakpaduwaisland2.jpeg",
                                                alt: "Panchakapaduwa Island",
                                            },
                                            {
                                                src: "/Panchakpaduwaisland3.jpeg",
                                                alt: "Panchakapaduwa Island",

                                            }
                                            , {
                                                src: "/Panchakpaduwaisland4.jpeg",
                                                alt: "Panchakapaduwa Island",
                                                caption: "",

                                            }
                                            , {
                                                src: "/Panchakpaduwaisland5.jpeg",
                                                alt: "Panchakapaduwa Island",
                                                caption: "",

                                            }
                                            , {
                                                src: "/Panchakpaduwaisland6.jpeg",
                                                alt: "Detailed view of Buddha statue in Cave 1",
                                                caption: "",

                                            }
                                            , {
                                                src: "/Panchakpaduwaisland7.jpeg",
                                                alt: "Detailed view of Buddha statue in Cave 1",
                                                caption: "",

                                            },
                                            {
                                                src: "/Panchakpaduwaisland8.jpeg",
                                                alt: "Detailed view of Buddha statue in Cave 1",
                                                caption: "",

                                            },
                                            {
                                                src: "/Panchakpaduwaisland9.jpeg",
                                                alt: "Detailed view of Buddha statue in Cave 1",
                                                caption: "",

                                            }
                                        ]}
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Panchakapaduwa Island is a mystical place that was separated from the mainland centuries ago. This
                                            sacred island features ancient temples, meditation retreats, and offers a peaceful escape from the
                                            bustling beach life. The island is accessible by boat and provides stunning sunset views.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Meditation sessions and spiritual retreats
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Ancient temple ruins and artifacts
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Spectacular sunset and sunrise views
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>6. Bentota Railway Station</CardTitle>
                                <CardDescription>Another architectural gem by Bawa</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Bentota-Railway-Station.jpg",
                                                alt: "Scenic view of Bentota Railway Station with lush greenery",
                                                caption: "Bentota Railway Station",
                                                title: "Bentota Railway Station"
                                            },
                                            {
                                                src: "/Bentota-Railway-Station3.jpg",
                                                alt: "Scenic view of Bentota Railway Station with lush greenery",
                                                caption: "Bentota Railway Station",
                                                title: "Bentota Railway Station"
                                            },
                                            {
                                                src: "/Bentota-Railway-Station4.jpg",
                                                alt: "Scenic view of Bentota Railway Station with lush greenery",
                                                caption: "Bentota Railway Station",
                                                title: "Bentota Railway Station"
                                            },
                                            {
                                                src: "/Bentota-Railway-Station1.jpg",
                                                alt: "Scenic view of Bentota Railway Station with lush greenery",
                                                caption: "Bentota Railway Station",
                                                title: "Bentota Railway Station"
                                            },
                                            {
                                                src: "/Bentota-Railway-Station5.jpg",
                                                alt: "Scenic view of Bentota Railway Station with lush greenery",
                                                caption: "Bentota Railway Station",
                                                title: "Bentota Railway Station"
                                            },


                                        ]}
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            A very small and quite railway station located opposite to the Bentota beach, the Bentota Railway Station is another architectural gem by renowned architect Geoffrey Bawa. The station features a unique design with windows resembling those of airplanes.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Designed by Geoffrey Bawa
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Nice view of Bentota beach from the station
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        {/* <Card>
                            <CardHeader>
                                <CardTitle>7. Old Bentota Bridge</CardTitle>
                                <CardDescription>A bridge with more than 100 years of history</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/Bentota-Bridge.jpg"
                                        alt="Bentota River safari through mangroves with wildlife and traditional fishing boats"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            You can take a few photos of the Old Bentota Bridge, which was built by the British in 1902. This is abandoned
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Built by the British in 1902
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Abandoned and in ruins
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Popular photography spot
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card> */}

                        <Card>
                            <CardHeader>
                                <CardTitle>7. Sea Turtle Hatchery</CardTitle>
                                <CardDescription>Conservation center protecting endangered sea turtles</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/Sea-turtle-bentota.jpeg",
                                                alt: "Bentota Beach with golden sand and clear waters",
                                                caption: "Bentota Beach",
                                                title: "Bentota Beach"
                                            },
                                            {
                                                src: "/Sea-turtle-bentota.jpeg",
                                                alt: "Bentota Beach with golden sand and clear waters",
                                                caption: "Bentota Beach",
                                                title: "Bentota Beach"
                                            },

                                        ]}
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            You can see Sea turtle Hatchery in Bentota, which is a conservation project dedicated to protecting
                                            endangered sea turtles. Visitors can learn about the life cycle of these magnificent creatures,
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Educational tours available
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Baby turtle release experiences
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Support conservation efforts
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                    </div>

                    {/* Para Motoring Adventure */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-lg">
                        <p className="text-center text-lg font-medium text-sky-800 dark:text-sky-200 mb-2">
                            Wanna see Bentota in bird&apos;s eye?
                        </p>
                        <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">🪂 Para Motoring - Soar Above Bentota Beach</h3>

                        <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
                            <div>
                                <ImageCarousel
                                    images={[
                                        {
                                            src: "/Para-Motoring1.jpeg",
                                            alt: "Para Motoring over Bentota Beach with stunning coastal views",
                                            caption: "Para Motoring over Bentota Beach",
                                            title: "Para Motoring"
                                        },
                                        {
                                            src: "/Para-Motoring.jpg",
                                            alt: "Para Motoring over Bentota Beach with stunning coastal views",
                                            caption: "Para Motoring over Bentota Beach",
                                            title: "Para Motoring"
                                        },
                                    ]}
                                />
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic text-center">
                                    Wanna see Bentota in bird&apos;s eye? - Experience breathtaking aerial views
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Experience the ultimate aerial adventure with para motoring over Bentota&apos;s stunning coastline! This thrilling activity combines
                                    the excitement of paragliding with the power of a motorized engine, giving you breathtaking bird&apos;s-eye views of the golden beaches,
                                    azure waters, and lush green landscape. Professional instructors ensure your safety while you enjoy 15-20 minutes of pure adrenaline
                                    and unforgettable views that stretch from the Indian Ocean to the tropical inland scenery.
                                </p>
                                <div className="bg-blue-100 dark:bg-slate-600 p-3 rounded-lg border border-blue-200 dark:border-gray-500">
                                    <p className="text-sm text-blue-800 dark:text-blue-200">
                                        <strong>Duration:</strong> 15-20 minutes | <strong>Cost:</strong> $80-120 USD | <strong>Best Time:</strong> Morning or late afternoon
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                                <span className="text-2xl mb-2 block">🌊</span>
                                <p className="text-sm font-medium">Coastal Views</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                                <span className="text-2xl mb-2 block">⚡</span>
                                <p className="text-sm font-medium">Adrenaline Rush</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                                <span className="text-2xl mb-2 block">📸</span>
                                <p className="text-sm font-medium">Aerial Photography</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Luxury Resorts */}
                {/* <section className="mb-12 scroll-mt-40" id="luxury-resorts">
                    <h2 className="text-3xl font-bold mb-6">Luxury Beach Resorts</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Ultra-Luxury Resorts</CardTitle>
                                <CardDescription>$200+ per night</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-1">Taj Bentota Resort & Spa</h4>
                                    <p className="text-sm text-muted-foreground">Beachfront luxury with world-class spa and dining.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Centara Ceysands Resort</h4>
                                    <p className="text-sm text-muted-foreground">All-inclusive beachfront resort with multiple pools.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Vivanta Bentota</h4>
                                    <p className="text-sm text-muted-foreground">Contemporary luxury with stunning ocean views.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Saman Villas</h4>
                                    <p className="text-sm text-muted-foreground">Boutique luxury perched on rocky outcrop.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Mid-Range Options</CardTitle>
                                <CardDescription>$50-150 per night</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-1">Bentota Beach by Cinnamon</h4>
                                    <p className="text-sm text-muted-foreground">Comfortable beachfront hotel with good facilities.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Club Villa</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Boutique hotel with colonial charm and modern amenities.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Pandanus Beach Resort</h4>
                                    <p className="text-sm text-muted-foreground">Family-friendly resort with pool and beach access.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Susantha Spice Garden</h4>
                                    <p className="text-sm text-muted-foreground">Unique eco-lodge surrounded by spice gardens.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section> */}

                {/* Water Sports & Activities */}
                <section className="mb-12 scroll-mt-40" id="water-sports">
                    <h2 className="text-3xl font-bold mb-6">Water Sports & Activities</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">River Adventures</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Jet skiing ($25-35/30min)</li>
                                    <li>• Water skiing ($30-40/session)</li>
                                    <li>• Banana boat rides ($15-20/person)</li>
                                    <li>• Mangrove boat safari ($20-30/person)</li>
                                    <li>• River fishing trips ($40-60/half day)</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Ocean Activities</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Surfing lessons ($20-30/hour)</li>
                                    <li>• Snorkeling trips ($25-35/person)</li>
                                    <li>• Deep sea fishing ($80-120/boat)</li>
                                    <li>• Whale watching (seasonal)</li>
                                    <li>• Catamaran sailing ($40-60/person)</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Land Activities</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Spa treatments at resorts</li>
                                    <li>• Ayurvedic massages</li>
                                    <li>• Bicycle tours</li>
                                    <li>• Spice garden visits</li>
                                    <li>• Cultural temple tours</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Dining Options */}
                <section className="mb-12 scroll-mt-40" id="dining">
                    <h2 className="text-3xl font-bold mb-6">Best Restaurants &amp; Dining</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Fine Dining</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-1">The Palms (Taj Bentota)</h4>
                                    <p className="text-sm text-muted-foreground">Upscale beachfront dining with international cuisine.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Saman Villas Restaurant</h4>
                                    <p className="text-sm text-muted-foreground">Romantic clifftop dining with ocean views.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Diya Sisila Restaurant</h4>
                                    <p className="text-sm text-muted-foreground">Authentic Sri Lankan cuisine in elegant setting.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Casual Dining & Local Food</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-1">Golden Grill</h4>
                                    <p className="text-sm text-muted-foreground">Fresh seafood and grilled specialties.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">The Lagoons, Bentota</h4>
                                    <p className="text-sm text-muted-foreground">Local fishing village with authentic seafood.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Paradise Road Café</h4>
                                    <p className="text-sm text-muted-foreground">Trendy café with light meals and great coffee.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Best Time to Visit */}
                <section className="mb-12 scroll-mt-40" id="best-time">
                    <h2 className="text-3xl font-bold mb-6">Best Time to Visit Bentota</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-green-200 bg-green-50/50">
                            <CardHeader>
                                <CardTitle className="text-green-700">Peak Season</CardTitle>
                                <CardDescription>December - March</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-green-700">
                                    <li>• Dry weather, minimal rain</li>
                                    <li>• Perfect beach conditions</li>
                                    <li>• Calm seas for water sports</li>
                                    <li>• Higher prices, more crowds</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-yellow-200 bg-yellow-50/50">
                            <CardHeader>
                                <CardTitle className="text-yellow-700">Good Season</CardTitle>
                                <CardDescription>April - June, October - November</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-yellow-700">
                                    <li>• Occasional afternoon showers</li>
                                    <li>• Good beach weather</li>
                                    <li>• Better hotel rates</li>
                                    <li>• Fewer tourists</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-blue-200 bg-blue-50/50">
                            <CardHeader>
                                <CardTitle className="text-blue-700">Monsoon Season</CardTitle>
                                <CardDescription>July - September</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-blue-700">
                                    <li>• Heavy rainfall</li>
                                    <li>• Rough seas</li>
                                    <li>• Limited water sports</li>
                                    <li>• Lowest prices</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="mb-12 scroll-mt-40" id="nearby">
                    <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
                    <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                        Extend your Bentota adventure with these incredible destinations within easy reach
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Lunugangabawa2.jpeg"
                                    alt="Lunuganga Geoffrey Bawa Garden with lush greenery and artistic landscape design"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                    30 mins from Bentota
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Lunuganga Garden by Geoffrey Bawa</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    A masterpiece of landscape architecture offering breathtaking views of hills and the Indian Ocean with stunning artistic design.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    30 km from Bentota
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/lunuganga-garden-by-geoffrey-bawa" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Kandeviharaya.jpeg"
                                    alt="Kande Viharaya Buddhist temple with ancient architecture and towering Buddha statue"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                    8 mins from Bentota
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Kandeviharaya Temple</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Historic Buddhist temple famous for its towering 160-foot seated Buddha statue, ancient Bodhi tree, and colorful murals.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    8 km from Bentota
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/kandeviharaya" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Brief-Garden-by-Bawa.jpg"
                                    alt="Brief Garden by Bevis Bawa Kalawila with tropical plants and landscape design"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                    20 mins from Bentota
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Brief Garden by Bevis Bawa</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Beautiful tropical garden showcasing diverse flora and peaceful walking paths, perfect for nature lovers and photographers.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    20 km from Bentota
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/brief-garden-by-bevis-bawa" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Kaluthara-bodiya.jpg"
                                    alt="Kalutara Temple with historic Bodhi tree and dome-shaped stupa"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                    15 mins from Bentota
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Kalutara Temple</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Historic Buddhist temple featuring an ancient Bodhi tree with a large stupa where devotees can enter and worship inside.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    15 km from Bentota
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/kalutara-temple" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative h-48">
                                <Image
                                    src="/Richmond-Castle.jpg"
                                    alt="Richmond Castle with colonial architecture and lush gardens"
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                    25 mins from Bentota
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold text-lg mb-2">Richmond Castle</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Grand colonial mansion blending Indian and British architectural styles with intricate wooden carvings and stained glass windows.
                                </p>
                                <div className="flex items-center text-xs text-blue-600 mb-2">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    25 km from Bentota
                                </div>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/richmond-castle" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                {/* Final Tips */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 dark:from-slate-800 dark:to-slate-700 dark:border-slate-600">
                        <CardHeader>
                            <CardTitle className="text-blue-800 dark:text-blue-200">Your Bentota Beach Paradise</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Bentota offers the perfect blend of relaxation and adventure, luxury and authenticity. Whether
                                you&apos;re seeking thrilling water sports, romantic beachfront dinners, or simply want to unwind on
                                pristine golden sands, this coastal paradise delivers unforgettable experiences.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                Don&apos;t miss the opportunity to support local conservation efforts at the turtle hatchery, explore
                                the mangrove ecosystems of the Bentota River, and indulge in fresh seafood while watching spectacular
                                sunsets over the Indian Ocean.
                            </p>
                            <p className="text-muted-foreground font-medium">
                                Welcome to Bentota where every day feels like a tropical dream! 🏖️🌊
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
