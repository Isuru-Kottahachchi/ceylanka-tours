"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
// import Image from "next/image"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center">
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
        You’ve Been Dreaming Of
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
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
            className="w-full sm:flex-1 h-12 text-black text-lg px-6 rounded-l-lg"
          />
          <Button
            type="submit"
           variant="default"
            className="w-full sm:w-auto h-12 px-8 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-r-lg"
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </form>

        {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Popular Destinations
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Travel Packages
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            Cultural Sites
          </Button>
        </div>
      </div>
    </section>
  )
}
