"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Waves, Car, Sun } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"

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

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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

                {/* Quick Facts */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                Quick Unawatuna Facts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
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
                                </div>
                                <div className="space-y-3">
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
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

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
            </div>
        </main>
    )
}
