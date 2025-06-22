"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Menu, Moon, Sun, Phone, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

// const languages = [
//   { code: "en", name: "English", flag: "🇺🇸" },
//   { code: "si", name: "සිංහල", flag: "🇱🇰" },
//   { code: "ta", name: "தமிழ්", flag: "🇱🇰" },
// ]

const topNavItems = [
  { name: "Home", href: "/" },
  { name: "Site Map", href: "/sitemap" },
  { name: "Contact Us", href: "/contact" },
  { name: "Tourism News", href: "/news" },
  { name: "Wildlife Streaming", href: "/wildlife-streaming" },
  { name: "About Us", href: "/about", hasDropdown: true },
]

const whatToDoItems = [
  {
    title: "Adventure Activities",
    items: [
      { name: "Hiking & Trekking", href: "/activities/hiking" },
      { name: "Water Sports", href: "/activities/water-sports" },
      { name: "Wildlife Safari", href: "/activities/safari" },
      { name: "Cultural Tours", href: "/activities/cultural" },
    ],
  },
  {
    title: "Experiences",
    items: [
      { name: "Tea Plantation Tours", href: "/experiences/tea" },
      { name: "Cooking Classes", href: "/experiences/cooking" },
      { name: "Ayurveda & Spa", href: "/experiences/ayurveda" },
      { name: "Train Journeys", href: "/experiences/trains" },
    ],
  },
]

const whereToGoItems = {
  featured: [
    {
      id: 1,
      name: "Mirissa Whale Watching",
      description:
        "Blue whales are the biggest animal live on the earth and Mirissa is the one of most suitable spot to watch blue whales and other whales too.",
      image: "/placeholder.svg?height=120&width=180&text=Whale+Watching",
      href: "/destinations/mirissa",
    },
    {
      id: 2,
      name: "Yala National Park",
      description:
        "This is the second largest national park in Sri Lanka. Yala is home to Asian elephants, leopards and variety of beautiful endemic birds.",
      image: "/placeholder.svg?height=120&width=180&text=Yala+Safari",
      href: "/destinations/yala",
    },
    {
      id: 3,
      name: "Sigiriya",
      description:
        "Sigiriya popular as eighth wonder of the world among the tourists and it was the one of Asia's oldest landscaped garden.",
      image: "/placeholder.svg?height=120&width=180&text=Sigiriya+Rock",
      href: "/destinations/sigiriya",
    },
  ],
  quickLinks: [
    { name: "Gall Fort", href: "/destinations/galle" },
    { name: "Ella", href: "/destinations/ella" },
    { name: "Hikkaduwa Beach", href: "/destinations/hikkaduwa" },
    { name: "Dambulla Cave Temple", href: "/destinations/dambulla" },
    { name: "Wild Safaris", href: "/destinations/yala" },
    { name: "Colombo City Tour", href: "/destinations/colombo" },
    { name: "See All Attractions", href: "/destinations" },
  ],
}

const planYourTripItems = [
  {
    title: "Planning Tools",
    items: [
      { name: "Trip Planner", href: "/plan/trip-planner" },
      { name: "Budget Calculator", href: "/plan/budget" },
      { name: "Weather Guide", href: "/plan/weather" },
      { name: "Visa Information", href: "/plan/visa" },
    ],
  },
  {
    title: "Accommodation",
    items: [
      { name: "Hotels", href: "/accommodation/hotels" },
      { name: "Guesthouses", href: "/accommodation/guesthouses" },
      { name: "Resorts", href: "/accommodation/resorts" },
      { name: "Homestays", href: "/accommodation/homestays" },
    ],
  },
]

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()
  // const [currentLanguage, setCurrentLanguage] = useState("en")
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden lg:flex items-center space-x-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Tourism Hotline: 1912</span>
              </div>

              {/* Language Selector */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
                    <Globe className="h-4 w-4 mr-1" />
                    Select Language
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => setCurrentLanguage(lang.code)}>
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu> */}

              {/* Theme Toggle */}
              <Button
                // variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white hover:bg-slate-700"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white text-gray-900">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-cyan-500">CeyLanka Tours</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                HOME
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Whats New
              </Link>

              {/* What To Do Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("what-to-do")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                  WHAT TO DO
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {activeDropdown === "what-to-do" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {whatToDoItems.map((section) => (
                          <div key={section.title}>
                            <h3 className="font-semibold text-gray-900 mb-2 text-sm">{section.title}</h3>
                            <ul className="space-y-1">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-gray-600 hover:text-cyan-600 text-xs">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Where To Go Mega Menu - Made Smaller */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("where-to-go")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                  WHERE TO GO
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {activeDropdown === "where-to-go" && (
                  <div className="absolute top-full left-0 mt-2 w-[650px] bg-white shadow-xl rounded-lg border z-50">
                    <div className="p-4">
                      <div className="flex">
                        {/* Sidebar - Made Smaller */}
                        <div className="w-36 bg-gray-100 p-3 rounded-l-lg">
                          <div className="bg-gray-600 text-white p-2 rounded mb-2">
                            <div className="text-xs font-semibold">Top Attractions</div>
                          </div>
                          <div className="text-xs text-gray-700 p-2">Top Cities and Provinces</div>
                        </div>

                        {/* Featured Destinations - Made Smaller */}
                        <div className="flex-1 pl-4">
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            {whereToGoItems.featured.map((destination) => (
                              <Card key={destination.id} className="overflow-hidden"  data-aos="fade-up">
                                <div className="relative">
                                  <Image
                                    src={destination.image || "/placeholder.svg"}
                                    alt={destination.name}
                                    width={180}
                                    height={120}
                                    className="w-full h-20 object-cover"
                                  />
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-1">
                                    <h4 className="font-semibold text-xs">{destination.name}</h4>
                                  </div>
                                </div>
                                <CardContent className="p-2">
                                  <p className="text-xs text-gray-600 mb-1 line-clamp-2">{destination.description}</p>
                                  <Link
                                    href={destination.href}
                                    className="text-xs text-cyan-600 hover:text-cyan-700 font-medium"
                                  >
                                    Read More »
                                  </Link>
                                </CardContent>
                              </Card>
                            ))}
                          </div>

                          {/* Quick Links - Made Smaller */}
                          <div className="flex flex-wrap gap-3 text-xs">
                            {whereToGoItems.quickLinks.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="text-cyan-600 hover:text-cyan-700 flex items-center"
                              >
                                <span className="mr-1">›</span>
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Plan Your Trip Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("plan-trip")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                  PLAN YOUR TRIP
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {activeDropdown === "plan-trip" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {planYourTripItems.map((section) => (
                          <div key={section.title}>
                            <h3 className="font-semibold text-gray-900 mb-2 text-sm">{section.title}</h3>
                            <ul className="space-y-1">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-gray-600 hover:text-cyan-600 text-xs">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/events" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                UPCOMING EVENTS
              </Link>

              <Link href="/testimonials" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                WHAT THE WORLD HAS TO SAY
              </Link>
            </nav>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-gray-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="flex items-center space-x-2">
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button type="submit" size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-3">
                    <Link href="/" className="py-2 border-b">
                      HOME
                    </Link>
                    <Link href="/news" className="py-2 border-b">
                      WHATS NEW
                    </Link>
                    <Link href="/activities" className="py-2 border-b">
                      WHAT TO DO
                    </Link>
                    <Link href="/destinations" className="py-2 border-b">
                      WHERE TO GO
                    </Link>
                    <Link href="/plan" className="py-2 border-b">
                      PLAN YOUR TRIP
                    </Link>
                    <Link href="/events" className="py-2 border-b">
                      UPCOMING EVENTS
                    </Link>
                    <Link href="/testimonials" className="py-2 border-b">
                      WHAT THE WORLD HAS TO SAY
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Search Bar - Moved to separate line */}
          {/* <div className="flex justify-center">
            <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full max-w-2xl">
              <Input
                type="search"
                placeholder="Search destinations, hotels, experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 text-lg px-6"
              />
              <Button type="submit" className="h-12 px-8 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </header>
  )
}
