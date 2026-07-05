import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Map, MapPin, BookOpen, Camera, Utensils, Train, Calendar, Users, FileText, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Sitemap - Ceylanka Tours",
  description: "Complete sitemap of Ceylanka Tours - Browse all destinations, articles, tours, and travel information about Sri Lanka.",
}

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: FileText,
      color: "blue",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "About Sri Lanka", href: "/about-srilanka" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Search", href: "/search" },
      ]
    },
    {
      title: "Popular Destinations",
      icon: MapPin,
      color: "cyan",
      links: [
        { name: "Sigiriya Rock Fortress", href: "/destinations/sigiriya-rock-fortress" },
        { name: "Ella", href: "/destinations/ella" },
        { name: "Kandy", href: "/destinations/kandy" },
        { name: "Galle Fort", href: "/destinations/galle-fort" },
        { name: "Anuradhapura", href: "/destinations/anuradhapura" },
        { name: "Colombo City Tour", href: "/destinations/colombo-city-tour" },
        { name: "Adam's Peak", href: "/destinations/adams-peak" },
        { name: "Nuwara Eliya", href: "/destinations/nuwara-eliya" },
        { name: "Mirissa", href: "/destinations/mirissa" },
        { name: "Arugam Bay", href: "/destinations/arugambay" },
        { name: "View All Destinations", href: "/destinations" },
      ]
    },
    {
      title: "Explore Sri Lanka",
      icon: Map,
      color: "green",
      links: [
        { name: "UNESCO World Heritage Sites", href: "/explore/unesco-sites" },
        { name: "Cultural Tours", href: "/cultural-tours" },
        { name: "Wildlife & Safari", href: "/explore/wildlife-safari" },
        { name: "Beaches", href: "/explore/beaches" },
        { name: "Hill Country", href: "/explore/hill-country" },
        { name: "Ancient Cities", href: "/explore/ancient-cities" },
      ]
    },
    {
      title: "Activities & Experiences",
      icon: Camera,
      color: "purple",
      links: [
        { name: "Adventure Activities", href: "/adventure-activities" },
        { name: "Water Activities", href: "/water-activities" },
        { name: "Famous Cuisine", href: "/famous-cuisine" },
        { name: "Train Journeys", href: "/train-journeys" },
        { name: "Upcoming Events", href: "/upcoming-events" },
      ]
    },
    {
      title: "Tour Packages",
      icon: Users,
      color: "amber",
      links: [
        { name: "All Tours", href: "/tours" },
        { name: "8 Days 7 Nights Tour", href: "/tours/8-days-7-nights" },
        { name: "11 Days 10 Nights Tour", href: "/tours/11-days-10-nights" },
        { name: "Ramayana Trail 7 Days", href: "/tours/ramayana-trail-7-days" },
        { name: "Wildlife Adventure 6 Days", href: "/tours/wildlife-adventure-6-days" },
        { name: "Ayurveda Wellness 10 Days", href: "/tours/ayurveda-wellness-10-days" },
        { name: "Whale Watching Tour", href: "/tours/whale-watching" },
        { name: "Yala Safari Tour", href: "/tours/yala-safari" },
      ]
    },
    {
      title: "Travel Articles",
      icon: BookOpen,
      color: "pink",
      links: [
        { name: "All Articles", href: "/articles" },
        { name: "Sri Lanka Travel Guide", href: "/articles/sri-lanka-guide" },
        { name: "Top 10 Beaches in Sri Lanka", href: "/articles/top10-beaches-in-sri-lanka" },
        { name: "Top 10 Waterfalls", href: "/articles/top10-waterfalls-in-srilanka" },
        { name: "Famous Trails in Sri Lanka", href: "/articles/famous-trails-in-srilanka" },
        { name: "Wild Safari Parks", href: "/articles/wild-safari-parks-in-srilanka" },
        { name: "Sri Lankan Elephants", href: "/articles/sri-lankan-elephants" },
        { name: "Venomous Snakes in Sri Lanka", href: "/articles/venomous-snakes-in-srilanka" },
        { name: "Buddhism in Sri Lanka", href: "/articles/buddisam-in-srilanka" },
        { name: "Kandy Esala Perahera", href: "/articles/kandy-esela-perahara" },
        { name: "King Ravana", href: "/articles/king-ravana" },
        { name: "King Dutugamunu", href: "/articles/king-dutugamunu" },
        { name: "Ramayana Story", href: "/articles/ramayana-story-india-sri-lanka" },
        { name: "Basic Sinhala & Tamil Words", href: "/articles/basic-sinhala-tamil-words-usefull-when-traveling" },
      ]
    },
    {
      title: "Plan Your Trip",
      icon: Calendar,
      color: "indigo",
      links: [
        { name: "Plan Your Trip", href: "/plan-your-trip" },
        { name: "More About Sri Lanka", href: "/more-about-sri-lanka" },
      ]
    },
    {
      title: "Legal & Policies",
      icon: Shield,
      color: "slate",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Cookie Policy", href: "/cookies" },
      ]
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string; icon: string } } = {
      blue: { bg: "bg-blue-50 dark:bg-blue-950", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", icon: "text-blue-600" },
      cyan: { bg: "bg-cyan-50 dark:bg-cyan-950", text: "text-cyan-700 dark:text-cyan-300", border: "border-cyan-200 dark:border-cyan-800", icon: "text-cyan-600" },
      green: { bg: "bg-green-50 dark:bg-green-950", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800", icon: "text-green-600" },
      purple: { bg: "bg-purple-50 dark:bg-purple-950", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800", icon: "text-purple-600" },
      amber: { bg: "bg-amber-50 dark:bg-amber-950", text: "text-amber-700 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", icon: "text-amber-600" },
      pink: { bg: "bg-pink-50 dark:bg-pink-950", text: "text-pink-700 dark:text-pink-300", border: "border-pink-200 dark:border-pink-800", icon: "text-pink-600" },
      indigo: { bg: "bg-indigo-50 dark:bg-indigo-950", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", icon: "text-indigo-600" },
      slate: { bg: "bg-slate-50 dark:bg-slate-950", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-800", icon: "text-slate-600" },
    }
    return colors[color] || colors.blue
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Map className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Sitemap</h1>
          <p className="text-xl opacity-90 mb-6">Navigate all pages on Ceylanka Tours</p>
          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
            Complete Website Navigation
          </Badge>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Introduction */}
        <Card className="mb-12 border-l-4 border-l-blue-500 shadow-md">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to the Ceylanka Tours sitemap. Here you&apos;ll find links to all pages on our website, 
              organized by category for easy navigation. Explore destinations, read travel articles, discover 
              tour packages, and find useful information about traveling in Sri Lanka.
            </p>
          </CardContent>
        </Card>

        {/* Sitemap Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sitemapSections.map((section) => {
            const IconComponent = section.icon
            const colors = getColorClasses(section.color)
            
            return (
              <Card 
                key={section.title} 
                className={`shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${colors.border}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <h2 className={`text-xl font-bold ${colors.text}`}>
                      {section.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm py-1 hover:translate-x-1 duration-200"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')}`}></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Need Help Finding Something?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Explore Destinations</h3>
                <p className="text-sm text-muted-foreground">
                  Browse over 100+ destinations across Sri Lanka
                </p>
                <Link href="/destinations" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                  View All →
                </Link>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2">Read Articles</h3>
                <p className="text-sm text-muted-foreground">
                  In-depth travel guides and cultural insights
                </p>
                <Link href="/articles" className="text-cyan-600 hover:underline text-sm mt-2 inline-block">
                  Browse Articles →
                </Link>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Have questions? We&apos;re here to help
                </p>
                <Link href="/contact-us" className="text-green-600 hover:underline text-sm mt-2 inline-block">
                  Get in Touch →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Section */}
        <div className="text-center mt-12 p-8 bg-muted rounded-lg">
          <h3 className="text-xl font-bold mb-3">Looking for something specific?</h3>
          <p className="text-muted-foreground mb-4">Use our search feature to find exactly what you need</p>
          <Link href="/search">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
              Search Website
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
