import { NextRequest, NextResponse } from 'next/server'

// Define the destination type
interface Destination {
  id: number
  name: string
  path: string
  location: string
  image: string
  description: string
  highlights: string[]
  category: string
}

// Common misspellings and variations mapping
const searchVariations: { [key: string]: string[] } = {
  "sigiriya": ["seegriya", "sseegiriya", "sigirya", "segeriya", "sigeria", "sigiraya", "sigeriya", "segiriya"],
  "kandy": ["candy", "kandi", "kady", "mahanuwara"],
  "anuradhapura": ["anuradhpura", "anuradhpur", "anuradhapra", "anuradhapuri"],
  "nuwara eliya": ["nuwara", "nuwaraeliya", "nuwara elya", "nuwareliya"],
  "galle": ["gale", "gall", "galley"],
  "ella": ["ela", "ell"],
  "mirissa": ["marissa", "mirisa", "merissa"],
  "hikkaduwa": ["hikadwa", "hikkadwa", "hikkaduva"],
  "bentota": ["bnetota", "bentotga", "bentotta"],
  "negombo": ["negambo", "negomba", "negmbo"],
  "trincomalee": ["trinco", "trincomale", "trincomali", "tricomalee"],
  "jaffna": ["jafna", "jaffana", "jafna"],
  "polonnaruwa": ["polonarwa", "polonnaruva", "polonarua", "polonnaruawa", "polonnarua", "polannaruwa"],
  "dambulla": ["dambula", "dambula", "dambala"],
  "pinnawala": ["pinawala", "pinnawela", "pinawela", "pinanwala"],
  "wilpattu": ["wilpatu", "wilpathu", "willpattu", "vilpattu", "wilpaththu"],
  "horton plains": ["horton", "hortons", "horten plains", "hortan plains", "horton plain", "horten plain"],
  "adams peak": ["adam peak", "adams", "adam's peak", "sri pada", "sripada", "siri pada", "siripada", "butterfly mountain", "samanala kanda"],
  "sri pada": ["adams peak", "adam peak", "sripada", "siripada", "samanala", "butterfly mountain", "sacred footprint"],
  "temple of the tooth": ["tooth temple", "dalada maligawa", "sri dalada maligawa", "sacred tooth relic", "tooth relic temple", "dalada maligava", "temple-of-tooth", "temple of tooth"],
  "dalada maligawa": ["temple of the tooth", "tooth temple", "sri dalada maligawa", "temple of tooth"],
  "yala": ["yalla", "yale"],
  "arugam bay": ["arugambay", "arugam", "arugambay"],
  "pasikuda": ["pasikudu", "pasikudah"],
  "haputhale": ["haputale", "haputhale"],
  "bandarawela": ["bandarawela", "bandarwela"],
  "badulla": ["badula", "badula"],
  "mathale": ["matale", "mathale"],
  "yapahuwa": ["yapahuwa", "yapahuva"],
  "waligama": ["waligama", "waligaama", "waligana","weligama"],
  "katharagama": ["kataragama", "katharigama"],
  "mahiyanganaya": ["mahiyangana", "mahiyanganaya"],
  "sinharaja": ["sinharaja", "sinharaja forest"],
  "udawalawe": ["udawalawa", "udawalawe"],
  "minneriya": ["mineriya", "minneriya"],
  "kithulgala": ["kithulgala", "kitulgala"],
  "mannar": ["manar", "manaar"],
  "ambuluwawa": ["ambuluwawa", "ambuluwa"],
  "ruwanwelisaya": ["ruwanwelisaya", "ruwanwalisaya", "ruvanwelisaya", "ruvan weli saya", "great stupa"],
  "hirikatiya": ["hiriketiya", "hirikatya", "hirikattya", "hirikatiya beach", "hiri", "hirketiya", "hirikatya", "hirikettiya"],
  "kalpitiya": ["kalpitya", "kalpitiya", "kalpitiya beach"],
  "mihinthalaya": ["mihintale", "mihinthale", "mihinthalaya"],
  "isurumuniya": ["isurumuniya", "isurumuni", "isuru muniya", "isuramuniya", "isurumuniya temple", "isuru"],
  "jaya sri maha bodhi": ["jayasrimaha bodhi", "jaya sri maha bodhi", "jayasri maha bodhi", "jaya srimaha bodhi", "sri maha bodhi", "maha bodhi", "bodhi tree", "sacred bodhi tree", "jaya sri maha bodhiya"],
  "rathnapura": ["rathnapura", "rathnapure", "ratnapuraya", "ratnapure"],
  "balangoda": ["balangoda", "balangoda"],
  "kurunagala": ["kurunagala", "kurunagla", "kurunagala", "kurunegala"],
  "hummanaya": ["hummanaya","hummane", "hummanaya blow hole", "hummanaya blowhole"],
}

// Function to normalize search terms
function normalizeSearchTerm(term: string): string {
  return term.toLowerCase().trim().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ')
}

// Function to find the best match for a search term
function findBestMatch(searchTerm: string): string {
  const normalized = normalizeSearchTerm(searchTerm)

  // Check exact matches first
  for (const [correct, variations] of Object.entries(searchVariations)) {
    if (normalized === correct || normalized.includes(correct) || correct.includes(normalized)) {
      return correct
    }

    // Check variations
    for (const variation of variations) {
      if (normalized === variation || normalized.includes(variation) || variation.includes(normalized)) {
        return correct
      }
    }
  }

  return normalized
}

// Levenshtein distance function for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null))

  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,     // deletion
        matrix[j - 1][i] + 1,     // insertion
        matrix[j - 1][i - 1] + substitutionCost // substitution
      )
    }
  }

  return matrix[str2.length][str1.length]
}

// Function to calculate similarity score
function getSimilarityScore(searchTerm: string, targetTerm: string): number {
  const distance = levenshteinDistance(searchTerm.toLowerCase(), targetTerm.toLowerCase())
  const maxLength = Math.max(searchTerm.length, targetTerm.length)
  return maxLength === 0 ? 1 : 1 - (distance / maxLength)
}

// This should match your destinations data from destinations page
const destinations: Destination[] = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    path: "sigiriya-rock-fortress",
    location: "Central Province",
    image: "/Sigiriya.jpeg",
    description: "Ancient rock fortress and palace ruins with stunning frescoes and gardens",
    highlights: ["UNESCO World Heritage", "Ancient Frescoes", "Lions Gate"],
    category: "Historical",
  },
  {
    id: 2,
    name: "Galle Fort",
    path: "galle-fort",
    location: "Southern Province",
    image: "/galle-fort-sarmat-batagov-unsplash.jpg",
    description: "Historic fortified city built by Portuguese and Dutch colonizers",
    highlights: ["UNESCO World Heritage", "Colonial Architecture", "Lighthouse"],
    category: "Historical",
  },
  {
    id: 3,
    name: "Kandy / Mahanuwara",
    location: "Central Province",
    path: "kandy",
    image: "/Kandy.jpeg",
    description: "Sacred city with the Temple of the Tooth, a UNESCO World Heritage site",
    highlights: ["UNESCO World Heritage","Sacred Tooth Relic", "Cultural Shows" ],
    category: "Religious",
  },
  {
    id: 4,
    name: "Ella Nine Arch Bridge",
    location: "Uva Province",
    path: "ella-nine-arch",
    image: "/Nine-arch-ella.jpg",
    description: "Popular tourist destination known for its stunning architecture and scenic views",
    highlights: ["Train Spotting", "Tea Plantations", "Hiking Trails"],
    category: "Nature",
  },
  {
    id: 5,
    name: "Yala National Park",
    location: "Southern Province",
    path: "yala-national-park",
    image: "/Yala-national-park.jpg",
    description: "Premier wildlife destination famous for leopard sightings",
    highlights: ["Leopard Safari", "Elephant Herds", "Bird Watching"],
    category: "Wildlife",
  },
  {
    id: 6,
    name: "Mirissa Beach",
    location: "Southern Province",
    path: "mirissa",
    image: "/Mirissa.jpg",
    description: "Pristine beach perfect for whale watching and surfing",
    highlights: ["Whale Watching", "Surfing", "Beach Parties"],
    category: "Beach",
  },
  {
    id: 7,
    name: "Anuradhapura",
    location: "North Central Province",
    path: "anuradhapura",
    image: "/Anuradhapura.jpg",
    description: "Sri Lanka's ancient capital with sacred Buddhist sites",
    highlights: ["UNESCO World Heritage", "Ancient Ruins", "Sacred Sites"],
    category: "Historical",
  },
  {
    id: 8,
    name: "Ruwanwelisaya",
    location: "North Central Province",
    path: "ruwanwali-saya",
    image: "/Ruwanwalisaya.jpeg",
    description: "The Great Stupa of Anuradhapura built by King Dutugemunu in 140 BC",
    highlights: ["Sacred Buddha Relics", "Ancient Architecture", "Elephant Wall"],
    category: "Religious",
  },
  {
    id: 9,
    name: "Adam's Peak / Sri Pada",
    location: "Central Province",
    path: "adams-peak",
    image: "/Adams-peak.jpeg",
    description: "Sacred mountain with pilgrimage trail and sunrise views",
    highlights: ["Sunrise Hike", "Sacred Footprint", "Pilgrimage"],
    category: "Adventure",
  },
  {
    id: 10,
    name: "Nuwara Eliya",
    location: "Central Province",
    path: "nuwara-eliya",
    image: "/Nuwara-Eliya1.jpg",
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 11,
    name: "Wilpattu National Park",
    location: "North Western and North Central provinces",
    path: "wilpattu-national-park",
    image: "/Wilpattu.jpeg",
    description: "Sri Lanka's largest national park with diverse wildlife and scenic lakes",
    highlights: ["Sri Lanka tiger", "Crocodiles", "Bird Watching"],
    category: "Wildlife",
  },
  {
    id: 12,
    name: "Bentota",
    location: "Southern Province",
    image: "/Bentota-beach.jpeg",
    path: "bentota",
    description: "Beginning of down south beach tour with water sports",
    highlights: ["Beach", "Sea foods", "Water Sports", "River Safari"],
    category: "Beach",
  },
  {
    id: 13,
    name: "Dambulla Cave Temple",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/Rangiri-Dambulu.jpg",
    description: "Buddhist cave temple complex with stunning frescoes and statues",
    highlights: ["UNESCO World Heritage", "Buddhist Cave Temples", "Sacred Art"],
    category: "Historical",
  },
  {
    id: 14,
    name: "Jungle Beach",
    location: "Southern Province",
    path: "jungle-beach-roomassala",
    image: "/jungle-beach.jpeg",
    description: "Beach surrounded by jungle with golden sands and clear waters",
    highlights: ["Jungle", "Beach", "Clear Waters"],
    category: "Beach",
  },
  {
    id: 14,
    name: "Kalpitiya",
    location: "North Western Province",
    path: "kalpitiya",
    image: "/Kalpitiya.jpeg",
    description: "Beautiful beach destination known for its lagoons and water sports",
    highlights: ["Kitesurfing", "Dolphin Watching", "Pristine Beaches"],
    category: "Beach",
  },
  {
    id: 14,
    name: "Meemure",
    location: "Central Province",
    path: "meemure",
    image: "/Meemure.jpeg",
    description: "Somewhat Remote village surrounded by mountains and natural waterfalls",
    highlights: ["Waterfalls", "Village", "Nature Trails"],
    category: "Nature",
  },
   {
    id: 14,
    name: "Kurunagala",
    location: "North Western Province",
    path: "kurunagala",
    image: "/Kurunagala.webp",
    description: "Rock formation surrounded by the city with religious significance",
    highlights: ["Rock Formation", "Religious Significance"],
    category: "Nature",
  },
  {
    id: 14,
    name: "Haputhale",
    location: "Uva Province",
    path: "haputhale",
    image: "/Haputhale.jpeg",
    description: "Hill city with stunning views and tea estates",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 15,
    name: "Balangoda Pre Historic Caves",
    location: "Sabaragamuwa Province",
    path: "balangoda",
    image: "/placeholder.svg?height=400&width=600",
    description: "Pre historic caves where ancient people lived",
    highlights: ["Pre historic caves", "Ancient Artifacts", "Pre historic people"],
    category: "Historical",
  },
  {
    id: 18,
    name: "Trincomalee",
    location: "Eastern Province",
    path: "trincomalee",
    image: "/Trinco.jpeg",
    description: "Eastern coastal city with beautiful beaches and historical sites",
    highlights: ["Beaches", "Historical Sites", "Natural Harbor"],
    category: "Nature",
  },
  {
    id: 19,
    name: "Jaffna",
    location: "Northern Province",
    path: "jaffna",
    image: "/Nallur-Kovil.jpg",
    description: "Cultural capital of Northern Sri Lanka with ancient Tamil heritage, historic Dutch Fort, and sacred Hindu temples",
    highlights: ["Dutch Fort", "Nallur Temple", "Tamil Culture", "Delft Island", "Casuarina Beach", "Historic Library"],
    category: "Historical",
  },
  {
    id: 20,
    name: "Pasikuda",
    location: "Eastern Province",
    path: "pasikuda",
    image: "/Pasikuda.jpeg",
    description: "Beautiful beach destination in Eastern Sri Lanka",
    highlights: ["Crystal Clear Water", "Coral Reefs", "Water Sports"],
    category: "Beach",
  },
  {
    id: 20,
    name: "Thalpe Beach",
    location: "Southern Province",
    path: "thalpe-beach",
    image: "/Thalpe-beach.jpg",
    description: "Beautiful beach destination with Coral pools in Southern Sri Lanka",
    highlights: ["Crystal Clear Water", "Coral Reefs", "Coral pools"],
    category: "Beach",
  },
      {
    id: 20,
    name: "Blue Beach",
    location: "Southern Province",
    path: "blue-beach",
    image: "/Blue-beach.jpg",
    description: "Private Island Beach destination in Southern Sri Lanka",
    highlights: ["Crystal Clear Water", "Public Island", "Beach Camping"],
    category: "Beach",
  },
      {
    id: 20,
    name: "Hummanaya Blow Hole",
    location: "Southern Province",
    path: "hummanaya",
    image: "/HummanayaBlowHole.jpeg",
    description: "Natural blowhole and scenic spot in Southern Sri Lanka",
    highlights: ["Natural Wonder", "Scenic Views", "Photography"],
    category: "Beach",
  },
  {
    id: 21,
    name: "Colombo City Tour",
    location: "Western Province",
    path: "colombo-city-tour",
    image: "/Colombo-City.jpeg",
    description: "Explore Sri Lanka's commercial capital with modern attractions and colonial heritage",
    highlights: ["Galle Face Green", "Gangaramaya Temple", "Lotus Tower", "Pettah Market"],
    category: "City",
  },
  {
    id: 22,
    name: "Polonnaruwa",
    location: "North Central Province",
    path: "polonnaruwa",
    image: "/Polonnaruwa.jpeg",
    description: "Ancient royal capital with well-preserved ruins and archaeological treasures",
    highlights: ["UNESCO World Heritage", "Ancient Palace", "Royal Gardens", "Stone Sculptures", "Buddhist Ruins"],
    category: "Historical",
  },
  {
    id: 23,
    name: "Horton Plains National Park",
    location: "Central Province",
    path: "horton-plains",
    image: "/Hortonplains2.jpeg",
    description: "UNESCO World Heritage site featuring World's End cliff and diverse wildlife",
    highlights: ["World's End", "Baker's Falls", "Cloud Forest", "Endemic Species", "UNESCO Heritage"],
    category: "Nature",
  },
  {
    id: 24,
    name: "Ella",
    location: "Uva Province",
    path: "ella-town",
    image: "/Ella.jpg",
    description: "Cool hill town known for its tea plantations and scenic views",
    highlights: ["Tea Factories", "Cool Climate", "Scenic Views"],
    category: "Nature",
  },
  {
    id: 24,
    name: "Balangoda",
    location: "Uva Province",
    path: "balangoda",
    image: "/Balangoda1.jpeg",
    description: "Cool village known for its tea plantations and scenic views",
    highlights: ["Tea Factories", "Cool Climate", "Scenic Views"],
    category: "Nature",
  },
  {
    id: 25,
    name: "Mathale",
    location: "Central Province",
    path: "mathale",
    image: "/Walpolmulla1.jpg",
    description: "Hill station with tea plantations and mountain views",
    highlights: ["Tea Factories", "Cool Climate", "Mountain Views"],
    category: "Nature",
  },
  {
    id: 25,
    name: "Rathnapura",
    location: "Sabaragamuwa Province",
    path: "rathnapura",
    image: "/Saman-devalaya.jpeg",
    description: "City of Gems, known for its gem mines and waterfalls",
    highlights: ["Gem Mining", "Waterfalls", "Tea Plantations"],
    category: "Nature",
  },
  {
    id: 25,
    name: "Hatton",
    location: "Central Province",
    path: "hatton",
    image: "/Hatton1.jpg",
    description: "Hill town and gateway to Adam's Peak, surrounded by tea plantations",
    highlights: ["Tea Plantations", "Waterfalls", "Hiking"],
    category: "Nature",
  },
    {
    id: 25,
    name: "Ohiya",
    location: "Central Province",
    path: "ohiya",
    image: "/Ohiya.jpg",
    description: "Hill town and gateway to Adam's Peak, surrounded by tea plantations",
    highlights: ["Tea Plantations", "Waterfalls", "Hiking"],
    category: "Nature",
  },
    {
    id: 25,
    name: "Idalgashinna",
    location: "Central Province",
    path: "idalgashinna",
    image: "/Idalgashinna.jpg",
    description: "Hill town and gateway to Adam's Peak, surrounded by tea plantations",
    highlights: ["Tea Plantations", "Waterfalls", "Hiking"],
    category: "Nature",
  },
    {
    id: 25,
    name: "Mandaram Nuwara",
    location: "Central Province",
    path: "mandaram-nuwara",
    image: "/Mandaram-Nuwara.jpg",
    description: "Hill town and gateway to Adam's Peak, surrounded by tea plantations",
    highlights: ["Tea Plantations", "Waterfalls", "Hiking"],
    category: "Nature",
  },
  {
    id: 26,
    name: "Badulla",
    location: "Uva Province",
    path: "badulla",
    image: "/Badulla.jpeg",
    description: "Green hill city with stunning views and tea estates",
    highlights: ["Mountains", "Cool Climate", "Tea Estates"],
    category: "Nature",
  },
  {
    id: 27,
    name: "Bandarawela",
    location: "Uva Province",
    path: "bandarawela",
    image: "/Bandarawela.jpeg",
    description: "Hill station with cool climate and scenic beauty",
    highlights: ["Tea Factories", "Cool Climate", "Scenic Views"],
    category: "Nature",
  },
  {
    id: 28,
    name: "Mahiyanganaya",
    location: "Central Province",
    path: "mahiyanganaya",
    image: "/placeholder.svg?height=400&width=600",
    description: "Ancient settlement with rich cultural heritage",
    highlights: ["Ancient people", "Cultural Heritage", "Historical Sites"],
    category: "Historical",
  },
  {
    id: 29,
    name: "Katharagama",
    location: "Southern Province",
    path: "katharagama",
    image: "/Katharagama.jpg",
    description: "Sacred pilgrimage site for multiple religions",
    highlights: ["Religious Sites", "God Kataragama", "Pilgrimage"],
    category: "Religious",
  },
  {
    id: 30,
    name: "Waligama",
    location: "Southern Province",
    path: "waligama",
    image: "/Waligama.jpg",
    description: "Coastal town with stunning beaches and water sports",
    highlights: ["Beaches", "Water Sports", "Surfing"],
    category: "Beach",
  },
  {
    id: 31,
    name: "Yapahuwa",
    location: "North Western Province",
    path: "yapahuwa",
    image: "/Yapahuwa.jpeg",
    description: "Short-lived capital in ancient Sri Lanka with unique rock fortress",
    highlights: ["Past Kingdom", "Rock Fortress", "Ancient Architecture"],
    category: "Historical",
  },
  {
    id: 32,
    name: "Arugam Bay",
    location: "Eastern Province",
    path: "arugambay",
    image: "/placeholder.svg?height=400&width=600",
    description: "Popular surfing destination with stunning beaches and vibrant nightlife",
    highlights: ["Surfing", "Wavy Beaches", "Nightlife"],
    category: "Beach",
  },
  {
    id: 33,
    name: "Pinnawala Elephant Orphanage",
    location: "Sabaragamuwa Province",
    path: "pinnawala-elephant-orphanage",
    image: "/Pinnawala.jpeg",
    description: "Elephant sanctuary and orphanage",
    highlights: ["Elephants", "Elephant bathing", "Elephant feeding"],
    category: "Wildlife",
  },
  {
    id: 34,
    name: "Negombo",
    location: "Western Province",
    path: "negombo",
    image: "/Negombo.jpg",
    description: "Coastal city near the international airport with beautiful beaches and historic churches",
    highlights: ["Beaches", "Sea foods", "Catholic Churches"],
    category: "Beach",
  },
  {
    id: 35,
    name: "Hikkaduwa",
    location: "Southern Province",
    path: "Hikkaduwa",
    image: "/Hikkaduwabeach.jpeg",
    description: "Famous beach destination known for coral reefs, surfing, and turtle sanctuary",
    highlights: ["Coral Reef Snorkeling", "Surfing", "Sea Turtle Sanctuary", "Beach Activities"],
    category: "Beach",
  },
  {
    id: 36,
    name: "Sinharaja Forest Reserve",
    location: "Sabaragamuwa Province",
    path: "sinharaja-forest",
    image: "/Sinharaja-forest.jpg",
    description: "UNESCO World Heritage rainforest with endemic species",
    highlights: ["Rainforest", "Endemic Species", "Bird Watching"],
    category: "Nature",
  },
  {
    id: 37,
    name: "Udawalawe National Park",
    location: "Sabaragamuwa Province",
    path: "udawalawa-national-park",
    image: "/placeholder.svg?height=400&width=600",
    description: "National park famous for elephant herds",
    highlights: ["Elephants", "Safari", "Wildlife"],
    category: "Wildlife",
  },
  {
    id: 38,
    name: "Minneriya National Park",
    location: "North Central Province",
    path: "minneriya-national-park",
    image: "/Minneriyanationalpark.jpeg",
    description: "National park known for elephant gathering",
    highlights: ["Elephant Gathering", "Safari", "Wildlife"],
    category: "Wildlife",
  },
  {
    id: 39,
    name: "Kithulgala",
    location: "Sabaragamuwa Province",
    path: "kithulgala",
    image: "/Kithulgala-waterrafting.jpg",
    description: "Adventure destination famous for white water rafting",
    highlights: ["White Water Rafting", "Adventure Sports", "River Activities"],
    category: "Adventure",
  },
  {
    id: 40,
    name: "Mannar",
    location: "Northern Province",
    path: "mannar",
    image: "/Mannar.jpg",
    description: "Historic island town with ancient baobab trees",
    highlights: ["Baobab Trees", "Historical Sites", "Bird Watching"],
    category: "Historical",
  },
  {
    id: 41,
    name: "Ambuluwawa",
    location: "Central Province",
    path: "ambuluwawa",
    image: "/Ambuluwawa-tower.jpg",
    description: "Unique tower with panoramic views and biodiversity",
    highlights: ["Panoramic Views", "Unique Tower", "Biodiversity"],
    category: "Nature",
  },
  {
    id: 42,
    name: "Temple of the Tooth (Sri Dalada Maligawa)",
    location: "Central Province",
    path: "temple-of-tooth",
    image: "/Temple-of-the-tooth.jpeg",
    description: "Sacred Buddhist temple in Kandy housing the relic of the tooth of Buddha, a UNESCO World Heritage site",
    highlights: ["Sacred Tooth Relic", "Buddhist Ceremonies", "UNESCO Heritage", "Royal Architecture", "Daily Rituals"],
    category: "Religious",
  },
  {
    id: 43,
    name: "Hirikatiya Beach",
    location: "Southern Province",
    path: "hirikatiya",
    image: "/",
    description: "Sri Lanka's ultimate surfing paradise with perfect horseshoe bay, world-class waves, and vibrant backpacker culture",
    highlights: ["Perfect Surfing Waves", "Horseshoe Bay", "Backpacker Paradise", "Beach Yoga", "Coconut Grove"],
    category: "Beach",
  },
  {
    id: 44,
    name: "Isurumuniya Temple",
    location: "North Central Province",
    path: "isurumuniya",
    image: "/Isurumuniya.jpeg",
    description: "Ancient rock temple in Anuradhapura famous for the 'Isurumuniya Lovers' carving and beautiful rock-cut architecture from the 3rd century BC",
    highlights: ["Isurumuniya Lovers Carving", "Rock-cut Architecture", "Ancient Buddhist Temple", "Archaeological Marvel"],
    category: "Historical",
  },
  {
    id: 45,
    name: "Jaya Sri Maha Bodhi",
    location: "North Central Province",
    path: "jaya-sri-maha-bodhi",
    image: "/JayaSrimahaBodhi.jpeg",
    description: "The world's oldest recorded tree, a sacred Bo tree grown from a cutting brought from India in 288 BC, one of the holiest sites in Buddhism",
    highlights: ["World's Oldest Recorded Tree", "Sacred Bo Tree", "2300+ Years Old", "Buddhist Pilgrimage Site", "Golden Railings"],
    category: "Religious",
  }
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  const originalSearchTerm = query.toLowerCase().trim()

  // Try to find the best match for potential typos
  const correctedSearchTerm = findBestMatch(originalSearchTerm)

  // Search through destinations with both original and corrected terms
  const searchTerms = [originalSearchTerm, correctedSearchTerm].filter((term, index, arr) =>
    arr.indexOf(term) === index // Remove duplicates
  )

  interface ScoredDestination extends Destination {
    score: number
    matchType: string
  }

  const scoredResults: ScoredDestination[] = []

  destinations.forEach(destination => {
    let bestScore = 0
    let bestMatchType = ''

    searchTerms.forEach(searchTerm => {
      // Exact matches
      const nameExact = destination.name.toLowerCase() === searchTerm
      const locationExact = destination.location.toLowerCase() === searchTerm

      if (nameExact) {
        bestScore = Math.max(bestScore, 1.0)
        bestMatchType = 'exact_name'
      } else if (locationExact) {
        bestScore = Math.max(bestScore, 0.95)
        bestMatchType = 'exact_location'
      }

      // Partial matches
      const nameMatch = destination.name.toLowerCase().includes(searchTerm)
      const locationMatch = destination.location.toLowerCase().includes(searchTerm)
      const descriptionMatch = destination.description.toLowerCase().includes(searchTerm)
      const categoryMatch = destination.category.toLowerCase().includes(searchTerm)
      const highlightsMatch = destination.highlights.some(highlight =>
        highlight.toLowerCase().includes(searchTerm)
      )

      if (nameMatch && !nameExact) {
        bestScore = Math.max(bestScore, 0.9)
        bestMatchType = bestMatchType || 'partial_name'
      } else if (locationMatch && !locationExact) {
        bestScore = Math.max(bestScore, 0.8)
        bestMatchType = bestMatchType || 'partial_location'
      } else if (highlightsMatch) {
        bestScore = Math.max(bestScore, 0.7)
        bestMatchType = bestMatchType || 'highlights'
      } else if (categoryMatch) {
        bestScore = Math.max(bestScore, 0.6)
        bestMatchType = bestMatchType || 'category'
      } else if (descriptionMatch) {
        bestScore = Math.max(bestScore, 0.5)
        bestMatchType = bestMatchType || 'description'
      }

      // Fuzzy matching for names (typo tolerance)
      if (!nameMatch && !nameExact) {
        const nameSimilarity = getSimilarityScore(searchTerm, destination.name)
        if (nameSimilarity > 0.6) { // 60% similarity threshold
          bestScore = Math.max(bestScore, nameSimilarity * 0.8)
          bestMatchType = bestMatchType || 'fuzzy_name'
        }
      }

      // Fuzzy matching for highlights
      destination.highlights.forEach(highlight => {
        if (!highlight.toLowerCase().includes(searchTerm)) {
          const highlightSimilarity = getSimilarityScore(searchTerm, highlight)
          if (highlightSimilarity > 0.7) { // 70% similarity for highlights
            bestScore = Math.max(bestScore, highlightSimilarity * 0.6)
            bestMatchType = bestMatchType || 'fuzzy_highlights'
          }
        }
      })
    })

    if (bestScore > 0.4) { // Minimum threshold for results
      scoredResults.push({
        ...destination,
        score: bestScore,
        matchType: bestMatchType
      })
    }
  })

  // Sort results by score (highest first)
  const sortedResults = scoredResults.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score

    // Secondary sort by match type priority
    const matchTypePriority: { [key: string]: number } = {
      'exact_name': 10,
      'exact_location': 9,
      'partial_name': 8,
      'partial_location': 7,
      'highlights': 6,
      'category': 5,
      'description': 4,
      'fuzzy_name': 3,
      'fuzzy_highlights': 2
    }

    return (matchTypePriority[b.matchType] || 0) - (matchTypePriority[a.matchType] || 0)
  })

  // Remove score and matchType from final results
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const finalResults = sortedResults.map(({ score, matchType, ...destination }) => destination)

  // Prepare response with suggestion if search term was corrected
  const response: {
    results: Destination[]
    total: number
    suggestion?: {
      original: string
      corrected: string
      message: string
    }
  } = {
    results: finalResults.slice(0, 10), // Limit to 10 results
    total: finalResults.length
  }

  // Add suggestion if we corrected the search term
  if (correctedSearchTerm !== originalSearchTerm && finalResults.length > 0) {
    response.suggestion = {
      original: query,
      corrected: correctedSearchTerm,
      message: `Did you mean "${correctedSearchTerm}"?`
    }
  }

  return NextResponse.json(response)
}
