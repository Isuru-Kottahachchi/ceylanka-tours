"use client"
import Image from "next/image"
import { AlertTriangle, Waves, Shield, Phone, Clock, Heart, Eye, ChevronRight, Compass, ChevronLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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
            <div className="relative overflow-hidden rounded-lg h-[250px] md:h-[300px] sm:h-[200px] flex items-center justify-center">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${alt} - Image ${currentIndex + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg transition-all duration-300 object-cover w-full h-full"
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

export default function BeachSafetyGuide() {
    // Define images for dangerous sea creatures
    const lionFishImages = [
        "/Lionfish.jpeg",
        "/Lionfish.jpg",
        "/Lionfish1.jpeg",
    ]

    const stoneFishImages = [
        "/Stonefish.jpg",
        "/Stonefish1.jpg",
    ]

    const jellyfishImages = [
        "/placeholder.svg?height=300&width=400&text=Box+Jellyfish",
        "/placeholder.svg?height=300&width=400&text=Moon+Jellyfish",
        "/placeholder.svg?height=300&width=400&text=Jellyfish+Tentacles",
        "/placeholder.svg?height=300&width=400&text=Jellyfish+Beach+Warning"
    ]

    const seaSnakeImages = [
        "/placeholder.svg?height=300&width=400&text=Sea+Snake+Swimming",
        "/placeholder.svg?height=300&width=400&text=Sea+Snake+Banded+Pattern",
        "/placeholder.svg?height=300&width=400&text=Sea+Snake+Surface+Breathing",
        "/placeholder.svg?height=300&width=400&text=Sea+Snake+Size+Comparison"
    ]

    const seaUrchinImages = [
        "/placeholder.svg?height=300&width=400&text=Sea+Urchin+Spines",
        "/placeholder.svg?height=300&width=400&text=Sea+Urchin+Rock+Pool",
        "/placeholder.svg?height=300&width=400&text=Sea+Urchin+Black+Spines",
        "/placeholder.svg?height=300&width=400&text=Sea+Urchin+Foot+Injury"
    ]

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/stockvault-sunset-at-sri-lanka-southern-beach280430.jpg"
                    alt="Sri Lankan beach with waves showing potential rip current dangers"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Beach Safety in Sri Lanka</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Stay Safe from Dangerous Waves and Currents</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-red-600/80 text-white border-red-500">
                            <Waves className="w-4 h-4 mr-1" />
                            Rip Currents
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-600/80 text-white border-orange-500">
                            <AlertTriangle className="w-4 h-4 mr-1" />
                            Cross Seas
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600/80 text-white border-blue-500">
                            <Shield className="w-4 h-4 mr-1" />
                            Safety Tips
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Emergency Alert */}
                <Alert className="mb-8 border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-950/30">
                    <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertTitle className="text-red-800 dark:text-red-300">Beach Emergency Numbers</AlertTitle>
                    <AlertDescription className="text-red-700 dark:text-red-200">
                        <strong>Emergency: 119 or 110</strong>| <strong>Ambulance Service: 1990</strong> | <strong>Coast Guard: 071-217-6543</strong> | <strong>Navy: 011-244-5368</strong>
                        <br />
                        If someone is drowning, call for help immediately and throw something that floats!
                    </AlertDescription>
                </Alert>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                        Why Beach Safety is Important in Sri Lanka
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Sri Lanka has beautiful beaches, but the ocean can be very dangerous. Every year, many people
                            get hurt or drown because they don&apos;t know about sea dangers. This guide will help you stay safe.
                        </p>
                        <p className="text-lg mb-4">
                            The sea around Sri Lanka has strong currents, big waves, and dangerous areas. Even good swimmers
                            can get into trouble if they don&apos;t know what to watch for.
                        </p>
                        <p className="text-lg">
                            Remember: You might be a good swimmer, but the ocean is much stronger than any person. Always respect the sea and never swim alone.
                        </p>
                    </div>
                </section>

                {/* Dangerous Sea Conditions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400">Most Dangerous Sea Conditions</h2>
                    <div className="space-y-6">

                        {/* Rip Currents */}
                        <Card className="border-red-300 bg-red-50/30 dark:bg-red-950/30 dark:border-red-700">
                            <CardHeader>
                                <CardTitle className="text-red-800 dark:text-red-400 flex items-center gap-2">
                                    <Waves className="w-5 h-5" />
                                    1. Rip Currents - The Silent Killer
                                </CardTitle>
                                <CardDescription className="text-red-600 dark:text-red-300">Strong water flow that pulls you away from shore</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Rip+Current+Diagram"
                                            alt="Diagram showing how rip currents pull swimmers away from beach"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">What is a rip current:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Fast moving water going away from beach</li>
                                            <li>• Can pull you out to deep water very quickly</li>
                                            <li>• Even strong swimmers can&apos;t swim against it</li>
                                            <li>• Most dangerous thing at the beach</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">How to spot rip currents:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Channel of churning, choppy water</li>
                                            <li>• Line of foam or debris moving seaward</li>
                                            <li>• Different colored water (usually darker)</li>
                                            <li>• Gap in incoming wave pattern</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100 dark:bg-red-950/40 dark:border-red-600">
                                            <AlertDescription className="text-red-800 dark:text-red-300 text-sm">
                                                <strong>If caught in rip current:</strong> Don&apos;t panic! Don&apos;t try to swim straight back.
                                                Swim parallel to shore until you escape, then swim back at an angle.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Cross Seas */}
                        <Card className="border-red-300 bg-red-50/30 dark:bg-red-950/30 dark:border-red-700">
                            <CardHeader>
                                <CardTitle className="text-red-800 dark:text-red-400 flex items-center gap-2">
                                    <Compass className="w-5 h-5" />
                                    2. Cross Seas - Confused Waves
                                </CardTitle>
                                <CardDescription className="text-red-600 dark:text-red-300">When waves come from different directions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Cross+Sea+Waves"
                                            alt="Cross sea wave pattern showing waves from multiple directions"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">What are cross seas:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Waves coming from 2 or more directions</li>
                                            <li>• Creates square or diamond wave patterns</li>
                                            <li>• Very unpredictable and dangerous</li>
                                            <li>• Can happen during monsoon changes</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">Why they&apos;re dangerous:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Waves can hit you from any direction</li>
                                            <li>• Creates strong underwater currents</li>
                                            <li>• Very hard to swim in these conditions</li>
                                            <li>• Can push you underwater suddenly</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100 dark:bg-red-950/40 dark:border-red-600">
                                            <AlertDescription className="text-red-800 dark:text-red-300 text-sm">
                                                <strong>Cross Sea Warning:</strong> If you see square wave patterns,
                                                stay out of the water completely. These conditions are extremely dangerous.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Large Waves and Undertow */}
                        <Card className="border-red-300 bg-red-50/30 dark:bg-red-950/30 dark:border-red-700">
                            <CardHeader>
                                <CardTitle className="text-red-800 dark:text-red-400 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    3. Big Waves and Undertow
                                </CardTitle>
                                <CardDescription className="text-red-600 dark:text-red-300">Strong waves that can knock you down and pull you under</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Large+Wave+Undertow"
                                            alt="Large wave showing undertow current beneath"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">Dangerous wave conditions:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Waves higher than 1 meter (3 feet)</li>
                                            <li>• Waves breaking close to shore</li>
                                            <li>• Strong white water and foam</li>
                                            <li>• Undertow pulling sand and debris</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">What undertow does:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• Pulls water back under incoming waves</li>
                                            <li>• Can knock you off your feet</li>
                                            <li>• Drags you along the bottom</li>
                                            <li>• Makes it hard to stand up</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100 dark:bg-red-950/40 dark:border-red-600">
                                            <AlertDescription className="text-red-800 dark:text-red-300 text-sm">
                                                <strong>Wave Safety:</strong> If waves are breaking at knee height or higher,
                                                be very careful. Large waves can easily knock you down and drag you out.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Monsoon Conditions */}
                        <Card className="border-red-300 bg-red-50/30 dark:bg-red-950/30 dark:border-red-700">
                            <CardHeader>
                                <CardTitle className="text-red-800 dark:text-red-400 flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    4. Monsoon Season Dangers
                                </CardTitle>
                                <CardDescription className="text-red-600 dark:text-red-300">Seasonal changes that make beaches very dangerous</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=400&text=Monsoon+Beach+Storm"
                                            alt="Beach during monsoon showing rough seas and dangerous conditions"
                                            width={400}
                                            height={300}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">Southwest Monsoon (May-September):</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• West and south coast beaches dangerous</li>
                                            <li>• Very big waves and strong currents</li>
                                            <li>• Hikkaduwa, Unawatuna, Mirissa unsafe</li>
                                            <li>• East coast (Arugam Bay, Pasikuda) safer</li>
                                        </ul>
                                        <h4 className="font-semibold mb-3 text-red-800 dark:text-red-400">Northeast Monsoon (October-February):</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <li>• East and north coast beaches dangerous</li>
                                            <li>• Trincomalee, Nilaveli unsafe</li>
                                            <li>• West coast (Negombo, Bentota) safer</li>
                                            <li>• South coast generally okay</li>
                                        </ul>
                                        <Alert className="border-red-400 bg-red-100 dark:bg-red-950/40 dark:border-red-600">
                                            <AlertDescription className="text-red-800 dark:text-red-300 text-sm">
                                                <strong>Monsoon Rule:</strong> Always check local conditions and ask lifeguards.
                                                Monsoon seasons make normal beaches deadly.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Beach Safety Tips */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">How to Stay Safe at the Beach</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-green-300 bg-green-50/30 dark:border-green-600 dark:bg-green-950/20">
                            <CardHeader>
                                <CardTitle className="text-green-800 dark:text-green-300 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    Before You Go Swimming
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Check conditions:</strong> Look for waves, currents, and weather</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Find lifeguards:</strong> Swim only where lifeguards are present</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Ask locals:</strong> They know which areas are safe</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Never swim alone:</strong> Always have someone watching you</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Know your limits:</strong> Don&apos;t go deeper than waist level</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span><strong>Check escape routes:</strong> Know how to get back to shore</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-300 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-950/20">
                            <CardHeader>
                                <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                                    <Eye className="w-5 h-5" />
                                    What to Watch For
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Red flags:</strong> Means no swimming allowed</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Foam lines:</strong> Often show where rip currents are</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Choppy water:</strong> Sign of dangerous currents</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Birds diving:</strong> May show where currents meet</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Dark channels:</strong> Often deeper water and rip currents</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                        <span><strong>Square waves:</strong> Cross sea patterns - stay out!</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Dangerous Sea Creatures Section */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-6 text-orange-800 dark:text-orange-400">Dangerous Sea Creatures in Shallow Water</h3>
                        <p className="text-muted-foreground mb-6">
                            These dangerous creatures can be found in shallow waters around Sri Lanka. Learn to identify them to stay safe while swimming and snorkeling.
                        </p>

                        {/* Individual Creature Cards with Carousels */}
                        <div className="space-y-8">
                            {/* Lion Fish */}
                            <Card className="border-orange-300 bg-orange-50/30 dark:border-orange-600 dark:bg-orange-950/20">
                                <CardHeader>
                                    <CardTitle className="text-orange-800 dark:text-orange-400 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        Lion Fish - Beautiful but Deadly
                                    </CardTitle>
                                    <CardDescription className="text-orange-600 dark:text-orange-300">
                                        Recognize this venomous fish by its distinctive appearance
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <ImageCarousel
                                            images={lionFishImages}
                                            alt="Lion Fish identification showing different views and characteristics"
                                        />
                                        <div>
                                            <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-300">How to Identify Lion Fish:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300 mb-4">
                                                <li>• <strong>Colors:</strong> Red, orange, and white striped pattern</li>
                                                <li>• <strong>Spines:</strong> Long, fan-like venomous spines</li>
                                                <li>• <strong>Size:</strong> 15-45 cm long</li>
                                                <li>• <strong>Habitat:</strong> Coral reefs and rocky areas</li>
                                                <li>• <strong>Behavior:</strong> Slow-moving, doesn&apos;t flee from humans</li>
                                            </ul>
                                            <Alert className="border-orange-400 bg-orange-100 dark:border-orange-600 dark:bg-orange-950/30">
                                                <AlertDescription className="text-orange-800 dark:text-orange-300 text-sm">
                                                    <strong>Danger:</strong> Sting causes extreme pain, swelling, and can lead to infection.
                                                    Never approach or touch these beautiful but deadly fish!
                                                </AlertDescription>
                                            </Alert>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Stone Fish */}
                            <Card className="border-red-300 bg-red-50/30 dark:border-red-600 dark:bg-red-950/20">
                                <CardHeader>
                                    <CardTitle className="text-red-800 dark:text-red-400 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        Stone Fish - Master of Camouflage
                                    </CardTitle>
                                    <CardDescription className="text-red-600 dark:text-red-300">
                                        World&apos;s most venomous fish - extremely hard to spot
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <ImageCarousel
                                            images={stoneFishImages}
                                            alt="Stone Fish camouflaged on reef showing how they hide among rocks and coral"
                                        />
                                        <div>
                                            <h4 className="font-semibold mb-3 text-red-800 dark:text-red-300">How to Identify Stone Fish:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300 mb-4">
                                                <li>• <strong>Appearance:</strong> Looks exactly like a rock or coral</li>
                                                <li>• <strong>Colors:</strong> Brown, gray, or mottled patterns</li>
                                                <li>• <strong>Size:</strong> 15-40 cm long</li>
                                                <li>• <strong>Texture:</strong> Bumpy, warty skin surface</li>
                                                <li>• <strong>Location:</strong> Shallow reefs, tide pools, sandy bottoms</li>
                                            </ul>
                                            <Alert className="border-red-400 bg-red-100 dark:border-red-600 dark:bg-red-950/30">
                                                <AlertDescription className="text-red-800 dark:text-red-300 text-sm">
                                                    <strong>Extreme Danger:</strong> Stepping on a stone fish can be fatal!
                                                    Always wear water shoes and never step on rocks or coral.
                                                </AlertDescription>
                                            </Alert>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Jellyfish */}
                            <Card className="border-purple-300 bg-purple-50/30 dark:border-purple-600 dark:bg-purple-950/20">
                                <CardHeader>
                                    <CardTitle className="text-purple-800 dark:text-purple-400 flex items-center gap-2">
                                        <Waves className="w-5 h-5" />
                                        Jellyfish - Transparent Danger
                                    </CardTitle>
                                    <CardDescription className="text-purple-600 dark:text-purple-300">
                                        Various species with different levels of danger
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <ImageCarousel
                                            images={jellyfishImages}
                                            alt="Different types of jellyfish found in Sri Lankan waters"
                                        />
                                        <div>
                                            <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-300">How to Identify Jellyfish:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300 mb-4">
                                                <li>• <strong>Body:</strong> Transparent, bell or umbrella-shaped</li>
                                                <li>• <strong>Tentacles:</strong> Long, trailing stinging arms</li>
                                                <li>• <strong>Movement:</strong> Float and pulse through water</li>
                                                <li>• <strong>Colors:</strong> Clear, white, blue, or pink</li>
                                                <li>• <strong>Size:</strong> From tiny to 30cm+ diameter</li>
                                            </ul>
                                            <Alert className="border-purple-400 bg-purple-100 dark:border-purple-600 dark:bg-purple-950/30">
                                                <AlertDescription className="text-purple-800 dark:text-purple-300 text-sm">
                                                    <strong>Warning:</strong> Can sting even when dead on the beach.
                                                    Some species cause severe burns and systemic reactions.
                                                </AlertDescription>
                                            </Alert>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sea Snakes */}
                            <Card className="border-blue-300 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-950/20">
                                <CardHeader>
                                    <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                                        <Waves className="w-5 h-5" />
                                        Sea Snakes - Marine Serpents
                                    </CardTitle>
                                    <CardDescription className="text-blue-600 dark:text-blue-300">
                                        Highly venomous but generally docile marine reptiles
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <ImageCarousel
                                            images={seaSnakeImages}
                                            alt="Sea snakes showing banded patterns and swimming behavior"
                                        />
                                        <div>
                                            <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-300">How to Identify Sea Snakes:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300 mb-4">
                                                <li>• <strong>Pattern:</strong> Black and white or yellow banded stripes</li>
                                                <li>• <strong>Tail:</strong> Flattened paddle-like tail for swimming</li>
                                                <li>• <strong>Size:</strong> 1-2 meters long</li>
                                                <li>• <strong>Behavior:</strong> Surface regularly to breathe air</li>
                                                <li>• <strong>Movement:</strong> Graceful swimming, can&apos;t move on land</li>
                                            </ul>
                                            <Alert className="border-blue-400 bg-blue-100 dark:border-blue-600 dark:bg-blue-950/30">
                                                <AlertDescription className="text-blue-800 dark:text-blue-300 text-sm">
                                                    <strong>Important:</strong> Very venomous but rarely aggressive.
                                                    Don&apos;t try to handle or catch them - just swim away calmly.
                                                </AlertDescription>
                                            </Alert>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sea Urchins */}
                            <Card className="border-gray-300 bg-gray-50/30 dark:border-gray-600 dark:bg-gray-950/20">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 dark:text-gray-300 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" />
                                        Sea Urchins - Spiny Bottom Dwellers
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 dark:text-gray-400">
                                        Sharp-spined creatures that hide in rocks and coral
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <ImageCarousel
                                            images={seaUrchinImages}
                                            alt="Sea urchins showing dangerous spines and typical hiding spots"
                                        />
                                        <div>
                                            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-300">How to Identify Sea Urchins:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300 mb-4">
                                                <li>• <strong>Appearance:</strong> Round ball covered in sharp spines</li>
                                                <li>• <strong>Colors:</strong> Black, dark purple, or brown</li>
                                                <li>• <strong>Size:</strong> 5-15 cm diameter with long spines</li>
                                                <li>• <strong>Location:</strong> Rock pools, coral crevices, shallow reefs</li>
                                                <li>• <strong>Behavior:</strong> Stay attached to rocks, don&apos;t move much</li>
                                            </ul>
                                            <Alert className="border-gray-400 bg-gray-100 dark:border-gray-600 dark:bg-gray-950/30">
                                                <AlertDescription className="text-gray-800 dark:text-gray-300 text-sm">
                                                    <strong>Painful Injury:</strong> Spines break off in skin and are very hard to remove.
                                                    Can cause infection and intense pain for days or weeks.
                                                </AlertDescription>
                                            </Alert>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Protection Tips */}
                        <Card className="mt-6 border-blue-300 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-900/20">
                            <CardHeader>
                                <CardTitle className="text-blue-800 dark:text-blue-300 flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    How to Protect Yourself from Sea Creatures
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-300">Prevention Tips:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Wear water shoes:</strong> Essential protection from stone fish, sea urchins, and sharp coral</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Don&apos;t touch anything:</strong> Coral, rocks, or marine life can be dangerous</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Avoid rock pools:</strong> Sea urchins hide in crevices and shallow areas</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Stay in designated areas:</strong> Swim where lifeguards patrol</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Check before entering:</strong> Look for jellyfish warnings and creature alerts</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-300">What to Do if Stung/Injured:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Get out of water:</strong> Move to shore immediately</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Don&apos;t rub the area:</strong> This makes venom spread more</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Sea urchin spines:</strong> Soak in warm water, don&apos;t try to remove deeply embedded spines</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Remove tentacles:</strong> Use tweezers, not bare hands</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                                <span><strong>Seek medical help:</strong> Call emergency services immediately</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Emergency Response */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-400">What to Do in Water Emergency</h2>
                    <div className="space-y-6">
                        <Alert className="border-red-400 bg-red-100 dark:border-red-600 dark:bg-red-950/30">
                            <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                            <AlertTitle className="text-red-800 dark:text-red-300">EMERGENCY - Do This First!</AlertTitle>
                            <AlertDescription className="text-red-700 dark:text-red-300">
                                <strong>1. Stay calm and don&apos;t panic</strong><br />
                                <strong>2. Call for help loudly</strong><br />
                                <strong>3. Try to float and save energy</strong>
                            </AlertDescription>
                        </Alert>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-green-300 bg-green-50/30 dark:border-green-600 dark:bg-green-950/20">
                                <CardHeader>
                                    <CardTitle className="text-green-800 dark:text-green-400 flex items-center gap-2">
                                        <Heart className="w-5 h-5" />
                                        If YOU Are in Trouble
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-muted-foreground dark:text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t fight the current:</strong> It will tire you out</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Float on your back:</strong> This saves energy</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>Wave for help:</strong> Raise one arm high and shout</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>If in rip current:</strong> Swim parallel to shore first</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>Stay calm:</strong> Panic makes everything worse</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-blue-300 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-950/20">
                                <CardHeader>
                                    <CardTitle className="text-blue-800 dark:text-blue-400 flex items-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        If SOMEONE ELSE is in Trouble
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-muted-foreground dark:text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>Call for help first:</strong> Shout for lifeguard or call 119</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>Don&apos;t swim to them:</strong> You might drown too</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>Throw something:</strong> Life ring, rope, or anything that floats</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>Use a boat:</strong> If available and you know how</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span><strong>Get trained help:</strong> Lifeguards know what to do</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Safest Beaches by Season */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-400">Best Beaches for Each Season</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-blue-300 bg-blue-50/30 dark:border-blue-600 dark:bg-blue-950/20">
                            <CardHeader>
                                <CardTitle className="text-blue-800 dark:text-blue-400">May to September (Southwest Monsoon)</CardTitle>
                                <CardDescription className="dark:text-gray-300">When west and south coasts are dangerous</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Safe Beaches:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                                            <li>• Arugam Bay (East Coast)</li>
                                            <li>• Pasikuda Beach (East Coast)</li>
                                            <li>• Kalkudah Beach (East Coast)</li>
                                            <li>• Nilaveli (North Coast)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-red-700 dark:text-red-400">Avoid These Beaches:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                                            <li>• Hikkaduwa (Very dangerous)</li>
                                            <li>• Unawatuna (Strong currents)</li>
                                            <li>• Mirissa (Big waves)</li>
                                            <li>• Bentota (Rough seas)</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-orange-300 bg-orange-50/30 dark:border-orange-600 dark:bg-orange-950/20">
                            <CardHeader>
                                <CardTitle className="text-orange-800 dark:text-orange-400">October to February (Northeast Monsoon)</CardTitle>
                                <CardDescription className="dark:text-gray-300">When east and north coasts are dangerous</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Safe Beaches:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                                            <li>• Negombo Beach (West Coast)</li>
                                            <li>• Bentota Beach (West Coast)</li>
                                            <li>• Hikkaduwa (West Coast)</li>
                                            <li>• Unawatuna (South Coast)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-red-700 dark:text-red-400">Avoid These Beaches:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                                            <li>• Arugam Bay (Very rough)</li>
                                            <li>• Trincomalee (Strong currents)</li>
                                            <li>• Nilaveli (Big waves)</li>
                                            <li>• Pasikuda (Dangerous currents)</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Final Tips */}
                <section className="mb-12">
                    <Card className="border-green-400 bg-green-50 dark:bg-green-950/30 dark:border-green-600">
                        <CardHeader>
                            <CardTitle className="text-green-800 dark:text-green-400 text-2xl text-center">
                                Remember: The Ocean is Stronger Than You
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center space-y-4">
                                <p className="text-lg text-muted-foreground dark:text-gray-300">
                                    Even the strongest swimmers can get in trouble. Always respect the sea and follow safety rules.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 text-sm">
                                    <Badge variant="outline" className="border-green-400 text-green-700 dark:border-green-500 dark:text-green-400">
                                        Never swim alone
                                    </Badge>
                                    <Badge variant="outline" className="border-green-400 text-green-700 dark:border-green-500 dark:text-green-400">
                                        Check conditions first
                                    </Badge>
                                    <Badge variant="outline" className="border-green-400 text-green-700 dark:border-green-500 dark:text-green-400">
                                        Know your limits
                                    </Badge>
                                    <Badge variant="outline" className="border-green-400 text-green-700 dark:border-green-500 dark:text-green-400">
                                        When in doubt, stay out
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground dark:text-gray-400 italic">
                                    &quot;The sea doesn&apos;t care if you&apos;re a good swimmer. It only cares if you&apos;re smart.&quot;
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
