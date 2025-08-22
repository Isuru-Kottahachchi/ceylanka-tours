"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search, Clock, Check, ArrowRight, CircleCheck, X } from "lucide-react"

interface SearchResult {
  id: number
  name: string
  path: string
  location: string
  image: string
  description: string
  highlights: string[]
  category: string
}

interface SearchResponse {
  results: SearchResult[]
  total: number
  suggestion?: {
    original: string
    corrected: string
    message: string
  }
}

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const [suggestion, setSuggestion] = useState<{original: string, corrected: string, message: string} | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([])
      setTotal(0)
      setSuggestion(null)
      setHasSearched(false)
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)
      const data: SearchResponse = await response.json()
      setResults(data.results)
      setTotal(data.total)
      setSuggestion(data.suggestion || null)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
      setTotal(0)
      setSuggestion(null)
    } finally {
      setLoading(false)
      setHasSearched(true) // Only set after search completes
    }
  }

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.history.pushState({}, '', `/search?q=${encodeURIComponent(searchQuery)}`)
      performSearch(searchQuery)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Search Destinations</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-4 max-w-2xl">
            <Input
              type="search"
              placeholder="Search destinations, locations, experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white cursor-pointer">
              <Search className="h-4 w-4 mr-2" />
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </form>
        </div>

        {/* Search Results */}
        {query && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              {loading ? (
                <Clock className="h-4 w-4" />
              ) : !loading && results.length === 0 ? (
                <X color="#ef4444" className="h-4 w-4" />
              ) : (
                <CircleCheck color="#3ebd0f" className="h-4 w-4" />
              )}
              <span>
                {loading ? 'Searching...' : `Found ${total} result${total !== 1 ? 's' : ''} for "${query}"`}
              </span>
            </div>
            
            {/* Search Suggestion */}
            {suggestion && !loading && (
              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <Search className="h-4 w-4" />
                  <span className="text-sm">
                    {suggestion.message}
                  </span>
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="h-auto p-0 text-blue-600 dark:text-blue-400 underline cursor-pointer"
                    onClick={() => {
                      setSearchQuery(suggestion.corrected)
                      window.history.pushState({}, '', `/search?q=${encodeURIComponent(suggestion.corrected)}`)
                      performSearch(suggestion.corrected)
                    }}
                  >
                    Search for "{suggestion.corrected}"
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Results Grid */}
        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.path}`}>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {destination.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {destination.location}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 overflow-hidden"
                       style={{ 
                         display: '-webkit-box',
                         WebkitLineClamp: 2,
                         WebkitBoxOrient: 'vertical' as const
                       }}>
                      {destination.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {destination.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{destination.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button className="mt-2 w-full group bg-green-500">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {query && !loading && hasSearched && results.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any destinations matching "{query}". Try searching with different keywords.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Suggestions:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Try searching for popular destinations like "Kandy", "Ella", "Sigiriya"</li>
                  <li>Search by activity: "beach", "temple", "wildlife", "hiking"</li>
                  <li>Search by province: "Central Province", "Southern Province"</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4 animate-spin" />
              <h3 className="text-lg font-semibold mb-2">Searching...</h3>
              <p className="text-muted-foreground">
                Finding the best destinations for you...
              </p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!query && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Discover Sri Lanka's Destinations</h3>
            <p className="text-muted-foreground">
              Search for destinations, experiences, or locations to plan your perfect Sri Lankan adventure.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6 w-64"></div>
            <div className="h-12 bg-gray-200 rounded mb-8 w-full max-w-2xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    }>
      <SearchContent />
    </Suspense>
  )
}
