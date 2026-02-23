import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Eye, MapPin, Star, Compass, Zap } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Mysterious Places in Sri Lanka | UFO Sightings, Ancient Enigmas & Unexplained Wonders",
  description:
    "Explore Sri Lanka's most mysterious and unexplained locations — from Yahangala's UFO theories and Danigala's alien rock to ancient underground tunnels and forgotten ruins that still baffle researchers today.",
  keywords:
    "mysterious places Sri Lanka, Yahangala UFO, Danigala alien rock, Ritigala ruins, mysterious Sri Lanka, Sri Lanka unexplained, UFO sightings Sri Lanka, Ravana caves, ancient mysteries, strange places Sri Lanka",
}

const places = [
  {
    id: "yahangala",
    name: "Yahangala",
    subtitle: "The Sleeping Giant with a Sky-Watching Secret",
    district: "Kandy District",
    color: "from-indigo-700 to-purple-700",
    badgeColor: "bg-indigo-600/80 border-indigo-500",
    icon: "🛸",
    highlight: "UFO Hotspot",
    image: "/placeholder.svg?height=400&width=600&text=Yahangala+Rock",
    imageAlt:
      "Yahangala massive rock formation rising above the jungle canopy in Kandy district Sri Lanka at dusk",
    intro:
      "From a distance, Yahangala looks like a sleeping giant — a colossal granite dome that emerges without warning from the thick jungle surrounding Kandy. But locals who have lived near this rock for generations will tell you that it is the night sky above Yahangala, not the rock itself, that demands your attention.",
    sections: [
      {
        heading: "Why People Connect Yahangala to UFO Activity",
        content:
          "Over the past few decades, a quiet but consistent stream of reports has come from villagers, trekkers, and even a handful of visitors from abroad who describe seeing unusual lights hovering silently over the Yahangala summit after nightfall. These are not shooting stars. Witnesses describe slow-moving, perfectly silent orbs — sometimes amber-colored, sometimes a cold white — that hover for short periods and then vanish without a trace of sound or trail. What makes Yahangala compelling from a research standpoint is the consistency of eye-witness accounts across different years and from people who had no prior knowledge of others having seen the same thing. Farmers who work the fields near the base of the rock speak of these lights as if they are simply part of the landscape — unexplained, yes, but not frightening. Older residents refer to the lights using old Sinhala terms that translate roughly to 'wandering lamps of the sky,' suggesting this phenomenon has been observed for much longer than the modern UFO conversation implies.",
      },
      {
        heading: "The Rock Itself: Geological Oddity or Something More?",
        content:
          "Yahangala rises to roughly 800 meters above sea level and dominates the surrounding landscape in a way that feels almost deliberate. The flat upper surface of the rock — an unusual feature for a natural granite dome — has given rise to theories about it once serving as an elevated platform, either for ancient astronomical observation or, in more imaginative interpretations, as a landing marker. Local archaeologists have not confirmed any structured habitation on the summit, but the site has not been comprehensively excavated either. The name 'Yahangala' breaks down in Sinhala to 'yaha' (bed or couch) and 'gala' (rock), which most scholars attribute simply to its reclining shape. However, a smaller group of researchers points out that elevated flat-topped rocks across several ancient cultures were deliberately chosen as ceremonial sites aligned with solstice sunrise directions.",
      },
      {
        heading: "How to Visit",
        content:
          "Yahangala is located in the Knuckles forest buffer zone. The hike to the summit takes around two to three hours and is moderately challenging due to the steep granite surface near the top. There are no official facilities, so bring your own water. The best time to attempt the climb is between December and April when rainfall is lower. If your goal is to observe unexplained lights, local guides recommend camping near the base on a clear, moonless night.",
      },
    ],
    fact: "Yahangala sits within the Knuckles Mountain Range, a UNESCO World Heritage landscape — itself one of the most biodiverse and least-explored ecosystems in South Asia.",
  },
  {
    id: "danigala",
    name: "Danigala",
    subtitle: "Alien Rock — The Name Says It All",
    district: "Ampara District",
    color: "from-emerald-700 to-teal-700",
    badgeColor: "bg-emerald-600/80 border-emerald-500",
    icon: "👽",
    highlight: "Alien Rock",
    image: "/Danigala.jpg",
    imageAlt:
      "Danigala circular rock formation rising from the flat plains of Ampara district, Sri Lanka, viewed from the air",
    intro:
      "If there is a single place in Sri Lanka where the UFO conversation feels most grounded  and most strange  it is Danigala. The rock is known by two names: its formal geographic name, and its popular nickname used by both locals and visitors alike: Alien Rock.",
    sections: [
      {
        heading: "What Makes Danigala So Unusual",
        content:
          "The first thing that strikes anyone approaching Danigala is its shape. Unlike the irregular contours of most rock outcroppings in Sri Lanka, Danigala is almost perfectly circular when viewed from above. This near-perfect elliptical profile rising from largely flat scrubland is deeply unusual from a geological standpoint. Standard rock formations created by wind erosion, volcanic activity, or tectonic uplift rarely produce this degree of symmetry. The drone photography that became widely shared on social media around 2018 brought Danigala to international attention, and the visuals are genuinely striking  a dark, uniformly circular dome sitting in pale flat earth like something placed rather than grown. Scientists have attributed the shape to differential weathering of a particularly hard granite batholith, but the explanation has not fully satisfied people who visit the site in person and stand at its base looking up.",
      },
      {
        heading: "The UFO Landing Theory",
        content:
          "The most widely circulated theory surrounding Danigala is that the rock's smooth circular profile is the result of an ancient spacecraft touchdown or low-altitude hover. Proponents point to the scorched appearance of certain rock surfaces on the upper plateau, the absence of vegetation in some zones close to the summit, and trace mineral patterns that some amateur investigators claim are inconsistent with purely natural origins. No peer-reviewed study has confirmed any of this, but the fact that the area around Danigala has been reported as a location for unexplained light sightings — independently of the Yahangala reports, by people with no connection to each other — adds a layer of genuine curiosity to the discussion that is difficult to simply dismiss.",
      },
      {
        heading: "Ramayana Connection",
        content:
          "Some Sri Lankan researchers connect Danigala to the Ramayana narrative, specifically to passages describing Ravana's aerial vehicles. The Ampara district is already dotted with Ramayana-linked sites, and certain scholars argue that elevated circular platforms were used as landing and take-off points for the Pushpaka Vimana — Ravana's legendary flying chariot. Whether that is mythology, ancient advanced technology, or something else entirely is a question that Sri Lanka's landscape seems quietly content to leave open.",
      },
      {
        heading: "Getting to Danigala",
        content:
          "Danigala is located near the town of Maha Oya in the Ampara district. From Colombo the drive takes around five to six hours. The rock itself is a short climb from the parking area, and on a clear day the view from the top across the dry-zone plains is genuinely spectacular. There are no entry fees or formal facilities — just the rock and the sky.",
      },
    ],
    fact: "Danigala translates roughly to 'the island rock' or 'the separated rock' in Sinhala — a name that took on extra meaning once people started viewing its almost-perfect circular form from above.",
  },
  {
    id: "ritigala",
    name: "Ritigala",
    subtitle: "The Mountain the Ancient World Tried to Forget",
    district: "Anuradhapura District",
    color: "from-stone-700 to-amber-800",
    badgeColor: "bg-amber-700/80 border-amber-600",
    icon: "🏛️",
    highlight: "Forbidden Ruins",
    image: "/placeholder.svg?height=400&width=600&text=Ritigala+Ruins",
    imageAlt:
      "Ancient stone pathways and crumbling monastery ruins deep inside the dense jungle of Ritigala forest reserve Sri Lanka",
    intro:
      "Ritigala is not a place that announces itself. There are no billboards, no tour packages being hawked at the entrance, and you will find almost no local tea stalls lining the path in. What you will find is a mountain that feels genuinely old — older somehow than its surroundings — and ruins that raise more questions the more carefully you look at them.",
    sections: [
      {
        heading: "The Ruins That Do Not Follow the Rules",
        content:
          "The monastery complex at Ritigala, built predominantly during the 1st century BCE through the 9th century CE, contains stone pathways, meditation platforms, and double-platform structures found nowhere else in Sri Lanka. What is strange about them is not their age — plenty of older structures survive on the island — but their design logic. The double-platform structures, known locally as 'pathalagé,' appear in patterns suggesting a deliberate spatial geometry that archaeologists have so far not been able to explain beyond broad terms. The platforms are elevated, connected by raised stone walkways, and surrounded by elaborate water-management channels that still partially function today after nearly two thousand years. The engineering is not primitive.",
      },
      {
        heading: "The Forbidden Forest",
        content:
          "Ritigala is unusual in Sri Lankan history because various ancient texts explicitly prohibit settlement or farming within its boundaries. The Mahavamsa, Sri Lanka's great historical chronicle, refers to Ritigala as a place set aside for solitary forest monks — practitioners who had renounced even communal monastic life to live in strict seclusion. This is likely why the ruins here are so different from the grand ceremonial architecture of nearby Anuradhapura. The people who built at Ritigala were not building for show. They were building for a way of life that has left almost no written record of itself.",
      },
      {
        heading: "Strange Plant Life and Medicinal Theories",
        content:
          "Ritigala's ecosystem is a genuine anomaly. The mountain creates its own localized weather pattern, trapping moisture from passing clouds even during Sri Lanka's dry season, and this micro-climate supports plant species found at no other lowland site in the country. Ancient Ayurvedic texts specifically name Ritigala as a source of rare medicinal herbs, some of which are no longer found elsewhere. Some researchers speculate that the forest monks who lived here chose this location precisely because of its botanical resources, and that the level of medicinal knowledge they accumulated over centuries represents a body of knowledge that was never fully recorded before their way of life ended.",
      },
    ],
    fact: "Ritigala rises to 766 meters and is the highest isolated mountain in Sri Lanka's dry zone — a geographical peculiarity that contributes directly to its unique wildlife and plant life.",
  },
  {
    id: "meetiyagoda",
    name: "Meetiyagoda Moonstone Mines",
    subtitle: "Where the Earth Glows from the Inside",
    district: "Galle District",
    color: "from-sky-700 to-blue-800",
    badgeColor: "bg-sky-600/80 border-sky-500",
    icon: "💎",
    highlight: "Geological Wonder",
    image: "/placeholder.svg?height=400&width=600&text=Meetiyagoda+Moonstone",
    imageAlt:
      "Sri Lankan moonstone gemstone showing natural blue adularescence optical effect, mined from Meetiyagoda Galle district",
    intro:
      "Sri Lanka is the only country in the world where the most prized moonstones — those with a soft blue, almost liquid glow floating beneath the surface of the stone — are found. And almost all of them come from a small patch of earth around Meetiyagoda, a quiet village in the Galle district that looks entirely unremarkable until you go underground.",
    sections: [
      {
        heading: "The Optical Mystery Beneath the Surface",
        content:
          "The glow inside a Sri Lankan moonstone, known in gemology as adularescence, is produced by the interaction of light with alternating layers of two different feldspar minerals — orthoclase and albite — that have grown together in microscopically thin sheets inside the crystal. As light enters the stone, it scatters between these layers and bounces back in a way that creates the floating, rolling luminescence that has made Sri Lankan moonstones prized for thousands of years. What makes Meetiyagoda geologically unusual is that the conditions that created these stones — a specific combination of temperature, pressure, and mineral-rich fluid movement during the cooling of ancient igneous rock — occurred here with a concentration and quality found nowhere else on earth. Geologists understand the mechanism. They do not have a fully satisfying explanation for why this specific corner of Sri Lanka produced it so prolifically.",
      },
      {
        heading: "Ancient Knowledge of the Stone",
        content:
          "Sri Lankan moonstones appear in historical trade records going back more than two thousand years. Roman merchants, ancient Arab traders, and the courts of various Asian kingdoms all sought them out. The stones were associated across many cultures with the moon, with water, with hidden knowledge, and with protection during travel — particularly sea voyages. Whether this symbolic consistency across disconnected cultures is coincidence or points to something about the stone's genuine energetic properties is a question that modern science is not equipped to answer.",
      },
    ],
    fact: "High-quality blue moonstones from Meetiyagoda have sold at international auction for over USD 50,000 per carat — making them among the most valuable gemstones by weight in the world.",
  },
  {
    id: "ravana-caves",
    name: "Ravana's Cave Systems",
    subtitle: "Underground Tunnels That Should Not Exist",
    district: "Ella / Ratnapura / Bandarawela",
    color: "from-red-800 to-orange-700",
    badgeColor: "bg-red-700/80 border-red-600",
    icon: "🕯️",
    highlight: "Ancient Tunnels",
    image: "/placeholder.svg?height=400&width=600&text=Ravana+Cave+System",
    imageAlt:
      "Dark entrance to Ravana Cave near Ella Sri Lanka with rock face and cave opening visible",
    intro:
      "Across the hill country and southern regions of Sri Lanka, there are caves — some small and natural, others disturbingly large and with walls that appear shaped — that local tradition collectively attributes to the reign of King Ravana. What makes these cave systems genuinely thought-provoking is not the mythology attached to them, but the pattern of their distribution.",
    sections: [
      {
        heading: "The Tunnel Network Theory",
        content:
          "A persistent tradition in Sri Lanka, shared by communities across several districts, holds that Ravana's kingdom included an extensive underground tunnel network connecting key sites — royal palaces, military positions, escape routes, and possibly airports for his aerial vehicles. While no archaeologist has confirmed a continuous tunnel system, several of the caves attributed to Ravana, when mapped, align in ways that would be difficult to explain as random natural formations. The Ravana Cave near Ella, the cave systems in the Ratnapura region, and several smaller formations in Badulla district sit at intervals that some researchers argue are too regular to be coincidental.",
      },
      {
        heading: "The Ella Cave: What We Know",
        content:
          "The most accessible of the Ravana-linked caves is the Ravana Cave near Ella, located partway up the cliff face above the famous Ravana Falls. It is a genuine cave — not a shrine construction — and local oral history holds that it was used by Sita during her captivity. The interior goes significantly deeper than most casual visitors realise, and sections of the inner chambers have carvings and sooting patterns consistent with long-term habitation. Whether that habitation was from the mythological era, from later forest monks who adopted the site, or from more recent use, the cave itself is undeniably ancient.",
      },
      {
        heading: "Magnetic Anomalies",
        content:
          "A small number of accounts from people who have gone deep into several of these cave systems — particularly in the Balangoda and Ratnapura areas — describe compass irregularities inside the caves: needles that spin or fail to settle in areas where the rock above them shows no obvious magnetic mineral concentration on the surface. These anecdotal reports have not been followed up with systematic measurement, but they are consistent with what would be expected if the tunnels had been cut through areas of concentrated magnetite-bearing rock — which raises the question of whether whoever built them (if they were built) knew something about the subsurface geology that modern surveys have not yet mapped.",
      },
    ],
    fact: "The Balangoda region near several attributed Ravana cave sites is also home to evidence of 'Balangoda Man' — a prehistoric human species whose remains date back over 30,000 years, making this area one of the longest continuously inhabited regions in Asia.",
  },
  {
    id: "sigiriya-laser",
    name: "Sigiriya: Beyond the Lion",
    subtitle: "What the Observatory Walls Are Really Saying",
    district: "Matale District",
    color: "from-yellow-700 to-orange-600",
    badgeColor: "bg-yellow-600/80 border-yellow-500",
    icon: "🔭",
    highlight: "Ancient Tech",
    image: "/placeholder.svg?height=400&width=600&text=Sigiriya+Observatory",
    imageAlt:
      "Sigiriya ancient water gardens and rock fortress in Sri Lanka showing advanced hydraulic engineering from 5th century",
    intro:
      "Every year, millions of people climb Sigiriya for the frescoes, the views, and the sheer drama of a 5th-century palace built on top of a 200-meter rock. Far fewer people spend time trying to understand the water gardens at its base — which is a shame, because that is where Sigiriya becomes genuinely extraordinary.",
    sections: [
      {
        heading: "The Water Gardens That Still Work After 1,500 Years",
        content:
          "The hydraulic system at Sigiriya, constructed during the reign of King Kashyapa (477–495 CE), is one of the most sophisticated water management systems built anywhere in the ancient world. The gardens include a pressurised fountain system — jets of water that still function today when the seasonal rains fill the underground cisterns — fed by a network of channels, underground pipes, and retention systems that maintain water pressure across a complex garden layout without any mechanical pumping. The precision of this engineering is not approximate. It works. That a system this complex was designed and built in the 5th century, in a location without access to metal pipe, by a civilization that left very little written record of its engineering methods, is something that mainstream historical accounts tend to move past quickly.",
      },
      {
        heading: "The Mirror Wall and Its Unexplained Messages",
        content:
          "The mirror wall at Sigiriya — a polished plaster surface that was originally so smooth visitors could see their own reflections — contains graffiti left by visitors going back at least 1,200 years. These inscriptions, written in early Sinhala, are well-documented and have been studied by scholars. But the original purpose of the mirror wall itself — a long stretch of vitreous plaster on a sheer cliff face, maintained at enormous effort, positioned to reflect both light and the famous frescoes opposite — has not been fully explained. Some researchers argue it functioned as a psychological and ceremonial device that was integral to the experience of approaching the king. Others have suggested it had a role in solar observation. Sigiriya repays the visitor who looks beyond the obvious.",
      },
      {
        heading: "Astronomical Alignment",
        content:
          "Recent studies of the site's orientation have found that several of Sigiriya's principal axes align with sunrise and sunset positions at key dates in the solar calendar. The main western entrance faces the sunset at the summer solstice, and the central axis of the water gardens aligns with the plumb position of Sirius — the brightest star in the night sky — at its annual climatic rising over Sri Lanka. Whether King Kashyapa designed this intentionally or whether the site inherited alignments from an earlier sacred geometry of the location is not established. But the alignments exist.",
      },
    ],
    fact: "Sigiriya's pressurised water fountains — fed by underground cisterns with no mechanical parts — are considered one of the world's earliest known examples of hydraulic engineering and still activate during the monsoon season.",
  },
  {
    id: "buduruvagala",
    name: "Buduruvagala",
    subtitle: "The Giant Carvings Nobody Talks About Enough",
    district: "Wellawaya, Monaragala District",
    color: "from-violet-700 to-purple-800",
    badgeColor: "bg-violet-600/80 border-violet-500",
    icon: "🗿",
    highlight: "Rock Carvings",
    image: "/placeholder.svg?height=400&width=600&text=Buduruvagala+Carvings",
    imageAlt:
      "Buduruvagala giant rock relief carvings of standing Buddha and Bodhisattvas carved directly into cliff face in Monaragala district Sri Lanka",
    intro:
      "Monaragala district is not on most tourist itineraries, which is part of why it remains one of the most archaeologically rich and least understood regions of Sri Lanka. Somewhere in the middle of dry-zone forest near the small town of Wellawaya, a cliff face contains carvings of such size and precision that they raise an immediate question: how?",
    sections: [
      {
        heading: "The Scale Problem",
        content:
          "The central standing Buddha carved into the Buduruvagala rock face stands approximately 15 meters tall. Around it, arranged with deliberate iconographic precision, are six more figures — Bodhisattvas, a Tara, and subsidiary figures — carved directly into the granite cliff. The carvings date to roughly the 9th century CE. What the historical record does not explain is the engineering of the project. These are not shallow reliefs — they are deeply carved three-dimensional figures removed from a near-vertical cliff surface. The scaffolding, tools, and coordinated human effort required to produce them would have been considerable even with modern equipment. With the tools available in 9th-century Sri Lanka, they represent an engineering challenge that deserves more study than it has received.",
      },
      {
        heading: "The Flame Symbol",
        content:
          "The central standing Buddha at Buduruvagala is depicted with a flame emanating from the top of the head — an iconographic feature called the usnisha flame, associated with enlightenment and supreme knowledge. This feature appears in some Indian and Southeast Asian Buddhist art, but the execution at Buduruvagala — the height, the detail of the carving, and the specific religious context of the remote site — is unusual. The wider complex includes carvings associated with both Mahayana and Theravada Buddhist traditions simultaneously, which suggests the site operated during a period of theological fluidity that is not well documented in Sri Lankan chronicles.",
      },
    ],
    fact: "A trace of orange paint is still visible on one of the Buduruvagala figures, suggesting the entire complex was once vividly painted — a fact that completely changes how the site would have appeared to ancient visitors arriving through the forest.",
  },
  {
    id: "ranmasu-uyana",
    name: "Ranmasu Uyana — The Sakwala Chakraya",
    subtitle: "The Star Gate Hidden in a Royal Garden",
    district: "Anuradhapura District",
    color: "from-cyan-800 to-teal-900",
    badgeColor: "bg-cyan-600/80 border-cyan-500",
    icon: "🌀",
    highlight: "Star Gate / Portal",
    image: "/placeholder.svg?height=400&width=600&text=Sakwala+Chakraya+Ranmasu+Uyana",
    imageAlt:
      "Sakwala Chakraya carved circular diagram at Ranmasu Uyana ancient pleasure garden Anuradhapura Sri Lanka with concentric ring carvings on rock face",
    intro:
      "Hidden inside the walls of Ranmasu Uyana — an ancient royal pleasure garden in Anuradhapura that most visitors walk through without fully registering what they are looking at — there is a rock carving unlike anything else in Sri Lanka. It is a circular diagram, roughly 1.8 meters in diameter, carved with great precision into a vertical granite face. Archaeologists call it the Sakwala Chakraya. Others call it the Universal Door. A small but persistent group of researchers calls it a star gate.",
    sections: [
      {
        heading: "What Is Actually Carved There",
        content:
          "The Sakwala Chakraya is a roughly disc-shaped carving divided into concentric rings filled with geometric symbols, wavy water lines, stylised lotus forms, and patterns that appear in sequences suggesting some kind of coded system. The outer edge of the disc is ringed with what appear to be flame or wave motifs. The interior is divided into registers — bands of repeating symbols that shift in character from one ring to the next. No consensus exists among scholars about what these symbols represent. Proposed interpretations range from a cosmological map of the universe as conceived in ancient Sinhalese Buddhism, to an astronomical diagram of planetary orbits, to a symbolic rendering of the ocean of existence (samsara) that surrounds the mythical Mount Meru. What all these interpretations share is an acknowledgment that the carving encodes something systematic — that it is a diagram of something, not merely a decoration.",
      },
      {
        heading: "The Star Gate Theory",
        content:
          "The theory that drew international attention to the Sakwala Chakraya — promoted most visibly by researcher Raj Vedaratnam and amplified significantly by UFO and ancient technology communities — is that the carving is not a cosmological map but a functional diagram: specifically, a depiction of a portal or dimensional gateway. Proponents point to the striking visual similarity between the Sakwala Chakraya's concentric ring structure and the 'star gate' imagery used in several modern theoretical physics discussions of wormholes and extra-dimensional passages. They also cite the carving's location — set into a vertical face at roughly human-eye level, in a garden specifically built for a royal family — and argue that a purely decorative map would not have received this placement and this precision. No physical evidence of any portal effect has ever been recorded at the site. But the theory refuses to disappear, partly because the carving itself refuses to be definitively explained by conventional archaeology.",
      },
      {
        heading: "What We Know About Ranmasu Uyana Itself",
        content:
          "Ranmasu Uyana translates as 'golden fish garden' and it is one of the oldest urban pleasure gardens in the world, constructed during the reign of King Kavantissa or possibly earlier, around the 3rd century BCE. It sits adjacent to the massive Thissa Wewa reservoir in Anuradhapura and covers roughly 40 acres. The garden contains intricately carved bathing pools, a network of water channels fed directly from the reservoir, and several rock outcrop features that appear to have served ceremonial functions. The Sakwala Chakraya is carved into one of these outcrops, at a point in the garden where the surrounding pool geometry and stone pathways suggest the carving was a focal point, not an afterthought. The garden as a whole represents a level of landscape engineering — hydraulics, spatial planning, stone carving — that places it in the same category as the gardens of classical Rome or Persia, built at roughly the same period.",
      },
      {
        heading: "The Fact-Check: What Holds Up and What Does Not",
        content:
          "The claim that the Sakwala Chakraya is a literal functional star gate is not supported by physical evidence and should be taken as speculative theory, not established fact. The claim that it is a cosmological diagram is the mainstream archaeological interpretation, though it too remains contested in its details. What is unambiguously true is this: the carving exists, it is ancient (pre-9th century CE at a minimum, possibly several centuries older), its precise meaning has not been agreed upon by researchers after decades of study, and it is significantly more complex in its execution than any purely ornamental carving at the site. The honest position is that nobody fully knows what it is — and that is, in its own way, the most interesting fact about it.",
      },
      {
        heading: "Visiting Ranmasu Uyana",
        content:
          "Ranmasu Uyana is located inside the Anuradhapura Sacred City, easily accessible from the main archaeological zone. The garden is significantly under-visited relative to the major stupas and monastery complexes nearby. The Sakwala Chakraya is in the southern section of the garden. Entry is included with the Anuradhapura Cultural Triangle ticket. Allow at least 90 minutes to walk the garden properly — the bathing pools, the carved rock features, and the hydraulic system are all worth more attention than most visitor itineraries give them.",
      },
    ],
    fact: "Ranmasu Uyana's bathing pools are fed by a hydraulic system connected directly to the Thissa Wewa reservoir, which has held water for over 2,000 years and is still in active agricultural use today — making it one of the oldest continuously functioning pieces of civil engineering in Asia.",
  },
]

export default function MysteriousPlacesSriLanka() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 40%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Mysteries</Badge>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">UFO Theories</Badge>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Sri Lankan Heritage</Badge>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Ancient Enigmas</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            🌐 Mysterious Places in Sri Lanka
          </h1>
          <p className="text-xl text-white/85 max-w-3xl leading-relaxed">
            An island the size of Ireland — yet with the geological complexity of a continent, ruins that predate explanation, and a sky that, if villagers are to be believed, occasionally hosts visitors from elsewhere. These are Sri Lanka&apos;s most genuinely unexplained places.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>📌 A Note on This Article:</strong> The content here blends documented historical and geological fact with local oral tradition, unverified eyewitness accounts, and ongoing theoretical debates. We present these perspectives honestly — neither dismissing the unexplained nor overstating what has been confirmed. Come with curiosity and your own judgment.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Sri Lanka Has More Mysteries Per Square Kilometer Than Almost Anywhere</h2>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              Sri Lanka is one of the longest continuously inhabited places on Earth. The Balangoda culture flourished here more than 35,000 years ago. The island sits at a meeting point of ancient trade routes between the Middle East, India, Southeast Asia, and East Africa. It was known to the ancient Romans as Taprobane, to Arab navigators as Serendib — a word that gave the English language the word &quot;serendipity.&quot;
            </p>
            <p>
              All of this history layered over a geologically volatile and mineralogically unusual piece of land — one that sits directly on the Indian tectonic plate&apos;s ancient Gondwana crust — creates the conditions for genuine mystery. Not manufactured, not exaggerated. Real places where the explanations trail off and the questions begin.
            </p>
            <p>
              The places listed here are not ghost stories for tourists. They are locations where physical evidence, local tradition, and sometimes serious research converge on something that remains genuinely open.
            </p>
          </div>
        </div>

        {/* Places */}
        {places.map((place, index) => (
          <section key={place.id} id={place.id} className="mb-16">
            {/* Place Header */}
            <div className={`bg-gradient-to-r ${place.color} text-white rounded-t-xl p-8`}>
              <div className="flex items-start gap-4 flex-wrap">
                <span className="text-4xl">{place.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="text-3xl font-bold">{place.name}</h2>
                    <Badge className={`${place.badgeColor} text-white border text-xs`}>
                      {place.highlight}
                    </Badge>
                  </div>
                  <p className="text-white/85 text-lg italic mb-2">{place.subtitle}</p>
                  <div className="flex items-center gap-1 text-white/70 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{place.district}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Place Body */}
            <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-md overflow-hidden">
              {/* Image + Intro */}
              <div className="flex flex-col md:flex-row gap-0">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] flex-shrink-0">
                  <Image
                    src={place.image}
                    alt={place.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex items-center">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {place.intro}
                  </p>
                </div>
              </div>

              {/* Content Sections */}
              <div className="p-6 md:p-8 space-y-6 border-t border-gray-100 dark:border-gray-700">
                {place.sections.map((section, si) => (
                  <div key={si}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 rounded bg-indigo-500 inline-block flex-shrink-0" />
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Fact Box */}
              <div className="mx-6 mb-6 md:mx-8 md:mb-8 bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    <strong>Interesting Fact: </strong>{place.fact}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* UFO Sightings Summary Card */}
        <section className="mb-16">
          <Card className="border-purple-200 dark:border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-6 h-6 text-purple-300" />
                <CardTitle className="text-white text-2xl">UFO Sightings in Sri Lanka: A Pattern Worth Noting</CardTitle>
              </div>
              <p className="text-purple-200 text-sm">A summary of documented and widely reported unexplained aerial phenomena</p>
            </div>
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Sri Lanka is not typically listed among the world&apos;s major UFO hotspots — but that may be partly because the country has not had the same infrastructure of organised civilian reporting networks that exist in the United States or Western Europe. What exists instead is a dispersed body of anecdotal evidence, local oral tradition, and occasional media reports that, when mapped, cluster around a surprisingly consistent set of geographical features.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    title: "Geographical Clustering",
                    icon: <Compass className="w-5 h-5 text-purple-500" />,
                    content:
                      "The majority of UFO-related sightings in Sri Lanka cluster around three types of location: isolated high-altitude rock formations (like Yahangala and Danigala), areas of known magnetic mineral concentration in the hill country, and coastal zones around Trincomalee — which also happens to be home to one of the world's deepest natural harbors and a historically significant naval base.",
                  },
                  {
                    title: "Time Patterns",
                    icon: <Zap className="w-5 h-5 text-purple-500" />,
                    content:
                      "Reports are more frequent during November through February, which corresponds with Sri Lanka's northeast monsoon season, when atmospheric conditions in the northwest of the island are particularly clear at night. Higher-altitude areas like the Knuckles range and the central highlands also see their clearest skies during this window.",
                  },
                  {
                    title: "What Witnesses Describe",
                    icon: <Eye className="w-5 h-5 text-purple-500" />,
                    content:
                      "Across different years and locations, there is a notably consistent description: light phenomena rather than structured craft, typically described as amber-white orbs moving slowly and silently at moderate altitude, lasting between 30 seconds and several minutes before disappearing. Sonic booms or light trails — the hallmarks of meteors or conventional aircraft — are absent in the most credible reports.",
                  },
                  {
                    title: "The Ancient Dimension",
                    icon: <AlertTriangle className="w-5 h-5 text-purple-500" />,
                    content:
                      "A number of Sri Lankan researchers argue that modern sighting locations correspond geographically with places that appear as sacred or cosmologically significant in ancient texts — suggesting either that ancient people were recording similar phenomena, or that both ancient sanctity and modern sightings reflect something about the landform itself that science has not yet characterised.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Other Notable Mentions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-amber-500" />
            Other Places Worth Your Attention
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Arankele Forest Monastery",
                district: "Kurunegala",
                note:
                  "Another hermit-monk forest complex with the same enigmatic double-platform structures found at Ritigala, hidden inside dense jungle and receiving almost no visitors.",
              },
              {
                name: "Aukana Buddha",
                district: "North Central Province",
                note:
                  "A 12-meter standing Buddha carved from a single granite face in the 5th century. It is positioned so that the first light of the rising sun illuminates the face — an astronomical alignment that was deliberate but has never been formally studied.",
              },
              {
                name: "Wilpattu Lake System",
                district: "Mannar / Puttalam",
                note:
                  "Sri Lanka's largest national park contains dozens of natural lakes (villus) whose perfectly circular forms have attracted geological debate, and local communities around the park boundaries speak consistently of unusual lights over the water at night.",
              },
              {
                name: "Mulkirigala Rock Temple",
                district: "Hambantota",
                note:
                  "A series of cave temples carved into a massive isolated rock in the deep south. The site contains manuscripts and inscriptions that have not been fully translated, and the deepest interior chamber has wall markings that predate the Buddhist occupation of the site.",
              },
              {
                name: "Pidurutalagala Peak",
                district: "Nuwara Eliya",
                note:
                  "Sri Lanka's highest mountain is also the site of the national security telecommunications infrastructure — off-limits to the public — which has generated its own set of theories about what, besides communications equipment, the summit might be used for.",
              },
              {
                name: "Mannar Island Baobab Trees",
                district: "Mannar",
                note:
                  "There are baobab trees on Mannar Island — trees native to Africa and Madagascar — estimated to be over 1,000 years old. Their presence predates known Arab or European contact, and nobody has established a satisfying explanation for how they got there.",
              },
            ].map((place, i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{place.name}</h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {place.district}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{place.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Closing Thought */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-indigo-950 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Sri Lanka Does Not Advertise Its Mysteries — It Holds Them</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              What distinguishes Sri Lanka&apos;s unexplained places from tourist-marketed &quot;mystery&quot; is that almost none of them are actively promoted. The villagers near Yahangala are not running UFO tours. The forests around Ritigala are not fitted with interpretive panels. The caves in the hill country do not have entrance kiosks. The mysteries here exist in spite of, not because of, any commercial interest in them.
            </p>
            <p className="text-white/85 leading-relaxed">
              That is, perhaps, the most compelling argument that at least some of these questions deserve serious attention. An island this ancient, this geologically singular, and this long inhabited is likely to contain answers to questions we have not yet thought to ask properly. The places above are where those questions seem most insistent.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Explore Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/articles/king-ravana" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              👑 King Ravana &amp; His Empire
            </Link>
            <Link href="/articles/ramayana-story-india-sri-lanka" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              📖 Ramayana Sites in Sri Lanka
            </Link>
            <Link href="/destinations/sigiriya" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              🦁 Sigiriya Destination Guide
            </Link>
            <Link href="/articles/wild-safari-parks-in-srilanka" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              🐘 Wildlife &amp; Safari Parks
            </Link>
            <Link href="/articles/universaldoors" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              🌀 Universal Door — Full Deep Dive
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
