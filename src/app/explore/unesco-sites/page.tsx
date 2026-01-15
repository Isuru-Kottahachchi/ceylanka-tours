'use client'

import Image from "next/image"
import { Fragment } from "react"
import { MapPin, Calendar, Clock, Star, Users, Camera, Info, Mountain } from "lucide-react"
import { ImageCarousel } from "@/components/ui/image-carousel"

const unescoSites = [
  {
    name: "Sigiriya Rock Fortress",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Sigiriya Rock Fortress", title: "Sigiriya Rock Fortress" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Ancient Frescoes", title: "Ancient Frescoes" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Summit Palace Ruins", title: "Summit Palace Ruins" },
    ],
    location: "Matale District, Central Province",
    yearInscribed: "1982",
    category: "Cultural",
    bestTime: "December to April",
    entryFee: "USD 30 for foreigners",
    duration: "3-4 hours",
    difficulty: "Moderate",
    elevation: "200 meters (660 feet) above plains",
    description:
      "Rising 200 meters above the surrounding plains, Sigiriya is an ancient rock fortress and palace built by King Kashyapa I (477-495 AD). Known as the 'Lion Rock', it features remarkable frescoes, mirror wall inscriptions, and sophisticated water gardens that showcase ancient Sri Lankan engineering and artistry.",
    highlights: [
      "Ancient frescoes of celestial maidens",
      "Mirror Wall with ancient graffiti",
      "Lion's Gate entrance",
      "Summit palace ruins with panoramic views",
      "Sophisticated water gardens and fountains",
    ],
    tips: "Start early (6:30 AM) to avoid crowds and heat. Wear comfortable shoes with good grip. Bring water and sun protection.",
    nearbyAttractions: ["Pidurangala Rock", "Dambulla Cave Temple", "Minneriya National Park"],
    bestPhotography:
      "Golden hour (sunrise/sunset) from Pidurangala Rock for exterior shots, early morning for interior exploration",
  },
  {
    name: "Ancient City of Anuradhapura",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Ruwanwelisaya Stupa", title: "Ruwanwelisaya Stupa" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Sri Maha Bodhi Sacred Tree", title: "Sri Maha Bodhi Sacred Tree" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Ancient Monastery Ruins", title: "Ancient Monastery Ruins" },
    ],
    location: "Anuradhapura District, North Central Province",
    yearInscribed: "1982",
    category: "Cultural",
    bestTime: "November to March",
    entryFee: "USD 25 for foreigners",
    duration: "Full day (6-8 hours)",
    difficulty: "Easy",
    description:
      "Sri Lanka's first capital and one of the oldest continuously inhabited cities in the world, Anuradhapura flourished for over 1,300 years (4th century BC to 11th century AD). This sacred city contains palaces, monasteries, and monuments that showcase the early development of Buddhist civilization in Sri Lanka.",
    highlights: [
      "Sri Maha Bodhi - sacred Bo tree over 2,300 years old (oldest documented tree)",
      "Ruwanwelisaya - massive white stupa (103m high)",
      "Jetavanaramaya - once world's third tallest structure (122m)",
      "Abhayagiri Monastery complex",
      "Ancient irrigation systems and twin ponds (Kuttam Pokuna)",
    ],
    tips: "Rent a bicycle or hire a tuk-tuk for easy transportation between sites. Dress modestly for temple visits. Carry plenty of water.",
    nearbyAttractions: [
      "Mihintale - birthplace of Buddhism in Sri Lanka",
      "Wilpattu National Park",
      "Aukana Buddha Statue",
    ],
    bestPhotography: "Early morning for soft light on stupas, sunset at Sri Maha Bodhi tree",
  },
  {
    name: "Ancient City of Polonnaruwa",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Gal Vihara Buddha Statues", title: "Gal Vihara Buddha Statues" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Parakrama Samudra Reservoir", title: "Parakrama Samudra Reservoir" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Royal Palace Complex", title: "Royal Palace Complex" },
    ],
    location: "Polonnaruwa District, North Central Province",
    yearInscribed: "1982",
    category: "Cultural",
    bestTime: "December to March",
    entryFee: "USD 25 for foreigners",
    duration: "Full day (5-6 hours)",
    difficulty: "Easy to Moderate",
    description:
      "The second ancient capital of Sri Lanka, Polonnaruwa represents the golden age of Sinhalese civilization (11th-13th centuries). This well-preserved archaeological site showcases advanced urban planning, sophisticated irrigation systems, and magnificent Buddhist and Hindu monuments.",
    highlights: [
      "Gal Vihara - four magnificent Buddha statues carved from granite",
      "Parakrama Samudra - ancient reservoir",
      "Royal Palace complex of King Parakramabahu",
      "Lotus Pond - beautifully carved bathing pool",
      "Lankatilaka and Watadage temples",
    ],
    tips: "Best explored by bicycle. Start with Gal Vihara early morning for best lighting. Bring sun hat and comfortable walking shoes.",
    nearbyAttractions: ["Minneriya National Park", "Kaudulla National Park", "Somawathiya National Park"],
    bestPhotography: "Golden hour at Gal Vihara, aerial shots of Parakrama Samudra",
  },
  {
    name: "Golden Temple of Dambulla",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Dambulla Cave Temple", title: "Dambulla Cave Temple" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Cave Murals and Buddha Statues", title: "Cave Murals and Buddha Statues" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Golden Temple Exterior", title: "Golden Temple Exterior" },
    ],
    location: "Matale District, Central Province",
    yearInscribed: "1991",
    category: "Cultural",
    bestTime: "Year-round, early morning preferred",
    entryFee: "USD 10 for foreigners",
    duration: "2-3 hours",
    difficulty: "Easy",
    description:
      "The largest and best-preserved cave temple complex in Sri Lanka, dating back to the 1st century BC. Five caves contain over 150 Buddha statues and extensive murals covering 2,100 square meters, representing the evolution of Sinhalese religious art over 2,000 years.",
    highlights: [
      "Cave of the Divine King (Cave 2) - largest cave with 56 Buddha statues",
      "Cave of the Great Kings (Cave 1) - elaborate ceiling paintings",
      "Ancient murals depicting Buddha's life and Jataka tales",
      "Reclining Buddha statue (14 meters long)",
      "Hindu deities alongside Buddhist art",
    ],
    tips: "Remove shoes before entering caves. Photography may require additional fee. Visit early to avoid crowds and heat.",
    nearbyAttractions: ["Sigiriya Rock Fortress", "Rose Quartz Mountain", "Nalanda Gedige"],
    bestPhotography: "Natural lighting inside caves, exterior golden temple at sunset",
  },
  {
    name: "Sacred City of Kandy",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Temple of the Sacred Tooth Relic", title: "Temple of the Sacred Tooth Relic" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Kandy Lake and City", title: "Kandy Lake and City" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Esala Perahera Festival", title: "Esala Perahera Festival" },
    ],
    location: "Kandy District, Central Province",
    yearInscribed: "1988",
    category: "Cultural",
    bestTime: "December to April",
    entryFee: "Temple of Tooth: USD 10",
    duration: "Half day (3-4 hours)",
    difficulty: "Easy",
    description:
      "The last capital of the ancient kings' era, Kandy is a sacred Buddhist site famous for the Temple of the Sacred Tooth Relic. This hill capital showcases traditional Kandyan architecture and is the cultural heart of Sri Lanka, hosting the spectacular Esala Perahera festival.",
    highlights: [
      "Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
      "Kandy Lake and its scenic walkway",
      "Royal Palace complex",
      "Traditional Kandyan architecture",
      "Esala Perahera festival (August)",
    ],
    tips: "Dress conservatively for temple visits. Evening puja ceremony at 6:30 PM is spectacular. Book accommodation early during festival season.",
    nearbyAttractions: [
      "Royal Botanical Gardens Peradeniya",
      "Bahirawakanda Vihara Buddha Statue",
      "Tea plantations in surrounding hills",
    ],
    bestPhotography: "Temple ceremonies, Kandy Lake reflections, festival processions",
  },
  {
    name: "Old Town of Galle and its Fortifications",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Galle Fort Lighthouse", title: "Galle Fort Lighthouse" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Colonial Architecture", title: "Colonial Architecture" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Fort Ramparts", title: "Fort Ramparts" },
    ],
    location: "Galle District, Southern Province",
    yearInscribed: "1988",
    category: "Cultural",
    bestTime: "November to April",
    entryFee: "Free to explore",
    duration: "Half day (3-4 hours)",
    difficulty: "Easy",
    description:
      "Built by the Portuguese in the 16th century and extensively fortified by the Dutch, Galle Fort is the best-preserved colonial fortress in Asia. This living heritage site combines European architecture with South Asian traditions, creating a unique cultural landscape.",
    highlights: [
      "Dutch Reformed Church and clock tower",
      "Galle Lighthouse - iconic landmark",
      "Colonial mansions and boutique hotels",
      "Rampart walk with ocean views",
      "Maritime and National Museums",
    ],
    tips: "Best explored on foot. Sunset walk on ramparts is magical. Many cafes and shops within the fort walls.",
    nearbyAttractions: ["Unawatuna Beach", "Japanese Peace Pagoda", "Jungle Beach"],
    bestPhotography: "Sunset from lighthouse, colonial architecture, rampart views",
  },
  {
    name: "Sinharaja Forest Reserve",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Sinharaja Rainforest", title: "Sinharaja Rainforest" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Endemic Bird Species", title: "Endemic Bird Species" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Forest Streams", title: "Forest Streams" },
    ],
    location: "Sabaragamuwa and Southern Provinces",
    yearInscribed: "1988",
    category: "Natural",
    bestTime: "January to April, August to September",
    entryFee: "USD 12 for foreigners",
    duration: "Full day (6-8 hours)",
    difficulty: "Moderate to Challenging",
    description:
      "Sri Lanka's last viable area of primary tropical rainforest, Sinharaja is a biodiversity hotspot with over 60% endemic species. This pristine forest ecosystem is home to rare birds, mammals, reptiles, and countless plant species found nowhere else on Earth.",
    highlights: [
      "21 endemic bird species (including Sri Lanka Blue Magpie)",
      "Purple-faced langur and other endemic mammals",
      "Medicinal plants and rare orchids",
      "Multi-story forest canopy",
      "Crystal-clear streams and waterfalls",
    ],
    tips: "Hire a local guide for wildlife spotting. Wear leech socks and waterproof clothing. Bring binoculars for bird watching.",
    nearbyAttractions: ["Ratnapura - gem capital", "Adam's Peak", "Bopath Ella Falls"],
    bestPhotography: "Early morning for wildlife, macro photography for endemic species",
  },
  {
    name: "Central Highlands of Sri Lanka",
    images: [
      { src: "/placeholder.svg?height=400&width=600", alt: "World's End Horton Plains", title: "World's End Horton Plains" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Knuckles Mountain Range", title: "Knuckles Mountain Range" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Peak Wilderness", title: "Peak Wilderness" },
    ],
    location: "Central Province",
    yearInscribed: "2010",
    category: "Natural",
    bestTime: "December to April",
    entryFee: "Varies by location",
    duration: "Multiple days recommended",
    difficulty: "Easy to Challenging",
    description:
      "Comprising Peak Wilderness Protected Area, Horton Plains National Park, and Knuckles Conservation Forest, the Central Highlands represent Sri Lanka's montane ecosystem. This region showcases unique biodiversity, endemic species, and stunning landscapes above 2,000 meters elevation.",
    highlights: [
      "World's End cliff at Horton Plains",
      "Adam's Peak (Sri Pada) pilgrimage site",
      "Knuckles Mountain Range trekking",
      "Endemic flora and fauna",
      "Cloud forests and grasslands",
    ],
    tips: "Weather can change rapidly - bring warm clothes. Start early for World's End before clouds form. Trekking permits required for some areas.",
    nearbyAttractions: ["Nuwara Eliya hill station", "Tea plantations and factories", "Baker's Falls"],
    bestPhotography: "Sunrise at World's End, misty mountain landscapes, endemic wildlife",
  },
]

// Separate cultural and natural sites
const culturalSites = unescoSites.filter(site => site.category === "Cultural")
const naturalSites = unescoSites.filter(site => site.category === "Natural")

export default function UNESCOSitesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            UNESCO World Heritage Sites in Sri Lanka
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Discover 8 extraordinary sites that showcase Sri Lanka's rich cultural heritage and natural wonders
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-blue-600 dark:text-blue-400">6 Cultural Sites</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-green-600 dark:text-green-400">2 Natural Sites</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-purple-600 dark:text-purple-400">2,500+ Years History</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Sri Lanka&apos;s UNESCO World Heritage Legacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sri Lanka, despite its compact size, is home to eight UNESCO World Heritage Sites that represent both
              outstanding cultural achievements and exceptional natural beauty.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              From ancient rock fortresses and sacred cities to pristine rainforests and montane ecosystems, Sri Lanka's
              UNESCO sites offer visitors a journey through time and nature that few destinations can match.
            </p>
          </div>
        </section>

        {/* Cultural Heritage Sites Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400">🏛️</span>
              Cultural Heritage Sites
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Sri Lanka's six cultural UNESCO sites showcase over 2,500 years of continuous civilization, from ancient kingdoms and sacred Buddhist temples to colonial fortifications. These sites represent outstanding achievements in architecture, urban planning, religious art, and cultural traditions that have shaped South Asian history.
            </p>
          </div>

          <div className="space-y-8">
            {culturalSites.map((site, index) => (
              <Fragment key={index}>
                {/* Site Card */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Carousel */}
                    <div className="relative w-full lg:w-2/5">
                      <ImageCarousel images={site.images} />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-lg">
                          Cultural Heritage
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{site.name}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{site.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>UNESCO: {site.yearInscribed}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{site.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Mountain className="w-4 h-4" />
                            <span>{site.difficulty}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{site.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          Key Highlights
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {site.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practical Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Info className="w-4 h-4 text-blue-500" />
                            Visitor Information
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            <p>
                              <strong>Entry Fee:</strong> {site.entryFee}
                            </p>
                            <p>
                              <strong>Duration:</strong> {site.duration}
                            </p>
                            <p>
                              <strong>Difficulty:</strong> {site.difficulty}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Camera className="w-4 h-4 text-purple-500" />
                            Photography Tips
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{site.bestPhotography}</p>
                        </div>
                      </div>

                      {/* Tips and Nearby Attractions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Insider Tips</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{site.tips}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🗺️ Nearby Attractions</h4>
                          <ul className="text-sm text-gray-700 dark:text-gray-300">
                            {site.nearbyAttractions.map((attraction, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                {attraction}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Fragment>
            ))}
          </div>
        </section>

        {/* Natural Heritage Sites Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-green-600 dark:text-green-400">🌿</span>
              Natural Heritage Sites
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Sri Lanka's two natural UNESCO sites protect some of the world's most biodiverse ecosystems. Sinharaja represents the island's lowland tropical rainforest with exceptional endemic species, while the Central Highlands preserve unique montane ecosystems above 2,000 meters, showcasing cloud forests, grasslands, and spectacular mountain landscapes.
            </p>
          </div>

          <div className="space-y-8">
            {naturalSites.map((site, index) => (
              <Fragment key={index}>
                {/* Site Card */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Carousel */}
                    <div className="relative w-full lg:w-2/5">
                      <ImageCarousel images={site.images} />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-600 text-white shadow-lg">
                          Natural Heritage
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{site.name}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{site.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>UNESCO: {site.yearInscribed}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{site.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Mountain className="w-4 h-4" />
                            <span>{site.difficulty}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{site.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          Key Highlights
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {site.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practical Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Info className="w-4 h-4 text-blue-500" />
                            Visitor Information
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            <p>
                              <strong>Entry Fee:</strong> {site.entryFee}
                            </p>
                            <p>
                              <strong>Duration:</strong> {site.duration}
                            </p>
                            <p>
                              <strong>Difficulty:</strong> {site.difficulty}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Camera className="w-4 h-4 text-purple-500" />
                            Photography Tips
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{site.bestPhotography}</p>
                        </div>
                      </div>

                      {/* Tips and Nearby Attractions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Insider Tips</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{site.tips}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🗺️ Nearby Attractions</h4>
                          <ul className="text-sm text-gray-700 dark:text-gray-300">
                            {site.nearbyAttractions.map((attraction, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="text-blue-500">•</span>
                                {attraction}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Fragment>
            ))}
          </div>
        </section>

        {/* Sites Grid - OLD VERSION - REMOVE THIS */}
        <section className="space-y-8 hidden">
          {unescoSites.map((site, index) => (
            <Fragment key={index}>
              {/* Site Card */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Carousel */}
                  <div className="relative w-full lg:w-2/5">
                    <ImageCarousel images={site.images} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{site.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{site.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>UNESCO: {site.yearInscribed}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{site.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mountain className="w-4 h-4" />
                          <span>{site.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{site.description}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {site.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4 text-blue-500" />
                          Visitor Information
                        </h4>
                        <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <p>
                            <strong>Entry Fee:</strong> {site.entryFee}
                          </p>
                          <p>
                            <strong>Duration:</strong> {site.duration}
                          </p>
                          <p>
                            <strong>Difficulty:</strong> {site.difficulty}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <Camera className="w-4 h-4 text-purple-500" />
                          Photography Tips
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{site.bestPhotography}</p>
                      </div>
                    </div>

                    {/* Tips and Nearby Attractions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Insider Tips</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{site.tips}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🗺️ Nearby Attractions</h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300">
                          {site.nearbyAttractions.map((attraction, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-blue-500">•</span>
                              {attraction}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
        </section>

        {/* Planning Your UNESCO Sites Tour */}
        <section className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Planning Your UNESCO Sites Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Best Time to Visit</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                December to April offers the best weather for most sites. Plan 7-10 days to visit all UNESCO sites
                comfortably.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Guided Tours</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Consider hiring local guides for deeper insights into history and culture. Many sites offer audio guides
                in multiple languages.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cultural Respect</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Dress modestly at religious sites, remove shoes when required, and follow photography guidelines to
                preserve these treasures.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
