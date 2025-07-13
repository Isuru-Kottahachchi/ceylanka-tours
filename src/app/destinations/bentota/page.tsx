"use client"
import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Waves, Sun, Palmtree, Fish, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

// Image carousel component
function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goToImage = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${alt} - Image ${currentIndex + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg transition-all duration-300"
                />

                {/* Navigation buttons */}
                {images.length > 1 && (
                    <>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </>
                )}
            </div>

            {/* Dots indicator */}
            {images.length > 1 && (
                <div className="flex justify-center mt-3 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            )}

            {/* Image counter */}
            {images.length > 1 && (
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    )
}

export default function BentotaGuide() {
    // Define images for Panchakapaduwa Island
    const panchakapaduwImages = [
        "/Panchakpaduwaisland.jpeg",
        "/placeholder.svg?height=300&width=400&text=Island+View+2",
        "/placeholder.svg?height=300&width=400&text=Temple+View",
        "/placeholder.svg?height=300&width=400&text=Meditation+Area",
        "/placeholder.svg?height=300&width=400&text=Island+Sunset",
    ]

    const seaTurtleImages = [
        "/Sea-turtle-bentota.jpeg",
        "/placeholder.svg?height=300&width=400&text=Island+View+2",
        "/placeholder.svg?height=300&width=400&text=Temple+View",
        "/placeholder.svg?height=300&width=400&text=Meditation+Area",
        "/placeholder.svg?height=300&width=400&text=Island+Sunset",
    ]

    const bentotaBeachImages = [
        "/Bentotabeach.jpeg",
        "/placeholder.svg?height=300&width=400&text=Island+View+2",
        "/placeholder.svg?height=300&width=400&text=Temple+View",
        "/placeholder.svg?height=300&width=400&text=Meditation+Area",
        "/placeholder.svg?height=300&width=400&text=Island+Sunset",
    ]

    //  const seaTurtleImages = [
    //     "/Sea-turtle-bentota.jpeg",
    //     "/placeholder.svg?height=300&width=400&text=Island+View+2",
    //     "/placeholder.svg?height=300&width=400&text=Temple+View",
    //     "/placeholder.svg?height=300&width=400&text=Meditation+Area",
    //     "/placeholder.svg?height=300&width=400&text=Island+Sunset",
    // ]

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
                            Bentota is Sri Lanka&apos;s premier beach destination, where pristine golden beaches meet world-class
                            luxury resorts. Located on the southwest coast, this tropical paradise offers the perfect blend of
                            relaxation, adventure, and natural beauty, making it a favorite among honeymooners, families, and water
                            sports enthusiasts.
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
                                    <ImageCarousel
                                        images={bentotaBeachImages}
                                        alt="Panchakapaduwa Island showing various views of the mystical island, temples, and meditation areas"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Bentota&apos;s main beach stretches for 5 kilometers of soft golden sand, protected by a coral
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
                                <CardTitle>3. Lunuganga Geoffrey Bawa Garden</CardTitle>
                                <CardDescription>
                                    Masterpiece of landscape architecture by Sri Lanka's renowned architect
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Lunuganga is the country home and garden of Geoffrey Bawa, Sri Lanka's most famous architect. This
                                            stunning landscape garden showcases Bawa's vision of tropical modernism and offers breathtaking
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
                                        <Link href="/blog/lunuganga-geoffrey-bawas-garden" className="text-blue-600 hover:underline">
                                            Read more about Lunuganga Garden
                                        </Link>
                                    </div>
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Lunuganga Geoffrey Bawa Garden with tropical landscaping and lagoon views"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
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
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>5. Five Raja Maha Temples in Bentota</CardTitle>
                                <CardDescription>Visit ancient temples with great historical significance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <Image
                                        src="/placeholder.svg?height=300&width=400"
                                        alt="Ancient Buddhist temple in Bentota with traditional architecture and religious statues"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            When you visit Bentota, you can explore five ancient temples with rich history: Wanawasa Rajamaha
                                            Viharaya, Galapatha Raja Maha Viharaya, and three others that showcase centuries of Buddhist
                                            heritage and architecture.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Ancient tunnel systems used by monks
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Meditation sessions available
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Historical and cultural significance
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>6. Sea Turtle Hatchery</CardTitle>
                                <CardDescription>Conservation center protecting endangered sea turtles</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={seaTurtleImages}
                                        alt="Panchakapaduwa Island showing various views of the mystical island, temples, and meditation areas"
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

                        <Card>
                            <CardHeader>
                                <CardTitle>7. Panchakapaduwa Island</CardTitle>
                                <CardDescription>A mystical island separated from the mainland with ancient history</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={panchakapaduwImages}
                                        alt="Panchakapaduwa Island showing various views of the mystical island, temples, and meditation areas"
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
                                        <li>&bull; Tuk-tuk: Most convenient for short distances</li>
                                        <li>&bull; Hotel shuttles: Many resorts provide transport</li>
                                        <li>&bull; Bicycle rental: Great for exploring locally</li>
                                        <li>&bull; Walking: Beach area is pedestrian-friendly</li>
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
                                <CardTitle className="text-lg">Lunuwila Geoffrey Bawa Garden</CardTitle>
                                <CardDescription>Architectural masterpiece with stunning views</CardDescription>
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
                                    Explore the stunning Lunuwila Geoffrey Bawa Garden, a masterpiece of landscape architecture. This
                                    garden offers breathtaking views of the surrounding hills and the Indian Ocean. It is a perfect spot
                                    for photography and relaxation, just 30 minutes from Bentota.
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
                                    alt="Kande Viharaya Buddhist temple with ancient architecture and religious significance"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Historic Buddhist temple with ancient architecture and significant religious importance. Features
                                    traditional Sri Lankan temple design and peaceful meditation areas.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Bawa Garden Kalawila</CardTitle>
                                <CardDescription>Beautiful garden with diverse flora</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/placeholder.svg?height=200&width=300"
                                    alt="Bawa Garden Kalawila with tropical plants and landscape design"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Another beautiful garden showcasing tropical landscape design with diverse flora and peaceful walking
                                    paths. Perfect for nature lovers and photography enthusiasts.
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
                                Welcome to Bentota  where every day feels like a tropical dream! 🏖️🌊
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
