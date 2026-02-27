"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Moon, Phone, ChevronDown, ChevronRight } from "lucide-react"


const topNavItems = [
  { name: "Home", href: "/" },
  // { name: "Site Map", href: "/sitemap" },
  { name: "Contact Us", href: "/contact-us" },
  // { name: "Tourism News", href: "/news" },
  // { name: "Wildlife Streaming", href: "/wildlife-streaming" },
  { name: "About Us", href: "/about-us", hasDropdown: true },
  { name: "Privacy Policy", href: "/privacy-policy", hasDropdown: true },
  { name: "Tours", href: "/tours", hasDropdown: true },
  // { name: "Advertise", href: "/advertise", hasDropdown: true },
  // { name: "Store", href: "/store", hasDropdown: true }
]

const whatToDoItems = [
  {
    title: "Adventure Activities",
    items: [
      { name: "Hiking & Trekking", href: "/explore/famous-trails" },
      { name: "Water Activities", href: "/water-activities" },
      { name: "Wildlife Safari", href: "/articles/wild-safaries" },
      { name: "Cultural Tours", href: "/cultural-tours" },
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
      { name: "Train Journeys", href: "/train-journeys" },
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
      { name: "Sigiriya", href: "/destinations/sigiriya-rock-fortress" },
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
      { name: "Balangoda", href: "/destinations/balangoda" },
      { name: "Bandarawela", href: "/destinations/bandarawela" },
      { name: "Haputhale", href: "/destinations/haputhale" },
    ],
  },
  {
    title: "Sun and Waves",
    icon: "🏖️",
    hasSubmenu: true,
    items: [
      { name: "Mirissa", href: "/destinations/mirissa" },
      { name: "Unawatuna", href: "/destinations/unawatuna" },
      { name: "Hiriketiya", href: "/destinations/hirikatiya" },
      { name: "Hikkaduwa", href: "/destinations/hikkaduwa" },
      { name: "Waligama", href: "/destinations/waligama" },
      { name: "Bentota", href: "/destinations/bentota" },
      { name: "Arugam Bay", href: "/destinations/arugambay" },
      { name: "Pasikuda", href: "/destinations/pasikuda" },
      { name: "Negombo", href: "/destinations/negombo" },
    ],
  },
  {
    title: "Wildlife",
    icon: "🐘",
    hasSubmenu: true,
    items: [
      { name: "Yala National Park", href: "/destinations/yala-national-park" },
      { name: "Wilpattu National Park", href: "/destinations/wilpattu-national-park" },
      { name: "Udawalawe National Park", href: "/destinations/udawalawa-national-park" },
      { name: "Minneriya National Park", href: "/destinations/minneriya-national-park" },
      { name: "Kaudulla National Park", href: "/destinations/kaudulla-national-park" },
      { name: "Wasgamuwa National Park", href: "/destinations/wasgamuwa-national-park" },
      { name: "Sinharaja Forest", href: "/destinations/sinharaja-forest" },
    ],
  },
  {
    title: "Culture and Heritage",
    icon: "🏺",
    hasSubmenu: true,
    items: [
      { name: "Galle Fort", href: "/destinations/galle-fort" },
      { name: "Temple of the Tooth", href: "/destinations/temple-of-tooth" },
      { name: "Katharagama", href: "/destinations/katharagama" },
      { name: "Adam's Peak", href: "/destinations/adams-peak" },
      { name: "Mihintale", href: "/destinations/mihinthalaya" },
      { name: "Trincomalee", href: "/destinations/trincomalee" },
      { name: "Yapahuwa", href: "/destinations/yapahuwa" },
    ],
  },
  // {
  //   title: "Southern Coast Beaches",
  //   icon: "🏄‍♂️",
  //   hasSubmenu: true,
  //   items: [
  //     { name: "Hirikatiya Beach", href: "/destinations/hirikatiya" },
  //     { name: "Galle Fort Beach", href: "/destinations/galle-fort" },
  //     { name: "Unawatuna Beach", href: "/destinations/unawatuna" },
  //     { name: "Weligama Bay", href: "/destinations/weligama" },
  //     { name: "Coconut Tree Hill", href: "/destinations/coconut-tree-hill" },
  //   ],
  // },
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
      { name: "Visa Information", href: "/plan-your-trip/visa-information" },
      { name: "Trip Planner", href: "/plan/trip-planner" },
      { name: "Airport Transfer", href: "/plan-your-trip/airport-transfer-service" },
      { name: "Budget Calculator", href: "/plan/budget" },
      { name: "Weather Guide", href: "/plan/weather" },
    ],
  },
  {
    title: "Accommodation",
    items: [
      { name: "Hotels", href: "/accommodation/hotels" },
      { name: "Guesthouses", href: "/accommodation/guesthouses" },
      { name: "Resorts", href: "/accommodation/resorts" },
      // { name: "Homestays", href: "/accommodation/homestays" },
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

  if (!isOpen) return null

  const activeItems = expandedSection
    ? destinationsItems.find((s) => s.title === expandedSection)?.items ?? []
    : []

  return (
    <div ref={dropdownRef} className="absolute top-full left-0 pt-2 z-50">
      <div
        className="flex flex-col theme-bg shadow-xl rounded-lg border theme-border overflow-hidden"
        onMouseLeave={() => setExpandedSection(null)}
      >
        {/* Main panels row */}
        <div className="flex">
          {/* Left panel — section headers, fixed height, no shifting */}
          <div className="w-52 p-2 border-r theme-border">
            {destinationsItems.map((section) => (
              <div
                key={section.title}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md cursor-default transition-all ${
                  expandedSection === section.title
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "nav-link nav-hover-row"
                }`}
                onMouseEnter={() => setExpandedSection(section.title)}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base">{section.icon}</span>
                  <span className={`text-sm ${expandedSection === section.title ? "font-semibold" : "font-medium"}`}>
                    {section.title}
                  </span>
                </div>
                {expandedSection === section.title ? (
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-white" />
                ) : (
                  <ChevronDown className="h-4 w-4 flex-shrink-0 nav-chevron" />
                )}
              </div>
            ))}
          </div>

          {/* Right panel — sub-items, only visible when a section is hovered */}
          {expandedSection && (
            <div className="w-48 p-2">
              {activeItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm nav-sub-link rounded-md transition-colors"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* All Destinations button — inside the same onMouseLeave container */}
        <div className="border-t theme-border theme-surface px-3 py-2">
          <Link
            href="/destinations"
            className="flex items-center justify-center w-full px-3 py-1.5 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 rounded-md transition-colors"
            onClick={onClose}
          >
            All Destinations
            <ChevronRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Mobile Hierarchical Menu Component
function MobileHierarchicalMenu({ onItemClick }: { onItemClick?: () => void }) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  return (
    <div className="space-y-1">
      <div className="font-semibold nav-heading py-2 text-base">Destinations</div>
      {destinationsItems.map((section) => (
        <div key={section.title}>
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between p-3 text-left nav-hover-row rounded-md transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{section.icon}</span>
              <span className="font-medium nav-heading">{section.title}</span>
            </div>
            <ChevronRight
              className={`h-4 w-4 nav-chevron transition-transform ${expandedSection === section.title ? "rotate-90" : ""
                }`}
            />
          </button>

          {expandedSection === section.title && (
            <div className="ml-8 mt-1 space-y-1 mb-2">
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block p-2 text-sm nav-sub-link rounded-md transition-colors"
                  onClick={onItemClick}
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
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  // const [mounted, setMounted] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Helper function to check if current page is active
  const isActivePage = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  // Helper function to check if any destination is active
  const isDestinationsActive = () => {
    return destinationsItems.some(section =>
      section.items.some(item => pathname?.startsWith(item.href))
    )
  }

  // Helper function to check if any "what to do" item is active
  const isWhatToDoActive = () => {
    return whatToDoItems.some(section =>
      section.items.some(item => pathname?.startsWith(item.href))
    )
  }

  // Helper function to check if any plan trip item is active
  const isPlanTripActive = () => {
    return planYourTripItems.some(section =>
      section.items.some(item => pathname?.startsWith(item.href))
    )
  }

  // Handle initial theme
  useEffect(() => {
    // setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(savedTheme)
    }
  }, [setTheme])

  // Add refs for destinations dropdown
  const destinationsDropdownRef = useRef<HTMLDivElement>(null)
  const destinationsButtonRef = useRef<HTMLButtonElement>(null)
  const whatToDoDropdownRef = useRef<HTMLDivElement>(null)
  const planTripDropdownRef = useRef<HTMLDivElement>(null)

  // Refs for desktop dropdown buttons (for click outside detection)
  const whatToDoButtonRef = useRef<HTMLButtonElement>(null)
  const planTripButtonRef = useRef<HTMLButtonElement>(null)

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
      } else if (
        activeDropdown === "what-to-do" &&
        whatToDoDropdownRef.current &&
        whatToDoButtonRef.current &&
        !whatToDoDropdownRef.current.contains(event.target as Node) &&
        !whatToDoButtonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      } else if (
        activeDropdown === "plan-trip" &&
        planTripDropdownRef.current &&
        planTripButtonRef.current &&
        !planTripDropdownRef.current.contains(event.target as Node) &&
        !planTripButtonRef.current.contains(event.target as Node)
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

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur-sm text-white shadow-lg">
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-8 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden lg:flex items-center space-x-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white hover:text-cyan-400 transition-colors duration-200 relative pb-1 ${isActivePage(item.href) ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-500" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto lg:justify-start justify-between">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Tourism Hotline: 1912</span>
              </div>
              {/* Theme Toggle */}
              <Button
                size="sm"
                onClick={() => {
                  const nextTheme = theme === "dark" ? "light" : "dark";
                  setTheme(nextTheme);
                }}
                className="text-white hover:bg-slate-700 transition-colors relative cursor-pointer"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <Sun className={`h-4 w-4 absolute transition-all ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                <Moon className={`h-4 w-4 absolute transition-all ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="theme-bg theme-text">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-around gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="text-3xl font-bold text-cyan-500">CeyLanka Tours</div> */}
              <Image src="/favicon.ico.png" alt="favicom.ico" width={70} height={70} className="rounded-full" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className={`inline-flex items-center px-4 py-2 nav-link transition-colors font-medium relative pb-1 ${isActivePage("/") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-500" : ""}`}>
                HOME
              </Link>
              {/* <Link href="/news" className="text-gray-700 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
                Whats New
              </Link> */}

              {/* What To Do Dropdown */}
              <div className="relative"
                onMouseEnter={() => setActiveDropdown("what-to-do")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Button ref={whatToDoButtonRef}
                  className={`flex items-center nav-link transition-colors font-medium cursor-pointer relative pb-1 ${isWhatToDoActive() ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-500" : ""}`}>
                  WHAT TO DO
                  <ChevronDown
                    className={`h-4 w-4 ml-1 nav-chevron transition-transform ${activeDropdown === "what-to-do" ? "rotate-180" : ""
                      }`}
                  />
                </Button>
                {activeDropdown === "what-to-do" && (
                  <div ref={whatToDoDropdownRef} className="absolute top-full left-0 pt-2 z-50">
                    <div className="theme-bg shadow-xl rounded-lg border theme-border w-80">
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {whatToDoItems.map((section) => (
                            <div key={section.title}>
                              <h3 className="font-semibold nav-heading mb-2 text-sm">{section.title}</h3>
                              <ul className="space-y-1">
                                {section.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="nav-sub-link text-xs"
                                      onClick={() => setActiveDropdown(null)}
                                    >
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
                  </div>
                )}
              </div>

              {/* Enhanced Hierarchical Destinations Dropdown - Replaces WHERE TO GO */}
              <div className="relative"
                onMouseEnter={() => setActiveDropdown("destinations")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Button
                  ref={destinationsButtonRef}
                  className={`flex items-center nav-link transition-colors font-medium cursor-pointer relative pb-1 ${isDestinationsActive() ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-500" : ""}`}
                >
                  DESTINATIONS
                  <ChevronDown
                    className={`h-4 w-4 ml-1 nav-chevron transition-transform ${activeDropdown === "destinations" ? "rotate-180" : ""
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
              <div className="relative"
                onMouseEnter={() => setActiveDropdown("plan-trip")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Button
                  ref={planTripButtonRef}
                  className={`flex items-center nav-link transition-colors font-medium cursor-pointer relative pb-1 ${isPlanTripActive() ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-500" : ""}`}
                >
                  PLAN YOUR TRIP
                  <ChevronDown
                    className={`h-4 w-4 ml-1 nav-chevron transition-transform ${activeDropdown === "plan-trip" ? "rotate-180" : ""
                      }`}
                  />
                </Button>
                {activeDropdown === "plan-trip" && (
                  <div ref={planTripDropdownRef} className="absolute top-full left-0 pt-2 z-50">
                    <div className="theme-bg shadow-xl rounded-lg border theme-border w-80">
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {planYourTripItems.map((section) => (
                            <div key={section.title}>
                              <h3 className="font-semibold nav-heading mb-2 text-sm">{section.title}</h3>
                              <ul className="space-y-1">
                                {section.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="nav-sub-link text-xs"
                                      onClick={() => setActiveDropdown(null)}
                                    >
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
                  </div>
                )}
              </div>

              <Link href="/upcoming-events" className={`inline-flex items-center px-4 py-2 nav-link transition-colors font-medium relative pb-1 ${isActivePage("/upcoming-events") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-500" : ""}`}>
                UPCOMING EVENTS
              </Link>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden nav-link hover:bg-gray-100" onClick={() => setIsSheetOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto theme-bg">
                <div className="flex flex-col space-y-4 mt-8 h-full">
                  {/* Mobile Search - Commented Out */}
                  {/* <form onSubmit={(e) => { handleSearch(e); setIsSheetOpen(false); }} className="flex items-center space-x-2 sticky top-0 bg-white dark:bg-gray-900 pt-2 pb-4 z-10">
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button type="submit" size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                      <Search className="h-4 w-4" />
                    </Button>
                  </form> */}

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-3 pb-20">
                    <Link href="/" className="py-2 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium" onClick={() => setIsSheetOpen(false)}>
                      HOME
                    </Link>

                    {/* Add topNavItems to mobile menu */}
                    {topNavItems.filter(item => item.href !== "/").map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="py-2 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    ))}

                    {/* <Link href="/news" className="py-2 border-b" onClick={() => setIsSheetOpen(false)}>
                      WHATS NEW
                    </Link> */}
                    {/* Mobile What To Do Menu */}
                    <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                      <div className="font-semibold text-gray-900 mb-3 dark:text-gray-100 text-base">What To Do</div>
                      <div className="space-y-1">
                        {whatToDoItems.map((section) => (
                          <div key={section.title}>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === section.title ? null : section.title)}
                              className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-lg">
                                  {section.title === 'Adventure Activities' ? '⛰️' : '🌟'}
                                </span>
                                <span className="font-medium text-gray-900 dark:text-gray-100">{section.title}</span>
                              </div>
                              <ChevronRight
                                className={`h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform ${activeDropdown === section.title ? "rotate-90" : ""
                                  }`}
                              />
                            </button>

                            {activeDropdown === section.title && (
                              <div className="ml-8 mt-1 space-y-1 mb-2">
                                {section.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                                    onClick={() => setIsSheetOpen(false)}
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

                    {/* Mobile Hierarchical Destinations Menu */}
                    <div className="py-2 border-b">
                      <MobileHierarchicalMenu onItemClick={() => setIsSheetOpen(false)} />
                    </div>

                    {/* Mobile Plan Your Trip Menu */}
                    <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                      <div className="font-semibold text-gray-900 mb-3 dark:text-gray-100 text-base">Plan Your Trip</div>
                      <div className="space-y-1">
                        {planYourTripItems.map((section) => (
                          <div key={section.title}>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === section.title ? null : section.title)}
                              className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-lg">
                                  {section.title === 'Planning Tools' ? '🛠️' : '🏨'}
                                </span>
                                <span className="font-medium text-gray-900 dark:text-gray-100">{section.title}</span>
                              </div>
                              <ChevronRight
                                className={`h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform ${activeDropdown === section.title ? "rotate-90" : ""
                                  }`}
                              />
                            </button>

                            {activeDropdown === section.title && (
                              <div className="ml-8 mt-1 space-y-1 mb-2">
                                {section.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                                    onClick={() => setIsSheetOpen(false)}
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

                    <div className="py-3">
                      <Link
                        href="/events"
                        className="block font-semibold text-gray-900 dark:text-gray-100 text-base"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        UPCOMING EVENTS
                      </Link>
                    </div>
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
