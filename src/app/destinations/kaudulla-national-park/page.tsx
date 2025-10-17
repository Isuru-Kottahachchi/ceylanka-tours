"use client"

import Image from "next/image"
import { Clock, MapPin, CheckCircle, Star, Calendar, Sun, Binoculars, Car } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/ui/image-carousel"

export default function KaudullaNationalParkGuide() {
    const elephantImages = [
        { src: "/placeholder.svg?height=400&width=600", caption: "Large herd of elephants at Kaudulla reservoir", alt: "Wild elephants gathering at Kaudulla reservoir during evening" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Baby elephants playing in water", alt: "Baby elephants playing and splashing in Kaudulla reservoir" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Elephant family walking through grasslands", alt: "Family of elephants walking through the grasslands of Kaudulla" },
    ];

    const birdLifeImages = [
        { src: "/placeholder.svg?height=400&width=600", caption: "Painted Stork at Kaudulla", alt: "Painted Stork fishing in the shallow waters of Kaudulla" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Various water birds", alt: "Different species of water birds at Kaudulla reservoir" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Peacocks in natural habitat", alt: "Peacocks displaying their feathers in Kaudulla" },
    ];

    const landscapeImages = [
        { src: "/placeholder.svg?height=400&width=600", caption: "Kaudulla reservoir sunset", alt: "Beautiful sunset over Kaudulla reservoir" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Grasslands and water bodies", alt: "Vast grasslands and water bodies of Kaudulla National Park" },
        { src: "/placeholder.svg?height=400&width=600", caption: "Ancient tank system", alt: "Ancient tank system at Kaudulla National Park" },
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Panoramic view of Kaudulla National Park with elephants near the reservoir during sunset"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Kaudulla National Park</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">Sri Lanka&apos;s Elephant Paradise</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-green-600/80 text-white border-green-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            North Central Province
                        </Badge>
                        <Badge variant="secondary" className="bg-orange-600/80 text-white border-orange-500">
                            <Binoculars className="w-4 h-4 mr-1" />
                            Wildlife Haven
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-600/80 text-white border-blue-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            Year-round Safari
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Kaudulla National Park</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p className="text-lg mb-4">
                            Kaudulla National Park, one of Sri Lanka&apos;s newest national parks, is a hidden gem in the 
                            heart of the Cultural Triangle. Famous for its large gatherings of Asian elephants, the park 
                            offers visitors a chance to see these magnificent creatures up close in their natural habitat.
                        </p>
                        <p className="text-lg">
                            Built around the ancient Kaudulla Tank (reservoir), the park creates a perfect environment 
                            for wildlife, especially during the dry season when animals gather around the water. The tank, 
                            built by King Mahasena in the 3rd century, continues to support wildlife just as it has for 
                            over 1,700 years.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 mt-4">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-2">Did You Know?</h4>
                            <p className="text-sm text-blue-700 dark:text-gray-200">
                                Kaudulla forms part of the elephant corridor between Minneriya and Wasgomuwa National Parks. 
                                During the peak season, you can see herds of up to 200 elephants gathering around the reservoir - 
                                one of the largest gatherings of Asian elephants in the world!
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
                                Quick Kaudulla Facts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        <span>
                                            <strong>Park Size:</strong> 6,656 hectares
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-green-500" />
                                        <span>
                                            <strong>Best Season:</strong> May to December
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-purple-500" />
                                        <span>
                                            <strong>Safari Duration:</strong> 3-4 hours
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Sun className="w-4 h-4 text-orange-500" />
                                        <span>
                                            <strong>Safari Times:</strong> 6:00 AM and 2:30 PM
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Binoculars className="w-4 h-4 text-red-500" />
                                        <span>
                                            <strong>Key Wildlife:</strong> Elephants, Birds, Leopards
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Car className="w-4 h-4 text-yellow-500" />
                                        <span>
                                            <strong>Distance from Colombo:</strong> 197 km
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Wildlife Sections */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Wildlife at Kaudulla</h2>
                    <div className="space-y-8">
                        {/* Elephants */}
                        <Card>
                            <CardHeader>
                                <CardTitle>The Elephant Gathering</CardTitle>
                                <CardDescription>One of Asia&apos;s greatest wildlife spectacles</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <ImageCarousel images={elephantImages} />
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Kaudulla is famous for its large gatherings of Asian elephants, especially 
                                            during the dry season. These gentle giants come to the reservoir to drink, 
                                            bathe, and feed on the fresh grass that grows on the tank bed as water levels drop.
                                        </p>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold mb-2">Elephant Behavior:</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Family groups with babies
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Social interactions and play
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Feeding and bathing activities
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        Natural behaviors in their habitat
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Other Wildlife */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Rich Biodiversity</CardTitle>
                                <CardDescription>A haven for diverse wildlife species</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3">Mammals</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Sri Lankan Leopard
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Sambar Deer
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Golden Jackal
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Wild Boar
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Bird Life</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Painted Stork
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Asian Spoonbill
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Indian Peafowl
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Grey-headed Fish Eagle
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Bird Life */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Bird Watching Paradise</CardTitle>
                                <CardDescription>Over 160 species of birds recorded</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    <div>
                                        <p className="text-muted-foreground mb-4">
                                            Kaudulla&apos;s reservoir and surrounding habitats attract numerous water birds 
                                            and forest species. The park is an important site for both resident and 
                                            migratory birds, making it a must-visit location for bird enthusiasts.
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Regular migratory visitors
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Rare species sightings
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Breeding colonies
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                Year-round bird watching
                                            </li>
                                        </ul>
                                    </div>
                                    <ImageCarousel images={birdLifeImages} />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Landscape and History */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ancient Tank and Landscape</CardTitle>
                            <CardDescription>A blend of natural and human heritage</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <ImageCarousel images={landscapeImages} />
                                <div>
                                    <p className="text-muted-foreground mb-4">
                                        The ancient Kaudulla Tank, built in the 3rd century AD, is the centerpiece of 
                                        the park. This impressive irrigation work continues to sustain wildlife and 
                                        local agriculture, showcasing the engineering skills of ancient Sri Lanka.
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Key Features:</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Ancient irrigation system
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Grasslands and forests
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Wetland habitats
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    Archaeological sites
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Safari Guide */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Safari Experience Guide</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Safari Tips</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Book through registered operators
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Morning safaris offer best light
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Bring binoculars and camera
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Wear neutral colored clothing
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>What to Bring</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Water and snacks
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Sun protection
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Insect repellent
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Camera equipment
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Getting There */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Car className="w-5 h-5" />
                                How to Get There
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3">From Colombo</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            5-6 hours by car
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Via Kurunegala-Habarana road
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3">From Cultural Triangle</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            30 minutes from Habarana
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                            Easy access from Sigiriya/Dambulla
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
                            <CardTitle>When to Visit</CardTitle>
                            <CardDescription>Seasonal guide for the best wildlife experience</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Peak Season (May to October)</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Largest elephant gatherings
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Best wildlife viewing
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                            Clear weather conditions
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3">Off Season (November to April)</h4>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Fewer crowds
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Better rates
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Sun className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                            Migratory birds present
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
