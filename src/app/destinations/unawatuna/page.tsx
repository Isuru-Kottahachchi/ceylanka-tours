"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Waves, Car, Sun } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BeachSafetyModal } from "@/components/beach-safety-modal"
import { useEffect, useState } from "react"

export default function UnawatunaTravelGuide() {
    const beachImages = [
        { src: "/Unawatuna.jpg", caption: "Unawatuna's pristine beach with crystal clear waters", alt: "Unawatuna's pristine beach with crystal clear waters" },
        { src: "/Unawatuna1.jpg", caption: "Aerial view of Unawatuna bay and beach", alt: "Aerial view of Unawatuna bay and beach" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Sunset at Unawatuna Beach", alt: "Sunset at Unawatuna Beach" },
    ];

    const waterActivitiesImages = [
        { src: "/placeholder.svg?height=400&width=600", caption: "Snorkeling in coral reefs", alt: "Snorkeling in coral reefs at Unawatuna" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Diving spots around Unawatuna", alt: "Diving spots around Unawatuna" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Water sports activities", alt: "Water sports activities at Unawatuna Beach" },
    ];

    const templeImages = [
        { src: "/Unawatuna.jpg", caption: "Yatagala Raja Maha Viharaya ancient temple", alt: "Yatagala Raja Maha Viharaya ancient temple" },
        { src: "/Unawatuna1.jpg", caption: "Japanese Peace Pagoda", alt: "Japanese Peace Pagoda overlooking Unawatuna" },
    ];

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
            <BeachSafetyModal isOpen={showSafetyModal} onClose={handleCloseModal} beachName={"Unawatuna"} />
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Unawatuna1.jpg"
                    alt="Aerial view of Unawatuna Beach with its crescent shape and turquoise waters"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Unawatuna</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Paradise Beach Haven</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-blue-600/80 text-white border-blue-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Southern Province
                        </Badge>
                        <Badge variant="secondary" className="bg-yellow-600/80 text-white border-yellow-500">
                            <Sun className="w-4 h-4 mr-1" />
                            Beach Paradise
                        </Badge>
                        <Badge variant="secondary" className="bg-green-600/80 text-white border-green-500">
                            <Waves className="w-4 h-4 mr-1" />
                            Water Sports Hub
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Unawatuna: A Coastal Paradise</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Unawatuna, a crescent-shaped beach paradise nestled along Sri Lanka&apos;s southern coast, is renowned
                            for its golden sands, crystal-clear waters, and vibrant marine life. This charming coastal town,
                            just 6 kilometers southeast of historic Galle, perfectly blends natural beauty with modern beach
                            life.
                        </p>
                        <p className="text-lg">
                            From world-class snorkeling and diving opportunities to cultural experiences and
                            beachfront dining, Unawatuna offers something for every traveler. The beach is protected by
                            a coral reef, making it one of the safest swimming spots along the southern coast.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 mt-4">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-2">Did You Know?</h4>
                            <p className="text-sm text-blue-700 dark:text-gray-200">
                                Unawatuna was once named one of the &quot;World&apos;s Best Beaches&quot; by Discovery Channel and CNN.
                                The beach has made a remarkable recovery since the 2004 tsunami, showcasing nature&apos;s resilience
                                and the community&apos;s determination.
                            </p>
                        </div>
                    </div>
                </section>


                <div className="flex flex-col lg:flex-row gap-8 mb-10 scroll-mt-40" id="quick-facts">
                    {/* Quick Facts */}
                    <section>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Quick Facts About Unawatuna
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Waves className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Beach Length:</strong> 1.2 kilometers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sun className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Best Season:</strong> December to April
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Ideal Stay:</strong> 2-4 days
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-red-500" />
                                        <span>
                                            <strong>Distance from Colombo:</strong> 120 km
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Car className="w-4 h-4 text-purple-500" />
                                        <span>
                                            <strong>Transport:</strong> Tuk-tuks, buses, and taxis available
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Known For:</strong> Safe swimming, snorkeling, diving
                                        </span>
                                    </div>

                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🕒 Tips for Visiting Unawatuna</h4>
                                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                                            <li>• Early Morning (6-8 AM): Perfect for peaceful walks</li>
                                            <li>• Late Afternoon (3-6 PM): Best for swimming</li>
                                            <li>• Avoid weekends and public holidays for a quieter experience</li>
                                            <li>• Bring reef-safe sunscreen to protect marine life</li>
                                            <li>• Respect local customs and the environment</li>
                                            <li>• Book whale watching tours in advance during peak season</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                    {/* How to Get to  */}
                    <section className="flex-1">
                        <Card className="border-l-4 border-blue-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                    <MapPin className="w-5 h-5" />
                                    How to Get to Unawatuna
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Private Car/Taxi (Recommended)</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Distance:</strong> 180km (112 miles) from Colombo</li>
                                            <li>• <strong>Duration:</strong> 2.5-3 hours</li>
                                            <li>• <strong>Cost:</strong> $60-85 USD for day trip</li>
                                            <li>• <strong>Best option:</strong> Most convenient and flexible</li>
                                        </ul>
                                        <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                                            <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                                                <strong>🌟 Recommended:</strong> <span className="font-semibold"> Ceylanka tours</span> offers reliable, comfortable vehicles with experienced drivers who know the best routes to Unawatuna. Professional service, fair pricing, and excellent local knowledge make them a top choice for hassle-free travel.
                                            </p>
                                            <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                                                <div className="flex items-center gap-2">
                                                    <span>📞</span>
                                                    <span><strong>Contact:</strong> +94 77 123 4567</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span>✈️</span>
                                                    <Link href="/airport-transfers" className="underline hover:text-orange-700 dark:hover:text-orange-300 focus:text-orange-700 dark:focus:text-orange-300">
                                                        <strong>Airport Transfer Services</strong> - Click for details & booking
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">By Train (Scenic Route)</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Route:</strong> Colombo Fort → Unawatuna railway station</li>
                                            <li>• <strong>Duration:</strong> 3-6 hours total</li>
                                            <li>• <strong>Cost:</strong> $3-12 USD (depending on class)</li>
                                            <li>• <strong>From Unawatuna:</strong> hire taxi/tuk-tuk</li>
                                        </ul>

                                        <h4 className="font-semibold mb-3 mt-6 text-blue-700 dark:text-blue-300">By Bus</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li>• <strong>Route:</strong> Colombo Fort → Unawatuna bus station  (Coast road)</li>
                                            <li>• <strong>Duration:</strong> 4-6 hours</li>
                                            <li>• <strong>Cost:</strong> $4-6 USD (budget-friendly)</li>
                                            <li>• <strong>Frequency:</strong> Regular departures from Colombo Fort Bus Station</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a href="https://maps.app.goo.gl/mApRuVKgTQKqDKyg6" target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 cursor-pointer">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            Open in Google Maps
                                        </Button>
                                    </a>
                                </div>
                                {/* <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">🚂 Special Note about Train Journey</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The train journey from Kandy to Nanu Oya is considered one of the world&apos;s most scenic train rides, passing through breathtaking tea plantations, mountain tunnels, and misty landscapes. <strong>Important:</strong> Nanu Oya is the closest railway station to Nuwara Eliya - you&apos;ll need to take a taxi or tuk-tuk for the final 8km uphill journey to the town center.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Book reserved seats in advance for the best views</li>
                    <li>• Sit on the right side for better mountain scenery</li>
                    <li>• Bring warm clothes - it gets cool in the mountains</li>
                    <li>• Pre-arrange transport from Nanu Oya station</li>
                  </ul>
                </div> */}
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Beach Activities */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Beach Activities & Attractions</h2>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>The Famous Unawatuna Beach</CardTitle>
                                <CardDescription>Golden sands and crystal-clear waters</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel images={beachImages} />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The crescent-shaped beach of Unawatuna is protected by a coral reef, creating
                                            perfect conditions for swimming and snorkeling. The calm waters and gentle slope
                                            make it ideal for families and casual swimmers.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Safe swimming year-round
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Coral reef protection
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Perfect for sunset viewing
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Beachfront restaurants and bars
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Water Activities */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Water Sports & Marine Life</CardTitle>
                                <CardDescription>Dive into underwater adventures</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Unawatuna offers excellent opportunities for water sports and marine exploration.
                                            The coral reef houses diverse marine life, making it a popular spot for snorkeling
                                            and diving enthusiasts.
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold mb-2">Popular Activities:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Snorkeling with sea turtles
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Scuba diving at coral reefs
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Glass-bottom boat rides
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Jet skiing and banana boat rides
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ImageCarousel images={waterActivitiesImages} />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Cultural Attractions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Cultural Attractions</CardTitle>
                                <CardDescription>Temples and historical sites</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel images={templeImages} />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Beyond the beach, Unawatuna offers rich cultural experiences with ancient temples
                                            and historical sites. The Japanese Peace Pagoda provides panoramic views of the
                                            coastline, while the Yatagala Raja Maha Viharaya offers insights into Sri Lankan
                                            Buddhist heritage.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Japanese Peace Pagoda with coastal views
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                2300-year-old Yatagala Temple
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Ancient cave paintings and sculptures
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Traditional Buddhist ceremonies
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Getting There */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">How to Get to Unawatuna</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Car className="w-5 h-5" />
                                Transportation Guide
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-3">From Colombo</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            By Car: 2.5-3 hours via Southern Expressway
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            By Train: Scenic coastal route to Galle
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            By Bus: Regular services from Colombo Fort
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3">From Galle</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Tuk-tuk: 15-20 minutes
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Local Bus: Regular services every 30 minutes
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Taxi: 10-15 minutes
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Best Time to Visit */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Best Time to Visit</CardTitle>
                            <CardDescription>Seasonal guide for the perfect beach vacation</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Peak Season (December - April)</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Perfect beach weather
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Clear waters for snorkeling
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Vibrant nightlife
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3">Off Season (May - November)</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Fewer crowds
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Better accommodation rates
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Occasional rain showers
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Accommodation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Where to Stay</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Beachfront Resorts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Luxury beachfront access</li>
                                    <li>• Ocean view rooms</li>
                                    <li>• Full-service facilities</li>
                                    <li>• $100-300 per night</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Boutique Hotels</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Personalized service</li>
                                    <li>• Unique architecture</li>
                                    <li>• Garden settings</li>
                                    <li>• $50-150 per night</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Guesthouses</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Budget-friendly options</li>
                                    <li>• Local hospitality</li>
                                    <li>• Basic amenities</li>
                                    <li>• $20-50 per night</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Travel Tips */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Essential Travel Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Beach Safety</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Swim in designated areas
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Use sun protection
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Stay hydrated
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3">Local Etiquette</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Respect temple dress codes
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Moderate beachwear in town
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Support local businesses
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                {/* Nearby Attractions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
                    <div className="grid md:grid-cols-3 gap-6">

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Jungle beach Roomassala</CardTitle>
                                <CardDescription>A beach with a great atmosphere</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/jungle-beach.jpeg"
                                    alt="View of Jungle Beach"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Explore the scenic Jungle Beach with its lush greenery and clear waters. Perfect for a relaxing day trip.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/jungle-beach-roomassala" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Kanneliya</CardTitle>
                                <CardDescription>Part of a Kanneliya Dediyagala Nakiyadeniya Complex</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Kanneliya.jpg"
                                    alt="View of Kanneliya"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Explore the lush Kanneliya rainforest, part of the Sinharaja Forest Reserve. Home to diverse flora and fauna, perfect for nature lovers.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/kanneliya" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Hummanaya Blowhole</CardTitle>
                                <CardDescription>Sri Lanka&apos;s only natural blowhole</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/HummanayaBlowhole.jpeg"
                                    alt="Hummanaya Blowhole spraying water high above the rocky coast"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Witness the power of the Indian Ocean at Hummanaya, where water shoots up to 25 meters through a coastal rock crevice. A unique natural wonder and a must-see for nature lovers!
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/hummanaya-blowhole" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Mirissa</CardTitle>
                                <CardDescription>Best views of the coastline</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Mirissa1.jpg"
                                    alt="View of Mirissa"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Mirissa is a picturesque coastal town known for its stunning beaches and vibrant nightlife. Enjoy whale watching, water sports, and delicious seafood.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/mirissa" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Waligama</CardTitle>
                                <CardDescription>Best views of the coastline</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Waligama.jpg"
                                    alt="View of Waligama"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Waligama is a charming coastal town known for its stunning beaches and vibrant fishing community. Enjoy fresh seafood, water sports, and breathtaking sunsets.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/waligama" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Hirikatiya</CardTitle>
                                <CardDescription>Best views of the coastline and Surfing</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Hirikatiya.jpg"
                                    alt="Hirikatiya Beach with surfers riding waves and palm trees lining the shore"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Surfing hotspot with consistent waves suitable for all levels. Relaxed vibe with beachfront cafes. 30 min drive.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/hirikatiya" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Nilwella Blue Beach</CardTitle>
                                <CardDescription>Beach that can campfire</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Blue-beach.jpg"
                                    alt="Large herd of elephants gathering at Minneriya National Park during dry season"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Famous for The Gathering - hundreds of elephants come together during dry season. 1 hour drive.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/nilwella-blue-beach" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Thalpe Beach */}
                        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg">Thalpe Beach</CardTitle>
                                <CardDescription>Coral wells & peaceful sands</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/Thalpe-beach.jpg"
                                    alt="Thalpe Beach coral wells and golden sand with turquoise water"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3 w-full object-cover aspect-[4/3] max-h-64"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Discover Thalpe Beach, just south of Galle. Famous for its unique coral wells natural pools carved into the reef this quiet beach is perfect for swimming at low tide, relaxing on golden sand, and enjoying local seafood.
                                </p>
                                <div className="mt-4 flex justify-start">
                                    <Link href="/destinations/thalpe-beach" passHref legacyBehavior>
                                        <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-full shadow-lg transition-all font-semibold text-base cursor-pointer">See More →</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </main>
    )
}
