import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Waves, Sun, Palmtree, Fish } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Bentota Sri Lanka: Complete Beach Guide 2025 | Golden Beaches & Water Sports Paradise",
    description:
        "Discover Bentota, Sri Lanka&apos;s premier beach destination. Complete guide with beaches, water sports, hotels, restaurants, and everything you need to know.",
    keywords:
        "Bentota Sri Lanka, beaches, water sports, surfing, jet skiing, turtle hatchery, Bentota River, beach resorts",
    openGraph: {
        title: "Bentota Beach: Complete Travel Guide 2025",
        description: "Your ultimate guide to Sri Lanka's golden beach paradise",
        type: "article",
        images: ["/placeholder.svg?height=630&width=1200"],
    },
}

export default function BentotaGuide() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Bentotabeach.jpeg"
                    alt="Pristine Bentota beach with golden sand, turquoise waters, palm trees and luxury resorts along the coastline"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Bentota Beach</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Golden Coast Paradise</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            Southern Province, West Coast
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <Waves className="w-4 h-4 mr-1" />
                            Premium Beach Resort
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <Sun className="w-4 h-4 mr-1" />
                            Year-Round Sunshine
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Welcome to Bentota: Where Golden Sands Meet Luxury
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Bentota is Sri Lanka&apos;s premier beach destination, where pristine golden beaches meet world-class luxury
                            resorts. Located on the southwest coast, this tropical paradise offers the perfect blend of relaxation,
                            adventure, and natural beauty, making it a favorite among honeymooners, families, and water sports
                            enthusiasts.
                        </p>
                        <p className="text-lg">
                            From thrilling water sports on the Bentota River to peaceful turtle watching at nearby hatcheries, from
                            luxurious spa treatments to fresh seafood dining, Bentota provides the ultimate tropical beach experience
                            with Sri Lankan warmth and hospitality.
                        </p>
                    </div>
                </section>

                {/* Ad Space */}
                <div className="my-8 p-4 bg-muted/50 rounded-lg text-center text-muted-foreground border-2 border-dashed border-muted-foreground/30">
                    [Advertisement Space - 728x90 Leaderboard]
                </div>

                {/* Quick Facts */}
                <section className="mb-12">
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
                </section>

                {/* Top Attractions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Top Attractions in Bentota</h2>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. Bentota Beach</CardTitle>
                                <CardDescription>5km of pristine golden sand and crystal-clear waters</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/Bentotabeach.jpeg"
                                        alt="Bentota beach with golden sand, clear blue water, palm trees and beachgoers enjoying the sun"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Bentota&apos;s main beach stretches for 5 kilometers of soft golden sand, protected by a coral reef
                                            that keeps the waters calm and perfect for swimming. The beach is lined with luxury resorts and
                                            offers excellent facilities for visitors.
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
                                <CardTitle>2. Bentota River & Water Sports</CardTitle>
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
                                    </div>
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Exciting water sports on Bentota River with jet skis, boats and mangrove forests in background"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>3. Lunuganga  Geoffrey Bawa Garden</CardTitle>
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
                                        <p>For more details about this, read this article.</p>
                                        <Link href="/blog/lunuganga-geoffrey-bawas-garden">Read more</Link>
                                    </div>
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Exciting water sports on Bentota River with jet skis, boats and mangrove forests in background"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>3. Bentota River Safari</CardTitle>
                                <CardDescription>Explore the mangroves and wildlife along the Bentota River</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/Bentota Fisherman's Village"
                                        alt="Baby sea turtles at Bentota turtle hatchery with conservation staff and visitors learning about protection"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Kosgoda Sea Turtle Conservation Project, just 10 minutes from Bentota, protects five species
                                            of sea turtles. Visitors can learn about conservation efforts and even participate in releasing
                                            baby turtles into the ocean.
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
                           <Card>
                            <CardHeader>
                                <CardTitle>3. Five Raja Maha Temples in Bentota</CardTitle>
                                <CardDescription>Visit ancient temples with  a great history</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/Bentota Fisherman's Village"
                                        alt="Baby sea turtles at Bentota turtle hatchery with conservation staff and visitors learning about protection"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                           When you visit Bentota you can visit five ancient temples with a great history. These temples are Wanawasa rajamaha viharaya, Galaptha 
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                               Ancient Tunnel system used by monks back in the day
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Meditation sessions
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


                        <Card>
                            <CardHeader>
                                <CardTitle>3. Sea Turtle Hatchery</CardTitle>
                                <CardDescription>Conservation center protecting endangered sea turtles</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/Sea-turtle-bentota.jpeg"
                                        alt="Baby sea turtles at Bentota turtle hatchery with conservation staff and visitors learning about protection"
                                        width={300}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Kosgoda Sea Turtle Conservation Project, just 10 minutes from Bentota, protects five species
                                            of sea turtles. Visitors can learn about conservation efforts and even participate in releasing
                                            baby turtles into the ocean.
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
                         <Card>
                            <CardHeader>
                                <CardTitle>3. Panchakapaduwa Island</CardTitle>
                                <CardDescription>An island that was separted from the mainland back in the day</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/Sea-turtle-bentota.jpeg"
                                        alt="Baby sea turtles at Bentota turtle hatchery with conservation staff and visitors learning about protection"
                                        width={300}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            The Kosgoda Sea Turtle Conservation Project, just 10 minutes from Bentota, protects five species
                                            of sea turtles. Visitors can learn about conservation efforts and even participate in releasing
                                            baby turtles into the ocean.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                               Meditaion sessions
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
                </section>

                {/* Ad Space */}
                <div className="my-8 p-4 bg-muted/50 rounded-lg text-center text-muted-foreground border-2 border-dashed border-muted-foreground/30">
                    [Advertisement Space - 300x250 Medium Rectangle]
                </div>

                {/* Luxury Resorts */}
                <section className="mb-12">
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
                </section>

                {/* Water Sports & Activities */}
                <section className="mb-12">
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
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Best Restaurants & Dining</h2>
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
                                    <h4 className="font-semibold mb-1">The Lagoons,Bentota</h4>
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

                {/* Getting There */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Getting to Bentota</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Transportation Options</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">From Colombo Airport</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Private transfer: 1.5-2 hours ($40-60)</li>
                                        <li>• Taxi: 1.5-2 hours ($35-50)</li>
                                        <li>• Airport shuttle: 2-2.5 hours ($15-25)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">From Colombo City</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Train: 2-2.5 hours ($2-5)</li>
                                        <li>• Bus: 2-3 hours ($1-3)</li>
                                        <li>• Private car: 1.5-2 hours</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Local Transportation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Getting Around Bentota</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Tuk-tuk: Most convenient for short distances</li>
                                        <li>• Hotel shuttles: Many resorts provide transport</li>
                                        <li>• Bicycle rental: Great for exploring locally</li>
                                        <li>• Walking: Beach area is pedestrian-friendly</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day Trip Options</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Galle Fort: 45 minutes south</li>
                                        <li>• Hikkaduwa: 30 minutes south</li>
                                        <li>• Colombo: 1.5 hours north</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Best Time to Visit */}
                <section className="mb-12">
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
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">What Else to See Nearby</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Lunuwila Gefry Bawas Garden</CardTitle>
                                <CardDescription>Best views of Galle</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/jungle-beach.jpeg"
                                    alt="View of Jungle Beach"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Explore the scenic Jungle Beach with its lush greenery and clear waters. Perfect for a relaxing day trip.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Kande Viharaya</CardTitle>
                                <CardDescription>Historic Buddhist temple</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/placeholder.svg?height=200&width=300"
                                    alt="Dambulla Cave Temple showing ancient Buddhist statues and paintings inside rock caves"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3"
                                />
                                <p className="text-sm text-muted-foreground">
                                    UNESCO site with 5 cave temples filled with Buddha statues and ancient paintings. 20 minutes away.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Baws Garden Kalawila</CardTitle>
                                <CardDescription>Beautiful garden with diverse flora</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/placeholder.svg?height=200&width=300"
                                    alt="Large herd of elephants gathering at Minneriya National Park during dry season"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Famous for The Gathering - hundreds of elephants come together during dry season. 1 hour drive.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Final Tips */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-blue-800">Your Bentota Beach Paradise</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Bentota offers the perfect blend of relaxation and adventure, luxury and authenticity. Whether you&apos;re
                                seeking thrilling water sports, romantic beachfront dinners, or simply want to unwind on pristine golden
                                sands, this coastal paradise delivers unforgettable experiences.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                Don&apos;t miss the opportunity to support local conservation efforts at the turtle hatchery, explore the
                                mangrove ecosystems of the Bentota River, and indulge in fresh seafood while watching spectacular
                                sunsets over the Indian Ocean.
                            </p>
                            <p className="text-muted-foreground font-medium">
                                Welcome to Bentota – where every day feels like a tropical dream! 🏖️🌊
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
