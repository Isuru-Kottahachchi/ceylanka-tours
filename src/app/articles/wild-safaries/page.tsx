'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    TreePine,
    MapPin,
    Clock,
    DollarSign,
    Calendar,
    AlertTriangle,
    Star,
    Users,
    CheckCircle,
    ArrowRight,
    Binoculars,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import { useState } from 'react'

const wildlifeSafaris = [
    {
        id: 1,
        name: "Yala National Park",
        locations: ["Block 1", "Block 2", "Block 5"],
        images: [
            { src: "/Yala-national-park.jpg", title: "Leopard Territory - Yala" },
            { src: "/yala-elephants.jpg", title: "Elephant Herds" },
            { src: "/yala-leopard.jpg", title: "Sri Lankan Leopard" }
        ],
        bestTime: "February to July, December to January",
        difficulty: "Easy to Moderate",
        duration: "Half day to full day",
        priceRange: "$25 - $60",
        description: "Sri Lanka's most famous national park, renowned for having the highest leopard density in the world. Home to diverse wildlife including elephants, sloth bears, and over 215 bird species.",
        highlights: ["Highest Leopard Density", "Asian Elephants", "Sloth Bears", "215+ Bird Species"],
        safetyTips: [
            "Stay inside the vehicle at all times",
            "Follow park guide instructions strictly",
            "Maintain safe distance from wildlife",
            "Book with licensed safari operators only"
        ],
        topZones: [
            {
                name: "Block 1",
                details: "Most popular section with highest leopard sightings",
                area: "141 sq km",
                season: "Year-round, best Feb-July"
            },
            {
                name: "Block 2",
                details: "Less crowded with excellent birdwatching opportunities",
                area: "99 sq km", 
                season: "February to July"
            },
            {
                name: "Block 5",
                details: "Remote area with pristine wilderness and beach access",
                area: "228 sq km",
                season: "May to September"
            }
        ]
    },
    {
        id: 2,
        name: "Udawalawe National Park",
        locations: ["Main Park", "Buffer Zone"],
        images: [
            { src: "/Udawalawa-park.jpeg", title: "Elephant Paradise - Udawalawe" },
            { src: "/udawalawe-reservoir.jpg", title: "Udawalawe Reservoir" },
            { src: "/baby-elephants.jpg", title: "Elephant Orphanage" }
        ],
        bestTime: "Year-round, best December to March",
        difficulty: "Easy",
        duration: "3-5 hours",
        priceRange: "$20 - $45",
        description: "Famous for its large population of resident elephants, Udawalawe offers some of the best elephant viewing in Asia. The park's open grasslands provide excellent wildlife photography opportunities.",
        highlights: ["250+ Elephants", "Open Grasslands", "Water Buffalo", "Excellent Photography"],
        safetyTips: [
            "Never get out of the vehicle",
            "Keep noise levels low",
            "Don't feed any animals",
            "Respect park closing times"
        ],
        topZones: [
            {
                name: "Main Park",
                details: "Core area with consistent elephant sightings near the reservoir",
                area: "308 sq km",
                season: "Year-round"
            },
            {
                name: "Buffer Zone", 
                details: "Extended area with diverse habitats and bird species",
                area: "58 sq km",
                season: "Year-round"
            }
        ]
    },
    {
        id: 3,
        name: "Wilpattu National Park",
        locations: ["Kalli Villu", "Kokmotte Villu", "Maradanmaduwa"],
        images: [
            { src: "/Wilpattu.jpeg", title: "Natural Lakes - Wilpattu" },
            { src: "/wilpattu-leopard.jpg", title: "Elusive Leopards" },
            { src: "/wilpattu-lake.jpg", title: "Villu (Natural Lake)" }
        ],
        bestTime: "February to October",
        difficulty: "Moderate",
        duration: "Full day recommended",
        priceRange: "$30 - $65",
        description: "Sri Lanka's largest national park, known for its unique 'villus' (natural lakes) and being one of the best places to spot leopards. Less crowded than Yala, offering a more pristine wilderness experience.",
        highlights: ["60+ Natural Lakes", "Sri Lankan Leopards", "Pristine Wilderness", "Less Crowded"],
        safetyTips: [
            "Carry sufficient water and snacks",
            "Inform someone about your safari schedule",
            "Stay with your assigned guide",
            "Park can be challenging to navigate"
        ],
        topZones: [
            {
                name: "Kalli Villu",
                details: "Popular area for leopard sightings and water birds",
                highlights: "Leopards, Water birds",
                season: "February to October"
            },
            {
                name: "Kokmotte Villu",
                details: "Large natural lake attracting diverse wildlife",
                highlights: "Elephants, Deer, Birds",
                season: "March to September"
            },
            {
                name: "Maradanmaduwa",
                details: "Dense forest area excellent for sloth bear sightings",
                highlights: "Sloth bears, Leopards",
                season: "May to September"
            }
        ]
    },
    {
        id: 4,
        name: "Minneriya National Park",
        locations: ["Minneriya Tank", "Giritale", "Kaudulla Connection"],
        images: [
            { src: "/minneriya-gathering.jpg", title: "The Great Elephant Gathering" },
            { src: "/minneriya-tank.jpg", title: "Ancient Minneriya Tank" },
            { src: "/elephant-herd.jpg", title: "Massive Elephant Herds" }
        ],
        bestTime: "May to October (Gathering Season)",
        difficulty: "Easy",
        duration: "3-4 hours",
        priceRange: "$20 - $40",
        description: "Famous for 'The Gathering' - the largest known meeting of Asian elephants in the world. During dry season, over 300 elephants congregate around the ancient Minneriya Tank.",
        highlights: ["The Great Gathering", "300+ Elephants", "Ancient Tank", "Seasonal Spectacle"],
        safetyTips: [
            "Visit during recommended seasons for best experience",
            "Maintain respectful distance from elephant herds",
            "Follow designated safari routes only",
            "Book early during gathering season"
        ],
        topZones: [
            {
                name: "Minneriya Tank",
                details: "Central area where the famous elephant gathering occurs",
                capacity: "300+ elephants",
                season: "July to September (peak)"
            },
            {
                name: "Giritale",
                details: "Northern section with diverse bird species and smaller herds",
                wildlife: "Birds, Small elephant groups",
                season: "May to October"
            },
            {
                name: "Kaudulla Connection",
                details: "Corridor connecting to Kaudulla NP with year-round elephants",
                features: "Migration corridor",
                season: "Year-round"
            }
        ]
    },
    {
        id: 5,
        name: "Kumana National Park",
        locations: ["Kumana Villu", "Kumbukkan Oya", "Okanda"],
        images: [
            { src: "/kumana-birds.jpg", title: "Bird Paradise - Kumana" },
            { src: "/kumana-lagoon.jpg", title: "Kumana Lagoon" },
            { src: "/water-birds.jpg", title: "Migratory Water Birds" }
        ],
        bestTime: "April to July (Bird Migration)",
        difficulty: "Easy to Moderate",
        duration: "Half day to full day",
        priceRange: "$25 - $50",
        description: "Renowned as Sri Lanka's premier bird watching destination, especially during migration season. The park hosts over 255 bird species and is part of the greater Yala ecosystem.",
        highlights: ["255+ Bird Species", "Migration Hotspot", "Lagoon Ecosystem", "Part of Yala Complex"],
        safetyTips: [
            "Bring binoculars for optimal bird watching",
            "Early morning visits recommended",
            "Protect equipment from salt air near coast",
            "Stay hydrated in hot coastal climate"
        ],
        topZones: [
            {
                name: "Kumana Villu",
                details: "Main lagoon area with highest bird diversity",
                species: "Water birds, Migrants",
                season: "April to July"
            },
            {
                name: "Kumbukkan Oya",
                details: "River system with crocodiles and diverse wildlife",
                wildlife: "Crocodiles, Water birds",
                season: "May to September"
            },
            {
                name: "Okanda",
                details: "Coastal section with seabirds and beach access",
                features: "Coastal birds, Beach",
                season: "April to August"
            }
        ]
    },
    {
        id: 6,
        name: "Wasgamuwa National Park",
        locations: ["Sudu Kanda", "Wasgamuwa Tank", "Mahaweli Buffer"],
        images: [
            { src: "/wasgamuwa-elephants.jpg", title: "Wild Elephants - Wasgamuwa" },
            { src: "/wasgamuwa-landscape.jpg", title: "Pristine Wilderness" },
            { src: "/mahaweli-river.jpg", title: "Mahaweli River System" }
        ],
        bestTime: "May to September, December to March",
        difficulty: "Moderate",
        duration: "Full day recommended",
        priceRange: "$30 - $55",
        description: "One of Sri Lanka's most pristine and least visited parks. Home to a significant elephant population and the headwaters of the Mahaweli River, offering untouched wilderness experience.",
        highlights: ["Pristine Wilderness", "Mahaweli River", "Elephant Herds", "Less Crowded"],
        safetyTips: [
            "Park has rough terrain - suitable 4WD required",
            "Carry emergency supplies",
            "Inform park authorities of your route",
            "Best visited with experienced guides"
        ],
        topZones: [
            {
                name: "Sudu Kanda",
                details: "Rocky outcrop area with panoramic views and leopard potential",
                elevation: "Highest point",
                season: "December to March"
            },
            {
                name: "Wasgamuwa Tank",
                details: "Ancient tank attracting elephants and water birds",
                wildlife: "Elephants, Water birds",
                season: "May to September"
            },
            {
                name: "Mahaweli Buffer",
                details: "River system with diverse ecosystems and wildlife corridors",
                features: "River ecosystem",
                season: "Year-round"
            }
        ]
    },
    {
        id: 7,
        name: "Kaudulla National Park",
        locations: ["Kaudulla Tank", "Habarana", "Minneriya Connection"],
        images: [
            { src: "/kaudulla-elephants.jpg", title: "Elephant Herds - Kaudulla" },
            { src: "/kaudulla-tank.jpg", title: "Ancient Kaudulla Tank" },
            { src: "/kaudulla-landscape.jpg", title: "Dry Zone Landscape" }
        ],
        bestTime: "August to December",
        difficulty: "Easy",
        duration: "3-4 hours",
        priceRange: "$20 - $40",
        description: "Part of the elephant corridor connecting Minneriya and Kaudulla, famous for large elephant gatherings during the dry season. Less crowded alternative to Minneriya with equally spectacular wildlife viewing.",
        highlights: ["Elephant Corridor", "Ancient Tank System", "Bird Watching", "Less Crowded"],
        safetyTips: [
            "Peak season overlaps with Minneriya gathering",
            "Early morning visits recommended",
            "Carry water during hot season",
            "Respect elephant right of way"
        ],
        topZones: [
            {
                name: "Kaudulla Tank",
                details: "Main water source attracting large elephant herds",
                capacity: "200+ elephants",
                season: "August to December"
            },
            {
                name: "Habarana",
                details: "Entry point with visitor facilities",
                features: "Visitor center, guides",
                season: "Year-round"
            },
            {
                name: "Minneriya Connection",
                details: "Corridor area with migrating elephants",
                wildlife: "Migrating herds",
                season: "August to November"
            }
        ]
    },
    {
        id: 8,
        name: "Horton Plains National Park",
        locations: ["World's End", "Baker's Falls", "Ohiya"],
        images: [
            { src: "/worlds-end.jpg", title: "World's End Cliff" },
            { src: "/horton-plains.jpg", title: "Montane Grasslands" },
            { src: "/bakers-falls.jpg", title: "Baker's Falls" }
        ],
        bestTime: "January to March, August to September",
        difficulty: "Moderate to Challenging",
        duration: "4-6 hours (hiking)",
        priceRange: "$15 - $25",
        description: "Sri Lanka's highest plateau featuring unique montane ecosystems, endemic species, and the famous World's End cliff with a 870m drop. Home to sambar deer and endemic birds.",
        highlights: ["World's End View", "Endemic Species", "Cloud Forest", "Hiking Trails"],
        safetyTips: [
            "Start early to avoid afternoon mist",
            "Wear warm clothing - can be very cold",
            "Stay on marked trails only",
            "Bring sufficient water and snacks"
        ],
        topZones: [
            {
                name: "World's End",
                details: "Spectacular cliff viewpoint with 870m drop",
                elevation: "2,140m above sea level",
                season: "Clear mornings best"
            },
            {
                name: "Baker's Falls",
                details: "20m waterfall in cloud forest setting",
                features: "Waterfall, forest walk",
                season: "Year-round"
            },
            {
                name: "Ohiya",
                details: "Montane grasslands with endemic flora",
                wildlife: "Endemic birds, sambar deer",
                season: "January to March"
            }
        ]
    },
    {
        id: 9,
        name: "Bundala National Park",
        locations: ["Bundala Lagoon", "Malala Lagoon", "Embilikala"],
        images: [
            { src: "/bundala-birds.jpg", title: "Migratory Birds - Bundala" },
            { src: "/bundala-lagoon.jpg", title: "Coastal Lagoons" },
            { src: "/flamingos-bundala.jpg", title: "Greater Flamingos" }
        ],
        bestTime: "October to March (Migration Season)",
        difficulty: "Easy",
        duration: "3-5 hours",
        priceRange: "$15 - $30",
        description: "Sri Lanka's first Ramsar wetland site, renowned for migratory birds especially flamingos. Home to over 200 bird species and important nesting site for sea turtles.",
        highlights: ["197 Bird Species", "Greater Flamingos", "Ramsar Site", "Sea Turtle Nesting"],
        safetyTips: [
            "Bring binoculars for bird watching",
            "Apply sunscreen - limited shade",
            "Respect bird nesting areas",
            "Best visited during migration season"
        ],
        topZones: [
            {
                name: "Bundala Lagoon",
                details: "Main lagoon with highest bird diversity",
                species: "Flamingos, pelicans, storks",
                season: "October to March"
            },
            {
                name: "Malala Lagoon",
                details: "Quieter lagoon excellent for photography",
                features: "Photography hide, diverse birds",
                season: "November to February"
            },
            {
                name: "Embilikala",
                details: "Coastal area with sea turtle nesting",
                wildlife: "Sea turtles, shore birds",
                season: "December to April"
            }
        ]
    },
    {
        id: 10,
        name: "Gal Oya National Park",
        locations: ["Senanayake Samudraya", "Inginiyagala", "Boat Safari Zone"],
        images: [
            { src: "/gal-oya-elephants.jpg", title: "Swimming Elephants" },
            { src: "/senanayake-reservoir.jpg", title: "Senanayake Samudraya" },
            { src: "/gal-oya-boat.jpg", title: "Boat Safari Experience" }
        ],
        bestTime: "May to September, December to March",
        difficulty: "Easy to Moderate",
        duration: "Half day to full day",
        priceRange: "$30 - $60",
        description: "Unique for its boat safaris and famous swimming elephants. Sri Lanka's largest reservoir creates islands where elephants swim between them - a truly unique wildlife experience.",
        highlights: ["Swimming Elephants", "Boat Safaris", "Largest Reservoir", "Island Ecosystems"],
        safetyTips: [
            "Boat safaris require advance booking",
            "Life jackets mandatory on boats",
            "Swimming elephants best seen early morning",
            "Bring waterproof camera protection"
        ],
        topZones: [
            {
                name: "Senanayake Samudraya",
                details: "Main reservoir area for boat safaris",
                area: "Largest man-made lake",
                season: "Year-round"
            },
            {
                name: "Inginiyagala",
                details: "Dam area with diverse bird species",
                wildlife: "Water birds, elephants",
                season: "December to March"
            },
            {
                name: "Boat Safari Zone",
                details: "Islands where elephants swim between landmasses",
                unique: "Swimming elephants",
                season: "May to September"
            }
        ]
    },
    {
        id: 11,
        name: "Sinharaja Forest Reserve",
        locations: ["Kudawa", "Deniyaya", "Pitadeniya"],
        images: [
            { src: "/sinharaja-canopy.jpg", title: "Rainforest Canopy" },
            { src: "/sinharaja-endemic.jpg", title: "Endemic Bird Species" },
            { src: "/sinharaja-trail.jpg", title: "Forest Hiking Trail" }
        ],
        bestTime: "December to April, August to September",
        difficulty: "Moderate to Challenging",
        duration: "4-8 hours (guided treks)",
        priceRange: "$20 - $45",
        description: "UNESCO World Heritage rainforest, last viable area of primary tropical rainforest in Sri Lanka. Home to over 60% of endemic trees and many endemic bird and butterfly species.",
        highlights: ["UNESCO World Heritage", "60% Endemic Trees", "Endemic Birds", "Biodiversity Hotspot"],
        safetyTips: [
            "Mandatory guide required for all visitors",
            "Wear leech socks and long pants",
            "Bring rain gear - frequent showers",
            "Stay on designated trails only"
        ],
        topZones: [
            {
                name: "Kudawa",
                details: "Main entrance with research station",
                facilities: "Research center, guides",
                season: "Year-round"
            },
            {
                name: "Deniyaya",
                details: "Southern entrance with waterfall trails",
                features: "Waterfalls, canopy walks",
                season: "December to April"
            },
            {
                name: "Pitadeniya",
                details: "Northern section with bird watching towers",
                wildlife: "Endemic birds, primates",
                season: "August to September"
            }
        ]
    },
    {
        id: 12,
        name: "Lunugamvehera National Park",
        locations: ["Lunugamvehera Tank", "Yala Buffer", "Kirinde"],
        images: [
            { src: "/lunugamvehera-elephants.jpg", title: "Elephant Herds" },
            { src: "/lunugamvehera-tank.jpg", title: "Lunugamvehera Reservoir" },
            { src: "/lunugamvehera-landscape.jpg", title: "Dry Zone Wilderness" }
        ],
        bestTime: "May to September, December to March",
        difficulty: "Easy",
        duration: "3-5 hours",
        priceRange: "$15 - $35",
        description: "Buffer zone to Yala, offering excellent elephant viewing with fewer crowds. Important elephant corridor and water source during dry seasons.",
        highlights: ["Elephant Corridor", "Less Crowded", "Buffer to Yala", "Bird Watching"],
        safetyTips: [
            "Often combined with Yala visits",
            "Good alternative when Yala is crowded",
            "Excellent for bird photography",
            "Early morning visits recommended"
        ],
        topZones: [
            {
                name: "Lunugamvehera Tank",
                details: "Main water source attracting wildlife",
                wildlife: "Elephants, water birds",
                season: "Dry season best"
            },
            {
                name: "Yala Buffer",
                details: "Transition zone with diverse habitats",
                features: "Mixed ecosystems",
                season: "Year-round"
            },
            {
                name: "Kirinde",
                details: "Coastal section with marine access",
                features: "Coastal birds, marine life",
                season: "December to March"
            }
        ]
    },
    {
        id: 13,
        name: "Hikkaduwa National Park",
        locations: ["Coral Reef", "Turtle Beach", "Marine Sanctuary"],
        images: [
            { src: "/hikkaduwa-coral.jpg", title: "Coral Reef System" },
            { src: "/hikkaduwa-turtles.jpg", title: "Sea Turtles" },
            { src: "/hikkaduwa-snorkel.jpg", title: "Snorkeling Experience" }
        ],
        bestTime: "November to April",
        difficulty: "Easy",
        duration: "2-4 hours (snorkeling/diving)",
        priceRange: "$25 - $50",
        description: "Sri Lanka's first marine national park, protecting coral reefs and marine life. Famous for sea turtle encounters and colorful coral formations ideal for snorkeling.",
        highlights: ["Marine National Park", "Coral Reefs", "Sea Turtles", "Snorkeling Paradise"],
        safetyTips: [
            "Swimming ability required",
            "Use reef-safe sunscreen only",
            "Don't touch or stand on corals",
            "Guided tours recommended for safety"
        ],
        topZones: [
            {
                name: "Coral Reef",
                details: "Main reef system with diverse marine life",
                depth: "2-15 meters",
                season: "November to April"
            },
            {
                name: "Turtle Beach",
                details: "Shallow area popular for turtle sightings",
                wildlife: "Green and hawksbill turtles",
                season: "December to March"
            },
            {
                name: "Marine Sanctuary",
                details: "Protected zone with pristine coral formations",
                features: "Untouched reefs",
                season: "Calm seas best"
            }
        ]
    },
    {
        id: 14,
        name: "Pigeon Island National Park",
        locations: ["Large Pigeon Island", "Small Pigeon Island", "Coral Gardens"],
        images: [
            { src: "/pigeon-island-coral.jpg", title: "Pristine Coral Reefs" },
            { src: "/pigeon-island-beach.jpg", title: "Crystal Clear Waters" },
            { src: "/reef-sharks.jpg", title: "Reef Sharks" }
        ],
        bestTime: "May to October",
        difficulty: "Easy",
        duration: "3-5 hours",
        priceRange: "$20 - $40",
        description: "Two small islands off Nilaveli with some of Sri Lanka's best coral reefs. Marine sanctuary protecting diverse coral species and reef sharks in crystal-clear waters.",
        highlights: ["Best Coral Reefs", "Reef Sharks", "Crystal Waters", "Island Paradise"],
        safetyTips: [
            "Boat transfer required from Nilaveli",
            "Snorkeling gear available for rent",
            "No feeding of marine life",
            "Respect marine sanctuary rules"
        ],
        topZones: [
            {
                name: "Large Pigeon Island",
                details: "Main island with visitor facilities and best reefs",
                features: "Beach, restrooms",
                season: "May to October"
            },
            {
                name: "Small Pigeon Island",
                details: "Smaller island with pristine coral gardens",
                highlights: "Untouched reefs",
                season: "Calm weather only"
            },
            {
                name: "Coral Gardens",
                details: "Underwater reef system between islands",
                wildlife: "Reef sharks, tropical fish",
                season: "May to September"
            }
        ]
    }
]

const safetyGuidelines = [
    {
        title: "Choose Licensed Safari Operators",
        description: "Always book with registered safari companies that have proper permits and experienced naturalist guides. Check reviews and certifications before booking."
    },
    {
        title: "Respect Wildlife and Nature",
        description: "Maintain safe distances, never feed animals, and follow Leave No Trace principles during your safari. Wildlife photography should never disturb natural behavior."
    },
    {
        title: "Follow Park Regulations",
        description: "Adhere to park timings, designated routes, and vehicle restrictions. Some areas may be temporarily closed for conservation or safety reasons."
    },
    {
        title: "Come Prepared for Weather",
        description: "Bring sun protection, water, binoculars, and appropriate clothing. Weather can change quickly, especially in mountainous areas like Horton Plains."
    },
    {
        title: "Emergency Preparedness",
        description: "Inform someone of your safari plans and carry emergency contacts. Cell coverage may be limited in remote parks like Wilpattu and Wasgamuwa."
    },
    {
        title: "Book Accommodations in Advance",
        description: "During peak seasons (December-March), book safari tours and nearby accommodations well in advance. Popular parks like Yala can get fully booked."
    }
]

const expertTips = [
    {
        category: "Best Photography Times",
        tips: [
            "Golden hour (6:00-8:00 AM) offers best lighting and active wildlife",
            "Bring telephoto lens (300mm+) for safe wildlife photography",
            "Overcast days are excellent for forest parks like Sinharaja",
            "Avoid flash photography as it disturbs wildlife"
        ]
    },
    {
        category: "Park-Specific Insider Tips",
        tips: [
            "Yala Block 1: Enter early to avoid crowds, best leopard sightings at Patanangala",
            "Minneriya: Visit during August-September for the Great Gathering spectacle",
            "Horton Plains: Start at 6 AM to see World's End before mist rolls in",
            "Gal Oya: Book boat safaris in advance, swimming elephants best seen morning"
        ]
    },
    {
        category: "What to Pack",
        tips: [
            "Neutral colored clothing (khaki, olive) - avoid bright colors",
            "Wide-brimmed hat and high SPF sunscreen",
            "Insect repellent with DEET for forest areas",
            "Extra batteries and memory cards for cameras",
            "Leech socks for rainforest treks in Sinharaja"
        ]
    },
    {
        category: "Budget Planning",
        tips: [
            "Shared jeep safaris cost less than private vehicles",
            "Many parks offer half-day options to save money",
            "Combine multiple parks in the same region for better value",
            "Local guesthouses near parks offer authentic experiences",
            "Bring your own snacks and water to avoid park premium prices"
        ]
    }
]

const seasonalAdvice = {
    "Peak Season (Dec-Mar)": {
        advantages: ["Best weather", "Highest wildlife activity", "Clear skies for photography"],
        disadvantages: ["Higher prices", "Crowded parks", "Need advance booking"],
        tips: ["Book 2-3 months ahead", "Start safaris very early", "Consider lesser-known parks"]
    },
    "Shoulder Season (Apr-May, Sep-Nov)": {
        advantages: ["Lower prices", "Fewer crowds", "Good weather windows"],
        disadvantages: ["Some rain possible", "Variable wildlife activity"],
        tips: ["Flexible scheduling helpful", "Great for bird migration", "Mixed park visits work well"]
    },
    "Off Season (Jun-Aug)": {
        advantages: ["Lowest prices", "Empty parks", "Lush green landscapes"],
        disadvantages: ["Heavy rain possible", "Some roads may be difficult"],
        tips: ["Focus on covered areas", "Bring rain gear", "Perfect for Sinharaja forest"]
    }
}

const seasonalGuide = {
    "December to March": {
        region: "All Parks",
        conditions: "Dry season, excellent wildlife viewing",
        advantages: ["Clear weather", "Animals gather at water sources", "Best photography conditions"],
        parks: ["Yala", "Udawalawe", "Wilpattu", "Wasgamuwa"]
    },
    "April to July": {
        region: "Eastern & Northern Parks", 
        conditions: "Migration season, excellent for birds",
        advantages: ["Bird migration peak", "Elephant gathering starts", "Less crowded"],
        parks: ["Kumana", "Minneriya", "Yala Block 2"]
    },
    "May to October": {
        region: "Central & Northern Parks",
        conditions: "Gathering season, spectacular elephant herds",
        advantages: ["The Great Gathering", "Large herds", "Unique experiences"],
        parks: ["Minneriya", "Kaudulla", "Wasgamuwa"]
    }
}

// Compact Image Carousel Component (smaller than water activities)
function CompactImageCarousel({ images, difficulty }: { images: { src: string; title: string }[]; difficulty?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    const minSwipeDistance = 50

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
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
            className="relative h-48 md:h-80 lg:h-72 xl:h-80 group overflow-hidden rounded-lg"
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
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-all opacity-100 shadow-lg"
                    >
                        <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-all opacity-100 shadow-lg"
                    >
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all touch-manipulation ${
                                index === currentIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            )}

            {/* Image Title */}
            <div className="absolute bottom-6 left-2 right-2 text-center">
                <p className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm rounded px-2 py-1 inline-block">
                    {images[currentIndex].title}
                </p>
            </div>

            {/* Difficulty Badge */}
            {difficulty && (
                <Badge className="absolute top-2 left-2 bg-green-600 text-white text-xs">
                    {difficulty}
                </Badge>
            )}
        </div>
    )
}

export default function WildSafarisPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-16">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Complete Wildlife Guide
                        <span className="block text-emerald-300">Sri Lanka</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
                        Explore 14 protected areas from famous leopard territories to pristine coral reefs. Your complete guide to Sri Lanka&apos;s incredible biodiversity.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <TreePine className="w-4 h-4 mr-2" />
                            14 Protected Areas
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <Star className="w-4 h-4 mr-2" />
                            World-class Wildlife
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                            <Users className="w-4 h-4 mr-2" />
                            Expert Guides
                        </Badge>
                    </div>
                </div>
            </section>


            <div className="max-w-6xl mx-auto px-4 py-4">
                {/* Quick Navigation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Choose Your Safari Destination
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {wildlifeSafaris.map((safari) => (
                            <a
                                key={safari.id}
                                href={`#${safari.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group bg-white dark:bg-gray-800 rounded-xl p-3 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="text-xl mb-2 group-hover:scale-110 transition-transform">
                                    {safari.id === 1 && "🐆"}
                                    {safari.id === 2 && "🐘"}
                                    {safari.id === 3 && "🏞️"}
                                    {safari.id === 4 && "🦣"}
                                    {safari.id === 5 && "🦅"}
                                    {safari.id === 6 && "🌿"}
                                    {safari.id === 7 && "🦌"}
                                    {safari.id === 8 && "⛰️"}
                                    {safari.id === 9 && "🦩"}
                                    {safari.id === 10 && "🏊"}
                                    {safari.id === 11 && "🌳"}
                                    {safari.id === 12 && "🦆"}
                                    {safari.id === 13 && "🐠"}
                                    {safari.id === 14 && "🏝️"}
                                </div>
                                <h3 className="font-semibold text-xs text-gray-900 dark:text-white">
                                    {safari.name.replace(' National Park', '').replace(' Forest Reserve', '')}
                                </h3>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Seasonal Guide */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Best Times to Visit
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(seasonalGuide).map(([season, info]) => (
                            <Card key={season} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-green-600" />
                                        {season}
                                    </CardTitle>
                                    <p className="text-green-600 font-semibold">{info.region}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {info.conditions}
                                        </p>
                                        <div>
                                            <h4 className="font-semibold mb-2">Advantages:</h4>
                                            <ul className="text-sm space-y-1">
                                                {info.advantages.map((advantage, index) => (
                                                    <li key={index} className="flex items-start gap-1">
                                                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-600 dark:text-gray-400">{advantage}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Recommended Parks:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {info.parks.map((park) => (
                                                    <Badge key={park} variant="outline" className="text-xs">
                                                        {park}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Mobile-friendly Ad */}
                {/* <section className="mb-8 xl:hidden">
                    <AdBanner 
                        slot="wild-safari-mobile"
                        className="max-w-sm mx-auto"
                    />
                </section> */}

                {/* Safari Parks */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        National Parks & Wildlife Reserves
                    </h2>
                    <div className="space-y-8 lg:space-y-12">
                        {wildlifeSafaris.slice(0, 3).map((safari) => (
                            <div
                                key={safari.id}
                                id={safari.name.toLowerCase().replace(/\s+/g, '-')}
                                className="scroll-mt-20"
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="flex flex-col md:flex-row md:gap-6 p-6">
                                        {/* Compact Image Carousel */}
                                        <div className="md:w-2/5 lg:w-1/3">
                                            <CompactImageCarousel 
                                                images={safari.images} 
                                                difficulty={safari.difficulty} 
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 mt-4 md:mt-0">
                                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                                {safari.name}
                                            </h3>
                                            
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                {safari.description}
                                            </p>

                                            {/* Quick Info */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-green-600" />
                                                    <span className="text-sm">{safari.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <DollarSign className="w-4 h-4 text-blue-600" />
                                                    <span className="text-sm">{safari.priceRange}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-purple-600" />
                                                    <span className="text-sm">{safari.bestTime}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-red-600" />
                                                    <span className="text-sm">{safari.locations.length} Zones</span>
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2">Highlights:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {safari.highlights.map((highlight) => (
                                                        <Badge key={highlight} variant="secondary" className="text-xs">
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Top Zones */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold mb-3">Safari Zones:</h4>
                                                <div className="grid gap-3">
                                                    {safari.topZones.map((zone) => (
                                                        <div key={zone.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h5 className="font-semibold text-green-600">{zone.name}</h5>
                                                                <Badge variant="outline" className="text-xs">
                                                                    {zone.season}
                                                                </Badge>
                                                            </div>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                                {zone.details}
                                                            </p>
                                                            <div className="text-xs text-gray-500 dark:text-gray-500">
                                                                {Object.entries(zone).map(([key, value]) => {
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
                                                    Safari Guidelines:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {safari.safetyTips.map((tip, index) => (
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

                     

                        {wildlifeSafaris.slice(3).map((safari) => (
                            <div
                                key={safari.id}
                                id={safari.name.toLowerCase().replace(/\s+/g, '-')}
                                className="scroll-mt-40"
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="flex flex-col md:flex-row md:gap-6 p-6">
                                        {/* Compact Image Carousel */}
                                        <div className="md:w-2/5 lg:w-1/3">
                                            <CompactImageCarousel 
                                                images={safari.images} 
                                                difficulty={safari.difficulty} 
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 mt-4 md:mt-0">
                                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                                {safari.name}
                                            </h3>
                                            
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                {safari.description}
                                            </p>

                                            {/* Quick Info */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-green-600" />
                                                    <span className="text-sm">{safari.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <DollarSign className="w-4 h-4 text-blue-600" />
                                                    <span className="text-sm">{safari.priceRange}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-purple-600" />
                                                    <span className="text-sm">{safari.bestTime}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-red-600" />
                                                    <span className="text-sm">{safari.locations.length} Zones</span>
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2">Highlights:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {safari.highlights.map((highlight) => (
                                                        <Badge key={highlight} variant="secondary" className="text-xs">
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Top Zones */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold mb-3">Safari Zones:</h4>
                                                <div className="grid gap-3">
                                                    {safari.topZones.map((zone) => (
                                                        <div key={zone.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h5 className="font-semibold text-green-600">{zone.name}</h5>
                                                                <Badge variant="outline" className="text-xs">
                                                                    {zone.season}
                                                                </Badge>
                                                            </div>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                                {zone.details}
                                                            </p>
                                                            <div className="text-xs text-gray-500 dark:text-gray-500">
                                                                {Object.entries(zone).map(([key, value]) => {
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
                                                    Safari Guidelines:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {safari.safetyTips.map((tip, index) => (
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
                        Essential Safari Guidelines
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
                    <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">
                                Planning Your Wildlife Safari
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
                                        <li>• Binoculars for wildlife viewing</li>
                                        <li>• Camera with telephoto lens</li>
                                        <li>• Sun hat and sunscreen</li>
                                        <li>• Comfortable safari clothing</li>
                                        <li>• Water bottle and light snacks</li>
                                        <li>• Insect repellent</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                                        <Binoculars className="w-5 h-5 text-green-600" />
                                        Wildlife Photography Tips
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Early morning offers best lighting</li>
                                        <li>• Use telephoto lens for safety</li>
                                        <li>• Be patient and quiet</li>
                                        <li>• Respect animals&apos; natural behavior</li>
                                        <li>• Bring extra batteries and memory cards</li>
                                        <li>• Learn animal behavior patterns</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Expert Tips Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Expert Safari Tips
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {expertTips.map((tipCategory, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg text-green-600">
                                        <Star className="w-5 h-5" />
                                        {tipCategory.category}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {tipCategory.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600 dark:text-gray-400">{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Seasonal Planning Guide */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Seasonal Planning Guide
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(seasonalAdvice).map(([season, advice]) => (
                            <Card key={season} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg text-center">{season}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-green-600 mb-2">Advantages:</h4>
                                        <ul className="space-y-1">
                                            {advice.advantages.map((advantage, index) => (
                                                <li key={index} className="text-sm flex items-start gap-1">
                                                    <span className="text-green-500">+</span>
                                                    <span className="text-gray-600 dark:text-gray-400">{advantage}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-orange-600 mb-2">Considerations:</h4>
                                        <ul className="space-y-1">
                                            {advice.disadvantages.map((disadvantage, index) => (
                                                <li key={index} className="text-sm flex items-start gap-1">
                                                    <span className="text-orange-500">-</span>
                                                    <span className="text-gray-600 dark:text-gray-400">{disadvantage}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-600 mb-2">Pro Tips:</h4>
                                        <ul className="space-y-1">
                                            {advice.tips.map((tip, index) => (
                                                <li key={index} className="text-sm flex items-start gap-1">
                                                    <span className="text-blue-500">💡</span>
                                                    <span className="text-gray-600 dark:text-gray-400">{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-bold mb-4">
                                Ready for Your Wildlife Adventure?
                            </h2>
                            <p className="text-xl mb-6 text-green-100">
                                Explore Sri Lanka&apos;s incredible national parks and encounter amazing wildlife in their natural habitat
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                                    <Link href="/destinations">
                                        Explore All Parks
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                                    <Link href="/about-srilanka">
                                        Plan Your Safari
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