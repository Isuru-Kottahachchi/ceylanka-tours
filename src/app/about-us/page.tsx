import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Heart, Camera, Globe, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: "About Us - Ceylanka Tours",
    description:
        "Discover authentic Sri Lanka with passionate local guides. We're dedicated to showcasing the beauty, culture, and hidden gems of our island paradise through sustainable tourism.",
    keywords: [
        "ceylanka tours",
        "sri lanka travel guide",
        "sustainable tourism sri lanka",
        "local travel experts",
        "authentic sri lanka experiences",
    ],
    openGraph: {
        title: "About Us - Ceylanka Tours",
        description:
            "Your trusted partners for authentic Sri Lankan adventures. Local expertise, sustainable practices, unforgettable experiences.",
        images: [
            {
                url: "/about-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Ceylanka Tours - Explore Sri Lanka",
            },
        ],
    },
}

// const teamMembers = [
//     {
//         name: "Samantha Perera",
//         role: "Founder & Travel Expert",
//         image: "/placeholder.svg?height=300&width=300",
//         bio: "Born and raised in Kandy, Samantha has been exploring Sri Lanka for over 15 years. Her passion for sharing the hidden gems of her homeland led to the creation of this travel guide.",
//         specialties: ["Cultural Sites", "Hill Country", "Local Cuisine"],
//     },
//     {
//         name: "Rajesh Fernando",
//         role: "Wildlife & Nature Guide",
//         image: "/placeholder.svg?height=300&width=300",
//         bio: "A certified naturalist with 12 years of experience in Sri Lanka's national parks. Rajesh specializes in wildlife photography and sustainable eco-tourism.",
//         specialties: ["Wildlife Safari", "Bird Watching", "Photography"],
//     },
//     {
//         name: "Priya Wickramasinghe",
//         role: "Cultural Heritage Specialist",
//         image: "/placeholder.svg?height=300&width=300",
//         bio: "With a Master's in Archaeology from University of Colombo, Priya brings deep knowledge of Sri Lanka's ancient history and UNESCO World Heritage sites.",
//         specialties: ["Ancient Cities", "Temples", "Historical Sites"],
//     },
//     {
//         name: "David Silva",
//         role: "Adventure & Beach Expert",
//         image: "/placeholder.svg?height=300&width=300",
//         bio: "A former surf instructor turned travel writer, David knows every beach, surf spot, and adventure activity along Sri Lanka's stunning coastline.",
//         specialties: ["Beach Destinations", "Water Sports", "Adventure Travel"],
//     },
// ]

const achievements = [
    {
        icon: Heart,
        title: "Local Expertise",
        description: "Born and raised in Sri Lanka, we share insider knowledge and authentic experiences.",
    },
    {
        icon: Globe,
        title: "Sustainable Tourism",
        description: "Committed to eco-friendly practices that protect our island's natural beauty.",
    },
    {
        icon: Users,
        title: "Community Focused",
        description: "Supporting local businesses and communities to create meaningful travel impact.",
    },
    {
        icon: Camera,
        title: "Personalized Service",
        description: "Tailored itineraries and recommendations designed around your travel style.",
    },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <Users className="h-16 w-16 text-cyan-100" />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        About Ceylanka Tours
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-light text-cyan-100">
                        Passionate locals dedicated to sharing the beauty and culture of our island paradise
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <MapPin className="h-4 w-4 mr-2" />
                            Local Experts
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <Heart className="h-4 w-4 mr-2" />
                            Sustainable Travel
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <Camera className="h-4 w-4 mr-2" />
                            Authentic Experiences
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                Sri Lanka is more than just a destination it&apos;s our home. Born and raised on this beautiful island, 
                                we created Ceylanka Tours to share the authentic experiences, hidden gems, and local insights 
                                that make Sri Lanka truly special.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Our mission is simple: help you discover the real Sri Lanka while supporting local communities 
                                and preserving the natural beauty we cherish.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Heart className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Share authentic cultural experiences and local traditions</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Globe className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Promote sustainable and responsible tourism practices</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Users className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Support local communities and small businesses</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/favicon.ico.png"
                                alt="Sri Lankan temple and nature"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-xl"
                            />
                            {/* <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-white p-6 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm">Years of Experience</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            What makes Ceylanka Tours your perfect partner for exploring Sri Lanka
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600"
                            >
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <achievement.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{achievement.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Our diverse team of local experts brings together decades of experience in Sri Lankan tourism, culture,
                            and adventure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600"
                            >
                                <div className="relative h-64">
                                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {member.specialties.map((specialty, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="outline"
                                                className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                                            >
                                                {specialty}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Values Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">What Drives Us</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Authenticity</h3>
                                <p className="opacity-90">
                                    Genuine experiences and honest recommendations rooted in local knowledge
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Sustainability</h3>
                                <p className="opacity-90">
                                    Protecting our environment while creating positive impact for communities
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Connection</h3>
                                <p className="opacity-90">
                                    Building meaningful bonds between travelers and local culture
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        Ready to Explore Sri Lanka?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you need personalized recommendations, have questions, or want to plan your perfect itinerary, 
                        we&apos;re here to help create unforgettable memories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                            <Link href="/contact-us">
                                <Mail className="w-5 h-5 mr-2" />
                                Contact Us
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-gray-300 dark:border-gray-600">
                            <Link href="/destinations">
                                <MapPin className="w-5 h-5 mr-2" />
                                Explore Destinations
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
