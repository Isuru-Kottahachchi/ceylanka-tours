"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="relative h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/stockvault-sunset-at-sri-lanka-southern-beach280430.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
        The Island Life 
          <br />
        You've Been Dreaming Of
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed tracking-wide drop-shadow-lg">
          Discover the pearl of the Indian Ocean with pristine beaches, ancient temples, lush tea plantations, and
          incredible wildlife adventures.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
        >
          <Input
            type="search"
            placeholder="Search destinations, hotels, experiences..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:flex-1 h-12 text-black dark:text-white text-lg px-6 rounded-l-lg bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <Button
            type="submit"
            variant="default"
            className="w-full sm:w-auto h-12 px-8 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-semibold rounded-r-lg cursor-pointer transition-colors flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </form>

        {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
            Popular Destinations
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
            Travel Packages
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
            Cultural Sites
          </Button>
        </div>
      </div>
    </section>
  )
}
