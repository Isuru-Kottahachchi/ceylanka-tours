"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
    <section className="relative h-[90vh] flex items-center justify-center overflow-x-hidden max-w-full -mt-[var(--header-height)]">
      {/* Optimized Background Image */}
      <Image
        src="/images/stockvault-sunset-at-sri-lanka-southern-beach280430.jpg"
        alt="Sunset at Sri Lanka southern beach"
        fill
        priority
        quality={70}
        placeholder="blur"
        blurDataURL="/images/hero-blur.jpg"
        className="object-cover object-center z-0"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto w-full overflow-x-hidden">
        <h1 className="hero-text-shadow text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
          The Island Life
          <br />
          <span className="text-cyan-300">You&apos;ve Been Dreaming Of</span>
        </h1>

        <p className="hero-sub-shadow text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto font-medium leading-relaxed tracking-normal">
          Pristine beaches. Ancient temples. Misty tea hills. Wild safaris.
          <br className="hidden sm:block" />
          Sri Lanka, one island, a thousand experiences.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-2 sm:gap-0 max-w-2xl mx-auto w-full px-4 overflow-x-hidden"
        >
          <div className="relative w-full sm:flex-1 group overflow-hidden">
            <Input
              type="search"
              placeholder="Search your Sri Lankan destinations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:flex-1 h-12 search-input text-base sm:text-lg pl-12 pr-4 rounded-lg sm:rounded-l-lg sm:rounded-r-none appearance-none border-2 border-transparent focus:border-cyan-500 transition-all duration-300 shadow-sm box-border"
            style={{ fontSize: '16px' }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none transition-colors group-focus-within:text-cyan-500" />
          </div>
          <Button
            type="submit"
            variant="default"
            className="w-full sm:w-auto h-12 px-8 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg sm:rounded-l-none sm:rounded-r-lg cursor-pointer transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </form>

        {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/destinations">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
              Popular Destinations
            </Button>
          </Link>
          <Link href="/tours">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
              Travel Packages
            </Button>
          </Link>
          <Link href="/explore/unesco-sites">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
              UNESCO Heritages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
