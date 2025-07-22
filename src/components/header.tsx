"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Menu, Moon, Sun, Phone, ChevronDown, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

const topNavItems = [
  { name: "Home", href: "/" },
  { name: "Site Map", href: "/sitemap" },
  { name: "Contact Us", href: "/contact" },
  { name: "Tourism News", href: "/news" },
  { name: "Wildlife Streaming", href: "/wildlife-streaming" },
  { name: "About Us", href: "/about-us", hasDropdown: true },
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
      {
        name: "Tea Plantation Tours",
        href: "/experiences/tea",
      },
      { name: "Cooking Classes", href: "/experiences/cooking" },
      { name: "Ayurveda & Spa", href: "/experiences/ayurveda" },
      { name: "Train Journeys", href: "/experiences/trains" },
    ],
  },
]

// Enhanced destinations structure with hierarchical dropdown
const destinationsItems = [
  {
    title: "Cultural Triangle",
    icon: "🏛️",
    hasSubmenu: true,
    items: [
      { name: "Anuradhapura", href: "/destinations/anuradhapura" },
      { name: "Polonnaruwa", href: "/destinations/polonnaruwa" },
      { name: "Sigiriya", href: "/destinations/sigiriya" },
      { name: "Dambulla", href: "/destinations/dambulla" },
      { name: "Kandy", href: "/destinations/kandy" },
    ],
  },
  {
    title: "Hill Country",
    icon: "⛰️",
    hasSubmenu: true,
    items: [
      { name: "Nuwara Eliya", href: "/destinations/nuwara-eliya" },
      { name: "Ella", href: "/destinations/ella" },
      { name: "Hatton", href: "/destinations/hatton" },
      { name: "Badulla", href: "/destinations/badulla" },
      { name: "Bandarawela", href: "/destinations/bandarawela" },
      { name: "Haputale", href: "/destinations/haputale" },
    ],
  },
  {
    title: "Sun and Sand",
    icon: "🏖️",
    hasSubmenu: true,
    items: [
      { name: "Mirissa", href: "/destinations/mirissa" },
      { name: "Unawatuna", href: "/destinations/unawatuna" },
      { name: "Hikkaduwa", href: "/destinations/hikkaduwa" },
      { name: "Bentota", href: "/destinations/bentota" },
      { name: "Arugam Bay", href: "/destinations/arugam-bay" },
      { name: "Negombo", href: "/destinations/negombo" },
    ],
  },
  {
    title: "Wildlife",
    icon: "🐘",
    hasSubmenu: true,
    items: [
      { name: "Yala National Park", href: "/destinations/yala" },
      { name: "Udawalawe National Park", href: "/destinations/udawalawe" },
      { name: "Minneriya National Park", href: "/destinations/minneriya" },
      { name: "Wilpattu National Park", href: "/destinations/wilpattu" },
      { name: "Sinharaja Forest", href: "/destinations/sinharaja" },
    ],
  },
  {
    title: "Culture and Heritage",
    icon: "🏺",
    hasSubmenu: true,
    items: [
      { name: "Galle Fort", href: "/destinations/galle" },
      { name: "Temple of the Tooth", href: "/destinations/temple-tooth" },
      { name: "Adam's Peak", href: "/destinations/adams-peak" },
      { name: "Mihintale", href: "/destinations/mihintale" },
      { name: "Yapahuwa", href: "/destinations/yapahuwa" },
    ],
  },
  {
    title: "Air/Sea Ports",
    icon: "✈️",
    hasSubmenu: true,
    items: [
      { name: "Colombo Airport (CMB)", href: "/destinations/colombo-airport" },
      { name: "Mattala Airport (HRI)", href: "/destinations/mattala-airport" },
      { name: "Colombo Port", href: "/destinations/colombo-port" },
      { name: "Hambantota Port", href: "/destinations/hambantota-port" },
    ],
  },
]

// const whereToGoItems = {
//   featured: [
//     {
//       id: 1,
//       name: "Mirissa Whale Watching",
//       description:
//         "Blue whales are the biggest animal live on the earth and Mirissa is the one of most suitable spot to watch blue whales and other whales too.",
//       image: "/placeholder.svg?height=120&width=180&text=Whale+Watching",
//       href: "/destinations/mirissa",
//     },
//     {
//       id: 2,
//       name: "Yala National Park",
//       description:
//         "This is the second largest national park in Sri Lanka. Yala is home to Asian elephants, leopards and variety of beautiful endemic birds.",
//       image: "/placeholder.svg?height=120&width=180&text=Yala+Safari",
//       href: "/destinations/yala",
//     },
//     {
//       id: 3,
//       name: "Sigiriya",
//       description:
//         "Sigiriya popular as eighth wonder of the world among the tourists and it was the one of Asia's oldest landscaped garden.",
//       image: "/placeholder.svg?height=120&width=180&text=Sigiriya+Rock",
//       href: "/destinations/sigiriya",
//     },
//   ],
//   quickLinks: [
//     { name: "Gall Fort", href: "/destinations/galle" },
//     { name: "Ella", href: "/destinations/ella" },
//     { name: "Hikkaduwa Beach", href: "/destinations/hikkaduwa" },
//     { name: "Dambulla Cave Temple", href: "/destinations/dambulla" },
//     { name: "Wild Safaris", href: "/destinations/yala" },
//     { name: "Colombo City Tour", href: "/destinations/colombo" },
//     { name: "See All Attractions", href: "/destinations" },
//   ],
// }

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

// Desktop Hierarchical Dropdown Component
function DesktopHierarchicalDropdown({
  isOpen,
  onClose,
  dropdownRef,
}: {
  isOpen: boolean
  onClose: () => void
  dropdownRef: React.RefObject<HTMLDivElement | null>
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  if (!isOpen) return null

  return (
    <div ref={dropdownRef} className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border z-50">
      <div className="p-4 max-h-96 overflow-y-auto">
        {destinationsItems.map((section) => (
          <div key={section.title} className="mb-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{section.icon}</span>
                <span className="font-medium text-gray-900">{section.title}</span>
              </div>
              <ChevronRight
                className={`h-4 w-4 text-gray-500 transition-transform ${
                  expandedSection === section.title ? "rotate-90" : ""
                }`}
              />
            </button>

            {expandedSection === section.title && (
              <div className="ml-8 mt-1 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block p-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Mobile Hierarchical Menu Component
function MobileHierarchicalMenu() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  return (
    <div className="space-y-2">
      <div className="font-semibold text-gray-900 py-2 border-b">Destinations</div>
      {destinationsItems.map((section) => (
        <div key={section.title}>
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded-md transition-colors"
          >
            <div className="flex items-center space-x-2">
              <span>{section.icon}</span>
              <span className="font-medium text-gray-900">{section.title}</span>
            </div>
            <ChevronRight
              className={`h-4 w-4 text-gray-500 transition-transform ${
                expandedSection === section.title ? "rotate-90" : ""
              }`}
            />
          </button>

          {expandedSection === section.title && (
            <div className="ml-6 mt-1 space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block p-2 text-sm text-gray-600 hover:text-cyan-600 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Add refs for destinations dropdown
  const destinationsDropdownRef = useRef<HTMLDivElement>(null)
  const destinationsButtonRef = useRef<HTMLButtonElement>(null)

  // Click outside detection for destinations dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeDropdown === "destinations" &&
        destinationsDropdownRef.current &&
        destinationsButtonRef.current &&
        !destinationsDropdownRef.current.contains(event.target as Node) &&
        !destinationsButtonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  const toggleDestinationsDropdown = () => {
    setActiveDropdown(activeDropdown === "destinations" ? null : "destinations")
  }

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
              {/* Theme Toggle */}
              <Button
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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-around gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="text-3xl font-bold text-cyan-500">CeyLanka Tours</div> */}
              <Image src="/favicon.ico.png" alt="favicom.ico" width={70} height={70} className="rounded-full" />
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
                <Button className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                  WHAT TO DO
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
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

              {/* Enhanced Hierarchical Destinations Dropdown - Replaces WHERE TO GO */}
              <div className="relative">
                <Button
                  ref={destinationsButtonRef}
                  onClick={toggleDestinationsDropdown}
                  className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors font-medium"
                >
                  DESTINATIONS
                  <ChevronDown
                    className={`h-4 w-4 ml-1 transition-transform ${
                      activeDropdown === "destinations" ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                <DesktopHierarchicalDropdown
                  isOpen={activeDropdown === "destinations"}
                  onClose={() => setActiveDropdown(null)}
                  dropdownRef={destinationsDropdownRef}
                />
              </div>

              {/* Plan Your Trip Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("plan-trip")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Button className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                  PLAN YOUR TRIP
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
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

                    {/* Mobile Hierarchical Destinations Menu */}
                    <div className="py-2 border-b">
                      <MobileHierarchicalMenu />
                    </div>

                    <Link href="/plan" className="py-2 border-b">
                      PLAN YOUR TRIP
                    </Link>
                    <Link href="/events" className="py-2 border-b">
                      UPCOMING EVENTS
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
