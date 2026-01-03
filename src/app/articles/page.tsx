"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import React from "react"

type Article = typeof originalArticles[number];
const originalArticles = [
  {
    id: 1,
    title: "Top 10 Must-Visit Beaches in Sri Lanka",
    path: "top10-beaches-in-sri-lanka",
    category: "Beaches",
    readTime: "8 min read",
    image: "/Mirissa.jpg",
    description: "From the golden sands of Unawatuna to the pristine shores of Mirissa, discover the most beautiful beaches that make Sri Lanka a tropical paradise.",
    highlights: ["Unawatuna Beach", "Mirissa Whale Watching", "Bentota Water Sports"],
    featured: true,
  },
  {
    id: 3,
    title: "Wild Safari Parks in Sri Lanka",
    path: "wild-safaries",
    category: "Wildlife",
    readTime: "10 min read",
    image: "/Yala-national-park.jpg",
    description: "Your complete guide to experiencing the incredible wildlife of Sri Lanka's national parks and spotting the elusive leopards.",
    highlights: ["Yala National Park", "Leopard Spotting", "Elephant Watching"],
    featured: true,
  },
  {
    id: 4,
    title: "Ramayana Sites in Sri Lanka",
    path: "ramayanaya-sites",
    category: "Culture",
    readTime: "15 min read",
    image: "/Ramayanaya-Sites.png",
    description: "Journey through the ancient legends and discover the sacred sites connected to the Ramayana epic in beautiful Sri Lanka.",
    highlights: ["Ashok Vatika", "Ravana Falls", "Sita Amman Temple"],
    featured: false,
  },
  {
    id: 5,
    title: "Top 10 Waterfalls in Sri Lanka",
    path: "top10-waterfalls-in-srilanka",
    category: "Nature",
    readTime: "11 min read",
    image: "/placeholder.svg?height=300&width=400",
    description: "Discover the most spectacular waterfalls across Sri Lanka, from towering cascades in the hill country to hidden gems in remote areas.",
    highlights: ["Bambarakanda Falls", "Sekumpura Falls", "Diyaluma Falls"],
    featured: false,
  },
  {
    id: 6,
    title: "Venomous Snakes in Sri Lanka",
    path: "venomous-snakes-in-srilanka",
    category: "Wildlife",
    readTime: "9 min read",
    image: "/SL-venoumous-snakes.png",
    description: "Essential guide to identifying and avoiding dangerous snakes while exploring Sri Lanka's wilderness and natural habitats.",
    highlights: ["Russell's Viper", "Cobra Species", "Safety Tips"],
    featured: false,
  },
  {
    id: 7,
    title: "Famous Trails in Sri Lanka",
    path: "famous-trails-in-srilanka",
    category: "Adventure",
    readTime: "14 min read",
    image: "/Adams-peak.jpeg",
    description: "Explore the best hiking and trekking trails across Sri Lanka, from challenging mountain peaks to scenic coastal walks.",
    highlights: ["Adam's Peak", "Horton Plains", "Knuckles Range"],
    featured: false,
  },
  {
    id: 8,
    title: "Kandy Esala Perahera Festival",
    path: "kandy-esela-perahara",
    category: "Culture",
    readTime: "13 min read",
    image: "/Kandy.jpeg",
    description: "Experience the grandest Buddhist festival in Sri Lanka with elephants, dancers, and drummers in the cultural capital of Kandy.",
    highlights: ["Temple of Tooth", "Traditional Dancing", "Elephant Parade"],
    featured: false,
  },
  {
    id: 9,
    title: "Top Cultural Events in Sri Lanka",
    path: "top-cultral-events",
    category: "Culture",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=400",
    description: "Discover the vibrant cultural festivals and events that showcase Sri Lanka's rich heritage and traditions throughout the year.",
    highlights: ["Vesak Festival", "Poson", "New Year Celebrations"],
    featured: false,
  },
  {
    id: 10,
    title: "Ramayana Story: India to Sri Lanka",
    path: "ramayana-story-india-sri-lanka",
    category: "Culture",
    readTime: "16 min read",
    image: "/Ramayanaya.png",
    description: "Follow the epic journey of the Ramayana from India to Sri Lanka and discover the historical connections between these ancient lands.",
    highlights: ["Epic Journey", "Historical Sites", "Cultural Connections"],
    featured: false,
  },
  {
    id: 11,
    title: "Basic Language Words for Sri Lanka Travel",
    path: "basic-language-words",
    category: "Travel Tips",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=400",
    description: "Learn essential Sinhala and Tamil phrases to enhance your travel experience and connect with locals during your Sri Lankan adventure.",
    highlights: ["Sinhala Phrases", "Tamil Words", "Cultural Etiquette"],
    featured: false,
  },
  {
    id: 12,
    title: "Things to Watch Out for at the Beach",
    path: "things-to-beware-of-at-the-beach",
    category: "Safety",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=400",
    description: "Important safety guide about dangerous waves and coastal conditions around Sri Lanka that every beach visitor should know.",
    highlights: ["Wave Safety", "Beach Conditions", "Emergency Tips"],
    featured: false,
  },
  {
    id: 13,
    title: "Buddhism in Sri Lanka",
    path: "buddisam-in-srilanka",
    category: "Religion",
    readTime: "12 min read",
    image: "/JayaSrimahaBodhi.jpeg",
    description: "Explore the rich Buddhist heritage of Sri Lanka, from ancient temples to modern practices that shape the island's spiritual landscape.",
    highlights: ["Ancient Temples", "Buddhist Practices", "Sacred Sites"],
    featured: false,
  },
  {
    id: 14,
    title: "Shapes of Stupa",
    path: "shapes-of-stupa",
    category: "Religion",
    readTime: "8 min read",
    image: "/Ruwanwalisaya.jpeg",
    description: "Understanding the architectural significance and spiritual meaning behind different stupa designs in Sri Lankan Buddhist architecture.",
    highlights: ["Stupa Architecture", "Buddhist Symbols", "Historical Significance"],
    featured: false,
  },
  {
    id: 15,
    title: "Ten Giants of Dutugamunu",
    path: "ten-giants-of-dutugamunu",
    category: "History",
    readTime: "11 min read",
    image: "/Ten-giants-of-dutugamunu.png",
    description: "Learn about the legendary warriors who served King Dutugamunu in his quest to unite ancient Sri Lanka.",
    highlights: ["Ancient Warriors", "Royal History", "Epic Battles"],
    featured: false,
  },
  {
    id: 16,
    title: "Universal Doors",
    path: "universaldoors",
    category: "Architecture",
    readTime: "9 min read",
    image: "/placeholder.svg?height=300&width=400",
    description: "Discover the unique architectural elements and symbolic meanings of traditional Sri Lankan door designs and craftsmanship.",
    highlights: ["Traditional Crafts", "Door Designs", "Cultural Symbols"],
    featured: false,
  },
  {
    id: 17,
    title: "How to save from bees/ hornets attack",
    path: "how-to-save-from-bees-hornets-attack",
    category: "Travel Tips",
    readTime: "13 min read",
    image: "/GalleFort.jpeg",
    description: "Essential safety guide: what to do before, during, and after a hornet or bee attack.",
    highlights: ["Hornet Safety", "Guide", "Survival Tips"],
    featured: false,
  },
  {
    id: 18,
    title: "Places Don't Miss in Down South",
    path: "placesdont missin downsouth",
    category: "Travel Tips",
    readTime: "13 min read",
    image: "/GalleFort.jpeg",
    description: "Essential destinations and hidden gems in Sri Lanka's southern province that every traveler should experience.",
    highlights: ["Southern Beaches", "Galle Fort", "Hidden Gems"],
    featured: false,
  }
]

// const categories = ["All", "Beaches", "Culture", "Wildlife", "Nature", "Adventure", "Travel Tips", "Safety", "Religion", "History", "Architecture"]

export default function ArticlesPage() {
  const [showSearchReminder, setShowSearchReminder] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [activeSearch, setActiveSearch] = React.useState(""); // This will hold the actual search term being filtered
  const [searchResults, setSearchResults] = React.useState<Article[]>([]); // API search results
  const [isSearching, setIsSearching] = React.useState(false); // Loading state
  const reminderInterval = 20000; // 20 seconds
  const reminderDuration = 5000; // 5 seconds
  const [category, setCategory] = React.useState("All");


  // State for shuffled articles
  const [shuffledArticles, setShuffledArticles] = React.useState<typeof originalArticles>([...originalArticles]);

  // Shuffle function
  function shuffleArray(array: typeof originalArticles) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Shuffle every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShuffledArticles((prev) => shuffleArray(prev));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Use search results if we have an active search, otherwise use shuffled articles
  const displayArticles = activeSearch.trim() ? searchResults : shuffledArticles;

  // Filter articles based on category (only for local articles)
  const filteredArticles = React.useMemo(() => {
    let filtered = displayArticles;

    // Only apply category filter if we're not showing search results
    if (category !== "All" && !activeSearch.trim()) {
      filtered = filtered.filter((article: Article) =>
        article.category.toLowerCase() === category.toLowerCase() ||
        article.category.toLowerCase().replace(" ", "") === category.toLowerCase()
      );
    }

    return filtered;
  }, [category, displayArticles, activeSearch]);

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    if (searchValue.length > 0) {
      setShowSearchReminder(false);
    } else {
      // Show immediately on mount
      setShowSearchReminder(true);
      // Then show every 20s for 5s
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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (searchValue.trim()) {
      setIsSearching(true);
      setActiveSearch(searchValue);

      // For now, we'll do a simple local search since we don't have article search API
      const localResults = originalArticles.filter((article: Article) =>
        article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      
      setSearchResults(localResults);
      setIsSearching(false);
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
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Sri Lanka Stories</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From expert guides to insider tips, discover comprehensive articles about every aspect of Sri Lankan travel
          </p>

          {/* Search and Filter */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1 w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-gray-900 bg-white rounded-lg border-0 focus:ring-2 focus:ring-white/20"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSearching}
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors  cursor-pointer "
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
            {(activeSearch || category !== "All") && (
              <Button
                type="button"
                onClick={clearSearch}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-6 py-3 rounded-lg"
              >
                Clear
              </Button>
            )}
          </form>
        </div>
      </section>

      {/* Search Reminder Banner */}
      {showSearchReminder && searchValue.length === 0 && (
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 border-l-4 border-amber-500 p-4 mb-6 mx-4 rounded-r-lg shadow-md transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Search className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-3" />
              <p className="text-amber-800 dark:text-amber-200 font-medium">
                💡 <strong>Tip:</strong> Use the search bar to find specific articles, topics, or travel guides you are interested in!
              </p>
            </div>
            <button
              onClick={() => setShowSearchReminder(false)}
              className="text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 font-bold text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        {/* <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "default" : "outline"}
                onClick={() => setCategory(cat)}
                className={`${
                  category === cat 
                    ? "bg-cyan-600 text-white hover:bg-cyan-700" 
                    : "text-gray-700 hover:text-cyan-600 hover:border-cyan-600"
                } transition-colors`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div> */}

        {/* Search Results Info */}
        {activeSearch && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              {searchResults.length === 0 
                ? `No articles found for "${activeSearch}"`
                : `Found ${searchResults.length} article${searchResults.length === 1 ? '' : 's'} for "${activeSearch}"`
              }
            </p>
          </div>
        )}

        {/* Featured Articles */}
        {/* {!activeSearch && category === "All" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {articles.filter(article => article.featured).map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-orange-200">
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-cyan-500 hover:bg-cyan-600">
                      {article.category}
                    </Badge>
                    <div className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${article.path}`}>{article.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{article.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views}</span>
                        </div>
                        <span className="text-cyan-600 font-medium">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${article.path}`}>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white cursor-pointer">
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )} */}

        {/* All Articles Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {activeSearch ? "Search Results" : category === "All" ? "All Articles" : `${category} Articles`}
          </h2>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {activeSearch
                  ? "No articles found matching your search criteria."
                  : `No articles found in the ${category} category.`}
              </p>
              <Button
                onClick={clearSearch}
                className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                View All Articles
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredArticles.map((article: Article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-cyan-500 hover:bg-cyan-600">{article.category}</Badge>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-cyan-600 transition-colors">
                      <Link href={`/blog/${article.path}`}>{article.title}</Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">{article.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.highlights.map((highlight: string, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-2 text-xs text-cyan-600 font-medium">{article.readTime}</div>

                    <div className="mt-4">
                      <Link
                        href={`/articles/${article.path}`}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-md transition-colors duration-200"
                      >
                        Read Article
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  )
}
