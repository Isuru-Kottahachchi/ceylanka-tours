"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Crown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/ui/image-carousel"



export default function PolonnaruwaGuide() {


    const polonnaruwaImages = [
        { src: "/Polonnaruwa2.jpeg", caption: "Ruins of the Royal Palace of King Parakramabahu I", alt: "Ruins of the Royal Palace of King Parakramabahu I" },
        { src: "/Polonnaruwa3.jpeg", caption: "Ancient brick walls and palace foundations", alt: "Ancient brick walls and palace foundations" },
    ];

    const galviharayaImages = [
        { src: "/Galviharaya.jpeg", caption: "Gal Vihara: Seated Buddha statue carved from granite", alt: "Gal Vihara: Seated Buddha statue carved from granite" },
        { src: "/Galviharaya2.jpeg", caption: "Standing Buddha statue at Gal Vihara", alt: "Standing Buddha statue at Gal Vihara" },
        { src: "/Galviharaya3.jpeg", caption: "Reclining Buddha representing Parinirvana at Gal Vihara", alt: "Reclining Buddha representing Parinirvana at Gal Vihara" },
        { src: "/Galviharaya4.jpeg", caption: "Close-up of Gal Vihara Buddha face details", alt: "Close-up of Gal Vihara Buddha face details" },
        { src: "/Galviharaya5.jpeg", caption: "Worshippers at Gal Vihara rock temple", alt: "Worshippers at Gal Vihara rock temple" },
    ];

    const rankothveheraImages = [
        { src: "/Rankothvehera.jpeg", caption: "Rankoth Vehera: The largest dagoba in Polonnaruwa", alt: "Rankoth Vehera: The largest dagoba in Polonnaruwa" },
        { src: "/Rankothvehera1.jpeg", caption: "Stupa and surrounding ruins at Rankoth Vehera", alt: "Stupa and surrounding ruins at Rankoth Vehera" },
        { src: "/Rankothvehera2.jpeg", caption: "Ancient stairway leading to Rankoth Vehera", alt: "Ancient stairway leading to Rankoth Vehera" },
        { src: "/Rankothvehera3.jpeg", caption: "View of Rankoth Vehera from the base", alt: "View of Rankoth Vehera from the base" },
        { src: "/Rankothvehera4.jpeg", caption: "Devotees at Rankoth Vehera stupa", alt: "Devotees at Rankoth Vehera stupa" },
        // { src: "/Rankothvehera5.jpeg", caption: "Rankoth Vehera: Architectural details of the stupa" },
    ];


    const kumaraPokunaImages = [
        { src: "/KumaraPokuna1.jpg", caption: "Kumara Pokuna: The Royal Bath", alt: "Kumara Pokuna: The Royal Bath" },
        { src: "/KumaraPokuna2.jpg", caption: "Intricate stone carvings at Kumara Pokuna", alt: "Intricate stone carvings at Kumara Pokuna" },
        { src: "/KumaraPokuna3.jpg", caption: "Water channels and lotus ponds at Kumara Pokuna", alt: "Water channels and lotus ponds at Kumara Pokuna" },
        { src: "/KumaraPokuna4.jpg", caption: "Water channels and lotus ponds at Kumara Pokuna", alt: "Water channels and lotus ponds at Kumara Pokuna" },
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Galviharaya.jpeg"
                    alt="Ancient ruins of Polonnaruwa with stone pillars and structures against dramatic sky"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Polonnaruwa</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Medieval Archaeological Marvel</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            North Central Province
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-red-600/80 text-white border-red-500">
                            <Crown className="w-4 h-4 mr-1" />
                            2nd Capital
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            11th-13th Century AD
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Section Navigation */}
            {/* <section className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <nav className="flex items-center gap-4 p-4 max-w-6xl mx-auto overflow-x-auto whitespace-nowrap">
                    <Link href="#quick-facts">
                        <Button variant="ghost" size="sm">Quick Facts</Button>
                    </Link>
                    <Link href="#royal-palace">
                        <Button variant="ghost" size="sm">Royal Palace Complex</Button>
                    </Link>
                    <Link href="#sacred-quadrangle">
                        <Button variant="ghost" size="sm">Sacred Quadrangle</Button>
                    </Link>
                    <Link href="#watadage">
                        <Button variant="ghost" size="sm">Vatadage</Button>
                    </Link>
                    <Link href="#lotus-pond">
                        <Button variant="ghost" size="sm">Lotus Pond</Button>
                    </Link>
                    <Link href="#tips">
                        <Button variant="ghost" size="sm">Tips & Guidelines</Button>
                    </Link>
                </nav>
            </section> */}

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Polonnaruwa: The Golden Age Capital</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Step into the golden age of Sri Lankan civilization at Polonnaruwa, the island&apos;s second ancient capital and one of the best-preserved archaeological sites in South Asia. This UNESCO World Heritage site showcases the pinnacle of medieval Sinhalese architecture, engineering, and artistic achievement during the 11th to 13th centuries.
                        </p>
                        <p className="text-lg">
                            From the magnificent Gal Vihara rock sculptures to the impressive Royal Palace complex, Polonnaruwa offers an extraordinary journey through Sri Lanka&apos;s most prosperous era. Unlike Anuradhapura&apos;s spiritual focus, Polonnaruwa represents the perfect blend of religious devotion and royal grandeur, making it an essential destination for understanding the island&apos;s rich cultural heritage.
                        </p>
                    </div>
                </section>

                {/* Ad Space */}
                {/* <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
                    [Advertisement Space - 728x90 Leaderboard]
                </div> */}

                {/* Quick Facts */}
                <section id="quick-facts" className="mb-12 scroll-mt-20">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Quick Facts */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Polonnaruwa Quick Facts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Capital Period:</strong> 1070-1293 AD
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Founded by:</strong> King Vijayabahu I
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Crown className="w-4 h-4 text-purple-500" />
                                        <span>
                                            <strong>Golden Age:</strong> King Parakramabahu I era
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-red-500" />
                                        <span>
                                            <strong>Area:</strong> 122 square kilometers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-yellow-500" />
                                        <span>
                                            <strong>UNESCO Status:</strong> World Heritage (1982)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Visit Duration:</strong> Full day (6-8 hours)
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                            <h5 className="font-medium text-blue-800 dark:text-blue-200">Entrance Fee for ancient city of Polonnaruwa </h5>
                                            <p className="text-sm text-blue-600 dark:text-blue-300">$25 USD for foreign visitors</p>
                                            <p className="text-xs text-muted-foreground">Includes archaeological site access and museum</p>
                                        </div>
                                        <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                                            <h5 className="font-medium text-green-800 dark:text-green-200">Opening Hours</h5>
                                            <p className="text-sm text-green-600 dark:text-green-300">7:00 AM - 6:00 PM daily</p>
                                            <p className="text-xs text-muted-foreground">Last entry at 5:30 PM</p>
                                        </div>
                                        <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                                            <h5 className="font-medium text-purple-800 dark:text-purple-200">Best Time</h5>
                                            <p className="text-sm text-purple-600 dark:text-purple-300">Early morning or late afternoon</p>
                                            <p className="text-xs text-muted-foreground">Avoid midday heat</p>
                                        </div>
                                
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        {/* How to Get In */}
                        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                                    <MapPin className="w-5 h-5" />
                                    How to Get to Polonnaruwa
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Cultural Triangle Tours (Recommended)</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Package Tours:</strong> 2-3 day Cultural Triangle packages</li>
                                            <li>• <strong>Includes:</strong> Polonnaruwa, Sigiriya, and Dambulla</li>
                                            <li>• <strong>Transport:</strong> Air-conditioned vehicles with guide</li>
                                            <li>• <strong>Best option:</strong> Most comprehensive and educational</li>
                                        </ul>
                                        <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                                            <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                                                <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> specializes in Cultural Triangle expeditions with expert archaeological guides who bring ancient Polonnaruwa to life with fascinating historical insights and professional service.
                                            </p>
                                            <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                                                <div className="flex items-center gap-2">
                                                    <span>📞</span>
                                                    <span><strong>Contact:</strong> +94 77 123 4567</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span>🏛️</span>
                                                    <span><strong>Archaeological Tours</strong> - Expert guides & cultural insights</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Transportation Options</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <h5 className="font-medium text-sm">From Colombo</h5>
                                                <ul className="space-y-1 text-sm text-muted-foreground">
                                                    <li>• <strong>Distance:</strong> 216km (134 miles)</li>
                                                    <li>• <strong>Duration:</strong> 4-5 hours by car</li>
                                                    <li>• <strong>Cost:</strong> $60-90 USD private transport</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-sm">From Sigiriya</h5>
                                                <ul className="space-y-1 text-sm text-muted-foreground">
                                                    <li>• <strong>Distance:</strong> 55km (34 miles)</li>
                                                    <li>• <strong>Duration:</strong> 1.5 hours</li>
                                                    <li>• <strong>Ideal:</strong> Combined Cultural Triangle tour</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-sm">From Kandy</h5>
                                                <ul className="space-y-1 text-sm text-muted-foreground">
                                                    <li>• <strong>Distance:</strong> 140km (87 miles)</li>
                                                    <li>• <strong>Duration:</strong> 3 hours via A9 highway</li>
                                                    <li>• <strong>Route:</strong> Scenic drive through central Sri Lanka</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                                    <p className="text-sm text-blue-800 dark:text-blue-200">
                                        <strong>💡 Pro Tip:</strong> Start early morning visits to avoid crowds and heat. Most visitors combine Polonnaruwa with Sigiriya and Dambulla as part of a Cultural Triangle tour for the best historical experience.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* <section className="mb-12">
                    <Card className="border-gray-200 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-900/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                                <Car className="w-5 h-5" />
                                All Transportation Options to Polonnaruwa
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">🚗 Private Car/Taxi (Recommended)</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Duration:</strong> 4-5 hours from Colombo</li>
                                            <li>• <strong>Cost:</strong> $60-90 USD for day trip</li>
                                            <li>• <strong>Advantages:</strong> Flexible timing, door-to-door service</li>
                                            <li>• <strong>Best for:</strong> Comfort and convenience</li>
                                        </ul>
                                        <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                                            <p className="text-xs text-orange-800 dark:text-orange-200 mb-1">
                                                <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> - Professional drivers, comfortable vehicles, Cultural Triangle expertise
                                            </p>
                                            <p className="text-xs text-orange-800 dark:text-orange-200">📞 Contact: +94 77 123 4567</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">🚌 Public Bus</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Route:</strong> Colombo Pettah → Polonnaruwa</li>
                                            <li>• <strong>Duration:</strong> 5-6 hours</li>
                                            <li>• <strong>Cost:</strong> $3-5 USD (very budget-friendly)</li>
                                            <li>• <strong>Frequency:</strong> Every 30-60 minutes</li>
                                            <li>• <strong>Note:</strong> Less comfortable, limited stops</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">🚂 Train + Bus Combination</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Route:</strong> Colombo Fort → Gal Oya/Batticaloa line</li>
                                            <li>• <strong>Stop:</strong> Get off at Gal Oya Junction</li>
                                            <li>• <strong>Then:</strong> Local bus to Polonnaruwa (30 minutes)</li>
                                            <li>• <strong>Total Duration:</strong> 6-7 hours</li>
                                            <li>• <strong>Cost:</strong> $4-7 USD total</li>
                                            <li>• <strong>Experience:</strong> Scenic but time-consuming</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-cyan-700 dark:text-cyan-300">🏍️ Alternative Options</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Motorcycle/Scooter:</strong> For experienced riders</li>
                                            <li>• <strong>Organized Tours:</strong> Group bus tours from Colombo</li>
                                            <li>• <strong>Rideshare:</strong> Uber/PickMe (expensive for long distance)</li>
                                            <li>• <strong>Rental Car:</strong> Self-drive option available</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-300">💡 Transportation Tips:</h4>
                                    <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                                        <li>• <strong>Private car is recommended</strong> for comfort, flexibility, and time efficiency</li>
                                        <li>• <strong>Bus travel</strong> is budget-friendly but can be crowded and hot</li>
                                        <li>• <strong>Train option</strong> offers scenic views but requires bus connection</li>
                                        <li>• <strong>Start early</strong> regardless of transport method to avoid heat and crowds</li>
                                        <li>• <strong>Book accommodation</strong> in nearby Habarana or Dambulla for convenient access</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section> */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-orange-500" />
                                Site Information & Entry Requirements
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-foreground">Opening Hours:</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Clock className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                            <span><strong>Daily:</strong> 7:00 AM - 6:00 PM</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span><strong>Best Time:</strong> Early morning (7-9 AM) or late afternoon (4-6 PM)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            <span>Avoid midday heat (11 AM - 3 PM)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-foreground">Entry Fees (2025):</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex justify-between">
                                            <span>Foreign Adults:</span>
                                            <span className="font-medium">$30 USD</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Foreign Children (6-12):</span>
                                            <span className="font-medium">$15 USD</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>SAARC Nationals:</span>
                                            <span className="font-medium">$15 USD</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Bicycle Rental:</span>
                                            <span className="font-medium">$5 USD</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Royal Complex */}
                <section id="royal-palace" className="mb-12 scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-6">Places to Visit in Polonnaruwa</h2>

                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. Royal Palace of King Parakramabahu I</CardTitle>
                                <CardDescription>Magnificent seven-story palace complex</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    {/* <ImageCarousel
                                        images={polonnaruwaImages}
                                        alt="Royal Palace Complex of Polonnaruwa showing various views of the ancient palace ruins and architectural details"
                                    /> */}
                                    <ImageCarousel
                                        images={polonnaruwaImages}
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The centerpiece of Polonnaruwa, this magnificent palace complex once stood seven stories tall and housed over 1,000 rooms. Built by King Parakramabahu I in the 12th century, it represents the pinnacle of medieval Sinhalese architecture.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Originally seven stories with over 1,000 rooms
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Walls up to 3 meters thick for structural support
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Advanced drainage and ventilation systems
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Royal audience hall and private chambers
                                            </li>
                                        </ul>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/parakkramabahu-royal-palace" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Royal Swimming Pool */}
                                <div className="mt-6 border-t pt-6">
                                    <h4 className="font-semibold text-lg mb-3">Kumara Pokuna aka Royal Bath</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ImageCarousel
                                            images={kumaraPokunaImages}
                                        />
                                        <div>
                                            <p className="text-muted-foreground mb-3">
                                                Adjacent to the Royal Palace lies the sophisticated royal swimming pool, a testament
                                                to the advanced engineering capabilities of ancient Sri Lanka. This rectangular pool
                                                features dragon mouth spouts and an intricate water filtering system.
                                            </p>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Original stone steps and platforms preserved
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Advanced water filtering and circulation system
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Decorative crocodile mouth water spouts
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Nissanka Malla's Palace Complex */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Nissanka Malla&apos;s Palace Complex</CardTitle>
                                <CardDescription>Royal palace with unique stone inscriptions and architectural features</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The palace complex of King Nissanka Malla (1187-1196 AD) is a remarkable example of late
                                            Polonnaruwa period architecture. Known for its extensive stone inscriptions and unique
                                            architectural features, this complex provides invaluable insights into royal life and
                                            governance during medieval Sri Lanka.
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Palace Features:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                        Three-story royal residence
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                        Stone-carved lion throne
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                        Council Chamber with stone seats
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                        Royal bathing pool
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                                                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Famous Inscriptions</h4>
                                                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
                                                    <li>• Detailed records of royal appointments</li>
                                                    <li>• King&apos;s genealogy and achievements</li>
                                                    <li>• Administrative regulations</li>
                                                    <li>• Royal court protocols</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Historical Significance:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Most detailed inscriptions from medieval Sri Lanka
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Evidence of advanced administrative systems
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Insights into medieval royal court life
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ImageCarousel
                                        images={[
                                            { src: "/placeholder.svg?height=300&width=400&text=Nissanka+Malla+Palace", caption: "Ruins of Nissanka Malla's Palace", alt: "Ruins of Nissanka Malla's Palace showing stone architecture" },
                                            { src: "/placeholder.svg?height=300&width=400&text=Stone+Inscriptions", caption: "Stone inscriptions on palace walls", alt: "Ancient stone inscriptions detailing royal records" },
                                            { src: "/placeholder.svg?height=300&width=400&text=Council+Chamber", caption: "Council Chamber with stone seats", alt: "Stone seats in the royal council chamber" }
                                        ]}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Shiva Devale No. 2 */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Shiva Devale No. 2</CardTitle>
                                <CardDescription>One of the oldest Hindu temples in Polonnaruwa</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[{
                                            src: "/placeholder.svg?height=300&width=400",
                                            alt: "Lipton's Seat viewpoint showing panoramic views across seven provinces with endless tea plantations",
                                            caption: "Viewpoint across 7 provinces",
                                            title: "Panoramic Viewpoint"
                                        }]}
                                    />

                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Built entirely of stone in the South Indian Dravidian style during the 11th century,
                                            Shiva Devale No. 2 is one of the oldest structures in Polonnaruwa. Its remarkable
                                            preservation and architectural precision make it a significant example of ancient
                                            Hindu temple architecture.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Complete stone construction without mortar
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Traditional Dravidian architectural features
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Original stone doorframe and steps
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Evidence of ancient Hindu worship practices
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Pabalu Vehera */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Pabalu Vehera</CardTitle>
                                <CardDescription>Buddhist stupa famous for its pearl merchants&apos; patronage</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Pabalu Vehera, meaning &quot;Pearl Shrine,&quot; was built during the reign of King
                                            Parakramabahu I and was reportedly funded by pearl merchants. This Buddhist
                                            stupa showcases the typical architectural style of the Polonnaruwa period with
                                            its unique features and historical significance.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Traditional bell-shaped stupa design
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Surrounded by smaller stupas and shrines
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Evidence of ancient merchant patronage
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Well-preserved stone moonstone and steps
                                            </li>
                                        </ul>
                                    </div>
                                    <ImageCarousel
                                        images={[
                                            {
                                                src: "/placeholder.svg?height=300&width=400",
                                                alt: "Lipton's Seat viewpoint showing panoramic views across seven provinces with endless tea plantations",
                                                caption: "Viewpoint across 7 provinces",
                                                title: "Panoramic Viewpoint"
                                            }
                                        ]}

                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>2. Nissanka Latha Mandapaya</CardTitle>
                                <CardDescription>Unique architectural masterpiece with lotus-shaped pillars</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            This extraordinary structure features 48 pillars carved to resemble lotus stems, creating one of the most photographed architectural elements in Sri Lanka. Built by King Nissanka Malla, it showcases the artistic sophistication of the period.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                48 unique lotus-shaped stone pillars
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Each pillar has different decorative motifs
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Royal throne platform in the center
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Excellent example of Polonnaruwa architecture
                                            </li>
                                        </ul>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/nissanka-latha-mandapaya" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <ImageCarousel
                                        images={[
                                            { src: "/NissankaLathaMandapaya.jpg", caption: "Close-up of intricately carved lotus pillars at the Audience Hall", alt: "Close-up of intricately carved lotus pillars at the Audience Hall" },
                                            { src: "/𝗡𝗶𝘀𝘀𝗮𝗻𝗸𝗮𝗹𝗮𝘁𝗵𝗮-𝗠𝗮𝗻𝗱𝗮𝗽𝗮𝘆𝗮.jpg", caption: "Nissanka Latha Mandapaya: Lotus-shaped stone pillars surrounding the central platform", alt: "Nissanka Latha Mandapaya: Lotus-shaped stone pillars surrounding the central platform" },
                                            { src: "/Nishshankalatha-mandapaya2.jpg", caption: "Close-up of intricately carved lotus pillars at the Audience Hall", alt: "Close-up of intricately carved lotus pillars at the Audience Hall" },
                                            { src: "/Nishshankalatha-mandapaya3.jpg", caption: "Close-up of intricately carved lotus pillars at the Audience Hall", alt: "Close-up of intricately carved lotus pillars at the Audience Hall" },
                                        ]}

                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Lotus Pond Section */}
                <section id="lotus-pond" className="mb-12 scroll-mt-20">
                    <Card>
                        <CardHeader>
                            <CardTitle>Lotus Pond (Nelum Pokuna)</CardTitle>
                            <CardDescription>Ancient engineering marvel shaped like a lotus flower</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <ImageCarousel
                                    images={[
                                        { src: "/Lotus-Pond.jpeg", caption: "Aerial view of the Lotus Pond", alt: "Aerial view of the Lotus Pond" },
                                        { src: "/LotusPond2.jpg", caption: "Detailed stone craftsmanship", alt: "Detailed stone craftsmanship" },
                                        { src: "/LotusPond3.jpg", caption: "Architectural details", alt: "Architectural details" }
                                    ]} />
                                <div>
                                    <p className="text-muted-foreground mb-4">
                                        The Lotus Pond is a unique architectural creation shaped like an eight-petaled lotus flower.
                                        This ancient swimming pool demonstrates the advanced engineering and artistic capabilities of
                                        ancient Sri Lankan civilization.
                                    </p>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Unique  Eight-petaled lotus-shaped design
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Advanced hydraulic engineering
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Original water filtering system
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Perfectly preserved structure
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Underground water supply system
                                        </li>
                                    </ul>

                                    <div className="mt-4 flex justify-start">
                                        <Link href="/destinations/lotus-pond-polonnaruwa" passHref legacyBehavior>
                                            <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <section id="lotus-pond" className="mt-12 scroll-mt-20">
                        <Card>
                            <CardHeader>
                                <CardTitle>2. Audience Hall of Nissanka Malla</CardTitle>
                                <CardDescription>Unique architectural masterpiece with lotus-shaped pillars</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">

                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                48 unique lotus-shaped stone pillars
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Each pillar has different decorative motifs
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Royal throne platform in the center
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Excellent example of Polonnaruwa architecture
                                            </li>
                                        </ul>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/nissanka-latha-mandapaya" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <ImageCarousel
                                        images={[
                                            { src: "/Nishshankalatha-mandapaya.jpg", caption: "Nissanka Latha Mandapaya: Lotus-shaped stone pillars surrounding the central platform", alt: "Nissanka Latha Mandapaya: Lotus-shaped stone pillars surrounding the central platform" },
                                            { src: "/Nishshankalatha-mandapaya1.jpg", caption: "Close-up of intricately carved lotus pillars at the Audience Hall", alt: "Close-up of intricately carved lotus pillars at the Audience Hall" },
                                            { src: "/Nishshankalatha-mandapaya2.jpg", caption: "Close-up of intricately carved lotus pillars at the Audience Hall", alt: "Close-up of intricately carved lotus pillars at the Audience Hall" },
                                            {
                                                src: "/Nishshankalatha-mandapaya3.jpg", caption: "Close-up of intricately carved lotus pillars at the Audience Hall",
                                                alt: "Close-up of intricately carved lotus pillars at the Audience Hall"

                                            },
                                        ]}

                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </section>

                {/* Ad Space */}
                {/* <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
                    [Advertisement Space - 300x250 Medium Rectangle]
                </div> */}

                {/* Religious Sites */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Sacred Buddhist Sites</h2>

                    <div className="space-y-8">

                        <Card>
                            <CardHeader>
                                <CardTitle>3. Gal Vihara Rock Temple</CardTitle>
                                <CardDescription>Masterpiece of ancient rock sculpture</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={galviharayaImages}

                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Considered the pinnacle of ancient Sinhalese sculpture, Gal Vihara features four magnificent Buddha statues carved from a single granite rock face. These 12th-century masterpieces represent the finest Buddhist art in Sri Lanka.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Four Buddha statues in different poses,(a seated Buddha in meditation, a standing Buddha with arms crossed, and a reclining Buddha representing his final nirvana)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                14-meter reclining Buddha (largest in Gal Viharaya)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Exquisite facial expressions and details
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Active place of worship and pilgrimage
                                            </li>
                                        </ul>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/gal-viharaya" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        {/* Polonnaruwa Vatadageya */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Polonnaruwa Vatadageya</CardTitle>
                                <CardDescription>Ancient Relic House & Architectural Masterpiece</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            { src: "/Watadageya1.jpg", caption: "Polonnaruwa Vatadageya: Circular relic house with stone pillars", alt: "Polonnaruwa Vatadageya: Circular relic house with stone pillars" },
                                            { src: "/Watadageya.jpg", caption: "Vatadageya: Intricate stone carvings and moonstone", alt: "Vatadageya: Intricate stone carvings and moonstone" },
                                            { src: "/PolonnaruwaVatadageya3.jpg", caption: "Vatadageya: Buddha statues and central stupa base", alt: "Vatadageya: Buddha statues and central stupa base" },
                                        ]}

                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Polonnaruwa Vatadageya is one of Sri Lanka&apos;s most iconic ancient structures a circular relic house built to protect sacred Buddhist relics. Dating to the 12th century, it features concentric stone platforms, beautifully carved guard stones, and a famous moonstone at the entrance. Four Buddha statues face the cardinal directions, symbolizing protection and enlightenment.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Unique circular shrine architecture
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Intricate moonstone and guard stones
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Four Buddha statues facing cardinal points
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                UNESCO World Heritage highlight
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Four seated Buddha statues in pristine condition
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Intricate moonstone and guard stones
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Concentric stone platforms
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Remarkable stone craftsmanship
                                            </li>
                                        </ul>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/polonnaruwa-vatadageya" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Hatadage */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>The Sacred Hatadage</CardTitle>
                                <CardDescription>Royal Relic Shrine & Ancient Library</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            { src: "/Hatadage.jpg", caption: "Hatadage: Ancient royal relic shrine with stone columns", alt: "Hatadage: Ancient royal relic shrine with stone columns" },
                                            { src: "/Hatadage1.jpg", caption: "Hatadage: Intricate stone carvings and entrance", alt: "Hatadage: Intricate stone carvings and entrance" },
                                            { src: "/Hatadage2.jpg", caption: "Hatadage: Interior view showing Buddha statues", alt: "Hatadage: Interior view showing Buddha statues" }
                                        ]}

                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Hatadage, built by King Nissankamalla (1187-1196 AD), served as both a sacred relic shrine and
                                            royal library. Its name suggests it once housed sixty Buddhist relics, including the sacred Tooth Relic.
                                            This remarkable structure combines religious significance with royal grandeur, featuring exquisite stone
                                            carvings and architectural innovations of the Polonnaruwa period.
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Architectural Features:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                        Three Buddha statues in seated position
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                        Distinctive stone columns and moonstone
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                                        Elaborate guard stones and stone carvings
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Historical Significance:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Former home of the Sacred Tooth Relic
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Served as royal library and document repository
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Inscriptions detail King Nissankamalla&apos;s achievements
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500">
                                            <p className="text-sm text-amber-800 dark:text-amber-200">
                                                <strong>🏛️ Historical Note:</strong> The name &quot;Hatadage&quot; is believed to derive from &quot;hata&quot; (sixty)
                                                and &quot;da&quot; (relic), referring to the sixty relics once housed here. The building&apos;s dual role as both
                                                religious shrine and royal library makes it unique among Polonnaruwa&apos;s monuments.
                                            </p>
                                        </div>
                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/polonnaruwa-hatadageya" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>4. Thivanka Image House (Thivanka Pilima Ge)</CardTitle>
                                <CardDescription>Ancient shrine with unique bent-posture Buddha and rare frescoes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            { src: "/Thivanka-Image-House.jpeg", caption: "Thivanka Image House exterior view", alt: "Thivanka Image House exterior view" },
                                            { src: "/Thivanka-Image-House1.jpeg", caption: "Ancient frescoes inside Thivanka Image House", alt: "Ancient frescoes inside Thivanka Image House" },
                                            { src: "/Thivanka-Image-House3.jpg", caption: "Unique bent-posture Buddha statue", alt: "Unique bent-posture Buddha statue" }
                                        ]}

                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Thivanka Image House is one of Polonnaruwa&apos;s most unique religious monuments, famous for its
                                            Buddha statue in a distinctive three-bend posture (thivanka) and its remarkably preserved medieval
                                            frescoes. Dating to the reign of Parakramabahu I, this temple showcases some of the finest examples
                                            of Polonnaruwa period art.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Unique three-bent posture Buddha statue (only one of its kind)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Rare 12th-century frescoes depicting Jataka tales
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Original painted plaster still visible on walls
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Architectural features blend Sinhalese and South Indian styles
                                            </li>
                                        </ul>
                                        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                            <p className="text-sm text-amber-800 dark:text-amber-200">
                                                <strong>🎨 Art Historical Note:</strong> The frescoes here are particularly significant as they
                                                represent a unique style bridging classical Anuradhapura and medieval Polonnaruwa periods.
                                            </p>
                                        </div>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/thivanka-pilimage" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>5. Sathmahal Prasada (Seven-Story Palace)</CardTitle>
                                <CardDescription>Unique stepped pyramid structure with possible Southeast Asian influences</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Sathmahal Prasada is a unique seven-storied pyramid-style building that stands out from
                                            typical Sinhalese architecture. Its design shows possible influences from Southeast Asian
                                            temple architecture, particularly from Cambodia and Thailand, suggesting international
                                            cultural connections during the Polonnaruwa period.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Unique stepped pyramid design with seven levels
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Shows possible Cambodian architectural influence
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                One of the few surviving multi-storied structures
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Evidence of international cultural exchange
                                            </li>
                                        </ul>
                                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                                <strong>🏛️ Architectural Note:</strong> This structure is particularly important as it
                                                demonstrates the international connections and architectural diversity of medieval Sri Lanka.
                                            </p>
                                        </div>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/sathmahal-prasadaya" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">Read More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <ImageCarousel
                                        images={[
                                            { src: "/Sathmahal-prasadaya1.jpg", caption: "Seven-story pyramid structure of Sathmahal Prasada", alt: "Seven-story pyramid structure of Sathmahal Prasada" },
                                            { src: "/Sathmahal-prasadaya.jpg", caption: "Detailed view of the architectural features", alt: "Detailed view of the architectural features" },
                                            { src: "/Sathmahal-Prasada3.jpg", caption: "Evening view showing the unique stepped design", alt: "Evening view showing the unique stepped design" }
                                        ]}

                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>6. Rankoth Vehera</CardTitle>
                                <CardDescription>Largest dagoba in Polonnaruwa</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Built by King Nissanka Malla, this impressive dagoba stands 54 meters tall and follows the classic Anuradhapura style. It&apos;s the fourth largest dagoba in Sri Lanka and represents the continuation of ancient Buddhist architectural traditions.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                54 meters tall with 170-meter circumference
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Built in traditional Anuradhapura style
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Surrounded by smaller stupas and ruins
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Well-preserved with original lime plaster
                                            </li>
                                        </ul>
                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/rankoth-vehera" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                            </Link>
                                        </div>

                                    </div>
                                    <ImageCarousel
                                        images={rankothveheraImages}

                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>5. Lankatilaka Image House</CardTitle>
                                <CardDescription>Towering brick temple with headless Buddha</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={[
                                            { src: "/Lankatilaka-Image-House.jpeg", caption: "Towering brick walls of Lankatilaka temple", alt: "Towering brick walls of Lankatilaka temple" },
                                            { src: "/Lankatilaka-Image-House1.jpeg", caption: "Interior view with headless Buddha statue", alt: "Interior view with headless Buddha statue" },
                                            { src: "/Lankatilaka-Image-House2.jpeg", caption: "Impressive brick architecture and detail", alt: "Impressive brick architecture and detail" }
                                        ]}

                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            This impressive brick structure stands 17 meters tall and houses a colossal standing Buddha statue. Though the statue&apos;s head is missing, the temple remains one of Polonnaruwa&apos;s most photographed monuments, showcasing medieval architectural grandeur.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                17-meter tall brick structure
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Houses 12-meter standing Buddha statue
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Intricate brick and stucco work
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Excellent preservation of medieval architecture
                                            </li>
                                        </ul>

                                        <div className="mt-4 flex justify-start">
                                            <Link href="/destinations/lankatilaka-temple" passHref legacyBehavior>
                                                <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Engineering Marvels */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Ancient Engineering Marvels</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-600">Parakrama Samudra</CardTitle>
                                <CardDescription>Ancient irrigation masterpiece</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Image
                                    src="/placeholder.svg?height=200&width=350&text=Parakrama+Samudra"
                                    alt="Vast Parakrama Samudra reservoir with ancient embankments and water management systems"
                                    width={350}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <div>
                                    <h4 className="font-semibold mb-2">The Sea of Parakrama</h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        This massive reservoir, covering 2,400 hectares, demonstrates the advanced hydraulic engineering of ancient Sri Lanka.
                                    </p>
                                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <p className="text-sm text-blue-800 dark:text-blue-200">
                                            <span className="font-semibold">Did You Know? </span>
                                            The Parakrama Samudra was so vast that ancient mariners mistook it for the ocean when approaching from the sea, hence its name &quot;The Sea of Parakrama&quot;!
                                        </p>
                                    </div>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Built by connecting three separate reservoirs</li>
                                        <li>• 14 km long embankment system</li>
                                        <li>• Sophisticated sluice and spillway design</li>
                                        <li>• Still functions after 800+ years</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-green-600">Statue of King Parakramabahu</CardTitle>
                                <CardDescription>A King who united Sri Lanka</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Image
                                    src="/Statue-Of-Parakkramabahu.jpg"
                                    alt="Statue of King Parakramabahu at Polonnaruwa"
                                    width={350}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <div>
                                    <h4 className="font-semibold mb-2">Architectural Artistry</h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        You can see the statue of King Parakramabahu who successfully united the three kingdoms of the island under one rule and built a magnificent empire. Also launched a punitive expedition against Burma in the 1160s and another later in 1180.
                                        But, some scholars present an alternative interpretation, suggesting this is a statue of Pulastya Rishi, an ancient sage from Hindu mythology, based on certain iconographic features.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Nearby Places to Explore</h2>
                    <div className="grid md:grid-cols-3 gap-6">

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Sigiriya Rock Fortress</CardTitle>
                                <CardDescription>Ancient wonder nearby</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/SigiriyaDrone.jpg"
                                    alt="Sigiriya Rock Fortress rising majestically from the jungle landscape"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    The famous Lion Rock fortress, just 1.5 hours from Polonnaruwa, showcasing 5th-century royal architecture.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/sigiriya-rock-fortress" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>



                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Anuradhapura</CardTitle>
                                <CardDescription>First Capital of Sri Lanka</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Anuradhapura.jpg"
                                    alt="Ancient capital Anuradhapura"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Witness one of the world&apos;s largest elephant gathering, just 30 minutes from Polonnaruwa.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/anuradhapura" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Minneriya National Park</CardTitle>
                                <CardDescription>Elephant gathering</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Minneriyanationalpark.jpeg"
                                    alt="Large herd of elephants gathering at Minneriya reservoir"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Witness one of the world&apos;s largest elephant gathering, just 30 minutes from Polonnaruwa.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/minneriya-national-park" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Wasgamuwa National Park</CardTitle>
                                <CardDescription>Elephant habitat</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/placeholder.svg?height=200&width=300&text=Wasgamuwa+National+Park"
                                    alt="Wasgamuwa National Park"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    A lesser-known gem, Wasgamuwa offers pristine wilderness and rich biodiversity, just over an hour from Polonnaruwa.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/wasgamuwa-national-park" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Visiting Guide */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Complete Visiting Guide</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-purple-600">Planning Your Visit</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Entry Fees & Tickets</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Foreign adults: $25 USD</li>
                                        <li>• Foreign children: $12.50 USD</li>
                                        <li>• SAARC nationals: Discounted rates</li>
                                        <li>• Valid for same day only</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Early morning (6:00-9:00 AM)</li>
                                        <li>• Late afternoon (4:00-6:00 PM)</li>
                                        <li>• Avoid midday heat (11 AM-3 PM)</li>
                                        <li>• Dry season: May to September</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Transportation</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Bicycle rental (most popular)</li>
                                        <li>• Three-wheeler (tuk-tuk)</li>
                                        <li>• Private car with driver</li>
                                        <li>• Organized tour groups</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-orange-600">Essential Tips</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Photography Tips</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Golden hour lighting at Gal Vihara</li>
                                        <li>• Wide-angle lens for palace ruins</li>
                                        <li>• Respectful distance from Buddha statues</li>
                                        <li>• Drone photography requires permits</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">What to Bring</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Comfortable walking shoes</li>
                                        <li>• Sun protection and water</li>
                                        <li>• Modest clothing for temples</li>
                                        <li>• Camera with extra batteries</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Cultural Etiquette</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Remove shoes at Buddha statues</li>
                                        <li>• Don&apos;t point feet toward statues</li>
                                        <li>• Maintain respectful silence</li>
                                        <li>• Follow photography guidelines</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Final Tips */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 dark:bg-gray-900">
                        <CardHeader>
                            <CardTitle className="text-blue-800 dark:text-blue-200">Your Journey Through Medieval Splendor</CardTitle>
                        </CardHeader>
                        <CardContent className="dark:text-gray-200">
                            <p className="text-muted-foreground mb-4 dark:text-gray-200">
                                Polonnaruwa represents the golden age of Sri Lankan civilization, where royal grandeur and spiritual devotion created architectural masterpieces that continue to inspire wonder today. As you explore this ancient city, you&apos;re walking through the dreams and achievements of medieval kings who transformed their vision into stone and brick.
                            </p>
                            <p className="text-muted-foreground mb-4 dark:text-gray-200">
                                From the artistic perfection of Gal Vihara to the engineering marvel of Parakrama Samudra, every structure tells a story of human ambition, creativity, and devotion. Take time to appreciate not just the monuments themselves, but the sophisticated society that created them over 800 years ago.
                            </p>
                            <p className="text-muted-foreground font-medium dark:text-gray-100">
                                May your exploration of Polonnaruwa inspire you with the timeless beauty of human achievement! 🏛️👑✨
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
