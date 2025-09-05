'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Waves,
    MapPin,
    Clock,
    DollarSign,
    Calendar,
    AlertTriangle,
    Star,
    Users,
    CheckCircle,
    ArrowRight,
    Camera,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import { useState } from 'react'

const waterActivities = [
    {
        id: 1,
        name: "White Water Rafting",
        locations: ["Kithulgala", "Kalutara"],
        images: [
            { src: "/Kithulgala-waterrafting.jpg", title: "Rapids at Kithulgala" },
            { src: "/Kithulgala-waterrafting1.jpg", title: "KithulgalaAdventure" },
            { src: "/white-water-team.jpg", title: "Team Rafting Experience" }
        ],
        bestTime: "May to January",
        difficulty: "Moderate to Advanced",
        duration: "3-5 hours",
        priceRange: "$25 - $45",
        description: "Experience heart-pounding rapids through lush rainforest canyons. Kithulgala offers Grade 2-3 rapids perfect for adventure seekers.",
        highlights: ["Grade 2-3 Rapids", "Rainforest Scenery", "Movie Location (Bridge on River Kwai)"],
        safetyTips: [
            "Always wear provided life jackets and helmets",
            "Listen carefully to guide instructions",
            "Know basic swimming skills",
            "Choose licensed operators only"
        ],
        topLocations: [
            {
                name: "Kithulgala",
                details: "Most popular rafting destination with consistent rapids year-round",
                rapids: "Grade 2-3",
                season: "Year-round, best May-January"
            },
            {
                name: "Kalutara",
                details: "Gentler rapids suitable for families and beginners",
                rapids: "Grade 1-2",
                season: "May to September"
            }
        ]
    },
    {
        id: 2,
        name: "Surfing",
        locations: ["Arugam Bay", "Mirissa", "Hikkaduwa", "Weligama"],
        images: [
            { src: "/surfing-arugam-bay.jpg", title: "Perfect Waves at Arugam Bay" },
            { src: "/Mirissa.jpg", title: "Mirissa Beach Surfing" },
            { src: "/surfing-hikkaduwa.jpg", title: "Hikkaduwa Surf Break" },
            { src: "/weligama-surf.jpg", title: "Weligama Bay Surfing" }
        ],
        bestTime: "April to October (East), November to March (South/West)",
        difficulty: "Beginner to Expert",
        duration: "2-6 hours",
        priceRange: "$15 - $40",
        description: "Ride world-class waves on both east and west coasts. Sri Lanka offers year-round surfing with consistent swells and warm water. You can choose the place according to the season, normally south coastlines season will be end in April and start in November.East Coastlines season will start in November and end in April.",
        highlights: ["Year-round Surfing", "Warm Water", "Multiple Skill Levels"],
        safetyTips: [
            "Check local conditions and tide times",
            "Use reef-safe sunscreen",
            "Respect local surf etiquette",
            "Start with beginner beaches"
        ],
        topLocations: [
            {
                name: "Waligama (South Coast)",
                details: "World-renowned right-hand point break, consistently ranked top surf destination",
                waves: "1-8 feet",
                season: "April to October"
            },
            {
                name: "Arugam Bay (East Coast)",
                details: "World-renowned right-hand point break, consistently ranked top surf destination",
                waves: "1-8 feet",
                season: "April to October"
            },
            {
                name: "Pasikuda (East Coast)",
                details: "World-renowned right-hand point break, consistently ranked top surf destination",
                waves: "1-8 feet",
                season: "April to October"
            },
            {
                name: "Hirikatiya (South Coast)",
                details: "World-renowned right-hand point break, consistently ranked top surf destination",
                waves: "1-8 feet",
                season: "April to October"
            },
            {
                name: "Mirissa (South Coast)",
                details: "Great for beginners with gentle beach breaks and surf schools",
                waves: "2-6 feet",
                season: "November to March"
            },
            {
                name: "Hikkaduwa (South Coast)",
                details: "Consistent reef breaks with vibrant coral reefs nearby",
                waves: "2-8 feet",
                season: "November to March"
            }
        ]
    },
    {
        id: 3,
        name: "Scuba Diving (Swimming skills not required)",
        locations: ["Hikkaduwa", "Unawatuna", "Trincomalee", "Kalpitiya"],
        images: [
            { src: "/scuba-diving-hikkaduwa.jpg", title: "Coral Reefs at Hikkaduwa" },
            { src: "/diving-trincomalee.jpg", title: "Shipwreck Diving in Trincomalee" },
            { src: "/underwater-coral.jpg", title: "Vibrant Marine Life" },
            { src: "/diving-kalpitiya.jpg", title: "Bar Reef Diving" }
        ],
        bestTime: "November to April (South/West), April to September (East)",
        difficulty: "Beginner to Advanced",
        duration: "Half day to full day",
        priceRange: "$35 - $80",
        description: "Explore vibrant coral reefs, shipwrecks, and diverse marine life in crystal-clear waters. Multiple PADI centers offer courses and guided dives.",
        highlights: ["Coral Reefs", "Shipwrecks", "Whale Watching", "PADI Certification"],
        safetyTips: [
            "Always dive with certified instructors",
            "Never exceed your certification limits",
            "Check equipment before every dive",
            "Follow proper ascent rates"
        ],
        topLocations: [
            {
                name: "Hikkaduwa",
                details: "Shallow coral reefs perfect for beginners and snorkeling",
                depth: "5-20 meters",
                season: "November to April"
            },
            {
                name: "Unawatuna",
                details: "Shallow coral reefs perfect for beginners and snorkeling",
                depth: "5-20 meters",
                season: "November to April"
            },
            {
                name: "Trincomalee",
                details: "Pristine reefs and WWII shipwrecks in clear waters",
                depth: "10-40 meters",
                season: "April to September"
            },
            {
                name: "Kalpitiya",
                details: "Bar reefs and dolphin encounters in clear lagoon waters",
                depth: "8-25 meters",
                season: "November to March"
            }
        ]
    },
    {
        id: 4,
        name: "Snorkeling",
        locations: ["Hikkaduwa", "Unawatuna", "Pigeon Island", "Kalpitiya"],
        images: [
            { src: "/snorkeling-pigeon-island.jpg", title: "Pigeon Island Marine Park" },
            { src: "/snorkeling-hikkaduwa.jpg", title: "Coral Sanctuary Hikkaduwa" },
            { src: "/tropical-fish.jpg", title: "Colorful Tropical Fish" },
            { src: "/coral-garden.jpg", title: "Pristine Coral Gardens" }
        ],
        bestTime: "November to April (South/West), May to September (East)",
        difficulty: "Beginner to Intermediate",
        duration: "2-4 hours",
        priceRange: "$10 - $25",
        description: "Discover colorful coral gardens and tropical fish in shallow, clear waters. Perfect for families and non-swimmers.",
        highlights: ["Coral Gardens", "Tropical Fish", "Family Friendly", "No Certification Required"],
        safetyTips: [
            "Use reef-safe sunscreen",
            "Don't touch or stand on coral",
            "Stay with your group",
            "Check water conditions before entering"
        ],
        topLocations: [
            {
                name: "Hikkaduwa",
                details: "Easily accessible coral sanctuary with abundant marine life",
                depth: "1-8 meters",
                season: "November to April"
            },
            {
                name: "Pigeon Island",
                details: "National park with pristine reefs and diverse fish species,If you hire a local instructer you wil be able to see sharks in closer",
                depth: "2-10 meters",
                season: "May to September"
            },
            {
                name: "Unawatuna",
                details: "Protected bay with calm waters ideal for beginners",
                depth: "1-6 meters",
                season: "November to April"
            }
        ]
    },
    {
        id: 5,
        name: "Windsurfing & Kitesurfing",
        locations: ["Bentota", "Kalpitiya", "Negombo"],
        images: [
            { src: "/windsurfing-bentota.jpg", title: "Windsurfing at Bentota Lagoon" },
            { src: "/kitesurfing-kalpitiya.jpg", title: "Kitesurfing Paradise Kalpitiya" },
            { src: "/wind-sports.jpg", title: "Perfect Wind Conditions" },
            { src: "/lagoon-windsurfing.jpg", title: "Shallow Lagoon Training" }
        ],
        bestTime: "November to March (West), May to September (East)",
        difficulty: "Intermediate to Advanced",
        duration: "2-6 hours",
        priceRange: "$30 - $60",
        description: "Harness the power of consistent trade winds in shallow lagoons and open ocean. World-class conditions for wind sports enthusiasts.",
        highlights: ["Consistent Winds", "Flat Water Lagoons", "International Standards", "Equipment Rental"],
        safetyTips: [
            "Check wind conditions and weather",
            "Use proper safety equipment",
            "Take lessons from certified instructors",
            "Stay within designated areas"
        ],
        topLocations: [
            {
                name: "Kalpitiya",
                details: "Consistent trade winds and large lagoon perfect for all skill levels",
                windSpeed: "15-25 knots",
                season: "May to September"
            },
            {
                name: "Bentota",
                details: "Protected lagoon with steady winds and professional centers",
                windSpeed: "12-20 knots",
                season: "November to March"
            }
        ]
    },
    {
        id: 6,
        name: "Jet Skiing",
        locations: ["Bentota", "Negombo", "Mount Lavinia"],
        images: [
            { src: "/jet-skiing-bentota.jpg", title: "High-Speed Adventure Bentota" },
            { src: "/jet-ski-negombo.jpg", title: "Ocean Riding at Negombo" },
            { src: "/mangrove-jet-ski.jpg", title: "Mangrove Channel Exploration" },
            { src: "/jet-ski-sunset.jpg", title: "Sunset Jet Skiing" }
        ],
        bestTime: "November to April",
        difficulty: "Beginner to Intermediate",
        duration: "30 minutes to 2 hours",
        priceRange: "$20 - $50",
        description: "Feel the thrill of high-speed water adventure along scenic coastlines and through mangrove channels.",
        highlights: ["High Speed Thrills", "Scenic Routes", "Mangrove Exploration", "No Experience Required"],
        safetyTips: [
            "Wear life jackets at all times",
            "Follow speed limits and designated routes",
            "Keep safe distance from swimmers",
            "Listen to safety briefing carefully"
        ],
        topLocations: [
            {
                name: "Bentota",
                details: "Calm lagoon waters and mangrove channels for safe riding",
                waterType: "Lagoon and River",
                season: "Year-round"
            },
            {
                name: "Negombo",
                details: "Open ocean riding with beautiful coastal views",
                waterType: "Ocean",
                season: "November to April"
            }
        ]
    }
]

const safetyGuidelines = [
    {
        title: "Choose Licensed Operators",
        description: "Always book with registered tour operators who have proper safety certifications and insurance coverage."
    },
    {
        title: "Check Weather Conditions",
        description: "Monitor weather forecasts and sea conditions. Avoid activities during rough seas or storms."
    },
    {
        title: "Use Proper Equipment",
        description: "Ensure all safety gear is in good condition. Don't compromise on life jackets, helmets, or other protective equipment."
    },
    {
        title: "Know Your Limits",
        description: "Choose activities appropriate for your skill level. Take lessons from certified instructors for new activities."
    },
    {
        title: "Emergency Preparedness",
        description: "Know emergency contact numbers and nearest medical facilities. Inform someone about your activity plans."
    }
]

const seasonalGuide = {
    "November to March": {
        region: "South Coast",
        activities: ["Surfing", "Scuba Diving", "Snorkeling", "Windsurfing"],
        locations: ["Waligama", "Mirissa", "Hikkaduwa", "Bentota", "Unawatuna"],
        conditions: "Calm seas, consistent winds, excellent visibility"
    },
    "April to October": {
        region: "East Coast",
        activities: ["Surfing", "Scuba Diving", "Snorkeling", "Kitesurfing"],
        locations: ["Arugam Bay", "Trincomalee", "Pigeon Island", "Kalpitiya"],
        conditions: "Perfect swells, clear waters, steady trade winds"
    },
    "Year-round": {
        region: "Central Highlands",
        activities: ["White Water Rafting", "River Activities"],
        locations: ["Kithulgala", "Kalutara"],
        conditions: "Consistent water levels, tropical climate"
    }
}

// Image Carousel Component
function ImageCarousel({ images, difficulty }: { images: { src: string; title: string }[]; difficulty?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null) // Reset touchEnd
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe && images.length > 1) {
            nextImage()
        }
        if (isRightSwipe && images.length > 1) {
            prevImage()
        }
    }

    return (
        <div 
            className="relative h-64 md:h-full group"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                fill
                className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all opacity-100 shadow-lg"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all opacity-100 shadow-lg"
                    >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-all touch-manipulation ${
                                index === currentIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            )}

            {/* Image Title */}
            <div className="absolute bottom-8 left-4 right-4 text-center">
                <p className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1 inline-block">
                    {images[currentIndex].title}
                </p>
            </div>

            {/* Activity Difficulty Badge */}
            {difficulty && (
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {difficulty}
                </Badge>
            )}
        </div>
    )
}

export default function WaterActivitiesPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 text-white py-20">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Water Adventures in
                        <span className="block text-cyan-300">Sri Lanka</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
                        From world-class surfing breaks to thrilling white water rapids, discover the ultimate aquatic playground in the Indian Ocean&apos;s gem
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <Waves className="w-4 h-4 mr-2" />
                            Year-round Activities
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <Star className="w-4 h-4 mr-2" />
                            World-class Spots
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <Users className="w-4 h-4 mr-2" />
                            All Skill Levels
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                {/* Quick Navigation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Choose Your Adventure
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {waterActivities.map((activity) => (
                            <a
                                key={activity.id}
                                href={`#${activity.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group bg-white dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                    {activity.id === 1 && "🚣"}
                                    {activity.id === 2 && "🏄"}
                                    {activity.id === 3 && "🤿"}
                                    {activity.id === 4 && "🤽"}
                                    {activity.id === 5 && "🪁"}
                                    {activity.id === 6 && "🏍️"}
                                </div>
                                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                                    {activity.name}
                                </h3>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Seasonal Guide */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        When to Visit
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(seasonalGuide).map(([season, info]) => (
                            <Card key={season} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-blue-600" />
                                        {season}
                                    </CardTitle>
                                    <p className="text-blue-600 font-semibold">{info.region}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold mb-2">Best Activities:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {info.activities.map((activity) => (
                                                    <Badge key={activity} variant="secondary" className="text-xs">
                                                        {activity}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Top Locations:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {info.locations.map((location) => (
                                                    <Badge key={location} variant="outline" className="text-xs">
                                                        {location}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {info.conditions}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Water Activities */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Water Activities Guide
                    </h2>
                    <div className="space-y-12">
                        {waterActivities.map((activity) => (
                            <div
                                key={activity.id}
                                id={activity.name.toLowerCase().replace(/\s+/g, '-')}
                                className="scroll-mt-20"
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="md:flex">
                                        <div className="md:w-1/2">
                                            <ImageCarousel images={activity.images} difficulty={activity.difficulty} />
                                        </div>

                                        <div className="md:w-1/2 p-6">
                                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                                {activity.name}
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                {activity.description}
                                            </p>

                                            {/* Quick Info */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-blue-600" />
                                                    <span className="text-sm">{activity.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <DollarSign className="w-4 h-4 text-green-600" />
                                                    <span className="text-sm">{activity.priceRange}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-purple-600" />
                                                    <span className="text-sm">{activity.bestTime}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-red-600" />
                                                    <span className="text-sm">{activity.locations.length} Locations</span>
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2">Highlights:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {activity.highlights.map((highlight) => (
                                                        <Badge key={highlight} variant="secondary" className="text-xs">
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Top Locations */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold mb-3">Top Locations:</h4>
                                                <div className="space-y-3">
                                                    {activity.topLocations.map((location) => (
                                                        <div key={location.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h5 className="font-semibold text-blue-600">{location.name}</h5>
                                                                <Badge variant="outline" className="text-xs">
                                                                    {location.season}
                                                                </Badge>
                                                            </div>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                                {location.details}
                                                            </p>
                                                            <div className="text-xs text-gray-500 dark:text-gray-500">
                                                                {Object.entries(location).map(([key, value]) => {
                                                                    if (key !== 'name' && key !== 'details' && key !== 'season') {
                                                                        return (
                                                                            <span key={key} className="mr-4">
                                                                                <strong className="capitalize">{key}:</strong> {value}
                                                                            </span>
                                                                        )
                                                                    }
                                                                    return null
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Safety Tips */}
                                            <div>
                                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                                                    Safety Tips:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {activity.safetyTips.map((tip, index) => (
                                                        <li key={index} className="flex items-start gap-2 text-sm">
                                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-600 dark:text-gray-400">{tip}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safety Guidelines */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Essential Safety Guidelines
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {safetyGuidelines.map((guideline, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                                        {guideline.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {guideline.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Planning Tips */}
                <section className="mb-12">
                    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">
                                Planning Your Water Adventure
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        What to Bring
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Reef-safe sunscreen (SPF 30+)</li>
                                        <li>• Quick-dry clothing and swimwear</li>
                                        <li>• Waterproof camera or phone case</li>
                                        <li>• Personal towel and change of clothes</li>
                                        <li>• Water and light snacks</li>
                                        <li>• Waterproof bag for valuables</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                                        <Camera className="w-5 h-5 text-blue-600" />
                                        Best Photography Tips
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Early morning light for best colors</li>
                                        <li>• Use polarizing filters for water shots</li>
                                        <li>• Capture action shots with fast shutter speed</li>
                                        <li>• Protect equipment from salt water</li>
                                        <li>• Ask permission before photographing locals</li>
                                        <li>• Backup photos regularly</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <Card className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0">
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-bold mb-4">
                                Ready for Your Water Adventure?
                            </h2>
                            <p className="text-xl mb-6 text-cyan-100">
                                Explore more destinations and plan your perfect Sri Lankan water sports experience
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                                    <Link href="/destinations">
                                        Explore Destinations
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                                    <Link href="/about-srilanka">
                                        Plan Your Trip
                                        <MapPin className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}
