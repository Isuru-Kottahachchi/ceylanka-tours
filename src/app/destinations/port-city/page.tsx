import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Star, Users, Building, Camera, AlertTriangle, CheckCircle, Car, Ship, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Port City Colombo: Complete Travel Guide 2025 | Modern Wonder of Sri Lanka",
  description:
    "Discover Port City Colombo, Sri Lanka&apos;s newest urban marvel. Complete travel guide with attractions, dining, shopping, best time to visit, and everything you need to know for an amazing experience.",
  keywords: "Port City Colombo, Sri Lanka travel, modern attractions, urban development, travel guide, tourism, shopping, dining",
  authors: [{ name: "Travel Explorer" }],
  openGraph: {
    title: "Port City Colombo: Complete Travel Guide 2025",
    description: "Explore Port City Colombo - Sri Lanka&apos;s modern urban marvel with world-class attractions, dining, and entertainment.",
    images: ["/port-city-colombo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Port City Colombo: Complete Travel Guide 2025",
    description: "Discover Port City Colombo - a modern urban destination in Sri Lanka",
  },
}

export default function PortCityTravelGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.jpg"
          alt="Port City Colombo skyline showing modern buildings and waterfront development"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Port City Colombo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Sri Lanka&apos;s Modern Urban Marvel by the Sea
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Building className="w-4 h-4 mr-1" />
              Modern Development
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Ship className="w-4 h-4 mr-1" />
              Waterfront District
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <ShoppingBag className="w-4 h-4 mr-1" />
              Shopping & Dining Hub
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Port City Colombo: The Future is Here</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-4">
              Step into the future at Port City Colombo, Sri Lanka&apos;s newest and most ambitious urban development project! 
              Built on 269 hectares of reclaimed land from the Indian Ocean, this modern marvel represents the new face of 
              Colombo with gleaming skyscrapers, luxury shopping centers, world-class restaurants, and stunning waterfront views.
            </p>
            <p className="text-lg mb-4">
              Port City Colombo is not just a destination - it&apos;s a complete lifestyle experience that combines the best 
              of modern urban living with Sri Lankan hospitality. Whether you&apos;re interested in luxury shopping, fine dining, 
              entertainment, or simply enjoying breathtaking ocean views, this futuristic district has something special for everyone.
            </p>
            <p className="text-lg mb-4">
              What makes Port City truly unique is how it seamlessly blends cutting-edge architecture with sustainable development. 
              The district features smart city technologies, green building designs, and innovative urban planning that makes it 
              a model for modern city development in South Asia.
            </p>
            <p className="text-lg">
              From luxury hotels and residential towers to entertainment complexes and business districts, Port City offers 
              visitors a glimpse into Sri Lanka&apos;s exciting future while providing all the amenities and experiences you&apos;d 
              expect from a world-class urban destination.
            </p>
          </div>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-400 dark:border-blue-600 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Development Notice</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  <strong>Ongoing Development:</strong> Port City is still under active development. Some areas and attractions 
                  may have limited access or be under construction. Always check current status before visiting.
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  New attractions, restaurants, and facilities are constantly opening, making each visit a new experience!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Quick Facts About Port City Colombo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>
                      <strong>Development Started:</strong> 2014
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>
                      <strong>Area:</strong> 269 hectares (665 acres)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-purple-500" />
                    <span>
                      <strong>Type:</strong> Mixed-use development
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>
                      <strong>Developer:</strong> China Harbour Engineering Company
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Ship className="w-4 h-4 text-cyan-500" />
                    <span>
                      <strong>Location:</strong> Reclaimed land from Indian Ocean
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span>
                      <strong>Visit Duration:</strong> Half day to full day
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-indigo-500" />
                    <span>
                      <strong>From Colombo Fort:</strong> 10-15 minutes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-pink-500" />
                    <span>
                      <strong>Best For:</strong> Modern architecture & dining
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Get In */}
        <section className="mb-12">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <MapPin className="w-5 h-5" />
                How to Get to Port City Colombo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">From Colombo City (Recommended)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Distance:</strong> 3-5 km from city center</li>
                    <li>• <strong>Duration:</strong> 10-20 minutes depending on traffic</li>
                    <li>• <strong>Cost:</strong> $3-8 USD by taxi/rideshare</li>
                    <li>• <strong>Best option:</strong> Most convenient and quick</li>
                  </ul>
                  <div className="mt-3 p-3 bg-orange-100 dark:bg-slate-700 rounded-md border-l-4 border-orange-500 dark:border-orange-400">
                    <p className="text-xs text-orange-800 dark:text-orange-200 mb-2">
                      <strong>🌟 Recommended:</strong> <span className="font-semibold">Ceylanka Tours</span> offers convenient Port City transfers and guided tours with comfortable vehicles and local expertise for the best urban exploration experience.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-orange-800 dark:text-orange-200">
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <span><strong>Contact:</strong> +94 77 123 4567</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🏙️</span>
                        <span><strong>City Tours</strong> - Modern Colombo exploration</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Transportation Options</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm">From Airport (BIA)</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Distance:</strong> 35km (22 miles)</li>
                        <li>• <strong>Duration:</strong> 45-60 minutes</li>
                        <li>• <strong>Cost:</strong> $15-25 USD taxi</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Public Transport</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Bus:</strong> Multiple routes from Colombo</li>
                        <li>• <strong>Cost:</strong> $0.50-1 USD</li>
                        <li>• <strong>Rideshare:</strong> Uber, PickMe available</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Walking</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>From Galle Face:</strong> 15-20 minute walk</li>
                        <li>• <strong>From Fort:</strong> 20-25 minute walk</li>
                        <li>• <strong>Route:</strong> Scenic waterfront pathway</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Pro Tip:</strong> Visit during sunset for the best photography and dining experience. The waterfront comes alive in the evening with stunning views and vibrant nightlife.
                </p>
              </div>
              <div className="mt-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h5 className="font-medium text-blue-800 dark:text-blue-200">Entry Fee</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-300">FREE access to public areas</p>
                    <p className="text-xs text-muted-foreground">Individual attractions may charge</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <h5 className="font-medium text-green-800 dark:text-green-200">Opening Hours</h5>
                    <p className="text-sm text-green-600 dark:text-green-300">24/7 public areas</p>
                    <p className="text-xs text-muted-foreground">Shops & restaurants vary</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <h5 className="font-medium text-purple-800 dark:text-purple-200">Best Time</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-300">Evening & night</p>
                    <p className="text-xs text-muted-foreground">Great views & atmosphere</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 728x90 Leaderboard]
        </div>

        {/* Things to Do */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Things to Do in Port City Colombo</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Shopping & Retail Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Port City features world-class shopping centers with international brands, local boutiques, and luxury retailers. 
                    The modern malls offer everything from high-end fashion to electronics and souvenirs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Shopping Highlights:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Modern shopping malls with international brands</li>
                        <li>• Duty-free shopping opportunities</li>
                        <li>• Local designer boutiques and galleries</li>
                        <li>• Electronics and tech stores</li>
                        <li>• Souvenir shops with authentic Sri Lankan items</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What to Buy:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Ceylon tea and spices</li>
                        <li>• Handcrafted jewelry and gems</li>
                        <li>• Designer clothing and accessories</li>
                        <li>• Local art and handicrafts</li>
                        <li>• Modern tech gadgets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Dining & Culinary Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Experience world-class dining with restaurants offering everything from authentic Sri Lankan cuisine to 
                    international fine dining. The waterfront location provides stunning views to accompany your meals.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Dining Options:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Fine dining restaurants with ocean views</li>
                        <li>• Casual cafes and coffee shops</li>
                        <li>• International cuisine (Chinese, Indian, Western)</li>
                        <li>• Authentic Sri Lankan restaurants</li>
                        <li>• Rooftop bars and lounges</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Must-Try Foods:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Fresh seafood with harbor views</li>
                        <li>• Traditional rice and curry</li>
                        <li>• Hoppers and string hoppers</li>
                        <li>• International fusion cuisine</li>
                        <li>• Craft cocktails and local arrack</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Architecture & Sightseeing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Marvel at the cutting-edge architecture and urban planning that makes Port City a model for modern 
                    development. The district showcases innovative building designs and sustainable city planning.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Architectural Highlights:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Modern skyscrapers and towers</li>
                        <li>• Innovative sustainable building designs</li>
                        <li>• Waterfront promenades and walkways</li>
                        <li>• Contemporary urban landscaping</li>
                        <li>• Smart city technology integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Photo Opportunities:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Skyline views from waterfront</li>
                        <li>• Modern architecture against ocean backdrop</li>
                        <li>• Sunset views over the Indian Ocean</li>
                        <li>• Urban landscape photography</li>
                        <li>• Night photography of illuminated buildings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Water Sports & Adventure Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Take advantage of Port City&apos;s unique waterfront location with exciting water sports and adventure activities. 
                    The protected waters and modern facilities make it perfect for both beginners and experienced adventurers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Water Sports:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>Kayaking:</strong> Guided tours around the harbor</li>
                        <li>• <strong>Stand-up Paddleboarding:</strong> Calm water experiences</li>
                        <li>• <strong>Jet Skiing:</strong> High-speed water adventures</li>
                        <li>• <strong>Sailing:</strong> Sunset sailing trips available</li>
                        <li>• <strong>Fishing Charters:</strong> Deep sea and harbor fishing</li>
                        <li>• <strong>Boat Tours:</strong> Scenic harbor and coastline tours</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Land Adventures:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• <strong>4WD City Tours:</strong> Urban exploration adventures</li>
                        <li>• <strong>Beach Driving:</strong> Coastal 4WD experiences</li>
                        <li>• <strong>Cycling Tours:</strong> Guided bike tours of the district</li>
                        <li>• <strong>Walking Tours:</strong> Architecture and history tours</li>
                        <li>• <strong>Photography Tours:</strong> Professional guided shoots</li>
                        <li>• <strong>Segway Tours:</strong> Modern way to explore the area</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-400 dark:border-cyan-600 rounded-r-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-cyan-800 dark:text-cyan-400 mb-2">Adventure Booking Information</h4>
                        <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-2">
                          <strong>Advance Booking Recommended:</strong> Water sports and 4WD tours are popular and can fill up quickly, 
                          especially during weekends and holidays. Book at least 24-48 hours in advance.
                        </p>
                        <p className="text-sm text-cyan-700 dark:text-cyan-300">
                          <strong>Ceylanka Tours</strong> offers comprehensive adventure packages combining water sports with 4WD exploration 
                          for the ultimate Port City experience. Professional guides and safety equipment included.
                        </p>
                        <div className="mt-2 flex flex-col gap-1 text-xs text-cyan-700 dark:text-cyan-300">
                          <div className="flex items-center gap-2">
                            <span>🚗</span>
                            <span><strong>4WD Tours:</strong> $45-75 USD per person (2-4 hours)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>🚣</span>
                            <span><strong>Kayaking:</strong> $25-40 USD per person (1-2 hours)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span><strong>Contact:</strong> +94 77 123 4567 for adventure bookings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Entertainment & Nightlife */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Entertainment & Nightlife</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Evening Entertainment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Nightlife Options:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Rooftop bars with ocean views</li>
                      <li>• Nightclubs and entertainment venues</li>
                      <li>• Live music and cultural performances</li>
                      <li>• Casino and gaming facilities</li>
                      <li>• Night markets and evening shopping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Family Activities:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Waterfront walking and cycling paths</li>
                      <li>• Interactive fountains and water features</li>
                      <li>• Children&apos;s play areas and parks</li>
                      <li>• Educational exhibits about development</li>
                      <li>• Evening cultural shows and events</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Best Time to Visit Port City Colombo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Time of Day:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Morning (8-11 AM):</strong> Cool weather, good for walking</li>
                    <li>• <strong>Afternoon (2-5 PM):</strong> Shopping and indoor activities</li>
                    <li>• <strong>Evening (5-8 PM):</strong> Perfect for dining and sunset views</li>
                    <li>• <strong>Night (8 PM onwards):</strong> Vibrant nightlife and entertainment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Seasonal Considerations:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Dec-Mar:</strong> Dry season, ideal weather</li>
                    <li>• <strong>Apr-Jun:</strong> Hot but manageable, indoor activities</li>
                    <li>• <strong>Jul-Sep:</strong> Monsoon season, covered areas preferred</li>
                    <li>• <strong>Oct-Nov:</strong> Pleasant weather returns</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practical Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">General Visit:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Comfortable walking shoes</li>
                      <li>• Light, breathable clothing</li>
                      <li>• Sunscreen and hat for outdoor areas</li>
                      <li>• Camera for architecture photography</li>
                      <li>• Credit cards (widely accepted)</li>
                      <li>• Light jacket for air-conditioned spaces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">For Adventure Activities:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Swimwear and quick-dry clothing for water sports</li>
                      <li>• Waterproof phone case or camera</li>
                      <li>• Extra change of clothes</li>
                      <li>• Non-slip water shoes or sandals</li>
                      <li>• Towel (some operators provide)</li>
                      <li>• Reef-safe sunscreen for water activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facilities & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free WiFi in most areas</li>
                  <li>• Modern restroom facilities</li>
                  <li>• ATMs and currency exchange</li>
                  <li>• Parking facilities available</li>
                  <li>• Information centers and maps</li>
                  <li>• Accessibility features for disabled visitors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/destinations/galle-fort" className="group">
              <Card className="transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-blue-600 group-hover:text-blue-800">Galle Face Green</h3>
                  <p className="text-sm text-muted-foreground">
                    Historic oceanfront promenade perfect for evening walks and local food.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 inline mr-1" />
                    5 minutes walk
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/destinations/colombo-fort" className="group">
              <Card className="transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-blue-600 group-hover:text-blue-800">Colombo Fort</h3>
                  <p className="text-sm text-muted-foreground">
                    Historic colonial district with heritage buildings and shopping areas.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 inline mr-1" />
                    15 minutes drive
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/destinations/pettah" className="group">
              <Card className="transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-blue-600 group-hover:text-blue-800">Pettah Market</h3>
                  <p className="text-sm text-muted-foreground">
                    Bustling traditional market for authentic local shopping experience.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 inline mr-1" />
                    20 minutes drive
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Ad Banner Space */}
        <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600">
          [Advertisement Space - 300x250 Medium Rectangle]
        </div>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <Star className="w-5 h-5" />
                Your Port City Colombo Adventure Awaits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-300 mb-4">
                Port City Colombo represents the exciting future of Sri Lankan urban development, offering visitors 
                a unique blend of modern amenities, world-class dining, luxury shopping, and stunning waterfront views. 
                Whether you&apos;re interested in architecture, cuisine, entertainment, or simply experiencing the newest 
                face of Colombo, this dynamic district promises an unforgettable urban adventure.
              </p>
              <p className="text-muted-foreground dark:text-gray-300">
                Plan your visit to coincide with the sunset for the most magical experience, and don&apos;t forget to 
                explore the diverse dining and entertainment options that make Port City a true 24/7 destination. 
                Welcome to the future of Sri Lankan hospitality! 🏙️✨🌊
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}