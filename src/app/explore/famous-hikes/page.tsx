import type { Metadata } from "next"
import Image from "next/image"
import { Fragment } from "react"
import { MapPin, Clock, Star, Thermometer, Camera, AlertTriangle, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Hikes in Sri Lanka 2025 | Complete Hiking Guide with Trails & Tips",
  description:
    "Discover the best hiking trails in Sri Lanka including Adam's Peak, Ella Rock, Little Adam's Peak, Knuckles Range, and more. Complete guide with difficulty levels, best times, and safety tips for every hiker.",
  keywords:
    "Sri Lanka hiking, best hikes Sri Lanka, Adam's Peak, Ella Rock, hiking trails, mountain climbing, trekking Sri Lanka, outdoor adventures",
  openGraph: {
    title: "Best Hikes in Sri Lanka - Complete Hiking Guide 2025",
    description:
      "Explore Sri Lanka's most spectacular hiking trails with detailed guides, difficulty ratings, and insider tips for every adventure level.",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

const hikes = [
  {
    name: "Adam's Peak (Sri Pada)",
    image: "/placeholder.svg?height=400&width=600",
    location: "Central Province, Ratnapura District",
    elevation: "2,243 meters (7,359 feet)",
    difficulty: "Moderate to Challenging",
    duration: "4-6 hours round trip",
    bestTime: "December to May (pilgrimage season)",
    startPoint: "Dalhousie or Ratnapura",
    description:
      "Sri Lanka's most sacred mountain, revered by Buddhists, Hindus, Muslims, and Christians. The challenging night climb rewards hikers with a spectacular sunrise and panoramic views. The 'sacred footprint' at the summit is believed to belong to Buddha, Shiva, Adam, or St. Thomas depending on religious tradition.",
    highlights: [
      "Sacred footprint at the summit",
      "Spectacular sunrise views",
      "Pilgrimage experience with thousands of devotees",
      "360-degree panoramic mountain views",
      "Chain of lights from climbers at night",
    ],
    tips: "Start climbing around 2-3 AM to reach summit for sunrise. Bring warm clothes, headlamp, and plenty of water. The climb is easier during pilgrimage season when tea stalls are open.",
    safetyNotes: [
      "Weather can change rapidly - bring warm clothing",
      "Trail can be crowded during peak season",
      "Some sections have steep drops - stay on marked path",
      "Start early to avoid afternoon thunderstorms",
    ],
    whatToBring: [
      "Headlamp or flashlight",
      "Warm jacket and layers",
      "Comfortable hiking shoes with good grip",
      "Water and energy snacks",
      "Camera for sunrise photos",
    ],
    nearbyStays: ["White House Adam's Peak", "Slightly Chilled Lounge", "Green House Holiday Resort"],
  },
  {
    name: "Ella Rock",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ella, Uva Province",
    elevation: "1,041 meters (3,415 feet)",
    difficulty: "Moderate",
    duration: "3-4 hours round trip",
    bestTime: "December to April",
    startPoint: "Ella Railway Station",
    description:
      "One of Sri Lanka's most popular hikes, offering stunning views of Ella Gap, tea plantations, and the surrounding hill country. The trail passes through tea estates, small villages, and forest patches, providing a perfect introduction to Sri Lankan highland hiking.",
    highlights: [
      "Panoramic views of Ella Gap",
      "Tea plantation landscapes",
      "Little Adam's Peak views",
      "Traditional village life along the trail",
      "Perfect for sunrise or sunset",
    ],
    tips: "Follow railway tracks initially, then take the trail through tea plantations. Ask locals for directions as the path can be confusing. Best to go with a guide for first-time visitors.",
    safetyNotes: [
      "Trail can be slippery during rainy season",
      "Some sections near cliff edges - be cautious",
      "Inform someone about your hiking plans",
      "Carry enough water as there are limited sources",
    ],
    whatToBring: [
      "Comfortable hiking shoes",
      "Sun hat and sunscreen",
      "Water and snacks",
      "Camera for scenic views",
      "Light rain jacket",
    ],
    nearbyStays: ["98 Acres Resort and Spa", "Ella Mount Heaven", "Zion View Ella Green Retreat"],
  },
  {
    name: "Little Adam's Peak",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ella, Uva Province",
    elevation: "1,141 meters (3,743 feet)",
    difficulty: "Easy to Moderate",
    duration: "1-2 hours round trip",
    bestTime: "Year-round, early morning preferred",
    startPoint: "Ella town center",
    description:
      "A beginner-friendly hike offering spectacular 360-degree views without the challenging climb of its namesake. The trail winds through tea plantations and offers stunning vistas of Ella Rock, Ravana Falls, and the surrounding valleys.",
    highlights: [
      "360-degree panoramic views",
      "Tea plantation trail",
      "Views of Ella Rock and Ravana Falls",
      "Perfect for beginners and families",
      "Instagram-worthy photo opportunities",
    ],
    tips: "Start early morning for best views and cooler weather. The trail is well-marked and suitable for all fitness levels. Great for sunset views too.",
    safetyNotes: [
      "Trail is generally safe and well-maintained",
      "Can be crowded during peak tourist season",
      "Wear proper footwear for rocky sections",
      "Be careful near cliff edges at the summit",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Water bottle",
      "Camera or smartphone",
      "Sun protection",
      "Light snacks",
    ],
    nearbyStays: ["Ella Flower Garden Resort", "Grand Ella Motel", "Ambiente Ella"],
  },
  {
    name: "Knuckles Mountain Range",
    image: "/placeholder.svg?height=400&width=600",
    location: "Central and Matale Provinces",
    elevation: "Up to 1,906 meters (6,253 feet)",
    difficulty: "Moderate to Very Challenging",
    duration: "1-3 days depending on route",
    bestTime: "January to April, August to September",
    startPoint: "Multiple entry points (Kandy, Matale, Dumbara)",
    description:
      "A UNESCO World Heritage site offering some of Sri Lanka's most challenging and rewarding hikes. The range features diverse ecosystems, endemic species, and spectacular mountain scenery. Multiple trails cater to different skill levels.",
    highlights: [
      "UNESCO World Heritage biodiversity",
      "Endemic flora and fauna",
      "Cloud forests and grasslands",
      "Traditional village encounters",
      "Challenging multi-day treks",
    ],
    tips: "Hire a local guide as trails can be confusing. Obtain permits from Forest Department. Weather changes rapidly - be prepared for all conditions.",
    safetyNotes: [
      "Permits required for some areas",
      "Weather can change rapidly - hypothermia risk",
      "Some trails are poorly marked",
      "Leeches common during wet season",
      "Emergency evacuation difficult in remote areas",
    ],
    whatToBring: [
      "Waterproof hiking boots",
      "Rain gear and warm layers",
      "First aid kit",
      "GPS device or smartphone with offline maps",
      "Camping gear for multi-day treks",
    ],
    nearbyStays: ["Knuckles Mountain Lodge", "Rangala House", "Corbett's Gap Rest House"],
  },
  {
    name: "Horton Plains - World's End",
    image: "/placeholder.svg?height=400&width=600",
    location: "Nuwara Eliya District, Central Province",
    elevation: "2,100-2,300 meters (6,890-7,546 feet)",
    difficulty: "Easy to Moderate",
    duration: "3-4 hours circular trail",
    bestTime: "January to March, August to September",
    startPoint: "Horton Plains National Park entrance",
    description:
      "A spectacular plateau hike featuring the famous World's End cliff with an 870-meter drop, Baker's Falls, and unique montane ecosystem. The circular trail offers diverse landscapes from grasslands to cloud forests.",
    highlights: [
      "World's End cliff - 870m sheer drop",
      "Baker's Falls waterfall",
      "Unique montane grassland ecosystem",
      "Endemic wildlife and plants",
      "Cloud forest sections",
    ],
    tips: "Start very early (6 AM) as clouds usually form by 10 AM, obscuring views. Entry fee required. No food available inside - bring packed lunch.",
    safetyNotes: [
      "Cliff edges are unfenced - extreme caution required",
      "Weather can turn cold and foggy quickly",
      "Altitude can affect some visitors",
      "Stay on marked trails to protect ecosystem",
      "No rescue facilities available",
    ],
    whatToBring: [
      "Warm clothing and rain jacket",
      "Sturdy hiking shoes",
      "Packed lunch and water",
      "Camera with extra batteries",
      "Binoculars for wildlife viewing",
    ],
    nearbyStays: ["Jetwing St. Andrew's", "The Grand Hotel Nuwara Eliya", "Horton Plains Rest House"],
  },
  {
    name: "Pidurangala Rock",
    image: "/placeholder.svg?height=400&width=600",
    location: "Sigiriya, Central Province",
    elevation: "200 meters (656 feet)",
    difficulty: "Moderate",
    duration: "1-2 hours round trip",
    bestTime: "December to April",
    startPoint: "Pidurangala Ancient Forest Monastery",
    description:
      "The perfect alternative to Sigiriya Rock, offering spectacular views of the famous Lion Rock without the crowds and high entrance fee. The climb includes ancient temple ruins and ends with panoramic views of the Cultural Triangle.",
    highlights: [
      "Spectacular views of Sigiriya Rock",
      "Ancient Buddhist temple ruins",
      "Reclining Buddha statue",
      "Panoramic Cultural Triangle views",
      "Perfect for sunrise and sunset photography",
    ],
    tips: "Much cheaper alternative to Sigiriya with better photo opportunities. Start early for sunrise shots of Sigiriya. Respect the temple area - dress modestly.",
    safetyNotes: [
      "Final section requires scrambling over rocks",
      "No safety barriers at the top",
      "Can be slippery when wet",
      "Bring flashlight for early morning climbs",
      "Respect religious site protocols",
    ],
    whatToBring: [
      "Good grip shoes for rock scrambling",
      "Camera with telephoto lens",
      "Water and light snacks",
      "Flashlight for dawn climbs",
      "Modest clothing for temple visit",
    ],
    nearbyStays: ["Hotel Sigiriya", "Jetwing Vil Uyana", "Sigiriya Village Hotel"],
  },
  {
    name: "Lakegala Hike",
    image: "/placeholder.svg?height=400&width=600",
    location: "Gampola, Central Province",
    elevation: "1,087 meters (3,566 feet)",
    difficulty: "Highly Challenging",
    duration: "2-3 hours including tower climb",
    bestTime: "Year-round, clear days preferred",
    startPoint: "Ambuluwawa Biodiversity Complex",
    description:
      "According to the Local hikes, Lakegala is the hardest hike in Sri Lanka,",
    highlights: [
      "Spiral tower with panoramic views",
      "Multi-religious harmony site",
      "360-degree mountain views",
      "Diverse plant species",
      "Unique architectural design",
    ],
    tips: "The tower climb can be challenging for those with fear of heights. Best views on clear days. Entry fee required for the complex.",
    safetyNotes: [
      "Tower stairs are narrow and steep",
      "Not suitable for those with acrophobia",
      "Can be windy at the top",
      "Limited parking - arrive early",
      "Weather can change quickly",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Camera for panoramic shots",
      "Light jacket for wind",
      "Water and snacks",
      "Cash for entry fee",
    ],
    nearbyStays: ["Theva Residency", "OZO Kandy", "Mahaweli Reach Hotel"],
  },
  {
    name: "Bible Rock (Bathalegala)",
    image: "/placeholder.svg?height=400&width=600",
    location: "Aranayake, Kegalle District",
    elevation: "797 meters (2,615 feet)",
    difficulty: "Challenging",
    duration: "4-5 hours round trip",
    bestTime: "December to April",
    startPoint: "Aranayake town",
    description:
      "A challenging rock climb offering spectacular views of the western and central provinces. The steep ascent through forest and rock faces rewards climbers with panoramic vistas and a sense of achievement.",
    highlights: [
      "Challenging rock climbing sections",
      "Panoramic views of multiple provinces",
      "Dense forest trail",
      "Rock formations and caves",
      "Sense of adventure and achievement",
    ],
    tips: "Requires good fitness level and climbing experience. Best to go with experienced guides. Start early to avoid afternoon heat and potential rain.",
    safetyNotes: [
      "Steep rock faces require careful climbing",
      "Trail can be difficult to follow",
      "Risk of rockfall in some sections",
      "Emergency help difficult to access",
      "Not recommended for beginners",
    ],
    whatToBring: [
      "Climbing shoes or boots with excellent grip",
      "Gloves for rock climbing sections",
      "Plenty of water and energy food",
      "First aid kit",
      "Rope for safety (recommended)",
    ],
    nearbyStays: ["Kegalle Rest House", "Local guesthouses in Aranayake", "Day trip from Kandy or Colombo"],
  },
]

export default function HikesSriLankaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Best Hikes in Sri Lanka</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Discover spectacular hiking trails from sacred peaks to scenic viewpoints across the Pearl of the Indian
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
              <span className="font-semibold text-purple-600 dark:text-purple-400">Year-Round Adventures</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hiking Paradise in the Indian Ocean
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sri Lanka's compact size belies its incredible hiking diversity. From sacred mountain pilgrimages to
              challenging rock climbs, the island offers trails that traverse ancient kingdoms, pristine forests, and
              spectacular viewpoints that showcase the country's natural beauty.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you're seeking spiritual enlightenment on Adam's Peak, panoramic views from Ella Rock, or the
              thrill of conquering challenging terrain in the Knuckles Range, Sri Lanka's hiking trails offer
              unforgettable experiences for every adventurer.
            </p>
          </div>
        </section>

        {/* Difficulty Legend */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Difficulty Levels Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">Easy</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Suitable for beginners</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-yellow-700 dark:text-yellow-400">Moderate</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Some hiking experience needed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-orange-700 dark:text-orange-400">Challenging</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Good fitness required</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-red-700 dark:text-red-400">Very Challenging</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Expert level only</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hikes Grid */}
        <section className="space-y-8">
          {hikes.map((hike, index) => (
            <Fragment key={index}>
              {/* Hike Card */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative w-full lg:w-2/5 h-64 lg:h-auto">
                    <Image
                      src={hike.image || "/placeholder.svg"}
                      alt={`${hike.name} hiking trail in Sri Lanka`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          hike.difficulty.includes("Easy")
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : hike.difficulty.includes("Moderate")
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : hike.difficulty.includes("Challenging")
                                ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {hike.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {hike.elevation}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{hike.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{hike.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{hike.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mountain className="w-4 h-4" />
                          <span>{hike.startPoint}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Thermometer className="w-4 h-4" />
                          <span>{hike.bestTime}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{hike.description}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Trail Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {hike.highlights.map((highlight, i) => (
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
                          <Camera className="w-4 h-4 text-blue-500" />
                          Hiking Tips
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{hike.tips}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          Safety Notes
                        </h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300">
                          {hike.safetyNotes.slice(0, 2).map((note, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* What to Bring and Nearby Stays */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎒 What to Bring</h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300">
                          {hike.whatToBring.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-blue-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🏨 Nearby Accommodation</h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300">
                          {hike.nearbyStays.map((stay, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-green-500">•</span>
                              {stay}
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

        {/* Hiking Safety Guide */}
        <section className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Essential Hiking Safety in Sri Lanka
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Weather Awareness</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Weather can change rapidly in mountains. Check forecasts, start early, and be prepared for rain and
                temperature drops.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Know Your Limits</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Choose trails appropriate for your fitness level. Don't attempt challenging hikes without proper
                preparation and experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Local Guides</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Consider hiring local guides for challenging trails. They provide safety, navigation help, and cultural
                insights.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
