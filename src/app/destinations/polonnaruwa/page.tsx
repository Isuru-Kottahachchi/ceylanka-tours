"use client"

import Image from "next/image"
import { useState } from "react"
import { Clock, MapPin, CheckCircle, Star, Calendar, Users, Crown, ChevronRight, ChevronLeft, Car } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// metadata moved to metadata.ts for Next.js compliance

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
            <div className="relative overflow-hidden rounded-lg h-[500px] md:h-[500px] sm:h-[350px] flex items-center justify-center">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${alt} ${images.length > 1 ? `(${currentIndex + 1} of ${images.length})` : ''}`}
                    width={400}
                    height={300}
                    className="rounded-lg transition-all duration-300 object-contain w-full h-full"
                />

                {/* Navigation buttons */}
                {images.length > 1 && (
                    <>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-4 w-4 text-gray-800 dark:text-gray-200" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white/90 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer border-gray-200 dark:border-gray-600"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-4 w-4 text-gray-800 dark:text-gray-200" />
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

export default function PolonnaruwaGuide() {


    const polonnaruwaImages = [
        "/Polonnaruwa2.jpeg",
        "/Polonnaruwa3.jpeg",
    ]

    const galviharayaImages = [
        "/Galviharaya.jpeg",
        "/Galviharaya2.jpeg",
        "/Galviharaya3.jpeg",
        "/Galviharaya4.jpeg",
        "/Galviharaya5.jpeg"
    ]

    const rankothveheraImages = [
        "/Rankothvehera.jpeg",
        "/Rankothvehera1.jpeg",
        "/Rankothvehera2.jpeg",
        "/Rankothvehera3.jpeg",
        "/Rankothvehera4.jpeg",
        "/Rankothvehera5.jpeg",
    ]

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
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <MapPin className="w-4 h-4 mr-1" />
                            North Central Province
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <Crown className="w-4 h-4 mr-1" />
                            Medieval Capital
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            <Calendar className="w-4 h-4 mr-1" />
                            11th-13th Century AD
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-8">
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
                <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
                    [Advertisement Space - 728x90 Leaderboard]
                </div>

                {/* Quick Facts */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                Essential Polonnaruwa Facts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
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
                                </div>
                                <div className="space-y-3">
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
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* How to Get In */}
                <section className="mb-12">
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
                            <div className="mt-4">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                        <h5 className="font-medium text-blue-800 dark:text-blue-200">Entrance Fee</h5>
                                        <p className="text-sm text-blue-600 dark:text-blue-300">$25 USD for foreign visitors</p>
                                        <p className="text-xs text-muted-foreground">Includes site access and museum</p>
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
                </section>

                <section className="mb-12">
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
                </section>
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
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Royal Palace Complex & Administrative Buildings</h2>

                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>1. Royal Palace of King Parakramabahu I</CardTitle>
                                <CardDescription>Magnificent seven-story palace complex</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel
                                        images={polonnaruwaImages}
                                        alt="Royal Palace Complex of Polonnaruwa showing various views of the ancient palace ruins and architectural details"
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
                                        <Link href="/destinations/parakkramabahu-royal-palace">
                                            <Button
                                                className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                                                variant="default"
                                            >
                                                Explore Royal Palace Complex
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>2. Audience Hall (Nissanka Latha Mandapaya)</CardTitle>
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
                                        <Link href="/destinations/audience-hall-polonnaruwa">
                                            <Button
                                                className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                                                variant="default"
                                            >
                                                Visit Nissanka Latha Mandapaya
                                            </Button>
                                        </Link>
                                    </div>
                                    <Image
                                        src="/placeholder.svg?height=300&width=400&text=Lotus+Pillars"
                                        alt="Unique lotus-shaped stone pillars of the Audience Hall at Polonnaruwa"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Ad Space */}
                <div className="my-8 p-4 bg-gray-50 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
                    [Advertisement Space - 300x250 Medium Rectangle]
                </div>

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
                                        alt="Gal Vihara showing various views of the rock temple and Buddha statues"
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
                                        <Link href="/destinations/gal-vihara">
                                            <Button
                                                className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                                                variant="default"
                                            >
                                                Explore Gal Vihara Rock Temple
                                            </Button>
                                        </Link>
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
                                    images={["/PolonnaruwaVatadageya.jpg", "/PolonnaruwaVatadageya2.jpg", "/PolonnaruwaVatadageya3.jpg"]}
                                    alt="Polonnaruwa Vatadageya showing various views of the circular relic house and stone carvings"
                                />
                                <div>
                                    <p className="text-muted-foreground mb-4">
                                        The Polonnaruwa Vatadageya is one of Sri Lanka&apos;s most iconic ancient structures—a circular relic house built to protect sacred Buddhist relics. Dating to the 12th century, it features concentric stone platforms, beautifully carved guard stones, and a famous moonstone at the entrance. Four Buddha statues face the cardinal directions, symbolizing protection and enlightenment.
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
                                    </ul>
                                    <Link href="/destinations/polonnaruwa-vatadageya">
                                        <Button
                                            className="mt-2 bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white border-none cursor-pointer"
                                            variant="default"
                                        >
                                            Explore Polonnaruwa Vatadageya
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>4. Rankoth Vehera</CardTitle>
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
                                        <Link href="/destinations/rankoth-vehera">
                                            <Button
                                                className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                                                variant="default"
                                            >
                                                Visit Rankoth Vehera Dagoba
                                            </Button>
                                        </Link>
                                    </div>
                                    <ImageCarousel
                                        images={rankothveheraImages}
                                        alt="Rankoth Vehera showing the large dagoba and surrounding ruins"
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
                                    <Image
                                        src="/placeholder.svg?height=300&width=400&text=Lankatilaka+Temple"
                                        alt="Towering brick walls of Lankatilaka temple with massive Buddha statue inside"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
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
                                        <Link href="/destinations/lankatilaka-temple">
                                            <Button
                                                className="mt-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white border-none cursor-pointer"
                                                variant="default"
                                            >
                                                Discover Lankatilaka Image House
                                            </Button>
                                        </Link>
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
                                <CardTitle className="text-green-600">Lotus Bath (Nelum Pokuna)</CardTitle>
                                <CardDescription>Royal bathing pool</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Image
                                    src="/placeholder.svg?height=200&width=350&text=Lotus+Bath"
                                    alt="Lotus-shaped stone bathing pool with eight-petaled design at Polonnaruwa"
                                    width={350}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <div>
                                    <h4 className="font-semibold mb-2">Architectural Artistry</h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        This unique eight-petaled lotus-shaped bath showcases the artistic sophistication of royal architecture.
                                    </p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Eight-petaled lotus design</li>
                                        <li>• Carved from solid stone</li>
                                        <li>• Underground water supply system</li>
                                        <li>• Symbol of purity and enlightenment</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Nearby Archaeological Sites</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/destinations/sigiriya-rock-fortress" className="block hover:shadow-md transition-shadow duration-200">
                            <Card className="cursor-pointer">
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
                                        className="rounded-lg mb-3"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        The famous Lion Rock fortress, just 1.5 hours from Polonnaruwa, showcasing 5th-century royal architecture.
                                    </p>
                                    <span className="text-sm font-medium text-primary mt-3 inline-block">
                                        See More →
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/destinations/minneriya-national-park" className="block hover:shadow-md transition-shadow duration-200">
                            <Card className="cursor-pointer">
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
                                        className="rounded-lg mb-3"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Witness one of the world&apos;s largest elephant gathering, just 30 minutes from Polonnaruwa.
                                    </p>
                                    <span className="text-sm font-medium text-primary mt-3 inline-block">
                                        See More →
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Medirigiriya Vatadage</CardTitle>
                                <CardDescription>Circular relic house</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/placeholder.svg?height=200&width=300&text=Medirigiriya+Vatadage"
                                    alt="Circular stone structure of Medirigiriya Vatadage with concentric terraces"
                                    width={300}
                                    height={200}
                                    className="rounded-lg mb-3"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Well-preserved circular relic house with intricate stone carvings, 30 km from Polonnaruwa.
                                </p>
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
