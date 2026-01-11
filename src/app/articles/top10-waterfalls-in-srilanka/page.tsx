import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import { MapPin, Clock, Droplets, Star, Camera, Car, AlertTriangle, Thermometer } from "lucide-react"

export const metadata: Metadata = {
  title: "15 Most Beautiful Waterfalls in Sri Lanka 2025 | Complete Guide with Photos",
  description:
    "Discover Sri Lanka's most spectacular waterfalls including Bambarakanda Falls (tallest), Diyaluma Falls, Kurundu Oya Falls, and more. Complete guide with locations, best times to visit, and photography tips.",
  keywords:
    "Sri Lanka waterfalls, Bambarakanda Falls, Diyaluma Falls, Kurundu Oya Falls, waterfalls near Ella, best waterfalls Sri Lanka, waterfall photography",
  openGraph: {
    title: "15 Most Beautiful Waterfalls in Sri Lanka - Complete Guide 2025",
    description:
      "Explore Sri Lanka's most stunning waterfalls with detailed guides, photography tips, and travel information for every cascade.",
    type: "article",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

const waterfalls = [
  {
    name: "Diyaluma Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Koslanda, Badulla District",
    height: "220 meters (722 feet)",
    difficulty: "Moderate",
    accessibility: "30-minute hike from road",
    bestTime: "May to September, December to February",
    swimmable: "Yes - natural pools at top",
    description:
      "Sri Lanka's second-highest waterfall, Diyaluma Falls cascades down a series of rocky terraces creating natural infinity pools with breathtaking views. The upper pools offer a unique swimming experience with panoramic vistas of the surrounding valleys and tea plantations.",
    highlights: [
      "Natural infinity pools at the top",
      "Panoramic valley views",
      "Multiple cascade levels",
      "Swimming opportunities",
      "Photography paradise",
    ],
    howToReach:
      "Drive from Wellawaya towards Koslanda. Park near the bridge and hike up the marked trail for about 30 minutes.",
    tips: "Visit during dry season for best swimming conditions. Bring water shoes for rocky areas. The hike to the top requires moderate fitness.",
    safetyNotes: [
      "Rocks can be slippery when wet",
      "Strong currents during rainy season",
      "Be cautious near cliff edges",
      "Inform someone about your visit plans",
    ],
    nearbyAttractions: ["Ella Rock", "Little Adam's Peak", "Nine Arch Bridge"],
    photographyTips:
      "Best light in early morning or late afternoon. Use polarizing filter to reduce water glare. Capture both wide shots and detail shots of the pools.",
  },
  {
    name: "Kurundu Oya Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Walapane, Nuwara Eliya District",
    height: "189 meters (620 feet)",
    difficulty: "Moderate to Challenging",
    accessibility: "1-2 hour hike from road",
    bestTime: "April to September, December to February",
    swimmable: "No - too powerful",
    description:
      "Also known as Maturata Ella, Kurundu Oya Falls is Sri Lanka's third highest waterfall. Located in the scenic central highlands, this impressive cascade flows through a gorge surrounded by dense forest and tea plantations, creating a spectacular sight especially during the rainy season.",
    highlights: [
      "Third highest waterfall in Sri Lanka",
      "Stunning central highlands location",
      "Surrounded by tea plantations",
      "Powerful cascade through gorge",
    ],
    howToReach:
      "From Walapane town, take the route towards the waterfall. Local guides available in Walapane can assist with the trek.",
    photographyTips:
      "Best views from multiple viewpoints along the trail. Early morning light recommended for capturing the full height.",
  },
  {
    name: "Bambarakanda Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Kalupahana, Badulla District",
    height: "263 meters (863 feet)",
    difficulty: "Easy to Moderate",
    accessibility: "Short walk from parking area",
    bestTime: "April to September, December to February",
    swimmable: "Yes - base pool available",
    description:
      "Sri Lanka's highest waterfall, Bambarakanda Falls plunges dramatically from the Horton Plains plateau. Easily accessible yet spectacular,it offers excellent viewing opportunities and a refreshing pool at the base for swimming.",
    highlights: [
      "Sri Lanka's highest waterfall",
      "Easy accessibility",
      "Swimming pool at base",
      "Spectacular single drop",
      "Great for families",
    ],
    howToReach: "From Haputale, drive towards Kalupahana. Well-marked road leads to parking area near the falls.",
    tips: "Best visited after rainy periods for maximum water flow. Bring swimwear for the base pool. Easy walk suitable for all ages.",
    safetyNotes: [
      "Pool depth varies with season",
      "Rocks around pool can be slippery",
      "Check water flow before swimming",
      "Supervise children near water",
    ],
    nearbyAttractions: ["Horton Plains National Park", "Ohiya Railway Station", "Pattipola Railway Station"],
    photographyTips:
      "Use wide-angle lens to capture full height. Morning light provides best illumination. Include people for scale reference.",
  },
  {
    name: "Ravana Falls",
    image: "/Ravana-Ella.jpg",
    location: "Ella, Badulla District",
    height: "25 meters (82 feet)",
    difficulty: "Easy",
    accessibility: "Roadside viewing, short climb to pools",
    bestTime: "Year-round, best after rains",
    swimmable: "Yes - multiple pools available",
    description:
      "Named after the legendary King Ravana from the Ramayana epic, this easily accessible waterfall is perfect for a quick stop while exploring Ella. Multiple pools at different levels provide excellent swimming opportunities with varying depths.",
    highlights: [
      "Easy roadside access",
      "Multiple swimming pools",
      "Mythological significance",
      "Great for families",
      "Popular photo spot",
    ],
    howToReach: "Located on the main Ella-Wellawaya road, about 6km from Ella town. Parking available roadside.",
    tips: "Very crowded during weekends and holidays. Visit early morning or late afternoon for fewer crowds. Bring water shoes for rocky pools.",
    safetyNotes: [
      "Can be very crowded",
      "Rocks are slippery when wet",
      "Watch for falling rocks from above",
      "Keep valuables secure",
    ],
    nearbyAttractions: ["Ella Rock", "Little Adam's Peak", "Nine Arch Bridge", "Ella town"],
    photographyTips:
      "Avoid midday harsh light. Use people in shots for scale. Capture both wide shots and intimate pool details.",
  },
  {
    name: "Dunhinda Falls",
    image: "/Dunhinda-Falls.jpg",
    location: "Badulla District",
    height: "64 meters (210 feet)",
    difficulty: "Easy to Moderate",
    accessibility: "45-minute walk through forest",
    bestTime: "May to September, December to March",
    swimmable: "Limited - small pools only",
    description:
      "Known as the 'Smoky Falls' due to the mist created by its powerful cascade, Dunhinda Falls is one of Sri Lanka's most photographed waterfalls. The scenic walk through forest and tea plantations adds to the overall experience.",
    highlights: [
      "Powerful single cascade",
      "Misty spray effect",
      "Scenic forest walk",
      "Tea plantation views",
      "Popular photography spot",
    ],
    howToReach:
      "From Badulla town, drive to Dunhinda village. Park at the entrance and walk along the marked forest trail.",
    tips: "Trail can be muddy during rainy season. Wear good walking shoes. The mist creates rainbow effects in afternoon sunlight.",
    safetyNotes: [
      "Trail can be slippery when wet",
      "Stay on marked paths",
      "Be careful of steep sections",
      "Mist can make rocks very slippery",
    ],
    nearbyAttractions: ["Badulla town", "Muthiyangana Temple", "Demodara Railway Station"],
    photographyTips:
      "Afternoon light creates rainbows in the mist. Use slow shutter speed for silky water effect. Include surrounding forest in composition.",
  },
  {
    name: "Baker's Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Horton Plains National Park",
    height: "20 meters (66 feet)",
    difficulty: "Easy",
    accessibility: "Part of Horton Plains circular trail",
    bestTime: "January to March, August to September",
    swimmable: "No - protected area",
    description:
      "Located within Horton Plains National Park, Baker's Falls is a beautiful cascade surrounded by unique montane vegetation. The falls are part of the popular circular trail that also includes World's End cliff.",
    highlights: [
      "Part of UNESCO World Heritage site",
      "Unique montane ecosystem",
      "Endemic flora and fauna",
      "Well-maintained trail",
      "Educational experience",
    ],
    howToReach:
      "Enter Horton Plains National Park and follow the circular trail. Falls are approximately 2km from the entrance.",
    tips: "Entry fee required for national park. Start early as clouds form by 10 AM. No swimming allowed in protected area.",
    safetyNotes: [
      "Stay on designated trails",
      "Weather can change rapidly",
      "Altitude effects possible",
      "No rescue facilities available",
    ],
    nearbyAttractions: ["World's End cliff", "Mini World's End", "Horton Plains grasslands"],
    photographyTips:
      "Early morning provides best light and clear conditions. Include unique vegetation in shots. Use wide-angle for landscape context.",
  },
  {
    name: "Bopath Ella Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ratnapura District",
    height: "30 meters (98 feet)",
    difficulty: "Easy",
    accessibility: "Short walk from road",
    bestTime: "October to April",
    swimmable: "Yes - base pool available",
    description:
      "Shaped like a Bo leaf (sacred fig leaf in Buddhism), Bopath Ella is unique among Sri Lankan waterfalls. The distinctive shape and easy accessibility make it popular with both locals and tourists seeking a quick nature escape.",
    highlights: [
      "Unique Bo leaf shape",
      "Easy accessibility",
      "Swimming opportunities",
      "Cultural significance",
      "Family-friendly",
    ],
    howToReach: "From Ratnapura, drive towards Kuruwita. Falls are well-signposted and parking is available nearby.",
    tips: "Best water flow during monsoon season. Popular with locals on weekends. Bring picnic supplies for a relaxing day out.",
    safetyNotes: [
      "Can be crowded on weekends",
      "Rocks around pool are slippery",
      "Check water depth before swimming",
      "Keep area clean - no littering",
    ],
    nearbyAttractions: ["Ratnapura gem mines", "Sinharaja Forest Reserve", "Adam's Peak base camps"],
    photographyTips:
      "Capture the distinctive leaf shape from elevated viewpoint. Use polarizing filter to enhance water clarity. Include cultural elements in composition.",
  },
  {
    name: "Ramboda Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Nuwara Eliya District",
    height: "109 meters (358 feet)",
    difficulty: "Easy",
    accessibility: "Roadside viewing",
    bestTime: "April to September, December to February",
    swimmable: "Limited access to base",
    description:
      "Cascading down multiple tiers alongside the Kandy-Nuwara Eliya road, Ramboda Falls is easily viewed from the roadside. The falls are particularly impressive during the monsoon season when water flow is at its peak.",
    highlights: [
      "Multi-tiered cascade",
      "Roadside accessibility",
      "Tea plantation backdrop",
      "Easy photography access",
      "Part of scenic drive",
    ],
    howToReach: "Located on the A5 highway between Kandy and Nuwara Eliya. Multiple viewing points along the road.",
    tips: "Best viewed from the road bridge. Several tea shops nearby for refreshments. Great stop during hill country road trips.",
    safetyNotes: [
      "Be careful of traffic when stopping",
      "Limited parking available",
      "Steep terrain near falls",
      "Weather can change quickly",
    ],
    nearbyAttractions: ["Ramboda Tea Factory", "Labookellie Tea Centre", "Nuwara Eliya town"],
    photographyTips:
      "Include tea plantations in background. Use telephoto lens from road viewpoints. Morning light provides best illumination.",
  },
  {
    name: "Laxapana Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Nuwara Eliya District",
    height: "126 meters (413 feet)",
    difficulty: "Moderate",
    accessibility: "Short hike from road",
    bestTime: "March to September",
    swimmable: "No - hydroelectric area",
    description:
      "Fed by the Maskeliya Reservoir, Laxapana Falls is both a natural wonder and an important hydroelectric site. The powerful cascade and surrounding mountain scenery create a dramatic landscape perfect for photography.",
    highlights: [
      "Powerful single drop",
      "Mountain scenery",
      "Hydroelectric significance",
      "Less crowded",
      "Engineering marvel context",
    ],
    howToReach:
      "From Hatton, drive towards Maskeliya. Follow signs to the falls viewpoint and park at designated area.",
    tips: "Water flow varies based on reservoir levels. Best visited during high water periods. Respect hydroelectric facility boundaries.",
    safetyNotes: [
      "Stay away from restricted areas",
      "Water flow can change suddenly",
      "Steep terrain around viewpoints",
      "Follow all posted signs",
    ],
    nearbyAttractions: ["Maskeliya Reservoir", "Hatton town", "Tea plantations"],
    photographyTips:
      "Include reservoir and mountains in wide shots. Use neutral density filter for long exposures. Respect photography restrictions near facilities.",
  },
  {
    name: "Ella Spice Garden Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Ella, Badulla District",
    height: "15 meters (49 feet)",
    difficulty: "Easy",
    accessibility: "Within spice garden premises",
    bestTime: "Year-round",
    swimmable: "Yes - small pools",
    description:
      "A hidden gem within a spice garden near Ella, this small but beautiful waterfall offers a peaceful retreat surrounded by aromatic spice plants. The combination of natural beauty and educational spice tour makes it unique.",
    highlights: [
      "Spice garden setting",
      "Educational experience",
      "Peaceful atmosphere",
      "Swimming pools",
      "Aromatic surroundings",
    ],
    howToReach:
      "Located within a private spice garden near Ella. Entry fee includes spice garden tour and waterfall access.",
    tips: "Combine with spice garden tour for full experience. Good for families with children. Less crowded than other Ella waterfalls.",
    safetyNotes: [
      "Follow garden rules and guidelines",
      "Supervise children near water",
      "Respect private property",
      "Ask permission before swimming",
    ],
    nearbyAttractions: ["Ella town center", "Little Adam's Peak", "Ella Rock"],
    photographyTips:
      "Include spice plants in compositions. Macro photography opportunities with plants and flowers. Soft natural lighting in garden setting.",
  },
  {
    name: "Gerandi Ella Falls",
    image: "/Gerandi-Ella.jpeg",
    location: "Dodangoda, Kalutara District",
    height: "30 meters (98 feet)",
    difficulty: "Moderate",
    accessibility: "1-hour hike through forest",
    bestTime: "October to April",
    swimmable: "Yes - natural pools",
    description:
      "A lesser-known waterfall near Colombo, Gerandi Ella offers a perfect day trip escape from the city. The forest hike and natural swimming pools provide a refreshing break from urban life.",
    highlights: [
      "Close to Colombo",
      "Forest hiking experience",
      "Natural swimming pools",
      "Less touristy",
      "Day trip friendly",
    ],
    howToReach:
      "From Colombo, drive to Dodangoda and follow local directions to trailhead. Local guides available at village.",
    tips: "Good option for Colombo residents seeking nature escape. Hire local guide for easier navigation. Bring insect repellent for forest hike.",
    safetyNotes: [
      "Trail can be confusing without guide",
      "Leeches present during wet season",
      "Inform someone about your plans",
      "Carry first aid supplies",
    ],
    nearbyAttractions: ["Kalutara town", "Kalutara Temple", "Beaches of Kalutara"],
    photographyTips:
      "Forest provides natural diffused lighting. Capture both waterfall and forest journey. Include local guide in some shots for human element.",
  },
  {
    name: "Hunas Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Kandy District",
    height: "51 meters (167 feet)",
    difficulty: "Easy to Moderate",
    accessibility: "Short walk from hotel",
    bestTime: "November to April",
    swimmable: "Yes - base pool",
    description:
      "Located near the luxury Hunas Falls Hotel, this waterfall offers easy access with hotel amenities nearby. The falls cascade into a natural pool perfect for swimming, making it ideal for a comfortable waterfall experience.",
    highlights: [
      "Luxury hotel nearby",
      "Easy access with amenities",
      "Natural swimming pool",
      "Comfortable facilities",
      "Good for relaxation",
    ],
    howToReach:
      "From Kandy, drive towards Elkaduwa. Falls are accessible through Hunas Falls Hotel or via public path.",
    tips: "Hotel guests have easier access. Public access available but check with locals. Good option for those wanting comfort with nature.",
    safetyNotes: [
      "Respect hotel property boundaries",
      "Pool depth varies seasonally",
      "Rocks can be slippery",
      "Follow hotel guidelines if staying",
    ],
    nearbyAttractions: ["Kandy city", "Temple of the Tooth", "Royal Botanical Gardens"],
    photographyTips:
      "Include hotel architecture for luxury travel shots. Pool reflections create interesting compositions. Evening light provides warm tones.",
  },
  {
    name: "Kithulgala Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Kithulgala, Kegalle District",
    height: "25 meters (82 feet)",
    difficulty: "Easy",
    accessibility: "Short walk from adventure center",
    bestTime: "December to April",
    swimmable: "Yes - part of rafting route",
    description:
      "Famous as a filming location for 'The Bridge on the River Kwai', Kithulgala Falls is now a popular adventure sports destination. The falls are often combined with white water rafting and other adventure activities.",
    highlights: [
      "Movie filming location",
      "Adventure sports hub",
      "White water rafting",
      "Historical significance",
      "Multiple activities available",
    ],
    howToReach:
      "From Colombo, drive to Kithulgala town. Adventure centers provide access to falls as part of activity packages.",
    tips: "Combine with rafting or other adventure activities. Several adventure operators in town. Good for active travelers seeking multiple experiences.",
    safetyNotes: [
      "Strong currents during rainy season",
      "Use certified adventure operators",
      "Wear provided safety equipment",
      "Follow guide instructions",
    ],
    nearbyAttractions: ["Kelani River rafting", "Adventure sports centers", "Historical bridge site"],
    photographyTips:
      "Action shots during adventure activities. Include historical bridge in compositions. Capture both adventure and natural beauty aspects.",
  },
  {
    name: "Duwili Ella Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Balangoda, Ratnapura District",
    height: "63 meters (207 feet)",
    difficulty: "Moderate",
    accessibility: "45-minute hike",
    bestTime: "October to March",
    swimmable: "Yes - base pool",
    description:
      "Named 'Dust Falls' due to the fine mist it creates, Duwili Ella is a spectacular waterfall in the Balangoda area. The moderate hike through rural landscapes leads to a powerful cascade with excellent swimming opportunities.",
    highlights: [
      "Fine mist effect",
      "Rural landscape hike",
      "Powerful cascade",
      "Swimming opportunities",
      "Less commercialized",
    ],
    howToReach: "From Balangoda, follow local directions to trailhead. Local guides available in nearby villages.",
    tips: "Hire local guide for easier navigation. Best visited during dry season for hiking. Mist creates cooling effect even on hot days.",
    safetyNotes: [
      "Trail can be challenging in wet conditions",
      "Inform locals about your hiking plans",
      "Carry adequate water and snacks",
      "Be prepared for changing weather",
    ],
    nearbyAttractions: ["Balangoda town", "Archaeological sites", "Traditional villages"],
    photographyTips:
      "Capture mist effects with backlighting. Include rural landscape in journey shots. Use fast shutter to freeze water droplets.",
  },
  {
    name: "Sera Ella Falls",
    image: "/placeholder.svg?height=400&width=600",
    location: "Haputale, Badulla District",
    height: "30 meters (98 feet)",
    difficulty: "Easy",
    accessibility: "Roadside viewing",
    bestTime: "April to September",
    swimmable: "Limited access",
    description:
      "A roadside waterfall near Haputale offering easy viewing access during scenic drives through the hill country. The falls are particularly beautiful during the monsoon season when water flow is at its peak.",
    highlights: [
      "Roadside accessibility",
      "Hill country scenery",
      "Easy viewing",
      "Part of scenic drive",
      "Tea plantation backdrop",
    ],
    howToReach: "Located on the road between Haputale and Bandarawela. Multiple viewing points along the route.",
    tips: "Best combined with hill country road trip. Several viewpoints available. Good for quick photo stops during longer journeys.",
    safetyNotes: [
      "Be careful of traffic when stopping",
      "Limited parking space",
      "Weather can change quickly in hills",
      "Stay on safe viewing areas",
    ],
    nearbyAttractions: ["Haputale town", "Lipton's Seat", "Dambatenne Tea Factory"],
    photographyTips:
      "Include tea plantations and hills in background. Use roadside elevation for elevated shots. Morning mist adds atmospheric effect.",
  },
]

export default function WaterfallsSriLankaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Most Beautiful Waterfalls in Sri Lanka
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Discover spectacular cascades from towering giants to hidden gems across the Pearl of the Indian Ocean
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-blue-600 dark:text-blue-400">15 Stunning Falls</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Swimming Spots</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <span className="font-semibold text-green-600 dark:text-green-400">Photography Paradise</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sri Lanka&apos;s Waterfall Wonderland</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sri Lanka&apos;s mountainous terrain and abundant rainfall create perfect conditions for spectacular
              waterfalls. From the towering heights of Bambarakanda Falls to the unique leaf-shaped Bopath Ella, the
              island&apos;s cascades offer diverse experiences for every type of traveler.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you&apos;re seeking adventure, photography opportunities, or simply a refreshing swim in natural pools,
              Sri Lanka&apos;s waterfalls provide unforgettable experiences amidst some of the world&apos;s most beautiful
              landscapes.
            </p>
          </div>
        </section>

        {/* Quick Guide */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Waterfall Visiting Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">Easy Access</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Roadside or short walk</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-blue-700 dark:text-blue-400">Swimming</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Natural pools available</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-400">Photography</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Excellent photo opportunities</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-orange-700 dark:text-orange-400">Adventure</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Challenging hike required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waterfalls Grid */}
        <section className="space-y-8">
          {waterfalls.map((waterfall, index) => (
            <Fragment key={index}>
              {/* Waterfall Card */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative w-full lg:w-1/4 h-48 lg:h-auto">
                    <Image
                      src={waterfall.image || "/placeholder.svg"}
                      alt={`${waterfall.name} - Beautiful waterfall in Sri Lanka`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          waterfall.difficulty === "Easy"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : waterfall.difficulty === "Moderate"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                        }`}
                      >
                        {waterfall.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {waterfall.height}
                      </span>
                    </div>
                    {waterfall.swimmable.includes("Yes") && (
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
                          <Droplets className="w-3 h-3 inline mr-1" />
                          Swimmable
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 lg:p-6">
                    <div className="mb-3">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {waterfall.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{waterfall.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{waterfall.accessibility}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Thermometer className="w-4 h-4" />
                          <span>{waterfall.bestTime}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{waterfall.description}</p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Star className="w-3 h-3 text-yellow-500" />
                        Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {waterfall.highlights.slice(0, 4).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to Reach and Tips */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-xs text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                          <Car className="w-3 h-3 text-green-500" />
                          How to Reach
                        </h4>
                        <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">{waterfall.howToReach}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                          <Camera className="w-3 h-3 text-purple-500" />
                          Photography Tips
                        </h4>
                        <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">{waterfall.photographyTips}</p>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link 
                        href={`/destinations/${waterfall.name.toLowerCase().replace(/['\s]+/g, '-').replace(/falls?/g, '')}`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
                      >
                        Read More
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
        </section>

        {/* Waterfall Safety Guide */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Waterfall Safety & Best Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Water Safety</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Always check water conditions before swimming. Rocks can be extremely slippery when wet. Never swim
                alone.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Photography Ethics</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Respect the environment and other visitors. Don&apos;t damage vegetation for photos. Follow Leave No Trace
                principles.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Weather Awareness</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Weather can change rapidly near waterfalls. Flash floods are possible during heavy rains. Check
                forecasts before visiting.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
