import type { Metadata } from "next"
import Image from "next/image"
import { Fragment } from "react"
import {
  Mountain,
  Clock,
  MapPin,
  Star,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Camera,
  Sunrise,
  TreePine,
  Compass,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Famous Trails in Sri Lanka 2025: Best Hiking & Trekking Routes | Complete Guide",
  description:
    "Discover Sri Lanka's most famous hiking trails including Adam's Peak, Ella Rock, Knuckles Range, and World's End. Complete guide with difficulty levels, best times, and safety tips.",
  keywords:
    "Sri Lanka hiking trails, Adam's Peak trail, Ella Rock trek, Knuckles Range hiking, World's End walk, famous trails Sri Lanka, trekking guide, mountain hiking",
  openGraph: {
    title: "Famous Trails in Sri Lanka: Ultimate Hiking Guide 2025",
    description:
      "Complete guide to Sri Lanka's best hiking trails with detailed information, difficulty levels, and insider tips",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

const famousTrails = [
  {
    name: "Adam's Peak (Sri Pada)",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ratnapura District, Sabaragamuwa Province",
    difficulty: "Challenging",
    duration: "4-6 hours ascent",
    elevation: "2,243 meters (7,359 feet)",
    bestTime: "December to May",
    trailLength: "7 kilometers",
    startPoint: "Dalhousie (most popular route)",
    description:
      "Sri Lanka's most sacred mountain, Adam's Peak attracts thousands of pilgrims and hikers annually. The challenging night climb rewards adventurers with spectacular sunrise views and the famous 'Sacred Footprint' at the summit. This ancient pilgrimage route features over 5,000 steps carved into the mountainside.",
    highlights: [
      "Sacred footprint revered by four religions",
      "Breathtaking sunrise views from summit",
      "Chain of lights visible at night during season",
      "Ancient pilgrimage route with rich history",
      "360-degree panoramic mountain views",
      "Spiritual experience for many visitors",
    ],
    difficulty_level: 4,
    tips: "Start climbing around 2 AM to reach summit for sunrise. Bring warm clothes as temperatures drop significantly at night. The trail is well-lit during pilgrimage season with tea stalls along the way.",
    safetyNotes: [
      "Trail can be extremely crowded during peak season",
      "Weather changes rapidly - bring layers",
      "Start early to avoid afternoon thunderstorms",
      "Stay hydrated but don't overdrink before climb",
      "Respect religious significance and customs",
    ],
    whatToBring: [
      "Headlamp or flashlight with extra batteries",
      "Warm jacket and rain protection",
      "Comfortable hiking boots with good grip",
      "Water and energy snacks",
      "Small backpack for essentials",
    ],
    nearbyAccommodation: [
      "Dalhousie rest houses and guesthouses",
      "Green House Holiday Resort",
      "Adam's Peak Pilgrim Rest",
    ],
  },
  {
    name: "Knuckles Mountain Range",
    image: "/placeholder.svg?height=400&width=600",
    location: "Matale & Kandy Districts, Central Province",
    difficulty: "Very Challenging",
    duration: "Full day to multi-day treks",
    elevation: "1,863 meters (6,112 feet) highest point",
    bestTime: "January-March, July-September",
    trailLength: "Various trails from 5-25 kilometers",
    startPoint: "Multiple entry points (Corbett's Gap most popular)",
    description:
      "A UNESCO World Heritage site renowned for its biodiversity and challenging terrain, the Knuckles Range offers some of Sri Lanka's most rewarding wilderness experiences. With cloud forests, grasslands, and endemic species, this mountain range provides authentic adventure for serious hikers and nature enthusiasts.",
    highlights: [
      "UNESCO World Heritage site status",
      "Incredible biodiversity with endemic species",
      "Cloud forest and montane grassland ecosystems",
      "Multiple trail options for different skill levels",
      "Camping opportunities in pristine wilderness",
      "Authentic Sri Lankan mountain village experiences",
    ],
    difficulty_level: 5,
    tips: "Mandatory to hire certified local guides. Multi-day treks require camping permits. Weather can be unpredictable - prepare for all conditions. Best experienced as guided tour with proper equipment.",
    safetyNotes: [
      "Never attempt without experienced local guide",
      "Weather conditions change rapidly and severely",
      "Mobile phone coverage is limited or non-existent",
      "Proper camping and survival gear essential",
      "Inform authorities about trekking plans",
      "Emergency evacuation can be extremely difficult",
    ],
    whatToBring: [
      "Professional hiking boots and gaiters",
      "Waterproof clothing and camping gear",
      "GPS device and emergency whistle",
      "First aid kit and emergency supplies",
      "High-energy food and water purification tablets",
    ],
    nearbyAccommodation: [
      "Kandy city hotels (base for day trips)",
      "Corbett's Gap camping sites",
      "Village homestays in surrounding areas",
    ],
  },
  {
    name: "Ella Rock",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ella, Badulla District, Uva Province",
    difficulty: "Moderate",
    duration: "3-4 hours round trip",
    elevation: "1,041 meters (3,415 feet)",
    bestTime: "Year-round (avoid heavy monsoons)",
    trailLength: "4 kilometers",
    startPoint: "Ella Railway Station area",
    description:
      "One of Sri Lanka's most Instagram-famous hikes, Ella Rock offers stunning panoramic views of the hill country's tea plantations, valleys, and the famous Ella Gap. The trail combines railway track walking with forest paths, making it an adventurous yet accessible experience for most fitness levels.",
    highlights: [
      "Panoramic views of Ella Gap and surrounding valleys",
      "Walk along active railway tracks",
      "Tea plantation landscapes stretching to horizon",
      "Perfect sunrise and sunset viewing spot",
      "Instagram-worthy photography opportunities",
      "Relatively accessible for beginners",
    ],
    difficulty_level: 3,
    tips: "Start early morning (6 AM) to avoid crowds and heat. Follow railway tracks initially, then look for trail markers leading into forest. Hire a local guide if unsure about the route.",
    safetyNotes: [
      "Be extremely careful on railway tracks - trains pass regularly",
      "Trail can be confusing without proper guidance",
      "Weather can change quickly in hill country",
      "Inform someone about your hiking plans",
      "Carry first aid supplies for minor injuries",
    ],
    whatToBring: [
      "Good hiking shoes with ankle support",
      "Sun protection (hat, sunscreen, sunglasses)",
      "Plenty of water (2-3 liters recommended)",
      "Camera for spectacular photo opportunities",
      "Light snacks and energy bars",
    ],
    nearbyAccommodation: ["Ella hostels and guesthouses", "98 Acres Resort & Spa", "Zion View Ella Green Retreat"],
  },
  {
    name: "Little Adam's Peak",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ella, Badulla District, Uva Province",
    difficulty: "Easy",
    duration: "1-2 hours round trip",
    elevation: "1,141 meters (3,743 feet)",
    bestTime: "Year-round",
    trailLength: "2.5 kilometers",
    startPoint: "Ella town center",
    description:
      "Perfect for beginners and families, Little Adam's Peak offers spectacular 360-degree views with minimal effort. The well-maintained trail winds through tea plantations and provides an excellent introduction to Sri Lankan hill country hiking without the physical demands of more challenging peaks.",
    highlights: [
      "360-degree panoramic mountain views",
      "Easy accessibility for all fitness levels",
      "Beautiful tea plantation walk",
      "Perfect for sunrise and sunset viewing",
      "Family-friendly hiking experience",
      "Great introduction to hill country trekking",
    ],
    difficulty_level: 2,
    tips: "Perfect for sunset viewing - plan to reach summit 30 minutes before sunset. The trail is well-marked and suitable for children. Combine with visit to nearby Nine Arch Bridge.",
    safetyNotes: [
      "Trail can be slippery during rainy weather",
      "Bring flashlight if planning sunset hike",
      "Stay on marked paths to protect tea plantations",
      "Weather can change quickly - bring light jacket",
      "Inform accommodation about your hiking plans",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Water bottle and light snacks",
      "Camera for panoramic photography",
      "Light jacket for wind protection",
      "Flashlight if hiking during sunset",
    ],
    nearbyAccommodation: ["Ella budget hostels and guesthouses", "Ambiente Ella Resort", "Grand Ella Motel"],
  },
  
  {
    name: "World's End - Horton Plains",
    image: "/placeholder.svg?height=400&width=600",
    location: "Nuwara Eliya District, Central Province",
    difficulty: "Easy to Moderate",
    duration: "3-4 hours circular trail",
    elevation: "2,100+ meters (6,890+ feet)",
    bestTime: "January-March, August-September",
    trailLength: "9 kilometers circular trail",
    startPoint: "Horton Plains National Park entrance",
    description:
      "Part of a UNESCO World Heritage site, the World's End trail offers one of Sri Lanka's most dramatic cliff-top experiences. The circular trail through unique montane grasslands leads to a sheer 870-meter drop with breathtaking views across the southern plains and coast on clear days.",
    highlights: [
      "Dramatic 870-meter cliff drop at World's End",
      "UNESCO World Heritage montane ecosystem",
      "Baker's Falls waterfall along the trail",
      "Unique high-altitude grassland environment",
      "Endemic flora and fauna spotting opportunities",
      "Views extending to southern coast on clear days",
    ],
    difficulty_level: 3,
    tips: "Start very early (6 AM) as clouds form by 10 AM, obscuring views. Entry fee required for national park. Bring warm clothes as temperatures can be near freezing in early morning.",
    safetyNotes: [
      "Altitude can affect some visitors",
      "Weather changes extremely rapidly",
      "Stay on designated trails to protect ecosystem",
      "Cliff edges are extremely dangerous",
      "No rescue facilities available in remote areas",
    ],
    whatToBring: [
      "Warm layers including windproof jacket",
      "Comfortable hiking boots",
      "Water and high-energy snacks",
      "Camera with extra batteries (cold drains power)",
      "National park entry fee payment",
    ],
    nearbyAccommodation: [
      "Nuwara Eliya hotels and guesthouses",
      "Ohiya Railway Station area lodging",
      "Pattipola area accommodations",
    ],
  },
  {
    name: "Devil Stair case Ohiya to Wangedigala",
    image: "/placeholder.svg?height=400&width=600",
    location: "Matale District, Central Province",
    difficulty: "Moderate",
    duration: "2-3 hours including exploration",
    elevation: "370 meters (1,214 feet)",
    bestTime: "Year-round (early morning recommended)",
    trailLength: "1.5 kilometers ascent",
    startPoint: "Sigiriya Archaeological Site entrance",
    description:
      "An ancient rock fortress and UNESCO World Heritage site, Sigiriya combines historical exploration with physical challenge. The climb features ancient frescoes, mirror walls, and ruins of a 5th-century palace, culminating in spectacular panoramic views of the surrounding jungle and ancient irrigation systems.",
    highlights: [
      "UNESCO World Heritage archaeological site",
      "Ancient frescoes and mirror wall inscriptions",
      "5th-century palace ruins at summit",
      "Panoramic views of ancient irrigation systems",
      "Lion's Gate and paws carved in rock",
      "Combination of history, culture, and adventure",
    ],
    difficulty_level: 3,
    tips: "Start early to avoid heat and crowds. Wear comfortable shoes with good grip for metal staircases. Bring water and take breaks at designated rest areas. Photography allowed but flash prohibited near frescoes.",
    safetyNotes: [
      "Metal staircases can be slippery when wet",
      "Vertigo sufferers may find upper sections challenging",
      "Stay on designated paths for safety and preservation",
      "Respect archaeological site rules and regulations",
      "Weather can make surfaces slippery",
    ],
    whatToBring: [
      "Comfortable shoes with good grip",
      "Sun protection and plenty of water",
      "Camera for historical and scenic photography",
      "Light backpack for essentials",
      "Archaeological site entry fee",
    ],
    nearbyAccommodation: [
      "Sigiriya village hotels and guesthouses",
      "Jetwing Vil Uyana luxury resort",
      "Dambulla area accommodations",
    ],
  },
  {
    name: "Idalgashinna trail to Ohiya",
    image: "/placeholder.svg?height=400&width=600",
    location: "Matale District, Central Province",
    difficulty: "Moderate to Challenging",
    duration: "1.5-2 hours ascent",
    elevation: "200 meters (656 feet)",
    bestTime: "Year-round (sunrise highly recommended)",
    trailLength: "1 kilometer steep ascent",
    startPoint: "Pidurangala Temple base",
    description:
      "Often called the best viewpoint for photographing Sigiriya Rock, Pidurangala offers a more adventurous and less crowded alternative. The climb involves scrambling over large boulders and provides spectacular sunrise views with Sigiriya Rock as the perfect foreground subject.",
    highlights: [
      "Best viewpoint for photographing Sigiriya Rock",
      "Spectacular sunrise viewing location",
      "Ancient temple ruins at base and summit",
      "Boulder scrambling adventure experience",
      "Less crowded than Sigiriya itself",
      "360-degree views of surrounding landscape",
    ],
    difficulty_level: 4,
    tips: "Start climb in darkness for sunrise (around 5 AM). Bring headlamp for early morning climb. The final section requires scrambling over large boulders - wear shoes with excellent grip.",
    safetyNotes: [
      "Final boulder section requires careful navigation",
      "No safety railings or assistance available",
      "Rocks can be slippery, especially when damp",
      "Inform someone about your climbing plans",
      "Emergency help may be difficult to access",
    ],
    whatToBring: [
      "Headlamp with extra batteries for pre-dawn climb",
      "Shoes with excellent grip for boulder scrambling",
      "Camera with tripod for sunrise photography",
      "Water and light snacks",
      "Small temple donation for entry",
    ],
    nearbyAccommodation: ["Sigiriya area hotels and guesthouses", "Dambulla accommodations", "Habarana resort options"],
  },
  {
    name: "Pekoe Trail",
    image: "/placeholder.svg?height=400&width=600",
    location: "Gampola, Kandy District, Central Province",
    difficulty: "Highly Challenging",
    duration: "2-3 hours including tower climb",
    elevation: "1,087 meters (3,566 feet)",
    bestTime: "Year-round (clear weather preferred)",
    trailLength: "Short walk to tower base",
    startPoint: "Ambuluwawa Biodiversity Complex entrance",
    description:
      "A unique multi-religious site featuring a distinctive spiral tower offering 360-degree views of the hill country. The biodiversity complex showcases various ecosystems, and the tower climb provides an unusual architectural adventure with spectacular panoramic views from the top.",
    highlights: [
      "Unique spiral tower architecture",
      "360-degree panoramic hill country views",
      "Multi-religious harmony site",
      "Biodiversity complex with various ecosystems",
      "Relatively easy accessibility",
      "Architectural photography opportunities",
    ],
    difficulty_level: 2,
    tips: "Tower climb can be challenging for those with vertigo. Visit on clear days for best views. Combine with exploration of biodiversity complex. Entry fee required for complex access.",
    safetyNotes: [
      "Tower stairs are narrow and steep",
      "Not suitable for those with severe vertigo",
      "Weather can change quickly affecting visibility",
      "Follow safety guidelines inside tower",
      "Respect religious significance of site",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Camera for unique architectural shots",
      "Water and light refreshments",
      "Modest clothing respecting religious site",
      "Entry fee for biodiversity complex",
    ],
    nearbyAccommodation: [
      "Kandy city hotels (30 minutes drive)",
      "Gampola area guesthouses",
      "Peradeniya area accommodations",
    ],
  },
]

const trailTips = [
  {
    icon: Sunrise,
    title: "Start Early",
    description:
      "Begin hikes before sunrise to avoid crowds, heat, and afternoon weather changes. Early starts provide the best lighting for photography and views.",
  },
  {
    icon: Thermometer,
    title: "Check Weather",
    description:
      "Mountain weather changes rapidly in Sri Lanka. Check forecasts and be prepared for sudden rain, mist, or temperature drops.",
  },
  {
    icon: TreePine,
    title: "Respect Nature",
    description:
      "Follow Leave No Trace principles. Stay on marked trails, don't litter, and respect wildlife and vegetation. Preserve these trails for future generations.",
  },
  {
    icon: Compass,
    title: "Hire Local Guides",
    description:
      "For challenging trails like Knuckles Range, local guides provide safety, navigation, and cultural insights that enhance the experience significantly.",
  },
]

export default function FamousTrailsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Famous Trails of Sri Lanka
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Discover iconic hiking routes through mountains, forests, and ancient sites across the Pearl of the Indian
            Ocean
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-green-600 dark:text-green-400">8 Epic Trails</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-blue-600 dark:text-blue-400">All Skill Levels</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-purple-600 dark:text-purple-400">UNESCO Sites</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Sri Lanka&apos;s Most Iconic Hiking Trails
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sri Lanka&apos;s diverse landscape offers some of the world&apos;s most spectacular hiking trails, from sacred
              mountain peaks to ancient rock fortresses. Whether you&apos;re seeking spiritual enlightenment on Adam&apos;s Peak,
              panoramic views from Ella Rock, or challenging adventures in the Knuckles Range, the island&apos;s trails cater
              to every level of hiker.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Each trail tells a unique story - from ancient pilgrimage routes to colonial-era paths through tea
              plantations. Our comprehensive guide covers the most famous trails with detailed information on difficulty
              levels, best times to visit, and essential safety tips for an unforgettable hiking experience.
            </p>
          </div>
        </section>

        {/* Trail Difficulty Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Trail Difficulty Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                level: 1,
                name: "Very Easy",
                color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                description: "Flat paths, under 1 hour",
              },
              {
                level: 2,
                name: "Easy",
                color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                description: "Gentle slopes, 1-2 hours",
              },
              {
                level: 3,
                name: "Moderate",
                color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                description: "Some steep sections, 2-4 hours",
              },
              {
                level: 4,
                name: "Challenging",
                color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                description: "Steep climbs, 4-6 hours",
              },
              {
                level: 5,
                name: "Very Challenging",
                color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                description: "Technical terrain, full day+",
              },
            ].map((difficulty) => (
              <div
                key={difficulty.level}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`w-12 h-12 rounded-full ${difficulty.color} flex items-center justify-center mx-auto mb-2 font-bold text-lg`}
                >
                  {difficulty.level}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{difficulty.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{difficulty.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Banner */}
        <div className="flex justify-center py-8">
          <div className="w-full max-w-4xl">
          
          </div>
        </div>

        {/* Famous Trails Grid */}
        <section className="space-y-8">
          {famousTrails.map((trail, index) => (
            <Fragment key={index}>
              {/* Trail Card */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative w-full lg:w-2/5 h-64 lg:h-auto">
                    <Image
                      src={trail.image || "/placeholder.svg"}
                      alt={`${trail.name} - Famous hiking trail in Sri Lanka`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          trail.difficulty_level <= 2
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : trail.difficulty_level <= 3
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : trail.difficulty_level <= 4
                                ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {trail.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {trail.elevation}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {trail.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {trail.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{trail.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mountain className="w-4 h-4" />
                          <span>{trail.trailLength}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Thermometer className="w-4 h-4" />
                          <span>{trail.bestTime}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{trail.description}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Trail Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {trail.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips and Safety */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Hiking Tips
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{trail.tips}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          Safety Notes
                        </h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300">
                          {trail.safetyNotes.slice(0, 3).map((note, i) => (
                            <li key={i} className="flex items-start gap-2 mb-1">
                              <span className="text-red-500 mt-1">•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* What to Bring */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Camera className="w-4 h-4 text-purple-500" />
                        What to Bring
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {trail.whatToBring.map((item, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Nearby Accommodation */}
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        Nearby Accommodation
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {trail.nearbyAccommodation.map((accommodation, i) => (
                          <span
                            key={i}
                            className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {accommodation}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Ad placement after every 3 trails */}
              {(index + 1) % 3 === 0 && (
                <div className="flex justify-center py-8">
                  <div className="w-full max-w-4xl">
                   
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </section>

        {/* Essential Trail Tips */}
        <section className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Essential Trail Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trailTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Ad Space */}
        <div className="flex justify-center py-12">
          <div className="w-full max-w-4xl">
           
          </div>
        </div>
      </div>
    </main>
  )
}
