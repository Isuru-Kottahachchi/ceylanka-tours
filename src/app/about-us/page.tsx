import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Heart, Camera, Globe, Award, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: "About Us - Sri Lanka Travel Guide",
    description:
        "Learn about our passionate team of travel experts dedicated to showcasing the beauty and culture of Sri Lanka. Discover our mission, values, and commitment to sustainable tourism.",
    keywords: [
        "about sri lanka travel guide",
        "travel blog team",
        "sri lanka tourism experts",
        "sustainable travel",
        "local travel guides",
    ],
    openGraph: {
        title: "About Us - Sri Lanka Travel Guide",
        description:
            "Meet the passionate team behind Sri Lanka's most comprehensive travel guide. Learn about our mission to promote sustainable tourism.",
        images: [
            {
                url: "/about-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Sri Lanka Travel Guide Team",
            },
        ],
    },
}

const teamMembers = [
    {
        name: "Samantha Perera",
        role: "Founder & Travel Expert",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Born and raised in Kandy, Samantha has been exploring Sri Lanka for over 15 years. Her passion for sharing the hidden gems of her homeland led to the creation of this travel guide.",
        specialties: ["Cultural Sites", "Hill Country", "Local Cuisine"],
    },
    {
        name: "Rajesh Fernando",
        role: "Wildlife & Nature Guide",
        image: "/placeholder.svg?height=300&width=300",
        bio: "A certified naturalist with 12 years of experience in Sri Lanka's national parks. Rajesh specializes in wildlife photography and sustainable eco-tourism.",
        specialties: ["Wildlife Safari", "Bird Watching", "Photography"],
    },
    {
        name: "Priya Wickramasinghe",
        role: "Cultural Heritage Specialist",
        image: "/placeholder.svg?height=300&width=300",
        bio: "With a Master's in Archaeology from University of Colombo, Priya brings deep knowledge of Sri Lanka's ancient history and UNESCO World Heritage sites.",
        specialties: ["Ancient Cities", "Temples", "Historical Sites"],
    },
    {
        name: "David Silva",
        role: "Adventure & Beach Expert",
        image: "/placeholder.svg?height=300&width=300",
        bio: "A former surf instructor turned travel writer, David knows every beach, surf spot, and adventure activity along Sri Lanka's stunning coastline.",
        specialties: ["Beach Destinations", "Water Sports", "Adventure Travel"],
    },
]

const achievements = [
    {
        icon: Users,
        title: "500K+ Travelers Helped",
        description: "We've assisted over half a million travelers in planning their Sri Lankan adventures.",
    },
    {
        icon: Award,
        title: "Travel Blog Awards",
        description: "Winner of Best Destination Blog 2023 and Top Travel Resource 2022.",
    },
    {
        icon: Globe,
        title: "Sustainable Tourism Advocate",
        description: "Certified by the Global Sustainable Tourism Council for promoting responsible travel.",
    },
    {
        icon: Heart,
        title: "Local Community Support",
        description: "10% of our revenue goes directly to local community development projects.",
    },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/placeholder.svg?height=800&width=1600"
                        alt="Sri Lanka landscape with team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">About Sri Lanka Travel Guide</h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
                        Passionate locals sharing the authentic beauty of our island paradise
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            Local Experts
                        </Badge>
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            <Heart className="w-4 h-4 mr-2" />
                            Sustainable Tourism
                        </Badge>
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            <Camera className="w-4 h-4 mr-2" />
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                We believe Sri Lanka is one of the world&apos;s most incredible destinations, and our mission is to help
                                travelers discover its authentic beauty while supporting local communities and preserving our natural
                                heritage.

                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                As locals who have explored every corner of our island, we provide insider knowledge, hidden gems, and
                                practical advice that you won&apos;t find in typical guidebooks.

                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Promote sustainable and responsible tourism</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Support local communities and businesses</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Share authentic cultural experiences</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Preserve Sri Lanka&apos;s natural beauty for future generations

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=500&width=600"
                                alt="Sri Lankan temple and nature"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-white p-6 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Impact</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            We&apos;re proud of the positive impact we&apos;ve made on Sri Lankan tourism and local communities.

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
            <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Authenticity</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We share genuine experiences and honest recommendations based on our personal knowledge and local
                                insights.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sustainability</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We promote responsible tourism that protects our environment and benefits local communities.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Community</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We believe in building connections between travelers and local communities for mutual benefit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        Let&apos;s Plan Your Sri Lankan Adventure

                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Have questions about traveling to Sri Lanka? Need personalized recommendations? Our team is here to help you
                        create unforgettable memories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                            <Link href="/contact">
                                <Mail className="w-5 h-5 mr-2" />
                                Contact Us
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-gray-300 dark:border-gray-600">
                            <Link href="/travel-tips">
                                <MapPin className="w-5 h-5 mr-2" />
                                Browse Travel Tips
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 dark:text-gray-300">
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                <span>hello@srilanka-travel-guide.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                <span>+94 11 234 5678</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
