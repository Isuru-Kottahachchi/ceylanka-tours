"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Filter } from "lucide-react"
import { AdBanner } from "@/components/ad-banner"
import React from "react"

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    path: "sigiriya-rock-fortress",
    location: "Central Province",
    image: "/Sigiriya.jpeg",
    // rating: 4.8,
    // reviews: 1250,
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
    // rating: 4.7,
    // reviews: 980,
    description: "Historic fortified city built by Portuguese and Dutch colonizers",
    highlights: ["UNESCO World Heritage", "Colonial Architecture", "Lighthouse"],
    category: "Historical",
  },
  {
    id: 3,
    name: "Kandy  / Mahanuwara",
    location: "Central Province",
    path: "kandy",
    image: "/Kandy-View.jpg",
    // rating: 4.9,
    // reviews: 1580,
    description: "Sacred city with the Temple of the Tooth, a UNESCO World Heritage site",
    highlights: ["UNESCO World Heritage", "Sacred Tooth Relic", "Cultural Shows"],
    category: "Religious",
  },
  {
    id: 4,
    name: "Ella Nine Arch Bridge",
    location: "Uva Province",
    path: "ella-nine-arch",
    image: "/Nine-arch-ella.jpg",
    // rating: 4.6,
    // reviews: 750,
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
    // rating: 4.5,
    // reviews: 920,
    description: "Premier wildlife destination famous for leopard sightings",
    highlights: ["Leopard Safari", "Elephant Herds", "Bird Watching"],
    category: "Wildlife",
  },
  {
    id: 6,
    name: "Mirissa Beach",
    location: "Southern Province",
    path: "mirissa",
    image: "/Mirissa-Coco-Hill.jpeg",
    // rating: 4.7,
    // reviews: 1100,
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
    // rating: 4.7,
    // reviews: 1100,
    description: "Sri Lanka's ancient capital with sacred Buddhist sites",
    highlights: ["UNESCO World Heritage", "Ancient Ruins", "Sacred Sites"],
    category: "Historical",
  },
  {
    id: 8,
    name: "Adam's Peak / Sri Pada",
    location: "Central Province",
    path: "adams-peak",
    image: "/Adams-peak.jpeg",
    // rating: 4.4,
    // reviews: 650,
    description: "Sacred mountain with pilgrimage trail and sunrise views",
    highlights: ["Sunrise Hike", "Sacred Footprint", "Pilgrimage"],
    category: "Adventure",
  },
  {
    id: 9,
    name: "Nuwara Eliya",
    location: "Central Province",
    path: "nuwara-eliya",
    image: "/Nuwara-Eliya1.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Hill station known as Little England with tea plantations",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 10,
    name: "Wilpattu National Park",
    location: "North Western and North Central provinces",
    path: "wilpattu-national-park",
    image: "/Wilpattu.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Sri Lankas Largest national park with diverse wildlife and scenic lakes",
    highlights: ["Sri Lanka tiger", "Crocadiles", "Bird Watching"],
    category: "Wild Life",
  },
  {
    id: 11,
    name: "Bentota",
    location: "Southern Province",
    image: "/Bentota-beach.jpeg",
    path: "bentota",
    // rating: 4.3,
    // reviews: 890,
    description: "Beginning of down south beach tour with water sports",
    highlights: ["Beach", "Sea foods", "Water Sports", "River Safari"],
    category: "Beach",
  },
  {
    id: 19,
    name: "Jaffna",
    location: "Northern Province",
    path: "jaffna",
    image: "/Nallur-Kovil.jpg",
    // rating: 4.6,
    // reviews: 1120,
    description: "Cultural capital of Northern Sri Lanka with ancient Tamil heritage, historic Dutch Fort, and sacred Hindu temples",
    highlights: ["Dutch Fort", "Nallur Temple", "Tamil Culture", "Delft Island", "Casuarina Beach", "Historic Library"],
    category: "Historical",
  },
  {
    id: 14,
    name: "Haputhale",
    location: "Uva Province",
    path: "haputhale",
    image: "/Haputhale.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Hll city with stunning views and tea estates",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 18,
    name: "Trincomalee",
    location: "Eastern Province",
    path: "trincomalee",
    image: "/Trinco.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Eastern coastal city with beautiful beaches and historical sites",
    highlights: ["Beaches", "Historical Sites", "Natural Harbor"],
    category: "Nature",
  },
  {
    id: 18,
    name: "Kalpitiya",
    location: "North Western Province",
    path: "kalpitiya",
    image: "/Kalpitiya.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Paradise for kitesurfing and dolphin watching",
    highlights: ["Beaches", "Kitesurfing", "Dolphin Watching"],
    category: "Nature",
  },
  // {
  //   id: 12,
  //   name: "Things you should know before visiting Bentota",
  //   location: "Southern Province",
  //   image: "/placeholder.svg?height=400&width=600",
  //   path: "bentota",
  //   // rating: 4.3,
  //   // reviews: 890,
  //   description: "Hill station known as Little England with tea plantations",
  //   highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
  //   category: "Nature",
  // },
  {
    id: 12,
    name: "Hirikatiya",
    location: "Southern Province",
    image: "/Hirikatiyabeach.jpg",
    path: "hirikatiya",
    // rating: 4.3,
    // reviews: 890,
    description: "Coastal town known for its beautiful beaches and coral reefs",
    highlights: ["Coral Reefs", "Water Sports", "Beach Parties"],
    category: "Beach",
  },
  {
    id: 13,
    name: "Dambulla Cave Temple",
    location: "Central Province",
    path: "dambulla-cave-temple",
    image: "/Rangiri-Dambulu.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Buddhist cave temple complex with stunning frescoes and statues",
    highlights: ["UNESCO World Heritage", "Buddhist Temples", "Cave temple", "Wall arts"],
    category: "Historical",
  },
  {
    id: 14,
    name: "Jungle Beach",
    location: "Southern Province",
    path: "jungle-beach-roomassala",
    image: "/jungle-beach.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Beach surrounded by jungle with golden sands and clear waters",
    highlights: ["Jungle", "Beach", "Clear Waters"],
    category: "Beach",
  },
  {
    id: 14,
    name: "Meemure",
    location: "Central Province",
    path: "meemure",
    image: "/Meemure.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Somewhat Remote village surrounded by mountains and natural waterfalls",
    highlights: ["Waterfalls", "Village", "Nature Trails"],
    category: "Nature",
  },

  {
    id: 15,
    name: "Balangoda Pre Historic Caves",
    location: "Sabaragamuwa Province",
    path: "balangoda",
    image: "/Balangoda.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Pre historic caves where ancient people lived",
    highlights: ["Pre historic caves", "Ancient Artifacts", "Pre historic people"],
    category: "Historical",
  },
  {
    id: 16,
    name: "Delft Island",
    location: "Northern Province",
    path: "delft-island",
    image: "/Delft-Island.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Island of Sri Lanka where unique wildlife and landscapes can be found",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  // {
  //   id: 17,
  //   name: "Bathangunduwa",
  //   location: "",
  //   path: "bathangunduwa",
  //   image: "/placeholder.svg?height=400&width=600",
  //   // rating: 4.3,
  //   // reviews: 890,
  //   description: "Island of Sri Lanka",
  //   highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
  //   category: "Nature",
  // },
  {
    id: 20,
    name: "Pasikuda",
    location: "Eastern Province",
    path: "pasikuda",
    image: "/Pasikuda.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Coastal town with stunning beaches and water sports",
    highlights: ["Beaches", "Hot Climate", "Surfing"],
    category: "Beach",
  },
  {
    id: 20,
    name: "Waligama",
    location: "Southern Province",
    path: "waligama",
    image: "/Waligama.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Coastal town with stunning beaches and water sports",
    highlights: ["Beaches", "Water Sports", "Surfing"],
    category: "Beach",
  },
  {
    id: 20,
    name: "Hikkaduwa",
    location: "Southern Province",
    path: "hikkaduwa",
    image: "/Hikkaduwabeach.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Coastal town with good places for surfing and beach activities",
    highlights: ["Coral Reefs watching", "Water Sports", "Surfing"],
    category: "Beach",
  },
  {
    id: 21,
    name: "Yapahuwa",
    location: "North Western Province",
    path: "yapahuwa",
    image: "/Yapahuwa.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Short lived capital in ancient Sri Lanka with unique rock fortress",
    highlights: ["Past Kingdom", "Rock Fortress"],
    category: "Nature",
  },
  {
    id: 22,
    name: "Arugam Bay",
    location: "Eastern Province",
    path: "arugambay",
    image: "/Arugam-bay.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Popular surfing destination with stunning beaches and vibrant nightlife",
    highlights: ["Surfing", "Wavy Beaches", "Hot Climate"],
    category: "Beach",
  },
  {
    id: 23,
    name: "Polonnaruwa",
    location: "North Central Province",
    path: "polonnaruwa",
    image: "/Polonnaruwa.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Ancient city with well-preserved ruins and sacred sites",
    highlights: ["UNESCO World Heritage", "Ancient Ruins", "Sacred Sites"],
    category: "Historical",
  },
  {
    id: 24,
    name: "Ella",
    location: "Uva Province",
    path: "/ella-town",
    image: "/Ella.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Cool hill town known for its tea plantations and scenic views",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 24,
    name: "Balangoda",
    location: "Sabaragamuwa Province",
    path: "/balangoda",
    image: "/Balangoda1.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Cool village known for its tea plantations and scenic views",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 25,
    name: "Rathnapura",
    location: "Sabaragamuwa Province",
    path: "/rathnapura",
    image: "/Saman-devalaya.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "City of Gems, known for its gem mines and waterfalls",
    highlights: ["Gem Mining", "Waterfalls", "Tea Plantations"],
    category: "Nature",
  },
  {
    id: 25,
    name: "Mathale",
    location: "Central Province",
    path: "/mathale",
    image: "/Walpolmulla1.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 26,
    name: "Badulla",
    location: "Uva Province",
    path: "/badulla",
    image: "/Badulla.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Greeny hill city with stunning views and tea estates",
    highlights: ["Mountains", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 27,
    name: "Ohiya",
    location: "Uva Province",
    path: "/ohiya",
    image: "/Ohiya.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Cool village with stunning views and tea estates",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 27,
    name: "Mandaram Nuwara",
    location: "Uva Province",
    path: "/mandaram-nuwara",
    image: "/Mandaram-nuwara.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Cool village with stunning views and tea estates",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 27,
    name: "Idalgashinna",
    location: "Uva Province",
    path: "/idalgashinna",
    image: "/Idalgashinna.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Stunning hill village with panoramic views and tea estates",
    highlights: ["Rail Trails", "Camping", "Cold and Pleasant"],
    category: "Nature",
  },
  {
    id: 27,
    name: "Bandarawela",
    location: "Uva Province",
    path: "/bandarawela",
    image: "/Bandarawela.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "Nature",
  },
  {
    id: 28,
    name: "Mahiyanganaya",
    location: "Uva Province",
    path: "/mahiyanganaya",
    image: "/placeholder.svg?height=400&width=600",
    // rating: 4.3,
    // reviews: 890,
    description: "Ancinent people and their culture",
    highlights: ["Ancient people", "", ""],
    category: "Historical",
  },
  {
    id: 29,
    name: "Katharagama",
    location: "Southern Province",
    path: "/katharagama",
    image: "/Katharagama.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Where Lord Kataragama is worshipped",
    highlights: ["Religious Sites", "God Kataragama", "Katharama Procession"],
    category: "Historical",
  },
  {
    id: 30,
    name: "Pinnawala Elephant Orphanage",
    location: "Sabaragamuwa Province",
    path: "/pinnawala-elephant-orphanage",
    image: "/Pinnawala.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Elephant orphanage and sanctuary for rescued elephants",
    highlights: ["Elephants", "Elephant bathing", "Elephant feeding"],
    category: "Animals",
  },
  {
    id: 31,
    name: "Sinharaja Forest Reserve",
    location: "Southern Province",
    path: "/sinharaja-forest",
    image: "/Sinharaja-forest.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Biodiversity hotspot and UNESCO World Heritage site with dense rainforest",
    highlights: ["UNESCO World Heritage","Mangroves", "Wildlife" ],
    category: "Nature",
  },
  {
    id: 32,
    name: "Madu River Safari",
    location: "Southern Province",
    path: "/madu-river-safari",
    image: "/Madu-river-safari.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Fish, Birds and Crocodile watching",
    highlights: ["Mangroves", "Wildlife", "Crocodiles"],
    category: "Animals",
  },
  {
    id: 31,
    name: "Mannar",
    location: "Northern Province",
    path: "/mannar",
    image: "/Mannar.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "The Largest Island of Sri Lanka",
    highlights: ["Beaches", "Wildlife", "portuguese Fort"],
    category: "Nature",
  },
  {
    id: 32,
    name: "Negombo",
    location: "Western Province",
    path: "/negombo",
    image: "/Negombo.jpg",
    // rating: 4.3,
    // reviews: 890,
    description: "Coastal city known for its beaches and sea foods",
    highlights: ["Beaches", "Sea foods", "Catholic Churches"],
    category: "City",
  },
  {
    id: 33,
    name: "Colombo City Tour",
    location: "Western Province",
    path: "/colombo-city-tour",
    image: "/Colombo-City.jpeg",
    // rating: 4.3,
    // reviews: 890,
    description: "Around the heart of the Economic Capital of Sri Lanka",
    highlights: ["Tea Factories", "Cool Climate", "Colonial Architecture"],
    category: "City",
  },

]

const categories = ["All", "Historical", "Religious", "Nature", "Wildlife", "Beach", "Adventure"]

export default function DestinationsPage() {
  const [showSearchReminder, setShowSearchReminder] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [activeSearch, setActiveSearch] = React.useState(""); // This will hold the actual search term being filtered
  const [searchResults, setSearchResults] = React.useState([]); // API search results
  const [isSearching, setIsSearching] = React.useState(false); // Loading state
  const reminderInterval = 20000; // 20 seconds
  const reminderDuration = 5000; // 5 seconds
  const [category, setCategory] = React.useState("All");

  // Use search results if we have an active search, otherwise use local destinations
  const displayDestinations = activeSearch.trim() ? searchResults : destinations;

  // Filter destinations based on category (only for local destinations)
  const filteredDestinations = React.useMemo(() => {
    let filtered = displayDestinations;

    // Only apply category filter if we're not showing search results
    if (category !== "All" && !activeSearch.trim()) {
      filtered = filtered.filter(destination =>
        destination.category.toLowerCase() === category.toLowerCase() ||
        destination.category.toLowerCase().replace(" ", "") === category.toLowerCase()
      );
    }

    return filtered;
  }, [category, displayDestinations, activeSearch]);

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    if (searchValue.length > 0) {
      setShowSearchReminder(false);
    } else {
      // Show immediately on mount
      setShowSearchReminder(true);
      // Then show every 30s for 5s
      intervalId = setInterval(() => {
        setShowSearchReminder(true);
        timeoutId = setTimeout(() => setShowSearchReminder(false), reminderDuration);
      }, reminderInterval);
      // Hide after 5s if still visible
      timeoutId = setTimeout(() => setShowSearchReminder(false), reminderDuration);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [searchValue]);

  console.log("Category:", category);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (searchValue.trim()) {
      setIsSearching(true);
      setActiveSearch(searchValue);

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchValue)}`);
        const data = await response.json();
        setSearchResults(data.results || []);
        console.log("Search results:", data.results);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    } else {
      // Clear search if empty
      setActiveSearch("");
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchValue("");
    setActiveSearch("");
    setSearchResults([]);
    setCategory("All");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Sri Lanka&apos;s Destinations</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From ancient temples to pristine beaches, discover the diverse attractions that make Sri Lanka truly special
          </p>

          {/* Search and Filter */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 w-full relative">
              <Input
                type="search"
                placeholder="Search your Sri Lankan destinations"
                className={`bg-white text-black pl-10 transition-shadow ${showSearchReminder ? 'ring-2 ring-green-400 ring-offset-2' : ''}`}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              {/* Desktop: popup below search bar, arrow up */}
              {showSearchReminder && (
                <>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-30 bg-green-600 text-white text-sm rounded-lg shadow-2xl px-4 py-3 border-2 border-white dark:border-green-400 font-semibold animate-bounce flex-col items-center hidden sm:flex top-full mt-4"
                  >
                    <svg className="absolute -top-4" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L23.1962 15L0.803847 15L12 0Z" fill="#22c55e" />
                    </svg>
                    <span className="flex items-center gap-2 mb-1">
                      <Search className="h-4 w-4 text-white" />
                      Search your favorite destinations in Sri Lanka
                    </span>
                  </div>
                </>
              )}
            </div>
            <Button type="submit" disabled={isSearching} className="bg-white text-green-600 hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
              <Filter className="h-4 w-4 mr-2" />
              {isSearching ? "Searching..." : "Filter"}
            </Button>
            {/* Mobile: popup below search input */}
            {showSearchReminder && (
              <div className="relative w-full flex flex-col items-center sm:hidden">
                <div className="mt-2 bg-green-600 text-white text-sm rounded-lg shadow-2xl px-4 py-3 border-2 border-white dark:border-green-400 font-semibold animate-bounce flex flex-col items-center">
                  <svg className="absolute -top-4" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L23.1962 15L0.803847 15L12 0Z" fill="#22c55e" />
                  </svg>
                  <span className="flex items-center gap-2 mb-1">
                    <Search className="h-4 w-4 text-white" />
                    Search your favorite destinations in Sri Lanka
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All"
                ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                : "border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100  cursor-pointer"
              }
              onClick={() => { setCategory(category) }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* <AdBanner slot="destinations-top" /> */}

        {/* Search Results Info */}
        {activeSearch.trim() && (
          <div className="mb-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {filteredDestinations.length === 0
                ? `No destinations found for "${activeSearch}"`
                : `Found ${filteredDestinations.length} destination${filteredDestinations.length === 1 ? '' : 's'} for "${activeSearch}"`
              }
            </p>
          </div>
        )}

        {/* Category Results Info */}
        {category !== "All" && !activeSearch.trim() && (
          <div className="mb-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredDestinations.length} {category.toLowerCase()} destination{filteredDestinations.length === 1 ? '' : 's'}
            </p>
          </div>
        )}

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {activeSearch.trim()
                    ? `Try searching with different keywords or browse by category.`
                    : `No destinations available in the ${category} category.`
                  }
                </p>
              </div>
              {activeSearch.trim() && (
                <Button
                  onClick={clearSearch}
                  variant="outline"
                  className="mt-4"
                >
                  Clear search and show all destinations
                </Button>
              )}
            </div>
          ) : (
            filteredDestinations.map((destination) => (
              <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  {/* <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{destination.rating}</span>
                </div> */}

                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600 text-white border-0">{destination.category}</Badge>

                  {/* Location */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-lg mb-1">{destination.name}</h3>
                    <div className="flex items-center space-x-1 text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>{destination.location}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{destination.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {destination.highlights.slice(0, 4).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                        {highlight}
                      </Badge>
                    ))}
                    {destination.highlights.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                        +{destination.highlights.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    {/* <div className="text-xs text-gray-500 dark:text-gray-400">{destination.reviews} reviews</div> */}
                    <Link
                      href={`/destinations/${destination.path}`}
                      className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                    >
                      Explore →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <AdBanner slot="destinations-bottom" />

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold">
            Load More Destinations
          </Button>
        </div>
      </div>
    </div>
  )
}
