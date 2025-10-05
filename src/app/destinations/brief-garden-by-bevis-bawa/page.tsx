import type { Metadata } from "next"
import Image from "next/image"
import { Clock, MapPin, Camera, AlertTriangle, Star, Calendar, Users, Leaf, Home, Palette } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: "Brief Garden by Bevis Bawa: Complete Guide 2025 | Sri Lanka's Hidden Paradise",
    description:
        "Explore Brief Garden, Bevis Bawa's masterpiece in Kalawila. A complete visitor guide with insider tips, photography spots, and rich history of this artistic tropical paradise.",
    keywords: "Brief Garden, Bevis Bawa, Sri Lanka gardens, Kalawila, tropical garden design, art collection, travel guide, tourism",
    authors: [{ name: "Garden Explorer" }],
    openGraph: {
        title: "Brief Garden by Bevis Bawa: Complete Guide 2025",
        description: "Discover the artistic paradise of Brief Garden, a hidden gem crafted by Bevis Bawa in Kalawila, Sri Lanka",
        type: "article",
        images: ["/brief-garden-main.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Brief Garden by Bevis Bawa: Complete Guide 2025",
        description: "Discover the artistic paradise of Brief Garden, a hidden gem crafted by Bevis Bawa in Kalawila, Sri Lanka",
    },
}

export default function BriefGardenGuide() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/Brief-Garden-by-Bawa.jpg"
                    alt="Enchanting entrance of Brief Garden showing lush tropical vegetation and artistic pathways"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Brief Garden</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">An Artistic Paradise by Bevis Bawa</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-yellow-600/80 text-white border-yellow-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            Kalawila, Sri Lanka
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                            <Home className="w-4 h-4 mr-1" />
                            Artistic Garden Estate
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-blue-600/80 text-white border-blue-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            Est. 1929
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 bg-green-600/80 text-white border-green-500">
                            <Palette className="w-4 h-4 mr-1" />
                            Tropical Art Garden
                        </Badge>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-gray-100">Welcome to Brief Garden: A Tropical Artist&apos;s Haven</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p className="text-lg mb-4">
                            Nestled in the serene village of Kalawila, Brief Garden stands as a testament to the artistic vision
                            of Bevis Bawa, the talented older brother of renowned architect Geoffrey Bawa. This enchanting 5-acre
                            paradise combines the lush abundance of Sri Lankan tropical vegetation with meticulously planned
                            artistic elements, creating what many consider to be one of Asia&apos;s most remarkable private gardens.
                        </p>
                        <p className="text-lg mb-4">
                            The name &quot;Brief&quot; comes from the garden&apos;s origins as a brief, or cinnamon estate, which Bevis Bawa
                            transformed over four decades into an extraordinary blend of Italian garden design principles and
                            tropical informality. As the former aide-de-camp to four British governors of Ceylon, Bevis brought
                            his exposure to European garden design and combined it with his innate artistic sensibility to create
                            something entirely unique.
                        </p>
                        <p className="text-lg mb-4">
                            Today, Brief Garden offers visitors a rare glimpse into Sri Lanka&apos;s artistic heritage, featuring not
                            only spectacular landscaping but also an impressive collection of art and sculptures. The garden houses
                            works by Donald Friend, who lived here in the 1950s, and numerous other artists who were drawn to
                            this creative haven, making it both a horticultural masterpiece and an open-air gallery.
                        </p>
                        <p className="text-lg">
                            As you explore Brief Garden, you&apos;ll discover intimate garden rooms, surprising vistas, and artistic
                            touches at every turn. From the famous moongate entrance to the collection of nude sculptures, each
                            element reflects Bevis Bawa&apos;s distinctive personality and his vision of creating a garden that would
                            be both a personal paradise and a celebration of artistic expression in nature.
                        </p>
                    </div>

                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 dark:border-amber-500 rounded-r-lg">
                        <div className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">Visitor Information</h4>
                                <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                                    <strong>Opening Hours:</strong> The garden is open daily from 8:00 AM to 5:00 PM. Last entry at 4:00 PM.
                                </p>
                                <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                                    <strong>Guided Tours:</strong> Available and recommended to fully appreciate the garden&apos;s history and hidden gems.
                                </p>
                                <p className="text-sm text-amber-800 dark:text-amber-200">
                                    <strong>Photography Policy:</strong> Photography is allowed throughout the garden. Please be mindful of other visitors.
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
                                Essential Information About Brief Garden
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            <strong>Established:</strong> 1929
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            <strong>Garden Size:</strong> 5 acres
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            <strong>Creator:</strong> Bevis Bawa
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            <strong>Location:</strong> Kalawila, Bentota
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Home className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            <strong>Type:</strong> Art Garden Estate
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            <strong>Visit Duration:</strong> 1.5-2 hours
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Getting There */}
                <section className="mb-12">
                    <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                How to Reach Brief Garden
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">From Colombo</h4>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>• <strong>Distance:</strong> 83 km (52 miles)</li>
                                        <li>• <strong>Duration:</strong> 2-2.5 hours</li>
                                        <li>• <strong>Route:</strong> Colombo → Kalutara → Aluthgama → Kalawila</li>
                                        <li>• <strong>Transport:</strong> Private car/taxi recommended</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">From Bentota</h4>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>• <strong>Distance:</strong> 7 km (4.3 miles)</li>
                                        <li>• <strong>Duration:</strong> 15-20 minutes</li>
                                        <li>• <strong>Transport:</strong> Tuk-tuk or taxi</li>
                                        <li>• <strong>Landmarks:</strong> Follow signs to Kalawila</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <p className="text-sm text-blue-900 dark:text-blue-100">
                                    <strong>💡 Travel Tip:</strong> The garden is somewhat hidden - look for the small signboard on
                                    the Dharga Town-Bentota Road. Most tuk-tuk drivers in Bentota know the location.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Garden Features */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-gray-100">Key Features of Brief Garden</h2>

                    <div className="grid gap-8">
                        {/* The Entrance and Moongate */}
                        <Card className="border-l-4 border-l-green-600 dark:border-l-green-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Home className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    The Iconic Moongate Entrance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-3 gap-4 mb-4">
                                    <Image
                                        src="/brief-garden-moongate.jpg"
                                        alt="The famous moongate entrance at Brief Garden showing its perfect circular design"
                                        width={300}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                    <Image
                                        src="/brief-garden-path.jpg"
                                        alt="A winding path through dense tropical foliage in Brief Garden"
                                        width={300}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                    <Image
                                        src="/brief-garden-stairs.jpg"
                                        alt="Stone steps leading through lush vegetation in Brief Garden"
                                        width={300}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    The journey through Brief Garden begins at its famous moongate, a perfectly circular opening
                                    that serves as both an entrance and a symbolic portal into Bevis Bawa&apos;s artistic world. This
                                    architectural feature, inspired by Chinese garden design, creates a dramatic first impression
                                    and frames the initial view of the garden&apos;s lush interior.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Design Elements</h4>
                                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                            <li>• Perfectly proportioned circular design</li>
                                            <li>• Local stone construction</li>
                                            <li>• Strategic placement for dramatic effect</li>
                                            <li>• Frames different views in each season</li>
                                            <li>• Integrated with surrounding vegetation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Best Photo Spots</h4>
                                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                            <li>• Front view of the moongate</li>
                                            <li>• Through the gate looking inward</li>
                                            <li>• Side angles showing depth</li>
                                            <li>• Early morning light effects</li>
                                            <li>• Framed garden views</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* The Art Collection */}
                        <Card className="border-l-4 border-l-purple-600 dark:border-l-purple-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    The Unique Art Collection
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Brief Garden houses an eclectic collection of art that reflects Bevis Bawa&apos;s passion for
                                    creativity and his connections with artists from around the world. The collection includes
                                    sculptures, paintings, and sketches, many created by artists who stayed at the garden,
                                    including the famous Australian artist Donald Friend.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Notable Artworks</h4>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            <li>• Donald Friend&apos;s sketches and paintings</li>
                                            <li>• Bevis Bawa&apos;s own artwork and sculptures</li>
                                            <li>• Collection of nude sculptures</li>
                                            <li>• Traditional Sri Lankan artifacts</li>
                                            <li>• Contemporary Asian art pieces</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Art Integration</h4>
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            <li>• Sculptures placed throughout gardens</li>
                                            <li>• Indoor gallery spaces</li>
                                            <li>• Architectural details as art</li>
                                            <li>• Natural features as frames</li>
                                            <li>• Integration with landscape design</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Garden Rooms and Design */}
                        <Card className="border-l-4 border-l-amber-600 dark:border-l-amber-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Leaf className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                    Garden Rooms and Landscape Design
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Brief Garden is designed as a series of interconnected outdoor rooms, each with its own
                                    character and purpose. This approach creates a journey of discovery, with surprising views
                                    and experiences around every corner. The design combines formal elements with the natural
                                    exuberance of tropical vegetation.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">The Japanese Garden</h4>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            A serene space featuring elements of Japanese garden design adapted to tropical plants,
                                            creating a unique fusion of Eastern and Western garden traditions.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">The Water Garden</h4>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            Featuring reflecting pools and water features that create a cooling atmosphere and add
                                            another dimension to the garden experience.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">The Secret Garden</h4>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            A hidden space accessed through narrow paths, offering intimate encounters with rare
                                            plants and unexpected art installations.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Best Time to Visit */}
                <section className="mb-12">
                    <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                                <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                Best Time to Visit Brief Garden
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-amber-900 dark:text-amber-100">Seasonal Considerations</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <h5 className="font-medium text-amber-800 dark:text-amber-200">December - March</h5>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                Dry season with perfect weather. Gardens are well-maintained and all paths are easily accessible.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-amber-800 dark:text-amber-200">April - November</h5>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                Intermittent rains make the garden lush and vibrant. Morning visits recommended to avoid afternoon showers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-amber-900 dark:text-amber-100">Daily Timing</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <h5 className="font-medium text-amber-800 dark:text-amber-200">Morning (8:00 - 11:00 AM)</h5>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                Best light for photography, cooler temperatures, and more active wildlife.
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-amber-800 dark:text-amber-200">Late Afternoon (3:00 - 5:00 PM)</h5>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                Beautiful golden hour light perfect for capturing the garden&apos;s magical atmosphere.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Photography Tips */}
                <section className="mb-12">
                    <Card className="border-pink-200 dark:border-pink-800 bg-pink-50/30 dark:bg-pink-950/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-pink-900 dark:text-pink-100">
                                <Camera className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                                Photography Guide for Brief Garden
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-100">Best Photo Locations</h4>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>• <strong>Moongate:</strong> Iconic circular entrance</li>
                                        <li>• <strong>Japanese Garden:</strong> Zen composition shots</li>
                                        <li>• <strong>Water Features:</strong> Reflections and symmetry</li>
                                        <li>• <strong>Art Collection:</strong> Sculptures in natural settings</li>
                                        <li>• <strong>Secret Paths:</strong> Natural framing opportunities</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-pink-900 dark:text-pink-100">Photography Tips</h4>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>• Visit early morning for best light</li>
                                        <li>• Bring a wide-angle lens for garden rooms</li>
                                        <li>• Use overcast days for even lighting</li>
                                        <li>• Look for natural frames in vegetation</li>
                                        <li>• Capture details of art installations</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
